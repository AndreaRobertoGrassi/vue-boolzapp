var app= new Vue({
  el:'#app',
  data:{
    // indice per scorrere l'array contact
    contattoAttivo:0,
    // contatti
    contact:[

      // utente1
      {
        img:'img/avatar_10.jpg',
        name:'Alessia',
        chatIndex:0,
        chat:[
          {
            msg:'ciao come stai',
            users:'me',
            lastSeen:'22-11-2020 17:57:00'
          },
          {
            msg:'tutto bene',
            users:'you',
            lastSeen:'22-11-2020 18:03:00'
          },
          {
            msg:'ok',
            users:'me',
            lastSeen:'22-11-2020 18:10:00'
          }
        ]
      },

      // utente2
      {
        img:'img/avatar_2.jpg',
        name:'Marco',
        chat:[
          {
            msg:'ciao ciao',
            users:'me',
            lastSeen:'22-11-2020 10:12:00'
          },
          {
            msg:'come va',
            users:'me',
            lastSeen:'22-11-2020 10:14:00'
          },
          {
            msg:'bene',
            users:'you',
            lastSeen:'22-11-2020 10:20:00'
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
            users:'me',
            lastSeen:'23-11-2020 16:18:00'
          },
          {
            msg:'asdaksjd kasjdkasd djkj dsdjsajdasj',
            users:'me',
            lastSeen:'23-11-2020 16:19:00'
          },
          {
            msg:'bene',
            users:'you',
            lastSeen:'23-11-2020 16:19:00'
          },
          {
            msg:'asdaksjd kasjdkasd djkj dsdjsajdasj',
            users:'me',
            lastSeen:'23-11-2020 16:20:00'
          }
        ]
      },

      // utente4
      {
        img:'img/avatar_4.jpg',
        name:'Marco',
        chat:[
          {
            msg:'ciao ciao',
            users:'me',
            lastSeen:'25-11-2020 10:18:00'
          },
          {
            msg:'come va',
            users:'me',
            lastSeen:'25-11-2020 10:18:00'
          },
          {
            msg:'bene jdhfjhsd dfhjdhfjf sdhfjsdf',
            users:'you',
            lastSeen:'25-11-2020 10:20:00'
          }
        ]
      }

    ]
  },
  methods:{
    // funzione per selezionare la chat cliccata
    chatAttiva(i){
      this.contattoAttivo=i;
    }
  }
});
