const myStatus = "HTTP/1.1 200 OK";
/*
Server: nginx/1.17.0
Date: Tue, 26 Apr 2022 03:18:55 GMT
Content-Length: 70
Connection: close
*/

const myData = '{"balance":1000000,"orderNo":"XXXXXXXXXXXXXXXXXXXXX","flag":0,"errmsg":""}';
const myResponse = {
    status: myStatus,
    body: myData // Optional.
};


$done(myResponse);