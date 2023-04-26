import { Check, Trash } from "phosphor-react";
import styles from "./task.module.css";

interface TasksProps {
  task: {
    id: string;
    title: string;
    isComplete: boolean;
  };
  onCompleteTask: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

export default function Task({ task, onCompleteTask, onRemoveTask }: TasksProps) {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <label htmlFor={task.id}>
          <input
            type="checkbox"
            name={task.id}
            id={task.id}
            value={task.id}
            onChange={(_) => onCompleteTask(task.id)}
            checked={task.isComplete}
          />

          <span
            className={
              task.isComplete ? styles.completedCheckmark : styles.checkmark
            }
          >
            <Check weight="bold" />
          </span>
        </label>
      </div>

      <p className={task.isComplete ? styles.isComplete : ""}>{task.title}</p>
      <button onClick={() => onRemoveTask(task.id)}>
        <Trash />
      </button>
    </div>
  );
}
