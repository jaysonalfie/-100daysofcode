import { computeHeadingLevel } from "@testing-library/react";
import React from "react";

class SearchInput extends React.Component {
    //adding functionality
    //creating event handlers
    /*
    event.target.value contains the text that the user inputs to the form
    uncontrolled form element currently- to reterive information one has to go to the DOM
    prefering to work with controlled components- makes use of only the react component to retrieve information
    
    solving an undefined state can be done using binding and there are several ways to do this:
    -constructor function to bind the 'this' method(produces a new version of that function)
    value of 'this' will be equal to the component instance
    -Turn the function into an arrow function -autimatically bind the value of 'this' for all the function
    */


    // constructor (){
    //     super()
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    // }
    
    state ={ entry: ''}
    

    //prevent form behavior of refreshing after input is keyed in
    //communicates the entered input to the parent component via a cllback function provided as prop (onSerachSubmit)
    onFormSubmit=(event) =>{
       event.preventDefault()
       this.props.onSearchSubmit(this.state.entry)

    }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form "action="">
                <div className="field">
                 <div className="ui massive icon input">
                 <input type="text" placeholder="search..."  onChange={(event)=> this.setState({entry:event.target.value})}
                    value={this.state.entry}
                 />
                 <i className="search icon"></i>
                 </div>   
                </div>
                   
                </form>
            </div>
        )
    }
}

export default SearchInput;