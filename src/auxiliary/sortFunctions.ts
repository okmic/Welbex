import { Data } from "../App"

const _moreOrLess = (
    minmax: "min" | "max",
    posts: Array<Data>,
    setPosts: (p: Array<Data>) => void,
    item: "amount" | "distance",
    sort: boolean,
    setSort: (s: boolean) => void) => {
    if (minmax === "min") {
        switch (item) {
            case "amount": {
                if (posts) {
                    //@ts-ignore
                    setPosts(posts.sort((a, b) => a.amount > b.amount ? 1 : -1))
                    setSort(!sort)
                    break
                } else {
                    return posts
                }
            }
            case "distance": {
                //@ts-ignore
                setPosts(posts.sort((a, b) => a.distance > b.distance ? 1 : -1))
                setSort(!sort)
                break
            }
            default: {
                return posts
            }
        }
    } else {
        switch (item) {
            case "amount": {
                //@ts-ignore
                setPosts(posts.sort((a, b) => a.amount > b.amount ? -1 : 1))
                setSort(!sort)
                break
            }
            case "distance": {
                //@ts-ignore
                setPosts(posts.sort((a, b) => a.distance > b.distance ? -1 : 1))
                setSort(!sort)
                break
            }
            default: {
                return posts
            }
        }
    }
}
const _equality = (posts: Array<Data>, setPosts: (p: Array<Data>) => void) => {
    setPosts(posts.filter(i => {
        return i.amount === i.distance
    }))
}

export const contains = (
    posts: Array<Data>,
    setPosts: (p: Array<Data>) => void,
    value: string,
    sort: boolean,
    setSort: (s: boolean) => void
    ) => {
    setPosts(posts.filter(i => {
        try {
            return value === i.title
        }
        catch {
            return posts
        }
    }))
    setSort(!sort)
}

export const switchMorLess = (
    type: string,
    posts: Array<Data>,
    setPosts: (p: Array<Data>) => void,
    sort: boolean,
    setSort: (s: boolean) => void,
    setSelect: (s: string) => void
    ) => {
    switch (type) {
        case "moreAmount": {
            _moreOrLess("max", posts, setPosts, "amount", sort, setSort)
            setSelect('')
            break
        }
        case "lessAmount": {
            _moreOrLess("min", posts, setPosts, "amount", sort, setSort)
            setSelect('')
            break
        }
        case "moreDistance": {
            _moreOrLess("max", posts, setPosts, "distance", sort, setSort)
            setSelect('')
            break
        }
        case "lessDistance": {
            _moreOrLess("min", posts, setPosts, "distance", sort, setSort)
            setSelect('')
            break
        }
        case "equality": {
            _equality(posts, setPosts)
            setSelect('')
            break
        }
        default: {
            setSelect('')
            return posts
        }
    }
}