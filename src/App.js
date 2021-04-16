
import { useState } from "react";
import "./App.css";
import ComposeTeam from "./components/ComposeTeam";
import FirstQuarter from "./components/FirstQuarter";
import {ValidateInfo1} from "./components/ValidateForm"

let obj={

  fname:"",
  lname:"",
  height:"",
  position:"default",
}
function App() {
  const [show, setShow]= useState(0);
  const [errors1, setErrors1] = useState({});
  const [data, setdata] = useState({
    fname:"",
    lname:"",
    height:"",
    position:"default",});
  
  const [AddPlayer, setAddPlayer] = useState([]);
  const [Playerlist, setPlayerlist] = useState([]);
  const style={
  };
  let props = { data, Playerlist}
  const style1={};
  return (<>
    <navbar id="navbar">
            <div onClick={()=>setShow(0)} className="team" style={style}>Compose Team</div>
            <div onClick={()=>{ setErrors1(ValidateInfo1(props));
        // if(Playerlist.length>=5) {
        setShow(1); }} className="team" style={style1}>Add Team</div>
        </navbar> 
      { show == 0 && ((style.background = "rgb(69, 69, 226"), <ComposeTeam  errors1={errors1} obj={obj} setErrors1={setErrors1} setShow={setShow} Playerlist={Playerlist} setPlayerlist={setPlayerlist} data={data} setdata={setdata}/>)}
      { show == 1   && ((style1.background = "rgb(69, 69, 226"), <FirstQuarter setShow={setShow}  AddPlayer={AddPlayer} setAddPlayer={setAddPlayer} Playerlist={Playerlist} setPlayerlist={setPlayerlist} data={data} setdata={setdata}/>)}</>
  );
}

export default App;
