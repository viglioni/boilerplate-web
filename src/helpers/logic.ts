import { compose, equals, not } from "ramda";

export const notEquals = (a: any, b: any) => compose(not, equals(a))(b)
