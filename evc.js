$(document).ready(function() {
  var display = $('#display');
  var balance = 700; 
  var pin = 9090; 

  $('.keyboard_numbers').click(function() {
      var number = $(this).text();
      display.text(display.text() + number);
  });

  $('#cancel_button').click(function() {
      display.text('');
  });
  
  $('#call_button').click(function() {
      var enteredNumber = display.text();
      var anyNumber = '';
      var amount = 0;
      if (enteredNumber == "*711#") {
          var enteredPin = prompt("Please enter your PIN:");
          if (enteredPin == pin) {
              display.text("Your balance is: $" + balance);
          } else {
              display.text("Incorrect PIN");
          }
      } else if (enteredNumber.startsWith("*713*") && enteredNumber.endsWith("#")) {
          var parts = enteredNumber.split("*");
          anyNumber = parts[2];
          amount = parseFloat(parts[3]);

          var enteredPin = prompt("Please enter your PIN:");
          if (enteredPin == pin) {
              balance -= amount;
              display.text("Lacagta aad ku Shubtay waa: $" + amount);
          } else {
              display.text("Incorrect PIN");
          }
      } else if (enteredNumber.startsWith("*712*") && enteredNumber.endsWith("#")) {
        
          var parts = enteredNumber.split("*");
          anyNumber = parts[2];
          amount = parseFloat(parts[3]);
                 
          var enteredPin = prompt("Please enter your PIN:");
          if (enteredPin == pin) {
              balance -= amount;
              display.text("The Send Money is: $" + amount  
           +   "    " + "Your balance is: $" + balance);
              
          } else {
              display.text("Incorrect PIN");
          }
      } else {
       
          display.text("Incorrect Number or Format: " + enteredNumber);
      }
  });
});
