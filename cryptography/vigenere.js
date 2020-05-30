//VIGENERE CRYPTOGRAPHY TAKES A PLANE TEXT AND A KEY(PASSWORD),

//suppose space = 0, a = 1, b = 2, c = 3, d = 4 ... z = 26

//to encrypt it (eOrD = 0):
//assigning this to the plaintext or input, and the key.
// Add the number representation of plain text to the number representation of the key.
//if the length of the key is shorter than the plaintext, use again the first number representation of the key, and so on
//the output which is the sum is the num representation of the encrypted text,


//to decrypt (eOrD = 0):
//do the same thing as what is above but minus the number representation insted of adding.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//ALGORITHM AND NAVIGATION++++++++++++++++++++++++++++++++++++++++++++
//STEP 1, SEPARATION OF THE TEXT STRING'S CHARACTERS
//STEP 2, ASSIGNMENT OF STRINGS TO NUMERALS
//   will return empty when there is an error
//   this is also the step where space will be reassign as 0, or the same as the underscore
//STEP 3, PERFORM OPERATION OF ADDING PASSWORD TO TEXT
//    this excludes certain characters such as non lowercase letters, but include space/dash with representation 0
//    will return NaN if step 2 is empty
//STEP 4, REASSIGNING NUMERALS TO ITS NEW RESPECTIVE CHARACTERS
//    will return the original char (from step 1) if step 3 is NaN,this is executed by the else of the for loop in this step
//    in this way, all char that are not included in the letter array will be as it is in the output without performing any operation
//  STEP 4.1, WHEN THE CODE IS DECRYPTING, THERE IS NO WAY THAT YOU WILL NEED A DOUBLE SPACING, THUS, DASH IS NOT USEFUL HERE
//     this for loop will make it space again all dashes since it is decrypting now
//STEP 5, CONCATENATING ALL CHARACTERS

//NOTES
//: All the chars that is being NaN missed the operation in step3, thus all letters that must be in that spot to be added is also missed
//  eg: input: ab+c, pw: dcba > 1,2,NaN,3 & 4,3,2,1 > perform operation: 5,6,NaN,4 >>>> b(2) is not used
//----------------------------------------------------------------------------------------------------


function vigenere(input,key,eOrD){
  //0 if to encrypt;
  //1 if to decrypt;

  let text = input;
  let password = key;

//STEP 1, SEPARATION OF THE TEXT STRING'S CHARACTERS++++++++++++++++++++++++++++++++

  let sepInput = [];
  let sepPassword =[];


  for(let i = 0; i < text.length; i++){
    sepInput[i] = text[i];
  };

  for(let i = 0; i < password.length; i++){
    sepPassword[i] = password[i];
  };

//STEP 2, ASSIGNMENT OF STRINGS TO NUMERALS+++++++++++++++++++++++++++++++++++++++++++
//    will return empty when there is an error
//    this is also the step where space will be reassign as 0, or the same as the underscore
  let letters = ["_", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  let inputNum = [];
  let passwordNum = [];

  for(let i = 0; i < text.length; i++){
    for(let j = 0; j < 27; j++){
      if(sepInput[i] == letters[j]){
        inputNum[i] = j;
      }else if(sepInput[i] == " "){
        inputNum[i] = 0; //this else will let the space be just dash.
      }
    }
  }


  for(let i = 0; i < password.length; i++){
    for(let j = 0; j < 27; j++){
      if(sepPassword[i] == letters[j]){
        passwordNum[i] = j
      }else if(sepPassword[i] == " "){
        passwordNum[i] = 0
      }
    }
  }



//STEP 3, PERFORM OPERATION OF ADDING PASSWORD TO TEXT++++++++++++++++++++++++++++
//    this excludes certain characters such as non lowercase letters, but include space/dash with representation 0
//    will return NaN if step 2 is empty

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




//STEP 4, REASSIGNING NUMERALS TO ITS NEW RESPECTIVE CHARACTERS+++++++++++++++++
//    will return the original char (from step 1) if step 3 is NaN,this is executed by the else of the for loop in this step
//    in this way, all char that are not included in the letter array will be as it is in the output without performing any operation

  let charsInputAgain = []


  for(let i = 0; i<text.length ; i++){
    if(adjInputNum[i] < 27){
      charsInputAgain[i] = letters[adjInputNum[i]]
    }else {
      charsInputAgain[i] = sepInput[i]
    }
  }



  //STEP 4.1, WHEN THE CODE IS DECRYPTING, THERE IS NO WAY THAT YOU WILL NEED A DOUBLE SPACING, THUS, DASH IS NOT USEFUL HERE
  //    this for loop will make it space again all dashes since it is decrypting now
    if(eOrD == 1){
      for(let i = 0; i<text.length ; i++){
        if(charsInputAgain[i] == letters[0]){
        charsInputAgain[i] = " "
        }
      }
    }



//STEP 5, CONCATENATING ALL CHARACTERS+++++++++++++++++++++++++++++++++++++++
  let output;
    if(eOrD == 1){
      output  = "d ="
    }else{
      output  = "e ="
    }
  for(let i = 0; i < text.length; i++){
    output+=charsInputAgain[i]
  }




  return output
}
