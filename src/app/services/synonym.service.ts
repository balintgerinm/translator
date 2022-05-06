import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SynonymResult } from '../interfaces/synonym-result';

@Injectable({
  providedIn: 'root'
})
export class SynonymService {

  private static url: string =
  'http://thesaurus.altervista.org/thesaurus/v1';

private static key: string =
  '6dtZRUBrJ8MCEtlVZz13';

  constructor(private httpClient: HttpClient) {}

  synonym(word: string, language: string): Observable<SynonymResult> {
    return this.httpClient.get<SynonymResult>(
      `${SynonymService.url}?key=${SynonymService.key}&word=${word}&language=${language}&output=json`
    );
  }

}
