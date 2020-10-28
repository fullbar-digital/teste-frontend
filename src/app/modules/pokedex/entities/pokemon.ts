export interface Pokemon {
    id: number;
    name: string;
    imgPathLarge?: string;
    imgPathMini?: string;
    abilities?: [
        { ability: string }
    ];
    types?: [
        { type: string }
    ];
    stats?: [
        { name: string; value: number }
    ];
}

