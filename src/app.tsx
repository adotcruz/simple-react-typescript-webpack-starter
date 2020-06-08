import React, { Component } from 'react';

import {
  Col,
  Container,
  Row
} from 'react-bootstrap';

export class App extends Component<{}, {}> {
	constructor(props: {}) {
		super(props);
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h1>Hello friend!</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}
