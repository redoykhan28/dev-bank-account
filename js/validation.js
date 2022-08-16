//login validation
document.getElementById('btn').addEventListener('click', function () {

    const inputMail = document.getElementById('input-mail');
    const inputMailValue = inputMail.value;

    const inputPsd = document.getElementById('input-psd');
    const inputPsdValue = inputPsd.value;

    if (inputMailValue === 'rk@gmail.com' && inputPsdValue === '1234') {

        window.location.href = 'bank.html'
    }

    else {

        document.getElementById('h3').innerText = 'Invalid Username or Password';
    }


});