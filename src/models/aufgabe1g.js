export default function findeHuffmanCode(baum, zeichen) {
    return _findeHuffmanCodeRekursiv(baum.wurzel, zeichen, '');
}

function _findeHuffmanCodeRekursiv(knoten, zeichen, code) {
    // Wenn das Zeichen gefunden wurde, gib den Code zurück
    if (knoten.zeichen === zeichen) {
        return code;
    }

    // Durchsuche den linken Teilbaum, wenn vorhanden
    if (knoten.links_kind) {
        const links_code = _findeHuffmanCodeRekursiv(knoten.links_kind, zeichen, code + '0');
        if (links_code) return links_code;
    }

    // Durchsuche den rechten Teilbaum, wenn vorhanden
    if (knoten.rechts_kind) {
        const rechts_code = _findeHuffmanCodeRekursiv(knoten.rechts_kind, zeichen, code + '1');
        if (rechts_code) return rechts_code;
    }

    // Falls das Zeichen nicht im Baum gefunden wurde, gib null zurück
    return null;
}
