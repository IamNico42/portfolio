## Lineare Regression

### Ziel

Die **lineare Regression** modelliert den Zusammenhang zwischen Eingabewerten und einer numerischen Ausgabe.

Bei einem einzelnen Eingabemerkmal lautet das Modell:

$$
\hat{y} = wx + b
$$

Dabei gilt:

- $x$: Eingabewert
- $\hat{y}$: vorhergesagter Wert
- $w$: Gewicht beziehungsweise Steigung
- $b$: Bias beziehungsweise Achsenabschnitt

Bei mehreren Eingabemerkmalen wird die Matrixschreibweise verwendet:

$$
\hat{\mathbf y} = X\mathbf w + b
$$

Dabei enthält $X$ die Trainingsbeispiele und $\mathbf w$ die zugehörigen Gewichte.

### Mean Squared Error

Der **Mean Squared Error (MSE)** misst den durchschnittlichen quadratischen Abstand zwischen den vorhergesagten und den tatsächlichen Werten:

$$
\operatorname{MSE}
=
\frac{1}{m}
\sum_{i=1}^{m}
(\hat{y}_i-y_i)^2
$$

Ein kleiner MSE bedeutet, dass die Vorhersagen nahe an den tatsächlichen Werten liegen. Durch das Quadrieren werden große Abweichungen besonders stark gewichtet.

### Optimierung durch Gradientenabstieg

Ziel des Trainings ist es, die Werte von $w$ und $b$ so anzupassen, dass der MSE möglichst klein wird.

Der Gradient gibt an, in welche Richtung sich der Fehler am stärksten verändert. Die Parameter werden entgegen dieser Richtung aktualisiert:

$$
w
\leftarrow
w-\alpha\frac{\partial J}{\partial w}
$$

$$
b
\leftarrow
b-\alpha\frac{\partial J}{\partial b}
$$

Dabei gilt:

- $J$: Loss-Funktion, hier der MSE
- $\alpha$: Learning Rate
- $\frac{\partial J}{\partial w}$: Gradient für das Gewicht
- $\frac{\partial J}{\partial b}$: Gradient für den Bias

Für die lineare Regression ergeben sich die Gradienten:

$$
\frac{\partial J}{\partial w}
=
\frac{2}{m}
\sum_{i=1}^{m}
(\hat{y}_i-y_i)x_i
$$

$$
\frac{\partial J}{\partial b}
=
\frac{2}{m}
\sum_{i=1}^{m}
(\hat{y}_i-y_i)
$$

Der Trainingsablauf besteht damit aus:

1. Vorhersagen berechnen
2. MSE bestimmen
3. Gradienten berechnen
4. Gewicht und Bias aktualisieren
5. Vorgang wiederholen

### Python-Implementierung

```python
import numpy as np
import matplotlib.pyplot as plt

# Trainingsdaten
X = np.array([1, 2, 3, 4, 5], dtype=float)
y = np.array([2, 4, 6, 8, 10], dtype=float)

# Parameter
w = 0.0
b = 0.0
learning_rate = 0.01
epochs = 1000
m = len(X)

# Gradientenabstieg
for _ in range(epochs):
    y_pred = w * X + b
    error = y_pred - y

    dw = (2 / m) * np.sum(error * X)
    db = (2 / m) * np.sum(error)

    w -= learning_rate * dw
    b -= learning_rate * db

print(f"Trainiertes Modell: y = {w:.3f}x + {b:.3f}")

# Ergebnis darstellen
plt.scatter(X, y, label="Trainingsdaten")
plt.plot(X, w * X + b, color="red", label="Regressionslinie")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.show()
```

Das trainierte Modell nähert sich der zugrunde liegenden Funktion an:

$$
y = 2x
$$

![[1_iB5TFe77kfkWIxzcLT92Wg.gif]]

### Learning Rate

Die **Learning Rate** bestimmt, wie stark die Parameter bei jedem Trainingsschritt verändert werden.

- **Zu groß:** Das Minimum kann übersprungen werden und das Training instabil werden.
- **Zu klein:** Das Training verläuft stabil, benötigt aber viele Schritte.
- **Passend gewählt:** Der Fehler sinkt schnell und gleichmäßig.

Eine mögliche Erweiterung ist eine dynamische Learning Rate, die während des Trainings reduziert wird:

```python
learning_rate = 0.1

for epoch in range(100):
    y_pred = w * X + b
    error = y_pred - y

    dw = (2 / m) * np.sum(error * X)
    db = (2 / m) * np.sum(error)

    w -= learning_rate * dw
    b -= learning_rate * db

    if (epoch + 1) % 20 == 0:
        learning_rate *= 0.5
```

Zu Beginn ermöglichen größere Schritte ein schnelleres Lernen. Später sorgen kleinere Schritte für eine genauere Annäherung an das Minimum.