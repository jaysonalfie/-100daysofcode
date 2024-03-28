import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";

//creating API request that is an AJAX request
//this is done using axios or the fetch function
/*
since props communicate information from the parent to the child
we can be able to use callbacks in the children to enable them pass information to the parent
first turn parent into a class- based component 
pass down onSearchSubmit as props to the SearchInput
it will be run each time the SearchInput component is submitted*/

/*
async- allows us to use the async await syntax in the function
async- infront of method name
await- network request that is taking some time to return
whatever is being returned finally is given to a variable*/

class App extends React.Component {

  state = {images:[]}
   //defining callback function that enables this component to handle the search submission logic
   //using arrow function to get rid of error that "this.state" is undefined
    onSearchSubmit= async (entry)=>{
    
     const response = await axios.get(`https://pixabay.com/api/?key=43120799-3feaa52337e817ea3584cbfad&q=${entry}&image_type=photo&pretty=true`)
   
     this.setState({images:response.data.hits})
   }
  render(){
    return(
        <div className="ui container" style={{marginTop:'30px'}}>
        
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            We have {this.state.images.length} images
        </div>
    )
  }
}

export default App;