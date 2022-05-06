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

  model = new Translation('en', 'de', '');
  submitted = false;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.getLanguages();
  }

  translateOne(lang: string, text: string) {
    this.translateService
      .translate(lang, text)
      .subscribe((translateResult: TranslateResult) => {
        if (translateResult.def.length > 0) {
          this.translates = translateResult.def[0].tr;
        }
      });
  }

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

  filterLanguages(key: string) {
    console.log(key);
    this.filteredL = [];
    this.languages!.forEach((element) => {
      if (element.split('-')[0] == key) {
        this.filteredL.push(element.split('-')[1]);
      }
    });
    console.log(this.filteredL);
  }

  onSubmit() {
    this.submitted = true;
  }
}
