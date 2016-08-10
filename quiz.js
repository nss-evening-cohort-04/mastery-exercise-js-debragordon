////////// VARIABLES //////////
var treeHeight = document.getElementById("height");

var treeCharacter = document.getElementById("character");

var button = document.getElementById("makeTree");

////////// INVOKING THE FUNCTION //////////
button.addEventListener("click", checkInput);

////////// THE DETAILS OF THE FIRST FUNCTION //////////
function checkInput () {
  if (treeHeight.value == "" || treeCharacter.value == "") {
    alert("Please enter both responses before clicking to grow your tree.");
  } else {
      var tree = {
        height: treeHeight.value,
        character: treeCharacter.value,
      };
      growTree(tree);
  }
}

////////// THE DETAILS OF THE SECOND FUNCTION //////////
function growTree (treeObject) {
  var spaces = treeObject.height - 1;
  var char = treeObject.character;
  var charString = "";

  for (var i = 0; i < treeObject.height; i++) {
    charString += char;
    console.log(charString);
    charString += char;
  }
}
