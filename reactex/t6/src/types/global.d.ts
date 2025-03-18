
interface PageRequestDTO {
    page: number,
    size: number
}

interface PageResponseDTO<T> {

    dtoList: T[],
    pageRequestDTO: PageRequestDTO,
    totalCount: number,
    pageNumList: number[]
    prev: boolean,
    next: boolean,
    prevPage: number,
    nextPage: number,
    totalPage: number,
    current: 1
}