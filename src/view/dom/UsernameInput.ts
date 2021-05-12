import {InternalStorage} from "../../service/InternalStorage";
import {Constants} from "../../utils/Constants";
import {FirebaseDatabase} from "../../database/FirebaseDatabase";

export class UsernameInput {

  private _inputField: HTMLInputElement;

  constructor() {
    this._inputField = <HTMLInputElement>document.getElementById("username");
  }

// Input where user signs his username.
  get inputField(): HTMLInputElement {
    return this._inputField;
  }

  set inputField(value: HTMLInputElement) {
    this._inputField = value;
  }

  public inputFieldVisibility(isVisible: boolean) {
    this.inputField.style.visibility = isVisible ? "visible" : "hidden";
  }

  public resetInputFieldValue() {
    this.inputField.value = "";
  }

  public storeInputFieldLocally() {
    InternalStorage.storeData(Constants.REF_USERNAME, this.inputField.value.toString())

    let highestScore = Number(InternalStorage.loadData(Constants.BEST_SCORE_REF));
    this.updateFirebaseDatabase(this.inputField.value.toString(), highestScore)
  }

  public updateScore() {
    let username = InternalStorage.loadData(Constants.REF_USERNAME);
    let highestScore = Number(InternalStorage.loadData(Constants.BEST_SCORE_REF));
    if(username.length != 0) {
      this.updateFirebaseDatabase(username, highestScore);
    }
  }

  private updateFirebaseDatabase(newUsername: string, highestScore: number) {
    let firestore = new FirebaseDatabase();
    if (highestScore != null) {
      firestore.storeGameProgress(newUsername, highestScore);
    }
    firestore = null;
    highestScore = null;
    newUsername = null;
  }
}
