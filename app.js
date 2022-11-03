
function DelAvTallet() {
    var prosent = window.prompt("del av tallet");

    var heleTallet = window.prompt("hele tallet");
    
    
    var svar = heleTallet % prosent;
    alert (svar);

} 

document.forms["temperature_form"].onsubmit = function(){
    var c = document.getElementById("converterCtoF").value;
    var f = (9/5)*c + 32;
    alert(f);
    return false;
}