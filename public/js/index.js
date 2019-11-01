
function init(){
	$('.colab').hide();
	$('.olvido').hide();
	$('.menores').hide();
	$('.visita').hide();
	$('.citaForm').hide();
	$('.correoCita').hide();


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
		$('#Busqueda').hide();
	});

	$('#olvidoTarjeta').on('click',function(event){
		event.preventDefault();
		$('.olvido').show();
		$('#colaboradoresTec').hide();
		$('#olvidoTarjeta').hide();
		$('#registroMenores').hide();
		$('#visitaGeneral').hide();
		$('#Busqueda').hide();
	});

	$('#registroMenores').on('click',function(event){
		event.preventDefault();
		$('.menores').show();
		$('#colaboradoresTec').hide();
		$('#olvidoTarjeta').hide();
		$('#registroMenores').hide();
		$('#visitaGeneral').hide();
		$('#Busqueda').hide();
	});

	$('#visitaGeneral').on('click',function(event){
		event.preventDefault();
		$('.citaForm').show();
		$('#colaboradoresTec').hide();
		$('#olvidoTarjeta').hide();
		$('#registroMenores').hide();
		$('#visitaGeneral').hide();
		$('#Busqueda').hide();
	});
	$('#Busqueda').on('click',function(event){
		event.preventDefault();
		window.open('./search.html','_self');
	});




	$('.colab').on('submit', function(event){
		event.preventDefault();
		let nombre = $('#nombreColab').val();
		let empresa = $('#empresaColab').val();
		let id = Math.floor(Math.random()*1000);
		let motivo = "Colaborador Tec";
		let responsable = "Colaborador Tec";
		let hora = Date($.now());

		let data = {
				idCard : id,
				nombreCompleto : nombre,
				personaVisitar : responsable,
				motivo : motivo,
				empresa : empresa,
				hora : hora
			};
		addVisitor(data);
		alert('Visita Registrada');
		window.open('./index.html','_self');

	});
	$('.menores').on('submit', function(event){
		event.preventDefault();
		let nombre = $('#nombreMenor').val();
		let empresa = "NA";
		let id = Math.floor(Math.random()*1000);
		let motivo = "Registro Menor";
		let responsable = $('#responsableMenor').val();
		let hora = Date($.now());

		let data = {
				idCard : id,
				nombreCompleto : nombre,
				personaVisitar : responsable,
				motivo : motivo,
				empresa : empresa,
				hora : hora
			};
		addVisitor(data);
		alert('Visita Registrada');
		window.open('./index.html','_self');

	});
	$('.citaNo').on('click', function(event){
		$('.visita').show();
		$('.citaForm').hide();
	});

	$('.citaSi').on('click', function(event){
		$('.citaForm').hide();
		$('.correoCita').show();
	});

	$('.visita').on('submit', function(event){
		event.preventDefault();
		let nombre = $('#nombreVisita').val();
		let empresa = $('#empresaVisita').val();
		let id = Math.floor(Math.random()*1000);
		let motivo = $("input[name='motivo']:checked").val();
		let responsable = $('#responsableVisita').val();
		let hora = Date($.now());

		let data = {
				idCard : id,
				nombreCompleto : nombre,
				personaVisitar : responsable,
				motivo : motivo,
				empresa : empresa,
				hora : hora
			};
		addVisitor(data);
		alert('Visita Registrada');
		window.open('./index.html','_self');

	});

}

function addVisitor(data){

		let url = './nic-api/visit';
		let settings = {
						method : 'POST',
						headers: {
							'Content-Type' : 'application/json'
						},
						body: JSON.stringify(data)
						};

		fetch(url, settings)
			.then(response => {
				if(response.ok){
					return response.json();
				}
				else{
					return new Promise(function(reoslve,reject){
						resolve(response.json());
					})
					.then(data => {
						throw new Error(data.message);
					})
				}
			})
			.then(responseJSON =>{
				
			})
			.catch(err => {
				console.log(err);
			});
}


$(init);