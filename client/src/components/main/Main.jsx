import { useEffect, useState } from 'react';
import Form from '../form/Form';
import { URLS } from '../../constants/urls';
import User from '../user/User';
import { deleteData, getData } from '../../utils/api';

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
					actionDelete={userID => deleteUser(userID, usersList, setUsersList)}
				/>
			))}
		</>
	);
};

const getAllUsers = async setUsersList => {
	const data = await getData(URLS.API_USERS);
	setUsersList(data);
};
const deleteUser = async (userID, usersList, setUsersList) => {
	// const data = await deleteData(URLS.API_USERS);
	const deletedUser = usersList.filter(user => user.userId !== userID);

	console.log(deletedUser);
};
export default Main;
