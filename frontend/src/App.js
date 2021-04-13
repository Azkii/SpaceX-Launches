import './App.css';
import spaceXLogo from './images/spaceXLogo.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { ApolloProvider,gql } from '@apollo/client';
import Launches from './components/launches/Launches';
import Launch from './components/launch/Launch';
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="app">
        <nav className="app_navbar">
          <img src={spaceXLogo} alt="SpaceX logo"></img>
        </nav>
      </div>
      <Route exact path="/" component={Launches} />
      <Route exact path="/launch/:flight_number" component={Launch} />
    </Router>
    </ApolloProvider>
  );
}

export default App;
