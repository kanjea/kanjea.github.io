//$("#request").click(function (event) {
$("#buggl_form").validate({
    rules: {
        plan: {required: true},
        destination: {required: true, minlength: 3},
        email: {required: true, email: true},
        itinerary: {required: true}
    },
    messages: {
        name: "No olvides decirnos tu nombre",
        destination: "Por favor, dinos dónde quieres ir",
        email: "Debes ingresar una dirección de correo electrónico válida",
        itinerary: "Cuéntanos qué sobre el comercio de tu zona"

    },
    validClass: "valid",
    errorClass: "invalid",
    errorLabelContainer: "#errores",
    wrapper: "li",
    submitHandler: function (form) {
//        alert("éxito");
//            $("#buggl_form").submit();
        $.post("#", {
            name: $("#name").val(),
            email: $("#email").val(),
            itinerary: $("#itinerary").val(),
            destination: $("#destination").val()

        }).done(function (data) {
            $('#modal1').openModal();//            $("#container_principal").html(data);
        });
    },
    invalidHandler: function (event, validator) {
        // 'this' refers to the form
        var errors = validator.numberOfInvalids();
        if (errors) {
            var message = errors == 1
                    ? 'You missed 1 field.'
                    : 'You missed ' + errors + ' fields. ';
            Materialize.toast(message, 2000)
//            $("#errores").html(message);
            $("div.error").show();
        } else {
            $("div.error").hide();
        }
    }
});
//});

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZzH7rrL3uhSmMyrxl7uKaWZwQ-UU9hdg",
    authDomain: "kanjea-usuarios.firebaseapp.com",
    databaseURL: "https://kanjea-usuarios.firebaseio.com",
    projectId: "kanjea-usuarios",
    storageBucket: "",
    messagingSenderId: "825986554770"
  };
  firebase.initializeApp(config);
  //Referencia para la colección de requerimientos
    //
    //          ¡¡¡  CAMBIAR LA REFERECIA A  'pruebas' CUANDO SE ESTÉ PROBANDO !!!
    //
    //
  var registradosRef = firebase.database().ref('registrados');
  //var registradosRef = firebase.database().ref('pruebas');

  $('#btn-send').click(function(){
    // Tomando valores
    var name =  getInputVal("name");
    var telefono =  getInputVal("destination");
    var email =  getInputVal("email");
    var itinerary =  getInputVal("itinerary");

    guardarRegistro(name, telefono, email, itinerary);

        
  });

  function getInputVal(id){
    return document.getElementById(id).value;
  }

  function guardarRegistro(name, telefono, email, itinerary){
    var nuevoRegistradosRef = registradosRef.push();
    nuevoRegistradosRef.set({
        nombre: name,
        telefono: telefono,
        correo: email,
        negocio_cercano : itinerary,
    })
}