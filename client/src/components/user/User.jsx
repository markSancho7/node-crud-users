const User = ({ name, email, idUsuario, actionDelete }) => {
	return (
		<>
			<p>{name}</p>
			<p>{email}</p>
			<p>{idUsuario}</p>

			<div>
				<button>Update</button>
				<button>Details</button>
				<button onClick={() => actionDelete(idUsuario)}>Delete</button>
			</div>
		</>
	);
};
export default User;
