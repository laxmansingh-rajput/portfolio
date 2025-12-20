export const zoom = (animate) => {
    if (animate) {
        return ` opacity-100 scale-100 transition-all ease-in duration-700
`
    }
    return ` opacity-0 scale-95 transition-all ease-in duration-700`
}
export const topDown = (animate, i) => {
    if (animate)
        return ` opacity-100 scale-100 translate-y-0 transition-opacity transition-transform duration-700
 duration-700 `
    else
        return ` opacity-0 scale-95 -translate-y-5 transition-opacity transition-transform duration-700
 duration-700`
}

export const rotateIn = (animate) => {
    if (animate)
        return ` opacity-100 rotate-0 scale-100 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]`
    else
        return ` opacity-0 rotate-12 scale-75 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]`
}
