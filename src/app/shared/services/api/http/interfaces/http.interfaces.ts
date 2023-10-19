import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface RequestWithBody<Body> {
  url: string;
  body: Body;
  options?: Options;
}

export interface SimpleRequest {
  url: string;
  options?: Options;
}

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
