function getArea(args) {
    var ret = -1;
    if (Array.isArray(args) && args.length == 2)
        if (Number.isInteger(args[0]) && Number.isInteger(args[1]))
            if (args[0] >= 0 && args[1] >= 0)
                ret = args[0] * args[1];
    return ret;
}

module.exports = getArea;