import React from 'react'

// //pass in props
const Dragon = (props) => {
    console.log()
    // console.log(props.dragon)
    //data holds all of 'dragon' 
    return (
        <ul>
            <li>{props.data.species},</li>
            <li>{props.data.status},</li> 
            <li>{props.data.originPlanet},</li> 
            <li>{props.data.gender},</li> 
            <li>{props.data._id},</li>
            <li>{props.data.name},</li>
            <li>{props.data.series},</li>
            <li>{props.data.created},</li>
            <li>{props.data.url},</li>
            <li>{props.data.image}</li>
        </ul>
    )
}

export default Dragon









// // species: "unknown"
// // status: "Alive"
// // originPlanet: "Unknown"
// // gender: "Male"
// // _id: "5c7c89fb12b25c00177aa150"
// // name: "Frieza"
// // series: "Z"
// // created: "2019-03-04T02:14:19.836Z"
// // url: "/api/character/Frieza"
// // image: "../images/Frieza.jpg"":"../images/Goku.jpg","__v":0},