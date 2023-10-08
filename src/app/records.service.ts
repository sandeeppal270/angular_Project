import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] =  ["sandeep pal","E1234id","sandeeppal270@gmail.com"]
  info2: string[] =  ["deepu pal","E1234id_deepu","deepu270@gmail.com"]
  info3: string[] =  ["kapil pal","E1234id_kapil","kapilpal0@gmail.com"]

  getinfo1(): string[]{
    return this.info1

  }
  getinfo2(): string[]{
    return this.info2

  }
  getinfo3(): string[]{
    return this.info3

  }


  constructor() { }
}
