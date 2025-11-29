---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
  - Software-Engineering
tags:
  - Course/
---
# 🧱 **I. CORE ENGINE (Fundament)**

### ✔ Was existiert schon teilweise

- Weltkarte 20×10
- Rundenbasiertes System
- Spieler-Objekte
- Claim-Logik
- Basic States
    

### 📝 ToDo

#### **1. Turn-System finalisieren**

-  Phasen implementieren (Travel → Actions → Resolve → Income → End)
-  Jeder Spieler führt Aktionen _pro Phase_ aus
-  Validierung: Aktion in falscher Phase → Fehlermeldung
    

#### **2. RNG/Seed-Management**

-  globaler Seed
-  deterministische Events für Replays/Lobby
    

---

# 🌍 **II. WELT & REGIONEN**

**Ziel:** realistische Hackerwelt mit Kontinenten, Ländern/Regionen, Sicherheits-Levels

### Komponenten
- Kontinente (Nordamerika, Europa, Asien, Afrika, Südamerika, Naher Osten, Ozeanien)
- CountryClasses (High-Tech, Industrieland, Schwellenland, Low-Security, Militärisch/Zensiert)
- Regionen (z. B. Silicon Valley, Moskau, Nairobi, São Paulo …)
- Tiles (die einzelnen Felder der Karte)
    

### 📝 ToDo

#### **1. Continent-Definition**
-  baseSecurity, policeActivity, techLevel
    

#### **2. CountryClass**
-  detectionDifficulty
-  digitalInfrastructure
-  corruption
-  chaosFactor
    

#### **3. Regionen anlegen**

-  Jede Region → Kontinent + CountryClass
-  regionModifiers (hackDifficultyBonus, travelRiskFactor, serverSpawnWeights)
    

#### **4. Tiles verbinden**

-  Tile bekommt regionName
-  Laden über world.conf
    

---

# 🚗 **III. MOVEMENT SYSTEM**

**Ziel:** realistisches Reisen → wirkt auf: Hack-Chancen, Heat, Risiko

### Transport Modes (konfigurierbar):

- Walk
- Car
- Train
- Plane
- (optional später: Boat, Motorcycle, Bus)
    

### 📝 ToDo

#### **1. TransportMode Klasse**

-  range
-  cost (cpu/ram/code/money)
-  risk
-  requiresAirport
-  requiresStation
    

#### **2. Travel-Logik**
-  distance-check
-  resource-check
-  heatIncrease = risk * faktor
-  check region travelRiskFactor
-  update position
    

#### **3. Movement in Runde integrieren**

-  Travel nur in Phase 1 möglich
    

---

# 🔥 **IV. HEAT & POLIZEI-SYSTEM**

**Ziel:** globaler Fahndungsstatus, Risiken, Razzien**

### Heat steigt bei:
- Reisen
- Failed Hacks
- Claim eines Servers
- Aktive Serverrollen (z. B. C2)
- Darknet-Aktivität
    

### 📝 ToDo

#### **1. Heat-Modell**

-  heat: Int 0–100
-  heatDecay per Runde
-  region-based heatMultiplier
    

#### **2. Polizei-Ereignisse**

-  Razzia (movement block)
-  IP-Trace (CPU-Verlust)
-  Global Manhunt (Temporär 50% weniger Erfolgswahrscheinlichkeit)
    

#### **3. Heat-Thresholds**

-  >40 Warnungen
-  >70 Lokale Razzia möglich
-  100 = Temporäre Lahmlegung
    

---

# 💻 **V. ATTACK SYSTEM**

**Ziel:** Angriffe mit Kosten, Wahrscheinlichkeiten, Levelanforderungen**

### Attacken:
- BruteForce
- Phishing
- SQLi
- DDoS
- Keylogger
- MITM
- Wurm
- Zero-Day
    

### 📝 ToDo

#### **1. AttackDefinition in attacks.conf**
-  baseChance
-  costCpu
-  costRam
-  costCode
-  requiresLevel
-  minigameType
-  effects
    

#### **2. AttackResolver**

