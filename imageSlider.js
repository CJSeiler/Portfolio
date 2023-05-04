const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // determine the offset based on if its a next or prev button
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        // find closest carousel to button clicked
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]");

        // select the active slide
        const activeSlide = slides.querySelector("[data-active]");
        // change the index according to the offset
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        
        // make slider continous
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // add active dataset to slide at new index
        slides.children[newIndex].dataset.active = true;
        // remove active dataset from previous slide
        delete activeSlide.dataset.active;
    })
});