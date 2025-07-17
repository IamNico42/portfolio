### 📘 **Strukturiertes Lernskript: Teil 1 – Symbolische KI**

(→ aus Klausur SS2021)

#### 🧠 **1. Suchen & Problemlösen**

**Beispielaufgabe (Wasserkrugproblem)**: Ziel ist ein Zustand mit (x, y, z) = (4, 4, 0)

- **Zustand** = (Inhalt 8l, 5l, 3l)
- **Aktionen** = Umfüllen zwischen Gefäßen, nur bis maximal voll oder leer
- **Suchstrategien**:
    
    - **Breitensuche**: prüft alle Möglichkeiten pro Ebene → findet **immer kürzeste Lösung**
    - **Tiefensuche**: geht tief in einen Pfad → **nicht garantiert** kürzeste
    - **Iterativ vertiefende Tiefensuche**: wie Tiefensuche, aber in Schritten → **findet auch kürzeste**
        

👉 **Merksatz**: Breitensuche = optimal, aber speicherintensiv

---

#### 🧠 **2. Aussagenlogik & Resolution**

## **Was ist der Resolutionskalkül?**
> Der **Resolutionskalkül** ist ein Verfahren, mit dem man **automatisch prüfen kann**, ob eine Aussage **logisch aus anderen Aussagen folgt** – also ob ein Argument **gültig** ist.

Beispiel:

- α₁: a ∧ b → c
- α₂: c → d ∨ e
- α₃: e → d
- γ: a → (b → d)
    

➡ **Ziel**: Mit Resolution zeigen, dass γ logisch folgt.

**Schritte:**

1. **Umformen in KNF** (Konjunktive Normalform)
2. **Negation der Zielaussage**
3. **Resolutionskalkül anwenden**, bis leere Klausel (Widerspruch) gefunden wird

    

---

#### 🧠 **3. Constraint Satisfaction Problems (CSP)**

Beispiel: Länder einfärben (keine Nachbarn in gleicher Farbe)

- **Strategien beim Backtracking**:
    
    1. **Most Constrained Variable First** – wähle Land mit wenigsten möglichen Farben
    2. **Most Constraining Variable First** – falls Gleichstand: Land mit meisten Nachbarn zuerst
    3. **Least Constraining Value First** – Farbe, die wenig stört
    4. **Forward Checking** – verbietet ungültige Farben für Nachbarn **nach** Farbwahl
        

➡ **AC-3 Algorithmus**: prüft Paare (z. B. Land 1 & 2) und schränkt mögliche Farben ein, bis **Konsistenz** erreicht

---
### 🤖 **Teil 2 – Maschinelles Lernen & Neuronale Netze**

(→ Nachprüfung 2021)

## Was ist **One-Hot-Encoding**?
**One-Hot-Encoding** ist eine Methode, um **Kategorien** (= Klassen) in Zahlen umzuwandeln, sodass sie von **mathematischen Modellen** verstanden werden können.

| Klasse | One-Hot-Vektor |
| ------ | -------------- |
| Hund   | `[1, 0, 0]`    |
| Katze  | `[0, 1, 0]`    |
| Maus   | `[0, 0, 1]`    |

### Allgemein:
- **Epoche** = einmal durch alle Trainingsdaten
- **Batch Size** = wie viele Beispiele gleichzeitig gelernt werden
- **Learning Rate** = wie groß die Schritte beim Gewichts-Update sind
- - **Gewicht (w)**: multipliziert mit Input
- **Bias (b)**: wird **addiert**, um Verschiebung zu ermöglichen  
    → Funktioniert wie der y-Achsenabschnitt in einer linearen Funktion

### was ist **Gradient Descent**?
- ein **Fehler/Loss** berechnet wird
- dieser **minimiert** werden soll

### Was passiert in einem Trainingsschritt?
Für **alle Modelle**, von linear bis CNN:
1. Eingabe durch Netz → **Vorhersage**
2. Vergleich mit Zielwert → **Fehler/Loss**
3. **Gradienten berechnen** = Wie stark ändert sich der Fehler, wenn ein Gewicht verändert wird?
4. **Gewichte anpassen mit Gradient Descent**:
    $w = w - \eta \cdot \frac{\partial L}{\partial w}​$
