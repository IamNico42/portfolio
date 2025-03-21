---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---
### Codebreaker: Cyberkrieg – Erweiterte Version 3.1

#### Grundkonzept (Kurzfassung)

- **Ziel**: Hacke das Globale Kontrollsystem (GKS) oder sammle die meisten Punkte in 20 Runden (angepasst von 15 auf 20 für mehr Spielraum).
- **Start**: Jeder Spieler beginnt mit einer zufälligen **Operationsbasis** auf einem Kontinent (50 CPU, 20 RAM, 10 Codezeilen, Level 1, Cybersecurity 20 %).
- **Spielprinzip**: Reise zu Serverstandorten, greife neutrale KI-Server (große und Nebenserver) oder gegnerische Server an, verbessere Cybersecurity, sammle XP und Ressourcen.
- **Änderungen**:
    - Weltkarte spiegelt reale Kontinente wider (20x10).
    - Neutrale Server: Feste große KI-Server + zufällige Nebenserver (Side Quests, 3-6 pro Kontinent).
    - Spieler starten mit einer Operationsbasis auf einem zufälligen Kontinent.

---

### Detaillierte Fortschrittskurve

Die Fortschrittskurve basiert auf Erfahrungspunkten (XP), die durch Hacks und Cybersecurity-Upgrades gesammelt werden.

|**Level**|**Titel**|**XP-Bedarf**|**Angriffswahrscheinlichkeit**|**Abwehrstärke**|**Freischaltungen**|
|---|---|---|---|---|---|
|**Level 1**|Unerfahrener Hacker|0 XP|50 %|20 %|Brute-Force|
|**Level 2**|Anfänger-Hacker|50 XP|55 %|25 %|Phishing|
|**Level 3**|Fortgeschrittener|150 XP|60 %|30 %|SQL-Injection|
|**Level 4**|Erfahrener Hacker|300 XP|70 %|40 %|DDoS, Keylogger|
|**Level 5**|Elite-Hacker|500 XP|80 %|50 %|Wurm, Man-in-the-Middle|
|**Level 6**|Meister-Hacker|800 XP|85 %|60 %|Zero-Day-Exploit|

- **XP-Quellen**:
    - Erfolgreicher Hack: +20 XP (Nebenserver), +30 XP (großer KI-Server), +40 XP (gegnerischer Server).
    - Cybersecurity-Upgrade: +10 XP.
- **Änderungen**:
    - Entfernung von Algorithmus-Optimierungen (Bubble Sort etc.), Fokus auf Angriffe und Server.
    - XP-Belohnungen angepasst für unterschiedliche Server-Typen.

---

### Erweiterte Angriffsarten

Jede Angriffsart hat Kosten und Basis-Erfolg, modifiziert durch Level, Server-Abwehr und Position (lokal +40 %).

|**Angriff**|**Level**|**Kosten**|**Basis-Erfolg**|**Effekt**|**Realbezug**|
|---|---|---|---|---|---|
|**Brute-Force**|1|20 CPU|50 %|+10 CPU/Runde (neutral)|"Testet alle Passwörter – ressourcenintensiv."|
|**Phishing**|2|5 Codezeilen|40 %|+15 RAM (neutral)|"Nutzt menschliche Fehler – billig, unsicher."|
|**SQL-Injection**|3|10 RAM|60 %|+20 Codezeilen (neutral/gegner)|"Greift Datenbanken an – präzise."|
|**DDoS**|4|30 CPU|55 %|Gegner verliert 1 Runde|"Überflutet Server – effektiv gegen Schwache."|
|**Keylogger**|4|15 CPU|50 %|+20 Codezeilen (gegner)|"Zeichnet Eingaben auf – langsam, effektiv."|
|**Wurm**|5|20 CPU, 10 RAM|65 %|+10 Ressourcen/Runde (3 Runden)|"Selbstreplizierend – nachhaltig."|
|**Man-in-the-Middle**|5|15 RAM, 10 Codezeilen|60 %|Stiehlt 50 % der nächsten Beute|"Fängt Daten ab – perfekt für Sabotage."|
|**Zero-Day-Exploit**|6|40 CPU, 20 Codezeilen|75 %|+50 CPU oder RAM (einmalig)|"Nutzt unbekannte Schwachstellen – mächtig."|

- **Modifikatoren**:
    - +5 % Erfolg pro Level.
    - +40 % Erfolg bei lokalem Hack (Spieler am selben Standort wie Server).
- **Änderungen**: Integration der Position (lokal vs. remote) als zentraler Faktor.

---

### Server-Typen

Server sind auf einer 20x10-Weltkarte verteilt, mit festen großen KI-Servern und zufälligen Nebenservern.

|**Server-Typ**|**Schwierigkeit**|**Ressourcenbelohnung**|**Beschreibung**|**Beispiel-Standort**|
|---|---|---|---|---|
|**Nebenserver**|20-50 %|+10-20 CPU/RAM/Code|Zufällige Side-Quest-Server auf jedem Kontinent|Nordamerika (2, 9)|
|**Privater Webserver**|20 %|+10 CPU, +5 RAM|Kleiner, schlecht gesicherter Server|Mexico City (3, 6)|
|**Firmenserver**|40 %|+20 CPU, +10 Codezeilen|Mittelgroßes Unternehmen mit solider Absicherung|London (6, 8)|
|**Cloud-Server**|60 %|+30 RAM, +15 CPU|Hochleistungsserver mit starker Sicherheitssoftware|Silicon Valley (1, 7)|
|**Bankenserver**|75 %|+40 CPU, +20 Codezeilen|Hochsicherer Finanzserver|Brussels (7, 7)|
|**Militärserver**|85 %|+50 RAM, +30 CPU|Staatliches System mit maximaler Sicherheit|Pentagon (2, 8)|
|**GKS (Endziel)**|90 %|Sieg|Ultimativer Supercomputer – finales Ziel|Zentral (10, 5)|
|**Operationsbasis**|20 %|+10 CPU, +5 RAM (Start)|Spieler-eigener Startserver, erweiterbar|Zufällig pro Spieler|

