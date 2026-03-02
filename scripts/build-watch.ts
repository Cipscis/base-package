import * as esbuild from 'esbuild';

import { config } from './build-config.ts';

const context = await esbuild.context({
	...config,
});

context.watch();
