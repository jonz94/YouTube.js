[youtubei.js](../../../README.md) / [Utils](../README.md) / InnertubeError

# Class: InnertubeError

## Extends

- `Error`

## Extended by

- [`ParsingError`](ParsingError.md)
- [`MissingParamError`](MissingParamError.md)
- [`OAuth2Error`](OAuth2Error.md)

## Constructors

### new InnertubeError()

> **new InnertubeError**(`message`, `info`?): [`InnertubeError`](InnertubeError.md)

#### Parameters

• **message**: `string`

• **info?**: `any`

#### Returns

[`InnertubeError`](InnertubeError.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/utils/Utils.ts:35](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/utils/Utils.ts#L35)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### date

> **date**: `Date`

#### Defined in

[src/utils/Utils.ts:31](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/utils/Utils.ts#L31)

***

### info?

> `optional` **info**: `any`

#### Defined in

[src/utils/Utils.ts:33](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/utils/Utils.ts#L33)

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### version

> **version**: `string`

#### Defined in

[src/utils/Utils.ts:32](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/utils/Utils.ts#L32)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:11

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:4
