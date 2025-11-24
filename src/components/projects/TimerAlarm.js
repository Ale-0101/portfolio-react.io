// TimerAlarm.js corrigido: Remove áudio e usa alert() + vibração para evitar erro de fonte não suportada.
// Substitua o código antigo por este.

import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Typography, TextField, Stack } from '@mui/material';

export default function TimerAlarm() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [alarmActive, setAlarmActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      triggerAlarm();
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    const totalSeconds = minutes * 60 + seconds;
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
      setAlarmActive(false);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setAlarmActive(false);
    clearInterval(intervalRef.current);
  };

  const triggerAlarm = () => {
    setAlarmActive(true);
    // Alerta sonoro via alert (funciona em todos os navegadores)
    alert('Tempo esgotado! Alarme ativado.');
    // Vibração (se suportado pelo dispositivo)
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200, 100, 200]); // Padrão de vibração
    }
  };

  const stopAlarm = () => {
    setAlarmActive(false);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ color: '#d1d1d1', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mb: 2, color: '#888' }}>
        Timer com Alarme
      </Typography>

      {!isRunning && !alarmActive && (
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <TextField
            type="number"
            label="Minutos"
            value={minutes}
            onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value) || 0))}
            sx={{ width: 100, input: { color: '#d1d1d1' }, label: { color: '#aaa' } }}
            variant="outlined"
          />
          <TextField
            type="number"
            label="Segundos"
            value={seconds}
            onChange={(e) => setSeconds(Math.max(0, parseInt(e.target.value) || 0))}
            sx={{ width: 100, input: { color: '#d1d1d1' }, label: { color: '#aaa' } }}
            variant="outlined"
          />
        </Stack>
      )}

      <Typography variant="h4" sx={{ mb: 3, color: alarmActive ? '#f76e3c' : '#888' }}>
        {alarmActive ? 'ALARME!' : formatTime(timeLeft)}
      </Typography>

      {!alarmActive && (
        <Stack direction="row" spacing={2} justifyContent="center">
          {!isRunning ? (
            <Button
              variant="contained"
              sx={{ bgcolor: '#888', '&:hover': { bgcolor: '#aaa' } }}
              onClick={startTimer}
            >
              Iniciar Timer
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{ color: '#888', borderColor: '#888' }}
              onClick={stopTimer}
            >
              Parar Timer
            </Button>
          )}
        </Stack>
      )}

      {alarmActive && (
        <Button
          variant="contained"
          sx={{ bgcolor: '#f76e3c', '&:hover': { bgcolor: '#ff814f' } }}
          onClick={stopAlarm}
        >
          Parar Alarme
        </Button>
      )}
    </Box>
  );
}