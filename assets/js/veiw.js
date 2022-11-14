const rosetheme = {
  name: "Rosemary's Theme: Noteblock",
  id: "732596949",
  pram: "?turbo"
};
const pong = {
  name: "One Sprite Pong",
  id: "740262734",
  pram: ""
};
const scrollvar = {
  name: "Scrolling Variable",
  id: "593482431",
  pram: ""
};
const va = {
  name: "Virtual Assistant",
  id: "5418011527",
  pram: ""
};
var name = "";
var pram = "";
var projId = localStorage.getItem("projId");
const buildLink = function (url) {
  var link = "https://turbowarp.org/" + url + "/embed";
  link = link + pram;
  $("iframe").attr("src", link);
  $("h1").text(name);
  $("title").text("NatKingCoder - " + name);
}
if (projId == "rosetheme") {
  name = rosetheme.name;
  pram = rosetheme.pram;
  buildLink(rosetheme.id);
}
if (projId == "pong") {
  name = pong.name;
  pram = pong.pram;
  buildLink(pong.id);
}
if (projId == "scrollvar") {
  name = scrollvar.name;
  pram = scrollvar.pram;
  buildLink(scrollvar.id);
}
if (projId == "va") {
  name = va.name;
  pram = va.pram;
  buildLink(va.id);
}
