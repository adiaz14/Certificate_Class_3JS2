/*Getting info from basic api with fetch*/

//fetch
/*const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url) //espera una promesa
  .then((res) => res.json())
  .then((datos) => {
    console.log(datos);
    datos.map((elemento) =>
      console.log("Id: " + elemento.id + " " + elemento.title)
    );
  })
  .catch((e) => console.log(e));

//async - await
const url2 = "https://jsonplaceholder.typicode.com/posts";
const buscarDato = async () => {
  //se define la funcion async
  try {
    const res = await fetch(url2);
    const data = await res.json(); //espera a res.json
    data.forEach((element) =>
      console.log("Id: " + element.id + " " + element.title)
    );
  } catch (error) {
    console.log(error);
  }
};
buscarDato();*/
console.log("**************************************************************");
//busqueda por id
const buscarDatoId = async (id) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    const data = await res.json();
    console.log("Id: " + data.id + " " + data.title);
  } catch (error) {
    console.log(error);
  }
};
buscarDatoId(15);
