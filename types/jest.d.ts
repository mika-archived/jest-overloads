type TwoOverloads = { (...args: any): any; (...args: any): any };

type OverloadedArgsType<T> = T extends {
  (...args: infer A1): any;
  (...args: infer A2): any;
}
  ? A1 & A2
  : never;

declare namespace jest {
  function spyOn2<T extends {}, M extends FunctionPropertyNames<Required<T>>>(
    object: T,
    method: M
  ): Required<T>[M] extends TwoOverloads
    ? SpyInstance<
        ReturnType<Required<T>[M]>,
        OverloadedArgsType<Required<T>[M]>
      >
    : never;
}
