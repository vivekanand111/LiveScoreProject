import { score } from './score';
export class Match {
    id: number;
    teama:String;
    imagea:String;
    teamb:String;
    imageb:String;
    date:String;
    location:String;
    winner:String;
    live:boolean;
    status:String;
    ascore:score;
    bscore:score;
}