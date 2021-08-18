//Data array for Tip section

const tips = [
    'Choose an Appropriately Sized Tank',
    'Find a Place for Your Aquarium',
   'Know Your Fish',
   'Condition Your Water',
   'Cycle Your Tank',
    'Perform Regular Water Changes',
    "Don't Overstock Your Tank",
    'Do Not Overfeed Your Fish',
    "Use Caution With New Fish",
    "Use Caution With Treatments and Chemicals",
    "Don't Trust the Salesperson",
    'Join Some Aquarium Groups'
];

//exporting functionality to any module for use. Other module must use import statement. 
export const getTips = () => {
    return tips
};

