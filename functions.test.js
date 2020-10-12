const functions = require('./functions');

// Add a description followed by a function
test('Adds 2 + 2 to equal 4', () => {
  // Pass in the function and parameters into expect()
  // Add matcher .toBe() passing in result of function call
  expect(functions.add(2,2)).toBe(4);
})


test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2,2)).not.toBe(5);
})


test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
})

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
})

test('User should be Anh Vuong object', () => {
  expect(functions.createUser()).toEqual({firstName: 'Anh', lastName: 'Vuong'})
})

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})

test('Should be under 100', () => {
  expect(functions.underOneHundred()).toBeLessThan(100);
})

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
})

test('Admin shoudl be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
})

test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })

  
  // .assertions() verifies that a certain number of assertions are called which in this case is 1
  // this is used when testing async code in order to make sure that the assertions in a callback (in this case a .then() of a promise) actually get called

  // add a return that returns the promise (if we don't have this then the test will complete before the fetch completes)
})

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham')
})