5. Wiederholen (mehr Epochen, mehr Batches)
### was ist **Backpropagation**?
> Backpropagation = „Fehler rückwärts durchs Netz schicken“, um zu wissen, **welches Gewicht wie viel Schuld hat**
- In **einfachen Modellen** (z. B. logistische Regression):  
    Backprop ist nur **1 Schritt rückwärts**
- In **tiefen Netzen** (z. B. MLP, CNN):  
    Backpropagation **läuft durch alle Layer zurück** und berechnet alle Gradienten

| Modell                 | Loss-Funktion       | Aktivierung   | Optimierungsmethode              |
| ---------------------- | ------------------- | ------------- | -------------------------------- |
| Lineare Regression     | MSE                 | –             | Gradient Descent                 |
| Logistische Regression | Cross Entropy       | Sigmoid       | Gradient Descent + Backprop      |
| MLP / FCNN / CNN       | z. B. Cross Entropy | ReLU, Softmax | Backprop durch mehrere Schichten |
### 🔹 **Lineare Regression**

> **Ziel**: Einen **Zahlenwert** vorhersagen (z. B. Preis, Temperatur)

Formel:
$\hat{y} = a \cdot x + b$

- `x`: Eingabewert (z. B. Größe)
- `y`: Ausgabewert (z. B. Gewicht)
- `a`: Steigung (wie stark y sich mit x verändert)
- `b`: Achsenabschnitt (Startwert)
    

📌 **Beispiel**:  
Du möchtest das **Gewicht einer Person** aufgrund ihrer **Größe** schätzen.  
→ Je größer die Person, desto mehr wiegt sie im Schnitt → Lineare Beziehung

---

### 🔹 **Logistische Regression**

> **Ziel**: Eine **Wahrscheinlichkeit** vorhersagen (z. B. „gehört zur Klasse 1“)

Formel:
$$
\sigma(z) = \frac{1}{1 + e^{-z}} \quad \text{wobei } z = a \cdot x + b
$$

- Gibt **Wahrscheinlichkeiten zwischen 0 und 1** aus
- Wird genutzt bei **Klassifikationsaufgaben** (z. B. "Spam oder nicht?")

📌 **Beispiel**:  
Du möchtest vorhersagen, ob eine E-Mail **Spam** ist → 0 = nein, 1 = ja  
Die logistische Regression berechnet: „Wie sicher bin ich mir, dass es Spam ist?“

Braucht Aktivierungsfunktion weil es dadurch zugänglich für Entscheidungen macht statt nur wie bei der linearen Regression einen Wert zu berechnen
## Bekannte Aktivierungsfunktionen:

| Funktion       | Formel                                          | Eigenschaften                                      | Typischer Einsatz                                           | Wofür                                    |
| -------------- | ----------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| **Sigmoid**    | $\sigma(x) = \frac{1}{1+e^{-x}}$                | glättet auf [0,1], gut für Wahrscheinlichkeiten    | Klassifikation (z. B. logistische Regression, Output Layer) | Macht Werte zu **Wahrscheinlichkeiten**  |
| **Tanh**       | $\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}​$ | Werte zwischen [–1, 1], aber ähnlich wie Sigmoid   | Hidden Layers (früher Standard)                             | **Zentriert**, hilft bei Gradienten      |
| **ReLU**       | $\text{ReLU}(x) = \max(0, x)$                   | lässt nur positive Werte durch, **sehr effizient** | Hidden Layers (heute Standard)                              | **Effizient**, verhindert viele Probleme |
| **Leaky ReLU** | $x.wenn.x>0, sonst 0.01x$                       | wie ReLU, aber kleine Negative erlaubt             | Hidden Layers (Alternative zu ReLU)                         | Verhindert, dass Neuronen „sterben“      |
| **Softmax**    | $\frac{e^{x_i}}{\sum e^{x_j}}$​​                | macht Wahrscheinlichkeitsverteilung aus Vektor     | Multiklass-Klassifikation (Output Layer)                    | Gibt **Wahrscheinlichkeitsverteilung**   |

---

#### 🔥 **3. Cross Entropy Loss**

**Misst den Fehler**, wenn ein neuronales Netz eine Klasse vorhersagen soll.
Formel (bei einer Klasse 1):

$$
\text{Loss} = -\log(\text{p})
$$
- `p` ist die vorhergesagte Wahrscheinlichkeit für die **richtige Klasse**
- Je näher `p` an 1 → **kleiner Verlust**
- Je näher `p` an 0 → **sehr großer Verlust**

