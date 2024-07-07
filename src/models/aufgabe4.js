export const daten = () => ({
    neuesTodo: '',
    offeneTodos: [],
    erledigteTodos: [],
});

export const methoden = {
    hinzufuegenTodo() {
        if (this.neuesTodo.trim() !== '') {
            this.offeneTodos.push({
                id: Date.now(),
                text: this.neuesTodo.trim(),
            });
            this.neuesTodo = '';
        }
    },
    erledigenTodo(todo) {
        this.offeneTodos = this.offeneTodos.filter(t => t.id !== todo.id);
        this.erledigteTodos.push({
            ...todo,
            erledigtAm: new Date().toLocaleString(),
        });
    },
};
