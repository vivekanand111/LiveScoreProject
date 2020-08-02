import { Injectable } from '@angular/core';
import { Match } from '../shared/match';
import { MATCHES } from '../shared/matches';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor() { }
  getMatches(): Match[] {
    return MATCHES;
  }
  getMatch(id: number): Match {
    return MATCHES.filter((match) => (match.id === id))[0];
  }
  getLiveMatch(): Match {
    return MATCHES.filter((match) => match.live)[0];
  }
}
