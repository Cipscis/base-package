import type { BuildOptions } from 'esbuild';

const srcPath = 'docs/assets/js/src';
const dstPath = 'docs/assets/js/dist';

export const config: BuildOptions = {
	entryPoints: [
		`${srcPath}/docs-script.ts`,
	],
	outdir: dstPath,
	bundle: true,
};
