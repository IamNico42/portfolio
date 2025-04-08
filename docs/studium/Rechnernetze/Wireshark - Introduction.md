---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---

#### **Einführung (Aufgabe3.1)**

1. 5 Erkannte Protokolle nennen
	- UDP
	- SSDP
	- TCP
	- ARP
	- TLSv1.2
#### **Schichtenmodell ISO/OSI(Aufgabe 3.4)**

Ein HTTP-Paket nutzt folgende Protokolle:
- **HTTP** → Application Layer (Schicht 7)
- **TCP** → Transport Layer (Schicht 4)
- **IP (IPv4 oder IPv6)** → Network Layer (Schicht 3)
- **Ethernet** → Link Layer (Schicht 2)

![[OSI-Model.jpg]]


#### Analyse eines HTTP-Pakets: (Aufgabe 4)

Beispiel:

![[Wireshark_bsp_4.svg]]

#### **Filter in Wireshark (Aufgabe 5)**

1. Wie lautet der Filter, mit dem Sie über den TCP-Port HTTPS-Verkehr filtern können?
	- tcp.port == 443

2. Vergleiche HTTP-Verkehr über Filter: **`http`** und über Filter: **`tcp.port == 80`**
	
	- **Filter `http`** zeigt **nur Pakete, bei denen der HTTP-Protokoll-Parser von Wireshark** tatsächlich **HTTP-Inhalte erkennt**.  
	    → Z. B. `GET`, `POST`, `HTTP/1.1 200 OK` usw.
	- **Filter `tcp.port == 80`** zeigt **alle TCP-Pakete, die auf Port 80 laufen**, **auch wenn sie keine erkennbaren HTTP-Inhalte** haben (z. B. Verbindungsaufbau mit `SYN`, `ACK`, Keep-Alive, etc.).	    
	Der HTTP-Filter ist also **protokollbasiert**, während `tcp.port == 80` rein **portbasiert** ist.

3. Es gibt einen Filter `http`, aber keinen Filter `https`. Haben Sie eine Idee warum?
	- HTTPS ist verschlüsselter HTTP-Verkehr über TLS
		- Wird also verschlüsselt und somit nicht mehr lesbar und daher auch kein HTTPS-Filter
	- ABER es gibt `tcp.port == 443`

4. Welcher Filter bewirkt, dass nur Pakete angezeigt werden, die die eigene IP-Adresse als Zieladresse haben?
	- ip.dst == EIGENE IP  



#### Upstream vs Downstream (Aufgabe 6)

Statiskten -> Endpunkte -> IPv4
##### Filter für Downstream (vom Server an dich):

`ip.dst == 192.168.178.48`

##### Filter für Upstream (von dir ins Internet):

`ip.src == 192.168.178.48`

![[wireshark_up_down_stream.svg]]


##### Wie viele IP's haben Daten an mein Rechner gesendet beim Aufruf

Statiskten -> Endpunkte -> IPv4

Wir haben unseren Filter eingestellt und schauen jetzt welche IP-Adressen Tx(Upstream) Pakete an uns gesendet haben. (Alle IP Adressen mit Tx Pakete > 0) = 29 IP's

![[Wireshark-upstream-downstream.svg]]

#### **Über wie viele TCP Sockets hat dein Rechner die Daten empfangen?**

> 🧩 Ein **TCP-Socket** ist eindeutig identifiziert durch:  
> `Quell-IP : Quell-Port` → `Ziel-IP : Ziel-Port`  
> Das heißt: Kombination aus **IP-Adressen und Ports in beide Richtungen.**
> ![[Wireshark-TCP-Sockets.svg]]

- Dadurch, dass wir überall als Quelle unsere eigene IP haben, sind wir der Client
- Nun können wir die Anzahl der Sockets mit unserer eigenen IP zählen
	- 34 Stück


#### **Pakete bei Streams (Aufgabe 7)**