-  baseChance + LevelBonus – ServerDefense + LocalBonus
-  Ergebnis → Erfolg/Fehlschlag
-  Trigger Events (Honeypot, Rückverfolgung …)
    

#### **3. Local vs Remote Hack**

-  Wenn playerPos == serverPos → +40%
-  region.localHackBonus anwenden
    

---

# 🏢 **VI. SERVER SYSTEM**

**Ziel:** Server spawnen, hacken, claimen, verwalten**

### Servertypen:

- Nebenserver
- Webserver
- Firmenserver
- Cloud
- Banken
- Militär
- GKS (Endgame)
    

### 📝 ToDo

#### **1. ServerDefinition**

-  difficulty
-  rewardCpu
-  rewardRam
-  rewardCode
-  specialEvents
-  spawnWeight pro Region
    

#### **2. ServerSpawnSystem**

-  3–6 Nebenserver pro Kontinent
-  Globale große KI-Server an festen Koordinaten
-  Zufällige Firmen/Cloud/Banken-Server pro Region
    

#### **3. Claim-System**

-  server.ownerId
-  server.role (mining, darknet-host, c2-node …)
    

---

# 🕵️ **VII. PLAYER SYSTEM**

**Ziel:** Level, XP, Ressourcen, Inventory**

### 📝 ToDo

#### **1. Level + XP Logik**

-  XP thresholds
-  +XP durch Hacks
-  +XP durch Upgrades
    

#### **2. Resource Management**

-  CPU, RAM, Code zahlen für Aktionen
-  Rewards hinzufügen
-  Passive Einkommen von Serverrollen
    

#### **3. Cybersecurity Upgrades**

-  +10 % Defense pro Upgrade
-  +XP
    

---

# 🛒 **VIII. DARKNET SYSTEM**

**Ziel:** Items kaufen → Boni, Exploits, Zero-Days**

### 📝 ToDo

#### **1. ItemDefinition**

-  cost
-  effectType
-  duration
-  riskModifier
    

#### **2. Shop**

-  zufällige Items pro Runde
-  dynamische Preise abhängig von Chaos
    

#### **3. Darknet Events**

-  Raid
-  Fake Item
-  Bonus Kunde
-  Price Surge
    

---

# ⚡ **IX. EVENTS SYSTEM**

**Ziel:** Zufallsereignisse → Dynamik**

### Airlines Events (Travel)

- Verspätung
- Flughafen Kontrolle
- ID Check fail
    

### Hacking Events

- Datenleck (Bonus)
- Honeypot
- Rückverfolgung
- IDS Alert
- Wartungsfenster
    

### Regionen-Events

- Stromausfall
- Netzwerkausfall
- Korruptions-Boost
- Militärische Operation
- Riot/Chaos
    

### 📝 ToDo

-  EventDefinition
-  Trigger-Bedingungen
-  Auswirkungen auf Player/Server/Heat
    

---

# 🎮 **X. MINIGAMES**

**Ziel:** interaktive Hacks & Defense**

### Minigames:

- Code-Input (Bruteforce)
- SQL-Puzzle
- Packet-Firewall (DDoS)
- Keylogger/Memory
- Lockpicking
- Camera Maze
- Reverse Engineering (Endgame)
    

### 📝 ToDo

-  Minigame Interface
-  Backend-Verbindung → liefert Erfolg/Fail
-  CLI/GUI Implementation später
    

---

# 📦 **XI. CONFIG SYSTEM (HOCON + GUICE)**

Alles MUSS konfigurierbar sein.

### Dateien:

- world.conf (Kontinente, Regionen)
- servers.conf (Servertypen, Spawnrate)
- attacks.conf (Attacken, Boni)
- transport.conf (Movement, risk, cost)
- items.conf (Darknet)
- events.conf
    

### 📝 ToDo

-  SettingsLoader
-  GuiceModule für jede Config
-  Validation + Default-Werte
    

---

# 🧨 **XII. ENDGAME (GKS)**

**Mehrstufiger Boss-Hack**

### Stufen:

- Firewall Layer
- Encryption Layer
- System Integration Layer
- Termination
    

### 📝 ToDo
-  GKS-Minigame
-  Progress über Runden
-  Teamplay Effekte