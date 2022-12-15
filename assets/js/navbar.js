//Generates the Navbar at the top of the page (Requires "<div id="navbar"></div>")
      $("<a>").attr("href", "/").text("Home").css("left", "5%").appendTo("#navbar");
      $("<a>").attr("href", "/about").text("About").css("left", "20%").appendTo("#navbar");
      $("<a>").attr("href", "/scratch").text("Scratch").css("left", "35%").appendTo("#navbar");
      $("<a>").attr("href", "/javascript").text("JavaScript").css("left", "50%").appendTo("#navbar");
      $("<a>").attr("href", "/html").text("HTML").css("left", "70%").appendTo("#navbar");
      $("<a>").attr("href", "/bash").text("BASH").css("left", "85%").appendTo("#navbar");
