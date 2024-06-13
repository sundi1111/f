document.addEventListener('DOMContentLoaded', () => {
    let stepNumber = 1;
    const stepDisplay = document.getElementById('stepNumber');
    const sections = ['.checkInfo', '.checkPay', '.checkAll'].map(selector => document.querySelector(selector));
    const [prevButton, nextButton] = [document.getElementById('prevButton'), document.getElementById('nextButton')];

    const showStep = (step) => {
        sections.forEach((section, index) => section.style.display = (index + 1) === step ? 'block' : 'none');
        stepDisplay.textContent = stepNumber;
        prevButton.style.display = step > 1 ? 'inline-block' : 'none';
        nextButton.textContent = step === 3 ? '結帳' : '下一步';
    };

    prevButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (stepNumber > 1) showStep(--stepNumber);
    });

    nextButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (stepNumber < 3) {
            showStep(++stepNumber);
        } else {
            setTimeout(() => window.location.href = event.target.getAttribute('data-url'), 100);
        }
    });

    showStep(stepNumber);
});



// 刪除商品
document.addEventListener('DOMContentLoaded', function () {
    
    var deleteButtons = document.querySelectorAll('.deleteButton');
   
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // 刪除商品區塊
            var productBlock = button.closest('.pro');
            productBlock.remove();
        });
    });
});

function clearPlaceholder(input) {
    if (input.value === input.defaultValue) {
        input.value = '';
    }
}



