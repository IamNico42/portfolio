---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
  - AI
tags:
  - Course/AI
---
## 1. Suchprobleme
Bei einem Suchproblem soll eine Folge von Aktionen gefunden werden, die von einem Startzustand zu einem Zielzustand führt.

Ein Beispiel ist das Problem, bei dem ein Bauer einen Wolf, eine Ziege und einen Kohlkopf sicher über einen Fluss bringen muss.

Ein Suchproblem besteht aus:

| Begriff | Bedeutung |
|---|---|
| **Zustand** | aktuelle Situation des Problems |
| **Startzustand** | Ausgangspunkt der Suche |
| **Aktionen** | mögliche Handlungen in einem Zustand |
| **Übergangsmodell** | beschreibt, welcher Zustand durch eine Aktion entsteht |
| **Zieltest** | prüft, ob ein Zielzustand erreicht wurde |
| **Pfadkosten** | Gesamtkosten der ausgeführten Aktionen |

Alle erreichbaren Zustände bilden den **Zustandsraum**. Eine Lösung ist eine Folge von Aktionen vom Startzustand zu einem Zielzustand.

Eine optimale Lösung besitzt unter allen Lösungen die geringsten Pfadkosten.
## 2. Suche im Zustandsraum
Ein Suchalgorithmus beginnt beim Startzustand und erzeugt durch mögliche Aktionen weitere Zustände.
Dabei entsteht ein Suchbaum:

- **Wurzel:** Startzustand
- **Knoten:** untersuchte Zustände
- **Kanten:** ausgeführte Aktionen
- **Blätter:** noch nicht weiter untersuchte Zustände

Da derselbe Zustand über unterschiedliche Wege erreichbar sein kann, sollte bei einer Graphsuche gespeichert werden, welche Zustände bereits untersucht wurden.

Suchverfahren werden in **uninformierte** und **informierte Suche** unterteilt.
## 3. Uninformierte Suche
Uninformierte Suchverfahren besitzen keine Schätzung darüber, welcher Zustand dem Ziel besonders nahe ist. Sie verwenden nur die Definition des Suchproblems.

### Breitensuche
Die **Breitensuche (BFS)** untersucht alle Knoten einer Ebene, bevor die nächste Ebene durchsucht wird.
Eigenschaften:

- vollständig bei endlichem Verzweigungsfaktor
- optimal bei gleichen Schrittkosten
- hoher Speicherbedarf

### Tiefensuche
Die **Tiefensuche (DFS)** verfolgt einen Pfad möglichst weit, bevor sie zurückkehrt und einen anderen Pfad untersucht.
Eigenschaften:

- geringer Speicherbedarf
- nicht grundsätzlich vollständig
- nicht optimal
- kann sich in unendlichen Pfaden oder Zyklen verlieren

### Tiefenbeschränkte Suche
Die **tiefenbeschränkte Suche** funktioniert wie die Tiefensuche, beendet einen Pfad aber bei einer festgelegten Tiefe.

Dadurch werden unendlich tiefe Pfade verhindert. Liegt die Lösung unterhalb der Grenze, wird sie jedoch nicht gefunden.

### Iterativ vertiefende Suche
Die **iterativ vertiefende Suche (IDS)** führt mehrfach eine tiefenbeschränkte Suche durch. Die maximale Tiefe wird dabei schrittweise erhöht.
Sie verbindet:

- den geringen Speicherbedarf der Tiefensuche
- die Vollständigkeit der Breitensuche
- die Optimalität bei gleichen Schrittkosten

### Uniform-Cost Search
Die **Uniform-Cost Search (UCS)** untersucht immer den bisher günstigsten Pfad.
Die Auswahl erfolgt nach den bisherigen Pfadkosten:

$$
f(n)=g(n)
$$

Dabei sind $g(n)$ die Kosten vom Startzustand bis zum Knoten $n$.

UCS ist vollständig und optimal, wenn die Schrittkosten positiv und nach unten begrenzt sind.

## 4. Informierte Suche
Informierte Suchverfahren verwenden zusätzlich eine **Heuristik**.

Eine Heuristik $h(n)$ schätzt die verbleibenden Kosten von einem Knoten $n$ bis zum Ziel:

$$
h(n) \approx \text{Kosten von } n \text{ bis zum Ziel}
$$

Eine gute Heuristik kann die Anzahl der untersuchten Zustände deutlich reduzieren. Sie verändert jedoch nicht den eigentlichen Zustandsraum.

