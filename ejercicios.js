function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}


  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  //FUCION para restringir a 5 numeros y no letras

  function numberOnly(id) {
    // Get element by id which passed as parameter within HTML element event
    var element = document.getElementById(id);
    // This removes any other character but numbers as entered by user
    element.value = element.value.replace(/[^0-9.-]/gi, "");
}
//ejercicio lineal 3

function ejercicioLineal3(){
  try{
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;
    var n3 = document.getElementById("number3").value;
    var n4 = document.getElementById("number4").value;
    var n5 = document.getElementById("number5").value;
    var resul = n1[0] + n2[1] +n3[2] +n4[3] +n5[4];

      document.getElementById("resul-Eje3").textContent = resul;
    



  }catch (error) {
    alert(error);
  }

}
function ejercicioLineal1(){
    var h = parseFloat(document.getElementById("altura").value);
    var d = parseFloat(document.getElementById("distancia").value);
    var a = Math.atan(h/d);

    var angulo = (Math.atan(h / d) / (Math.PI / 180)).toFixed(2);
    var g = Math.trunc(angulo);
    var min = ((angulo % 1).toFixed(2)) * 60;
    var seg = ((min % 1).toFixed(2)) * 60;
    document.getElementById("resul-Eje1").textContent  =  g + " º " + Math.trunc(min) + " ' " + Math.trunc(seg) + " ''";
}

//Ejercicio 1 alternativos
function vuelo(){
  var tv= parseInt(document.getElementById("minVuelo").value);
  var fvm = parseInt(document.getElementById("faseVueloMin").value);
  var fvs =  parseInt(document.getElementById("faseVueloSeg").value);
  var h;
  var c;
  parseFloat(c);
  var min;
  var r ;
  if(fvm <= 10){
    r = "El avion lleva "+fvm+" minutos en el despegue - tiempo de vuelo: 0:"+fvm+":"+fvs;
    document.getElementById("resul-Aeje1").textContent = r;  }
  else{

    if(fvm == tv-1 && fvs >= 45){
      c = fvm/60;
      min = c - Math.floor(c);
      min = min*60;
      h = Math.floor(c);
      r = "El avion esta aterrizando - tiempo de vuelo: "+h+":"+min.toFixed(0)+":"+fvs;
      document.getElementById("resul-Aeje1").textContent = r;  
    }else{
      c = fvm/60;
      min = c - Math.floor(c);
      min = min*60;
      h = Math.floor(c);
      r = "El avion aun esta en vuelo - tiempo de vuelo: " + h +":"+min.toFixed(0)+":"+fvs;
      document.getElementById("resul-Aeje1").textContent = r;  
    } 
  }
}
function kilometros(){
  var k = parseInt(document.getElementById("kilometros").value);
  var r,r2;
  var c;
  parseFloat(c);
  if(k <= 300){
    r = "El total a pagar es: $300000 con IVA incluido";
    document.getElementById("resul-Aeje3-1").textContent = r;
    k = 300000-(300000*0.20);
    r2 = "El total a pagar es: $"+k+" Sin IVA";
    document.getElementById("resul-Aeje3-2").textContent = r2;
  }else{
    if(k<=1000){
      k = k-300;
      k=k*15000+300000;
      r = "El total a pagar es: $"+k+" con IVA incluido";
      document.getElementById("resul-Aeje3-1").textContent = r;
      k = k-(k*0.20);
      k = Math.abs(k);
      r2 = "El total a pagar es: $"+k+" Sin IVA";
      document.getElementById("resul-Aeje3-2").textContent = r2;

    }else{
      k = k-1000;
      k=k*10000+300000+10500000;
      r = "El total a pagar es: $"+k+" con IVA incluido";
      document.getElementById("resul-Aeje3-1").textContent = r;
      k = k-(k*0.20);
      k = Math.abs(k);
      r2 = "El total a pagar es: $"+k+" Sin IVA";
      document.getElementById("resul-Aeje3-2").textContent = r2;
    }
  }
}
let cg=0;
let cv=0;
let aux = 0;
parseInt(cv);
parseFloat(cg);
parseFloat(aux);
function gasolina(){
  cv = cv+1;
  var g = parseFloat(document.getElementById("litros").value);
  if(g > aux){
    aux = g;
  }
  cg = cg + g;
  cg = cg*1.25;
  
  document.getElementById("resul-Reje1-1").textContent = "Total de vehiculos atendidos: "+cv;
  document.getElementById("resul-Reje1-2").textContent = "Total dinero recaudado: $"+cg;
  document.getElementById("resul-Reje1-3").textContent = "Vehiculo con mayor compra: $"+aux;

}

