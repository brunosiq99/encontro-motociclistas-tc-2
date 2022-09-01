//declare variables
let dayDiv = '';
let currentOpenedImage = '';

// Functions

function putsImageInDayDiv() {
    // DOMINGO
    dayDiv = document.getElementById('images_domingo'); 
    fetch(`https://brunosiq99.github.io/encontro-motociclistas-tc-2/assets/json/${dayDiv.id}.html`).
        then((response) => {    
            createImages(response,dayDiv)
        }).
        then(()=>{
            // SÁBADO
            dayDiv = document.getElementById('images_sabado');
            fetch(`https://brunosiq99.github.io/encontro-motociclistas-tc-2/assets/json/${dayDiv.id}.html`).
                then((response) => {
                    createImages(response,dayDiv)
                }).
                then(()=>{
                    // SEXTA
                    dayDiv = document.getElementById('images_sexta');
                    fetch(`http://127.0.0.1:5500/assets/json/${dayDiv.id}.html`).
                        then((response) => { 
                            createImages(response,dayDiv)
                        }).
                        then(()=>{
                            setTimeout(()=>setEventListenerToPhotos(),500);     //Time to load all fetch
                        })
                })
                
        })
}   
function createImages(response,dayDiv){
    response.json().
    then(imgs => {
        imgs.forEach(img => {
            const imageButton = document.createElement('button');
            const image = document.createElement('img');
            
            imageButton.className = "images__button";
            image.src = `./assets/img/2022/images/${img.link}`;
            image.className = "images__img";
            dayDiv.appendChild(imageButton);
            imageButton.appendChild(image);    
        })
    })
}              
function setEventListenerToPhotos(){
    const imagesButtons = Array.from(document.querySelectorAll('.images__button'));
    console.log(imagesButtons)
    imagesButtons.forEach((button)=>{
        button.addEventListener('click', (img) => openImage(img.target));
    })
}
function openImage(image){
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
    previousButton.addEventListener('click',() => toPreviousImage());
    nextButton.addEventListener('click',() => toNextImage())
}
function closeImageSection(){
    const imageSection = document.querySelector('.show-images-videos');
    const removedImagem = document.querySelector('.image__opened');
    imageSection.classList.remove('show-images-videos__active');
    imageSection.removeChild(removedImagem);
}
function toPreviousImage(){
    const imageSection = document.querySelector('.show-images-videos');
    const removedImage = document.querySelector('.image__opened');
    const currentOpenedImageButton = currentOpenedImage.parentNode;
    let previousImageButton = "";
    // test if currentOpenedImage is the last sibiling
    if(currentOpenedImageButton.previousElementSibling === null){      
        previousImageButton = currentOpenedImageButton.parentNode.lastChild; //returns to first child
    }else{
        previousImageButton = currentOpenedImageButton.previousElementSibling  
    }
    
    const newImage = previousImageButton.childNodes[0];
    currentOpenedImage = newImage;
    let openedImage = newImage.cloneNode(true);
    
    openedImage.className = 'image__opened';
    
    imageSection.removeChild(removedImage);
    imageSection.appendChild(openedImage);    
}
function toNextImage(){
    const imageSection = document.querySelector('.show-images-videos');
    const removedImage = document.querySelector('.image__opened');
    const currentOpenedImageButton = currentOpenedImage.parentNode;
    let nextImageButton = "";
    // test if currentOpenedImage is the last sibiling
    if(currentOpenedImageButton.nextSibling === null){      
        nextImageButton = currentOpenedImageButton.parentNode.firstChild; //returns to first child
    }else{
        nextImageButton = currentOpenedImageButton.nextSibling  
    }

    const newImage = nextImageButton.childNodes[0];
    currentOpenedImage = newImage;
    let openedImage = newImage.cloneNode(true);
    
    openedImage.className = 'image__opened';
    
    imageSection.removeChild(removedImage);
    imageSection.appendChild(openedImage);    
}

 



// Execute functions

putsImageInDayDiv()
setImagesControlButton()



