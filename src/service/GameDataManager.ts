import jsonEn from "../../assets/data/words_en.json";

/*
Fetching data from a JSON and sending it to a GameScene and into a secret word view
 */
export class GameDataManager {

  private _randomWordArray: Array<string>;

  public generateRandomObject(): void {
    let number = this.randomNumber();
    this._randomWordArray = [jsonEn[number].word, jsonEn[number].description];
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * jsonEn.length) + 0;
  }

  public getRandomObject(): Array<string> {
    return this._randomWordArray;
  }
}
