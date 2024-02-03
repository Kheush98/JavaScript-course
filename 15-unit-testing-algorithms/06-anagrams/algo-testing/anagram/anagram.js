function anagram(str1, str2) {
  const nbChar1 = character(str1);
  const nbChar2 = character(str2);

  if (str1.length !== str2.length) {
    return false;
  }

  for (const key in nbChar1) {
    if (nbChar1[key] !== nbChar2[key]) {
      return false;
    }
  }

  return true;
}

function character(str) {
  const char = {};

  for (const value of str) {
     char[value] = char[value] + 1 || 1;
  }

  return char;
}

module.exports = anagram;

console.log(character('coollin'), character('moussa diallo'));