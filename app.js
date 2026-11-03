document.addEventListener("DOMContentLoaded", () => {
    (function () {
        // Images
        const cowImage = document.getElementById('cow');
        const dogImage = document.getElementById('dog');
        const catImage = document.getElementById('cat');

        // Buttons
        const hideCowBtn = document.getElementById('hide-cow-btn');
        const hideCatBtn = document.getElementById('hide-cat-btn');
        const hideDogBtn = document.getElementById('hide-dog-btn');
        const showCowBtn = document.getElementById('show-cow-btn');
        const showCatBtn = document.getElementById('show-cat-btn');
        const showDogBtn = document.getElementById('show-dog-btn');

        // Hide by default
        cowImage.classList.add("hidden");
        catImage.classList.add("hidden");
        dogImage.classList.add("hidden");
        hideCowBtn.classList.add("hidden");
        hideCatBtn.classList.add("hidden");
        hideDogBtn.classList.add("hidden");

        // Button click event listeners
        showCowBtn.addEventListener("click", () => {showAnimal("Cow");});
        showDogBtn.addEventListener("click", () => {showAnimal("Dog");});
        showCatBtn.addEventListener("click", () => {showAnimal("Cat");});

        hideCowBtn.addEventListener("click", () => {hideAnimal("Cow");});
        hideDogBtn.addEventListener("click", () => {hideAnimal("Dog");});
        hideCatBtn.addEventListener("click", () => {hideAnimal("Cat");});

        function showAnimal(animal) {
            if (animal == "Cow"){
                cowImage.classList.remove("hidden");
                hideCowBtn.classList.remove("hidden");
            } else if (animal === "Cat"){
                catImage.classList.remove("hidden");
                hideCatBtn.classList.remove("hidden");
            } else if (animal === "Dog"){
                dogImage.classList.remove("hidden");
                hideDogBtn.classList.remove("hidden");
            }
        };

        function hideAnimal(animal) {
            if (animal == "Cow"){
                cowImage.classList.add("hidden");
                hideCowBtn.classList.add("hidden");
            } else if (animal === "Cat"){
                catImage.classList.add("hidden");
                hideCatBtn.classList.add("hidden");
            } else if (animal === "Dog"){
                dogImage.classList.add("hidden");
                hideDogBtn.classList.add("hidden");
            }
        };
    })();
});