console.log('hello world')

let display = document.getElementById('display');
// line 3 finds my display box div in the DOM

let buttons = Array.from(document.querySelectorAll('#calcButtons'));
// line 6 finds all my calculator buttons with the specified ID in the DOM and creates an array out of it

console.log(buttons);
console.log(display);
//lines 9 and 10 are test console logs to make sure that the i was able to get the elements that i needed to get from my DOM

// the following function creates a NEW array that is the result of the functions passed on it. that's what the .map method does. 
// within this function, we are creating event listeners for the buttons in the calculator so that when they are clicked, they will perform specific conditions
// the conditions will be passed through a switch statement which is a refactor of an if/else statement

buttons.map( buttons => {
  buttons.addEventListener('click' , (e) => {
    switch(e.target.value) {
      case 'C':
        display.innerText = " ";
        break;
      case '←':
        display.innerText = display.innerText.toString().slice (0,-1);
        break;
      case '=':
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = 'Error';
          }
          break;
      default:
          display.innerText += e.target.value;
          // the methods used here differ a little from the YT video. YT video uses innerText to extract the value from the targeted event. that doesn't apply to me because in my html, my buttons have value assignments that define the values of each button
    }
  });
});
