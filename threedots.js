const ages = [12, 23, 45, 67];
const ages2 = [15, 23, 56, 45];
const ages3 = [13, 27, 96, 95];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);