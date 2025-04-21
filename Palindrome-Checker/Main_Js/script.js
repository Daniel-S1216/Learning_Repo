document.getElementById('check-btn').addEventListener('click',
function(){
    const text = document.getElementById('text-input').value;
    const textLength = text.trim().length;
    if(textLength === 0){
        myAlert();
    } else{
    checkPalindrome(text);
    }
});

function myAlert() {
    alert("Please input a value");
};

function checkPalindrome(text) {
    const newInput = text.toLowerCase().match(/[A-Za-z0-9]/g).reverse().join('');
    const inputLength = newInput.trim().length;
    const inputHalf = Math.floor(inputLength/2);
    const result = document.getElementById('result');
    let i;

    for (i = 0; i <= inputHalf; i++) {
    
       if(newInput[i] !== newInput[inputLength-1-i]){
            result.textContent = `${text} is not a palindrome`;
            return;
         }
         else if(newInput[i] === "A"){
            result.textContent = `${text} "A" is a palindrome`;
            return;
         }
       
        result.textContent = `${text} is a palindrome`;
    } 
};






