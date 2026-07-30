# Strukturiertes Lernskript: Symbolische KI und neuronale Netze

## Teil 1 – Symbolische KI

### 1. Suchen und Problemlösen
Bei Suchproblemen wird eine Aufgabe durch **Zustände**, **Aktionen**, einen **Startzustand** und einen **Zielzustand** beschrieben.
#### Beispiel: Wasserkrugproblem
Gegeben sind drei Gefäße mit einem Fassungsvermögen von $8$, $5$ und $3$ Litern.
Ein Zustand wird als Tupel dargestellt:

$$
(x,y,z)
$$

Dabei beschreiben $x$, $y$ und $z$ die aktuellen Füllmengen der drei Gefäße.

Beispiel:

- Startzustand: $(8,0,0)$
- Zielzustand: $(4,4,0)$
- mögliche Aktion: Wasser von einem Gefäß in ein anderes umfüllen
- Umfüllen erfolgt, bis das Quellgefäß leer oder das Zielgefäß voll ist

Das Problem kann als Suchgraph dargestellt werden:

- Knoten entsprechen Zuständen.
- Kanten entsprechen erlaubten Aktionen.
- Gesucht wird ein Pfad vom Startzustand zum Zielzustand.

#### Breitensuche
Die **Breitensuche** durchsucht den Suchbaum Ebene für Ebene.
Eigenschaften:

- vollständig bei endlicher Verzweigung
- findet bei einheitlichen Aktionskosten eine kürzeste Lösung
- benötigt häufig viel Speicher

#### Tiefensuche
Die **Tiefensuche** verfolgt zunächst einen Pfad möglichst weit in die Tiefe.
Eigenschaften:

- geringer Speicherverbrauch
- findet nicht garantiert eine kürzeste Lösung
- kann ohne Zyklenerkennung oder Tiefenbegrenzung in unendlichen Pfaden hängen bleiben

#### Iterativ vertiefende Tiefensuche
Die **iterativ vertiefende Tiefensuche** führt wiederholt eine tiefenbegrenzte Tiefensuche aus. Die maximale Tiefe wird dabei schrittweise erhöht.

Eigenschaften:
- kombiniert den geringen Speicherverbrauch der Tiefensuche mit der Vollständigkeit der Breitensuche
- findet bei einheitlichen Aktionskosten eine kürzeste Lösung
- untersucht einige obere Ebenen mehrfach

> **Merksatz:** Die Breitensuche findet bei einheitlichen Aktionskosten eine kürzeste Lösung, benötigt dafür aber viel Speicher.

### 2. Aussagenlogik und Resolution
#### Was ist der Resolutionskalkül?
Der **Resolutionskalkül** ist ein Verfahren, mit dem automatisch geprüft werden kann, ob eine Aussage logisch aus einer Menge anderer Aussagen folgt.
Es soll gezeigt werden:

$$
\alpha_1,\alpha_2,\ldots,\alpha_n \models \gamma
$$

Dazu wird die Zielaussage $\gamma$ negiert. Anschließend wird geprüft, ob die vorhandenen Aussagen zusammen mit $\neg\gamma$ zu einem Widerspruch führen.

Gilt:

$$
\alpha_1\land\alpha_2\land\ldots\land\alpha_n\land\neg\gamma
$$

ist unerfüllbar, dann folgt $\gamma$ logisch aus den Voraussetzungen.
#### Resolutionsregel
Aus zwei Klauseln

$$
A\lor p
$$

und

$$
B\lor\neg p
$$

kann die neue Klausel

$$
A\lor B
$$

abgeleitet werden.

Die beiden Literale $p$ und $\neg p$ werden dabei aufgelöst.

#### Beispiel
Gegeben sind:

$$
\alpha_1:(a\land b)\rightarrow c
$$

$$
\alpha_2:c\rightarrow(d\lor e)
$$

$$
\alpha_3:e\rightarrow d
$$

Zu zeigen ist:

$$
\gamma:a\rightarrow(b\rightarrow d)
$$

