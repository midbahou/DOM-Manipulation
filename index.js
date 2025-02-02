// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// ====================================================== Part 1: Getting Started ========================================================================

//* Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
console.log(mainEl);

//* Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";


//* Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");



// ====================================================== Part 2: Creating a Menu Bar ======================================================================

//* Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);

//* Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";


//* Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//* Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");



// ====================================================== Part 3: Adding Menu Buttons =======================================================================

//* Iterate over the entire menuLinks array and for each "link" object:
// for (let i = 0; i < menuLinks.length; i++) {
    //     const element = menuLinks[i];
//     console.log(element);
// }

// Iterate over it using forEach function
menuLinks.forEach(link => {
    //* Create an <a> element.
    const linkEl = document.createElement("a");

    //* On the new element, add an href attribute with its value set to the href property of the "link" object.
    linkEl.setAttribute("href", link.href);
    console.log(linkEl);

    //* Set the new element's content to the value of the text property of the "link" object.
    linkEl.textContent = link.text;

    //* Append the new element to the topMenuEl element.
    topMenuEl.appendChild(linkEl);
});




// ====================================================== R-ALAB 316.3.1: DOM Manipulation (Part Two) =======================================================================

        // ====================================================== Part 3: Creating the Submenu =======================================================================
        
        //*TODO: Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
        const subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);

//*TODO: Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

//*TODO: Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//*TODO: Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

//* Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:
//*TODO: Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

//*TODO: Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";




// ====================================================== Part 4: Adding Menu Interaction =======================================================================