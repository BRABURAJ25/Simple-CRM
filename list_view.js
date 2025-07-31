frappe.listview_settings['Lead'] = {
    onload: function (listview) {
      //Main scheduler starts  
      listview.page.add_inner_button('Bulk Convert', () => {}, 'Actions'); 
        
        listview.page.add_actions_menu_item('Convert to Customer', async () => {
            let selected = listview.get_checked_items();
            if (!selected.length) {
                frappe.msgprint("Please select at least one Lead.");
                return;
            }

            for (let doc of selected) {
                await frappe.call({
                    method: "your_app.api.convert_lead",
                    args: {
                        lead_name: doc.name
                    },
                    callback: function (r) {
                        if (r.message) {
                            frappe.msgprint(`Converted Lead ${doc.name} to Customer`);
                        }
                    }
                });
            }

            listview.refresh();
        }, true);
    }
};
