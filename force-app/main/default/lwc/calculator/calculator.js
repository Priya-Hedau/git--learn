import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    firstNumber = '';
    secondNumber = '';
    result = 0;

    handleFirstNumberChange(event) {
        this.firstNumber = parseFloat(event.target.value);
}
    handleSecondNumberChange(event) {
        this.secondNumber = parseFloat(event.target.value);
    }

    addNumbers() {
        this.result = this.firstNumber + this.secondNumber;
    }

    subtractNumbers() {
        this.result = this.firstNumber - this.secondNumber;
    }

    multiplyNumbers() {
        this.result = this.firstNumber * this.secondNumber;
    }

    divideNumbers() 
    {
        if (this.secondNumber !== 0) {
            this.result = this.firstNumber / this.secondNumber;
        }
    }
    resetValues() {
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.result = 0;
}
}
    
