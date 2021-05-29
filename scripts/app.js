const app = new Vue({
    el: "#app",
    data: {
        ourDoctors: ourDoctors,
        healthServices: healthServices,
        clientsList: clientsList,
        socialLinkList: socialLinkList,
        departmentsList: departmentsList,

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

        showNavbar: false,

        // FORM DATA
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

        

    },
    methods: {
        // on click open the dd menu navbar primary links
        onLinkClick(link, event) {
            console.log("apre")
            
            if (link.ddmenu) {
                link.ddMenuOpen = !link.ddMenuOpen;
            }

            // if (link.ddMenuOpen) {
            //     event.currentTarget.focus()
            // }
        },
        focusLost(link, index, event) {
            console.log("focusLost entra")

            setTimeout(() => {
                console.log('entra in setTimeout')
                
                if(!event.relatedTarget || event.relatedTarget.className === "a_parent" || event.relatedTarget.className === "dd_menu_a") {
                    
                    console.log("chiude ddMenu")
                    
                    link.ddMenuOpen = false;
                }

            }, 100)
            // if(link && !event.relatedTarget) {

            //     link.ddMenuOpen = false;
            // }
            // if (!event.relatedTarget) {
            //     this.showNavbar = false; 
            // }
            
        },

        // on click of hamburger menu, navbar show up
        onClickShowNav(event) {

            this.showNavbar = true; 
        },
        closeNav(event) {
            this.showNavbar = false; 
        },

        onSendForm() {
            const phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

            if (!this.userData.name || !this.userData.email || !this.userData.message) {
                this.formMessage = {
                    type: "error",
                    message: "Name, email and message are required.",
                } 
                return

            } 
            
            if (this.userData.phone) {

                if(!this.userData.phone.match(phoneNum)) {
                    this.formMessage = {
                        type: "error",
                        message: "Phone number is not valid. Please use this format xxx xxx xxxx",
                    } 
                    return
                }
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

        // make form message disappear
        closePopup() {

            this.formMessage = {
                type: "",
                message: "",
            } 
        },

       
    }

})