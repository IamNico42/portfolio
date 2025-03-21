---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---
## **📌 Einführung: Prozesse und Scheduling

🔹 **Kapitel 4 – Prozesse**

- Ein **Prozess** ist ein laufendes Programm mit einem eigenen Adressraum.
- Prozesse haben **Zustände**: **running, ready, waiting**.

🔹 **Kapitel 5 – Process API**

- Prozesse werden mit **`fork()`** erstellt und mit **`exec()`** ersetzt.
- `wait()` sorgt dafür, dass ein Elternprozess auf sein Kind wartet.

🔹 **Kapitel 6 – Direct Execution**

- Ein Programm läuft direkt auf der CPU, aber das Betriebssystem verwaltet den Zugriff auf Ressourcen über **System Calls**.

🔹 **Kapitel 7 – CPU Scheduling**

- **First-Come, First-Served (FCFS)** → einfacher, aber unfair.
- **Round Robin (RR)** → jeder Prozess erhält eine feste Zeitscheibe.
- **Shortest Job First (SJF)** → optimale Wartezeiten, aber schwer vorherzusagen.

🔹 **Kapitel 8 – Multi-Level Feedback Queue (MLFQ)**

- Dynamisches Scheduling, das Prozesse priorisiert, die schnell reagieren müssen.

🔹 **Kapitel 9 – Lottery Scheduling**

- Threads erhalten **"Lottoscheine"**, und einer wird zufällig zur Ausführung ausgewählt.

🔹 **Kapitel 10 – Multi-CPU Scheduling**

- Symmetrisches und asymmetrisches Multi-Prozessor-Scheduling.

🔹 **Kapitel 11 – Zusammenfassung der Scheduling-Strategien**

- Vergleich aller Scheduling-Algorithmen und deren Effizienz.

---

## **📌 Teil 2: Speicherverwaltung (Kapitel 12–24)**

🔹 **Kapitel 12 – Adressräume**

- Jeder Prozess hat seinen eigenen **virtuellen Adressraum** (Heap, Stack, Code, Data).

🔹 **Kapitel 13 – Address Spaces & Code**

- Trennung von **virtuellen und physischen Adressen**.
- OS verwaltet den Speicher mit **Paging oder Segmentierung**.

🔹 **Kapitel 14 – Memory API**

- **Heap-Management**: `malloc()`, `free()` und Speicherallokatoren.

🔹 **Kapitel 15 – Address Translation**

- **MMU (Memory Management Unit)** übersetzt virtuelle in physische Adressen.

🔹 **Kapitel 16 – Segmentation**

- Speicher wird in **logische Segmente** unterteilt.
- **Problem**: Fragmentierung.

🔹 **Kapitel 17 – Free Space Management**

- **Buddy-System** & **Bitmap-Allokatoren** verwalten freien Speicherplatz.

🔹 **Kapitel 18 – Einführung in Paging**

- **Paging** unterteilt den Speicher in **gleich große Seiten**.
- Vorteile: Kein Fragmentierungsproblem wie bei Segmentierung.

🔹 **Kapitel 19 – Translation Lookaside Buffer (TLB)**

- **TLB (Translation Lookaside Buffer)** speichert häufig verwendete Adressübersetzungen.

🔹 **Kapitel 20 – Fortgeschrittene Page Tables**

- **Multi-Level Page Tables** sparen Speicherplatz.
- **Inverted Page Tables** speichern nur verwendete Seiten.

🔹 **Kapitel 21 – Swapping: Mechanismen**

- **Swapping** lagert inaktive Prozesse auf die Festplatte aus.

🔹 **Kapitel 22 – Swapping: Policies**

- **Wann und wie oft** Prozesse geswappt werden, beeinflusst die Performance.

🔹 **Kapitel 23 – Vollständige VM-Systeme**

- Kombiniert **Paging, TLBs und Swapping** für ein effizientes Speichersystem.

🔹 **Kapitel 24 – Zusammenfassung der Speicherverwaltung**

- Vergleich von **Paging, Swapping und Segmentierung**.

---

## **📌 Teil 3: Concurrency & Synchronisation (Kapitel 25–34)**

🔹 **Kapitel 25 – Einführung in Concurrency**

- Mehrere Threads können parallel laufen, müssen aber synchronisiert werden.

🔹 **Kapitel 26 – Thread API**

- **POSIX-Threads (`pthread`)** → `pthread_create()`, `pthread_join()`.

🔹 **Kapitel 27 – Locks**

- **Mutexe (`pthread_mutex_lock`)** verhindern Race Conditions.

🔹 **Kapitel 28 – Locks mit Spinlocks**

- **Spin Locks** vermeiden teure Kontextwechsel, verbrauchen aber CPU-Zeit.

🔹 **Kapitel 29 – Gesperrte Datenstrukturen**

- **Fine-Grained Locking**: Mehrere Locks für verschiedene Teile der Datenstruktur.

🔹 **Kapitel 30 – Bedingungsvariablen**

- **`pthread_cond_wait()`** blockiert Threads, bis eine Bedingung erfüllt ist.

🔹 **Kapitel 31 – Semaphoren**

- **`sem_wait()`, `sem_post()`** kontrollieren den Zugriff auf mehrere Ressourcen.

🔹 **Kapitel 32 – Race Conditions & Bugs**

- Typische Fehler: **Deadlocks**, **Starvation**, **Lost Updates**.

🔹 **Kapitel 33 – Event-basierte Concurrency**

- Alternative zu Threads: **asynchrone Ereignisbehandlung**.

🔹 **Kapitel 34 – Zusammenfassung der Synchronisationstechniken**

- Vergleich: **Mutexe, Semaphoren, Bedingungsvariablen, Spinlocks**.


## 📌**Quellen**

[🔗 O-STEP Book](https://pages.cs.wisc.edu/~remzi/OSTEP)