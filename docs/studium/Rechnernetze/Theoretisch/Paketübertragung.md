---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---
## **Ende-zu-Ende-Verzögerung**


---

### 🧠 Was ist das?

**Ende-zu-Ende-Verzögerung** ist die gesamte Zeit, die ein einzelnes Datenpaket benötigt, um vom Sender zum Empfänger über mehrere Netzwerk-Abschnitte (Links) zu reisen.

Diese Verzögerung setzt sich aus **zwei Hauptteilen pro Link** zusammen:

### 🔹 **Übertragungsverzögerung (Transmission Delay)**

 Zeit, um ein ganzes Paket „in den Draht zu schieben“ (also zu übertragen)
    $$ t_ü = \frac{\text{Paketgröße (in Bit)}}{\text{Übertragungsrate (in Bit/s)}} $$

---
### 🔹 **Ausbreitungsverzögerung (Propagation Delay)**

 Zeit, die ein Bit braucht, um über die physikalische Strecke zu wandern  $$ t_a = \frac{\text{Strecke}}{\text{Ausbreitungsgeschwindigkeit}} $$

---

### 🔹 **Ende-zu-Ende-Verzögerung (für mehrere Links)**

> Die Summe der Verzögerungen über alle Links hinweg:

$$ t_{\text{gesamt}} = \sum_{i=1}^{n} (t_{ü,i} + t_{a,i}) $$

Oder für genau 3 Links:

$$ t_{\text{gesamt}} = (t_{ü,1} + t_{a,1}) + (t_{ü,2} + t_{a,2}) + (t_{ü,3} + t_{a,3}) $$

---
### 🔹 **Physikalische Länge eines Pakets im Kabel**

 Wie lang ein Paket „räumlich“ ist, während es über ein Medium läuft:
$$
\text{Länge}_{\text{phys}} = t_{ü} \cdot v
$$

- $t_{ü}$​ = Übertragungsverzögerung
- $v$ = Ausbreitungsgeschwindigkeit


---

### 🔹 **Durchsatz (Throughput)**

Effektive Datenmenge pro Sekunde, oft durch den langsamsten Link begrenzt:

$Durchsatz=min⁡(Link1,Link2,…,Linkn)$


---

### 📦 Beispiel direkt aus der Aufgabe:

|Link|Übertragungsrate|Länge|Ausbreitungsgeschwindigkeit|
|---|---|---|---|
|1|60 Mbps|15 m|300 000 km/s|
|2|25 Mbps|250 m|200 000 km/s|
|3|20 Gbps|10 000 m|250 000 km/s|

**Paketgröße:** 1500 Byte = `1500 × 8 = 12 000 Bit`

---
#### 🔍 Berechne die Verzögerungen:(1.1)
#### 🔹 Link 1
$$ t_{ü1} = \frac{12\,000}{60\,000\,000} = 0{,}0002\,\text{s} = 0{,}2\,\text{ms} $$ $$ t_{a1} = \frac{15}{300\,000\,000} = 5 \cdot 10^{-8}\,\text{s} = 0{,}00005\,\text{ms} $$
---
#### 🔹 Link 2
$$ t_{ü2} = \frac{12\,000}{25\,000\,000} = 0{,}00048\,\text{s} = 0{,}48\,\text{ms} $$$$ t_{a2} = \frac{250}{200\,000\,000} = 1{,}25 \cdot 10^{-6}\,\text{s} = 0{,}00125\,\text{ms} $$
---
#### 🔹 Link 3
$$ t_{ü3} = \frac{12\,000}{20\,000\,000\,000} = 6 \cdot 10^{-7}\,\text{s} = 0{,}0006\,\text{ms} $$ $$ t_{a3} = \frac{10\,000}{250\,000\,000} = 4 \cdot 10^{-5}\,\text{s} = 0{,}04\,\text{ms} $$
---
### 🔚 Gesamte Ende-zu-Ende-Verzögerung(1.2)


$$ t_{\text{gesamt}} = (0{,}2 + 0{,}00005) + (0{,}48 + 0{,}00125) + (0{,}0006 + 0{,}04) = 0{,}7219\,\text{ms} $$

Die Ende-zu-Ende-Verzögerung beträgt **0,7219 ms**.

---
### 🔁 Hängt das von der Reihenfolge der Links ab?(1.2)

