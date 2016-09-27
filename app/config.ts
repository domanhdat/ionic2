import {Injectable} from '@angular/core';

@Injectable()
export class Config {
  apiDev: string = 'http://localhost:3000';
  apiProd: string = 'http://localhost:3000';

  public apiRoot() {
    return this.apiDev;
    // return this.apiProd;
  }
}
