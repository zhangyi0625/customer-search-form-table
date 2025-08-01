<div align="center">
</div>

[English](README.md) | [简体中文](README_ZH.md)

- 📦 Build using [rslib](https://github.com/web-infra-dev/rslib)
- 🔄 GitHub Actions workflow
- 🎯 TypeScript support

# customer-search-form-table(Rslib project)

![alt text](./src/assets/example.png)

## Technology Stack

1. React: v19.x.x [React](https://reactjs.org/)
2. Antd: v5.x.x [Ant Design](https://ant.design/index-cn)
3. TypeScript: v5.x.x[TypeScript](https://www.typescriptlang.org/)
4. Rsbuild: v1.x.x[Rsbuild](https://rsbuild.rs/)
5. Rslib: v0.x.x[Rslib](https://rslib.rs/)

## Conventional submission

[Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

## Commit message

1. The commit message should be structured as follows:

   ```bash
     <type>[optional scope]: <description>
     <BLANK LINE>
     [optional body]
     <BLANK LINE>
     [optional footer(s)]
   ```

2. "type-enum": ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"]

3. type-enum readme text：
   - build: Dependency adjustment
     Changes that affect the build system or external dependencies (Sample scope：gulp, broccoli, npm）
   - chore: Miscellaneous affairs handling
     Other changes that do not modify the source file or the test file
   - ci: Change script
     Updates to CI configuration files and scripts（Sample scope： Travis, Circle, BrowserStack, SauceLabs)
   - docs: Document change
     Add or update documents
   - feat: Add functions
     Introduce new features
   - fix error repair
     Fix bug
   - perf: performance optimization
     Modify the code to improve performance
   - refactor: code refactoring
     It is neither a Bug fix nor a code change to add features
   - revert: Restored version
     Restore to the previous version
   - style: format adjustment
     Changes that do not affect the meaning of the code (such as Spaces, missing semicolons in the format, etc.)
   - test: renewal test
     Add or update tests

4. [https://www.npmjs.com/package/devmoji](https://www.npmjs.com/package/devmoji)
5. [https://gitmoji.dev/](https://gitmoji.dev/)
6. [git commit toolchain](https://juejin.cn/post/7067166468797890591)
7. [https://theodorusclarence.com/library/conventional-commit-readme](https://theodorusclarence.com/library/conventional-commit-readme)

## API

Search-form：[API](./src/SearchForm/docs/api.md) | [中文API](./src/SearchForm/docs/api_ZH.md)

Search—table：[API](./src/SearchTable/docs/api.md) | [中文API](./src/SearchTable/docs/api_ZH.md)

## Development

```bash
  1. git clone https://github.com/zhangyi0625/customer-search-form-table.git
  2. cd customer-search-form-table
  3. You can choose either of the following two ways to start the project. For other CLIs, refer to the scripts in package.json
    - $ npm run dev
    - $ npm run build
```

# Future plan update

- Add more components from the form to SearchFormItem
- Currently, only antd (v5.x.x) is supported. Subsequently, Material-UI, Element for React, React Bootstrap, Blueprint UI, Semantic UI React, etc. will be added...

## Participation、contribution

> [!NOTE]
> Any contribution to open-source components is very welcome！

## Communication

📖 📖 📖 Welcome everyone to add me on wx (zy-zy625) to exchange ideas about components and discuss front-end development
