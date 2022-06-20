import './App.css';
import HeroesList from './components/HeroesList';
import HeroForm from './components/HeroForm';

const App = (props) => {
  return (
    <>
      <HeroForm></HeroForm>
      <HeroesList></HeroesList>
    </>
  );
};

export default App;
