import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {User} from "../classes/user.class";

@Injectable()
export class UsersService {
  constructor (private _http: Http) { }

  makeRequest() : void {

  }
}
