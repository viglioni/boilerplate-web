import { notEquals } from '../src/helpers/logic'
import next from 'next';


export const nextApp = next({
  dev: notEquals(process.env.NODE_ENV, 'production')
});
export const handle = nextApp.getRequestHandler()

