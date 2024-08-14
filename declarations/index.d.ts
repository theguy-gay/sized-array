type NumericRange<
  S extends number,
  E extends number,
  X extends unknown[] = [],
  Y extends number = never
> = X["length"] extends E
  ? Y | S | E
  : NumericRange<S, E, [...X, 1], X[S] extends undefined ? Y : Y | X["length"]>;

/**
 * Specifies an Array of type T. Must contain between S and E items.
 */
export type RangeSizeArray<T, S extends number, E extends number> = T[] & {
  length: NumericRange<S, E>;
};
