const searchInput = document.getElementById("searchInput");
const works = document.querySelectorAll(".work-card");

searchInput.addEventListener("input", function() {

    const keyword = this.value.toLowerCase();

    works.forEach(work => {

        const name = work.dataset.name.toLowerCase();

        if (name.includes(keyword)) {
            work.style.display = "";
        } else {
            work.style.display = "none";
        }

    });

});
