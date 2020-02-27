interface IFoo {
  func(a: number): void;
  func(a: string): void;
}

const obj = ({} as any) as IFoo;
const func = obj.func;

jest.spyOn2 = jest.spyOn;

const spy = jest.spyOn2(obj, "func");
spy.mockImplementation((w: string) => {}); // compile success
spy.mockImplementation((w: number) => {}); // compile success
spy.mockImplementation((w: object) => {}); // compile failure
