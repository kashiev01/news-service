export class RegisterCommand {
  constructor(
    readonly login: string,
    readonly password: string,
    readonly name: string,
  ) {}
}
