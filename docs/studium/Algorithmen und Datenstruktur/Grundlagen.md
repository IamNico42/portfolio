---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
tags:
  - Course/
---

# 📃 Algorithmen und Datenstruktur

---
## Einführung in Algorithmen und Datenstrukturen

Ein Algorithmus ist eine systematische Methode zur Lösung eines Problems in endlich vielen Schritten. Er kann als Rezept oder Anleitung verstanden werden.

Eine **Datenstruktur** ist eine Möglichkeit, Daten effizient zu speichern und zu organisieren.
 
---


## **🔍 2. Suchalgorithmen**

### **2.1 Lineare Suche**

- Die einfachste Methode zur Suche in einer Liste.
- Durchläuft alle Elemente nacheinander.
- Laufzeit: **O(n)** im Worst Case.

=== "🔍 Pseudo-Code"

    ```pseudo
    FUNKTION lineare_suche(arr, ziel):
    FÜR jedes Element i in arr:
        WENN arr[i] == ziel:
            GIB i zurück // Index des gesuchten Elements
        GIB -1 zurück // Falls Element nicht gefunden
    ```

=== "📝 C-Code"

    ```c
    // Lineare Suche in einem Array
    // n=Array Size
    int lineare_suche(int arr[], int n, int ziel) {
        for (int i = 0; i < n; i++) {
            if (arr[i] == ziel)
                return i;  // Index des gefundenen Elements
        }
        return -1;  // Nicht gefunden
    }
    ```

=== "☕ Java-Code"

    ```java
    // Lineare Suche in einem Array
    public static int lineareSuche(int[] arr, int ziel) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == ziel) {
                return i;  // Index des gefundenen Elements
            }
        }
        return -1;  // Nicht gefunden
    }
    ```

=== "🐍 Python-Code"

    ```python
    # Lineare Suche in einer Liste
    def lineare_suche(arr, ziel):
        for i in range(len(arr)):
            if arr[i] == ziel:
                return i  # Index des gefundenen Elements
        return -1  # Nicht gefunden
    ```

![[binary_search.svg]]

---
## **🗃️ 3.  Sortieralgorithmen**

### **3.1 Bubble Sort**

- Vergleicht benachbarte Elemente und vertauscht sie.
- Sehr ineffizient bei großen Datenmengen: **O(n²)** Laufzeit.

#### 🔢 **Schritt-für-Schritt**

1. Durchlaufe die Liste mehrfach.
2. Vergleiche benachbarte Elemente.
3. Tausche sie, falls das linke größer ist als das rechte.
4. Wiederholen, bis keine Vertauschung mehr nötig ist.
=== "🔍 Pseudo-Code"

    ```pseudo
    FUNKTION bubble_sort(arr):
    FÜR i von 0 bis Länge(arr) - 1:
        FÜR j von 0 bis Länge(arr) - i - 1:
            WENN arr[j] > arr[j+1]:
                TAUSCHE arr[j] und arr[j+1]
    ```

=== "📝 C-Code"

    ```c
	void bubble_sort(int arr[], int n) { 
	    for (int i = 0; i < n - 1; i++) {
	        for (int j = 0; j < n - i - 1; j++) {
	            if (arr[j] > arr[j + 1]) {
	                // Elemente tauschen
	                int temp = arr[j];
	                arr[j] = arr[j + 1];
	                arr[j + 1] = temp;
	            }
	        }
	    }
	}
    ```

=== "☕ Java-Code"

    ```java
    // Bubble Sort in Java
	public static void bubbleSort(int[] arr) {
	    int n = arr.length;
	    for (int i = 0; i < n - 1; i++) {
	        for (int j = 0; j < n - i - 1; j++) {
	            if (arr[j] > arr[j + 1]) {
	                // Elemente tauschen
	                int temp = arr[j];
	                arr[j] = arr[j + 1];
	                arr[j + 1] = temp;
	            }
	        }
	    }
	}
    ```

