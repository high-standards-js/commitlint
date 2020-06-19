const base = require('@high-standards-js/base');
const husky = require('@high-standards-js/husky');

(async() => {
    await base.checkAcceptedHighStandards();
    let packageJsonOfConfig = base.getInitiatingProjectPackageJson();
    packageJsonOfConfig = await base.addDevDependency(packageJsonOfConfig, 'commitlint');
    packageJsonOfConfig = await base.addDevDependency(packageJsonOfConfig, '@commitlint/config-conventional');
    packageJsonOfConfig = husky.addHookCommand(
        packageJsonOfConfig, 
        'commit-msg', 
        'commitlint -E HUSKY_GIT_PARAMS'
    )
    base.writeInitiatingProjectPackageJson(packageJsonOfConfig);
})()
