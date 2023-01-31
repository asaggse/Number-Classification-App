function numberType(num) {
    if (num % 10 === 0) return "Zero";
    if (num % 10 === 5) return "Five";
    if (num % 2 === 0) return "Even";
    return "Odd";
}

function showResult() {
    let num = document.getElementById("inputNumber").value;
    document.getElementById("outputResult").innerHTML = numberType(num);
}