=== "🐍 Python-Code"

    ```python
    # Bubble Sort in Python
	def bubble_sort(arr):
	    n = len(arr)
	    for i in range(n):
	        for j in range(0, n - i - 1):
	            if arr[j] > arr[j + 1]:
	                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    ```
![[bubblesort.svg]]
---
### **3.2 Quicksort**

- Ein effizienter **Divide & Conquer** Algorithmus.
- Wählt ein **Pivot-Element**, partitioniert die Liste und sortiert rekursiv.
- Laufzeit: **O(n log n)** im Durchschnitt.

#### 🚀 **Schritt-für-Schritt**

1. Wähle ein Pivot-Element (z. B. das letzte Element).
2. Partitioniere die Liste:
    - Elemente **kleiner** als Pivot.
    - Das **Pivot-Element**.
    - Elemente **größer** als Pivot.
3. Rufe Quicksort rekursiv für die beiden Partitionen auf.
=== "🔍 Pseudo-Code"

    ```pseudo
    FUNKTION quicksort(arr, low, high):
    WENN low < high:
        pivot = PARTITION(arr, low, high)
        quicksort(arr, low, pivot - 1)
        quicksort(arr, pivot + 1, high)

    ```

=== "📝 C-Code"

    ```c
	#include <stdio.h>

	void swap(int *a, int *b) {
	    int temp = *a;
	    *a = *b;
	    *b = temp;
	}
	
	int partition(int arr[], int low, int high) {
	    int pivot = arr[high];
	    int i = (low - 1);
	    for (int j = low; j < high; j++) {
	        if (arr[j] < pivot) {
	            i++;
	            swap(&arr[i], &arr[j]);
	        }
	    }
	    swap(&arr[i + 1], &arr[high]);
	    return (i + 1);
	}
	
	void quicksort(int arr[], int low, int high) {
	    if (low < high) {
	        int pi = partition(arr, low, high);
	        quicksort(arr, low, pi - 1);
	        quicksort(arr, pi + 1, high);
	    }
	}
    ```

=== "☕ Java-Code"

    ```java
    public static void quicksort(int[] arr, int low, int high) {
	    if (low < high) {
	        int pi = partition(arr, low, high);
	        quicksort(arr, low, pi - 1);
	        quicksort(arr, pi + 1, high);
	    }
	}
	
	private static int partition(int[] arr, int low, int high) {
	    int pivot = arr[high];
	    int i = (low - 1);
	    for (int j = low; j < high; j++) {
	        if (arr[j] < pivot) {
	            i++;
	            int temp = arr[i];
	            arr[i] = arr[j];
	            arr[j] = temp;
	        }
	    }
	    int temp = arr[i + 1];
	    arr[i + 1] = arr[high];
	    arr[high] = temp;
	    return i + 1;
	}
    ```
    

=== "🐍 Python-Code"

    ```python
    # Bubble Sort in Python
	def bubble_sort(arr):
	    n = len(arr)
	    for i in range(n):
	        for j in range(0, n - i - 1):
	            if arr[j] > arr[j + 1]:
	                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    ```
In unserem grafischen Beispiel:
``Pivot = Array[Array size / 2]``
![[quicksort.svg]]
---
## 🌳 **4. Bäume**

Ein **Baum** ist eine hierarchische Datenstruktur mit Knoten.  
Der oberste Knoten wird als **Wurzel** bezeichnet.

### **4.1 Binäre Suchbäume (BST)**

- Jeder Knoten hat **höchstens zwei Kinder**.
- Linkes Kind: **kleiner** als der Elternknoten.
- Rechtes Kind: **größer** als der Elternknoten.
- Effizient für **Suchen, Einfügen, Löschen**: **O(log n)**.

#### 🌱 **Einfügen in einen BST**

