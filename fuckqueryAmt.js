var body =  $response.body;
var obj = JSON.parse(body);
if(obj.hasOwnProperty("balance"))
{

    obj["balance"] = 1091.55;
    obj["coldWater"] = 0.001;
    obj["hotWater"] = 0.001;
    obj["orderStatus"] = 0;

    if (obj["prepayAmount"] == 5)
    {
        obj["prepayAmount"] = 100;
        obj["coldWater"] = 0;
        obj["hotWater"] = 0;
    }
    body = JSON.stringify(obj);

}
else{
    body = '{"coldWater":0.005,"hotWater":0.005,"deviceTypeName":"没钱了兄弟","pulse":0,"orderStatus":"0","balance":3.88,"deviceNo":"0000000000000000","flag":0,"orderNo":"","isMine":"","deviceName":"穷","oldconnectNo":"","connectNo":"4600","userMobile":"00000000000","prepayAmount":100,"errmsg":"","deviceId":15391,"mobile":"00000000000"}    ';
    var obj = JSON.parse(body);
    obj["balance"] = 1091.55;
    obj["coldWater"] = 0.0001;
    obj["hotWater"] = 0.0001;
    obj["orderStatus"] = 0;
    if (obj["prepayAmount"] == 5)
    {
        obj["prepayAmount"] = 100;
        obj["coldWater"] = 0.05;
        obj["hotWater"] = 0.01;
    }
    body = JSON.stringify(obj);

}
$done(body);