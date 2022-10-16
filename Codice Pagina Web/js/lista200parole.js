$(document).ready(function(){	

		var arrayParole = [
			[" sapere ",  337 ,"Verbi"],
			[" uomo ",  310 ,"Sostantivi"],
			[" cosa ",  290 ,"Sostantivi"],
			[" vedere ",  285 ,"Verbi"],
			[" bello ",  218 ,"Aggettivi"],
			[" sentire ",  210 ,"Verbi"],
			[" amore ",  201 ,"Sostantivi"],
			[" vita ",  190 ,"Sostantivi"],
			[" mondo ",  183 ,"Sostantivi"],
			[" pensare ",  165 ,"Verbi"],
			[" capire ",  164 ,"Verbi"],
			[" guardare ",  160 ,"Verbi"],
			[" gente ",  151 ,"Sostantivi"],
			[" donna ",  151 ,"Sostantivi"],
			[" parlare ",  139 ,"Verbi"],
			[" nuovo ",  132 ,"Aggettivi"],
			[" credere ",  132 ,"Verbi"],
			[" vero ",  120 ,"Aggettivi"],
			[" morire ",  119 ,"Verbi"],
			[" senso ",  116 ,"Sostantivi"],
			[" grande ",  116 ,"Aggettivi"],
			[" tempo ",  114 ,"Sostantivi"],
			[" strano ",  112 ,"Aggettivi"],
			[" bastare ",  109 ,"Verbi"],
			[" sembrare ",  109 ,"Verbi"],
			[" potere ",  107 ,"Verbi"],
			[" parte ",  105 ,"Sostantivi"],
			[" diventare ",  104 ,"Verbi"],
			[" vivere ",  100 ,"Verbi"],
			[" amare ",  97 ,"Verbi"],
			[" giorno ",  97 ,"Sostantivi"],
			[" mettere ",  96 ,"Verbi"],
			[" volere ",  95 ,"Verbi"],
			[" prendere ",  95 ,"Verbi"],
			[" dare ",  91 ,"Verbi"],
			[" idea ",  91 ,"Sostantivi"],
			[" anno ",  90 ,"Sostantivi"],
			[" momento ",  89 ,"Sostantivi"],
			[" pieno ",  88 ,"Aggettivi"],
			[" bisogno ",  88 ,"Sostantivi"],
			[" trovare ",  88 ,"Verbi"],
			[" corpo ",  83 ,"Sostantivi"],
			[" casa ",  82 ,"Sostantivi"],
			[" bisognare ",  82 ,"Verbi"],
			[" altro ",  82 ,"Sostantivi"],
			[" mano ",  82 ,"Sostantivi"],
			[" buono ",  81 ,"Aggettivi"],
			[" piccolo ",  81 ,"Aggettivi"],
			[" piacere ",  80 ,"Sostantivi"],
			[" lasciare ",  80 ,"Verbi"],
			[" aria ",  78 ,"Sostantivi"],
			[" giusto ",  77 ,"Aggettivi"],
			[" libertà ",  75 ,"Sostantivi"],
			[" paura ",  74 ,"Sostantivi"],
			[" mangiare ",  73 ,"Verbi"],
			[" figlio ",  69 ,"Sostantivi"],
			[" riuscire ",  69 ,"Verbi"],
			[" normale ",  69 ,"Aggettivi"],
			[" gesto ",  69 ,"Sostantivi"],
			[" voglia ",  67 ,"Sostantivi"],
			[" piano ",  67 ,"Aggettivi"],
			[" testa ",  67 ,"Sostantivi"],
			[" bambino ",  66 ,"Sostantivi"],
			[" cambiare ",  65 ,"Verbi"],
			[" gran ",  63 ,"Aggettivi"],
			[" muovere ",  61 ,"Verbi"],
			[" mamma ",  61 ,"Sostantivi"],
			[" parola ",  61 ,"Sostantivi"],
			[" persona ",  61 ,"Sostantivi"],
			[" perdere ",  60 ,"Verbi"],
			[" storia ",  60 ,"Sostantivi"],
			[" cercare ",  60 ,"Verbi"],
			[" nascere ",  59 ,"Verbi"],
			[" vecchio ",  59 ,"Aggettivi"],
			[" cuore ",  59 ,"Sostantivi"],
			[" forza ",  58 ,"Sostantivi"],
			[" strada ",  56 ,"Sostantivi"],
			[" tenere ",  55 ,"Verbi"],
			[" conoscere ",  55 ,"Verbi"],
			[" pensiero ",  55 ,"Sostantivi"],
			[" passare ",  54 ,"Verbi"],
			[" occhio ",  54 ,"Sostantivi"],
			[" mare ",  54 ,"Sostantivi"],
			[" portare ",  53 ,"Verbi"],
			[" importante ",  53 ,"Aggettivi"],
			[" arrivare ",  53 ,"Verbi"],
			[" chiaro ",  52 ,"Aggettivi"],
			[" lavoro ",  52 ,"Sostantivi"],
			[" chiamare ",  52 ,"Verbi"],
			[" dolore ",  52 ,"Sostantivi"],
			[" finire ",  52 ,"Verbi"],
			[" amico ",  51 ,"Sostantivi"],
			[" famiglia ",  51 ,"Sostantivi"],
			[" libero ",  51 ,"Aggettivi"],
			[" bravo ",  50 ,"Aggettivi"],
			[" forte ",  50 ,"Aggettivi"],
			[" cominciare ",  49 ,"Verbi"],
			[" posto ",  49 ,"Sostantivi"],
			[" solo ",  49 ,"Aggettivi"],
			[" coscienza ",  48 ,"Sostantivi"],
			[" luce ",  48 ,"Sostantivi"],
			[" mente ",  48 ,"Sostantivi"],
			[" problema ",  47 ,"Sostantivi"],
			[" sogno ",  47 ,"Sostantivi"],
			[" padre ",  47 ,"Sostantivi"],
			[" ragazzo ",  46 ,"Sostantivi"],
			[" diverso ",  46 ,"Aggettivi"],
			[" buttare ",  46 ,"Verbi"],
			[" gioco ",  46 ,"Sostantivi"],
			[" naturale ",  46 ,"Aggettivi"],
			[" rivoluzione ",  45 ,"Sostantivi"],
			[" uguale ",  44 ,"Aggettivi"],
			[" crescere ",  44 ,"Verbi"],
			[" contare ",  44 ,"Verbi"],
			[" realtà ",  44 ,"Sostantivi"],
			[" mancare ",  44 ,"Verbi"],
			[" faccia ",  44 ,"Sostantivi"],
			[" punto ",  43 ,"Sostantivi"],
			[" soffrire ",  43 ,"Verbi"],
			[" ricordare ",  43 ,"Verbi"],
			[" caso ",  43 ,"Sostantivi"],
			[" restare ",  43 ,"Verbi"],
			[" caro ",  42 ,"Aggettivi"],
			[" giovane ",  40 ,"Aggettivi"],
			[" chiedere ",  40 ,"Verbi"],
			[" inventare ",  40 ,"Verbi"],
			[" grosso ",  40 ,"Aggettivi"],
			[" paese ",  40 ,"Sostantivi"],
			[" silenzio ",  39 ,"Sostantivi"],
			[" ragione ",  39 ,"Sostantivi"],
			[" bianco ",  39 ,"Aggettivi"],
			[" fatto ",  38 ,"Sostantivi"],
			[" stesso ",  38 ,"Aggettivi"],
			[" esistere ",  38 ,"Verbi"],
			[" fregare ",  38 ,"Verbi"],
			[" fondo ",  38 ,"Sostantivi"],
			[" morte ",  38 ,"Sostantivi"],
			[" lavorare ",  37 ,"Verbi"],
			[" stanza ",  37 ,"Sostantivi"],
			[" unico ",  37 ,"Aggettivi"],
			[" uscire ",  37 ,"Verbi"],
			[" italiano ",  37 ,"Sostantivi"],
			[" certo ",  36 ,"Aggettivi"],
			[" rabbia ",  36 ,"Sostantivi"],
			[" cultura ",  36 ,"Sostantivi"],
			[" ridere ",  36 ,"Verbi"],
			[" cane ",  36 ,"Sostantivi"],
			[" gusto ",  36 ,"Sostantivi"],
			[" rimanere ",  35 ,"Verbi"],
			[" americano ",  35 ,"Sostantivi"],
			[" piangere ",  35 ,"Verbi"],
			[" sinistra ",  35 ,"Sostantivi"],
			[" signore ",  34 ,"Sostantivi"],
			[" spazio ",  34 ,"Sostantivi"],
			[" madre ",  34 ,"Sostantivi"],
			[" fortuna ",  34 ,"Sostantivi"],
			[" milione ",  34 ,"Sostantivi"],
			[" presente ",  33 ,"Sostantivi"],
			[" modo ",  33 ,"Sostantivi"],
			[" perfetto ",  33 ,"Aggettivi"],
			[" tornare ",  33 ,"Verbi"],
			[" scegliere ",  33 ,"Verbi"],
			[" vivo ",  33 ,"Aggettivi"],
			[" massa ",  33 ,"Sostantivi"],
			[" fermare ",  33 ,"Verbi"],
			[" bocca ",  33 ,"Sostantivi"],
			[" guerra ",  33 ,"Sostantivi"],
			[" nonno ",  32 ,"Sostantivi"],
			[" stupido ",  31 ,"Aggettivi"],
			[" povero ",  31 ,"Aggettivi"],
			[" umano ",  31 ,"Sostantivi"],
			[" vuoto ",  31 ,"Aggettivi"],
			[" popolo ",  31 ,"Sostantivi"],
			[" scusare ",  30 ,"Verbi"],
			[" animale ",  30 ,"Sostantivi"],
			[" notte ",  30 ,"Sostantivi"],
			[" star ",  30 ,"Sostantivi"],
			[" attimo ",  30 ,"Sostantivi"],
			[" ammazzare ",  30 ,"Verbi"],
			[" sicuro ",  30 ,"Aggettivi"],
			[" merda ",  30 ,"Sostantivi"],
			[" fine ",  30 ,"Sostantivi"],
			[" futuro ",  30 ,"Sostantivi"],
			[" morale ",  29 ,"Sostantivi"],
			[" ora ",  29 ,"Sostantivi"],
			[" macchina ",  29 ,"Sostantivi"],
			[" immaginare ",  29 ,"Verbi"],
			[" lontano ",  29 ,"Aggettivi"],
			[" importare ",  29 ,"Verbi"],
			[" coraggio ",  29 ,"Sostantivi"],
			[" cantare ",  29 ,"Verbi"],
			[" colpa ",  29 ,"Sostantivi"],
			[" sano ",  29 ,"Aggettivi"],
			[" allegria ",  29 ,"Sostantivi"],
			[" aspettare ",  28 ,"Verbi"],
			[" sera ",  28 ,"Sostantivi"],
			[" enorme ",  28 ,"Aggettivi"],
			[" alzare ",  28 ,"Verbi"],
			[" fermo ",  28 ,"Aggettivi"],
			[" antico ",  28 ,"Aggettivi"]
		]

		//console.log(array);

		var categorieSelezionate = ["Sostantivi", "Aggettivi", "Verbi"];
		aggiornaTabella();
		$(".bottone").on("click", function()
		{
			console.log(this);

			if(categorieSelezionate.includes(this.innerHTML))
			{
				var index = categorieSelezionate.indexOf(this.innerHTML);
				if (index !== -1) {
				  categorieSelezionate.splice(index, 1);
				  //$(this).css("background-color", "red");
				  $(this).removeClass("selezionatoProsa");
				}
			}
			else
			{
				categorieSelezionate.push(this.innerHTML);
				//$(this).css("background-color", "yellow");
				$(this).addClass("selezionatoProsa");
			}

			console.log(categorieSelezionate.length);
			if(categorieSelezionate.length > 0)
				aggiornaTabella();
			else
			{
				$("#tabellaTop200Parole").empty();
				$("#tabellaTop200Parole").append("Seleziona una categoria grammaticale");
			}
		});

		function aggiornaTabella()
		{
			$("#tabellaTop200Parole").empty();
			$("#tabellaTop200Parole").append("<tr><th>#</th><th>Parola</th><th>Frequenza</th></tr>");
			var c = 0;
			for(var i = 0; i < arrayParole.length; i++)
			{
				if(categorieSelezionate.includes(arrayParole[i][2]))
				{
					c++;
					$("#tabellaTop200Parole").append("<tr><td>" + c + "</td><td>" + arrayParole[i][0] + "</td><td>" + arrayParole[i][1] + "</td></tr>");
				}
			}
		}
	});