#### Vorgehensweise
1. Alle Voraussetzungen in konjunktive Normalform umwandeln.
2. Die Zielaussage negieren.
3. Auch die negierte Zielaussage in Klauseln umwandeln.
4. Die Resolutionsregel anwenden.
5. Eine leere Klausel zeigt einen Widerspruch.

#### Umwandlung in Klauseln
Aus $\alpha_1$ folgt:

$$
\neg a\lor\neg b\lor c
$$

Aus $\alpha_2$ folgt:

$$
\neg c\lor d\lor e
$$

Aus $\alpha_3$ folgt:

$$
\neg e\lor d
$$

Die Zielaussage ist äquivalent zu:

$$
(a\land b)\rightarrow d
$$

Ihre Negation lautet:

$$
a\land b\land\neg d
$$

Daraus entstehen die Klauseln:

$$
a
$$

$$
b
$$

$$
\neg d
$$

Durch schrittweise Resolution kann zunächst $c$ und anschließend $d$ hergeleitet werden. Die Klauseln $d$ und $\neg d$ ergeben schließlich die leere Klausel:

$$
\Box
$$

Damit liegt ein Widerspruch vor und die Zielaussage folgt logisch aus den Voraussetzungen:

$$
\alpha_1,\alpha_2,\alpha_3\models\gamma
$$

### 3. Constraint Satisfaction Problems
Ein **Constraint Satisfaction Problem**, kurz CSP, besteht aus:

- einer Menge von Variablen
- einem Wertebereich für jede Variable
- Bedingungen beziehungsweise Constraints zwischen den Variablen

#### Beispiel: Kartenfärbung
Jedes Land stellt eine Variable dar. Der Wertebereich besteht aus den verfügbaren Farben.
Ein möglicher Constraint lautet:
> Zwei benachbarte Länder dürfen nicht dieselbe Farbe besitzen.

#### Backtracking
Beim Backtracking wird schrittweise eine Variable belegt. Führt eine Belegung zu einem Widerspruch, wird zur vorherigen Entscheidung zurückgekehrt und ein anderer Wert ausprobiert.

#### Most Constrained Variable First
Diese Strategie wird auch **Minimum Remaining Values**, kurz MRV, genannt.
Es wird die Variable ausgewählt, die aktuell die wenigsten gültigen Werte besitzt.
Dadurch werden schwierige Entscheidungen möglichst früh getroffen.

#### Most Constraining Variable First
Diese Strategie wird auch **Degree Heuristic** genannt.
Bei einem Gleichstand wird die Variable gewählt, die an den meisten Constraints mit noch unbelegten Variablen beteiligt ist.

#### Least Constraining Value First
Es wird der Wert gewählt, der die Wertebereiche der anderen Variablen möglichst wenig einschränkt.

#### Forward Checking
Nach jeder Belegung werden ungültige Werte aus den Wertebereichen direkt benachbarter Variablen entfernt.

Wird der Wertebereich einer Variable dadurch leer, kann sofort zurückgesprungen werden.

#### AC-3-Algorithmus
Der AC-3-Algorithmus stellt **Arc Consistency** für binäre Constraints her.

Eine gerichtete Kante $(X_i,X_j)$ ist konsistent, wenn für jeden möglichen Wert von $X_i$ mindestens ein kompatibler Wert von $X_j$ existiert.

Der Algorithmus arbeitet grundsätzlich so:

1. Alle gerichteten Constraint-Kanten werden in eine Warteschlange eingefügt.
2. Eine Kante $(X_i,X_j)$ wird entnommen.
3. Nicht unterstützte Werte werden aus dem Wertebereich von $X_i$ entfernt.
4. Wurde der Wertebereich verändert, werden betroffene Nachbarkanten erneut geprüft.
5. Der Vorgang endet, wenn die Warteschlange leer ist oder ein Wertebereich leer wird.

AC-3 kann Wertebereiche stark verkleinern und Widersprüche früh erkennen. Arc Consistency garantiert allerdings nicht immer, dass bereits eine vollständige Lösung gefunden wurde.

---
## Teil 2 – Maschinelles Lernen und neuronale Netze

### 1. One-Hot-Encoding
**One-Hot-Encoding** wandelt Kategorien in numerische Vektoren um.

