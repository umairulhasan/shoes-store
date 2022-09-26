import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  return( 
<Router>


  <nav>
    <Link to="/">Home</Link>
    <Link to="launch">Launch</Link>
    <Link to="/">Home</Link>
    <Link to="/">Home</Link>
    <Link to="/">Home</Link>        
  </nav>
  
  

    <Routes>
      <Route path="/"element={<Home />}/>
      <Route path="launch"element={<Launch />}/>
      <Route path="/"element={<LaunchIndex/>}/>
      
    </Routes>
    </Router>
    
  ); 
}

function Launch(){
  return(
  
  <div>
    <h1>Welcome Launch</h1>
  </div>
  )
  
  }


function LaunchIndex(){
  return(
    <ul>
      {Object.entries(shoes).map(([slug,{ name,img}])=>(
        <li key={slug}>
          <h2>{name}</h2>
          <img src={img} alt={name}/>
        </li>
      ))}
    </ul>
  )
}

function Home(){
return(

<div>
  <h1>Welcome Home</h1>
</div>
)

}

export default App;
 


const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};