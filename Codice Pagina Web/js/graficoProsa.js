	$(document).ready(function(){
	//$(".graficiProsa").hide();

		$("#bottoneBanner").click(function(){
			$(".graficiProsa").slideToggle();
		})

	//var chart1 = document.getElementById("top15Prosa");
	var chart1 = $("#top15Prosa");
	var xValues = ["Sapere", "Vedere", "Cosa", "Bello", "Sentire", "Capire", "Guardare", "Vero", "Uomo", "Volere", "Amore", "Prendere", "Pensare", "Bambino", "Vita"];
	var yValues = [226, 181, 152, 122, 121, 117, 114, 99, 90, 86, 85, 84, 81, 78, 77];

	const top15Prosa = new Chart("top15Prosa", {
	  type: "bar",
	  data: {
	    labels: xValues,
	    datasets: [{
	      backgroundColor: "red",
	      data: yValues
	    }]
	  },
	  options: {
	  	maintainAspectRatio: false,
	    legend: {display: false},
	    title: {
	      display: true,
	      text: "Le 15 parole più usate in tutto Gaber in Prosa"
	    }
	  }
	});

	var chart1 = $("#topProsaSpecifico");
	var xValues = ["Vedere", "Sapere", "Cosa", "Capire", "Vero", "Guardare", "Bello", "Piacere", "Diventare", "Sentire", "Pensare", "Piangere", "Figlio", "Anno", "Vita"];
	var yValues = [80, 79, 69, 50, 47, 42, 35, 33, 30, 29, 27, 26, 23, 22, 22];

	const topProsa1 = new Chart("topProsaSpecifico", {
	  type: "bar",
	  data: {
	    labels: xValues,
	    datasets: [{
	      backgroundColor: "red",
	      data: yValues
	    }]
	  },
	  options: {
	  	maintainAspectRatio: false,
	    legend: {display: false},
	    scales: {
	      yAxes: [{ticks: {min: 0, max:100}}],
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

	$(".bottoneProsa").on("click", function()
	{
		var bottoneCliccato = $(this);

	  	$('.bottoneProsa').each(function() {
		    $(this).removeClass('selezionatoProsa');
		 });

	  	bottoneCliccato.addClass("selezionatoProsa");

		switch(bottoneCliccato.text())
		{
			case "Il caso di Alessandro e Maria":
				xValues = ["Vedere", "Sapere", "Cosa", "Capire", "Vero", "Guardare", "Bello", "Piacere", "Diventare", "Sentire", "Pensare", "Piangere", "Figlio", "Anno", "Vita"];
   				yValues = [80, 79, 69, 50, 47, 42, 35, 33, 30, 29, 27, 26, 23, 22, 22];
   				break;
   			case "Il dio bambino":
   				xValues = ["Sapere","Sentire","Bambino","Cosa","Vedere","Vita","Casa","Guardare","Sembrare","Riuscire","Tempo","Bello","Momento","Uomo","Donna"];
   				yValues = [67,42,37,35,34,30,30,30,30,28,25,25,24,24,24];
   				break;
   			case "Il Grigio":
   				xValues = ["Sapere","Vedere","Giorno","Bello","Pensare","Sentire","Cosa","Casa","Volere","Guardare","Uomo","Topo","Credere","Bastare", "Prendere"];
   				yValues = [43,38,29,29,28,27,27,26,24,24,24,23,21,18,18];
   				break;
   			case "Parlami d'amore Mariù":
   				xValues = ["Sapere","Amore","Bello","Capire","Vedere","Volere","Sentire","Vero","Uomo","Cosa","Lasciare","Prendere","Giorno","Amare","Guardare"];
   				yValues = [37,34,33,31,29,27,23,23,22,21,21,21,19,18,18];
   				break;
		}
		addDataAlbum(topProsa1, xValues, yValues);
	});


	$(".graficiProsa").slideToggle();

	})