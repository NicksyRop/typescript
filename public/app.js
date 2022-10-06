import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const from = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(from.value, detail.value, amount.valueAsNumber);
    }
    else
        (doc = new Payment(from.value, detail.value, amount.valueAsNumber));
    list.render(doc, type.value, 'start');
});
