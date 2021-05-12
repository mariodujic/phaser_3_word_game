import {IDisplayMessage} from "./IDisplayMessage";
import {Round} from "../../business/Round";

export class DisplayMessageController implements IDisplayMessage {

  private _newRound: Round;

  constructor(newRound: Round) {
    this._newRound = newRound;
  }

  private _displayMsgList: Array<string> = [];

  public message(message: string) {
    this.messageToStack(message);
  }

  private messageToStack(message: string) {
    this._displayMsgList.push(message);
  }

  public eraseMessages() {
    this._displayMsgList = [];
  }

  get displayMsgList(): Array<string> {
    return this._displayMsgList;
  }
}
