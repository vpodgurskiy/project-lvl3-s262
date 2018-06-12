import axios from 'axios';
import nock from 'nock';
import fs from 'mz/fs';
import httpAdapter from 'axios/lib/adapters/http';
import path from 'path';
import os from 'os';
import pageLoad from '../src';

axios.defaults.adapter = httpAdapter;

test('pageLoad', async () => {
  const uri = 'https://hexlet.io/courses';
  const host = 'https://hexlet.io';
  const pathname = '/courses';
  const fileName = 'hexlet-io-courses.html';
  const pathTmp = await `${os.tmpdir()}${path.sep}`;

  await pageLoad(uri, pathTmp);

  const actualValue = await fs.readFile(`${pathTmp}/${fileName}`, 'utf-8');
  nock(host).get(pathname).reply(200, actualValue);

  const expectedValue = await axios.get(uri);
  nock(host).get(pathname).reply(200, expectedValue);

  expect(actualValue).toBe(expectedValue.data);
});
