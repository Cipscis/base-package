import * as esbuild from 'esbuild';

import { config } from './build-config.ts';

await esbuild.build(config);
