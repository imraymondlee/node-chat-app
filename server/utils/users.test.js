const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'R'
		}, {
			id: '2',
			name: 'Joe',
			room: 'A'
		}, {
			id: '3',
			name: 'John',
			room: 'R'
		}]
	});

	it('should add new users', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Ray',
			room: 'R'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var userId = '1';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', () => {
		var userId = '99';
		var user = users.removeUser(userId);

		expect(user).toBeFalsy();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find user', () => {
		var userId = '99';
		var user = users.getUser(userId);

		expect(user).toBeFalsy();
	});

	it('should return names for R', () => {
		var userList = users.getUserList('R');
		expect(userList).toEqual(['Mike', 'John']);
	})

	it('should return names for A', () => {
		var userList = users.getUserList('A');
		expect(userList).toEqual(['Joe']);
	})
})