Für jede Klasse existiert genau eine Position im Vektor. Die Position der zugehörigen Klasse erhält den Wert $1$, alle anderen Positionen erhalten den Wert $0$.

| Klasse | One-Hot-Vektor |
| ------ | -------------- |
| Hund   | `[1, 0, 0]`    |
| Katze  | `[0, 1, 0]`    |
| Maus   | `[0, 0, 1]`    |

One-Hot-Encoding drückt keine natürliche Reihenfolge zwischen den Klassen aus. Hund, Katze und Maus werden somit nicht als unterschiedlich große Zahlen interpretiert.
### 2. Grundbegriffe des Trainings
- **Epoche:** Ein vollständiger Durchlauf durch alle Trainingsdaten.
- **Batch:** Eine Teilmenge der Trainingsdaten, die gemeinsam verarbeitet wird.
- **Batch Size:** Anzahl der Beispiele innerhalb eines Batches.
- **Learning Rate:** Bestimmt die Größe der Schritte beim Aktualisieren der Parameter.
- **Gewicht $w$:** Parameter, mit dem ein Eingabewert multipliziert wird.
- **Bias $b$:** Additiver Parameter, der eine Verschiebung der Funktion ermöglicht.
- **Loss:** Numerischer Wert, der den Fehler des Modells beschreibt.
- **Logit:** Rohausgabe eines Modells vor einer Wahrscheinlichkeitsfunktion wie Sigmoid oder Softmax.

Ein einfaches lineares Modell berechnet beispielsweise:

$$
z=wx+b
$$

Der Bias entspricht dabei ungefähr dem Achsenabschnitt einer linearen Funktion.
### 3. Gradient Descent
**Gradient Descent** ist ein Optimierungsverfahren zur Minimierung einer Loss-Funktion.

Der Gradient beschreibt, in welche Richtung der Loss am stärksten ansteigt. Zur Minimierung werden die Parameter deshalb in die entgegengesetzte Richtung verändert.
Für ein Gewicht $w$ gilt:

$$
w
\leftarrow
w-\eta\frac{\partial L}{\partial w}
$$

Dabei ist:

- $L$ die Loss-Funktion
- $\eta$ die Learning Rate
- $\frac{\partial L}{\partial w}$ die Ableitung des Loss nach dem Gewicht

Für den Bias gilt entsprechend:

$$
b
\leftarrow
b-\eta\frac{\partial L}{\partial b}
$$

Eine zu große Learning Rate kann dazu führen, dass das Minimum übersprungen wird. Eine zu kleine Learning Rate kann das Training stark verlangsamen.

---

### 4. Ablauf eines Trainingsschritts
Ein Trainingsschritt besteht grundsätzlich aus folgenden Schritten:

1. **Forward Pass:** Die Eingabe wird durch das Modell verarbeitet.
2. **Vorhersage:** Das Modell erzeugt eine Ausgabe.
3. **Loss-Berechnung:** Die Vorhersage wird mit dem Zielwert verglichen.
4. **Gradientenberechnung:** Die Ableitungen des Loss nach den Parametern werden berechnet.
5. **Parameter-Update:** Ein Optimierungsverfahren passt Gewichte und Bias-Werte an.
6. **Wiederholung:** Der Prozess wird für weitere Batches und Epochen wiederholt.

### 5. Backpropagation
**Backpropagation** ist ein Verfahren zur effizienten Berechnung der Gradienten in einem Netzwerk.

Der Loss wird nicht als Wert „rückwärtsgeschickt“. Stattdessen wird mithilfe der Kettenregel berechnet, wie stark jeder Parameter den Loss beeinflusst.

In einem tiefen neuronalen Netz werden die Gradienten von der Ausgabeschicht durch alle vorherigen Schichten zurückgerechnet.

Backpropagation und Gradient Descent erfüllen unterschiedliche Aufgaben:

- **Backpropagation berechnet die Gradienten.**
- **Gradient Descent beziehungsweise ein anderer Optimierer aktualisiert die Parameter.**

Auch bei einfachen Modellen wie linearer oder logistischer Regression werden Gradienten berechnet. Der Begriff Backpropagation wird jedoch hauptsächlich im Zusammenhang mit mehrschichtigen neuronalen Netzen verwendet.

