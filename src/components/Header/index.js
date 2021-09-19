import './Header.css';
import { useContext } from 'react';
import { Container, Text } from '@mantine/core';
import { Brightness2 as DarkMode, WbSunny as LightMode } from '@material-ui/icons';
import ColorSchemeContext from '../../ColorSchemeContext';

function Header() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const darkScheme = colorSchemeContext.colorScheme === 'dark';
  return (
    <div className={['header', `header-${colorSchemeContext.colorScheme}`].join(' ')}>
      <Container size={768} padding={16} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo-area">
          <Text component="h1" size={32}>
            ✍️ Lorem
          </Text>
        </div>
        <div 
          className={['theme-switch', `theme-switch-${colorSchemeContext.colorScheme}`].join(' ')}
          onClick={() => colorSchemeContext.onChange(darkScheme ? 'light' : 'dark')}
        >
          {darkScheme ? (
            <>
              <Text component="p" size="sm">
                Light theme
              </Text>
              <LightMode style={{color: '#f9f9f9', fontSize: '14px'}} />
            </>
          ) : (
            <>
            <Text component="p" size="sm">
              Dark theme
            </Text>
            <DarkMode style={{color: '#393F47', fontSize: '14px'}} />
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Header;
