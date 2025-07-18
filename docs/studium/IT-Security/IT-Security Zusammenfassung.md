### 💡 **1. IT-Grundschutz (IT Base Protection)**

**Wichtig:**

- Unterschiede zwischen **Basis-, Kern- und Standard-Absicherung**.
	- Basis: Einfacher Schutz
	- Kern: Mittlere Schutz bzw. für gezielte Anwendungen mehr für andere weniger
	- Standard: Umfassender Schutz mit Analyse und Dokumentation

IT-Grundschutz Baustein:
	1. Welches Gerät bzw. Maßnahme?(Notebook, Handy, Server, PC)
	2. Wovor soll es geschützt werden?(Ransome, Maleware, Physischer Zugang)
	3. Welche Sicherheitsstufe braucht es?(niedrig, mittel, hoch)

- Inhalte von IT-Grundschutz-Bausteinen (z. B. Maßnahmen, Gefährdungslage, Anforderungen).
- Was tun, wenn Management Maßnahmen nicht umsetzen will?
- Wer setzt Maßnahmen um bzw. überprüft sie?
	- Systemadministratoren 


## 🔐 **2. Authentifizierung & Passwortsicherheit**

### Authentifizierungsmethoden

- **Wissen**: Passwort, PIN.
- **Besitz**: Schlüssel, Karte.
- **Sein**: Fingerabdruck, Gesicht (Biometrie).
- **Zwei-Faktor-Authentifizierung**: Kombination aus zwei dieser Kategorien.
    

### Passwortsicherheit

- **Hashing**: Speicherung von Passwörtern als Einwegfunktion.
- **Salting**: Einzigartiger Zusatzwert verhindert Rainbow-Table-Angriffe.
- **Empfohlene Methoden**: Bcrypt, Argon2. (Hat schon integriertes Salting)
- **Empfohlene Mindestlänge**: z. B. 8 Zeichen an der HTWG.
## 💥 **3. Schadsoftware (Malware)**

- **Ransomware**: Verschlüsselt Daten, verlangt Lösegeld.
- **Verbreitungswege**: E-Mail, Schwachstellen, USB-Sticks.
- **Erkennung durch Antivirenprogramme:**
    
    1. **Signaturbasiert**: Bekannte Muster → schnell, aber blind für neue Viren.
	    1. Erkennt keine Zero-Day angriffe
	    2. Erkennt Signaturen wie zB Zeichenfolge `x90x90xE8x00x00`
    2. **Heuristik**: Verhaltensanalyse → erkennt neue Varianten.
	    1. Erkennen auffälliges verhalten wie zB
		       - Selbstreplikation
		       - Verschlüsselung von Dateien
		       - Zugriff auf Systemverzeichnisse
		       - Manipulation von Registry Einträgen
    3. **Sandboxing**: Testausführung in sicherer Umgebung.
	    1. Verdächtige Programme werden erstmal in einem virtuellen Contianer ausgeführt
        

---

## 🔓 **4. Zugriffssteuerung (Access Control)**

- **Grundbegriffe:**
    
    - **SID**: Security Identifier (Benutzer oder Gruppenkennung).
	    - In Tokens, Zugriffslisten(ACL), Events/Logs
    - **Privilege**: Systemweite Rechte.
    - **ACL (Access Control List)**: Liste mit Zugriffsrechten.
	    - Jede Datei hat seine eigene ACL: zB für IT-Security.pdf
		      SID_B: Darf lesen
		      SID_A: Darf schreiben und lesen
    - **ACE (Access Control Entry)**: Eintrag in ACL.
	    - SID
	    - Rechte(Lesen,Schreiben,Löschen)
	    - Typ

#### Arten von Privilege

