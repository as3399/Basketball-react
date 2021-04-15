import React, { useCallback, useEffect, useState } from "react"
import Select from 'react-select';
import TextField from "@material-ui/core/TextField";
import ValidateInfo from "./ValidateForm"
import {ValidateInfo1} from "./ValidateForm"

const ComposeTeam = (props, callback) => {
    const [errors, setErrors] = useState({});

    const [Values, setValues] = useState("");
    const [Playerdata, setPlayerdata] = useState([]);

    const InputEvent = (e) => {
        const { name, value } = e.target;
        var letters = /^[A-Za-z]+$/;
        if(value==="" || value.match(letters)){
        props.setdata({ ...props.data, [name]: value });}
    }

    const InputEvent1 = (e) => {
        const data = { ...props.data }
        data.position = e.target.value;
        setValues(e.target.value);
        props.setdata(data);
    }

    const Submit = (e) => {
        e.preventDefault();
        setErrors(ValidateInfo(props));
        props.setErrors1({});
        let arr = {fname:"", lname :"", height:"", position: "default"}
    

        props.setdata(arr);

        console.log(arr, "dataaaa");
        console.log(errors, "dataaaa");
    }

    function Click() {
        const item = props.data;
        if (props.data.fname !== "" && props.data.lname !== "" && props.data.height !== "" && props.data.position !== "default") {
            props.Playerlist.push(item);
        }

    }
    function handlechangeheight(e) {
        var numbers = /^[-+]?[0-9]+$/;
        const { name, value } = e.target;
        if(value ==="" || value.match(numbers)){
        props.setdata({ ...props.data, [name]: value });}
        console.log(props.data, "dataaaaaa")
    }


    console.log(props.Playerlist);

    return (<>

        <div className="form" >
            <form onSubmit={Submit}>
                <TextField
                    className="txtfields"
                    type="text"
                    onChange={InputEvent}
                    value={props.data.fname}
                    variant="outlined"
                    name="fname"
                    label="First Name"
                    value={props.data.fname}
                />
                {errors.fname && <p className="error">**{errors.fname}</p>}
                <TextField
                    className="txtfields"
                    type="text"
                    onChange={InputEvent}
                    value={props.data.lname}
                    variant="outlined"
                    name="lname"
                    value={props.data.lname}
                    label="Last Name"
                />
                {errors.lname && <p className="error">**{errors.lname}</p>}
                <TextField
                    className="txtfields"
                    onChange={handlechangeheight}
                    
                    variant="outlined"
                    name="height"
                    value={props.data.height}
                    InputProps={{ inputProps: { min: 152, max: 305 } }}
                    label="Height"
                    placeholder="Enter Height (in cms)"
                />
                {errors.height && <p className="error">**{errors.height}</p>}
                <select
                    className="p1select"
                    onChange={InputEvent1}
                    value={props.data.position}
                    name="position"
                    placeholder="Select Position"
                  
                >
                    <option value="default" disabled selected hidden>Select..</option>
                    <option value="Point Guard">Point Guard</option>
                    <option value="Shooting Guard">Shooting Guard</option>
                    <option value="Small Forward">Small Forward</option>
                    <option value="Power Forward">Power Forward</option>
                    <option value="The Center">The Center</option>
                </select>
                {errors.position && <p className="error">**{errors.position}</p>}
                {errors.submit && <p className="submit">{errors.submit}</p>}
                {props.errors1.adderror!="" && <p className="error">{props.errors1.adderror}</p>}

                <button type="submit" onClick={(e) => Click(e)} className="savebtn">Save</button>
            </form>
        </div>
    </>)
}
export default ComposeTeam;