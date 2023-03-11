export function removeAllCaracteresSpecial(text) {
    return text.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "");
}
