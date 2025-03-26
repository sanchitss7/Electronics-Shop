import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64encodeService {
    encodedBase64 : string | undefined;
    decodedBase64 : string | undefined;

    constructor(){

    }

    encodeBase64(value : any) : string {
        this.encodedBase64 = btoa(value);
        return this.encodedBase64;
    }

    decodeBase64(value : any) : string {
        this.decodedBase64 = atob(value);
        return this.decodedBase64;
    }
}