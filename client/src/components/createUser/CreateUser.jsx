import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';

const CreateUser = ({ setUsersList }) => {
	return (
		<form onSubmit={event => handleSubmit(event, setUsersList)}>
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' />
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' />
			</div>
			<button>Create New User</button>
		</form>
	);
};
const createNewUser = async (name, email, setUsersList) => {
	const newUser = { name, email };

	const newUsers = await postData(URLS.API_USERS, newUser);
	setUsersList(newUsers);
};

const validateForm = (name, email, setUsersList) => {
	if (!name || !email) return;

	createNewUser(name, email, setUsersList);
};

const handleSubmit = (event, setUsersList) => {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;

	validateForm(name, email, setUsersList);
};
export default CreateUser;
