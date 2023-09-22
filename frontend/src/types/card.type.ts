export interface Card {
    id: number,
    category: string
    url: string,
    title: string,
    description: string,
    likes: number,
    urlWiki: string
}
export interface CardForRender{
    id: number,
    attributes: {
        category: string
        url: string,
        title: string,
        description: string,
        likes: number,
        urlWiki: string
    }
}