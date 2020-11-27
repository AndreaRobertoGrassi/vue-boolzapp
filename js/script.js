var app= new Vue({
  el:'#app',
  data:{

    fotoProfilo:'img/avatar_2.jpg',   //img profoli
    name:'Andrea',   //nome profilo
    contattoAttivo:0,    // indice per scorrere l'array contacts
    messaggioScritto:'',  //input utente
    search:'',  //input per filtrare i nomi contatti
    elimina:'ELIMINA',  // elimina messaggio
    online:'Online',    //utente online
    ultimoMsgEliminato:false,   //se elimino tutti i messaggi mi resta comunque l'ultimo accesso
    strUltimoAccesso:'Ultimo accesso il ',

    // CAMBIARE NOME E STATO PROFILO
    displayNavAside:'block',  //visibile o no la nav-aside
    modificaProfilo:'none', //visivile o no il div per modificare nome e stato
    classeModificaNome:'block', //classe la visibilita dell'input per modifca nome profilo
    classeInputModificaNome:'none',
    inputModificaNome:'',  //nome derivante dall'inputModificaNome
    statoAccount:'Disponibile',   //valore input utente
    classeModificaStato:'block', //classe la visibilita dell'input per modifca nome profilo
    classeInputModificaStato:'none',
    inputModificaStato:'',  //nome derivante dall'inputModificaNome

    // contatti
    contacts:[

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

    // FUNZIONI PER MODIFICARE NOME E STATO DEL PROFILO
      //funzione per visualizzare i dettagli profilo
      dettagliProfilo:function () {
        if (this.displayNavAside=='block') {
          this.displayNavAside='none';
          this.modificaProfilo='block';
        }else {
          this.displayNavAside='block';
          this.modificaProfilo='none';
        }
      },

      //funzione per rendere visibile l'input per modificare il nome
      modificaNome:function () {
        this.inputModificaNome=this.name;
        this.classeModificaNome='none';
        this.classeInputModificaNome='block';
      },

      //funzione per modificare il nome del profilo
      nomeModificatoInserito:function () {
        this.name=this.inputModificaNome;
        this.classeModificaNome='block';
        this.classeInputModificaNome='none';
      },

      //funzione per rendere visibile l'input per modificare lo stato del profilo
      modificaStato:function () {
        this.inputModificaStato=this.statoAccount;
        this.classeModificaStato='none';
        this.classeInputModificaStato='block';
      },

      //funzione per modificare lo stato del profilo
      statoModificatoInserito:function () {
        this.statoAccount=this.inputModificaStato;
        this.classeModificaStato='block';
        this.classeInputModificaStato='none';
      },



    // FUNZIONI CHE RIGUARDANO LA LOGICA
      // funzione per filtrare i nomi contatti
      inputSearch:function () {
        this.contacts.forEach(item => {
          if(item.name.toLowerCase().includes(this.search.toLowerCase())){
            item.display=true;
          }else{
            item.display=false;
          };
        });
      },

      // funzione per selezionare la chat cliccata
      chatAttiva:function (i) {
        this.contattoAttivo=i;
        this.contacts[this.contattoAttivo].messaggioInviato=false;
        this.ultimoMsgEliminato=false;
        //scrollDown auto
        setTimeout(this.scrollDown,1);
      },

      // funzione per aggiungere messaggio inserito dall'utente all chat
      addMsg: function() {
        // controllo che abbia scritto qualcosa
        if (this.messaggioScritto != "") {
          if (this.contacts[this.contattoAttivo].libero==true) {  //se la mia chat è ancora vuota
            this.contacts[this.contattoAttivo].libero=false;
            this.contacts[this.contattoAttivo].chat.pop({});
            this.ultimoMsgEliminato==false;
          }
          this.contacts[this.contattoAttivo].messaggioInviato=true;
          // creo il nuovo oggetto nuovoMessaggio da pushare nell'array chat
          let nuovoMessaggio = {
            msg: this.messaggioScritto,
            data: this.time(),
            stato: 'inviato'
          }
          // pusho l'oggetto nella chat attiva e resetto l'input
          this.contacts[this.contattoAttivo].chat.push(nuovoMessaggio);
          this.messaggioScritto = "";
          // dopo un toto di secondi faccio partire la funzione di risposta automatica
          setTimeout(this.rispostaAuto, (Math.floor(Math.random()*5)+1)*1000);
          //scrollDown auto
          setTimeout(this.scrollDown, 1);

        }
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
        this.contacts[this.contattoAttivo].chat.push(nuovoMessaggio);
        this.contacts[this.contattoAttivo].ultimoAccesso=this.strUltimoAccesso+this.time();
        this.contacts[this.contattoAttivo].messaggioInviato=false;

        //scrollDown auto
        setTimeout(this.scrollDown,1);

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

      //ultimo accesso
      last:function () {
        if (this.contacts[this.contattoAttivo].libero==true && this.ultimoMsgEliminato==false) {
          this.contacts[this.contattoAttivo].ultimoAccesso=this.strUltimoAccesso+this.time();
        }
        if (this.contacts[this.contattoAttivo].messaggioInviato==true) {
          this.contacts[this.contattoAttivo].ultimoAccesso= this.online;
        }
      },

      // funzione per eliminare il messaggio cliccato
      removeMsg:function(i){
        //rimuovo il messaggio selezionato
        this.contacts[this.contattoAttivo].chat.splice(i,1);
        //se devo rimuovere l'utlimo messaggio rimasto
        if (this.contacts[this.contattoAttivo].chat.length==0) {
          this.contacts[this.contattoAttivo].libero=true;
          this.ultimoMsgEliminato=true;
          this.contacts[this.contattoAttivo].chat.push({});
        }
      },

      //funzione per il menu a tendina
      dropDown:function () {
        if (this.contacts[this.contattoAttivo].displayTendina==false) {
          this.contacts[this.contattoAttivo].displayTendina=true;
        }else {
          this.contacts[this.contattoAttivo].displayTendina=false;
        }

      },

      //funzione per chiudere il menu a tendina quando esco col mouse
      leave:function () {
        if (this.contacts[this.contattoAttivo].displayTendina==true) {
          this.contacts[this.contattoAttivo].displayTendina=false;
        }
      },

      // scrollDown automatico
      scrollDown:function() {
        var container = document.querySelector(".message-page");
        container.scrollTop = container.scrollHeight;
      }
  }

});