| Modell | Typische Loss-Funktion | Ausgabe beziehungsweise Aktivierung | Training |
| ------ | ---------------------- | ----------------------------------- | -------- |
| Lineare Regression | Mean Squared Error | lineare Ausgabe | Gradientenberechnung und Optimierung |
| Binäre logistische Regression | Binary Cross Entropy | Sigmoid | Gradientenberechnung und Optimierung |
| Multiklassen-Klassifikation | Categorical Cross Entropy | Softmax | Backpropagation und Optimierung |
| MLP oder CNN | abhängig von der Aufgabe | beispielsweise ReLU in versteckten Schichten | Backpropagation und Optimierung |

### 6. Lineare Regression
Die lineare Regression sagt einen kontinuierlichen Zahlenwert voraus, beispielsweise einen Preis oder eine Temperatur.

Für eine Eingabevariable gilt:

$$
\hat y=ax+b
$$

Dabei ist:

- $x$ der Eingabewert
- $\hat y$ die Vorhersage
- $a$ die Steigung beziehungsweise das Gewicht
- $b$ der Achsenabschnitt beziehungsweise Bias

Ein Beispiel ist die Schätzung des Körpergewichts anhand der Körpergröße. Eine lineare Regression modelliert dabei einen näherungsweise linearen Zusammenhang.

Eine häufig verwendete Loss-Funktion ist der Mean Squared Error:

$$
\operatorname{MSE}
=
\frac{1}{n}
\sum_{i=1}^{n}
(y_i-\hat y_i)^2
$$

### 7. Logistische Regression
Die logistische Regression wird für Klassifikationsaufgaben verwendet.
Zunächst wird ein Logit berechnet:

$$
z=ax+b
$$

Anschließend wird die Sigmoid-Funktion angewendet:

$$
\sigma(z)
=
\frac{1}{1+e^{-z}}
$$

Die Sigmoid-Funktion bildet den Logit auf einen Wert zwischen $0$ und $1$ ab. Dieser Wert kann als Wahrscheinlichkeit für die positive Klasse interpretiert werden.

Beispiel:

- $0$ = kein Spam
- $1$ = Spam

Die Ausgabe kann mithilfe eines Schwellenwertes in eine konkrete Entscheidung umgewandelt werden. Bei einem Schwellenwert von $0{,}5$ gilt beispielsweise:

- $\sigma(z)<0{,}5$ → Klasse 0
- $\sigma(z)\geq 0{,}5$ → Klasse 1

Die Aktivierungsfunktion macht aus dem unbeschränkten Logit eine interpretierbare Wahrscheinlichkeit. Sie ist nicht nur für die Entscheidung zuständig, sondern definiert das probabilistische Modell der logistischen Regression.

### 8. Aktivierungsfunktionen
Aktivierungsfunktionen ermöglichen neuronalen Netzen die Modellierung nichtlinearer Zusammenhänge.

Ohne nichtlineare Aktivierungsfunktionen würden mehrere aufeinanderfolgende lineare Schichten insgesamt wieder nur eine lineare Funktion darstellen.

| Funktion | Formel | Wertebereich | Typischer Einsatz |
| -------- | ------ | ------------ | ----------------- |
| **Sigmoid** | $\sigma(x)=\frac{1}{1+e^{-x}}$ | $(0,1)$ | binärer Output |
| **Tanh** | $\tanh(x)=\frac{e^x-e^{-x}}{e^x+e^{-x}}$ | $(-1,1)$ | versteckte Schichten, vor allem ältere Architekturen |
| **ReLU** | $\operatorname{ReLU}(x)=\max(0,x)$ | $[0,\infty)$ | versteckte Schichten |
| **Leaky ReLU** | $\operatorname{LeakyReLU}(x)=\max(\alpha x,x)$ | $(-\infty,\infty)$ | Alternative zu ReLU |
| **Softmax** | $\operatorname{softmax}(z)_i=\frac{e^{z_i}}{\sum_{j=1}^{K}e^{z_j}}$ | Wahrscheinlichkeitsverteilung | Multiklassen-Output |

