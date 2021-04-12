
import { useState } from "react";
import "./App.css";
import ComposeTeam from "./components/ComposeTeam";
import FirstQuarter from "./components/FirstQuarter";
import Final from "./Final"

function App() {
  const [show, setShow]= useState(0);
  const [data, setdata] = useState({
    fname:"",
    lname:"",
    height:"",
    position:"",
  });
  const [AddPlayer, setAddPlayer] = useState([]);
  const [Playerlist, setPlayerlist] = useState([]);
  const style={
  };
  
  const style1={};
  return (<>
    <navbar id="navbar">
            <div onClick={()=>setShow(0)} className="team" style={style}>Compose Team</div>
            <div className="team" style={style1}>Add Team</div>
        </navbar> 
      { show ==0 && ((style.background = "rgb(69, 69, 226"), <ComposeTeam setShow={setShow} Playerlist={Playerlist} setPlayerlist={setPlayerlist} data={data} setdata={setdata}/>)}
      { show ==1 && ((style1.background = "rgb(69, 69, 226"), <FirstQuarter setShow={setShow}  AddPlayer={AddPlayer} setAddPlayer={setAddPlayer} Playerlist={Playerlist} setPlayerlist={setPlayerlist} data={data} setdata={setdata}/>)}
      { show ==2 &&  <Final  AddPlayer={AddPlayer} setAddPlayer={setAddPlayer}/>}</>
  );
}

export default App;
