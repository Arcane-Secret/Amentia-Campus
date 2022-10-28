const myStatus = "HTTP/1.1 200 OK";
const myData = '{"balance":111111,"resMsgInfo":"","resFlagInfo":0,"prepayAmount":2,"returnMoney":0,"spending":0}';

const myResponse = {
    status: myStatus,
    body: myData // Optional.
};

$done(myResponse);