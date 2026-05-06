 
        const hamburger = document.querySelector(".hamburger");
        const nav1Links2 = document.querySelector(".nav1-links2");

        hamburger.addEventListener("click", () => {
            nav1Links2.classList.toggle("active");
        });
        