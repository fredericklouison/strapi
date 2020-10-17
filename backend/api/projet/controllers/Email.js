module.exports={

    index: async ctx=>{
        await strapi.plugins['email'].services.email.send({
            to: 'louison.frederick425@gmail.com',
            from: 'louison.frederick425@gmail.com',
            replyTo: 'louison.frederick425@gmail.com',
            subject: 'Use strapi email provider successfully',
            text: '<h1>Hello world!</h1>',
            html: '<h1>Hello world!</h1>',
          });
          
          ctx.send('Email sent');
    }
}