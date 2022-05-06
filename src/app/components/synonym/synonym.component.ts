import { Component, OnInit } from '@angular/core';
import { SynonymResult } from 'src/app/interfaces/synonym-result';
import { SynonymService } from 'src/app/services/synonym.service';

@Component({
  selector: 'app-synonym',
  templateUrl: './synonym.component.html',
  styleUrls: ['./synonym.component.css'],
})
export class SynonymComponent implements OnInit {
  synonymResult?: SynonymResult;

  constructor(private synonymService: SynonymService) {}

  ngOnInit(): void {
    this.synonym('future', 'en_US');
  }

  synonym(word: string, language: string) {
    this.synonymService
      .synonym(word, language)
      .subscribe((synonymResult: SynonymResult) => {
        if (synonymResult.response.length > 0) {
          this.synonymResult = synonymResult;
        }
      });
  }
}
