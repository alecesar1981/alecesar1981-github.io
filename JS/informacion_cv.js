
//OBTIENE LOS DATOS DE LA TABLA DEL TITULAR DEL CV

    fetch("https://randomuser.me/api/?gender=male")
        .then( response => response.json() )
        .then( data => obtiene_datos(data) )
        .catch( error => console.log(error) )


    function obtiene_datos(data) {
        nombre=data.results[0].name.first
        apellido=data.results[0].name.last
        imagen_cv = data.results[0].picture.large
        celular = data.results[0].cell  
        edad = data.results[0].dob.age
        correo = data.results[0].email
        telefono = data.results[0].phone
        calle = data.results[0].location.street.name
        nro_calle = data.results[0].location.street.number
        ciudad = data.results[0].location.city
        estado = data.results[0].location.state
        pais = data.results[0].location.country
        document.getElementById("nomyape").innerHTML = "CURRICULUM VITAE - "+nombre+" "+apellido
        document.getElementById("foto_cv").src=imagen_cv
    }

//FUNCION QUE OBTIENE EL CONTENIDO DE LA PRESENTACIÓN
    function presentacion() {
        document.getElementById("cuerpo_h1").innerHTML = "Presentación"
        document.getElementById("cuerpo_p").innerHTML = "Hola, encantado de \
        conocerte. En esta página web, encontrarás información a cerca de quien soy, \
        mi formación académica y profesional, antecedentes laborales, información de \
        contacto y mucho más. Te invito a recorrerla y a comunicarte conmigo ante \
        cualquier inquietud. GRACIAS !!!"
    }   

//FUNCION QUE OBTIENE EL CONTENIDO DEL BLOQUE "¿QUIEN SOY?"
    function datos_personales() {
        document.getElementById("cuerpo_h1").innerHTML = "¿Quién soy?"
        let cuerpo_datos_personales = "<u>"+"Nombre: "+"</u>"+nombre+"<br>"+"<u>"+"Apellido: "+"</u>"+apellido+"<br>"+"<u>"+"Edad: "+"</u>"+edad+"<br>"+"<u>"+"Domicilio: "+"</u>"+calle+" Nº "+nro_calle+"<br>"+"<u>"+"Ciudad: "+"</u>"+ciudad+" - "+estado+"<br>"+"<u>"+"País: "+"</u>"+pais    
        document.getElementById("cuerpo_p").innerHTML = cuerpo_datos_personales
    }

/*FUNCION QUE OBTIENE EL CONTENIDO DEL BLOQUE "FORMACIÓN PROFESIONAL". NOTA: ES INFORMACION INVENTADA, 
YA QUE NO SE ENCUENTRA EN LA PÁGINA DE RANDOMUSER*/
    function formacion() {
        document.getElementById("cuerpo_h1").innerHTML = "Formación Profesional"
        let cuerpo_formacion = "<u>"+"Título de grado: "+"</u>"+"Abogado (UNC)"+"<br>"+"<u>"+"Título de posgrado: "+"</u>"+"Especialista en negocios empresariales (UNM)"+"<br>"+"<u>"+"Idioma: "+"</u>"+"Inglés oral y escrito"
        document.getElementById("cuerpo_p").innerHTML = cuerpo_formacion
    }

/*FUNCION QUE OBTIENE EL CONTENIDO DEL BLOQUE "ANTECEDENTES". NOTA: ES INFORMACION INVENTADA, 
YA QUE NO SE ENCUENTRA EN LA PÁGINA DE RANDOMUSER*/
function antecedentes() {
    document.getElementById("cuerpo_h1").innerHTML = "Antecedentes"
    let cuerpo_antecedentes = "<u>"+"Laborales: "+"</u>"+"Coca-Cola Inc. (2010-2015), Nike Corp. (2015-2022), Reebook (2022-actualidad)"+"<br>"+"<u>"+"Académicos: "+"</u>"+"Profesor de Derecho Privado II - UNER-FCAd (2016-actualidad)"
    document.getElementById("cuerpo_p").innerHTML = cuerpo_antecedentes
}

/*FUNCION QUE MUESTRA LOS DATOS DE CONTACTO*/
function contacto() {
    document.getElementById("cuerpo_h1").innerHTML = "Datos de Contacto"
    let cuerpo_contacto = "<u>"+"Email: "+"</u>"+correo+"<br>"+"<u>"+"Celular: "+"</u>"+celular+"<br>"+"<u>"+"Teléfono: "+"</u>"+telefono
    document.getElementById("cuerpo_p").innerHTML = cuerpo_contacto
}

/*FUNCION QUE LLAMA AL FORMULARIO DE CONTACTO*/
function form_contacto() {
    window.open("formulario_contacto.html","_blank", "toolbar=yes,scrollbars=yes,resizable=yes, \
    top=100,left=350,width=700,height=600")
}

/*FUNCION QUE VALIDA LOS CAMPOS Y ENVIA EL FORMULARIO DE CONTACTO*/
function validaryenviar() {
 
    if(document.getElementById("nombre").value.length < 3) {
        alert("Tiene que escribir su nombre")
      	document.getElementById("nombre").focus()
      	return false;
    }    

    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var valida_email = document.getElementById("email").value; 
    if (!expresion.test(valida_email)){
        alert("Tiene que escribir una dirección de e-mail válida")
        document.getElementById("email").focus()
        return 0;
    }

    if(document.getElementById("asunto").value.length < 2) {
        alert("Tiene que escribir un asunto")
        document.getElementById("asunto").focus()
        return 0;
    }    

    if(document.getElementById("mensaje").value.length < 10) {
        alert("Tiene que escribir un mensaje")
        document.getElementById("mensaje").focus()
        return 0;
    }    

    var opcion = confirm("¿Estas seguro de enviar este formulario?");
    if (opcion == true) {
        alert("Su formulario ha sido enviado, muchas gracias por contactarme.");
        //* setTimeout(function(){
        window.close();
        //*},3000); */
    }
}
      