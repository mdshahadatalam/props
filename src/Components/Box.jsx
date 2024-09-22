import React from 'react'
import images from '../assets/images/images.webp'
import images2 from '../assets/images/images2.jpeg'

export const Box = (props) => {
  return (
    <>
    <h1>Images:</h1>
    <img width={190} src={images} alt="" />
    <h1>Name:{props.Info.name} </h1>
    <h1>age:{props.Info.age} </h1>
    <h1>city:{props.Info.city} </h1>
    <h1>number:{props.Info.number} </h1>
    <h1>Email:{props.Info.email} </h1>
    <h1>address:{props.Info.address} </h1>
    <h1>gender:{props.Info.gender} </h1>
    <h1>occupation:{props.Info.occupation} </h1>
    <h1>hobbies:{props.Info.hobbies} </h1>
    <hr />

    <h1>Images:</h1>
    <img width={190} src={images2} alt="" />
    <h1>Name:{props.Infor.name} </h1>
    <h1>age:{props.Infor.age} </h1>
    <h1>city:{props.Infor.city} </h1>
    <h1>number:{props.Infor.number} </h1>
    <h1>Email:{props.Infor.email} </h1>
    <h1>address:{props.Infor.address} </h1>
    <h1>gender:{props.Infor.gender} </h1>
    <h1>occupation:{props.Infor.occupation} </h1>
    <h1>hobbies:{props.Infor.hobbies} </h1>
    </>
  )
}