1. **Leerer Baum:** Das Element wird die Wurzel.
2. **Wert < Knoten:** Gehe nach links.
3. **Wert > Knoten:** Gehe nach rechts.
4. **Finde die richtige Position und füge ein.**


=== "🔍 Pseudo-Code"

    ```pseudo
	FUNKTION einfuegen(knoten, wert):
	    WENN knoten == NULL:
	        GIB neuen Knoten(wert) zurück
	    WENN wert < knoten.wert:
	        knoten.links = einfuegen(knoten.links, wert)
	    ANDERNFALLS:
	        knoten.rechts = einfuegen(knoten.rechts, wert)
	    GIB knoten zurück
    ```

=== "📝 C-Code"

    ```c
	#include <stdio.h>
	#include <stdlib.h>
	
	struct Node {
	    int data;
	    struct Node* left;
	    struct Node* right;
	};
	
	struct Node* newNode(int data) {
	    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
	    node->data = data;
	    node->left = node->right = NULL;
	    return node;
	}
	
	struct Node* insert(struct Node* root, int data) {
	    if (root == NULL) return newNode(data);
	    if (data < root->data)
	        root->left = insert(root->left, data);
	    else
	        root->right = insert(root->right, data);
	    return root;
	}

    ```

=== "☕ Java-Code"

    ```java
	class Node {
	    int data;
	    Node left, right;
	
	    public Node(int item) {
	        data = item;
	        left = right = null;
	    }
	}
	
	public Node insert(Node root, int data) {
	    if (root == null) {
	        root = new Node(data);
	        return root;
	    }
	    if (data < root.data)
	        root.left = insert(root.left, data);
	    else
	        root.right = insert(root.right, data);
	    return root;
	}

    ```

=== "🐍 Python-Code"

    ```python
	class Node:
	    def __init__(self, data):
	        self.data = data
	        self.left = None
	        self.right = None
	
	def insert(root, data):
	    if root is None:
	        return Node(data)
	    if data < root.data:
	        root.left = insert(root.left, data)
	    else:
	        root.right = insert(root.right, data)
	    return root

    ```

![[binary_search_tree.svg]]
---
## **🗃️ 5. Heaps und Prioritätswarteschlangen**

Ein **Heap** ist eine spezielle Binärbaum-Datenstruktur:

- Ein **Min-Heap** hat die Eigenschaft: Der kleinste Wert ist an der Wurzel.
- Ein **Max-Heap** hat die Eigenschaft: Der größte Wert ist an der Wurzel.
### **Heap-Operationen**

- **Einfügen**: Element wird am Ende eingefügt und „nach oben geblubbert“.
- **Entfernen des Minimums**: Wurzel entfernen, letztes Element nach oben setzen und „nach unten sinken“.

### **Max-Heap (Einfügen und Entfernen)**

- **Eigenschaften:**
    - Vollständiger Binärbaum (alle Ebenen sind vollständig gefüllt, außer evtl. der letzten).
    - Elternknoten ist **größer oder gleich** seinen Kindknoten (Max-Heap-Eigenschaft).

####  **Schritt-für-Schritt: Einfügen in einen Max-Heap**

1. Füge das neue Element am **Ende** des Heaps ein.
2. **"Heapify Up"**: Vergleiche das Element mit seinem Elternknoten.
3. Falls es **größer** ist, tausche die beiden. **kleiner** bei **Min-Heap**
4. Wiederholen, bis die Max-Heap-Eigenschaft erfüllt ist.

## **Warum ist die Suche in einem Heap ineffizient?**

In einem Heap gilt die **Heap-Eigenschaft**:

- **Min-Heap:** Eltern ≤ Kinder
- **Max-Heap:** Eltern ≥ Kinder

Das bedeutet:

- **Wir wissen nur**, dass der **Wurzelknoten** der kleinste (Min-Heap) oder größte (Max-Heap) ist.
- **Aber wir wissen nicht**, wie die anderen Elemente zueinander stehen.
- **Keine vollständige Sortierung** → Wir können **nicht gezielt links oder rechts** gehen.

