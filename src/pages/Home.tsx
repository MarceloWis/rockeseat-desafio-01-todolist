import { useState } from "react";
import styles from "./home.module.css";
import { ClipboardText, PlusCircle, Trash } from "phosphor-react";
import Task from "../components/Task";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export default function HomePage() {
  const [taskInputText, setTaskInputText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasks = tasks.filter((task) => task.isComplete).length;
  const totalTasks = tasks.length;

  function handleAddNewTask(event: React.FormEvent) {
    event.preventDefault();

    const task = {
      id: String(new Date().getTime()),
      title: taskInputText,
      isComplete: false,
    };
    setTasks((state) => [...state, task]);
    setTaskInputText("");
  }

  function resetTasks() {
    setTasks([]);
  }

  function handleToggleTaskCompletion(id: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <form className={styles.searchBox} onSubmit={handleAddNewTask}>
        <input
          type="text"
          value={taskInputText}
          onChange={(e) => setTaskInputText(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">
          Criar
          <PlusCircle weight="bold" />
        </button>
      </form>

      <div className={styles.actions}>
        <div className={styles.actionCreated}>
          <strong>Tarefas criadas</strong>
          <span className={styles.counter}>{totalTasks}</span>
        </div>

        <div className={styles.actionDone}>
          <strong>Concluídas</strong>
          <span className={styles.counter}>
            {completedTasks} de {totalTasks}
          </span>
        </div>
      </div>

      {tasks.length ? (
        <div className={styles.taskListContainer}>
          <button className={styles.deleteButton} onClick={resetTasks}>
            <Trash />
          </button>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onRemoveTask={handleDeleteTask}
              onCompleteTask={handleToggleTaskCompletion}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyList}>
          <ClipboardText size={56} weight="thin" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  );
}
