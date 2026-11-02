import { Check, X } from 'lucide-react'
import type { Task } from '../types'

interface Props {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <div className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] rounded-xl px-4 py-3 transition-colors">
      <button
        onClick={() => onToggle(task.id)}
        className={`flex items-center justify-center size-5 rounded-md border transition-colors shrink-0 ${
          task.completed
            ? 'bg-camel border-camel text-ink'
            : 'border-white/25 hover:border-white/50'
        }`}
      >
        {task.completed && <Check className="size-3 stroke-[3]" />}
      </button>

      <span
        className={`flex-1 text-sm transition-colors select-none ${
          task.completed ? 'line-through text-white/30' : 'text-white/90'
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 text-white/30 hover:text-red-400 transition-all p-1"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}

