const myMain = new Vue({
    el: "#root",
    data:{
        title: "",
        myClass: "margin-30 text-center"
    },
    methods: {
        askForTitle(){
            this.title = prompt("Inserisci un titolo");
        }
    }
});

myMain.askForTitle();