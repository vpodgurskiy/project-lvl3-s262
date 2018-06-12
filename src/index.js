import axios from 'axios';
import fs from 'mz/fs';
import url from 'url';
import os from 'os';
import path from 'path';

const getFileName = (uri) => {
  const { hostname, pathname } = url.parse(uri);
  return `${hostname.split('.').join('-')}${pathname.split('/').join('-')}.html`;
};

const getFullPath = (pathDestination, fileName) => {
  const fullPath = path.resolve(pathDestination, fileName);
  return fullPath;
};

export default (uri, pathDestination = os.tmpdir()) => {
  const fileName = getFileName(uri);
  const fullPath = getFullPath(pathDestination, fileName);
  return axios.get(uri)
    .then(response => fs.writeFile(fullPath, response.data, 'utf-8'))
    .catch((err) => {
      throw err;
    });
};
