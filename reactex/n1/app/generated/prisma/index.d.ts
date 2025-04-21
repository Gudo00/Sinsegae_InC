
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tbl_todo
 * 
 */
export type tbl_todo = $Result.DefaultSelection<Prisma.$tbl_todoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_todos
 * const tbl_todos = await prisma.tbl_todo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tbl_todos
   * const tbl_todos = await prisma.tbl_todo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tbl_todo`: Exposes CRUD operations for the **tbl_todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_todos
    * const tbl_todos = await prisma.tbl_todo.findMany()
    * ```
    */
  get tbl_todo(): Prisma.tbl_todoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tbl_todo: 'tbl_todo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tbl_todo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tbl_todo: {
        payload: Prisma.$tbl_todoPayload<ExtArgs>
        fields: Prisma.tbl_todoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_todoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_todoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_todoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_todoPayload>
          }
          findFirst: {
            args: Prisma.tbl_todoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_todoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_todoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_todoPayload>
          }
          findMany: {
            args: Prisma.tbl_todoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_todoPayload>[]
          }
          create: {
            args: Prisma.tbl_todoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_todoPayload>
          }
          createMany: {
            args: Prisma.tbl_todoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_todoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_todoPayload>
          }
          update: {
            args: Prisma.tbl_todoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_todoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_todoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_todoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_todoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_todoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_todoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_todo>
          }
          groupBy: {
            args: Prisma.tbl_todoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_todoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_todoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_todoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tbl_todo?: tbl_todoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model tbl_todo
   */

  export type AggregateTbl_todo = {
    _count: Tbl_todoCountAggregateOutputType | null
    _avg: Tbl_todoAvgAggregateOutputType | null
    _sum: Tbl_todoSumAggregateOutputType | null
    _min: Tbl_todoMinAggregateOutputType | null
    _max: Tbl_todoMaxAggregateOutputType | null
  }

  export type Tbl_todoAvgAggregateOutputType = {
    tno: number | null
  }

  export type Tbl_todoSumAggregateOutputType = {
    tno: number | null
  }

  export type Tbl_todoMinAggregateOutputType = {
    tno: number | null
    moddate: Date | null
    regdate: Date | null
    title: string | null
    writer: string | null
  }

  export type Tbl_todoMaxAggregateOutputType = {
    tno: number | null
    moddate: Date | null
    regdate: Date | null
    title: string | null
    writer: string | null
  }

  export type Tbl_todoCountAggregateOutputType = {
    tno: number
    moddate: number
    regdate: number
    title: number
    writer: number
    _all: number
  }


  export type Tbl_todoAvgAggregateInputType = {
    tno?: true
  }

  export type Tbl_todoSumAggregateInputType = {
    tno?: true
  }

  export type Tbl_todoMinAggregateInputType = {
    tno?: true
    moddate?: true
    regdate?: true
    title?: true
    writer?: true
  }

  export type Tbl_todoMaxAggregateInputType = {
    tno?: true
    moddate?: true
    regdate?: true
    title?: true
    writer?: true
  }

  export type Tbl_todoCountAggregateInputType = {
    tno?: true
    moddate?: true
    regdate?: true
    title?: true
    writer?: true
    _all?: true
  }

  export type Tbl_todoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_todo to aggregate.
     */
    where?: tbl_todoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_todos to fetch.
     */
    orderBy?: tbl_todoOrderByWithRelationInput | tbl_todoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_todoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_todos
    **/
    _count?: true | Tbl_todoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_todoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_todoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_todoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_todoMaxAggregateInputType
  }

  export type GetTbl_todoAggregateType<T extends Tbl_todoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_todo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_todo[P]>
      : GetScalarType<T[P], AggregateTbl_todo[P]>
  }




  export type tbl_todoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_todoWhereInput
    orderBy?: tbl_todoOrderByWithAggregationInput | tbl_todoOrderByWithAggregationInput[]
    by: Tbl_todoScalarFieldEnum[] | Tbl_todoScalarFieldEnum
    having?: tbl_todoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_todoCountAggregateInputType | true
    _avg?: Tbl_todoAvgAggregateInputType
    _sum?: Tbl_todoSumAggregateInputType
    _min?: Tbl_todoMinAggregateInputType
    _max?: Tbl_todoMaxAggregateInputType
  }

  export type Tbl_todoGroupByOutputType = {
    tno: number
    moddate: Date | null
    regdate: Date | null
    title: string
    writer: string | null
    _count: Tbl_todoCountAggregateOutputType | null
    _avg: Tbl_todoAvgAggregateOutputType | null
    _sum: Tbl_todoSumAggregateOutputType | null
    _min: Tbl_todoMinAggregateOutputType | null
    _max: Tbl_todoMaxAggregateOutputType | null
  }

  type GetTbl_todoGroupByPayload<T extends tbl_todoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_todoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_todoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_todoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_todoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_todoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tno?: boolean
    moddate?: boolean
    regdate?: boolean
    title?: boolean
    writer?: boolean
  }, ExtArgs["result"]["tbl_todo"]>



  export type tbl_todoSelectScalar = {
    tno?: boolean
    moddate?: boolean
    regdate?: boolean
    title?: boolean
    writer?: boolean
  }

  export type tbl_todoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tno" | "moddate" | "regdate" | "title" | "writer", ExtArgs["result"]["tbl_todo"]>

  export type $tbl_todoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_todo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tno: number
      moddate: Date | null
      regdate: Date | null
      title: string
      writer: string | null
    }, ExtArgs["result"]["tbl_todo"]>
    composites: {}
  }

  type tbl_todoGetPayload<S extends boolean | null | undefined | tbl_todoDefaultArgs> = $Result.GetResult<Prisma.$tbl_todoPayload, S>

  type tbl_todoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_todoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_todoCountAggregateInputType | true
    }

  export interface tbl_todoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_todo'], meta: { name: 'tbl_todo' } }
    /**
     * Find zero or one Tbl_todo that matches the filter.
     * @param {tbl_todoFindUniqueArgs} args - Arguments to find a Tbl_todo
     * @example
     * // Get one Tbl_todo
     * const tbl_todo = await prisma.tbl_todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_todoFindUniqueArgs>(args: SelectSubset<T, tbl_todoFindUniqueArgs<ExtArgs>>): Prisma__tbl_todoClient<$Result.GetResult<Prisma.$tbl_todoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_todo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_todoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_todo
     * @example
     * // Get one Tbl_todo
     * const tbl_todo = await prisma.tbl_todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_todoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_todoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_todoClient<$Result.GetResult<Prisma.$tbl_todoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_todoFindFirstArgs} args - Arguments to find a Tbl_todo
     * @example
     * // Get one Tbl_todo
     * const tbl_todo = await prisma.tbl_todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_todoFindFirstArgs>(args?: SelectSubset<T, tbl_todoFindFirstArgs<ExtArgs>>): Prisma__tbl_todoClient<$Result.GetResult<Prisma.$tbl_todoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_todo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_todoFindFirstOrThrowArgs} args - Arguments to find a Tbl_todo
     * @example
     * // Get one Tbl_todo
     * const tbl_todo = await prisma.tbl_todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_todoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_todoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_todoClient<$Result.GetResult<Prisma.$tbl_todoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_todoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_todos
     * const tbl_todos = await prisma.tbl_todo.findMany()
     * 
     * // Get first 10 Tbl_todos
     * const tbl_todos = await prisma.tbl_todo.findMany({ take: 10 })
     * 
     * // Only select the `tno`
     * const tbl_todoWithTnoOnly = await prisma.tbl_todo.findMany({ select: { tno: true } })
     * 
     */
    findMany<T extends tbl_todoFindManyArgs>(args?: SelectSubset<T, tbl_todoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_todoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_todo.
     * @param {tbl_todoCreateArgs} args - Arguments to create a Tbl_todo.
     * @example
     * // Create one Tbl_todo
     * const Tbl_todo = await prisma.tbl_todo.create({
     *   data: {
     *     // ... data to create a Tbl_todo
     *   }
     * })
     * 
     */
    create<T extends tbl_todoCreateArgs>(args: SelectSubset<T, tbl_todoCreateArgs<ExtArgs>>): Prisma__tbl_todoClient<$Result.GetResult<Prisma.$tbl_todoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_todos.
     * @param {tbl_todoCreateManyArgs} args - Arguments to create many Tbl_todos.
     * @example
     * // Create many Tbl_todos
     * const tbl_todo = await prisma.tbl_todo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_todoCreateManyArgs>(args?: SelectSubset<T, tbl_todoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_todo.
     * @param {tbl_todoDeleteArgs} args - Arguments to delete one Tbl_todo.
     * @example
     * // Delete one Tbl_todo
     * const Tbl_todo = await prisma.tbl_todo.delete({
     *   where: {
     *     // ... filter to delete one Tbl_todo
     *   }
     * })
     * 
     */
    delete<T extends tbl_todoDeleteArgs>(args: SelectSubset<T, tbl_todoDeleteArgs<ExtArgs>>): Prisma__tbl_todoClient<$Result.GetResult<Prisma.$tbl_todoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_todo.
     * @param {tbl_todoUpdateArgs} args - Arguments to update one Tbl_todo.
     * @example
     * // Update one Tbl_todo
     * const tbl_todo = await prisma.tbl_todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_todoUpdateArgs>(args: SelectSubset<T, tbl_todoUpdateArgs<ExtArgs>>): Prisma__tbl_todoClient<$Result.GetResult<Prisma.$tbl_todoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_todos.
     * @param {tbl_todoDeleteManyArgs} args - Arguments to filter Tbl_todos to delete.
     * @example
     * // Delete a few Tbl_todos
     * const { count } = await prisma.tbl_todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_todoDeleteManyArgs>(args?: SelectSubset<T, tbl_todoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_todoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_todos
     * const tbl_todo = await prisma.tbl_todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_todoUpdateManyArgs>(args: SelectSubset<T, tbl_todoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_todo.
     * @param {tbl_todoUpsertArgs} args - Arguments to update or create a Tbl_todo.
     * @example
     * // Update or create a Tbl_todo
     * const tbl_todo = await prisma.tbl_todo.upsert({
     *   create: {
     *     // ... data to create a Tbl_todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_todo we want to update
     *   }
     * })
     */
    upsert<T extends tbl_todoUpsertArgs>(args: SelectSubset<T, tbl_todoUpsertArgs<ExtArgs>>): Prisma__tbl_todoClient<$Result.GetResult<Prisma.$tbl_todoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_todoCountArgs} args - Arguments to filter Tbl_todos to count.
     * @example
     * // Count the number of Tbl_todos
     * const count = await prisma.tbl_todo.count({
     *   where: {
     *     // ... the filter for the Tbl_todos we want to count
     *   }
     * })
    **/
    count<T extends tbl_todoCountArgs>(
      args?: Subset<T, tbl_todoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_todoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_todoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_todoAggregateArgs>(args: Subset<T, Tbl_todoAggregateArgs>): Prisma.PrismaPromise<GetTbl_todoAggregateType<T>>

    /**
     * Group by Tbl_todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_todoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_todoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_todoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_todoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_todoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_todoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_todo model
   */
  readonly fields: tbl_todoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_todoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_todo model
   */
  interface tbl_todoFieldRefs {
    readonly tno: FieldRef<"tbl_todo", 'Int'>
    readonly moddate: FieldRef<"tbl_todo", 'DateTime'>
    readonly regdate: FieldRef<"tbl_todo", 'DateTime'>
    readonly title: FieldRef<"tbl_todo", 'String'>
    readonly writer: FieldRef<"tbl_todo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_todo findUnique
   */
  export type tbl_todoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
    /**
     * Filter, which tbl_todo to fetch.
     */
    where: tbl_todoWhereUniqueInput
  }

  /**
   * tbl_todo findUniqueOrThrow
   */
  export type tbl_todoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
    /**
     * Filter, which tbl_todo to fetch.
     */
    where: tbl_todoWhereUniqueInput
  }

  /**
   * tbl_todo findFirst
   */
  export type tbl_todoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
    /**
     * Filter, which tbl_todo to fetch.
     */
    where?: tbl_todoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_todos to fetch.
     */
    orderBy?: tbl_todoOrderByWithRelationInput | tbl_todoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_todos.
     */
    cursor?: tbl_todoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_todos.
     */
    distinct?: Tbl_todoScalarFieldEnum | Tbl_todoScalarFieldEnum[]
  }

  /**
   * tbl_todo findFirstOrThrow
   */
  export type tbl_todoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
    /**
     * Filter, which tbl_todo to fetch.
     */
    where?: tbl_todoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_todos to fetch.
     */
    orderBy?: tbl_todoOrderByWithRelationInput | tbl_todoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_todos.
     */
    cursor?: tbl_todoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_todos.
     */
    distinct?: Tbl_todoScalarFieldEnum | Tbl_todoScalarFieldEnum[]
  }

  /**
   * tbl_todo findMany
   */
  export type tbl_todoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
    /**
     * Filter, which tbl_todos to fetch.
     */
    where?: tbl_todoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_todos to fetch.
     */
    orderBy?: tbl_todoOrderByWithRelationInput | tbl_todoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_todos.
     */
    cursor?: tbl_todoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_todos.
     */
    skip?: number
    distinct?: Tbl_todoScalarFieldEnum | Tbl_todoScalarFieldEnum[]
  }

  /**
   * tbl_todo create
   */
  export type tbl_todoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
    /**
     * The data needed to create a tbl_todo.
     */
    data: XOR<tbl_todoCreateInput, tbl_todoUncheckedCreateInput>
  }

  /**
   * tbl_todo createMany
   */
  export type tbl_todoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_todos.
     */
    data: tbl_todoCreateManyInput | tbl_todoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_todo update
   */
  export type tbl_todoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
    /**
     * The data needed to update a tbl_todo.
     */
    data: XOR<tbl_todoUpdateInput, tbl_todoUncheckedUpdateInput>
    /**
     * Choose, which tbl_todo to update.
     */
    where: tbl_todoWhereUniqueInput
  }

  /**
   * tbl_todo updateMany
   */
  export type tbl_todoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_todos.
     */
    data: XOR<tbl_todoUpdateManyMutationInput, tbl_todoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_todos to update
     */
    where?: tbl_todoWhereInput
    /**
     * Limit how many tbl_todos to update.
     */
    limit?: number
  }

  /**
   * tbl_todo upsert
   */
  export type tbl_todoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
    /**
     * The filter to search for the tbl_todo to update in case it exists.
     */
    where: tbl_todoWhereUniqueInput
    /**
     * In case the tbl_todo found by the `where` argument doesn't exist, create a new tbl_todo with this data.
     */
    create: XOR<tbl_todoCreateInput, tbl_todoUncheckedCreateInput>
    /**
     * In case the tbl_todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_todoUpdateInput, tbl_todoUncheckedUpdateInput>
  }

  /**
   * tbl_todo delete
   */
  export type tbl_todoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
    /**
     * Filter which tbl_todo to delete.
     */
    where: tbl_todoWhereUniqueInput
  }

  /**
   * tbl_todo deleteMany
   */
  export type tbl_todoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_todos to delete
     */
    where?: tbl_todoWhereInput
    /**
     * Limit how many tbl_todos to delete.
     */
    limit?: number
  }

  /**
   * tbl_todo without action
   */
  export type tbl_todoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_todo
     */
    select?: tbl_todoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_todo
     */
    omit?: tbl_todoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tbl_todoScalarFieldEnum: {
    tno: 'tno',
    moddate: 'moddate',
    regdate: 'regdate',
    title: 'title',
    writer: 'writer'
  };

  export type Tbl_todoScalarFieldEnum = (typeof Tbl_todoScalarFieldEnum)[keyof typeof Tbl_todoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const tbl_todoOrderByRelevanceFieldEnum: {
    title: 'title',
    writer: 'writer'
  };

  export type tbl_todoOrderByRelevanceFieldEnum = (typeof tbl_todoOrderByRelevanceFieldEnum)[keyof typeof tbl_todoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tbl_todoWhereInput = {
    AND?: tbl_todoWhereInput | tbl_todoWhereInput[]
    OR?: tbl_todoWhereInput[]
    NOT?: tbl_todoWhereInput | tbl_todoWhereInput[]
    tno?: IntFilter<"tbl_todo"> | number
    moddate?: DateTimeNullableFilter<"tbl_todo"> | Date | string | null
    regdate?: DateTimeNullableFilter<"tbl_todo"> | Date | string | null
    title?: StringFilter<"tbl_todo"> | string
    writer?: StringNullableFilter<"tbl_todo"> | string | null
  }

  export type tbl_todoOrderByWithRelationInput = {
    tno?: SortOrder
    moddate?: SortOrderInput | SortOrder
    regdate?: SortOrderInput | SortOrder
    title?: SortOrder
    writer?: SortOrderInput | SortOrder
    _relevance?: tbl_todoOrderByRelevanceInput
  }

  export type tbl_todoWhereUniqueInput = Prisma.AtLeast<{
    tno?: number
    AND?: tbl_todoWhereInput | tbl_todoWhereInput[]
    OR?: tbl_todoWhereInput[]
    NOT?: tbl_todoWhereInput | tbl_todoWhereInput[]
    moddate?: DateTimeNullableFilter<"tbl_todo"> | Date | string | null
    regdate?: DateTimeNullableFilter<"tbl_todo"> | Date | string | null
    title?: StringFilter<"tbl_todo"> | string
    writer?: StringNullableFilter<"tbl_todo"> | string | null
  }, "tno">

  export type tbl_todoOrderByWithAggregationInput = {
    tno?: SortOrder
    moddate?: SortOrderInput | SortOrder
    regdate?: SortOrderInput | SortOrder
    title?: SortOrder
    writer?: SortOrderInput | SortOrder
    _count?: tbl_todoCountOrderByAggregateInput
    _avg?: tbl_todoAvgOrderByAggregateInput
    _max?: tbl_todoMaxOrderByAggregateInput
    _min?: tbl_todoMinOrderByAggregateInput
    _sum?: tbl_todoSumOrderByAggregateInput
  }

  export type tbl_todoScalarWhereWithAggregatesInput = {
    AND?: tbl_todoScalarWhereWithAggregatesInput | tbl_todoScalarWhereWithAggregatesInput[]
    OR?: tbl_todoScalarWhereWithAggregatesInput[]
    NOT?: tbl_todoScalarWhereWithAggregatesInput | tbl_todoScalarWhereWithAggregatesInput[]
    tno?: IntWithAggregatesFilter<"tbl_todo"> | number
    moddate?: DateTimeNullableWithAggregatesFilter<"tbl_todo"> | Date | string | null
    regdate?: DateTimeNullableWithAggregatesFilter<"tbl_todo"> | Date | string | null
    title?: StringWithAggregatesFilter<"tbl_todo"> | string
    writer?: StringNullableWithAggregatesFilter<"tbl_todo"> | string | null
  }

  export type tbl_todoCreateInput = {
    moddate?: Date | string | null
    regdate?: Date | string | null
    title: string
    writer?: string | null
  }

  export type tbl_todoUncheckedCreateInput = {
    tno?: number
    moddate?: Date | string | null
    regdate?: Date | string | null
    title: string
    writer?: string | null
  }

  export type tbl_todoUpdateInput = {
    moddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    writer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_todoUncheckedUpdateInput = {
    tno?: IntFieldUpdateOperationsInput | number
    moddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    writer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_todoCreateManyInput = {
    tno?: number
    moddate?: Date | string | null
    regdate?: Date | string | null
    title: string
    writer?: string | null
  }

  export type tbl_todoUpdateManyMutationInput = {
    moddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    writer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_todoUncheckedUpdateManyInput = {
    tno?: IntFieldUpdateOperationsInput | number
    moddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    writer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tbl_todoOrderByRelevanceInput = {
    fields: tbl_todoOrderByRelevanceFieldEnum | tbl_todoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_todoCountOrderByAggregateInput = {
    tno?: SortOrder
    moddate?: SortOrder
    regdate?: SortOrder
    title?: SortOrder
    writer?: SortOrder
  }

  export type tbl_todoAvgOrderByAggregateInput = {
    tno?: SortOrder
  }

  export type tbl_todoMaxOrderByAggregateInput = {
    tno?: SortOrder
    moddate?: SortOrder
    regdate?: SortOrder
    title?: SortOrder
    writer?: SortOrder
  }

  export type tbl_todoMinOrderByAggregateInput = {
    tno?: SortOrder
    moddate?: SortOrder
    regdate?: SortOrder
    title?: SortOrder
    writer?: SortOrder
  }

  export type tbl_todoSumOrderByAggregateInput = {
    tno?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}