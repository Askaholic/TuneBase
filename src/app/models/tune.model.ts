// tune.model.ts
// Rohan Weeden
// Created: Jan. 2, 2018

// Data model for a tune

export class Tune {
    _id: string;

    title: string;
    composer: string;
    key: string;
    abc_body: string;

    constructor (title: string,
                 composer: string,
                 key: string,
                 abc: string) {
        this.title = title;
        this.composer = composer;
        this.key = key;
        this.abc_body = abc;
    }

    static fromABC(abc: string) {
        // TODO: Implement this
        return new Tune('', '', '', '');
    }
}
