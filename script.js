$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    //contact form submit and save data  to  api-speedsheet
    let apiUri = 'https://api.apispreadsheets.com/data/7zCaQpRBEsLtK7Cj/';
    let inputs =  $('.contact-form').find('input');
    let textArea  = $('.contact-form').find('textarea');
    let submitBtn = $('.btn-submit');

    $('.contact-form').on('submit', async (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        updateMessage('submitting..!!')
        try{
          await fetch(apiUri, {method: "POST", body: formData});
          inputs.val('')
          textArea.val('');
          updateMessage('submitted  successful!!');
          submitBtn.addClass('form-submitted')
          setTimeout(() => {
              updateMessage('submit')
              submitBtn.removeClass('form-submitted')
          }, 2000)
        } catch(error) {
            console.log(error)
            updateMessage('something went wrong!!')
            setTimeout(() => {
                updateMessage('submit')
              }, 2000)
        }
    })

    //update message
    function updateMessage(message) {
        submitBtn.html(message)
    }

    //progressbar
    let skillContent = $('.skills-content');
    let options = {
        rootMargin: '0px',
        threshold: 1.0
      }
      let callback = (entries, observer) => {
        entries.forEach((entry) => {
           if(entry.isIntersecting) {
                $('.line ').addClass('animate')
           }
        });
      };

      let observer = new IntersectionObserver(callback, options);
      observer.observe(skillContent[0])
    
});