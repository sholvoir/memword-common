export interface IBook {
    bid: string;
    version: number;
    disc?: string;
    content?: Iterable<string>
}

export const compareWL = (a: IBook, b: IBook): number =>
    a.bid.localeCompare(b.bid);
    

const regex = /^(.+?)\/(.+)$/;
export const splitID = (bid: string): [string, string] => {
    const m = regex.exec(bid);
    if (m) return [m[1], m[2]]
    return ['', ''];
}