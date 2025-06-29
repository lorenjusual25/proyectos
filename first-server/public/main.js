//BOTON DE VOLVER A INICIO EN CASO DE QUE LA PAG NO EXISTA
const backHome = document.getElementById("returnHome");
if (backHome) {
    backHome.addEventListener("click",() => {
        window.location.href = "/";
    })
}
//BOTON QUE REDIRECCIONA AL USUARIO A UNA PAG QUE NO EXISTE
const forgotPass = document.getElementById("forgotPassword");
if (forgotPass){
    forgotPass.addEventListener("click", () => {
        window.location.href="/forgot-password";
    })
}
//BOTONES QUE REDIRECCIONAN AL USUARIO A LA PAG DE LOGIN O SIGNUP
const login = document.getElementById("logIn");
if (login) {
    login.addEventListener("click", () => {
        window.location.href="/login";
    })
}
const signUp = document.getElementById("signUp");
if (signUp){
    signUp.addEventListener("click", () => {
        window.location.href="/signup";
    })
}
//BOTON PARA SUBIR LA INFORMACION DEL REGISTRO
const submit = document.getElementById("submit");
if (submit){
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const firstPass = document.getElementById("firstPass").value;
        const secPass = document.getElementById("secPass").value;
        let password;
        if (firstPass === secPass){
            password = firstPass
        }
        else{
            alert('Las contraseñas no coinciden')
            return
        }
        if (username && email && password) {
            fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, email, password })
            })
            .then(res => {
                if (!res.ok)
                    throw new Error ('Something went wrong')
                return res.json()
            })
            .then(data => {
                console.log(data.error || data.msg)
            })
            .catch(err => {
                console.error(err)
            })
        } else {
            alert("Por favor, completa todos los campos.");
        }
    })
}
//BOTON PARA SUBIR LA INFORMACION DEL INICIO DE SESION
const submitLogin = document.getElementById("submitLogin");
if (submitLogin) {
    submitLogin.addEventListener("click", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if (username && email && password) {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            })
            .then(res => res.json().then(data => {
                if (!res.ok) {
                    throw new Error(data.error || 'Something went wrong');
                }
                return data;
            }))
            .then(data => {
                console.log(data.msg || data.error)
                if (data.msg)
                    alert('Login realizado con exito')
            })
            .catch(err => {
                console.error(err)
            })
        } else {
            alert('Falta ingresar datos')
        }
    });
}