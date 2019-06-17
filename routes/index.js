var express = require('express');
var hbs = require('nodemailer-express-handlebars');
var router = express.Router();
let email = require('../config/emailConfig')


let options = {
  viewEngine: {
      extname: '.hbs',
      layoutsDir: './views/email_templates/layout',
      defaultLayout : 'email-body.hbs',
      partialsDir : './views/email_templates/partials/'
  },
  viewPath: 'views/email_templates',
  extName: '.hbs'
};
email.transportar.use('compile',hbs(options));
// email.transportar.use('compile', hbs(options));

let message={
  
  to:'tu_email',
  subject:' QUE PASA MEN',
  template:'email-template',
  context:{
    name:'Producto estrella',
    img:"https://miviaje.com/wp-content/uploads/2017/12/landmannalaugar-en-islandia.jpg"
    
  },
  attachments:[
    {
      filename:'paciencia.jpg',
      path:`${__dirname}/../paciencia.jpg`,
      content:'aqui tienes'
    }
  ]

}

/* GET home page. */
router.get('/', function(req, res, next) {

  email.transportar.sendMail(message,(error,info) => {
    console.log(error);
    if(error){
        res.render('index', { title: 'El email no se ha enviado correctamente' });
    }else
    {
        email.transportar.close();
        res.render('index', { title: 'Email enviado correctamente' });
    }
  })

});


module.exports = router;
