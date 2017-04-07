export let reducer = (acc, name) => {

  const count = acc[name];
  acc[name] = count ? count + 1 : 1;
  return acc;
};

// Expected
// Object({ test: 2 }) to be
// Object({ Erich: 1, Richard: 2, Ralph: 1, John: 1 }).
