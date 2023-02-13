document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    userEmail.value = '';
    
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    userPassword.value = '';

    const whole = document.getElementById('whole');

    const secondStage = document.getElementById('secondStage');

    if(email == 'saif@saif.com' && password == '1111'){
        whole.style.display = 'none'; 
        secondStage.style.display = 'block'; 
    }
    else{
        const newP = document.getElementById('newP');

        const p = document.createElement('p');
        p.innerText = 'Oops, invalid password, try again.';
        newP.appendChild(p);
        p.style.color = 'red';
    }
})




// second page

// deposit amount
document.getElementById('btn-deposit').addEventListener('click', function(){
    //------------------------------------------------------------
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountNumber = parseFloat(depositAmount.value);

    //------
    depositAmount.value = '';

    //------
    if(isNaN(depositAmountNumber)){
        alert('Please enter amount/number');
        return;
    }
    else if(depositAmountNumber <= 0){
        alert('please put right number');
        return;
    }
    
    
    //--------------------------------------------------------------
    const previousDepositAmount = document.getElementById('previous-deposit-amount');
    const previousDepositAmountNumber = parseFloat(previousDepositAmount.innerText);

    //-----------------------------------------------------
    
    const totalDeposit = depositAmountNumber + previousDepositAmountNumber;
    
    document.getElementById('previous-deposit-amount').innerText = totalDeposit;

    //------------------------------------------------------
    

    //------------------------------------

    const previousBalanceAmount = document.getElementById('previous-balance-amount');

    const previousBalanceAmountNumber = parseFloat(previousBalanceAmount.innerText);

    //-----------------------------------------------------
    const totalBalance = depositAmountNumber + previousBalanceAmountNumber;
    document.getElementById('previous-balance-amount').innerText = totalBalance;
})


// withdraw section

document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountNumber = parseFloat(withdrawAmount.value);

    withdrawAmount.value = '';

   
    if(isNaN(withdrawAmountNumber)){
        alert('Please enter number');
        return;
    }
    else if(withdrawAmountNumber <= 0){
        alert('please write valid amount');
        return;
    }
    


    const previousWithdrawAmount = document.getElementById('previous-withdraw-amount');
    const previousWithdrawAmountNumber = parseFloat(previousWithdrawAmount.innerText);


    


    const previousBalanceAmount = document.getElementById('previous-balance-amount');
    const previousBalanceAmountNumber = parseFloat(previousBalanceAmount.innerText);
    if(withdrawAmountNumber>previousBalanceAmountNumber){
        alert('insufficient balance');
        return;
    }
    const totalWithdraw = withdrawAmountNumber + previousWithdrawAmountNumber;
    previousWithdrawAmount.innerText = totalWithdraw;

    const totalBalance = previousBalanceAmountNumber - withdrawAmountNumber;

    previousBalanceAmount.innerText = totalBalance;

    

})