Nein. Bei einem Paket ist die Reihenfolge nicht relevant. Bei mehreren Paketen ist es abhängig weil es definiert wo es anfängt sich zu stauen, aber bei  Zeit von Sender bis Empfänger reicht schon ein einziger Link der langsamer ist um die gesamte Übertragung zu verzögern

---
## **Paket-Burst & Reihenfolge**


### 📦 20 Pakete direkt nacheinander (Packet Burst)

Frage: Wie lange dauert die Übertragung von **20 Paketen**, wenn du sie direkt hintereinander losschickst?

---

### 🧠 Idee:

Nur das **erste Paket** muss die ganze Ende-zu-Ende-Verzögerung durchlaufen.  
Die **anderen 19** kommen **nach und nach** hinterher – mit einem Abstand entsprechend der **langsamsten Übertragungsverzögerung.**

---

### 🔍 Relevant ist:

Welcher Link ist der langsamste beim „Reinschieben“?  
→ Das ist **Link 2: 25 Mbps**

$$ t_{ü,\text{max}} = \frac{12\,000}{25\,000\,000} = 0{,}00048 \, \text{s} = 0{,}48\,\text{ms} $$

---

### 📐 Gesamtzeit für 20 Pakete:

| Was?                                                    | Warum?                                                                      |
| ------------------------------------------------------- | --------------------------------------------------------------------------- |
| **tümax** = max. Übertragungsverzögerung auf einem Link | Weil der langsamste Link bestimmt, wie schnell du neue Pakete senden kannst |
| **Bitrate immer in Bit/s**                              | Mbps = "Mega _bit_ per second" = $×10^6$                                    |
| **Paketgröße in Bit umrechnen**                         | 1 Byte = 8 Bit                                                              |
| **Gesamtzeit bei Bursts:**                              | t-gesamt                                                                    |
$$ t_{\text{gesamt}} = t_{\text{e2e}} + (N - 1) \cdot t_{ü,\text{max}} $$ $$ t_{\text{gesamt}} = 0{,}7219 + 19 \cdot 0{,}48 = 0{,}7219 + 9{,}12 = 9{,}8419\,\text{ms} $$

✅ **Antwort Aufgabe 1.3**:  
Gesamtübertragungsdauer für den Burst = **9,84 ms**

---

🔁 **Hängt das auch von der Reihenfolge der Links ab?**

> Ja, **noch stärker als bei einem einzelnen Paket.**  
> Denn: Der erste (langsamste) Link bestimmt, wie schnell du **weitere Pakete nachschieben kannst.**


---
## **Durchsatz und Paketverlust(Klausuraufgabe)**

![[PhysLänge-RN.svg]]

4)

|Zeit (ms)|Größe (B)|Verzögerung (ms)|
|---|---|---|
|0.0|900|6|
|2.0|600|4|
|3.0|900|6|
|4.0|900|6|
|5.0|900|6|
|7.0|1200|8|
|9.0|900|6|
|24.0|1200|8|
|26.0|1200|8|
|27.0|1200|8|

| Zeit | Ereignis | Größe / Verzögerung | Blockiert | Puffer (Pakete)    | Übertragungsende |
| ---- | -------- | ------------------- | --------- | ------------------ | ---------------- |
| 0    | A        | 900 / 6             | Nein      | -                  | 6                |
| 2    | A        | 600 / 4             | Nein      | [600]              |                  |
| 3    | A        | 900 / 6             | Nein      | [600, 900]         |                  |
| 4    | A        | 900 / 6             | Nein      | [600, 900, 900]    |                  |
| 5    | A        | 900 / 6             | **Ja**    | [600, 900, 900]    | ❌ verloren       |
| 6    | D        |                     | -         | [900, 900]         | nächste Ende: 10 |
| 7    | A        | 1200 / 8            | Nein      | [900, 900, 1200]   |                  |
| 9    | A        | 900 / 6             | **Ja**    | [900, 900, 1200]   | ❌ verloren       |
| 10   | D        |                     | -         | [900, 1200]        | nächste Ende: 16 |
| 16   | D        |                     | -         | [1200]             | nächste Ende: 24 |
| 24   | A        | 1200 / 8            | Nein      | [1200, 1200]       | Ende: 32         |
| 26   | A        | 1200 / 8            | Nein      | [1200, 1200, 1200] |                  |
| 27   | A        | 1200 / 8            | **Ja**    | [1200,1200,1200]   | ❌ verloren       |