import { Fish } from "./Fish.js";
import { getFish, getMostHolyFishList, getSoldierFish, getUnworthyFish } from "./FishData.js";

export const FishList = () => {
    const fishSection = document.querySelector('.fishList')
    let listHtml = ''
    // const allFish = getFish()
    const holyFish = getMostHolyFishList();
    const soldierFish = getSoldierFish();
    const unworthyFish = getUnworthyFish();
    for (const fish of holyFish) {
        listHtml += Fish(fish)
    }
    for (const fish of soldierFish) {
        listHtml += Fish(fish)
    }
    for (const fish of unworthyFish) {
        listHtml += Fish(fish)
    }
    fishSection.innerHTML += listHtml
}