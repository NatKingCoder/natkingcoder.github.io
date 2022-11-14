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
  name: "One Sprite Pong",
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
  var link = "https://turbowarp.org/"url"/embed";
  link = link + pram;
  $("iframe").attr("src", link);
}
if (projId == "rosetheme") {
  name = rosetheme.name;
  pram = rosethme.pram;
  buildLink(rosetheme.id);
}
$("h1").text(name);
$("title").text("NatKingCoder - " + name);
