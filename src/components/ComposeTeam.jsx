import React, {  useRef, useState } from "react"
import Select from 'react-select';
import TextField from "@material-ui/core/TextField";
import ValidateInfo from "./ValidateForm"
import makeAnimated from 'react-select/animated';

const ComposeTeam = (props) => {
    const [errors, setErrors] = useState({});
let options=[
                    {value:"Point Guard", label :"Point Guard"},
                     {value:"Shooting Guard",label :"Shooting Guard"},
                    {value:"Small Forward", label :"Small Forward"},
                    {value:"Power Forward",label :"Power Forward"},
                    {value:"The Center", label:"The Center"}
]
const selectInputRef = useRef();
    const [Values, setValues] = useState("");
    const [Playerdata, setPlayerdata] = useState([]);
    const animatedComponents = makeAnimated();
    const InputEvent = (e) => {
        const { name, value } = e.target;
        var letters = /^[A-Za-z]+$/;
        if(value==="" || value.match(letters)){
        props.setdata({ ...props.data, [name]: value});}
    }

    const InputEvent1 = (e) => {
        const data = { ...props.data }
        console.log(e);
        data.position = e
        props.setdata(data);
    }

    const Submit = (e) => {
        e.preventDefault();   
        console.log(errors, "dataaaa");
    }

    function Click() {
        setErrors(ValidateInfo(props));
        props.setErrors1({});
        if (props.data.fname !== "" && props.data.lname !== "" && props.data.height !== "" && props.data.position !== "" && props.data.height<320 && props.data.height>162) {
            let arr = {fname:"", lname :"", height:"", position: "" }
            var item = props.data;
            item.id = props.Playerlist.length;
            props.Playerlist.push(item);
            selectInputRef.current.select.clearValue();
            props.setdata(arr);
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
                <Select
                    ref={selectInputRef}
                    className="react_select"
                    onChange={(e) =>InputEvent1(e)}
                    value={props.data.position}
                    name="position"
                    components={animatedComponents}
                    options={options}
                    placeholder="Select Position"
                    isMulti
                />
                {errors.position && <small className="error">**{errors.position}</small>}
                {errors.submit && <small className="submit">{errors.submit}</small>}
                {props.errors1.adderror!="" && <small className="error">{props.errors1.adderror}</small>}

                <button type="submit" onClick={(e) => Click(e)} className="savebtn">Save</button>
            </form>
        </div>
    </>)
}
export default ComposeTeam;