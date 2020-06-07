import React, { Component } from 'react';

// tslint:disable-next-line: no-submodule-imports
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';

import { RouterComponent } from './router';

export class RootComponent extends Component<{}, {}> {
	constructor(props: {}) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<RouterComponent />
			</BrowserRouter>
		);
	}
}

export const Root = hot(RootComponent);
