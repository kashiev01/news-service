export interface HasherInterface {
  hash(password: string);

  compare(password: string, hashedPassword: string);
}
