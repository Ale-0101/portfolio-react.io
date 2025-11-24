// TicTacToe.js corrigido para exibir como grade 3x3
// Adicione xs={4} no Grid item para forçar 3 colunas (12/3=4 no sistema de grid do Material UI)

import React, { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index) => {
    return (
      <Button
        variant="outlined"
        sx={{
          width: 80,
          height: 80,
          fontSize: '2rem',
          fontWeight: 'bold',
          color: board[index] === 'X' ? '#ff0000ff' : '#ffffffff',
          borderColor: '#888',
          '&:hover': { bgcolor: '#333' },
        }}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </Button>
    );
  };

  return (
    <Box sx={{ color: '#d1d1d1', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mb: 2, color: '#888' }}>
        Jogo da Velha (Tic-Tac-Toe)
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        {winner ? `Vencedor: ${winner}` : `Próximo jogador: ${isXNext ? 'X' : 'O'}`}
      </Typography>

      {/* Grade 3x3: xs={4} força 3 colunas, maxWidth limita largura */}
      <Grid container spacing={1} justifyContent="center" sx={{ mb: 3, maxWidth: 300, mx: 'auto' }}>
        {board.map((_, index) => (
          <Grid item xs={4} key={index}>
            {renderSquare(index)}
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{ bgcolor: '#888', '&:hover': { bgcolor: '#aaa' } }}
        onClick={resetGame}
      >
        Reiniciar Jogo
      </Button>
    </Box>
  );
}
