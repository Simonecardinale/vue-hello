// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.


var arrayMenu = ["Chi siamo", "Da dove veniamo", "Dove andiamo", "Quando si mangia?"];









// Vue.js

var nav = new Vue ({
    el: '#container_vue',
    data: {
        message: 'Logo del sito',
        img: "https://cdn.pixabay.com/photo/2020/04/30/15/34/code-5113374__340.jpg",
        alt: "Development",
        border: "border",
        white: "color_white",
        none: "none"
    },

    methods: {
        clickMenu: function(){
            (this.none == false) ? this.none = true : this.none = false;
        }
    }
});