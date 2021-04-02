import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class User extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public username?: string,
    public password?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): User {
    return Object.assign(new User(), jsonData);
  }

}
