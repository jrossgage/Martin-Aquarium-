console.log('Logging to the console.');

import { getFish } from "./FishData.js"
import {Fish} from "./Fish.js"
import { FishList } from "./FishList.js" 

const allTheFish = getFish();

for (const fish of allTheFish) {
    console.log(fish)
}