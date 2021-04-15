import React, { useEffect, useState } from "react"
import { set } from "react-hook-form";
import { ValidateInfo2 } from "./ValidateForm";


const FirstQuarter = (props) => {
    const [Page2data, setPage2data] = useState([]);
    const [Index, setIndex] = useState(0);
    const [Page2data1, setPage2data1] = useState([{}]);
    const [error, setError] = useState({});
    const [Val, setVal] = useState(false);
    const [ip1, setIp1]= useState();
    const [ip2, setIp2]= useState();
    const [ip3, setIp3]= useState();
    const [ip4, setIp4]= useState();
    const [ip5, setIp5]= useState();

    const [com,setCom]=useState();

    useEffect(() => {
        setPage2data(props.Playerlist);
         let  arr={name1: "",
        name2: "",
        name3: "",
        name4: "",
        name5: "",
        position1: "default",
        position2: "default",
        position3: "default",
        position4: "default",
        position5: "default"}
    props.setAddPlayer(arr);
    }, [])

    console.log("player Data ",Page2data);
    const dummydata = Page2data;

    function InputEvent(e) {
        const {name, value} = e.target;
        props.setAddPlayer({...props.AddPlayer, [name]:value});
        const fil = Page2data.findIndex((val)=>{return (value.includes(val.fname&&val.lname))})
        console.log(fil)
        setIp1(fil);
        setPage2data(dummydata);
        console.log("inp player ",e.target.value);
        setCom(e.target.value)
    }

    function InputEvent1(e, fil1) {
        const {name, value} = e.target;
        props.setAddPlayer({...props.AddPlayer, [name]:value});
        setPage2data(dummydata);
        console.log("hhhhhhhhhhhh ",e.target.value);
        
    }
    
    
    return (<>
   
        <div className="form fqform" style={{ width: "100%" }}>
            <form>
            {Page2data1.map((val, id)=>{
                    return (<div>
                        <select
                            className="p2select"
                            onChange={InputEvent}
                            label="name"
                            name="name1"
                            placeholder="Select Player">
                            <option value="default" disabled hidden selected>Select Player</option>
                            {Page2data.map((val) => { {return (<option>{val.fname} {val.lname}</option>)} })}
                        </select>
                        <select
                            className="p2select"
                            onChange={InputEvent1}
                            label="position"
                            name="position1"
                            
                            placeholder="Select Position" >
                            <option value="default" disabled hidden selected>Select Position</option>
                            {/* {Page2data.map((val, id) => { console.log(props.AddPlayer);{return <option>{val.includes(com)}</option>} })} */}
                            {Page2data.map((val, index)=>{ 
                               
                                if(index==ip1) {return <option>{val.position}</option>} })}
                        </select>
                        
                    </div>)
                })}
                
            </form>
            
        </div>
    </>
    )
}
export default FirstQuarter;