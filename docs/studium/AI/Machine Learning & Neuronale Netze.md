## **1.2 Lineare Regression**

### 🎯 **Ziel:**

Ein Modell, das eine lineare Beziehung zwischen einer Eingabe XXX und einer Ausgabe yyy findet.

### 📝 **Mathematisches Modell:**

$$y=wX+b$$

- X ist die Eingabematrix mit m Beispielen und n Features.
- w ist der Vektor der Gewichte.
- b ist der Bias-Wert.

### 🔢 **Fehlermetrik: Mean Squared Error (MSE)**

- MSE sagt aus für das Modell was **gut** oder **schlecht** ist.
$$
MSE=n1​∑(y^​i​−yi​)2
$$

### 🔽 **Gradientenabstieg zur Optimierung**

- Berechnen Gradient des Fehlers damit wir wissen in welche Richtung wir uns bewegen müssen.
- Wir ändern `w` und `b` ein kleines Stück -> Modell wird besser

$$w := w - \alpha \frac{\partial J}{\partial w}$$
$$b := b - \alpha \frac{\partial J}{\partial b}$$

### 🖥️ **Python-Implementierung**

```python
import numpy as np

  

# Daten generieren
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Parameter initialisieren
w = 0.000
b = 0.000
alpha = 0.0025  # Lernrate
epochs = 1000

# Listen zum Speichern von Änderungen
w_history = []
b_history = []

# Gradientenabstieg
for _ in range(epochs):
    y_pred = w * X.flatten() + b  # X muss flach sein
    dw = (-2 / len(X)) * np.sum(X.flatten() * (y - y_pred))  # Skalar
    db = (-2 / len(X)) * np.sum(y - y_pred)  # Skalar
    w -= alpha * dw
    b -= alpha * db
    w_history.append(w)
    b_history.append(b)

print(f"Trainiertes Modell: y = {w}x + {b}")

import matplotlib.pyplot as plt

plt.scatter(X, y, label="Daten")
plt.plot(X, w*X + b, color='red', label="Regressionslinie")
plt.legend()
plt.show()
```

![[1_iB5TFe77kfkWIxzcLT92Wg.gif]]

### 🔁 Das Ganze nochmal ganz bildlich:

Stell dir vor, dein Modell steht auf einem **Berg aus Fehlern**.

- Oben: Schlechter Fehler (groß)
- Unten: Kleiner Fehler (gut)

👉 Der **MSE sagt dir**, wie hoch du gerade bist.  
👉 Der **Gradient sagt dir**, in welche Richtung du runterlaufen musst.  
👉 Der **Gradientenabstieg ist das Laufen**.


### 🧠 Wie die beiden zusammenspielen:

1. Du machst eine Vorhersage mit deinem aktuellen Modell.
2. Du berechnest den MSE → **Wie schlecht ist das?**
3. Du berechnest den Gradienten des Fehlers → **In welche Richtung müssen wir `w` und `b` ändern?**
4. Du änderst `w` und `b` ein kleines Stück → Modell wird besser.
5. Wiederhole das viele Male → und du bekommst ein Modell, das sehr gute Vorhersagen macht!

### 🔁 Beispielcode: Gradient und Lernrate


```Python
a_ = -0,5
a_history = -0.5
eta = 0.0003
for i in range(0,5):
  grad_a = -2/len(y)*np.sum((y -a_ * x - b) *x)
  a_ = a_ - eta*grad_a
  a_history =np.append(a_history,a_)
print(a_history)
```

Zeigt den Verlauf wie sich unser Modell verbessert.

`[-0.5 1.80415034 0.80054605 1.23767972 1.04728007 1.13021135]`

- a_ := Startwert
- eta := Ist die Lernrate(In wie große Abständen gesprungen wird)
		- (Hohe Lernrate = Schneller, aber ungenauer)
		- (Kleine Lernrate = Langsamer, aber ziemlich genau)

**Probem: Finde eine gute Lernrate**
	- Idee: Adaptive Learning Rate(Passe die Lernrate an zB nach 5 Durchläufen oder andere Bedingungen)
zB:
#### 🚀 Dynamische Lernrate (Heuristik)

Idee:
- **Anfangs**: Große Lernrate → schnelleres Lernen
- **Später**: Kleinere Lernrate → feinere Anpassung

#### Beispiel: Alle 20 Elemente eta halbieren
```Python
eta = 0.1
for i in range(100):
    grad_a = ... # wie üblich
    a_ = a_ - eta * grad_a

    if i % 20 == 0:
        eta = eta * 0.5  # Lernrate halbieren

```
➡️ So verhinderst du Überschwinger und machst das Modell präziser

#### Beispiel: Wenn sich der Gradient kaum noch ändert → Lernrate verringern
```Python
# Wenn sich der Gradient kaum noch ändert → Lernrate verringern
if abs(grad_a) < 0.01:
    eta = eta * 0.5
```
➡️ Das wäre eine einfache **Heuristik**:  
**„Wenn kaum noch Verbesserung → langsamer werden“**



### 9. 🎲 **Dropout**

#### Wofür braucht man das?
- Gegen **Overfitting**
- Lässt Netzwerk **robuster** und **generalisierender** lernen
    
#### 🛠️ Wie setzt man es ein?

- Während Training: zufällig z. B. 50 % der Neuronen deaktivieren
- Während Test: **volle Kapazität aktivieren**