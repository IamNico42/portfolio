---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
  - AI
tags:
  - Course/AI
---
Die **adversariale Suche** wird bei Spielen verwendet, in denen zwei Spieler gegensätzliche Ziele verfolgen. Minimax eignet sich insbesondere für deterministische Zwei-Personen-Nullsummenspiele mit vollständiger Information.

### 1. Spielbaum und Rollen
Ein Spiel wird als Baum dargestellt:

- **Knoten:** aktuelle Spielsituationen
- **Kanten:** mögliche Züge
- **Blätter:** Spielende oder erreichte Suchtiefe

Die Spieler übernehmen abwechselnd zwei Rollen:

- **Max:** versucht die Bewertung zu maximieren
- **Min:** versucht die Bewertung zu minimieren

Ist ein Spielzustand terminal oder die maximale Suchtiefe erreicht, liefert die Bewertungsfunktion $E(s)$ einen Zahlenwert. Die Bewertung erfolgt aus der Sicht von Max:

- hoher Wert: gut für Max
- niedriger Wert: gut für Min
- neutraler Wert: ausgeglichene Stellung
### 2. Minimax-Verfahren
Minimax durchsucht den Spielbaum rekursiv:

1. Max untersucht alle möglichen eigenen Züge.
2. Min wählt anschließend den für Max ungünstigsten Gegenzug.
3. Max wählt den Zug mit dem besten Ergebnis unter diesen Bedingungen.

Dabei gilt:

- **Max-Knoten:** übernimmt den größten Kindwert
- **Min-Knoten:** übernimmt den kleinsten Kindwert

![[MiniMax.PNG]]

#### Pseudocode

```text
function minimax(s, d, player):
    if d = 0 or s is terminal:
        return E(s)

    if player = Max:
        best = -∞

        for each move z in s:
            value = minimax(s after z, d - 1, Min)
            best = max(best, value)

        return best

    else:
        best = +∞

        for each move z in s:
            value = minimax(s after z, d - 1, Max)
            best = min(best, value)

        return best
```

#### Komplexität

Mit dem Verzweigungsfaktor $b$ und der Suchtiefe $d$ gilt:

- **Zeitkomplexität:** $O(b^d)$
- **Rekursionstiefe:** $O(d)$

| Begriff | Bedeutung |
|---|---|
| $s$ | aktueller Spielzustand |
| $d$ | verbleibende Suchtiefe |
| $E(s)$ | Bewertung des Zustands |
| Max | wählt den größten Kindwert |
| Min | wählt den kleinsten Kindwert |

### 3. Alpha-Beta-Pruning
**Alpha-Beta-Pruning** verbessert Minimax, indem Teilbäume übersprungen werden, die das Endergebnis nicht mehr beeinflussen können.

Das Verfahren liefert dieselbe Entscheidung wie vollständiges Minimax, untersucht aber häufig deutlich weniger Knoten.

Dabei werden zwei Schranken verwendet:

- **Alpha $\alpha$:** beste bisher bekannte Bewertung für Max
- **Beta $\beta$:** beste bisher bekannte Bewertung für Min

Sobald gilt:

$$
\beta \leq \alpha
$$

kann die weitere Untersuchung des Teilbaums abgebrochen werden.

![[MiniMaxAlphaBeta.PNG]]

#### Pseudocode

```text
function alphabeta(s, d, alpha, beta, player):
    if d = 0 or s is terminal:
        return E(s)

    if player = Max:
        value = -∞

        for each move z in s:
            value = max(
                value,
                alphabeta(s after z, d - 1, alpha, beta, Min)
            )

            alpha = max(alpha, value)

            if beta <= alpha:
                break

        return value

    else:
        value = +∞

        for each move z in s:
            value = min(
                value,
                alphabeta(s after z, d - 1, alpha, beta, Max)
            )

            beta = min(beta, value)

            if beta <= alpha:
                break

        return value
```

#### Komplexität

Die Laufzeit hängt von der Reihenfolge der untersuchten Züge ab:

- **schlechtester Fall:** $O(b^d)$
- **bester Fall:** $O(b^{d/2})$

Im besten Fall kann dadurch bei vergleichbarem Aufwand ungefähr die doppelte Suchtiefe erreicht werden.

### 4. Heuristische Zugreihenfolge
Alpha-Beta-Pruning arbeitet besonders effektiv, wenn vielversprechende Züge zuerst untersucht werden. Dadurch werden Alpha und Beta früher verbessert und mehr Teilbäume können abgeschnitten werden.

Mögliche Verfahren sind:

- **Fangzüge:** Züge, bei denen gegnerische Spielsteine erobert werden
- **Bonuszüge:** Züge, die beispielsweise in der eigenen Kalah enden und einen weiteren Zug ermöglichen
- **Killer Moves:** Züge, die an anderen Stellen derselben Suchtiefe bereits zu einem Abbruch geführt haben
- **Schnelle Vorbewertung:** grobe Bewertung aller Züge vor der eigentlichen Suche

Eine gute Zugreihenfolge verändert das Ergebnis nicht, kann die benötigte Rechenzeit aber deutlich reduzieren.