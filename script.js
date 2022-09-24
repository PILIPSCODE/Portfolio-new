const loadingDulu = document.querySelector(".loading-dulu");
const container = document.querySelector(".container");
setTimeout(() => {
  loadingDulu.classList.add("no");
  setTimeout(() => {
    loadingDulu.style.display = "none";
  }, 1900);
}, 5300);





gsap.from('.nav',{duration:1,y:-50,opacity:0,delay:6.3, ease: 'back'})
gsap.from('.imgg',{duration:1,x:50,opacity:0,delay:6.3, ease: 'back'})
gsap.from('.myName',{duration:1,y:30,opacity:0,delay:6.3, ease: 'back'})
gsap.from('.haha',{duration:1,y:30,opacity:0,delay:6.5, ease: 'back'})
gsap.from('.wkwk',{duration:1,y:30,opacity:0,delay:6.7, ease: 'back'})
gsap.from('.cv',{duration:1,y:30,opacity:0,delay:6.9, ease: 'back'})


function delay(n){
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done()
        },n);
    })
}

transition = () => {
     let timeline = gsap.timeline();

  timeline.to(".page-transition", {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease:"Expo.easeInOut"
  });

  timeline.to(".page-transition", {
      duration: 1,
      width: "100%",
      left: "100%",
      ease:"Expo.easeInOut",
      delay:0.3,
  });

  timeline.set(".page-transition", {
      left: "-100%"
  });
}


mainAnimation = () => {
    var timeline = gsap.timeline();
    timeline.from(".frontend h1,.Backend h1,.Tools h1,.Next-Learn h1", {
        duration: 1,
        x: 10,
        opacity: 0,
        stagger: {
            amount: .4
        },
        delay: .8
    });

    const anim = document.querySelectorAll('.anim')
    timeline.from(anim[0], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[1], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[2], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[3], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[4], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[5], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[6], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[7], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[8], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[9], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[10], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
    timeline.from(anim[11], {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: {
            amount: .4
        },
    });
}

home = () => {
    var timeline = gsap.timeline();
    timeline.from(".myName", {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: .3,
        ease:'back'
    });
    timeline.from(".haha", {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: .3,
        ease:'back'
    });
    timeline.from(".wkwk", {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: .3,
        ease:'back'
    });
    timeline.from('.cv',{
        duration:1,y:30,opacity:0,ease: 'back'
    })
    timeline.from(".imgg", {
        duration: 1,
        x: 30,
        opacity: 0,

        ease:'back'
    });
}
Project =() => {
    var timeline = gsap.timeline();
    const conproject = document.querySelectorAll('.conproject')
    timeline.from(conproject[0],{
        duration: 1,
        x: 100,
        opacity: 0,
    })
    timeline.from(conproject[1],{
        duration: 1,
        x: -100,
        opacity: 0,
    })
    timeline.from(conproject[2],{
        duration: 1,
        x: 100,
        opacity: 0,
    })
    timeline.from(conproject[3],{
        duration: 1,
        x: -100,
        opacity: 0,
    })
    timeline.from(conproject[4],{
        duration: 1,
        x: 100,
        opacity: 0,
    })
    timeline.from(conproject[5],{
        duration: 1,
        x: -100,
        opacity: 0,
    })
}

FollowMe = () => {
    var timeline = gsap.timeline();
    const sosmed = document.querySelectorAll('.sosmed')

    timeline.from(sosmed[0],{
        duration: 1,
        y: 100,
        delay:0.8,
        opacity: 0,
    })
    timeline.from(sosmed[1],{
        duration: 1,
        y: 100,
        opacity: 0,
    })
    timeline.from(sosmed[2],{
        duration: 1,
        y: 100,
        opacity: 0,
    })
    timeline.from(sosmed[3],{
        duration: 1,
        y: 100,
        opacity: 0,
    })
}

formanim = () => {
    const animform = document.querySelectorAll('.formanim')
    var timeline = gsap.timeline();
    timeline.from(animform[0],{
        duration: 1,
        y: -50,
        opacity: 0,
        delay:0.3
    })
    timeline.from(animform[1],{
        duration: 1,
        y: -50,
        opacity: 0,
        delay:0.5
    })
    timeline.from(animform[2],{
        duration: 1,
        y: -50,
        opacity: 0,
        delay:0.7
    })
    timeline.from('.btncontact',{
        duration:1,
        x:30,
        opacity:0,
        delay:0.9
    })
}
barba.init({
  sync: true,
  transitions: [
      {
          async leave(data){
              const done = this.async();
              transition();
              await delay(1000);
              done();

          },

          async enter (data){
              mainAnimation();
              home()
              Project()
              umur()
              FollowMe()
              formanim()
          },

          async once(data){
              mainAnimation();
              home()
              FollowMe()
              umur()
              Project()
              formanim()
          }
      }
  ]
});

 
function umur() {
  var d1 = "29"
  var m1 = "05"
  var y1 = "2006"
  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var y = y2 - y1;
  const age = document.querySelector('.age');
  age.innerHTML = y
}
umur()


const aboutpilip = document.querySelector('.aboutpilip')
aboutpilip.addEventListener('click',(e) => {
    aboutpilip.style.transfrom = 'translate-x(50px)'
})
