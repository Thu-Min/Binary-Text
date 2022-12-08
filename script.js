function convert(){
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');

    output.value = '';
    
    for(let i = 0; i < input.length; i++){
        output.value += input[i].codePointAt(0).toString(2) + " ";
    }
}