
// input
// IMGONNATAKEMYHORSETOTHEOLDTOWNROADIMGONNARIDETILLICANTNOMORE
// key
// DOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOGDOG
// res
// LAMRBTDHGNSSBVUUGKWCZKSUORZRKTUCGGWSJCTQOXLRKWWROWIDBZQCSRFK


const code = 'WHENTHECLOCKSTRIKESTWELVEATTACK'.split('');
const alph = code.reduce((acc, elem) => {
  if (!(acc instanceof Map)) {
    const tmp = acc;
    acc = new Map();
    acc.set(tmp, 1);
  }
  if (acc.has(elem)) {
    acc.set(elem, acc.get(elem) + 1);
  } else {
    acc.set(elem, 1);
  }
  return acc;
});


const findLen = (freq, leng) => freq * (freq - 1) / (leng * (leng - 1));
let tmp = new Map();
let sum = 0;
alph.forEach((freq, index) => {
  const fi = findLen(freq, code.length);
  if (fi !== 0) {
    tmp.set(index, fi);
    sum += fi;
  }
});

console.log(tmp);
console.log(alph);
console.log(sum);
