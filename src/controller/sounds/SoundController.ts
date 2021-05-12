import {Round} from "../../business/Round";
import {Conditions} from "../../business/Conditions";
import {Globals} from "../../utils/Globals";
import {ISounds} from "./blueprint/ISounds";

export class SoundController {

  private readonly newRound: Round;

  constructor(newRound: Round) {
    this.newRound = newRound;
  }

  public static backgroundMusicShuffle(songArray: string[]): string {
    return songArray[Math.floor(Math.random() * songArray.length)];
  }

  // Played on Play button press
  // Sorted by the importance so sounds are not doubled. Meaning if game ends only win sound will play
  // and not correct answer sound
  public soundEffectsManager() {

    const isWordGuessed = this.newRound.items.wordBusinessView.text == this.newRound.wordBusiness;
    if (isWordGuessed) {
      ISounds.playSound(this.newRound.items.roundWinSound);
    } else if (Conditions.isSwordClicked && !Conditions.letterExists) {
      ISounds.playSound(this.newRound.items.swordHitSound);
    } else if (Conditions.isShieldClicked) {
      ISounds.playSound(this.newRound.items.shieldHitSound);
    } else if (Globals.healthSize == 0) {
      ISounds.playSound(this.newRound.items.roundLoseSound);
    } else if (Conditions.letterExists && !Conditions.isLetterAlreadyPlayed && !isWordGuessed) {
      ISounds.playSound(this.newRound.items.correctAnswerSound);
    } else if (!Conditions.letterExists && Globals.healthSize != 0 && !Conditions.isSwordClicked && !Conditions.isShieldClicked
      || !Conditions.isLetterAlreadyPlayed) {
      ISounds.playSound(this.newRound.items.wrongAnswerSound);
    }
  }

  // Played on extra item button press
  public extraItemReceivedSoundPlay() {
    ISounds.playSound(this.newRound.items.extraItemReceivedSound);
  }

  // Played on extra item button press
  public extraItemClickedSoundPlay() {
    ISounds.playSound(this.newRound.items.extraItemClickedSound);
  }

  public swordSelected() {
    ISounds.playSound(this.newRound.items.swordEnabledSound);
  }

  public shieldSelected() {
    ISounds.playSound(this.newRound.items.shieldEnabledSound);
  }

  public keyboardPress() {
    ISounds.playSound(this.newRound.items.keyboardPressSound);
  }
}
