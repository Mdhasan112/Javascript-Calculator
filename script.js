function deleteMe() {
    document.getElementById('result').value = "";
}
function calculator(newValue) {
    document.getElementById('result').value += newValue;
}
function answer() {
    var a = document.getElementById('result').value;
    var b = eval(a);
    document.getElementById('result').value = b;
}