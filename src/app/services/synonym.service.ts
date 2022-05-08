import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SynonymResult } from '../interfaces/synonym-result';

@Injectable({
  providedIn: 'root',
})
export class SynonymService {
  private static url: string = 'http://thesaurus.altervista.org/thesaurus/v1';

  private static key: string = '6dtZRUBrJ8MCEtlVZz13';

  constructor(private httpClient: HttpClient) {}

  /** 
   * Async function for getting synonyms using the api
   * @param word Expression string we are looking for
   * @param language The given language we use
   * @returns SynonymResult or throws error
   */
  synonym(word: string, language: string): Observable<SynonymResult> {
    return this.httpClient
      .get<SynonymResult>(
        `${SynonymService.url}?key=${SynonymService.key}&word=${word}&language=${language}&output=json`
      )
      .pipe(
        catchError((error) => {
          //alert(error.message);
          return throwError(() => error);
        })
      );
  }
}
