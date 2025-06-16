const backHome = document.getElementById("returnHome");
if (backHome) {
    backHome.addEventListener("click",() => {
        window.location.href = "index.html";
    })
}
const forgotPass = document.getElementById("forgotPassword");
if (forgotPass){
    forgotPass.addEventListener("click", () => {
        window.location.href="error404.html";
    })
}
const login = document.getElementById("logIn");
if (login) {
    login.addEventListener("click", () => {
        window.location.href="login.html";
    })
}
const signUp = document.getElementById("signUp");
if (signUp){
    signUp.addEventListener("click", () => {
        window.location.href="signup.html";
    })
}