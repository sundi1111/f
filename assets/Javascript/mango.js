// 圖片切換、數量增減
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const upButton = document.getElementById('upButton');
    const downButton = document.getElementById('downButton');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const quantityInput = document.getElementById('iquantity');
    let scrollIndex = 0;

    function updateSelectedThumbnail() {
        thumbnails.forEach((thumbnail, index) => {
            if (index === scrollIndex) {
                thumbnail.classList.add('selected');
            } else {
                thumbnail.classList.remove('selected');
            }
        });
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
            scrollIndex = index;
            updateSelectedThumbnail();
            updateButtons();
        });
    });

    upButton.addEventListener('click', () => {
        if (scrollIndex > 0) {
            scrollIndex--;
            mainImage.src = thumbnails[scrollIndex].src;
            updateSelectedThumbnail();
            updateButtons();
        }
    });

    downButton.addEventListener('click', () => {
        if (scrollIndex < thumbnails.length - 1) {
            scrollIndex++;
            mainImage.src = thumbnails[scrollIndex].src;
            updateSelectedThumbnail();
            updateButtons();
        }
    });

    function updateButtons() {
        upButton.disabled = scrollIndex === 0;
        downButton.disabled = scrollIndex === thumbnails.length - 1;

        if (upButton.disabled) {
            upButton.querySelector('iconify-icon').classList.add('disabled-icon');
        } else {
            upButton.querySelector('iconify-icon').classList.remove('disabled-icon');
        }

        if (downButton.disabled) {
            downButton.querySelector('iconify-icon').classList.add('disabled-icon');
        } else {
            downButton.querySelector('iconify-icon').classList.remove('disabled-icon');
        }
    }

    updateButtons();
    updateSelectedThumbnail();

    minusButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value, 10);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });

    plusButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value, 10);
        quantityInput.value = quantity + 1;
    });
});

// 內容切換

document.querySelectorAll('.tab-radio').forEach(function(tabRadio) {
    tabRadio.addEventListener('change', function() {
        var tabId = this.id.replace('-radio', '');
        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
            tabContent.classList.remove('active');
            tabContent.classList.add('hidden');
        });
        var activeTabContent = document.getElementById(tabId + '-content');
        activeTabContent.classList.remove('hidden');
        activeTabContent.classList.add('active');
    });
});

// 推薦商品幻燈
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





