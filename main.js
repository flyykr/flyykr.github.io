const dropDownItems = document.querySelectorAll(".dropdown-item");
dropDownItems.forEach((item) => {
    const img = item.querySelector("img");
    if (!img || !img.dataset.social) return;
    img.addEventListener("click", (e) => {
        window.location = img.dataset.social;
    }) 
})