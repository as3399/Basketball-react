
import { useState } from "react";
import "./App.css";
import ComposeTeam from "./components/ComposeTeam";
import FirstQuarter from "./components/FirstQuarter";
import {ValidateInfo1} from "./components/ValidateForm"

function App() {
  const [show, setShow]= useState(0);
  const [errors1, setErrors1] = useState({});
  const [data, setdata] = useState({
    fname:"",
    lname:"",
    height:"",
    position:"" });
  
  const [AddPlayer, setAddPlayer] = useState([]);
  const [Playerlist, setPlayerlist] = useState([]);
  const style={
  };
  let props = {data, Playerlist}
  const style1={};
  return (<>
    <navbar id="navbar">
            <div onClick={()=>setShow(0)} className={show==0 ? "team1": "team"} style={style}>Compose Team</div>
            <div onClick={()=>{  setErrors1(ValidateInfo1(props)); if(Playerlist.length>=5){ setShow(1);}}} className={show==1 ? "team1" : "team"} style={style1}>Add Team</div>
        </navbar> 
      { show == 0 &&  <ComposeTeam  errors1={errors1} setErrors1={setErrors1} setShow={setShow} Playerlist={Playerlist} setPlayerlist={setPlayerlist} data={data} setdata={setdata}/>}
      { show == 1   &&  <FirstQuarter setShow={setShow}  AddPlayer={AddPlayer} setAddPlayer={setAddPlayer} Playerlist={Playerlist} setPlayerlist={setPlayerlist} data={data} setdata={setdata}/>}</>
  );
}

export default App;
