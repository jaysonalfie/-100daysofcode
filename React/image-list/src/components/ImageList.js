import React from "react";


/*
map()aid in iterating over each item in the array
It also applies a transforming function to each element to get the <img> element
It creates an array of the transformed elements hence dynamic rendering


key values- aid in performance making react able to update lists to be more precise and performance oriented(only for list of elements)
 it is assigned to the root element that we are retuening from the list of records

 key points
 -to communicate from child to parent, we pass a callback from the parent to the child
 
 */

const ImageList = (props)=>{

 const images=  props.images.map((image)=>{
    return <img key={image.id} src={image.webformatURL} alt=""/>
  })
    return(
        <div>
           {images}
        </div>
    )
}

export default ImageList;