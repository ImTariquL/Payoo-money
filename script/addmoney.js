document.getElementById('add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValueById('account-amount');
        const pin = getInputValueById("account-pin")
        const accountNumber = document.getElementById("account").value;
        const mainBalance = getInnerTextById('main-balance')


        const selectedBank = document.getElementById('allbank').value;


        if(amount< 0){
            alert("bhaii ata hobe na positive number de")
            return;
        }



        if (accountNumber.length === 11) {
            if (pin === 1234) {
                const sum = mainBalance + amount;
                // document.getElementById('main-balance').innerText = sum;
                setInnerTextByIdandValue('main-balance', sum)

                const container = document.getElementById('transaction-container');

                const div = document.createElement('div');
                div.classList.add('bg-gray-400')
                div.innerHTML= `
                <h1 class="text-yellow-200"> Cashin ${amount} tk from</h1>
                <h1> ${accountNumber} </h1>
                <p> with ${selectedBank}</p>

                `
                container.appendChild(div)



            } else {
                alert('inavlid pin')
            }
        }
        else {
            alert('your account number is Invalid')
        }

    })