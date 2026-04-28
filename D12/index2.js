//Event Handling
function clickButton() {
  console.log("DONE !!!");
  //document.write('<h2>BUTTON CLICKED</h2>')
  alert("Stop Clicking");
}

function onChangeTxt() {
  console.log("Changed");

  const text = document.getElementById("txt1").value;
  document.getElementById("txt2").innerText = text;
  console.log(text);
}
function onMouse() {
  //console.log("Mouse Over");
  document.getElementById("d").style.backgroundColor = "red";
  document.getElementById("d").style.width = "200px";
  document.getElementById("d").style.height = "200px";
}
function mouseOut() {
  //console.log("Mouse Out");
  document.getElementById("d").style.backgroundColor = "blue";
  document.getElementById("d").style.width = "100px";
  document.getElementById("d").style.height = "100px";
}
