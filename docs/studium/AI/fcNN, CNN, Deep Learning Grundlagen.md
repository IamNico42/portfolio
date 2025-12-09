

## **Grundlagen des Maschinellen Lernens**

### 📘 Erklärung:

Beim **überwachten Lernen (Supervised Learning)** lernt ein Modell anhand von **Eingabedaten (X)** und den zugehörigen **Zielwerten (Y)**, wie es Vorhersagen treffen kann.

In der MNIST-Aufgabe:
- Eingabe: 28x28-Bild von einer Zahl
- Ziel: Welche Ziffer ist darauf zu sehen (z. B. 5)
    

Wir unterteilen die Daten in:
- **Trainingsdaten** - zum Lernen
- **Validierungsdaten** - zur Kontrolle während des Trainings (tun wir "zu viel"?)
- **Testdaten** - zur abschließenden Bewertung (wie gut ist das Modell bei neuen, unbekannten Bildern?)
    

**Wichtige Begriffe:**
- **Loss-Funktion**: misst den Fehler → z. B. `categorical_crossentropy`
- **Optimizer**: passt die Gewichte an → z. B. `adam`
- **Epochen**: wie oft das Modell alle Trainingsdaten durchläuft
- **Batch-Größe**: Gibt an, **wie viele Trainingsbeispiele gleichzeitig** verarbeitet werden, **bevor** das Modell die Gewichte aktualisiert

## 1. 📦 **Was ist das MNIST-Datenset?**

- Datensatz mit **60.000 Trainingsbildern** und **10.000 Testbildern**
- Bilder: **28x28 Pixel**, Graustufen (Werte 0-255)
- Ziel: Ziffern **0 bis 9** automatisch erkennen
- Bilder werden auf **Werte zwischen 0 und 1 normalisiert** (`/255.0`)
- Labels werden in **One-Hot-Encoding** umgewandelt → z. B. 3 → `[0, 0, 0, 1, 0, ..., 0]`

## 2. 🔢 **fcNN - Fully Connected Neural Network (Multilayer Perceptron)**

### 📌 Aufbau:

- Eingabedaten müssen **geflattet** werden: 28×28 → Vektor mit 784 Werten
- Besteht aus: `Dense`-Layern + Aktivierungsfunktionen (`sigmoid`, `relu`)
- Output-Layer: 10 Neuronen mit `softmax` für Wahrscheinlichkeiten
    

### 📌 Eigenschaften:

- **Jede Verbindung** zwischen den Neuronen wird trainiert
- **Räumliche Struktur** des Bildes geht **verloren**
- Erreicht ca. **97 % Genauigkeit** auf MNIST


## 3. 🧠 **CNN - Convolutional Neural Network**

### 📌 Aufbau:

- **Arbeitet direkt mit 2D-Bildern** (kein Flatten nötig!)
- Typische Layer:
    - `Conv2D`: erkennt lokale Muster mit kleinen Filtern (z. B. 3x3)
    - `MaxPooling2D`: reduziert Größe, hebt wichtigste Infos hervor
    - `Flatten`: bereitet Ausgabe für Dense-Schichten vor
    - `Dense + softmax`: Klassifikation
        

### 📌 Warum CNNs besser für Bilder sind:

- **Erkennen lokale Muster** wie Kanten, Linien, Kreise
- **Behalten räumliche Lage bei**
- **Robust gegenüber Verschiebung** von Ziffern im Bild
- Lernen tiefere, abstraktere Repräsentationen
- Erreichen **über 99 % Genauigkeit** auf MNIST

## 4. 🧩 **Was sind lokale Muster & wie erkennt CNN sie?**

### 📌 Lokale Muster:

- Kleine visuelle Merkmale: z. B. Ecken, Striche, Kreise
- Ein Filter (3×3 oder 5×5) „scannt“ das Bild
- Multipliziert Filter & Bildausschnitt → ergibt Feature Map
    

### 📌 CNN-Schichten lernen:

- Frühe Layer: Kanten, einfache Muster
- Spätere Layer: Formen, Ziffern
- CNN erkennt **was** und **wo** ein Muster ist → fcNN nicht


## 5. ⚙️ **Softmax, One-Hot-Encoding und Optimizer**

### ✅ Softmax:

- Wandelt Roh-Ausgaben des Netzes in **Wahrscheinlichkeiten** um
- Beispiel: `[2.3, 5.1, -1.2]` → `[0.1, 0.89, 0.01]`
    
### ✅ One-Hot-Encoding:

- Wandelt Zielklassen in Vektoren mit genau **einer 1** an der richtigen Stelle um
- Wird für die **Loss-Berechnung mit `categorical_crossentropy`** benötigt
    
### ✅ Optimizer (`adam`):

- Berechnet, **wie die Gewichte geändert werden müssen**, um den Fehler zu minimieren
- Adam ist **schnell, effizient und selbstanpassend**

## 6. 📊 **Trainingsmetriken & Auswertung**

- **Accuracy**: Anteil korrekt klassifizierter Bilder
- **Loss**: Maß für den Vorhersagefehler
- **Confusion Matrix**: Zeigt, welche Klassen wie oft **verwechselt** wurden
- **Trainingsverlauf (Plots)**: visualisiert Lernfortschritt