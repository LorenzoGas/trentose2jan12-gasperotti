function getArea(args) {
    var ret = -1;
    if (Array.isArray(args) && args.length == 2)
        ret = args[0] * args[1];
    return ret;
}