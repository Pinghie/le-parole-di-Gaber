from conllu import parse
import nltk
import os

folder = "albumCONLL"
lemmiEsclusi = ["essere", "avere", "fare", "stare", "coro", "andare", "eh", "dire", "é", "volta", "venire", "...."]

sostantivi = []
aggettivi = []
verbi = []

for album in os.listdir(folder):
    for canzone in os.listdir(folder + "/" + album):
        file = open(folder + "/" + album + "/" + canzone, mode="r", encoding="utf-8")
        testo = file.read()
        frasi = parse(testo)

        for frase in frasi:
            for parola in frase:
                if parola["xpos"] in ["S"]:
                    sostantivi.append(parola["lemma"])
                elif parola["xpos"] in ["A"]:
                    aggettivi.append(parola["lemma"])
                elif parola["xpos"] in ["V"] and parola["lemma"] not in lemmiEsclusi:
                    verbi.append(parola["lemma"])                

freqSostantivi = nltk.FreqDist(sostantivi)
freqAggettivi = nltk.FreqDist(aggettivi)
freqVerbi = nltk.FreqDist(verbi)

top5Sostantivi = freqSostantivi.most_common(5)
top5Aggettivi = freqAggettivi.most_common(5)
top5Verbi = freqVerbi.most_common(5)

print(top5Sostantivi)
print(top5Aggettivi)
print(top5Verbi)

