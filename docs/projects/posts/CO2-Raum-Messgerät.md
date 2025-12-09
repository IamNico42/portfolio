---
draft: true
date: 2025-01-30
slug: CO2-Raum-Messgerät
categories:
  - MESSGERÄT
  - CO2
tags:
  - CO2
  - MESSGERÄT
---
# 📟 DIY CO₂-Messgerät – Eigenbau von Hardware bis Software

Ein selbst entwickeltes CO₂-Messgerät mit eigener Hardware und Software. Ziel ist es, ein möglichst minimalistisches System zu entwerfen, das CO₂-Werte erfasst, verarbeitet und an eine Reihe von LED's die darstellen ob Wert im kritischen Bereich oder in Ordnung, ausgibt. Dabei wird ein eigener Mikrocontroller entworfen und möglicherweise ein einfaches Betriebssystem entwickelt.

<!-- more -->


# 🚀 CO₂-Messgerät – Von der Idee zum eigenen System

---

## 🧾 Projektbeschreibung

Ein selbst entwickeltes CO₂-Messgerät mit eigener Hardware und Software. Ziel ist es, ein möglichst minimalistisches System zu entwerfen, das CO₂-Werte erfasst, verarbeitet und an eine Reihe von LED's die darstellen ob Wert im kritischen Bereich oder in Ordnung, ausgibt. Dabei wird ein eigener Mikrocontroller entworfen und möglicherweise ein einfaches Betriebssystem entwickelt.

---

## 📢 Projektinformationen

**Erstellt:** {{date: DD-MM-YYYY}} {{time}}  
**Deadline:**  
**Hibernating:**  
**Erwartetes Fertigstellungsdatum:**  
**Abgeschlossen:**  
**Typ:** DIY / Embedded System  
**Tags:** CO₂, Mikrocontroller, Embedded Systems, Sensorik, Hardware-Design  
**Plattform:** Eigenbau-Mikrocontroller oder ESP32

---

## 🎯 Ziele

1. 🟢 **Ideales Ergebnis:**
    
    1. Eigenes CO₂-Messgerät mit individuell gebautem Mikrocontroller und ggf. eigenem minimalistischen OS.
    2. Ansteuerung eines CO₂-Sensors mit UART/I²C.
    3. Anzeige der Messwerte auf einem kleinen Display.
    4. Optional: Datenübertragung per WLAN/Bluetooth oder Speicherung auf SD-Karte.
2. 🟠 **Akzeptables Ergebnis:**
    
    1. Fertigstellung eines funktionsfähigen Prototyps mit erfassten CO₂-Werten.
    2. Verwendung eines bereits existierenden Mikrocontrollers (ATmega328P/ESP32) mit selbst programmierter Firmware.
    3. Ausgabe der Daten über eine serielle Schnittstelle oder ein Display.

---

## ❓ Erwartungen

1. 🟢 **Hilfreich für das Projekt:**
    
    1. Solides Hardware-Design mit optimierter Energieversorgung.
    2. Effiziente Firmware für Echtzeitmessungen.
    3. Erweiterbarkeit für zukünftige Features (z. B. Daten-Logging).
2. 🟠 **Mögliche Hürden:**
    
    1. Herausforderungen beim Design einer eigenen Platine und deren Bestückung.
    2. Probleme mit der Genauigkeit oder Kalibrierung des CO₂-Sensors.
    3. Entwicklung eines eigenen Mini-Betriebssystems für Bare-Metal-Programmierung.
3. 👶 **Unterschätzte Schwierigkeiten:**
    
    1. Kommunikationsprotokolle des Sensors korrekt implementieren.
    2. Energieverbrauch optimieren, wenn das Gerät batteriebetrieben laufen soll.
    3. Gehäuse-Design für eine praktikable Nutzung.
4. 👨‍💻 **Technische Erkenntnisse während des Projekts:**
    
    1. Umgang mit Hardware-Design-Tools (z. B. KiCad).
    2. Optimierung von Mikrocontroller-Firmware für minimale Latenz.
    3. Eventuelle Nutzung von RTOS (z. B. FreeRTOS für den ESP32).

---

## ✅ Aufgaben

- [ ]  **Hardware-Design:** Auswahl von Mikrocontroller, Sensor, Display und Stromversorgung.
- [ ]  **Schaltplan & PCB-Design:** Entwurf der Platine mit KiCad/Eagle.
- [ ]  **Firmware-Entwicklung:** Sensor-Ansteuerung per UART/I²C, Anzeige der Messwerte.
- [ ]  **Testphase & Optimierung:** Genauigkeit der Messungen prüfen und Kalibrierung durchführen.
- [ ]  **Optional:** Implementierung einer Datenübertragung (WLAN/Bluetooth).
- [ ]  **Dokumentation & Blogpost:** Schritt-für-Schritt-Prozess mit Bildern festhalten.

---

## 📦 Ressourcen

- ATmega328P oder ESP32 als Mikrocontroller
- CO₂-Sensor (MH-Z19C, SCD30, SCD41 oder ähnlicher)
- OLED-/LCD-Display für die Messwertanzeige
- KiCad/Eagle für PCB-Design
- Programmierung in C/C++ (Bare-Metal) oder mit FreeRTOS

---

## 📂 Projekt-Logs

- **Tag 1:** Auswahl der Komponenten und erste Tests mit dem CO₂-Sensor.
- **Tag 2:** PCB-Design begonnen, erste Simulationen durchgeführt.
- **Tag 3:** Firmware-Grundstruktur erstellt, UART-Kommunikation getestet.
- **Tag 4:** Erste funktionierende Version des Messgeräts, erste Kalibrierung.
- **Tag 5:** Feinschliff & zusätzliche Features (z. B. WLAN-Übertragung).