import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Dashboard from './Components/Dashboard';

function App() {
	const [state, setState] = React.useState('light');

	return (
		<ThemeProvider theme={createMuiTheme()}>
			<Dashboard state={state} setState={setState} />
		</ThemeProvider>
	);
}

export default App;
