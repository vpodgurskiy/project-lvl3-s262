import axios from 'axios';
import fs from 'mz/fs';
import url from 'url';
import os from 'os';
import Path from 'path';

const getFileName = (uri) => {
  const { hostname, pathname } = url.parse(uri);
  return `${hostname.split('.').join('-')}${pathname.split('/').join('-')}.html`;
};

const getFullPath = (path, fileName) => {
  const fullPath = Path.resolve(path, fileName);
  return fullPath;
};

export default (uri, path = os.tmpdir()) => {
  const fileName = getFileName(uri);
  const fullPath = getFullPath(path, fileName);
  return axios.get(uri)
    .then(response => fs.writeFile(fullPath, response.data, 'utf-8'))
    .catch(err => console.log(err));
};
