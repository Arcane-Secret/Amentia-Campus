const myStatus = "HTTP/1.1 200 OK";
const myData = '{"balance":100,"flag":0,"prepayAmount":100,"errmsg":"","returnMoney":0,"spending":0}';
const myResponse = {
    status: myStatus,
    body: myData // Optional.
};

$done(myResponse);