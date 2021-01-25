// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.

var app = new Vue ({
    el: '#container',
    data : {
        message: 'Hello World!',
        img: "https://cdn.pixabay.com/photo/2020/04/30/15/34/code-5113374__340.jpg",
        alt: "Development",
        border: "border"
    }
});

