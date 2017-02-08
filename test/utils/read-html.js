import fs from 'fs';

export default path => fs.readFileSync(`test/html/${path}.html`, 'utf8');
