import type { FilterType } from '../types'

interface Props {
  current: FilterType
  onChange: (filter: FilterType) => void
  counts: Record<FilterType, number>
}

const FILTERS: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'Все' },
  { key: 'active', label: 'Активные' },
  { key: 'completed', label: 'Выполненные' },
]

export function TaskFilters({ current, onChange, counts }: Props) {
  return (
    <div className="flex gap-1.5">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            current === key
              ? 'bg-camel text-ink'
              : 'text-white/50 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          {label}
          <span className="ml-1.5 text-[11px] opacity-60">{counts[key]}</span>
        </button>
      ))}
    </div>
  )
}

