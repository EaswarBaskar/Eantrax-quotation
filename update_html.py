import re

with open('d:/eantrax projects/Eantrax-quotation-main/Eantrax-quotation-main/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Add button
html = html.replace('<button id="crm-import-legacy-btn"', '<button id="crm-add-lead-btn" type="button" class="btn btn-primary">\n                            <i class="fa-solid fa-plus"></i> Add New Lead\n                        </button>\n                        <button id="crm-import-legacy-btn"')

# 2. Extract crm-form-card
form_card_match = re.search(r'(<div class="card crm-form-card">.*?</form>\s*</div>)', html, re.DOTALL)
if form_card_match:
    form_card = form_card_match.group(1)
    
    # Remove form card from layout
    html = html.replace(form_card, '')
    
    # Remove <div class="crm-layout"> and its closing div
    html = html.replace('<div class="crm-layout">\n', '')
    html = html.replace('</div>\n            </section>', '</section>')
    
    # Modify form card for modal
    form_card = form_card.replace('<h3 id="crm-form-title">Add New Lead</h3>', '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">\n                    <h3 id="crm-form-title" style="margin: 0;">Add New Lead</h3>\n                    <button type="button" data-close-modal="lead-modal" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #64748b;">&times;</button>\n                </div>')
    form_card = form_card.replace('class="card crm-form-card"', 'class="card" style="width: 600px; max-width: 95%; max-height: 90vh; overflow-y: auto;"')
    
    # Wrap in modal
    modal_html = f'''        <!-- Lead Modal -->
        <div id="lead-modal" class="modal hidden" role="dialog" aria-modal="true" aria-labelledby="crm-form-title" tabindex="-1" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 100;">
            {form_card}
        </div>\n'''
    
    # Insert modal before <!-- Toast Container -->
    html = html.replace('<!-- Toast Container -->', modal_html + '\n    <!-- Toast Container -->')
    
    with open('d:/eantrax projects/Eantrax-quotation-main/Eantrax-quotation-main/index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print('HTML updated successfully.')
else:
    print('Failed to find form card')
