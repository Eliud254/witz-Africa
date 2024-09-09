import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1e0936 0%, #3a1269 50%, #4a1d7d 100%)',
        minHeight: 'calc(100vh - 64px)', // Subtract navbar height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          sx={{ 
            fontWeight: 900,
            mb: 2,
            fontSize: '3.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            '& .gradient': {
              background: 'linear-gradient(45deg, #ff47c7, #ff7ab2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }
          }}
        >
          Buy Now, Pay Later <br/>
          within <span className="gradient">12 Months</span>
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.8, fontWeight: 300 }}>
          Get the items you need today and pay over time.
          Witz Africa offers flexible payment plans for
          laptops, phones, household items, education, and travel.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #ff47c7 30%, #ff7ab2 90%)',
              borderRadius: '25px',
              px: 4,
              py: 1.5,
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff5fce 30%, #ff8dc0 90%)',
              },
            }}
          >
            Apply Now
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              borderRadius: '25px',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                borderColor: '#ff47c7',
                color: '#ff47c7',
              },
            }}
          >
            Book a 1:1 Call
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;