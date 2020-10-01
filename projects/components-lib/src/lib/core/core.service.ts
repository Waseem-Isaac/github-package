import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor() {
  }


  testService(){
    console.log('Core Service Works !!');
  }
}
