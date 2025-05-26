class Todo {
  id: number;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random() * 100;
  }
}

export default Todo;
