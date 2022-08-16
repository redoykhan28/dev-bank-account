//deposite code start,
// step-1 get the button,
document.getElementById('deposite-btn').addEventListener('click', function () {

    //get input box value,
    const input = document.getElementById('deposite-input');
    const despositeInputValue = input.value;
    const newDepositeValue = parseFloat(despositeInputValue);

    //empty box
    input.value = '';

    //get deposite section value,
    const depSection = document.getElementById('diposite-section');
    let depSectionValue = depSection.innerText;
    const prevDepositeValue = parseFloat(depSectionValue);

    //get balance section value,
    const balanceSection = document.getElementById('balance-section');
    let balanceSectionValue = balanceSection.innerText;
    const prevBalanceValue = parseFloat(balanceSectionValue);

    //total in deposite section&balance section
    let newValueDeposite = newDepositeValue + prevDepositeValue;
    let newValueBalance = newDepositeValue + prevBalanceValue;

    depSection.innerText = newValueDeposite;
    balanceSection.innerText = newValueBalance


});