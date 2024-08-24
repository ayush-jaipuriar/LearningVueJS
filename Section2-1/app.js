const app1 = Vue.createApp({
    el: '#app1',
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
    methods: {
      greetUser() {
        alert(`Hello, ${this.user.name}! Welcome to our store.`);
      }
    }
  }).mount("#app1");


  // Specify the element where the Vue instance will be mounted
const app2 = new Vue({
    el: '#app2',

    // Define the initial data for the component
    data: {
        // Message displayed on the page
        msg: 'Greetings from App 2!'
    }
}).mount("#app2");
  
