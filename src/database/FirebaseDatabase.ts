import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {Config} from "../config/Config";
import {Constants} from "../utils/Constants";
import {InternalStorage} from "../service/InternalStorage";

export class FirebaseDatabase {

  public static initializeFirebase() {
    firebase.initializeApp(Config.FIREBASE_CONFIG);
    // Checking if there is internet connection.
  }

  private getFirestoreInstance() {
    return firebase.firestore();
  }

  public storeGameProgress(username: string, score: number) {

    let data = {
      "username": username,
      "score": score,
    };

    this.getFirestoreInstance()
      .collection(Constants.REF_COLLECTION_FB)
      .doc(InternalStorage.loadData(Constants.REF_USER_UNIQUE_ID))
      .set(data);
  }

  public async retrieveLadderRankings() {
    const snapshot = await this.getFirestoreInstance().collection(Constants.REF_COLLECTION_FB).get();
    return snapshot.docs.map(doc => doc.data()).sort((a, b) => {
      // a[0], b[0] is the key of the map
      return b["score"] - a["score"];
    });
  }
}
