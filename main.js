var click = document.getElementById("click");
click.addEventListener("click", function () {
  var one = document.getElementById("one").value;
  var two = document.getElementById("two").value;
  var result = one === two;
  var print = document.getElementById("print");
  if (one === two) {
    print.innerHTML = "yes";
    alert("fuck you");
  } else {
    print.innerHTML = "no";
  }
});
