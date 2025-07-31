# Simple-CRM

This project adds a custom submenu under the Actions dropdown in the list view of the Lead Doctype in a Frappe application. The submenu allows users to bulk convert selected Leads into Customers.

How It Works

➜Client-Side JavaScript

Injected into the Lead list view using hooks.py.
Adds a new submenu item titled "Bulk Convert to Customer".
On click, sends selected records to the backend using frappe.call().

➜Backend Python Method

Defined in lead_bulk_conversion.py.
Loops through the selected Leads.
Creates a Customer if the Lead hasn't already been converted.
Updates the Lead status.

➜Hook Configuration

Uses doctype_js hook in hooks.py to attach custom JavaScript to the Lead Doctype.
hooks.py: Registers the custom JS with the Lead Doctype.
public/js/lead_list.js: Handles frontend logic and interaction.

lead_bulk_conversion.py: Contains backend logic for conversion.
