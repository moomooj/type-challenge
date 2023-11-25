type TupleToObject<T extends readonly PropertyKey[]> = {
  [key in T[number]]: T;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const sym1 = Symbol(1);
const sym2 = Symbol(2);
const tupleSymbol = [sym1, sym2] as const;
const tupleMix = [1, "2", 3, "4", sym1] as const;

type result = TupleToObject<typeof tuple>;
