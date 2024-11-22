# changeset 发布包


```js

pnpm add --save-dev -w @changesets/cli prettier-plugin-organize-imports prettier-plugin-packagejson

npx changeset init

```

changeset 是基于 git 的，所以我们要初始化成git仓库

git commit 之后，执行以下命令

```js

npx changeset add

npx changeset version

npx changeset publish

```