const navLinksElems = document.querySelectorAll(".nav-link");

navLinksElems.forEach(navLinksElem => {
    navLinksElem.addEventListener("click", event => {
        navLinksElems.forEach(linkElem => {
            linkElem.classList.remove("active")
        });
        event.target.classList.add("active");
    })
})