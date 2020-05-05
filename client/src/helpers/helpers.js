export function getNextClass(classes) {
    for (let sClass of classes) {
        const { certified } = sClass;
        if (!certified) {
            return sClass;
        }
    }
    return null;
}
