function insert(num) {
    let answerOutput = document.getElementById("result");
    let currentExpression = answerOutput.value;

    if (currentExpression === "" && (num === "+" || num === "*" || num === "÷" || num === ".")) {
        return;
    }

    if (isOperator(currentExpression[currentExpression.length - 1]) && isOperator(num)) {
        answerOutput.value = currentExpression.slice(0, -1) + num;
    } else {
        answerOutput.value += num;
    }
}

function equal() {
    let answerOutput = document.getElementById("result");
    let expression = answerOutput.value;
    let result;
    try {
        result = eval(expression);
    } catch (error) {
        result = 'Syntax error';
    }
    answerOutput.value = result;
}

function backspace() {
    let answerOutput = document.getElementById("result");
    answerOutput.value = answerOutput.value.slice(0, -1);
}

function isOperator(char) {
    return ['+', '-', '*', '÷', '.'].includes(char);
}
