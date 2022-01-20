import { Data } from "../App"

export const moreOrLess = (
    minmax: "min" | "max", 
    posts: Array<Data>, 
    setPosts: (p: Array<Data>) => void, 
    item: "amount" | "distance", 
    sort: boolean, 
    setSort: (s: boolean) => void ) => {
if(minmax === "min") {
    switch (item) {
        case "amount": {
            if (posts){
            //@ts-ignore
            setPosts(posts.sort((a, b) => a.amount > b.amount ? 1 : -1))
            setSort(!sort)
            break
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
export const equality = (posts: Array<Data>, setPosts: (p: Array<Data>) => void) => {
    setPosts(posts.filter(i => {
     return i.amount === i.distance
 }))
}

export const contains = (
    posts: Array<Data>, 
    setPosts: (p: Array<Data>) => void, 
    value: string, 
    sort: boolean, 
    setSort: (s: boolean) => void ) => {
    setPosts(posts.filter(i => {
        return value === i.title
    }))
    setSort(!sort)
}
export const switchMorLess = (
    type: string,
    posts: Array<Data>,
    setPosts: (p: Array<Data>) => void,
    sort: boolean,
    setSort: (s: boolean) => void ) => {
    switch (type) {
        case "moreAmount": {
            moreOrLess("max", posts, setPosts, "amount", sort, setSort)
            break
        }
        case "lessAmount": {
            moreOrLess("min", posts, setPosts, "amount", sort, setSort)
            break
        }
        case "moreDistance": {
            moreOrLess("max", posts, setPosts, "distance", sort, setSort)
            break
        }
        case "lessDistance": {
            moreOrLess("min", posts, setPosts, "distance", sort, setSort)
            break
        }
        case "equality": {
            equality(posts, setPosts)
            break
        }
        default: {
            return posts
        }
    }
}