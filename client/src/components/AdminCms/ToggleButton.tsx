import { useContext } from 'react';
import { UiStateContext } from '../../context/UiStateContext';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function AdminToggleButton() {
	const { state, dispatch } = useContext(UiStateContext);

	const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		dispatch({ type: 'SET_ADMIN_MODE', payload: newAlignment });
	};

	return (
		<ToggleButtonGroup
			size='small'
			color='primary'
			value={state.adminMode}
			exclusive
			onChange={handleChange}
			fullWidth={true}
		>
			<ToggleButton value={'new'}>NY</ToggleButton>
			<ToggleButton value={'update'}>ÄNDRA</ToggleButton>
			<ToggleButton value={'delete'}>RADERA</ToggleButton>
		</ToggleButtonGroup>
	);
}
