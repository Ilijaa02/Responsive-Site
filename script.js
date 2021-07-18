let navbar = $(".navbar");

$(window).scroll(function(){
    let  Top = $(".section-2").offset().top - window.innerHeight;
    if($(window).scrollTop() > Top){
        navbar.classList.Add("sticky");
    }
    else{
        navbar.classList.Remove("sticky");
    }
});

/** Ovo je ipak trebalo da se radi u JQuerry :(  */