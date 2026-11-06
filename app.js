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
        clients: [
            {
                address: "Chennai",
                email: "easwarbaskar25@gmail.com",
                name: "Easwar",
                phone: "8681971839"
            },
            {
                address: "Chennai",
                email: "96photography@gmail.com",
                name: "Arun Rajendran",
                phone: "7363939733"
            },
            {
                address: "Coimbatore",
                email: "easwarbaskar25@gmail.com",
                name: "Naveen",
                phone: "9842430460"
            },
            {
                address: "Coimbatore",
                email: "",
                name: "Selvam (Tekton press tools)",
                phone: "6380399378"
            }
        ],
        crm: {
            leads: []
        },
        settings: {
            companyName: "Eantrax Web Solutions & AI Integration",
            address: "29/67, 33rd GKM Colony, Kolathur, \nChennai - 82",
            email: "contact@eantrax.com",
            phone: "8681971839",
            currency: "₹",
            taxRate: 18,
            nextQuoteId: 1073,
            nextInvoiceId: 5014,
            logoUrl: "logo.png",
            website: "www.eantrax.com",
            tagline: "Quotation Mgr",
            bankDetails: "easwarbaskar25@okaxis",
            terms: "1. Warranty: 30 days technical support after deployment.\n2. IP Rights: Ownership transfers to client only after full payment.\n3. Jurisdication: All disputes are subject to local jurisdiction.",
            validity: 30,
            advanceClause: "50% advance required before project start.",
            brandColor: "#0066ff",
            signatureUrl: "signature.jpg",
            paymentQrUrl: "qr.jpg",
            gstRegistered: false,
            isGstRegistered: false,
            plan: "premium",
            qrCodeUrl: "",
            upiId: ""
        },
        catalog: [
            {
                name: "Starter Business Website (3-5 Pages)",
                price: 7500,
                category: "Websites & Landing Pages",
                scope: "- 3-5 Pages (Home, About Us, Services, Contact)\n- Mobile Responsive Design\n- Contact Form & WhatsApp Integration\n- Basic On-Page SEO Setup",
                exclusions: "- Domain & Hosting\n- Logo Design\n- Content Writing",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "7-10 working days"
            },
            {
                name: "Professional Business Website (6-10 Pages)",
                price: 15000,
                category: "Websites & Landing Pages",
                scope: "- 6-10 Pages\n- Blog Setup\n- Gallery/Portfolio Integration\n- Mobile Responsive & Animations\n- Basic On-Page SEO",
                exclusions: "- Domain & Hosting\n- Content Writing",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "10-15 working days"
            },
            {
                name: "Business Pro Website (10-20 Pages)",
                price: 30000,
                category: "Websites & Landing Pages",
                scope: "- 10-20 Pages\n- CMS & Admin Panel\n- Advanced SEO\n- Analytics Integration",
                exclusions: "- Domain & Hosting\n- Content Writing",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "15-25 working days"
            },
            {
                name: "E-Commerce Website (Basic Store)",
                price: 25000,
                category: "Websites & Landing Pages",
                scope: "- Up to 50 Products Setup\n- Payment Gateway Integration\n- Order Management System\n- Mobile Responsive",
                exclusions: "- Product Photography\n- Advanced Custom Features",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "15-20 working days"
            },
            {
                name: "Basic Static Website Development - Manufacturing Company",
                price: 9999,
                category: "Websites & Landing Pages",
                scope: "- 5 Pages (Home, About Us, Products, Infrastructure, Contact)\n- Mobile Responsive Design\n- Contact Enquiry Form (Email Integration)\n- WhatsApp Chat Button\n- Google Maps Integration\n- Basic On-Page SEO Setup\n- 2 Revision Rounds",
                exclusions: "- Domain Registration\n- Hosting Charges\n- Business Email Setup\n- Product Catalogue PDF Creation\n- Logo Design\n- Content Writing (If not provided)\n- Additional Pages Beyond 5\n- Dynamic/Admin Panel Features",
                paymentTerms: "50% Advance to Initiate Project\n50% Before Final Deployment\n\nProject starts only after advance confirmation.",
                timeline: "7-10 working days (Subject to receiving all required content)"
            },
            {
                name: "Website Modernization & Redesign (Visual Refresh)",
                price: 10000,
                category: "Websites & Landing Pages",
                scope: "- Website Visual Redesign (UI/UX)\n- Mobile Responsiveness\n- Color Palette & Typography Update\n- Layout Improvements",
                exclusions: "- Content Writing\n- Backend / CMS Migration",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "7-10 working days"
            },
            {
                name: "Landing Page Development (Single Section)",
                price: 5000,
                category: "Websites & Landing Pages",
                scope: "- Single Page (One-Pager)\n- Lead Capture Form\n- Call to Action (CTA) Optimization\n- Mobile Responsive",
                exclusions: "- Multi-page Setup\n- Content Writing\n- Domain & Hosting",
                paymentTerms: "50% Advance or 100% Full Payment",
                timeline: "3-5 working days"
            },
            {
                name: "Domain Registration (1 Year)",
                price: 1000,
                isRecurring: true,
                recurringPeriod: "yearly",
                category: "Domain, Hosting & Email",
                scope: "- Domain Name Registration (1 Year)\n- DNS Setup\n- Domain Management",
                exclusions: "- Hosting Setup\n- Email Setup",
                paymentTerms: "50% Advance or 100% Full Payment",
                timeline: "1-2 working days"
            },
            {
                name: "Domain + Hosting Setup (1 Year)",
                price: 3000,
                isRecurring: true,
                recurringPeriod: "yearly",
                category: "Domain, Hosting & Email",
                scope: "- Domain Name Registration (1 Year)\n- Shared Web Hosting (1 Year)\n- DNS Setup & SSL Certificate\n- Hosting Configuration",
                exclusions: "- Website Development\n- Content Writing",
                paymentTerms: "50% Advance or 100% Full Payment",
                timeline: "1-2 working days"
            },
            {
                name: "Domain Name (in & com)",
                price: 2499,
                isRecurring: true,
                recurringPeriod: "Annually",
                category: "Domain, Hosting & Email",
                scope: "- Domain Name Registration (1 Year)\n- DNS Setup",
                exclusions: "- Hosting Setup",
                paymentTerms: "50% Advance to Initiate Project\n50% Before Final Deployment",
                timeline: "1-2 working days"
            },
            {
                name: "Cloud Web Hosting",
                price: 2499,
                isRecurring: true,
                recurringPeriod: "Annually",
                category: "Domain, Hosting & Email",
                scope: "- Shared Web Hosting (1 Year)\n- SSL Certificate & DNS Configuration",
                exclusions: "- Domain Registration",
                paymentTerms: "50% Advance to Initiate Project\n50% Before Final Deployment",
                timeline: "1-2 working days"
            },
            {
                name: "Business Email Setup",
                price: 1500,
                category: "Domain, Hosting & Email",
                scope: "- Business Email Creation\n- Webmail Setup\n- DNS configuration for Email (MX, SPF, DKIM)",
                exclusions: "- Domain Name Registration",
                paymentTerms: "50% Advance or 100% Full Payment",
                timeline: "1-2 working days"
            },
            {
                name: "Basic AMC (Annual Maintenance)",
                price: 4000,
                isRecurring: true,
                recurringPeriod: "yearly",
                category: "AMC & Maintenance",
                scope: "- Technical Support\n- Minor Updates (Text & Images)\n- Website Backups (Monthly)\n- Uptime Monitoring",
                exclusions: "- New Page Development\n- Major Redesign",
                paymentTerms: "50% Advance or 100% Full Payment",
                timeline: "1 Year Contract"
            },
            {
                name: "Standard AMC (Annual Maintenance)",
                price: 8000,
                isRecurring: true,
                recurringPeriod: "yearly",
                category: "AMC & Maintenance",
                scope: "- Priority Technical Support\n- Weekly Website Backups\n- Security Monitoring & Malware Scans\n- Plugin & Core Updates",
                exclusions: "- New App Development\n- Complete Redesign",
                paymentTerms: "50% Advance or 100% Full Payment",
                timeline: "1 Year Contract"
            },
            {
                name: "Website Maintenance",
                price: 4999,
                isRecurring: true,
                recurringPeriod: "Annually",
                category: "AMC & Maintenance",
                scope: "- Updates & Backups (Annual)",
                exclusions: "- Major redesign",
                paymentTerms: "50% Advance to Initiate Project\n50% Before Final Deployment",
                timeline: "1 Year Contract"
            },
            {
                name: "Basic SEO Setup (Advanced)",
                price: 4000,
                category: "SEO & Digital Packages",
                scope: "- On-Page Optimization\n- Meta Tags & Descriptions Setup\n- Sitemap Generation & Submission\n- Google Search Console Setup",
                exclusions: "- Off-Page SEO (Backlinking)\n- Ongoing Monthly SEO",
                paymentTerms: "50% Advance or 100% Full Payment",
                timeline: "5-7 working days"
            },
            {
                name: "Power Automate Workflow (Simple)",
                price: 7500,
                category: "Power Platform & SharePoint",
                scope: "- Creation of 1 Simple Automated Flow\n- Up to 2 App Integrations\n- Basic Testing & Deployment",
                exclusions: "- Complex Data Transformations\n- Third-party API purchases",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "3-5 working days"
            },
            {
                name: "Power Automate Workflow (Medium)",
                price: 15000,
                category: "Power Platform & SharePoint",
                scope: "- Creation of 1 Medium Automated Flow\n- Multi-step Approvals & Conditions\n- Up to 4 App Integrations\n- Error Handling",
                exclusions: "- Custom Connector Development",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "7-10 working days"
            },
            {
                name: "Power Apps Development (Canvas App)",
                price: 20000,
                category: "Power Platform & SharePoint",
                scope: "- Single Canvas App (Up to 5 Screens)\n- Data Source Integration (SharePoint/Excel)\n- UI/UX Design\n- Testing & Deployment",
                exclusions: "- Dataverse Setup\n- Advanced Premium Connectors",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "15-20 working days"
            },
            {
                name: "Power BI Dashboard (Single)",
                price: 10000,
                category: "Power Platform & SharePoint",
                scope: "- Single Interactive Dashboard\n- Data Connection (Standard Sources)\n- Visualizations & KPI Tracking\n- Basic Data Cleaning",
                exclusions: "- Advanced DAX Scripting\n- Data Warehouse Setup",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "7-10 working days"
            },
            {
                name: "SharePoint Basic Setup",
                price: 10000,
                category: "Power Platform & SharePoint",
                scope: "- SharePoint Site Creation\n- Basic Document Library Setup\n- Permissions & Access Control\n- Branded Theme Application",
                exclusions: "- Custom SPFx Development\n- Advanced Workflows",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "5-7 working days"
            },
            {
                name: "Starter Digital Package",
                price: 12000,
                category: "SEO & Digital Packages",
                scope: "- Business Website (5 pages)\n- Domain + Hosting (1 year)\n- Basic SEO Setup\n- WhatsApp Integration",
                exclusions: "- Content Writing\n- Logo Design",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "7-10 working days"
            },
            {
                name: "Professional Digital Package",
                price: 25000,
                category: "SEO & Digital Packages",
                scope: "- Business Website (8-10 pages)\n- Domain + Hosting (1 year)\n- Business Email Setup\n- Advanced SEO\n- Annual Maintenance (1 year)",
                exclusions: "- Content Writing\n- Logo Design",
                paymentTerms: "50% Advance\n50% Before Deployment",
                timeline: "15-20 working days"
            },
            {
                name: "Power Platform Starter Package",
                price: 25000,
                category: "SEO & Digital Packages",
                scope: "- 1 Power Automate Flow\n- 1 Simple Canvas App\n- Basic Power BI Dashboard\n- Training Session",
                exclusions: "- Complex Custom Integrations",
                paymentTerms: "50% Advance\n50% Before Delivery",
                timeline: "10-15 working days"
            }
        ],
        skills: [
            { title: "Front-End Development", description: "Building responsive websites using HTML, CSS, JavaScript, and structured layouts tailored for business requirements." },
            { title: "Responsive Website Design", description: "Designing websites that work clearly across desktop, tablet, and mobile with a strong focus on readability and presentation." },
            { title: "Hosting & Deployment", description: "Deploying websites on live hosting environments, configuring SSL, DNS, and production launch settings." },
            { title: "Domain & DNS Management", description: "Handling domain purchase, nameserver updates, DNS records, and domain-to-hosting connections." },
            { title: "Cloudflare Configuration", description: "Setting up Cloudflare for SSL, caching, routing, and optimized uptime and protection." },
            { title: "Website Maintenance", description: "Managing updates, bug fixes, content changes, and performance improvements after launch." },
            { title: "Visual Asset Support", description: "Creating banners, mockups, and supporting graphics to elevate the website presentation." }
        ]
    },
    chartTimeframe: 'month',
    charts: {},
    activeModalId: null,
    previousFocus: null,
    documentsStatusFilter: 'all',
    clientSearchText: '',
    clientSortMode: 'name-asc',
    catalogSearchText: '',
    catalogSortMode: 'name-asc',
    catalogRecurringOnly: false,
    selectedCatalogCategory: null,
    crmSearchText: '',
    crmStageFilter: 'all',
    crmStateFilter: 'all',
    crmEditingLeadId: null,
    currentUserId: null,
    authBound: false,
    storageWarningShown: false,
    localStorageAvailable: null,
    started: false,
    cloudListenerRef: null,
    connectedListenerBound: false,
    isInternalCloudWrite: false,
    syncStatus: 'synced',
    initialCloudLoaded: false,

    init() {
        if (this.started) return;
        this.setupUiEvents();

        if (typeof ENABLE_CLOUD_SYNC !== 'undefined' && ENABLE_CLOUD_SYNC && typeof firebase !== 'undefined' && typeof firebase.auth === 'function') {
            this.setupAuthHandlers();
            return;
        }

        this.currentUserId = 'local';
        this.startApp();
    },

    startApp() {
        if (this.started) return;
        this.started = true;

        this.loadData();
        this.sanitizeEncodingArtifacts();
        this.data.crm = this.data.crm || { leads: [] };
        this.data.crm.leads = Array.isArray(this.data.crm.leads) ? this.data.crm.leads.map((lead) => this.normalizeCrmLead(lead)) : [];

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
        if (this.data.settings.terms && this.data.settings.terms.includes("Advance payment is required")) {
            this.data.settings.terms = "1. Warranty: 30 days technical support after deployment.\n2. IP Rights: Ownership transfers to client only after full payment.\n3. Jurisdication: All disputes are subject to local jurisdiction.";
        }

        // Force update signature for existing users if missing
        if (!this.data.settings.signatureUrl || this.data.settings.signatureUrl === "") {
            this.data.settings.signatureUrl = "signature.jpg";
        }

        // Force Sync specific Catalog items with the new details
        const mainService = (this.data.catalog || []).find(p => p && p.name && p.name.includes("Basic Static Website"));
        if (mainService) {
            // Update default QR for existing users if it was the old value
            if (this.data.settings.paymentQrUrl === "upi_qr.png") {
                this.data.settings.paymentQrUrl = "qr.jpg";
            }

            mainService.scope = "- 5 Pages (Home, About Us, Products, Infrastructure, Contact)\n- Mobile Responsive Design\n- Contact Enquiry Form (Email Integration)\n- WhatsApp Chat Button\n- Google Maps Integration\n- Basic On-Page SEO Setup\n- 2 Revision Rounds";
            mainService.exclusions = "- Domain Registration\n- Hosting Charges\n- Business Email Setup\n- Product Catalogue PDF Creation\n- Logo Design\n- Content Writing (If not provided)\n- Additional Pages Beyond 5\n- Dynamic/Admin Panel Features";
            mainService.paymentTerms = "50% Advance to Initiate Project\n50% Before Final Deployment\n\nProject starts only after advance confirmation.";
            mainService.timeline = "7-10 working days (Subject to receiving all required content)";
        }

        this.saveToLocalOnly();
        console.log("Applying settings with logo:", this.data.settings.logoUrl);
        this.applySettings();
        this.setupNavigation();
        this.setupFormListeners();
        this.renderDashboard();

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

    setupAuthHandlers() {
        if (this.authBound) return;
        this.authBound = true;

        const auth = firebase.auth();
        const authScreen = document.getElementById('auth-screen');
        const emailEl = document.getElementById('auth-email');
        const passEl = document.getElementById('auth-password');
        const errorEl = document.getElementById('auth-error');
        const loginBtn = document.getElementById('auth-login-btn');
        const registerBtn = document.getElementById('auth-register-btn');
        const googleBtn = document.getElementById('auth-google-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const showPassCheckbox = document.getElementById('show-password');

        const setAuthError = (msg) => {
            if (errorEl) errorEl.textContent = msg || '';
        };
        const setAuthBusy = (busy) => {
            if (loginBtn) loginBtn.disabled = !!busy;
            if (registerBtn) registerBtn.disabled = !!busy;
        };
        const getCreds = () => ({
            email: (emailEl ? emailEl.value : '').trim(),
            password: (passEl ? passEl.value : '').trim()
        });

        if (googleBtn) {
            googleBtn.addEventListener('click', async () => {
                setAuthBusy(true);
                setAuthError('');
                try {
                    const provider = new firebase.auth.GoogleAuthProvider();
                    await auth.signInWithPopup(provider);
                } catch (e) {
                    setAuthError(e && e.message ? e.message : 'Google login failed.');
                } finally {
                    setAuthBusy(false);
                }
            });
        }

        if (showPassCheckbox && passEl) {
            showPassCheckbox.addEventListener('change', (e) => {
                passEl.type = e.target.checked ? 'text' : 'password';
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', async () => {
                try {
                    if (this.cloudListenerRef) {
                        this.cloudListenerRef.off();
                        this.cloudListenerRef = null;
                    }
                    await auth.signOut();
                    window.location.reload();
                } catch (e) {
                    this.showToast('Logout Failed', 'Please try again.', 'error');
                }
            });
        }

        if (loginBtn) {
            loginBtn.addEventListener('click', async () => {
                const { email, password } = getCreds();
                if (!email || !password) {
                    setAuthError('Enter email and password.');
                    return;
                }
                setAuthBusy(true);
                setAuthError('');
                try {
                    await auth.signInWithEmailAndPassword(email, password);
                } catch (e) {
                    setAuthError(e && e.message ? e.message : 'Login failed.');
                } finally {
                    setAuthBusy(false);
                }
            });
        }

        if (registerBtn) {
            registerBtn.addEventListener('click', async () => {
                const { email, password } = getCreds();
                if (!email || !password) {
                    setAuthError('Enter email and password.');
                    return;
                }
                if (password.length < 6) {
                    setAuthError('Password must be at least 6 characters.');
                    return;
                }
                setAuthBusy(true);
                setAuthError('');
                try {
                    await auth.createUserWithEmailAndPassword(email, password);
                } catch (e) {
                    setAuthError(e && e.message ? e.message : 'Registration failed.');
                } finally {
                    setAuthBusy(false);
                }
            });
        }

        auth.onAuthStateChanged((user) => {
            const loggedIn = !!user;
            if (authScreen) authScreen.style.display = loggedIn ? 'none' : 'flex';
            if (logoutBtn) logoutBtn.style.display = loggedIn ? 'inline-flex' : 'none';

            if (!loggedIn) {
                if (this.cloudListenerRef) {
                    this.cloudListenerRef.off();
                    this.cloudListenerRef = null;
                }
                this.currentUserId = null;
                this.updateSyncStatus('offline');
                return;
            }

            this.currentUserId = user.uid;
            if (!this.started) {
                this.startApp();
            } else {
                this.loadData();
            }
        });
    },

    getLocalStorageKey() {
        if (!this.currentUserId || this.currentUserId === 'local') return 'eantrax_data';
        return `eantrax_data_${this.currentUserId}`;
    },

    getCloudRef() {
        if (!this.currentUserId) return null;
        return firebase.database().ref(`users/${this.currentUserId}/app_data`);
    },

    applySettings() {
        const s = this.data.settings;

        // Sanitize file:/// URLs to resolve local system path issues
        const sanitizeUrl = (url) => {
            if (!url) return url;
            if (url.startsWith('file:///')) {
                const parts = url.split('/');
                return parts[parts.length - 1];
            }
            return url;
        };

        if (s) {
            s.logoUrl = sanitizeUrl(s.logoUrl);
            s.signatureUrl = sanitizeUrl(s.signatureUrl);
            s.paymentQrUrl = sanitizeUrl(s.paymentQrUrl);
        }

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

        if (typeof ENABLE_CLOUD_SYNC !== 'undefined' && ENABLE_CLOUD_SYNC && typeof firebase !== 'undefined' && this.currentUserId && this.currentUserId !== 'local') {
            const dbRef = this.getCloudRef();
            if (!dbRef) return;

            this.updateSyncStatus('syncing');

            dbRef.once('value').then((snapshot) => {
                const cloudData = snapshot.val();
                if (cloudData) {
                    console.log("Cloud data loaded successfully.");
                    this.data = this.normalizeLoadedData(cloudData);
                    this.saveToLocalOnly();
                    this.initialCloudLoaded = true;
                    this.updateSyncStatus('synced');
                    this.refreshActiveViews();
                } else {
                    console.log("No cloud data found. Uploading initial local data to cloud.");
                    this.initialCloudLoaded = true;
                    this.saveData();
                }

                // Attach real-time sync listener for multi-device live sync
                this.setupRealtimeSync(dbRef);
            }).catch(error => {
                console.error("Firebase read error:", error);
                this.updateSyncStatus('offline');
                this.setupRealtimeSync(dbRef);
            });
        }
    },

    setupRealtimeSync(dbRef) {
        if (!dbRef) return;

        if (this.cloudListenerRef) {
            this.cloudListenerRef.off();
            this.cloudListenerRef = null;
        }

        this.cloudListenerRef = dbRef;
        dbRef.on('value', (snapshot) => {
            // Ignore echo of our own recent write
            if (this.isInternalCloudWrite) {
                this.isInternalCloudWrite = false;
                return;
            }

            const cloudData = snapshot.val();
            if (cloudData) {
                console.log("Realtime multi-device update received.");
                this.data = this.normalizeLoadedData(cloudData);
                this.saveToLocalOnly();
                this.updateSyncStatus('synced');
                this.refreshActiveViews();
            }
        }, (error) => {
            console.error("Firebase realtime sync error:", error);
            this.updateSyncStatus('error');
        });

        // Real-time connection status listener
        if (!this.connectedListenerBound && typeof firebase !== 'undefined' && firebase.database) {
            this.connectedListenerBound = true;
            firebase.database().ref('.info/connected').on('value', (snap) => {
                const isConnected = snap.val() === true;
                this.updateSyncStatus(isConnected ? 'synced' : 'offline');
            });
        }
    },

    refreshActiveViews() {
        this.applySettings();
        const activeSection = document.querySelector('.view-section:not(.hidden)');
        const activeId = activeSection ? activeSection.id : 'dashboard';

        if (activeId === 'dashboard') {
            this.renderDashboard();
        } else if (activeId === 'invoices') {
            this.renderDocumentsList();
        } else if (activeId === 'clients') {
            this.renderClientList();
        } else if (activeId === 'catalog') {
            this.renderCatalogList();
        } else if (activeId === 'lead-qualifier') {
            this.renderCRM();
        } else if (activeId === 'settings') {
            this.loadSettingsForm();
        } else if (activeId === 'client-history') {
            const breadcrumb = document.getElementById('profile-breadcrumb');
            if (breadcrumb && breadcrumb.textContent) {
                this.showClientHistory(breadcrumb.textContent);
            }
        }
    },

    updateSyncStatus(status) {
        this.syncStatus = status;
        const mobileEl = document.getElementById('mobile-sync-status');
        const desktopEl = document.getElementById('desktop-sync-status');

        const configs = {
            synced: { cls: 'synced', icon: 'fa-cloud', text: 'Synced', title: 'Connected & synced with cloud. Tap to refresh.' },
            syncing: { cls: 'syncing', icon: 'fa-arrows-rotate fa-spin', text: 'Syncing...', title: 'Syncing changes with cloud...' },
            offline: { cls: 'offline', icon: 'fa-cloud-slash', text: 'Offline', title: 'Offline. Changes saved locally and will sync when back online.' },
            error: { cls: 'error', icon: 'fa-triangle-exclamation', text: 'Sync Error', title: 'Cloud sync error. Check internet connection.' }
        };

        const cfg = configs[status] || configs.synced;

        [mobileEl, desktopEl].forEach(el => {
            if (!el) return;
            el.className = `cloud-sync-pill ${cfg.cls}`;
            el.title = cfg.title;
            const span = el.querySelector('span');
            const icon = el.querySelector('i');
            if (span) span.textContent = cfg.text;
            if (icon) icon.className = `fa-solid ${cfg.icon}`;
        });
    },

    forceSyncCloud() {
        if (!this.currentUserId || this.currentUserId === 'local') {
            this.showToast('Local Mode', 'Sign in to sync your data across devices.', 'info');
            return;
        }
        this.showToast('Syncing', 'Fetching latest data from cloud...', 'info');
        this.loadData();
    },

    loadDataFromLocal() {
        const savedData = this.readPersistedData();
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                this.data = this.normalizeLoadedData(parsed);
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
                    scope: "- 5 Pages (Home, About Us, Products, Infrastructure, Contact)\n- Mobile Responsive Design\n- Contact Enquiry Form (Email Integration)\n- WhatsApp Chat Button\n- Google Maps Integration\n- Basic On-Page SEO Setup\n- 2 Revision Rounds",
                    exclusions: "- Domain Registration\n- Hosting Charges\n- Business Email Setup\n- Product Catalogue PDF Creation\n- Logo Design\n- Additional Pages Beyond 5\n- Dynamic/Admin Panel Features",
                    paymentTerms: "50% Advance to Initiate Project\n50% Before Final Deployment",
                    timeline: "7-10 working days",
                    status: 'draft',
                    created_at: new Date().toISOString()
                }
            );
        }
    },

    mergeCatalogs(defaultCatalog, importedCatalog) {
        if (!Array.isArray(importedCatalog)) return defaultCatalog || [];
        const merged = [...(defaultCatalog || [])];
        importedCatalog.forEach(item => {
            if (!item || !item.name) return;
            const exists = merged.some(m => m.name.toLowerCase() === item.name.toLowerCase());
            if (!exists) {
                merged.push(item);
            }
        });
        return merged;
    },

    normalizeLoadedData(payload = {}) {
        const defaults = {
            documents: [],
            clients: [],
            crm: { leads: [] },
            catalog: this.data && this.data.catalog ? this.data.catalog : [],
            settings: { ...this.data.settings }
        };

        const toArray = (val) => {
            if (!val) return [];
            if (Array.isArray(val)) return val;
            if (typeof val === 'object') {
                return Object.keys(val).map(k => val[k]).filter(item => item !== null && item !== undefined);
            }
            return [];
        };

        const rawDocuments = toArray(payload.documents).map(doc => {
            if (doc && doc.totals) {
                const adv = parseFloat(doc.totals.advance) || 0;
                const grand = parseFloat(doc.totals.grandTotal) || (parseFloat(doc.total) || 0);
                if (adv > 0) {
                    if (doc.totals.balance === undefined || isNaN(doc.totals.balance)) {
                        doc.totals.balance = Math.max(0, grand - adv);
                    }
                    if (doc.totals.balance <= 0.01) {
                        doc.status = 'paid';
                    } else if (doc.status === 'draft') {
                        doc.status = doc.type === 'quotation' ? 'accepted' : 'invoiced';
                    }
                }
            }
            return doc;
        });
        const rawClients = toArray(payload.clients);
        const rawCatalog = toArray(payload.catalog);
        const rawLeads = toArray(payload.crm?.leads);

        const normalized = {
            documents: rawDocuments,
            clients: rawClients,
            crm: {
                leads: rawLeads.map((lead) => this.normalizeCrmLead(lead))
            },
            catalog: this.mergeCatalogs(defaults.catalog, rawCatalog),
            settings: { ...defaults.settings, ...(payload.settings || {}) }
        };

        return normalized;
    },

    getFallbackStorageKey() {
        return 'eantrax_data_session';
    },

    isLocalStorageAccessible() {
        if (this.localStorageAvailable !== null) return this.localStorageAvailable;
        try {
            const testKey = '__eantrax_storage_test';
            localStorage.setItem(testKey, '1');
            localStorage.removeItem(testKey);
            this.localStorageAvailable = true;
        } catch (error) {
            this.localStorageAvailable = false;
            console.warn("Local storage unavailable:", error);
        }
        return this.localStorageAvailable;
    },

    readSessionStorage() {
        if (typeof sessionStorage === 'undefined') return null;
        try {
            return sessionStorage.getItem(this.getFallbackStorageKey());
        } catch (error) {
            console.error("Session storage unavailable:", error);
            return null;
        }
    },

    writeSessionStorage(value) {
        if (typeof sessionStorage === 'undefined') return;
        try {
            sessionStorage.setItem(this.getFallbackStorageKey(), value);
        } catch (error) {
            console.error("Session storage unavailable:", error);
        }
    },

    ensureStorageWarning() {
        if (!this.storageWarningShown) {
            this.showToast('Save Failed', 'Browser storage is unavailable - enable cookies/storage or try a different browser.', 'error');
            this.storageWarningShown = true;
        }
    },

    readPersistedData() {
        let saved = null;
        if (this.isLocalStorageAccessible()) {
            try {
                const localKey = this.getLocalStorageKey();
                saved = localStorage.getItem(localKey) || localStorage.getItem('eantrax_data');
            } catch (error) {
                this.localStorageAvailable = false;
                console.error("Local storage read error:", error);
            }
            if (saved) return saved;
        }
        return this.readSessionStorage();
    },

    saveToLocalOnly() {
        const payload = JSON.stringify(this.data);

        if (this.isLocalStorageAccessible()) {
            try {
                const localKey = this.getLocalStorageKey();
                localStorage.setItem(localKey, payload);
                localStorage.setItem('eantrax_data', payload);
            } catch (error) {
                this.localStorageAvailable = false;
                this.ensureStorageWarning();
                this.writeSessionStorage(payload);
            }
        } else {
            this.ensureStorageWarning();
            this.writeSessionStorage(payload);
        }
    },

    saveData() {
        this.saveToLocalOnly();

        // Push to cloud if enabled
        if (typeof ENABLE_CLOUD_SYNC !== 'undefined' && ENABLE_CLOUD_SYNC && typeof firebase !== 'undefined' && this.currentUserId && this.currentUserId !== 'local') {
            const dbRef = this.getCloudRef();
            if (!dbRef) return true;

            this.isInternalCloudWrite = true;
            this.updateSyncStatus('syncing');

            dbRef.set(this.data)
                .then(() => {
                    this.updateSyncStatus('synced');
                })
                .catch(error => {
                    console.error("Firebase write error:", error);
                    this.updateSyncStatus('error');
                });
        }

        return true;
    },

    setupNavigation() {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                const targetId = link.getAttribute('data-target');
                this.navigateTo(targetId);
            });
        });
    },

    normalizeTextValue(value) {
        if (typeof value !== 'string') return value;
        let out = value;
        const replacements = [
            ['\u00e2\u201a\u00b9', '\u20B9'],
            ['\u20b9', '\u20B9'],
            ['\u00e2\u20ac\u00a2', '-'],
            ['\u2022', '-'],
            ['\u00e2\u20ac\u201c', '-'],
            ['\u2013', '-'],
            ['\u00c3\u2014', 'x'],
            ['\u00f0\u0178\u201d\u201e', ''],
            ['\u00f0\u0178\u201d\u00b4', ''],
            ['\u00f0\u0178\u0178\u00a0', ''],
            ['\u00f0\u0178\u0178\u00a1', ''],
            ['\u00f0\u0178\u0178\u00a2', ''],
            ['\u00f0\u0178\u201d\u00b5', ''],
            ['\u00f0\u0178\u201d\u00a5', ''],
            ['\u00e2\u009d\u0152', ''],
            ['\u00e2\u008f\u00b0', '']
        ];
        replacements.forEach(([from, to]) => {
            out = out.split(from).join(to);
        });
        return out;
    },

    sanitizeEncodingArtifacts() {
        const walk = (node) => {
            if (Array.isArray(node)) return node.map(walk);
            if (node && typeof node === 'object') {
                Object.keys(node).forEach((key) => {
                    node[key] = walk(node[key]);
                });
                return node;
            }
            if (typeof node === 'string') return this.normalizeTextValue(node);
            return node;
        };

        this.data = walk(this.data);
        if (this.data?.settings?.currency) {
            this.data.settings.currency = this.normalizeTextValue(this.data.settings.currency) || '\u20B9';
            if (/^(rs|inr)$/i.test(this.data.settings.currency.trim())) {
                this.data.settings.currency = '\u20B9';
            }
        }
    },

    navigateTo(targetId) {
        console.log('Navigating to:', targetId);
        document.querySelectorAll('.view-section').forEach(section => {
            section.classList.add('hidden');
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => {
            const isActive = link.getAttribute('data-target') === targetId;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
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
                if (targetId === 'lead-qualifier') this.renderCRM();
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
        this.renderSkillCards();
    },

    addItem() {
        const tbody = document.getElementById('items-body');
        const row = document.createElement('tr');
        row.className = 'item-row';
        const currency = this.data.settings.currency || '\u20B9';
        row.innerHTML = `
            <td>
                <input type="text" class="form-control item-desc" placeholder="Service/Product Description" list="catalog-list">
                <span class="item-recurring-badge" style="display:none; font-size:0.68rem; color:#7c3aed; background:#ede9fe; padding:2px 7px; border-radius:10px; margin-top:3px; display:none;"><span class="item-recurring-label">Annual</span> Renewal</span>
                <input type="hidden" class="item-recurring" value="">
                <input type="hidden" class="item-recurring-period" value="">
            </td>
            <td><input type="number" class="form-control item-qty" value="1" min="1"></td>
            <td><input type="number" class="form-control item-price" value="0" min="0" step="0.01"></td>
            <td class="item-total">${currency}0.00</td>
            <td><button type="button" class="btn btn-outline item-remove-btn" style="color: var(--danger-color); border-color: var(--danger-color)"><i class="fa-solid fa-trash"></i></button></td>
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

            if (product.scope) scopeField.value = product.scope;
            if (product.exclusions) exclusionsField.value = product.exclusions;
            if (product.paymentTerms) paymentTermsField.value = product.paymentTerms;
            if (product.timeline) timelineField.value = product.timeline;

            this.calculateTotals();
        }
    },

    renderSkillCards() {
        const container = document.getElementById('skills-grid');
        if (!container) return;
        if (!Array.isArray(this.data.skills) || this.data.skills.length === 0) {
            container.innerHTML = '<p style="color:#64748b; margin:0;">Core skills will appear here when configured.</p>';
            return;
        }

        container.innerHTML = this.data.skills.map(skill => `
            <div class="skill-card">
                <h4>${skill.title}</h4>
                <p>${skill.description}</p>
            </div>
        `).join('');
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

        // Settings Color Picker Label Sync
        const colorInput = document.getElementById('settings-color');
        if (colorInput) {
            colorInput.addEventListener('input', (e) => {
                const label = document.getElementById('color-value');
                if (label) label.textContent = e.target.value.toUpperCase();
            });
        }
    },

    setupUiEvents() {
        const logoutBtnInit = document.getElementById('logout-btn');
        if (logoutBtnInit && !this.currentUserId) logoutBtnInit.style.display = 'none';

        const bindClick = (id, handler) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('click', handler);
        };

        const bindChange = (id, handler) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', handler);
        };

        const bindInput = (id, handler) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', handler);
        };

        bindClick('mobile-hamburger', () => this.toggleSidebar());
        bindClick('sidebar-overlay', () => this.closeSidebar());
        bindClick('mobile-sync-status', () => this.forceSyncCloud());
        bindClick('desktop-sync-status', () => this.forceSyncCloud());
        bindClick('dashboard-new-quote', () => this.navigateTo('create-quote'));
        bindClick('create-cancel-btn', () => this.navigateTo('dashboard'));
        bindClick('add-item-btn', () => this.addItem());
        bindClick('add-client-btn', () => this.showAddClientModal());
        bindClick('client-history-back-btn', () => this.navigateTo('clients'));
        bindClick('save-settings-btn', () => this.saveSettings());
        bindClick('export-db-btn', () => this.exportDatabase());
        bindClick('import-db-btn', () => {
            const input = document.getElementById('import-db');
            if (input) input.click();
        });
        bindClick('reset-docs-btn', () => this.resetDocuments());
        bindClick('reset-db-btn', () => this.resetDatabase());
        bindClick('add-product-btn', () => this.showAddProductModal());
        bindClick('crm-form-reset', () => this.resetCrmForm());
        bindClick('crm-export-btn', () => this.exportCrmLeads());
        bindClick('crm-import-file-btn', () => document.getElementById('crm-import-file-input')?.click());
        const crmFileInput = document.getElementById('crm-import-file-input');
        if (crmFileInput) {
            crmFileInput.addEventListener('change', (e) => this.importCrmCsvFile(e));
        }
        bindClick('crm-add-lead-btn', () => this.openModal('lead-modal'));
        bindClick('crm-import-legacy-btn', () => this.importLegacyLeadQualifierData(false));
        bindClick('toggle-day', () => this.setChartTimeframe('day'));
        bindClick('toggle-week', () => this.setChartTimeframe('week'));
        bindClick('toggle-month', () => this.setChartTimeframe('month'));

        bindChange('doc-type', () => this.toggleDocType());
        bindChange('tax-enable', () => this.toggleTax());
        bindChange('tax-rate', () => this.calculateTotals());
        bindChange('discount-amount', () => this.calculateTotals());
        bindChange('import-db', (event) => this.importDatabase(event));
        bindChange('modal-product-recurring', (event) => {
            const recurringRow = document.getElementById('modal-recurring-period-row');
            if (recurringRow) recurringRow.style.display = event.target.checked ? 'flex' : 'none';
        });

        bindInput('invoices-search', (event) => this.renderDocumentsList(event.target.value));
        bindInput('modal-payment-amount', () => this.updatePaymentPreview());
        bindInput('clients-search', (event) => {
            this.clientSearchText = (event.target.value || '').trim();
            this.renderClientList();
        });
        bindInput('catalog-search', (event) => {
            this.catalogSearchText = (event.target.value || '').trim();
            this.renderCatalogList();
        });
        bindInput('crm-search', (event) => {
            this.crmSearchText = (event.target.value || '').trim();
            this.renderCRM();
        });
        bindChange('clients-sort', (event) => {
            this.clientSortMode = event.target.value || 'name-asc';
            this.renderClientList();
        });
        bindChange('catalog-sort', (event) => {
            this.catalogSortMode = event.target.value || 'name-asc';
            this.renderCatalogList();
        });
        bindChange('catalog-recurring-only', (event) => {
            this.catalogRecurringOnly = !!event.target.checked;
            this.renderCatalogList();
        });
        bindClick('catalog-back-to-categories', () => {
            this.selectedCatalogCategory = null;
            this.renderCatalogList();
        });
        const catGrid = document.getElementById('catalog-categories-grid');
        if (catGrid) {
            catGrid.addEventListener('click', (event) => {
                const card = event.target.closest('.catalog-category-card');
                if (!card) return;
                const category = card.getAttribute('data-category');
                if (category) {
                    this.selectedCatalogCategory = category;
                    this.renderCatalogList();
                }
            });
        }
        bindChange('crm-stage-filter', (event) => {
            this.crmStageFilter = event.target.value || 'all';
            this.renderCRM();
        });
        bindChange('crm-state-filter', (event) => {
            this.crmStateFilter = event.target.value || 'all';
            this.renderCRM();
        });
        bindChange('crm-website-filter', (event) => {
            this.crmWebsiteFilter = event.target.value || 'all';
            this.renderCRM();
        });
        bindChange('crm-niche-filter', (event) => {
            this.crmNicheFilter = event.target.value || 'all';
            this.renderCRM();
        });
        // crm-delete-selected-btn and crm-clear-all-btn are bound dynamically in _bindCrmBulkSelect after each render

        const itemsBody = document.getElementById('items-body');
        if (itemsBody) {
            itemsBody.addEventListener('change', (event) => {
                const target = event.target;
                if (!(target instanceof HTMLElement)) return;
                if (target.classList.contains('item-desc')) {
                    this.handleItemCatalogChange(target);
                    return;
                }
                if (target.classList.contains('item-qty') || target.classList.contains('item-price')) {
                    this.calculateTotals();
                }
            });
            itemsBody.addEventListener('click', (event) => {
                const btn = event.target.closest('.item-remove-btn');
                if (!btn) return;
                const row = btn.closest('tr');
                if (row) row.remove();
                this.calculateTotals();
            });
        }

        const recentTable = document.getElementById('recent-activity-table');
        if (recentTable) {
            recentTable.addEventListener('click', (event) => {
                const btn = event.target.closest('[data-recent-pdf]');
                if (!btn) return;
                this.generatePDF(btn.getAttribute('data-recent-pdf'));
            });
        }

        const historyTable = document.getElementById('history-table');
        if (historyTable) {
            historyTable.addEventListener('click', (event) => {
                const btn = event.target.closest('[data-history-action]');
                if (!btn) return;
                const action = btn.getAttribute('data-history-action');
                const id = btn.getAttribute('data-doc-id');
                if (!id) return;
                if (action === 'pdf') this.generatePDF(id);
                if (action === 'remind') this.sendReminder(id);
            });
        }

        const clientsTable = document.getElementById('clients-table');
        if (clientsTable) {
            clientsTable.addEventListener('click', (event) => {
                const node = event.target.closest('[data-client-action]');
                if (!node) return;
                const action = node.getAttribute('data-client-action');
                if (action === 'history') {
                    const name = node.getAttribute('data-client-name') || '';
                    this.showClientHistory(decodeURIComponent(name));
                    return;
                }
                if (action === 'edit') {
                    const idx = parseInt(node.getAttribute('data-client-index') || '', 10);
                    if (!Number.isNaN(idx)) this.showEditClientModal(idx);
                    return;
                }
                if (action === 'delete') {
                    const idx = parseInt(node.getAttribute('data-client-index') || '', 10);
                    if (!Number.isNaN(idx)) this.deleteClient(idx);
                }
            });
        }

        const catalogTable = document.getElementById('catalog-table');
        if (catalogTable) {
            catalogTable.addEventListener('click', (event) => {
                const node = event.target.closest('[data-catalog-action]');
                if (!node) return;
                const idx = parseInt(node.getAttribute('data-catalog-index') || '', 10);
                if (Number.isNaN(idx)) return;
                const action = node.getAttribute('data-catalog-action');
                if (action === 'edit') this.editProduct(idx);
                if (action === 'delete') this.deleteProduct(idx);
            });
        }

        const docsTable = document.getElementById('documents-table');
        if (docsTable) {
            docsTable.addEventListener('change', (event) => {
                const select = event.target.closest('select[data-status-id]');
                if (!select) return;
                const id = select.getAttribute('data-status-id');
                if (!id) return;
                this.updateStatus(id, select.value);
            });
            docsTable.addEventListener('click', (event) => {
                const node = event.target.closest('[data-doc-action]');
                if (!node) return;
                const action = node.getAttribute('data-doc-action');
                const id = node.getAttribute('data-doc-id');
                if (!id) return;
                if (action === 'pdf') this.generatePDF(id);
                if (action === 'receipt') this.generateAdvanceReceipt(id);
                if (action === 'whatsapp') this.shareToWhatsapp(id);
                if (action === 'email') this.emailClient(id);
                if (action === 'remind') this.sendReminder(id);
                if (action === 'convert') this.convertToInvoice(id);
                if (action === 'payment') this.showPaymentModal(id);
                if (action === 'delete') this.deleteDocument(id);
            });
        }

        const renewalPanel = document.getElementById('renewal-panel');
        if (renewalPanel) {
            renewalPanel.addEventListener('click', (event) => {
                const node = event.target.closest('[data-renew-action]');
                if (!node) return;
                const action = node.getAttribute('data-renew-action');
                if (action === 'close') {
                    renewalPanel.style.display = 'none';
                    return;
                }
                if (action === 'send') {
                    const id = node.getAttribute('data-doc-id');
                    const item = decodeURIComponent(node.getAttribute('data-item-desc') || '');
                    const days = parseInt(node.getAttribute('data-days-left') || '0', 10);
                    if (id) this.sendRenewalReminder(id, item, Number.isNaN(days) ? 0 : days);
                }
            });
        }

        const statusFilters = document.getElementById('doc-status-filters');
        if (statusFilters) {
            statusFilters.addEventListener('click', (event) => {
                const button = event.target.closest('[data-filter]');
                if (!button) return;
                this.documentsStatusFilter = button.getAttribute('data-filter') || 'all';
                statusFilters.querySelectorAll('.status-filter').forEach((el) => {
                    el.classList.toggle('active', el === button);
                });
                this.renderDocumentsList();
            });
        }

        document.addEventListener('click', (event) => {
            document.querySelectorAll('.action-menu[open]').forEach((menu) => {
                if (!menu.contains(event.target)) {
                    menu.removeAttribute('open');
                }
            });
        });

        document.addEventListener('toggle', (event) => {
            const menu = event.target;
            if (!menu.classList || !menu.classList.contains('action-menu') || !menu.open) return;
            document.querySelectorAll('.action-menu[open]').forEach((openMenu) => {
                if (openMenu !== menu) openMenu.removeAttribute('open');
            });
        }, true);

        const clientForm = document.getElementById('client-form');
        if (clientForm) {
            clientForm.addEventListener('submit', (event) => this.saveClient(event));
        }
        const productForm = document.getElementById('product-form');
        if (productForm) {
            productForm.addEventListener('submit', (event) => this.saveProduct(event));
        }
        const paymentForm = document.getElementById('payment-form');
        if (paymentForm) {
            paymentForm.addEventListener('submit', (event) => this.saveAdvancePayment(event));
        }
        const crmForm = document.getElementById('crm-lead-form');
        if (crmForm) {
            crmForm.addEventListener('submit', (event) => this.saveCrmLead(event));
        }

        const crmTable = document.getElementById('crm-table');
        if (crmTable) {
            crmTable.addEventListener('click', (event) => {
                const node = event.target.closest('[data-crm-action]');
                if (!node) return;
                const action = node.getAttribute('data-crm-action');
                const id = node.getAttribute('data-crm-id');
                if (!id) return;
                if (action === 'edit') this.editCrmLead(id);
                if (action === 'delete') this.deleteCrmLead(id);
                if (action === 'contacted') this.markCrmLeadContacted(id);
                if (action === 'create-quote') this.createQuoteFromCrmLead(id);
            });
            crmTable.addEventListener('change', (event) => {
                const stageSelect = event.target.closest('[data-crm-stage-id]');
                if (stageSelect) {
                    this.updateCrmLeadStage(stageSelect.getAttribute('data-crm-stage-id'), stageSelect.value);
                }
            });
        }

        // Global delegate for data-crm-action="create-quote" from Kanban board or modals
        document.addEventListener('click', (event) => {
            const btn = event.target.closest('[data-crm-action="create-quote"]');
            if (btn && (!crmTable || !crmTable.contains(btn))) {
                const id = btn.getAttribute('data-crm-id') || document.getElementById('crm-lead-id')?.value;
                if (id) this.createQuoteFromCrmLead(id);
            }
        });

        const crmBoard = document.getElementById('crm-board');
        if (crmBoard) {
            crmBoard.addEventListener('click', (event) => {
                const card = event.target.closest('.crm-mini-card');
                if (!card) return;
                const id = card.getAttribute('data-crm-id');
                if (id) this.editCrmLead(id);
            });
            crmBoard.addEventListener('dragstart', (event) => {
                const card = event.target.closest('.crm-mini-card');
                if (!card) return;
                event.dataTransfer.setData('text/plain', card.getAttribute('data-crm-id'));
                card.style.opacity = '0.5';
            });
            crmBoard.addEventListener('dragend', (event) => {
                const card = event.target.closest('.crm-mini-card');
                if (card) card.style.opacity = '1';
            });
            crmBoard.addEventListener('dragover', (event) => {
                event.preventDefault();
            });
            crmBoard.addEventListener('drop', (event) => {
                event.preventDefault();
                const col = event.target.closest('.crm-stage-column');
                if (col) {
                    const leadId = event.dataTransfer.getData('text/plain');
                    const stage = col.getAttribute('data-crm-stage');
                    if (leadId && stage) {
                        this.updateCrmLeadStage(leadId, stage);
                    }
                }
            });
        }

        document.querySelectorAll('[data-close-modal]').forEach((button) => {
            button.addEventListener('click', (event) => {
                const modalId = event.currentTarget.getAttribute('data-close-modal');
                this.closeModal(modalId);
            });
        });

        document.querySelectorAll('[data-payment-mode]').forEach((control) => {
            control.addEventListener('click', () => this.selectPaymentMode(control.getAttribute('data-payment-mode')));
            control.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    this.selectPaymentMode(control.getAttribute('data-payment-mode'));
                }
            });
        });

        document.querySelectorAll('.modal').forEach((modal) => {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) this.closeModal(modal.id);
            });
        });

        document.addEventListener('keydown', (event) => this.handleModalKeydown(event));

        const sidebarLogo = document.getElementById('sidebar-logo');
        if (sidebarLogo) {
            sidebarLogo.addEventListener('error', () => {
                sidebarLogo.style.display = 'none';
                const sidebarIcon = document.getElementById('sidebar-icon');
                if (sidebarIcon) sidebarIcon.style.display = 'block';
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

        const itemRows = Array.from(document.querySelectorAll('#items-body tr'));
        const items = [];
        itemRows.forEach(row => {
            const descInput = row.querySelector('.item-desc');
            if (!descInput) return;
            const desc = (descInput.value || '').trim();
            if (!desc) return;
            const qtyInput = row.querySelector('.item-qty');
            const priceInput = row.querySelector('.item-price');
            const recurringInput = row.querySelector('.item-recurring');
            const recurringPeriodVal = row.querySelector('.item-recurring-period');

            items.push({
                desc,
                qty: parseFloat(qtyInput?.value) || 0,
                price: parseFloat(priceInput?.value) || 0,
                isRecurring: recurringInput ? recurringInput.value === 'true' : false,
                recurringPeriod: recurringPeriodVal ? recurringPeriodVal.value : ''
            });
        });

        if (!items.length) {
            this.showToast('Add Items', 'Please add at least one service or product before saving.', 'error');
            const firstItemDesc = document.querySelector('.item-desc');
            if (firstItemDesc) firstItemDesc.focus();
            return;
        }

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

        if (!this.saveData()) return;
        this.showToast('Success', `${type === 'quotation' ? 'Quotation' : 'Invoice'} saved successfully!`, 'success');
        this.navigateTo('invoices');
    },

    // --- Client Management ---

    renderClientList() {
        const tbody = document.querySelector('#clients-table tbody');
        if (!tbody) return;
        tbody.innerHTML = '';

        const searchEl = document.getElementById('clients-search');
        const sortEl = document.getElementById('clients-sort');
        if (searchEl && searchEl.value !== this.clientSearchText) searchEl.value = this.clientSearchText;
        if (sortEl && sortEl.value !== this.clientSortMode) sortEl.value = this.clientSortMode;

        const allClients = this.data.clients.map((client, index) => ({ client, index }));
        const totalClients = allClients.length;
        const withEmail = allClients.filter(({ client }) => !!(client.email || '').trim()).length;
        const withPhone = allClients.filter(({ client }) => !!(client.phone || '').trim()).length;

        const setStat = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = String(val);
        };
        setStat('clients-total', totalClients);
        setStat('clients-with-email', withEmail);
        setStat('clients-with-phone', withPhone);

        const q = (this.clientSearchText || '').toLowerCase();
        let clients = [...allClients];
        if (q) {
            clients = clients.filter(({ client }) =>
                (client.name || '').toLowerCase().includes(q) ||
                (client.email || '').toLowerCase().includes(q) ||
                (client.phone || '').toLowerCase().includes(q)
            );
        }

        const sortMode = this.clientSortMode || 'name-asc';
        clients.sort((a, b) => {
            const nameA = (a.client.name || '').toLowerCase();
            const nameB = (b.client.name || '').toLowerCase();
            if (sortMode === 'name-desc') return nameB.localeCompare(nameA);
            if (sortMode === 'with-email') return Number(!!(b.client.email || '').trim()) - Number(!!(a.client.email || '').trim()) || nameA.localeCompare(nameB);
            if (sortMode === 'with-phone') return Number(!!(b.client.phone || '').trim()) - Number(!!(a.client.phone || '').trim()) || nameA.localeCompare(nameB);
            if (sortMode === 'recent') return b.index - a.index;
            return nameA.localeCompare(nameB);
        });

        if (clients.length === 0) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="4" style="text-align:center; color:#64748b; padding:22px;">No clients found for current filters.</td>`;
            tbody.appendChild(tr);
            return;
        }

        clients.forEach(({ client, index }) => {
            const safeName = client.name || 'Unnamed Client';
            const safeNameAttr = encodeURIComponent(safeName);
            const safeEmail = (client.email || '').trim() || '-';
            const safePhone = (client.phone || '').trim() || '-';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><span class="client-name-link" data-client-action="history" data-client-name="${safeNameAttr}">${safeName}</span></td>
                <td class="client-email">${safeEmail}</td>
                <td class="client-phone">${safePhone}</td>
                <td>
                    <button class="btn btn-outline" data-client-action="history" data-client-name="${safeNameAttr}" title="View client history"><i class="fa-solid fa-clock-rotate-left"></i> History</button>
                    <button class="btn btn-outline" data-client-action="edit" data-client-index="${index}" title="Edit client"><i class="fa-solid fa-pen"></i> Edit</button>
                    <button class="btn btn-danger-outline" data-client-action="delete" data-client-index="${index}" title="Delete client"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    },

    // Helper: deterministic avatar color from name
    getClientAvatarColor(name) {
        const palette = [
            '#3b82f6', '#8b5cf6', '#ec4899', '#10b981',
            '#f59e0b', '#06b6d4', '#ef4444', '#6366f1',
        ];
        let hash = 0;
        for (let i = 0; i < (name || '').length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
        return palette[Math.abs(hash) % palette.length];
    },

    showClientHistory(clientName) {
        this.navigateTo('client-history');
        const client = this.data.clients.find(c => c.name === clientName) || { name: clientName };
        const docs = this.data.documents.filter(d => d.client.name === clientName);
        const currency = this.data.settings.currency || '\u20B9';

        // --- Breadcrumb ---
        const breadcrumb = document.getElementById('profile-breadcrumb');
        if (breadcrumb) breadcrumb.textContent = client.name;

        // --- Hero: Avatar ---
        const avatarEl = document.getElementById('profile-avatar');
        if (avatarEl) {
            const initials = (client.name || '?')
                .split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
            avatarEl.textContent = initials;
            avatarEl.style.background = this.getClientAvatarColor(client.name);
        }

        // --- Hero: Name ---
        document.getElementById('history-client-name').textContent = client.name;

        // --- Hero: Contact links ---
        const contactEl = document.getElementById('profile-contact-links');
        if (contactEl) {
            const parts = [];
            if (client.email) parts.push(`<a href="mailto:${client.email}"><i class="fa-solid fa-envelope"></i>${client.email}</a>`);
            if (client.phone) parts.push(`<a href="tel:${client.phone}"><i class="fa-solid fa-phone"></i>${client.phone}</a>`);
            contactEl.innerHTML = parts.join('') || '<span style="color:#94a3b8;font-size:0.85rem;">No contact info</span>';
        }

        // --- Hero: Address ---
        const addrEl = document.getElementById('profile-address');
        if (addrEl) addrEl.textContent = client.address ? '\uD83D\uDCCD ' + client.address : '';

        // --- Hero: Quick action buttons ---
        const newQuoteBtn = document.getElementById('profile-new-quote-btn');
        if (newQuoteBtn) {
            newQuoteBtn.onclick = () => {
                this.navigateTo('create-quote');
                // Pre-fill client fields
                setTimeout(() => {
                    const nameEl = document.getElementById('client-name');
                    const emailEl = document.getElementById('client-email');
                    const phoneEl = document.getElementById('client-phone');
                    const addrFEl = document.getElementById('client-address');
                    if (nameEl) { nameEl.value = client.name || ''; nameEl.dispatchEvent(new Event('change')); }
                    if (emailEl) emailEl.value = client.email || '';
                    if (phoneEl) phoneEl.value = client.phone || '';
                    if (addrFEl) addrFEl.value = client.address || '';
                }, 80);
            };
        }
        const emailBtn = document.getElementById('profile-email-btn');
        if (emailBtn) {
            emailBtn.onclick = () => {
                if (client.email) window.location.href = `mailto:${client.email}`;
                else this.showToast('No Email', 'This client has no email address on record.', 'warning');
            };
        }

        // --- 5 Stats ---
        const quotes = docs.filter(d => d.type === 'quotation');
        const accepted = quotes.filter(q => ['accepted', 'invoiced', 'paid'].includes(q.status) || (q.totals && q.totals.advance > 0));
        const pending  = quotes.filter(q => ['draft', 'sent', 'viewed', 'proforma'].includes(q.status) && (!q.totals || !q.totals.advance));
        const totalBusiness = docs.reduce((sum, d) => sum + (d.totals ? d.totals.grandTotal : d.total || 0), 0);
        const outstandingDocs = docs.filter(d => !['paid', 'cancelled', 'rejected'].includes(d.status));
        const outstanding = outstandingDocs.reduce((sum, d) => {
            const bal = (d.totals && typeof d.totals.balance === 'number')
                ? d.totals.balance
                : Math.max(0, (d.totals ? d.totals.grandTotal : (d.total || 0)) - (d.totals?.advance || 0));
            return sum + bal;
        }, 0);

        const fmt = (n) => {
            if (n >= 100000) return currency + (n / 100000).toFixed(1) + 'L';
            if (n >= 1000) return currency + (n / 1000).toFixed(1) + 'K';
            return currency + n.toLocaleString();
        };

        const setStat = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        setStat('profile-total-quotes',   String(quotes.length));
        setStat('profile-accepted',        String(accepted.length));
        setStat('profile-pending',         String(pending.length));
        setStat('profile-total-business',  fmt(totalBusiness));
        setStat('profile-outstanding',     fmt(outstanding));

        // --- Activity Feed ---
        const feedEl = document.getElementById('profile-activity-feed');
        if (feedEl) {
            const events = [];
            const sorted = [...docs].sort((a, b) => new Date(b.created_at || b.date) - new Date(a.created_at || a.date));
            sorted.slice(0, 10).forEach(doc => {
                const total = (doc.totals ? doc.totals.grandTotal : doc.total || 0);
                const amtStr = fmt(total);
                const dateStr = doc.date;
                const typeLabel = doc.type === 'quotation' ? 'Quote' : 'Invoice';

                // Status-driven activity label
                let label, dotClass;
                if (doc.status === 'paid') {
                    label = `${typeLabel} <strong>${doc.id}</strong> paid &mdash; ${amtStr}`;
                    dotClass = 'activity-dot-green';
                } else if (doc.totals && doc.totals.advance > 0) {
                    label = `${typeLabel} <strong>${doc.id}</strong> advance paid &mdash; ${fmt(doc.totals.advance)} (Bal: ${fmt(doc.totals.balance)})`;
                    dotClass = 'activity-dot-green';
                } else if (doc.status === 'accepted') {
                    label = `${typeLabel} <strong>${doc.id}</strong> accepted &mdash; ${amtStr}`;
                    dotClass = 'activity-dot-blue';
                } else if (doc.status === 'overdue') {
                    label = `${typeLabel} <strong>${doc.id}</strong> is overdue &mdash; ${amtStr}`;
                    dotClass = 'activity-dot-red';
                } else if (doc.status === 'sent' || doc.status === 'viewed') {
                    label = `${typeLabel} <strong>${doc.id}</strong> sent &mdash; awaiting response`;
                    dotClass = 'activity-dot-amber';
                } else if (doc.status === 'draft') {
                    label = `${typeLabel} <strong>${doc.id}</strong> created &mdash; ${amtStr}`;
                    dotClass = 'activity-dot-slate';
                } else {
                    label = `${typeLabel} <strong>${doc.id}</strong> &mdash; ${doc.status}`;
                    dotClass = 'activity-dot-purple';
                }
                events.push({ label, sub: dateStr, dotClass });

                // Also surface each line item as a mini-event (cap at 3 per doc)
                (doc.items || []).slice(0, 3).forEach(item => {
                    events.push({
                        label: `<i class="fa-solid fa-wrench" style="font-size:0.75rem;margin-right:4px;color:#94a3b8;"></i>${item.desc || 'Service'}`,
                        sub: `on ${typeLabel} ${doc.id}` + (item.isRecurring ? ` &bull; ${item.recurringPeriod}` : ''),
                        dotClass: 'activity-dot-purple',
                    });
                });
            });

            if (events.length === 0) {
                feedEl.innerHTML = '<li class="activity-empty">No activity yet.</li>';
            } else {
                feedEl.innerHTML = events.slice(0, 12).map(ev => `
                    <li class="activity-item">
                        <span class="activity-dot ${ev.dotClass}"></span>
                        <div class="activity-body">
                            <div class="activity-label">${ev.label}</div>
                            <div class="activity-sub">${ev.sub}</div>
                        </div>
                    </li>
                `).join('');
            }
        }

        // --- Services & Products Used ---
        const servicesEl = document.getElementById('profile-services-list');
        if (servicesEl) {
            const serviceMap = new Map(); // desc -> { count, isRecurring, recurringPeriod }
            docs.forEach(doc => {
                (doc.items || []).forEach(item => {
                    const key = (item.desc || 'Unknown').trim();
                    if (serviceMap.has(key)) {
                        serviceMap.get(key).count++;
                    } else {
                        serviceMap.set(key, {
                            count: 1,
                            isRecurring: !!item.isRecurring,
                            recurringPeriod: item.recurringPeriod || '',
                        });
                    }
                });
            });

            if (serviceMap.size === 0) {
                servicesEl.innerHTML = '<p style="color:#94a3b8;font-size:0.875rem;">No services found.</p>';
            } else {
                servicesEl.innerHTML = [...serviceMap.entries()].map(([name, meta]) => {
                    const badge = meta.isRecurring
                        ? `<span class="service-badge service-badge-recurring">${meta.recurringPeriod || 'Recurring'}</span>`
                        : `<span class="service-badge service-badge-onetime">One-time</span>`;
                    const count = meta.count > 1 ? `<span class="service-count">\u00d7${meta.count}</span>` : '';
                    return `
                        <div class="service-item">
                            <span class="service-item-name" title="${name}">${name}</span>
                            ${badge}
                            ${count}
                        </div>
                    `;
                }).join('');
            }
        }

        // --- Document History Table ---
        const tbody = document.querySelector('#history-table tbody');
        if (tbody) {
            tbody.innerHTML = '';
            if (docs.length === 0) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td colspan="6" style="text-align:center;color:#64748b;padding:22px;">No documents found for this client.</td>`;
                tbody.appendChild(tr);
            } else {
                [...docs].sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(doc => {
                    const tr = document.createElement('tr');
                    const total = (doc.totals ? doc.totals.grandTotal : doc.total || 0);
                    const typeChip = doc.type === 'quotation'
                        ? `<span class="type-chip type-chip-quote">Quote</span>`
                        : `<span class="type-chip type-chip-invoice">Invoice</span>`;
                    tr.innerHTML = `
                        <td><strong>${doc.id}</strong></td>
                        <td>${doc.date}</td>
                        <td>${typeChip}</td>
                        <td><strong>${currency}${total.toLocaleString()}</strong></td>
                        <td><span class="badge badge-${this.getStatusColor(doc.status)}" style="text-transform:capitalize;">${doc.status}</span></td>
                        <td>
                            <button class="btn btn-outline" data-history-action="pdf" data-doc-id="${doc.id}" title="Download PDF"><i class="fa-solid fa-file-pdf"></i></button>
                            ${['sent', 'viewed', 'accepted', 'invoiced', 'proforma', 'overdue', 'pending'].includes(doc.status) ? `<button class="btn btn-reminder" data-history-action="remind" data-doc-id="${doc.id}"><i class="fa-solid fa-bell"></i> Remind</button>` : ''}
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        }
    },

    sendReminder(id) {
        const doc = this.data.documents.find(d => d.id === id);
        if (!doc) return;

        const currency = this.data.settings.currency || '\u20B9';
        const total = (doc.totals ? doc.totals.grandTotal : doc.total || 0);

        const subject = `Gentle Reminder: Payment for ${doc.id} is Pending`;
        const body = `Dear ${doc.client.name},\n\nHope you are doing well.\n\nThis is a gentle reminder regarding the payment for ${doc.type} #${doc.id} totaling ${currency}${total.toLocaleString()}, which is currently showing as ${doc.status.toUpperCase()}.\n\nIf you have already processed the payment, please ignore this email. Otherwise, kindly clear the dues at your earliest convenience.\n\nThank you,\n${this.data.settings.companyName}`;

        window.location.href = `mailto:${doc.client.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },

    // Renewal reminder system

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
                    'Renewal Expired',
                    `${a.item.desc} for ${a.doc.client.name} expired ${Math.abs(a.daysLeft)} day(s) ago`,
                    'error'
                );
            } else if (a.daysLeft <= 7) {
                this.showToast(
                    'Renewal Due Soon',
                    `${a.item.desc} for ${a.doc.client.name} expires in ${a.daysLeft} day(s)`,
                    'error'
                );
            } else if (a.daysLeft <= 30) {
                this.showToast(
                    'Renewal Upcoming',
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
        const currency = this.data.settings.currency || '\u20B9';

        const rows = alerts.map(a => {
            const expiryStr = a.expiry.toLocaleDateString('en-GB');
            let urgencyColor, urgencyLabel, urgencyBg;
            if (a.daysLeft <= 0) {
                urgencyColor = '#dc2626'; urgencyBg = '#fef2f2'; urgencyLabel = `Expired ${Math.abs(a.daysLeft)}d ago`;
            } else if (a.daysLeft <= 7) {
                urgencyColor = '#ea580c'; urgencyBg = '#fff7ed'; urgencyLabel = `${a.daysLeft} days left`;
            } else {
                urgencyColor = '#ca8a04'; urgencyBg = '#fefce8'; urgencyLabel = `${a.daysLeft} days left`;
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
                        <button data-renew-action="send" data-doc-id="${a.doc.id}" data-item-desc="${encodeURIComponent((a.item.desc || '').substring(0, 80))}" data-days-left="${a.daysLeft}" style="background:${urgencyColor}; color:white; border:none; border-radius:8px; padding:6px 12px; font-size:11px; font-weight:700; cursor:pointer; white-space:nowrap;">
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
                    <button data-renew-action="close" style="background:#f1f5f9; border:none; border-radius:8px; width:28px; height:28px; cursor:pointer; color:#64748b; font-size:14px;">&times;</button>
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


    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        this.previousFocus = document.activeElement;
        this.activeModalId = modalId;
        modal.classList.remove('hidden');
        this.focusFirstInModal(modal);
    },

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.classList.add('hidden');
        if (this.activeModalId === modalId) {
            this.activeModalId = null;
            if (this.previousFocus && typeof this.previousFocus.focus === 'function') {
                this.previousFocus.focus();
            }
        }
    },

    getFocusableElements(container) {
        if (!container) return [];
        return Array.from(container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'))
            .filter((el) => !el.classList.contains('hidden') && el.offsetParent !== null);
    },

    focusFirstInModal(modal) {
        const focusable = this.getFocusableElements(modal);
        if (focusable.length > 0) {
            focusable[0].focus();
        } else {
            modal.focus();
        }
    },

    handleModalKeydown(event) {
        if (!this.activeModalId) return;
        const modal = document.getElementById(this.activeModalId);
        if (!modal || modal.classList.contains('hidden')) return;

        if (event.key === 'Escape') {
            event.preventDefault();
            this.closeModal(this.activeModalId);
            return;
        }

        if (event.key !== 'Tab') return;

        const focusable = this.getFocusableElements(modal);
        if (focusable.length === 0) {
            event.preventDefault();
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (event.shiftKey && active === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
        }
    },

    showAddClientModal() {
        this.prepareClientModal('Add New Client');
        this.openModal('client-modal');
    },

    showEditClientModal(index) {
        const client = this.data.clients[index];
        if (!client) return;
        this.prepareClientModal('Edit Client', client, index);
        this.openModal('client-modal');
    },

    prepareClientModal(title, client = {}, index = '') {
        document.getElementById('client-modal-title').textContent = title;
        document.getElementById('modal-client-edit-index').value = index;
        document.getElementById('modal-client-name').value = client.name || '';
        document.getElementById('modal-client-email').value = client.email || '';
        document.getElementById('modal-client-phone').value = client.phone || '';
        document.getElementById('modal-client-address').value = client.address || '';
    },

    saveClient(e) {
        e.preventDefault();
        const newClient = {
            name: document.getElementById('modal-client-name').value,
            email: document.getElementById('modal-client-email').value,
            phone: document.getElementById('modal-client-phone').value,
            address: document.getElementById('modal-client-address').value
        };
        const editIndex = document.getElementById('modal-client-edit-index').value;
        const isEdit = editIndex !== '';
        if (isEdit) {
            const idx = parseInt(editIndex, 10);
            if (!Number.isNaN(idx) && this.data.clients[idx]) {
                this.data.clients[idx] = newClient;
            } else {
                this.data.clients.push(newClient);
            }
        } else {
            this.data.clients.push(newClient);
        }
        if (!this.saveData()) return;
        this.closeModal('client-modal');
        this.renderClientList();
        this.showToast(isEdit ? 'Client Updated' : 'Client Saved', 'Client information has been recorded.', 'success');
    },

    deleteClient(index) {
        const client = this.data.clients[index];
        if (!client) return;

        const name = client.name || 'this client';
        const linkedDocs = this.data.documents.filter(d => d.client && d.client.name === client.name).length;
        const msg = linkedDocs > 0
            ? `Delete ${name}?\\n\\nWarning: ${linkedDocs} document(s) are linked to this client. This only removes the client record, not past documents.`
            : `Delete ${name}?`;

        if (!confirm(msg)) return;
        if (linkedDocs > 0 && !confirm(`Final confirmation: remove ${name} from client list?`)) return;

        this.data.clients.splice(index, 1);
        if (!this.saveData()) return;
        this.renderClientList();
    },

    // --- Product Catalog ---

    renderCatalogList() {
        const currency = this.data.settings.currency || '\u20B9';

        // --- Stats (always visible) ---
        const allProducts = this.data.catalog.map((product, index) => ({ product, index }));
        const recurringAll = allProducts.filter(({ product }) => !!product.isRecurring);
        const avg = allProducts.length
            ? allProducts.reduce((sum, { product }) => sum + (parseFloat(product.price) || 0), 0) / allProducts.length
            : 0;
        const setStat = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = String(val);
        };
        setStat('catalog-total', allProducts.length);
        setStat('catalog-recurring-count', recurringAll.length);
        setStat('catalog-avg-price', `${currency}${Math.round(avg).toLocaleString('en-IN')}`);

        const categoriesContainer = document.getElementById('catalog-categories-container');
        const itemsContainer = document.getElementById('catalog-items-container');
        const backBtn = document.getElementById('catalog-back-to-categories');
        const titleEl = document.getElementById('catalog-title');
        const subtitleEl = document.getElementById('catalog-subtitle');

        if (!this.selectedCatalogCategory) {
            // --- CATEGORY GRID VIEW ---
            if (categoriesContainer) categoriesContainer.style.display = '';
            if (itemsContainer) itemsContainer.classList.add('hidden');
            if (backBtn) backBtn.style.display = 'none';
            if (titleEl) titleEl.textContent = 'Product Catalog';
            if (subtitleEl) { subtitleEl.textContent = 'Manage services, pricing & recurring plans'; subtitleEl.style.display = ''; }

            const categoryIcons = {
                'Websites & Landing Pages': 'fa-globe',
                'Domain, Hosting & Email': 'fa-server',
                'AMC & Maintenance': 'fa-screwdriver-wrench',
                'Power Platform & SharePoint': 'fa-diagram-project',
                'SEO & Digital Packages': 'fa-chart-line',
                'Other': 'fa-box-open'
            };
            const categoryColors = {
                'Websites & Landing Pages': 'linear-gradient(135deg,#667eea,#764ba2)',
                'Domain, Hosting & Email': 'linear-gradient(135deg,#f093fb,#f5576c)',
                'AMC & Maintenance': 'linear-gradient(135deg,#4facfe,#00f2fe)',
                'Power Platform & SharePoint': 'linear-gradient(135deg,#43e97b,#38f9d7)',
                'SEO & Digital Packages': 'linear-gradient(135deg,#fa709a,#fee140)',
                'Other': 'linear-gradient(135deg,#a18cd1,#fbc2eb)'
            };

            const categoryMap = {};
            this.data.catalog.forEach(product => {
                const cat = product.category || 'Other';
                if (!categoryMap[cat]) categoryMap[cat] = [];
                categoryMap[cat].push(product);
            });

            const grid = document.getElementById('catalog-categories-grid');
            if (!grid) return;
            grid.innerHTML = '';

            if (Object.keys(categoryMap).length === 0) {
                grid.innerHTML = `<p style="color:var(--text-secondary);grid-column:1/-1;text-align:center;padding:40px;">No products yet. Click <strong>+ Add Product</strong> to get started.</p>`;
                return;
            }

            Object.entries(categoryMap).forEach(([cat, items]) => {
                const icon = categoryIcons[cat] || 'fa-tag';
                const gradient = categoryColors[cat] || 'linear-gradient(135deg,#a18cd1,#fbc2eb)';
                const totalVal = items.reduce((s, p) => s + (parseFloat(p.price) || 0), 0);
                const recurringCount = items.filter(p => !!p.isRecurring).length;
                const recurringLine = recurringCount > 0
                    ? `<div class="cat-card-recurring"><i class="fa-solid fa-rotate"></i> ${recurringCount} recurring</div>`
                    : '';
                const card = document.createElement('div');
                card.className = 'catalog-category-card';
                card.setAttribute('data-category', cat);
                card.innerHTML = `
                    <div class="cat-card-icon" style="background:${gradient}">
                        <i class="fa-solid ${icon}"></i>
                    </div>
                    <div class="cat-card-body">
                        <h3 class="cat-card-title">${cat}</h3>
                        <div class="cat-card-meta">
                            <span><i class="fa-solid fa-box"></i> ${items.length} service${items.length !== 1 ? 's' : ''}</span>
                            <span>${currency}${totalVal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                        </div>
                        ${recurringLine}
                    </div>
                    <div class="cat-card-arrow"><i class="fa-solid fa-chevron-right"></i></div>
                `;
                grid.appendChild(card);
            });

            // --- RECENTLY ADDED & POPULAR SECTION ---
            const recentsEl = document.getElementById('catalog-recents-section');
            if (recentsEl && this.data.catalog.length > 0) {
                // Last 4 added (reversed index order)
                const recentItems = [...allProducts].sort((a, b) => b.index - a.index).slice(0, 4);
                // Top 4 by price
                const topItems = [...allProducts].sort((a, b) => (parseFloat(b.product.price) || 0) - (parseFloat(a.product.price) || 0)).slice(0, 4);

                const renderStrip = (items, label, icon) => {
                    const chips = items.map(({ product, index }) => {
                        const cat = product.category || 'Other';
                        const catColor = categoryColors[cat] || 'linear-gradient(135deg,#a18cd1,#fbc2eb)';
                        return `
                            <div class="catalog-recent-chip" data-category="${cat}" style="cursor:pointer;">
                                <div class="recent-chip-dot" style="background:${catColor}"></div>
                                <div class="recent-chip-info">
                                    <span class="recent-chip-name">${product.name}</span>
                                    <span class="recent-chip-price">${currency}${parseFloat(product.price).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                </div>
                                <span class="recent-chip-cat">${cat}</span>
                            </div>
                        `;
                    }).join('');
                    return `
                        <div class="catalog-recents-block">
                            <h3 class="catalog-recents-label"><i class="fa-solid ${icon}"></i> ${label}</h3>
                            <div class="catalog-recents-strip">${chips}</div>
                        </div>
                    `;
                };

                recentsEl.innerHTML = `
                    <div class="catalog-recents-grid">
                        ${renderStrip(recentItems, 'Recently Added', 'fa-clock-rotate-left')}
                        ${renderStrip(topItems, 'Top Services by Value', 'fa-fire')}
                    </div>
                `;

                // Clicking a chip navigates into that category
                recentsEl.querySelectorAll('.catalog-recent-chip[data-category]').forEach(chip => {
                    chip.addEventListener('click', () => {
                        this.selectedCatalogCategory = chip.getAttribute('data-category');
                        this.renderCatalogList();
                    });
                });
            } else if (recentsEl) {
                recentsEl.innerHTML = '';
            }

        } else {
            // --- PRODUCT TABLE VIEW (filtered by category) ---
            if (categoriesContainer) categoriesContainer.style.display = 'none';
            if (itemsContainer) itemsContainer.classList.remove('hidden');
            if (backBtn) backBtn.style.display = '';
            if (titleEl) titleEl.textContent = this.selectedCatalogCategory;
            if (subtitleEl) subtitleEl.style.display = 'none';

            const searchEl = document.getElementById('catalog-search');
            const sortEl = document.getElementById('catalog-sort');
            const recurringOnlyEl = document.getElementById('catalog-recurring-only');
            if (searchEl && searchEl.value !== this.catalogSearchText) searchEl.value = this.catalogSearchText;
            if (sortEl && sortEl.value !== this.catalogSortMode) sortEl.value = this.catalogSortMode;
            if (recurringOnlyEl) recurringOnlyEl.checked = !!this.catalogRecurringOnly;

            const tbody = document.querySelector('#catalog-table tbody');
            if (!tbody) return;
            tbody.innerHTML = '';

            const q = (this.catalogSearchText || '').toLowerCase();
            let products = allProducts.filter(({ product }) =>
                (product.category || 'Other') === this.selectedCatalogCategory
            );

            if (q) {
                products = products.filter(({ product }) =>
                    (product.name || '').toLowerCase().includes(q) ||
                    String(product.price || '').toLowerCase().includes(q) ||
                    (product.recurringPeriod || '').toLowerCase().includes(q)
                );
            }

            if (this.catalogRecurringOnly) {
                products = products.filter(({ product }) => !!product.isRecurring);
            }

            const sortMode = this.catalogSortMode || 'name-asc';
            products.sort((a, b) => {
                const nameA = (a.product.name || '').toLowerCase();
                const nameB = (b.product.name || '').toLowerCase();
                const priceA = parseFloat(a.product.price) || 0;
                const priceB = parseFloat(b.product.price) || 0;
                if (sortMode === 'name-desc') return nameB.localeCompare(nameA);
                if (sortMode === 'price-desc') return priceB - priceA || nameA.localeCompare(nameB);
                if (sortMode === 'price-asc') return priceA - priceB || nameA.localeCompare(nameB);
                if (sortMode === 'recent') return b.index - a.index;
                return nameA.localeCompare(nameB);
            });

            if (products.length === 0) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td colspan="3" style="text-align:center; color:#64748b; padding:22px;">No products found in this category.</td>`;
                tbody.appendChild(tr);
                return;
            }

            products.forEach(({ product, index }) => {
                const tr = document.createElement('tr');
                const recurringBadge = product.isRecurring
                    ? `<span class="recurring-pill">Recurring: ${product.recurringPeriod || 'Annually'}</span>`
                    : '';
                tr.innerHTML = `
                    <td><span class="catalog-name">${product.name}</span>${recurringBadge}</td>
                    <td><span class="catalog-price">${currency}${parseFloat(product.price).toFixed(2)}</span></td>
                    <td style="display:flex; gap:6px;">
                        <button class="btn btn-outline action-main" style="color: var(--secondary-color);" data-catalog-action="edit" data-catalog-index="${index}" title="Edit product"><i class="fa-solid fa-pen"></i> Edit</button>
                        <button class="btn btn-danger-outline" data-catalog-action="delete" data-catalog-index="${index}" title="Delete product"><i class="fa-solid fa-trash"></i> Delete</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }
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
        // Pre-select current category if the user is browsing inside one
        const catEl = document.getElementById('modal-product-category');
        if (catEl) catEl.value = this.selectedCatalogCategory || 'Websites & Landing Pages';
        this.openModal('product-modal');
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
        // Load category
        const catEl = document.getElementById('modal-product-category');
        if (catEl) catEl.value = product.category || 'Other';
        this.openModal('product-modal');
    },

    saveProduct(e) {
        e.preventDefault();
        const editIndex = document.getElementById('modal-product-edit-index').value;
        const name = document.getElementById('modal-product-name').value;
        const price = parseFloat(document.getElementById('modal-product-price').value) || 0;
        const isRecurring = document.getElementById('modal-product-recurring').checked;
        const recurringPeriod = isRecurring ? document.getElementById('modal-product-period').value : '';
        const category = document.getElementById('modal-product-category').value || 'Other';

        if (editIndex !== '') {
            // Edit existing product
            const idx = parseInt(editIndex);
            this.data.catalog[idx].name = name;
            this.data.catalog[idx].price = price;
            this.data.catalog[idx].isRecurring = isRecurring;
            this.data.catalog[idx].recurringPeriod = recurringPeriod;
            this.data.catalog[idx].category = category;
        } else {
            // Add new product and navigate into its category
            this.data.catalog.push({ name, price, isRecurring, recurringPeriod, category });
            this.selectedCatalogCategory = category;
        }

        if (!this.saveData()) return;
        this.closeModal('product-modal');
        document.getElementById('modal-product-edit-index').value = '';
        document.getElementById('modal-product-name').value = '';
        document.getElementById('modal-product-price').value = '';
        document.getElementById('modal-product-recurring').checked = false;
        document.getElementById('modal-recurring-period-row').style.display = 'none';
        this.renderCatalogList();
    },

    deleteProduct(index) {
        const product = this.data.catalog[index];
        if (!product) return;

        const name = product.name || 'this product';
        const usedInDocs = this.data.documents.reduce((count, d) => {
            const matches = (d.items || []).filter(i => (i.desc || '').trim() === name).length;
            return count + matches;
        }, 0);

        const msg = usedInDocs > 0
            ? `Delete ${name}?\\n\\nWarning: this item appears in ${usedInDocs} document line(s). Existing documents will not be deleted.`
            : `Delete ${name}?`;

        if (!confirm(msg)) return;
        if (usedInDocs > 0 && !confirm(`Final confirmation: remove ${name} from product catalog?`)) return;

        this.data.catalog.splice(index, 1);
        if (!this.saveData()) return;
        this.renderCatalogList();
    },

    showPaymentModal(id) {
        const doc = this.data.documents.find(d => d.id === id);
        if (!doc) return;

        const currency = this.data.settings.currency || '\u20B9';
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

        this.openModal('payment-modal');
    },

    updatePaymentPreview() {
        const currency = this.data.settings.currency || '\u20B9';
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
        } else if (amount > 0 && (doc.status === 'draft' || doc.status === 'sent' || doc.status === 'viewed')) {
            // Once advance payment is recorded, quotation/invoice is accepted by client
            doc.status = doc.type === 'quotation' ? 'accepted' : 'invoiced';
        }

        if (!this.saveData()) return;
        this.closeModal('payment-modal');
        this.renderDocumentsList();
        this.renderDashboard();

        const currency = this.data.settings.currency || '\u20B9';
        const modeIcon = { 'Cash': 'Cash', 'UPI': 'UPI', 'Bank Transfer': 'Bank', 'Cheque': 'Cheque' }[paymentMode] || 'Payment';
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
        const nextQuoteInput = document.getElementById('settings-next-quote');
        const nextInvoiceInput = document.getElementById('settings-next-invoice');
        if (nextQuoteInput) nextQuoteInput.value = this.data.settings.nextQuoteId || 1001;
        if (nextInvoiceInput) nextInvoiceInput.value = this.data.settings.nextInvoiceId || 5001;
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
        const nextQuoteInput = document.getElementById('settings-next-quote');
        const nextInvoiceInput = document.getElementById('settings-next-invoice');
        const parsedQuote = nextQuoteInput ? parseInt(nextQuoteInput.value, 10) : NaN;
        const parsedInvoice = nextInvoiceInput ? parseInt(nextInvoiceInput.value, 10) : NaN;
        if (!Number.isNaN(parsedQuote) && parsedQuote > 0) this.data.settings.nextQuoteId = parsedQuote;
        if (!Number.isNaN(parsedInvoice) && parsedInvoice > 0) this.data.settings.nextInvoiceId = parsedInvoice;
        this.applySettings();
        if (!this.saveData()) return;
        this.showToast('Settings Saved', 'Your preferences have been updated.', 'success');
    },

    // --- Visualization & Utils ---

    renderDashboard() {
        const docs = this.data.documents || [];

        const isSupersededQuote = (d) => d.type === 'quotation' && (d.status === 'invoiced' || docs.some(inv => inv.linkedQuote === d.id));
        const PENDING_STATUSES = ['sent', 'viewed', 'accepted', 'invoiced', 'proforma', 'overdue', 'pending'];

        // Advance payment revenue collected on active non-paid documents
        let advanceRevenue = 0;

        // Revenue = Everything PAID (full amount) + Advance payments received on active docs
        const revenue = docs.filter(d => d.status !== 'cancelled' && d.status !== 'rejected')
            .reduce((sum, d) => {
                if (isSupersededQuote(d)) return sum;
                if (d.status === 'paid') {
                    return sum + (d.totals ? d.totals.grandTotal : (d.total || 0));
                }
                const adv = (d.totals && d.totals.advance) ? d.totals.advance : 0;
                if (adv > 0) {
                    advanceRevenue += adv;
                    return sum + adv;
                }
                return sum;
            }, 0);

        // Pending = remaining unpaid balance across all pending/active documents
        const pendingValue = docs.filter(d => d.status !== 'paid' && d.status !== 'cancelled' && d.status !== 'rejected')
            .reduce((sum, d) => {
                if (isSupersededQuote(d)) return sum;
                const isPending = PENDING_STATUSES.includes(d.status) || (d.totals && d.totals.advance > 0);
                if (!isPending) return sum;
                const bal = d.totals && typeof d.totals.balance === 'number'
                    ? d.totals.balance
                    : Math.max(0, (d.totals ? d.totals.grandTotal : (d.total || 0)) - (d.totals?.advance || 0));
                return sum + bal;
            }, 0);

        const paidCount = docs.filter(d => d.status === 'paid' && !isSupersededQuote(d)).length;
        const draftCount = docs.filter(d => d.status === 'draft' && (!d.totals || !d.totals.advance) && !isSupersededQuote(d)).length;
        const overdueCount = docs.filter(d => d.status === 'overdue' && !isSupersededQuote(d)).length;
        const totalInvoices = docs.filter(d => d.type === 'invoice').length;

        // Profit Calculation (Collected Revenue - Incurred Expenses)
        const totalExpenses = docs.filter(d => d.status !== 'cancelled' && d.status !== 'rejected')
            .reduce((sum, d) => {
                if (isSupersededQuote(d)) return sum;
                const exp = d.expense || 0;
                if (exp <= 0) return sum;
                const grandTotal = d.totals ? d.totals.grandTotal : (d.total || 0);
                if (d.status === 'paid') return sum + exp;
                if (d.totals && d.totals.advance > 0 && grandTotal > 0) {
                    const ratio = Math.min(1, d.totals.advance / grandTotal);
                    return sum + (exp * ratio);
                }
                return sum;
            }, 0);
        const profit = revenue - totalExpenses;

        const currency = this.data.settings.currency || '\u20B9';
        document.getElementById('total-revenue').textContent = currency + revenue.toFixed(2);
        document.getElementById('pending-payments').textContent = currency + pendingValue.toFixed(2);
        document.getElementById('total-paid').textContent = paidCount;
        document.getElementById('total-drafts').textContent = draftCount;
        document.getElementById('total-overdue').textContent = overdueCount;

        const revSub = document.getElementById('total-revenue-sub');
        if (revSub) {
            if (advanceRevenue > 0) {
                revSub.textContent = `Incl. ${currency}${advanceRevenue.toFixed(2)} advance`;
                revSub.style.display = 'block';
            } else {
                revSub.style.display = 'none';
            }
        }

        const pendSub = document.getElementById('pending-payments-sub');
        if (pendSub) {
            if (advanceRevenue > 0) {
                pendSub.textContent = `Balance after advances`;
                pendSub.style.display = 'block';
            } else {
                pendSub.style.display = 'none';
            }
        }

        if (document.getElementById('total-profit')) {
            document.getElementById('total-profit').textContent = currency + profit.toFixed(2);
            document.getElementById('total-profit').style.color = profit >= 0 ? 'var(--success-color)' : 'var(--danger-color)';
        } else {
            const totalInvoicesEl = document.getElementById('total-invoices');
            if (totalInvoicesEl) totalInvoicesEl.textContent = totalInvoices;
        }

        const recent = this.data.documents.slice(0, 5);
        const tbody = document.querySelector('#recent-activity-table tbody');
        tbody.innerHTML = '';
        recent.forEach(doc => {
            const tr = document.createElement('tr');
            const clientName = doc.client ? doc.client.name : 'Unknown Client';
            const total = (doc.totals ? doc.totals.grandTotal : doc.total || 0);
            const advSubtext = (doc.totals && doc.totals.advance > 0 && doc.status !== 'paid')
                ? `<div style="font-size:0.72rem; color:#16a34a; font-weight:600; margin-top:2px;">Adv: ${currency}${doc.totals.advance.toFixed(2)}</div>`
                : '';
            tr.innerHTML = `
                <td>${doc.id}</td>
                <td>${clientName}</td>
                <td>${doc.date}</td>
                <td>${currency}${parseFloat(total).toFixed(2)}${advSubtext}</td>
                <td><span class="badge badge-${this.getStatusColor(doc.status)}">${doc.status}</span></td>
                <td><button class="btn btn-outline" data-recent-pdf="${doc.id}"><i class="fa-solid fa-file-pdf"></i></button></td>
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
        this.renderSpecificChart('pendingChart', 'Pending', ['pending', 'overdue'], '#ffa34d');
    },

    renderSpecificChart(canvasId, label, statuses, baseColor) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        if (this.charts[canvasId]) this.charts[canvasId].destroy();

        const timeframe = this.chartTimeframe || 'month';
        let labels = [];
        let dataPoints = [];
        const isRevenue = (canvasId === 'revenueChart');

        const docs = this.data.documents || [];
        const isSupersededQuote = (d) => d.type === 'quotation' && (d.status === 'invoiced' || docs.some(inv => inv.linkedQuote === d.id));
        const PENDING_STATUSES = ['sent', 'viewed', 'accepted', 'invoiced', 'proforma', 'overdue', 'pending'];

        const getDocAmount = (doc) => {
            if (doc.status === 'cancelled' || doc.status === 'rejected') return 0;
            if (isSupersededQuote(doc)) return 0;

            if (isRevenue) {
                if (doc.status === 'paid') {
                    return doc.totals ? doc.totals.grandTotal : (doc.total || 0);
                }
                return doc.totals && doc.totals.advance ? doc.totals.advance : 0;
            } else {
                // Pending
                if (doc.status === 'paid') return 0;
                const isPending = PENDING_STATUSES.includes(doc.status) || (doc.totals && doc.totals.advance > 0);
                if (!isPending) return 0;
                return doc.totals && typeof doc.totals.balance === 'number'
                    ? doc.totals.balance
                    : Math.max(0, (doc.totals ? doc.totals.grandTotal : (doc.total || 0)) - (doc.totals?.advance || 0));
            }
        };

        const getDocDate = (doc) => {
            if (isRevenue && (doc.status === 'paid' || (doc.totals && doc.totals.advance > 0))) {
                return doc.paymentDate || doc.date;
            }
            return doc.date;
        };

        const now = new Date();
        now.setHours(23, 59, 59, 999);

        if (timeframe === 'day') {
            for (let i = 14; i >= 0; i--) {
                const d = new Date();
                d.setDate(now.getDate() - i);
                const dateStr = d.toISOString().split('T')[0];
                labels.push(d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }));

                const val = docs
                    .filter(doc => getDocDate(doc) === dateStr)
                    .reduce((sum, doc) => sum + getDocAmount(doc), 0);
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

                const val = docs
                    .filter(doc => {
                        const targetDate = new Date(getDocDate(doc));
                        return targetDate >= weekStart && targetDate <= d;
                    })
                    .reduce((sum, doc) => sum + getDocAmount(doc), 0);
                dataPoints.push(val);
            }
        } else {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const currentYear = now.getFullYear();
            labels = months;
            dataPoints = new Array(12).fill(0);

            docs.forEach(doc => {
                const docAmt = getDocAmount(doc);
                if (docAmt > 0) {
                    const targetDate = new Date(getDocDate(doc));
                    if (targetDate.getFullYear() === currentYear) {
                        const month = targetDate.getMonth();
                        if (month >= 0 && month < 12) {
                            dataPoints[month] += docAmt;
                        }
                    }
                }
            });
        }

        // Create Superpower style smooth gradient fill
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 200);
        if (canvasId === 'revenueChart') {
            gradient.addColorStop(0, 'rgba(43, 184, 84, 0.35)');
            gradient.addColorStop(1, 'rgba(43, 184, 84, 0.0)');
            baseColor = '#2bb854';
        } else {
            gradient.addColorStop(0, 'rgba(255, 163, 77, 0.35)');
            gradient.addColorStop(1, 'rgba(255, 163, 77, 0.0)');
            baseColor = '#ffa34d';
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: dataPoints,
                    backgroundColor: gradient,
                    borderColor: baseColor,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: baseColor,
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: baseColor,
                    pointHoverBorderColor: '#ffffff',
                    pointHoverBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#18191b',
                        titleFont: { family: 'Plus Jakarta Sans', size: 12, weight: '700' },
                        bodyFont: { family: 'Share Tech Mono', size: 13 },
                        padding: 10,
                        cornerRadius: 12,
                        displayColors: false,
                        callbacks: {
                            label: (context) => `${context.dataset.label}: ${currency}${context.parsed.y.toLocaleString()}`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: '#f0f2f5', drawBorder: false },
                        ticks: {
                            font: { family: 'Plus Jakarta Sans', size: 10, weight: '500' },
                            color: '#6e737c',
                            callback: (value) => currency + value.toLocaleString()
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: {
                            font: { family: 'Plus Jakarta Sans', size: 10, weight: '500' },
                            color: '#6e737c'
                        }
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
            'proforma': 'proforma',
            'paid': 'paid',
            'overdue': 'overdue',
            'pending': 'pending',  // legacy fallback
            'cancelled': 'cancelled',
            'rejected': 'rejected'
        };
        return map[status] || 'draft';
    },

    getAllowedTransitions(status) {
        const transitions = {
            'draft': ['sent', 'cancelled'],
            'sent': ['viewed', 'accepted', 'rejected', 'cancelled'],
            'viewed': ['accepted', 'rejected', 'cancelled'],
            'accepted': ['invoiced', 'proforma'],
            'invoiced': ['paid', 'overdue'],
            'overdue': ['paid'],
            'proforma': ['invoiced', 'paid', 'cancelled'], // Proforma can advance to invoice/paid
            'paid': [], // Terminal
            'cancelled': [], // Terminal
            'rejected': [] // Terminal
        };
        // Always include the current status as a valid option (so the dropdown shows what it currently is)
        const allowed = transitions[status] || [];
        return [status, ...allowed];
    },

    renderInvoiceStats() {
        const docs = this.data.documents || [];
        const currency = this.data.settings.currency || '\u20B9';
        const isSupersededQuote = (d) => d.type === 'quotation' && (d.status === 'invoiced' || docs.some(inv => inv.linkedQuote === d.id));

        // 1. Quoted Value (all active quotations)
        const quotedValue = docs
            .filter(d => d.type === 'quotation' && d.status !== 'cancelled' && d.status !== 'rejected')
            .reduce((sum, d) => sum + (d.totals ? d.totals.grandTotal : d.total || 0), 0);

        // 2. Invoiced (all active invoices generated)
        const invoicedAmount = docs
            .filter(d => d.type === 'invoice' && d.status !== 'cancelled' && d.status !== 'rejected')
            .reduce((sum, d) => sum + (d.totals ? d.totals.grandTotal : d.total || 0), 0);

        // 3. Collected Revenue (paid full + advance payments received on active docs)
        const collectedRevenue = docs
            .filter(d => d.status !== 'cancelled' && d.status !== 'rejected')
            .reduce((sum, d) => {
                if (isSupersededQuote(d)) return sum;
                if (d.status === 'paid') {
                    return sum + (d.totals ? d.totals.grandTotal : (d.total || 0));
                }
                return sum + (d.totals && d.totals.advance ? d.totals.advance : 0);
            }, 0);

        // 4. Outstanding (unpaid balance on invoices)
        const outstandingAmount = docs
            .filter(d => d.type === 'invoice' && d.status !== 'paid' && d.status !== 'cancelled' && d.status !== 'rejected')
            .reduce((sum, d) => {
                const bal = (d.totals && typeof d.totals.balance === 'number')
                    ? d.totals.balance
                    : Math.max(0, (d.totals ? d.totals.grandTotal : (d.total || 0)) - (d.totals?.advance || 0));
                return sum + bal;
            }, 0);

        // Format helper
        const fmt = (n) => currency + (n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set('iq-quoted', fmt(quotedValue));
        set('iq-invoiced', fmt(invoicedAmount));
        set('iq-collected', fmt(collectedRevenue));
        set('iq-outstanding', fmt(outstandingAmount));
    },

    renderDocumentsList(filter) {
        const tbody = document.querySelector('#documents-table tbody');
        if (!tbody) return;

        this.renderInvoiceStats();

        tbody.innerHTML = '';
        const currency = this.data.settings.currency || '\u20B9';
        const searchText = (typeof filter === 'string')
            ? filter
            : ((document.getElementById('invoices-search') || {}).value || '');

        let docs = [...this.data.documents];
        if (searchText) {
            const f = searchText.toLowerCase();
            docs = docs.filter(d =>
                (d.id || '').toLowerCase().includes(f) ||
                (d.client.name || '').toLowerCase().includes(f) ||
                (d.type || '').split(' ').some(word => word.toLowerCase().includes(f))
            );
        }

        if (this.documentsStatusFilter && this.documentsStatusFilter !== 'all') {
            docs = docs.filter(d => (d.status || 'draft') === this.documentsStatusFilter);
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
                const hasAdvance = doc.totals && doc.totals.advance > 0 && doc.status !== 'paid';
                const advInfo = hasAdvance ? `
                    <div style="font-size:0.75rem; color:#16a34a; font-weight:600; margin-top:2px;" title="Advance Paid">Paid: ${currency}${doc.totals.advance.toFixed(2)}</div>
                    <div style="font-size:0.75rem; color:#ef4444; font-weight:600;" title="Remaining Balance">Bal: ${currency}${doc.totals.balance.toFixed(2)}</div>
                ` : '';

                tr.innerHTML = `
                    <td>${doc.id}</td>
                    <td>${doc.date}</td>
                    <td>${clientName}</td>
                    <td style="text-transform: capitalize">${doc.type}</td>
                    <td style="font-weight: 700;">${currency}${parseFloat(total).toFixed(2)}${advInfo}</td>
                    <td>
                        ${(() => {
                            const allowed = this.getAllowedTransitions(doc.status);
                            const labels = {
                                'draft': 'Draft', 'sent': 'Sent', 'viewed': 'Viewed',
                                'accepted': 'Accepted', 'invoiced': 'Invoiced',
                                'proforma': 'Proforma Invoice', 'paid': 'Paid',
                                'overdue': 'Overdue', 'cancelled': 'Cancelled', 'rejected': 'Rejected'
                            };
                            const isTerminal = ['paid', 'cancelled', 'rejected'].includes(doc.status);
                            const optionsHtml = allowed.map(s => 
                                `<option value="${s}" ${doc.status === s ? 'selected' : ''}>${labels[s] || s}</option>`
                            ).join('');
                            return `<select data-status-id="${doc.id}" title="Change status for ${doc.id}" class="badge badge-${statusColor}" style="border:none; cursor:pointer;" ${isTerminal ? 'disabled' : ''}>
                                ${optionsHtml}
                            </select>`;
                        })()}
                    </td>
                    <td>
                        <div class="row-actions">
                            <button class="btn btn-outline action-main" data-doc-action="pdf" data-doc-id="${doc.id}" title="Download PDF for ${doc.id}" aria-label="Download PDF for ${doc.id}">
                                <i class="fa-solid fa-file-pdf"></i> PDF
                            </button>
                            <details class="action-menu">
                                <summary class="btn btn-outline action-more" title="More actions" aria-label="More actions for ${doc.id}">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </summary>
                                <div class="action-popover">
                                    ${(doc.totals && doc.totals.advance > 0) ? `<button class="btn btn-outline" data-doc-action="receipt" data-doc-id="${doc.id}" title="Download Advance Receipt" aria-label="Download advance receipt for ${doc.id}" style="color: #8b5cf6; border-color: #8b5cf6;"><i class="fa-solid fa-receipt"></i></button>` : ''}
                                    <button class="btn btn-outline" data-doc-action="whatsapp" data-doc-id="${doc.id}" title="Share via WhatsApp" aria-label="Share ${doc.id} on WhatsApp" style="color: #25D366; border-color: #25D366;"><i class="fa-brands fa-whatsapp"></i></button>
                                    <button class="btn btn-outline" data-doc-action="email" data-doc-id="${doc.id}" title="Email Client" aria-label="Email ${doc.id} to client"><i class="fa-solid fa-envelope"></i></button>
                                    ${['sent', 'viewed', 'accepted', 'invoiced', 'proforma', 'overdue', 'pending'].includes(doc.status) ? `<button class="btn btn-reminder" data-doc-action="remind" data-doc-id="${doc.id}" title="Send Reminder" aria-label="Send reminder for ${doc.id}"><i class="fa-solid fa-bell"></i></button>` : ''}
                                    ${doc.type === 'quotation' ? `<button class="btn btn-outline" data-doc-action="convert" data-doc-id="${doc.id}" title="Convert to Invoice" aria-label="Convert ${doc.id} to invoice"><i class="fa-solid fa-arrow-right-arrow-left"></i></button>` : ''}
                                    ${doc.status !== 'paid' ? `<button class="btn btn-outline" data-doc-action="payment" data-doc-id="${doc.id}" title="Record Advance/Payment" aria-label="Record payment for ${doc.id}" style="color: #0ea5e9; border-color: #0ea5e9;"><i class="fa-solid fa-money-bill-wave"></i></button>` : ''}
                                    <button class="btn btn-danger-outline" data-doc-action="delete" data-doc-id="${doc.id}" title="Delete document" aria-label="Delete ${doc.id}"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </details>
                        </div>
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
            const allowed = this.getAllowedTransitions(doc.status);
            if (!allowed.includes(newStatus)) {
                this.showToast('Invalid Status', `Cannot change status from ${doc.status} to ${newStatus}`, 'error');
                this.renderDocumentsList(); // reset dropdown visually
                return;
            }

            doc.status = newStatus;
            doc.updated_at = new Date().toISOString();

            if (newStatus === 'paid') {
                if (!doc.totals) doc.totals = {};
                doc.totals.balance = 0;
                doc.totals.advance = doc.totals.grandTotal;
                if (!doc.paymentDate) doc.paymentDate = new Date().toISOString().split('T')[0];
            }

            if (!this.saveData()) return;
            this.renderDocumentsList(); // Re-render to update badge colors
            this.renderDashboard();
        }
    },

    deleteDocument(id) {
        const docIndex = this.data.documents.findIndex(d => d.id === id);
        if (docIndex === -1) return;

        const doc = this.data.documents[docIndex];
        const label = `${doc.type === 'invoice' ? 'Invoice' : 'Quotation'} ${id}`;

        let warning = '';
        if (doc.type === 'quotation') {
            const derivedInvoices = this.data.documents.filter(d => d.linkedQuote === id).length;
            if (derivedInvoices > 0) {
                warning = `\n\nWarning: ${derivedInvoices} invoice(s) were created from this quotation. Deleting this quotation will not delete those invoices.`;
            }
        } else if (doc.linkedQuote) {
            warning = `\n\nThis invoice was created from ${doc.linkedQuote}. The quotation will remain.`;
        }

        if (!confirm(`Delete ${label}? This cannot be undone.${warning}`)) return;

        this.data.documents.splice(docIndex, 1);
        if (!this.saveData()) return;
        this.renderDashboard();
        this.renderDocumentsList();
        this.showToast('Deleted', `${label} was removed.`, 'success');
    },

    convertToInvoice(id) {
        const quote = this.data.documents.find(d => d.id === id);
        if (!quote) return;

        if (!confirm(`Convert Quotation ${id} to Invoice?\n\nThis will create a new Invoice based on this quotation.`)) return;

        const newInvoice = JSON.parse(JSON.stringify(quote));
        newInvoice.type = 'invoice';
        newInvoice.id = 'INV-' + this.data.settings.nextInvoiceId;
        newInvoice.status = (newInvoice.totals && newInvoice.totals.balance <= 0.01) ? 'paid' : 'pending';
        newInvoice.linkedQuote = id;
        newInvoice.date = new Date().toISOString().split('T')[0];

        // Update terms for Invoice to request full payment (replacing quote terms like "50% Advance")
        newInvoice.paymentTerms = "Full Payment Due upon Receipt";

        // Mark quote as invoiced so status progresses cleanly and avoids double counting
        quote.status = 'invoiced';
        quote.updated_at = new Date().toISOString();

        this.data.documents.unshift(newInvoice);
        this.data.settings.nextInvoiceId++;
        if (!this.saveData()) return;
        this.renderDocumentsList(); // Switch view
        this.renderDashboard();
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

        const currency = this.data.settings.currency || '\u20B9';
        const brandColor = this.data.settings.brandColor || '#0f172a';
        const receiptDate = doc.paymentDate ? new Date(doc.paymentDate).toLocaleDateString('en-GB') : new Date().toLocaleDateString('en-GB');
        const paymentMode = doc.paymentMode || 'Cash';
        const modeIcon = { 'Cash': 'Cash', 'UPI': 'UPI', 'Bank Transfer': 'Bank', 'Cheque': 'Cheque' }[paymentMode] || 'Payment';

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
                     ${doc.paymentNotes ? `<p style="margin: 6px 0 0 0; font-size: 10px; color: #64748b; font-style: italic;">Note: ${doc.paymentNotes}</p>` : ''}
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
        } else if (doc.status === 'proforma') {
            watermarkText = 'PROFORMA INVOICE';
            watermarkColor = 'rgba(15, 118, 110, 0.05)';
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
                        <h2 style="margin: 0 0 5px 0; font-size: 32px; color: ${brandColor}; font-weight: 900; text-transform: uppercase;">${doc.status === 'proforma' ? 'Proforma Invoice' : doc.type}</h2>
                        <p style="color: #64748b; margin: 0; font-weight: 700; font-size: 13px;">#${doc.id}</p>
                        <p style="color: #64748b; margin: 5px 0; font-weight: 500;">Date: ${new Date(doc.date).toLocaleDateString('en-GB')}</p>
                        ${(doc.type === 'quotation' || doc.status === 'proforma') && this.data.settings.validity ? `<p style="color: #ef4444; margin: 5px 0; font-size: 12px; font-weight: 700;">Valid for ${this.data.settings.validity} Days</p>` : ''}
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
                        ${(doc.totals.advance > 0) ? `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 12px; color: #16a34a; border-top: 1px dashed #e2e8f0; padding-top: 8px;">
                            <span>Advance Paid</span>
                            <span style="font-weight: 700; font-variant-numeric: tabular-nums;">-${currency}${doc.totals.advance.toFixed(2)}</span>
                        </div>
                        ${(doc.totals.balance > 0.01 && doc.status !== 'paid') ? `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 14px; color: #ef4444; font-weight: 800;">
                            <span>Balance Due</span>
                            <span style="font-variant-numeric: tabular-nums;">${currency}${doc.totals.balance.toFixed(2)}</span>
                        </div>` : ''}
                        ` : (doc.type === 'quotation' ? (() => {
                            const half = (doc.totals.grandTotal / 2);
                            return `
                            <div style="margin-top: 12px; border-top: 1px dashed #cbd5e1; padding-top: 10px;">
                                <p style="font-size: 9px; text-transform: uppercase; color: #94a3b8; font-weight: 800; letter-spacing: 1px; margin: 0 0 7px 0;">Payment Schedule</p>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 12px;">
                                    <span style="color: #475569;">50% to Start</span>
                                    <span style="color: #16a34a; font-weight: 700; font-variant-numeric: tabular-nums;">${currency}${half.toFixed(2)}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px;">
                                    <span style="color: #475569;">50% Before Live</span>
                                    <span style="color: #2563eb; font-weight: 700; font-variant-numeric: tabular-nums;">${currency}${half.toFixed(2)}</span>
                                </div>
                            </div>`;
                        })() : '')}
                    </div>
                </div>

                <!-- PROJECT DETAILS (SCOPE/EXCLUSIONS) -->
                ${(doc.scope || doc.exclusions) ? `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 30px 0; border-top: 2px solid #f1f5f9; padding-top: 22px; page-break-before: always; break-before: page; page-break-inside: avoid; break-inside: avoid;">
                    ${doc.scope ? `
                    <div style="page-break-inside: avoid; break-inside: avoid;">
                        <p style="text-transform: uppercase; color: #94a3b8; font-size: 9px; font-weight: 800; margin: 0 0 10px 0; letter-spacing: 1.5px;">Scope of Work</p>
                        <div style="font-size: 12px; color: #334155; line-height: 1.7;">
                            ${doc.scope.split('\n').filter(l => l.trim()).map(l => `<div style="margin-bottom: 3px; display: flex; gap: 5px; page-break-inside: avoid; break-inside: avoid;"><span style="flex-shrink:0;">-</span><span>${l.startsWith('-') ? l.slice(1).trim() : l}</span></div>`).join('')}
                        </div>
                    </div>` : '<div></div>'}
                    ${doc.exclusions ? `
                    <div style="page-break-inside: avoid; break-inside: avoid;">
                        <p style="text-transform: uppercase; color: #94a3b8; font-size: 9px; font-weight: 800; margin: 0 0 10px 0; letter-spacing: 1.5px;">Exclusions</p>
                        <div style="font-size: 12px; color: #64748b; line-height: 1.7;">
                            ${doc.exclusions.split('\n').filter(l => l.trim()).map(l => `<div style="margin-bottom: 3px; display: flex; gap: 5px; page-break-inside: avoid; break-inside: avoid;"><span style="flex-shrink:0;">-</span><span>${l.startsWith('-') ? l.slice(1).trim() : l}</span></div>`).join('')}
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
                                ${this.data.settings.terms ? this.data.settings.terms.split('\n').filter(t => t.trim()).map(term => `<div style="margin-bottom:2px;">- ${term.replace(/^\d+\.\s*/, '')}</div>`).join('') : 'Standard terms apply.'}
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

        // Add sticky preview toolbar
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'flex-start';

        const toolbar = document.createElement('div');
        toolbar.style.width = '100%';
        toolbar.style.backgroundColor = '#0f172a';
        toolbar.style.padding = '12px 24px';
        toolbar.style.display = 'flex';
        toolbar.style.justifyContent = 'space-between';
        toolbar.style.alignItems = 'center';
        toolbar.style.color = '#ffffff';
        toolbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        toolbar.style.position = 'sticky';
        toolbar.style.top = '0';
        toolbar.style.zIndex = '10001';
        toolbar.style.boxSizing = 'border-box';
        toolbar.style.flexShrink = '0';

        // Title
        const titleSpan = document.createElement('span');
        titleSpan.style.fontWeight = '700';
        titleSpan.style.fontSize = '1.1rem';
        titleSpan.textContent = `Preview: ${doc.status === 'proforma' ? 'Proforma Invoice' : (doc.type === 'quotation' ? 'Quotation' : 'Invoice')} #${doc.id}`;
        toolbar.appendChild(titleSpan);

        // Buttons Container
        const btnContainer = document.createElement('div');
        btnContainer.style.display = 'flex';
        btnContainer.style.gap = '12px';

        // Back Button
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-outline';
        backBtn.style.color = '#ffffff';
        backBtn.style.borderColor = 'rgba(255,255,255,0.3)';
        backBtn.style.background = 'transparent';
        backBtn.style.padding = '8px 16px';
        backBtn.style.fontSize = '0.9rem';
        backBtn.style.display = 'flex';
        backBtn.style.alignItems = 'center';
        backBtn.style.gap = '8px';
        backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back';
        backBtn.onclick = () => {
            document.body.removeChild(container);
        };
        btnContainer.appendChild(backBtn);

        // Download Button
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'btn btn-primary';
        downloadBtn.style.background = '#3b82f6';
        downloadBtn.style.color = '#ffffff';
        downloadBtn.style.padding = '8px 16px';
        downloadBtn.style.fontSize = '0.9rem';
        downloadBtn.style.display = 'flex';
        downloadBtn.style.alignItems = 'center';
        downloadBtn.style.gap = '8px';
        downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i> Download PDF';

        const opt = {
            margin: 0.3,
            filename: `${doc.id}.pdf`,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 3, useCORS: true, letterRendering: true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        downloadBtn.onclick = () => {
            downloadBtn.disabled = true;
            downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
            this.showToast('Generating PDF', 'Please wait while your PDF is being generated...', 'info');
            html2pdf().set(opt).from(page).save().then(() => {
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i> Download PDF';
                this.showToast('Success', 'PDF downloaded successfully!', 'success');
            }).catch(err => {
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i> Download PDF';
                this.showToast('Error', 'Failed to generate PDF. Please try again.', 'danger');
                console.error(err);
            });
        };
        btnContainer.appendChild(downloadBtn);

        toolbar.appendChild(btnContainer);
        container.insertBefore(toolbar, page);

        document.body.appendChild(container);
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

        const currency = this.data.settings.currency || '\u20B9';
        const total = (doc.totals && typeof doc.totals.grandTotal === 'number')
            ? doc.totals.grandTotal.toFixed(2)
            : (parseFloat(doc.total) || 0).toFixed(2);

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
                            this.data = this.normalizeLoadedData(imported);
                            if (!this.saveData()) return;
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
            if (!this.saveData()) return;
            this.showToast('Documents Cleared', 'All invoices and quotations have been deleted.', 'success');
            setTimeout(() => window.location.reload(), 1500);
        }
    },

    resetDatabase() {
        if (confirm('CRITICAL WARNING: This will PERMANENTLY DELETE ALL your data (Including Quotations, Invoices, Clients, and Settings). This action CANNOT be undone.\n\nAre you absolutely sure you want to proceed?')) {
            if (confirm('Final Confirmation: Are you really sure? Everything will be lost.')) {
                localStorage.removeItem(this.getLocalStorageKey());
                localStorage.removeItem('eantrax_data');
                this.showToast('Reset Complete', 'All data has been wiped.', 'success');
                setTimeout(() => window.location.reload(), 1500);
            }
        }
    },

    toggleSidebar() {
        const sidebar = document.getElementById('main-sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        const toggleButton = document.getElementById('mobile-hamburger');
        if (sidebar) sidebar.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        if (toggleButton && sidebar) {
            toggleButton.setAttribute('aria-expanded', sidebar.classList.contains('active') ? 'true' : 'false');
        }
    },

    closeSidebar() {
        const sidebar = document.getElementById('main-sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        const toggleButton = document.getElementById('mobile-hamburger');
        if (sidebar) sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        if (toggleButton) toggleButton.setAttribute('aria-expanded', 'false');
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

    normalizeCrmLead(lead = {}) {
        const nowIso = new Date().toISOString();
        const normalizedWebsite = String(lead.website || '').trim();
        const websiteStatus = ['no_website', 'bad_website', 'outdated_website', 'good_website'].includes(lead.websiteStatus)
            ? lead.websiteStatus
            : 'no_website';
        const stage = ['new', 'qualified', 'proposal', 'negotiation', 'won', 'lost'].includes(lead.stage)
            ? lead.stage
            : 'new';
        const priority = ['hot', 'warm', 'cold'].includes(lead.priority)
            ? lead.priority
            : (['high'].includes(lead.priority) ? 'hot' : ['low'].includes(lead.priority) ? 'cold' : 'warm');
        const tags = Array.isArray(lead.tags)
            ? lead.tags.filter(Boolean).map((tag) => String(tag).trim()).filter(Boolean)
            : String(lead.tags || '').split(',').map((tag) => tag.trim()).filter(Boolean);

        return {
            id: String(lead.id || `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`),
            company: String(lead.company || lead.name || '').trim(),
            contactName: String(lead.contactName || '').trim(),
            phone: String(lead.phone || '').trim(),
            email: String(lead.email || '').trim(),
            website: normalizedWebsite,
            mapLink: String(lead.mapLink || lead.mapsLink || '').trim(),
            location: String(lead.location || lead.city || '').trim(),
            source: String(lead.source || 'Manual').trim(),
            websiteStatus,
            stage,
            priority,
            estimatedValue: Number(lead.estimatedValue || 0) || 0,
            notes: String(lead.notes || '').trim(),
            nextFollowUp: String(lead.nextFollowUp || '').trim(),
            followupTime: String(lead.followupTime || '').trim(),
            followupType: String(lead.followupType || '').trim(),
            followupNotes: String(lead.followupNotes || '').trim(),
            tags,
            lastContactedAt: String(lead.lastContactedAt || '').trim(),
            addedAt: String(lead.addedAt || nowIso),
            updatedAt: String(lead.updatedAt || nowIso)
        };
    },

    escapeCrmHtml(value) {
        return String(value || '').replace(/[&<>"']/g, (char) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[char] || char));
    },

    importLegacyLeadQualifierData(silent = false) {
        this.data.crm = this.data.crm || { leads: [] };
        const importedLeads = [];
        try {
            const raw = this.isLocalStorageAccessible() ? localStorage.getItem('re_leads') : null;
            const legacyLeads = JSON.parse(raw || '[]');
            if (!Array.isArray(legacyLeads) || !legacyLeads.length) {
                if (!silent) this.showToast('No Legacy Data', 'No Lead Qualifier leads were found in local storage.', 'info');
                return 0;
            }

            legacyLeads.forEach((legacy) => {
                const company = String(legacy.name || '').trim();
                const phone = String(legacy.phone || '').trim();
                const website = String(legacy.website || '').trim().replace(/^https?:\/\//, '');
                const exists = this.data.crm.leads.some((lead) =>
                    (lead.company || '').toLowerCase() === company.toLowerCase() &&
                    (
                        (phone && (lead.phone || '').trim() === phone) ||
                        (website && (lead.website || '').trim().replace(/^https?:\/\//, '') === website) ||
                        (!phone && !website)
                    )
                );
                if (exists || !company) return;

                importedLeads.push(this.normalizeCrmLead({
                    id: legacy.id || `legacy_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
                    company,
                    phone,
                    website,
                    mapLink: company ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company + (legacy.city ? ' ' + legacy.city : ''))}` : '',
                    location: legacy.city || '',
                    source: String(legacy.notes || '').toLowerCase().includes('apify') || String(legacy.notes || '').toLowerCase().includes('osm') ? 'Google Maps' : 'Manual',
                    websiteStatus: legacy.status || 'no_website',
                    stage: legacy.status === 'contacted' ? 'qualified' : 'new',
                    priority: legacy.status === 'no_website' ? 'hot' : 'warm',
                    notes: legacy.notes || '',
                    addedAt: legacy.addedAt ? new Date(legacy.addedAt).toISOString() : new Date().toISOString()
                }));
            });

            if (importedLeads.length) {
                this.data.crm.leads = [...importedLeads, ...this.data.crm.leads];
                this.saveData();
                if (!silent) this.showToast('CRM Updated', `${importedLeads.length} leads imported and cleared from scanner.`, 'success');
            } else if (!silent) {
                this.showToast('Already Imported', 'Those leads are already in CRM.', 'info');
            }

            // Always clear the scanner's storage after importing so deleted leads don't come back
            if (this.isLocalStorageAccessible()) {
                localStorage.removeItem('re_leads');
            }
        } catch (error) {
            console.error('Legacy lead import failed:', error);
            if (!silent) this.showToast('Import Failed', 'Could not import legacy lead data.', 'error');
        }
        return importedLeads.length;
    },

    getCrmStageLabel(stage) {
        return {
            new: 'New',
            qualified: 'Qualified',
            proposal: 'Proposal',
            negotiation: 'Negotiation',
            won: 'Won',
            lost: 'Lost'
        }[stage] || 'New';
    },

    getCrmWebsiteLabel(status) {
        return {
            no_website: 'No Website',
            bad_website: 'Bad Website',
            outdated_website: 'Outdated Website',
            good_website: 'Good Website'
        }[status] || 'No Website';
    },

    // Comprehensive Indian city → state map (used for CRM state filter)
    _indianCityStateMap: {
        // Tamil Nadu
        'chennai': 'Tamil Nadu', 'madras': 'Tamil Nadu', 'coimbatore': 'Tamil Nadu',
        'madurai': 'Tamil Nadu', 'tiruchirappalli': 'Tamil Nadu', 'trichy': 'Tamil Nadu',
        'salem': 'Tamil Nadu', 'tirunelveli': 'Tamil Nadu', 'tiruppur': 'Tamil Nadu',
        'vellore': 'Tamil Nadu', 'erode': 'Tamil Nadu', 'thoothukkudi': 'Tamil Nadu',
        'tuticorin': 'Tamil Nadu', 'dindigul': 'Tamil Nadu', 'thanjavur': 'Tamil Nadu',
        'tanjore': 'Tamil Nadu', 'ranipet': 'Tamil Nadu', 'sivakasi': 'Tamil Nadu',
        'karur': 'Tamil Nadu', 'nagapattinam': 'Tamil Nadu', 'kanchipuram': 'Tamil Nadu',
        'kumbakonam': 'Tamil Nadu', 'cuddalore': 'Tamil Nadu', 'villupuram': 'Tamil Nadu',
        'tambaram': 'Tamil Nadu', 'avadi': 'Tamil Nadu', 'ambattur': 'Tamil Nadu',
        'nagercoil': 'Tamil Nadu', 'pollachi': 'Tamil Nadu', 'rajapalayam': 'Tamil Nadu',
        'pudukkottai': 'Tamil Nadu', 'krishnagiri': 'Tamil Nadu', 'dharmapuri': 'Tamil Nadu',
        'namakkal': 'Tamil Nadu', 'ariyalur': 'Tamil Nadu', 'perambalur': 'Tamil Nadu',
        'tiruvallur': 'Tamil Nadu', 'tiruvannamalai': 'Tamil Nadu', 'tiruvarur': 'Tamil Nadu',
        'virudhunagar': 'Tamil Nadu', 'tenkasi': 'Tamil Nadu', 'chengalpattu': 'Tamil Nadu',
        'kallakurichi': 'Tamil Nadu', 'ranipettai': 'Tamil Nadu', 'hosur': 'Tamil Nadu',
        // Maharashtra
        'mumbai': 'Maharashtra', 'pune': 'Maharashtra', 'nagpur': 'Maharashtra',
        'nashik': 'Maharashtra', 'aurangabad': 'Maharashtra', 'solapur': 'Maharashtra',
        'kolhapur': 'Maharashtra', 'amravati': 'Maharashtra', 'nanded': 'Maharashtra',
        'thane': 'Maharashtra', 'sangli': 'Maharashtra', 'latur': 'Maharashtra',
        'dhule': 'Maharashtra', 'ahmednagar': 'Maharashtra', 'jalgaon': 'Maharashtra',
        'akola': 'Maharashtra', 'nandurbar': 'Maharashtra', 'wardha': 'Maharashtra',
        'osmanabad': 'Maharashtra', 'ratnagiri': 'Maharashtra', 'satara': 'Maharashtra',
        'beed': 'Maharashtra', 'washim': 'Maharashtra', 'palghar': 'Maharashtra',
        'sindhudurg': 'Maharashtra', 'hingoli': 'Maharashtra', 'gondia': 'Maharashtra',
        'gadchiroli': 'Maharashtra', 'chandrapur': 'Maharashtra', 'buldhana': 'Maharashtra',
        'yavatmal': 'Maharashtra', 'navi mumbai': 'Maharashtra', 'kalyan': 'Maharashtra',
        'dombivli': 'Maharashtra', 'vasai': 'Maharashtra', 'virar': 'Maharashtra',
        // Karnataka
        'bengaluru': 'Karnataka', 'bangalore': 'Karnataka', 'mysuru': 'Karnataka',
        'mysore': 'Karnataka', 'hubli': 'Karnataka', 'dharwad': 'Karnataka',
        'mangaluru': 'Karnataka', 'mangalore': 'Karnataka', 'belagavi': 'Karnataka',
        'belgaum': 'Karnataka', 'gulbarga': 'Karnataka', 'kalaburagi': 'Karnataka',
        'bellary': 'Karnataka', 'ballari': 'Karnataka', 'davangere': 'Karnataka',
        'shimoga': 'Karnataka', 'shivamogga': 'Karnataka', 'tumkur': 'Karnataka',
        'tumakuru': 'Karnataka', 'raichur': 'Karnataka', 'bidar': 'Karnataka',
        'vijayapura': 'Karnataka', 'bijapur': 'Karnataka', 'hospet': 'Karnataka',
        'hassan': 'Karnataka', 'gadag': 'Karnataka', 'udupi': 'Karnataka',
        'chitradurga': 'Karnataka', 'kolar': 'Karnataka', 'chikkaballapur': 'Karnataka',
        'mandya': 'Karnataka', 'chamarajanagar': 'Karnataka', 'kodagu': 'Karnataka',
        'coorg': 'Karnataka', 'chikkamagaluru': 'Karnataka', 'yadgir': 'Karnataka',
        'koppal': 'Karnataka', 'haveri': 'Karnataka', 'bagalkot': 'Karnataka',
        'robertsonpet': 'Karnataka', 'bhadravati': 'Karnataka',
        // Andhra Pradesh
        'visakhapatnam': 'Andhra Pradesh', 'vizag': 'Andhra Pradesh',
        'vijayawada': 'Andhra Pradesh', 'guntur': 'Andhra Pradesh',
        'nellore': 'Andhra Pradesh', 'kurnool': 'Andhra Pradesh',
        'tirupati': 'Andhra Pradesh', 'rajahmundry': 'Andhra Pradesh',
        'rajamahendravaram': 'Andhra Pradesh', 'kakinada': 'Andhra Pradesh',
        'anantapur': 'Andhra Pradesh', 'kadapa': 'Andhra Pradesh',
        'eluru': 'Andhra Pradesh', 'ongole': 'Andhra Pradesh',
        'chittoor': 'Andhra Pradesh', 'srikakulam': 'Andhra Pradesh',
        'vizianagaram': 'Andhra Pradesh', 'bhimavaram': 'Andhra Pradesh',
        'machilipatnam': 'Andhra Pradesh', 'tenali': 'Andhra Pradesh',
        'proddatur': 'Andhra Pradesh', 'hindupur': 'Andhra Pradesh',
        'nandyal': 'Andhra Pradesh', 'tadepalligudem': 'Andhra Pradesh',
        // Telangana
        'hyderabad': 'Telangana', 'secunderabad': 'Telangana', 'warangal': 'Telangana',
        'nizamabad': 'Telangana', 'karimnagar': 'Telangana', 'khammam': 'Telangana',
        'ramagundam': 'Telangana', 'mahbubnagar': 'Telangana', 'nalgonda': 'Telangana',
        'adilabad': 'Telangana', 'suryapet': 'Telangana', 'miryalaguda': 'Telangana',
        'siddipet': 'Telangana', 'mancherial': 'Telangana', 'jagtial': 'Telangana',
        'bhadradri': 'Telangana', 'jagityal': 'Telangana', 'medchal': 'Telangana',
        'sangareddy': 'Telangana', 'vikarabad': 'Telangana', 'wanaparthy': 'Telangana',
        // Kerala
        'thiruvananthapuram': 'Kerala', 'trivandrum': 'Kerala', 'kochi': 'Kerala',
        'cochin': 'Kerala', 'kozhikode': 'Kerala', 'calicut': 'Kerala',
        'thrissur': 'Kerala', 'trichur': 'Kerala', 'kollam': 'Kerala',
        'quilon': 'Kerala', 'palakkad': 'Kerala', 'malappuram': 'Kerala',
        'kannur': 'Kerala', 'kasaragod': 'Kerala', 'pathanamthitta': 'Kerala',
        'kottayam': 'Kerala', 'alappuzha': 'Kerala', 'alleppey': 'Kerala',
        'idukki': 'Kerala', 'wayanad': 'Kerala', 'ernakulam': 'Kerala',
        'alathur': 'Kerala', 'aluva': 'Kerala', 'angamaly': 'Kerala',
        'perumbavoor': 'Kerala', 'thrippunithura': 'Kerala',
        // Gujarat
        'ahmedabad': 'Gujarat', 'surat': 'Gujarat', 'vadodara': 'Gujarat',
        'baroda': 'Gujarat', 'rajkot': 'Gujarat', 'bhavnagar': 'Gujarat',
        'jamnagar': 'Gujarat', 'junagadh': 'Gujarat', 'gandhinagar': 'Gujarat',
        'anand': 'Gujarat', 'bharuch': 'Gujarat', 'morbi': 'Gujarat',
        'navsari': 'Gujarat', 'valsad': 'Gujarat', 'mehsana': 'Gujarat',
        'surendranagar': 'Gujarat', 'porbandar': 'Gujarat', 'amreli': 'Gujarat',
        'kutch': 'Gujarat', 'bhuj': 'Gujarat', 'gandhidham': 'Gujarat',
        'patan': 'Gujarat', 'nadiad': 'Gujarat', 'ankleshwar': 'Gujarat',
        // Rajasthan
        'jaipur': 'Rajasthan', 'jodhpur': 'Rajasthan', 'udaipur': 'Rajasthan',
        'ajmer': 'Rajasthan', 'kota': 'Rajasthan', 'bikaner': 'Rajasthan',
        'alwar': 'Rajasthan', 'sikar': 'Rajasthan', 'bharatpur': 'Rajasthan',
        'pali': 'Rajasthan', 'sri ganganagar': 'Rajasthan', 'barmer': 'Rajasthan',
        'hanumangarh': 'Rajasthan', 'jaisalmer': 'Rajasthan', 'churu': 'Rajasthan',
        'tonk': 'Rajasthan', 'nagaur': 'Rajasthan', 'bhilwara': 'Rajasthan',
        'sawai madhopur': 'Rajasthan', 'jhalawar': 'Rajasthan', 'bundi': 'Rajasthan',
        'dholpur': 'Rajasthan', 'dausa': 'Rajasthan', 'karauli': 'Rajasthan',
        // Madhya Pradesh
        'bhopal': 'Madhya Pradesh', 'indore': 'Madhya Pradesh', 'jabalpur': 'Madhya Pradesh',
        'gwalior': 'Madhya Pradesh', 'ujjain': 'Madhya Pradesh', 'sagar': 'Madhya Pradesh',
        'dewas': 'Madhya Pradesh', 'satna': 'Madhya Pradesh', 'ratlam': 'Madhya Pradesh',
        'rewa': 'Madhya Pradesh', 'murwara': 'Madhya Pradesh', 'singrauli': 'Madhya Pradesh',
        'burhanpur': 'Madhya Pradesh', 'khandwa': 'Madhya Pradesh', 'bhind': 'Madhya Pradesh',
        'chhindwara': 'Madhya Pradesh', 'shivpuri': 'Madhya Pradesh', 'vidisha': 'Madhya Pradesh',
        'chhatarpur': 'Madhya Pradesh', 'damoh': 'Madhya Pradesh', 'mandsaur': 'Madhya Pradesh',
        'khargone': 'Madhya Pradesh', 'neemuch': 'Madhya Pradesh', 'pithampur': 'Madhya Pradesh',
        'hoshangabad': 'Madhya Pradesh', 'itarsi': 'Madhya Pradesh', 'sehore': 'Madhya Pradesh',
        'betul': 'Madhya Pradesh', 'seoni': 'Madhya Pradesh', 'datia': 'Madhya Pradesh',
        // Uttar Pradesh
        'lucknow': 'Uttar Pradesh', 'kanpur': 'Uttar Pradesh', 'agra': 'Uttar Pradesh',
        'varanasi': 'Uttar Pradesh', 'allahabad': 'Uttar Pradesh', 'prayagraj': 'Uttar Pradesh',
        'meerut': 'Uttar Pradesh', 'noida': 'Uttar Pradesh', 'ghaziabad': 'Uttar Pradesh',
        'bareilly': 'Uttar Pradesh', 'aligarh': 'Uttar Pradesh', 'moradabad': 'Uttar Pradesh',
        'gorakhpur': 'Uttar Pradesh', 'mathura': 'Uttar Pradesh', 'muzaffarnagar': 'Uttar Pradesh',
        'saharanpur': 'Uttar Pradesh', 'firozabad': 'Uttar Pradesh', 'loni': 'Uttar Pradesh',
        'jhansi': 'Uttar Pradesh', 'hapur': 'Uttar Pradesh', 'sambhal': 'Uttar Pradesh',
        'ayodhya': 'Uttar Pradesh', 'faizabad': 'Uttar Pradesh', 'amroha': 'Uttar Pradesh',
        'etawah': 'Uttar Pradesh', 'mirzapur': 'Uttar Pradesh', 'bulandshahr': 'Uttar Pradesh',
        'rampur': 'Uttar Pradesh', 'shahjahanpur': 'Uttar Pradesh', 'farrukhabad': 'Uttar Pradesh',
        'maunath bhanjan': 'Uttar Pradesh', 'bahraich': 'Uttar Pradesh', 'hardoi': 'Uttar Pradesh',
        // West Bengal
        'kolkata': 'West Bengal', 'calcutta': 'West Bengal', 'asansol': 'West Bengal',
        'siliguri': 'West Bengal', 'durgapur': 'West Bengal', 'bardhaman': 'West Bengal',
        'burdwan': 'West Bengal', 'malda': 'West Bengal', 'baharampur': 'West Bengal',
        'habra': 'West Bengal', 'kharagpur': 'West Bengal', 'shantipur': 'West Bengal',
        'dankuni': 'West Bengal', 'dhulian': 'West Bengal', 'ranaghat': 'West Bengal',
        'haldia': 'West Bengal', 'raiganj': 'West Bengal', 'krishnanagar': 'West Bengal',
        'nabadwip': 'West Bengal', 'medinipur': 'West Bengal', 'jalpaiguri': 'West Bengal',
        'darjeeling': 'West Bengal', 'purulia': 'West Bengal', 'bankura': 'West Bengal',
        'balurghat': 'West Bengal', 'basirhat': 'West Bengal', 'cooch behar': 'West Bengal',
        // Delhi
        'delhi': 'Delhi', 'new delhi': 'Delhi', 'dwarka': 'Delhi', 'rohini': 'Delhi',
        'janakpuri': 'Delhi', 'saket': 'Delhi', 'lajpat nagar': 'Delhi',
        'karol bagh': 'Delhi', 'connaught place': 'Delhi', 'pitampura': 'Delhi',
        // Punjab
        'ludhiana': 'Punjab', 'amritsar': 'Punjab', 'jalandhar': 'Punjab',
        'patiala': 'Punjab', 'bathinda': 'Punjab', 'mohali': 'Punjab',
        'pathankot': 'Punjab', 'hoshiarpur': 'Punjab', 'gurdaspur': 'Punjab',
        'ferozepur': 'Punjab', 'moga': 'Punjab', 'fatehgarh sahib': 'Punjab',
        'muktsar': 'Punjab', 'fazilka': 'Punjab', 'kapurthala': 'Punjab',
        'sangrur': 'Punjab', 'barnala': 'Punjab', 'mansa': 'Punjab', 'ropar': 'Punjab',
        // Haryana
        'faridabad': 'Haryana', 'gurgaon': 'Haryana', 'gurugram': 'Haryana',
        'panipat': 'Haryana', 'ambala': 'Haryana', 'yamunanagar': 'Haryana',
        'rohtak': 'Haryana', 'hisar': 'Haryana', 'karnal': 'Haryana',
        'sonipat': 'Haryana', 'panchkula': 'Haryana', 'bhiwani': 'Haryana',
        'sirsa': 'Haryana', 'bahadurgarh': 'Haryana', 'jind': 'Haryana',
        'thanesar': 'Haryana', 'kaithal': 'Haryana', 'rewari': 'Haryana',
        'palwal': 'Haryana', 'nuh': 'Haryana', 'fatehabad': 'Haryana',
        // Bihar
        'patna': 'Bihar', 'gaya': 'Bihar', 'bhagalpur': 'Bihar',
        'muzaffarpur': 'Bihar', 'purnia': 'Bihar', 'darbhanga': 'Bihar',
        'bihar sharif': 'Bihar', 'arrah': 'Bihar', 'begusarai': 'Bihar',
        'katihar': 'Bihar', 'munger': 'Bihar', 'chhapra': 'Bihar',
        'buxar': 'Bihar', 'siwan': 'Bihar', 'saran': 'Bihar',
        'hajipur': 'Bihar', 'dehri': 'Bihar', 'sasaram': 'Bihar',
        // Odisha
        'bhubaneswar': 'Odisha', 'cuttack': 'Odisha', 'rourkela': 'Odisha',
        'brahmapur': 'Odisha', 'berhampur': 'Odisha', 'sambalpur': 'Odisha',
        'puri': 'Odisha', 'balasore': 'Odisha', 'baleswar': 'Odisha',
        'baripada': 'Odisha', 'jharsuguda': 'Odisha', 'jeypore': 'Odisha',
        'angul': 'Odisha', 'dhenkanal': 'Odisha', 'barbil': 'Odisha',
        // Assam
        'guwahati': 'Assam', 'silchar': 'Assam', 'dibrugarh': 'Assam',
        'jorhat': 'Assam', 'nagaon': 'Assam', 'tinsukia': 'Assam',
        'lakhimpur': 'Assam', 'dhubri': 'Assam', 'bongaigaon': 'Assam',
        'goalpara': 'Assam', 'karimganj': 'Assam', 'sibsagar': 'Assam',
        'golaghat': 'Assam', 'diphu': 'Assam', 'tezpur': 'Assam',
        // Jharkhand
        'ranchi': 'Jharkhand', 'jamshedpur': 'Jharkhand', 'dhanbad': 'Jharkhand',
        'bokaro': 'Jharkhand', 'deoghar': 'Jharkhand', 'phusro': 'Jharkhand',
        'hazaribag': 'Jharkhand', 'giridih': 'Jharkhand', 'ramgarh': 'Jharkhand',
        'medininagar': 'Jharkhand', 'chaibasa': 'Jharkhand', 'chirkunda': 'Jharkhand',
        // Chhattisgarh
        'raipur': 'Chhattisgarh', 'bhilai': 'Chhattisgarh', 'bilaspur': 'Chhattisgarh',
        'korba': 'Chhattisgarh', 'rajnandgaon': 'Chhattisgarh', 'jagdalpur': 'Chhattisgarh',
        'durg': 'Chhattisgarh', 'raigarh': 'Chhattisgarh', 'ambikapur': 'Chhattisgarh',
        // Uttarakhand
        'dehradun': 'Uttarakhand', 'haridwar': 'Uttarakhand', 'roorkee': 'Uttarakhand',
        'haldwani': 'Uttarakhand', 'rudrapur': 'Uttarakhand', 'kashipur': 'Uttarakhand',
        'rishikesh': 'Uttarakhand', 'pithoragarh': 'Uttarakhand', 'ramnagar': 'Uttarakhand',
        // Himachal Pradesh
        'shimla': 'Himachal Pradesh', 'solan': 'Himachal Pradesh', 'dharamsala': 'Himachal Pradesh',
        'mandi': 'Himachal Pradesh', 'kullu': 'Himachal Pradesh', 'palampur': 'Himachal Pradesh',
        'baddi': 'Himachal Pradesh', 'nahan': 'Himachal Pradesh', 'chamba': 'Himachal Pradesh',
        // Goa
        'panaji': 'Goa', 'margao': 'Goa', 'vasco da gama': 'Goa', 'mapusa': 'Goa',
        'ponda': 'Goa', 'bicholim': 'Goa', 'curchorem': 'Goa',
        // Puducherry
        'puducherry': 'Puducherry', 'pondicherry': 'Puducherry', 'karaikal': 'Puducherry',
        // Chandigarh
        'chandigarh': 'Chandigarh',
        // Jammu & Kashmir
        'srinagar': 'Jammu & Kashmir', 'jammu': 'Jammu & Kashmir', 'anantnag': 'Jammu & Kashmir',
        'baramulla': 'Jammu & Kashmir', 'sopore': 'Jammu & Kashmir', 'kathua': 'Jammu & Kashmir',
        // Manipur
        'imphal': 'Manipur', 'thoubal': 'Manipur', 'churachandpur': 'Manipur',
        // Meghalaya
        'shillong': 'Meghalaya', 'tura': 'Meghalaya', 'jowai': 'Meghalaya',
        // Tripura
        'agartala': 'Tripura', 'dharmanagar': 'Tripura', 'udaipur': 'Tripura',
        // Nagaland
        'kohima': 'Nagaland', 'dimapur': 'Nagaland', 'mokokchung': 'Nagaland',
        // Mizoram
        'aizawl': 'Mizoram', 'lunglei': 'Mizoram', 'champhai': 'Mizoram',
        // Arunachal Pradesh
        'itanagar': 'Arunachal Pradesh', 'naharlagun': 'Arunachal Pradesh',
        // Sikkim
        'gangtok': 'Sikkim', 'namchi': 'Sikkim',
    },

    // Resolve the Indian state from a lead location string
    _resolveIndianState(location) {
        if (!location) return null;
        const loc = location.toLowerCase();
        // First, check if any known state name appears directly in the string
        const stateNames = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
            'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Jammu & Kashmir',
            'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
            'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
            'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
            'Delhi', 'Puducherry', 'Chandigarh'
        ];
        for (const state of stateNames) {
            if (loc.includes(state.toLowerCase())) return state;
        }
        // Otherwise, try to match a city name from the map
        const map = this._indianCityStateMap;
        for (const city of Object.keys(map)) {
            // Match as whole word to avoid false positives
            const re = new RegExp(`\\b${city}\\b`);
            if (re.test(loc)) return map[city];
        }
        return null;
    },

    getFilteredCrmLeads() {
        const q = (this.crmSearchText || '').trim().toLowerCase();
        const stageFilter = this.crmStageFilter || 'all';
        const stateFilter = this.crmStateFilter || 'all';
        const websiteFilter = this.crmWebsiteFilter || 'all';
        const nicheFilter = this.crmNicheFilter || 'all';
        
        return (this.data.crm?.leads || []).filter((lead) => {
            if (stageFilter !== 'all' && lead.stage !== stageFilter) return false;
            if (stateFilter !== 'all') {
                const resolved = lead.location ? lead.location.split(',')[0].trim() : null;
                if (!resolved || resolved.toLowerCase() !== stateFilter.toLowerCase()) return false;
            }
            if (websiteFilter !== 'all' && lead.websiteStatus !== websiteFilter) return false;
            if (nicheFilter !== 'all') {
                if (!lead.tags || !lead.tags.some(t => t.toLowerCase() === nicheFilter.toLowerCase())) return false;
            }
            if (!q) return true;
            const haystack = [
                lead.company,
                lead.contactName,
                lead.phone,
                lead.email,
                lead.location,
                lead.source,
                lead.notes,
                ...(lead.tags || [])
            ].join(' ').toLowerCase();
            return haystack.includes(q);
        });
    },

    renderCRM() {
        this.data.crm = this.data.crm || { leads: [] };
        const leads = this.getFilteredCrmLeads();
        const allLeads = this.data.crm.leads || [];
        const currency = this.data.settings.currency || '\u20B9';
        const today = new Date().toISOString().slice(0, 10);
        const setText = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = String(value);
        };

        setText('crm-total-leads', allLeads.length);
        setText('crm-qualified-leads', allLeads.filter((lead) => lead.stage === 'qualified').length);
        setText('crm-proposal-leads', allLeads.filter((lead) => lead.stage === 'proposal').length);
        setText('crm-won-value', `${currency}${allLeads.filter((lead) => lead.stage === 'won').reduce((sum, lead) => sum + (Number(lead.estimatedValue) || 0), 0).toLocaleString()}`);
        setText('crm-followups-due', allLeads.filter((lead) => lead.nextFollowUp && lead.nextFollowUp <= today && lead.stage !== 'won' && lead.stage !== 'lost').length);

        const searchEl = document.getElementById('crm-search');
        const stageFilterEl = document.getElementById('crm-stage-filter');
        const stateFilterEl = document.getElementById('crm-state-filter');
        if (searchEl && searchEl.value !== this.crmSearchText) searchEl.value = this.crmSearchText;
        if (stageFilterEl && stageFilterEl.value !== this.crmStageFilter) stageFilterEl.value = this.crmStageFilter;

        // Populate place filter dynamically by scanning all lead locations for cities
        if (stateFilterEl) {
            const allLeadsForState = this.data.crm?.leads || [];
            const foundStates = new Set();
            allLeadsForState.forEach((lead) => {
                const resolved = lead.location ? lead.location.split(',')[0].trim() : null;
                if (resolved) foundStates.add(resolved);
            });
            const sortedStates = Array.from(foundStates).sort();
            const currentVal = this.crmStateFilter || 'all';
            stateFilterEl.innerHTML = `<option value="all">All Places (${allLeadsForState.length})</option>` +
                sortedStates.map((s) => {
                    const count = allLeadsForState.filter((l) => (l.location ? l.location.split(',')[0].trim() : null) === s).length;
                    return `<option value="${s.toLowerCase()}" ${currentVal === s.toLowerCase() ? 'selected' : ''}>${s} (${count})</option>`;
                }).join('');
            if (stateFilterEl.value !== currentVal) stateFilterEl.value = currentVal;
        }

        const nicheFilterEl = document.getElementById('crm-niche-filter');
        if (nicheFilterEl) {
            const allLeadsForNiche = this.data.crm?.leads || [];
            const foundNiches = new Set();
            allLeadsForNiche.forEach((lead) => {
                if (lead.tags) lead.tags.forEach(t => foundNiches.add(t));
            });
            const sortedNiches = Array.from(foundNiches).sort();
            const currentVal = this.crmNicheFilter || 'all';
            nicheFilterEl.innerHTML = `<option value="all">All Niches (${allLeadsForNiche.length})</option>` +
                sortedNiches.map((n) => {
                    const count = allLeadsForNiche.filter(l => l.tags && l.tags.includes(n)).length;
                    return `<option value="${n.toLowerCase()}" ${currentVal === n.toLowerCase() ? 'selected' : ''}>${n} (${count})</option>`;
                }).join('');
            if (nicheFilterEl.value !== currentVal) nicheFilterEl.value = currentVal;
        }
        
        const websiteFilterEl = document.getElementById('crm-website-filter');
        if (websiteFilterEl && websiteFilterEl.value !== (this.crmWebsiteFilter || 'all')) {
            websiteFilterEl.value = this.crmWebsiteFilter || 'all';
        }

        const board = document.getElementById('crm-board');
        if (board) {
            const stages = ['new', 'qualified', 'proposal', 'negotiation', 'won', 'lost'];
            board.innerHTML = stages.map((stage) => {
                const stageLeads = leads.filter((lead) => lead.stage === stage).slice(0, 4);
                const cards = stageLeads.length ? stageLeads.map((lead) => {
                    const statusTone = lead.websiteStatus === 'good_website' ? 'good' : lead.websiteStatus === 'no_website' ? 'none' : 'bad';
                    return `
                        <div class="crm-mini-card ${statusTone}" draggable="true" data-crm-id="${this.escapeCrmHtml(lead.id)}" style="cursor: grab;">
                            <div class="crm-mini-title">${this.escapeCrmHtml(lead.company)}</div>
                            <div class="crm-mini-meta">${this.escapeCrmHtml(lead.location || 'No location')}</div>
                            <div class="crm-mini-meta">${this.escapeCrmHtml(this.getCrmWebsiteLabel(lead.websiteStatus))}</div>
                            <div class="crm-mini-value">${currency}${(Number(lead.estimatedValue) || 0).toLocaleString()}</div>
                        </div>
                    `;
                }).join('') : `<div class="crm-stage-empty">No leads</div>`;
                return `
                    <div class="crm-stage-column" data-crm-stage="${stage}">
                        <div class="crm-stage-head">
                            <div class="crm-stage-title">${this.getCrmStageLabel(stage)}</div>
                            <div class="crm-stage-count">${leads.filter((lead) => lead.stage === stage).length}</div>
                        </div>
                        <div class="crm-stage-list">${cards}</div>
                    </div>
                `;
            }).join('');
        }

        const tbody = document.querySelector('#crm-table tbody');
        if (!tbody) return;
        
        // Hide bulk bar if it was visible
        const bulkBar = document.getElementById('crm-bulk-bar');
        if (bulkBar) bulkBar.style.display = 'none';

        if (!leads.length) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#64748b; padding:24px;">No leads match the current CRM filters.</td></tr>`;
            return;
        }

        tbody.innerHTML = leads.map((lead) => {
            const followUpDate = lead.nextFollowUp ? new Date(lead.nextFollowUp).toLocaleDateString() : '';
            const followUpTime = lead.followupTime || '';
            const followUpType = lead.followupType || '';
            const followUpNotes = lead.followupNotes || '';
            const today = new Date().toISOString().slice(0, 10);
            const isOverdue = lead.nextFollowUp && lead.nextFollowUp < today && lead.stage !== 'won' && lead.stage !== 'lost';
            const isToday = lead.nextFollowUp === today;
            const followupTypeIcons = { 'Call': '📞', 'WhatsApp': '💬', 'Email': '✉️', 'Meeting': '🤝', 'Site Visit': '🏢', 'Demo': '🖥️' };
            const typeIcon = followUpType ? (followupTypeIcons[followUpType] || '📋') : '';
            const followUpCell = lead.nextFollowUp ? `
                <div style="display:flex; flex-direction:column; gap:3px;">
                    <span style="font-weight:600; color:${isOverdue ? '#ef4444' : isToday ? '#f59e0b' : 'inherit'}; font-size:13px;">
                        ${isOverdue ? '🔴' : isToday ? '🟡' : '🟢'} ${followUpDate}${followUpTime ? ' · ' + followUpTime : ''}
                    </span>
                    ${followUpType ? `<span style="font-size:11px; background:rgba(99,102,241,0.12); color:#6366f1; padding:2px 7px; border-radius:20px; width:fit-content;">${typeIcon} ${this.escapeCrmHtml(followUpType)}</span>` : ''}
                    ${followUpNotes ? `<span style="font-size:11px; color:#64748b; max-width:160px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${this.escapeCrmHtml(followUpNotes)}">${this.escapeCrmHtml(followUpNotes)}</span>` : ''}
                </div>
            ` : '<span style="color:#94a3b8;">—</span>';
            const tags = (lead.tags || []).slice(0, 3).map((tag) => `<span class="crm-tag">${this.escapeCrmHtml(tag)}</span>`).join('');
            const websiteHref = lead.website ? (lead.website.startsWith('http') ? lead.website : `https://${lead.website}`) : '';
            const mapHref = lead.mapLink ? lead.mapLink : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lead.company + (lead.location ? ' ' + lead.location : ''))}`;
            const priorityLabels = { hot: '\ud83d\udd34 Hot', warm: '\ud83d\udfe0 Warm', cold: '\ud83d\udd35 Cold' };
            const priorityLabel = priorityLabels[lead.priority] || lead.priority;
            return `
                <tr data-lead-id="${this.escapeCrmHtml(lead.id)}">
                    <td style="text-align:center;">
                        <input type="checkbox" class="crm-row-check" data-id="${this.escapeCrmHtml(lead.id)}" style="cursor:pointer; width:16px; height:16px;">
                    </td>
                    <td>
                        <div class="crm-lead-main">
                            <span class="crm-lead-name">${this.escapeCrmHtml(lead.company)}</span>
                            <span class="crm-lead-sub">${this.escapeCrmHtml(lead.contactName || lead.location || lead.source || 'Lead')}</span>
                            <span class="crm-lead-sub">${this.escapeCrmHtml(lead.phone || lead.email || 'No contact info')}</span>
                            ${websiteHref ? `<a href="${this.escapeCrmHtml(websiteHref)}" target="_blank" rel="noopener" class="crm-lead-sub">${this.escapeCrmHtml(lead.website)}</a>` : ''}
                            ${mapHref ? `<a href="${this.escapeCrmHtml(mapHref)}" target="_blank" rel="noopener" class="crm-lead-sub">Open Map Link</a>` : ''}
                            ${tags ? `<div class="crm-tags">${tags}</div>` : ''}
                        </div>
                    </td>
                    <td>
                        <div style="display:grid; gap:8px;">
                            <span class="crm-badge website-${lead.websiteStatus}">${this.escapeCrmHtml(this.getCrmWebsiteLabel(lead.websiteStatus))}</span>
                            <span class="crm-badge priority-${lead.priority}">${priorityLabel}</span>
                        </div>
                    </td>
                    <td>
                        <select class="form-control" data-crm-stage-id="${this.escapeCrmHtml(lead.id)}" style="min-width:150px;">
                            <option value="new" ${lead.stage === 'new' ? 'selected' : ''}>New</option>
                            <option value="qualified" ${lead.stage === 'qualified' ? 'selected' : ''}>Qualified</option>
                            <option value="proposal" ${lead.stage === 'proposal' ? 'selected' : ''}>Proposal</option>
                            <option value="negotiation" ${lead.stage === 'negotiation' ? 'selected' : ''}>Negotiation</option>
                            <option value="won" ${lead.stage === 'won' ? 'selected' : ''}>Won</option>
                            <option value="lost" ${lead.stage === 'lost' ? 'selected' : ''}>Lost</option>
                        </select>
                    </td>
                    <td>${followUpCell}</td>
                    <td>${currency}${(Number(lead.estimatedValue) || 0).toLocaleString()}</td>
                    <td>
                        <div style="display:flex; gap:6px; flex-wrap:wrap; align-items:center;">
                            <button type="button" class="btn btn-primary" data-crm-action="create-quote" data-crm-id="${this.escapeCrmHtml(lead.id)}" style="padding: 6px 12px; font-size: 0.8rem;"><i class="fa-solid fa-file-pen"></i> Create Quote</button>
                            <button type="button" class="btn btn-outline" data-crm-action="contacted" data-crm-id="${this.escapeCrmHtml(lead.id)}" style="padding: 6px 12px; font-size: 0.8rem;">Contacted</button>
                            <button type="button" class="btn btn-outline" data-crm-action="edit" data-crm-id="${this.escapeCrmHtml(lead.id)}" style="padding: 6px 12px; font-size: 0.8rem;">Edit</button>
                            <button type="button" class="btn btn-danger-outline" data-crm-action="delete" data-crm-id="${this.escapeCrmHtml(lead.id)}" style="padding: 6px 12px; font-size: 0.8rem;">Delete</button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');

        // Wire up select-all checkbox and bulk action bar
        this._bindCrmBulkSelect();
    },

    _bindCrmBulkSelect() {
        const selectAll = document.getElementById('crm-select-all');
        const bulkBar = document.getElementById('crm-bulk-bar');
        const countEl = document.getElementById('crm-selected-count');
        const deleteSelBtn = document.getElementById('crm-delete-selected-btn');
        const clearAllBtn = document.getElementById('crm-clear-all-btn');
        const tbody = document.querySelector('#crm-table tbody');
        if (!selectAll || !tbody) return;

        const updateBulkBar = () => {
            const checked = tbody.querySelectorAll('.crm-row-check:checked');
            const total = tbody.querySelectorAll('.crm-row-check').length;
            const count = checked.length;
            if (bulkBar) bulkBar.style.display = count > 0 ? 'flex' : 'none';
            if (countEl) countEl.textContent = `${count} of ${total} selected`;
            if (selectAll) selectAll.indeterminate = count > 0 && count < total;
            if (selectAll) selectAll.checked = total > 0 && count === total;
        };

        // Select-all toggle
        selectAll.onclick = () => {
            tbody.querySelectorAll('.crm-row-check').forEach(cb => { cb.checked = selectAll.checked; });
            updateBulkBar();
        };

        // Individual row checkboxes
        tbody.addEventListener('change', (e) => {
            if (e.target.classList.contains('crm-row-check')) updateBulkBar();
        });

        // Highlight selected rows
        tbody.addEventListener('change', (e) => {
            if (!e.target.classList.contains('crm-row-check')) return;
            const row = e.target.closest('tr');
            if (row) row.style.background = e.target.checked ? 'rgba(239,68,68,0.07)' : '';
        });

        // Delete selected
        if (deleteSelBtn) {
            deleteSelBtn.onclick = () => {
                const ids = [...tbody.querySelectorAll('.crm-row-check:checked')].map(cb => cb.dataset.id);
                if (!ids.length) return;
                if (!confirm(`Delete ${ids.length} selected lead(s)? This cannot be undone.`)) return;
                this.data.crm.leads = this.data.crm.leads.filter(l => !ids.includes(String(l.id)));
                this.saveData();
                this.renderCRM();
                this.showToast('Leads Deleted', `${ids.length} lead(s) removed from CRM.`, 'success');
            };
        }

        // Delete ALL
        if (clearAllBtn) {
            clearAllBtn.onclick = () => {
                const total = this.data.crm.leads.length;
                if (!confirm(`⚠️ This will permanently delete ALL ${total} leads from CRM. Are you sure?`)) return;
                this.data.crm.leads = [];
                
                // FORCE clear the scanner memory too, just in case old app.js is cached and trying to auto-import!
                if (this.isLocalStorageAccessible()) {
                    localStorage.removeItem('re_leads');
                }

                this.saveData();
                this.renderCRM();
                this.showToast('All Leads Cleared', `${total} leads have been deleted.`, 'success');
            };
        }
    },

    saveCrmLead(event) {
        event.preventDefault();
        const companyEl = document.getElementById('crm-company');
        const company = (companyEl?.value || '').trim();
        if (!company) {
            if (companyEl) companyEl.focus();
            this.showToast('Lead Name Required', 'Please enter a company or business name.', 'error');
            return;
        }

        const idValue = (document.getElementById('crm-lead-id')?.value || '').trim();
        const lead = this.normalizeCrmLead({
            id: idValue || undefined,
            company,
            contactName: document.getElementById('crm-contact')?.value || '',
            phone: document.getElementById('crm-phone')?.value || '',
            email: document.getElementById('crm-email')?.value || '',
            website: document.getElementById('crm-website')?.value || '',
            mapLink: document.getElementById('crm-map-link')?.value || '',
            location: document.getElementById('crm-location')?.value || '',
            source: document.getElementById('crm-source')?.value || 'Manual',
            websiteStatus: document.getElementById('crm-website-status')?.value || 'no_website',
            stage: document.getElementById('crm-stage')?.value || 'new',
            priority: document.getElementById('crm-priority')?.value || 'warm',
            estimatedValue: document.getElementById('crm-value')?.value || 0,
            nextFollowUp: document.getElementById('crm-followup')?.value || '',
            followupTime: document.getElementById('crm-followup-time')?.value || '',
            followupType: document.getElementById('crm-followup-type')?.value || '',
            followupNotes: document.getElementById('crm-followup-notes')?.value || '',
            tags: document.getElementById('crm-tags')?.value || '',
            notes: document.getElementById('crm-notes')?.value || '',
            lastContactedAt: idValue ? (this.data.crm.leads.find((item) => String(item.id) === String(idValue))?.lastContactedAt || '') : ''
        });

        const existingIndex = this.data.crm.leads.findIndex((item) => String(item.id) === String(lead.id));
        if (existingIndex >= 0) {
            lead.addedAt = this.data.crm.leads[existingIndex].addedAt;
            this.data.crm.leads.splice(existingIndex, 1, lead);
        } else {
            this.data.crm.leads.unshift(lead);
        }

        if (!this.saveData()) return;
        this.resetCrmForm();
        this.renderCRM();
        this.closeModal('lead-modal');
        this.showToast('CRM Saved', existingIndex >= 0 ? 'Lead updated successfully.' : 'Lead added to CRM.', 'success');
    },

    resetCrmForm() {
        const form = document.getElementById('crm-lead-form');
        if (form) form.reset();
        const formTitle = document.getElementById('crm-form-title');
        const leadId = document.getElementById('crm-lead-id');
        if (formTitle) formTitle.textContent = 'Add New Lead';
        if (leadId) leadId.value = '';
        this.crmEditingLeadId = null;
        const sourceEl = document.getElementById('crm-source');
        const statusEl = document.getElementById('crm-website-status');
        const stageEl = document.getElementById('crm-stage');
        const priorityEl = document.getElementById('crm-priority');
        if (sourceEl) sourceEl.value = 'Google Maps';
        if (statusEl) statusEl.value = 'no_website';
        if (stageEl) stageEl.value = 'new';
        if (priorityEl) priorityEl.value = 'warm';
    },

    editCrmLead(id) {
        const lead = this.data.crm.leads.find((item) => String(item.id) === String(id));
        if (!lead) return;
        this.crmEditingLeadId = id;
        const setValue = (fieldId, value) => {
            const el = document.getElementById(fieldId);
            if (el) el.value = value || '';
        };
        setValue('crm-lead-id', lead.id);
        setValue('crm-company', lead.company);
        setValue('crm-contact', lead.contactName);
        setValue('crm-phone', lead.phone);
        setValue('crm-email', lead.email);
        setValue('crm-website', lead.website);
        setValue('crm-map-link', lead.mapLink);
        setValue('crm-location', lead.location);
        setValue('crm-source', lead.source);
        setValue('crm-website-status', lead.websiteStatus);
        setValue('crm-stage', lead.stage);
        setValue('crm-priority', lead.priority);
        setValue('crm-value', lead.estimatedValue);
        setValue('crm-followup', lead.nextFollowUp);
        setValue('crm-followup-time', lead.followupTime);
        setValue('crm-followup-type', lead.followupType);
        setValue('crm-followup-notes', lead.followupNotes);
        setValue('crm-tags', (lead.tags || []).join(', '));
        setValue('crm-notes', lead.notes);
        const formTitle = document.getElementById('crm-form-title');
        if (formTitle) formTitle.textContent = 'Edit Lead';
        this.openModal('lead-modal');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    createQuoteFromCrmLead(id) {
        const leads = this.data.crm?.leads || [];
        const lead = leads.find((item) => String(item.id) === String(id));
        if (!lead) return;

        // Close modal if open
        this.closeModal('lead-modal');

        // Navigate to Create Quote view
        this.navigateTo('create-quote');

        // Pre-fill fields
        setTimeout(() => {
            const nameInput = document.getElementById('client-name');
            const emailInput = document.getElementById('client-email');
            const phoneInput = document.getElementById('client-phone');
            const addressInput = document.getElementById('client-address');

            if (nameInput) nameInput.value = lead.company || lead.contactName || '';
            if (emailInput) emailInput.value = lead.email || '';
            if (phoneInput) phoneInput.value = lead.phone || '';

            const details = [];
            if (lead.contactName && lead.contactName !== lead.company) details.push(`Contact: ${lead.contactName}`);
            if (lead.location) details.push(`Location: ${lead.location}`);
            if (lead.website) details.push(`Website: ${lead.website}`);
            if (lead.notes) details.push(`Notes: ${lead.notes}`);
            if (addressInput) addressInput.value = details.join('\n');

            if (typeof this.showToast === 'function') {
                this.showToast('Quotation Pre-filled', `Client details loaded for ${lead.company}`, 'success');
            }
        }, 50);
    },

    deleteCrmLead(id) {
        const lead = this.data.crm.leads.find((item) => String(item.id) === String(id));
        if (!lead) return;
        if (!confirm(`Delete lead "${lead.company}" from CRM?`)) return;
        this.data.crm.leads = this.data.crm.leads.filter((item) => String(item.id) !== String(id));
        if (!this.saveData()) return;
        if (this.crmEditingLeadId === id) this.resetCrmForm();
        this.renderCRM();
        this.showToast('Lead Deleted', 'The CRM lead has been removed.', 'success');
    },

    updateCrmLeadStage(id, stage) {
        const lead = this.data.crm.leads.find((item) => String(item.id) === String(id));
        if (!lead) return;
        lead.stage = stage;
        lead.updatedAt = new Date().toISOString();
        if (stage === 'won' || stage === 'lost') {
            lead.nextFollowUp = '';
        }
        if (!this.saveData()) return;
        this.renderCRM();
    },

    markCrmLeadContacted(id) {
        const lead = this.data.crm.leads.find((item) => String(item.id) === String(id));
        if (!lead) return;
        lead.lastContactedAt = new Date().toISOString();
        if (lead.stage === 'new') lead.stage = 'qualified';
        lead.updatedAt = new Date().toISOString();
        if (!this.saveData()) return;
        this.renderCRM();
        this.showToast('Lead Updated', 'Marked as contacted and moved forward in the pipeline.', 'success');
    },

    exportCrmLeads() {
        const leads = this.data.crm?.leads || [];
        if (!leads.length) {
            this.showToast('No CRM Leads', 'Add some leads before exporting.', 'info');
            return;
        }
        const headers = ['Company', 'Contact', 'Phone', 'Email', 'Website', 'Map Link', 'Location', 'Source', 'Website Status', 'Stage', 'Priority', 'Estimated Value', 'Follow-up Date', 'Follow-up Time', 'Follow-up Type', 'Follow-up Notes', 'Tags', 'Notes', 'Added At', 'Last Contacted'];
        const rows = leads.map((lead) => [
            lead.company,
            lead.contactName,
            lead.phone,
            lead.email,
            lead.website,
            lead.mapLink,
            lead.location,
            lead.source,
            this.getCrmWebsiteLabel(lead.websiteStatus),
            this.getCrmStageLabel(lead.stage),
            lead.priority,
            lead.estimatedValue,
            lead.nextFollowUp,
            lead.followupTime,
            lead.followupType,
            lead.followupNotes,
            (lead.tags || []).join(', '),
            lead.notes,
            lead.addedAt,
            lead.lastContactedAt
        ]);
        const csv = [headers, ...rows]
            .map((row) => row.map((value) => `"${String(value || '').replace(/"/g, '""').replace(/\r?\n/g, ' ')}"`).join(','))
            .join('\n');
        const link = document.createElement('a');
        link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
        link.download = `eantrax_crm_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
        this.showToast('Export Ready', 'CRM leads exported as CSV.', 'success');
    },

    importCrmCsvFile(event) {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            try {
                const lines = text.split('\n').filter(l => l.trim().length > 0);
                if (lines.length <= 1) {
                    this.showToast('Error', 'CSV file is empty or has no data rows.', 'error');
                    return;
                }
                const headers = lines[0].split(',').map(h => h.replace(/^"|"$/g, '').trim());
                const newLeads = [];
                for (let i = 1; i < lines.length; i++) {
                    const rowText = lines[i];
                    const values = [];
                    let inQuotes = false;
                    let val = '';
                    for(let c=0; c<rowText.length; c++) {
                        const char = rowText[c];
                        if (char === '"' && rowText[c+1] === '"') {
                            val += '"';
                            c++;
                        } else if (char === '"') {
                            inQuotes = !inQuotes;
                        } else if (char === ',' && !inQuotes) {
                            values.push(val.trim());
                            val = '';
                        } else {
                            val += char;
                        }
                    }
                    values.push(val.trim());
                    
                    const getVal = (headerName) => {
                        const idx = headers.findIndex(h => h.toLowerCase() === headerName.toLowerCase());
                        return idx >= 0 ? (values[idx] || '') : '';
                    };
                    
                    const companyName = getVal('Company') || getVal('Name') || 'Imported Lead';
                    
                    const websiteStatusRaw = (getVal('Website Status') || getVal('Status')).toLowerCase();
                    const statusVal = websiteStatusRaw.includes('good') ? 'good' : (websiteStatusRaw.includes('bad') ? 'bad' : 'no_website');
                    
                    const stageRaw = getVal('Stage').toLowerCase();
                    const stageVal = ['new', 'qualified', 'proposal', 'negotiation', 'won', 'lost'].find(s => stageRaw.includes(s)) || 'new';

                    const priorityRaw = getVal('Priority').toLowerCase();
                    const priorityVal = ['hot', 'warm', 'cold'].find(p => priorityRaw.includes(p)) || 'warm';

                    newLeads.push({
                        id: Date.now() + i,
                        company: companyName,
                        contactName: getVal('Contact'),
                        phone: getVal('Phone'),
                        email: getVal('Email'),
                        website: getVal('Website'),
                        mapLink: getVal('Map Link') || getVal('Maps Link'),
                        location: getVal('Location') || getVal('City') || getVal('Place'),
                        source: getVal('Source') || 'CSV Import',
                        websiteStatus: statusVal,
                        stage: stageVal,
                        priority: priorityVal,
                        estimatedValue: getVal('Estimated Value') || '',
                        nextFollowUp: getVal('Follow-up Date') || '',
                        followupTime: getVal('Follow-up Time') || '',
                        followupType: getVal('Follow-up Type') || '',
                        followupNotes: getVal('Follow-up Notes') || '',
                        tags: (getVal('Tags') || getVal('Niche')) ? (getVal('Tags') || getVal('Niche')).split(',').map(t => t.trim()) : [],
                        notes: getVal('Notes') || '',
                        addedAt: getVal('Added At') || new Date().toISOString(),
                        lastContactedAt: getVal('Last Contacted') || ''
                    });
                }
                
                this.data.crm = this.data.crm || { leads: [] };
                this.data.crm.leads = [...newLeads, ...this.data.crm.leads];
                this.saveData();
                this.renderCRM();
                this.showToast('Import Successful', `${newLeads.length} leads imported from CSV!`, 'success');
                
            } catch (err) {
                console.error(err);
                this.showToast('Import Failed', 'Could not parse the CSV file.', 'error');
            }
            event.target.value = '';
        };
        reader.readAsText(file);
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





