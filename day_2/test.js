
//Method 1
// function ButtonClick () {
//     let inputValue = document.getElementById("one").value;
//     console.log(inputValue)

//     document.getElementById('three').innerHTML = inputValue;
// }
//Method 2
document.getElementById('two').addEventListener('click',()=> {
    let inputValue = document.getElementById("one").value;
    console.log(inputValue)
    document.getElementById('three').innerHTML = inputValue;
})