import React from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer
      className="footer"
      id="contacts"
      style={{
        marginTop: '150px',
        padding: '30px 0',
        borderTop: '1px solid #333',
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
        userSelect: 'none',
      }}
    >
      <Typography variant="body2" sx={{ mb: 2, color: '#d1d1d1' }}>
        Contato
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton
          component="a"
          href="mailto:alexandrejr.contact@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#888', /* Neutro retro */
            '&:hover': { color: '#fbff00ff', transform: 'scale(1.1)' },
            transition: 'all 0.2s ease',
          }}
          aria-label="Enviar email"
          title="Enviar email"
        >
          <EmailIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/psj-alexandre/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#888',
            '&:hover': { color: '#929421ff', transform: 'scale(1.1)' },
            transition: 'all 0.2s ease',
          }}
          aria-label="LinkedIn PSJ Alexandre"
          title="LinkedIn PSJ Alexandre"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/Ale-0101"  // Substitua pelo seu link do GitHub
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#888',
            '&:hover': { color: '#929421ff', transform: 'scale(1.1)' },
            transition: 'all 0.2s ease',
          }}
          aria-label="GitHub"
          title="GitHub"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Stack>

      <Typography variant="caption" sx={{ mt: 2, color: '#777' }}>
        © 2024 Alexandre Pereira. All rights reserved.
      </Typography>
    </footer>
  );
}