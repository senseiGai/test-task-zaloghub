import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Props {
  onAdd: (title: string) => void
}

export function TaskInput({ onAdd }: Props) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Что нужно сделать?"
        className="h-12 px-4 rounded-xl bg-white/5 border-white/10 placeholder:text-white/30"
      />
      <Button
        type="submit"
        disabled={!value.trim()}
        className="h-12 px-6 bg-camel text-ink font-semibold rounded-xl shrink-0 hover:bg-camel/85 disabled:opacity-30"
      >
        Добавить
      </Button>
    </form>
  )
}

