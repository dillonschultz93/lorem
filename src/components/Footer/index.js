import './Footer.css';
import { useContext } from 'react';
import { Text, Container } from '@mantine/core';
import ColorSchemeContext from '../../ColorSchemeContext';

function Footer() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  return (
    <footer className={`footer-${colorSchemeContext.colorScheme}`}>
      <Container size={768} padding={16}>
        <Text align="center" component="h5" style={{marginTop: '0'}}>&copy; 2021, Dillon Schultz</Text>
        <Text align="center" component="h5" style={{marginTop: '0', marginBottom: '0'}}>Made with React and ❤️</Text>
      </Container>
    </footer>
  );
}

export default Footer;
