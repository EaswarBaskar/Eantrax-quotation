// src/pdf.js

/**
 * PDF generation utility using html2pdf.js
 */

export function exportElementToPDF(element, filename = 'document.pdf', options = {}) {
    if (typeof window.html2pdf === 'undefined') {
        console.error("html2pdf library is not loaded.");
        return Promise.reject(new Error("html2pdf library is not loaded"));
    }

    const defaultOptions = {
        margin: [0.3, 0.3, 0.3, 0.3],
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    const opt = Object.assign({}, defaultOptions, options);
    return window.html2pdf().set(opt).from(element).save();
}

/**
 * Returns watermark styling configuration based on document status
 */
export function getWatermarkConfig(status) {
    const map = {
        paid: { text: 'PAID', color: 'rgba(16, 185, 129, 0.08)' },
        overdue: { text: 'OVERDUE', color: 'rgba(239, 68, 68, 0.08)' },
        draft: { text: 'DRAFT', color: 'rgba(100, 116, 139, 0.08)' },
        sent: { text: 'SENT', color: 'rgba(59, 130, 246, 0.08)' },
        viewed: { text: 'VIEWED', color: 'rgba(6, 182, 212, 0.08)' },
        accepted: { text: 'ACCEPTED', color: 'rgba(16, 185, 129, 0.08)' },
        rejected: { text: 'REJECTED', color: 'rgba(239, 68, 68, 0.08)' }
    };
    return map[status] || { text: '', color: 'transparent' };
}
