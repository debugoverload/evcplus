 const balance = 910;
  const pin = 1234;

  const form = document.getElementById("evcForm");
  const outputDiv = document.getElementById("output");
  const outputDiv1 = document.getElementById("output1");
  const outputDiv2 = document.getElementById("output2");
  const outputDiv3 = document.getElementById("output3");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const userpin = document.getElementById("pin").value;

    if (pin == userpin) {
        outputDiv.textContent = "corrected PIN.";
      const choice = document.getElementById("choice").value;
      const airtimeChoice = document.getElementById("airtimeChoice").value;
      const airtimeAmount = parseFloat(document.getElementById("airtimeAmount").value);

      switch (parseInt(choice)) {
        case 1:
          checkBalance();
          break;
        case 2:
          displayEVoucher();
          rechargeAirtime(airtimeChoice, airtimeAmount);
          break;
          case 3:
                billPayment();
                break;
        // Add other cases as needed
        default:
          outputDiv1.textContent = "Invalid choice.";
      }
    } else {
      outputDiv.textContent = "Incorrect PIN. Please try again.";
    }
  });


  function checkBalance() {
    outputDiv1.textContent = "Your Balance is " + balance;
  }

  function displayEVoucher() {
    outputDiv1.textContent = "1.self Airtime:\n    2.friend Airtime:\n   3.self Data recharge:\n    4.internet network Airtime:";
}
function rechargeAirtime(airtimeChoice, airtimeAmount) {
    switch (airtimeChoice) {
        case '1':
            if (balance > airtimeAmount) {
                let recharged = balance - airtimeAmount;
                outputDiv2.textContent = 'You have recharged: ' + airtimeAmount;
            }
            break;
        case '2':
            if (balance > airtimeAmount) {
                outputDiv3.textContent = "Enter your friend's number:";
            }
            break;
        case '3':
            if (balance > airtimeAmount) {
                let recharged = balance - airtimeAmount;
                outputDiv3.textContent = 'You have recharged for self data: ' + airtimeAmount;
            }
            break;
        case '4':
            if (balance > airtimeAmount) {
                let recharged = balance - airtimeAmount;
                outputDiv3.textContent = 'You have recharged for internet network airtime: ' + airtimeAmount;
            }
            break;
        default:
            outputDiv2.textContent = "Invalid choice.";
            break;
    }
}

function billPayment() {
     outputDiv1.textContent = "Enter your Bill number:";
}

// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");

// let nine = document.getElementById("nine");
// let zero = document.getElementById("zero");
// let star = document.getElementById("star");
// let hash = document.getElementById("hash");
// let display = document.getElementById("display");

// one.onclick = function(){
//   document.getElementById("display").innerText = one;
// }


