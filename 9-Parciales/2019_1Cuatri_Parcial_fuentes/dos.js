function mostrar()
{
  let nombrePersona1 = prompt("Ingrese el nombre de la primera persona aqui");
  let pesoPersona1 = parseInt(prompt("Ingrese el peso de la primera persona aqui"));
  let nombrePersona2 = prompt("Ingrese el nombre de la segunda persona aqui");
  let pesoPersona2 = parseInt(prompt("Ingrese el peso de la segunda persona aqui"));
  let sumaPesos = parseInt(pesoPersona1 + pesoPersona2);
  let promedioPesos = parseInt(sumaPesos / 2);

  alert("Ustedes se llaman " + nombrePersona1 + " y " + nombrePersona2 + " pesan " + pesoPersona1 + " y " + pesoPersona2 + " kilos, que sumados son " + sumaPesos + " kilos y el promedio de peso es " + promedioPesos);
}
