var companyName = "Cybage Software Pvt Ltd";
var check = companyName.includes("t");
var position = companyName.search("t");
if (check) {
    document.write("t find at position" + position);
}
else {
    document.write("z is not present in the string");

}

document.write("</br>" + companyName);
var lower = companyName.toLowerCase();
document.write("</br>" +lower);
var upper = companyName.toUpperCase();
document.write("</br>" +upper);
