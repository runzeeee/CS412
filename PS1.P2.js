const expression = '8%3';

const evaluate = input => {
    const [left, mid, right] = input;
    switch (mid) {
        case `+`:
            return left + right;
            break;
        case `-`:
            return left - right;
            break;
        case `*`:
            return left * right;
            break;
        case `/`:
            return left / right;
            break;
        case `^`:
            return left ^ right;
            break;
        case `%`:
            return left % right;
            break;
    }
}
let operator = evaluate(expression);
console.log(`${expression} = ${operator}`)
