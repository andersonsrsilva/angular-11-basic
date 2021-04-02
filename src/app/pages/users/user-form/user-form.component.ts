import { Component, Injector } from '@angular/core';
import { Validators } from "@angular/forms";

import { BaseResourceFormComponent } from "../../../shared/components/base-resource-form/base-resource-form.component"

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends BaseResourceFormComponent<User> {

  constructor(protected categoryService: UserService, protected injector: Injector) {
    super(injector, new User(), categoryService, User.fromJson)
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(5)]],
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null]
    });
  }

  protected creationPageTitle(): string {
    return "Novo usuário";
  }

  protected editionPageTitle(): string {
    const userName = this.resource.name || "";
    return "Editando Usuário: " + userName;
  }
}
