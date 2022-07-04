$(function() {
  $(".toggle-menu").click(function() {
    $(this).toggleClass("active");
    $('.menu-drawer').toggleClass("open");
  });
});

$(function() {
  $(".toggle-menu1").click(function() {
    $(this).toggleClass("active");
    $('.menu-drawer1').toggleClass("open1");
  });
});

$(function() {
  for (let i=1; i<= 5; i++){
  $('#title'+ i).hover(function() {
    $('#number'+i).css('color', 'gold');
    $('#img'+i).toggle()
  }, function() {
    // on mouseout, reset the background colour
    $("#img" + i).css("display", "none")
    $('#number'+i).css('color', 'black');
  });
}
});

$(function() {
  for (let i=11; i<= 15; i++){
  $('#title'+ i).hover(function() {
    
  }, function() {
    // on mouseout, reset the background colour
    $('#number'+i).css('color', 'black');
  });
}
});

$(function() {
  for (let i=21; i<= 23; i++){
    $('#title'+ i).hover(function() {
    $('#list'+i).css('display', 'block');
    if (i==21) {
      $('#number'+i).css('color', '#Ec3890');
    } else if (i==22) {
      $('#number'+i).css('color', '#730f9e');
    } else if (i==23) {
      $('#number'+i).css('color', '#48fdb4');
    } else {
      $('#number'+i).css('color', 'black');
    }
  }, function() {
    // on mouseout, reset the display value to none
    $('#list'+i).css('display', 'none');
    $('#number'+i).css('color', 'black');
  });
}
});
