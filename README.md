# todo-list

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
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