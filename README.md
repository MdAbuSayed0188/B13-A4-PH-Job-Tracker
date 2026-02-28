## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
a).getElementById selects one unique element by ID.
b).getElementsByClassName selects multiple elements by class name and returns a live collection.
c).querySelector selects the first element matching a CSS selector.
d).querySelectorAll selects all elements matching a CSS selector and returns a static NodeList.

### 2. How do you create and insert a new element into the DOM?

Answer: Create a new element using 'document.createElement()', set its content or attributes, and then insert it into the DOM with methods like 'appendChild()' or 'append()'.

### 3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is a process where an event starts at the innermost element and then bubbles up through its parent elements in the DOM tree, allowing parent elements to catch the event.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where you add a single event listener to a parent element to handle events for all of its child elements. It’s useful because it reduces the number of event listeners and makes it easier to handle dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
i).'preventDefault()' stops the browser’s default action for the event (like preventing a form submission).
ii).'stopPropagation()' stops the event from bubbling up or capturing down the DOM tree, preventing parent elements from receiving the event.