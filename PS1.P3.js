const expression = 'supercalifragilisticexpialidocious';

const split = input => {
    return input.split(/(?=c)/);
}
const parseC = (string, lambda) => lambda(string);

console.log(parseC(expression,split))





const parseA = (string, lambda) => lambda(string);

const replace = input => {
    return {
        originalString: input,
        modifiedString: input.replace(`a`, `A`),
        numberReplaced: input.match(/a/g).length,
        length:         input.length
    }
}
console.table(parseA(expression,replace))