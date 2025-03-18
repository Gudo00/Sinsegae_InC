

interface PageResponse<T> {
    dtoList: T[],
    end: number,
    next: boolean,
    prev: boolean,
    page: number,
    size: number,
    start: number,
    total: number
}

interface PageResponse2<T> {
    dtoList: T[],
    pageNumList: number[],
    next: boolean,
    prev: boolean,
    prevPage: number,
    nextPage: number,
    current: number,
    totalPage: number
}

