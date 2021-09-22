import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetails from './pages/BookDetails';
import BookShelf from './pages/BookShelf';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path={['/', '/Home', 'home']}>
            <Home />
          </Route>
          <Route path="/bookshelf">
            <BookShelf />
          </Route>
          <Route path="/bookshelf/:id">
            <BookDetails />
          </Route>
          <Route path="/add">
            <AddBook />
          </Route>
          <Route path="/edit">
            <EditBook />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
