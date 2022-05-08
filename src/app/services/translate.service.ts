import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateResult } from '../interfaces/translate-result';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private static url: string =
    'https://dictionary.yandex.net/api/v1/dicservice.json/';

  private static key: string =
    'dict.1.1.20220506T132525Z.c82b70eac918dc03.dbe22a9ba59e73b7da6a2d83198bab9ae237f3be';

  constructor(private httpClient: HttpClient) {}

  /** 
   * Api call function for getting a specified translation
   * @param lang Given language we use
   * @param text Search text
   * @returns TranslateResult translation in it
   */
  translate(lang: string, text: string): Observable<TranslateResult> {
    return this.httpClient.get<TranslateResult>(
      `${TranslateService.url}lookup?key=${TranslateService.key}&lang=${lang}&text=${text}`
    );
  }

  /**
   * Api call function for getting avilable languages for the service
   * @returns Array of strings languages in it
   */
  languages(): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `${TranslateService.url}getLangs?key=${TranslateService.key}`
    );
  }
}
