let textBox;

function setup(){
  noCanvas()
  let para = createP()
  let dec = createP()
  textBox = createInput()
  textBox.input(go)

  let pw = createInput()
  pw.input(go)




  function change(){
    if(status == 0){
      status = 1
    }else{
      status = 0
    }
  }


  function go(){
    para.html(vigenere(textBox.value(), pw.value(), 0))
    console.log(vigenere(textBox.value(), pw.value(), 1))
    dec.html(vigenere(textBox.value(), pw.value(), 1))
  }





}
