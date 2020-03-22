function myMove(){
  var elem = document.getElementById("Animation1");
  var vpos = 0;
  var hpos = 0;
  var id = setInterval(frame, 10);
  var vdir = 0;
  var hdir = 0;
  var initial=1;
  function frame() {
      if(vdir==0){
        vpos++;
      }
      else{
        vpos--;
      }
      if(hdir==0){
        hpos++;
      }
      else{
        hpos--;
      }
      elem.style.transform=`translate(${hpos}px,${vpos}px)`;
      if(vpos==((window).innerHeight))
        vdir=1;
      if(vpos==120)
        vdir=0;
      if(hpos==((window).innerWidth))
        hdir=1;
      if(hpos==0 && initial==0)
        hdir=0;
      if(initial==1)
        initial=0;
  }

}
