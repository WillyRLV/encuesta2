var form = document.forms['form']
const input1=document.getElementById("name")
const valido = document.getElementById("valid")


form.onsubmit = function (e) {
    e.preventDefault();
    var select = document.form.name.value;
    console.log(select);

    if (document.getElementById("name").value === '36756730') {
        document.getElementById("form2").style.display = "inline-block";

    }

    else{
        document.getElementById("valid").style.display = "inline-block";
    }

}

input1.addEventListener('change', (event) => {
        document.getElementById("form2").style.display = "none";
        document.getElementById("valid").style.display = "none";
    
});


input1.addEventListener('keydown', (event) => {

    document.getElementById("valid").style.display = "none";
    document.getElementById("form2").style.display = "none";
    
});


