function myFunction() {
  var x = document.getElementById("mySelect").value;
  if (x == "2002"){
        year1();
  } else if (x == "2008"){
        year2();
  } else {
        year3();
   }
}

function year1() {
    document.getElementById('myImage').src='./image/map2002.png';
    document.getElementById('stats1').innerHTML="United States 2002";
	document.getElementById('stats2').innerHTML="Population = 287,625,193";
	document.getElementById('stats3').innerHTML="GDP per capita = 37,971$";
	document.getElementById('stats4').innerHTML="bachelor's degrees earned = 1348.81(in 1000s)";
	document.getElementById('imgTitle').innerHTML="The Most Common Job In Each State 2002";
}
function year2() {
    document.getElementById('myImage').src='./image/map2008.png';
    document.getElementById('stats1').innerHTML="United States 2008";
	document.getElementById('stats2').innerHTML="Population = 304,093,966";
	document.getElementById('stats3').innerHTML="GDP per capita = 48,283$";
	document.getElementById('stats4').innerHTML="bachelor's degrees earned = 1601.4(in 1000s)";
	document.getElementById('imgTitle').innerHTML="The Most Common Job In Each State 2008";
}
function year3() {
    document.getElementById('myImage').src='./image/map2014.png';
    document.getElementById('stats1').innerHTML="United States 2014";
	document.getElementById('stats2').innerHTML="Population = 318,563,456";
	document.getElementById('stats3').innerHTML="GDP per capita = 55,025$";
	document.getElementById('stats4').innerHTML="bachelor's degrees earned = 1984.97(in 1000s)";
	document.getElementById('imgTitle').innerHTML="The Most Common Job In Each State 2014";
}