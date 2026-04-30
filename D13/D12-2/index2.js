function inputName() {
  let name;
  name = document.getElementById("input-name").value;
  switch (name) {
    case "intern":
      document.getElementById("display-6").innerText = "Intern  SE";
      break;
    case "ase":
      document.getElementById("display-6").innerText = "ase  SE";
      break;
    case "se":
      document.getElementById("display-6").innerText = "se  SE";
      break;
    case "sse":
      document.getElementById("display-6").innerText = "sse  SE";
      break;
    case "atl":
      document.getElementById("display-6").innerText = "atl  SE";
      break;
    case "tl":
      document.getElementById("display-6").innerText = "tl  SE";
      break;
    default:
      document.getElementById("display-6").innerText = "Error";
  }
}
function login() {
  const userName = "Admin123";
  const password = "Bnadara12";

  const checkEmail = document.getElementById("username").value;
  const checkPassword = document.getElementById("password").value;

  if (checkEmail === userName) {
    if (checkPassword === password) {
      document.getElementById("display-7").innerText = "Login Successful";
    } else {
      document.getElementById("display-7").innerText = "Wrong Password";
    }
  } else {
    document.getElementById("display-7").innerText = "Wrong Username";
  }
}
