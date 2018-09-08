var viewportHeight = $(window).height();  
var viewportWidth = $(window).width();

// var heightNavBar = document.getElementById('navbar-main').offsetHeight;
// console.log('La altura del icono menu es de:',heightNavBar);

// var heightMainTitle = viewportHeight-2*heightNavBar;
// document.getElementById('home-section1-container').setAttribute("style",`height:${viewportHeight}px`);
// document.getElementById('footer-main-page').setAttribute("style",`height:${heightNavBar}px`);
// document.getElementById('new').setAttribute("style",`height:${viewportHeight}px`);
// document.getElementById('search-form').setAttribute("style",`height:${viewportHeight-50}px;${viewportWidth}px; min-height: 300px; border: 2px solid red;`);
// document.getElementById('footer-search-page').setAttribute("style",`border:2px solid yellow;height: 50px;`);



// we force the scroll move to top when page is reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



// $( window ).resize(() => {
//   viewportHeight = $(window).height(); 
//   heightMainTitle = viewportHeight-2*heightNavBar;
//   // main section index.hbs
//   document.getElementById('text-banc').setAttribute("style",`height:${heightMainTitle}px`);
//   document.getElementById('footer-main-page').setAttribute("style",`height:${heightNavBar}px`);
  
//   // search section index.hbs
//   // document.getElementById('search-form').setAttribute("style",`height:${viewportHeight-50}px;width: 100vw; min-height: 300px;`);
//   // document.getElementById('footer-search-page').setAttribute("style",`height:50px`);
  
//   // document.getElementById('new').setAttribute("style",`height:${viewportHeight}px`);


// });

// $( window ).resize(function() {
//   viewportHeight = $(window).height(); 
//   heightMainTitle = viewportHeight-2*heightNavBar;
//   document.getElementById('text-banc').setAttribute("style",`height:${heightMainTitle}px`);
//   document.getElementById('footer-main-page').setAttribute("style",`height:${heightNavBar}px`);
//   document.getElementById('new').setAttribute("style",`height:${viewportHeight}px`);


// });



// var linkLogin = document.getElementById("my-login");

// // linkLogin.onclick = function(){
// //   $('#myModal').modal();
// //   // $('#ModalLogin').modal({
// //   //   keyboard: false
// //   // })
// //   // $('#ModalLogin').modal('show');
// //   console.log("we request for the modal");
// // }

// function openModal(){
  
//   $('#ModalLogin').modal('show');
// }    


