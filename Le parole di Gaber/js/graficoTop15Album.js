$(document).ready(function(){	
	var xValues = ["bello","pensare","vita","lavorare","uomo","vivere","sembrare","gente","soffrire","amore","grande","vedere","cosa","nascere","credere"];
	var yValues = [23,22,16,14,13,12,12,11,11,11,10,10,10,9,9];

	const top15Album = new Chart("top15Album", {
	  type: "bar",
	  data: {
	    labels: xValues,
	    datasets: [{
	      fill: false,
	      lineTension: 0,
	      backgroundColor: "rgba(255,0,0,1.0)",
	      borderColor: "rgba(255,0,0,0.5)",
	      data: yValues
	    }]
	  },
	  options: {
	  	maintainAspectRatio: false,
	    legend: {display: false},
	    scales: {
	      yAxes: [{ticks: {min: 0, max:40}}],
	    }
	  }
	});

	function addDataAlbum(chart, datax, datay) {
	    chart.data.datasets.forEach((dataset) => {

	    	chart.data.labels = [];
	    	for(var i=0; i<datax.length; i++)
	        {
	        	chart.data.labels[i] = datax[i]
	        }

			dataset.data = []
	        for(var i=0; i<datay.length; i++)
	        {
	        	dataset.data[i] = datay[i]
	        }
	    });
	    chart.update();
	}

	$(".bottoneAlbum").on("click", function()
	{
		var bottoneCliccato = $(this);

		  $('.bottoneAlbum').each(function() {
			    $(this).removeClass('selezionatoAlbum');
			  });

		  bottoneCliccato.addClass("selezionatoAlbum");

		switch(bottoneCliccato.text())
		{
			case "Il Signor G":
				xValues = ["bello","pensare","vita","lavorare","uomo","vivere","sembrare","gente","soffrire","amore","grande","vedere","cosa","nascere","credere"];
   				yValues = [23,22,16,14,13,12,12,11,11,11,10,10,10,9,9]
   				break;
   			case "I borghesi":
   				xValues = ["amore","sentire","sapere","vedere","uomo","mangiare","cosa","capire","parlare","gesto","guardare","donna","giorno","casa","innamorare"];
   				yValues = [13,12,11,11,10,9,9,9,9,9,8,8,7,7,7];
   				break;
   			case "Dialogo tra un impegnato e un non so":
   				xValues = ["vedere","cosa","parlare","mangiare","uomo","sapere","vita","sentire","bello","rivoluzione","momento","pensare","forza","piccolo", "operaio"];
   				yValues = [32,25,21,21,20,17,16,16,16,13,13,13,13,13,12];
   				break;
   			case "Far finta di essere sani":
   				xValues = ["sapere","cosa","vedere","uomo","gesto","mano","corpo","sentire","amore","guardare","bello","testa","pensare","vita","naturale"];
   				yValues = [41,35,31,26,20,20,19,19,18,17,17,17,15,15,14];
   				break;
   			case "Anche per oggi non si vola":
   				xValues = ["vedere","sentire","cosa","capire","sapere","bello","strano","amore","corpo","parte","gente","uomo","uscire","casa","amare"];
   				yValues = [38,30,26,25,24,22,21,20,17,16,15,15,15,14,14];
   				break;
   			case "Libertà obbligatoria":
   				xValues = ["vedere","bello","guardare","mettere","bastare","credere","capire","cosa","sapere","uomo","prendere","libertà","parlare","bisognare","parte"];
   				yValues = [37,30,25,24,20,20,20,19,19,18,17,16,16,16,15];
   				break;
   			case "Polli d'allevamento":
   				xValues = ["sapere","cosa","vedere","sentire","uomo","bello","gente","mondo","amore","vita","strano","nuovo","donna","guardare", "riuscire"];
   				yValues = [30,27,25,25,20,18,18,17,16,16,16,16,15,15,14];
   				break;
   			case "Anni affollati":
   				xValues = ["sapere","uomo","cosa","vedere","morire","guardare","amore","gente","pensare","capire","mondo","donna","vero","piccolo","tempo"];
   				yValues = [35,34,28,26,20,19,19,18,17,15,15,14,13,13,12];
   				break;
   			case "Io se fossi Gaber":
   				xValues = ["sapere","cosa","uomo","tempo","amore","credere","diventare","bisognare","gente","anno","senso","vita","sentire","massa","pensare"];
   				yValues = [37,31,23,19,18,18,18,18,17,17,16,16,15,15,15];
   				break;
   			case "E pensare che c'era il pensiero":
   				xValues = ["sapere","uomo","mondo","vita","cosa","sentire","credere","grande","nuovo","vero","donna","morire","amore","parola","bello"];
   				yValues = [41,34,33,26,25,19,19,18,18,17,17,17,16,15,15];
   				break;
   			case "Un'idiozia conquistata a fatica":
   				xValues = ["uomo","mondo","sapere","vero","vita","vedere","nuovo","pensare","bello","grande","sentire","cosa","arrivare","gioco","potere"];
   				yValues = [39,34,27,27,25,25,24,24,23,22,22,19,19,19,19];
   				break;
   			case "La mia generazione ha perso":
   				xValues = ["uomo","mondo","vita","potere","nuovo","sentire","cosa","amore","senso","donna","sapere","cambiare","buono","piacere","parte"];
   				yValues = [21,19,16,15,15,13,13,12,10,10,9,9,9,8,8];
   				break;
   			case "Io non mi sento italiano":
   				xValues = ["mondo","sapere","cosa","vita","uomo","sentire","idea","bello","amore","aria","lasciare","morire","vivere","diventare","gente"];
   				yValues = [20,19,14,12,12,10,9,9,9,8,8,8,8,7,7];
   				break;
		}
		addDataAlbum(top15Album, xValues, yValues);
	});
});