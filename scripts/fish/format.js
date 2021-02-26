import {sendList} from "./list.js";

//come back here and figure out how sendList is communicating with format function. 
export const format = (taco) => {
    return  `<article class="fish-card">
    <div><img class="fish-image" src="images/${taco.image}" /></div>
    <h3 class="fish-name">${taco.name}</h3>
    <ul>
        <li class="fish-details">${taco.species}</li>
        <li class="fish-details">Length: ${taco.length} inches</li>
        <li class="fish-details">Found: ${taco.location}</li>
        <li class="fish-details">Diet: ${taco.diet}</li>
    </ul>
 </article>`
 }


