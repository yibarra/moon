// mayan number
export default class MayanNumber {
  // constructor
  constructor() {
    this.cons = this.cons.bind(this);
    this.mayanDigit = this.mayanDigit.bind(this);
    this.mayanGlyph = this.mayanGlyph.bind(this);
  }

  // cons
  cons(x: any, xs: any) {
    return Array.isArray(xs) ? (
      [x].concat(xs)
    ) : 'GeneratorFunction' !== xs.constructor.constructor.name ? (
      x + xs
    ) : ( // Existing generator wrapped with one additional element
      function* () {
        yield x;
        let nxt = xs.next();

        while (!nxt.done) {
          yield nxt.value;
          nxt = xs.next();
        }
      }
    )();
  }

  // contact map
  concatMap(f: any, xs: any) {
    return xs.reduce((a: any, x: any) => a.concat(f(x)), []);
  }

  // filter
  filter(f: any, xs: any) {
    return xs.filter(f);
  }

  // fold 1
  foldl1(f: any, xs: any) {
    return 1 < xs.length ? xs.slice(1).reduce(f, xs[0]) : xs[0];
  }

  // is null
  isNull(xs: any) {
    return Array.isArray(xs) || ('string' === typeof xs) ? (1 > xs.length) : undefined;
  }

  // not
  not(b: any) {
    return !b;
  }

  // map
  map(f: any, xs: any) {
    return (Array.isArray(xs) ? (xs) : xs.split('')).map(f);
  }

  // maximum
  maximum(xs: any) {
    return 0 < xs.length ? (this.foldl1((a: any, x: any) => x > a ? x : a, xs)) : undefined;
  }

  // maximum by
  maximumBy(f: any, xs: any) {
    return 0 < xs.length ? (
      xs.slice(1)
        .reduce((a: any, x: any) => 0 < f(x, a) ? x : a, xs[0])
    ) : undefined;
  }

  // mayan glyph
  async mayanGlyph(value: any) {
    const any: any = (p: any) => (xs: any) => xs.some(p);
    const compose: any = (f: any, g: any) => (x: any) => f(g(x));

    const values = await this.filter(any(compose(this.not, this.isNull)),
      this.transpose(this.leftPadded(this.showIntAtBase(20, this.mayanDigit, value, []))
    ));

    return values;
  }

  // mayan digit
  mayanDigit(n: any) {
    return 0 !== n ? this.cons(
      this.replicateString(this.rem(n, 5), '0'), // ●
      this.replicate(this.quot(n, 5), '1') // ━━
    ) : ['2']; // Θ
  }

  // left padded
  leftPadded(xs: any) {
    const w = this.maximum(this.map(this.length, xs));
    return this.map((x: any) => this.replicate(w - x.length, '').concat(x), xs);
  }

  // length
  length(xs: any) {
    return (Array.isArray(xs) || 'string' === typeof xs) ? (xs.length) : Infinity;
  }

  // quot
  quot(n: number, m: number) {
    return Math.floor(n / m);
  }

  // quot rem
  quotRem(m: number, n: number) {
    return this.tuple(Math.floor(m / n), m % n);
  }

  // rem
  rem(n: number, m: number) {
    return n % m;
  }

  // replicate
  replicate(n: any, x: any) {
    return Array.from({ length: n }, () => x);
  }

  // replicate string
  replicateString(n: any, s: any) {
    return s.repeat(n);
  }

  // show int at base
  showIntAtBase(base: number, toStr: any, n: any, rs: any) {
    const go: any = ([n, d]: any, r: any) => {
      const r_: any = this.cons(toStr(d), r);

      return 0 !== n ? (go(Array.from(this.quotRem(n, base)), r_)) : r_;
    };

    return go(Array.from(this.quotRem(n, base)), rs);
  }

  // tuple
  tuple(a: any, b: any) {
    return {
      type: 'Tuple',
      '0': a,
      '1': b,
      length: 2
    }
  }

  // transpose
  transpose(tbl: any) {
    const comparing = (f: any) =>
      (x: any, y: any) => {
        const
          a = f(x),
          b = f(y);
        return a < b ? -1 : (a > b ? 1 : 0);
      };

    const gaps = this.replicate(
      this.length(this.maximumBy(comparing(this.length), tbl)), []
    );

    const rows = this.map((xs: any) => xs.concat(gaps.slice(xs.length)), tbl);

    return this.map((_: any, col: any) => this.concatMap((row: any) => [row[col]], rows), rows[0]);
  }
}