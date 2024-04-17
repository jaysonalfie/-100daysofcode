//theme.js
import React, {createContext} from "react";
import { useState } from "react";
export const ThemeContext = createContext();

// class ThemeContextProvider extends React.Component {
//     state = {
//         isDarkTheme:true,
//         lightTheme:{
//             text:'#222',
//             background: '#d8ddf1'
//         },
//         darkTheme: {
//             text:'#fff',
//             background:'#5c5c5c'
//         }
//     }

//     render(){

//         //data that will be provided as props to the components 
//         return(
//             <ThemeContextProvider value={{...this.state}}>
//             {/* children the conponents wraps */}
//                 {this.props.children}
//             </ThemeContextProvider>
//         )
//     }

// }

// export default ThemeContextProvider;
// const ThemeContextProvider = ({children}) =>{

//     const [isDarkTheme, setIsDarkTheme] = useState(true); // Theme state

//   const lightTheme = {
//     text: '#222',
//     background: '#d8ddf1'
//   };

//   const darkTheme = {
//     text: '#fff',
//     background: '#5c5c5c'
//   };
//   //if dark theme is true it will be assigned the darkTheme object and vice versa via the ternary operator
//   const theme = isDarkTheme ? darkTheme : lightTheme; // Define theme object

//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };

//   return(
//     <ThemeContextProvider value={{theme, toggleTheme}}>
//         {children}
//     </ThemeContextProvider>
//   )
  
// }


