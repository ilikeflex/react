require('dotenv').config();

console.log(process.env.USER_ID); // "239482"
console.log(process.env.USER_KEY); // "foobar"
console.log(process.env.NODE_ENV); // "development"


/*
Running without import packaging in the code
//require('dotenv').config();
node -r dotenv/config index.js


C:\data\rajan\javascript\react\react\module2-01-pre-source-maps\src3>node -r dotenv/config index.js
2394812
keyfoobar
env_development

*/
