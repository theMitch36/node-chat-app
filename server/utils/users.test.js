const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mitchell',
            room: 'theDonald'
        }, {
            id: '2',
            name: 'Steven',
            room: 'MAGA'
        }, {
            id: '3',
            name: 'Makos',
            room: 'theDonald'
        }]
    });
    it('should add a new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Mitchell',
            room: 'theDonald'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for theDonald', () => {
        var userList = users.getUserList('theDonald');

        expect(userList).toEqual(['Mitchell', 'Makos']);
    });

    it('should return names for MAGA', () => {
        var userList = users.getUserList('MAGA');

        expect(userList).toEqual(['Steven']);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should remove user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });
});