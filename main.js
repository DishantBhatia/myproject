//Lightbox for gallery 

let index = 0;

const totalGalleryItems = $(".work-item").length;

$(document).ready(function(){
    //nav toggle while shrinking the webpage
    $(".nav-toggle").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width()< 768){
            $(".header .nav").slideToggle(); 
        }
    })
})

//Make the header fixed now
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $(".header").addClass("fixed");
    }
    else{
        $(".header").removeClass("fixed");
    }
})

// Set Lightbox -> Making the image expanded to the maximum after clicking on the top of it.
const wHeight = $(window).height();
$(".lightbox-img").css("max-height", wHeight+"px");

//Lightbox SlideShow Code
$(".pics").click(function(){
    index = $(this).parent(".work-item").index();
    $(".lightbox").addClass("open");
    lightBoxSlideShow();
})

// To move forward or backward in the slideshow
$(".lightbox .prev").click(function(){
    if(index == 0){
        index = totalGalleryItems - 1;
    }
    else{
        index--;
    }
    lightBoxSlideShow();
})

$(".lightbox .next").click(function(){
    if(index == totalGalleryItems-1){
        index =0;
    }
    else{
        index++;
    }
    lightBoxSlideShow();
})

//CLOSING THE LIGHTBOX
$(".lightbox-close").click(function(){
    $(".lightbox").removeClass("open");
})

//Closing the Lightbox when clicked outside the image-box
$(".lightbox").click(function(event){
    if($(event.target).hasClass("lightbox")){
        $(this).removeClass("open");
    }
})

// Function Definition of lightBoxSlideShow()
function lightBoxSlideShow(){
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src",imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totalGalleryItems+ "/" + (index+1));
}

