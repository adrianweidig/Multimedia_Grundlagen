let canvas;
let min = -10;
let max = 10;

export function setzeCanvas(canvasRef) {
    canvas = canvasRef;
}

export const toCanvasX = function(x) {
    return (x + (max - min) / 2) * canvas.width / (max - min);
};

export const toCanvasY = function(y) {
    return canvas.height - (y + (max - min) / 2) * canvas.height / (max - min);
};

export function zeichneGraph(a, b, c) {
    const ctx = canvas.getContext('2d');
    const dx = 1; // Schrittgröße für die Markierungen auf den Achsen

    // Zeichne Koordinatensystem
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // x-Achse
    ctx.beginPath();
    ctx.moveTo(toCanvasX(min), toCanvasY(0));
    ctx.lineTo(toCanvasX(max), toCanvasY(0));
    ctx.strokeStyle = "#000";
    ctx.stroke();

    // Markierung
    for (let x = min; x <= max; x += dx) {
        ctx.beginPath();
        ctx.moveTo(toCanvasX(x), toCanvasY(-0.1)); // Unterer Rand der Markierung
        ctx.lineTo(toCanvasX(x), toCanvasY(0.1)); // Oberer Rand der Markierung
        ctx.strokeStyle = "#000";
        ctx.stroke();

        // Beschriftung
        ctx.font = "10px Arial";
        ctx.textAlign = "center";
        ctx.fillText(x.toString(), toCanvasX(x), toCanvasY(-0.7));
    }

    // y-Achse
    ctx.beginPath();
    ctx.moveTo(toCanvasX(0), toCanvasY(min));
    ctx.lineTo(toCanvasX(0), toCanvasY(max));
    ctx.strokeStyle = "#000";
    ctx.stroke();

    // Markierung
    for (let y = min; y <= max; y += dx) {
        ctx.beginPath();
        ctx.moveTo(toCanvasX(-0.1), toCanvasY(y)); // Linker Rand der Markierung
        ctx.lineTo(toCanvasX(0.1), toCanvasY(y)); // Rechter Rand der Markierung
        ctx.strokeStyle = "#000";
        ctx.stroke();

        // Beschriftung
        ctx.font = "10px Arial";
        ctx.textAlign = "right";
        ctx.fillText(y.toString(), toCanvasX(-0.3), toCanvasY(y));
    }

    // Graph
    ctx.beginPath();
    ctx.moveTo(toCanvasX(min), toCanvasY(berechneFunktion(a, b, c, min)));

    for (let x = min + 0.1; x <= max; x += 0.1) {
        ctx.lineTo(toCanvasX(x), toCanvasY(berechneFunktion(a, b, c, x)));
    }

    ctx.strokeStyle = "blue";
    ctx.stroke();

    // Markiere die Nullstellen
    const nullstellen = berechneQuadratischeNullstellen(a, b, c);
    ctx.fillStyle = "red";
    nullstellen.forEach(nullstelle => {
        ctx.beginPath();
        ctx.arc(toCanvasX(nullstelle), toCanvasY(0), 5, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function berechneFunktion(a, b, c, x) {
    return a * x * x + b * x + c;
}

export function berechneQuadratischeNullstellen(a, b, c) {
    const diskriminante = b * b - 4 * a * c;
    if (diskriminante < 0) {
        return [];
    } else if (diskriminante === 0) {
        const nullstelle = -b / (2 * a);
        return [nullstelle];
    } else {
        const sqrtDiskriminante = Math.sqrt(diskriminante);
        const nullstelle1 = (-b + sqrtDiskriminante) / (2 * a);
        const nullstelle2 = (-b - sqrtDiskriminante) / (2 * a);
        return [nullstelle1, nullstelle2];
    }
}
