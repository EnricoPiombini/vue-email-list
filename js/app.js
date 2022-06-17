// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


new Vue({
    el: "#app",
    data: {
        listaEmail: [],
    },
    methods: {
        generaListaEmail() {
            this.listaEmail = [];
            for (let i = 0; i < 10; i++) {
               
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        this.listaEmail.push(response.data.response)
                    })

            }
console.log(this.listaEmail);

        }
    }


}); 