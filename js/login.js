
document.getElementById('login-btn')
.addEventListener('click',function(event){
    // nicher method er jnno log in form e info diye login e click korele ta default howa theke prevent korbe
    event.preventDefault();
    const accountNumber= document.getElementById('account-number').value
    const accountPin= document.getElementById('account-pin').value
    //pin ke int number e convert kora hoyeche cause pin er input type text dewa ache 
    const convertedPin = parseInt(accountPin)

    // NOTICE: ekane account number and pin er default value set kora dewa hoyeche ate reload howar por o value gulu teke jacche

    if(accountNumber.length === 11){
        if(convertedPin === 1234){
            window.location.href="./main.html"
        }else{
            alert('inavlid pin')
        }
    }
    else{
        alert('your account number is Invalid')
    }

})