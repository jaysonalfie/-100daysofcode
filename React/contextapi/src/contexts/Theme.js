import React, {createContext} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme:true,
        lightTheme:{
            text:'#222',
            background: '#d8ddf1'
        },
        darkTheme: {
            text:'#fff',
            background:'#5c5c5c'
        }
    }

    render(){

        //data that will be provided as props to the components 
        return(
            <ThemeContextProvider value={{...this.state}}>
            {/* children the conponents wraps */}
                {this.props.children}
            </ThemeContextProvider>
        )
    }

}

export default ThemeContextProvider;