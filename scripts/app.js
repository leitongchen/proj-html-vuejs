const app = new Vue({
    el: "#app",
    data: {
        navLinksList: [
            {
                text: "home",
                link: "#",
                type: "link",
            },
            {
                text: "about",
                link: "#",
                type: "link",
                ddmenu: [
                    {
                        text: "Our Story",
                        link: "#",
                    },
                    {
                        text: "Mission",
                        link: "#",
                    },
                    {
                        text: "Vision",
                        link: "#",
                    },
                ],
                ddMenuOpen: false,
            },
            {
                text: "departments",
                link: "#",
                type: "link",
                ddmenu: departmentsList,
                ddMenuOpen: false,
            },
            {
                text: "articles",
                link: "#",
                type: "link",
            },
            {
                text: "make appointment",
                link: "#",
                type: "btn",
            },            
        ],

        userData: {
            name: "",
            email: "",
            phone: null,
            date: null,
            message: "",
        },
        sendingForm: false,
        formMessage: {
            type: "",
            message: "",
        },

        ourDoctors: ourDoctors,
        healthServices: healthServices,
        clientsList: clientsList,
        socialLinkList: socialLinkList,
        departmentsList: departmentsList,


    },
    methods: {
        onLinkClick(link, event) {
            console.log("apre")
            
            if (link.ddmenu) {
                link.ddMenuOpen = !link.ddMenuOpen;
            }

            if (link.ddMenuOpen) {
                event.currentTarget.focus()
            }
        },
        focusLost(link, event) {
            console.log("chiude")
            
            link.ddMenuOpen = false;
        },

        onSendForm() {
            
            if (!this.userData.name || !this.userData.email || !this.userData.message) {
                this.formMessage = {
                    type: "error",
                    message: "Name, email and message are required.",
                } 
                return

            } else if (Number.isNaN(this.userData.phone) && this.userData.phone) {
                this.formMessage = {
                    type: "error",
                    message: "Phone number is not valid.",
                } 
                return
            }

            this.sendingForm = true; 
            const v = this;
            setTimeout(function() {
                v.sendingForm = false; 

                v.userData = {
                    name: "",
                    email: "",
                    phone: null,
                    date: null,
                    message: "",
                    compiled: false,
                }
                v.formMessage = {
                    type: "success",
                    message: "Thank you for your message. It has been sent.",
                }  

            }, 2000)
           
            
        },
        closePopup() {

            this.formMessage = {
                type: "",
                message: "",
            } 
        }
    }

})