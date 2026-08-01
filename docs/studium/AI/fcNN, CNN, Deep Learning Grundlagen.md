
## 1. Überwachtes Lernen

Beim **überwachten Lernen (Supervised Learning)** lernt ein Modell anhand von Eingabedaten $X$ und den zugehörigen Zielwerten $Y$, Vorhersagen für neue Daten zu treffen.

Bei MNIST gilt:

- **Eingabe $X$:** Bild einer handgeschriebenen Ziffer
- **Zielwert $Y$:** dargestellte Ziffer zwischen 0 und 9

Die Daten werden aufgeteilt in:

- **Trainingsdaten:** zum Lernen der Modellparameter
- **Validierungsdaten:** zur Kontrolle während des Trainings
- **Testdaten:** zur abschließenden Bewertung

Die Validierungsdaten helfen dabei, Overfitting zu erkennen. Die Testdaten werden erst nach dem Training verwendet.

## 2. MNIST-Datensatz und Vorverarbeitung

Der **MNIST-Datensatz** besteht aus:

- 60.000 Trainingsbildern
- 10.000 Testbildern
- Bildern mit $28 \times 28$ Pixeln
- Graustufenwerten zwischen 0 und 255
- den Ziffern 0 bis 9 als Klassen

### Normalisierung

Die Pixelwerte werden normalerweise auf einen Bereich zwischen 0 und 1 normalisiert:

$$
x_{\text{norm}} = \frac{x}{255}
$$

Dadurch wird das Training stabiler und effizienter.

### One-Hot-Encoding

Beim **One-Hot-Encoding** wird jede Klasse durch einen Vektor dargestellt.

Beispiel für die Ziffer 3:

```text
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
```

One-Hot-Encoding wird zusammen mit `categorical_crossentropy` verwendet. Bei ganzzahligen Labels von 0 bis 9 kann alternativ `sparse_categorical_crossentropy` eingesetzt werden.

## 3. Training eines Modells

Ein Trainingsschritt besteht aus folgenden Schritten:

1. Das Modell verarbeitet die Eingabedaten.
2. Es erzeugt eine Vorhersage.
3. Die Loss-Funktion berechnet den Fehler.
4. Backpropagation berechnet die Gradienten.
5. Der Optimizer aktualisiert die Gewichte.

### Softmax und Cross Entropy

Die Rohwerte der letzten Schicht werden als **Logits** bezeichnet. Softmax wandelt diese Werte in Wahrscheinlichkeiten um:

$$
\operatorname{softmax}(z_i)
=
\frac{e^{z_i}}{\sum_j e^{z_j}}
$$

Beispiel:

```text
Logits:        [2.3, 5.1, -1.2]
Wahrscheinlichkeiten: [0.057, 0.941, 0.002]
```

Die **Cross Entropy** misst, welche Wahrscheinlichkeit das Modell der richtigen Klasse zuordnet:

$$
L = -\log(p_{\text{richtig}})
$$

Eine hohe Wahrscheinlichkeit für die richtige Klasse führt zu einem niedrigen Loss.

### Backpropagation und Optimizer

Backpropagation berechnet die Gradienten des Loss bezüglich der Gewichte. Der Optimizer verwendet diese Gradienten zur Aktualisierung:

$$
w_{\text{neu}}
=
w_{\text{alt}}
-
\eta
\frac{\partial L}{\partial w}
$$

Dabei ist $\eta$ die **Learning Rate**. Ein häufig verwendeter Optimizer ist **Adam**.

### Wichtige Begriffe

- **Epoche:** einmalige Verarbeitung aller Trainingsdaten
- **Batch:** Teilmenge der Trainingsdaten
- **Batch-Größe:** Anzahl der Beispiele pro Trainingsschritt
- **Learning Rate:** Größe der Gewichtsänderungen
- **Loss:** Maß für den Vorhersagefehler

## 4. Fully Connected Neural Network

Bei einem **Fully Connected Neural Network (FCNN)** beziehungsweise **Multilayer Perceptron (MLP)** ist jedes Neuron mit allen Neuronen der folgenden Schicht verbunden.

### Aufbau

Das $28 \times 28$ große Bild wird zunächst in einen Vektor mit 784 Werten umgewandelt:

```text
28×28-Bild
    ↓
Flatten: 784 Werte
    ↓
Dense Layer mit ReLU
    ↓
Output Layer mit 10 Neuronen und Softmax
```

### Eigenschaften

- einfache Netzwerkstruktur
- viele trainierbare Parameter
- räumliche Anordnung der Pixel geht beim Flattening verloren
- lokale Bildstrukturen werden nicht direkt berücksichtigt

Werden 784 Eingaben mit 100 Neuronen verbunden, entstehen einschließlich der Bias-Werte:

$$
784 \cdot 100 + 100 = 78\,500
$$

trainierbare Parameter.

Ein FCNN erreicht auf MNIST abhängig von Aufbau und Training häufig ungefähr 97 bis 98 % Genauigkeit.

## 5. Convolutional Neural Network

Ein **Convolutional Neural Network (CNN)** verarbeitet Bilder zunächst in ihrer zweidimensionalen Form und berücksichtigt dadurch lokale und räumliche Strukturen.

### Aufbau

```text
28×28-Bild
    ↓
Conv2D + ReLU
    ↓
MaxPooling2D
    ↓
Conv2D + ReLU
    ↓
Flatten
    ↓
Dense + Softmax
```

### Faltung und lokale Muster

Eine Faltungsschicht verwendet kleine Filter, beispielsweise mit einer Größe von $3 \times 3$. Diese werden über das Bild verschoben und erzeugen **Feature-Maps**.

Die Filter können unter anderem folgende Merkmale erkennen:

- Kanten
- Linien
- Ecken
- Rundungen
- komplexere Formen

Frühe Schichten erkennen einfache Merkmale. Tiefere Schichten kombinieren diese zu komplexeren Mustern und Bestandteilen von Ziffern.

Die Filtergewichte werden während des Trainings gelernt und an allen Bildpositionen wiederverwendet. Dadurch benötigt ein CNN meist weniger Parameter als ein vergleichbares FCNN.

### Pooling

Pooling verkleinert Feature-Maps. Beim **Max Pooling** wird der größte Wert eines lokalen Bereichs übernommen.

Beispiel:

```text
1  4
3  2
```

Ergebnis:

```text
4
```

Pooling reduziert die Datenmenge und erhöht die Toleranz gegenüber kleinen Verschiebungen.

### Vorteile gegenüber einem FCNN

- lokale Bildmuster werden berücksichtigt
- räumliche Strukturen bleiben länger erhalten
- Filtergewichte werden wiederverwendet
- häufig weniger Parameter
- besonders gut für Bildverarbeitung geeignet

CNNs erreichen auf MNIST abhängig von Architektur und Training häufig über 99 % Genauigkeit.

## 6. Auswertung

Nach dem Training wird das Modell mit unbekannten Testdaten bewertet.

Wichtige Metriken sind:

- **Accuracy:** Anteil korrekt klassifizierter Bilder
- **Loss:** Maß für den Vorhersagefehler
- **Confusion Matrix:** zeigt Verwechslungen zwischen Klassen
- **Trainingsverlauf:** zeigt Accuracy und Loss für Trainings- und Validierungsdaten

Ein mögliches Zeichen für **Overfitting** ist:

- Training Loss sinkt weiter
- Validation Loss steigt
- Training Accuracy steigt
- Validation Accuracy stagniert oder sinkt

Das Modell passt sich dann immer stärker an die Trainingsdaten an, während sich die Leistung auf unbekannten Daten verschlechtert.