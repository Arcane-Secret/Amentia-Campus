const myStatus = "HTTP/1.1 200 OK";
const myData = '{"balance":1000000,"resMsgInfo":"","resFlagInfo":0,"prepayAmount":2,"returnMoney":2,"spending":0}';
//{"balance":7.16,"resMsgInfo":"","resFlagInfo":0,"prepayAmount":2,"returnMoney":2,"spending":0}

const myResponse = {
    status: myStatus,
    body: myData // Optional.
};

$done(myResponse);