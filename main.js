const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const passwordMatch = document.querySelector(".password-match")

password.addEventListener("input", () => {
    if (password.value !== confirmPassword.value) {
        passwordMatch.style.display = "contents";
        password.style.outline = "1px solid #FF0000";
        confirmPassword.style.outline = "1px solid #FF0000";
    } else {
        passwordMatch.style.display = "none";
        password.style.outline = "none";
        confirmPassword.style.outline = "none";
    }
})

confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value) {
        passwordMatch.style.display = "contents";
        password.style.outline = "1px solid #FF0000";
        confirmPassword.style.outline = "1px solid #FF0000";
    } else {
        passwordMatch.style.display = "none";
        password.style.outline = "none";
        confirmPassword.style.outline = "none";
    }
})