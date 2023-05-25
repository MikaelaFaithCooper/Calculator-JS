function insert(num) 
{
    document.answerBox.answerOutput.value = document.answerBox.answerOutput.value + num;
}

function equal()
{
    let x = document.answerBox.answerOutput.value;
    let y;
    try {
    y = eval(x)
    } catch (error) {
        answerBox.answerOutput.value='Syntax error'
    return;
}

document.getElementById("result").value = y 

}


function backspace()
{
    var exp = document.answerBox.answerOutput.value;
    document.answerBox.answerOutput.value = exp.substring(0, exp.length - 1);
}

function percentage()
{
  return (document.answerBox.answerOutput.value/num)*100;
}