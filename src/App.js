import { MantineProvider, GlobalStyles } from '@mantine/core';
import { useColorScheme, useLocalStorageValue } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import Main from './components/Main';
import Header from './components/Header';
import ColorSchemeContext from './ColorSchemeContext';

function App() {
  // Dark scheme colors
  const darkColors = [
    '#F9F9F9',
    '#ECEDEE',
    '#DFE0E2',
    '#D1D3D4',
    '#C1C3C6',
    '#B0B3B6',
    '#9CA0A4',
    '#393F47',
    '#676C72',
    '#393F47'
  ];

  // Set the default color scheme based on the system color scheme
  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: 'lorem-color-scheme',
    defaultValue: useColorScheme()
  });

  return (
    <div className="App">
      <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
        <MantineProvider theme={{ 
          colorScheme,
          colors: {
            dark: darkColors
          }
        }}>
          <NotificationsProvider>
            <GlobalStyles />
            <Header />
            <Main />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeContext.Provider>
    </div>
  );
}

export default App;