📌 **Beispiel**:  
Die wahre Klasse ist **Katze**.  
Das Modell sagt mit 90 %: „Das ist eine Katze.“  
→ Guter Wert, niedriger Fehler  
Sagt es nur 10 %: → hoher Fehler, obwohl „Katze“ korrekt ist!

| Funktion          | Aufgabe                                 | Beispiel                                              |
| ----------------- | --------------------------------------- | ----------------------------------------------------- |
| **Softmax**       | Macht aus Zahlen Wahrscheinlichkeiten   | `[2.0, 1.0, 0.1] → [0.65, 0.24, 0.11]`                |
| **Cross Entropy** | Vergleicht Vorhersage mit echter Klasse | `loss([0.65, 0.24, 0.11], [0, 1, 0])` = großer Fehler |
##### ✅ Schritt 1: **Softmax**
> Macht aus den **Roh-Ausgaben** des Netzes (auch „Logits“ genannt) **Wahrscheinlichkeiten** für jede Klasse.

📌 Beispiel:

Roh-Ausgabe vom Netz (z. B. letzte Schicht, noch **keine Wahrscheinlichkeiten**):


`[2.5, 1.0, -0.5]`

Softmax wandelt das um:

`[0.78, 0.18, 0.04]`

➡ Das Netz „glaubt“:

- Klasse 0 mit 78 %
- Klasse 1 mit 18 %
- Klasse 2 mit 4 %
    
##### ✅ Schritt 2: **Cross Entropy**
> Vergleicht diese Wahrscheinlichkeiten mit der **richtigen Klasse** (One-Hot)

📌 Beispiel:  
Die **wahre Klasse** war **Klasse 1** → One-Hot: `[0, 1, 0]`
Cross Entropy Loss schaut dann auf den Wert **bei der 1** (Klasse 1):
$\text{Loss} = -\log(0.18) \approx 1.714$
→ Das Netz hat **nicht besonders gut geraten** → also **hoher Fehler**
→ je **höher die Vorhersage für die richtige Klasse**, desto **niedriger der Verlust**

---

## 🟣 **3. CNN vs. Fully Connected Layer**

## 🔥 Was ist **Overfitting**?
> Overfitting bedeutet, dass dein Modell die **Trainingsdaten zu gut auswendig gelernt hat**, aber **auf neuen Daten schlecht funktioniert**.

### 🛠 Was hilft gegen Overfitting?
- **Mehr Daten**
- **Dropout** → zufälliges Abschalten von Neuronen beim Training
- **Regularisierung** (z. B. L2)
- **Batch-Normalisierung**
- **Frühes Stoppen** (Early Stopping)
- **Datenaugmentation** (z. B. Bilder leicht kippen, drehen, spiegeln, um mehr Vielfalt zu schaffen)

### 🔹 **Fully Connected (FC)**

- Jedes Neuron ist mit **allen Neuronen** der nächsten Schicht verbunden
- Viele Parameter → hohe Rechenlast
- Keine Rücksicht auf **räumliche Struktur** (z. B. bei Bildern)

📌 Beispiel: Eingabebild mit 784 Pixeln (28×28) → 100 Neuronen → **78.400 Gewichte!**

---

### 🔹 **CNN (Convolutional Neural Network)**

- Nutzt **Filter**, die über das Bild „wandern“ (Faltung)
- Erkennen **Kanten, Texturen, Formen**
- **Weniger Parameter** – z. B. 10 Filter à 3×3 = 90 Gewichte

📌 Vorteil:

- CNNs erkennen **lokale Muster** (z. B. Augen in Gesichtern)
- Weniger Overfitting
- Besser für Bilder geeignet

Stell dir vor, du hast ein sehr kleines Bild (z. B. Graustufen, 5×5 Pixel):

### 📷 Bild (Input-Matrix)

```
1  2  3  0  1
4  5  6  1  0
7  8  9  0  1
1  2  3  4  5
0  1  2  3  4

```

Und du hast **einen Filter**, der Kanten in horizontaler Richtung erkennt. Der sieht z. B. so aus:

### 🧩 Filter (3×3 Matrix)

```
-1 -1 -1
 0  0  0
 1  1  1
```

Das ist ein sogenannter **Sobel-Filter**, der **horizontale Kanten** erkennt (oben dunkel, unten hell → z. B. Augenbraue über Auge).

