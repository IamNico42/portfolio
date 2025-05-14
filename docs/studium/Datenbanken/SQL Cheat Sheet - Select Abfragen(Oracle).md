---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---
📌 1. Grundstruktur von SELECT-Abfragen


```sql
SELECT spalten
FROM tabelle
[JOIN andere_tabelle ON bedingung]
[WHERE filter_bedingung]
[GROUP BY gruppierung]
[HAVING gruppenbedingung]
[ORDER BY sortierung [ASC|DESC]];
```

---

## 📊 2. Wichtige **Aggregatsfunktionen**

| Funktion        | Beschreibung                | Beispiel           |
| --------------- | --------------------------- | ------------------ |
| `COUNT(*)`      | Zählt alle Zeilen           | `COUNT(*)`         |
| `COUNT(spalte)` | Zählt nur NICHT-NULL Werte  | `COUNT(b.Sterne)`  |
| `SUM(spalte)`   | Summiert numerische Spalten | `SUM(PreisProTag)` |
| `AVG(spalte)`   | Durchschnitt (ign. NULL)    | `AVG(b.Sterne)`    |
| `MIN(spalte)`   | Kleinster Wert              | `MIN(PreisProTag)` |
| `MAX(spalte)`   | Größter Wert                | `MAX(Sterne)`      |

---

## 🔗 3. Joins (Tabellen verknüpfen)

```
-- Inner Join (nur passende Zeilen)
SELECT ...
FROM A
JOIN B ON A.id = B.a_id;

-- Left Join (auch Zeilen aus A ohne Treffer in B)
SELECT ...
FROM A
LEFT JOIN B ON A.id = B.a_id;
```

---

## 🧠 4. GROUP BY + HAVING – Gruppieren & Filtern

```
-- Durchschnitt pro Wohnung (nur bei Bewertungen > 4)
SELECT FERIENWOHNUNG_ID, AVG(Sterne)
FROM Buchung
GROUP BY FERIENWOHNUNG_ID
HAVING AVG(Sterne) > 4;
```

- `GROUP BY`: gruppiert Zeilen (z. B. pro Kunde, Wohnung, Land)
- `HAVING`: filtert Gruppen (wie WHERE, aber nach Gruppierung)


---

## 🚫 5. `NOT IN` vs. `NOT EXISTS` (um „nicht enthaltene“ Fälle zu finden)

### ✅ Ferienwohnungen ohne Buchungen

```
SELECT *
FROM Ferienwohnung f
WHERE NOT EXISTS (
    SELECT 1 FROM Buchung b WHERE b.FERIENWOHNUNG_ID = f.ID
);
```

Oder auch:

```
SELECT *
FROM Ferienwohnung f
WHERE NOT EXISTS (
    SELECT 1 FROM Buchung b WHERE b.FERIENWOHNUNG_ID = f.ID
);
```