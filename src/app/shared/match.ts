export class Match {
    id: String;
    teama:String;
    imagea:String;
    teamb:String;
    imageb:String;
    date:String;
    location:String;
    matchtype:String;
    battingteam:String;
    winner:String;
    live:boolean;
    status:String;
    aruns:number;
    aovers:number;
    awickets:number;
    bruns:number;
    bovers:number;
    bwickets:number;
}
export const MatchType = ['ODI (One-Day International)', 'T20-international', 'Test Cricket'];
export const BattingTeam = ['Team1','Team2'];
export const Winner = ['Team1','Team2','None'];