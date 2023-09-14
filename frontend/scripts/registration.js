let form = document.querySelector("form");
let name = document.getElementById("name");
let age = document.getElementById("age");
let place = document.getElementById("place");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let newDog = {
        name: name.value,
        age: age.value,
        gender: gender.value,
        place: place.value
    }
    console.log(newDog);
    expoFetch(newDog);
});

async function expoFetch(newDog) {
    try {
        let res = await fetch("http://localhost:3002/Dogs", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newDog)
        });

        res = await res.json();
        window.alert("Registration Successful");
    } catch (error) {
        console.log("error", error.message)
    }

}