//importing tip data from tip data
import { getTips } from './TipData.js';

//importing formating from tip list
import { Tip } from './Tip.js'

//looping over array to produce section of data to go in asideTips
export const TipList = () => {

    const tipSection = document.querySelector('.asideTips');
    let tipHTML = "";
    const tips = getTips();
    for (const tip of tips) {
        tipHTML += Tip(tip)
    }
    tipSection.innerHTML += tipHTML

};

TipList();