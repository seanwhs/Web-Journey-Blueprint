async function createTodo(formData: FormData) {
  'use server';

  const text = formData.get('text');

  console.log(text);
}

export default function TodoForm() {
  return (
    <form action={createTodo}>
      <input name="text" />

      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}
