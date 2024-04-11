const saveSessionStorage = (key, object) => {
	try {
		const objectString = JSON.stringify(object);
		sessionStorage.setItem(key, objectString);
	} catch (error) {
		console.error('Error al intentar guardar en Local Storage:', error);
	}
};

const getSessionStorage = (key) => {
	try {
		const objectJSON = sessionStorage.getItem(key);

		if (objectJSON === 'undefined') {
			console.log(
				`No se encontró ningún valor en Local Storage para la key: ${key}`
			);
			return [];
		}
		const object = JSON.parse(objectJSON);

		return object;
	} catch (error) {
		console.error('Error al intentar obtener valor de Local Storage:', error);
		return [];
	}
};

const deleteSessionStorage = (key) => {
	try {
		sessionStorage.removeItem(key);
	} catch (error) {
		console.error('Error al intentar eliminar en Session Storage:', error);
	}
};

export { saveSessionStorage, getSessionStorage, deleteSessionStorage };
