var colors = ['#Ec3890', '#730f9e', '#48fdb4'];


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
    let color = colors[(Math.random()*colors.length) | 0]
    $('#number'+i).css('color', color);
    $(this).css('box-shadow', 'inset 0em -0.45em' + color);
    $(this).css('transition', 'all 0.7s ease-in-out');
    $('#img'+i).toggle();
  }, function() {
    // on mouseout, reset the background colour
    $("#img" + i).css("display", "none");
    $('#number'+i).css('color', 'black');
    $(this).css("box-shadow", ""); 
  });
}
});

$(function() {
  for (let i=11; i<= 15; i++){
    $('#title'+i).hover(function() {
    let color = colors[(Math.random()*colors.length) | 0]
    $('#number' + i).css('color', color);
    $(this).css('box-shadow', 'inset 0em -0.45em' + color);
    $(this).css('transition', 'all 0.7s ease-in-out');
  }, function() {
    // on mouseout, reset the background colour
    $('#number'+i).css('color', 'black');
    $(this).css("box-shadow", ""); 
  });
}
});

$(function() {
  for (let i=21; i<= 23; i++){
    $('#title'+ i).hover(function() {
    let color = colors[(Math.random()*colors.length) | 0]
    $('#number'+i).css('color', color);
    $('#list'+i).css('display', 'block');
    $(this).css('box-shadow', 'inset 0em -0.45em' + color);
    $(this).css('transition', 'all 0.7s ease-in-out');
    }, function() {
    // on mouseout, reset the display value to none
    $('#list'+ i).css('display', 'none');
    $('#number'+i).css('color', 'black');
    $(this).css("box-shadow", ""); 
  });
}
});

