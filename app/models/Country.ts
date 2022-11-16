import { Realm } from "@realm/react";
import { Company } from "./Companies";

export class Country extends Realm.Object<Country> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
  code!: string;
  companies!: Realm.Types.List<Company>;

  static primaryKey = "_id";

  constructor(realm: Realm, code: string, companies?: any) {
    super(realm, { code, companies });
  }
}
