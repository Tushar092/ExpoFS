let form = document.querySelector("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    login();
});

async function login() {
    let identity = {
        email : email.value,
        password : password.value
    }
    try {
        let res = await fetch("https://reqres.in/api/login", {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(identity)
        });

        res = await res.json();
        if(res.token) {
            window.location = "./admindash.html";
        } else {
            window.alert("Something went wrong");
        }
    } catch (error) {
        console.log("error", error);
    }
}