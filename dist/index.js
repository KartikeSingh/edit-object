"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function editObject(object, key, value, force = false) {
    if (!key || typeof (key) !== "string")
        throw new Error("Key should be a non empty string.");
    if (force)
        object = JSON.parse(JSON.stringify(object));
    const keys = key.split(".");
    if (!object[keys[0]] && !force)
        throw new Error("Invalid key was provided , provide a valid key or pass force option as true");
    keys.reduce((a, b, i) => {
        if (typeof (a[b]) !== 'object' && force)
            a[b] = a && a[b] && (typeof (a[b]) === 'object' && i !== keys.length - 1) ? JSON.parse(JSON.stringify(a[b])) : {};
        else if (a[b] && typeof (a[b]) !== 'function' && typeof (a[b]) !== 'object' && i !== keys.length - 1)
            throw new Error(`This property is not a object (its type is ${typeof (a[b])}), So we can't add a object value to it, You can pass force as true if you still wanna do it`);
        else if (a[b] && typeof (a[b]) === 'object' && (Object.isFrozen(a[b]) || Object.isSealed(a[b]) || !Object.isExtensible(a[b])))
            throw new Error("The property is either freeze or sealed or not extensible, pass force as true if you still want to change it");
        else if ((!a[b] || typeof (a[b]) !== 'object') && i !== keys.length - 1)
            throw new Error("Invalid key was provided , provide a valid key or pass force option as true");
        if (i === keys.length - 1)
            a[b] = value;
        else
            return a[b];
    }, object);
    return object;
}
exports.default = editObject;
