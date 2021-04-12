import React, { useCallback, useState } from "react"
import Select from 'react-select';
import TextField from "@material-ui/core/TextField";
import ValidateInfo from "./ValidateForm"


const ComposeTeam = (props, callback) => {
    const [errors, setErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const options = [
        { value: 'Select', label: 'Select', disabled: true },
        { value: 'Point Guard', label: 'Point Guard' },
        { value: 'Shooting Guard', label: 'Shooting Guard' },
        { value: 'Small Forward', label: 'Small Forward' },
        { value: 'Power Forward', label: 'Power Forward' },
        { value: 'The Center', label: 'The Center' }
    ]
    
    const [Values, setValues] = useState("");
    const [Playerdata, setPlayerdata] = useState([]);

    const InputEvent = (e) => {
        const { name, value } = e.target;
        props.setdata({ ...props.data, [name]: value });
    }

    const InputEvent1 = (e) => {
        const data = { ...props.data }
        data.position = e.value;
        setValues(e.value);
        props.setdata(data);
    }
    console.log(props.data, "dataaaa");

    const Submit = (e) => {
        setErrors(ValidateInfo(props))
        props.setdata({ fname: "", lname: "", height: "", position: "" })
        e.preventDefault();
    }

    function Click() {
        const item = props.data;
        if (props.data.fname !== "" && props.data.lname !== "" && props.data.height !== "" && props.data.position !== "") {
            props.Playerlist.push(item);
        }
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
                type="number"
                onChange={InputEvent}
                value={props.data.height}
                variant="outlined"
                name="height"
                value={props.data.height}
                InputProps={{ inputProps: { min: 152, max: 305 } }}
                label="Height"
                placeholder="Enter Height (in cms)"
            />
            {errors.height && <p className="error">**{errors.height}</p>}
            <Select
                className="p1select"
                onChange={InputEvent1}
                label="position"
                name="positon"
                value={props.data.position}
                placeholder="Select Position"
                options={options}
            />
            {errors.position && <p className="error">**{errors.position}</p>}

            <button type="submit" onClick={(e) => Click(e)} className="savebtn">Save</button>
            <button className="savebtn" onClick={() => {
                props.setShow(1);
            }}>Next > </button>
        </form>
    </div>
</>)
}
export default ComposeTeam;