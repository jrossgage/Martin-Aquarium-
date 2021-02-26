import {sendList} from "./list.js";

export const format = (taco) => {
    return  `<article class="fish-card">
    <div><img class="fish-image" src="images/${taco.image}" /></div>
    <h3 class="fish-name">${taco.name}</h3>
    <ul>
        <li class="fish-details">${taco.species}</li>
        <li class="fish-details">Inches: ${taco.inches} inches</li>
        <li class="fish-details">Location: ${taco.harvestlocation}</li>
        <li class="fish-details">Diet: ${taco.diet}</li>
    </ul>
 </article>`
 }


