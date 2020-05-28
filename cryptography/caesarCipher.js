//takes a string, and the usod but only with the lowercase letters, all non small letters will be the same as  it is from what is is touchStarted()
function caesarCipher(input, shift) {


  //algo1, separate each letters as array
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let separate = []
  let text = input;

  for (let i = 0; i < text.length; i++) {
    separate[i] = text[i]
  }

  // console.log(separate)

  //algo2, assign as numbers, non letters will be empty or undefine here
  let numeric = []

  for (let i = 0; i < separate.length; i++) {
    for (let j = 0; j < 28; j++) {
      if (separate[i] == letters[j]) {
        numeric[i] = j
      }
    }
  }


  // console.log(numeric)

  //algo3, apply the usod usod, all non letters will be undeine here

  let adjNum = []
  for (let i = 0; i < separate.length; i++) {
    if (numeric[i] < 26) {
      adjNum[i] = (numeric[i] + shift) % 26
    } else {
      adjNum[i] = numeric[i]
    }
  }

  // console.log(adjNum)


  //step4 = cnvert again to chars,we access again the separate in the step1 to let the non-letters included
  let charsAgain = [];


  for (let i = 0; i < separate.length; i++) {
    if (adjNum[i] < 26) {
      charsAgain[i] = letters[adjNum[i]]
    } else {
      charsAgain[i] = separate[i]
    }
  }

  // console.log(charsAgain)

  //step5, merge
  let output = " ";

  for (let i = 0; i < separate.length; i++) {
    output += charsAgain[i]
  }


  console.log(output)

  return output;
}
