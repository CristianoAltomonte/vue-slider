var app = new Vue({
    el: '#app',
    data: {
        obj: [
            { image: 'https://images.unsplash.com/photo-1668164077013-0e7dddb0c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'},
            { image: 'https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'},
            { image: 'https://plus.unsplash.com/premium_photo-1661503210390-8fc97a27eaa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'},
            { image: 'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'}
        ],

        indice: 0,
    },
    
    methods: {
        next: function () {

            let lunghezza = this.obj.length - 1;

            if (this.indice >= lunghezza) {

                return this.indice = 0;

            }
            else {

                return this.indice++;

            }

        },

        back: function () {

            let lunghezza = this.obj.length - 1;

            if (this.indice >= lunghezza) {

                return this.indice = 1;

            }
            else {

                return this.indice --;

            }

        }
    }
})
