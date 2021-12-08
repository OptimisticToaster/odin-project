
// a <p> with red text that says “Hey I’m red!”
// So grab the body, create new p element with attributes, and attach as child to body
const container1 = document.querySelector('body');

const content1 = document.createElement('p');
content1.style.color = 'red';
content1.textContent = 'Hey I\'m red!';

container1.appendChild(content1);

// an <h3> with blue text that says “I’m a blue h3!”
// just like above for the paragraph

const content2 = document.createElement('h3');
content2.style.color = 'blue';
content2.textContent = 'I\m a blue h3!';

container1.appendChild(content2);

// a <div> with a black border and pink background color with the following elements inside of it:
// just like above for the paragraph

const content3 = document.createElement('div');
content3.style.borderColor = 'black';
content3.style.background = 'pink';

container1.appendChild(content3);

// another <h1> that says “I’m in a div”
// just like above but now attach to the new div

const container2 = document.querySelector('div');

const content4 = document.createElement('h1');
content4.textContent = 'I\m in a div';

container2.appendChild(content4);
    
// a <p> that says “ME TOO!”
// just like above but now attach to the new div

const content5 = document.createElement('p');
content5.textContent = 'ME TOO!';

container2.appendChild(content5);
    
    // Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container1.

