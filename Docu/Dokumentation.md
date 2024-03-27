# Dokumentation

## Stores
categoryStore.js

```txt
Pinia Store der die Kategorien verwaltet
```
---
todoStore.js
```txt
Pinia Store der die Todo's verwaltet
```
---
useLocalStorageStore.js
```txt
Pinia Store der den "ShowAbgeschlossene" Filter verwaltet
```

## Components

AddCategoryModal
```txt
Modal, das sich öffnet wenn man eine neue Kategorie erstellt.
Hier findet man auch die Logik zum Erstellen der Kategorie
```
---

Alle
```txt
Hier werden alle Todo's nach Datum gruppiert und für jedes einzigartige Datum wird ein <Datum></Datum> erstellt
```
---

Box
```txt
Das Html von den "Kategorien" 'Alle', 'Geplant' und 'Heute'
```
---

Content
```txt
Hier wird definiert, welcher Komponent angezeigt wird und was für ein Titel im Header steht
```
---

Contentmodal_edit
```txt
Das Bearbeitungs-Modal von den Todo's 
Hier ist auf die Logik des Updates gelagert.
```
---

Contentmodal
```txt
Das Modal fürs Hinzufügen von den Todo's 
Hier ist auf die Logik des Hinzufügens gelagert.
```
---

Datum
```txt
Hier wird für jeden Todo an einem angegebenen Datum ein TodoComponent erstellt
```
---

EditCategoryModal
```txt
Modal, das sich öffnet wenn man eine Kategorie bearbeitet.
Hier findet man auch die Logik zum bearbeiten der Kategorie
```
---

FilterModal
```txt
Das Modal, wo man die Filter setzen kann.
Hier wird der Status des Filters auch gespeichert
```
---

Geplant
```txt
Hier werden alle zukünftigen Todo's nach Datum gruppiert und für jedes einzigartige Datum wird ein <Datum></Datum> erstellt
```
---

Header
```txt
Hier wird der Header mit den Buttons und dem Komponent Titel erstellt.
```
---

Heute
```txt
Hier wird für jedes Heutige Todo ein TodoComponent erstellt
```
---

Kategorie
```txt
Hier werden alle Todo's, die in einer spezifischen Kategorie sind, nach Datum gruppiert und für jedes einzigartige Datum wird ein <Datum></Datum> erstellt
```
---

NavBar
```txt
Hier wird die NavBar mit den Kategorien geladen.
Zusätzlich wird hier auch Content geladen
```
---

SearchModal
```txt
Das Modal mit dem Search- Input
```
---

SearchModalContent
```txt
Das Modal mit dem Suchergebnis
```
---

TodoComponent
```txt
Erstellt ein Todo mit allen Modals die es benötigt.
```

## Bilder
Bilder zu allen Features finden Sie [hier](Bilder.md)

## Packages

Alle Packages die wir genutzt haben:

|Name|Erklärung|Webseite|
|---|---|---|
|Font Awesome|Icons|[fontawesome.com](https://fontawesome.com)|
|Bootstrap|CSS Library|[getbootstrap.com](https://getbootstrap.com)|
|jQuery|JS Library|[jquery.com](https://jquery.com)|