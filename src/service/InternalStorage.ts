import {Constants} from "../utils/Constants";
import {FirebaseDatabase} from "../database/FirebaseDatabase";

export class InternalStorage {

  public getBestScore(): number {
    return Number(localStorage.getItem(Constants.BEST_SCORE_REF));
  }

  public storeBestScore(currentScore: number) {

    let username = InternalStorage.loadData(Constants.REF_USERNAME);
    if (currentScore > this.getBestScore()) {
      localStorage.setItem(Constants.BEST_SCORE_REF, currentScore.toString());
      if(username != null) {
        let firebase = new FirebaseDatabase();
        firebase.storeGameProgress(username, currentScore);
        firebase = null;
      }
    }
  }


  static hasSound(type: string): boolean {
    let fetch = localStorage.getItem(type);
    if (fetch === Constants.SOUND_SETTINGS_ON_REF) {
      return true;
    } else return fetch !== Constants.SOUND_SETTINGS_OFF_REF;
  }

  static set musicSound(value: string) {
    localStorage.setItem(Constants.MUSIC_SETTINGS_REF, value);
  }

  static set soundEffect(value: string) {
    localStorage.setItem(Constants.EFFECTS_SETTINGS_REF, value);
  }

  static storeData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  static loadData(key: string): string {
    return localStorage.getItem(key);
  }
}
