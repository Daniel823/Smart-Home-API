module.exports = (req, res, next) => {
    const accept = req.get('Accept');
    const contentType = req.get('Content-Type');
    const clientType = req.get('Client-Type');
    const requestList = ['alexa-client','android-client','window-controller'];

    console.info('request body', req.body)

    if(accept == '*/*' || contentType == '*/*'){
      res.status(404).send({
          errors: [{
              status: '404',
              title: 'Not Found',
              detail: 'Accept and Content-Type are required'
          }]
      });
      return;
    }
    if(accept != 'application/json' || contentType != 'application/json'){
      res.status(415).send({
          errors: [{
              status: '415',
              title: 'Unsupported Media Type',
              detail: 'Accept or Content-Type media not supported'
          }]
      });
      return;
    }

    else{
      next()
    }
  }
