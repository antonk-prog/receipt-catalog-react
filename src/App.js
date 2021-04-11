import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import {Category} from './pages/Category';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import {Recipe} from './pages/Recipe';

function App() {
  return (
    <>
      <Router>

        <Header />
        <main className="container content">
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
