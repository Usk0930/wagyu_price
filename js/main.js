  $(function(){
    $('#page-top a').click(function(event){
      event.preventDefault();
      $("html,body").animate({scrollTop:0},500);
    })
  })
