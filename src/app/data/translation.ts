/**
 * Model class for 2-way binding with form.
 * It contains the search parameters for getting a translation
 */
export class Translation {
  constructor(
      public fromLanguage: string,
      public toLanguage: string,
      public word: string
  ) {} 
}
