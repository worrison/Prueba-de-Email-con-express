let nodeMailer= require('nodemailer');
let email={};


let loginInfo={

    service:'Gmail',
    auth:{
         user:'tu_email',
         pass:'password'
    },
    tls:{
        rejectedUnauthorized:false
    }
}

let emailInfo={
    from:"tu_email",
    headers:{}
}

email.transportar = nodeMailer.createTransport(loginInfo,emailInfo)
module.exports = email;



