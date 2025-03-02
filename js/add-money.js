document.getElementById('add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const amount = document.getElementById('account-amount').value
        // amount as a string hisabe ase karon input field string return kore  tai float e convert kora hocche
        const convertedAmount = parseFloat(amount)

        const pin = document.getElementById("account-pin").value
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById('main-balance').innerText
        const convertedMainBalance = parseFloat(mainBalance)
        if (amount && pin) {
            if (convertedPin === 1234) {
                const sum = convertedMainBalance + convertedAmount;
                document.getElementById('main-balance').innerText = sum;
            }
            else {
                alert('Pin Inavalid')
            }
        }

    })