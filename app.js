console.log('App script starting...');

// --- CLOUD SYNC SETTINGS (FIREBASE) ---
// 1. Create a free project at https://console.firebase.google.com/
// 2. Add a 'Web App' to your Firebase project and copy the config object here
// 3. In Firebase left menu, go to Build > Realtime Database > Create Database
// 4. In Realtime Database 'Rules' tab, set read and write to "true" (for testing)
// 5. Change ENABLE_CLOUD_SYNC to true
const ENABLE_CLOUD_SYNC = true;
const firebaseConfig = {
    apiKey: "AIzaSyDE8zu9Nq76fusDV2vKPDXsq9RG0ncdEkQ",
    authDomain: "quotation-d7c3f.firebaseapp.com",
    databaseURL: "https://quotation-d7c3f-default-rtdb.firebaseio.com",
    projectId: "quotation-d7c3f",
    storageBucket: "quotation-d7c3f.firebasestorage.app",
    messagingSenderId: "682651960593",
    appId: "1:682651960593:web:ea5e774f25e0b445f2b8b0"
};

if (ENABLE_CLOUD_SYNC && typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// --------------------------------------

window.app = {
    data: {
        documents: [],
        clients: [],
        settings: {
            companyName: "Eantrax",
            address: "123 Tech Park, AI Valley",
            email: "contact@eantrax.com",
            phone: "+1 (555) 123-4567",
            currency: "₹",
            taxRate: 18,
            nextQuoteId: 1001,
            nextInvoiceId: 5001,
            logoUrl: "logo.png",
            website: "www.eantrax.com",
            tagline: "Quotation",
            bankDetails: "UPI ID: easwarbaskar25@okaxis\nBank: HDFC Bank\nIFSC: HDFC0001234",
            terms: "1. Warranty: 30 days technical support after deployment.\n2. IP Rights: Ownership transfers to client only after full payment.\n3. Jurisdication: All disputes are subject to local jurisdiction.",
            validity: 30,
            advanceClause: "",
            brandColor: "#3b82f6",
            signatureUrl: "signature.jpg",
            paymentQrUrl: "qr.jpg"
        },
        catalog: [
            {
                name: "Basic Static Website Development",
                price: 7500,
                scope: "• 5 Pages (Home, About Us, Products, Infrastructure, Contact)\n• Mobile Responsive Design\n• Contact Enquiry Form (Email Integration)\n• WhatsApp Chat Button\n• Google Maps Integration\n• Basic On-Page SEO Setup\n• 2 Revision Rounds",
                exclusions: "• Domain Registration\n• Hosting Charges\n• Business Email Setup\n• Product Catalogue PDF Creation\n• Logo Design\n• Content Writing (If not provided)\n• Additional Pages Beyond 5\n• Dynamic/Admin Panel Features",
                paymentTerms: "• 50% Advance to Initiate Project\n• 50% Before Final Deployment",
                timeline: "7–10 working days"
            },
            { name: "Domain + Hosting Setup (1 Year)", price: 3000 },
            { name: "Business Email Setup", price: 1000 },
            { name: "Annual Maintenance", price: 3500 },
            { name: "Basic SEO Setup (Advanced)", price: 4000 }
        ]
    },
    chartTimeframe: 'month',
    charts: {},

    init() {
        this.loadData();

        // Force update logo for Eantrax branding if missing or old format
        if (!this.data.settings.logoUrl || this.data.settings.logoUrl === "" || this.data.settings.logoUrl === "null" || this.data.settings.logoUrl === "logo.jpg") {
            this.data.settings.logoUrl = "logo.png";
        }

        // Branding Migration for existing users
        if (this.data.settings.brandColor === "#0f172a") {
            this.data.settings.brandColor = "#3b82f6";
        }
        if (this.data.settings.tagline === "Web Solutions") {
            this.data.settings.tagline = "Quotation";
        }
        if (this.data.settings.companyName === "Eantrax Web Solutions") {
            this.data.settings.companyName = "Eantrax";
        }
        if (this.data.settings.terms.includes("Advance payment is required")) {
            this.data.settings.terms = "1. Warranty: 30 days technical support after deployment.\n2. IP Rights: Ownership transfers to client only after full payment.\n3. Jurisdication: All disputes are subject to local jurisdiction.";
        }

        // Force update signature for existing users if missing
        if (!this.data.settings.signatureUrl || this.data.settings.signatureUrl === "") {
            this.data.settings.signatureUrl = "signature.jpg";
        }

        // Force Sync specific Catalog items with the new details
        const mainService = this.data.catalog.find(p => p.name.includes("Basic Static Website"));
        if (mainService) {
            // Update default QR for existing users if it was the old value
            if (this.data.settings.paymentQrUrl === "upi_qr.png") {
                this.data.settings.paymentQrUrl = "qr.jpg";
            }

            mainService.scope = "• 5 Pages (Home, About Us, Products, Infrastructure, Contact)\n• Mobile Responsive Design\n• Contact Enquiry Form (Email Integration)\n• WhatsApp Chat Button\n• Google Maps Integration\n• Basic On-Page SEO Setup\n• 2 Revision Rounds";
            mainService.exclusions = "• Domain Registration\n• Hosting Charges\n• Business Email Setup\n• Product Catalogue PDF Creation\n• Logo Design\n• Content Writing (If not provided)\n• Additional Pages Beyond 5\n• Dynamic/Admin Panel Features";
            mainService.paymentTerms = "50% Advance to Initiate Project\n50% Before Final Deployment\n\nProject starts only after advance confirmation.";
            mainService.timeline = "7–10 working days (Subject to receiving all required content)";
        }

        this.saveData();
        console.log("Applying settings with logo:", this.data.settings.logoUrl);
        this.applySettings();
        this.setupNavigation();
        this.renderDashboard();
        this.setupFormListeners();

        // Set default date
        const dateInput = document.getElementById('doc-date');
        if (dateInput) dateInput.valueAsDate = new Date();

        // Initial currency update for the form
        this.calculateTotals();

        // Check renewal reminders on startup (delayed so UI is ready)
        setTimeout(() => this.checkRenewalReminders(), 1200);

        // Hide splash screen after a minimum viewing time
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.classList.add('splash-hidden');
                setTimeout(() => splash.remove(), 600); // Remove from DOM after fade animation
            }
        }, 3000);
    },

    applySettings() {
        const s = this.data.settings;

        // Update Brand Colors
        if (s.brandColor) {
            document.documentElement.style.setProperty('--secondary-color', s.brandColor);
            document.documentElement.style.setProperty('--accent-color', s.brandColor + 'EE');
        }

        // Sidebar Logo
        const sidebarLogo = document.getElementById('sidebar-logo');
        const sidebarIcon = document.getElementById('sidebar-icon');
        if (sidebarLogo && s.logoUrl) {
            sidebarLogo.src = s.logoUrl;
            sidebarLogo.style.display = 'block';
            if (sidebarIcon) sidebarIcon.style.display = 'none';
        } else if (sidebarIcon) {
            sidebarIcon.style.display = 'block';
            if (sidebarLogo) sidebarLogo.style.display = 'none';
        }
        // Sidebar Text
        const sidebarName = document.getElementById('sidebar-company-name');
        const sidebarTag = document.getElementById('sidebar-tagline');

        if (sidebarName) {
            if (s.logoUrl) {
                sidebarName.style.display = 'none';
            } else {
                sidebarName.style.display = 'block';
                sidebarName.textContent = s.companyName || "Eantrax";
            }
        }

        if (sidebarTag) sidebarTag.textContent = s.tagline || "Quotation";
    },

    loadData() {
        this.loadDataFromLocal();

        if (typeof ENABLE_CLOUD_SYNC !== 'undefined' && ENABLE_CLOUD_SYNC && typeof firebase !== 'undefined') {
            const dbRef = firebase.database().ref('eantrax_data');
            dbRef.once('value', (snapshot) => {
                const cloudData = snapshot.val();
                if (cloudData) {
                    console.log("Cloud data loaded successfully.");
                    this.data = cloudData;
                    // Trigger UI updates
                    this.applySettings();
                    this.renderDashboard();

                    if (!document.getElementById('invoices').classList.contains('hidden')) {
                        this.renderDocumentsList();
                    }
                    if (!document.getElementById('clients').classList.contains('hidden')) {
                        this.renderClientList();
                    }
                    if (!document.getElementById('catalog').classList.contains('hidden')) {
                        this.renderCatalogList();
                    }
                } else {
                    console.log("No cloud data found. Uploading local data to cloud.");
                    this.saveData(); // Will sync to cloud
                }
            }).catch(error => console.error("Firebase read error:", error));
        }
    },

    loadDataFromLocal() {
        const savedData = localStorage.getItem('eantrax_data');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                // Merge to ensure structure
                this.data = {
                    documents: parsed.documents || [],
                    clients: parsed.clients || [],
                    catalog: parsed.catalog || [],
                    settings: { ...this.data.settings, ...(parsed.settings || {}) }
                };
            } catch (e) {
                console.error("Data load error", e);
                // Fallback to defaults if parse fails
            }
        } else {
            // Seed mock data if empty
            this.data.documents.push(
                {
                    id: 'QT-1001',
                    type: 'quotation',
                    date: new Date().toISOString().split('T')[0],
                    client: { name: 'Sample Manufacturing Co.', email: 'factory@example.com', phone: '+91 98765 43210', address: 'Plot No. 45, Industrial Estate' },
                    items: [
                        { desc: 'Website Design & Development', qty: 1, price: 7500 }
                    ],
                    totals: { subtotal: 7500, taxAmount: 0, discount: 0, grandTotal: 7500 },
                    scope: "• 5 Pages (Home, About Us, Products, Infrastructure, Contact)\n• Mobile Responsive Design\n• Contact Enquiry Form (Email Integration)\n• WhatsApp Chat Button\n• Google Maps Integration\n• Basic On-Page SEO Setup\n• 2 Revision Rounds",
                    exclusions: "• Domain Registration\n• Hosting Charges\n• Business Email Setup\n• Product Catalogue PDF Creation\n• Logo Design\n• Additional Pages Beyond 5\n• Dynamic/Admin Panel Features",
                    paymentTerms: "50% Advance to Initiate Project\n50% Before Final Deployment",
                    timeline: "7–10 working days",
                    status: 'draft',
                    created_at: new Date().toISOString()
                }
            );
        }
    },

    saveData() {
        // ALWAYS save to local storage as an offline backup
        localStorage.setItem('eantrax_data', JSON.stringify(this.data));

        // Push to cloud if enabled
        if (typeof ENABLE_CLOUD_SYNC !== 'undefined' && ENABLE_CLOUD_SYNC && typeof firebase !== 'undefined') {
            firebase.database().ref('eantrax_data').set(this.data)
                .catch(error => console.error("Firebase write error:", error));
        }
    },

    setupNavigation() {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-target');
                this.navigateTo(targetId);
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    },

    navigateTo(targetId) {
        console.log('Navigating to:', targetId);
        document.querySelectorAll('.view-section').forEach(section => {
            section.classList.add('hidden');
        });

        const target = document.getElementById(targetId);
        if (target) {
            target.classList.remove('hidden');
            try {
                if (targetId === 'dashboard') this.renderDashboard();
                if (targetId === 'invoices') { this.renderDocumentsList(); this.checkRenewalReminders(); }
                if (targetId === 'create-quote') this.resetForm();
                if (targetId === 'clients') this.renderClientList();
                if (targetId === 'catalog') this.renderCatalogList();
                if (targetId === 'settings') this.loadSettingsForm();

                target.classList.add('animate-in');
                setTimeout(() => target.classList.remove('animate-in'), 500);

                // Close sidebar on mobile after navigation
                this.closeSidebar();

            } catch (error) {
                console.error('Error rendering view:', targetId, error);
                this.showToast('View Error', 'Failed to load the requested section.', 'error');
            }
        } else {
            console.error('Target view not found:', targetId);
        }
    },

    toggleDocType() {
        const type = document.getElementById('doc-type').value;
        const numberField = document.getElementById('doc-number');
        const label = document.getElementById('doc-number-label');

        if (type === 'quotation') {
            label.textContent = 'Quotation #';
            numberField.value = 'QT-' + this.data.settings.nextQuoteId;
        } else {
            label.textContent = 'Invoice #';
            numberField.value = 'INV-' + this.data.settings.nextInvoiceId;
        }
    },

    resetForm() {
        document.getElementById('quote-form').reset();
        document.getElementById('items-body').innerHTML = '';
        this.addItem();
        this.toggleDocType();
        document.getElementById('doc-date').valueAsDate = new Date();
        document.getElementById('tax-rate').value = this.data.settings.taxRate || 0;

        // Update Static Company Display
        const s = this.data.settings;
        document.getElementById('company-name-display').textContent = s.companyName;
        document.getElementById('company-address-display').textContent = s.address;
        document.getElementById('company-contact-display').textContent = `${s.email} | ${s.phone}`;

        // Populate client datalist
        const clientDatalist = document.getElementById('client-list');
        if (clientDatalist && this.data.clients) {
            clientDatalist.innerHTML = '';
            this.data.clients.forEach(client => {
                const option = document.createElement('option');
                option.value = client.name;
                clientDatalist.appendChild(option);
            });
        }

        // Populate catalog datalist
        const catalogDatalist = document.getElementById('catalog-list');
        if (catalogDatalist && this.data.catalog) {
            catalogDatalist.innerHTML = '';
            this.data.catalog.forEach(item => {
                const option = document.createElement('option');
                option.value = item.name;
                catalogDatalist.appendChild(option);
            });
        }

        document.getElementById('doc-scope').value = '';
        document.getElementById('doc-exclusions').value = '';
        document.getElementById('doc-payment-terms').value = '';
        document.getElementById('doc-timeline').value = '';
        const expenseEl = document.getElementById('doc-expense');
        if (expenseEl) expenseEl.value = '';

        // Reset GST checkbox to enabled
        const taxEnableEl = document.getElementById('tax-enable');
        const taxRateEl = document.getElementById('tax-rate');
        if (taxEnableEl) taxEnableEl.checked = true;
        if (taxRateEl) { taxRateEl.disabled = false; taxRateEl.style.opacity = '1'; }

        this.calculateTotals();
    },

    addItem() {
        const tbody = document.getElementById('items-body');
        const row = document.createElement('tr');
        row.className = 'item-row';
        const currency = this.data.settings.currency || '₹';
        row.innerHTML = `
            <td>
                <input type="text" class="form-control item-desc" placeholder="Service/Product Description" required list="catalog-list" onchange="app.handleItemCatalogChange(this)">
                <span class="item-recurring-badge" style="display:none; font-size:0.68rem; color:#7c3aed; background:#ede9fe; padding:2px 7px; border-radius:10px; margin-top:3px; display:none;">🔄 <span class="item-recurring-label">Annual</span> Renewal</span>
                <input type="hidden" class="item-recurring" value="">
                <input type="hidden" class="item-recurring-period" value="">
            </td>
            <td><input type="number" class="form-control item-qty" value="1" min="1" onchange="app.calculateTotals()"></td>
            <td><input type="number" class="form-control item-price" value="0" min="0" step="0.01" onchange="app.calculateTotals()"></td>
            <td class="item-total">${currency}0.00</td>
            <td><button type="button" class="btn btn-outline" style="color: var(--danger-color); border-color: var(--danger-color)" onclick="this.closest('tr').remove(); app.calculateTotals()"><i class="fa-solid fa-trash"></i></button></td>
        `;
        tbody.appendChild(row);
    },

    toggleTax() {
        const enabled = document.getElementById('tax-enable').checked;
        const taxInput = document.getElementById('tax-rate');
        const badge = document.getElementById('gst-na-badge');
        if (!enabled) {
            taxInput.value = 0;
            taxInput.disabled = true;
            taxInput.style.opacity = '0.4';
            if (badge) badge.style.display = 'inline';
        } else {
            taxInput.disabled = false;
            taxInput.style.opacity = '1';
            taxInput.value = this.data.settings.taxRate || 0;
            if (badge) badge.style.display = 'none';
        }
        this.calculateTotals();
    },

    calculateTotals() {
        let subtotal = 0;
        const rows = document.querySelectorAll('#items-body tr');

        rows.forEach(row => {
            const qty = parseFloat(row.querySelector('.item-qty').value) || 0;
            const price = parseFloat(row.querySelector('.item-price').value) || 0;
            const total = qty * price;
            // Use currency from settings
            row.querySelector('.item-total').textContent = this.data.settings.currency + total.toFixed(2);
            subtotal += total;
        });

        const taxEnabled = document.getElementById('tax-enable').checked;
        const taxRate = taxEnabled ? (parseFloat(document.getElementById('tax-rate').value) || 0) : 0;
        const discount = parseFloat(document.getElementById('discount-amount').value) || 0;

        const taxAmount = subtotal * (taxRate / 100);
        const grandTotal = subtotal + taxAmount - discount;
        const half = grandTotal / 2;
        const currency = this.data.settings.currency;

        document.getElementById('subtotal').textContent = currency + subtotal.toFixed(2);
        document.getElementById('grand-total').textContent = currency + grandTotal.toFixed(2);

        // Update payment schedule display
        const startEl = document.getElementById('pay-half-start');
        const liveEl = document.getElementById('pay-half-live');
        if (startEl) startEl.textContent = currency + half.toFixed(2);
        if (liveEl) liveEl.textContent = currency + half.toFixed(2);

        return { subtotal, taxAmount, taxEnabled, discount, grandTotal, advance: 0, balance: grandTotal };
    },

    handleItemCatalogChange(input) {
        const val = input.value.toLowerCase().trim();
        // Smart match: Check if the selection name includes our catalog name or vice versa
        const product = this.data.catalog.find(p =>
            p.name.toLowerCase() === val ||
            val.includes(p.name.toLowerCase()) ||
            p.name.toLowerCase().includes(val)
        );

        if (product) {
            const row = input.closest('tr');
            row.querySelector('.item-price').value = product.price;

            // Handle recurring flag
            const badge = row.querySelector('.item-recurring-badge');
            const recurringInput = row.querySelector('.item-recurring');
            const recurringPeriodInput = row.querySelector('.item-recurring-period');
            const recurringLabel = row.querySelector('.item-recurring-label');
            if (product.isRecurring) {
                recurringInput.value = 'true';
                recurringPeriodInput.value = product.recurringPeriod || 'Annually';
                if (recurringLabel) recurringLabel.textContent = product.recurringPeriod || 'Annually';
                if (badge) badge.style.display = 'inline-block';
            } else {
                recurringInput.value = '';
                recurringPeriodInput.value = '';
                if (badge) badge.style.display = 'none';
            }

            // Auto-populate Project Details
            const scopeField = document.getElementById('doc-scope');
            const exclusionsField = document.getElementById('doc-exclusions');
            const paymentTermsField = document.getElementById('doc-payment-terms');
            const timelineField = document.getElementById('doc-timeline');

            if (product.scope && !scopeField.value) scopeField.value = product.scope;
            if (product.exclusions && !exclusionsField.value) exclusionsField.value = product.exclusions;
            if (product.paymentTerms && !paymentTermsField.value) paymentTermsField.value = product.paymentTerms;
            if (product.timeline && !timelineField.value) timelineField.value = product.timeline;

            this.calculateTotals();
        }
    },

    setupFormListeners() {
        document.getElementById('quote-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        // Client Autocomplete Logic
        document.getElementById('client-name').addEventListener('change', (e) => {
            const val = e.target.value;
            const client = this.data.clients.find(c => c.name === val);
            if (client) {
                document.getElementById('client-email').value = client.email || '';
                document.getElementById('client-phone').value = client.phone || '';
                document.getElementById('client-address').value = client.address || '';
            }
        });

        // Invoices Search
        const searchInput = document.querySelector('#invoices input[placeholder="Search..."]');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.renderDocumentsList(e.target.value);
            });
        }

        // Settings Color Picker Label Sync
        const colorInput = document.getElementById('settings-color');
        if (colorInput) {
            colorInput.addEventListener('input', (e) => {
                const label = document.getElementById('color-value');
                if (label) label.textContent = e.target.value.toUpperCase();
            });
        }
    },

    handleFormSubmit() {
        const type = document.getElementById('doc-type').value;
        const docNumber = document.getElementById('doc-number').value;

        const client = {
            name: document.getElementById('client-name').value,
            email: document.getElementById('client-email').value,
            phone: document.getElementById('client-phone').value,
            address: document.getElementById('client-address').value
        };

        // Auto-save client if new
        if (!this.data.clients.find(c => c.name === client.name)) {
            this.data.clients.push(client);
        }

        const items = [];
        document.querySelectorAll('#items-body tr').forEach(row => {
            const recurringVal = row.querySelector('.item-recurring');
            const recurringPeriodVal = row.querySelector('.item-recurring-period');
            items.push({
                desc: row.querySelector('.item-desc').value,
                qty: parseFloat(row.querySelector('.item-qty').value),
                price: parseFloat(row.querySelector('.item-price').value),
                isRecurring: recurringVal ? recurringVal.value === 'true' : false,
                recurringPeriod: recurringPeriodVal ? recurringPeriodVal.value : ''
            });
        });

        const totals = this.calculateTotals();
        const gstNotApplicable = !document.getElementById('tax-enable').checked;

        const newDoc = {
            id: docNumber,
            type: type,
            date: document.getElementById('doc-date').value,
            client: client,
            items: items,
            totals: totals,
            gstNotApplicable: gstNotApplicable,
            scope: document.getElementById('doc-scope').value,
            exclusions: document.getElementById('doc-exclusions').value,
            paymentTerms: document.getElementById('doc-payment-terms').value,
            timeline: document.getElementById('doc-timeline').value,
            expense: document.getElementById('doc-expense') ? (parseFloat(document.getElementById('doc-expense').value) || 0) : 0,
            status: type === 'invoice' ? 'pending' : 'draft',
            created_at: new Date().toISOString()
        };

        this.data.documents.unshift(newDoc);

        if (type === 'quotation') this.data.settings.nextQuoteId++;
        else this.data.settings.nextInvoiceId++;

        this.saveData();
        this.showToast('Success', `${type === 'quotation' ? 'Quotation' : 'Invoice'} saved successfully!`, 'success');
        this.navigateTo('invoices');
    },

    // --- Client Management ---

    renderClientList() {
        const tbody = document.querySelector('#clients-table tbody');
        if (!tbody) return;
        tbody.innerHTML = '';
        this.data.clients.forEach((client, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><span class="client-link" onclick="app.showClientHistory('${client.name}')">${client.name}</span></td>
                <td>${client.email}</td>
                <td>${client.phone}</td>
                <td><button class="btn btn-outline" onclick="app.showClientHistory('${client.name}')"><i class="fa-solid fa-clock-rotate-left"></i> History</button></td>
                <td><button class="btn btn-outline" style="color: red;" onclick="app.deleteClient(${index})"><i class="fa-solid fa-trash"></i></button></td>
            `;
            tbody.appendChild(tr);
        });
    },

    showClientHistory(clientName) {
        this.navigateTo('client-history');
        const client = this.data.clients.find(c => c.name === clientName) || { name: clientName };
        const docs = this.data.documents.filter(d => d.client.name === clientName);

        document.getElementById('history-client-name').textContent = client.name;
        document.getElementById('history-client-contact').textContent = `${client.email || ''} | ${client.phone || ''}`;

        // Metrics
        const currency = this.data.settings.currency || '₹';
        const paidDocs = docs.filter(d => d.status === 'paid');
        const ltv = paidDocs.reduce((sum, d) => sum + (d.totals ? d.totals.grandTotal : d.total || 0), 0);

        const quotes = docs.filter(d => d.type === 'quotation');
        const acceptedQuotes = quotes.filter(q => q.status !== 'draft');
        const rate = quotes.length ? Math.round((acceptedQuotes.length / quotes.length) * 100) : 100;

        // Avg Payment Days
        let avgDays = 0;
        if (paidDocs.length) {
            const totalDays = paidDocs.reduce((sum, d) => {
                const start = new Date(d.date);
                const end = d.updated_at ? new Date(d.updated_at) : new Date();
                return sum + Math.max(0, Math.round((end - start) / (1000 * 60 * 60 * 24)));
            }, 0);
            avgDays = Math.round(totalDays / paidDocs.length);
        }

        document.getElementById('history-ltv').textContent = currency + ltv.toLocaleString();
        document.getElementById('history-rate').textContent = rate + '%';
        document.getElementById('history-avg-days').textContent = avgDays + ' Days';

        // Render History Table
        const tbody = document.querySelector('#history-table tbody');
        if (tbody) {
            tbody.innerHTML = '';
            docs.forEach(doc => {
                const tr = document.createElement('tr');
                const total = (doc.totals ? doc.totals.grandTotal : doc.total || 0);
                tr.innerHTML = `
                    <td>${doc.id}</td>
                    <td>${doc.date}</td>
                    <td>${doc.type}</td>
                    <td>${currency}${total.toLocaleString()}</td>
                    <td><span class="badge badge-${this.getStatusColor(doc.status)}" style="text-transform:capitalize;">${doc.status}</span></td>
                    <td>
                        <button class="btn btn-outline" onclick="app.generatePDF('${doc.id}')"><i class="fa-solid fa-file-pdf"></i></button>
                        ${['sent', 'viewed', 'accepted', 'invoiced', 'overdue', 'pending'].includes(doc.status) ? `<button class="btn btn-reminder" onclick="app.sendReminder('${doc.id}')"><i class="fa-solid fa-bell"></i> Remind</button>` : ''}
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }
    },

    sendReminder(id) {
        const doc = this.data.documents.find(d => d.id === id);
        if (!doc) return;

        const currency = this.data.settings.currency || '₹';
        const total = (doc.totals ? doc.totals.grandTotal : doc.total || 0);

        const subject = `Gentle Reminder: Payment for ${doc.id} is Pending`;
        const body = `Dear ${doc.client.name},\n\nHope you are doing well.\n\nThis is a gentle reminder regarding the payment for ${doc.type} #${doc.id} totaling ${currency}${total.toLocaleString()}, which is currently showing as ${doc.status.toUpperCase()}.\n\nIf you have already processed the payment, please ignore this email. Otherwise, kindly clear the dues at your earliest convenience.\n\nThank you,\n${this.data.settings.companyName}`;

        window.location.href = `mailto:${doc.client.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },

    // ─── RENEWAL REMINDER SYSTEM ─────────────────────────────────────────────

    getRenewalExpiryDate(paymentDate, period) {
        const base = new Date(paymentDate);
        if (!base || isNaN(base)) return null;
        const periodDays = {
            'Monthly': 30,
            'Quarterly': 90,
            'Annually': 365,
            '2 Years': 730,
        };
        const days = periodDays[period] || 365;
        const expiry = new Date(base);
        expiry.setDate(expiry.getDate() + days);
        return expiry;
    },

    checkRenewalReminders() {
        const docs = this.data.documents;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const alerts = []; // { doc, item, expiry, daysLeft }

        docs.forEach(doc => {
            if (doc.status !== 'paid') return;
            const paymentDate = doc.paymentDate || doc.date;
            if (!paymentDate) return;

            (doc.items || []).forEach(item => {
                if (!item.isRecurring || !item.recurringPeriod) return;

                const expiry = this.getRenewalExpiryDate(paymentDate, item.recurringPeriod);
                if (!expiry) return;

                const diffMs = expiry.getTime() - today.getTime();
                const daysLeft = Math.round(diffMs / (1000 * 60 * 60 * 24));

                // Only alert for -3 (expired recently) to 30 days ahead
                if (daysLeft <= 30 && daysLeft >= -3) {
                    alerts.push({ doc, item, expiry, daysLeft });
                }
            });
        });

        // Show toast alerts for critical ones (7-day and expired)
        alerts.forEach(a => {
            if (a.daysLeft <= 0) {
                this.showToast(
                    '🔴 Renewal Expired',
                    `${a.item.desc} for ${a.doc.client.name} expired ${Math.abs(a.daysLeft)} day(s) ago`,
                    'error'
                );
            } else if (a.daysLeft <= 7) {
                this.showToast(
                    '🟠 Renewal Due Soon',
                    `${a.item.desc} for ${a.doc.client.name} expires in ${a.daysLeft} day(s)`,
                    'error'
                );
            } else if (a.daysLeft <= 30) {
                this.showToast(
                    '🟡 Renewal Upcoming',
                    `${a.item.desc} for ${a.doc.client.name} expires in ${a.daysLeft} day(s)`,
                    'info'
                );
            }
        });

        // Render the renewal panel
        this.renderRenewalPanel(alerts);
        return alerts;
    },

    renderRenewalPanel(alerts) {
        const panel = document.getElementById('renewal-panel');
        if (!panel) return;

        if (!alerts || alerts.length === 0) {
            panel.style.display = 'none';
            return;
        }

        panel.style.display = 'block';
        const currency = this.data.settings.currency || '₹';

        const rows = alerts.map(a => {
            const expiryStr = a.expiry.toLocaleDateString('en-GB');
            let urgencyColor, urgencyLabel, urgencyBg;
            if (a.daysLeft <= 0) {
                urgencyColor = '#dc2626'; urgencyBg = '#fef2f2'; urgencyLabel = `❌ Expired ${Math.abs(a.daysLeft)}d ago`;
            } else if (a.daysLeft <= 7) {
                urgencyColor = '#ea580c'; urgencyBg = '#fff7ed'; urgencyLabel = `🔥 ${a.daysLeft} days left`;
            } else {
                urgencyColor = '#ca8a04'; urgencyBg = '#fefce8'; urgencyLabel = `⏰ ${a.daysLeft} days left`;
            }

            const itemTotal = (a.item.qty * a.item.price).toFixed(2);

            return `
                <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:${urgencyBg}; border-radius:10px; border-left:4px solid ${urgencyColor}; margin-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:12px; flex:1;">
                        <div style="width:36px; height:36px; border-radius:8px; background:white; display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 1px 4px rgba(0,0,0,0.08);">
                            <i class="fa-solid fa-rotate" style="color:${urgencyColor}; font-size:14px;"></i>
                        </div>
                        <div>
                            <p style="margin:0; font-size:13px; font-weight:700; color:#0f172a;">${a.item.desc}</p>
                            <p style="margin:2px 0 0 0; font-size:11px; color:#64748b;">${a.doc.client.name} &bull; ${a.item.recurringPeriod} &bull; ${currency}${itemTotal} &bull; Expires: ${expiryStr}</p>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
                        <span style="font-size:11px; font-weight:800; color:${urgencyColor}; background:white; padding:4px 10px; border-radius:20px; border:1px solid ${urgencyColor}; white-space:nowrap;">${urgencyLabel}</span>
                        <button onclick="app.sendRenewalReminder('${a.doc.id}', '${a.item.desc.replace(/'/g, "\\'").substring(0, 40)}', ${a.daysLeft})" style="background:${urgencyColor}; color:white; border:none; border-radius:8px; padding:6px 12px; font-size:11px; font-weight:700; cursor:pointer; white-space:nowrap;">
                            <i class="fa-brands fa-whatsapp" style="margin-right:4px;"></i>Remind
                        </button>
                    </div>
                </div>`;
        }).join('');

        panel.innerHTML = `
            <div style="background:white; border-radius:14px; border:1px solid #fde68a; box-shadow:0 2px 12px rgba(202,138,4,0.1); padding:16px 20px; margin-bottom:20px;">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div style="width:36px; height:36px; border-radius:10px; background:#fef9c3; display:flex; align-items:center; justify-content:center;">
                            <i class="fa-solid fa-bell" style="color:#ca8a04; font-size:16px;"></i>
                        </div>
                        <div>
                            <p style="margin:0; font-size:14px; font-weight:800; color:#0f172a;">Renewal Reminders</p>
                            <p style="margin:0; font-size:11px; color:#94a3b8;">${alerts.length} item(s) need attention in the next 30 days</p>
                        </div>
                    </div>
                    <button onclick="document.getElementById('renewal-panel').style.display='none'" style="background:#f1f5f9; border:none; border-radius:8px; width:28px; height:28px; cursor:pointer; color:#64748b; font-size:14px;">×</button>
                </div>
                <div>${rows}</div>
            </div>`;
    },

    sendRenewalReminder(docId, itemDesc, daysLeft) {
        const doc = this.data.documents.find(d => d.id === docId);
        if (!doc) return;

        const company = this.data.settings.companyName || 'Us';
        let urgencyLine;
        if (daysLeft <= 0) {
            urgencyLine = `Your *${itemDesc}* renewal has *expired* as of today. Please renew immediately to avoid service interruption.`;
        } else if (daysLeft <= 7) {
            urgencyLine = `Your *${itemDesc}* renewal is due in *${daysLeft} day(s)*. Please renew soon to avoid any disruption.`;
        } else {
            urgencyLine = `Your *${itemDesc}* renewal is coming up in *${daysLeft} days*. We wanted to give you an early heads-up.`;
        }

        const msg = `Hello ${doc.client.name},

${urgencyLine}

Ref: ${doc.id}

Please contact us to proceed with the renewal.

Thank you,
${company}`;

        const phone = (doc.client.phone || '').replace(/\D/g, '');
        if (phone) {
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
        } else {
            // Fallback to email
            const subject = `Renewal Reminder: ${itemDesc}`;
            window.location.href = `mailto:${doc.client.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
        }
    },


    showAddClientModal() {
        document.getElementById('client-modal').classList.remove('hidden');
    },

    saveClient(e) {
        e.preventDefault();
        const newClient = {
            name: document.getElementById('modal-client-name').value,
            email: document.getElementById('modal-client-email').value,
            phone: document.getElementById('modal-client-phone').value,
            address: document.getElementById('modal-client-address').value
        };
        this.data.clients.push(newClient);
        this.saveData();
        document.getElementById('client-modal').classList.add('hidden');
        this.renderClientList();
    },

    deleteClient(index) {
        if (confirm('Are you sure?')) {
            this.data.clients.splice(index, 1);
            this.saveData();
            this.renderClientList();
        }
    },

    // --- Product Catalog ---

    renderCatalogList() {
        const tbody = document.querySelector('#catalog-table tbody');
        if (!tbody) return;
        tbody.innerHTML = '';
        const currency = this.data.settings.currency || '₹';
        this.data.catalog.forEach((product, index) => {
            const tr = document.createElement('tr');
            const recurringBadge = product.isRecurring
                ? `<span style="font-size:0.65rem; background:#ede9fe; color:#7c3aed; padding:2px 7px; border-radius:10px; margin-left:6px; vertical-align:middle;">🔄 ${product.recurringPeriod || 'Annually'}</span>`
                : '';
            tr.innerHTML = `
                <td>${product.name}${recurringBadge}</td>
                <td>${currency}${parseFloat(product.price).toFixed(2)}</td>
                <td style="display:flex; gap:6px;">
                    <button class="btn btn-outline" style="color: var(--secondary-color);" onclick="app.editProduct(${index})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn btn-outline" style="color: red;" onclick="app.deleteProduct(${index})"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    },

    showAddProductModal() {
        // Reset to 'Add' mode
        document.querySelector('#product-modal h3').textContent = 'Add New Product/Service';
        document.getElementById('modal-product-save-btn').textContent = 'Save Product';
        document.getElementById('modal-product-edit-index').value = '';
        document.getElementById('modal-product-name').value = '';
        document.getElementById('modal-product-price').value = '';
        document.getElementById('modal-product-recurring').checked = false;
        document.getElementById('modal-product-period').value = 'Annually';
        document.getElementById('modal-recurring-period-row').style.display = 'none';
        document.getElementById('product-modal').classList.remove('hidden');
    },

    editProduct(index) {
        const product = this.data.catalog[index];
        if (!product) return;
        // Switch modal to 'Edit' mode
        document.querySelector('#product-modal h3').textContent = 'Edit Product/Service';
        document.getElementById('modal-product-save-btn').textContent = 'Save Changes';
        document.getElementById('modal-product-edit-index').value = index;
        document.getElementById('modal-product-name').value = product.name;
        document.getElementById('modal-product-price').value = product.price;
        document.getElementById('modal-product-recurring').checked = !!product.isRecurring;
        document.getElementById('modal-product-period').value = product.recurringPeriod || 'Annually';
        document.getElementById('modal-recurring-period-row').style.display = product.isRecurring ? 'flex' : 'none';
        document.getElementById('product-modal').classList.remove('hidden');
    },

    saveProduct(e) {
        e.preventDefault();
        const editIndex = document.getElementById('modal-product-edit-index').value;
        const name = document.getElementById('modal-product-name').value;
        const price = parseFloat(document.getElementById('modal-product-price').value) || 0;
        const isRecurring = document.getElementById('modal-product-recurring').checked;
        const recurringPeriod = isRecurring ? document.getElementById('modal-product-period').value : '';

        if (editIndex !== '') {
            // Edit existing product
            const idx = parseInt(editIndex);
            this.data.catalog[idx].name = name;
            this.data.catalog[idx].price = price;
            this.data.catalog[idx].isRecurring = isRecurring;
            this.data.catalog[idx].recurringPeriod = recurringPeriod;
        } else {
            // Add new product
            this.data.catalog.push({ name, price, isRecurring, recurringPeriod });
        }

        this.saveData();
        document.getElementById('product-modal').classList.add('hidden');
        document.getElementById('modal-product-edit-index').value = '';
        document.getElementById('modal-product-name').value = '';
        document.getElementById('modal-product-price').value = '';
        document.getElementById('modal-product-recurring').checked = false;
        document.getElementById('modal-recurring-period-row').style.display = 'none';
        this.renderCatalogList();
    },

    deleteProduct(index) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.data.catalog.splice(index, 1);
            this.saveData();
            this.renderCatalogList();
        }
    },

    showPaymentModal(id) {
        const doc = this.data.documents.find(d => d.id === id);
        if (!doc) return;

        const currency = this.data.settings.currency || '₹';
        const total = doc.totals.grandTotal;
        const existingAdvance = doc.totals.advance || 0;

        // Store raw total for preview calculations
        document.getElementById('modal-payment-doc-id').value = id;
        document.getElementById('modal-payment-total-raw').value = total;
        document.getElementById('modal-payment-amount').value = existingAdvance > 0 ? existingAdvance : '';
        document.getElementById('modal-payment-date').valueAsDate = new Date();
        document.getElementById('modal-payment-mode').value = 'Cash';
        document.getElementById('modal-payment-notes').value = '';

        // Reset payment mode UI
        ['pm-cash', 'pm-upi', 'pm-bank', 'pm-cheque'].forEach(id => {
            const el = document.getElementById(id);
            if (el) { el.style.borderColor = '#e2e8f0'; el.style.background = ''; el.style.color = '#64748b'; }
        });
        const cashEl = document.getElementById('pm-cash');
        if (cashEl) { cashEl.style.borderColor = 'var(--secondary-color)'; cashEl.style.background = '#eff6ff'; cashEl.style.color = 'var(--secondary-color)'; }

        // Seed preview
        document.getElementById('preview-total').textContent = currency + total.toFixed(2);
        this.updatePaymentPreview();

        document.getElementById('payment-modal').classList.remove('hidden');
    },

    updatePaymentPreview() {
        const currency = this.data.settings.currency || '₹';
        const total = parseFloat(document.getElementById('modal-payment-total-raw').value) || 0;
        const paying = parseFloat(document.getElementById('modal-payment-amount').value) || 0;
        const balance = Math.max(0, total - paying);

        document.getElementById('preview-total').textContent = currency + total.toFixed(2);
        document.getElementById('preview-paying').textContent = currency + paying.toFixed(2);
        document.getElementById('preview-balance').textContent = currency + balance.toFixed(2);

        // Turn balance green if fully paid
        const balEl = document.getElementById('preview-balance');
        if (balEl) balEl.style.color = balance <= 0.01 ? '#16a34a' : '#ef4444';
    },

    selectPaymentMode(mode) {
        document.getElementById('modal-payment-mode').value = mode;
        const modeMap = { 'Cash': 'pm-cash', 'UPI': 'pm-upi', 'Bank Transfer': 'pm-bank', 'Cheque': 'pm-cheque' };
        ['pm-cash', 'pm-upi', 'pm-bank', 'pm-cheque'].forEach(id => {
            const el = document.getElementById(id);
            if (el) { el.style.borderColor = '#e2e8f0'; el.style.background = ''; el.style.color = '#64748b'; }
        });
        const activeEl = document.getElementById(modeMap[mode]);
        if (activeEl) { activeEl.style.borderColor = 'var(--secondary-color)'; activeEl.style.background = '#eff6ff'; activeEl.style.color = 'var(--secondary-color)'; }
    },

    saveAdvancePayment(e) {
        e.preventDefault();
        const id = document.getElementById('modal-payment-doc-id').value;
        const amount = parseFloat(document.getElementById('modal-payment-amount').value) || 0;
        const paymentMode = document.getElementById('modal-payment-mode').value || 'Cash';
        const paymentDate = document.getElementById('modal-payment-date').value || new Date().toISOString().split('T')[0];
        const paymentNotes = document.getElementById('modal-payment-notes').value || '';

        const doc = this.data.documents.find(d => d.id === id);
        if (!doc) return;

        if (amount > doc.totals.grandTotal) {
            this.showToast('Error', 'Amount cannot exceed the total.', 'error');
            return;
        }

        doc.totals.advance = amount;
        doc.totals.balance = doc.totals.grandTotal - amount;
        doc.paymentMode = paymentMode;
        doc.paymentDate = paymentDate;
        doc.paymentNotes = paymentNotes;
        doc.updated_at = new Date().toISOString();

        if (doc.totals.balance <= 0.01) {
            doc.status = 'paid';
        } else if (doc.type === 'invoice' && doc.status === 'paid' && doc.totals.balance > 0) {
            doc.status = 'pending';
        }

        this.saveData();
        document.getElementById('payment-modal').classList.add('hidden');
        this.renderDocumentsList();

        const currency = this.data.settings.currency || '₹';
        const modeIcon = { 'Cash': '💵', 'UPI': '📱', 'Bank Transfer': '🏦', 'Cheque': '📄' }[paymentMode] || '💰';
        this.showToast('Payment Recorded', `${modeIcon} ${currency}${amount.toFixed(2)} via ${paymentMode}`, 'success');

        if (amount > 0) {
            this.generateAdvanceReceipt(id);
        }
    },

    // --- Settings ---

    loadSettingsForm() {
        document.getElementById('settings-company-name').value = this.data.settings.companyName;
        document.getElementById('settings-address').value = this.data.settings.address;
        document.getElementById('settings-email').value = this.data.settings.email;
        document.getElementById('settings-phone').value = this.data.settings.phone;
        document.getElementById('settings-currency').value = this.data.settings.currency;
        document.getElementById('settings-tax').value = this.data.settings.taxRate;

        // New Settings
        document.getElementById('settings-logo').value = this.data.settings.logoUrl || '';
        document.getElementById('settings-website').value = this.data.settings.website || '';
        document.getElementById('settings-tagline').value = this.data.settings.tagline || '';
        document.getElementById('settings-bank').value = this.data.settings.bankDetails || '';
        document.getElementById('settings-validity').value = this.data.settings.validity || 30;
        document.getElementById('settings-advance').value = this.data.settings.advanceClause || '';
        document.getElementById('settings-color').value = this.data.settings.brandColor || '#0f172a';
        document.getElementById('color-value').textContent = this.data.settings.brandColor || '#0f172a';
        document.getElementById('settings-signature').value = this.data.settings.signatureUrl || '';
        document.getElementById('settings-qr').value = this.data.settings.paymentQrUrl || '';
    },

    saveSettings() {
        this.data.settings.companyName = document.getElementById('settings-company-name').value;
        this.data.settings.address = document.getElementById('settings-address').value;
        this.data.settings.email = document.getElementById('settings-email').value;
        this.data.settings.phone = document.getElementById('settings-phone').value;
        this.data.settings.currency = document.getElementById('settings-currency').value;
        this.data.settings.taxRate = parseFloat(document.getElementById('settings-tax').value);

        // Save New Settings
        this.data.settings.logoUrl = document.getElementById('settings-logo').value;
        this.data.settings.website = document.getElementById('settings-website').value;
        this.data.settings.tagline = document.getElementById('settings-tagline').value;
        this.data.settings.bankDetails = document.getElementById('settings-bank').value;
        this.data.settings.validity = parseInt(document.getElementById('settings-validity').value) || 30;
        this.data.settings.advanceClause = document.getElementById('settings-advance').value;
        this.data.settings.brandColor = document.getElementById('settings-color').value;
        this.data.settings.signatureUrl = document.getElementById('settings-signature').value;
        this.data.settings.paymentQrUrl = document.getElementById('settings-qr').value;
        this.saveData();
        this.applySettings();
        this.showToast('Settings Saved', 'Your preferences have been updated.', 'success');
    },

    // --- Visualization & Utils ---

    renderDashboard() {
        const docs = this.data.documents;

        // Revenue = Everything that is PAID (Quotes or Invoices)
        const revenue = docs.filter(d => d.status === 'paid')
            .reduce((sum, d) => sum + (d.totals ? d.totals.grandTotal : d.total || 0), 0);

        // Pending = anything not yet paid (sent, viewed, accepted, invoiced, overdue, pending)
        const PENDING_STATUSES = ['sent', 'viewed', 'accepted', 'invoiced', 'overdue', 'pending'];
        const pendingValue = docs.filter(d => PENDING_STATUSES.includes(d.status))
            .reduce((sum, d) => sum + (d.totals ? d.totals.grandTotal : d.total || 0), 0);

        const paidCount = docs.filter(d => d.status === 'paid').length;
        const draftCount = docs.filter(d => d.status === 'draft').length;
        const overdueCount = docs.filter(d => d.status === 'overdue').length;
        const totalInvoices = docs.filter(d => d.type === 'invoice').length;

        // Profit Calculation (Paid Revenue - Expenses of Paid Docs)
        const totalExpenses = docs.filter(d => d.status === 'paid')
            .reduce((sum, d) => sum + (d.expense || 0), 0);
        const profit = revenue - totalExpenses;

        const currency = this.data.settings.currency;
        document.getElementById('total-revenue').textContent = currency + revenue.toFixed(2);
        document.getElementById('pending-payments').textContent = currency + pendingValue.toFixed(2);
        document.getElementById('total-paid').textContent = paidCount;
        document.getElementById('total-drafts').textContent = draftCount;
        document.getElementById('total-overdue').textContent = overdueCount;

        if (document.getElementById('total-profit')) {
            document.getElementById('total-profit').textContent = currency + profit.toFixed(2);
            // Color coding for profit
            document.getElementById('total-profit').style.color = profit >= 0 ? 'var(--success-color)' : 'var(--danger-color)';
        } else {
            document.getElementById('total-invoices').textContent = totalInvoices;
        }

        const recent = this.data.documents.slice(0, 5);
        const tbody = document.querySelector('#recent-activity-table tbody');
        tbody.innerHTML = '';
        recent.forEach(doc => {
            const tr = document.createElement('tr');
            const currency = this.data.settings.currency;
            const clientName = doc.client ? doc.client.name : 'Unknown Client';
            const total = (doc.totals ? doc.totals.grandTotal : doc.total || 0);
            tr.innerHTML = `
                <td>${doc.id}</td>
                <td>${clientName}</td>
                <td>${doc.date}</td>
                <td>${currency}${parseFloat(total).toFixed(2)}</td>
                <td><span class="badge badge-${this.getStatusColor(doc.status)}">${doc.status}</span></td>
                <td><button class="btn btn-outline" onclick="app.generatePDF('${doc.id}')"><i class="fa-solid fa-file-pdf"></i></button></td>
            `;
            tbody.appendChild(tr);
        });

        setTimeout(() => this.renderCharts(), 100);
    },

    setChartTimeframe(timeframe) {
        this.chartTimeframe = timeframe;
        // Update UI toggles
        document.querySelectorAll('.btn-chart-toggle').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById(`toggle-${timeframe}`);
        if (activeBtn) activeBtn.classList.add('active');
        this.renderCharts();
    },

    renderCharts() {
        const brandColor = this.data.settings.brandColor || '#3b82f6';
        this.renderSpecificChart('revenueChart', 'Revenue', ['paid'], brandColor);
        this.renderSpecificChart('pendingChart', 'Pending', ['pending', 'overdue'], '#f59e0b');
    },

    renderSpecificChart(canvasId, label, statuses, baseColor) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        if (this.charts[canvasId]) this.charts[canvasId].destroy();

        const timeframe = this.chartTimeframe || 'month';
        let labels = [];
        let dataPoints = [];
        const currency = this.data.settings.currency || '₹';

        const now = new Date();
        now.setHours(23, 59, 59, 999);

        if (timeframe === 'day') {
            for (let i = 14; i >= 0; i--) {
                const d = new Date();
                d.setDate(now.getDate() - i);
                const dateStr = d.toISOString().split('T')[0];
                labels.push(d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }));

                const val = this.data.documents
                    .filter(doc => statuses.includes(doc.status) && doc.date === dateStr)
                    .reduce((sum, doc) => sum + (doc.totals ? doc.totals.grandTotal : doc.total || 0), 0);
                dataPoints.push(val);
            }
        } else if (timeframe === 'week') {
            for (let i = 7; i >= 0; i--) {
                const d = new Date();
                d.setDate(now.getDate() - (i * 7));

                const weekStart = new Date(d);
                weekStart.setDate(d.getDate() - 6);
                weekStart.setHours(0, 0, 0, 0);

                labels.push(`${weekStart.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}`);

                const val = this.data.documents
                    .filter(doc => {
                        const docDate = new Date(doc.date);
                        return statuses.includes(doc.status) && docDate >= weekStart && docDate <= d;
                    })
                    .reduce((sum, doc) => sum + (doc.totals ? doc.totals.grandTotal : doc.total || 0), 0);
                dataPoints.push(val);
            }
        } else {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const currentYear = now.getFullYear();
            labels = months;
            dataPoints = new Array(12).fill(0);

            this.data.documents.forEach(doc => {
                if (statuses.includes(doc.status)) {
                    const date = new Date(doc.date);
                    if (date.getFullYear() === currentYear) {
                        const month = date.getMonth();
                        dataPoints[month] += (doc.totals ? doc.totals.grandTotal : doc.total || 0);
                    }
                }
            });
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: dataPoints,
                    backgroundColor: baseColor + 'CC',
                    borderColor: baseColor,
                    borderWidth: 1,
                    borderRadius: 4,
                    barPercentage: 0.7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.dataset.label}: ${currency}${context.parsed.y.toLocaleString()}`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: '#f1f5f9' },
                        ticks: {
                            font: { size: 10 },
                            callback: (value) => currency + value.toLocaleString()
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 10 } }
                    }
                }
            }
        });
    },

    getStatusColor(status) {
        const map = {
            'draft': 'draft',
            'sent': 'sent',
            'viewed': 'viewed',
            'accepted': 'accepted',
            'invoiced': 'invoiced',
            'paid': 'paid',
            'overdue': 'overdue',
            'pending': 'pending',  // legacy fallback
        };
        return map[status] || 'draft';
    },

    renderInvoiceStats() {
        const docs = this.data.documents;
        const currency = this.data.settings.currency || '₹';
        const now = new Date();
        const thisMonth = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');

        // 1. Quotes This Month
        const quotesThisMonth = docs.filter(d =>
            d.type === 'quotation' && (d.date || '').startsWith(thisMonth)
        ).length;

        // 2. Conversion Rate: quotes that reached accepted / invoiced / paid
        const allQuotes = docs.filter(d => d.type === 'quotation');
        const convertedQuotes = allQuotes.filter(d =>
            ['accepted', 'invoiced', 'paid'].includes(d.status)
        );
        const conversionRate = allQuotes.length
            ? Math.round((convertedQuotes.length / allQuotes.length) * 100)
            : 0;

        // 3. Total Revenue (all paid docs)
        const totalRevenue = docs
            .filter(d => d.status === 'paid')
            .reduce((sum, d) => sum + (d.totals ? d.totals.grandTotal : 0), 0);

        // 4. Pending Amount (all in-progress statuses)
        const PENDING_STATUSES = ['sent', 'viewed', 'accepted', 'invoiced', 'overdue', 'pending'];
        const pendingAmount = docs
            .filter(d => PENDING_STATUSES.includes(d.status))
            .reduce((sum, d) => sum + (d.totals ? d.totals.grandTotal : 0), 0);

        // 5. Recurring Revenue: sum of recurring items across all paid docs
        const recurringRevenue = docs
            .filter(d => d.status === 'paid')
            .reduce((sum, d) => {
                const recurringItems = (d.items || []).filter(i => i.isRecurring);
                return sum + recurringItems.reduce((s, i) => s + (i.qty * i.price), 0);
            }, 0);

        // Format helper
        const fmt = (n) => n >= 1000
            ? currency + (n / 1000).toFixed(1) + 'k'
            : currency + n.toFixed(0);

        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set('iq-quotes-month', quotesThisMonth);
        set('iq-conversion', conversionRate + '%');
        set('iq-revenue', fmt(totalRevenue));
        set('iq-pending', fmt(pendingAmount));
        set('iq-recurring', fmt(recurringRevenue));
    },

    renderDocumentsList(filter = '') {
        const tbody = document.querySelector('#documents-table tbody');
        if (!tbody) return;

        this.renderInvoiceStats();

        tbody.innerHTML = '';
        const currency = this.data.settings.currency || '₹';

        let docs = [...this.data.documents];
        if (filter) {
            const f = filter.toLowerCase();
            docs = docs.filter(d =>
                (d.id || '').toLowerCase().includes(f) ||
                (d.client.name || '').toLowerCase().includes(f) ||
                (d.type || '').split(' ').some(word => word.toLowerCase().includes(f))
            );
        }

        // Sort by ID descending (newest first)
        const sortedDocs = docs.sort((a, b) => {
            const numA = parseInt((a.id || '').replace(/\D/g, '')) || 0;
            const numB = parseInt((b.id || '').replace(/\D/g, '')) || 0;
            return numB - numA;
        });

        sortedDocs.forEach(doc => {
            try {
                const tr = document.createElement('tr');
                const total = (doc.totals ? doc.totals.grandTotal : doc.total || 0);
                const statusColor = this.getStatusColor(doc.status);
                const clientName = doc.client ? doc.client.name : 'Unknown Client';

                tr.innerHTML = `
                    <td>${doc.id}</td>
                    <td>${doc.date}</td>
                    <td>${clientName}</td>
                    <td style="text-transform: capitalize">${doc.type}</td>
                    <td style="font-weight: 700;">${currency}${parseFloat(total).toFixed(2)}</td>
                    <td>
                         <select onchange="app.updateStatus('${doc.id}', this.value)" class="badge badge-${statusColor}" style="border:none; cursor:pointer;">
                            <option value="draft"    ${doc.status === 'draft' ? 'selected' : ''}>Draft</option>
                            <option value="sent"     ${doc.status === 'sent' ? 'selected' : ''}>Sent</option>
                            <option value="viewed"   ${doc.status === 'viewed' ? 'selected' : ''}>Viewed</option>
                            <option value="accepted" ${doc.status === 'accepted' ? 'selected' : ''}>Accepted</option>
                            <option value="invoiced" ${doc.status === 'invoiced' ? 'selected' : ''}>Invoiced</option>
                            <option value="paid"     ${doc.status === 'paid' ? 'selected' : ''}>Paid</option>
                            <option value="overdue"  ${doc.status === 'overdue' ? 'selected' : ''}>Overdue</option>
                         </select>
                    </td>
                    <td>
                        <button class="btn btn-outline" onclick="app.generatePDF('${doc.id}')" title="Download PDF"><i class="fa-solid fa-file-pdf"></i></button>
                        ${(doc.totals && doc.totals.advance > 0) ? `<button class="btn btn-outline" onclick="app.generateAdvanceReceipt('${doc.id}')" title="Download Advance Receipt" style="color: #8b5cf6; border-color: #8b5cf6;"><i class="fa-solid fa-receipt"></i></button>` : ''}
                        <button class="btn btn-outline" onclick="app.shareToWhatsapp('${doc.id}')" title="Share via WhatsApp" style="color: #25D366; border-color: #25D366;"><i class="fa-brands fa-whatsapp"></i></button>
                        <button class="btn btn-outline" onclick="app.emailClient('${doc.id}')" title="Email Client"><i class="fa-solid fa-envelope"></i></button>
                        ${['sent', 'viewed', 'accepted', 'invoiced', 'overdue', 'pending'].includes(doc.status) ? `<button class="btn btn-reminder" onclick="app.sendReminder('${doc.id}')" title="Send Reminder"><i class="fa-solid fa-bell"></i></button>` : ''}
                        ${doc.type === 'quotation' ? `<button class="btn btn-outline" onclick="app.convertToInvoice('${doc.id}')" title="Convert to Invoice"><i class="fa-solid fa-arrow-right-arrow-left"></i></button>` : ''}
                        ${doc.status !== 'paid' ? `<button class="btn btn-outline" onclick="app.showPaymentModal('${doc.id}')" title="Record Advance/Payment" style="color: #0ea5e9; border-color: #0ea5e9;"><i class="fa-solid fa-money-bill-wave"></i></button>` : ''}
                    </td>
                `;
                tbody.appendChild(tr);
            } catch (err) {
                console.error('Error rendering document row:', doc ? doc.id : 'unknown', err);
            }
        });
    },

    updateStatus(id, newStatus) {
        const doc = this.data.documents.find(d => d.id === id);
        if (doc) {
            doc.status = newStatus;
            doc.updated_at = new Date().toISOString();

            if (newStatus === 'paid') {
                if (!doc.totals) doc.totals = {};
                doc.totals.balance = 0;
                doc.totals.advance = doc.totals.grandTotal;
            }

            this.saveData();
            this.renderDocumentsList(); // Re-render to update badge colors
        }
    },

    convertToInvoice(id) {
        const quote = this.data.documents.find(d => d.id === id);
        if (!quote) return;

        if (!confirm(`Convert Quotation ${id} to Invoice?\n\nThis will create a new Invoice based on this quotation.`)) return;

        const newInvoice = JSON.parse(JSON.stringify(quote));
        newInvoice.type = 'invoice';
        newInvoice.id = 'INV-' + this.data.settings.nextInvoiceId;
        newInvoice.status = 'pending';
        newInvoice.linkedQuote = id;
        newInvoice.date = new Date().toISOString().split('T')[0];

        // Update terms for Invoice to request full payment (replacing quote terms like "50% Advance")
        newInvoice.paymentTerms = "Full Payment Due upon Receipt";

        // Preserve expense and advance from quote if any
        // (JSON.stringify does this, but explicit check for clarity)

        this.data.documents.unshift(newInvoice);
        this.data.settings.nextInvoiceId++;
        this.saveData();
        this.renderDocumentsList(); // Switch view
        this.showToast('Success', `Converted to Invoice ${newInvoice.id}. You can now record payments.`, 'success');
    },

    generateAdvanceReceipt(id) {
        const doc = this.data.documents.find(d => d.id === id);
        if (!doc) return;

        if (!doc.totals.advance || doc.totals.advance <= 0) {
            this.showToast('Error', 'No advance payment recorded for this document.', 'error');
            return;
        }

        // Create container (similar to generatePDF)
        const container = document.createElement('div');
        Object.assign(container.style, {
            position: 'fixed', top: '0', left: '0', zIndex: '10000', width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', overflowY: 'auto'
        });

        const page = document.createElement('div');
        page.id = 'receipt-page';
        // A5 Landscape is approx 794px x 560px. We need to be careful with height.
        Object.assign(page.style, {
            width: '100%', maxWidth: '750px', backgroundColor: '#ffffff', padding: '0', margin: '0 auto',
            fontFamily: "'Inter', sans-serif"
        });

        const currency = this.data.settings.currency || '₹';
        const brandColor = this.data.settings.brandColor || '#0f172a';
        const receiptDate = doc.paymentDate ? new Date(doc.paymentDate).toLocaleDateString('en-GB') : new Date().toLocaleDateString('en-GB');
        const paymentMode = doc.paymentMode || 'Cash';
        const modeIcon = { 'Cash': '💵', 'UPI': '📱', 'Bank Transfer': '🏦', 'Cheque': '📄' }[paymentMode] || '💰';

        page.innerHTML = `
            <div style="border: 2px solid ${brandColor}; padding: 20px; box-sizing: border-box; height: 100%;">
                
                <!-- HEADER -->
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
                    <div>
                        <h1 style="color: ${brandColor}; font-size: 20px; text-transform: uppercase; margin: 0; line-height: 1;">Payment Receipt</h1>
                        <p style="color: #64748b; font-size: 10px; margin: 2px 0; text-transform: uppercase; letter-spacing: 1px;">Advance Payment</p>
                    </div>
                    <div style="text-align: right;">
                         <p style="font-size: 10px; color: #94a3b8; font-weight: 700; margin: 0;">DATE: ${receiptDate}</p>
                         <p style="font-size: 10px; color: #94a3b8; font-weight: 700; margin: 2px 0;">REF: ${doc.id}</p>
                         <p style="font-size: 10px; color: #94a3b8; font-weight: 700; margin: 2px 0;">${modeIcon} ${paymentMode}</p>
                    </div>
                </div>

                <!-- INFO GRID -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <!-- FROM -->
                    <div>
                        <p style="font-size: 9px; color: #94a3b8; text-transform: uppercase; font-weight: 800; margin-bottom: 4px;">Received From</p>
                        <h3 style="margin: 0; color: #1e293b; font-size: 14px;">${doc.client.name}</h3>
                        ${doc.client.phone ? `<p style="margin: 2px 0 0 0; color: #64748b; font-size: 11px;">${doc.client.phone}</p>` : ''}
                        ${doc.client.address ? `<p style="margin: 2px 0 0 0; color: #64748b; font-size: 10px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; max-width: 250px;">${doc.client.address.split('\n')[0]}</p>` : ''}
                    </div>
                    
                    <!-- SUMMARY BOX -->
                    <div style="background: #f8fafc; padding: 10px 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                            <span style="font-size: 10px; color: #64748b;">Project Value</span>
                            <span style="font-size: 10px; font-weight: 600;">${currency}${doc.totals.grandTotal.toFixed(2)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px; align-items: center;">
                            <span style="font-size: 11px; color: ${brandColor}; font-weight: 700;">RECEIVED</span>
                            <span style="font-size: 16px; font-weight: 800; color: ${brandColor};">${currency}${doc.totals.advance.toFixed(2)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; border-top: 1px dashed #cbd5e1; padding-top: 4px;">
                            <span style="font-size: 10px; color: #ef4444;">Balance</span>
                            <span style="font-size: 10px; font-weight: 600; color: #ef4444;">${currency}${(doc.totals.grandTotal - doc.totals.advance).toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <!-- PAYMENT TOWARDS -->
                <div style="margin-bottom: 20px;">
                     <p style="font-size: 9px; color: #94a3b8; text-transform: uppercase; font-weight: 800; margin-bottom: 4px;">Payment Towards</p>
                     <p style="margin: 0; font-size: 11px; color: #334155; line-height: 1.3;">
                        Advance for ${doc.type} <strong>#${doc.id}</strong>. 
                        ${doc.items.length > 0 ? doc.items[0].desc.substring(0, 100) + (doc.items[0].desc.length > 100 ? '...' : '') : ''}
                     </p>
                     ${doc.paymentNotes ? `<p style="margin: 6px 0 0 0; font-size: 10px; color: #64748b; font-style: italic;">📝 ${doc.paymentNotes}</p>` : ''}
                </div>

                <!-- FOOTER -->
                <div style="display: flex; justify-content: flex-end; align-items: flex-end; margin-top: auto;">
                    <div style="text-align: center;">
                        ${this.data.settings.signatureUrl ? `<img src="${this.data.settings.signatureUrl}" style="height: 45px; margin-bottom: 2px;">` : `<div style="height: 45px;"></div>`}
                        <p style="font-size: 10px; font-weight: 700; color: #1e293b; margin: 0; border-top: 1px solid #1e293b; padding-top: 2px; min-width: 120px;">${this.data.settings.companyName}</p>
                        <p style="font-size: 7px; color: #64748b; text-transform: uppercase;">Authorized Signatory</p>
                    </div>
                </div>

            </div>
        `;

        container.appendChild(page);
        document.body.appendChild(container);

        const opt = {
            margin: 0.2, // Tighter margin for PDF
            filename: `Receipt_${doc.id}_ADV.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'a5', orientation: 'landscape' }
        };

        html2pdf().set(opt).from(page).save().then(() => {
            document.body.removeChild(container);
        });
    },



    generatePDF(id) {
        const doc = this.data.documents.find(d => d.id === id);
        if (!doc) return;

        // Create a temporary container for improved PDF rendering
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.zIndex = '10000';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.backgroundColor = 'rgba(0,0,0,0.5)';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'flex-start';
        container.style.overflowY = 'auto';

        // The actual A4 page
        const page = document.createElement('div');
        page.id = 'pdf-page'; // ID for capture
        page.style.width = '700px';
        page.style.backgroundColor = '#ffffff';
        page.style.padding = '30px';
        page.style.margin = '20px auto';
        page.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
        page.style.boxSizing = 'border-box';
        page.style.position = 'relative'; // For watermark

        const currency = this.data.settings.currency;
        const brandColor = this.data.settings.brandColor || '#0f172a';

        // Watermark Logic
        let watermarkText = '';
        let watermarkColor = 'rgba(200, 200, 200, 0.1)';
        if (doc.status === 'paid') {
            watermarkText = 'PAID';
            watermarkColor = 'rgba(16, 185, 129, 0.05)';
        } else if (doc.status === 'overdue') {
            watermarkText = 'OVERDUE';
            watermarkColor = 'rgba(239, 68, 68, 0.05)';
        } else if (doc.status === 'draft') {
            watermarkText = 'DRAFT';
            watermarkColor = 'rgba(100, 116, 139, 0.05)';
        } else if (doc.status === 'sent') {
            watermarkText = 'SENT';
            watermarkColor = 'rgba(59, 130, 246, 0.05)';
        } else if (doc.status === 'viewed') {
            watermarkText = 'VIEWED';
            watermarkColor = 'rgba(6, 182, 212, 0.05)';
        } else if (doc.status === 'accepted') {
            watermarkText = 'ACCEPTED';
            watermarkColor = 'rgba(99, 102, 241, 0.05)';
        } else if (doc.status === 'invoiced') {
            watermarkText = 'INVOICED';
            watermarkColor = 'rgba(139, 92, 246, 0.05)';
        }

        page.innerHTML = `
            <div style="font-family: 'Inter', 'Helvetica', sans-serif; color: #1e293b; line-height: 1.4; position: relative; z-index: 1;">
                
                <!-- Watermark -->
                ${watermarkText ? `
                <div style="position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); font-size: 150px; font-weight: 900; color: ${watermarkColor}; white-space: nowrap; pointer-events: none; z-index: -1; letter-spacing: 20px;">
                    ${watermarkText}
                </div>` : ''}

                <!-- HEADER -->
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid ${brandColor};">
                    <div style="flex: 1;">
                        ${this.data.settings.logoUrl ?
                `<img src="${this.data.settings.logoUrl}" style="max-height: 80px; max-width: 250px; margin-bottom: 5px; display: block;">` :
                `<h1 style="color: ${brandColor}; font-size: 24px; font-weight: 800; margin: 0; text-transform: uppercase;">${this.data.settings.companyName}</h1>`
            }
                        ${this.data.settings.tagline ? `<p style="color: #64748b; font-size: 11px; margin: 2px 0 0 0; text-transform: uppercase; font-weight: 600;">${this.data.settings.tagline}</p>` : ''}
                        ${this.data.settings.website ? `<p style="color: #3b82f6; font-size: 12px; margin: 4px 0 0 0; font-weight: 500;">${this.data.settings.website}</p>` : ''}
                    </div>
                    <div style="text-align: right;">
                        <h2 style="margin: 0 0 5px 0; font-size: 32px; color: ${brandColor}; font-weight: 900; text-transform: uppercase;">${doc.type}</h2>
                        <p style="color: #64748b; margin: 0; font-weight: 700; font-size: 13px;">#${doc.id}</p>
                        <p style="color: #64748b; margin: 5px 0; font-weight: 500;">Date: ${new Date(doc.date).toLocaleDateString('en-GB')}</p>
                        ${doc.type === 'quotation' && this.data.settings.validity ? `<p style="color: #ef4444; margin: 5px 0; font-size: 12px; font-weight: 700;">Valid for ${this.data.settings.validity} Days</p>` : ''}
                    </div>
                </div>

                <!-- ADDRESSES -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 30px;">
                    <div>
                        <p style="text-transform: uppercase; color: #94a3b8; font-size: 10px; font-weight: 800; margin-bottom: 5px; letter-spacing: 1px;">From</p>
                        <div style="font-size: 13px; color: #334155;">
                            <strong style="color: #0f172a;">${this.data.settings.companyName}</strong><br>
                            <span style="white-space: pre-wrap;">${this.data.settings.address}</span><br>
                            ${this.data.settings.email} | ${this.data.settings.phone}
                        </div>
                    </div>
                    <div>
                        <p style="text-transform: uppercase; color: #94a3b8; font-size: 10px; font-weight: 800; margin-bottom: 5px; letter-spacing: 1px;">Billed To</p>
                         <div style="font-size: 13px; color: #334155;">
                            <strong style="color: #0f172a;">${doc.client.name}</strong><br>
                            ${doc.client.address ? `<span style="white-space: pre-wrap;">${doc.client.address}</span><br>` : ''}
                            ${doc.client.email ? doc.client.email + '<br>' : ''}
                            ${doc.client.phone ? doc.client.phone : ''}
                        </div>
                    </div>
                </div>

                <!-- TABLE -->
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 13px;">
                    <thead>
                        <tr style="background: ${brandColor}; color: white;">
                            <th style="padding: 10px 14px; text-align: left; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; font-size: 11px;">Description</th>
                            <th style="padding: 10px 14px; text-align: center; width: 55px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; font-size: 11px;">Qty</th>
                            <th style="padding: 10px 14px; text-align: right; width: 110px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; font-size: 11px;">Unit Price</th>
                            <th style="padding: 10px 14px; text-align: right; width: 110px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; font-size: 11px;">Line Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${doc.items.map((item, i) => `
                            <tr style="border-bottom: 1px solid #f1f5f9; background: ${i % 2 === 0 ? '#ffffff' : '#fafbfc'};">
                                <td style="padding: 11px 14px; color: #1e293b; font-weight: 600; vertical-align: middle;">
                                    ${item.desc}
                                    ${item.isRecurring ? `<br><span style="font-size:10px; color:#7c3aed; background:#ede9fe; padding:2px 8px; border-radius:10px; font-weight:600; display:inline-block; margin-top:4px;">\ud83d\udd04 ${item.recurringPeriod || 'Annually'} Renewal</span>` : ''}
                                </td>
                                <td style="padding: 11px 14px; text-align: center; color: #64748b; vertical-align: middle;">${item.qty}</td>
                                <td style="padding: 11px 14px; text-align: right; color: #64748b; vertical-align: middle; white-space: nowrap;">${currency}${parseFloat(item.price).toFixed(2)}</td>
                                <td style="padding: 11px 14px; text-align: right; color: #0f172a; font-weight: 700; vertical-align: middle; white-space: nowrap;">${item.price === 0 ? '<span style="color:#16a34a; font-size:11px; font-weight:700;">Included</span>' : currency + (item.qty * item.price).toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>

                <!-- TOTALS SECTION -->
                <div style="display: flex; justify-content: flex-end; margin-bottom: 30px; page-break-inside: avoid; break-inside: avoid;">
                    <div style="width: 270px; background: #f8fafc; padding: 16px 18px; border-radius: 10px; border: 1px solid #e2e8f0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 9px; font-size: 13px; color: #64748b;">
                            <span>Subtotal</span>
                            <span style="color: #334155; font-weight: 600; font-variant-numeric: tabular-nums;">${currency}${doc.totals.subtotal.toFixed(2)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 9px; font-size: 13px; color: #64748b;">
                            <span>GST</span>
                            ${doc.gstNotApplicable
                ? `<span style="color: #94a3b8; font-style: italic; font-size: 11px;">Not Applicable</span>`
                : `<span style="color: #334155; font-weight: 600; font-variant-numeric: tabular-nums;">${currency}${(doc.totals.taxAmount || 0).toFixed(2)}</span>`
            }
                        </div>
                        ${doc.totals.discount > 0 ? `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 9px; font-size: 13px; color: #ef4444;">
                            <span>Discount</span>
                            <span style="font-weight: 600; font-variant-numeric: tabular-nums;">-${currency}${doc.totals.discount.toFixed(2)}</span>
                        </div>` : ''}
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 10px; border-top: 2px solid ${brandColor}; font-size: 17px; color: ${brandColor}; font-weight: 900;">
                            <span>Total</span>
                            <span style="font-variant-numeric: tabular-nums;">${currency}${doc.totals.grandTotal.toFixed(2)}</span>
                        </div>
                        ${doc.type === 'quotation' ? (() => {
                const half = (doc.totals.grandTotal / 2);
                return `
                        <div style="margin-top: 12px; border-top: 1px dashed #cbd5e1; padding-top: 10px;">
                            <p style="font-size: 9px; text-transform: uppercase; color: #94a3b8; font-weight: 800; letter-spacing: 1px; margin: 0 0 7px 0;">Payment Schedule</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 12px;">
                                <span style="color: #475569;">🟢 50% to Start</span>
                                <span style="color: #16a34a; font-weight: 700; font-variant-numeric: tabular-nums;">${currency}${half.toFixed(2)}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px;">
                                <span style="color: #475569;">🔵 50% Before Live</span>
                                <span style="color: #2563eb; font-weight: 700; font-variant-numeric: tabular-nums;">${currency}${half.toFixed(2)}</span>
                            </div>
                        </div>`;
            })() : `
                        ${(doc.totals.advance > 0) ? `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 12px; color: #64748b; border-top: 1px dashed #e2e8f0; padding-top: 8px;">
                            <span>Advance Paid</span>
                            <span style="font-weight: 600; font-variant-numeric: tabular-nums;">-${currency}${doc.totals.advance.toFixed(2)}</span>
                        </div>` : ''}
                        ${(doc.totals.balance > 0.01 && doc.status !== 'paid') ? `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 14px; color: #ef4444; font-weight: 800;">
                            <span>Balance Due</span>
                            <span style="font-variant-numeric: tabular-nums;">${currency}${doc.totals.balance.toFixed(2)}</span>
                        </div>` : ''}
                        `}
                    </div>
                </div>

                <!-- PROJECT DETAILS (SCOPE/EXCLUSIONS) -->
                ${(doc.scope || doc.exclusions) ? `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 30px 0; border-top: 2px solid #f1f5f9; padding-top: 22px; page-break-before: always; break-before: page; page-break-inside: avoid; break-inside: avoid;">
                    ${doc.scope ? `
                    <div style="page-break-inside: avoid; break-inside: avoid;">
                        <p style="text-transform: uppercase; color: #94a3b8; font-size: 9px; font-weight: 800; margin: 0 0 10px 0; letter-spacing: 1.5px;">Scope of Work</p>
                        <div style="font-size: 12px; color: #334155; line-height: 1.7;">
                            ${doc.scope.split('\n').filter(l => l.trim()).map(l => `<div style="margin-bottom: 3px; display: flex; gap: 5px; page-break-inside: avoid; break-inside: avoid;"><span style="flex-shrink:0;">•</span><span>${l.startsWith('•') ? l.slice(1).trim() : l}</span></div>`).join('')}
                        </div>
                    </div>` : '<div></div>'}
                    ${doc.exclusions ? `
                    <div style="page-break-inside: avoid; break-inside: avoid;">
                        <p style="text-transform: uppercase; color: #94a3b8; font-size: 9px; font-weight: 800; margin: 0 0 10px 0; letter-spacing: 1.5px;">Exclusions</p>
                        <div style="font-size: 12px; color: #64748b; line-height: 1.7;">
                            ${doc.exclusions.split('\n').filter(l => l.trim()).map(l => `<div style="margin-bottom: 3px; display: flex; gap: 5px; page-break-inside: avoid; break-inside: avoid;"><span style="flex-shrink:0;">•</span><span>${l.startsWith('•') ? l.slice(1).trim() : l}</span></div>`).join('')}
                        </div>
                    </div>` : '<div></div>'}
                </div>` : ''}

                <!-- PAYMENT & TIMELINE -->
                ${(doc.paymentTerms || doc.timeline) ? `
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px 20px; border-radius: 10px; margin-bottom: 35px; display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; align-items: start; border-left: 5px solid ${brandColor}; page-break-inside: avoid; break-inside: avoid;">
                    ${doc.paymentTerms ? `
                    <div>
                        <p style="text-transform: uppercase; color: ${brandColor}; font-size: 9px; font-weight: 800; margin: 0 0 7px 0; letter-spacing: 1px;">Payment Terms</p>
                        <p style="margin: 0; font-size: 12px; color: #1e293b; font-weight: 500; white-space: pre-wrap; line-height: 1.6;">${doc.paymentTerms}</p>
                    </div>` : '<div></div>'}
                    ${(doc.timeline && doc.type === 'quotation') ? `
                    <div style="text-align: right;">
                        <p style="text-transform: uppercase; color: ${brandColor}; font-size: 9px; font-weight: 800; margin: 0 0 7px 0; letter-spacing: 1px;">Estimated Timeline</p>
                        <p style="margin: 0; font-size: 12px; color: #1e293b; font-weight: 700; line-height: 1.5;">${doc.timeline}</p>
                    </div>` : '<div></div>'}
                </div>` : ''}

                <!-- COMPACT FOOTER -->
                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 30px; padding-top: 25px; border-top: 2px solid #f1f5f9; page-break-inside: avoid; break-inside: avoid; align-items: end;">

                    <div>
                        <div style="margin-bottom: 16px;">
                            <p style="text-transform: uppercase; color: #94a3b8; font-size: 9px; font-weight: 800; margin: 0 0 6px 0; letter-spacing: 1px;">Payment &amp; Bank Details</p>
                            <div style="font-size: 12px; color: #475569; line-height: 1.6;">
                                ${this.data.settings.bankDetails ? this.data.settings.bankDetails.replace(/\n/g, '<br>') : 'Contact us for payment.'}
                            </div>
                        </div>

                        <div style="margin-bottom: 16px;">
                            <p style="text-transform: uppercase; color: #94a3b8; font-size: 9px; font-weight: 800; margin: 0 0 6px 0; letter-spacing: 1px;">Terms &amp; Conditions</p>
                            <div style="font-size: 11px; color: #64748b; line-height: 1.5;">
                                ${this.data.settings.terms ? this.data.settings.terms.split('\n').filter(t => t.trim()).map(term => `<div style="margin-bottom:2px;">• ${term.replace(/^\d+\.\s*/, '')}</div>`).join('') : 'Standard terms apply.'}
                            </div>
                        </div>

                        ${this.data.settings.paymentQrUrl ? `
                        <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; padding: 10px 14px; border-radius: 10px; border: 1px solid #e2e8f0; width: fit-content;">
                            <img src="${this.data.settings.paymentQrUrl}" style="width: 80px; height: 80px; border-radius: 8px; background: white; flex-shrink: 0;">
                            <div>
                                <p style="margin: 0; font-size: 10px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.8px;">Scan to Pay</p>
                                <p style="margin: 4px 0 0 0; font-size: 11px; color: #3b82f6; font-weight: 700; font-family: monospace;">${this.data.settings.bankDetails?.split('\n')[0].includes('UPI') ? this.data.settings.bankDetails.split('\n')[0] : 'easwarbaskar25@okaxis'}</p>
                                <p style="margin: 3px 0 0 0; font-size: 9px; color: #94a3b8;">Secure payment via any UPI App</p>
                            </div>
                        </div>` : ''}
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end;">
                        ${this.data.settings.signatureUrl ? `
                            <img src="${this.data.settings.signatureUrl}" style="max-height: 75px; max-width: 170px; display: block; object-fit: contain;">
                        ` : `
                            <div style="width: 160px; height: 50px;"></div>
                        `}
                        <div style="width: 100%; border-top: 1.5px solid #cbd5e1; margin-top: 6px; padding-top: 8px; text-align: center;">
                            <p style="font-weight: 800; color: #0f172a; margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; line-height: 1.3;">${this.data.settings.companyName}</p>
                            <p style="font-size: 9px; color: #94a3b8; margin: 4px 0 0 0; font-weight: 600; text-transform: uppercase; letter-spacing: 1.2px;">Authorized Signatory</p>
                        </div>
                    </div>

                </div>

                <div style="margin-top: 20px; text-align: center; font-size: 10px; color: #cbd5e1; border-top: 1px dashed #f1f5f9; padding-top: 5px;">
                    Thank you for choosing ${this.data.settings.companyName}. We appreciate your business!
                </div>

            </div>
        `;

        container.appendChild(page);
        document.body.appendChild(container);

        const opt = {
            margin: 0.3,
            filename: `${doc.id}.pdf`,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 3, useCORS: true, letterRendering: true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(page).save().then(() => {
            setTimeout(() => {
                document.body.removeChild(container);
            }, 1000);
        });
    },

    emailClient(id) {
        const doc = this.data.documents.find(d => d.id === id);
        if (!doc || !doc.client.email) {
            this.showToast('Note', 'Client email not found. Opening mail anyway.', 'info');
        }

        const subject = `${doc.type === 'quotation' ? 'Quotation' : 'Invoice'} ${doc.id} from ${this.data.settings.companyName}`;
        const body = `Dear ${doc.client.name},\n\nPlease find attached the ${doc.type} #${doc.id}.\n\nTotal: ${this.data.settings.currency}${doc.totals.grandTotal.toFixed(2)}\n\nRegards,\n${this.data.settings.companyName}`;

        window.location.href = `mailto:${doc.client.email || ''}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },

    shareToWhatsapp(id) {
        const doc = this.data.documents.find(d => d.id === id);
        if (!doc) return;

        const currency = this.data.settings.currency || '₹';
        const total = doc.totals.grandTotal.toFixed(2);

        let message = `*Hello ${doc.client.name},*\n\n`;
        message += `Here is your ${doc.type.toUpperCase()} *#${doc.id}* from *${this.data.settings.companyName}*.\n\n`;
        message += `*Amount:* ${currency}${total}\n`;
        message += `*Date:* ${new Date(doc.date).toLocaleDateString()}\n`;
        if (doc.type === 'quotation') {
            message += `*Valid Until:* ${new Date(new Date(doc.date).getTime() + (this.data.settings.validity * 86400000)).toLocaleDateString()}\n`;
        }
        message += `\nPlease check the attached document for details.\n\n`;
        message += `_Sent via ${this.data.settings.companyName}_`;

        const phone = doc.client.phone ? doc.client.phone.replace(/[^0-9]/g, '') : '';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    },

    exportData() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "eantrax_backup_" + new Date().toISOString().split('T')[0] + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    },

    exportDatabase() {
        const dataStr = JSON.stringify(this.data, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileDefaultName = `eantrax_backup_${new Date().toISOString().split('T')[0]}.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        this.showToast('Backup Created', 'Your database has been exported.', 'success');
    },

    importDatabase(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                // Basic validation
                if (imported.documents && imported.clients && imported.settings) {
                    if (confirm('This will overwrite all existing data. Are you sure?')) {
                        this.data = imported;
                        this.saveData();
                        this.showToast('Success', 'Database restored successfully!', 'success');
                        setTimeout(() => window.location.reload(), 1500);
                    }
                } else {
                    this.showToast('Import Error', 'Invalid backup file format.', 'error');
                }
            } catch (err) {
                this.showToast('Import Error', 'Failed to read backup file.', 'error');
            }
        };
        reader.readAsText(file);
    },

    resetDocuments() {
        if (confirm('WARNING: This will delete ALL Quotations and Invoices. Clients and Settings will be preserved.\n\nAre you sure you want to proceed?')) {
            this.data.documents = [];
            this.saveData();
            this.showToast('Documents Cleared', 'All invoices and quotations have been deleted.', 'success');
            setTimeout(() => window.location.reload(), 1500);
        }
    },

    resetDatabase() {
        if (confirm('CRITICAL WARNING: This will PERMANENTLY DELETE ALL your data (Including Quotations, Invoices, Clients, and Settings). This action CANNOT be undone.\n\nAre you absolutely sure you want to proceed?')) {
            if (confirm('Final Confirmation: Are you really sure? Everything will be lost.')) {
                localStorage.removeItem('eantrax_data');
                this.showToast('Reset Complete', 'All data has been wiped.', 'success');
                setTimeout(() => window.location.reload(), 1500);
            }
        }
    },

    toggleSidebar() {
        const sidebar = document.getElementById('main-sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) sidebar.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
    },

    closeSidebar() {
        const sidebar = document.getElementById('main-sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    },

    showToast(title, msg, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        let icon = 'fa-info-circle';
        if (type === 'success') icon = 'fa-check-circle';
        if (type === 'error') icon = 'fa-exclamation-triangle';

        toast.innerHTML = `
            <div class="toast-icon"><i class="fa-solid ${icon}"></i></div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-msg">${msg}</div>
            </div>
        `;

        container.appendChild(toast);

        // Auto remove
        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    },

    toggleTax() {
        const checkbox = document.getElementById('tax-enable');
        const input = document.getElementById('tax-rate');
        if (checkbox.checked) {
            input.value = this.data.settings.taxRate || 18;
            input.readOnly = false;
        } else {
            input.value = 0;
            input.readOnly = true;
        }
        this.calculateTotals();
    }
};

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    app.init();
});


