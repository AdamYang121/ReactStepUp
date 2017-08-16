var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results') 
var Todo = require('./Todo') 

class App extends React.Component{
	render(){
		return(
			<Router>
				<div className="container">
					<Nav />
					<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/battle' component={Battle} />
					<Route path='/battle/results' component={Results} />
					<Route path='/popular' component={Popular} />
					<Route path='/todo' component={Todo} />
					<Route render={function(){
						return <p>Oops! Wrong Place!</p>
					}}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = App;