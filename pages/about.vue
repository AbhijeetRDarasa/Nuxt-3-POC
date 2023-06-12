<template>
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        consectetur iste error veritatis magnam expedita, animi mollitia dolorum a
        voluptatum dicta sapiente cumque ut assumenda! Fugiat vitae sed magnam?
        Eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla quo
        porro repellat eligendi! Ex accusamus optio repellat ad officia delectus
        maxime vitae reprehenderit architecto hic, expedita quos necessitatibus
        eaque!
      </p>
      <div>{{ data }}</div>
    </div>
  </template>
  
  <script setup>
    // const data  = await useFetch('/api/ninja?name=mario',{
    //   method:'post',
    //   body: {age:41}
    // });

    const data = await useFetch('/api/currency/USD');

</script>
  <style scoped>
  
  h2 {
      margin-bottom : 20px;
      font-size: 36px
  }
  
  p {
      margin: 20px 0;
  }
  
  </style>
  