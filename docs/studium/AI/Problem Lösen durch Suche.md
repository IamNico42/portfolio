---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
  - AI
tags:
  - Course/
---
## 🧠 **"Problemlösen durch Suchen" - Was steckt wirklich dahinter?**

### 1. 🔍 **Was ist ein Suchproblem überhaupt?**

Du hast ein Problem und suchst eine Lösung → Beispiel: Bauer will Ziege, Kohl und Wolf über den Fluss bringen, ohne dass sich jemand gegenseitig frisst.

Um das als **Suchproblem** zu lösen, braucht man:

|Begriff|Bedeutung|
|---|---|
|**Zustand**|Wie die Welt gerade aussieht (z. B. „Ziege ist links“).|
|**Startzustand**|Ausgangspunkt (z. B. alles ist auf der linken Seite).|
|**Zielzustand**|Wunschzustand (z. B. alles ist sicher rechts angekommen).|
|**Aktionen**|Was kann man tun? (z. B. „Bauer fährt mit Wolf nach rechts“).|
|**Übergänge**|Durch eine Aktion ändert sich der Zustand.|
|**Kosten**|Manche Wege kosten mehr (z. B. Sprit, Zeit…).|

➡️ Daraus entsteht ein **Zustandsraum**, also eine Art riesiges Entscheidungsdiagramm.

---

### 2. 🌳 **Wie wird das Problem gelöst?**

Durch **Suche im Zustandsraum** - du startest beim Ausgangspunkt und probierst Aktionen aus, um ans Ziel zu kommen.

Man unterscheidet zwei Arten von Suchen:

---

### 🔵 **Uninformierte Suche (blinde Suche)**

Du hast keinen Plan, was dich dem Ziel näher bringt.  
Beispiele:

| Verfahren                      | Beschreibung                                                    |
| ------------------------------ | --------------------------------------------------------------- |
| **Breitensuche**               | Geht systematisch Ebene für Ebene durch (wie Schlange stehen).  |
| **Tiefensuche**                | Geht so tief wie möglich - oft schnell, aber verirrt sich gern. |
| **Tiefenbeschränkte Suche**    | Wie Tiefensuche, aber mit Sicherheitsgrenze.                    |
| **Iterativ vertiefende Suche** | Kombi aus beiden: startet flach und geht schrittweise tiefer.   |
| **Uniforme Kostensuche**       | Wählt immer den günstigsten Weg (z. B. wenig Benzinverbrauch).  |

🧮 **Bewertungskriterien** für Suchalgorithmen:

- **Vollständig** - Findet der Algo eine Lösung, wenn es eine gibt?
- **Optimal** - Ist es die beste Lösung (z. B. der kürzeste Weg)?
- **Zeitkomplexität** - Wie lange dauert das Ganze?
- **Speicherbedarf** - Wie viel RAM/Platz wird gebraucht?
    

---

### 🟢 **Informierte Suche (mit Köpfchen!)**

Hier hat der Algorithmus eine **Heuristik** - eine Art „Riecher“ für gute Entscheidungen.
##### ✅ **Was ist eine Heuristik (einfach erklärt)?**
> Eine **Heuristik** ist eine **Hilfsmethode**,  
> die dir hilft, **schnell eine gute Entscheidung zu treffen**,  
> **ohne alles durchzuprobieren**.

Beispiele:

|Verfahren|Beschreibung|
|---|---|
|**Gierige Suche**|Immer zum Knoten, der dem Ziel am nächsten scheint (z. B. Luftlinie).|
|**A*-Suche**|Kombiniert den Weg, den man schon gemacht hat **g(n)** + den geschätzten Restweg **h(n)** → **f(n) = g(n) + h(n)**.|

> 📌 Wichtig:  
> Gute Heuristiken = kluge Tipps, welche Wege sich lohnen → spart mega viel Rechenzeit!

---

### 3. 🧹 **Beispiele aus dem Alltag**

- **Staubsaugerwelt**: Der Bot soll alles sauber machen → Suchproblem!
- **15-Puzzle**: Schiebe ein Feld leer und sortiere die Zahlen → Zustände!
- **Sudoku / Kartenfärbung**: Kann als sogenanntes „Constraint Satisfaction Problem“ formuliert werden.
- **Straßenkarte**: Finde den kürzesten Weg von A nach B.
    

---

### 🧩 **Fazit:**

„Problemlösen durch Suchen“ ist im Grunde ein cleveres Durchprobieren von Möglichkeiten - mit oder ohne Plan.

> Eine **uninformierte Suche** ist ein „dummer“ Algorithmus -  
> er **hat keine Ahnung**, wo das Ziel ist,  
> sondern folgt nur **stur seiner Suchstruktur** (z. B. Breitensuche, Tiefensuche).

> Ein Algorithmus, der **Heuristiken nutzen kann**,  
> ist **informiert** - er kann mit **Hilfsmethoden und Zusatzinfos** gefüttert werden,  
> um **klüger, gezielter und oft schneller** zum Ziel zu kommen.

|Ohne Plan 🕵️‍♂️|Mit Plan 🧠|
|---|---|
|Uninformierte Suche|Informierte Suche|
|Probieren alles durch|Probieren „schlaue“ Wege zuerst|
|Langsamer|Effizienter, wenn Heuristik gut ist|
### 🔍 **Vergleich von Suchalgorithmen in Bezug auf Heuristik**

|Algorithmus|Heuristik?|Speicherbedarf|Optimal?|Komplett?|Geschwindigkeit|Bemerkung|
|---|---|---|---|---|---|---|
|**BFS**|❌ Nein|Hoch|✅ Ja|✅ Ja|Langsam|Optimal bei gleicher Kosten pro Schritt|
|**DFS**|❌ Nein|Niedrig|❌ Nein|❌ Nein|Schnell (aber oft falsch)|Kann sich in Sackgassen verlaufen|
|**IDS**|❌ Nein|Niedrig|✅ Ja|✅ Ja|Langsam|Kombination aus DFS & BFS - platzsparend|
|**Uniform Cost Search**|❌ Nein|Hoch|✅ Ja|✅ Ja|Mittel|Wie A* ohne Heuristik|
|**A***|✅ Ja|Hoch|✅ Ja|✅ Ja|Schnell (mit guter Heuristik)|Goldstandard für viele KI-Probleme|
|**Greedy Best-First**|✅ Ja|Mittel|❌ Nein|❌ Nein|Sehr schnell|Oft nicht optimal - gierig eben 😅|
|**IDA***|✅ Ja|Niedrig|✅ Ja|✅ Ja|Etwas langsamer als A*|A* für wenig Speicher (z. B. eingebettete Systeme)|
|**Weighted A***|✅ Ja|Hoch|❌ Nicht garantiert|✅ Ja|Sehr schnell|Opfer zugunsten der Geschwindigkeit|


---
### 🧠 Merkhilfe:

|Suche-Typ|Nutzt `h(n)`?|Beispiel|
|---|---|---|
|**Informiert**|✅ Ja|A*, Greedy, IDA*|
|**Uninformiert**|❌ Nein|BFS, DFS, IDS|
