import React, { useEffect, useState } from "react"

const FirstQuarter = (props) => {
    const [Page2data, setPage2data] = useState([]);
    useEffect(() => {
        setPage2data(props.Playerlist);
        console.log('dfdsfds',Page2data);
    }, [])

    function InputEvent(e) {
        const name = e.target.value;
        console.log(name);
        Page2data.map((val)=>{ return val}).map((val1)=>{return (val1.disable = "false")})
        // Page2data.map((val)=>{return })
        // const fil = Page2data.filter((val, e) => { return (name.includes(val.fname))});
        // fil[0].disable="true";
        // console.log(fil, "filterrrr");
        // setPage2data(fil);
        // console.log(Page2data, "Page2 datataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    }
 
    console.log(props.Playerlist, "dataaaaaaaaa")
    return (<>
        <div className="form fqform" style={{ width: "100%" }}>
            <form >
                <div>
                    <select class="P2select" type="text" onChange={InputEvent} name="fname" placeholder="Select Player" required >
                        <option selected disabled hidden>Select Player</option>
                        {Page2data.map((val) => { return (<option  disabled = {val.disable}>{val.fname} {val.lname}</option>) })}
                    </select>

                    <select class="P2select P2selectposition" type="text" name="position" placeholder="Enter Position">
                        <option selected disabled hidden>Select Position</option>
                        {Page2data.map((val) => { return (<option>{val.position}</option>) })}
                    </select>
                </div>

                <div>
                    <select class="P2select" type="text" onChange={InputEvent} name="fname" placeholder="Select Player" required >
                        <option selected disabled hidden>Select Player</option>
                        {Page2data.map((val) => { return (<option>{val.fname} {val.lname}</option>) })}
                    </select>

                    <select class="P2select P2selectposition" type="text" onChange={InputEvent} name="position" placeholder="Enter Position">
                        <option selected disabled hidden>Select Position</option>
                    </select>
                </div>
                <div>
                    <select class="P2select" type="text" onChange={InputEvent} name="fname" placeholder="Select Player" required >
                        <option selected disabled hidden>Select Player</option>
                        {Page2data.map((val) => { return (<option>{val.fname} {val.lname}</option>) })}
                    </select>

                    <select class="P2select P2selectposition" type="text" onChange={InputEvent} name="position" placeholder="Enter Position">
                        <option selected disabled hidden>Select Position</option>
                    </select>
                </div>
                <div>
                    <select class="P2select" type="text" onChange={InputEvent} name="fname" placeholder="Select Player" required >
                        <option selected disabled hidden>Select Player</option>
                        {Page2data.map((val) => { return (<option>{val.fname} {val.lname}</option>) })}
                    </select>

                    <select class="P2select P2selectposition" type="text" onChange={InputEvent} name="position" placeholder="Enter Position">
                        <option selected disabled hidden>Select Position</option>
                    </select>
                </div>

                <button type="submit" className="savebtn">Save</button></form>
        </div>
    </>)
}
export default FirstQuarter;