#### Sigmoid
Sigmoid erzeugt Werte zwischen $0$ und $1$ und eignet sich daher für binäre Wahrscheinlichkeiten.
In tiefen versteckten Schichten kann Sigmoid zu sehr kleinen Gradienten führen.

#### Tanh
Tanh erzeugt Werte zwischen $-1$ und $1$. Die Funktion ist um null zentriert, kann aber ebenfalls unter verschwindenden Gradienten leiden.

#### ReLU
ReLU setzt negative Eingaben auf null und lässt positive Werte unverändert.
Vorteile:

- einfache Berechnung
- gute Gradienten für positive Eingaben
- häufig effizient in tiefen Netzen

Ein möglicher Nachteil ist das Problem der **dying ReLU**. Ein Neuron kann dauerhaft nur noch negative Eingaben erhalten und dadurch immer null ausgeben.

#### Leaky ReLU
Leaky ReLU lässt auch im negativen Bereich einen kleinen Gradienten zu:

$$
\operatorname{LeakyReLU}(x)
=
\begin{cases}
x, & x>0 \\
\alpha x, & x\leq 0
\end{cases}
$$

Typischerweise ist $\alpha$ eine kleine positive Zahl, beispielsweise $0{,}01$.

#### Softmax
Softmax wandelt einen Vektor aus Logits in eine Wahrscheinlichkeitsverteilung um.
Es gilt:

$$
\sum_{i=1}^{K}p_i=1
$$

Softmax wird typischerweise in der Ausgabeschicht einer Multiklassen-Klassifikation verwendet.

### 9. Cross-Entropy-Loss
Cross Entropy misst den Unterschied zwischen der vorhergesagten Wahrscheinlichkeitsverteilung und der tatsächlichen Klasse.

#### Categorical Cross Entropy

Für $K$ Klassen lautet die Loss-Funktion:

$$
L
=
-\sum_{i=1}^{K}
y_i\log(p_i)
$$

Dabei ist:

- $y_i$ der Zielwert der Klasse $i$
- $p_i$ die vorhergesagte Wahrscheinlichkeit der Klasse $i$

Bei One-Hot-Encoding besitzt nur die korrekte Klasse den Wert $1$. Deshalb reduziert sich die Formel auf:

$$
L=-\log(p_{\text{richtig}})
$$

Je näher die vorhergesagte Wahrscheinlichkeit der richtigen Klasse an $1$ liegt, desto kleiner ist der Loss.
Je näher sie an $0$ liegt, desto größer wird der Loss.

#### Binary Cross Entropy
Für eine binäre Klassifikation gilt:

$$
L
=
-\left(
y\log(p)
+
(1-y)\log(1-p)
\right)
$$

#### Zusammenspiel von Softmax und Cross Entropy
Softmax wandelt Logits in Wahrscheinlichkeiten um. Cross Entropy bewertet anschließend die Wahrscheinlichkeit der richtigen Klasse.

Beispiel für Logits:

```text
[2.5, 1.0, -0.5]
```

Nach Softmax ergibt sich ungefähr:

```text
[0.786, 0.175, 0.039]
```

Das Modell ordnet damit folgende Wahrscheinlichkeiten zu:

- Klasse 0: ungefähr 78,6 %
- Klasse 1: ungefähr 17,5 %
- Klasse 2: ungefähr 3,9 %

Ist Klasse 1 die richtige Klasse, lautet der One-Hot-Vektor:

```text
[0, 1, 0]
```

Der Loss betrachtet die vorhergesagte Wahrscheinlichkeit der richtigen Klasse:

$$
L=-\log(0{,}175)\approx 1{,}74
$$

Die Wahrscheinlichkeit der richtigen Klasse ist relativ niedrig. Entsprechend ist der Loss vergleichsweise hoch.


## Teil 3 – Fully Connected Networks und CNNs

### 1. Overfitting
**Overfitting** bedeutet, dass ein Modell die Trainingsdaten sehr gut beschreibt, aber auf neuen, unbekannten Daten schlecht generalisiert.

Typische Anzeichen sind:

- niedriger Trainingsfehler
- deutlich höherer Validierungs- oder Testfehler
- starke Anpassung an Rauschen oder zufällige Besonderheiten der Trainingsdaten

