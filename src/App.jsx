import React ,{useState}from 'react'
import List from './List'

function App() {

  const fruits=[
    {id:"1",name:"apple",price:"150"},
    {id:"2",name:"banana",price:"10"},
    {id:"3",name:"guava",price:"200"},
    {id:"4",name:"grapes",price:"50"}
  ]

  const vegetables=[
    {id:"1",name:"potato",price:"10"},
    {id:"2",name:"tomato",price:"60"},
    {id:"3",name:"onion",price:"50"},
    {id:"4",name:"brocoli",price:"150"}
  ]

  var [fruit,setfruit]=useState(true);
  var [veg,setveg]=useState(false);

  const showFruit=()=>{
    fruit?setfruit(true):setfruit(!fruit);
    setveg(false);
    
  }

  const showVeg=()=>{
    veg?setveg(true):setveg(!veg);
    setfruit(false);
  }


  return (
    <>
      <button onClick={showFruit}>Fruits</button>
      <button onClick={showVeg}>Vegetables</button>

      {fruit && <List listname={fruits} category="Fruits"/>}
      {veg && <List listname={vegetables} category="Vegetables"/>}
    </>
    
  )

}

export default App