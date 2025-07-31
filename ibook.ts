export interface IBook {
    wlid: string;
    version: string;
    disc?: string;
    content?: Iterable<string>
}

export const compareWL = (a: IBook, b: IBook): number =>
    a.wlid.localeCompare(b.wlid);
    

const regex = /^(.+?)\/(.+)$/;
export const splitID = (id: string): [string, string] => {
    const m = regex.exec(id);
    if (m) return [m[1], m[2]]
    return ['', ''];
}