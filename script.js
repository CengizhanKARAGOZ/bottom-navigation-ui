const listItems = document.querySelectorAll("li");
const indicator = document.querySelector(".indicator");

function activeLink() {
    listItems.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");

    let index = Array.from(listItems).indexOf(this);
    let position = index * 70; // Her elemanın genişliği 70px
    indicator.style.setProperty("--x", `${position}px`);
}

listItems.forEach((li) => li.addEventListener("click", activeLink));
