import { useState } from 'react';
import { getSessionStorage } from '../helpers/handleSessionStorage';
import UserContext from './UserContext';

let userInit = getSessionStorage('userSession');

const UserProvider = ({ children }) => {
	const [userSession, setUserSession] = useState(JSON.parse(userInit) ?? null);

	console.log('userSession-context: ', userSession);

	const data = { userSession, setUserSession };

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
