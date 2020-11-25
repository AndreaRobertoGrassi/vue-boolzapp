var app= new Vue({
  el:'#app',
  data:{

    fotoProfilo:'img/avatar_2.jpg',
    name:'Andrea',
    contattoAttivo:0,    // indice per scorrere l'array contact
    messaggioScritto:'',  //input utente
    search:'',  //input per filtrare i nomi contatti
    elimina:'ELIMINA',  // elimina messaggio
    online:'Online',    //utente online
    ultimoMsgEliminato:false,   //se elimino tutti i messaggi mi resta comunque l'ultimo accesso
    // contatti
    contact:[

      // utente1
      {
        img:'img/avatar_10.jpg',
        name:'Alessia',
        libero:true,
        messaggioInviato:false,
        ultimoAccesso:'',
        display:true,
        displayTendina:false,
        chat:[{}]

      },

      // utente2
      {
        img:'img/avatar_7.jpg',
        name:'Marco',
        libero:true,
        messaggioInviato:false,
        ultimoAccesso:'',
        display:true,
        displayTendina:false,
        chat:[{}]

      },

      // utente3
      {
        img:'img/avatar_3.jpg',
        name:'Luca',
        libero:true,
        messaggioInviato:false,
        ultimoAccesso:'',
        display:true,
        displayTendina:false,
        chat:[{}]

      },

      // utente4
      {
        img:'img/avatar_4.jpg',
        name:'Federico',
        libero:true,
        messaggioInviato:false,
        ultimoAccesso:'',
        display:true,
        displayTendina:false,
        chat:[{}]
      }
    ]
  },


  methods:{

    // funzione per filtrare i nomi contatti
    inputSearch:function () {
      this.contact.forEach(item => {
        if(item.name.toLowerCase().includes(this.search.toLowerCase())){
          item.display=true;
        }else{
          item.display=false;
        };
      });
    },

    //ultimo accesso
    last:function () {
      if (this.contact[this.contattoAttivo].libero==true && this.ultimoMsgEliminato==false) {
        this.contact[this.contattoAttivo].ultimoAccesso=this.time();
      }
    },

    // funzione per selezionare la chat cliccata
    chatAttiva:function (i) {
      this.contattoAttivo=i;
      this.contact[this.contattoAttivo].messaggioInviato=false;
      this.ultimoMsgEliminato=false;
      //scrollDown auto
      setTimeout(this.scrollDown,1);
    },

    // funzione per aggiungere messaggio inserito dall'utente all chat
    addMsg: function() {
      // controllo che abbia scritto qualcosa
      if (this.messaggioScritto != "") {
        if (this.contact[this.contattoAttivo].libero==true) {  //se la mia chat è ancora vuota
          this.contact[this.contattoAttivo].libero=false;
          this.contact[this.contattoAttivo].chat.pop({});
          this.ultimoMsgEliminato==false;
        }
        this.contact[this.contattoAttivo].messaggioInviato=true;
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

      let arrayRisposte=['ciao','ok','forse','si','non lo so'];
      let stringa=arrayRisposte[Math.floor(Math.random()*arrayRisposte.length)];
      // creo il nuovo oggetto da pushare
      let nuovoMessaggio = {
        msg: stringa,
        data: this.time(),
        stato: 'ricevuto'
      }
      // pusho l'oggetto nella chat attiva
      this.contact[this.contattoAttivo].chat.push(nuovoMessaggio);
      this.contact[this.contattoAttivo].ultimoAccesso=this.time();
      this.contact[this.contattoAttivo].messaggioInviato=false;

      //scrollDown auto
      setTimeout(this.scrollDown,1);

    },

    // funzione per eliminare il messaggio cliccato
    removeMsg:function(i){
      //rimuovo il messaggio selezionato
      this.contact[this.contattoAttivo].chat.splice(i,1);
      //se devo rimuovere l'utlimo messaggio rimasto
      if (this.contact[this.contattoAttivo].chat.length==0) {
        this.contact[this.contattoAttivo].chat.pop(i);
        this.contact[this.contattoAttivo].libero=true;
        this.ultimoMsgEliminato=true;
      }
    },

    //funzione per il menu a tendina
    dropDown:function () {
      if (this.contact[this.contattoAttivo].displayTendina==false) {
        this.contact[this.contattoAttivo].displayTendina=true;
      }else {
        this.contact[this.contattoAttivo].displayTendina=false;
      }

    },

    //funzione per chiudere il menu a tendina quando esco col mouse
    leave:function () {
      if (this.contact[this.contattoAttivo].displayTendina==true) {
        this.contact[this.contattoAttivo].displayTendina=false;
      }
    },

    // scrollDown automatico
    scrollDown:function() {
      var container = document.querySelector(".message-page");
      container.scrollTop = container.scrollHeight;
    }
  }

});
