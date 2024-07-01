export default function histogram(text) {
    const frequenzMap = {};
    for (let zeichen of text) {
        if (frequenzMap[zeichen]) {
            frequenzMap[zeichen]++;
        } else {
            frequenzMap[zeichen] = 1;
        }
    }
    return frequenzMap;
}
