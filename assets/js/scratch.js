    const launchProject = function (projId) {
      localStorage.setItem("projId", projId);
      window.location.href = "/veiw";
    }
    $("#rosetheme").on("click", function(){launchProject("rosetheme")});
    $("#pong").on("click", function(){launchProject("pong")});
    $("#scrollvar").on("click", function(){launchProject("scrollvar")});
    $("#va").on("click", function(){launchProject("va")});
