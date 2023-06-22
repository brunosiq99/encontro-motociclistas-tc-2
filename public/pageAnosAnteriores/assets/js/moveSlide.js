let bandasSlideMarginLeft = 0;
function setSlidesControlButton(slider,minMarginLeft,slidesDiv){
    const slideControlButtons = slider.querySelectorAll('.slides__control-buttons');
    slideControlButtons.forEach((slideButton)=>{
        slideButton.addEventListener('click',()=>{
            moveSlide(slidesDiv,slideButton,minMarginLeft);
        })
    }) 
}
function moveSlide(slidesDiv,slideButton,minMarginLeft){
    if(slideButton.id === "previous-slide__button"){
        if(bandasSlideMarginLeft + 100 > 0){
            bandasSlideMarginLeft = 0;
        }else{
            bandasSlideMarginLeft += 100;
        } 
    }
    if(slideButton.id === "next-slide__button"){
        if(bandasSlideMarginLeft - 100 < minMarginLeft){
            bandasSlideMarginLeft = minMarginLeft;
        }else{
            bandasSlideMarginLeft -= 100;
        }   
    }
    slidesDiv.style.marginLeft = `${bandasSlideMarginLeft}%`;
    activeOrDesactiveSlidesButtons(minMarginLeft) 
}
function activeOrDesactiveSlidesButtons(minMarginLeft){
    const leftSlideButton = document.querySelector('#previous-slide__button');
    const rightSlideButton = document.querySelector('#next-slide__button');

    if(bandasSlideMarginLeft === 0){
        leftSlideButton.style.display = 'none';
    }else{
        leftSlideButton.style.display = 'block';
    }

    if(bandasSlideMarginLeft <= minMarginLeft){
        rightSlideButton.style.display = 'none';
    }else{
        rightSlideButton.style.display = 'block';
    }
}

export {setSlidesControlButton, moveSlide, activeOrDesactiveSlidesButtons}