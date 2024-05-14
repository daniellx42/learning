type List<A> = null | {
    element: A
    next: List<A>
}
const empty = null

const isEmpty = <A>(list: List<A>): list is null => list === null

const append = <A>(element: A, list: List<A>): List<A> => ({
    element: element,
    next: list,
})

const map = <A, B>(f: (el: A) => B, l: List<A>): List<B> => {
    if (isEmpty(l)) {
        return empty
    } {
        const element = f(l.element)
        const next = map(f, l.next)
        return append(element, next)
    }
}

const l = append(3, append(2, append(1, empty)))
const x = map((x) => x + 1, l)

console.log(l)
console.log(x)