Mögliche Gegenmaßnahmen sind:

- mehr Trainingsdaten
- Datenaugmentation
- L1- oder L2-Regularisierung
- Dropout
- Early Stopping
- kleinere beziehungsweise einfachere Modelle
- geeignete Validierung
- teilweise Batch-Normalisierung als zusätzlicher regularisierender Effekt

Batch-Normalisierung ist allerdings nicht primär eine Methode gegen Overfitting, sondern dient vor allem der Stabilisierung des Trainings.

---

### 2. Fully Connected Layer
Bei einer vollständig verbundenen Schicht ist jedes Eingabeneuron mit jedem Ausgabeneuron verbunden.

Eigenschaften:

- viele trainierbare Parameter
- keine direkte Berücksichtigung räumlicher Nachbarschaften
- flexibel für allgemeine Merkmalsvektoren
- bei großen Bildern schnell sehr parameterintensiv

#### Beispiel
Ein Bild mit $28\times28=784$ Pixeln wird mit einer Schicht aus 100 Neuronen verbunden.
Die Anzahl der Gewichte beträgt:

$$
784\cdot100=78\,400
$$

Zusätzlich besitzt jedes der 100 Neuronen einen Bias. Insgesamt entstehen damit:

$$
78\,400+100=78\,500
$$

trainierbare Parameter.

---

### 3. Convolutional Neural Network
Ein **Convolutional Neural Network**, kurz CNN, verarbeitet Daten mithilfe lokaler Filter beziehungsweise Kernel.

Ein Filter wird über das Bild verschoben und verarbeitet jeweils einen kleinen lokalen Ausschnitt.

Vorteile:

- lokale Muster können erkannt werden
- Filtergewichte werden an allen Bildpositionen wiederverwendet
- räumliche Strukturen werden berücksichtigt
- meist deutlich weniger Parameter als bei einer vergleichbaren vollständig verbundenen Schicht

Typische gelernte Merkmale sind:

- Kanten
- Ecken
- Texturen
- einfache Formen
- komplexere Objektteile in tieferen Schichten

Die Parameterteilung kann das Risiko von Overfitting gegenüber einer ähnlich großen vollständig verbundenen Architektur reduzieren. Ein CNN kann bei ungeeigneter Modellgröße oder zu wenigen Daten trotzdem overfitten.

#### Anzahl der Filterparameter
Bei einem Graustufenbild und zehn Filtern der Größe $3\times3$ entstehen:

$$
10\cdot3\cdot3=90
$$

Filtergewichte.

Zusätzlich können zehn Bias-Werte vorhanden sein:

$$
90+10=100
$$

Bei mehreren Eingangskanälen muss zusätzlich die Anzahl der Kanäle berücksichtigt werden:

$$
\text{Parameter}
=
K_hK_wC_{\text{in}}C_{\text{out}}
+
C_{\text{out}}
$$

Dabei ist:

- $K_h$ die Höhe des Filters
- $K_w$ die Breite des Filters
- $C_{\text{in}}$ die Anzahl der Eingangskanäle
- $C_{\text{out}}$ die Anzahl der Filter beziehungsweise Ausgangskanäle

---

### 4. Beispiel einer Faltung
Gegeben ist ein Graustufenbild mit $5\times5$ Pixeln:

```text
1  2  3  0  1
4  5  6  1  0
7  8  9  0  1
1  2  3  4  5
0  1  2  3  4
```

Ein Sobel-Filter zur Erkennung horizontaler Kanten lautet:

```text
-1  -2  -1
 0   0   0
 1   2   1
```

Der Filter reagiert auf Änderungen in vertikaler Richtung und hebt dadurch horizontale Kanten hervor.

Der Filter wird über das Bild verschoben. Bei jedem Schritt werden folgende Operationen ausgeführt:

1. Bildausschnitt und Filter werden elementweise multipliziert.
2. Die einzelnen Produkte werden addiert.
3. Das Ergebnis bildet einen Wert der Output-Feature-Map.

#### Erster Bildausschnitt

```text
1  2  3
4  5  6
7  8  9
```

