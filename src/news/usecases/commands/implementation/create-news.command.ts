export class CreateNewsCommand {
  constructor(
    readonly title: string,
    readonly body: string,
    readonly creator: number,
  ) {}
}
