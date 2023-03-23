const DB = {
	levels: [
		{ id: '1', name: 'junior' },
		{ id: '2', name: 'middle' },
		{ id: '3', name: 'senior' },
	],
	skills: [
		{ id: '1', name: 'html/css' },
		{ id: '2', name: 'js' },
		{ id: '3', name: 'nodejs' },
		{ id: '4', name: 'react' },
		{ id: '5', name: 'TypeScript' },
	],
	users: [
		{
			id: '1',
			levelId: '3',
			name: 'Andriy Petrash',
			skills: ['1', '2', '3', '4', '5'],
		},

		{
			id: '2',
			levelId: '1',
			name: 'Oleg',
			skills: ['1', '2'],
		},
	],
}


const findUserById = (id) => {

	
	const user = DB.users.find(user => user.id === id);
	const level = DB.levels.find(level => level.id === user.levelId);
	// const skill = DB.users.find(skill => skill.id === user.skillId);

	return {
		name: user.name,
		position: level.name,
		// skills: skill,
	}

	
	// if (!user) {
	// 	return "Not Found";
	// }
}

const oleg = findUserById('2')
console.log(oleg)
