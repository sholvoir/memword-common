export interface IMeanItem {
    def?: string;
    trans?: string;
}
export interface ICard {
    sound?: string;
    phonetic?: string;
    meanings?: Record<string, IMeanItem>;
}
export interface IDict {
    _id?: string;
    word: string;
    version?: number;
    cards?: Array<ICard>;
}