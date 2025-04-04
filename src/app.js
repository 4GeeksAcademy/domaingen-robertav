let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        console.log(`${p}${a}${n}${ext}`);
      }
      if (n.endsWith('er')) {
        console.log(`${p}${a}${n.slice(0, -2)}.er`);
      }
    }
  }
}
