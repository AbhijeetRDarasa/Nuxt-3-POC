export default defineEventHandler(async (event) => {
//   const { name } = getQuery(event);

//   const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=a2SGtR2WLb1liQKSk9lzFgaiX9TAfg8TuzYUZQ9A&currencies=EUR%2CUSD%2CCAD"
  );

  return data;
//   return {
//     message: `Hello, ${name} you are ${age} years old`,
//   };
});