| Privilege                       | Bedeutung (vereinfacht)                                | Wer sollte das haben?     |
| ------------------------------- | ------------------------------------------------------ | ------------------------- |
| `SeShutdownPrivilege`           | System herunterfahren                                  | Benutzer, Admins          |
| `SeBackupPrivilege`             | Alles sichern - auch ohne normale Leserechte           | Backup-Programme, Admins  |
| `SeRestorePrivilege`            | Dateien überall zurückspielen                          | Admins, Wiederherstellung |
| `SeDebugPrivilege`              | In fremde Programme reinschauen oder verändern         | Entwickler, Debug-Tools   |
| `SeTakeOwnershipPrivilege`      | Eigentümer von Objekten ändern                         | Admins                    |
| `SeChangeNotifyPrivilege`       | Benachrichtigt werden, wenn sich was in Ordnern ändert | Fast jeder Benutzer       |
| `SeCreateSymbolicLinkPrivilege` | Symlinks (Verknüpfungen) anlegen                       | Admins                    |
| `SeLoadDriverPrivilege`         | Kernel-Treiber laden                                   | Nur sehr vertrauenswürdig |

- **Arten der Steuerung:**
    
    - **DAC (Discretionary Access Control)**: Benutzer entscheidet.
	    - Owner der Datei kann Rechte vergeben
	    - Du erstellst eine Datei und erlaubst „Benutzer B“ Lesezugriff → das ist DAC.
    - **RBAC (Role-Based Access Control)**: Rechte über Rollen.
	    - Rollen die diverse Rechte haben
    - **ABAC (Attribute-Based Access Control)**: Zugriff nach Attributen.
	    - zB: Benutzer Max mit SID ".." Darf heute um 16Uhr-20Uhr die Datei öffnen
	    - Zusätzlich falls man ergänzende Attribute haben möchte mit RBAC oder DAC
        

---

## ✅ **5. Positivlisten / Whitelisting (WDAC)**

- **WDAC = Windows Defender Application Control**
    - Nur zugelassene Programme dürfen starten.
        
- **Arten von Whitelists:**
    
    - Pfad-basiert: z. B. `C:\Program Files`
    - Zertifikat-basiert: Nur signierte Programme.
    - Hash-basiert: Prüfsumme von Dateien.

Szenario wenn trotzdem versucht wird nicht gelistete Programme auszuführen
- **Enforced:** Programm wird blockiert
- **Audit Mode**: Testlauf ohne Durchsetzung, dient zur Analyse.


- **Herausforderungen:** Flexibilität bei PC-Pools, Updates.
    

---

## 🔗 **6. Lieferkettensicherheit / Supply Chain Attacks**

- **Was ist das?**
    - Angreifer manipulieren Software oder Komponenten während der Entwicklung oder Verteilung.
    - System wird schon beim Zulieferer kompromittiert.
    - 
        
- **Beispiele:** SolarWinds, log4j.
- **Risiken durch Drittanbieter:** z. B. Huawei (politisch), Open Source (Transparenz vs. Kontrolle).
- **Maßnahmen:** Signaturen, Vertrauen in Quellen, 2FA für Maintainer.

### 🛡️ Schutzmaßnahmen gegen Supply Chain Attacks

|Maßnahme|Erklärung|
|---|---|
|✅ **Digitale Signaturen**|Sicherstellen, dass Software nicht verändert wurde (Authentizität + Integrität)|
|✅ **Hash-Prüfsummen**|Vergleich von Dateien mit offiziellen Hashes (SHA256 etc.)|
|✅ **2FA für Entwickler**|Schutz von Entwicklerkonten und Repositories|
|✅ **Code Signing Policies**|Nur signierte Software darf ausgeführt werden (z. B. mit WDAC oder AppLocker)|
|✅ **SBOM (Software Bill of Materials)**|Dokumentation aller Abhängigkeiten in der Software - wer nutzt was?|
|✅ **Monitoring & Logging**|Frühzeitiges Erkennen verdächtigen Verhaltens|
|✅ **Zero Trust**|„Vertraue niemandem automatisch“ - auch nicht internen Komponenten|

---

## 🧬 **7. Schwachstellen & Verwundbarkeiten**