- **Änderungen**:
    - **Nebenserver**: Zufällig 3-6 pro Kontinent, Schwierigkeit variabel (20-50 %).
    - **Operationsbasis**: Jeder Spieler startet mit einem eigenen Server auf einem zufälligen Kontinent.
    - Standorte sind realwelt-inspiriert und auf der Karte verteilt.

---

### Erweiterte Ereignisse

Ereignisse treten bei Angriffen zufällig ein, basierend auf Server-Typ und Erfolg/Fehlschlag.

|**Ereignis**|**Auslöser**|**Wahrscheinlichkeit**|**Effekt**|**Realbezug**|
|---|---|---|---|---|
|**Rückverfolgung**|Fehlschlag|30 % (sinkt mit Level)|-15 CPU|"Deine IP wurde gefunden."|
|**Razzia**|Lokaler Hack|20 % (Level < 3)|-1 Runde|"Behörden stürmen dein Versteck."|
|**Datenleck**|Erfolgreicher Hack|10 %|+20 Codezeilen (Bonus)|"Geheime Daten gefunden."|
|**Honeypot-Falle**|Neutraler Server|15 %|-30 CPU, -10 RAM|"Ein Köder-Server!"|
|**Alte Software**|Webserver|20 %|+15 % Erfolg (nächster)|"Veraltete Protokolle machen es einfacher."|
|**Intrusion Detection**|Firmenserver|20 %|-15 CPU|"Alarmsystem hat dich entdeckt."|
|**Wartungsfenster**|Cloud-Server|10 %|+25 % Erfolg (1 Runde)|"Update lässt Verteidigung sinken."|
|**Sicherheitsaudit**|Bankenserver|30 %|-25 CPU, -10 RAM|"Audit sperrt dich aus."|
|**Cyberkommando**|Militärserver|35 %|-1 Runde, -30 CPU|"Militär schlägt zurück."|
|**Total-Lockdown**|GKS|40 %|-50 % Erfolg (3 Runden)|"System isoliert sich komplett."|

- **Änderungen**:
    - Ereignisse sind jetzt server-spezifisch (z. B. "Alte Software" nur bei Webservern).
    - Wahrscheinlichkeiten angepasst für Balance.

---

### Beispiel für eine Runde

1. **Runde 1**:
    - Spieler 1 (Level 1, Pos: (2, 8)) greift Pentagon lokal an (Brute-Force, 50 % + 40 % - 85 % = 5 %), scheitert, Cyberkommando (-1 Runde, -30 CPU).
    - Spieler 2 (Level 1, Pos: (15, 7)) greift Great Firewall remote an (Brute-Force, 50 % - 75 % = 0 %), scheitert, Rückverfolgung (-15 CPU).
2. **Runde 5**:
    - Spieler 1 (Level 3, Pos: (1, 7)) greift Silicon Valley lokal an (SQL-Injection, 60 % + 40 % - 60 % + 15 % = 55 %), gelingt, +30 RAM, +15 CPU, Datenleck (+20 Codezeilen).
    - Spieler 2 (Level 2) greift Nebenserver (Phishing, 40 % - 30 % + 10 % = 20 %), gelingt, +15 RAM.

---

### Actions-Klasse (Neu)

Die Actions-Klasse kapselt die Spieleraktionen und ist nun vollständig in die aktuelle Version integriert.

|**Aktion**|**Beschreibung**|**Umsetzung**|
|---|---|---|
|**Travel**|Reise zu einem Serverstandort (x, y)|Eingabe von Koordinaten, Aufruf von game.travel|
|**HackNeutralServer**|Greife einen neutralen KI- oder Nebenserver an|Liste neutraler Server, Auswahl per Nummer, game.attackServer ohne Gegner|
|**HackOpponentServer**|Greife einen gegnerischen Server an|Gegnerauswahl, Serverliste, game.attackServer mit targetPlayer|
|**UpgradeCybersecurity**|Verbessere Cybersecurity um 10 %|Direkter Aufruf von game.upgradeCybersecurity|

- **Änderungen**:
    - Vollständig kompatibel mit der neuen Weltkarte (Server-Positionen).
    - Interaktive Eingaben für Serverauswahl integriert.
    - Fehlerhafte alte Aufrufe (z. B. attackNeutralServer) entfernt.

---

### Fazit

- **Weltkarte**: Realistisch mit Kontinenten, festen KI-Servern (z. B. Pentagon) und zufälligen Nebenservern (3-6 pro Kontinent).
- **Operationsbasis**: Jeder Spieler startet auf einem zufälligen Kontinent mit einer Basis.
- **Actions**: Voll funktionsfähig, mit klarer Trennung von Logik und Eingabe.
- **Server und Ereignisse**: Vielfältig, server-spezifisch und strategisch ausbalanciert.