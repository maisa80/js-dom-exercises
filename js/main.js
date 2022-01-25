/**
 * Element selectors
 */

console.log('################### getElementById ################');

let myTitle = document.getElementById('title');
console.log(myTitle);
myTitle.innerHTML = "<i>This title has been changed</i>"; // innerHTML renders HTML tags
// myTitle.innerText = "<i>Some dummy title</i>"; // innerText displays HTML tags as content

console.log(myTitle.innerHTML);


console.log('################### getElementsByClassName ################');
// getElementsByClassName
// returns HTMLCollection
// Similar to an array, having the elements indexed and even has proprties such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

let boxes = document.getElementsByClassName('box');
// console.log(boxes);
// console.log(boxes[0]);
// console.log(boxes[5]);
// console.log(boxes.length);

for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);
    boxes[i].style.margin = "5px";
    // boxes[i].style.backgroundColor = "skyblue";
}


console.log('################### getElementsByTagName ################');
// getElementsByTagName
// returns HTMLCollection
// Similar to an array, having the elements indexed and even has proprties such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

let divElements = document.getElementsByTagName('div');
// console.log(divElements);
// console.log(divElements[0]);
// console.log(divElements[5]);
// console.log(divElements.length);

for (let i = 0; i < divElements.length; i++) {
    console.log(divElements[i]);
    divElements[i].style.borderRadius = "50%";
}



console.log('################### querySelector ################');

let section = document.querySelector('#content section.box')
console.log(section);
section.style.backgroundColor = 'beige';


console.log('################### querySelectorAll ################');
// querySelectorAll
// returns NodeLIst
// Similar to an array, having the elements indexed and even has proprties such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/NodeList

divElements = document.querySelectorAll('div.box')
console.log(divElements);



/**
 * Handle element attributes
 */
console.log('################### HTML attributes ################');
let myLink = document.getElementById('link');
console.log(myLink);
console.log(myLink.href);  // Displays the value of the attribute
myLink.href = "###";       // Manipulates the value of the attribute
console.log(myLink.href);

// Another ways to add/change an attribute is with the method setAttribute()
myLink.setAttribute('target', '_blank')



/**
 * Handle Events
 * some events: click | mouseover | keypress
 */
console.log('################### Handle Events ################');
// Example 1
myLink = document.getElementById('link');
myLink.addEventListener('click', function (event) {
    // preventDefault() prevents the default behavior of the element
    // In this case it will prevent the link to reload and open a new page
    event.preventDefault();

    alert('You just pressed the link');
});

// Example 2
let thirdCircle = document.querySelector('#content div.box:nth-child(3)');
thirdCircle.innerHTML = 'Third circle';
thirdCircle.addEventListener('mouseover', alertOnMouseover);

function alertOnMouseover() {
    alert('You just hoverd over the third circle');

}


/**
 * Navigation
 */
console.log('################### Navigation ################');
let main = document.getElementById('content');
console.log(main);
console.log(main.children); // returns the childen, in HTMLCollection
console.log(main.children[1]);
console.log(main.firstElementChild);
console.log(main.lastElementChild);
console.log(main.parentNode);
console.log(main.previousElementSibling);
console.log(main.nextElementSibling);

// Target the first circle, add some text
main.firstElementChild.innerHTML = 'First circle';
// Target the link in the last child. Add a simley at the end of the link-text :)
main.lastElementChild.firstElementChild.innerHTML += ':)';
// Target the fifth circle, add some text
main.children[4].innerHTML = 'The fifth circle';
// Target the main headline, Add a simley at the end of the text :)
main.previousElementSibling.innerHTML += ' ***';


/**
 * Add/Create/Delete elements
 */
console.log('################### Add/Create/Delete elements ################');

main = document.getElementById('content');

for (let i = 1; i <= 5; i++) {
    // Create a new element
    let newBox = document.createElement("section");
    // Add some text
    newBox.innerHTML = "Box " + i;
    // Add a class
    // newBox.className = "box";
    newBox.classList.add('box');
    // Add some style
    newBox.style.margin = "5px";

    console.log(newBox);


    newBox.addEventListener('click', function (event) {
        // alert('You clicked ' + newBox.innerHTML )

        // newBox.remove();
        let theClickedBox = event.target;
        theClickedBox.remove();
        // theClickedBox.parentNode.remove(); // deletes the parent of the clicked box
    });

    // Appends the newly created element inside an existing elemnt in the HTML Doc
    main.appendChild(newBox);
}








console.log('******************** Övningar: DOM och events ****************************');


/*
 * Övningar: DOM och events
 */

/* 
1)

Ändra titlen högst upp till, 'Learning how to handle JS DOM and events'
Använd getElementById och innerHTML
*/

myTitle = document.getElementById('title');
myTitle.innerHTML = 'Learning how to handle JS DOM and events';


