var body =  $response.body;
console.log("傻逼工贸 response:\n"+ $response.body);

var obj = JSON.parse(body);
if(obj.hasOwnProperty("balance"))
{

    //obj["balance"] = 1000000;
    // obj["coldWater"] = 0.001;
    // obj["hotWater"] = 0.001;
    obj["orderStatus"] = 0;

    // if (obj["prepayAmount"] == 5)
    // {
    //     //obj["prepayAmount"] = 100;
    //     obj["coldWater"] = 0;
    //     obj["hotWater"] = 0;
    // }
    body = JSON.stringify(obj);

}
else{
    var b = JSON.parse($request.body);
    console.log("傻逼工贸 设备ID:"+ b['deviceId'].toString());
    body = '{"coldWater":0.005,"hotWater":0.005,"deviceTypeName":"没钱了兄弟","pulse":0,"orderStatus":"0","balance":3.88,"deviceNo":"0000000000000000","flag":0,"orderNo":"","isMine":"","deviceName":"穷","oldconnectNo":"","connectNo":"4600","userMobile":"00000000000","prepayAmount":100,"errmsg":"","deviceId":15391,"mobile":"00000000000"}    ';
    var obj = JSON.parse(body);
    obj["deviceId"] = b['deviceId'];
    obj["balance"] = 100;
    obj["coldWater"] = 0.0001;
    obj["hotWater"] = 0.0001;
    obj["orderStatus"] = 0;
    if (obj["prepayAmount"] == 5)
    {
        //obj["prepayAmount"] = 100;
        // obj["coldWater"] = 0;
        // obj["hotWater"] = 0;
    }
    body = JSON.stringify(obj);

}
$done(body);

// const myStatus = "HTTP/1.1 200 OK";
// var body = '{"coldWater":0.05,"hotWater":0.05,"deviceTypeName":"洗澡","pulse":24,"orderStatus":"0","balance":6.83,"deviceNo":"0000000000000000","flag":0,"orderNo":"","isMine":"","deviceName":"7-515","oldconnectNo":"","connectNo":"7998","userMobile":"00000000000","prepayAmount":5,"errmsg":"","deviceId":13383,"mobile":"00000000000"}';
// var obj = JSON.parse(body);
// obj["balance"] = 111;
// //obj["deviceId"] = 13383;

// obj["orderStatus"] = 0;
// obj["prepayAmount"] = 100;

// body = JSON.stringify(obj);
// var myResponse = {
//     status: myStatus,
//     body: body // Optional.
// };


// $done(myResponse);
