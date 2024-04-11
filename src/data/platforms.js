import xbox from '../assets/platforms/xbox.svg';
import ios from '../assets/platforms/ios.svg';
import windows from '../assets/platforms/windows.svg';
import apple from '../assets/platforms/apple.svg';
import linux from '../assets/platforms/linux.svg';
import nintendo from '../assets/platforms/nintendo.svg';
import playstation from '../assets/platforms/playstation.svg';
import atari from '../assets/platforms/atari.svg';
import sega from '../assets/platforms/sega.svg';
import android from '../assets/platforms/android.svg';
import gameboy from '../assets/platforms/gameboy.svg';
import n3ds from '../assets/platforms/3ds.svg';
import cube from '../assets/platforms/cube.svg';
import wii from '../assets/platforms/wii.svg';

const platforms = [
	{
		name: 'Xbox One',
		platformId: 1,
		slug: 'xbox-one',
		image: xbox,
	},
	{
		platformId: 3,
		name: 'iOS',
		slug: 'ios',
		image: ios,
	},
	{
		platformId: 4,
		name: 'PC',
		slug: 'pc',
		image: windows,
	},
	{
		platformId: 5,
		name: 'macOS',
		slug: 'macos',
		image: apple,
	},
	{
		platformId: 6,
		name: 'Linux',
		slug: 'linux',
		image: linux,
	},
	{
		platformId: 7,
		name: 'Nintendo Switch',
		slug: 'nintendo-switch',
		image: nintendo,
	},
	{
		platformId: 8,
		name: 'Nintendo 3DS',
		slug: 'nintendo-3ds',
		image: n3ds,
	},
	{
		platformId: 9,
		name: 'Nintendo DS',
		slug: 'nintendo-ds',
		image: n3ds,
	},
	{
		platformId: 10,
		name: 'Wii U',
		slug: 'wii-u',
		image: wii,
	},
	{
		platformId: 11,
		name: 'Wii',
		slug: 'wii',
		image: wii,
	},
	{
		platformId: 12,
		name: 'Neo Geo',
		slug: 'neogeo',
		image: null,
	},
	{
		platformId: 13,
		name: 'Nintendo DSi',
		slug: 'nintendo-dsi',
		image: nintendo,
	},
	{
		platformId: 14,
		name: 'Xbox 360',
		slug: 'xbox360',
		image: xbox,
	},
	{
		platformId: 15,
		name: 'PlayStation 2',
		slug: 'playstation2',
		image: playstation,
	},
	{
		platformId: 16,
		name: 'PlayStation 3',
		slug: 'playstation3',
		image: playstation,
	},
	{
		platformId: 17,
		name: 'PSP',
		slug: 'psp',
		image: playstation,
	},
	{
		platformId: 18,
		name: 'PlayStation 4',
		slug: 'playstation4',
		image: playstation,
	},
	{
		platformId: 19,
		name: 'PS Vita',
		slug: 'ps-vita',
		image: playstation,
	},
	{
		platformId: 21,
		name: 'Android',
		slug: 'android',
		image: android,
	},
	{
		platformId: 22,
		name: 'Atari Flashback',
		slug: 'atari-flashback',
		image: atari,
	},
	{
		platformId: 23,
		name: 'Atari 2600',
		slug: 'atari-2600',
		image: atari,
	},
	{
		platformId: 26,
		name: 'Game Boy',
		slug: 'game-boy',
		image: gameboy,
	},
	{
		platformId: 27,
		name: 'PlayStation',
		slug: 'playstation1',
		image: playstation,
	},
	{
		platformId: 49,
		name: 'NES',
		slug: 'nes',
		image: nintendo,
	},
	{
		platformId: 74,
		name: 'SEGA Master System',
		slug: 'sega-master-system',
		image: sega,
	},
	{
		platformId: 77,
		name: 'Game Gear',
		slug: 'game-gear',
		image: sega,
	},
	{
		platformId: 79,
		name: 'SNES',
		slug: 'snes',
		image: nintendo,
	},
	{
		platformId: 80,
		name: 'Xbox',
		slug: 'xbox-old',
		image: xbox,
	},
	{
		platformId: 83,
		name: 'Nintendo 64',
		slug: 'nintendo-64',
		image: nintendo,
	},
	{
		platformId: 105,
		name: 'GameCube',
		slug: 'gamecube',
		image: cube,
	},
	{
		platformId: 106,
		name: 'Dreamcast',
		slug: 'dreamcast',
		image: sega,
	},
	{
		platformId: 107,
		name: 'SEGA Saturn',
		slug: 'sega-saturn',
		image: sega,
	},
	{
		platformId: 111,
		name: '3DO',
		slug: '3do',
		image: n3ds,
	},
	{
		platformId: 167,
		name: 'Genesis',
		slug: 'genesis',
		image: sega,
	},
	{
		platformId: 186,
		name: 'Xbox Series S/X',
		slug: 'xbox-series-x',
		image: xbox,
	},
	{
		platformId: 187,
		name: 'PlayStation 5',
		slug: 'playstation5',
		image: playstation,
	},
];

export default platforms;
