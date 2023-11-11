const codes = document.querySelectorAll(".code");
const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".btn");
const loEmail = document.querySelector(".lo-email");
const loPassword = document.querySelector(".lo-password");
const siName = document.querySelector(".si-name");
const siEmail = document.querySelector(".si-email");
const siPassword = document.querySelector(".si-password");
const siRepassword = document.querySelector(".si-repassword");
const alerts = document.querySelector(".alert");
const done = document.querySelector(".done");
console.log(done)

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = "";
            setTimeout(() => codes[idx + 1].focus(), 10);
        } else if (e.key === "Backspace") {
            setTimeout(() => codes[idx - 1].focus(), 10);
        }
    });
});

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const currentStep = document.querySelector(`.step-${index + 1}`);
        const nextStep = document.querySelector(`.step-${index + 2}`);
        const lastStep = document.querySelector(`.step-${index + 3}`);

        function isAnyInputEmpty(inputs) {
            return Array.from(inputs).some((input) => input.value.trim() === "");
        }

        switch (index + 1) {
            case 1:
                if (isAnyInputEmpty(codes)) {
                    showAlert("info", "Please fill in all required fields.");
                } else {
                    currentStep.classList.add("d-none");
                    nextStep.classList.remove("d-none");
                }
                break;

            case 2:
                if (loEmail.value.trim() !== "" && loPassword.value.trim() !== "") {
                    currentStep.classList.add("d-none");
                    nextStep.classList.remove("d-none");
                } else {
                    showAlert("info", "This is an informational message.");
                }
                break;

            case 3:
                if (
                    siName.value.trim() !== "" &&
                    siEmail.value.trim() !== "" &&
                    siPassword.value.trim() !== "" &&
                    siRepassword.value.trim() !== ""
                ) {
                    currentStep.classList.add("d-none");
                    nextStep.classList.remove("d-none");
                } else {
                    showAlert("info", "Please fill in all required fields.");
                }
                break;
        }
        let html = `Congratulations ${siName.value}, <p>your transactions have been completed successfully.</p>`;
        done.innerHTML = html;
        console.log(done)
    });
});


const showAlert = (type, message) => {
    let html = `<div class="alert-${type}">${message}</div>`;
    alerts.innerHTML = html;
    setTimeout(() => {
        alerts.innerHTML = "";
    }, 3000);
};