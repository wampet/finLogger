import { ListTemplate } from './classes/listTemplates.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payments.js';
//We can do what they call type casting, we can cast to a particualar element
const form = document.querySelector('.new-item-form');
///T grab all the inpput fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
