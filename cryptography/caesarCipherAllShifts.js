//caesarCipherAllUsodLCB (caesarCipherlowerCaseBasic)


function caeCiAll(input){
  let output = []
  for(let i = 0; i < 26; i++){
    output[i] = caesarCipher(input,i)
  }
  return output
}
