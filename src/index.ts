import {parse} from 'acorn';

export function main() {
    const t = parse("function add2(x) {return x+2;}");
    console.log(t);
}

main();
