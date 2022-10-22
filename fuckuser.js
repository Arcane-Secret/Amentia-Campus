var body =  $request.body;
var obj = JSON.parse(body);
if(obj.hasOwnProperty("memberID"))
{
    obj["memberID"] = "1018160";
    body = JSON.stringify(obj);
}
console.log($request.url);
$done(body);