### Greedy Best-First Search
Die gierige Suche wählt den Knoten aus, der laut Heuristik dem Ziel am nächsten liegt:

$$
f(n)=h(n)
$$

Die bisherigen Pfadkosten werden nicht berücksichtigt.
Eigenschaften:

- kann schnell eine Lösung finden
- ist nicht grundsätzlich vollständig
- ist nicht optimal

### A*-Suche
Die A*-Suche kombiniert die bisherigen Pfadkosten mit den geschätzten Restkosten:

$$
f(n)=g(n)+h(n)
$$

Dabei gilt:

- $g(n)$: tatsächliche Kosten vom Start bis zum Knoten
- $h(n)$: geschätzte Kosten vom Knoten bis zum Ziel
- $f(n)$: geschätzte Gesamtkosten des Lösungswegs

A* ist optimal, wenn die Heuristik die tatsächlichen Restkosten nicht überschätzt. Eine solche Heuristik heißt **zulässig**:

$$
h(n) \leq h^*(n)
$$

Dabei bezeichnet $h^*(n)$ die tatsächlichen minimalen Restkosten.
Bei einer Graphsuche sollte die Heuristik zusätzlich konsistent sein.

### Weitere Verfahren
- **IDA\*:** verbindet A* mit iterativer Vertiefung und benötigt weniger Speicher
- **Weighted A\*:** gewichtet die Heuristik stärker und bevorzugt dadurch eine schnellere Suche

Für Weighted A* gilt:

$$
f(n)=g(n)+w\cdot h(n)
$$

Für $w>1$ wird die Suche häufig schneller, die optimale Lösung ist aber nicht mehr garantiert.
## 5. Bewertung von Suchalgorithmen
Suchalgorithmen werden anhand folgender Kriterien verglichen:

- **Vollständigkeit:** Wird eine Lösung gefunden, wenn eine existiert?
- **Optimalität:** Wird die Lösung mit den geringsten Kosten gefunden?
- **Zeitaufwand:** Wie viele Knoten werden untersucht?
- **Speicherbedarf:** Wie viele Knoten müssen gespeichert werden?

| Verfahren | Heuristik | Vollständig | Optimal | Speicherbedarf |
|---|---:|---|---|---|
| **BFS** | nein | ja | bei gleichen Schrittkosten | hoch |
| **DFS** | nein | nicht generell | nein | niedrig |
| **Tiefenbeschränkte Suche** | nein | nur bei ausreichender Grenze | nein | niedrig |
| **IDS** | nein | ja | bei gleichen Schrittkosten | niedrig |
| **UCS** | nein | ja | ja | hoch |
| **Greedy Best-First** | ja | nicht generell | nein | häufig hoch |
| **A\*** | ja | unter geeigneten Bedingungen | mit zulässiger Heuristik | hoch |
| **IDA\*** | ja | unter geeigneten Bedingungen | mit zulässiger Heuristik | niedrig |
| **Weighted A\*** | ja | unter geeigneten Bedingungen | nicht garantiert | hoch |

Die Aussagen gelten unter üblichen Voraussetzungen wie einem endlichen Verzweigungsfaktor und positiven Schrittkosten.
## 6. Beispiele
Typische Suchprobleme sind:

- **Flussüberquerung:** sichere Reihenfolge der Transporte bestimmen
- **Staubsaugerwelt:** alle verschmutzten Felder reinigen
- **15-Puzzle:** Zahlen durch Verschieben in die richtige Reihenfolge bringen
- **Navigation:** günstigsten Weg zwischen zwei Orten finden
- **Spielplanung:** mögliche Spielzüge untersuchen

Sudoku und Kartenfärbung können ebenfalls als Suchprobleme betrachtet werden. Häufig werden sie jedoch als **Constraint Satisfaction Problems (CSP)** modelliert, da dabei Variablen, Wertebereiche und Bedingungen im Mittelpunkt stehen.
## Zusammenfassung

| Suchart | Verwendete Informationen | Beispiele |
|---|---|---|
| **Uninformierte Suche** | nur Zustände, Aktionen, Zieltest und Kosten | BFS, DFS, IDS, UCS |
| **Informierte Suche** | zusätzliche Schätzung $h(n)$ | Greedy, A*, IDA* |

Uninformierte Verfahren folgen ihrer festgelegten Suchstrategie, ohne die Entfernung zum Ziel zu schätzen. Informierte Verfahren verwenden eine Heuristik, um vielversprechende Zustände früher zu untersuchen.