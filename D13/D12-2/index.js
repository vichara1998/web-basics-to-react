function addNumbers() {
  const num1 = document.getElementById("text1").value;
  const num2 = document.getElementById("text2").value;
  const sum = parseInt(num1) + parseInt(num2);
  console.log(sum);

  document.getElementById("display-1").innerText = sum;
  if (num1 > num2) {
    document.getElementById("display-3").innerText = "Greater (num1)";
  } else if (num1 == num2) {
    document.getElementById("display-3").innerText = "Numbers are Equal";
  } else {
    document.getElementById("display-3").innerText = "Greater (num2)";
  }
}
function equal() {
  const txt3 = document.getElementById("text3").value;
  const txt4 = document.getElementById("text4").value;
  if (txt3 === txt4) {
    document.getElementById("display-2").innerText = "Same Text";
  } else {
    document.getElementById("display-2").innerText = "Not Same Text";
  }
}
function addAllNumbers() {
  const allT = document.getElementById("textAll").value;
  let sum = 0;
  for (let i = 0; i < allT.length; i++) {
    sum += parseInt(allT[i]);
  }
  document.getElementById("display-4").innerText = sum;
}
function grade() {
  const marks = document.getElementById("marks").value;
  parseInt(marks);
  if (marks >= 75) {
    document.getElementById("display-5").innerText = "A";
  } else if (marks >= 65) {
    document.getElementById("display-5").innerText = "B";
  } else if (marks >= 55) {
    document.getElementById("display-5").innerText = "C";
  } else if (marks >= 35) {
    document.getElementById("display-5").innerText = "S";
  } else {
    document.getElementById("display-5").innerText = "W";
  }
}
