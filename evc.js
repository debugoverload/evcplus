console.log("-EVCPLUS-");

const balance = 910;
const pin = 1234;

const userpin = prompt("please enter your Pin number:");

if (pin == userpin) {
    console.log("1. Balance Query");
    console.log("2. E-voucher");
    console.log("3. Bill payment");
    console.log("4. Send money");
    console.log("5. Mini Statement");
    console.log("6. Salaam Bank");
    console.log("7. Manage account");
    console.log("8. Taj");
    console.log("9. Bill payment");

    const choice = prompt("Enter your choice:");
    const airtimeChoice = prompt("Enter airtime choice:");
    const airtimeAmount = prompt("Enter airtime amount:");

    let choiceNumber = parseInt(choice);
    switch (choiceNumber) {
        case 1:
            checkBalance(choiceNumber);
            break;
        case 2:
            displayevoucher(choiceNumber);
            airtime(airtimeChoice, airtimeAmount);
           
    }
}

function checkBalance(choice) {
    if (choice == 1) {
        console.log("Your Balance is ", balance);
    }
}

function displayevoucher(choice) {
    if (choice == 2) {
        console.log("1. self Airtime:");
        console.log("2. friend Airtime:");
        console.log("3. MIFI Packages:");
        console.log("4. self Data recharge:");
        console.log("5. internet network Airtime:");
    }
}

function airtime(airtimeChoice, airtimeAmount) {
    if (airtimeChoice == 1 && balance > airtimeAmount) {
        let recharged = balance- airtimeAmount;
        console.log('You have recharged:', airtimeAmount);
    }
    if(airtimeChoice == 2 && balance > airtimeAmount){
        console.log("enter your friend's number:")
        
    }
}
