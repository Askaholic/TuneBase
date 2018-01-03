// tune.model.ts
// Rohan Weeden
// Created: Jan. 2, 2018

// Data model for a tune

export class Tune {
    _id: string;

    title: string;
    composer: string;
    key: string;
    abc: string;

    constructor(id: string, abc: string) {
        this._id = id;
        this.title = this.getMatch(abc, "T");
        this.composer = this.getMatch(abc, "C");
        this.key = this.getMatch(abc, "K");
        this.abc = abc;
    }

    getABCBody() {
        let m = this.abc.match(/[\s\S]*K:\s?(.*)\n([\s\S]*)/);
        if(!m) {
            return '';
        }

        return m[2];
    }

    private getMatch(abc: string, letter: string, default_: string = '') {
        let m = abc.match(new RegExp("[\\s\\S]*" + letter + ":\\s?(.*)"));
        if (!m) {
            return default_;
        }
        
        return m[1];
    }
}
