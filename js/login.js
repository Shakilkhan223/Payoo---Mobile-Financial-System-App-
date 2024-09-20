// search - form submit reloading the page

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);

    if (phoneNumber === "01786212504" && pinNumber === "1234") {
      console.log("You are logged in");
      window.location.href = "/home.html";
    } else {
      alert("Invalid phone number or pin number");
    }
  });
