// STEP C: Get the current URL for the page
const currentPage = window.location.href;

// STEP D: Grab all the top-level <a> elements inside the <nav> element at the top of the page (inside the <header> element)
const navLinks = document.querySelectorAll("header nav > ul > li > a");

// STEP E: Create a place to store the href value for each <a> element
let linkHref;

// STEP F: For each <a> element in the NodeList navLinks, compare the href property with the URL for the current page
navLinks.forEach(function (link) {

    // STEP G: Grab the href property of each <a> (element)
    linkHref = link.href;

    // STEP H: Check for a match with the current page
    if (currentPage.includes(linkHref)) {

        // STEP I: They match - so this <a> is the link for the current page
        link.classList.add("current");
    }
});
