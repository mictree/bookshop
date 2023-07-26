const date = "2001-01-31T17:00:00.000Z"

const a = new Date(date)

console.log(`${a.getDate()}- ${a.getMonth()}-${a.getFullYear()}`);

console.log(a.toLocaleTimeString('vn'));