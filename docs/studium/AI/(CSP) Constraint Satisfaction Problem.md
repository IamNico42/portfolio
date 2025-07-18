---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
  - AI
tags:
  - Course/
---
## 🔍 **Was ist ein CSP (Constraint Satisfaction Problem)?**


Bei einem **Constraint Satisfaction Problem (CSP)** geht es **nur um eines**:

> ✅ **Finde eine Zuweisung von Werten zu allen Variablen**, sodass **alle Constraints (Rahmenbedingungen)** erfüllt sind.

Es gibt **keinen Gegner**, **keine Bewertung**, **kein Gewinnen oder Verlieren** - nur:

- **Gültig oder nicht gültig**
- **Lösbar oder unlösbar**
- **Eine Lösung oder keine Lösung** (manchmal auch mehrere)

Ein **CSP** ist eine **Formalisierung eines Problems**, das durch drei Dinge beschrieben wird:

1. **Variablen**  
    - Was wir bestimmen wollen.  
    → z. B. welches Land welche Farbe bekommt.
    
2. **Wertebereiche (Domains)**  
    - Welche Werte jede Variable annehmen darf.  
    → z. B. {Rot, Grün, Blau} für Farben.
    
3. **Constraints (Bedingungen)**  
    - Welche Kombinationen **erlaubt** oder **verboten** sind.  
    → z. B. benachbarte Länder dürfen **nicht** dieselbe Farbe haben.
    

Ein **CSP ist gelöst**, wenn:

- jede Variable **einen Wert** zugewiesen bekommt,
- **alle Constraints erfüllt** sind.
    

👉 Also: **Ein CSP ist eine Klasse von Problemen**, und **die vorgestellten Algorithmen** wie Backtracking, AC-3 oder Min-Conflicts sind **Strategien zur Lösung** dieser Art von Problemen.


## 📚 **Beispiele - im Detail erklärt**

### 1. **Landkartenfärbung:**
- Variablen: WA, NT, SA, ...
- Werte: {R, G, B}
- Constraint: keine benachbarten Regionen dürfen die gleiche Farbe haben
    
### 2. **N-Damen-Problem:**
- Ziel: 8 Damen so auf ein Schachbrett setzen, dass sie sich nicht schlagen
- Constraint: keine zwei Damen in gleicher Zeile, Spalte oder Diagonale
    
### 3. **Sudoku:**
- Variablen: Zellen des Rasters
- Werte: 1-9
- Constraints: Jede Zahl darf nur **einmal pro Zeile, Spalte und Block** vorkommen
    
### 4. **Krypto-Rätsel (z. B. SEND + MORE = MONEY):**
- Buchstaben sind Ziffern
- Jede Ziffer darf nur **einmal** vorkommen (Alldiff)
- Rechenregeln gelten als Constraints
    
### 5. **Stundenplanung (Timetabling):**
- Lehrer, Räume, Fächer - alles muss zusammenpassen
- Viele Regeln (z. B. keine Doppelbelegung)


---
## 🧩 1. **Backtracking (klassische Suche)**

### 🌱 Grundidee:

Man beginnt mit einer **leeren Zuweisung** und füllt sie **schrittweise** auf:

- Wähle eine Variable
- Probiere einen Wert aus
- Prüfe, ob das zu bisherigen Zuweisungen passt (also keine Constraint-Verletzung)
- Wenn ja → weiter
- Wenn nein oder später keine Möglichkeit mehr → **zurückspringen** (= backtrack)
    

### 🧠 Tiefensuche:

Backtracking ist eigentlich eine **Tiefensuche** im Suchbaum:

- Jeder Pfad ist ein möglicher Lösungsversuch
- Jeder Knoten = Zuweisung einer Variable

### 🔍 Heuristiken im Backtracking:

1. **Most Constrained Variable First**: Variable mit wenigsten erlaubten Werten zuerst wählen
2. **Most Constraining Variable**: Variable, die die meisten anderen beeinflusst
3. **Least Constraining Value**: Farbe wählen, die den Nachbarn am meisten Optionen lässt

---
## 🔐 2. **Forward Checking - Frühzeitige Prüfung**

### 🔍 Was passiert hier?

Immer wenn **eine Variable einen Wert bekommt**, prüfe alle **benachbarten Variablen**:

