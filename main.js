const app = Vue.createApp({
    data() {
        return {
            //cart: 0,
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            //this.cart += 1
            id ? this.cart.push(id) : this.cart.pop() 
        }
    }
})
