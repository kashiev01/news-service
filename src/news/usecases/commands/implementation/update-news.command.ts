export class UpdateNewsCommand {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly body: string,
  ) {}
}
