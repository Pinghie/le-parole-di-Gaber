$(document).ready(function(){
	var chart1 = document.getElementById("top15Chart");
	var xValues = ["Sapere", "Uomo", "Cosa", "Vedere", "Bello", "Sentire", "Amore", "Vita", "Mondo", "Pensare", "Capire", "Guardare", "Gente", "Donna", "Parlare"];
	var yValues = [337, 310, 290, 285, 218, 210, 201, 190, 183, 165, 164, 160, 151, 151, 139];

	const top15 = new Chart("top15Chart", {
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
	      text: "Le 15 parole più rappresentative dell'opera di Gaber"
	    }
	  }
	});
});