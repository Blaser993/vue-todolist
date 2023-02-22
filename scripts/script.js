console.log("ciao!")


const { createApp } = Vue

toDoes = [
    {
        text: "Fare la spesa",
        done: false,
    },
    {
        text: "Rifare il letto",
        done: true,
    },
    {
        text: "Annaffiare le piante",
        done: false,
    },
    {
        text: "Scendere il cane",
        done: false,
    },

]

// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però lavoreretecon un array di oggeti, quindi ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// oltre al click sul pulsante aggiungi, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

createApp({
  data() {
    return {
        message: 'Hello Vue!',
        toDoes: toDoes,
        deleteKey: '<i class="fa-solid fa-trash"></i>',
        newTask: {text: 'Inserisci una nuova task', done: false},
        preview:""
    }
  },


  
  methods: {
    deleteTask(i){
        
        
        this.toDoes.splice(i,1)
        
        
        
        console.log(this, toDoes)
    },

    clearTesto(){
        
        
        preview = this.preview
        console.log(this.newTask.text)
    },

    addNewTask(){
        let text = this.preview.trim()

        if(text === "") {
            return
        }

        const newTask = {
            text: text,
            done: false,
        }

        this.newTask.text = this.preview
        this.toDoes.push(this.newTask)
        
        console.log(toDoes, this.preview, this )
    },
  },

}).mount('#app')

