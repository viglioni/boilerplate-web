import { always, compose, concat, equals, ifElse, map, reduce, toString, unapply } from "ramda";

export const isString = (element: unknown) => equals(typeof element, 'string')

export const convertToString = (el: any) =>
  ifElse(
    isString,
    always(el),
    () => toString(el))
    (el)

export const concatAll =
  unapply(
    compose(
      reduce<string, string>(concat, ''),
      map<any, string>(convertToString)))



