console.log('JS OK');


const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],

        contactIndex: 0,
        send: '',
        searchText: '',
        menuActive: undefined,
        infoIndex: undefined
    },

    methods: {

        // funzione per definire link degli avatar per ogni contatto

        avatarUrl(contact) {
            let url = `img/avatar${contact.avatar}.jpg`;
            return url;
        },

        // // funzione per definire link avatr del contatto evidenziato nella finestra messaggi

        activeAvatar() {
            let activeUrl = `img/avatar${this.contacts[this.contactIndex].avatar}.jpg`;
            return activeUrl;
        },

        // funzione per controllare valore della chiave status
        // e resituire una classe in base ad esso

        checkStatus(item) {
            if (item.status === 'sent') {
                return 'sentMessages';
            } else {
                return 'receivedMessages';
            }
        },

        // funzione per ritornare solo ore e minuti dalla stringa date di ogni oggetto

        timeFinder(elem) {
            /*let str = elem.date;
            let newStr = str.substring(11, 16);
            this.string = newStr;
            return this.string;*/
            let hour = elem.date;
            let time = hour.split(' ')[1];
            let splittedTime = time.split(':');
            let messageTime = splittedTime[0] + ':' + splittedTime[1];
            return messageTime;
        },

        // funzione per definire quale contatto della lista principale mostrare in primo piano

        activator(i) {
            this.contactIndex = i;
        },

        // funzione per aggiungere una classe sul contatto in primo piano

        selected(i) {
            if (this.contactIndex === i) {
                return 'bg-active';
            }
        },

        // funzione per generare una data nel formato consono all'array, 
        // creare un nuovo oggetto prendendo il valore dall'input,
        // e inviarlo nell'array dell'oggetto evidenziato per permetterne la stampa a schermo

        sendMessage() {
            let time = new Date();
            let today = time.getUTCMonth() + 1 + '/' + time.getUTCDate() + '/' + time.getUTCFullYear();
            let now = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
            let currentTime = today + ' ' + now;
            console.log(currentTime);
            let newMessage = {
                date: today + ' ' + now,
                message: this.send,
                status: 'sent',
            }

            let checkMessage = this.send.trim();
            if (checkMessage.length > 0) {
                this.contacts[this.contactIndex].messages.push(newMessage);

                setTimeout(() => {
                    let responseMessage = {
                        date: today + ' ' + now,
                        message: 'Ok!',
                        status: 'received',
                    }
                    this.contacts[this.contactIndex].messages.push(responseMessage);
                }, 1000)
            }

            this.send = '';
        },

        // funzione per ciclare i valori degli oggetti e resistuire
        // un risultato tramite booleana per ricerca utenti nell' input sinistro

        searchContact() {
            let verify = this.searchText.toLowerCase();
            console.log(verify);

            for (let i = 0; i < this.contacts.length; i++) {
                let checkName = this.contacts[i].name.toLowerCase();
                if (checkName.includes(verify)) {
                    this.contacts[i].visible = true;
                    console.log(this.contacts[i].name + ' ' + this.contacts[i].visible);

                } else if (!checkName.includes(verify)) {
                    this.contacts[i].visible = false;
                    console.log(this.contacts[i].name + ' ' + this.contacts[i].visible);

                }
            }
        },

        // funzione per cambiare il valore di un elemento
        // e permettere l'apertura del menù sui messaggi

        openMenu(i) {
            this.menuActive = i;
        },

        // funzione per resettare valore e chiudere il menù

        resetMenu() {

            this.menuActive = undefined;

        },

        // funzione per eliminare un messaggio

        removeMessage(i) {
            this.contacts[this.contactIndex].messages.splice(i, 1);
            this.menuActive = undefined;
        },

        // funzione per cambiare valore ad un elemento e arprire il menu informazioni

        activatorInfo(i) {
            this.infoIndex = i;
        },

        // funzione per resettare e chudere il menù informazioni

        deactiveInfo(index) {
            this.infoIndex = undefined
        }


    }
})