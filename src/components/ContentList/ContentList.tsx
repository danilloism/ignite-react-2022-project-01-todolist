import { Tarefa } from '../../tarefa';
import { TarefaCard } from '../TarefaCard/TarefaCard';
import styles from './ContentLIst.module.css';
interface ContentListProps {
  tarefas: Tarefa[];
  toggleConcluido: (tarefaId: string) => void;
  onDeleteTarefa: (tarefaId: string) => void;
}

export function ContentList({
  tarefas,
  toggleConcluido,
  onDeleteTarefa,
}: ContentListProps) {
  return (
    <main className={styles.list}>
      {tarefas.map(tarefa => (
        <TarefaCard
          key={tarefa.id}
          tarefa={tarefa}
          className={styles.listItem}
          checked={tarefa.concluido}
          onChecked={toggleConcluido}
          onDeleted={onDeleteTarefa}
        />
      ))}
    </main>
  );
}
