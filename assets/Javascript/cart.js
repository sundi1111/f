document.addEventListener('DOMContentLoaded', function () {
    var stepNumber = 1;
    var stepDisplay = document.getElementById('stepNumber');
    var checkInfo = document.querySelector('.checkInfo');
    var checkPay = document.querySelector('.checkPay');
    var checkAll = document.querySelector('.checkAll');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
    //選擇結帳步驟
    function showStep(step) {
        switch (step) {
            case 1:
                checkInfo.style.display = 'block';
                checkPay.style.display = 'none';
                checkAll.style.display = 'none';
                break;
            case 2:
                checkInfo.style.display = 'none';
                checkPay.style.display = 'block';
                checkAll.style.display = 'none';
                break;
            case 3:
                checkInfo.style.display = 'none';
                checkPay.style.display = 'none';
                checkAll.style.display = 'block';
                break;
            default:
                break;
        }
    }

    showStep(stepNumber);

    prevButton.addEventListener('click', function () {
        if (stepNumber > 1) {
            stepNumber--;
            stepDisplay.textContent = stepNumber;
            showStep(stepNumber);
            nextButton.textContent = '下一步';
            if (stepNumber === 1) {
                prevButton.style.display = 'none';
            }
        }
    });

    nextButton.addEventListener('click', function (event) {
        if (stepNumber < 3) { 
            stepNumber++;
            stepDisplay.textContent = stepNumber;
            showStep(stepNumber);
            prevButton.style.display = 'inline-block';
            if (stepNumber === 3) { 
                nextButton.textContent = '結帳';
            }
        } else if (stepNumber === 3) {
            setTimeout(function() {
                var nextUrl = event.target.getAttribute('data-url');
                window.location.href = nextUrl;
            }, 100);
        }
    });
});

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



