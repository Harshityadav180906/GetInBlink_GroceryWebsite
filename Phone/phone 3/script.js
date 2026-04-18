function checkBTN(){
    const pincode = document.getElementById("pincode_input").value;
    if (pincode.length !== 6){
        document.getElementById("check_para").innerHTML = "Invalid";
    }
    else if(pincode == 110038){
        document.getElementById("check_para").innerHTML = "Delivery In 13min";
    }
    else if(pincode == 122103){
        document.getElementById("check_para").innerHTML = "Delivery In 7min";
    }
    else{
        document.getElementById("check_para").innerHTML = "Not Possible, We are working hard to get delevery possible";
    }
}