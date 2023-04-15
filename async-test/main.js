
// generate random number from 1 - 10
function randomNum() {
    return Math.ceil(Math.random() * 10);
}

// place 'slide' number in DOM
function displayNum(num) {
    let slide = document.querySelector('#slide');
    slide.innerText = num;
}

// return new 'slide' as promise w/1000ms timeout
function newSlide() {
   return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(randomNum());
        }, 3000)
   })
}

// display first slide
displayNum(randomNum());

// async function to run 'slideshow' 
async function slideShow() {
    const slide1 = await newSlide();
    console.log(slide1);
    displayNum(slide1);
    const slide2 = await newSlide(); 
    console.log(slide2);
    displayNum(slide2);
    const slide3 = await newSlide();
    console.log(slide3);
    displayNum(slide3);
    const slide4 = await newSlide();
    console.log(slide4);
    displayNum(slide4);
    const slide5 = await newSlide();
    console.log(slide5);
    displayNum(slide5);
    const slide6 = await newSlide();
    console.log(slide6);
    displayNum(slide6);
    const slide7 = await newSlide();
    console.log(slide7);
    displayNum(slide7);
    const slide8 = await newSlide();
    console.log(slide8);
    displayNum(slide8);
    const slide9 = await newSlide();
    console.log(slide9);
    displayNum(slide9);
}

slideShow();
