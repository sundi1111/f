const goUpButton = document.getElementById('goUp');
console.log("Script is running!"); 

window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight * 0.05) {
        goUpButton.style.display = 'block';
    } else {
        goUpButton.style.display = 'none';
    }
});

// 變換字的內容
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Sundi";
  }, 0);
  setTimeout(() => {
    text.textContent = "酸甜";
  }, 3000);
};

textLoad();

document.addEventListener("DOMContentLoaded", function() {
  const secText = document.querySelector(".sec-text");
  const animationContainer = document.querySelector(".con");
  const mainContent = document.querySelector("main");
  const footerContent = document.querySelector("footer");
  const skipButton = document.getElementById("skipButton");

  secText.addEventListener("animationend", function() {
    animationContainer.style.display = "none";
    mainContent.style.display = "block";  // 顯示main區塊
    footerContent.style.display = "block"; // 顯示footer區塊
  });

  // 使用skip跳過
  skipButton.addEventListener("click", function() {
    animationContainer.style.display = "none";
    mainContent.style.display = "block";  
    footerContent.style.display = "block"; 
  });
});


// bk區塊的縮放
document.addEventListener('scroll', function() {
  const bkContainer = document.querySelector('.bkContainer');
  const containerRect = bkContainer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const bkCenterP = document.querySelector('.bk_center p');
  const bkImages = document.querySelectorAll('.bk_left img, .bk_right img');
  
  // bkContainer 100%
  if (containerRect.top <= windowHeight / 2 && containerRect.bottom >= windowHeight) {
      bkContainer.style.width = '100%';
      bkCenterP.style.fontSize = '45px';

      bkImages.forEach(function(img) {
          img.style.maxWidth = '400px';
          img.style.height = '350px';
      });
  } else {
      // bkContainer 90%
      bkContainer.style.width = '90%';
      bkCenterP.style.fontSize = '30px';
      bkContainer.style.paddingBottom = '80px';

      bkImages.forEach(function(img) {
          img.style.maxWidth = '250px';
          img.style.height = '250px';
      });
  }
  
  
});

document.addEventListener('scroll', function() {
  const bkContainer2 = document.querySelector('.bkContainer2');
  const containerRect = bkContainer2.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (containerRect.top <= windowHeight / 2 && containerRect.bottom >= windowHeight) {
      bkContainer2.style.width = '100%';
  } else {
      bkContainer2.style.width = '100%';
      bkContainer2.style.paddingBottom = '80px';
  }
  
});

// rwd排行榜照片幻燈
var slideIndex = 0;
var timer = null;
autoPlay(true);

function plusSlides(n){
  showSlides(slideIndex+=n);
}

function currentSlides(n){
  showSlides(slideIndex=n);
}

function showSlides(n){
  clearTimeout(timer);
  var slides = document.getElementsByClassName("mySlides");

  if (n>= slides.length){
    slideIndex = 0;
  }

  if(n<0){
    slideIndex = slides.length-1;
  }

  for (var i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  
}  

function autoPlay(isFirst) {
  var slides = document.getElementsByClassName("mySlides");
  
  if (isFirst) {
    slideIndex = 0;
  }else{
    slideIndex++;
  }

  if (slideIndex>slides.length) {
    slideIndex = 0;
  }

  showSlides(slideIndex);
  timer = setTimeout(autoPlay,2000);

}

function initSkuCon() {
  document.querySelectorAll('.skuCon').forEach(function(item) {
    var link = item.querySelector('a');
    var skuIn = item.querySelector('.skuIn');
    
    item.addEventListener('click', function(event) {
      event.preventDefault();

      document.querySelectorAll('.skuIn').forEach(function(overlay) {
        overlay.style.opacity = '0';
      });

      skuIn.style.opacity = '1';

      setTimeout(function() {
        window.location.href = link.href;
      }, 500);
    });

    document.addEventListener('click', function(event) {
      if (!item.contains(event.target)) {
        skuIn.style.opacity = '0';
      }
    });
  });
}

function checkRwd() {
  if (window.innerWidth <= 750) {
    initSkuCon();
  }
}

checkRwd();

window.addEventListener('resize', function() {
  checkRwd();
});



    