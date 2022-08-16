//withdraw code start,
// step-1 get the button,
document.getElementById('withdraw-btn').addEventListener('click', function () {

    //get input box value,
    const input = document.getElementById('withdraw-input');
    const withdrawInputValue = input.value;
    const newWithdrawValue = parseFloat(withdrawInputValue);

    //empty box
    input.value = '';

    //get withdraw section value,
    const witSection = document.getElementById('withdraw-section');
    let witSectionValue = witSection.innerText;
    const prevWithdrawValue = parseFloat(witSectionValue);

    //get balance section value,
    const balanceSection = document.getElementById('balance-section');
    let balanceSectionValue = balanceSection.innerText;
    const prevBalanceValue = parseFloat(balanceSectionValue);

    //total in deposite section&balance section
    let newValueWithdraw = newWithdrawValue + prevWithdrawValue;
    let newValueBalance = prevBalanceValue - newWithdrawValue;

    witSection.innerText = newValueWithdraw;
    balanceSection.innerText = newValueBalance



});