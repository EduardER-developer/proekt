function printNumber() {
    let number1 = document.getElementById("inputNumber1").value;
    let number2 = document.getElementById("inputNumber2").value;
    document.getElementById("result").innerHTML = ("Результат:") +" " + parseInt(number1, number2);
}

function getTask() {
    document.getElementById('checkButton').style.display = 'block';
    document.getElementById('answerInput').style.display = 'block';

    let ran1 = Math.floor(Math.random() * 1000);
    let ran2 = Math.floor(Math.random() * (35 - 2 + 1) + 2);
    document.getElementById("randomResult").innerHTML = 'Переведи число ' + ran1.toString() + ' из 10-ичной в ' + ran2.toString() + '-ичную систему.';

    let inputWindows = "";
    for (let i = -2; i < 31; i++) {
        
        switch (i) {

            case -2:
                inputWindows += "<input type='text' placeholder='' value='Число'>";
                break;
            
            case -1:
                inputWindows += "<input type='text' placeholder='' value='Система'>";
                break;

            case 0:
                inputWindows += "<input type='text' placeholder='' value='Результат'>";
                break;

            case 1:
                inputWindows += "<input type='text' placeholder='' value='" + ran1 + "'>";
                break;
            
            case 2:
                inputWindows += "<input type='text' placeholder='' value='" + ran2 + "'>";
                break;
        
            default:
                inputWindows += "<input type='text' placeholder=''>";
        }

        if (i % 3 == 0) {
            inputWindows += '<br>';
        }

    }
    document.getElementById("inputWindows").innerHTML = inputWindows;

  }

function checkAnswer() {
    inputs = document.getElementById("inputWindows").getElementsByTagName('input');

    numA = inputs[3].value;
    numB = inputs[4].value;
    console.log(numA, numB)
    ansArray = ['0','0','0'];
    alpArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    while (numA > 0) {
        ansArray.push(numA.toString());
        ansArray.push(numB.toString());
        ansArray.push(alpArray[(numA%numB)]);
        numA = Math.floor(numA / numB);
    }

    for (let i = 3; i < ansArray.length; i++) {
        if ((inputs[i].value).toString() != ansArray[i]) {
            inputs[i].style.backgroundColor = 'red';
        } 
        else {
            inputs[i].style.backgroundColor = 'initial';
        }
    }

    console.log(ansArray)

}




