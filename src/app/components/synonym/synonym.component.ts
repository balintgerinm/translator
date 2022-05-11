import { Component, OnInit } from '@angular/core';
import { Synonym } from 'src/app/data/synonym';
import { SynonymResult } from 'src/app/interfaces/synonym-result';
import { SynonymService } from 'src/app/services/synonym.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-synonym',
  templateUrl: './synonym.component.html',
  styleUrls: ['./synonym.component.css'],
})
export class SynonymComponent implements OnInit {
  synonymResult?: SynonymResult;
  languages: string[] = [
    'cs_CZ',
    'da_DK',
    'de_CH',
    'de_DE',
    'en_US',
    'el_GR',
    'es_ES',
    'fr_FR',
    'hu_HU',
    'it_IT',
    'no_NO',
    'pl_PL',
    'pt_PT',
    'ro_RO',
    'ru_RU',
    'sk_SK',
  ];

  model = new Synonym('', '');

  constructor(
    private synonymService: SynonymService,
    private localStorageService: LocalStorageService
  ) {}

  /**
   * first-to-call function
   * Set the last synonym fields on the form
   */
  ngOnInit(): void {
    this.model = this.localStorageService.getSynonym('lastSynonym');
  }

  /**
   * Async function for getting synonyms
   * it subscribes the synonym api call and perform asynchronicity
   * @param word search expression
   * @param language given language in which we search
   */
  synonym(word: string, language: string) {
    this.synonymService
      .synonym(word, language)
      .subscribe((synonymResult: SynonymResult) => {
        if (synonymResult.response.length > 0) {
          this.synonymResult = synonymResult;
        }
        this.localStorageService.removeItem('lastSynonym');
        this.localStorageService.setSynonym('lastSynonym', this.model);
      });
  }

  /**
   * Callback function called when user submits the form
   */
  onSubmit() {
    this.synonym(this.model.text, this.model.language);
  }
}
