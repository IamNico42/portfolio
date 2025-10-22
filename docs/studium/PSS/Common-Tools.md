---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
  - PSS-Portswigger-Academy
tags:
  - Course/
---
## Pentesting Checklist



## Kali-Tools
### Nmap(Portscan)

```c
sudo nmap -sV -p- -oA juiceshopfulltcp -v3 192.168.249.14
``` 
### Gobuster(Endpunkte anzeigen)

```c
gobuster dir -u http://192.168.249.14:3000/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt --exclude-length 75055 
```
### Sslyze(TLS anzeigen lassen)

```c
sslyze xxx-xx.xxx.net(Hostname)
```
## Open-Source Tool


[SwissKy](https://github.com/swisskyrepo/PayloadsAllTheThings)
Sammlung von Exploits, Payloads, Cheat Sheets.

[Cyber-Chef](https://gchq.github.io/CyberChef/)
Wofür man es nutzt:
- dekodieren/encodieren (Base64, hex, URL-encoding, Base32, etc.)
- schnelle Kryptotools (XOR, AES/RC4-Dekodierung _wenn du den Key hast_)
- Hashing, Prüfsummen, Umwandlung zwischen Formaten (binary↔text)
- Textanalyse / RegEx / Datenextraktion / CSV/JSON-Manipulation
- Forensik/CTF/Prototyping: man baut „Rezepte“ aus einzelnen Schritten (z. B. From Base64 → XOR → UTF-8 Decode).  
    Typische Szenarien: Log-Analyse, Reverse-engineering von Daten, CTF-Challenges, schnelle Debugging-Hilfen beim Protokollieren/Parsing.

[Jason Web Token](https://www.jwt.io/)
Was es ist: ein einfacher JWT-Debugger/Inspector (JSON Web Tokens).  
Wofür man es nutzt:
- Tokenstruktur ansehen (Header.Payload.Signature) - Header und Payload sofort base64url-dekodiert anzeigen
- Claims prüfen (exp, iat, sub, roles, etc.)
- Signatur überprüfen (wenn du das Geheimnis / den öffentlichen Schlüssel hast) - praktisch zum Debuggen von Auth-Implementierungen  
    Typische Szenarien: Backend-Entwicklung, Auth-Debugging, Verständnis/Inspektion von Tokens in APIs oder beim Pentesting (nur legal auf eigenen Systemen).

[Crackstation](https://www.crackstation.net/)
Was es ist: ein Online-Service, der bekannte Passwort-Hashes gegen riesige vorgefertigte Tabellen/Listen abgleicht (ähnlich Rainbow-Table Lookup).  
Wofür man es nutzt:
- verlorene/vergessene Passwörter wiederherstellen (wenn Hash in ihrer DB vorkommt
- prüfen, ob ein Passwort leicht in vorgefertigten Listen gefunden werden kann (Sicherheitscheck)  
    Einschränkungen: funktioniert gut bei kurzen, ungesalzenen Hashes (z. B. MD5, SHA1) und bei häufigen Passwörtern - nicht wirksam bei starken, langen oder gesalzenen Hashes. Für ernsthaftes Cracking (regelbasiert, GPU, gesalzene Hashes) benutzt man Tools wie hashcat oder John the Ripper (lokal, mit Zustimmung).


[SSLYZE](https://www.ssllabs.com/)
Was ist es: Ein Online Tool welches checkt ob das genutzte TLS vom Server den Sicherheitsstandards enstpricht. Das Ganze lässt sich alternativ manuell ausführen mit dem sslyze Befehl von Kali.