Elementweise Multiplikation und Summierung:

$$
\begin{aligned}
&1(-1)+2(-2)+3(-1)\\
&+4(0)+5(0)+6(0)\\
&+7(1)+8(2)+9(1)\\
&=24
\end{aligned}
$$

Der erste Wert der Feature-Map ist damit $24$.

Bei einem $5\times5$-Bild, einem $3\times3$-Filter, Stride $1$ und ohne Padding entsteht eine $3\times3$-Feature-Map:

```text
24  X  X
 X  X  X
 X  X  X
```

In vielen Softwarebibliotheken wird technisch eine Kreuzkorrelation berechnet, weil der Filter nicht gespiegelt wird. Im Zusammenhang mit CNNs wird dieser Vorgang trotzdem üblicherweise als Convolution beziehungsweise Faltung bezeichnet.

Der Sobel-Filter ist ein fest vorgegebener Filter. In einem CNN werden die Filtergewichte dagegen normalerweise während des Trainings gelernt.

> Ein CNN-Filter verarbeitet lokale Bildbereiche und erzeugt daraus Feature-Maps. Die Filtergewichte werden während des Trainings so angepasst, dass sie für die jeweilige Aufgabe hilfreiche Merkmale erkennen.

---

### 5. Padding, Stride und Pooling
#### Padding

Beim Padding wird der Rand der Eingabe um zusätzliche Werte erweitert, häufig um Nullen.

Padding kann verhindern, dass die räumliche Größe der Feature-Map nach jeder Faltung stark abnimmt.

#### Stride

Der Stride gibt an, um wie viele Positionen der Filter bei jedem Schritt verschoben wird.

- Stride $1$ → Verschiebung um eine Position
- Stride $2$ → Verschiebung um zwei Positionen und dadurch eine kleinere Feature-Map

#### Pooling
Pooling verkleinert Feature-Maps, indem lokale Bereiche zusammengefasst werden.

Beim Max Pooling wird beispielsweise der größte Wert eines Bereichs übernommen.

Beispiel:

```text
1  4
3  2
```

Das Max Pooling liefert:

```text
4
```

Pooling reduziert die räumliche Auflösung und kann die Robustheit gegenüber kleinen Verschiebungen erhöhen.

---

### 6. Batch-Normalisierung
Batch-Normalisierung normalisiert während des Trainings die Aktivierungen eines Mini-Batches.

Zunächst werden Mittelwert und Varianz berechnet:

$$
\mu_B
=
\frac{1}{m}
\sum_{i=1}^{m}x_i
$$

$$
\sigma_B^2
=
\frac{1}{m}
\sum_{i=1}^{m}
(x_i-\mu_B)^2
$$

Anschließend wird normalisiert:

$$
\hat{x}_i
=
\frac{x_i-\mu_B}
{\sqrt{\sigma_B^2+\varepsilon}}
$$

Danach werden eine lernbare Skalierung $\gamma$ und eine lernbare Verschiebung $\beta$ angewendet:

$$
y_i
=
\gamma\hat{x}_i+\beta
$$

Vorteile:

- stabileres Training
- häufig größere mögliche Learning Rates
- geringere Abhängigkeit von der Parameterinitialisierung
- teilweise regularisierender Nebeneffekt

Während der Inferenz werden normalerweise gespeicherte beziehungsweise gleitend gemittelte Mittelwerte und Varianzen verwendet.

---

### 7. L1-Regularisierung
Bei der L1-Regularisierung wird die Summe der Absolutwerte der Gewichte zum ursprünglichen Loss addiert:

$$
L_{\text{gesamt}}
=
L_{\text{Daten}}
+
\lambda
\sum_i|w_i|
$$

Eigenschaften:

- begünstigt sparsame Parameterlösungen
- kann viele Gewichte exakt oder nahezu auf null setzen
- kann eine Form von Merkmalsauswahl bewirken
- ist an der Stelle $w=0$ nicht differenzierbar, kann dort aber mithilfe eines Subgradienten optimiert werden

---

### 8. L2-Regularisierung
Bei der L2-Regularisierung wird die Summe der quadrierten Gewichte zum ursprünglichen Loss addiert:

