import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import TicTacToe from './projects/TicTacToe';
import TimerAlarm from './projects/TimerAlarm';
import {
  Box,
  Typography,
  Stack,
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import TaskList from './projects/TaskList';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 900,
  maxHeight: '90vh',
  bgcolor: '#1a1a1a', /* Neutro escuro */
  color: '#d1d1d1',
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
};

// Mapeamento de cores únicas para cada tecnologia
const techColors = {
  'React': '#61dafb', // Azul React
  'Material UI': '#0081cb', // Azul Material UI
  'LocalStorage': '#f39c12', // Laranja
  'CSS Grid': '#e74c3c', // Vermelho
  'Styled Components': '#db7093', // Rosa
};

const PROJECTS = [
  {
    id: 'tasklist',
    title: 'Lista de Tarefas Avançada',
    shortDesc: 'Gerenciamento de tarefas com filtros, persistência local e UI intuitiva.',
    techsGroup1: ['React', 'Material UI'],
    techsGroup2: ['LocalStorage'],
    component: <TaskList />,
  },
  {
    id: 'portfolio',
    title: 'Portfolio Pessoal',
    shortDesc: 'Site responsivo para apresentação profissional.',
    techsGroup1: ['React', 'CSS Grid'],
    techsGroup2: ['Styled Components'],
    component: (
      <Box>
        <Typography variant="body1" sx={{ color: '#d1d1d1' }}>
          Projeto de portfólio pessoal com páginas sobre, projetos e contato.
        </Typography>
      </Box>
    ),
  },
  {
    id: 'tictactoe',
    title: 'Jogo da Velha',
    shortDesc: 'Jogo interativo de tic-tac-toe com verificação de vitória.',
    techsGroup1: ['React'],
    techsGroup2: ['JavaScript'],
    component: <TicTacToe />,
  },
  {
    id: 'timer',
    title: 'Timer com Alarme',
    shortDesc: 'Timer regressivo com alarme sonoro e vibração.',
    techsGroup1: ['React'],
    techsGroup2: ['JavaScript'],
    component: <TimerAlarm />,
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const handleOpen = (project) => {
    setOpenProject(project);
  };

  const handleClose = () => {
    setOpenProject(null);
  };

  // Lógica para layout em cascata: dividir em 2 linhas, distribuindo projetos equilibradamente
  const numRows = 2;
  const projectsPerRow = Math.ceil(PROJECTS.length / numRows);
  const rows = [];
  for (let i = 0; i < PROJECTS.length; i += projectsPerRow) {
    rows.push(PROJECTS.slice(i, i + projectsPerRow));
  }

  return (
    <>
      <Box id="projects" sx={{ mt: 8, mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#d1d1d1' }}>
          Projetos
        </Typography>

        {/* Renderizar linhas dinâmicas */}
        <Stack spacing={4}>
          {rows.map((row, rowIndex) => (
            <Box key={rowIndex} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4 }}>
              {row.map(project => (
                <Box
                  key={project.id}
                  sx={{
                    bgcolor: '#141925ff', /* Mantido como no seu código */
                    p: 4,
                    borderRadius: 4,
                    cursor: 'pointer',
                    width: 280,
                    boxShadow: '0 0 40px #5a5959ff', /* Mantido como no seu código */
                    '&:hover': { boxShadow: '0 0 70px #929421ff' }, /* Mantido como no seu código */
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 250,
                    transition: 'transform 0.2s ease',
                  }}
                  onClick={() => handleOpen(project)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Abrir detalhes do projeto ${project.title}`}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleOpen(project); }}
                >
                  <Typography variant="h6" sx={{ color: '#888', mb: 2, fontWeight: 700 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ flexGrow: 1, color: '#aaa', mb: 3 }}>
                    {project.shortDesc}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" aria-label="Tecnologias utilizadas">
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {project.techsGroup1.map(tech => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: techColors[tech] || '#888', /* Cor única por tecnologia */
                            color: '#1a1a1a',
                            fontWeight: 'bold',
                            mb: 0.5,
                            userSelect: 'none',
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, ml: '1cm' }}>
                      {project.techsGroup2.map(tech => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: techColors[tech] || '#888', /* Cor única por tecnologia */
                            color: '#1a1a1a',
                            fontWeight: 'bold',
                            mb: 0.5,
                            userSelect: 'none',
                          }}
                        />
                      ))}
                    </Box>
                  </Stack>
                  <Button variant="outlined" size="small" sx={{ mt: 2, color: '#888', borderColor: '#888' }}>
                    Ver mais
                  </Button>
                </Box>
              ))}
            </Box>
          ))}
        </Stack>
      </Box>

      <Modal
        open={!!openProject}
        onClose={handleClose}
        aria-labelledby="modal-project-title"
        aria-describedby="modal-project-description"
        BackdropProps={{ style: { backgroundColor: 'rgba(0,0,0,0.85)' } }}
      >
        <Box sx={modalStyle}>
          <IconButton
            aria-label="fechar modal"
            onClick={handleClose}
            sx={{ position: 'absolute', top: 12, right: 12, color: '#888', zIndex: 1001 }}
          >
            <CloseIcon />
          </IconButton>

          {openProject && (
            <>
              <Typography id="modal-project-title" variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#888' }}>
                {openProject.title}
              </Typography>

              <Box id="modal-project-description" sx={{ flex: 1, overflowY: 'auto' }}>
                {openProject.component}
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}