function generateInvoice() {
    const customerName = document.getElementById('customerName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemQuantity = document.getElementById('itemQuantity').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const total = itemQuantity * itemPrice;

    document.getElementById('invoiceCustomerName').innerText = `Customer Name: ${customerName}`;
    document.getElementById('invoiceDescription').innerText = `Item Description: ${itemDescription}`;
    document.getElementById('invoiceQuantity').innerText = `Quantity: ${itemQuantity}`;
    document.getElementById('invoicePrice').innerText = `Unit Price: $${itemPrice}`;
    document.getElementById('invoiceTotal').innerText = `Total: $${total}`;

    document.getElementById('invoice').classList.remove('hidden');
}