let screen= document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue = '';
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText)
        if(buttonText=='X'){
            buttonText='*';
            screenValue += buttonText;
            screen.Value = screenValue;
        }
        else if (buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText=='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue +=buttonText;
            screen.value = screenValue;
        }
    })

}
