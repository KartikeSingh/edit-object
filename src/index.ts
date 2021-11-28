export default function editObject(object: indexable, key: string, value: any): Object {
    if (!key || typeof (key) !== "string") throw new Error("Key should be a non empty string.");

    const keys: string[] = key.split(".");
    keys.reduce((a, b, i) => {
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
