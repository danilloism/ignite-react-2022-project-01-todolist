import { HTMLAttributes } from 'react';
import { Tarefa } from '../../tarefa';
import styles from './TarefaCard.module.css';
import checkedIcon from '../../assets/checked.svg';
import { TrashIcon } from '@primer/octicons-react';

interface TarefaCardProps extends HTMLAttributes<HTMLDivElement> {
  tarefa: Tarefa;
  checked: boolean;
  onChecked: (tarefaId: string) => void;
  onDeleted: (tarefaId: string) => void;
}

export function TarefaCard({
  tarefa,
  className,
  checked,
  onChecked,
  onDeleted,
  ...props
}: TarefaCardProps) {
  return (
    <div
      className={className ? `${className} ${styles.card}` : styles.card}
      {...props}
    >
      <div
        className={styles.label}
        onClick={() => onChecked(tarefa.id)}
      >
        <div
          className={`${styles.checkbox} ${
            tarefa.concluido ? styles.checked : styles.unchecked
          }`}
        >
          {tarefa.concluido && <img src={checkedIcon} />}
        </div>
        <p className={tarefa.concluido ? styles.checkedText : undefined}>
          {tarefa.descricao}
        </p>
      </div>
      <button
        className={styles.trashIconButton}
        onClick={() => onDeleted(tarefa.id)}
      >
        <TrashIcon />
      </button>
    </div>
  );
}
