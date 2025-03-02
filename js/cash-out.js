document.getElementById("cash-out")
    .addEventListener('click', function (event) {
        event.preventDefault();
        //.value dewa hoyeche cause value ta input theke asche
        const amount = document.getElementById('cashout-amount').value
        // amount as a string hisabe ase karon input field string return kore  tai float e convert kora hocche
        const convertedAmount = parseFloat(amount)

        const pin = document.getElementById("cashout-pin").value
        const convertedPin = parseInt(pin);
        // ekane innertext cause value input theke na onno tag elemnet theke asche
        const mainBalance = document.getElementById('main-balance').innerText
        const convertedMainBalance = parseFloat(mainBalance)

        if (amount && pin) {
            if (convertedPin === 1234) {
                const sub = convertedMainBalance - convertedAmount;
                document.getElementById('main-balance').innerText = sub;
            }
            else {
                alert('Pin Inavalid')
            }
        }
    })


