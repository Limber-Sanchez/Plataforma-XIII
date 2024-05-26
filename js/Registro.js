const sign_in_btn = document.querySelector("#sign-in-bt");
const sign_up_btn = document.querySelector("#sign-up-bt");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-bt");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-bt");
});