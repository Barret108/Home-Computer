// Help Buttons


function iForgor() {
    alert(
        'User: Admin Pass: 1234'
    )
};

function iNew() {
    alert(
        'Too bad'
    )
};

// Login

function a() {
let user = document.getElementById("inPutUser").value;
let pass = document.getElementById("inPutPass").value;

if (user !== "admin") alert("Wrong info");
else if (pass !== "1234") alert("Wrong info");
else alert("Login success");
};