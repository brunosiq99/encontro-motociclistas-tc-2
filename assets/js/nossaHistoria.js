
//slide banner creation
import {setSlidesControlButton, activeOrDesactiveSlidesButtons} from './moveSlide.js';
const bannerDiv = document.querySelector('.banner__content');
const bannerSlider = document.querySelector('.banner__slides');

let bannerSlides = [];
let bannerSliderWidth = 0;
function loadBanner(banner){
    const bannerSlide = document.createElement('div');
    bannerSlides.push(bannerSlide);
    bannerSliderWidth += 100;
    bannerSlide.className = 'banner__slide';
    bannerSlide.style.backgroundImage = `url(${banner.src})`;
    const bannerTitle = document.createElement('h3');
    bannerTitle.className = 'banner__slide___title';
    bannerTitle.innerText = banner.title;

    bannerSlider.appendChild(bannerSlide);
    bannerSlide.appendChild(bannerTitle);
}
function setSlidesWidthAndMargin(slider,slides,sliderWidth){
    slider.style.width = sliderWidth+'%';
    const slideWidth = 10000/sliderWidth;
    slides.forEach((slide)=>{
        slide.style.width = slideWidth+'%';
    })
}
fetch('https://www.encontromotociclistas.com.br/assets/json/banner-nossa-historia.html').
    then(data => data.json()).
    then(response => {
        response.forEach(banner => loadBanner(banner));
        setSlidesWidthAndMargin(bannerSlider,bannerSlides,bannerSliderWidth);
        const minMarginLeft = -bannerSliderWidth + 100;
        
        setSlidesControlButton(bannerDiv, minMarginLeft, bannerSlider);
        activeOrDesactiveSlidesButtons(minMarginLeft)
    });

