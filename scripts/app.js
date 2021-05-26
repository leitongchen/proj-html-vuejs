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
            },
            {
                text: "departments",
                link: "#",
                type: "link",
                childs: true,
                ddmenu: departmentsList,
                /*
                ddmenu: [
                    {
                        text: "Cardiology",
                        link: "#",
                    },
                    {
                        text: "Pediatrics",
                        link: "#",
                    },
                    {
                        text: "Diabets Care",
                        link: "#",
                    },
                    {
                        text: "Pre-Natal Care",
                        link: "#",
                    },
                    {
                        text: "Ultrasound Echocardiogram",
                        link: "#",
                    },
                ] */
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
        ourDoctors: ourDoctors,
        healthServices: healthServices,
        clientsList: clientsList,
        socialLinkList: socialLinkList,
        departmentsList: departmentsList,

        ddMenuOpen: false,

    },
    computed: {
     
    },
    methods: {
        onLinkClick(event) {
            console.log("apre")

            this.ddMenuOpen = !this.ddMenuOpen;
            if (this.ddMenuOpen) {
                event.currentTarget.focus()
            }
        },
        focusLost(event) {
            console.log("chiude")
            
            this.ddMenuOpen = false; 
            
        }
    }

})