$(document).ready(function(){	
	function formatLabel(str, maxwidth){
	  var sections = [];
	  var words = str.split(" ");
	  var temp = "";

	  words.forEach(function(item, index){
	    if(temp.length > 0)
	    {
	      var concat = temp + ' ' + item;

	      if(concat.length > maxwidth){
	        sections.push(temp);
	        temp = "";
	      }
	      else{
	        if(index == (words.length-1)) {
	          sections.push(concat);
	          return;
	        }
	        else {
	          temp = concat;
	          return;
	        }
	      }
	    }

	    if(index == (words.length-1)) {
	      sections.push(item);
	      return;
	    }

	    if(item.length < maxwidth) {
	      temp = item;
	    }
	    else {
	      sections.push(item);
	    }

	  });

	  return sections;
	}

	var xValues = ["Il Signor G", "I borghesi", "Dialogo tra un impegnato e un non so", "Far finta di essere sani", "Anche per oggi non si vola", "Libertà obbligatoria", "Polli d'allevamento", "Anni affollati", "Io se fossi Gaber", "E pensare che c'era il pensiero", "Un'idiozia conquistata a fatica", "La mia generazione ha perso", "Io non mi sento italiano"];

	for(var i=0; i<xValues.length; i++)
	{
		xValues[i] = formatLabel(xValues[i], 10);
	}
	var yValues = [6.4,19.9,14.5,32.3,16.6,11.6,19.32,26.57,27.28,26.78,14.5, 11.5, 28];

	const top15Distribuzione = new Chart("distribuzioneTop15", {
	  type: "line",
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
	    },
	    title: {
	    	display: true,
	    	text: "Come le 15 parole più rappresentative sono suddivise negli album"
	    }
	  }
	});

	function addData(chart, data) {
	    chart.data.datasets.forEach((dataset) => {
	        dataset.data = [];
	        for(var i=0; i<data.length; i++)
	        {
	        	dataset.data[i] = data[i]
	        }
	    });
	    chart.update();
	}

	$(".bottone").on("click", function()
	{
		var bottoneCliccato = $(this);

		  $('.bottone').each(function() {
			    $(this).removeClass('selezionato');
			  });

		  bottoneCliccato.addClass("selezionato");

		switch(bottoneCliccato.text())
		{
			case "Sapere":
					yValues = [6.4,19.9,14.5,32.3,16.6,11.6,19.32,26.57,27.28,26.78,14.5, 11.5, 28];
					break;
				case "Uomo":
					yValues = [20.8,18.1,17,20.5,10.4,11,12.9,25.8,17,22.2,20.9, 26.8, 17.7];
					break;
				case "Cosa":
					yValues = [16,16.3,21.3,27.6,18,11.6,17.4,21.3,22.9,16.3,10.2,16.6,20.6];
					break;
				case "Vedere":
					yValues = [16,19.9,27.2,24.4,26.2,22.7,16.1,19.7,11,8.5,13.4,8.9,5.9];
					break;
				case "Bello":
					yValues = [36.7,10.9,13.6,13.4,15.2,18.4,11.6,7.6,8.8,9.8,12.4,8.9,13.3];
					break;
				case "Sentire":
					yValues = [6.4,21.7,13.6,15,20.7,8,16.1,6.1,11.1,12.4,11.8,16.6,14.7];
					break;
				case "Amore":
					yValues = [17.6,23.6,6.8,14.2,13.8,6.7,10.3,14.4,13.3,10.5,7.5,15.3,13.3];
					break;
				case "Vita":
					yValues = [25.6,9.1,13.6,11.8,6.2,6.1,10.3,4.6,11.8,17,13.4,20.4,17.7];
					break;
				case "Mondo":
					yValues = [4.8,5.4,2.6,2.4,4.8,1.8,11,11.4,9.6,21.6,18.3,24.3,29.5];
					break;
				case "Pensare":
					yValues = [35.1,3.6,11.1,11.8,8.3,5.5,6.4,12.9,11.1,5.2,12.9,10.2,1.5];
					break;
				case "Capire":
					yValues = [8,16.3,3.4,7.9,17.3,12.3,9,11.4,11.1,9.1,7.5,7.7,5.9];
					break;
				case "Guardare":
					yValues = [14.4,14.5,9.4,13.4,9.7,15.3,9.7,14.4,6.6,8.5,4.3,6.4,5.9];
					break;
				case "Gente":
					yValues = [17.6,9.1,10.2,3.1,10.4,4.9,11.6,13.7,12.5,6.5,7.5,6.4,10.3];
					break;
				case "Donna":
					yValues = [8,14.5,6,11,6.9,5.5,9.7,10.6,11.1,11.1,6.4,12.8,10.3];
					break;
				case "Parlare":
					yValues = [4.8,16.3,17.9,8.7,8.3,9.8,6.4,8.4,8.8,5.2,6.4,7.7,2.9];
					break;
		}
		addData(top15Distribuzione, yValues);
	});
});