from conllu import parse
import nltk
import os

paroleTotali = []
folder = "albumCONLL"
lemmiEsclusi = ["essere", "avere", "fare", "stare", "coro", "andare", "eh", "dire", "é", "volta", "venire", "...."]

for album in os.listdir(folder):
    for canzone in os.listdir(folder + "/" + album):
        file = open(folder + "/" + album + "/" + canzone, mode="r", encoding="utf-8")
        testo = file.read()
        frasi = parse(testo)

        paroleValide = []
        paroleCanzone = []

        for frase in frasi:
            for parola in frase:
                if parola["xpos"] in ["A", "S", "V"] and parola["lemma"] not in lemmiEsclusi:
                    paroleValide.append(parola["lemma"])

        freqParoleValide = nltk.FreqDist(paroleValide)
        paroleValideOrdinate = freqParoleValide.most_common()
        for parola in paroleValideOrdinate:
            parola = list(parola)
            if parola[1]>7:
                parola[1]=7
            for i in range(0, parola[1]):
                paroleTotali.append(parola[0])

freqTotali = nltk.FreqDist(paroleTotali)
top30ParoleTotali = freqTotali.most_common(30)
print("\n\nRISULTATO")
for i in range(0, 30):
    print(i+1, "\t", top30ParoleTotali[i][0], "\tFreq: ", top30ParoleTotali[i][1])