function NumNaturales(){
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var tbl = document.createElement('table');
  var i,x,x1,a,b;
  var c= 0;
  var table = document.getElementById("table1");
  parseInt(c);
  parseInt(i);
  for( i =1200; i<2000; i++){

    x = i%5;
    c = 0;
    if(x == 0){
      for(var j=6;j<i;j++){

        if(i%j ==0){
          if(primo(j)){
            a=i;
          }
          c = c+1;
        }

 
      }
      if(c==1){
        
          var fila="<tr><td>"+a+"</td><tr>";

        var btn = document.createElement("TR");
         btn.innerHTML=fila;
        document.getElementById("tabla1").appendChild(btn);

      }
    }


  }
 // tableCreate();
}
function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
/*
function voz(){

  let rec;
  if(!"webkitSpeechRecognition" in window){
    alert(" ERROR");
  }else{

    rec  = new webkitSpeechRecognition();
    rec.lang = "es-AR";
    rec.continuous =  true;
    rec.interim = true;
    rec.addEventListener("result", iniciar());
    rec.start();
  }

}

function iniciar(event){

  for( i = event.resultIndex; i < event.results.length; i++)
{
  document.getElementById('texto').innerHTML = event.results[i][0].transcript;
}
}*/
function voz(){
  rec.start();
}
let rec;
    if (!("webkitSpeechRecognition" in window)) {
    	alert("disculpas, no puedes usar la API");
    } else {
    	rec = new webkitSpeechRecognition();
    	rec.lang = "es-AR";
    	rec.continuous = true;
    	rec.interimResults = true;
    	rec.addEventListener("result",iniciar);
    }
function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
         document.getElementById('texto').innerHTML = event.results[i][0].transcript;
	}
}

function ejercicioLineal2(){
var n = parseFloat(document.getElementById("NumeEje2").value);
n = Math.abs(n); 
var decimal = n - Math.floor(n)

document.getElementById("resul-Eje2").textContent = decimal.toFixed(10);

}

