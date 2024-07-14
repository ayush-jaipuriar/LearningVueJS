Vue.createApp({
    data() {
      return {
        items: [
          { name: "Apple", price: 0.99 },
          { name: "Banana", price: 0.79 },
          { name: "Orange", price: 1.29 },
        ],
        showGreetings: true,
        user: { 
          name: 'Alice',
          address: {
            city: 'New York',
            // street: undefined  // Uncomment to demonstrate optional chaining
          }
        }
      };
    },
  }).mount("#app");
  