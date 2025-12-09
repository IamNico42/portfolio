

## HTTP 1.1 Must Die

[DEF CON 33 - HTTP1.1 MUST DIE - James Kettle](https://www.youtube.com/watch?v=PUCyExOr3sE)

### Wie funktioniert HTTP 1.1

- Request-Grenzen nicht eindeutig
	- Bei HTTP/1.1 muss ein Server entscheiden, „wo endet diese HTTP-Request“ und „wo beginnt die nächste“. Wenn Front‐End und Back-End unterschiedliche Interpretationen haben, entsteht eine Angriffsfläche. 
	- Beispiel: In einem Multi-Server-Setup (Proxy → Origin) kann der Proxy die Länge einer Anfrage anders interpretieren als der Origin. Dadurch kann ein Angreifer eine „zusätzliche“ Anfrage „schmuggeln“ („request smuggling“) und z. B. Sicherheitskontrollen umgehen.
- Mehrere Methoden zur Längenbestimmung - Inkonsistenzen möglich
	- HTTP/1.1 erlaubt z. B. sowohl das `Content-Length`-Header als auch `Transfer-Encoding: chunked` zur Definition, wie viel Body-Daten folgen. Wenn z. B. ein Proxy oder Server beide sieht oder unterschiedlich behandelt, kann es zur Desynchronisation kommen.
- Komplexe moderne Infrastruktur - abgestufte Protokolle
	- Viele Systeme nutzen zwar HTTP/2 zur Kommunikation mit dem Client, aber intern wird noch HTTP/1.1 genutzt. Diese Übergänge erhöhen die Komplexität und Fehleranfälligkeit
- Fundamentaler Protokollfehler laut PortSwigger
	- PortSwigger argumentiert, dass diese Schwachstelle im Protokoll selber verankert ist und damit einfach nicht mehr sicher genug für moderne Webseiten
- Konkrete Auswirkungen
	- eine andere Benutzeranfrage ein-schmuggeln
	- Sessions übernehmen
	- Caches manipulieren
	- Sicherheitsbarrieren z. B. WAF umgehen