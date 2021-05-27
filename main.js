const app = new Vue({
    el: "#root",
    data: {
        numeroEmail: 10,
        emailList: [],

    },

    methods: {

    },

    mounted() {

        for (let i = 0; i < this.numeroEmail; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    this.emailList.push(response.data.response);
                });
        }

    }
});