document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    userEmail.value = '';
    
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    userPassword.value = '';

    const whole = document.getElementById('whole');

    const secondStage = document.getElementById('secondStage');

    if(email == 'saif@saif.com' && password == 'saif'){
        whole.style.display = 'none'; 
        secondStage.style.display = 'block'; 
    }
    else{
        const newP = document.getElementById('newP');

        const p = document.createElement('p');
        p.innerText = 'invalid password';
        newP.appendChild(p);
        p.style.color = 'red';
    }
})