$$
L_{\text{gesamt}}
=
L_{\text{Daten}}
+
\lambda
\sum_iw_i^2
$$

Eigenschaften:

- große Gewichte werden besonders stark bestraft
- Gewichte werden in Richtung null gedrückt
- Gewichte werden normalerweise nicht exakt null
- das Modell wird weniger empfindlich gegenüber einzelnen Eingabemerkmalen

L2-Regularisierung wird häufig mit Weight Decay in Verbindung gebracht. Bei einfachem Gradient Descent sind beide eng miteinander verbunden. Bei bestimmten adaptiven Optimierern sind L2-Regularisierung und entkoppeltes Weight Decay allerdings nicht exakt dasselbe.

| Methode | Regularisierungsterm | Typischer Effekt |
| ------- | -------------------- | ---------------- |
| **L1** | $\lambda\sum_i|w_i|$ | fördert sparsame Gewichte und mögliche Nullen |
| **L2** | $\lambda\sum_iw_i^2$ | hält die Gewichte insgesamt kleiner |
| **Elastic Net** | Kombination aus L1 und L2 | verbindet die Eigenschaften beider Verfahren |

Die Bezeichnungen **Lasso** und **Ridge** stammen vor allem aus der linearen Regression. Bei neuronalen Netzen werden meist die Begriffe L1- und L2-Regularisierung verwendet.

---

### 9. Dropout
Dropout deaktiviert während des Trainings zufällig einen Teil der Aktivierungen einer Schicht.

Ein deaktiviertes Neuron beziehungsweise dessen Aktivierung wird für den aktuellen Trainingsschritt auf null gesetzt.

Wichtig:

- Die Auswahl wird bei jedem Trainingsschritt neu getroffen.
- Die Parameter der deaktivierten Neuronen werden nicht dauerhaft gelöscht.
- Das Netzwerk kann sich weniger stark auf einzelne Aktivierungen verlassen.
- Redundante und robustere Repräsentationen werden gefördert.
- Während der Inferenz ist Dropout normalerweise deaktiviert.

Bei **Inverted Dropout** werden die verbleibenden Aktivierungen bereits während des Trainings passend skaliert. Dadurch ist während der Inferenz keine zusätzliche Skalierung notwendig.

Ziel ist die Verringerung von Overfitting und die Verbesserung der Generalisierung.

---

### 10. Analyse trainierter CNNs
#### CAM und Grad-CAM

**Class Activation Mapping**, kurz CAM, erzeugt eine Heatmap, die zeigt, welche Bildregionen zur Vorhersage einer bestimmten Klasse beigetragen haben.

Das ursprüngliche CAM setzt eine bestimmte Netzwerkarchitektur mit Global Average Pooling voraus.

**Grad-CAM** ist allgemeiner einsetzbar und verwendet Gradienten, um relevante Bereiche einer Feature-Map zu gewichten.

Die Heatmaps zeigen Hinweise auf relevante Bildregionen. Sie beweisen jedoch nicht automatisch einen kausalen Zusammenhang.
#### Guided Backpropagation
Guided Backpropagation visualisiert, welche Eingabebereiche eine starke positive Wirkung auf bestimmte Aktivierungen besitzen.

Das Verfahren erzeugt häufig detailreiche Darstellungen, ist aber ebenfalls keine vollständige kausale Erklärung des Modellverhaltens.

#### Wichtige Begriffe

| Begriff | Bedeutung |
| ------- | --------- |
| **Logits** | Rohausgaben des Modells vor Sigmoid oder Softmax |
| **Feature-Maps** | Zwischenergebnisse einer Faltungsoperation |
| **Kernel beziehungsweise Filter** | Kleine Gewichtsmatrix zur lokalen Verarbeitung |
| **Pooling** | Verkleinerung und Zusammenfassung von Feature-Maps |
| **Padding** | Ergänzung des Eingaberandes |
| **Stride** | Schrittweite des Filters |
| **Receptive Field** | Bereich der ursprünglichen Eingabe, der eine Aktivierung beeinflusst |
| **CAM beziehungsweise Grad-CAM** | Visualisierung klassenrelevanter Bildbereiche |