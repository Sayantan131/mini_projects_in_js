function send() {
    console.log("function call");
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "maitysayantan67@gmail.com",
        Password: "76C139FB4D9A675559F1A3A5C6AA40EEAF4A",   //backup-code fot smtp- 555788
        To: 'maitysayantan111@gmail.com',
        From: "maitysayantan67@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}