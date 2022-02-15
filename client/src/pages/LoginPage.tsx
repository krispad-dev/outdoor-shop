import LoginForm from '../components/login/LoginForm';
import StyledAbsoluteContainer from '../styled-components/StyledAbsoluteContainer';

const bgImage = 
'https://images.unsplash.com/photo-1500220959218-81a28e9292d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

export default function LoginPage() {
	return (
		<StyledAbsoluteContainer bgImage={bgImage}>
			<LoginForm />
		</StyledAbsoluteContainer>
	);
}
