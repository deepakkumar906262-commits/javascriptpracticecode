var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) return true;
            throw "Not Equal";
        },
        notToBe: function(expected) {
            if (val !== expected) return true;
            throw "Equal";
        }
    };
};