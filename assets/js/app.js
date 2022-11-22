let bannerNumber = document.querySelector('.banner-stats h1');
const bannerStatsItems = {
    jobs:document.querySelector('.banner-stats .stats--jobs h1'),
    projects:document.querySelector('.banner-stats .stats--projects h1'),
    freelancers:document.querySelector('.banner-stats .stats--freelancers h1'),
}
increaseNumber(0,3500,0,bannerStatsItems.jobs);
increaseNumber(0,1150,1,bannerStatsItems.projects);
increaseNumber(0,350,10,bannerStatsItems.freelancers);


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2.2,
    spaceBetween: 30,
     centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  //
 

  toggleInnerElement('.header-icon--messages','.header-inbox-box','active')
  toggleInnerElement('.header-extra-item.profile-info','.header-profile-box','active')

 
  

  let startingPosition = window.scrollY;
  console.log(startingPosition)
  document.addEventListener('scroll',()=>{
       if(window.scrollY >  startingPosition){
        startingPosition = window.scrollY
        console.log('show');
        document.querySelector('.app-header').classList.add('disable-sticky--header')
        document.querySelector('.app-header').classList.remove('enable-sticky--header')

       }else{
        console.log('hide');
        startingPosition = window.scrollY
 
        document.querySelector('.app-header').classList.add('enable-sticky--header')
        document.querySelector('.app-header').classList.remove('disable-sticky--header')

       }

  })