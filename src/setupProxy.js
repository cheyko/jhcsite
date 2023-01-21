const {createProxyMiddleware} = require('http-proxy-middleware');
 
module.exports = function(app) {
  //app.use(createProxyMiddleware('https://jamaica-gleaner.com/feed', { target: 'https://jamaica-gleaner.com/feed' }));
  app.use(createProxyMiddleware('/api', { target: 'http://127.0.0.1:5000' , changeOrigin: true }));
  
}