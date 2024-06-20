#!/usr/bin/env node

import meow from 'meow';
import Aaahh from './index';

interface Flags {
  [key: string]: any;
}

const cliMode = async ({ flags }: { flags: Flags }) => {
  while (true) {
    await Aaahh();
  }
};

const cliInterface = meow({});
cliMode(cliInterface);
