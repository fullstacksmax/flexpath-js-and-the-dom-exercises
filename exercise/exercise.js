/*
Exercise 1: Accessing Elements with getElementById

Description: 

Select the element with the ID 'main-title' and change its text content 
to "Welcome to the DOM Manipulation Page".
*/

let title = document.getElementById('main-title')
title.textContent = "Welcome to the DOM Manipulation Page"

console.log("Making a change!");

/*
Exercise 2: Accessing Elements with querySelector

Description: 

Use querySelector to select the first <p> element with the 
class 'intro-text' and change its color to blue.
*/

let isBlue = document.querySelector('p.intro-text');
isBlue.setAttribute("style", "color: blue")

/*
Exercise 3: Accessing Multiple Elements with querySelectorAll

Description: 

Use querySelectorAll to select all elements with the class 'article-text' and 
set their font size to 18px.
*/

let font18 = document.querySelectorAll('.article-text');
font18.forEach((element) => {
	//element.setAttribute("style" , "color: red");
	//element.setAttribute("font" , "size: 18px");
	element.style.fontSize = "48px";
});



/*
Exercise 4: Navigating the DOM Tree

Description: 

Select the element with ID 'introduction' and access its parent node. 
Log the parent node's tag name to the console.
*/

let introParent = document.getElementById('introduction').parentNode;
console.log("Parent Node Tag:", introParent.tagName);


/*
Exercise 5: Accessing Child Nodes

Description: 

Select the <ul> with ID 'item-list' and log the number of 
its child elements to the console.
*/

let listChildren = document.querySelector('ul' , 'item-list').childNodes;

	console.log(listChildren.length);
	
	/*listChildren.forEach((e) => {
		console.log(e.length);
	});*/

/*
Exercise 6: Updating Inner HTML

Description: 

Change the inner HTML of the element with ID 'introduction' to 
include a new paragraph saying "This content has been updated!".
*/

let newInner = document.getElementById('introduction');
	newInner.innerHTML += ("<p>This content has been updated!</p>");


/*Exercise 7: Changing Attributes with setAttribute

Description: 

Assume there's an image with ID 'main-image' in your HTML. 
Change its src attribute to point "image2.png". */


let image = document.getElementById('main-image');
	image.setAttribute("src", "./image2.png");

/*
Exercise 8: Adding an Event Listener

Description: 

Add an event listener to the button with ID 'alert-button' that 
shows an alert with the message "Button Clicked!" when clicked.
*/

 let button = document.getElementById('alert-button');
	/*button.addEventListener(
	"click",
	() => {
	alert("Button Clicked!")
	}); */
	
	button.addEventListener(
	"click",
	clicked)
	
	function clicked() {
		alert("Button Clicked!");
	}
	


/*Exercise 9: Removing an Event Listener

Description: 

Remove the code from Exercise 8.

In this file, add an event listener to the button with ID 'alert-button' that 
shows an alert when clicked. 

Then, remove the event listener so that clicking the button no longer 
shows the alert after 5 seconds. */


/*let button = document.getElementById('alert-button');
	button.addEventListener(
	"click",
	clicked)
	
	function clicked() {
		alert("Button Clicked!");
	}*/
	setTimeout(() => {
		button.removeEventListener("click", clicked);
	} , 5000);
	

/*
Exercise 10: Handling Keyboard Events

Description: 

Add an event listener to the document that logs the 
key and code of any key pressed by the user.
*/

let whatKey = document.addEventListener(
	"keyup",
	(e) => {
		console.log(e.key, e.code)
	}
	);

/*
Exercise 11: Event Propagation

Description: 

Add click event listeners to the <section> with ID 'interactive' and to 
the <button> with ID 'color-button'.

In each event handler, log a message indicating which element was clicked. 

Observe event bubbling.
*/

let bubbleTest = document.querySelector('#interactive');
let bubbleTest2 = document.querySelector('#color-button')
	bubbleTest.addEventListener(
	"click", 
	(e) => {
	console.log("interactive button clicked");
	});
	
	/*bubbleTest2.addEventListener(
	"click", 
	(e) => {
	console.log("color button clicked");
	});*/





/*
Exercise 12: Stopping Event Propagation

Description: 

Modify the previous exercise to prevent the click event on 
the button from bubbling up to the section.
*/
/* bubbleTest2.addEventListener(
	"click", 
	(e) => {
	console.log("color button clicked");
	event.stopPropagation();
	}); */


/*
Exercise 13: Using console.log for Debugging

Description: 

Inside the event listener for the color-button, 
log the current background color of the button before changing 
it to light green.
*/

bubbleTest2.addEventListener(
	"click", 
	(e) => {
	console.log("color button clicked");
	console.log(`button color is ${bubbleTest2.style.backgroundColor}`);
	bubbleTest2.style.backgroundColor = "lightgreen";
	e.stopPropagation();
	});
/*
Exercise 14: Creating and Appending New Elements

Description: 

Create a new <li> element with the text "Item 4" and append it to 
the <ul> with ID 'item-list'.
*/

