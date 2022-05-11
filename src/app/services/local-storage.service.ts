import { Injectable } from '@angular/core';
import { Synonym } from '../data/synonym';
import { Translation } from '../data/translation';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  /**
   * This function save a Synonym model object to localstorage
   * @param key Unique identifier for save and lookup Synonym
   * @param data The Synonym object to save
   */
  public setSynonym(key: string, data: Synonym) {
    localStorage.setItem(key, JSON.stringify(Synonym));
  }

  /**
   * This function load a Synonym model object from localstorage
   * @param key Unique identifier for lookup Synonym
   * @returns The Synonym we looked for, or an empty Synonym if not found
   */
  public getSynonym(key: string): Synonym {
    let localData = localStorage.getItem(key);
    let synonym: Synonym;
    if (localData != null) {
      synonym = JSON.parse(localData);
    } else {
      synonym = new Synonym('', '');
    }
    return synonym;
  }

  /**
   * This function save a Translation model object to localstorage
   * @param key Unique identifier for save and lookup Translation
   * @param data The Translation object to save
   */
  public setTranslation(key: string, data: Translation) {
    localStorage.setItem(key, JSON.stringify(Translation));
  }

  /**
   * This function load a Translation model object from localstorage
   * @param key Unique identifier for lookup Translation
   * @returns The Translation we looked for, or an empty Translation if not found
   */
  public getTranslation(key: string): Translation {
    let localData = localStorage.getItem(key);
    let translation: Translation;
    if (localData != null) {
      translation = JSON.parse(localData);
    } else {
      translation = new Translation('', '','');
    }
    return translation;
  }
  
  /**
   * This function removes a unique item from localstorage
   * @param key The identifier of the removable object
   */
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * This function clears the localstorage
   */
  public clear() {
    localStorage.clear();
  }  
}
