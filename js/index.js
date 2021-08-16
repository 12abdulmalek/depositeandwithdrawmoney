function getInputValue(inputValue){
    const inputField=document.getElementById(inputValue);
    const inputFieldText=inputField.value;
    const inputFieldAmount=parseFloat(inputFieldText);
    inputField.value='';
    return inputFieldAmount;
}
function totalAmount1(input,inputvalue){
    const depositAmount=document.getElementById(input);
    const depositAmountText=depositAmount.innerText;
    const depositAmountTotal=parseFloat(depositAmountText);
    const totalDepositAmount=depositAmountTotal+inputvalue;
    depositAmount.innerText=totalDepositAmount;
}
function upadateAmount(value,isadd){
    const totalBalance=document.getElementById('total-balance');
    const previousBalance=totalBalance.innerText;
    const previusBalanceAmount=parseFloat(previousBalance);   
    if(isadd==true){
        totalBalance.innerText=previusBalanceAmount+value;
    }
    else{
        totalBalance.innerText=previusBalanceAmount-value;
    }
}
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount1= getInputValue('deposit-input');
    if(depositAmount1>0){
        totalAmount1('deposit-amount',depositAmount1)
        upadateAmount(depositAmount1 ,true);
    }
    
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInputAmount = getInputValue('withdraw-input');
    if(withdrawInputAmount>0){
        totalAmount1('withdraw-amount',withdrawInputAmount);
        upadateAmount( withdrawInputAmount ,false);
    } 
})