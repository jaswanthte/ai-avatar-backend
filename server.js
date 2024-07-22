// server.js
const app = require('./app');
const {API_ENDPOINTS} = require('./constants/apiEndpoints');


app.listen(API_ENDPOINTS.PORT, () => {
  console.log(`Server running on port ${API_ENDPOINTS.PORT}`);
});
