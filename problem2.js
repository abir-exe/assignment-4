function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'This is not a string';
    }
    let doescontain = string1.includes(string2);
    return doescontain;
}

console.log(matchFinder("I love you", "love"));