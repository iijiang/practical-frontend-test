console.log("body", document.body.clientWidth);

  $(".mobile.menu").click(function () {
    $(".mobile.menu > i").toggleClass( "fa-bar fa-times");
    $(".mobile.menu").toggleClass( "menu-open" );
    $(".off-canvas-menu").toggleClass( "off-canvas-menu-on");
  });


  $( ".off-canvas-menu > * > .link" ).click(function () {
    $(".off-canvas-menu").toggleClass( "off-canvas-menu-on");
    $(".mobile.menu").toggleClass( "menu-open" );
    $(".mobile.menu > i").toggleClass( "fa-bar fa-times");
  })