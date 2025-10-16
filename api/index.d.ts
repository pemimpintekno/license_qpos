import { Elysia } from "elysia";
import * as _elysiajs_jwt0 from "@elysiajs/jwt";
import * as jose0 from "jose";
import * as stream0 from "stream";
import * as elysia_types0 from "elysia/types";

//#region src/index.d.ts
declare const _default: Elysia<"", {
  decorator: {
    jwt: {
      sign(signValue: Omit<{
        [x: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | {
          [key: string]: string | number | boolean | /*elided*/any | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined;
      }, "nbf" | "exp" | "iat"> & _elysiajs_jwt0.JWTPayloadInput): Promise<string>;
      verify(jwt?: string, options?: jose0.JWTVerifyOptions): Promise<false | ({
        [x: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | {
          [key: string]: string | number | boolean | /*elided*/any | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined)[] | {
          [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
        } | null | undefined;
      } & Omit<_elysiajs_jwt0.JWTPayloadSpec, never>)>;
    };
  };
  store: {};
  derive: {
    readonly html: (value: stream0.Readable | JSX.Element) => Promise<Response | string> | Response | string;
    readonly stream: <A = any>(value: (this: void, arg: A & {
      id: number;
    }) => JSX.Element, args: A) => Response | Promise<Response>;
  };
  resolve: {};
}, {
  typebox: {};
  error: {};
}, {
  schema: {};
  standaloneSchema: {};
  macro: {};
  macroFn: {};
  parser: {};
  response: any;
}, {
  get: {
    body: unknown;
    params: {};
    query: unknown;
    headers: unknown;
    response: {
      [x: string]: any;
      [x: number]: any;
      [x: symbol]: any;
    };
  };
  activate: {
    post: {
      body: {
        serialKey: string;
        deviceId: string;
      };
      params: {};
      query: unknown;
      headers: unknown;
      response: {
        [x: string]: any;
        [x: number]: any;
        [x: symbol]: any;
      };
    };
  };
  admin: {
    get: {
      body: unknown;
      params: {};
      query: unknown;
      headers: unknown;
      response: {
        [x: string]: any;
        [x: number]: any;
        [x: symbol]: any;
      };
    };
  } & {
    login: {
      post: {
        body: {
          username: string;
          password: string;
        };
        params: {};
        query: unknown;
        headers: unknown;
        response: {
          [x: string]: any;
          [x: number]: any;
          [x: symbol]: any;
        };
      };
    };
  } & {
    keys: {
      get: {
        body: unknown;
        params: {};
        query: unknown;
        headers: unknown;
        response: {
          [x: string]: any;
          [x: number]: any;
          [x: symbol]: any;
        };
      };
    };
  } & {
    keys: {
      post: {
        body: {
          email: string;
        };
        params: {};
        query: unknown;
        headers: unknown;
        response: {
          [x: string]: any;
          [x: number]: any;
          [x: symbol]: any;
        };
      };
    };
  } & {
    keys: {
      ":id": {
        deactivate: {
          post: {
            body: unknown;
            params: {
              id: string;
            };
            query: unknown;
            headers: unknown;
            response: {
              [x: string]: any;
              [x: number]: any;
              [x: symbol]: any;
            };
          };
        };
      };
    };
  } & {
    keys: {
      ":id": {
        delete: {
          body: unknown;
          params: {
            id: string;
          };
          query: unknown;
          headers: unknown;
          response: {
            [x: string]: any;
            [x: number]: any;
            [x: symbol]: any;
          };
        };
      };
    };
  };
}, {
  derive: {};
  resolve: {};
  schema: {};
  standaloneSchema: {};
  response: {};
}, {
  derive: {
    readonly profile: {
      [x: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | {
        [key: string]: string | number | boolean | /*elided*/any | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined;
    } & Omit<_elysiajs_jwt0.JWTPayloadSpec, never>;
  } | {
    readonly profile: null;
  };
  resolve: {};
  schema: {};
  standaloneSchema: {};
  response: elysia_types0.ExtractErrorFromHandle<{
    readonly profile: {
      [x: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | {
        [key: string]: string | number | boolean | /*elided*/any | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined)[] | {
        [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/any | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined)[] | /*elided*/any | null | undefined;
      } | null | undefined;
    } & Omit<_elysiajs_jwt0.JWTPayloadSpec, never>;
  } | {
    readonly profile: null;
  }>;
}>;
//#endregion
export { _default as default };