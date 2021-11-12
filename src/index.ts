export default function editObject(object: indexable, key: string, value: any): Object {
    if (!key || typeof (key) !== "string" || key.length === 0) throw new Error("Key should be a non empty string but we got " + JSON.stringify(key));

    const keys = key.split("."), vals: indexable = [];

    keys.forEach((v, i) => {
        if ((vals[i - 1] == null || typeof (vals[i - 1]) !== "object") && i !== 0) throw new Error(`Invalid index was provided, "${v}" key do not exist on "${JSON.stringify(vals[i - 1])}" of type ${typeof (vals[i - 1])}`);

        if (i === 0) {
            vals.push(object[v]);
        } else if (i === keys.length - 1) {
            vals[i - 1][v] = value;
        } else {
            vals.push(vals[i - 1][v])
        }
    })

    return object;
}

interface indexable extends Object {
    [key: string]: any
}