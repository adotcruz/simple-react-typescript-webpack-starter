import React from 'react';

import { createBrowserHistory } from 'history';
import { Container } from 'react-bootstrap';
import {
  Redirect,
  Route,
  Router,
  Switch
} from 'react-router-dom';

import { App } from './app';
import { LandingPage } from './containers/landing-page/landing-page';

const history = createBrowserHistory();

export const RouterComponent: React.FC<{}> = () => {
	return (
		<Router history={history}>
			<Container fluid className={'main-app-container'}>
				<Switch>
					<Route path="/" component={LandingPage} />
					<Route path="/test" component={App} />
					<Redirect to="/" />
				</Switch>
			</Container>
		</Router>
	);
};
