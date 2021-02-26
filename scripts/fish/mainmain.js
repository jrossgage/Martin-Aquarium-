import { sendList } from "./list.js";
import {format} from "./format.js";


const infoLoop = () => {
    const fishSection = document.querySelector('.fishList')
    let listHtml =''
    const allFish = sendList()
for(const section of allFish){
    listHtml += format(section)
}
fishSection.innerHTML += listHtml
}

infoLoop()