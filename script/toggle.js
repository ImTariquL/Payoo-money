document.getElementById('cashout').style.display = 'none'
document.getElementById('transaction-history').style.display = 'none'

document.getElementById("add-money-box")
    .addEventListener('click', function () {
        handleToggle("addmoney", 'block')
        handleToggle('transaction-history', 'none')
        handleToggle("cashout", 'none')
    })

document.getElementById("cash-out-box")
    .addEventListener('click', function () {
        handleToggle("addmoney", 'none')
        handleToggle('transaction-history', 'none')
        handleToggle("cashout", 'block')

    })
    