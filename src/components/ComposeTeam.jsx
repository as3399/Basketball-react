import React, { useState } from "react"
import SortableSelect from 'react-select';

const ComposeTeam = (props) => {
    const options=[
         { value: 'Select', label: 'Select' },
  { value: 'Point Guard', label: 'Point Guard' },
  { value: 'Shooting Guard', label: 'Shooting Guard' },
  { value: 'Small Forward', label: 'Small Forward' },
  { value: 'Power Forward', label: 'Power Forward' },
  { value: 'The Center', label: 'The Center' }
    ]
    const [Playerdata, setPlayerdata] = useState([]);
    const InputEvent = (e) => {
        //  e.target.name === "fname" ? data.FName = e.target.value : e.target.name === "lname" ? data.LName = e.target.value : e.target.name === "height" ? data.Height = e.target.value : data.Position = e.target.value ;
        // console.log("data ", data);
        const { name, value } = e.target;
        // onChange("topics", value);
        props.setdata({ ...props.data, [name]: value });
        console.log(props.data, "data");
    }
    const Submit = (e) => {
        props.Playerlist.push(props.data);
        props.setdata({ fname: "", lname: "", height: "", position: null })
        e.preventDefault();
    }

    return (<>
    
        <div className="form" >
            <form onSubmit={Submit}>
                <input type="text" onChange={InputEvent} value={props.data.fname} name="fname" placeholder="Enter First Name" required />
                <input type="text" onChange={InputEvent} value={props.data.lname} name="lname" placeholder="Enter Last Name" required />
                <input type="text" onChange={InputEvent} value={props.data.height} name="height" placeholder="Enter Height" required />
                <SortableSelect  type="text" onChange={InputEvent} name="position" placeholder="Enter Position"
                    options={options}
                    onChange={InputEvent}
                    />
                
                <button type="submit" className="savebtn" onClick={()=>{console.log(props.Playerlist);
                    
                }}>Save</button>
                <button  className="savebtn" onClick={()=>{
                 props.setShow(1);
               }}>Next > </button>
                </form>
        </div>
    </>)
}
export default ComposeTeam;