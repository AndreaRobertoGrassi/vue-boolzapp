var app= new Vue({
  el:'#app',
  data:{
    contattoAttivo:0,
    contact:[
      {
        img:'img/avatar_10.jpg',
        name:'Alessia',
        lastMsg:'ciao',
        clock:'20-11-2020 10:10:00',
        chat:[

        ]

      },
      {
        img:'img/avatar_2.jpg',
        name:'Marco',
        lastMsg:'ok',
        clock:'25-11-2020 10:20:00',
      }
    ]
  },
  methods:{
    chatAttiva(i){
      this.contattoAttivo=i;
    }
  }
});
