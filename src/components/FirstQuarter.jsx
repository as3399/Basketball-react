import React, { useEffect, useState } from "react"
import { set } from "react-hook-form";
import { ValidateInfo2 } from "./ValidateForm";
import SelectBox from "./Selectbox"


const FirstQuarter = (props) => {
    const [Page2data, setPage2data] = useState([]);
    const [error, setError] = useState({});
    const [ip1, setIp1] = useState();
    const [ip2, setIp2] = useState();
    const [ip3, setIp3] = useState();
    const [ip4, setIp4] = useState();
    const [ip5, setIp5] = useState();
    const [match, setMatch] = useState([]);
    const [show1, setShow1] = useState(false);
    useEffect(() => {
        setPage2data(props.Playerlist);
        let arr = {
            name1: "",
            name2: "",
            name3: "",
            name4: "",
            name5: "",
            position1: "default",
            position2: "default",
            position3: "default",
            position4: "default",
            position5: "default"
        }
        props.setAddPlayer(arr);
    }, [])

    console.log("player Data ", Page2data);
    const dummydata = Page2data;

    function InputEvent(e) {
        const { name, value, id } = e.target;
       
        props.setAddPlayer({ ...props.AddPlayer, [name]: value });
        const fil = Page2data.findIndex((val) => {return (value.includes(val.fname) && value.includes(val.lname) && value.includes(val.position) && value.includes(val.id) )})
        let arr = { ...props.AddPlayer }
        let arr1 = { ...match }

        if (name == "name1") {
            arr.name1 = value;
            arr1.name1 = value;
            setMatch(arr1);
            arr.position1 = "default"
            props.setAddPlayer(arr)
            setIp1(fil)
        };
        if (name == "name2") {
            arr.name2 = value;
            arr1.name2 = value;
            setMatch(arr1);
            arr.position2 = "default"
            props.setAddPlayer(arr)
            setIp2(fil)
        };
        if (name == "name3") {
            arr.name3 = value;
            arr1.name3 = value;
            setMatch(arr1);
            arr.position3 = "default"
            props.setAddPlayer(arr)
            setIp3(fil)
        };
        if (name == "name4") {
            arr.name4 = value;
            arr1.name4 = value;
            setMatch(arr1);
            arr.position4 = "default"
            props.setAddPlayer(arr)
            setIp4(fil)
        };
        if (name == "name5") {
            arr.name5 = value;
            arr1.name5 = value;
            setMatch(arr1);
            arr.position5 = "default"
            props.setAddPlayer(arr)
            setIp5(fil)
        };
        setError(ValidateInfo2(props))
        setPage2data(dummydata);
        console.log("inp player ", e.target.value);
    }

    function InputEvent1(e) {
        const { name, value } = e.target;
        props.setAddPlayer({ ...props.AddPlayer, [name]: value });
        let arr1 = { ...match }

        if (name == "position1") {
            arr1.position1 = value;
            setMatch(arr1);
        };
        if (name == "position2") {
            arr1.position2 = value;
            setMatch(arr1);
        };
        if (name == "position3") {
            arr1.position3 = value;
            setMatch(arr1);
        };
        if (name == "position4") {
            arr1.position4 = value;
            setMatch(arr1);
        };
        if (name == "position5") {
            arr1.position5 = value;
            setMatch(arr1);
        };
        setError(ValidateInfo2(props))
        setPage2data(dummydata);
    }
    console.log("Addplayer", props.AddPlayer);
    

    return (<>
        <h3> Select Players for First Quarter:</h3>
        <div className="form fqform" style={{ width: "100%" }}>
            <form>
                <div>
                    <select 
                        className={(match.name1 && (match.name1 == match.name2 || match.name1 == match.name3 || match.name1 == match.name4 || match.name1 == match.name5)) ? "p2select1": "p2select"}
                        onChange={InputEvent}
                        label="name"
                        name="name1"
                        placeholder="Select Player">
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.position}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select 
                        className={((match.position1) && (match.position1 == match.position2 || match.position1 == match.position3 || match.position1 == match.position4 || match.position1 == match.position5)) ? "p2select1": "p2select"}
                        onChange={InputEvent1}
                        label="position"
                        name="position1"
                        value={props.AddPlayer.position1}
                        placeholder="Select Position" >
                        <option value="default" disabled hidden selected>Select Position</option>
                        {/* {Page2data.map((val, id) => { console.log(props.AddPlayer);{return <option>{val.includes(com)}</option>} })} */}
                        {Page2data.map((val, index) => {
                            if (index == ip1) { return <option>{val.position}</option> }
                        })}
                    </select>
                    {/* {(match.name1 && (match.name1 == match.name2 || match.name1 == match.name3 || match.name1 == match.name4 || match.name1 == match.name5)) && <p className="error">**Input feilds are same</p>}
                    
                    {(match.position1 && (match.position1 == match.position2 || match.position1 == match.position3 || match.position1 == match.position4 || match.position1 == match.position5)) && <p className="error">**Input feilds are same</p>} */}


                </div>
                <div>
                    <select
                       className={(match.name2 && (match.name2 == match.name1 || match.name2 == match.name3 || match.name2 == match.name4 || match.name2 == match.name5)) ? "p2select1": "p2select"}
                        onChange={e => InputEvent(e)}
                        label="name"
                        name="name2"
                        placeholder="Select Player">
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.position}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select
                          className={(match.position2 && (match.position2 == match.position1 || match.position2 == match.position3 || match.position2 == match.position4 || match.position2 == match.position5)) ? "p2select1": "p2select"}
                        onChange={e => InputEvent1(e)}
                        label="position"
                        name="position2"
                        value={props.AddPlayer.position2}
                        placeholder="Select Position">
                        <option value="default" disabled hidden selected>Select Position</option>

                        {Page2data.map((val, index) => {

                            if (index == ip2) { return <option>{val.position}</option> }
                        })}
                    </select>
                    {/* {(match.name2 && (match.name2 == match.name1 || match.name2 == match.name3 || match.name2 == match.name4 || match.name2 == match.name5)) && <p className="error">**Input feilds are same</p>}
                    {(match.position2 && (match.position2 == match.position1 || match.position2 == match.position3 || match.position2 == match.position4 || match.position1 == match.position5)) && <p className="error">**Input feilds are same</p>} */}
                </div>
                <div>
                    <select
                        className={(match.name3 && (match.name3 == match.name1 || match.name3 == match.name4 || match.name3 == match.name5 || match.name3 == match.name2)) ? "p2select1": "p2select"}
                        onChange={e => InputEvent(e)}
                        label="name"
                        name="name3"
                        placeholder="Select Player"
                    >
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.position}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select
                        className={(match.position3 && (match.position3 == match.position1 || match.position3 == match.position2 || match.position3 == match.position4 || match.position3 == match.position5)) ? "p2select1": "p2select"}
                        onChange={e => InputEvent1(e)}
                        label="position"
                        name="position3"
                        value={props.AddPlayer.position3}
                        placeholder="Select Position" >
                        <option value="default" disabled hidden selected>Select Position</option>
                        {/* {Page2data.map((val, id) => { console.log(props.AddPlayer);{return <option>{val.includes(com)}</option>} })} */}
                        {Page2data.map((val, index) => {

                            if (index == ip3) { return <option>{val.position}</option> }
                        })}
                    </select>
                    {/* {(match.name3 && (match.name3 == match.name1 || match.name3 == match.name4 || match.name3 == match.name5 || match.name3 == match.name2)) && <p className="error">**Input feilds are same</p>}
                    {(match.position3 && (match.position3 == match.position1 || match.position3 == match.position2 || match.position3 == match.position4 || match.position1 == match.position5)) && <p className="error">**Input feilds are same</p>} */}
                </div>
                <div>
                    <select
                        className={((match.name4 && (match.name4 == match.name1 || match.name4 == match.name2 || match.name4 == match.name3 || match.name4 == match.name5))) ? "p2select1": "p2select"}
                        onChange={e => InputEvent(e)}
                        label="name"
                        name="name4"
                        placeholder="Select Player"
                    >
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.position}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select
                        className= {(match.position4 && (match.position4 == match.position1 || match.position4 == match.position2 || match.position4 == match.position3 || match.position4 == match.position5)) ? "p2select1": "p2select"}
                        onChange={e => InputEvent1(e)}
                        label="position4"
                        name="position4"
                        value={props.AddPlayer.position4}
                        placeholder="Select Position" >
                        <option value="default" disabled hidden selected>Select Position</option>
                        {/* {Page2data.map((val, id) => { console.log(props.AddPlayer);{return <option>{val.includes(com)}</option>} })} */}
                        {Page2data.map((val, index) => {
                            if (index == ip4) { return <option>{val.position}</option> }
                        })}
                    </select>
                    {/* {(match.name4 && (match.name4 == match.name1 || match.name4 == match.name2 || match.name4 == match.name3 || match.name4 == match.name5)) && <p className="error">**Input feilds are same</p>}
                    {(match.position4 && (match.position4 == match.position1 || match.position4 == match.position2 || match.position4 == match.position3 || match.position4 == match.position5)) && <p className="error">**Input feilds are same</p>} */}

                </div>
                <div>
                    <select
                        className={((match.name5 && (match.name5 == match.name1 || match.name5 == match.name2 || match.name5 == match.name3 || match.name5 == match.name4))) ? "p2select1": "p2select"}
                        onChange={e => InputEvent(e)}
                        label="name"
                        name="name5"
                        placeholder="Select Player">
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.position}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select
                        className={(match.position5 && (match.position5 == match.position1 || match.position5 == match.position2 || match.position5 == match.position3 || match.position5 == match.position4)) ? "p2select1": "p2select"}
                        onChange={e => InputEvent1(e)}
                        label="position5"
                        name="position5"
                        value={props.AddPlayer.position5}
                        placeholder="Select Position" >
                        <option value="default" disabled hidden selected>Select Position</option>
                        {Page2data.map((val, index) => {
                            if (index == ip5) { return <option>{val.position}</option> }
                        })}
                        {/* {(match.name5 && (match.name5 == match.name1 || match.name5 == match.name2 || match.name5 == match.name3 || match.name5 == match.name4)) && <p className="error">**Input feilds are same</p>}
                        {(match.position5 && (match.position5 == match.position1 || match.position5 == match.position2 || match.position5 == match.position3 || match.position5 == match.position4)) && <p className="error">**Input feilds are same</p>} */}

                    </select>

                </div>

     <div className="p2error"> <div className="div1"> { (props.AddPlayer.name1 && props.AddPlayer.name2 && props.AddPlayer.name2 == props.AddPlayer.name1 ||
                    props.AddPlayer.name3 && props.AddPlayer.name1 && props.AddPlayer.name3 == props.AddPlayer.name1 ||
                    props.AddPlayer.name1 && props.AddPlayer.name4 && props.AddPlayer.name4 == props.AddPlayer.name1 ||
                    props.AddPlayer.name1 && props.AddPlayer.name5 && props.AddPlayer.name5 == props.AddPlayer.name1 ||
                    props.AddPlayer.name3 && props.AddPlayer.name2 && props.AddPlayer.name3 == props.AddPlayer.name2 ||
                    props.AddPlayer.name4 && props.AddPlayer.name2 && props.AddPlayer.name4 == props.AddPlayer.name2 ||
                    props.AddPlayer.name3 && props.AddPlayer.name4 && props.AddPlayer.name4 == props.AddPlayer.name3 ||
                    props.AddPlayer.name4 && props.AddPlayer.name5 && props.AddPlayer.name4 == props.AddPlayer.name5 ||
                    props.AddPlayer.name5 && props.AddPlayer.name2 && props.AddPlayer.name5 == props.AddPlayer.name2 ||
                    props.AddPlayer.name3 && props.AddPlayer.name5 && props.AddPlayer.name5 == props.AddPlayer.name3) && <p className="error">**Input feilds are same</p>}
                        </div>
                        <div className="div2"> {((props.AddPlayer.position1!="default" && props.AddPlayer.position2!="default" && props.AddPlayer.position2 == props.AddPlayer.position1) ||
                    (props.AddPlayer.position3!="default" && props.AddPlayer.position1!="default" && props.AddPlayer.position3 == props.AddPlayer.position1) ||
                    (props.AddPlayer.position1!="default" && props.AddPlayer.position4!="default" && props.AddPlayer.position4 == props.AddPlayer.position1) ||
                    (props.AddPlayer.position1!="default" && props.AddPlayer.position5!="default" && props.AddPlayer.position5 == props.AddPlayer.position1) ||
                    (props.AddPlayer.position3!="default" && props.AddPlayer.position2!="default" && props.AddPlayer.position3 == props.AddPlayer.position2) ||
                    (props.AddPlayer.position4!="default" && props.AddPlayer.position2!="default" && props.AddPlayer.position4 == props.AddPlayer.position2) ||
                    (props.AddPlayer.position3!="default" && props.AddPlayer.position4!="default" && props.AddPlayer.position4 == props.AddPlayer.position3) ||
                    (props.AddPlayer.position4!="default" && props.AddPlayer.position5!="default" && props.AddPlayer.position4 == props.AddPlayer.position5) ||
                    (props.AddPlayer.position5!="default" && props.AddPlayer.position2!="default" && props.AddPlayer.position5 == props.AddPlayer.position2) ||
                    (props.AddPlayer.position3!="default" && props.AddPlayer.position5!="default" && props.AddPlayer.position5 == props.AddPlayer.position3))


                    && <p className="error">**Cannot Add Same Player for Multiple Position</p>} </div></div>
                    
                {error.name && <p className="error">{error.name}</p>}
                {error.name1 == "" && <p className="submit ">Players has been selected for First Quarter</p>}

                <button className="savebtn" onClick={(e) => { e.preventDefault(); setError(ValidateInfo2(props)) }}>Save</button>
            </form>

        </div>
    </>
    )
}
export default FirstQuarter;