let newList = document.getElementById('item-list');
	newList.innerHTML += "<li>Item 4 </li>"
	
let textContent = document.createElement("li")
	textContent.innerHTML = "item 5"
	newList.appendChild(textContent);

/*
Exercise 15: Removing Elements from the DOM

Description: 

Remove the first <li> element from the <ul> with ID 'item-list'.
*/
let garbage = newList.firstElementChild;
newList.removeChild(garbage);
/*
Exercise 16: Using classList.add

Description: 

Add a class 'highlight' to all <p> elements inside the 
section with ID 'content'.
*/


let highlight = document.querySelectorAll("#content p")
	highlight.forEach((e) => {
		e.classList.add('highlight');
	});

/*
Exercise 17: Using classList.toggle

Description: 

Add a click event listener to the button with ID 'color-button' that 
toggles the class 'active' on itself.
*/

let colorButton = document.getElementById('color-button');
	colorButton.addEventListener(
		"click",
		() => {
			colorButton.classList.toggle('active');
		})

/*
Exercise 18: Preventing Default Behavior

Description: 

Add a submit event listener to the form with ID 'input-form' that 
prevents the form from submitting and logs the input value to the console.
*/

let inputForm = document.getElementById('input-form');
	inputForm.addEventListener(
	"submit",
	((e) => {
		e.preventDefault();
		inputText = document.getElementById('input-text');
		console.log(inputText.value);
	}))
		
		

/*
Exercise 19: Simple Drag and Drop

Description: 

Make the element with ID 'drag-source' draggable and implement 
drag and drop functionality to move it to the element with ID 'drop-target'.
*/

let dragStart = document.getElementById('drag-source')
let dragEnd = document.getElementById('drop-target')
	dragStart.draggable = "true";
	
	dragEnd.addEventListener(
	"dragenter",
	(e) => {
		e.preventDefault()
	})
	
	dragEnd.addEventListener(
	"dragover",
	(e) => {
		e.preventDefault()
	})
	
	dragStart.addEventListener(
	"dragstart",
	(e) => {
		e.dataTransfer.setData("text/plain", e.target.id)
		e.dataTransfer.setData("custom/message", "this is a great message")
	})
	
	dragEnd.addEventListener(
	"drop",
	(e) => {
	e.preventDefault()
	const data = e.dataTransfer.getData("text/plain", e.target.innerText)
	const draggedElement = document.getElementById(data);
	dragEnd.appendChild(draggedElement);
	const myMessage = e.dataTransfer.getData("custom/message")
	console.log(myMessage);
	});
	
	

/*
Exercise 20: Using dataTransfer in Drag and Drop

Description: 

Use event.dataTransfer to pass custom data during the drag and drop operation 
in the previous exercise. 

For example, pass a message and log it when the drop occurs.
*/

// see exercise 20


/*
Exercise 21: Cloning Nodes

Description: 

Clone the element with ID 'main-title' and 
append the clone to the <footer> element.
*/

let original = document.getElementById('main-title')
let clone = original.cloneNode(true)
let theFoot = document.querySelector('footer')
theFoot.appendChild(clone);
/*
Exercise 22: Modifying Styles with JavaScript

Description: 

Change the background color of the <body> when the 
user moves the mouse over the <header> element.
*/

let header = document.querySelector('header')
const body = document.querySelector('body')

header.addEventListener(
	"mouseover",
	(e) => {
		//const body = document.querySelector('body')
		body.style.backgroundColor = 'yellow'
	}
)
header.addEventListener(
	"mouseleave",
	(e) => {
		body.style.backgroundColor = ''
	}
)

/*
Exercise 23: Debouncing Function Calls

Description: 

Implement a debounced resize event handler that logs the 
new window size after the user stops resizing the browser window for 
500 milliseconds.
*/

window.addEventListener(
	"resize",
	() => {
		setTimeout(() => {
		console.log(`the current window size is ${window.innerWidth} x ${window.innerHeight}`)

		}, 500);
	}
)

/*
Exercise 24: Optimizing DOM Manipulations

Description: 

Add 100 new list items to ID 'item-list' efficiently by 
using a DocumentFragment. You can create one by using:

`document.createDocumentFragment()`
*/

let i = 6;

const fragment = document.createDocumentFragment();
const numbers = [];
while(i <= 105) {
	numbers.push(i)
	i += 1;
	console.log(i);
}

numbers.forEach((e) => {
	const li = document.createElement("li");
	li.textContent = "item " + numbers[e-6];
	fragment.appendChild(li);
	console.log("numbers for each")
})

newList.appendChild(fragment);

console.log(fragment);



/*
Exercise 25: Using Event Delegation

Description: 

Instead of adding event listeners to each <li> in 'item-list', 
add a single event listener to 'item-list' that logs the 
text of the clicked list item.
*/

let megaList = document.querySelectorAll('#item-list li')

megaList.forEach((e) => {
	e.addEventListener(
		"click",
		() => {
		console.log(e.innerText)
		}
	)
})