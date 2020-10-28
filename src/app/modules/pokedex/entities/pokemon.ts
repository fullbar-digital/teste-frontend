export interface Pokemon {
    id: number;
    name: string;
    weight?: number;
    imgPathLg?: string;
    imgPathMini?: string;
    abilities?: [
        { ability: string }
    ];
    types?: [
        { type: string }
    ];
    stats?: {
        hp: number,
        attack: number,
        defense: number,
        specialAttack: number,
        specialdefense: number,
        speed: number
    };

}
