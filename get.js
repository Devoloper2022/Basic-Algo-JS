function get(src, path) {
    let key = ''
    for (let i = 0; i < path.length; i++) {
        if (path[i] == '.') {
            if (typeof src[key] == 'undefined') {
                return undefined
            }
            src = src[key]
            key = ''
        } else {
            key += path[i]
        }
        if (i == path.length - 1) {
            return src[key]
        }
       
    }
}