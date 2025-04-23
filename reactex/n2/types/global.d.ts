
interface PageRequestDTO {
    page?: number;
    size?: number;
}


interface PageResponse<T> {
    current: number,
    dtoList: T[],
    next: boolean,
    prev: boolean,
    nextPage: number,
    prevPage: number,
    pageNumList: number[],
    totalCount: number,
    totalPage: number,
    pageRequestDTO: PageRequestDTO

}

interface MemberInfo{

    mid: string,
    accessToken: string | undefined,
    refreshToken: string | undefined,

}