//Amimates Homepage
    $("#intro").hide();
    $(".banner").hide();
    $("h1").hide().fadeIn(1000, function () {
      $("#intro").slideDown(500, function () {
        $(".banner").fadeIn(500);
      });
    });
