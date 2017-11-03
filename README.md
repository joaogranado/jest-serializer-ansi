# jest-serializer-ansi

Jest serializer to strip ANSI escape codes

# Installation

```sh
npm install --save-dev jest-serializer-ansi
```

```sh
yarn add jest-serializer-ansi
```

Add the serializer to `snapshotSerializers` field in your `package.json` as follows:

```json
{
  ...
  "jest": {
    "snapshotSerializers": [
      "jest-serializer-ansi"
    ]
  }
}
```

Or include only in individual tests:

```js
const serializer = require('jest-serializer-ansi');

expect.addSnapshotSerializer(serializer);
```
