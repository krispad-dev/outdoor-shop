import styled from 'styled-components';

export default function CartModule() {	

	return (
		<ProductModuleContainer >
			<div role={'img'} className='image-container'></div>
			<div className='info-container'>
				<div className='inner-info-container'>
					<h3>test</h3>
					<p>test</p>
					<p>test</p>
				</div>
			</div>
			<div className='actions-container'>
				<div className='inner-actions-container'></div>
			</div>
		</ProductModuleContainer>
	);
}

const ProductModuleContainer = styled.div`
	gap: 1rem;
	width: 100%;
	height: 100%;
	display: grid;

	grid-template-columns: 1fr, 1fr;
	grid-template-rows: 1fr, 1fr;

	grid-template-areas:
		'image-container info-container'
		'image-container actions-container';

	div.info-container {
		grid-area: info-container;
		background-color: ${props => props.theme.cardColor};
		display: flex;
		justify-content: center;
		align-items: center;

		div.inner-info-container {
			width: 95%;
			height: 95%;
		}
	}

	div.actions-container {
		display: flex;
		justify-content: center;
		div.inner-actions-container {
			display: flex;
			align-items: flex-end;
			height: 95%;
			width: 95%;
		}
		grid-area: actions-container;
		background-color: ${props => props.theme.cardColorDark};
	}

	div.image-container {
		grid-area: image-container;
		background-color: ${props => props.theme.cardColor};
		background-position: center;
		background-size: cover;
	}

	@media (max-width: 975px) {
		grid-template-columns: 1fr;
		grid-template-rows: 35%, 35%, 30%;

		grid-template-areas:
			'info-container'
			'image-container'
			'actions-container';
	}
`;
