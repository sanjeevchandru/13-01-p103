document.write("67.to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied."+"<br>");
function test67(str){
    var x=str.length;
    if(str.substring(0,1)=="p" || str.substring(str.length-1)=="p"){
        x--;
        return str.substring(1,x);
    }
    return str;
}
document.write("The string :pythonp ,Ans :"+test67("pythonp")+"<br><br>");