/* 
2)

Ersätt cirklarnas CSS klass .box med .green-box
Googla hur man tar bort/lägger till klasser på element, med JS.

Använd getElementsByTagName för att först hämta alla element, samt for-loop för att ersätta alla klasser
*/
let circles = document.getElementsByTagName('div');

for (let circle of circles) {
    //replace the classes 
    // circle.className='green-box';

    //replace just the target class if there more than one, more specific
    circle.classList.replace('box', 'green-box');
}



/* 
3)

Cirklarnas height och width satt till 100px, via CSS klassen .green-box.
Ändra cirklarnas height och width till 120px.
Googla hur man ändrar ett elements höjd och bredd i JS.

Använd getElementsByClassName för att först hämta alla element, samt for-loop för att göra ändringen

*/

circles = document.getElementsByClassName('green-box');
// for (let i = 0; i < circles.length; i++) {
//     circles[i].style.width = "120px";
//     circles[i].style.height = "120px";
// }

for (let circle of circles) {
    circle.style.height = '120px';
    circle.style.width = '120px';
}


/* 
4)

Ge box 5 en orange border.

Använd querySelector för att först hämta elementet
*/

let fifthBox = document.querySelector('#content section:last-child');
fifthBox.style.border = "3px solid orange";


/* 
5)

Lägg till en ny länk 'My second link :)' i den beiga boxen

Använd getElementById för att hämta den beiga boxen
Använd createElement för att skapa den nya länken
Använd appendChild för att lägga till länken till den beiga boxen
*/

let beigeBox = document.getElementById('beige-box');
let mySecondLink = document.createElement('a');
mySecondLink.setAttribute("href", "#");
// mySecondLink.textContent = 'My second link :)';
mySecondLink.innerHTML = 'My second link :)';
beigeBox.appendChild(mySecondLink);

//style link
mySecondLink.style.display = 'block';
mySecondLink.style.marginTop = '10px';


/* 
6)

Lägg till attributet href med värdet '#####', till den nya länken
Lägg till attributet target med värdet _blank' till den nya länken

Använd setAttribute för att lägga till de nya attributen
*/

mySecondLink.href = '#####';
// mySecondLink.setAttribute('target', '_blank');
mySecondLink.target = '_blank';

/* 
7)

Lägg till en ny img-tagg (bild) i main#content

Lägg till attributet src med ett frivilligt värdet
Lägg till attributet width med värdet 100
Lägg till attributet height med värdet 100
*/


let img = document.createElement('img');
// img.setAttribute('src', 'img/logo.png');
// img.setAttribute('width', '100px');
// img.setAttribute('height', '100px');
img.src = 'img/logo.png';
img.height = '100';
img.width = '100';
document.getElementById('content').appendChild(img);

/* 
8)

Lägg till en eventlistener 'mouseover' på din bild, som skriver ut en text via alert();
*/

img.addEventListener('mouseover', function () {
    alert('You just hoverd over this image');
});



/* 
9)

Lägg till en eventlistener på din länk från övning 5, som skall radera allt innehåll i den beiga boxen

Använd DOM navigeringen mySecondLink.parentNode för att hämta beiga boxen, som då är förälder till länken.
*/


console.log(parent);
mySecondLink.addEventListener('click', function (e) {
    e.preventDefault();
    let theClickedLink = e.target;
  
    // remove all child nodes
    theClickedLink.parentNode.innerHTML = '';

    
});



/* 
10)

Skapa en ny section
Lägg till en border till den nyskapta sektionen
Justera sektionens height till 100px
Justera sektionens width till 200px

Skapa 2 st buttons med texten
- "Green"
- "Blue"

Lägg till eventlistener på alla 2 knappar, som justerar den nyskapta sektionens bakgrundsfärg
Knappen "Green" ändrar bakgrundsfärgen till grön osv.

Lägg alla 2 knappar innanför sektionen
Lägg till sektionen i main#content
*/

main = document.getElementById('content');
let newSection = document.createElement('section');
newSection.style.border = "1px solid #000";
newSection.style.height = '100px';
newSection.style.width = '200px';
let greenBtn = document.createElement('button');
let blueBtn = document.createElement('button');
greenBtn.textContent = 'Green';
blueBtn.innerText = 'Blue';

newSection.appendChild(greenBtn);
newSection.appendChild(blueBtn);
main.appendChild(newSection);

greenBtn.addEventListener('click', function (e) {
    //use navigation to make sure you target the correct elemet - more safe at use
    e.target.parentNode.style.backgroundColor = 'green';
    //newSection.style.backgroundColor = 'green';
});
blueBtn.addEventListener('click', function (e) {
    e.target.parentNode.style.backgroundColor = 'blue';
    // newSection.style.backgroundColor = 'blue';
});


