export const moreOrLess = (minmax, posts, setPosts, item, sort, setSort) => {
if(minmax === "min") {
    switch (item) {
        case "amount": {
            setPosts(posts.sort((a, b) => a.amount > b.amount ? 1 : -1))
            setSort(!sort)
            break
        }
        case "distance": {
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
            setPosts(posts.sort((a, b) => a.amount > b.amount ? -1 : 1))
            setSort(!sort)
            break
        }
        case "distance": {
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
export const equality = (posts, setPosts) => {
    setPosts(posts.filter(i => {
     return i.amount === i.distance
 }))
}
export const contains = (posts, setPosts, value) => {
    setPosts(posts.filter(i => {
        return value === i.title
    }))
}
export const switchMorLess = (type, posts, setPosts, sort, setSort ) => {
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