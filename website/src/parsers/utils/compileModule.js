export default function compileModule(code, globals = {}) {
    const exports = {};
    const module = { exports };
    const globalNames = Object.keys(globals);
    const keys = ['module', 'exports', ...globalNames];
    const values = [module, exports, ...globalNames.map((key) => globals[key])];
    new Function(keys.join(), code).apply(exports, values);
    return module.exports;
}
