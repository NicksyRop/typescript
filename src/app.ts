
import { Invoice} from "./classes/invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interface/HasFormatter.js"
const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const from = document.querySelector('#tofrom') as HTMLInputElement
const detail = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


const ul = document.querySelector("ul")!

const list = new ListTemplate(ul)

form.addEventListener('submit' , (e :Event)=>{

    e.preventDefault()

    
    

    let doc : HasFormatter;

    if(type.value === "invoice"){

        doc = new Invoice(from.value, detail.value , amount.valueAsNumber)
    }else(

        doc = new Payment(from.value, detail.value , amount.valueAsNumber)

    )

    list.render(doc ,type.value , 'start')
    


})

