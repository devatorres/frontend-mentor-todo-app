import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({});

function Dashboard(props) {
	const { classes, state, setState } = props;

	const handleLightMode = () => {
		setState('light');
		document.documentElement.setAttribute('data-theme', 'light');
	};

	const handleDarkMode = () => {
		setState('dark');
		document.documentElement.setAttribute('data-theme', 'dark');
	};

	return '';
}

export default withStyles(styles)(Dashboard);
