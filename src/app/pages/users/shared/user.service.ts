import { Injectable, Injector } from '@angular/core';
import { User } from "./user.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";

const path = 'http://localhost:8080/basic/';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super(path + "api/users", injector, User.fromJson);
  }

}
