import histogram from './aufgabe1e.js';

class HuffmanKnoten {
    constructor(zeichen, haeufigkeit, links_kind = null, rechts_kind = null) {
        this.zeichen = zeichen;
        this.haeufigkeit = haeufigkeit;
        this.links_kind = links_kind;
        this.rechts_kind = rechts_kind;
    }
}

export default class HuffmanBaum {
    constructor(text) {
        this.wurzel = this.erzeugeBaum(text);
    }

    // Sortiert Haeufigkeitsmap aus aufgabe1e
    sortierteHaeufigkeitsMap(text) {
        const frequenzMap = histogram(text);

        // Erstelle ein Array aus den Eintraegen der Map
        const frequenzArray = Object.entries(frequenzMap);

        // Sortiere das Array basierend auf der Haeufigkeit der Zeichen
        // Quelle: https://www.geeksforgeeks.org/how-to-sort-a-map-in-javascript/
        frequenzArray.sort((a, b) => a[1] - b[1]);

        // Gebe die sortierte Map zurueck
        return frequenzArray;
    }

    erzeugeBaum(text) {
        const haeufigkeitMap = this.sortierteHaeufigkeitsMap(text);

        // Erstelle eine Liste aus den Blattknoten
        let knotenListe = [];

        for (let [zeichen, haeufigkeit] of haeufigkeitMap) {
            // Erstelle einen neuen Knoten fuer jedes Zeichen
            knotenListe.push(new HuffmanKnoten(zeichen, haeufigkeit));
        }

        // Solange durch die Liste gehen bis man nur noch einen Knoten hat, der die Kinder besitzt, die ihre Kinder besitzen
        while (knotenListe.length > 1) {
            // Entferne die zwei Knoten mit der geringsten Haeufigkeit aus der Liste
            const links_kind = knotenListe.shift();
            const rechts_kind = knotenListe.shift();

            // Erstelle einen neuen Knoten mit den zwei Knoten mit der geringsten Haeufigkeit als Kindern
            const summeHaeufigkeit = links_kind.haeufigkeit + rechts_kind.haeufigkeit;
            const neuerKnoten = new HuffmanKnoten(null, summeHaeufigkeit, links_kind, rechts_kind);

            // Fuege den neuen Knoten zur Liste hinzu
            knotenListe.push(neuerKnoten);

            // Sortiere die Liste basierend auf der Haeufigkeit der Knoten
            knotenListe.sort((a, b) => a.haeufigkeit - b.haeufigkeit);
        }

        // Der letzte verbleibende Knoten ist der Wurzelknoten des Huffman-Baums
        return knotenListe[0];
    }


}