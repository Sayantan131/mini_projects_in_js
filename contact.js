



function send() {
    // console.log("function call");
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var Contact = document.getElementById("Contact").value;
    var Subject = document.getElementById("Subject").value;
    var Message = document.getElementById("Message").value;

    var body="Name: " + Name + "<br/>Email: " + email + "<br/>Contact: " + Contact + "<br/>Subject" + Subject + "<br/> Message: " + Message;
    // console.log(body);

    Email.send({
        //  Host: "smtp.elasticemail.com",
         SecureToken : "514c66d9-301b-4658-87d4-d402efa6e159",
        // Username: "maitysayantan67@gmail.com",
        // Password: "76C139FB4D9A675559F1A3A5C6AA40EEAF4A",   //backup-code fot smtp- 555788
        To: 'maitysayantan67@gmail.com',
        From: "maitysayantan67@gmail.com",
        Subject: Subject,
        Body: body
    }).then(
        message => {
            if(message=="OK"){
                swal("Successfull!", "Your  Data is Successfully Received!", "success");
            }
            else{
                swal("Something Went Wrong!", "Your  Data is not Successfully Received!", "warning");   
            }
        }
    );
}