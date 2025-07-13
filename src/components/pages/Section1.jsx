import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

const Section1 = () => {
  return (
    <Box
      component="header"
      id="home"
      sx={{
        height: { xs: '90vh', md: '95vh' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image Animation Layer */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <Stack
        component={motion.div}
        initial="hidden"
        animate="visible"
        spacing={2}
        sx={{
          position: 'absolute',
          top: '50%',
          left: { xs: '50%', md: '30%' },
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          color: '#f4f4f4',
          textAlign: { xs: 'center', md: 'left' },
          width: '90%',
          maxWidth: '600px',
        }}
      >
        <motion.div variants={fadeInUp} custom={1}>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '2rem', md: '4rem' },
              textTransform: 'uppercase',
              fontWeight: 400,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Hello
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp} custom={2}>
          <Typography
            sx={{
              fontSize: { xs: '2.4rem', sm: '3rem', md: '4.5rem' },
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            I am Aditya Lakandri
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp} custom={3}>
          <Typography
            sx={{
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            Full Stack Developer
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp} custom={4}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            alignItems="center"
            mt={2}
          >
            <Button
              component={ScrollLink}
              to="contact"
              smooth={true}
              duration={1000}
              variant="contained"
              sx={{
                fontSize: '1.6rem',
                textTransform: 'uppercase',
                fontWeight: 500,
                padding: '0.6em 1.5em',
                backgroundColor: '#fff',
                color: '#102ccb',
                borderRadius: '5px',
                '&:hover': {
                  backgroundColor: '#ddd',
                },
              }}
            >
              Hire Me
            </Button>

            <Button
              component="a"
              href="https://www.linkedin.com/in/aditya-lakandri-1270b4192/overlay/1752386725386/single-media-viewer/?profileId=ACoAAC04dq8B4Rhnifyshwb8OQ5YoxD7xa1c-Vs"
              target="_blank"
              sx={{
                fontSize: '1.6rem',
                textTransform: 'uppercase',
                fontWeight: 500,
                padding: '0.6em 1.5em',
                borderRadius: '5px',
                backgroundColor: '#22349cff',
                border: '2px solid #fff',
                color: 'rgba(244, 244, 244, 1)',
                '&:hover': {
                  backgroundColor: '#102ccb',
                  borderColor: '#f4f4f4',
                },
              }}
            >
              Download CV
            </Button>
          </Stack>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Section1;
