var swiper = new Swiper(".mySwiper", {

    spaceBetween: 30,   // Space between the slides
    slidesPerView:1,
    breakpoints: {
      // For screens smaller than 640px (mobile)
      640: {
        slidesPerView: 1, // Show 1 slide per view on small screens
      },
      // For screens 640px and above (tablets and larger)
      768: {
        slidesPerView: 2, // Show 2 slides per view on medium screens
      },
      1024: {
        slidesPerView: 2, // Show 2 slides per view on larger screens
      },
    } })



  var swiper2 = new Swiper(".sliderSwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


  AOS.init();