- **Datenbanken wie NVD (National Vulnerability Database)** helfen beim Patchmanagement.
- **CVE**: Eindeutige Kennungen für Schwachstellen.
- **CWE**: Kategorisierung von Schwachstellentypen (z. B. CWE-120 = Buffer Overflow).
    

---

## 🧪 **8. Statische Codeanalyse**

- **Analyse des Codes ohne Ausführung.**
- Ziel: Schwachstellen frühzeitig erkennen.
    
- **Begriffe:**
    - **True Positive**: Fehler korrekt erkannt.
    - **False Positive**: Fehlalarm.
    - **False Negative**: Fehler übersehen.
        
- **Problematisch:** Viele False Positives führen zu Frustration und Ignoranz.

### 🔐 Sicherheit:
- **Buffer Overflows**
- **SQL Injections**
- **XSS
- **Ungeprüfte Benutzereingaben**
- **Uninitialisierte Variablen**
- **Ressourcenlecks**
- **Unsichere API-Nutzung**
- **Race Conditions** (nur teilweise)
### 🧹 Codequalität:
- Unbenutzter Code
- Magische Zahlen
- Spaghetticode
- Verstöße gegen Coding-Standards
- Verwirrende oder doppelte Logik
- Schlechte Namensgebung
- Missachtung von „Clean Code“-Prinzipie

## 📦 Tools für statische Codeanalyse

### 🔹 Open Source & frei

|Tool|Sprache|Spezialisiert auf…|
|---|---|---|
|**SonarQube**|Java, C#, JS, uvm.|Qualität + Sicherheit|
|**ESLint**|JavaScript, TypeScript|Stil, Fehler|
|**Bandit**|Python|Sicherheitslücken|
|**Cppcheck**|C/C++|Speicher, Performance|
|**Brakeman**|Ruby on Rails|Web-Schwachstellen|
|**Semgrep**|Multi-Language|Muster- & Policy-Erkennung|

---

## 📈 **9. Risikobewertung (Risk Assessment)**

- **Zwei Hauptfaktoren:**
    - **Wahrscheinlichkeit** (dass ein Schaden eintritt)
    - **Auswirkung** (wenn er eintritt)
- **Schwierigkeit:** Exakte Bewertung hängt stark von Daten und Erfahrung ab.

Risiko = Wahrscheinlichkeit × Auswirkung

## Beispiel: Risiko-Matrix

|**Niedrige Auswirkung**|**Mittlere Auswirkung**|**Hohe Auswirkung**|
|---|---|---|---|
|**Niedrige Wahrscheinlichkeit**|🟢 niedrig|🟡 niedrig-mittel|🟡 mittel|
|**Mittlere Wahrscheinlichkeit**|🟡 niedrig-mittel|🟠 mittel|🔴 hoch|
|**Hohe Wahrscheinlichkeit**|🟡 mittel|🔴 hoch|🔴 kritisch|

---

## 🧱 **10. Microsoft SDL (Security Development Lifecycle)**

> Microsoft SDL(Security Development Lifecycle) ist wichtig damit man schon während der Entwicklung feststellt an welchen Stellen im Code wir vorsichtig sein müssen. Es werden schon Risiken betrachtet bevor die App überhaupt gebaut wird.

- **Beispiele für SDL-Praktiken:**
    - **Threat Modeling**
    - **Use of Safe Libraries**
    - **Security Requirements**
    - **Incident Response Plan**

### 🔎 1. **Threat Modeling**

> Frühzeitige Analyse: **Welche Bedrohungen könnten unsere Software treffen?**

- Identifiziere: **Assets**, **Angriffsflächen**, **Angreiferziele**
- Tools: STRIDE-Modell (Spoofing, Tampering, Repudiation, Info Disclosure, Denial of Service, Elevation of Privilege)
- Ergebnis: **Bedrohungsszenarien + passende Gegenmaßnahmen**

✅ Beispiel:

