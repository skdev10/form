function validate(){
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;

    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var numberRegex = /^\d+$/;

if(!nameRegex.test(fName)){
        //alert('Invalid First Name');
        document.getElementById('fName').style.borderColor = "red"; 
        return;
    }
    if(!nameRegex.test(lName)){
        alert('Invalid Last Name');
        return;
    }

    if(email.length<1){
        alert('Invalid email');
        return;
    }

    if(!email.includes("@")){
        alert('Invalid email');
        return;
    }
    if(!email.includes(".com")){
        alert('Invalid email');
        return;
    }
    if(!numberRegex.test(contact)){
        alert('Invalid Contact Number');
        return;
    }

    alert("Successfully Submited ");

    document.getElementById('fName').value = "";
    document.getElementById('lName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('contact').value = "";
    document.getElementById('comments').value = "";
}
                    function showMap()
                    {
                        var coordinates = {lat:24.92734,lng:67.0331};
                        var map = new google.maps.Map(document.getElementById("map"),{
                            zoom:16,
                            center:coordinates,
                            });
                        var marker = new google.maps.Marker({
                            position:coordinates,
                            map:map
                            });
                    }