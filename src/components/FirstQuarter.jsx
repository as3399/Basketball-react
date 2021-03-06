import React, { useEffect, useState } from "react"
import { ValidateInfo2 } from "./ValidateForm";

const FirstQuarter = (props) => {
    const [Page2data, setPage2data] = useState([]);
    const [error, setError] = useState({});
    const [ip1, setIp1] = useState(0);
    const [ip2, setIp2] = useState(0);
    const [ip3, setIp3] = useState(0);
    const [ip4, setIp4] = useState(0);
    const [ip5, setIp5] = useState(0);
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
        const { name, value } = e.target;
        props.setAddPlayer({ ...props.AddPlayer, [name]: value });
        const fil = Page2data.findIndex((val) => { return (value.includes(val.fname) && value.includes(val.lname) && value.includes(val.id)) })
        let arr = { ...props.AddPlayer }
        let arr1 = { ...match }
        if (show1 == true) {
            setShow1(false);
        }
        if (name == "name1") {
            arr.name1 = value;
            arr1.name1 = value;
            arr.position1 = "default";
            setMatch(arr1);
            props.setAddPlayer(arr)
            setIp1(fil)
        };
        if (name == "name2") {
            arr.name2 = value;
            arr1.name2 = value;
            setMatch(arr1);
            arr.position2 = "default";
            props.setAddPlayer(arr)
            setIp2(fil)
        };
        if (name == "name3") {
            arr.name3 = value;
            arr1.name3 = value;
            setMatch(arr1);
            arr.position3 = "default";
            props.setAddPlayer(arr)
            setIp3(fil)
        };
        if (name == "name4") {
            arr.name4 = value;
            arr1.name4 = value;
            setMatch(arr1);
            arr.position4 = "default";
            props.setAddPlayer(arr)
            setIp4(fil)
        };
        if (name == "name5") {
            arr.name5 = value;
            arr1.name5 = value;
            setMatch(arr1);
            arr.position5 = "default";
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

        if (show1 == true) {
            setShow1(false);
        }
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
    console.log(Page2data, "page2dataaa")
    console.log(ip1, "ip1")


    let name1condition = (match.name1 && (match.name1 == match.name2 || match.name1 == match.name3 || match.name1 == match.name4 || match.name1 == match.name5))
    let name2condition = (match.name2 && (match.name2 == match.name1 || match.name2 == match.name3 || match.name2 == match.name4 || match.name2 == match.name5))
    let name3condition = (match.name3 && (match.name3 == match.name1 || match.name3 == match.name4 || match.name3 == match.name5 || match.name3 == match.name2))
    let name4condition = ((match.name4 && (match.name4 == match.name1 || match.name4 == match.name2 || match.name4 == match.name3 || match.name4 == match.name5)))
    let name5condition = ((match.name5 && (match.name5 == match.name1 || match.name5 == match.name2 || match.name5 == match.name3 || match.name5 == match.name4)))
    let position1condition = ((match.position1) && (match.position1 == match.position2 || match.position1 == match.position3 || match.position1 == match.position4 || match.position1 == match.position5))
    let position2condition = (match.position2 && (match.position2 == match.position1 || match.position2 == match.position3 || match.position2 == match.position4 || match.position2 == match.position5))
    let position3condition = (match.position3 && (match.position3 == match.position1 || match.position3 == match.position2 || match.position3 == match.position4 || match.position3 == match.position5))
    let position4condition = (match.position4 && (match.position4 == match.position1 || match.position4 == match.position2 || match.position4 == match.position3 || match.position4 == match.position5))
    let position5condition = (match.position5 && (match.position5 == match.position1 || match.position5 == match.position2 || match.position5 == match.position3 || match.position5 == match.position4))
    let condition1 = (name1condition || name2condition || name3condition || name4condition || name5condition)
    let condition2 = (position1condition || position2condition || position3condition || position4condition || position5condition)
    let condition3 = ((props.AddPlayer.name1 == "") || (props.AddPlayer.name2 == "") || (props.AddPlayer.name3 == "") || (props.AddPlayer.name4 == "") || (props.AddPlayer.name5 == "") || (props.AddPlayer.position1 == "default") || (props.AddPlayer.position2 == "default") || (props.AddPlayer.position3 == "default") || (props.AddPlayer.position4 == "default") || (props.AddPlayer.position5 == "default"))

    return (<>
        <h3> Select Players for First Quarter:</h3>
        <div className="form fqform" style={{ width: "100%" }}>
            <form>
            <ol>
               <li> <div>
                    <select
                        className={name1condition ? "p2select1" : "p2select"}
                        onChange={InputEvent}
                        label="name"
                        name="name1"
                        placeholder="Select Player">
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select
                        className={position1condition ? "p2select1" : "p2select"}
                        onChange={InputEvent1}
                        label="position"
                        name="position1"
                        value={props.AddPlayer.position1}
                        placeholder="Select Position" >
                        <option value="default" disabled hidden selected>Select Position</option>
                        {props.AddPlayer.name1 != "" && props.Playerlist[ip1].position.map((val) => { return <option>{val.value}</option> })}
                    </select>
                </div>
                </li>
               <li> <div>
                    <select
                        className={name2condition ? "p2select1" : "p2select"}
                        onChange={e => InputEvent(e)}
                        label="name"
                        name="name2"
                        placeholder="Select Player">
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select
                        className={position2condition ? "p2select1" : "p2select"}
                        onChange={e => InputEvent1(e)}
                        label="position"
                        name="position2"
                        value={props.AddPlayer.position2}
                        placeholder="Select Position">
                        <option value="default" disabled hidden selected>Select Position</option>
                        {props.AddPlayer.name2 != "" && props.Playerlist[ip2].position.map((val) => { return <option>{val.value}</option> })}
                    </select>
                </div></li>

                <li><div>
                    <select
                        className={name3condition ? "p2select1" : "p2select"}
                        onChange={e => InputEvent(e)}
                        label="name"
                        name="name3"
                        placeholder="Select Player" >
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select
                        className={position3condition ? "p2select1" : "p2select"}
                        onChange={e => InputEvent1(e)}
                        label="position"
                        name="position3"
                        value={props.AddPlayer.position3}
                        placeholder="Select Position" >
                        <option value="default" disabled hidden selected>Select Position</option>
                        {props.AddPlayer.name3 != "" && props.Playerlist[ip3].position.map((val) => { return <option>{val.value}</option> })}
                    </select>
                </div></li>
                <li><div>
                    <select
                        className={name4condition ? "p2select1" : "p2select"}
                        onChange={e => InputEvent(e)}
                        label="name"
                        name="name4"
                        placeholder="Select Player"
                    >
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select
                        className={position4condition ? "p2select1" : "p2select"}
                        onChange={e => InputEvent1(e)}
                        label="position4"
                        name="position4"
                        value={props.AddPlayer.position4}
                        placeholder="Select Position" >
                        <option value="default" disabled hidden selected>Select Position</option>
                        {props.AddPlayer.name4 != "" && props.Playerlist[ip4].position.map((val) => { return <option>{val.value}</option> })}
                    </select>
                </div></li>
                <li><div>
                    <select
                        className={name5condition ? "p2select1" : "p2select"}
                        onChange={e => InputEvent(e)}
                        label="name"
                        name="name5"
                        placeholder="Select Player">
                        <option value="default" disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { { return (<option value={`${val.fname}${val.lname}${val.id}`} > {val.fname} {val.lname}</option>) } })}
                    </select>
                    <select
                        className={position5condition ? "p2select1" : "p2select"}
                        onChange={e => InputEvent1(e)}
                        label="position5"
                        name="position5"
                        value={props.AddPlayer.position5}
                        placeholder="Select Position" >
                        <option value="default" disabled hidden selected>Select Position</option>
                        {props.AddPlayer.name5 != "" && props.Playerlist[ip5].position.map((val) => { return <option>{val.value}</option> })}
                    </select>
                </div></li>

                <div className="p2error"> <div className="div1"> {condition1 && <p className="error">**Input feilds are same</p>}
                </div>
                    <div className="div2"> {
                        condition2 && <p className="error">**Cannot Add Same Player for Multiple Position</p>} </div></div>

                {error.name && <p className="error">{error.name}</p>}
                {(show1 && !condition3 && !condition1 && !condition2) && <p className="submit ">Players has been selected for First Quarter</p>}
                {(show1 && condition3) && <p className="error ">**Must have to select 5 player for the First Quarter</p>}
</ol>
                <button className="savebtn" onClick={(e) => { e.preventDefault(); setError(ValidateInfo2(props)); setShow1(true) }}>Save</button>
                
            </form>

        </div>
    </>
    )
}
export default FirstQuarter;