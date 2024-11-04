function SendMail() {
    var params = {
        from_name : document.getElementById("from_name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_24d2v6c","template_obz7fn8", params).then(alert("Email sent"))
}