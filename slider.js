// Função que automatiza a passagem de slides
function slider() {
	let atual = $(".images .slide-position"); // Seleciona o slide que está aparecendo
	let next = atual.next().length ? atual.next() : $(".images li:first"); // Seleciona o próximo slide, caso seja o ultimo slide volta para o primeiro

	next.addClass('slide-position').fadeIn(2000); // Some com o slide atual com duração de 2s de transição
	atual.removeClass('slide-position').fadeOut(1000); // Mostra o próximo slide com duração de 1s de transição
}

// Função para voltar uma imagem
function prev() {
	let atual = $(".images .slide-position"); // Seleciona o slide que está aparecendo
	let anterior = atual.prev().length ? atual.prev() : $(".images li:last"); // Seleciona o próximo slide, caso seja o ultimo slide volta para o primeiro
	
	atual.removeClass('slide-position').fadeOut(); // Some com o slide atual
	anterior.addClass('slide-position').fadeIn(); // Mostra o próximo slide
}

// Função para ir para próxima imagem
function next() {
	let atual = $(".images .slide-position"); // Seleciona o slide que está aparecendo
	let proximo = atual.next().length ? atual.next() : $(".images li:first"); // Seleciona o próximo slide, caso seja o ultimo slide volta para o primeiro
	
	atual.removeClass('slide-position').fadeOut(); // Some com o slide atual
	proximo.addClass('slide-position').fadeIn(); // Mostra o próximo slide
}	

// Chamada do slider ao carregar a página
$(function () {
	$(".images li:first").fadeIn(); // Mostra o primeiro slide
	window.setInterval("slider()", 5000); // Executa a função slide com um intervalo de 5s

})