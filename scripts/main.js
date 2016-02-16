var React = require('react');
var ReactDOM = require('react-dom');
var CSSTransitionGroup = require('react-addons-css-transition-group');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers')

var Rebase = require('re-base');
var base = Rebase.createClass('https://luminous-inferno-2558.firebaseio.com/');

var Catalyst = require('react-catalyst');

/* Import components */
import App from './components/App';
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import Header from './components/Header';
import Fish from './components/Fish';
import Order from './components/Order';
import Inventory from './components/Inventory';
import AddFishForm from './components/AddFishForm';

/* Routes! */
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
