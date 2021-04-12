
export default function ValidateInfo(props) {
    let errors = {};
    if (!props.data.fname) {
        errors.fname = "Enter First Name"
    }
    if (!props.data.lname) {
        errors.lname = "Enter Last Name"
    }
    if (!props.data.height) {
        errors.height = "Enter Your Height"
    }
    if (!props.data.position) {
        errors.position = "Enter Player Position"
    }
    return errors;
}
function ValidateInfo2(props){
    let errors = {};
   for(let j=0; j<=props.AddPlayer.length; j++){
        for (let i=1; i<=props.AddPlayer.length; i++){
            if(props.AddPlayer[j].Name == props.AddPlayer[i].Name){
                errors.fname = props.AddPlayer[j].fname;
            }
            else errors.fname="";
        }
    }
return errors;
    
}
export {ValidateInfo2};