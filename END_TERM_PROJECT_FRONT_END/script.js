function f(){
var country=document.getElementById('c').value;
var from=document.getElementById('from').value;
var to=document.getElementById('to').value;

if(country=="" || from=="" || to=="")
{alert("Please fill all the empty fields!");}
else
{

var reqString = "https://api.covid19api.com/country/" + country + "?from=" + from + "T00:00:00Z&to=" + to + "T00:00:00Z";

 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var data =this.responseText;
      //document.getElementById("demo").innerHTML = data;
      var ddata = JSON.parse(data);
      var h = "";
      for(var i =0 ;i<ddata.length ;i++){
      h+="<div class='bg'><center><p>Active Cases:"+ddata[i].Active +"</p><p> Deaths : "+ddata[i].Deaths+"</p><p>Confirmed Cases: "+ddata[i].Confirmed+"</p></center></div><br/>"
      }
     var act = ddata[0].Active;
     var conf =ddata[0].Confirmed;
       var deaths=ddata[0].Deaths;
       
       document.getElementById("demo").innerHTML = h;        
    }
  };
  xhttp.open("GET", reqString, true);
  xhttp.send();

} 
}