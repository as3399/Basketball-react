import React, { useEffect, useState } from "react"
import { ValidateInfo2 } from "./ValidateForm";

const FirstQuarter = (props) => {
    const [Page2data, setPage2data] = useState([]);
    const [Index, setIndex] = useState(0);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setPage2data(props.Playerlist);
    }, [])

    const dummydata = Page2data;

    function InputEvent(e) {
        const {name, value} = e.target;
        props.setAddPlayer([{...props.AddPlayer, [name]:value}]);
        
        setPage2data(dummydata);
        console.log(props.AddPlayer);
    }


    function Submit(e) {
        e.preventDefault();
        setErrors(ValidateInfo2(props));
    }

    return (<>
        <h3> Select Players for First Quarter:</h3>
        <div className="form fqform" style={{ width: "100%" }}>
            <form onSubmit={Submit}>
                <div>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="name"
                        name="name1"
                        placeholder="Select Player">
                        <option disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { return <option>{val.fname} {val.lname}</option> })}
                    </select>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="position"
                        name="position1"
                        placeholder="Select Position" >
                        <option disabled hidden selected>Select Position</option>
                        {/* {Page2data.map((val) => { return <option>{val.position}</option> })} */}
                        {Page2data.map((val, id) => { return <option>{val.position}</option> })}
                    </select>
                </div>
                <div>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="name"
                        name="name2"
                        placeholder="Select Player">
                        <option disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { return <option>{val.fname} {val.lname}</option> })}
                    </select>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="position"
                        name="position2"
                        placeholder="Select Position">
                        <option disabled hidden selected>Select Position</option>
                        {Page2data.map((val, id) => { return <option>{val.position}</option> })}
                    </select>
                </div>
                <div>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="name3"
                        name="name3"
                        placeholder="Select Player">
                        <option disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { return <option>{val.fname} {val.lname}</option> })}
                    </select>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="position3"
                        name="positon3"
                        placeholder="Select Position">
                        <option disabled hidden selected>Select Position</option>
                        {Page2data.map((val, id) => { return <option>{val.position}</option> })}
                    </select>
                </div>
                <div>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="name4"
                        name="name4"
                        placeholder="Select Player">
                        <option disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { return <option>{val.fname} {val.lname}</option> })}
                    </select>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="position4"
                        name="positon4"
                        placeholder="Select Position" >
                        <option disabled hidden selected>Select Position</option>
                        {Page2data.map((val, id) => { return <option>{val.position}</option> })}
                    </select>
                </div>
                <div>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="name5"
                        name="name5"
                        placeholder="Select Player" >
                        <option disabled hidden selected>Select Player</option>
                        {Page2data.map((val) => { return <option>{val.fname} {val.lname}</option> })}
                    </select>
                    <select
                        className="p2select"
                        onChange={(e) => InputEvent(e)}
                        label="position5"
                        name="positon5"
                        placeholder="Select Position">
                        <option disabled hidden selected>Select Position</option>
                        {Page2data.map((val, id) => { return <option>{val.position}</option> })}
                    </select>
                </div>
                <button className="savebtn" type="submit" >Save</button>
            </form>
        </div>
    </>
    )
}
export default FirstQuarter;