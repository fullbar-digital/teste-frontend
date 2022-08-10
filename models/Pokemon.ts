interface Types {
	type: {
		name: string;
	};
}

export interface Pokemon {
	name: string;
	types: Types[];
	sprites: {
		other: any;
	};
}
