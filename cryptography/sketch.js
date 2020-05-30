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

    //REPLACE ENTER(\r\n|\r|\n) TO <br>
    function nl2br(str){
     return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
    vig = nl2br(vig)



    para.html(vig)
    dec.html(vigenere(textBox.value(), pw.value(), 1))
  }





}
