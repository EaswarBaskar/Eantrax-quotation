// src/calculations.js

/**
 * Pure calculation functions for invoices & quotes
 */

export function calculateLineItemTotal(qty, price) {
    const q = parseFloat(qty) || 0;
    const p = parseFloat(price) || 0;
    return q * p;
}

export function computeDocumentTotals({ items = [], taxRate = 0, taxEnabled = true, discount = 0 }) {
    let subtotal = 0;

    items.forEach(item => {
        subtotal += calculateLineItemTotal(item.qty, item.price);
    });

    const effectiveTaxRate = taxEnabled ? (parseFloat(taxRate) || 0) : 0;
    const effectiveDiscount = parseFloat(discount) || 0;

    const taxAmount = subtotal * (effectiveTaxRate / 100);
    const grandTotal = Math.max(0, subtotal + taxAmount - effectiveDiscount);
    const half = grandTotal / 2;

    return {
        subtotal: parseFloat(subtotal.toFixed(2)),
        taxAmount: parseFloat(taxAmount.toFixed(2)),
        taxRate: effectiveTaxRate,
        taxEnabled: !!taxEnabled,
        discount: effectiveDiscount,
        grandTotal: parseFloat(grandTotal.toFixed(2)),
        advance: 0,
        balance: parseFloat(grandTotal.toFixed(2)),
        halfSplit: parseFloat(half.toFixed(2))
    };
}

export function formatCurrency(amount, symbol = '₹') {
    const num = parseFloat(amount) || 0;
    return `${symbol}${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
