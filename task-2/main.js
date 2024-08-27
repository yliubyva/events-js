"use strict";

const orders = [
    { trackingID: 61612, product: "Laptop", customer: "John Doe", date: "2024-05-01", amount: 1200, paymentMode: "Credit Card", status: "Shipped", },
    { trackingID: 24831, product: "Smartphone", customer: "Jane Smith", date: "2024-03-05", amount: 800, paymentMode: "PayPal", status: "Delivered", },
    { trackingID: 71690, product: "Headphones", customer: "Alice Johnson", date: "2024-08-22", amount: 150, paymentMode: "Bank Transfer", status: "Processing", },
    { trackingID: 81562, product: "Monitor", customer: "Bob Brown", date: "2024-01-04", amount: 300, paymentMode: "Credit Card", status: "Shipped", },
    { trackingID: 37664, product: "Keyboard", customer: "Charlie White", date: "2024-10-12", amount: 70, paymentMode: "PayPal", status: "Delivered", },
    { trackingID: 79275, product: "Mouse", customer: "Diana Green", date: "2024-02-10", amount: 50, paymentMode: "Credit Card", status: "Delivered", },
    { trackingID: 65097, product: "Tablet", customer: "Ethan Black", date: "2024-11-29", amount: 500, paymentMode: "Bank Transfer", status: "Processing", },
    { trackingID: 25214, product: "Smartwatch", customer: "Fiona Red", date: "2024-08-21", amount: 250, paymentMode: "PayPal", status: "Cancelled", },
    { trackingID: 69212, product: "Camera", customer: "George Blue", date: "2024-12-03", amount: 700, paymentMode: "Credit Card", status: "Shipped", },
    { trackingID: 80497, product: "Printer", customer: "Hannah Yellow", date: "2024-06-16", amount: 200, paymentMode: "Bank Transfer", status: "Delivered", },
    { trackingID: 38841, product: "Speakers", customer: "Isaac Violet", date: "2024-08-11", amount: 100, paymentMode: "Credit Card", status: "Processing", },
    { trackingID: 34642, product: "Router", customer: "Jack Orange", date: "2024-02-11", amount: 60, paymentMode: "PayPal", status: "Delivered", },
    { trackingID: 13887, product: "Webcam", customer: "Karen Pink", date: "2024-09-13", amount: 80, paymentMode: "Bank Transfer", status: "Shipped", },
    { trackingID: 83830, product: "External Hard Drive", customer: "Liam Gray", date: "2024-04-04", amount: 150, paymentMode: "Credit Card", status: "Delivered", },
    { trackingID: 37089, product: "SSD", customer: "Mia Brown", date: "2024-08-15", amount: 120, paymentMode: "PayPal", status: "Cancelled", },
    { trackingID: 95239, product: "Graphics Card", customer: "Noah White", date: "2024-10-02", amount: 500, paymentMode: "Bank Transfer", status: "Processing", },
    { trackingID: 18330, product: "Motherboard", customer: "Olivia Black", date: "2024-03-23", amount: 200, paymentMode: "Credit Card", status: "Shipped", },
    { trackingID: 53505, product: "CPU", customer: "Paul Green", date: "2024-08-27", amount: 300, paymentMode: "PayPal", status: "Delivered", },
    { trackingID: 18328, product: "RAM", customer: "Quinn Red", date: "2024-06-19", amount: 150, paymentMode: "Credit Card", status: "Processing", },
    { trackingID: 62726, product: "Power Supply", customer: "Rachel Blue", date: "2024-06-20", amount: 100, paymentMode: "Bank Transfer", status: "Shipped", },
    { trackingID: 69197, product: "Cooling Fan", customer: "Sam Yellow", date: "2024-09-01", amount: 40, paymentMode: "PayPal", status: "Delivered", },
    { trackingID: 55028, product: "Case", customer: "Tina Violet", date: "2024-10-21", amount: 70, paymentMode: "Credit Card", status: "Cancelled", },
    { trackingID: 83124, product: "Gaming Chair", customer: "Uma Orange", date: "2024-07-23", amount: 250, paymentMode: "Bank Transfer", status: "Shipped", },
    { trackingID: 99978, product: "Desk", customer: "Victor Pink", date: "2024-01-05", amount: 200, paymentMode: "PayPal", status: "Delivered", },
    { trackingID: 98770, product: "Monitor Stand", customer: "Wendy Gray", date: "2024-03-25", amount: 30, paymentMode: "Credit Card", status: "Processing", },
    { trackingID: 90140, product: "USB Hub", customer: "Xander Brown", date: "2024-11-29", amount: 20, paymentMode: "Bank Transfer", status: "Delivered", },
    { trackingID: 43815, product: "Docking Station", customer: "Yara White", date: "2024-12-27", amount: 90, paymentMode: "Credit Card", status: "Shipped", },
    { trackingID: 92844, product: "Cable Organizer", customer: "Zack Black", date: "2024-02-19", amount: 15, paymentMode: "PayPal", status: "Cancelled", },
    { trackingID: 14037, product: "Smart Light", customer: "Adam Green", date: "2024-05-17", amount: 50, paymentMode: "Bank Transfer", status: "Processing", },
    { trackingID: 97578, product: "Wireless Charger", customer: "Bella Red", date: "2024-09-19", amount: 35, paymentMode: "Credit Card", status: "Shipped", },
];

const tableElement = document.querySelector("tbody");
const headerTableElement = document.querySelectorAll("th");

renderTable(orders);

headerTableElement.forEach(header => {
    header.addEventListener('click', (event) => {
        const id = event.target.id; 
        let sorted;

        switch (id) {
            case 'sortID':
                sorted = orders.sort((a, b) => a.trackingID - b.trackingID);
                break;
            case 'sortProduct':
                sorted = orders.sort((a, b) => a.product.localeCompare(b.product));
                break;
            case 'sortName':
                sorted = orders.sort((a, b) => a.customer.localeCompare(b.customer));
                break;
            case 'sortDate':
                sorted = orders.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'sortAmount':
                sorted = orders.sort((a, b) => a.amount - b.amount);
                break;
            case 'sortPayment':
                sorted = orders.sort((a, b) => a.paymentMode.localeCompare(b.paymentMode));
                break;
            case 'sortStatus':
                sorted = orders.sort((a, b) => a.status.localeCompare(b.status));
                break;
            default:
                return; 
        }

        renderTable(sorted); 
    });
});

function renderTable(data) {
    tableElement.innerHTML = '';

    data.map(row => {
        let newRow = document.createElement("tr");
        Object.values(row).map((value) => {
            let cell = document.createElement("td");
            cell.innerText = value;
            newRow.appendChild(cell);
        })
        tableElement.appendChild(newRow);
    });
}

