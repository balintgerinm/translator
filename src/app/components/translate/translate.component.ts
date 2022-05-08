import { Component, OnInit } from '@angular/core';
import { TranslateResult, Tr } from 'src/app/interfaces/translate-result';
import { TranslateService } from 'src/app/services/translate.service';
import { Translation } from 'src/app/data/translation';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  translates?: Tr[];
  languages?: string[];
  fromL: string[] = [];
  filteredL: string[] = [];

  model = new Translation('', '', '');

  constructor(private translateService: TranslateService) {}

  /**
   * first-to-call function
   * Allows the languages to the form
   */
  ngOnInit(): void {
    this.getLanguages();
  }

  /**
   * Async function for get specified translation.
   * By subscribing the api translate function
   * it sets the translates variable
   * @param lang given language we use passen to the service function
   * @param text search expression passen to the service function
   */
  translateOne(lang: string, text: string) {
    this.translateService
      .translate(lang, text)
      .subscribe((translateResult: TranslateResult) => {
        if (translateResult.def.length > 0) {
          this.translates = translateResult.def[0].tr;
        }
      });
  }

  /**
   * Function for getting available languages
   * It works asyncronous way by subscribing the service
   * Set up for [fromL] array
   */
  getLanguages() {
    this.translateService.languages().subscribe((languageResult: string[]) => {
      if (languageResult.length > 0) {
        this.languages = languageResult;
        this.languages.forEach((element) => {
          this.fromL!.push(element.split('-')[0]);
        });
        const tmp = this.fromL;
        this.fromL = tmp.filter((n, i) => tmp.indexOf(n) === i);
      }
    });
  }

  /**
   * Helper function for getting filtered language list
   * If the from language is given it sets up the awailable 'To' languages
   * @param key the language code choosen
   */
  filterLanguages(key: string) {
    this.filteredL = [];
    this.languages!.forEach((element) => {
      if (element.split('-')[0] == key) {
        this.filteredL.push(element.split('-')[1]);
      }
    });
  }

  /**
   * Callback function called when user submits the form
   * It performs the translateOne function with the state of the model
   */
  onSubmit() {
    this.translateOne(
      this.model.fromLanguage + '-' + this.model.toLanguage,
      this.model.word
    )
  }
}
