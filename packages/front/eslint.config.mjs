// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  [
    {
      rules: {
        "vue/html-self-closing": [
          "error",
          {
            html: {
              void: "never", // Empêche la fermeture automatique des balises void comme <img>
              normal: "always",
              component: "always",
            },
            svg: "always",
            math: "always",
          },
        ],
      },
    },
  ]
);
