export class Dragon {
  public readonly sound: string = 'roar!';

  public makeSound(): void {
    console.log(`dragon goes ${this.sound}`);
  }
}
