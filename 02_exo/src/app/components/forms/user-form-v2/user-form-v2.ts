import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Role } from '../../../model/Role';

@Component({
  selector: 'app-user-form-v2',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form-v2.html',
  styleUrl: './user-form-v2.scss',
})
export class UserFormV2 {
  roles = Object.values(Role);

  // ────────────────────────────────────────────────────────────────────────────
  // FormGroup : regroupe plusieurs FormControl sous un objet unique.
  // Chaque FormControl accepte : (valeurInitiale, validateurSync, validateurAsync)
  //
  // Validators disponibles (built-in) :
  //   Validators.required          → le champ ne doit pas être vide
  //   Validators.requiredTrue      → la valeur doit être true (case à cocher)
  //   Validators.minLength(n)      → longueur minimale de n caractères
  //   Validators.maxLength(n)      → longueur maximale de n caractères
  //   Validators.min(n)            → valeur numérique minimale
  //   Validators.max(n)            → valeur numérique maximale
  //   Validators.email             → format email valide
  //   Validators.pattern(regex)    → correspond à une expression régulière
  //   Validators.nullValidator     → ne fait rien (placeholder utile)
  //   Validators.compose([...])    → combine plusieurs validateurs (équivalent à un tableau)
  //   Validators.composeAsync([...]) → idem pour les validateurs asynchrones
  // ────────────────────────────────────────────────────────────────────────────
  form = new FormGroup(
    {
      userName: new FormControl('aaaaaaaa', [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl('aaaaa', Validators.required),
      lastName: new FormControl('aaaa', Validators.required),
      email: new FormControl('aaaa@aa.fr', [Validators.required, Validators.email]),
      newPassword: new FormControl('aaaaaa', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('aaaaaa', []),
      roles: new FormArray<FormControl<Role | null>>([new FormControl<Role>(Role.User)]),
    },
    [this.isConfirmPasswordValid, this.isNamesValid, this.emailHasPoint],
  );

  protected onSubmit() {
    console.log(this.form.value);
  }

  protected reset() {
    this.form.reset();
  }

  protected isConfirmPasswordValid(group: AbstractControl): ValidationErrors | null {
    const isSame = group.get('newPassword')?.value === group.get('confirmPassword')?.value;
    if (!isSame) {
      return { differentPassword: true };
    }

    return null;
  }

  protected isNamesValid(group: AbstractControl): ValidationErrors | null {
    const isSame = group.get('firstName')?.value === group.get('lastName')?.value;
    if (isSame) {
      return { differentNames: true };
    }

    return null;
  }

  // On aurait pu utiliser un Validators.pattern bien sur
  protected emailHasPoint(group: AbstractControl): ValidationErrors | null {
    const email: string = group.get('email')?.value;

    if (!email?.slice(-5).includes('.')) {
      return { noPointInDomain: true };
    }

    return null;
  }

  get rolesArray(): FormArray<FormControl<Role | null>> {
    return this.form.get('roles') as FormArray<FormControl<Role | null>>;
  }

  protected addRole() {
    this.rolesArray.push(new FormControl<Role>(Role.User));
  }

  protected removeRole(index: number) {
    this.rolesArray.removeAt(index);
  }
}
