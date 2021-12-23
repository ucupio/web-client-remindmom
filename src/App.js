import './App.css';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, DetailChildren, DetailMedicalRecord} from './pages'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/childrens/:id">
          <DetailChildren/>
        </Route>

        <Route exact path="/medicalrecords/:id">
          <DetailMedicalRecord/>
        </Route>

        <Route path="*">
          <LandingPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
