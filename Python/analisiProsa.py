#analisi prosa
from conllu import parse
import nltk
import os

opereProsa = ["ilcasodialessandroemaria", "ildiobambino", "ilgrigio", "parlamidamoremariu"]
lemmiEsclusi = ["essere", "avere", "fare", "stare", "coro", "andare", "eh", "dire", "é", "volta", "venire", "...."]
paroleTotali = []

for prosa in opereProsa:
    print("OPERA: " , prosa)
    file = open("prosaCONLL/" + prosa + ".conll", mode="r", encoding="utf-8")
    testo = file.read()
    frasi = parse(testo)

    paroleValide = []

    for frase in frasi:
        for parola in frase:
            if parola["xpos"] in ["A","S", "V"] and parola["lemma"] not in lemmiEsclusi:
                paroleValide.append(parola["lemma"])
                paroleTotali.append(parola["lemma"])

    freqParoleValide = nltk.FreqDist(paroleValide)
    paroleValideOrdinate = freqParoleValide.most_common(20)
    i = 1
    for parola in paroleValideOrdinate:
        print(i, parola[0], "\tFreq: ", parola[1])
        i+=1
    print()

print("Analisi complessiva")
freqParoleTotali = nltk.FreqDist(paroleTotali)
paroleTotaliOrdinate = freqParoleTotali.most_common(20)
for parola in paroleTotaliOrdinate:
    print(parola[0], "\tFreq: ", parola[1])
