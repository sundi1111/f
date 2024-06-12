// 點擊外圍關閉登入/註冊
var modal = document.getElementById('login');

function closeModal(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = closeModal;
window.ontouchstart = closeModal;

// 註冊生日
document.addEventListener('DOMContentLoaded', (event) => {
var input = document.getElementById('birthday');
var today = new Date();
var yyyy = today.getFullYear();
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var dd = String(today.getDate()).padStart(2, '0');
var formattedToday = yyyy + '-' + mm + '-' + dd;

input.value = formattedToday;
input.value = '';

});

// 登入註冊頁面切換
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const logInText = document.getElementById('log-in');
const registerText = document.getElementById('register');

signUpButton.addEventListener('click', () => {
    container.classList.add("move");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("move");
});

logInText.addEventListener('click', () => {
    container.classList.remove("move");
});

registerText.addEventListener('click', () => {
    container.classList.add("move");
});

// 登入
function loginForm(event) {
    event.preventDefault();

    var email = document.getElementById("loginemail").value;
    var user_password = document.getElementById("loginpassword").value;

    if (!email || !user_password) {
        alert("欄位不可空白！");
    } else {
        //驗證
        var storedUser = localStorage.getItem(email);
        if (storedUser) {
            var user = JSON.parse(storedUser);
            if (user.password === user_password) {
                alert("登入成功！");
                window.location.href = "./member.html"; // 登入成功，頁面跳轉至會員資料頁面
            } else {
                alert("登入失敗：帳號或密碼不正確");
            }
        } else {
            alert("登入失敗：帳號或密碼不正確");
        }
    }
}

// 註冊
function signupForm(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var birthday = document.getElementById("birthday").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var user_password = document.getElementById("password").value;
    var comfirm_password = document.getElementById("comfirm_password").value;

    if (!username || !birthday || !phone || !email || !user_password || !comfirm_password) {
        alert("欄位不可空白！");
    } else if (user_password !== comfirm_password) {
        alert("密碼和確認密碼不一致！");
    } else {
        //儲存
        var user = {
            username: username,
            birthday: birthday,
            phone: phone,
            email: email,
            password: user_password
        };
        localStorage.setItem(email, JSON.stringify(user));
        alert("註冊成功！");
        container.classList.remove("move");
    }
}

