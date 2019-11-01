



function watchForm(){
	$('.submitButton').on('click',function(event){
		event.preventDefault();
		let searchTerm = $('.searchBox').val();

		let url = `./nic-api/visit/search/${searchTerm}`;

		let settings = {
						method : 'GET',
						headers: {
							'Content-Type' : 'application/json'
						}
		};

		fetch(url,settings)
			.then(response => {
				if(response.ok){
					return response.json();
				}
				throw new Error(response.statusText)
			
			})
			.then(responseJSON => {
				displayResults(responseJSON.visit);
			})
			.catch(err => {
				console.log(err);
			});

	});
}

function displayResults(data){
	$('.displayResults').html("");

	for(let i = 0; i< data.length ;i++){
		$('.displayResults').append(`
								<fieldset>
									<div>
										Nombre Visitante : ${data[i].nombreCompleto}
									</div>
									<div>
										Id Tarjeta : ${data[i].idCard}
									</div>
									<div>
										Persona a Visitar : ${data[i].personaVisitar}
									</div>
									<div>
										Motivo : ${data[i].motivo}
									</div>
									<div>
										Empresa : ${data[i].empresa}
									</div>
									
								</fieldset>
								<p></p>

		`);
	}
}


$(watchForm);