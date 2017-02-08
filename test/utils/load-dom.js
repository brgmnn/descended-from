import { jsdom } from 'jsdom';
import read from './read-html';

export default path => {
  global.window = jsdom(read(path)).defaultView;
  global.document = window.document;
}
