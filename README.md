# ZalogHub — Менеджер задач

Простой список задач на React + TypeScript + Vite.

## Возможности

- Добавление задач через поле ввода и кнопку
- Переключение статуса выполнения (активная / выполненная)
- Удаление задач
- Фильтрация: все / активные / выполненные со счётчиками
- Сохранение в localStorage (данные остаются после перезагрузки)
- Валидация: пустые задачи и строки из одних пробелов не добавляются
- **PWA (Progressive Web App)**: оффлайн-режим через Service Worker, возможность установить приложение на телефон или рабочий стол

## Стек

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- `vite-plugin-pwa` (Workbox)
- shadcn/ui (Button, Input)

## Запуск

```bash
npm install
npm run dev
```

Откроется на `http://localhost:5173` или `https://test-task-zaloghub-pi.vercel.app`

## Сборка

```bash
npm run build
npm run preview
```

## Структура

```
src/
├── app/                  # Корневой компонент
├── components/ui/        # UI-компоненты (shadcn)
├── features/tasks/       # Фича задач
│   ├── components/       # TaskInput, TaskItem, TaskFilters
│   ├── hooks/            # useTasks — логика + localStorage
│   └── types.ts          # Типы Task, FilterType
├── lib/                  # Утилиты
├── index.css             # Тема и переменные
└── main.tsx              # Точка входа + регистрация Service Worker
```

## Время

Примерно 3 часа (с настройкой темы, PWA и адаптивным оформлением).
