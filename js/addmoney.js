document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("input-pin-number").value;

    if (pinNumber === "1234") {
      console.log("Adding money to your account");
      const balance = document.getElementById("account-balance").innerText;
      const newBalace = parseInt(balance) + parseInt(addMoneyInput);
      //   console.log(newBalace);
      document.getElementById("account-balance").innerText = newBalace;
    } else {
      alert("Invalid pin number! Please try again");
    }
  });
