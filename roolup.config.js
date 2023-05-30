// rollup.config.js
import replace from '@rollup/plugin-replace';

export default {
  // ...other configuration options
  plugins: [
    replace({
      // ...other replace options
      preventAssignment: true,
    }),
  ],
};
