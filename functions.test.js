const functions = require('./functions');

// these functions run before and after EVERY test
// beforeEach(() => initDatabase());
// afterEach(() => closedDatabase());

// only runs once, before and after all tests complete
// beforeAll(() => initDatabase());
// afterAll(() => closedDatabase());

// const initDatabase = () => console.log('Database initialized...');
// const closedDatabase = () => console.log('Database close...');

const nameCheck = () => console.log('Checking name...')

// Allows you to runs tests before certain tests
describe('Checking name', () => {
  beforeEach(() => nameCheck());
  
  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Anthony Collier object', () => {
  // toBe is not going to work on object or array, us toEqual
  expect(functions.createUser()).toEqual({
    firstName: 'Anthony',
    lastName: 'Collier'
  });
});

// Less than and greater than (+ or equal to)
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Promise
// test('User fetched name should be Leanne Graham', () => {
//   // leaving this out + name not matching means test still passes cause assertions were not accounted for
//   expect.assertions(1);
//   // must return promise, otherwise test may complete before promise from axios completes
//   return functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual('Leanne Graham');
//     })
// });

// Async/Await
test('User fetched name should be Leanne Graham', async () => {
  // leaving this out + name not matching means test still passes cause assertions were not accounted for
  expect.assertions(1);
  // must return promise, otherwise test may complete before promise from axios completes
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});