// types.ts
/**
 * Defines types in Source 1.
 * @author Hill Tse
 * @version 0.0.1
 * @packageDocumentation
 */

/**
 * The interface for types. All types are able to be compared and displayed.
 */
interface Type {
    /**
     * Displays the type information in a human-readable form.
     */
    show(): string;
    /**
     * Checks if a types is equal to `this`.
     * @param t  The type to be compared to `this`.
     */
    equals(t: Type): boolean;
}

class NumberType implements Type {
    show() {
        return "Number";
    }
    equals(t: Type) {
        return t.show() === this.show();
    }
}

class BoolType implements Type {
    show() {
        return "Bool";
    }
    equals(t: Type) {
        return t.show() === this.show();
    }
}

/**
 * The type of a general n-ary function, which captures a n-tuple of types of its parameter, and its return type.
 */
class FunctionType implements Type {
    /**
     * @param argTypes The types of the arguments of this function.
     * @param retType  The return type of this function.
     */
    constructor(public argTypes: [Type], public retType: Type) {
        
    }
    show() {
        const argStr = this.argTypes.map(t => t.show()).join(", ");
        return this.argTypes.length === 1 ? `${argStr} -> ${this.retType.show()}` : `(${argStr}) -> ${this.retType.show()}`;
    }
    equals(t: Type) {
        return t.show() === this.show();
    }
}

/**
 * Represents a type variable in a polymorphic type, or a type to be inferred.
 */
class TypeVar implements Type {
    /**
     * @param name The symbolic name of this type variable.
     */
    constructor(public name: string) {}
    show () {
        return this.name;
    }
    equals(t: Type) {
        return t.show() === this.show();
    }
}

/**
 * An auxiliary generator for generating unique names for type variables.
 */
function* typenames() {
    let i = 0;

    while (true) {
        yield "T" + (i++);
    }
}
