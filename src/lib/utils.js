export function imagePath(path, { original=false } = {}) {
    if (original)
        return `https://image.tmdb.org/t/p/original${path}`
    else
        return `https://image.tmdb.org/t/p/w500${path}`
}