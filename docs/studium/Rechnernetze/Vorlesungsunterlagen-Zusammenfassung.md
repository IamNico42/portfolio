---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---
# **Vorlesungsunterlagen-Zusammenfassung**


# **<u>Internet-Protokoll IPv4</u>**
---
## ✅ 1. **Was ist ein IP-Paket, und was steht im Header?**

Stell dir ein IP-Paket vor wie einen **Briefumschlag mit Inhalt**.

- Der **Header** ist der **Adressaufkleber auf dem Umschlag**
- Der **Inhalt** ist z. B. eine E-Mail, eine Webseite oder irgendwas, was du übers Internet schickst

### 🧾 Im Header stehen:

- **Absender-IP (Source IP)** → Wer hat das Paket geschickt (z. B. `192.168.0.10`)
- **Empfänger-IP (Destination IP)** → Wer soll es empfangen (z. B. `142.250.186.142`)
- **TTL (Time to Live)** → Wie oft darf das Paket noch weitergereicht werden?
	- (Reduziert sich bei jedem Hop. Festgelegter Schutzmechanismus)
		- Windows oder Linux: 64 oder 128
		- Router, Sever: manchmal  255
- **Protocol ID** → Sagt, ob der Inhalt z. B. TCP oder UDP ist
- **Fragment-Infos** → Falls der Inhalt zu groß ist und aufgeteilt werden musste

### 📦 Beispiel:

Ein Paket mit:

- Absender: `192.168.0.10`
- Empfänger: `8.8.8.8` (Google DNS)
- TTL: `64`
- Protocol: `6` (TCP)

---
## 🧭 2. **Was ist die Protocol ID, und warum ist sie wichtig?**

Die **Protocol ID** im IP-Header sagt dem Empfänger:

> **Was steckt im IP-Paket drin?**

Denn IP kümmert sich nur um die Zustellung – **was drin ist, ist ihm egal**. Aber für die Software, die das Paket verarbeitet, ist das superwichtig.

|Protocol ID|Bedeutung|
|---|---|
|1|ICMP (z. B. Ping)|
|**6**|**TCP** (z. B. Webseiten, E-Mail)|
|17|UDP (z. B. Videos, Games)|

### 🛠 Beispiel:

Wenn im Dump steht: `Protocol: 6`, dann weißt du:  
➡️ Es ist ein **TCP-Paket** → du kannst gleich schauen, ob es SYN, ACK usw. enthält

---
## 📬 3. **Wie funktioniert die Kommunikation mit Source & Destination IPs?**
### 🧱 Grundstruktur der Datenübertragung
Wenn du z. B. eine Webseite öffnest oder eine E-Mail schreibst, passiert **technisch** Folgendes:
1. **IP-Adresse** → _„An welches Gerät soll das Paket gehen?“_
2. **Portnummer** → _„An welches Programm/Prozess auf diesem Gerät?“_
3. **Protokoll** → _„Wie sollen die Daten transportiert werden?“_

Ganz einfach gesagt:

- **Source IP**: derjenige, der das Paket schickt
- **Destination IP**: derjenige, der das Paket empfangen soll
    

Pakete werden versendet mit Informationen. Einzelne Router lesen die Informationen und leiten das Paket entsprechend weiter (**Routing-Tabelle**). 
- Diese Tabelle weiß welche IP zu welchem Netz gehört und kann es an entsprechende Provider weiterleiten die ebenfalls das Paket dann dem Zielserver zusenden weil sie sich wieder intern in ihrem Netz auskennen und nötige Informationen haben.

zB:
(Deutschland) Heimnetz
(Deutschland) Provider
(Asien) Provider
(Asien) Server

🔁 **Wichtig:**  
Jeder Router kennt **nicht den ganzen Weg**, sondern nur den **nächsten sinnvollen Schritt** → genau wie beim Staffellauf: **immer nur an den nächsten Läufer übergeben.**


Dazu kommen noch die **Ports** (stehen im TCP-Header):

|Rolle|IP-Adresse|Port|
|---|---|---|
|Client|192.168.0.10|54823 (zufällig)|
|Server|142.250.186.142|443 (https)|

➡️ Die Kombination aus **IP + Port** nennt man einen **Socket**

### 🔁 Beispiel (TCP-Verbindung aufbauen):

1. Client → Server: will sich verbinden  
    `192.168.0.10:54823 → 142.250.186.142:443`
2. Server antwortet  
    `142.250.186.142:443 → 192.168.0.10:54823`

- Die IP-Adresse bringt das Paket **zum richtigen Gerät**
- Der Port bringt es **zum richtigen Programm**
- Das Protokoll bestimmt **den Übertragungsstil** (TCP = sicher, UDP = schnell)

---
## 🔄 4. **Was ist TTL – Time to Live?**

