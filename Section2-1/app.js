// Create a new Vue application instance
const app1 = Vue.createApp({
    el: '#app1',

    // Define the initial data for the component
    data() {
      return {
      // Array of objects representing items in a store
        items: [
          { name: "Apple", price: 0.99 },
          { name: "Banana", price: 0.79 },
        { name: "Orange", price: 1.29 }
      ],
        showGreetings: true,

        // Flag to control whether greetings should be shown
        showGreetings: true,

        // User object with name and address
        user: {
          name: 'Alice',
          address: {
            city: 'New York'
          name: 'Alice',
          address: {
            city: 'New York'
          }
        }
      };
    },

    // Methods available for the component
    methods: {
    // Method to display a greeting message
      greetUser() {
        alert(`Hello, ${this.user.name}! Welcome to our store.`);
      }
    }
  }).mount("#app1");

const app2 = new Vue({
  // Specify the DOM element where this instance will be mounted
    el: '#app2',

    // Define the initial data for this component
    data: {
      // Message to be displayed on the page
      msg: 'Greetings from App 2!'
    }
}).mount("#app2");
  
