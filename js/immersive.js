gsap.registerPlugin(ScrollTrigger);

// console.log(gsap)
// console.log(ScrollTrigger)

const body = document.body
const wrapper = document.getElementById('wrapper')
wrapper.style.backgroundColor = "#FFF6EE"

const volumeSlider = document.getElementById('volume')
const muteButton = document.getElementById('audioControl')
const video = document.getElementById('video')
const mute = document.getElementById('mute')

const muteImg = '/img/multimedia/muted.png'
const unmuteImg = '/img/multimedia/unmuted.png'
const background = '#FFF6EE'


muteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false
        mute.src = unmuteImg
        volumeSlider.value = 0.5
        video.volume = parseFloat(volumeSlider.value)
        console.log('Audio On')
    } else {
        video.muted = true
        volumeSlider.value = 0
        mute.src = muteImg
        console.log('Audio Off')
    }
})

volumeSlider.addEventListener('input', () => {
    if (video.muted) {
        video.muted = false
        mute.src = unmuteImg
        console.log('Audio On')
    }
    video.volume = parseFloat(volumeSlider.value)    
})



gsap.to(wrapper, { backgroundColor: "#FFF6EE" });  // set initial color

gsap.fromTo(wrapper, { backgroundColor: "#FFF6EE" }, {
    scrollTrigger: {
        trigger: ".immersive",
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
    },
    backgroundColor: "#242424"  
});

gsap.fromTo(wrapper, { backgroundColor: "#242424" }, {
    scrollTrigger: {
        trigger: ".immersive",
        scrub: 1,
        start: "bottom center", 
        end: "bottom top",
    },
    backgroundColor: "#FFF6EE"  // back to light
});

