import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link as MUILink,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

// Fade up animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250, mt: 5 }}>
      <List>
        {navItems.map((item, i) => (
          <motion.div
            key={item}
            custom={i + 1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <ListItem button onClick={() => setDrawerOpen(false)}>
              <MUILink
                component={ScrollLink}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                sx={{
                  fontSize: '1.6rem',
                  color: '#102ccb',
                  textDecoration: 'none',
                }}
              >
                <ListItemText primary={item} />
              </MUILink>
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeIn' }}
      >
        <AppBar
          position="absolute"
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            px: { xs: 2, sm: 4 },
            pt: 2,
            zIndex: 10,
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem' },
                color: '#f4f4f4',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 400,
              }}
            >
              Aditya Lakandri
            </Typography>

            {/* Desktop Nav with animated items */}
            {!isMobile && (
              <Box
                component="ul"
                sx={{
                  display: 'flex',
                  listStyle: 'none',
                  gap: 4,
                  m: 0,
                  p: 0,
                }}
              >
                {navItems.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i + 1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    style={{ listStyle: 'none' }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        fontSize: '1.6rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        fontWeight: 500,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '0%',
                          height: '2px',
                          backgroundColor: '#f4f4f4',
                          transition: 'width 0.2s ease',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      <MUILink
                        component={ScrollLink}
                        to={item.toLowerCase()}
                        smooth={true}
                        duration={500}
                        sx={{
                          color: '#f4f4f4',
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        {item}
                      </MUILink>
                    </Box>
                  </motion.li>
                ))}
              </Box>
            )}

            {/* Mobile Icon */}
            {isMobile && (
              <IconButton onClick={handleToggle} sx={{ color: '#fff' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleToggle}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;
