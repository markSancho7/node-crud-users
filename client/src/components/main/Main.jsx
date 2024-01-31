import { useEffect, useState } from 'react';
import Form from '../form/Form';
import { URLS } from '../../constants/urls';
import User from '../user/User';
import { deleteData, getData } from '../../utils/api';
import CreateUser from '../createUser/CreateUser';

const Main = () => {
	const [usersList, setUsersList] = useState([]);
	useEffect(() => {
		getAllUsers(setUsersList);
	}, []);
	if (usersList.length === 0) return <h1>LOADING...</h1>;

	return (
		<>
			{usersList.map(user => (
				<User
					key={user.userId}
					idUsuario={user.userId}
					{...user}
					actionDelete={userID => deleteUser(userID, setUsersList)}
				/>
			))}
			<CreateUser setUsersList={setUsersList} />
		</>
	);
};

const getAllUsers = async setUsersList => {
	const data = await getData(URLS.API_USERS);
	setUsersList(data);
};
const deleteUser = async (userID, setUsersList) => {
	const usersUpdated = await deleteData(`${URLS.API_USERS}/${userID}`);
	setUsersList(usersUpdated);
};

export default Main;
