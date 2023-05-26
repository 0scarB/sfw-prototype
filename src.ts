type VirtualDOM = El | TextNode

type El = [TagName, Attrs, VirtualDOM[]]
type TagName = string
type Attrs = {[name: AttrName]: AttrValue}
type AttrName = string
type AttrValue = string

type TextNode = string


const renderVirtualDom = (vDom: VirtualDOM): HTMLElement | Text =>
    typeof vDom === "object"
        ? renderVirtualEl(vDom)
        : renderVirtualText(vDom)

const renderVirtualEl = ([tagName, attrs, children]: El): HTMLElement => {
    const el = document.createElement(tagName)
    for (const [attrName, attrValue] of Object.entries(attrs)) {
        el.setAttribute(attrName, attrValue)
    }
    for (const child of children) {
        el.appendChild(renderVirtualDom(child))
    }

    return el
}

const renderVirtualText = (text: string): Text => document.createTextNode(text)

// Errors as values
// ===========================================================================

type Ok<T> = {ok: T}
type Err<Kind extends string = "Unknown"> = {
    kind: Kind,
    msg: string,
}
type OkOrErr<T, ErrKind extends string = "Unknown"> = Ok<T> | Err<ErrKind>

const ok = <T>(value: T): Ok<T> => ({ok: value})

const err = <Kind extends string = "Unknown">(
    {kind, msg}: Kind extends "Unknown" ? {kind?: Kind, msg: string} : {kind: Kind, msg: string}
): Err<Kind> => ({
    kind: (kind ?? "Unknown") as Kind,
    msg,
})

const isOk = <T, ErrKind extends string = "Unknown">(okOrErr: OkOrErr<T, ErrKind>): okOrErr is Ok<T> =>
    "ok" in okOrErr

const isErr = <T, ErrKind extends string = "Unknown">(okOrErr: OkOrErr<T, ErrKind>): okOrErr is Ok<T> =>
    "msg" in okOrErr