export interface TranslateResult {
    head: Head;
    def:  Def[];
}

export interface Def {
    text: string;
    pos:  string;
    ts:   string;
    tr:   Tr[];
}

export interface Tr {
    text: string;
    pos:  string;
    gen:  string;
    fr:   number;
}

export interface Head {
}