---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---
### Codebreaker: Cyberkrieg

[Link zum Projekt auf Github](https://github.com/htwg-codebreaker-org/codebreaker)
!!Alle Commits die unter Unknown liefen waren von mir aus einem UNI-PC!!

#### Mögliche Roadmap:
- Minigames bei (Server hacken und verteidigen)
	- Man muss code schreiben(Vorgegebenen Brute Force o.Ä)
		- PVE: Je nach Wahrscheinlichkeit für Erfolg mehr oder weniger Zeit zum code schreiben
		- PVP: Derjenige der Code schneller schreibt gewinnt
- Darknet-Marketplace(Kaufbaure items die Vorteile bieten)
- Server können besetzt werden und passives einkommen generieren(Bitcoin mining usw.)
- etc. siehe unten:

#### Grundkonzept (Kurzfassung)

- **Ziel**: Hacke das Globale Kontrollsystem (GKS) oder sammle die meisten Punkte in 20 Runden (angepasst von 15 auf 20 für mehr Spielraum).
- **Start**: Jeder Spieler beginnt mit einer zufälligen **Operationsbasis** auf einem Kontinent (50 CPU, 20 RAM, 10 Codezeilen, Level 1, Cybersecurity 20 %).
- **Spielprinzip**: Reise zu Serverstandorten, greife neutrale KI-Server (große und Nebenserver) oder gegnerische Server an, verbessere Cybersecurity, sammle XP und Ressourcen.
- **Änderungen**:
    - Weltkarte spiegelt reale Kontinente wider (20x10).
    - Neutrale Server: Feste große KI-Server + zufällige Nebenserver (Side Quests, 3-6 pro Kontinent).
    - Spieler starten mit einer Operationsbasis auf einem zufälligen Kontinent.

---

### Skizze-Karte

![[skizze_codebreaker.png]]
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




### 🔧 Roadmap-Erweiterung: Interaktive Mini-Games & komplexere Aktionen

#### 💻 1. **Minigames beim Server-Hacken (PVE / PVP)**

- **Brute Force Code-Knackung (PVE):**
    
    - Spieler bekommt pseudo-zufälligen Code (z.B. `"7GxP4"`), den er _schnell eintippen_ muss.
        
    - Zeit hängt von der Erfolgswahrscheinlichkeit ab:
        
        - 80%? → Spieler bekommt nur 5 Sekunden Zeit.
            
        - 30%? → Spieler hat 15 Sekunden.
            
    - Optional: Fehler reduzieren den Erfolg (z.B. jeder Tippfehler = -10% Chance).
        
- **PVP-Version (zwei Spieler greifen gleichen Server an):**
    
    - Wer **schneller** (und fehlerfreier) den Code schreibt, claimt den Server zuerst.
        
    - Beide sehen denselben Code oder unterschiedliche mit vergleichbarer Schwierigkeit.
        
- **Optional:** Codes können Mechanik repräsentieren:
    
    - BruteForce → Zahlencode (123456).
        
    - SQL-Injection → Tippe einen gültigen SQL-Befehl.
        
    - Phishing → Entscheide schnell, welcher Text glaubwürdig ist (Multiple Choice).
        

---

#### 🧠 2. **Social Engineering / Mitarbeiter-Verführung**

- Mini-Spiel mit Dialog-Optionen (Dialog-Baum):
    
    - NPC sagt: „Warum brauchst du Zugriff auf das Intranet?“  
        → Antwortmöglichkeiten:
        
        1. „Ich bin vom IT-Support“
        2. „Ich bin neuer Praktikant“
        3. „Ich muss mit deinem Chef reden“
    
    - Jede Antwort hat Wahrscheinlichkeiten basierend auf Spieler-Stats (z.B. Level, Reputation, getarnte Identität).
    - Wenn erfolgreich → Zugang zum Serverraum oder Bonus-Info.

---

#### 🗝️ 3. **Physisches Eindringen in Servergebäude**

- Beim **lokalen Betreten eines Servers**:
    
    - **Mini-Game Schlossknacken (Lockpicking)**:
        
        - z.B. ASCII-basierte Darstellung (bspw. `| | | | |`) mit verschiedenen „Pin“-Stellungen.
            
        - Spieler muss Reihenfolge oder Takt (Timing) erraten.
            
        - Fehlversuche triggern ggf. Alarm (Risk-Score ++).
            
    - **Sicherheitskamera umgehen** (Maze):
        
        - Spieler bewegt sich (↑ ↓ ← →) durch ein ASCII-Labyrinth.
            
        - Kameras bewegen sich zyklisch – man muss im richtigen Moment vorbei.
            
        - Bei Fehler: Rückverfolgung + Alarm + eventuelle Sperre.
            

---

#### 🔁 4. **Gegenmaßnahmen beim Verteidigen von Servern (Defense Mini-Games)**

- Falls ein geclaimter Server angegriffen wird:
    
    - Verteidiger bekommt Chance, sich zu wehren:
        
        - **Firewall-Spiel**: Blocke eingehende Pakete (z.B. per Tastendruck)  
            → z.B. wie Pong: "Gefährliche Pakete" kommen rein, du bewegst Firewall links/rechts.
            
        - **Code-Flicken**: Zeige dem Verteidiger eine Zeile mit Bugs (offenes Port, unsicherer Code) – muss in 5 Sekunden behoben werden.
            
        - **Security Patch Memory**: Zeige 4–6 Sicherheitslücken, dann deck sie ab. Danach: „Was war an Position 3?“.
            

---

#### 🔍 5. **Recon / Informationsbeschaffung**

- Mini-Game: Netzwerkscan → Spieler bekommt ein Netzdiagramm, muss Pfad finden zum Zielserver.
    
- Alternativ:
    
    - Multiple-Choice-Fragen zum Ziel:  
        „Welche OS-Version läuft dort?“ – Spieler muss aus Logs erraten. „Wie lange war Server online?“ – Hinweise aus Fake-E-Mails.
        

---

#### 📍 6. **Reisen & Tarnung**

- Wenn Spieler von Kontinent zu Kontinent reisen:
    
    - **Passkontrolle umgehen / Flughafen hacken**:
        
        - Spiel: Falschen QR-Code generieren (eine Matrix manipulieren).
            
        - Optional: Fingerabdruck-Simulator (Timing-basierte Leiste, richtige Sektion treffen).
            
- **VPN einrichten**:
    
    - Mini-Spiel: Baue eine Route aus geclaimten Servern, aber...
        
    - Zwischenstationen mit hoher Belastung sind weniger anonym → Spieler muss schnell entscheiden.
        

---

#### 📦 7. **Ressourcenverwaltung als Puzzle-Game**

- Bei hoher Serverlast (z.B. viele Claims):
    
    - Spieler muss Ressourcen umverteilen, um alles am Laufen zu halten:
        
        - Mini-Tetris: RAM-/CPU-Blöcke richtig stapeln, ohne Überlast.
            
        - Drag-and-Drop-Simulation: CPU zuweisen zu Servern, aber: je länger du brauchst, desto eher wird einer entdeckt.
            

---

#### 🧩 8. **Zentrale Herausforderung: Boss-Hack / GKS**

- Finales Mini-Game: Mischung aus allen o.g. Elementen.
    
- z.B. Mehrere „Firewall-Layer“:
    
    - Level 1: Lockpicking.
        
    - Level 2: SQL-Guess.
        
    - Level 3: Reverse Engineering (z.B. Code verstehen und ändern).
        
    - Timer läuft → je schneller du bist, desto höher deine Chancen.
        
    - GKS = Supercomputer → fast wie ein „Escape Room“.
        

---

### 💡 Weitere spontane Ideen

- **Marktplatz im Darknet**: Führe ein Schwarzmarkt-Menü ein
    - Kaufe Exploits, Zero-Day-VPNs, Insider-Infos
    - Gib Geld aus → weniger Risiko selbst etwas zu tun
        
- **Beziehungen zu NPCs**:
    - Kontakte innerhalb Firmen, bei Sicherheitsfirmen
    - Manche Server sind nur angreifbar, wenn man „jemanden kennt“
        
- **KI-Verteidiger**:
    - Manche Firmen haben eine adaptive AI → je öfter du sie angreifst, desto besser kontert sie.




## 🕸️ **DARKNET-MARKTPLATZ** – Feature-Planung

---

### 🛒 1. **Kaufbare Items & Dienste**

Spieler können mit **verdientem Geld** (z. B. aus Server-Einnahmen, Nebenaufträgen oder geklauten Bitcoins) Tools & Services erwerben.

#### 🔧 Erweiterungs-Typen:

|Item|Kosten|Effekt|Risiko|
|---|---|---|---|
|**Zero-Day-Exploit**|500₿|+20% Erfolgswahrscheinlichkeit bei jedem Hack (1x verwendbar)|Hoch|
|**VPN-Kette (5 Hops)**|200₿|Reduziert Rückverfolgungschance um 40% für 3 Runden|Niedrig|
|**Insider-Kontakt**|300₿|Deckt Position & Infos zu verstecktem Firmenserver auf|Mittel|
|**Keylogger-Modul**|150₿|Ermöglicht passives Code-Farming pro Runde bei geclaimtem Server|Niedrig|
|**Proxy-Bypasser**|250₿|Reduziert Schwierigkeit eines Serverhacks um 10 %|Mittel|
|**Backdoor-Auto-Installer**|350₿|Ermöglicht sofortiges Claimen nach erfolgreichem Hack|Hoch|
|**Malware-Library**|400₿|Freischaltung neuer Angriffsmethoden (z. B. "Ransomware")|Mittel|
|**Stealth Shield**|600₿|Temporär keine Aufdeckungswahrscheinlichkeit bei Einnahmen (2 Runden)|Niedrig|

---

### 💰 2. **Eigene Server-Nutzung im Darknet**

Geclaimte Server können als _Infrastruktur_ genutzt werden – je nachdem, wie du sie konfigurierst, generieren sie passives Einkommen, aber erhöhen auch das Entdeckungsrisiko!

#### 🧱 Server-Rollen

|Server-Rolle|Einnahmen (pro Runde)|Risiko aufzudecken (%)|Effekte / Besonderheiten|
|---|---|---|---|
|**Bitcoin Miner**|+25–50₿|20–50%|CPU-abhängig. Rechenstarke Server → mehr Coins.|
|**Darknet-Host**|+15–40₿|10–30%|Traffic erzeugt Aufmerksamkeit. Optional verschleierbar.|
|**Datenhändler**|+20–45₿|15–45%|Nur möglich bei vorherigem Datenleck|
|**Command & Control Node**|+30₿ (und Botnet-Funktion)|60%|Aktiviert besondere Angriffe wie Massen-DDoS.|

> 💡 _Du kannst in der Runde entscheiden, welche Rolle ein Server bekommt – oder ihn nur passiv lassen (sicherer, aber kein Gewinn)._

---

### 🧪 4. **Zufällige Darknet-Ereignisse**

Jede Runde mit Darknet-Aktivität kann Events triggern:

|Event|Wahrscheinlichkeit|Effekt|
|---|---|---|
|**Aufdeckung**|variiert|Verlust von Server / Geldstrafe / XP-Strafe|
|**Darknet-Razzia**|10 %|Alle Einnahmen dieser Runde verfallen|
|**Falschlieferung**|5 %|Item funktioniert nicht|
|**Bonus-Kunde**|5 %|Einnahme verdoppelt|
