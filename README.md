# todo-list

## Project Setup

```sh
npm install
```

### Compile

```sh
npm run dev
```

# Aufbau

```
NavBar
    Mainblock("Alle")
    Mainblock("Heute")
    Mainblock("Geplant")

    Kategorien
        Text: Kategorien
        Kategorie("Kategorie 1")
        AddKategorie()
    Logo


Content
    Header
        Titel(KomponentenName)
        Buttons
            Filter()
            AddTodo()
    Body(heute)
        Todo(Bezeichnung, Beschreibung, Datum, Status)
    Body(else)
        Datum
            Todo(Bezeichnung, Beschreibung, Datum, Status)
```