const base = require('@high-standards-js/base');

(async() => {
    await base.checkAcceptedHighStandards();
    let packageJsonOfConfig = base.getInitiatingProjectPackageJson();
    packageJsonOfConfig = await base.addDependency(packageJsonOfConfig, 'commitlint');
    if (!packageJsonOfConfig.husky) packageJsonOfConfig.husky = {};
    if (!packageJsonOfConfig.husky.hooks) packageJsonOfConfig.husky.hooks = {};
    if (!packageJsonOfConfig.husky.hooks['commit-msg']) {
        packageJsonOfConfig.husky.hooks['commit-msg'] = 'commitlint -E HUSKY_GIT_PARAMS';
    }
    
    base.writeInitiatingProjectPackageJson(packageJsonOfConfig);
})()
