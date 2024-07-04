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



//creating components which are functions in react

function Header({title}){
    console.log(title);
    return(
     <>
           {/* // title is a variable */}
        <h1>{title}</h1>
        <h1>{`cool ${title}`}</h1>
        <h1>{title ? title : 'Default Title'}</h1>
     {/* <div>
         
         <h1>Develop. Preview. Ship</h1>
        
     </div> */}
     <Nav titleName='Alpha'/>
     </>
    )
}

//nesting components together
function HomePage (){
    const names = ['Ada lovelace', 'kendi Beckham', 'Larry Wells']
    {/* nesting the header inside the Homepage component*/}
    return<div>
        <Header title="react"/>
        <Header title ="a new beginning"/>
        <ul>
            {names.map((name)=> (
                <li key={name}>{name}</li>
            ))}
        </ul>
    </div>
}

//nav to add to header
function Nav({titleName}){

    return(<p>{titleName}</p>)
}

//adding react DOM
const domNode= document.getElementById("app");
const root = ReactDOM.createRoot(domNode);
root.render(<HomePage/>);