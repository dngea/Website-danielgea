gsap.registerPlugin(ScrollTrigger);

console.log(gsap)
console.log(ScrollTrigger)

const body = document.querySelector('body')

const audioControl = document.getElementById('audioControl')
const video = document.getElementById('video')
const volumeControl = document.getElementById('volume')
const mute = document.getElementById('mute')

const muteImg = '/img/multimedia/muted.png'
const unmuteImg = '/img/multimedia/unmuted.png'
const background = '#FFF6EE'

audioControl.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false
        mute.src = unmuteImg
        console.log('Audio On')
    } else {
        video.muted = true
        mute.src = muteImg
        console.log('Audio Off')
    }
})

volumeControl.addEventListener('input', () => {
    if (video.muted) {
        video.muted = false
        mute.src = unmuteImg
        console.log('Audio On')
        
    }
    video.volume = parseFloat(volumeControl.value)    
})


// Establecer explícitamente el color de fondo inicial en el body
gsap.to("body", { backgroundColor: "#FFF6EE" });  // Establecer el color inicial

// Animación de cambio de color de fondo
gsap.fromTo("body", { backgroundColor: "#FFF6EE" }, {
    scrollTrigger: {
        trigger: ".immersive",
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
    },
    backgroundColor: "#242424"  // Cambia a gris al hacer scroll
});

gsap.fromTo("body", { backgroundColor: "#242424" }, {
    scrollTrigger: {
        trigger: ".immersive",
        scrub: 1,
        start: "bottom center", // Comienza en el centro de .immersive
        end: "bottom top",
    },
    backgroundColor: "#FFF6EE"  // Vuelve a #FFF6EE
});