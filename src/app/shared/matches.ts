import { Match } from "./match";

export const MATCHES: Match[]=[
    {
        id: 1,
        teama:'ind',
        imagea: '/assets/images/India.png',
        teamb:'pak',
        imageb: '/assets/images/Pakistan.png',
        date:'2/2/2',
        location:'Hyderabad',
        winner:'0',
        status:'India Batting',
        live:true,
        ascore:{
            overs :10,
            runs :36,
            wickets :2  
        },
        bscore:{
            overs :0,
            runs :0,
            wickets :0
        }
    },
    {
        id: 2,
        teama:'eng',
        imagea: '/assets/images/England.png',
        teamb:'pak',
        imageb: '/assets/images/Pakistan.png',
        date:'2/2/2',
        location:'Hyderabad',
        winner:'a',
        status:'Eng won',
        live:false,
        ascore:{
            overs :20,
            runs :106,
            wickets :2  
        },
        bscore:{
            overs :20,
            runs :105,
            wickets :10
        }
    },
    {
        id: 3,
        teama:'ind',
        imagea: '/assets/images/India.png',
        teamb:'eng',
        imageb: '/assets/images/England.png',
        date:'2/2/2',
        location:'Hyderabad',
        winner:'d',
        status:'Draw Match',
        live:false,
        ascore:{
            overs :20,
            runs :120,
            wickets :2  
        },
        bscore:{
            overs :20,
            runs :120,
            wickets :3
        }
    }
]