> „Wenn jemand direkt API-Calls schicken kann, ohne Authentifizierung, ist das ein Risiko → Authentifizierungsprüfung einbauen.“
#### 🧰 STRIDE-Modell - einfacher erklärt

Das ist ein Werkzeug zum **systematischen Nachdenken über Bedrohungen**. Jeder Buchstabe steht für eine Art von Angriff:

|Kürzel|Name|Heißt auf Deutsch|Beispiel (sehr einfach)|
|---|---|---|---|
|S|**Spoofing**|Vortäuschen falscher Identität|Jemand gibt sich als Admin aus|
|T|**Tampering**|Daten manipulieren|Ein Angreifer verändert eine Datei oder Datenbank|
|R|**Repudiation**|Abstreiten von Handlungen|Jemand löscht Daten und sagt: „War ich nicht!“|
|I|**Information Disclosure**|Informationen ausspionieren|Hacker liest Passwörter oder E-Mails aus|
|D|**Denial of Service**|Dienst lahmlegen|Server wird mit Anfragen geflutet (DDoS)|
|E|**Elevation of Privilege**|Berechtigungen ausweiten|Normaler Nutzer wird plötzlich Admin|

### 🧱 2. **Use of Safe Libraries**

> Statt alles selbst zu implementieren: **bewährte, geprüfte Bibliotheken verwenden**

- Keine selbstgebauten Crypto-Funktionen!
- Beispiel:
    - Verwende `bcrypt` statt eigenen Passwort-Hash
    - Nutze Framework-eigene Schutzmechanismen (ORMs, CSRF-Tokens)

### 📜 3. **Security Requirements**

> Schon in der **Planung** werden **Sicherheitsanforderungen** definiert
- Beispiel: „Login muss gegen Brute-Force geschützt sein“
- Zugriffskontrollen, Verschlüsselung, Logging etc.
- Sicherheit wird **Teil der Spezifikation**

### 📛 4. **Incident Response Plan**

> Was tun, **wenn doch was schiefgeht**?
- Wer ist verantwortlich?
- Wie reagieren wir schnell?
- Was muss kommuniziert werden?
- Welche Logs benötigen wir?
    

➡️ Muss **vor dem Ernstfall** klar definiert sein!

### 🎯 Weitere SDL-Elemente (je nach Phase):

|Phase|Maßnahme|
|---|---|
|Design|Threat Modeling|
|Implementierung|Secure Coding Standards, Safe APIs|
|Test|Statische Codeanalyse, Fuzzing|
|Release|Sicherheits-Review, Signatur|
|Betrieb|Patching, Monitoring, Incident Handling|

### ✅ Vorteile des SDL:

|Vorteil|Warum wichtig?|
|---|---|
|Frühe Erkennung|Fehler sind am billigsten, wenn sie früh entdeckt werden|
|Bessere Qualität|Weniger Bugs, stabilere Software|
|Wiederholbarer Prozess|Sicherheit wird systematisch, nicht zufällig|
|Kompatibel mit DevOps|Lässt sich in CI/CD integrieren|

---

## 🏅 **11. Zertifizierung / Common Criteria (CC)**

> Die **Common Criteria (ISO/IEC 15408)** sind ein **international standardisiertes Bewertungsschema** zur Beurteilung der **Sicherheitseigenschaften von IT-Produkten**.

- **Bewertungsschema für IT-Produkte (z. B. EAL1-EAL7).**
    - **EAL4**: "Methodisch getestet und überprüft".
- **AVA_VAN Analyse:** Schwachstellenanalyse.
- **CEM-Dimensionen für Angreifer:** Wissen, Zeit, Zugang, Know-how, Motivation
### 🛠️ Ziel: Vertrauen schaffen

Ein Hersteller kann sagen:
> „Mein Produkt erfüllt diese Sicherheitsanforderungen und wurde unabhängig geprüft.“
### 📏 EAL - Evaluation Assurance Level

