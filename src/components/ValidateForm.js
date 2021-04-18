
export default function ValidateInfo(props) {
    let errors = {};
    if (!props.data.fname) {
        errors.fname = "Enter First Name"
    }
    if (!props.data.lname) {
        errors.lname = "Enter Last Name"
    }
    if (props.data.height === "") {
        errors.height = "Enter Your Height"
    }
    if (props.data.height != "" && (props.data.height < 162 || props.data.height > 304)) {
        errors.height = "Height Should be Between 162cms to 304cms"
    }

    if (props.data.position === "") {
        errors.position = "Enter Player Position"
    }
    if (props.Playerlist.length>=0 &&
        props.data.fname !== "" &&
        props.data.lname !== "" &&
        props.data.height !== "" &&
        props.data.position !== ""
    ) { errors.submit = `Congrats! Player${props.Playerlist.length+1} has been Added` }
    return errors;
}

function ValidateInfo1(props) {
    let errors1 = {};
    if (props.Playerlist.length <= 5) {
        errors1.adderror = "Add at least 5 Players"
    }
    return errors1;
}

function ValidateInfo2(props) {
    let errors = {};
    return errors;

}
export { ValidateInfo2, ValidateInfo1 };