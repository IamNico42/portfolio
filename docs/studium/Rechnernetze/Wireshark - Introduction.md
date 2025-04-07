---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---
1. 5 Erkannte Protokolle nennen
	- UDP
	- SSDP
	- TCP
	- ARP
	- TLSv1.2



#### Schichtenmodell ISO/OSI

Ein HTTP-Paket nutzt folgende Protokolle:
- **HTTP** → Application Layer (Schicht 7)
- **TCP** → Transport Layer (Schicht 4)
- **IP (IPv4 oder IPv6)** → Network Layer (Schicht 3)
- **Ethernet** → Link Layer (Schicht 2)

![[OSI-Model.jpg]]


#### Analyse eines HTTP-Pakets: (Aufgabe 4)

Beispiel:

![[Wireshark_bsp_4.svg]]

#### Filter in Wireshark (Aufgabe 5)

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

