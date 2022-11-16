import { Realm } from "@realm/react";

export class Company extends Realm.Object<Company> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
  name!: string;
  websiteUrl!: string;
  address!: string;

  static primaryKey = "_id";

  constructor(realm: Realm, name: string, websiteUrl: string, address: string) {
    super(realm, { name, websiteUrl, address });
  }
}
