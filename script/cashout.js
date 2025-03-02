document.getElementById('cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const accountNumber = document.getElementById('cashout-number').value;

        const amount = getInputValueById('cashout-amount')
        const pinNumber = getInputValueById('cashout-pin')
        const mainBalance = getInnerTextById('main-balance')


        if(amount> mainBalance){
            alert("invalid amount")
            return;
        }




        if (accountNumber.length === 11) {
            if (pinNumber === 1234) {
                const sub = mainBalance - amount;
                setInnerTextByIdandValue("main-balance", sub)


                const container = document.getElementById('transaction-container');

                const p = document.createElement('p');
                p.innerText= `
                cashout ${amount} from ${accountNumber} account

                `
                container.appendChild(p)

            }

            else {
                alert('pin not valid')
            }
        }
        else {
            alert("account number is not valid")
        }
    })