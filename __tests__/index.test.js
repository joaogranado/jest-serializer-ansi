const serializer = require('../');

it('should strip ansi codes', () => {
  expect.addSnapshotSerializer(serializer);

  expect('foo\u001B[4mcake\u001B[0m').toMatchSnapshot();
});
