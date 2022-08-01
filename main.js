var form = document.forms['form']
const input1 = document.getElementById("name")
const valido = document.getElementById("valid")


form.onsubmit = function (e) {
    e.preventDefault();
    var select = document.form.name.value;
    console.log(select);
    var select = document.getElementById("validationCustom04"),
    arr = ["juan", "jorge", "luis"];



    if (document.getElementById("name").value === '33333333') {

    

        for (let index = 0; index < arr.length; index++) {

            const op = document.createElement("OPTION"),
                txt = document.createTextNode(arr[index]);
            op.appendChild(txt);
            op.setAttribute("value", arr[index])
            select.insertBefore(op, select.lastChild);

        }

        document.getElementById("form2").style.display = "flex";

    }

    else {
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


