const base = require('@high-standards-js/base');

(async() => {
    await base.checkAcceptedHighStandards();
    let packageJsonOfConfig = base.getInitiatingProjectPackageJson();
    packageJsonOfConfig = await base.addDependency(packageJsonOfConfig, 'commitlint');
    base.writeInitiatingProjectPackageJson(packageJsonOfConfig);
})()
