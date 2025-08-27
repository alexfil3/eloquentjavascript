function parse(program) {
    let { expr, rest } = parseExpression(program);

    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }

    return expr;
}