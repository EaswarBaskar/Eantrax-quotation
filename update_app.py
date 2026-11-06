import re

file_path = 'd:/eantrax projects/Eantrax-quotation-main/Eantrax-quotation-main/app.js'
with open(file_path, 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Add bindClick for crm-add-lead-btn
bind_click_pos = js.find("bindClick('crm-import-legacy-btn'")
if bind_click_pos != -1:
    js = js[:bind_click_pos] + "bindClick('crm-add-lead-btn', () => this.openModal('lead-modal'));\n        " + js[bind_click_pos:]

# 2. Add closeModal in saveCrmLead
save_crm_end = js.find("this.showToast('CRM Saved'")
if save_crm_end != -1:
    js = js[:save_crm_end] + "this.closeModal('lead-modal');\n        " + js[save_crm_end:]

# 3. Add openModal in editCrmLead
edit_crm_end = js.find("const formTitle = document.getElementById('crm-form-title');", js.find("editCrmLead(id) {"))
if edit_crm_end != -1:
    # Let's insert openModal after we set form title
    form_title_end = js.find("if (formTitle) formTitle.textContent = 'Edit Lead';", edit_crm_end)
    if form_title_end != -1:
        insert_pos = form_title_end + len("if (formTitle) formTitle.textContent = 'Edit Lead';")
        js = js[:insert_pos] + "\n        this.openModal('lead-modal');" + js[insert_pos:]
    else:
        # Just find the end of editCrmLead
        window_scrollTo_pos = js.find("window.scrollTo({ top: 0, behavior: 'smooth' });", edit_crm_end)
        if window_scrollTo_pos != -1:
            js = js[:window_scrollTo_pos] + "this.openModal('lead-modal');\n        " + js[window_scrollTo_pos:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(js)

print('app.js updated successfully.')