## **Suchstrategien im Heap**

###  **Methode 1: Breitensuche (BFS)**

- **Level für Level** durchsuchen (wie eine Warteschlange).
- Gut, wenn die gesuchte Zahl nah an der Wurzel liegt.

###  **Methode 2: Tiefensuche (DFS)**

- **Rekursiv** nach links und rechts gehen.
- Praktisch, wenn der Baum groß ist.

### **Typische Anwendungsfälle:**

1. **Prioritätswarteschlangen (Priority Queues):**
    - Wenn du Aufgaben nach ihrer **Wichtigkeit** verarbeiten willst.
    - Beispiel: **Betriebssysteme** verwalten Prozesse mit unterschiedlichen Prioritäten.
        - → Immer der **höchste Prioritätsprozess** läuft zuerst (Min-/Max-Heap).
    
2. **Dijkstra-Algorithmus (kürzeste Wege in Graphen):**
    - Heap wird verwendet, um den **nächsten Knoten mit der kürzesten Distanz** schnell zu finden. Mit **Min-Heap**
    - **Ohne Heap wäre dieser Algorithmus viel langsamer.**
    
3. **Heapsort (Sortieralgorithmus):**
    - **Effizienter Sortieralgorithmus** mit $O(n \log n)$ Laufzeit.
    - Besser als Bubble Sort oder Insertion Sort.
    
4. **Echtzeit-Systeme:**
    - **Echtzeitspiele**, Simulationen, Event-Handling → Aufgaben werden nach Priorität sortiert.
    
5. **Median-Findung (Streaming-Daten):**
    - Kombination aus Min-Heap und Max-Heap hilft, den **Median von Datenströmen** effizient zu berechnen.


=== "🔍 Pseudo-Code"

    ```pseudo
	FUNKTION insert(heap, wert):
	    heap.FÜGE_HINZU(wert)
	    index = LETZTER_INDEX(heap)
	    WÄHREND index > 0 UND heap[ELTERN(index)] < heap[index]:
	        TAUSCHE heap[index] UND heap[ELTERN(index)]
	        index = ELTERN(index)

    ```

=== "📝 C-Code"

    ```c
	#include <stdio.h>
	
	// Hilfsfunktion zum Tauschen von zwei Elementen
	void swap(int *a, int *b) {
	    int temp = *a;
	    *a = *b;
	    *b = temp;
	}
	
	// "Heapify"-Funktion für einen Max-Heap
	void heapify(int arr[], int n, int i) {
	    int largest = i;       // Initialisiere das größte Element als Wurzel
	    int left = 2 * i + 1;  // Linkes Kind
	    int right = 2 * i + 2; // Rechtes Kind
	
	    // Vergleiche linkes Kind mit der Wurzel
	    if (left < n && arr[left] > arr[largest])
	        largest = left;
	
	    // Vergleiche rechtes Kind mit dem aktuell größten
	    if (right < n && arr[right] > arr[largest])
	        largest = right;
	
	    // Falls das größte Element nicht die Wurzel ist, tausche sie
	    if (largest != i) {
	        swap(&arr[i], &arr[largest]);
	        heapify(arr, n, largest); // Rekursiv heapify anwenden
	    }
	}
	
	// Heapsort-Algorithmus
	void heapsort(int arr[], int n) {
	    // Max-Heap erstellen
	    for (int i = n / 2 - 1; i >= 0; i--)
	        heapify(arr, n, i);
	
	    // Elemente sortieren
	    for (int i = n - 1; i >= 0; i--) {
	        swap(&arr[0], &arr[i]);  // Wurzel ans Ende verschieben
	        heapify(arr, i, 0);      // Heapify auf den reduzierten Heap anwenden
	    }
	}
	
	// Hilfsfunktion zum Drucken des Arrays
	void printArray(int arr[], int n) {
	    for (int i = 0; i < n; i++)
	        printf("%d ", arr[i]);
	    printf("\n");
	}
	
	int main() {
	    int arr[] = {4, 10, 3, 5, 1};
	    int n = sizeof(arr) / sizeof(arr[0]);
	
	    heapsort(arr, n);
	
	    printf("Sortiertes Array: ");
	    printArray(arr, n);
	
	    return 0;
	}

    ```

