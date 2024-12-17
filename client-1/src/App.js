import './App.css';
import {useState} from "react";

function App() {

  let [Players,setPlayers] = useState([]);

  let OnbuttonClick = async ()=>{
    let reqOptions ={
      method:"GET"
    }

    let JSONData = await fetch("http://localhost:3456/indianCricketPlayers",reqOptions);


    let JSOData = await JSONData.json();
    console.log(JSOData);
    setPlayers(JSOData);


  };



  return (
    <div className="App">
      <div>
      <h1>Express</h1>
      <h2>INDIAN CRICKET PLAYERS</h2>
      <br></br>
      <button onClick={()=>{
        OnbuttonClick();
      }}>CricketPlayers</button>
      </div>

      <div className='dv2'>
        
        {Players.map((ele,i)=>{
        return <div className='dv1' key={i}>
               <img src={ele.Image}></img>
               <h2 >{ele.name} </h2>
              </div>
        
       })}
        </div>
    </div>
  );
}

export default App;
