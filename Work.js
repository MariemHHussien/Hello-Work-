function registers() {


    const namee = document.getElementById("name");
    const pass = document.getElementById("pass");
    const address = document.getElementById("address");
    const degree = document.getElementById("degree");
    const age = document.getElementById("age");
    if((namee.value &&pass.value&&address.value&&degree.value&&age.value)===''||
    (namee.value &&pass.value&&address.value&&degree.value&&age.value)== null)
    {
     alert("Please fill the inputs please !");   
    }

    if (namee.value === '' || namee.value == null) {
        message('name is required');



    }
    if (namee.value.length > 6 || (namee.value.length < 6)) {
        alert("please enter only six character in the Name")
    }

    if (pass.value === '' || pass.value == null) {
        alert('password is required')
    }
    if (pass.value.length < 10) {
        alert("enter 10 character please in the password");
    }

    if (address.value === '' || address.value == null) {
        alert('address is required')
    }
    if (degree.value === '' || degree.value == null) {
        alert('degree is required')
    }
    if (age.value === '' || age.value == null) {
        alert('age is required')
    }


}

function registerg() {


    const namee = document.getElementById("name");
    const pass = document.getElementById("pass");
    const address = document.getElementById("address");
    const degree = document.getElementById("degree");
    const age = document.getElementById("age");
    if((namee.value &&pass.value&&address.value&&degree.value&&age.value)===''||
    (namee.value &&pass.value&&address.value&&degree.value&&age.value)== null)
    {
     alert("Please fill the inputs please !");   
    }

    if (namee.value === '' || namee.value == null) {
        message('name is required');



    }
    if (namee.value.length > 6 || (namee.value.length < 6)) {
        alert("please enter only six character in the Name")
    }

    if (pass.value === '' || pass.value == null) {
        alert('password is required')
    }
    if (pass.value.length < 10) {
        alert("enter 10 character please in the password");
    }

    if (address.value === '' || address.value == null) {
        alert('address is required')
    }

    if (age.value === '' || age.value == null) {
        alert('age is required')
    }


}
