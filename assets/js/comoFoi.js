//declare variables
const alldayDivs = document.querySelectorAll('.images__content');
let minMarginLeft = '';
let dayDiv = '';
let currentOpenedImage = '';
let visibilityKind = "1";
// visibilityKind defines which images will be loaded
// visibilityKind = 1 : Load when open the page
// visibilityKind = 0 : Load when opens images or click in "Ver Mais"

// Functions
import {setSlidesControlButton, activeOrDesactiveSlidesButtons} from './moveSlide.js';
function returnBandasJson(){
    fetch("encontromotociclistas.com.br/assets/json/bandas_slides.html").
        then(response => response.json()).
        then(bandas => createBandasSlides(bandas))
}
function createBandasSlides(bandas){
    const bandasSlidesDiv = document.querySelector('.apresentation__bandas___slides');
    bandas.forEach((banda)=>{
        const bandaSlide = document.createElement('div');
        bandaSlide.className = 'apresentation__bandas___slide';
        bandaSlide.style.backgroundImage = `url(./assets/Img/2022/images/${banda.backing})`;
        bandasSlidesDiv.appendChild(bandaSlide);
        createBandaSlideContent(bandaSlide,banda);   
    })
    const bandasSliderDiv = bandasSlidesDiv.parentNode;
    verifiesScreenSize(); 
    setSlidesControlButton(bandasSliderDiv,minMarginLeft, bandasSlidesDiv);
}
function createBandaSlideContent(bandaSlide,banda) {
    const bandaSlideTitleDiv = document.createElement('div');
    bandaSlideTitleDiv.className = "bandas__slide___title-div";
    const bandaSlideTitle = document.createElement('h3');
    bandaSlideTitle.className = "bandas__slide___title main__subtitles";
    bandaSlideTitle.innerText = banda.name;
    bandaSlide.appendChild(bandaSlideTitleDiv);
    bandaSlideTitleDiv.appendChild(bandaSlideTitle);
}
function verifiesScreenSize(){
    const screenSize = window.innerWidth;
    if(screenSize >= 860){
        minMarginLeft = -175;
    }else if(screenSize >= 560){
        minMarginLeft = -450;
    }else{
        minMarginLeft = -1000;
    }
    activeOrDesactiveSlidesButtons()
}
function putsImageInDayDiv(dayDiv){
    if(dayDiv.childNodes.length <= 4){
        const fetchPromise = new Promise((resolv)=>{
            fetch(`https://www.encontromotociclistas.com.br/assets/json/${dayDiv.id}.html`).
                then((response) => response.json()).
                then(imgs => {
                    imgs.forEach((img)=>{
                        createImage(img,dayDiv);
                    });
                });        
        }); 
    }else{
        controlImagesDisplay(dayDiv,'block');
    }   
}    
function createImage(img,dayDiv){ 
    if(img.visibility == visibilityKind){
        const imageButton = document.createElement('button');
        const image = document.createElement('img');
        
        imageButton.addEventListener('click',img => openImage(img.target));
        imageButton.className = "images__button";
        image.src = `./assets/img/2022/images/${img.link}`;
        image.className = "images__img";
        dayDiv.appendChild(imageButton);
        imageButton.appendChild(image);   
    }        
}
function openImage(image){
    visibilityKind = '0';
    const dayDiv = image.parentNode.parentNode;
    
    const divButton = dayDiv.nextElementSibling;
    changeButtonAngleText(divButton) 
    const imageSection = document.querySelector('.show-images-videos');
    imageSection.classList.add('show-images-videos__active');
    currentOpenedImage = image; 
    let openedImage = image.cloneNode(true);
    openedImage.className = 'image__opened';
    imageSection.appendChild(openedImage);   
}
function setImagesControlButton(){
    const closeButton = document.getElementById('close-image__button');
    const previousButton = document.getElementById('previous-image__button');
    const nextButton = document.getElementById('next-image__button');
    closeButton.addEventListener('click',() => closeImageSection());
    previousButton.addEventListener('click',() => controlImage(previousButton));
    nextButton.addEventListener('click',() => controlImage(nextButton))
}
function closeImageSection(){
    const imageSection = document.querySelector('.show-images-videos');
    const removedImagem = document.querySelector('.image__opened');
    imageSection.classList.remove('show-images-videos__active');
    imageSection.removeChild(removedImagem);
}
function controlImage(button){
    const imageSection = document.querySelector('.show-images-videos');
    const removedImage = document.querySelector('.image__opened');
    const currentOpenedImageButton = currentOpenedImage.parentNode;
    let newImageButton = '';
    if(button.id === 'previous-image__button'){
        if(currentOpenedImageButton.previousElementSibling === null){      
            newImageButton = currentOpenedImageButton.parentNode.lastChild; //returns to last child
        }else{
            newImageButton = currentOpenedImageButton.previousElementSibling  
        }
    }else{
        if(currentOpenedImageButton.nextSibling === null){      
            newImageButton = currentOpenedImageButton.parentNode.firstChild; //returns to first child
        }else{
            newImageButton = currentOpenedImageButton.nextSibling  
        }
    }

    const newImage = newImageButton.childNodes[0];
    currentOpenedImage = newImage;
    let openedImage = newImage.cloneNode(true);
    
    openedImage.className = 'image__opened';
    
    imageSection.removeChild(removedImage);
    imageSection.appendChild(openedImage);
}
function controlImagesDisplay(dayDiv, newDisplay){
    for(i = 4; i < dayDiv.childNodes.length; i++){
        dayDiv.childNodes[i].style.display = newDisplay;
    }
}

// Ver Mais/Menos Button
function setVerMaisButton(){
    const verMaisButtons = document.querySelectorAll('.images__ver-mais');
    
    verMaisButtons.forEach((button)=>{
        button.addEventListener('click',()=>{
            visibilityKind = '0';
            dayDiv = button.previousElementSibling;
            changeButtonAngleText(button);
        })
    })
}
function changeButtonAngleText(button){
    dayDiv = button.previousElementSibling;
    const buttonIcon = button.childNodes[1];
    if(buttonIcon.classList.contains('fa-angle-down')){
        button.innerHTML  =`Ver Menos <i class="fa-solid fa-angle-up icon-white fa-1x"></i>`;
        putsImageInDayDiv(dayDiv);          // if ImageinDayDiv is already loaded, it goes to controlImagesDisplay
    }else{
        button.innerHTML = 'Ver Mais <i class="fa-solid fa-angle-down icon-white fa-1x"></i>';
        controlImagesDisplay(dayDiv,'none');
    }
}

// Execute functions
returnBandasJson();
alldayDivs.forEach((dayDiv)=>{
    putsImageInDayDiv(dayDiv);
});
setImagesControlButton();
setVerMaisButton();




