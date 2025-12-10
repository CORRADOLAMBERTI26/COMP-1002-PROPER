// IMPORTANT: Before you start, be sure to customize all href="" values within the server include PHP files so your site navigation works

// STEP 1: Begin by adding a SCRIPT element to 'red/gallery.php' that refers to this EXTERNAL JavaScript File
// (Done inside gallery.html)


// STEP 2a: Grab the UL for #blockGallery and assign it to the variable 'blockGallery' - but use document.getElementById this time
let blockGallery = document.getElementById("blockGallery");


// STEP 2b: Create an array called 'blockLinks' to contain all the A elements inside the above variable, 'blockGallery' - but use querySelectorAll instead of getElementsByTagName
let blockLinks = blockGallery.querySelectorAll("a");


// STEP 2c: Make a loop that iterates through each item in the 'blockLinks' array that you just created above
for (let i = 0; i < blockLinks.length; i++) {

    // STEP 3a: For each one of the A elements inside the array 'blockLinks', attach an onclick attribute that calls an anonymous function
    blockLinks[i].onclick = function () {

        // STEP 4a: For the link that was clicked, capture the value of the href attribute as a variable called 'blockHref'
        let blockHref = this.getAttribute("href");

        // STEP 4b: Grab the IMG element just below the UL containing the links to each of the block images with the appropriate ID (look at the HTML in 'red/gallery.php') and assign it to a variable of the same name - use document.getElementById below
        let blockImg = document.getElementById("blockImg");

        // STEP 4c: Change the src attribute of the above IMG element (use the variable name) using the setAttribute method, using the above 'blockHref' variable
        blockImg.setAttribute("src", blockHref);

        // STEP 5a: Obtain the title attribute of the link clicked (referred to as 'this') and set it as the value for a new variable called 'blockCaption'
        // *** UPDATED: Use the link text (1x1, 1x2, etc.) to generate “This is a X block.” ***
        let blockSize = this.textContent;
        let blockCaption = `This is a ${blockSize} block.`;

        // STEP 5b: Create another variable called 'blockCaptionParagraph' that represents the P element with the id 'blockCaption' - use either getElementById or querySelector
        let blockCaptionParagraph = document.getElementById("blockCaption");

        // STEP 5c: Set the text of that paragraph to be equal to the value of the title attribute for the link clicked
        blockCaptionParagraph.textContent = blockCaption;

        // STEP 3c: Cancel the default behaviour of each hyperlink (which is to follow the href)
        return false;

    }; // STEP 3b: End the 'onclick' event anonymous function

} // STEP 2d: End the loop through the 'blockLinks' array
