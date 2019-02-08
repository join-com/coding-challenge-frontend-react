const req = require.context('./messages', true, /^\.\/\w{2}\.json$/);

export default req.keys().reduce((acc, key) => {
    const res = req(key);
    const lang = key.replace('./', '').replace('.json', '');

    acc[lang] = res;

    return acc;
}, {});
