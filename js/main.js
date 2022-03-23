// header
var typed = new Typed(".typewritter", {
    strings: ["Devloper",
    "Designer" ,"Larry danials"],
      
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});



$(document).ready(function() {
  //remove loading page
  $("#loading").fadeOut(2000);
  //set overflow to auto(while loading it will be hidden) 
   $("body").css("overflow","auto");


  //color box
  $("#sideBarToggle").click( function(){
    let settingBoxWidth = $("#setting-box").innerWidth();
    if( $("#sidebar").css("left") == "0px") {
      $("#sidebar").animate({left : `-${settingBoxWidth}`},1000)
    } else {
      $("#sidebar").animate({left : `0px`},1000)
    }
  })

  //determine themes colors
  let customColor = $(".color-item");
  for (i=0 ; i < customColor.length ; i++) {
    let red = Math.random() *255;
    let green = Math.random() *255;
    let blue = Math.random() *255;
  
    customColor.eq(i).css("backgroundColor",`rgb(${red},${green},${blue})`);
  }

  customColor.click(function(){
      let bgColor = $(this).css("backgroundColor");
      $("i").css("color",bgColor);
      $("#custom-color").css("color",bgColor);
  })

   //navbar 
   //const value so you its better to put it outside $(window).scroll to prevent calculating it with each scroll &that minimize time
   const aboutOffsetTop = $("#about").offset().top;

   $(window).scroll(()=>{
    //  console.log(aboutOffsetTop);
     let wScroll = $(window).scrollTop();
    //  console.log(wScroll);
     if( wScroll > aboutOffsetTop - 100 ) { 
       //change background color to black
       $("#main-nav").css("backgroundColor","#000");
       //scroll to top 
       $(".fa-chevron-circle-up").fadeIn(500);
     } else {
       //change background color to transparent
       $("#main-nav").css("backgroundColor","transparent");
      //scroll to top 
       $(".fa-chevron-circle-up").fadeOut(500);
     }

   })

     //scroll to top fn
   $(".fa-chevron-circle-up").click( () => {
     $("html,body").animate({scrollTop : 0},2500)
   })


   //scroll to section whene click on link 

   $("a").click( function () {
     let aHref = $(this).attr("href");
    //  console.log(aHref);
     let sectionOffset = $(aHref).offset().top;
    //  console.log(sectionOffset);
    $(" html , body ").animate(
      {
      scrollTop : sectionOffset - 50
      },
      1000
      )
   })
    //counter
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) { 
          localStart=localStart+900;
          counters[id].innerHTML = localStart;
        }
      }, 0.005);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }


    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      },0.0000005);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
//portfolio filter 

 $(".filter-item").click(function(){
  let itemId = $(this).attr("data-filter");
  if( itemId == "all") {
      $(".item").show(10);      
  } else {
    $(".item").not(`.${itemId}`).hide(10);
    
    $(".item").filter(`.${itemId}`).show(10);
  }

})

 $(".filter-item").click(function(){
     $(this).addClass('active').siblings().removeClass('active');
})




    //slider 
  $('.skitter-large').skitter();
  });

    $('.owl-carousel').owlCarousel({
      margin:20,
      loop:true,
      autoplay:true,
      autoplayTimeout:500,
      dotsEach:true
      
    });


   