=== "☕ Java-Code"

    ```
	    public class HeapSort {
	
	    // Hilfsfunktion zum "Heapify"-Prozess
	    public static void heapify(int[] arr, int n, int i) {
	        int largest = i;           // Wurzel
	        int left = 2 * i + 1;      // Linkes Kind
	        int right = 2 * i + 2;     // Rechtes Kind
	
	        // Linkes Kind größer als Wurzel?
	        if (left < n && arr[left] > arr[largest])
	            largest = left;
	
	        // Rechtes Kind größer als das größte Element?
	        if (right < n && arr[right] > arr[largest])
	            largest = right;
	
	        // Falls das größte Element nicht die Wurzel ist, tauschen
	        if (largest != i) {
	            int temp = arr[i];
	            arr[i] = arr[largest];
	            arr[largest] = temp;
	
	            // Rekursives Heapify
	            heapify(arr, n, largest);
	        }
	    }
	
	    // Heapsort-Algorithmus
	    public static void heapSort(int[] arr) {
	        int n = arr.length;
	
	        // Max-Heap erstellen
	        for (int i = n / 2 - 1; i >= 0; i--)
	            heapify(arr, n, i);
	
	        // Heap sortieren
	        for (int i = n - 1; i > 0; i--) {
	            // Wurzel (größtes Element) ans Ende verschieben
	            int temp = arr[0];
	            arr[0] = arr[i];
	            arr[i] = temp;
	
	            // Heapify auf den verkleinerten Heap anwenden
	            heapify(arr, i, 0);
	        }
	    }
	
	    // Hilfsfunktion zum Ausgeben des Arrays
	    public static void printArray(int[] arr) {
	        for (int i : arr)
	            System.out.print(i + " ");
	        System.out.println();
	    }
	
	    public static void main(String[] args) {
	        int[] arr = {4, 10, 3, 5, 1};
	
	        heapSort(arr);
	
	        System.out.println("Sortiertes Array:");
	        printArray(arr);
	    }
	}
    ```

=== "🐍 Python-Code"

    ```
		# Heapify-Funktion für einen Max-Heap
	def heapify(arr, n, i):
	    largest = i        # Wurzel
	    left = 2 * i + 1   # Linkes Kind
	    right = 2 * i + 2  # Rechtes Kind
	
	    # Linkes Kind größer als Wurzel?
	    if left < n and arr[left] > arr[largest]:
	        largest = left
	
	    # Rechtes Kind größer als das größte Element?
	    if right < n and arr[right] > arr[largest]:
	        largest = right
	
	    # Falls das größte Element nicht die Wurzel ist, tausche
	    if largest != i:
	        arr[i], arr[largest] = arr[largest], arr[i]
	        heapify(arr, n, largest)  # Rekursives Heapify
	
	# Heapsort-Algorithmus
	def heapsort(arr):
	    n = len(arr)
	
	    # Max-Heap erstellen
	    for i in range(n // 2 - 1, -1, -1):
	        heapify(arr, n, i)
	
	    # Heap sortieren
	    for i in range(n - 1, 0, -1):
	        arr[i], arr[0] = arr[0], arr[i]  # Wurzel ans Ende verschieben
	        heapify(arr, i, 0)
	
	# Test des Heapsort
	arr = [4, 10, 3, 5, 1]
	heapsort(arr)
	print("Sortiertes Array:", arr)
    ```

![[min_heap.svg]]