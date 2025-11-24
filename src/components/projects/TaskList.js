import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';

export default function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask.trim(), done: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const filteredTasks = () => {
    if (filter === 'done') return tasks.filter(t => t.done);
    if (filter === 'active') return tasks.filter(t => !t.done);
    return tasks;
  };

  return (
    <Box>
      <Stack direction="row" spacing={1} mb={2}>
        <TextField
          variant="filled"
          placeholder="Nova tarefa..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          sx={{ bgcolor: '#292929', input: { color: '#eee' } }}
          fullWidth
          size="small"
        />
        <Button variant="contained" onClick={addTask}>Adicionar</Button>
      </Stack>

      <Stack direction="row" spacing={1} mb={2}>
        <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => setFilter('all')}>Todas</Button>
        <Button variant={filter === 'active' ? 'contained' : 'outlined'} onClick={() => setFilter('active')}>Ativas</Button>
        <Button variant={filter === 'done' ? 'contained' : 'outlined'} onClick={() => setFilter('done')}>Concluídas</Button>
      </Stack>

      {filteredTasks().length === 0 ? (
        <Typography sx={{ color: '#aaa' }}>Nenhuma tarefa para mostrar.</Typography>
      ) : (
        filteredTasks().map(task => (
          <Box
            key={task.id}
            sx={{
              p: 1,
              mb: 1,
              bgcolor: task.done ? '#444' : '#1f1f1f',
              color: task.done ? '#777' : '#eee',
              borderRadius: 1,
              cursor: 'pointer',
              textDecoration: task.done ? 'line-through' : 'none',
              userSelect: 'none',
              ':hover': { bgcolor: task.done ? '#555' : '#323232' },
            }}
            onClick={() => toggleTask(task.id)}
            tabIndex={0}
            role="checkbox"
            aria-checked={task.done}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleTask(task.id)}
          >
            {task.text}
          </Box>
        ))
      )}
    </Box>
  );
}