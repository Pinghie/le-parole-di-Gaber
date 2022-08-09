from conllu import parse
import nltk
import os

albumArray = ["il signor g", "i borghesi", "dialogo tra un impegnato e un non so", "far finta di essere sani", "anche per oggi non si vola", "libertà obbligatoria", "polli d allevamento", "anni affollati", "io se fossi gaber", "e pensare che c era il pensiero", "un idiozia conquistata a fatica", "la mia generazione ha perso", "io non mi sento italiano"]

for album in albumArray:
    lemmiEsclusi = ["essere", "avere", "fare", "stare", "coro", "andare", "eh", "dire", "é", "volta", "venire", "...."]
    paroleAlbum = []

    for canzone in os.listdir("albumCONLL/" +album):
        file = open("albumCONLL/" + album + "/" + canzone, mode="r", encoding="utf-8")
        testo = file.read()
        frasi = parse(testo)

        paroleValide = []
        paroleCanzone = []

        for frase in frasi:
            for parola in frase:
                if parola["xpos"] in ["A","S", "V"] and parola["lemma"] not in lemmiEsclusi:
                    paroleValide.append(parola["lemma"])

        freqParoleValide = nltk.FreqDist(paroleValide)
        paroleValideOrdinate = freqParoleValide.most_common()
        for parola in paroleValideOrdinate:
            parola = list(parola)
            if parola[1]>5:
                parola[1]=5
            for i in range(0, parola[1]):
                paroleAlbum.append(parola[0])


    freqAlbum = nltk.FreqDist(paroleAlbum)
    nParoleAlbum = (len(freqAlbum))
    topParoleAlbum = freqAlbum.most_common()
    topParoleAlbumDiz = dict(topParoleAlbum)

    print("\n\nRISULTATO", album)

    for i in range(0, 15):
        print(i+1, "\t", topParoleAlbum[i][0], "\tFreq: ", topParoleAlbum[i][1], "\t Rapporto: ", (topParoleAlbum[i][1]/nParoleAlbum)*1000)
