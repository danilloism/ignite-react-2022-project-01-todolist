import { Tarefa } from '../../tarefa';

interface ContentListProps {
  tarefas: Tarefa[];
}

export function ContentList({ tarefas }: ContentListProps) {
  return (
    <div>
      <div>
        {tarefas.map(tarefa => (
          <p key={tarefa.id}>{tarefa.descricao}</p>
        ))}
      </div>
    </div>
  );
}
