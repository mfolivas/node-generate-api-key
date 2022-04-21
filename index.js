const { randomUUID, randomBytes, scryptSync } = require('crypto');


const generateSecretHash = (key) => {
  const salt = randomBytes(8).toString('hex');
  const buffer = scryptSync(key, salt, 32);
  return `${buffer.toString('hex')}.${salt}`;
}

const key = randomUUID()
const secret = generateSecretHash(key)
console.log("api-key: ", key);
console.log("api-secret: ", secret);
// will generate something like:
// 0NY4IrzHgLnRZUCWpxSnXLpn+Qjb1YfEj0UmnQaJiTw=
//1f59a577a1f46ea8e052cae138a1abceeb3d333ddd0b73d873827d6a35a96526
