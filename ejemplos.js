/*Ejemplos de objects*/

/*Objeto JSON simple*/
var jsonObject = { nombre: 'nicolas', apellido: 'buzzi', edad: 20};
//Devuelve un Object ej
/*

jsonObject.nombre
jsonObject.apellido
jsonObject.edad

 */

//Json en string convertido
var convertJson = JSON.stringify(jsonObject);
//es igual que hacer
/*var convertJson = '[{"nombre":"nicolas"}]'*/

//array de varios jsons
var obj = [{nombre:'nico'},{nombre:'juani'},{nombre:'jebus'}];
//seria 1 Object array que contiene 3 json, (Object, Object, Object)

//este json tiene una property que es hola y un metodo funcion llamado saludar
var jsonFunctions = { 
    message: 'hola',
    saludar: function()
    {
        alert(this.message);
    }
};

//creando una funcion anonima y agregando obj json con el nombre a una array
var persona = {};
var lista = [{}];

+(function(personName){
    if ( lista.indexOf(personName)==-1)
        return;
        
    lista[lista.length].push({nombre: personName});
})(persona.agregar);

//tambien es valido

function newPerson(personName){
    var person = personName;
    
    return ({'nombre': this.person});
}

function addPeson(){
    var person = new newPerson("nico");
    lista.push(person);
    
    console.log("Persona agregada");
}

//tambien sirve hacer un JSON asi

var objectJson = new Object();
objectJson.message = 'hola';
console.log(objectJson.message);