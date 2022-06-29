declare module 'svelte-carousel' {
    interface CarouselInterface {
        time?: string
    }

    class Carousel implements CarouselInterface { }

    export default Carousel
}