function ejercicioAlternativo2(){
  var a = parseFloat(document.getElementById("numA").value);
  var b = parseFloat(document.getElementById("numB").value);
  var c = parseFloat(document.getElementById("numC").value);
  

  var x = (-b + Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
  var x1 = (-b - Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
  if(isNaN(x)){
    alert("las raices son imaginarias");
  
  }else{
    document.getElementById("resul-AEje2").textContent = "x1 = "+x.toFixed(2) +"  x2 = "+x1.toFixed(2);
  }
}

function edad(){
  var dateNac = new Date(document.getElementById("fechaNac").value);
  var hoy = new Date();
  if(dateNac.getUTCFullYear() >= 2021 && dateNac.getUTCMonth()>=8 ) alert("Ingrese una edad menor");
  if(hoy - dateNac < 0) return;
  let dias = hoy.getUTCDate() - dateNac.getUTCDate();
  let meses = hoy.getUTCMonth() - dateNac.getUTCMonth();
  let years = hoy.getUTCFullYear() - dateNac.getUTCFullYear();
  if(dias < 0) {
    meses--;
    dias = 30 + dias;
  }
  if(meses < 0) {
    years--;
    meses = 12 + meses;
  }

  document.getElementById("resul-Aeje4").textContent = "Tienes " +years +" años, "+meses +" meses y "+dias + " días";

}

function Rejercicio2(){
  var n  = parseInt(document.getElementById("numR2").value);

  if(numeroPerfecto(n)){
    document.getElementById("resul-Reje2-1").textContent = "Si es perfecto";
  }else{
    document.getElementById("resul-Reje2-1").textContent = "No es perfecto";
  }

var a = n;
  
  while(n != parseInt(reverse(n))){
    var n = n + parseInt(reverse(n)); 
  }
  

  if(reverse(a) == a){
    document.getElementById("resul-Reje2-2").textContent = "Si es capicua";
  }else{
    document.getElementById("resul-Reje2-2").textContent = "No es capicua";
  }
  document.getElementById("resul-Reje2-3").textContent = "El palíndromo es: " + n;
  document.getElementById("resul-Reje2-4").textContent = a==0?"El factorial es: "+ 1: "El factorial es: "+factorial(a);
 // document.getElementById("resul-Reje2-").textContent = factorion();

  document.getElementById("resul-Reje2-5").textContent = "Tiene  " + n.toString().length + " cifras";
}

function factorion(){
  const numeroInvertido = document.getElementById("numR2").value.toString().split('')
         

  var vector = new Array()

  var j=0;
  var acum=0;

  for (var i = numeroPerfecto.length-1; i >=0 ; i--) {
      j++;
    
      vector[j] =numeroInvertido[i];
      const nu= parseInt(vector[j])

      acum=acum+(factorial2(nu))

  }
  if(acum== document.getElementById("numR2").value)
      return "Si es factorion";
  else     return "No es factorion"
}



function  numeroPerfecto(numero){

  var s=0;

  var i;


  for(i = 0 ; i<numero; i++){

    if(numero%i == 0){

      s = s+ i;
    }
    if(i == numero -1){
      if(s == numero){
        return true;
      }else{
        return false;
      }
     
    }
  }

}
function reverse(s){
  s = s.toString();
  return s.split("").reverse().join("");
}

function factorial(n){
var f = 1;
  for(i = 1 ; i <= n ; i++){

    f = f*i;


  }
return f;
}

function Rejercicio4(){
  
  var tr = document.createElement('tr');

  var tbl = document.createElement('table');
  const a = ['1','2','3','4'];


    for (var i = 0; i <24 ; i++){
      var fila="<tr><td>"+(i)+"</td></tr> <tr><td>"+" &nbsp; "+permutations(a)[i]+"  &nbsp;"+"</td></tr>";

      var btn = document.createElement("TR");
       btn.innerHTML=fila;
      document.getElementById("tabla2").appendChild(btn);
    }      

}

function permutations(inputArr){
  const _permutations = [];

  const permute = (arr, permutation = []) => {
    if( ! arr.length){
      _permutations.push(permutation)
      return
    }
    for( let i in arr) {
      let curr = arr.slice();
      let next = curr.splice(i, 1);

      permute(curr, permutation.concat(next))
    }
  }
  permute(inputArr);
  return _permutations
}
function letrasCadenas(){
  
    var texto = document.getElementById("textoEje").value;
    var tr = document.createElement('tr');
    var tbl = document.createElement('table');
    var indices = [];
    parseInt(indices);
        var abc = "abcdefghijklmnñopqrstuvwxyz123456789";
    for(var i = 0; i < abc.length; i++){
      indices[i] = 0;
    }

    for(var j = 0; j < abc.length ; j++){

      for(var i = 0; i < texto.length; i++) {
        
        if(abc[j].toUpperCase()  === texto[i].toUpperCase() ){

          indices[j] = indices[j]+1;
        }
      }
    }
    for(var i = 0; i < abc.length; i++) {
      
      if(indices[i] != 0  ){
        var fila="<tr><td>"+abc[i]+"</td></tr> <tr><td>"+" &nbsp; "+indices[i]+"  &nbsp;"+"</td></tr>";
        var btn = document.createElement("TR");
        btn.innerHTML=fila;
        document.getElementById("tabla3").appendChild(btn);

      }
}
}
var sniper = document.getElementById("spinner");
sniper.style.visibility = 'hidden';
sniper.style.opacity = '0%';
function paresynones(){
  sniper.style.visibility = 'visible';
  
  sniper.style.opacity = '100%';

  setTimeout(function(){ 
    
    sniper = document.getElementById("spinner");
    sniper.style.visibility = 'hidden';
    sniper.style.opacity = '0%';

  var j1 = Number(document.getElementById("numO").value);

  var j2 = parseInt(getRandomArbitrary(1,100));
  document.getElementById("texto3").innerHTML = j2;

  var suma = j1 + j2;
  
  
  if(suma % 2 ===0){
    document.getElementById("texto3").innerHTML = j1 +" + "+" " + j2 +" = "+suma+ "<br> has ganado";
  }else{
    document.getElementById("texto3").innerHTML= j1 +" + "+" " + j2 +" = "+suma+"<br> has perdido";
  }


   }, 3000);
   
  
  }
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
var sniper = document.getElementById("spinner");
sniper.pause();


