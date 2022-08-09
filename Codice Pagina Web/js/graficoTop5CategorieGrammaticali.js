$(document).ready(function(){
	//DONUT SOSTANTIVI
	var xValues = ["Uomo", "Cosa", "Mondo", "Amore", "Donna"];
	var yValues = [371, 297, 216, 210, 202];
	var barColors = [
	  "#960000",
	  "#AE0000",
	  "#C70000",
	  "#E10000",
	  "#FF0000"
	];

	new Chart("sostantivi", {
	  type: "pie",
	  data: {
	    labels: xValues,
	    datasets: [{
	      backgroundColor: barColors,
	      data: yValues
	    }]
	  },
	  options: {
	    title: {
	      display: true,
	      text: "I sostantivi preferiti"
	    }
	  }
	});

	//DONUT AGGETTIVI
	var xValues = ["Vero", "Strano", "Grande", "Bello", "Nuovo"];
	var yValues = [118, 116, 121, 237, 126];
	var barColors = [
	  "#960000",
	  "#AE0000",
	  "#C70000",
	  "#E10000",
	  "#FF0000"
	];

	new Chart("aggettivi", {
	  type: "pie",
	  data: {
	    labels: xValues,
	    datasets: [{
	      backgroundColor: barColors,
	      data: yValues
	    }]
	  },
	  options: {
	    title: {
	      display: true,
	      text: "Gli aggettivi preferiti"
	    }
	  }
	});

	//DONUT VERBI
	var xValues = ["Capire", "Vedere", "Sentire", "Pensare", "Sapere"];
	var yValues = [167,310,211,170,364];
	var barColors = [
	  "#960000",
	  "#AE0000",
	  "#C70000",
	  "#E10000",
	  "#FF0000"
	];

	new Chart("verbi", {
	  type: "pie",
	  data: {
	    labels: xValues,
	    datasets: [{
	      backgroundColor: barColors,
	      data: yValues
	    }]
	  },
	  options: {
	    title: {
	      display: true,
	      text: "I verbi preferiti"
	    }
	  }
	});
});