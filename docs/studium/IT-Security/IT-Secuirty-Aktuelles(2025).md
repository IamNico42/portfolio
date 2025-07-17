**Current Attacks**
 _Find a report - that is not older than three months - about a malware attack on a company or public institution in Germany. Describe the attack and how malware was used to overcome security mechanisms and achieve the attacker’s goals. Could the attack or its effects have been prevented? How?_

Die Landespolizei Mecklenburg‑Vorpommern ist laut Innenministerium Opfer eines Hackerangriffs geworden. Betroffen sind Diensthandys … über den Server, der diese Smartphones vernetzt
Ein Hacker-Angriff zielte auf den zentralen Server, der dienstliche Smartphones verwaltet und schützt. Die Angreifer versuchten, Zugriff auf dieses System zu erhalten.
Anfang Juni 2025 (um den 2.-4. Juni wurden die Vorfälle öffentlich)

In der Folge waren viele Diensthandys nicht mehr einsatzbereit. Die Beamt:innen mussten wieder auf analoge Funkgeräte zurückgreifen - teilweise sogar einfache Kulis, um Kennzeichen zu notieren, nachdem digitale Apps ausgefallen waren.

Die Gewerkschaft der Polizei MV sprach schnell eine Warnung aus und forderte von der Landesregierung verstärkte Maßnahmen zur IT-Sicherheit: Modernisierung der Infrastruktur, mehr Schutz für mobile Geräte und zeitnahe Reaktionspläne.

- Öffentlich ist lediglich von einem Hacker-Angriff oder Manipulationsversuch die Rede - keine Hinweise auf Ransomware oder klassisches Malware‑Payload
- Es scheint eher eine Attacke auf die zentrale Serverinfrastruktur gewesen zu sein, möglicherweise kombiniert mit Zugriff auf Anmeldedaten oder Schwachstellen.

Welche Mechnismen würden ein solches Risiko minimieren?
- **Endpoint-Schutz kritischer mobiler Geräte** ist essenziell - gerade bei Polizei-Diensthandys müssen Schutzmechanismen wie MDM (Mobile Device Management)(Black Berry UEM), Zwei-Faktor-Authentifizierung und regelmäßige Sicherheitsupdates vorhanden sein.
- **Redundante Kommunikationssysteme** (z. B. analoge Funkgeräte) sind unerlässlich - digitale Lösungen allein reichen oft noch nicht aus.
- **Frühwarnsysteme und Incident-Response-Pläne** müssen vorhanden sein, damit im Notfall eine schnelle Reaktion möglich ist.
- **Netzwerksegmentierung & Zero‑Trust‑Prinzip**- Trenne MDM-Server/Verwaltungsnetz (VLAN A) strikt vom Mitarbeiternetz (VLAN B).
- **Monitoring & Intrusion Detection** - Definiere Regeln, z. B. für ungewöhnlich viele Login-Versuche, Remote-Wipe-Befehle oder neue Geräteinstallationen. Generiere einen Test-Angriff (Brute‑Force‑Versuch) - und beobachte einen ausgelösten Alarm.


https://konbriefing.com/de-topics/hackerangriff-deutschland.html
https://www.ostsee-zeitung.de/mecklenburg-vorpommern/mecklenburg-vorpommern-hackerangriff-legt-polizeihandys-lahm-2FEWD6V2DVH5XAK4XGKMLYWTPU.html
https://security-network.com/angriffsversuch-auf-dienstliche-smartphones/
https://www.gdp.de/mv/de/stories/2025/06/04062025-versuchter-cyberangriff
https://www.golem.de/news/mecklenburg-vorpommern-hackerangriff-trifft-diensthandys-der-polizei-2506-196815.html


---
### 2.1 Wie viele neue Malware‑Varianten werden täglich gemeldet?

Im **BSI‑Lagebericht 2024** heißt es:

Im Berichtszeitraum wurden täglich durchschnittlich 300 000 neue Schadprogramm‑Varianten bekannt“ (S. 16)(2024)(Die Lage der IT‑Sicherheit in Deutschland 2024). https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Lageberichte/Lagebericht2024.pdf

### 2.2 Was ist ein Botnet, und welches Betriebssystem wird am häufigsten angegriffen?

- **Botnet**: Ein Netzwerk aus kompromittierten Geräten, welche Fernsteuerung ermöglichen und Angriffszwecken (z. B. Spam, DDoS) dienen.(S.15)
- **Häufigstes Zielsystem**: Laut BSI‑Lagebericht 2024 wurde insbesondere **Windows (64‑Bit)** am stärksten angegriffen - hier gab es einen Anstieg von **256 %**. https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Lageberichte/Lagebericht2024.pdf

### 2.3 Welche typischen Aktionen führen Angreifer vor der Ausführung einer Ransomware-Attacke durch?

Im **BSI‑Magazin 2022/02** („Security in Focus“) wird der Ablauf wie folgt beschrieben:

1. Erste Infektion meist über präparierte E‑Mail Anhänge (Phishing).
2. Anschließende Erkundung des Netzwerks - Suche nach offenen oder ungepatchten Servern.
3. Aufbau persistenter Zugänge, um Ransomware zielgerichtet auszurollen. (S20-21)(Kapitel "Digital Exortion With Ransomware") 
https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/Magazin/BSI-Magazin_2022-02.pdf
### 2.4 Welche Schutzmechanismen empfiehlt der IT‑Grundschutz gegen Malware?

Aus dem IT‑Grundschutz‑Kompendium (BSI):

| Maßnahme                 | ID(s)                 | Ebene               |
| ------------------------ | --------------------- | ------------------- |
| Anti-Malware             | OPS.1.1.4             | Basis               |
| Patch-Management         | OPS.1.1.3             | Basis               |
| System Hardening & Tests | OPS.1.1.6 / OPS.1.1.7 | Basis-Standard      |
| Logging & Erkennung      | OPS.1.1.5 / DER.1     | Basis-Standard/Hoch |
| MDM für mobile Endgeräte | SYS.3.2.2             | Basis-Standard/Hoch |
- Diese Anforderungen decken sowohl technische (Antivirus, Updates, Hardening) als auch organisatorische Maßnahmen (Logging, Zugangskontrolle) ab und sind essentiell für umfassende Malware‑Abwehr.
  https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium/IT_Grundschutz_Kompendium_Edition2023.html

---


### 1. **CVE‑2023‑23923** (CVSS 3.1 = 8.2 High)

- **Beschreibung**: Eine Remote-Attacke auf die „Start Page“-Einstellung ermöglichte es Angreifern, die Startseite anderer Nutzer unbefugt festzulegen - potenziell als Sprungbrett für Privilegienausweitung oder Session-Manipulation

- **Betroffene Assets & Schutzziele**:
    - **Assets**: User-Profile/Dashboard-Details; Session-Verwaltung.
    - **Schutzziele**: Confidentiality/Integrität von Benutzereinstellungen bzw. Sitzungsinformationen.
- **Workaround (ohne Patch)**: Deaktiviere oder beschränke die „Start Page“-Option via Admin-Plugin oder konfiguriere Rollen so, dass nur vertrauenswürdige Nutzer diese Einstellung ändern können.
### 2. **CVE‑2023‑5540** (CVSS 3.1 = 8.8 High)

- **Beschreibung**: In Moodle’s IMSCP-Modul (zur Integration von IMS Content Packages) konnten authentifizierte Lehrer oder Manager beliebigen Code auf dem Server ausführen 

- **Betroffene Assets & Schutzziele**:
    - **Assets**: Webanwendung, Serversystem, installierte Pakete.
    - **Schutzziele**: Confidentiality, Integrity, Availability - vollständige Kompromittierung möglich.
- **Workaround**: Deaktiviere das IMSCP-Modul temporär über die Moodle-Administration oder beschränke den Zugriff auf vertrauenswürdige Rollen, bis das Update eingespielt werden kann.

### 3. **CVE‑2023‑35133** (CVSS 3.1 = 7.5 High)

- **Beschreibung**: Eine fehlerhafte Prüfung auf `0.0.0.0` in cURL führte zu einem **SSRF-Risiko** (Server-Side Request Forgery), bei dem interne Systeme von außen angesteuert werden konnten

- **Betroffene Assets & Schutzziele**:
	- **Assets**: Innerhalb des Moodle‑Servers befindliche Mikroservices, interne Netzwerke.
    - **Schutzziele**: Confidentiality - Abfluss sensibler Informationen ins Internet war möglich.
- **Workaround**: Setze Firewall-Regeln, die ausgehende Anfragen vom Moodle-Server zu `0.0.0.0` oder internen IPs blockieren. Alternativ erschwere den SSRF-Exploit durch Proxy-Konfiguration.

### 4. **CVE‑2023‑28329** (CVSS 3.1 = 8.8 High)

- **Beschreibung**: Unsichere Profile-Feldeinstellungen führten zu einer **SQL-Injection**, ausnutzbar durch Lehrer oder Manager via speziell präparierten Bedingungen

- **Betroffene Assets & Schutzziele**:
    - **Assets**: Datenbanken, Nutzerprofile.
    - **Schutzziele**: Confidentiality, Integrity - Datenmanipulation oder -diebstahl möglich.
- **Workaround**: Schränke das Ändern bestimmter Profilfelder ein oder deaktivere die entsprechenden Funktionen bis zum Update.

### 5. **CVE‑2023‑28335** (CVSS 3.1 = 8.8 High)

- **Beschreibung**: Ein CSRF-Schwachpunkt in der Funktion zum Zurücksetzen von Datenbank-Aktivitätsvorlagen ermöglichte es Angreifern, diesen Vorgang über manipulierte Links auszulösen 

- **Betroffene Assets & Schutzziele**:
    - **Assets**: Templates und Konfigurationsdaten.
    - **Schutzziele**: Integrity, Availability - unerwünschte Änderungen oder Datenverlust möglich.
- **Workaround**: Nur vertrauenswürdigen Nutzern das Recht zum Zurücksetzen erlauben, oder den Admin-Link vorerst deaktiviert lassen.
