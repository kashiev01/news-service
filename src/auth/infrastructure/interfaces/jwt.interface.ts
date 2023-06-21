export interface JwtInterface {
  sign(payload: Record<string, any>);

  verify(token: string): Record<string, any>;
}
