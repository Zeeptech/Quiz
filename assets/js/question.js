const questions = [
    {
        prompt:"Your friends needs you in battle, what do you do?",
        options:[
            {
                title:"I rush",
                values:[
                    {
                        attribute:"aggressive",
                        increase:70
                    },
                    {
                        attribute:"friendly",
                        increase:-20
                    }
                ]

            },
            {
                title:"I stand behind",
                values:[
                    {
                        attribute:"divinity",
                        increase:100
                    },
                    {
                        attribute:"friendly",
                        increase:25
                    }
                ]

            },
            {
                title:"I snipe",
                values:[
                    {
                        attribute:"agillity",
                        increase:100
                    },
                    {
                        attribute:"friendly",
                        increase:25
                    }
                ]

            }
        ]
    },
    {
        prompt:"Do you like pineapple on pizza?",
        options:[
            {
                title:"Fuck You",
                values:[
                    {
                        attribute:"down",
                        increase:1000
                    }
                ]

            },
            {
                title:"Fuck Me",
                values:[
                    {
                        attribute:"down",
                        increase:100
                    }
                ]

            }
        ]
    },
    {
        prompt:"You walk down an unlit alley, are you afraid?",
        options:[
            {
                title:"Pfft, i can handle myself!",
                values:[
                    {
                        attribute:"agressive",
                        increase:25
                    }
                ]

            },
            {
                title:"Im not afraid, i just choose to go another way",
                values:[
                    {
                        attribute:"honesty",
                        increase:45
                    },
                    {
                        attribute:"cunning",
                        increase:45
                    }
                ]

            }
        ]
    },
]
export default questions;