|EAL-Stufe|Bedeutung|
|---|---|
|**EAL1**|Funktional getestet|
|**EAL2**|Strukturell getestet|
|**EAL3**|Methodisch getestet|
|**EAL4**|✅ _Methodisch getestet und überprüft_|
|**EAL5**|Semi-formal getestet und überprüft|
|**EAL6**|Semi-formal verifiziert|
|**EAL7**|Formal verifiziert (höchste Stufe, teuer)|

📌 **EAL4** ist in der Praxis häufig der **höchste realistisch sinnvolle Level**  
→ z. B. für Firewalls, Security Tokens, kritische Software
### 🔎 AVA_VAN - Schwachstellenanalyse

Im Rahmen von CC werden Angriffe simuliert (Vulnerability Analysis):

|Stufe|Beschreibung|
|---|---|
|**AVA_VAN.1**|Gelegenheitsschwachstellen, geringes Know-how|
|**AVA_VAN.5**|Fortgeschrittene, organisierte Angriffe|

### 🧠 CEM-Dimensionen: Wie bewertet man einen Angreifer?

Das **Common Evaluation Methodology (CEM)** bewertet einen Angreifer anhand von:

|Dimension|Bedeutung|
|---|---|
|**Wissen**|Kenntnis der Technik und der Angriffsziele|
|**Zugang**|Hat er physischen Zugriff? Netzwerkzugang?|
|**Zeit**|Wie viel Zeit steht ihm zur Verfügung?|
|**Know-how**|Technische Fähigkeit|
|**Motivation**|Wie motiviert (staatlich? Hobby?)|

Je **höher die Stufe**, desto **fortgeschrittener muss ein Produkt abgesichert sein**, um als sicher zu gelten.

### ✅ Zusammenfassung: Common Criteria

|Begriff|Erklärung|
|---|---|
|**CC**|Standard zur Sicherheitsbewertung von IT-Produkten|
|**EAL1-7**|Bewertungsstufen - je höher, desto aufwendiger|
|**AVA_VAN**|Teststufen für Schwachstellenanalyse|
|**CEM-Dimensionen**|Wie stark/mächtig ist der Angreifer|

### 🧠 Verbindung zum Rest der Sicherheitskonzepte

|Konzept|Verbindung zu SDL/CC|
|---|---|
|Secure Coding|Teil von SDL|
|Statische Analyse|Wird in SDL & CC genutzt|
|Risikobewertung|Fließt in AVA_VAN und SDL-Planung ein|
|Access Control / ACLs|Werden in Sicherheitsanforderungen & Evaluation berücksichtigt|
|Kryptographie|Muss in CC-Produkten dokumentiert & begründet sein|

---

## 🔐 **12. Kryptographie**

- **Symmetrisch:** Ein Schlüssel für Ver- und Entschlüsselung (z. B. AES = Advanced Encryption Standard)
- **Asymmetrisch:** Zwei Schlüssel (öffentlich/privat, z. B. RSA).
- **Hybrid:** Kombination (z. B. bei HTTPS).
- **One-Time-Pad:** Theoretisch perfekt sicher, aber unpraktisch.
- **Verwendung von Zufallszahlen:** z. B. Schlüsselerzeugung, Nonce

### 🔑 Symmetrische Kryptographie
### ▶️ Prinzip:
> **Ein Schlüssel** zum Ver- **und** Entschlüssel
🔐 **Beide Seiten müssen denselben geheimen Schlüssel kennen.**

### 🧠 Eigenschaften:
- Sehr schnell
- Geeignet für große Datenmengen
- Schlüsselverteilung ist die Schwachstelle

---
### 🗝️ Asymmetrische Kryptographie

### ▶️ Prinzip:
> Zwei Schlüssel:
> - **Öffentlicher Schlüssel** (zum Verschlüsseln oder Prüfen)
> - **Privater Schlüssel** (zum Entschlüsseln oder Signieren)

Nur der Besitzer des **privaten Schlüssels** kann die Nachricht entschlüsseln oder eine Signatur erzeugen.

#### 🧠 Eigenschaften:

