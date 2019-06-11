interface EnumInstance<TTag, TValue> {
  tag: TTag;
  value: TValue;
}

interface EnumConstructor<TTAg, TValue> {
  (value: TValue): EnumInstance<TTAg, TValue>;
}

function create_enum_constructor<TMap, TTag extends keyof TMap>(tag: TTag): EnumConstructor<TTag, TMap[TTag]> {
  return <TValue extends TMap[TTag]>(value: TValue) => ({tag, value});
}

type EnumNamespace<TMap> = {
  [s in keyof TMap]: EnumConstructor<s, TMap[s]>;
};

export function create_enum_namespace<TMap>(map: TMap): EnumNamespace<TMap> {
  const tags = Object.keys(map) as (keyof TMap)[];
  const namespace: Partial<EnumNamespace<TMap>> = {};
  tags.forEach(<TTag extends keyof TMap>(tag: TTag) => {
    namespace[tag] = create_enum_constructor<TMap, TTag>(tag);
  });
  return namespace as EnumNamespace<TMap>;
}

export type EnumUnion<TNamespace> = TNamespace extends EnumNamespace<infer TMap>
  ? {[s in keyof TMap]: EnumInstance<s, TMap[s]>}[keyof TMap]
  : never;

export function type<T = undefined>(): T {
  return undefined as unknown as T;
}
