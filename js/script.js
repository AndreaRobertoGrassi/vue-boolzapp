var app= new Vue({
  el:'#app',
  data:{
    contattoAttivo:0,
    contact:[

      // utente1
      {
        img:'img/avatar_10.jpg',
        name:'Alessia',
        lastMsg:'',
        clock:'20-11-2020 10:10:00',
        chatIndex:0,
        chat:[
          {
            msg:'ciao come stai',
            users:'me'
          },
          {
            msg:'tutto bene',
            users:'you'
          },
          {
            msg:'ok',
            users:'me'
          }
        ]
      },

      // utente2
      {
        img:'img/avatar_2.jpg',
        name:'Marco',
        lastMsg:'',
        clock:'22-11-2020 10:20:00',
        chat:[
          {
            msg:'ciao ciao',
            users:'me'
          },
          {
            msg:'come va',
            users:'me'
          },
          {
            msg:'bene',
            users:'you'
          }
        ]
      },

      // utente3
      {
        img:'img/avatar_3.jpg',
        name:'Luca',
        lastMsg:'',
        clock:'23-11-2020 16:20:00',
        chat:[
          {
            msg:'dsjkjdkas',
            users:'me'
          },
          {
            msg:'asdaksjd kasjdkasd djkj dsdjsajdasj',
            users:'me'
          },
          {
            msg:'bene',
            users:'you'
          },
          {
            msg:'asdaksjd kasjdkasd djkj dsdjsajdasj',
            users:'me'
          }
        ]
      },

      // utente4
      {
        img:'img/avatar_4.jpg',
        name:'Marco',
        lastMsg:'',
        clock:'25-11-2020 10:20:00',
        chat:[
          {
            msg:'ciao ciao',
            users:'me'
          },
          {
            msg:'come va',
            users:'me'
          },
          {
            msg:'bene',
            users:'you'
          }
        ]
      },






    ]
  },
  methods:{
    chatAttiva(i){
      this.contattoAttivo=i;
    }
  }
});
