$('#myCarousel').hover(function () { 
    $(this).carousel('pause')
  }, function () { 
    $(this).carousel('cycle') 
  })

  function showMessage(){
    alert("Your order has been successfully placed.");
}
