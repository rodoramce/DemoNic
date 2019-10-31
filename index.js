
function init(){
	$('.colab').hide();
	$('.olvido').hide();
	$('.menores').hide();
	$('.visita').hide();

	$(watchForm);
}
function watchForm(){

	$('#colaboradoresTec').on('click',function(event){
		event.preventDefault();
		$('.colab').show();
		$('#colaboradoresTec').hide();
		$('#olvidoTarjeta').hide();
		$('#registroMenores').hide();
		$('#visitaGeneral').hide();
	});

	$('#olvidoTarjeta').on('click',function(event){
		event.preventDefault();
		$('.olvido').show();
		$('#colaboradoresTec').hide();
		$('#olvidoTarjeta').hide();
		$('#registroMenores').hide();
		$('#visitaGeneral').hide();
	});

	$('#registroMenores').on('click',function(event){
		event.preventDefault();
		$('.menores').show();
		$('#colaboradoresTec').hide();
		$('#olvidoTarjeta').hide();
		$('#registroMenores').hide();
		$('#visitaGeneral').hide();
	});

	$('#visitaGeneral').on('click',function(event){
		event.preventDefault();
		$('.visita').show();
		$('#colaboradoresTec').hide();
		$('#olvidoTarjeta').hide();
		$('#registroMenores').hide();
		$('#visitaGeneral').hide();
		$('#correo').hide();
		$('#sinCita').hide();

	});

	$('.colab').on('submit', function(event){
		event.preventDefault();
		let nombre = $('#nombreColab').val();
		let empresa = $('#empresaColab').val();
		let id = Math.floor(Math.random()*1000);
		let motivo = "Colaborador Tec";
		let responsable = "Colaborador Tec";

		let data = {
				idCard : id,
				nombreCompleto : nombre,
				personaVisitar : responsable,
				motivo : motivo,
				empresa : empresa
			};
		console.log(data);

	});
	$('.menores').on('submit', function(event){
		event.preventDefault();
		let nombre = $('#nombreMenor').val();
		let empresa = "NA";
		let id = Math.floor(Math.random()*1000);
		let motivo = "Registro Menor";
		let responsable = $('#responsableMenor').val();;

		let data = {
				idCard : id,
				nombreCompleto : nombre,
				personaVisitar : responsable,
				motivo : motivo,
				empresa : empresa
			};
		console.log(data);

	});
	$('.visita').on('submit', function(event){
		event.preventDefault();
		console.log(('#citaForm').val());

	});

}

$(init);