function checkemail() {
    let emailinput = document.getElementById("email");
    let emailvalue = emailinput.value.trim();
    let small = document.getElementById("emailerror");
    if (emailvalue === "") {
        setError(small, "Email was Required");
    }
    else {
        var mailformat = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if (emailvalue.match(mailformat)) {
            setSuccess(small)
        }
        else {
            setError(small, "Invalid Email Format");
        }
    }
}

function checkpasswords() {
    let passwordinput = document.getElementById("passwd");
    let passwordvalue = passwordinput.value.trim();
    let pwd = document.getElementById("passworderror");
    if (passwordvalue === "") {
        setError(pwd, "Password was Required");
    } else {
        setSuccess(pwd);
    }
}


function setError(small, message, pwd) {
    let button = document.getElementById("submit");
    button.disabled = true
    small.className = 'smallshown';
    small.innerHTML = message;
}

function setSuccess(small, pwd) {
    let button = document.getElementById("submit");
    small.className = 'smallhidden';
    button.disabled = false


}