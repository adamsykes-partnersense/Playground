export type ExtractBody<T> = T extends { body: object } ? T["body"] : never;
export type ExtractData<T> = T extends { data: object } ? T["data"] : never;
export type ExtractError<T> = T extends { error: unknown } ? T["error"] : never;