TTL = Zahl im Header (z. B. 64), die **verhindert, dass Pakete endlos im Netz bleiben**.

### 🧠 Warum braucht man das?

Wenn sich Router falsch verknüpfen (Schleife), könnte ein Paket **für immer im Kreis laufen** → Netz wird verstopft.

### 🔧 Wie funktioniert TTL?

- Wird **bei jedem Router** um 1 reduziert
- Wenn **TTL = 0**, wird das Paket **weggeworfen**
- Der Absender kann eine Fehlermeldung bekommen

### 📦 Beispiel:

- Dein PC sendet Paket mit TTL = 64
- Geht über 4 Router → kommt mit TTL = 60 beim Ziel an
- Alles okay

### 💥 Sonderfall:

Du sendest ein Paket mit TTL = 1 →  
→ Es stirbt **sofort beim ersten Router**. Das nennt man TTL-Exceeded.

---

## 📊 5. **Wie erkennt man TCP-Verbindungen im Dump (Paketmitschnitt)?**


### 🔄 TCP-Verbindungen: Der „Gesprächsablauf“ im Netzwerk

TCP ist **verbindungsorientiert** – das heißt, bevor Daten gesendet werden, wird **eine Verbindung aufgebaut**, **Daten übertragen**, und **sauber beendet**.

| Flag    | Bedeutung                     | Wann?                              |
| ------- | ----------------------------- | ---------------------------------- |
| **SYN** | Verbindung aufbauen           | 1. Schritt des Handshakes          |
| **ACK** | Bestätigung                   | 2. & 3. Schritt, überall           |
| **PSH** | „Push“ – Daten sofort senden  | Wenn echte Daten übertragen werden |
| **FIN** | Verbindung ordentlich beenden | Zum Gesprächsende                  |
| **RST** | Verbindung abrupt abbrechen   | z. B. Fehler oder Verweigerung     |

### 🚦 Verbindungsaufbau: **3-Way-Handshake**

So wie man erst **Hallo sagt**, bevor man ein Gespräch beginnt, „handshaken“ sich zwei Rechner:
#### Schritt-für-Schritt:

| Schritt | Richtung        | Flag          | Bedeutung                                                            |
| ------- | --------------- | ------------- | -------------------------------------------------------------------- |
| 1       | Client → Server | **SYN**       | „Ich will verbinden, hier ist meine Startnummer“                     |
| 2       | Server → Client | **SYN + ACK** | „Ich akzeptiere, hier ist meine Startnummer und ich bestätige deine“ |
| 3       | Client → Server | **ACK**       | „Bestätigung, Verbindung steht“                                      |

🧠 Danach ist die Verbindung **etabliert** → jetzt dürfen Daten übertragen werden.
### 📤 Datenübertragung: **PSH + ACK**

Wenn der Client oder Server **richtige Inhalte** sendet (z. B. HTTP-Anfrage, Chatnachricht), wird das über **PSH + ACK** gemacht:

- **PSH** = "Push": Sende die Daten **sofort**, nicht puffern.
    
- **ACK** = Immer dabei, um zu sagen: _„Ich habe alles bis hierher erhalten“_

### 📴 Verbindungsabbau: **FIN oder RST**

Am Ende muss das „Gespräch“ sauber beendet werden:

|Szenario|Flags|Bedeutung|
|---|---|---|
|Normaler Abbau|**FIN → ACK → FIN → ACK**|Beide Seiten beenden, jeder verabschiedet sich|
|Abbruch (Fehler, Block)|**RST**|„Stopp sofort! Ich will/kann nicht weiter kommunizieren“|

## 🧪 Anwendung im `tcpdump` (wie in deiner Aufgabe)

Wenn du einen TCP-Dump liest, kannst du z. B. sehen:


```
1. 56835 > 50000 [SYN]         → Client startet
2. 50000 > 56835 [SYN, ACK]    → Server antwortet
3. 56835 > 50000 [ACK]         → Verbindung steht
4. 56835 > 50000 [PSH, ACK]    → Daten werden geschickt
5. 50000 > 56835 [ACK]         → Server bestätigt
6. 50000 > 56835 [PSH, ACK]    → Antwort kommt zurück
7. 56835 > 50000 [FIN, ACK]    → Client beendet
8. 50000 > 56835 [FIN, ACK]    → Server bestätigt & beendet
```

### 🧠 Was man wissen sollte:

- **Ohne den Handshake (SYN → SYN-ACK → ACK)** kann keine TCP-Verbindung bestehen.
- **ACKs** kommen fast in jedem Paket vor – sie sind das Rückgrat der Zuverlässigkeit.
- **PSH** zeigt an: „Das ist ein Datenpaket.“
- **FIN** ist höflich – **RST** ist hart.


![[socket-befehle.png]]

---
