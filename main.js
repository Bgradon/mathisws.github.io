var colors = ['#Ec3890', '#730f9e', '#48fdb4'];


$(function() {
  $(".toggle-menu1").click(function() {
    if ($(this).hasClass("inactive") === true) {
    $(this).toggleClass("active");
    $('.menu-drawer1').toggleClass("open1");
  } else {
    $(this).toggleClass("inactive");
    $('.menu-drawer1').removeClass("open1");
  };
});
});

/*$(function() {
  $(".toggle-menu1").click(function() {
    $(this).toggleClass("active");
    $('.menu-drawer1').toggleClass("open1");
  });
});*/

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

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("mousemove", function(e){
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    btn.children[0].style.transform = "translate(" + x * 0.6 + "px, " + y * 0.7 + "px)";
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseout", function(e){
    btn.children[0].style.transform = "translate(0px, 0px)";
  });
});

