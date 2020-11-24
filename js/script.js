var app= new Vue({
  el:'#app',
  data:{

    fotoProfilo:'img/avatar_2.jpg',
    name:'Andrea',
    contattoAttivo:0,    // indice per scorrere l'array contact
    messaggioScritto:'',  //input utente
    // contatti
    contact:[

      // utente1
      {
        img:'img/avatar_10.jpg',
        name:'Alessia',
        chat:[
          {
            msg:'ciaoo',
            stato:'inviato',
            data:'23-11-2020 17:57:00'
          },
          {
            msg:'no',
            stato:'ricevuto',
            data:'23-11-2020 18:03:00'
          },
          {
            msg:'forse',
            stato:'ricevuto',
            data:'23-11-2020 18:10:00'
          }
        ]
      },

      // utente2
      {
        img:'img/avatar_7.jpg',
        name:'Marco',
        chat:[
          {
            msg:'ciao ciao',
            stato:'inviato',
            data:'22-11-2020 10:12:00'
          },
          {
            msg:'come va',
            stato:'inviato',
            data:'22-11-2020 10:14:00'
          },
          {
            msg:'bene',
            stato:'ricevuto',
            data:'22-11-2020 10:20:00'
          }
        ]
      },

      // utente3
      {
        img:'img/avatar_3.jpg',
        name:'Luca',
        chat:[
          {
            msg:'dsjkjdkas',
            stato:'inviato',
            data:'20-11-2020 16:18:00'
          },
          {
            msg:'asdaksjd kasjdkasd djkj dsdjsajdasj',
            stato:'inviato',
            data:'20-11-2020 16:19:00'
          },
          {
            msg:'bene',
            stato:'ricevuto',
            data:'20-11-2020 16:19:00'
          },
          {
            msg:'asdaksjd kasjdkasd djkj dsdjsajdasj',
            stato:'ricevuto',
            data:'20-11-2020 16:20:00'
          }
        ]
      },

      // utente4
      {
        img:'img/avatar_4.jpg',
        name:'Federico',
        chat:[
          {
            msg:'ciao ciao',
            stato:'inviato',
            data:'18-11-2020 10:18:00'
          },
          {
            msg:'come va',
            stato:'inviato',
            data:'18-11-2020 10:18:00'
          },
          {
            msg:'bene jdhfjhsd dfhjdhfjf sdhfjsdf',
            stato:'ricevuto',
            data:'18-11-2020 10:20:00'
          }
        ]
      }

    ]
  },


  methods:{

    // funzione per selezionare la chat cliccata
    chatAttiva:function (i) {
      this.contattoAttivo=i;
      //scrollDown auto
      setTimeout(this.scrollDown,1);
    },

    // funzione per aggiungere messaggio inserito dall'utente all chat
    addMsg: function() {
      // controllo che abbia scritto qualcosa
      if (this.messaggioScritto != "") {
        // creo il nuovo oggetto nuovoMessaggio da pushare nell'array chat
        let nuovoMessaggio = {
          msg: this.messaggioScritto,
          data: this.time(),
          stato: 'inviato'
        }
        // pusho l'oggetto nella chat attiva e resetto l'input
        this.contact[this.contattoAttivo].chat.push(nuovoMessaggio);
        this.messaggioScritto = "";
        // dopo un toto di secondi faccio partire la funzione di risposta automatica
        setTimeout(this.rispostaAuto, (Math.floor(Math.random()*5)+1)*1000);
        //scrollDown auto
        setTimeout(this.scrollDown, 1);

      }
    },

    // funzione per avere data e ora
    time: function() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      if (hours<10) {
        hours= "0" + hours;
      }
      if (minutes<10) {
        minutes= "0" + minutes;
      }
      if (seconds<10) {
        seconds= "0" + seconds;
      }
      return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    },

    // funzione per riceve una risposta automatica
    rispostaAuto: function() {

      let arrayRisposte=['ok','forse','si','non lo so'];
      let stringa=arrayRisposte[Math.floor(Math.random()*arrayRisposte.length)];
      // creo il nuovo oggetto da pushare
      let nuovoMessaggio = {
        msg: stringa,
        data: this.time(),
        stato: 'ricevuto'
      }
      // pusho l'oggetto nella chat attiva
      this.contact[this.contattoAttivo].chat.push(nuovoMessaggio);
      //scrollDown auto
      setTimeout(this.scrollDown,1);

    },

    // scrollDown automatico
    scrollDown:function() {
      var container = document.querySelector(".message-page");
      container.scrollTop = container.scrollHeight;
    }
  }

});
