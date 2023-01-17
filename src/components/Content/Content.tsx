import { useState } from 'react';
import { Tarefa } from '../../tarefa';
import { Form } from '../ContentForm/ContentForm';
import { ContentList } from '../ContentList/ContentList';
import styles from './Content.module.css';
import { v4 } from 'uuid';

export function Content() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const numTarefasConcluidas = tarefas.filter(
    tarefa => tarefa.concluido
  ).length;

  function handleAddTarefa(descricao: string) {
    const tarefa = { concluido: false, descricao, id: v4() };

    setTarefas([...tarefas, tarefa]);
  }

  function handleSetConcluido(tarefaId: string) {
    const tarefa = tarefas.find(tarefa => tarefa.id == tarefaId);
    if (tarefa) {
      tarefa.concluido = !tarefa.concluido;

      setTarefas([...tarefas]);
    }
  }

  function handleDelete(tarefaId: string) {
    const index = tarefas.findIndex(tarefa => tarefa.id == tarefaId);

    tarefas.splice(index, 1);
    setTarefas([...tarefas]);
  }

  return (
    <div className={styles.content}>
      <Form onAddTarefa={handleAddTarefa} />
      <section className={styles.info}>
        <div>
          <span>Tarefas criadas</span>
          <span className={styles.infoNumber}>{tarefas.length}</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span className={styles.infoNumber}>
            {numTarefasConcluidas} de {tarefas.length}
          </span>
        </div>
      </section>

      <ContentList
        tarefas={tarefas}
        toggleConcluido={handleSetConcluido}
        onDeleteTarefa={handleDelete}
      />
    </div>
  );
}