- Welche Werte sind dort **jetzt noch erlaubt**, angesichts der neuen Zuweisung?
- **Streiche** verbotene Werte (die gegen Constraints verstoßen würden)
    

### 🛑 Wenn bei einer Variable **kein Wert mehr möglich ist**:

→ Sofort zurückspringen (backtrack) - kein Grund weiter zu suchen.

### 📌 Vorteil:

- Erkennt **Dead Ends** sehr früh
- Spart **unnötige Arbeit** tiefer im Suchbaum
    

### 🧠 Beispiel:

- WA = Rot
- NT kann nur noch Grün oder Blau
- SA hatte vorher {R, G, B} → nach Ausschluss: nur noch B
- Wenn das dann auch unmöglich ist → sofort zurück!

---

## 🔄 **AC-3 (Arc Consistency 3)**

### 🎯 **Ziel:**

**Einschränkung der Domains**, indem **unbrauchbare Werte entfernt werden**, bevor überhaupt nach einer Lösung gesucht wird.

### 🧩 Warum ist das sinnvoll?

Weil:

- Wir können uns so später **unnötige Suchpfade im Baum sparen**
- Wir erkennen **Widersprüche**, **ohne überhaupt zu raten oder zu suchen**
- Es ist wie ein "automatisches Vorfiltern" aller schlechten Möglichkeiten

### ⚙️ **Vorgehen:**

1. Starte mit **allen Kanten (Constraints)** im CSP (z. B. (X,Y))
2. Für jede Kante `(X,Y)` prüfe:  
    Gibt es für **jeden Wert x ∈ Domain(X)** einen Wert y ∈ Domain(Y), sodass der Constraint erfüllt ist?
3. Wenn **nicht**, streiche `x` aus Domain(X)
4. Wenn sich Domain(X) ändert → prüfe alle Nachbarn von X erneut
5. Wiederholen, bis keine Änderung mehr
    

### 🧠 **Ergebnis:**

- Jede Domain enthält **nur noch Werte**, die **prinzipiell** in einer Lösung vorkommen können
    
- Erkennt **Widersprüche frühzeitig** (z. B. leere Domain)

### 🆚 **Vergleich zu anderen Algorithmen**

| Kriterium                       | **Backtracking**                           | **Forward Checking**                              | **AC-3 (Constraint Propagation)**                             |
| ------------------------------- | ------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------- |
| **Wann prüft?**                 | Nur beim Zuweisen einer Variable           | Nach jeder Zuweisung: prüfe benachbarte Variablen | Schon **vor der Suche** - prüft systematisch alle Constraints |
| **Was prüft?**                  | Nur aktuelle Zuweisung                     | Entfernt unpassende Werte bei direkten Nachbarn   | Entfernt **alle inkonsistenten Werte in allen Domains**       |
| **Ziel**                        | Lösung durch systematische Suche           | Frühzeitige Erkennung von lokalen Dead-Ends       | Globaler Domain-Check auf Konsistenz (Filterung)              |
| **Vorteil**                     | Einfach, aber spät dran                    | Schnelleres Zurückspringen bei Problemen          | **Kein Raten nötig**, erkennt Widersprüche **ohne Suche**     |
| **Nachteil**                    | Erkannt Widersprüche spät                  | Noch keine vollständige Propagation               | Kann teuer sein (bei vielen Variablen/Constraints)            |
| **Typ**                         | **Suchalgorithmus**                        | **Suche mit lokaler Vorwärtsprüfung**             | **Preprocessing / Filter-Algorithmus** vor der Suche          |
| Betrachtet Constraints zwischen | **Aktuelle Variable vs. bisherige**        | **Aktuelle Variable vs. direkte Nachbarn**        | **Jedes (X,Y)-Paar im gesamten Graph**                        |
| Wie weit denkt er voraus?       | Gar nicht voraus - reagiert nur auf Fehler | Prüft Nachbar-Domains auf direkte Widersprüche    | **Filtert Domains global** durch Wiederholungen               |



---

## **Problemstruktur nutzen** 

### Was bedeutet **Problemstruktur ausnutzen**?
> Es heißt: **Bevor** du irgendeinen Algorithmus blind loslaufen lässt (z. B. Backtracking),  
> schaust du dir **die Form des Problems an** - also seine **Graphstruktur** -  
> um zu erkennen, ob du es **einfacher oder effizienter** lösen kannst.


