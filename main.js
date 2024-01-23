function* idGenerator() {
    let count = 0;
    while (true) {
      yield `id${count}`;
      count++;
    }
  }
  
  const generator = idGenerator();
  console.log(generator.next().value); // 'id0'
  console.log(generator.next().value); // 'id1'
  console.log(generator.next().value); // 'id2'