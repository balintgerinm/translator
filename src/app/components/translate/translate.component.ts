import { Component, OnInit } from '@angular/core';
import { TranslateResult, Tr } from 'src/app/interfaces/translate-result';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  translates?: Tr[];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translate('en-de', 'apple');
  }

  translate(lang: string, text: string) {
    this.translateService
      .translate(lang, text)
      .subscribe((translateResult: TranslateResult) => {
        if (translateResult.def.length > 0) {
          this.translates = translateResult.def[0].tr;
        }
      });
  }
}
