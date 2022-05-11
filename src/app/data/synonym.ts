/**
 * Model class for 2-way binding with form.
 * It contains the search parameters for getting synonyms
 */
export class Synonym {
  constructor(public language: string, public text: string) {}

  getLanguage(): string {
    return this.language;
  }

  getText(): string {
    return this.text;
  }
}
