
document.addEventListener("DOMContentLoaded", function () {

    const statBoxes = document.querySelectorAll(".stat-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                // Number Animation
                let number = entry.target.querySelector("strong");
                let target = parseInt(number.getAttribute("data-target"));
                let count = 0;

                let speed = target / 100;

                function updateCount() {
                    if (count < target) {
                        count += speed;
                        number.innerText = Math.floor(count) + "+";
                        requestAnimationFrame(updateCount);
                    } else {
                        number.innerText = target + "+";
                    }
                }

                updateCount();

                observer.unobserve(entry.target);
            }
        });
    });

    statBoxes.forEach(box => observer.observe(box));

});
