import frappe

@frappe.whitelist()
def convert_lead(lead_name):
    # Example logic to create a Customer from a Lead
    lead = frappe.get_doc("Lead", lead_name)
    customer = frappe.new_doc("Customer")
    customer.customer_name = lead.lead_name
    customer.customer_type = "Individual"
    customer.save()
    frappe.db.commit()
    return True
