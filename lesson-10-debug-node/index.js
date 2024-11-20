// 方式一：执行命令 node --inspect-brk ./index.js， 创建 调试文件launch.json ，选择 node:attach(node:附加)，
// 方式二：创建 launch.json，选择 NODE.js：Launch Program(NODE.js:启动程序)，配置 program 选项即可

const fs = require('fs/promises');

(async function () {
  const fileContent = await fs.readFile('./package.json', {
    encoding: 'utf-8'
  });

  await fs.writeFile('./package2.json', fileContent);
})();
