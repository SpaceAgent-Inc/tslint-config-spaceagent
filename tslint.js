module.exports = {
  extends: ["tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"],
  rules: {
    "variable-name": [true, "ban-keywords", "check-format", "allow-leading-underscore", "allow-pascal-case"],
    "max-line-length": [false],
    "import-name": [false],
    "prettier": true,
    "interface-name": false,
    "object-literal-sort-keys": false,
    "no-shadowed-variable": false,
    "no-unused-expression": false,
    "no-default-export" : true
  }
}
