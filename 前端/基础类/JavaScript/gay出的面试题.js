for(var i = 0; i < 5; i++) {
    var o = i
    ;(function(){
      var p = i;
      setTimeout(() => {
        console.log(i, o, p)
      }, 0)
    })()
  }