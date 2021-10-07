import './App.css';
import { Route } from 'react-router';

import HomeContainer from './Screens/Home/HomeContainer';
import { AppContainer } from './Shared/Styles/Containers';

export default function App() {
  return (
    <AppContainer>
      <Route exact path='/' component={HomeContainer} />
    </AppContainer>
  );
}


