const duplicateEncode = (word) => {
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

// const duplicateEncode = (word) => {
//     const copyWord = word.toLowerCase().split("");
//     const repeatableArr = word
//       .toLowerCase()
//       .split("")
//       .filter((e, i, a) => a.indexOf(e) !== i);
//     let result = [];
//     for (let i = 0; i < word.length; i++) {
//       if (repeatableArr.includes(copyWord[i])) {
//         result.push(")");
//       } else {
//         result.push("(");
//       }
//     }
//     return result.join("");
// }


console.log(duplicateEncode("din"))      
console.log(duplicateEncode("recede"))   
console.log(duplicateEncode("Success")) 
console.log(duplicateEncode("(( @"))     