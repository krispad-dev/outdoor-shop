import AdminCms from '../components/AdminCms/AdminCms';
import StyledAbsoluteContainer from '../styled-components/StyledAbsoluteContainer';


const bgImage = 
'https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export default function AdminPage() {
	return (
		<StyledAbsoluteContainer bgImage={bgImage}>
			<AdminCms />
		</StyledAbsoluteContainer>
	);
}
