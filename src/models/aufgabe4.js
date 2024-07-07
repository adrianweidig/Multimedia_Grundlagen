export function daten() {
    return {
        neuesTodo: '',
        offeneTodos: [],
        erledigteTodos: [],
    };
}

export const methoden = {
    erledigteTodos: undefined,
    hinzufuegenTodo: function() {
        if (this.neuesTodo.trim() !== '') {
            this.offeneTodos.push({
                id: Date.now(),
                text: this.neuesTodo.trim(),
            });
            this.neuesTodo = '';
        }
    },
    erledigenTodo: function(todo) {
        this.offeneTodos = this.offeneTodos.filter(function(t) {
            return t.id !== todo.id;
        });
        this.erledigteTodos.push({
            text: todo.text,
            erledigtAm: new Date().toLocaleString(),
        });
    },
};
