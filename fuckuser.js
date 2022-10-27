var body =  $request.body;
var obj = JSON.parse(body);
if(obj.hasOwnProperty("memberID"))
{
    var member = 1018000 + Math.ceil(Math.random()*300)
    obj["memberID"] = member.toString();
    body = JSON.stringify(obj);
}
console.log($request.url);
$done(body);