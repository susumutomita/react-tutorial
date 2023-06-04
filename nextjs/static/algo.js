function hashString(str) {
  const charMap = {
    'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'g': 1,
    'h': 2, 'i': 2, 'j': 2, 'k': 2, 'l': 2, 'm': 2, 'n': 2,
    'o': 3, 'p': 3, 'q': 3, 'r': 3, 's': 3, 't': 3, 'u': 3,
    'v': 4, 'w': 4, 'x': 4, 'y': 4, 'z': 4
  };

  let hash = 1;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i).toLowerCase();
    if (charMap[char]) {
      hash *= charMap[char];
    }
  }
  return hash;
}

const cipher = "floor";
const hash = hashString(cipher);
console.log(hash); // Output: 6