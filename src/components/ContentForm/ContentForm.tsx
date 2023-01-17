import { PlusCircleIcon } from '@primer/octicons-react';
import { useState } from 'react';
import styles from './ContentForm.module.css';

interface IFormProps {
  onAddTarefa: (tarefa: string) => void;
}

export function Form({ onAddTarefa }: IFormProps) {
  const [inputHasError, setInputHasError] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const descricao: string = event.currentTarget.tarefa.value;

    if (descricao.length == 0) {
      event.currentTarget.tarefa.focus();
      setInputHasError(true);
      return;
    }

    inputHasError && setInputHasError(false);
    event.currentTarget.tarefa.value = '';

    onAddTarefa(descricao);
  }

  function handleErrorProps() {
    if (inputHasError) {
      return {
        className: styles.inputError,
        onChange: () => setInputHasError(false),
        onBlur: () => setInputHasError(false),
      };
    }
  }

  return (
    <form
      action=""
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="tarefa"
        autoComplete="off"
        {...handleErrorProps()}
      />

      <button type="submit">
        <span>Criar</span>
        <PlusCircleIcon size="small" />
      </button>
    </form>
  );
}
