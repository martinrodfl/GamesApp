export const getPlatformImageArray = (platformId, array) => {
	const platform = array.find((pl) => pl.platformId === platformId);

	return platform ? (platform.image ? platform.image : platform.name) : null;
};
