import styled from 'styled-components';
import { BsCheck2Square } from 'react-icons/bs';
import { useEffect, useState, useContext} from 'react';
import { UiStateContext } from '../../context/UiStateContext';

export default function Snack({ text }: { text: string | undefined; }) {

    const { state, dispatch } = useContext(UiStateContext)
	const [isActive, setIsActive] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'SET_DEACTIVATE_SNACK' })

        }, 2000)


    }, [state.snackIsActive])


	return (
		<SnackBar isActive={isActive}>
			<p>{text}</p>
			<BsCheck2Square />
		</SnackBar>
	);
}

const SnackBar = styled.div<{ isActive: boolean }>`
	p {
		margin-right: 0.5rem;
	}

	display: flex;
    display: ${props => props.isActive ? 'flex' : 'none'};
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 0.9rem;
	height: auto;
	padding: 1rem;
	width: auto;
	background-color: ${props => props.theme.accentColor};
	position: absolute;
	left: 1rem;
	bottom: 1rem;
	border-radius: 5px;
	animation: fadeInOut ease-in-out 0.5s forwards;
	@keyframes fadeInOut {
		from {
			opacity: 0%;
		}
		to {
			opacity: 100%;
		}
	}
`;
