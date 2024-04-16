function loaderAnimation(){

  gsap.to("body",{
    backgroundColor: "white",
    overflow: "hidden",
  });

  let tl = gsap.timeline();

  tl.from("#page1",{
    opacity: 0,
  });
  tl.from("#page1",{
    transform: "scaleX(0.7) scaleY(0.1)",
    borderRadius: "50px",
    duration: 2,
    ease: "expo.out"
  });
  tl.to("body",{
    backgroundColor: "#111",
    duration:.8,
  },"-=1.5");
  tl.from("nav",{
    opacity: 0,
  },"-=1");
  tl.from("nav #logo, nav #menu .elems, nav #btn, nav #burger-menu",{
    opacity: 0,
    y: -100,
    // duration: .2,
    stagger: .02,
  },"-=1");
  tl.from("#page1 h1 span",{
    y: 155,
    stagger: {
      amount: .25,
    }
  },"-=.5")
  tl.from("#page1-para h4",{
    y: 100,
    opacity: 0,
    duration : .5,
  },"-=.8");
  tl.from("#marquee-effect",{
    opacity: 0,
    duration : .01,
  });
  tl.from("#page2",{
    opacity:0,
    duration: .01,
  });
  tl.to("body",{
    overflow: "visible",
    duration:.01,
  },"-=1.5");
}
function navHoverAnimation() {
  let tl = gsap.timeline();

  let nav = document.querySelector("#nav-container");

  gsap.to(".menu-elem h5 span", {
    y: 30,
  });

  nav.addEventListener("mouseenter", () => {
    tl.to("#nav-container", {
      height: "16vw",
      duration: 0.3,
    });
    tl.to(".menu-elem h5", {
      display: "initial",
      duration: 0.1,
    });
    tl.to(
      ".menu-elem h5 span",
      {
        y: 0,
        stagger: {
          amount: 0.6,
        },
      },
      "-=.45"
    );
  });

  nav.addEventListener("mouseleave", () => {
    tl.to(".menu-elem h5 span", {
      y: 30,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".menu-elem h5", {
      display: "none",
      duration: 0.01,
    });
    tl.to("#nav-container",{
        height: "6vw",
        duration: 0.3,
      },"-=.7");
  });
}
function hamburgerMenu(){
  let hamMenu = document.querySelector("nav #burger-menu");

    let menu = "closed";

  hamMenu.addEventListener("click",function(){
    
    if(menu === "closed"){

      menu = "open"
      gsap.to(hamMenu.children[0],{
        transform: "translateY(5px) translateX(-50%) rotate(45deg)",
        duration: .3,
      });
      gsap.to(hamMenu.children[1],{
        transform: "translateY(-5px) translateX(-50%) rotate(-45deg)",
        duration: .5,
      });
      
    } else if (menu === "open"){

      menu = "closed"
      gsap.to(hamMenu.children[0],{
        transform: "translateY(0) translateX(-50%) rotate(179.99deg)",
        duration: .3,
      });
      gsap.to(hamMenu.children[1],{
        transform: "translateY(0) translateX(-50%) rotate(-179.99deg)",
        duration: .3,
      });
      
    }
    
  });

}
function page2ImgHoverAnimation(){
      
    let rightSec = document.querySelectorAll("#right-sec .sec");

    rightSec.forEach((el) => {
      el.addEventListener("mousemove",function(evt){
        let hoverImg = el.children[0];
        gsap.to(hoverImg,{
          duration: .3,
          x: evt.x - el.getBoundingClientRect().x,
          y: evt.y - el.getBoundingClientRect().y - 25,
        });
      });
    });

    rightSec.forEach((el) => {
      el.addEventListener("mouseenter",function(evt){
        let hoverImg = el.children[0];
        gsap.to(hoverImg,{
          scale: 1,
        });
      });
    });

    rightSec.forEach((el) => {
      el.addEventListener("mouseleave",function(evt){
        let hoverImg = el.children[0];
        gsap.to(hoverImg,{
          scale: 0,
        });
      });
    });
}
function page3VideoAnimation(){

  let playBtn = document.querySelector("#page3-center svg");
  let vidContainer = document.querySelector("#page3 #video-container");
  let mainVideo = document.querySelector("#page3 #video-container video");


  gsap.to("#page3-center h5",{
      y:10,
      opacity:0,
  });

  playBtn.addEventListener("mouseenter",()=>{
    gsap.to("#page3-center h5",{
      y:0,
      opacity:1,
      duration: .4,
    });
  });

  playBtn.addEventListener("mouseleave",()=>{
    gsap.to("#page3-center h5",{
      y:10,
      opacity:0,
      duration: .4,
    });
  });


  let tl = gsap.timeline();

  playBtn.addEventListener("click",()=>{
      mainVideo.play();
      document.body.style.overflow =  "hidden";

      tl.to(vidContainer,{
        opacity:1,
        height: "10%",
        duration: .3,
      });
      tl.to(vidContainer,{
        bottom: "0%",
        borderRadius: 0,
        height: "100%",
        width: "100%",
        delay: .1,
        duration: 1,
      });
  });

  vidContainer.addEventListener("click",()=>{
    mainVideo.pause();
    document.body.style.overflow =  "auto";

    tl.to(vidContainer,{
      opacity: 0,
      duration: .5,
    });
    tl.to(vidContainer,{
      height: ".1%",
      bottom:"25%",
      width:"75%",
      borderRadius: "1rem",
      duration: .1,
    });


  });
}
function page4FundingBox(){
  let fundingData = [
    {total: "$500M", description : "In funding secured owning to our designs", number : "/001"},
    {total: "+1 million", description : "Increase in customer base", number : "/002"},
    {total: "1 000 000+", description : "Of active marketplace users", number : "/003"},
    {total: "25 million", description : "Monthly E-commerce visits", number : "/004"},
    {total: "+300%", description : "Increase in sign-up conversion rate", number : "/005"},
    {total: "+42%", description : "Increase in the app's retention rate", number : "/006"},
  ];

  let funding = document.querySelector("#page4-funding");
  let fundingBox = "";
  fundingData.forEach((elm)=>{
    fundingBox += `<div class="funding  bg-gray-100 w-full sm:w-[45%] lg:w-[32.5%] p-[2.5vh] md:p-[2vw] flex flex-col justify-between">\n
                        <h1 class="text-[5vh] md:text-[4.2vw] lg:text-[4.5vw] mb-[.6vw] lg:mb-[1vw] tracking-tighter">${elm.total}</h1>\n
                        <p class="text-[1.8vh] md:text-[1.5vw] lg:text-[.9vw] font-semibold tracking-tighter lg:mb-[5.8vw] md:mb-[12vw] mb-[12vh] text-gray-600">${elm.description}</p>\n
                        <h6 class="text-[1.5vh] md:text-[1.7vw] lg:text-[1vw] text-gray-400">${elm.number}</h6>\n
                       </div>\n`;
  });
  funding.innerHTML = fundingBox;
}
function page4VidHoverPlay(){
 
  let hoverArea = document.querySelectorAll("#page4-hover .hover-right");

  
  hoverArea.forEach((area)=>{


      area.addEventListener("mousemove",function(evt){
        gsap.to(area.children[0],{
          left: evt.x - area.getBoundingClientRect().x,
          top: evt.y - area.getBoundingClientRect().y,
          duration: .4,
        });
      });

      area.addEventListener("mouseenter",function(){
        area.children[1].play();

        gsap.to(area.children[1],{
          opacity:1,
          duration: .5,
        });

        gsap.to(area.children[0],{
          scale: 1,
          zIndex: 2,
          duration: .2,
        });
      });

      area.addEventListener("mouseleave",function(){
        gsap.to(area.children[1],{
          opacity: 0,
          duration: .5,
        });

        gsap.to(area.children[0],{
          scale: 0,
          duration: .2,
        });

        area.children[1].pause();
        setTimeout(function(){
          area.children[1].currentTime = 0;

        },450);

      });
      
  });


}
function page4BtmVidPlay(){

  let btmHoverArea = document.querySelectorAll("#page4-bottom-hover .btm-hover");

  btmHoverArea.forEach((area)=>{

    let btmVid = area.children[1].children[0];
    let para = area.children[0].children[1];


    area.addEventListener("mouseenter",function(){
      
      btmVid.play();

      gsap.to(btmVid,{
        opacity: 1,
        duration: .4,
      });

      gsap.to(area.children[1],{
        height: "75%",
        duration: .3,
      });

      gsap.to(para,{
        opacity:0,
        duration: .2,
      });

    });

    area.addEventListener("mouseleave",function(){
      
      gsap.to(btmVid,{
        opacity: 0,
        duration: .3,
      });

      gsap.to(area.children[1],{
        height: "40%",
        duration: .4,
      });

      gsap.to(para,{
        opacity:1,
        duration: .2,
      });

      btmVid.pause();
        setTimeout(function(){
          btmVid.currentTime = 0;

        },250);

    });
    
    
    

  });

}
function page5HoverEffect(){

  // page 5 head
  let page5DesignInfo = document.querySelectorAll(".design-info");



  page5DesignInfo.forEach((designInfo)=>{

    let infoHead = designInfo.children[0].children[0].children[0];
    let arrowHead = infoHead.children[0].children[0];
    let bodyOpen = designInfo.children[0].hasAttribute("open");
    
    if(bodyOpen === true){

      designInfo.style.borderColor = "white";
      gsap.to(arrowHead,{
        transform: "rotate(-179.99deg)",
      });

    }

    infoHead.addEventListener("click",function(){


      
      if(bodyOpen === false){

        bodyOpen = true;

        gsap.to(arrowHead,{
          transform: "rotate(-179.99deg)",
        });
        gsap.to(designInfo,{
          borderColor : "white",
          duration: .2,
        });

      } else if(bodyOpen === true) {

        bodyOpen = false;

        gsap.to(arrowHead,{
          transform: "rotate(0deg)",
        });
        gsap.to(designInfo,{
          borderColor : "#4b5563",
          duration: .2,
        });
      }

    });
  });


  // page 5 body
  let page5InfoBody = document.querySelectorAll(".design-info .info-all");

  page5InfoBody.forEach((infoBody)=>{

    let lefty = infoBody.children[1];
    let righty = infoBody.children[3];

    let bodyHover = infoBody.children[0];

    infoBody.addEventListener("mouseenter",function(){


      gsap.to(lefty,{
        transform: "translateX(1vw)",
        duration: .3,
      });
      gsap.to(righty,{
        transform: "translateX(-1vw)",
        duration: .3,
      });



      let tl = gsap.timeline();

      tl.to(bodyHover,{
        top: "-100%",
        duration: .001,
      });
      tl.to(bodyHover,{
        top: 0,
        duration: .3,
      });

    });

    infoBody.addEventListener("mouseleave",function(){

      gsap.to(lefty,{
        transform: "translateX(0)",
        duration: .3,
      });
      gsap.to(righty,{
        transform: "translateX(0)",
        duration: .3,
      });

      let tl = gsap.timeline();

      tl.to(bodyHover,{
        top: "100%",
        duration: .3,
      });
      tl.to(bodyHover,{
        top: "-100%",
        duration: .001,
      });

    });


  });


}
function page6Trigger(){
  gsap.from("#page6-scroll .sec-body h4",{
    x: 0,
    scrollTrigger:{
      trigger: "#page6-scroll .sec-body",
      scroller: "body",
      start: "top 80%",
      end: "top -50%",
      scrub: true,
    }
  });

}


loaderAnimation()
page2ImgHoverAnimation();
page3VideoAnimation();
page4FundingBox();
page4VidHoverPlay();
page4BtmVidPlay();
page5HoverEffect();
page6Trigger();



function pcWidth(){
  let width = window.innerWidth;
  if(width >= 1024){
      navHoverAnimation();
  } else{
    hamburgerMenu();
  }
}
pcWidth();