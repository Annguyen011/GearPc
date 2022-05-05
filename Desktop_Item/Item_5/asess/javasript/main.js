const adressbtn = document.querySelector("#address-form");
const rightbtn = document.querySelector(".fa-angle-right");
const leftbtn = document.querySelector(".fa-angle-left");
const imgNumber = document.querySelectorAll(".slider-content-left-top img");
const imgNumberLi = document.querySelectorAll(".slider-content-left-bottom li");
let index = 0;

adressbtn.addEventListener("click", function() {
    document.querySelector(".address-form").style.display = "flex";
});

const adresclose = document.querySelector("#close-btn");
adresclose.addEventListener("click", function() {
    document.querySelector(".address-form").style.display = "none";
});

rightbtn.addEventListener("click", function() {
    index+=1;
    if (index > imgNumber.length-1) {
        index = 0;
    }
    document.querySelector(".slider-content-left-top").style.right=index*100+"%";
    
})

leftbtn.addEventListener("click", function() {
    index-=1;
    if (index < 0) {
        index = imgNumber.length-1;
    }
    document.querySelector(".slider-content-left-top").style.right=index*100+"%";
})



imgNumberLi.forEach(function(image, index) {
    
    image.addEventListener("click", function() {
        removeactive();
        document.querySelector(".slider-content-left-top").style.right=index*100+"%";
        image.classList.add('active');
    })
})

function removeactive() {
    let imgactive = document.querySelector(".active");
    imgactive.classList.remove('active');
}

function imgAuto() {
    index +=1;
    if (index > imgNumber.length-1) {
        index = 0;
    
        
    }
    removeactive();
    document.querySelector(".slider-content-left-top").style.right=index*100+"%";
    imgNumberLi[index].classList.add('active');
    // console.log(index);
}

setInterval(imgAuto,3000);

// Past slider product

const rightbtntwo = document.querySelector(".fa-angle-right-two");
const leftbtntwo = document.querySelector(".fa-angle-left-two");
const imgNumbertwo = document.querySelectorAll(".slider-product-one-items");

rightbtntwo.addEventListener("click", function() {
    index+=1;
    if (index > imgNumbertwo.length-1) {
        index = 0;
    }
    document.querySelector(".slider-product-one-items-content").style.right=index*100+"%";
    
})

leftbtntwo.addEventListener("click", function() {
    index-=1;
    if (index < 0) {
        index = imgNumbertwo.length-1;
    }
    document.querySelector(".slider-product-one-items-content").style.right=index*100+"%";
})
