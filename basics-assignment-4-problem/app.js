const app = Vue.createApp({
    data(){
        return{
            userInput: '',
            inputBackgroundColor: '',
            paraIsVisible: true
        }
    },
    computed: {
        paraClasses(){
            return {user1: this.userInput === 'user1', 
                   user2: this.userInput === 'user2',
                   visible: this.paraIsVisible,
                   hidden: !this.paraIsVisible
                  }
        }
    },
    methods: {
        toggleParaVisibility(){
            this.paraIsVisible = !this.paraIsVisible
        }
    }
});
app.mount("#assignment")