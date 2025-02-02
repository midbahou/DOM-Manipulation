// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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
        
//*: Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);

//* Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

//* Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//* Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

//*TODO: Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:
//* Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

//* Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";




// ====================================================== Part 4: Adding Menu Interaction =======================================================================

//* Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");

//* Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', (e) => {
    //* The first line of code of the event listener function should call the event object's preventDefault() method.
    e.preventDefault(); // Prevent default behavior of the click event

    //* The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if(e.target.tagName !== "A") return; // If the clicked element is not a link (<a>), so stop here

    //* The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
    // reference to the clicked <a> element
    const clickedLink = e.target;

    // Toggle the 'active' class: add it if it's not there, remove it if it is
    // clickedLink.classList.toggle('active'); // unnecessary anymore since I am clearing all active states and setting it only on the clicked link.

    //* Log the content of the <a> to verify the handler is working.
    console.log("Link Clicked: ", clickedLink.textContent);

    //* The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    // Remove the 'active' class from all links
    topMenuLinks.forEach(link => link.classList.remove('active'));

    // add 'Active' class to the clicked link
    clickedLink.classList.add('active');

    // Log to verify
    console.log("Link selected: ", clickedLink.textContent);
    
});