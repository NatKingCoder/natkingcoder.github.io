    const launchProject = function (projId) {
      localStorage.setItem("projId", projId);
      window.location.href = "/veiw";
    }
    $("#rosetheme").on("click", function(){launchProject("732596949")});
    $("#pong").on("click", function(){launchProject("740262734")});
    $("#scrollvar").on("click", function(){launchProject("593482431")});
    $("#va").on("click", function(){launchProject("418011527")});
