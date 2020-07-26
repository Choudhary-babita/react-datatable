//import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import json from "@rollup/plugin-json";

const config = {
    input: 'src/index.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'datatable',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        postcss({
            extensions: ['.css'],
        }),
        json()
    ]
}
export default config