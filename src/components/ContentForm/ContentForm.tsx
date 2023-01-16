import { Tarefa } from '../../tarefa';
import styles from './ContentForm.module.css';

interface IFormProps {
  onAddTarefa: (tarefa: string) => void;
}

export function Form({ onAddTarefa }: IFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const descricao = event.currentTarget.tarefa.value;
    event.currentTarget.tarefa.value = '';

    onAddTarefa(descricao);
  }

  return (
    <form
      id="add-tarefa-form"
      action=""
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="tarefa"
      />

      <button type="submit">Criar</button>
    </form>
  );
}
