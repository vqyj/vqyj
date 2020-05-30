let vig;
let status = 0

function setup(){
  noCanvas()



  let but = createButton('e')


  but.mousePressed(change)

  function change(){
    go()
    if(status == 0){
      status = 1
      but.html('d')
    }else if(status == 1){
      status = 0
      but.html('e')
    }
  }


  //THIS WILL CHANGE THE PARA DEPENDING ON WHAT IS WRITTEN HERE
  let textBox = createElement('textarea',"")
  textBox.input(go)

  let pw = createElement('textarea',"")
  pw.input(go)

  //THE PARAGRAPH~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  let para = createP()

  function go(){

    vig = vigenere(textBox.value(), pw.value(), status)

    //REPLACE ENTER(\r\n|\r|\n) TO <br>
    function nl2br(str){
     return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
    vig = nl2br(vig)


    para.html(vig);
  }





}
