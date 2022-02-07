var msg;
msg="<p><code>The Script is located in external script file called as common.js</code></p>"

function addNumbers(headparam, bodyparam)
{
    document.write(msg);
    var result=headparam+bodyparam;
    document.write("value of "+headparam+"value of bodyparam"+bodyparam+ "=" +result);
}