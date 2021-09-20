import { hasFormatter } from '../interfaces/hasFormatter.js';

export class ListTemplate{
    constructor(private container:HTMLUListElement){
       
    }
    render(item:hasFormatter,heading:string, pos:'start'| 'end'){
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerText = heading;
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.format()
        li.append(p);

        if(pos ==='start'){
            //prepend means that it comes at the top
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }
    }
}
    /*
1. Register a list container(ul) in the constructor
2. Create a rende method to render a new 'li' to the container
--accepts arguments: invoice or payment, a heading, position
--create the html template(li,h4, p)
--add the 'li' to template to the start/end of the list
 */