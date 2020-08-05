import { Injectable } from '@angular/core';
import { Match } from '../shared/match';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(baseURL + 'matches')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getMatch(id: string): Observable<Match> {
    return this.http.get<Match>(baseURL + 'matches/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLiveMatch(): Observable<Match> {
    return this.http.get<Match[]>(baseURL + 'matches?live=true').pipe(map(matches => matches[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  
  getPrevMatch(): Observable<Match> {
    return this.http.get<Match[]>(baseURL + 'matches?live=false').pipe(map(matches => matches[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getMatchIds(): Observable<string[] | any> {
    return this.getMatches().pipe(map(matches => matches.map(match => match.id)))
      .pipe(catchError(error => error));
  }

  postMatch (match: Match): Observable<Match> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Match>(baseURL + 'matches/', match, httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  putMacth(match: Match): Observable<Match> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Match>(baseURL + 'matches/' + match.id, match, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
