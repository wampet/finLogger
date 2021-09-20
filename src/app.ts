import { ListTemplate } from './classes/listTemplates.js';

import {Invoice} from './classes/invoice.js'
import { Payment } from './classes/payments.js';
import { hasFormatter } from './interfaces/hasFormatter.js';

 
 //We can do what they call type casting, we can cast to a particualar element
 const form = document.querySelector('.new-item-form') as HTMLFormElement;
 
 ///T grab all the inpput fields
 
 const type = document.querySelector('#type') as HTMLSelectElement;
 const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
 const details = document.querySelector('#details') as HTMLInputElement;
 const amount = document.querySelector('#amount') as HTMLInputElement;
 
 const ul = document.querySelector('ul')!
 const list = new ListTemplate(ul)

 form.addEventListener('submit',(e:Event) => {
     e.preventDefault();
     
     let doc: hasFormatter;
     if(type.value==='invoice'){
         doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
     }else{
         doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
     }
     list.render(doc,type.value,'end')
   
 });