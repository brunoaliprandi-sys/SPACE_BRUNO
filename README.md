# SPACE_BRUNO

Esperienza web interattiva ambientata in una navicella spaziale, con cella criogenica, personaggi animati, armeria esplorabile, audio ambientale e pannelli HUD.

Demo web: [brunoaliprandi-sys.github.io/SPACE_BRUNO](https://brunoaliprandi-sys.github.io/SPACE_BRUNO/)

Repository: [github.com/brunoaliprandi-sys/SPACE_BRUNO](https://github.com/brunoaliprandi-sys/SPACE_BRUNO)

## Panoramica

`SPACE_BRUNO` e una scena browser realizzata con HTML, CSS e JavaScript vanilla. Il progetto combina fondali, sprite animati, effetti luminosi, suoni e controlli interattivi per costruire una piccola interfaccia narrativa sci-fi.

La scena include:

- una cella criogenica centrale con Bruno, Donatella e Alieno 1;
- navigazione tra le stanze dei soggetti;
- dossier narrativi e pannelli di stato;
- robot pulizie animato;
- alieno liberabile con animazione di pattugliamento;
- armeria con armi ed equipaggiamento ispezionabili;
- editor interno per regolare posizioni, dimensioni, ombre e LED.

## Come Aprire Il Progetto

Apri direttamente la demo pubblicata con GitHub Pages:

[https://brunoaliprandi-sys.github.io/SPACE_BRUNO/](https://brunoaliprandi-sys.github.io/SPACE_BRUNO/)

Pagina repository:

[https://github.com/brunoaliprandi-sys/SPACE_BRUNO](https://github.com/brunoaliprandi-sys/SPACE_BRUNO)

Oppure eseguilo in locale con un server statico:

```bash
python -m http.server 8097
```

Poi visita:

```text
http://127.0.0.1:8097/
```

## Controlli

- Usa le frecce laterali in alto per cambiare stanza.
- Usa i pulsanti HUD della cella per aprire salute, bio/dossier e cryo.
- Clicca sugli oggetti dell'armeria per aprire la scheda descrittiva.
- Attiva/disattiva l'audio dal pulsante dedicato.
- Nella stanza Alieno, il comando dedicato libera o contiene il soggetto.

## Editor Armeria

L'editor permette di regolare:

- posizione e dimensione di armi/equipaggiamento;
- posizione e dimensione delle ombre;
- numero, posizione, dimensione, luminosita e velocita dei LED;
- esportazione del JSON di configurazione.

Il file di configurazione principale e:

```text
armory-placements.json
```

Il JSON contiene:

- `counts`: numero di oggetti, ombre e LED;
- `items`: coordinate e dimensioni delle armi/equipaggiamento;
- `shadows`: configurazioni delle ombre per i soggetti;
- `flickers`: configurazioni dei LED.

## Struttura

```text
SPACE_BRUNO/
|-- index.html
|-- styles.css
|-- script.js
|-- armory-placements.json
|-- BG/
|-- armi/
|-- animazioni/
`-- assets/
```

## Asset

Gli asset visuali sono organizzati per area:

- `BG/`: fondale della navicella;
- `armi/`: immagini di armi ed equipaggiamento;
- `animazioni/`: frame animati di Bruno, Donatella, Alieno 1 e robot;
- `assets/icons/`: icone HUD;
- `assets/audio/`: suoni UI e ambiente.

## Tecnologie

- HTML5
- CSS3
- JavaScript vanilla
- Sprite frame-by-frame
- LocalStorage per il salvataggio locale dell'editor

## Note

Il progetto non richiede build tool o dipendenze npm. Per evitare problemi con cache e caricamento asset, durante lo sviluppo e consigliato usare un server locale invece di aprire `index.html` direttamente da filesystem.
