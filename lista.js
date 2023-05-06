//Definición del array de contactos

const Agenda = [
  {  name: "jose ", apellido: "rodriguez", telefono: "3057767694", ubicacion: "cali-valle", direccion: "cr cl" },
  { name: "sandra", apellido: "daza", telefono: "3057767694", ubicacion: "cali-valle", direccion: "cl cr" }
];

let myid = 1;


// Función para agregar un nuevo contacto
function addagenda(name, apellido, telefono, ubicacion, direccion) {
  const newContact = {id: myid++, name, apellido, telefono, ubicacion, direccion };
  const newContact1 = {id:myid++, myid: name, apellido, telefono, ubicacion, direccion };
  

  Agenda.push(newContact);
  Agenda.push(newContact1);
  return newContact, newContact1;
  
}

    
// Agregar un nuevo contacto
const newContact = addagenda("luna", "rodriguez", "333444333", "cali", "cl cr");
const newContact1 = addagenda("yuli", "rodriguez", "22233", "cali", "cl cr");

function eliminarContacto(Agenda, indice) {
  Agenda.splice(0, 1)

  return Agenda;

}

// Mostrar el nuevo contacto por consola
console.log(Agenda, newContact, newContact1);

console.log(eliminarContacto);
