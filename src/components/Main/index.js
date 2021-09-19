import './Main.css';
import { Text, Container } from '@mantine/core';
import GeneratorCard from '../GeneratorCard';
import Footer from '../Footer';

function Main() {
  return (
    <main>
      <Container size={768} padding={16}>
        <div>
          <Text component="h1" size={32} style={{ marginBottom: '1.5rem' }}>Lorem ipsum generator</Text>
          <Text component="h4" size={18} style={{ marginBottom: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus cursus adipiscing mollis neque nulla arcu et. Nisl.</Text>
        </div>
        <GeneratorCard />
      </Container>
      <Footer />
    </main>
  );
}

export default Main;