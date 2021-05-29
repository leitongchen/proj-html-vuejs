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
                link: "https://www.w3schools.com/",
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
        // click on nav link a_parent open the relative dd menu (if link.ddmenu exist)
        onLinkClick(link, event) {

            console.log("funzione ddmenu? ");
            
            if (link.ddmenu) {
                console.log("Apre o chiude ddmenu")

                link.ddMenuOpen = !link.ddMenuOpen;

            } else if (!link.ddmenu) {

                // when navbar is collapsed, showNavbar is set on false: toggle nav is hidden
                // and user click on a link a_parent without link.ddmenu
                // toggle navbar is setted to false and will disappear
                setTimeout(() => {
                    this.showNavbar = false; 
                }, 100);
            }
        },
        focusLost(link, index, event) {
            console.log("focusLost entra")

            setTimeout(() => {
                console.log('entra in setTimeout di focusLost()')
                
                // if user clicked on something that don't have a focus
                // or if it clicked on another link (menu voice of the nav)
                // the current ddMenu will close
                if(!event.relatedTarget || event.relatedTarget.localName == "a") {
                    
                    console.log("chiude ddMenu")
                    
                    link.ddMenuOpen = false;

                    // showNavbar will set on false and will be hidden if user click on
                    // - a menu voice (link a) that don't have ddmenu
                    // - on something without focus
                    // - on something with focus (link a) 
                    if (!link.ddmenu || !event.relatedTarget || event.relatedTarget.className == "dd_menu_a") {
                        console.log("false to showNavbar")

                        this.showNavbar = false; 
                    }
                }
            }, 100)            
        },

        // on click of hamburger menu, navbar show up
        onClickShowNav(event) {
            console.log("apre toggle nav")
            this.showNavbar = !this.showNavbar;

            if (event.currentTarget) {
                event.currentTarget.focus()
            }
        },
        lostFocusToggle(event) {
            console.log("entra in funzione lostFocusToggle()")

            setTimeout(() => {
                if(!event.relatedTarget || event.relatedTarget.className !== "a_parent") {
                        
                    console.log("chiude toggle menu lostFocusToggle()")
                    
                    this.showNavbar = false; 
                }
            
            }, 100)
        },
        closeNav() {
            console.log("chiude toggle nav")
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