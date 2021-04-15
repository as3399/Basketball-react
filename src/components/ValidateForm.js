
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
    
    if (props.data.position == "default") {
        errors.position = "Enter Player Position"
    }
    if(
        props.data.fname !=="" &&
        props.data.lname !=="" &&
        props.data.height !=="" &&
        props.data.position !=="default"
    ){ errors.submit=`Congrats! Player${ props.Playerlist.length} has been Added`}
   
    return errors;
}

 function ValidateInfo1(props) {
    let errors1 = {};
    if (props.Playerlist.length<=5){
        errors1.adderror= "Add at least 5 Players"
    }
    return errors1;
}



function ValidateInfo2(props) {
    let errors = {};
    if (props.AddPlayer.name2 == props.AddPlayer.name1 ||
        props.AddPlayer.name3 == props.AddPlayer.name1 ||
        props.AddPlayer.name4 == props.AddPlayer.name1 ||
        props.AddPlayer.name5 == props.AddPlayer.name1 ||
        props.AddPlayer.name3 == props.AddPlayer.name2 ||
        props.AddPlayer.name4 == props.AddPlayer.name2 ||
        props.AddPlayer.name4 == props.AddPlayer.name3 ||
        props.AddPlayer.name4 == props.AddPlayer.name5 ||
        props.AddPlayer.name5 == props.AddPlayer.name2 ||
        props.AddPlayer.name5 == props.AddPlayer.name3
    ) {
         errors.name = "**Cannot Add Single Player Multiple Times"
    }
    else if(props.AddPlayer.position2 == props.AddPlayer.position1 ||
        props.AddPlayer.position3 == props.AddPlayer.position1 ||
        props.AddPlayer.position4 == props.AddPlayer.position1 ||
        props.AddPlayer.position5 == props.AddPlayer.position1 ||
        props.AddPlayer.position3 == props.AddPlayer.position2 ||
        props.AddPlayer.position4 == props.AddPlayer.position2 ||
        props.AddPlayer.position4 == props.AddPlayer.position3 ||
        props.AddPlayer.position4 == props.AddPlayer.position5 ||
        props.AddPlayer.position5 == props.AddPlayer.position2 ||
        props.AddPlayer.position5 == props.AddPlayer.position3
    ) {
         errors.name = "**Cannot Add Same Player for Multiple Position"
    }
    else {errors.name1 = "";}
    return errors;

}
export { ValidateInfo2 , ValidateInfo1 };