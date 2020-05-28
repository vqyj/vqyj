//VIGENERE CRYPTOGRAPHY TAKES A PLANE TEXT AND A KEY(PASSWORD),

//suppose a = 0, b = 1, c = 2, d = 3 ...
//assigning this to the plaintext, and the key.
// Add the number representation of plain text to the number representation of the key.
//if the length of the key is shorter than the plaintext, use again the first number representation of the key, and so on
//exclude the spaces, trrat them as long with no space text
//the output which is the sum is a representation of the encrypted text, tapos na

//to decrypt, minus it.


//issue the space cant be use because when there are 2 and above consecutive spaces in the return, it will be only 1

//ISSUES, THIS FUNCTION IS NOT WORKING WHEN THERE ARE SPACES IN BOTH INPUT AND PW
function vigenere(input,key,eOrD){
  //0 if to encrypt
  //1 if to decrypt

  let text = input
  let password = key

  let sepInput = []
  let sepPassword =[]

//step1, separation of stuff
  for(let i = 0; i < text.length; i++){
    sepInput[i] = text[i]
  }

  for(let i = 0; i < password.length; i++){
    sepPassword[i] = password[i]
  }

//gagawin nang numbers
  let letters = ["-", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  let inputNum = []
  let passwordNum = []

  for(let i = 0; i < text.length; i++){
    for(let j = 0; j < 27; j++){
      if(sepInput[i] == letters[j]){
        inputNum[i] = j
      }
    }
  }
    // console.log(inputNum)

  for(let i = 0; i < password.length; i++){
    for(let j = 0; j < 27; j++){
      if(sepPassword[i] == letters[j]){
        passwordNum[i] = j
      }
    }
  }

  // console.log(passwordNum)




//adjust the inputNum by a matter of passwordNum
  let adjInputNum = []



  for(let i = 0; i < text.length; i++){
    if(eOrD == 0){
      adjInputNum[i] = (inputNum[i] + passwordNum[(i%passwordNum.length)]) % 27
    }else if(eOrD == 1){
      adjInputNum[i] = (inputNum[i] - passwordNum[(i%passwordNum.length)]) % 27
      if(adjInputNum[i] < 0){
        adjInputNum[i] = 27 + adjInputNum[i]
      };
    }
  }





  let charsInputAgain = []


//gagawin ng letter ung ano, ung input num

  for(let i = 0; i<text.length ; i++){
    if(adjInputNum[i] < 27){
      charsInputAgain[i] = letters[adjInputNum[i]]
    }
  }



  // console.log(charsInputAgain)

//pagsasamasamahin na
  let output;
    if(eOrD == 1){
      output  = "d ="
    }else{
      output  = "e ="
    }
  for(let i = 0; i < text.length; i++){
    output+=charsInputAgain[i]
  }




  // console.log(output)
  return output
  console.log(output)
}
