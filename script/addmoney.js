document.getElementById('add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputValueById('account-amount');
    const pin = getInputValueById("account-pin")
    const accountNumber= document.getElementById("account").value;
    const mainBalance= getInnerTextById('main-balance')

    if(accountNumber.length === 11){
        if(pin === 1234){
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIdandValue('main-balance',sum)
        }else{
            alert('inavlid pin')
        }
    }
    else{
        alert('your account number is Invalid')
    }

})