export default function editObject(object: indexable, key: string | symbol, value: any, force = false): Object {
    if (!key || typeof (key) !== "string") throw new Error("Key should be a non empty string.");

    const keys: string[] = key.split(".");

    keys.reduce((a, b, i) => {
        if (typeof (a[b]) !== 'object') {
            if (force) a[b] = {};
            else throw new Error("Invalid key was provided, provide a valid key or pass force option as true")
        }

        if (i === keys.length - 1)
            a[b] = value;
        else
            return a[b];
    }, object);

    return object;
}

interface indexable extends Object {
    [key: string]: any
}
