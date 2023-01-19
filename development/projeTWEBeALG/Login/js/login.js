// LOGIN//

const url = 'https://canteco-api.onrender.com/user'
const forms = document.querySelectorAll('.needs-validation')

// login
const form = document.querySelector("#form")
const emailInput = document.getElementById("email")
const passwordlInput = document.getElementById("password")

// create account
const nameIpnut = document.getElementById("createName")
const createEmailInput = document.getElementById("createEmail")
const userRole = document.getElementById("userRole")
const createPasswordInput = document.getElementById("createPassword")
const confitmPasswordInput = document.getElementById("confrimPassword")


// POST Login

async function auth() {
    const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordlInput.value
        }),
    })

    .then(response => response.json())
    .then(response => {
        console.log(response)})
}

// POST Create account 

async function CreateAccount(){
    const response = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: nameIpnut.value,
            email: createEmailInput.value,
            userRole: userRole.value,
            password: createPasswordInput.value,
            comfirmPassword: confitmPasswordInput.value
        }),
    })

    .then(response => response.json())
    .then(response => {
        console.log(response)})
    
}



//  console.log(form ,emailInput);

function btnLogin() {

    // verificar se o email esta preenchido e se é valido

    if (emailInput.value == "" || !isEmailValid(emailInput.value)) {
        alert("Porfavor, preencha o seu email")
        return;
    }
    // verifica se password esta  preenchido 

    if (!validatePassword(passwordlInput.value, 8)) {
        alert("A password precisa de no min 8 digitos")
        return;
    }

};

function tradutor() {
    location.href = "/Tradutor/tradutor.html"
}

function CreateAccountP() {
    location.href = "/Login/createAccount.html"
}

function LoginPage() {
    location.href = "/Login/login.html"
}