### 🔄 Vergleich mit dem Alltag:
Stell dir vor, du willst ein Puzzle lösen:

- Du könntest **einfach drauflos puzzeln** (Backtracking)
- Oder du **schaust zuerst**, ob:
    - Du die Ecken findest → (Strukturanalyse)
    - Es zwei getrennte Puzzle-Sektionen gibt → (Komponenten)
    - Ein Bereich besonders kompliziert aussieht → (Cutset)

➡️ Danach entscheidest du, **wie du vorgehst**
### Zusammenhangskomponenten:
- Wenn das CSP aus **unabhängigen Teilen** besteht → bearbeite sie getrennt
### Baumstruktur:
- Wenn der Constraint-Graph **zyklusfrei** ist, kann man sehr schnell lösen
### Schnittmengenkonditionierung:
- Entferne eine Variable, um einen Baum zu erhalten
- Löse das vereinfachte Problem zuerst


---

## 🧠 **Lokale Suche mit Min-Conflicts - Zusammenfassung**

### 🔎 **Ziel:**

Finde eine gültige Lösung für ein CSP, indem du **schrittweise Konflikte reduzierst**,  
statt den gesamten Suchbaum zu durchsuchen.

### 🔄 **Ablauf des Algorithmus:**

1. **Starte mit einer vollständigen, zufälligen Zuweisung** (auch mit Fehlern)
2. **Solange Konflikte bestehen:**
    - Wähle eine **Variable, die gerade Konflikte verursacht**
    - **Ändere ihren Wert** so, dass **die Konflikte minimiert** werden
    - Wiederhole den Vorgang
        
3. **Abbruch:**
    
    - ✅ Wenn **kein Konflikt mehr da ist** → Lösung gefunden
    - ❌ Oder nach vielen Versuchen → vermutlich Sackgasse
        


### 🧩 **Was bedeutet „lokal“?**

- Es wird **immer nur eine Variable auf einmal geändert**
- Es wird **nur im direkten „Nachbarschaftsbereich“** des aktuellen Zustands geschaut
- Keine globale Sicht, keine Rückverfolgung
    

---

### 🎯 **Stärken:**

- **Sehr effizient** bei großen CSPs (z. B. N-Damen mit Millionen Feldern)
- **Einfach zu implementieren**
- **Schnell** - oft in wenigen Schritten zur Lösung
    

---

### ⚠️ **Schwächen:**

- Kann in **lokalen Minima** hängen bleiben  
    → Wenn keine Änderung mehr Konflikte reduziert
- **Abhängig vom Startzustand**
- **Heuristik-basiert** → schlechte Heuristik = schlechte Ergebnisse
- **Keine Garantie**, eine Lösung zu finden

---

### 🛠 **Typische Gegenmaßnahmen:**

|Technik|Beschreibung|
|---|---|
|**Random Restart**|Nach festgefahrenem Zustand: komplett neu starten|
|**Zufallsbewegung**|Manchmal bewusst eine „schlechtere“ Wahl treffen|
|**Mehrfachdurchläufe**|Algorithmus mehrfach starten, beste Lösung behalten|
|**Hybridverfahren**|Lokale Suche mit anderen Techniken kombinieren|

---

### 🧠 **Kernaussage:**

> Lokale Suche mit Min-Conflicts ist wie ein „Greedy“-Wanderer:  
> Er startet irgendwo, schaut nur um sich herum, geht dort hin, wo es **lokal besser** aussieht -  
> aber **ohne Karte**, ohne Rückblick, und nur mit Hoffnung, dass es der richtige Weg ist.
> Also bei schlechter Bewertung des aktuellen Zustands und der Folgezustände(Heuristik) kann man sich schneller in lokalen Minima hängenbleiben


---

## ✅ Fazit: Wann nutzt man was?

| Strategie            | Gut für                        | Vorteil                            |
| -------------------- | ------------------------------ | ---------------------------------- |
| **Backtracking**     | Kleine/mittlere Probleme       | Einfach, systematisch              |
| **Forward Checking** | Mittlere Probleme              | Frühzeitiges Erkennen              |
| **AC-3**             | Vorverarbeitung, große Domains | Reduziert Suchraum                 |
| **Min-Conflicts**    | Sehr große Probleme            | Extrem schnell, aber unvollständig |
| **Graph-Tricks**     | Strukturierte CSPs             | Nutzt Problemform clever aus       |
