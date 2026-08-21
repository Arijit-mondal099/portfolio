/**
 * Commit message linting — enforces Conventional Commits
 * (e.g. `feat: add hero section`, `chore: scaffold app`, `fix: ...`).
 * Runs from the `commit-msg` Husky hook so malformed messages are rejected.
 */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 1000],
    "body-max-line-length": [2, "always", 1000],
    "footer-max-line-length": [2, "always", 1000],
  },
};

export default config;
