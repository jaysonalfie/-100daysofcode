//using DOM element to select the div with the id app
// const app = document.getElementById('app')

// //creating new h1 element
// const header = document.createElement('hi')

// //creating a new text node foor the H1 element
// const text= 'Develop. Preview. Ship';
// const headerContent = document.createTextNode(text)

// //appending the text to the H1 element
// header.appendChild(headerContent);

// //place the H! element inside the div
// app.append(header)

//adding react DOM
const domNode= document.getElementById("app");
const root = ReactDOM.createRoot(domNode);
root.render(<h1>Develop. Preview. Ship.</h1>);