- Keine gemeinsame Schlüsselverteilung nötig
- Langsamer als symmetrisch
- Ermöglicht **Digitale Signaturen**

---
### 🔀 Hybride Kryptosysteme

> Kombinieren **symmetrisch + asymmetrisch**, um das Beste aus beiden Welten zu nutzen.

🛠️ **Typisch in der Praxis**:
- **Asymmetrisch** für sicheren Schlüsselaustausch
- Danach: **Symmetrisch** für schnellen Datentransfer
    

#### 📦 Beispiel: **HTTPS (TLS)**

1. Browser(Client) → Server: Fragt Zertifikat an
2. Browser(Client) generiert geheimen Session-Key
3. Client schickt ihn asymmetrisch verschlüsselt an Server(z. B. mit RSA(Rivest Shamir Adleman))
4. Server kann Verbindung nun über symmetrische Verschlüsselung laufen lassen (z. B. AES)

#### 🔎 Details zum Schlüsselaustausch
#### 🔐 RSA-Modus (älter, aber einfach):

- Client erzeugt Session-Key → verschlüsselt ihn mit RSA
- Server entschlüsselt ihn mit seinem privaten Schlüssel
    

#### 🧮 ECDHE-Modus (moderner):

- Beide Seiten generieren temporäre elliptische Schlüsselpaare
- Nutzen **Diffie-Hellman über elliptische Kurven** (ECDHE)
- Vorteile:
    - **Perfect Forward Secrecy (PFS)** → selbst wenn der private Schlüssel geleakt wird, sind alte Sessions **weiterhin sicher**
        
➡️ Moderne Browser + Server **nutzen immer ECDHE** für mehr Sicherheit

---

## 🧨 One-Time-Pad (OTP)

Das **One-Time Pad** ist die **einzige Verschlüsselungsmethode, die mathematisch 100 % sicher ist** - aber **praktisch kaum nutzbar**.
### 🧠 Wie funktioniert’s?

1. Du hast einen Schlüssel (Pad), der:
    - **genauso lang ist wie die Nachricht**
    - **wirklich zufällig ist** (nicht pseudorandom!)
    - **nur einmal verwendet wird**
        
2. Du verschlüsselst mit **XOR**
    
    `Ciphertext = Nachricht XOR Schlüssel`
    

Zum Entschlüsseln machst du wieder:

`Nachricht = Ciphertext XOR Schlüssel`
### ✅ Vorteile:

|Vorteil|Warum?|
|---|---|
|**Perfekte Sicherheit**|Wenn die Bedingungen erfüllt sind, ist das Verfahren **nicht zu knacken**, selbst mit unendlich Rechenleistung|
|**Einfaches Verfahren**|Nur XOR, keine komplizierten Algorithmen|

### ❌ Nachteile:

|Problem|Warum es unpraktisch ist|
|---|---|
|**Schlüsselverteilung**|Schlüssel muss geheim und **sicher übermittelt werden** - genauso lang wie die Nachricht|
|**Kein Wiederverwenden erlaubt**|Sonst angreifbar (bekannt als „Two-Time Pad“-Angriff)|
|**Kein Key Management möglich**|Z. B. für Millionen Nutzer nicht praktikabel|

➡️ Wird **nur in der Spionage oder bei diplomatischen Missionen** verwendet - mit **physisch übergebenen Schlüsselbüchern**

---

### 🔐 Beispiel: Nonce

> „Number used once“ - eine einmalig verwendete Zufallszahl in einem Protokoll

➡️ Wird z. B. beim Login oder in Netzwerkprotokollen genutzt, um sicherzustellen:
- **Anfragen sind frisch**
- **Es wird nichts wiederholt oder aufgezeichnet**


**Beispiel:**
- Server schickt Nonce: `723984`
- Client antwortet mit: `Signatur(Nutzername + Passwort + Nonce)`

→ Wenn ein Angreifer das mitschneidet, **nützt es ihm nichts beim nächsten Versuch**