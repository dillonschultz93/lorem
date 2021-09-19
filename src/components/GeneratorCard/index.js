import './GeneratorCard.css'
import { useContext, useState } from 'react';
import { Text, Paper, NumberInput, NativeSelect, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { FileCopy } from '@material-ui/icons'
import ColorSchemeContext from '../../ColorSchemeContext';
import { loremIpsum } from 'lorem-ipsum-filler';

function GeneratorCard() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const notifications = useNotifications();
  const darkScheme = colorSchemeContext.colorScheme === 'dark';

  const darkPaperStyles = {
    border: '1px solid #676C72',
    backgroundColor: '#676C72'
  };

  const lightPaperStyles = {
    border: '1px solid #ECEDEE',
    backgroundColor: '#ECEDEE'
  };

  // State
  const [options, setOptions] = useState({
    count: 4,
    units: 'words'
  });
  const [generatedText, setGeneratedText] = useState('');

  // Handlers
  const handleCount = e => {
    setOptions({
      count: e,
      units: options.units
    });
  }

  const handleUnits = e => {
    setOptions({
      count: options.count,
      units: e.target.value
    });
  }

  const handleGenerateText = () => {
    const { count, units } = options;
    const text = loremIpsum({ count, units });

    setGeneratedText(text);
  }

  const handleCopyToClipboard = () => {
    if (!navigator.clipboard) {
      // Fallback copy to clipboard
      return;
    }

    navigator.clipboard.writeText(generatedText)
      .then(() => {
        notifications.showNotification({
          title: 'Copied text to your clipboard',
          autoClose: 3000,
          color: 'green'
        });
      })
      .catch((error) => {
        console.error(error);
        notifications.showNotification({
          title: 'Oops! Could not copy to your clipboard',
          autoClose: 3000,
          color: 'red'
        });
      });
  }

  return (
    <Paper shadow="sm" radius="sm" style={darkScheme ? { border: darkPaperStyles.border } : { border: lightPaperStyles.border }}>
      <div className="results-area" style={{ display: generatedText ? 'block' : 'flex' }}>
        {generatedText ? (
          generatedText.split('\n').length > 1 ? generatedText.split('\n').map((text, index) => <Text component="h4" key={index}>{text}</Text>) : <Text component="h4">{generatedText}</Text>
        ) : (
          <Text component="h4" style={{textAlign: 'center', margin: 'auto 0', width: '100%', userSelect: 'none', opacity: '0.4'}}>Please select your options</Text>
        )}
      </div>
      <div className="bottom-area" style={darkScheme ? { backgroundColor: darkPaperStyles.backgroundColor } : { backgroundColor: lightPaperStyles.backgroundColor }}>
        <div className="input-section">
          <NumberInput placeholder="Amount" min={0} max={999} defaultValue={options.count} onChange={handleCount} />
          <NativeSelect
            placeholder="Pick one"
            data={[
              { value: 'words', label: 'Words' },
              { value: 'sentences', label: 'Sentences' },
              { value: 'paragraphs', label: 'Paragraphs' }
            ]}
            onChange={handleUnits}
            />
          <Button 
            styles={{ 
            root: { 
              textShadow: 'none', 
              backgroundColor: '#5044FF'
            }}}
            onClick={handleGenerateText}>
            Generate
          </Button>
        </div>
        <Button 
          variant="outline" 
          leftIcon={<FileCopy />}
          styles={{ 
            root: { 
              textShadow: 'none', 
              borderColor: darkScheme ? '#fefefe' : '#393F47',
              color: darkScheme ? '#fefefe' : '#393F47'
            }}}
            onClick={handleCopyToClipboard}
            disabled={generatedText === ''}>
          Copy
        </Button>
      </div>
    </Paper>
  );
}

export default GeneratorCard;