## 🔁 Was passiert jetzt?

Der Filter **„wandert“ über das Bild**, von links nach rechts, oben nach unten, immer 3×3 Ausschnitte.
Bei jedem Schritt wird:

1. Das **Filterelement mit dem Bildausschnitt multipliziert**
2. Die Produkte werden **aufsummiert**
3. Das ergibt **einen Pixel im Ausgabebild**
    

---

### 🔍 Beispiel-Schritt 1 (linke obere Ecke):

Der 3×3-Ausschnitt aus dem Bild:

```
1  2  3
4  5  6
7  8  9
```

Multipliziert mit dem Filter (elementweise):

`1*–1 + 2*–1 + 3*–1 + 4*0 + 5*0 + 6*0 + 7*1 + 8*1 + 9*1 = –1 –2 –3 + 0 + 0 + 0 + 7 + 8 + 9 = **18**`

→ Das ist der **erste Pixel** im Output-Bild

```
18  X  X
X   X  X
X   X  X
```

### 💡 Fazit:
> Ein CNN-Filter ist eine kleine Matrix (z. B. 3×3), die lokal über das Bild läuft und **wichtige Muster erkennt**, z. B. Kanten. Das Netz lernt im Training selbst, **welche Filter am besten funktionieren**.

---

#### 🧠 **5. Batch-Normierung**

- **Standardisiert Eingaben pro Mini-Batch**
- Vorteil: schnelleres & stabileres Training
- Formel:
$$
 x' = \frac{x - \text{Mittelwert}}{\text{Standardabweichung} + \varepsilon} \quad\Rightarrow\quad BN(x') = \alpha x' + \beta
$$

---
## 🔴 **L1-Regularisierung**

### 🧮 Formel:
$$
\text{Loss} = \text{Fehler} + \lambda \cdot \sum |w|
$$
- Bestraft **alle Gewichte linear**
- Hat den Effekt, dass **viele Gewichte exakt null werden**

## 🔵 **L2-Regularisierung** (das ist die „Standard“-Variante)

### 🧮 Formel:

$$
\text{Loss} = \text{Fehler} + \lambda \cdot \sum w^2
$$

- `λ` ist ein Parameter, wie **stark du die Bestrafung** willst
- Große Gewichte → **überproportional stärker bestraft**
- Aber: **Gewichte werden nicht null**, sondern nur **kleiner gehalten**
    

📌 **Was passiert?**  
Das Netz **verteilt die Verantwortung** gleichmäßig.  
Es **vermeidet es**, dass ein einzelnes Neuron „alles“ speichert (und damit überfitten kann).

| Name        | Auch genannt | Bestraft große …      | Effekt                     | Vorteil                         | Nachteil      |
| ----------- | ------------ | --------------------- | -------------------------- | ------------------------------- | ------------- |
| **L1**      | Lasso        | Absolutwerte          | Macht Gewichte **null**    | Spart Speicher, Feature-Auswahl | Eher instabil |
| **L2**      | Ridge        | Quadrate der Gewichte | Macht Gewichte **kleiner** | Glatteres robusteres Lernen     | Eher träger   |
| Kombination | Elastic Net  | Mischung aus beidem   |                            |                                 |               |



---
#### 🧪 **6. Dropout**

- In jedem Trainingsschritt: zufällige Neuronen auf 0(deaktiviert)
- Welche Neuronen deaktiviert werden ändert sich in jedem Schritt
- Damit alle Neuronen einmal drankommen und nicht einzelne zu viel trainiert
  werden und zu Superneuronen werden

- Ziel: **Overfitting verhindern**, Netzwerk lernt **redundante Merkmale**1
    

---

#### 👁 **7. Analyse trainierter CNNs**

- **CAM (Class Activation Mapping)**: zeigt, wo das Netz "hinschaut"
- **Guided Backpropagation**: zeigt, welche Eingabepixel am wichtigsten waren

| Begriff                         | Bedeutung                                                          |
| ------------------------------- | ------------------------------------------------------------------ |
| **Logits**                      | Rohwerte vor der Softmax                                           |
| **Feature Maps**                | Zwischenergebnisse nach Faltungen (in CNNs)                        |
| **Pooling (z. B. Max Pooling)** | Verkleinert Feature Maps, wählt z. B. größtes Element aus Regionen |
| **Padding / Stride**            | Steuerung, wie Filter über Bild laufen                             |

