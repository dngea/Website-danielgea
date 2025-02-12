Vue.component('animated-image', {
    template: `
        <div class="about__img"
             @mousemove="handleMouseMove"
             @mouseenter="handleMouseEnter"
             @mouseleave="handleMouseLeave"
             ref="aboutImg">
            <img :style="imgStyle" :src="dataImage" alt="">
        </div>`,
    
    props: ['dataImage'],
    
    data() {
        return {
            width: 0,
            height: 0,
            mouseX: 0,
            mouseY: 0,
            mouseLeaveDelay: null,
        };
    },
    
    computed: {
        mousePX() {
            return this.mouseX / this.width;
        },
        mousePY() {
            return this.mouseY / this.height;
        },
        imgStyle() {
            const rX = this.mousePX * 0; // Ajusta la sensibilidad de rotación
            const rY = this.mousePY * 0; // Ajusta la sensibilidad de rotación
            return {
                transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
            };
        },
    },
    
    mounted() {
        this.width = this.$refs.aboutImg.offsetWidth;
        this.height = this.$refs.aboutImg.offsetHeight;
    },
    
    methods: {
        handleMouseMove(e) {
            this.mouseX = e.pageX - this.$refs.aboutImg.offsetLeft - this.width / 2;
            this.mouseY = e.pageY - this.$refs.aboutImg.offsetTop - this.height / 2;
        },
        handleMouseEnter() {
            clearTimeout(this.mouseLeaveDelay);
        },
        handleMouseLeave() {
            this.mouseLeaveDelay = setTimeout(() => {
                this.mouseX = 0;
                this.mouseY = 0;
            }, 1000);
        },
    },
});

const app = new Vue({
    el: '#app'
});
