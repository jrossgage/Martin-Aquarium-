console.log('Logging to the console.');

import { getFish } from "./FishData.js"

const allTheFish = getFish();

for (const fish of allTheFish) {
    console.log(fish)
}