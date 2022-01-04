import './App.css';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, DetailChildren, DetailMedicalRecord, Find, Page404} from './pages'
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

function App() {
  return (
    <div className="App">
      <ThemeConfig>
        <Navbar/>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <Switch>
          <Route exact path="/childrens/:id">
            <DetailChildren/>
          </Route>

          <Route exact path="/">
            <LandingPage/>
          </Route>

          <Route path="/find">
            <Find/>
          </Route>          

          <Route path="*">
            <Page404/>
          </Route>
        </Switch>

      </ThemeConfig>
    </div>
    
  );
}

export default App;
