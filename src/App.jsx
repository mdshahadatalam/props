import './App.css'
import { Box } from './Components/Box'

function App() {
  
  const Info = {

    
    name:"Arif",
    age: 5,
    city: "Dhaka",
    number:76776888,
    email:"arif@gmail.com",
    address:"Dhaka,Bangladesh",
    gender:"Male",
    occupation:"Student",
    hobbies:"Cricket,Reading,Watching Movie"

  }
  const Infor = {

    
    name:"saad",
    age: 5,
    city: "chittagong",
    number:76776888,
    email:"arif@gmail.com",
    address:"chittagong,Bangladesh",
    gender:"Male",
    occupation:"Student",
    hobbies:"Cricket,Reading,Watching Movie"

  }


  return (
    <>
     <Box Info ={Info } Infor={Infor} />
    </>
  )
}

export default App
