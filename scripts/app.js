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
                childs: [
                    {
                        text: "general practice",
                        link: "#",
                        type: "link",
                    },
                    {
                        text: "cardiology",
                        link: "#",
                        type: "link",
                    },
                    {
                        text: "pediatrics",
                        link: "#",
                        type: "link",
                    },
                ]
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
        ourDoctors: [
            {
                name: "Jon Snow",
                department: "Anesthesiologist",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
                photo: "doctor-1.jpg",
                socialLinks: [
                    {
                        text: "facebook-f", 
                        link: "#"
                    },
                    {
                        text: "twitter", 
                        link: "#"
                    },
                    {
                        text: "instagram", 
                        link: "#"
                    },
                ]
            },
            {
                name: "Toni Stark",
                department: "Cardiologist",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
                photo: "doctor-2.jpg",
                socialLinks: [
                    {
                        text: "facebook-f", 
                        link: "#"
                    },
                    {
                        text: "twitter", 
                        link: "#"
                    },
                    {
                        text: "instagram", 
                        link: "#"
                    },
                ]
            },
            {
                name: "Anna Smith",
                department: "Nurse Practitioner",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
                photo: "doctor-3.jpg",
                socialLinks: [
                    {
                        text: "facebook-f", 
                        link: "#"
                    },
                    {
                        text: "twitter", 
                        link: "#"
                    },
                    {
                        text: "instagram", 
                        link: "#"
                    },
                ]
            },
        ],
        healthServices: [
            {
                icon: "14.png",
                name: "Rehabilitation Center",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
            },
            {
                icon: "15.png",
                name: "Dental Implants",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
            },
            {
                icon: "16.png",
                name: "Medicine Research",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
            },
            {
                icon: "11.png",
                name: "Blood Bank",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
            },
            {
                icon: "12.png",
                name: "Pharmaceutical advice",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
            },
            {
                icon: "13.png",
                name: "Medical Counseling",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
            },
        ],
        clientsList: [
            {
                name: "Healthy",
                logo: "-1.png"
            }, 
            {
                name: "Health",
                logo: "-2.png"
            }, 
            {
                name: "Turbo Power",
                logo: "-3.png"
            }, 
            {
                name: "Color Power",
                logo: "-4.png"
            }, 
        ],
        socialLinkList: [
            {
                text: "facebook-f", 
                link: "www.facebook.com"
            }, 
            {
                text: "twitter", 
                link: "www.twitter.com"
            }, 
            {
                text: "youtube", 
                link: "www.youtube.com"
            }, 
            {
                text: "instagram", 
                link: "www.instagram.com"
            }, 
        ],
        departmentsList: [
            {
                name: "Cardiology",
                link: "#",
            },
            {
                name: "Pediatrics",
                link: "#",
            },
            {
                name: "Diabets Care",
                link: "#",
            },
            {
                name: "Pre-Natal Care",
                link: "#",
            },
            {
                name: "Ultrasound Echocardiogram",
                link: "#",
            },
        ]

    },
    methods: {


    }

})