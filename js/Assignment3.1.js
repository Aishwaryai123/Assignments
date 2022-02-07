var currDate=new Date();
document.write(currDate);


var time=currDate.getHours();

if(time<=12)
    {
        document.write("good morning");
    }
    else if(time>=12 && time<=17)
    {
        document.write("good Afternoon");
    }
    else
    {
        document.write(" </br>good Evening");
    }