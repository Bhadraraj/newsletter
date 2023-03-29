document.querySelector("#open-subscribe-form").addEventListener("click", function () {

    document.querySelector(".subscribe-form").classList.add("active");
});

document.querySelector(".subscribe-form .close-btn").addEventListener("click", function () {

    document.querySelector(".subscribe-form").classList.remove("active");
});

function validateForm() {
    var email = document.getElementById("email").value;

    const errorMessage = document.getElementById('email-error');
    const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    if (email === "") {
        errorMessage.textContent = "Email  is required"
    }
    else if (!(regExp.test(email))) {
        errorMessage.textContent = "Please enter valid email"
    }

    else {
        errorMessage.textContent = "";

    }
}
