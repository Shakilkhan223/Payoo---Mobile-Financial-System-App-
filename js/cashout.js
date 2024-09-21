document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutInput = document.getElementById("input-cash-out").value;
    const pinNumber = document.getElementById("input-cash-out-pin").value;
    if (pinNumber === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const newBalace = parseInt(balance) - parseInt(cashOutInput);
      document.getElementById("account-balance").innerText = newBalace;
    } else {
      alert("Invalid pin number! Please try again laters");
    }
  });
