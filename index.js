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
const heading = document.createElement("h1");
heading.textContent = "DOM Manipulation";
mainEl.appendChild(heading)
// mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

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
  // clickedLink.classList.toggle('active'); // unnecessary anymore since we are clearing all active states and setting it only on the clicked link.
  
  //* Log the content of the <a> to verify the handler is working.
  console.log("Link Clicked: ", clickedLink.textContent);
  
  //* The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  // Remove the 'active' class from all links
  topMenuLinks.forEach(link => link.classList.remove('active'));
  
  // add 'Active' class to the clicked link
  clickedLink.classList.add('active');
  

  

  // ====================================================== Part 5: Adding Submenu Interaction =================================================================
  //* If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    // Find the "link" object in menuLinks that matches the clicked link's text
  const linkObject = menuLinks.find(link => link.text === clickedLink.textContent);

    // Safety check: If no matching linkObject is found, exit early
  if(!linkObject) return;
  
    // Check if the linkObject has a subLinks property
  if (linkObject.subLinks) {
    // if subLinks exist, set the submenu's top property to 100% to make it visible
    // subMenuEl.style.top = "100%"; // from question 1.a in part 5
    // console.log(`Sub-menu for ${clickedLink.textContent} is visible.`);

    //* include it in the event listener within the same logic that shows the submenu,
    // Toggle submenu visibility
    if (subMenuEl.style.top === "100%"){
      // If submenu is visible, hide it
      subMenuEl.style.top = "0";

    } else {
      // if submenu is hidden, show it and build the submenu
      subMenuEl.style.top = "100%";
      buildSubmenu(linkObject.subLinks); // Populate the submenu
    }

  // if no subLinks exist, hide the submenu by setting the top property to 0
  } else {
    subMenuEl.style.top = "0";
    // console.log(`No sub-menu for ${clickedLink.textContent}`); // From previous question.
    //*If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
    if (clickedLink.textContent === "about") {
      mainEl.innerHTML = "<h1>About</h1>"
    }
  }
});


//*TODO: The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:

function buildSubmenu(subLinks){
  //* Clear the current contents of subMenuEl.
  subMenuEl.innerHTML = "";

  //* Iterate over the subLinks array, passed as an argument, and for each "link" object:
  subLinks.forEach(link => {
  // Create an <a> element
  const linkEl = document.createElement("a");

  // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
  linkEl.href = link.href;

  // Set the element's content to the value of the text property of the "link" object.
  linkEl.textContent = link.text;

  // Append the new element to the subMenuEl.
  subMenuEl.appendChild(linkEl);
});
};



//*TODO: Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener ('click', (e) => {
  //* The first line of code of the event listener function should call the event object's preventDefault() method.
  e.preventDefault(); // Prevent default behavior of the click event
  
  
  //* The second line of code within the function should immediately return if the element clicked was not an <a> element.
  const clickedEl = e.target;
  if(clickedEl.tagName !== "A") return;

  //* Log the content of the <a> to verify the handler is working.
  console.log("Sub-menu Link clicked: ", clickedEl.textContent);

  //* Next, the event listener should set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = "0";

  //* Remove the active class from each <a> element in topMenuLinks.
  topMenuLinks.forEach (link => link.classList.remove('active'));

  //* Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  mainEl.innerHTML = `<h1>${clickedEl.textContent}</h1>`

});
