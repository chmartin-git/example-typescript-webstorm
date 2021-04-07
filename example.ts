type Example<T> = T extends string ? T extends `/${infer A}/sup` ? A : never : never;

interface Base {
	methodA: string;
	methodB: string;
}

type methods = {
	[K in keyof Base]: (body: Example<`/${K}/sup`>) => Example<`/${K}/sup`>;
}

class Aclass implements methods {
	methodA(body: Example<`/${"methodA"}/sup`>): Example<`/${"methodA"}/sup`> {
		return "methodA";
	}

	methodB(body: Example<`/${"methodB"}/sup`>): Example<`/${"methodB"}/sup`> {
		return "methodB";
	}
	
}
