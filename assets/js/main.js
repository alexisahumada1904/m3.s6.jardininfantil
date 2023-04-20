let nombres =[]

$("#botonAgregar").on("click",function() {
  let nombre = $("#inputAgregar").val()
  if (nombre!=="") {
    nombres.push(nombre)
    $("#mostrarArreglo").html(nombres.join(", "))
    $("#inputAgregar").val("") 
  }  
})

$("#botonBorrar").on("click",function() {
  let nombre = $("#inputBorrar").val()
  let index = nombres.indexOf(nombre)
  if ( index > -1) {
    nombres.splice(index, 1)
    $("#mostrarArreglo").html(nombres.join(", "))
    $("#inputBorrar").val("") 
  }
})