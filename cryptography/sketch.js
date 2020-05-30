let vig;

function setup(){
  noCanvas()


  let para = createP()
  let dec = createP()


  let textBox = createElement('textarea',"")
  textBox.input(go)

  let pw = createElement('textarea',"")
  pw.input(go)



  function go(){
    vig = vigenere(textBox.value(), pw.value(), 0)
    para.html(vig)
    dec.html(vigenere(textBox.value(), pw.value(), 1))
  }





}
