function checkname() {
    let nameinput = document.getElementById("name");
    let namevalue = nameinput.value.trim();
    if (namevalue === "") {
        setError(nameinput, "Please Enter Your Name");
       
    }
    else if(namevalue.length <=4) {
		setError(nameinput, "Username must be atleast 5 Characters");
		
	} else if(namevalue.length >=15) {
		setError(nameinput, "Username should not exceeds 15 Characters");
		
	} else{
        setSuccess(nameinput)
        

    }
}
function checkemail() {
    let emailinput = document.getElementById("email");
    let emailvalue = emailinput.value.trim();
    if (emailvalue === "") {
        setError(emailinput, "Please Enter Email");
    }
    else {
        var mailformat =  /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if (emailvalue.match(mailformat)) {
            setSuccess(emailinput);
        }
        else {
            setError(emailinput, "Invalid Email Format");
        }
    }
}


function checkpassword() {
    let passwordinput = document.getElementById("password");
    let passwordvalue = passwordinput.value.trim();
    if (passwordvalue === "") {
        setError(passwordinput, "Please Provide a Password");
    } else if(passwordvalue.length <=4) {
		setError(passwordinput, "Password must be atleast 5 Characters");
		
	} else if(passwordvalue.length >10) {
		setError(passwordinput, "Password should not exceeds 10 Characters");
		
	} else {
        setSuccess(passwordinput);
    }
}

function checkconfirmpassword() {
    let passwordinputvalue = document.getElementById("password").value.trim();
    let confirmpassword = document.getElementById("repassword");
    let confirmpasswordvalue = confirmpassword.value.trim()
    if (confirmpasswordvalue === "") {
        setError(confirmpassword, "Please Provide a Password");
    } else {
        if (confirmpasswordvalue === passwordinputvalue) {
            setSuccess(confirmpassword);
            
        }
        else {
            setError(confirmpassword, "Password doesn't Match");
        }
    }

}

function checkphone() {
    var nocheck = /^\d+$/;
    let phoneinput = document.getElementById("phone");
    if (phoneinput.value.trim() === "") {
        setError(phoneinput, "Please Enter your Phone Number");
    } else {
        if (phoneinput.value.trim().match(nocheck)) {
            setSuccess(phoneinput);
        } else {
            setError(phoneinput,"Invalid Format");
        }
    }

}

function setError(input, message) {
    let submitbutton = document.getElementById("submit");
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.className = 'smallshown';
    small.innerText = message;
    submitbutton.disabled = true;

}
function setSuccess(input) {
    let submitbutton = document.getElementById("submit");
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.className = "smallhidden";
    small.innerHTML = "";
    submitbutton.disabled = false;
}