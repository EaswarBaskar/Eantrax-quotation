-- =========================================================================
-- Eantrax Quotation & Invoice SaaS - Relational Supabase Schema with RLS
-- =========================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USER SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.user_settings (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    business_name TEXT DEFAULT 'Eantrax Technologies',
    email TEXT DEFAULT '',
    phone TEXT DEFAULT '',
    address TEXT DEFAULT '',
    website TEXT DEFAULT '',
    currency TEXT DEFAULT '₹',
    tax_rate NUMERIC(5, 2) DEFAULT 18.00,
    brand_color TEXT DEFAULT '#0f172a',
    logo_url TEXT DEFAULT '',
    signature_url TEXT DEFAULT '',
    payment_qr_url TEXT DEFAULT '',
    bank_name TEXT DEFAULT '',
    bank_account TEXT DEFAULT '',
    bank_ifsc TEXT DEFAULT '',
    upi_id TEXT DEFAULT '',
    terms TEXT DEFAULT 'Payment due within 15 days.',
    next_quote_id INT DEFAULT 1001,
    next_invoice_id INT DEFAULT 1001,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for user_settings
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own settings"
    ON public.user_settings
    FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- 2. CLIENTS TABLE
CREATE TABLE IF NOT EXISTS public.clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT DEFAULT '',
    phone TEXT DEFAULT '',
    address TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for clients
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own clients"
    ON public.clients
    FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_clients_user_id ON public.clients(user_id);
CREATE INDEX IF NOT EXISTS idx_clients_name ON public.clients(name);

-- 3. CATALOG ITEMS (Products / Services)
CREATE TABLE IF NOT EXISTS public.catalog_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT DEFAULT '',
    price NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    category TEXT DEFAULT 'general',
    recurring BOOLEAN DEFAULT FALSE,
    recurring_period TEXT DEFAULT 'annual', -- 'monthly', 'annual', etc.
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for catalog_items
ALTER TABLE public.catalog_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own catalog"
    ON public.catalog_items
    FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_catalog_user_id ON public.catalog_items(user_id);

-- 4. DOCUMENTS (Quotations & Invoices)
CREATE TABLE IF NOT EXISTS public.documents (
    id TEXT NOT NULL, -- e.g. QT-1001 or INV-1001
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('quotation', 'invoice')),
    client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
    client_snapshot JSONB NOT NULL, -- stores client name, address, email at time of creation
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    due_date DATE,
    items JSONB NOT NULL DEFAULT '[]'::jsonb, -- array of { desc, qty, price, recurring, ... }
    totals JSONB NOT NULL DEFAULT '{}'::jsonb, -- { subtotal, taxAmount, discount, grandTotal, advance, balance }
    scope TEXT DEFAULT '',
    exclusions TEXT DEFAULT '',
    payment_terms TEXT DEFAULT '',
    timeline TEXT DEFAULT '',
    expense NUMERIC(12, 2) DEFAULT 0.00,
    status TEXT NOT NULL DEFAULT 'draft', -- 'draft', 'sent', 'viewed', 'paid', 'partially_paid', 'overdue', 'cancelled'
    gst_not_applicable BOOLEAN DEFAULT FALSE,
    payment_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, id)
);

-- Enable RLS for documents
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own documents"
    ON public.documents
    FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_documents_user_id ON public.documents(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_status ON public.documents(status);
CREATE INDEX IF NOT EXISTS idx_documents_date ON public.documents(date);

-- 5. CRM LEADS TABLE
CREATE TABLE IF NOT EXISTS public.crm_leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT DEFAULT '',
    phone TEXT DEFAULT '',
    company TEXT DEFAULT '',
    status TEXT DEFAULT 'new', -- 'new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost'
    score INT DEFAULT 0,
    budget NUMERIC(12, 2) DEFAULT 0.00,
    timeline TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for crm_leads
ALTER TABLE public.crm_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own leads"
    ON public.crm_leads
    FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_leads_user_id ON public.crm_leads(user_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.crm_leads(status);

-- =========================================================================
-- 6. APP STATE TABLE (Direct JSON Store used by app.js / src/sync.js)
-- =========================================================================
-- This table is required for the currently active cloud synchronization in app.js
CREATE TABLE IF NOT EXISTS public.user_data (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    data JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for user_data
ALTER TABLE public.user_data ENABLE ROW LEVEL SECURITY;

-- Allow users to view and update only their own data
CREATE POLICY "Users can manage their own app data"
    ON public.user_data
    FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_user_data_user_id ON public.user_data(user_id);

