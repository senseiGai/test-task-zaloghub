import { Check } from 'lucide-react'
import { useTasks } from '@/features/tasks/hooks/useTasks'
import { TaskInput } from '@/features/tasks/components/TaskInput'
import { TaskItem } from '@/features/tasks/components/TaskItem'
import { TaskFilters } from '@/features/tasks/components/TaskFilters'

function App() {
  const { tasks, filter, setFilter, addTask, toggleTask, deleteTask, counts } = useTasks()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-5 py-14">
        <div className="flex items-center gap-3.5 mb-10">
          <div className="size-10 rounded-md bg-camel text-ink flex items-center justify-center shrink-0">
            <Check className="size-5 stroke-[3.5]" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
              ZalogHub
            </h1>
            <p className="text-white/40 text-xs sm:text-sm mt-1">Менеджер задач</p>
          </div>
        </div>

        <TaskInput onAdd={addTask} />

        <div className="flex items-center justify-between mt-10 mb-4">
          <TaskFilters current={filter} onChange={setFilter} counts={counts} />
        </div>

        <div className="space-y-2">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}

          {tasks.length === 0 && (
            <p className="text-center text-white/25 py-16 text-sm">
              {filter === 'all'
                ? 'Пока что задач нет — добавьте первую'
                : 'Нет задач в этой категории'}
            </p>
          )}
        </div>

        {counts.all > 0 && (
          <p className="text-white/20 text-xs text-center mt-8">
            {counts.completed} из {counts.all} выполнено
          </p>
        )}
      </div>
    </div>
  )
}

export default App

