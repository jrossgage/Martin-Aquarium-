export const Fish = (fish) => {
    return `<article class="fish-card">
    <div><img class="fish-image" src="images/${fish.image}" /></div>
    <h3 class="fish-name">${fish.name}</h3>
    <ul>
        <li class="fish-details">${fish.species}</li>
        <li class="fish-details">Inches: ${fish.inches} inches</li>
        <li class="fish-details">Location: ${fish.harvestlocation}</li>
        <li class="fish-details">Diet: ${fish.diet}</li>
    </ul>
 </article>`
}


