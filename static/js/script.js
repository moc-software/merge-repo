var preloader = document.querySelector(".loading")
const links = document.querySelectorAll(".nav_content a");
const hamburger = document.querySelector(".menu_icon")
const toggler = document.querySelector(".toggler") 
const togglerCross = document.querySelector(".togglerCross") 
const footerButton = document.querySelector('.footer_top button')
const footerOverlayCross = document.querySelector('.footer_page_request_overlay i')
const footerOverlay = document.querySelector('.footer_page_request_overlay')

function loader(){
    preloader.style.display = "none"
}
  hamburger.addEventListener("click", function () {
    toggler.style.display = "initial";
  });
  
  togglerCross.addEventListener("click", function () {
    toggler.style.display = "none";
  });

  var btns = document.querySelectorAll(".Btn1");
  var form = document.querySelector(".dets0");
  var cross = document.querySelector(".cross i")
  var sumit = document.querySelector("#submit")
  

  btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      form.style.display = "flex";
    });
  });
  
  
  cross.addEventListener("click", function () {
    form.style.display = "none";
    Btn1[0].style.display = "initial";  
  });
  
  footerButton.addEventListener("click", function () {
    footerOverlay.style.display = "initial";
  });
  
  footerOverlayCross.addEventListener("click", function () {
    location.reload();
  });


  hamburger.addEventListener("click", function () {
    toggler.style.display = "initial";
  
  });
  
  togglerCross.addEventListener("click", function () {
    toggler.style.display = "none";
  
  });


  document.addEventListener("DOMContentLoaded", function() {
    const swiper1 = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    
    
    $(document).ready(function(){
      $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      });
    });
    


  });
  
  function toggleOptions() {
    var vehicleType = document.getElementById("type").value;
    var Brand = document.querySelectorAll("#brand");

    if (vehicleType === "Four-Wheeler") {
      Brand[0].style.display = "block";
      Brand[1].style.display = "none";
    } else if (vehicleType === "Two-Wheeler") {
      Brand[0].style.display = "none";
      Brand[1].style.display = "block";
    } else {
      Brand[0].style.display = "none";
      Brand[1].style.display = "none";
    }
  }

//   gsap.from(".first_page_content h1",{
//     scale:0,
//     duration:1,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".first_page_content h1",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 90%"
//     }
//   })

//   gsap.from(".first_page_content h2",{
//     scale:0,
//     duration:1,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".first_page_content h2",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 90%"
//     }
//   })

//   gsap.from(".first_page_content h6",{
//     scale:0,
//     duration:1,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".first_page_content h6",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 90%"
//     }
//   })



// gsap.from(".second_page_heading h1",{
//   scale:0,
//   duration:1,
//   opacity:0,
//   scrollTrigger:{
//       trigger:".second_page_heading h1",
//       scroller:"body",
//       start:"top 70%",
//       end:"top 90%"
//   }
// })


// gsap.from(".second_page_heading p",{
//   scale:0,
//   duration:1.5,
//   opacity:0,
//   scrollTrigger:{
//       trigger:".second_page_heading p",
//       scroller:"body",
//       start:"top 72%"
//   }
// })

// // gsap.from(".swiper",{
// //   scale:0,
// //   duration:3,
// //   opacity:0,
// //   scrollTrigger:{
// //       trigger:".swiper",
// //       scroller:"body",
// //       start:"top 90%"
// //   }
// // })

// gsap.from(".forth_page h1",{
//   scale:0,
//   duration:1.5,
//   opacity:0,
//   y:500,
//   scrollTrigger:{
//       trigger:".forth_page h1",
//       scroller:"body",
//       start:"top 170%",
//   }
// })

// gsap.from(".fourth_page_icons img",{
//   scale:0,
//   duration:1.5,
//   opacity:0,
//   y:500,
//   scrollTrigger:{
//       trigger:".fourth_page_icons img",
//       scroller:"body",
//       start:"top 170%"
//   }
// })

// gsap.from(".fourth_page_data h3",{
//   scale:0,
//   duration:1.5,
//   opacity:0,
//   scrollTrigger:{
//       trigger:".fourth_page_data h3",
//       scroller:"body",
//       start:"top 88%"
//   }
// })

// gsap.from(".fourth_page_data p",{
//   scale:0,
//   duration:1.5,
//   opacity:0,
//   scrollTrigger:{
//       trigger:".fourth_page_data p",
//       scroller:"body",
//       start:"top 88%"
//   }
// })


// gsap.from(".fifth_page h1",{
//   scale:0,
//   duration:1.5,
//   opacity:0,
//   y:500,
//   scrollTrigger:{
//       trigger:".fifth_page h1",
//       scroller:"body",
//       start:"top 180%",
//   }
// })

// gsap.from(".fifth_page .autoplay",{
//   scale:0,
//   duration:1.5,
//   opacity:0,
//   scrollTrigger:{
//       trigger:".fifth_page .autoplay",
//       scroller:"body",
//       start:"top 350%",
//   }
// })





// // gsap.from(".service_partner_data",{
// //   scale:0,
// //   duration:1.5,
// //   opacity:0,
// //   scrollTrigger:{
// //       trigger:".service_partner_data",
// //       scroller:"body",
// //       markers:true,
// //       start:"top 60%",
// //   }
// // })







