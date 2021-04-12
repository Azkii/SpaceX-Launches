import './App.css';
import spaceXLogo from './images/spaceXLogo.jpg'
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { ApolloProvider,gql } from '@apollo/client';
import Launches from './components/launches/Launches';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="app">
      <nav className="app_navbar">
        <img src={spaceXLogo} alt="SpaceX logo"></img>
      </nav>
    </div>
    <Launches />
    </ApolloProvider>
  );
}

export default App;
