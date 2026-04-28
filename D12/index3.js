function keyDown() {
  console.log("Key Down");
  //   const text = document.getElementById("33").value;
  //   document.getElementById("t1").innerText = text;
  //   console.log("ADDED ");
}
function keyUp() {
  //console.log("Key Up");
  const text = document.getElementById("33").value;
  document.getElementById("t1").innerText = text;
  console.log("ADDED ");
}
function keyPress() {
  console.log("Key Press");
}
function inputData() {
  const test3 = document.getElementById("test");
  const inputValue = test3.value;

  const headingElement = document.getElementById("txt3");
  headingElement.textContent = inputValue;
}
function clearData() {
  document.getElementById("test").value = "";
  document.getElementById("txt3").textContent = "";
}
