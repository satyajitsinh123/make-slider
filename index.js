
let slides = document.querySelectorAll(".slides")
let slideIndex = 0

let showSlides = (index) => {
    slides.forEach((slide, i) => {
        slide.style.display=i===index?"block":"none"
        console.log(slide);
    })
}
showSlides()

let nextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length
    showSlides(slideIndex)
}
let slideInterval = setInterval(nextSlide, 2000)
showSlides(slideIndex)
