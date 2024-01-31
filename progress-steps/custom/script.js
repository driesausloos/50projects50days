const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const progressBar = document.getElementById("progress-bar");
const progessSteps = document.querySelectorAll(".steps");
let currentActive = 0;

btnNext.addEventListener('click', () => {
    currentActive++;
    update()
});

btnPrev.addEventListener('click', () => {
    currentActive--;
    update()
});

function update() {
    progressBar.style.width = currentActive / (progessSteps.length - 1) * 100 + "%";

    progessSteps.forEach((step, idx) => {
        if(idx < (currentActive + 1)) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    if (currentActive === 0) {
        btnPrev.disabled = true;
    } else if (currentActive === (progessSteps.length - 1)) {
        btnNext.disabled = true;
    }
    else {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}