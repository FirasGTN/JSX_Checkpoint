import './App.css';
import Name from './components/Name';
import Image from './components/Image';
import Price from './components/Price';
import Description from './components/Description';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <Card className='card'>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text className='SPR'>
          <p > PRICE :</p><Price/>
        </Card.Text>
        <Card.Text>
          <Description/>
        </Card.Text>
      </Card.Body>
        <Button variant="primary" className='BT'>Go somewhere</Button>
    </Card>
  );
}

export default App;
