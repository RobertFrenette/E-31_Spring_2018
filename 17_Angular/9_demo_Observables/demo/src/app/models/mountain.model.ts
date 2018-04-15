// Create Mountain Model Class
export class Mountain {
  // properties
  public name: string = '';
  public elev: number = 0;
  public desc: string = '';
  
  constructor(name: string, elev: number, desc: string) {
    this.name = name;
    this.elev = elev;
    this.desc = desc;
  }
}
