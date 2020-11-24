var app= new Vue({
  el:'#app',
  data:{
    // indice per scorrere l'array contact
    contattoAttivo:0,
    messaggioScritto:'',
    // contatti
    contact:[

      // utente1
      {
        img:'img/avatar_10.jpg',
        name:'Alessia',
        i:0,
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
    },

    // funzione per avere data e ora
    time: function() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hours = this.addZero(date.getHours());
      let minutes = this.addZero(date.getMinutes());
      let seconds = this.addZero(date.getSeconds());
      return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    },

    // funzione per aggiungere lo 0 a ore, minuti e secondi se sono inferiori a 10 (altrimenti stampa 1:3:4 al posto di 01:03:04)
    addZero: function(tempo) {
      return tempo <10 ? "0" + tempo : tempo;
    },

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
      }
    },

    rispostaAuto: function() {
      // creo il nuovo oggetto da pushare
      let nuovoMessaggio = {
        msg: "Ok",
        data: this.time(),
        stato: 'ricevuto'
      }
      // pusho l'oggetto nella chat attiva
      this.contact[this.contattoAttivo].chat.push(nuovoMessaggio);
    }

  }
});
