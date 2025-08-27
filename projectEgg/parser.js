function parseExpression(program) {
    program = skipSpace(program);

    let match, expr;

    if (match = string.exec(program)) {
        expr = { type: "value", value: match[1] };
    } else if (match = number.exec(program)) {
        expr = { type: "value", value: Number(match[0]) };
    } else if (match = identifier.exec(program)) {
        expr = { type: "word", name: match[0] }; 
    } else {
        throw new SyntaxError("Unexpected syntax: ", + program);
    }

    return parseApply(expr, program.slice(match[0].length));
}