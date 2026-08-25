import { i as e, l as t, n, t as r } from "./jsx-runtime-D1ym7qjA.js";
import {
  S as i,
  _ as a,
  a as o,
  c as s,
  f as c,
  g as l,
  h as u,
  i as d,
  l as f,
  m as p,
  o as ee,
  p as te,
  r as ne,
  s as re,
  t as m,
  u as ie,
  v as ae,
  x as oe,
  y as h,
} from "./utils-Ctb90B5i.js";
import {
  E as se,
  c as ce,
  d as le,
  h as ue,
  m as de,
  u as fe,
  y as pe,
} from "./jadesta-DqHZHQ8d.js";
var me = `__TSS_CONTEXT`,
  he = Symbol.for(`TSS_SERVER_FUNCTION`),
  ge = Symbol.for(`TSS_SERVER_FUNCTION_FACTORY`),
  _e = `application/x-tss-framed`,
  g = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 };
`${_e}`;
var ve = /;\s*v=(\d+)/;
function ye(e) {
  let t = e.match(ve);
  return t ? parseInt(t[1], 10) : void 0;
}
function be(e) {
  let t = ye(e);
  if (t !== void 0 && t !== 1)
    throw Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var xe = () => window.__TSS_START_OPTIONS__;
function Se(e = {}) {
  if (((e.isNotFound = !0), e.throw)) throw e;
  return e;
}
function Ce(e) {
  return e?.isNotFound === !0;
}
function we(e, t = String) {
  let n = new URLSearchParams();
  for (let r in e) {
    let i = e[r];
    i !== void 0 && n.set(r, t(i));
  }
  return n.toString();
}
function Te(e) {
  return e ? (e === `false` ? !1 : e === `true` ? !0 : e * 0 == 0 && +e + `` === e ? +e : e) : ``;
}
function Ee(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null ? (n[e] = Te(r)) : Array.isArray(t) ? t.push(Te(r)) : (n[e] = [t, Te(r)]);
  }
  return n;
}
var _ = Symbol.asyncIterator,
  De = Symbol.hasInstance,
  v = Symbol.isConcatSpreadable,
  y = Symbol.iterator,
  Oe = Symbol.match,
  ke = Symbol.matchAll,
  Ae = Symbol.replace,
  je = Symbol.search,
  Me = Symbol.species,
  Ne = Symbol.split,
  Pe = Symbol.toPrimitive,
  b = Symbol.toStringTag,
  Fe = Symbol.unscopables,
  Ie = {
    [_]: 0,
    [De]: 1,
    [v]: 2,
    [y]: 3,
    [Oe]: 4,
    [ke]: 5,
    [Ae]: 6,
    [je]: 7,
    [Me]: 8,
    [Ne]: 9,
    [Pe]: 10,
    [b]: 11,
    [Fe]: 12,
  },
  Le = { 0: _, 1: De, 2: v, 3: y, 4: Oe, 5: ke, 6: Ae, 7: je, 8: Me, 9: Ne, 10: Pe, 11: b, 12: Fe },
  Re = { 2: !0, 3: !1, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  ze = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  Be = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function x(e, t, n, r, i, a, o, s, c, l, u, d) {
  return { t: e, i: t, s: n, c: r, m: i, p: a, e: o, a: s, f: c, b: l, o: u, l: d };
}
function S(e) {
  return x(2, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
var Ve = S(2),
  He = S(3),
  Ue = S(1),
  We = S(0),
  Ge = S(4),
  Ke = S(5),
  qe = S(6),
  Je = S(7);
function Ye(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return;
  }
}
function C(e) {
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    ((r = Ye(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1)));
  return (n === 0 ? (t = e) : (t += e.slice(n)), t);
}
function Xe(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function w(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Xe);
}
var T = `__SEROVAL_REFS__`,
  Ze = new Map(),
  E = new Map();
function Qe(e) {
  return Ze.has(e);
}
function $e(e) {
  return E.has(e);
}
function et(e) {
  if (Qe(e)) return Ze.get(e);
  throw new Vt(e);
}
function tt(e) {
  if ($e(e)) return E.get(e);
  throw new Ht(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, T, {
      value: E,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, T, { value: E, configurable: !0, writable: !1, enumerable: !1 })
    : typeof self < `u`
      ? Object.defineProperty(self, T, { value: E, configurable: !0, writable: !1, enumerable: !1 })
      : typeof global < `u` &&
        Object.defineProperty(global, T, {
          value: E,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function nt(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function rt(e) {
  let t = ze[nt(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function it(e, t) {
  let n = rt(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    ((o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack` ? t & 4 && ((n ||= {}), (n[o] = e[o])) : ((n ||= {}), (n[o] = e[o]))));
  return n;
}
function at(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : +!Object.isExtensible(e);
}
function ot(e) {
  switch (e) {
    case 1 / 0:
      return Ke;
    case -1 / 0:
      return qe;
  }
  return e === e
    ? Object.is(e, -0)
      ? Ge
      : x(0, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
    : Je;
}
function st(e) {
  return x(1, void 0, C(e), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function ct(e) {
  return x(
    3,
    void 0,
    `` + e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function lt(e) {
  return x(4, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function ut(e, t) {
  let n = t.valueOf();
  return x(
    5,
    e,
    n === n ? t.toISOString() : ``,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function D(e, t, n) {
  return x(36, e, n.toString(), t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function dt(e, t) {
  return x(
    6,
    e,
    void 0,
    C(t.source),
    t.flags,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ft(e, t) {
  return x(17, e, Ie[t], void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function pt(e, t) {
  return x(18, e, C(et(t)), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function mt(e, t, n) {
  return x(25, e, n, C(t), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function ht(e, t, n) {
  return x(9, e, void 0, void 0, void 0, void 0, void 0, n, void 0, void 0, at(t), void 0);
}
function gt(e, t) {
  return x(21, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function _t(e, t, n) {
  return x(
    15,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function vt(e, t, n) {
  return x(
    16,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function yt(e, t, n) {
  return x(
    20,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.byteLength,
  );
}
function bt(e, t, n) {
  return x(13, e, nt(t), void 0, C(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0);
}
function xt(e, t, n) {
  return x(14, e, nt(t), void 0, C(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0);
}
function St(e, t) {
  return x(7, e, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, void 0);
}
function Ct(e, t) {
  return x(
    28,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function wt(e, t) {
  return x(
    30,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Tt(e, t, n) {
  return x(31, e, void 0, void 0, void 0, void 0, void 0, n, t, void 0, void 0, void 0);
}
function Et(e, t) {
  return x(32, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function Dt(e, t) {
  return x(33, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function Ot(e, t) {
  return x(34, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function kt(e, t, n, r) {
  return x(35, e, n, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, r);
}
var { toString: At } = Object.prototype,
  jt = { parsing: 1, serialization: 2, deserialization: 3 };
function Mt(e) {
  return `Seroval Error (step: ${jt[e]})`;
}
var Nt = (e, t) => Mt(e),
  Pt = class extends Error {
    constructor(e, t) {
      (super(Nt(e, t)), (this.cause = t));
    }
  },
  Ft = class extends Pt {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  It = class extends Pt {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function O(e) {
  return `Seroval Error (specific: ${e})`;
}
var Lt = class extends Error {
    constructor(e) {
      (super(O(1)), (this.value = e));
    }
  },
  Rt = class extends Error {
    constructor(e) {
      super(O(2));
    }
  },
  zt = class extends Error {
    constructor(e) {
      super(O(3));
    }
  },
  Bt = class extends Error {
    constructor(e) {
      super(O(4));
    }
  },
  Vt = class extends Error {
    constructor(e) {
      (super(O(5)), (this.value = e));
    }
  },
  Ht = class extends Error {
    constructor(e) {
      super(O(6));
    }
  },
  Ut = class extends Error {
    constructor(e) {
      super(O(7));
    }
  },
  k = class extends Error {
    constructor(e) {
      super(O(8));
    }
  },
  Wt = class extends Error {
    constructor(e) {
      super(O(9));
    }
  },
  Gt = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  Kt = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        ((e.s = t), (e.f = n));
      })),
      e
    );
  },
  qt = () => {
    let e = [],
      t = [],
      n = !0,
      r = !1,
      i = 0,
      a = {
        flush(e, n, r) {
          for (r = 0; r < i; r++) t[r] && t[r][n](e);
        },
        up(t, i, a, o) {
          for (i = 0, a = e.length; i < a; i++)
            ((o = e[i]), !n && i === a - 1 ? t[r ? `return` : `throw`](o) : t.next(o));
        },
        on(e, r) {
          return (
            n && ((r = i++), (t[r] = e)),
            a.up(e),
            () => {
              n && ((t[r] = t[i]), (t[i--] = void 0));
            }
          );
        },
      };
    return {
      __SEROVAL_STREAM__: !0,
      on(e) {
        return a.on(e);
      },
      next(t) {
        n && (e.push(t), a.flush(t, `next`));
      },
      throw(i) {
        n && (e.push(i), a.flush(i, `throw`), (n = !1), (r = !1), (t.length = 0));
      },
      return(i) {
        n && (e.push(i), a.flush(i, `return`), (n = !1), (r = !0), (t.length = 0));
      },
    };
  },
  Jt = (e) => (t) => () => {
    let n = 0,
      r = {
        [e]() {
          return r;
        },
        next() {
          if (n > t.d) return { done: !0, value: void 0 };
          let e = n++,
            r = t.v[e];
          if (e === t.t) throw r;
          return { done: e === t.d, value: r };
        },
      };
    return r;
  },
  Yt = (e, t) => (n) => () => {
    let r = 0,
      i = -1,
      a = !1,
      o = [],
      s = [],
      c = {
        finalize(e = 0, t = s.length) {
          for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
        },
      };
    n.on({
      next(e) {
        let t = s.shift();
        (t && t.s({ done: !1, value: e }), o.push(e));
      },
      throw(e) {
        let t = s.shift();
        (t && t.f(e), c.finalize(), (i = o.length), (a = !0), o.push(e));
      },
      return(e) {
        let t = s.shift();
        (t && t.s({ done: !0, value: e }), c.finalize(), (i = o.length), o.push(e));
      },
    });
    let l = {
      [e]() {
        return l;
      },
      next() {
        if (i === -1) {
          let e = r++;
          if (e >= o.length) {
            let e = t();
            return (s.push(e), e.p);
          }
          return { done: !1, value: o[e] };
        }
        if (r > i) return { done: !0, value: void 0 };
        let e = r++,
          n = o[e];
        if (e !== i) return { done: !1, value: n };
        if (a) throw n;
        return { done: !0, value: n };
      },
    };
    return l;
  },
  Xt = (e) => {
    let t = atob(e),
      n = t.length,
      r = new Uint8Array(n);
    for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
    return r.buffer;
  };
function Zt(e) {
  return `__SEROVAL_SEQUENCE__` in e;
}
function Qt(e, t, n) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t, d: n };
}
function $t(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[y]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      ((n = t.length), t.push(e));
    }
  return Qt(t, n, r);
}
var en = Jt(y);
function tn(e) {
  return en(e);
}
var nn = {},
  rn = {},
  an = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function on(e) {
  return `__SEROVAL_STREAM__` in e;
}
function A() {
  return qt();
}
function sn(e) {
  let t = A(),
    n = e[_]();
  async function r() {
    try {
      let e = await n.next();
      e.done ? t.return(e.value) : (t.next(e.value), await r());
    } catch (e) {
      t.throw(e);
    }
  }
  return (r().catch(() => {}), t);
}
var cn = Yt(_, Kt);
function ln(e) {
  return cn(e);
}
async function un(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function dn(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 127 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
  };
}
function j(e, t) {
  e.marked.add(t);
}
function fn(e, t) {
  let n = e.refs.size;
  return (e.refs.set(t, n), n);
}
function M(e, t) {
  let n = e.refs.get(t);
  return n == null ? { type: 0, value: fn(e, t) } : (j(e, n), { type: 1, value: lt(n) });
}
function pn(e, t) {
  let n = M(e, t);
  return n.type === 1 ? n : Qe(t) ? { type: 2, value: pt(n.value, t) } : n;
}
function N(e, t) {
  let n = pn(e, t);
  if (n.type !== 0) return n.value;
  if (t in Ie) return ft(n.value, t);
  throw new Lt(t);
}
function P(e, t) {
  let n = M(e, an[t]);
  return n.type === 1
    ? n.value
    : x(26, n.value, t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function mn(e) {
  let t = M(e, nn);
  return t.type === 1
    ? t.value
    : x(
        27,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        N(e, y),
        void 0,
        void 0,
        void 0,
      );
}
function hn(e) {
  let t = M(e, rn);
  return t.type === 1
    ? t.value
    : x(
        29,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        [P(e, 1), N(e, _)],
        void 0,
        void 0,
        void 0,
        void 0,
      );
}
function gn(e, t, n, r) {
  return x(
    n ? 11 : 10,
    e,
    void 0,
    void 0,
    void 0,
    r,
    void 0,
    void 0,
    void 0,
    void 0,
    at(t),
    void 0,
  );
}
function _n(e, t, n, r) {
  return x(
    8,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    { k: n, v: r },
    void 0,
    P(e, 0),
    void 0,
    void 0,
    void 0,
  );
}
function vn(e, t, n) {
  let r = new Uint8Array(n),
    i = ``;
  for (let e = 0, t = r.length; e < t; e++) i += String.fromCharCode(r[e]);
  return x(
    19,
    t,
    C(btoa(i)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    P(e, 5),
    void 0,
    void 0,
    void 0,
  );
}
function yn(e, t) {
  return { base: dn(e, t), child: void 0 };
}
var bn = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return F(this._p, this.depth, e);
  }
};
async function xn(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++) i in n ? (r[i] = await F(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function Sn(e, t, n, r) {
  return ht(n, r, await xn(e, t, r));
}
async function Cn(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++) (i.push(C(r[n][0])), a.push(await F(e, t, r[n][1])));
  return (
    y in n && (i.push(N(e.base, y)), a.push(Ct(mn(e.base), await F(e, t, $t(n))))),
    _ in n && (i.push(N(e.base, _)), a.push(wt(hn(e.base), await F(e, t, sn(n))))),
    b in n && (i.push(N(e.base, b)), a.push(st(n[b]))),
    v in n && (i.push(N(e.base, v)), a.push(n[v] ? Ve : He)),
    { k: i, v: a }
  );
}
async function wn(e, t, n, r, i) {
  return gn(n, r, i, await Cn(e, t, r));
}
async function Tn(e, t, n, r) {
  return gt(n, await F(e, t, r.valueOf()));
}
async function En(e, t, n, r) {
  return _t(n, r, await F(e, t, r.buffer));
}
async function Dn(e, t, n, r) {
  return vt(n, r, await F(e, t, r.buffer));
}
async function On(e, t, n, r) {
  return yt(n, r, await F(e, t, r.buffer));
}
async function kn(e, t, n, r) {
  let i = it(r, e.base.features);
  return bt(n, r, i ? await Cn(e, t, i) : void 0);
}
async function An(e, t, n, r) {
  let i = it(r, e.base.features);
  return xt(n, r, i ? await Cn(e, t, i) : void 0);
}
async function jn(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries()) (i.push(await F(e, t, n)), a.push(await F(e, t, o)));
  return _n(e.base, n, i, a);
}
async function Mn(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await F(e, t, n));
  return St(n, i);
}
async function Nn(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return mt(n, o.tag, await o.parse.async(r, new bn(e, t), { id: n }));
    }
}
async function Pn(e, t, n, r) {
  let [i, a] = await un(r);
  return x(
    12,
    n,
    i,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    await F(e, t, a),
    void 0,
    void 0,
    void 0,
  );
}
function Fn(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        (j(this.base, t),
          F(this, e, n).then(
            (e) => {
              a.push(Et(t, e));
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      throw: (n) => {
        (j(this.base, t),
          F(this, e, n).then(
            (e) => {
              (a.push(Dt(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      return: (n) => {
        (j(this.base, t),
          F(this, e, n).then(
            (e) => {
              (a.push(Ot(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
    });
}
async function In(e, t, n, r) {
  return Tt(n, P(e.base, 4), await new Promise(Fn.bind(e, t, n, r)));
}
async function Ln(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await F(e, t, r.v[n]);
  return kt(n, i, r.t, r.d);
}
async function Rn(e, t, n, r) {
  if (Array.isArray(r)) return Sn(e, t, n, r);
  if (on(r)) return In(e, t, n, r);
  if (Zt(r)) return Ln(e, t, n, r);
  let i = r.constructor;
  if (i !== void 0 && typeof i != `function`) {
    let e = Object.getPrototypeOf(r);
    i = e === null ? void 0 : e.constructor;
  }
  if (i === Gt) return F(e, t, r.replacement);
  let a = await Nn(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return wn(e, t, n, r, !1);
    case void 0:
      return wn(e, t, n, r, !0);
    case Date:
      return ut(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return kn(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return Tn(e, t, n, r);
    case ArrayBuffer:
      return vn(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return En(e, t, n, r);
    case DataView:
      return On(e, t, n, r);
    case Map:
      return jn(e, t, n, r);
    case Set:
      return Mn(e, t, n, r);
  }
  if (i === Promise || r instanceof Promise) return Pn(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return dt(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return Dn(e, t, n, r);
      default:
        break;
    }
  if (o & 1 && typeof AggregateError < `u` && (i === AggregateError || r instanceof AggregateError))
    return An(e, t, n, r);
  if (o & 64 && typeof Temporal < `u`)
    switch (i) {
      case Temporal.Instant:
        return D(n, 0, r);
      case Temporal.Duration:
        return D(n, 1, r);
      case Temporal.PlainDate:
        return D(n, 2, r);
      case Temporal.PlainDateTime:
        return D(n, 3, r);
      case Temporal.PlainMonthDay:
        return D(n, 4, r);
      case Temporal.PlainTime:
        return D(n, 5, r);
      case Temporal.PlainYearMonth:
        return D(n, 6, r);
      case Temporal.ZonedDateTime:
        return D(n, 7, r);
      default:
        break;
    }
  if (r instanceof Error) return kn(e, t, n, r);
  if (y in r || _ in r) return wn(e, t, n, r, !!i);
  throw new Lt(r);
}
async function zn(e, t, n) {
  let r = pn(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await Nn(e, t, r.value, n);
  if (i) return i;
  throw new Lt(n);
}
async function F(e, t, n) {
  if (t >= e.base.depthLimit) throw new Wt(e.base.depthLimit);
  switch (typeof n) {
    case `boolean`:
      return n ? Ve : He;
    case `undefined`:
      return Ue;
    case `string`:
      return st(n);
    case `number`:
      return ot(n);
    case `bigint`:
      return ct(n);
    case `object`:
      if (n) {
        let r = pn(e.base, n);
        return r.type === 0 ? await Rn(e, t + 1, r.value, n) : r.value;
      }
      return We;
    case `symbol`:
      return N(e.base, n);
    case `function`:
      return zn(e, t, n);
    default:
      throw new Lt(n);
  }
}
async function Bn(e, t) {
  try {
    return await F(e, 0, t);
  } catch (e) {
    throw e instanceof Ft ? e : new Ft(e);
  }
}
function I(e) {
  return e;
}
function Vn(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && Vn(e, r.extends));
  }
}
function Hn(e) {
  if (e) {
    let t = new Set();
    return (Vn(t, e), [...t]);
  }
}
function Un(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new Ut(e);
  }
}
function Wn(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function Gn(e) {
  switch (e) {
    case _:
    case v:
    case b:
    case y:
      return !0;
    default:
      return !1;
  }
}
var Kn = 1e6,
  qn = 1e4,
  Jn = 2e4;
function Yn(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Xn = 1e3;
function Zn(e, t) {
  let n = t.refs || new Map();
  return (
    `types` in n || Object.assign(n, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: n,
      features: t.features ?? 127 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Xn,
    }
  );
}
function Qn(e) {
  return { mode: 2, base: Zn(2, e), child: void 0 };
}
var $n = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return z(this._p, this.depth, e);
  }
};
function er(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t)) throw new k({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function tr(e) {
  return !!e && typeof e == `object` && `then` in e && typeof e.then == `function`;
}
function nr(e, t, n) {
  return (er(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n);
}
function rr(e, t, n) {
  return (er(e.base, t), e.base.refs.set(t, n), n);
}
function L(e, t, n) {
  return e.mode === 1 ? nr(e, t, n) : rr(e, t, n);
}
function ir(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new k(e);
}
function ar(e, t) {
  return L(e, t.i, tt(w(t.s)));
}
function or(e, t, n) {
  let r = n.a,
    i = r.length,
    a = L(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) ((o = r[n]), o && (a[n] = z(e, t, o)));
  return (Yn(a, n.o), a);
}
function sr(e, t, n) {
  Wn(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, { value: n, configurable: !0, enumerable: !0, writable: !0 });
}
function cr(e, t, n, r, i) {
  if (typeof r == `string`) sr(n, w(r), z(e, t, i));
  else {
    let a = z(e, t, r);
    switch (typeof a) {
      case `string`:
        sr(n, a, z(e, t, i));
        break;
      case `symbol`:
        Gn(a) && (n[a] = z(e, t, i));
        break;
      default:
        throw new k(r);
    }
  }
}
function lr(e, t, n) {
  e.base.refs.types.set(t, n);
}
function R(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new k(t);
}
function ur(e, t, n, r) {
  let i = n.k;
  if (i.length > 0) for (let a = 0, o = n.v, s = i.length; a < s; a++) cr(e, t, r, i[a], o[a]);
  return r;
}
function dr(e, t, n) {
  let r = L(e, n.i, n.t === 10 ? {} : Object.create(null));
  return (ur(e, t, n.p, r), Yn(r, n.o), r);
}
function fr(e, t) {
  return L(e, t.i, new Date(t.s));
}
function pr(e, t) {
  if (!(e.base.features & 64)) throw new Rt(t);
  let n;
  switch (t.c) {
    case 0:
      n = Temporal.Instant.from(t.s);
      break;
    case 1:
      n = Temporal.Duration.from(t.s);
      break;
    case 2:
      n = Temporal.PlainDate.from(t.s);
      break;
    case 3:
      n = Temporal.PlainDateTime.from(t.s);
      break;
    case 4:
      n = Temporal.PlainMonthDay.from(t.s);
      break;
    case 5:
      n = Temporal.PlainTime.from(t.s);
      break;
    case 6:
      n = Temporal.PlainYearMonth.from(t.s);
      break;
    case 7:
      n = Temporal.ZonedDateTime.from(t.s);
      break;
    default:
      throw new k(t);
  }
  return L(e, t.i, n);
}
function mr(e, t) {
  if (e.base.features & 32) {
    let n = w(t.c);
    if (n.length > Jn) throw new k(t);
    return L(e, t.i, new RegExp(n, t.m));
  }
  throw new Rt(t);
}
function hr(e, t, n) {
  let r = L(e, n.i, new Set());
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(z(e, t, a[i]));
  return r;
}
function gr(e, t, n) {
  let r = L(e, n.i, new Map());
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(z(e, t, a[i]), z(e, t, o[i]));
  return r;
}
function _r(e, t) {
  if (t.s.length > Kn) throw new k(t);
  return L(e, t.i, Xt(w(t.s)));
}
function vr(e, t, n) {
  let r = Un(n.c),
    i = z(e, t, n.f),
    a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new k(n);
  return L(e, n.i, new r(i, a, n.l));
}
function yr(e, t, n) {
  let r = z(e, t, n.f),
    i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new k(n);
  return L(e, n.i, new DataView(r, i, n.l));
}
function br(e, t, n, r) {
  if (n.p) {
    let i = ur(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function xr(e, t, n) {
  return br(e, t, n, L(e, n.i, AggregateError([], w(n.m))));
}
function Sr(e, t, n) {
  let r = ir(n, Be, n.s);
  return br(e, t, n, L(e, n.i, new r(w(n.m))));
}
function Cr(e, t, n) {
  let r = Kt(),
    i = L(e, n.i, r.p),
    a = z(e, t, n.f);
  if (tr(a)) throw new k(n.f);
  return (n.s ? r.s(a) : r.f(a), i);
}
function wr(e, t, n) {
  return L(e, n.i, Object(z(e, t, n.f)));
}
function Tr(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = w(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i) return L(e, n.i, o.deserialize(n.s, new $n(e, t), { id: n.i }));
    }
  }
  throw new zt(n.c);
}
function Er(e, t) {
  let n = L(e, t.i, L(e, t.s, Kt()).p);
  return (lr(e, t.s, 22), n);
}
function Dr(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    R(e, n, n.i, 22);
    let i = z(e, t, n.a[1]);
    if (tr(i)) throw new k(n.a[1]);
    n.t === 23 ? r.s(i) : r.f(i);
    return;
  }
  throw new Bt(`Promise`);
}
function Or(e, t, n) {
  return (z(e, t, n.a[0]), tn(z(e, t, n.a[1])));
}
function kr(e, t, n) {
  return (z(e, t, n.a[0]), ln(z(e, t, n.a[1])));
}
function Ar(e, t, n) {
  let r = L(e, n.i, A());
  lr(e, n.i, 31);
  let i = n.a,
    a = i.length;
  if (a) for (let n = 0; n < a; n++) z(e, t, i[n]);
  return r;
}
function jr(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (R(e, n, n.i, 31), r.next(z(e, t, n.f)));
    return;
  }
  throw new Bt(`Stream`);
}
function Mr(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (R(e, n, n.i, 31), r.throw(z(e, t, n.f)));
    return;
  }
  throw new Bt(`Stream`);
}
function Nr(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (R(e, n, n.i, 31), r.return(z(e, t, n.f)));
    return;
  }
  throw new Bt(`Stream`);
}
function Pr(e, t, n) {
  z(e, t, n.f);
}
function Fr(e, t, n) {
  z(e, t, n.a[1]);
}
function Ir(e, t, n) {
  let r = L(e, n.i, Qt([], n.s, n.l));
  for (let i = 0, a = n.a.length; i < a; i++) r.v[i] = z(e, t, n.a[i]);
  return r;
}
function z(e, t, n) {
  if (t > e.base.depthLimit) throw new Wt(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return ir(n, Re, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return w(String(n.s));
    case 3:
      if (String(n.s).length > qn) throw new k(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return ar(e, n);
    case 9:
      return or(e, t, n);
    case 10:
    case 11:
      return dr(e, t, n);
    case 5:
      return fr(e, n);
    case 6:
      return mr(e, n);
    case 7:
      return hr(e, t, n);
    case 8:
      return gr(e, t, n);
    case 19:
      return _r(e, n);
    case 16:
    case 15:
      return vr(e, t, n);
    case 20:
      return yr(e, t, n);
    case 14:
      return xr(e, t, n);
    case 13:
      return Sr(e, t, n);
    case 12:
      return Cr(e, t, n);
    case 17:
      return ir(n, Le, n.s);
    case 21:
      return wr(e, t, n);
    case 25:
      return Tr(e, t, n);
    case 22:
      return Er(e, n);
    case 23:
    case 24:
      return Dr(e, t, n);
    case 28:
      return Or(e, t, n);
    case 30:
      return kr(e, t, n);
    case 31:
      return Ar(e, t, n);
    case 32:
      return jr(e, t, n);
    case 33:
      return Mr(e, t, n);
    case 34:
      return Nr(e, t, n);
    case 27:
      return Pr(e, t, n);
    case 29:
      return Fr(e, t, n);
    case 35:
      return Ir(e, t, n);
    case 36:
      return pr(e, n);
    default:
      throw new Rt(n);
  }
}
function Lr(e, t) {
  try {
    return z(e, 0, t);
  } catch (e) {
    throw new It(e);
  }
}
function Rr(e, t) {
  return Lr(
    Qn({
      plugins: Hn(t.plugins),
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  );
}
async function zr(e, t = {}) {
  let n = yn(1, { plugins: Hn(t.plugins), disabledFeatures: t.disabledFeatures });
  return { t: await Bn(n, e), f: n.base.features, m: Array.from(n.base.marked) };
}
function Br(e) {
  return e;
}
function Vr(e) {
  return I({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n, r) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n, r) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var Hr = class {
    constructor(e, t) {
      ((this.stream = e), (this.hint = t?.hint ?? `binary`));
    }
  },
  B = globalThis.Buffer,
  Ur = !!B && typeof B.from == `function`;
function Wr(e) {
  if (e.length === 0) return ``;
  if (Ur) return B.from(e).toString(`base64`);
  let t = 32768,
    n = [];
  for (let r = 0; r < e.length; r += t) {
    let i = e.subarray(r, r + t);
    n.push(String.fromCharCode.apply(null, i));
  }
  return btoa(n.join(``));
}
function Gr(e) {
  if (e.length === 0) return new Uint8Array();
  if (Ur) {
    let t = B.from(e, `base64`);
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
var V = Object.create(null),
  H = Object.create(null),
  Kr = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(Gr(e));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  qr = new TextEncoder(),
  Jr = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              typeof e == `string` ? t.enqueue(qr.encode(e)) : t.enqueue(Gr(e.$b64));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Yr = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`,
  Xr = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function Zr(e) {
  let t = A(),
    n = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: r } = await n.read();
          if (e) {
            t.return(void 0);
            break;
          }
          t.next(Wr(r));
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
function Qr(e) {
  let t = A(),
    n = e.getReader(),
    r = new TextDecoder(`utf-8`, { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: i } = await n.read();
          if (e) {
            try {
              let e = r.decode();
              e.length > 0 && t.next(e);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            let e = r.decode(i, { stream: !0 });
            e.length > 0 && t.next(e);
          } catch {
            t.next({ $b64: Wr(i) });
          }
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
var $r = I({
  tag: `tss/RawStream`,
  extends: [
    I({
      tag: `tss/RawStreamFactory`,
      test(e) {
        return e === V;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Yr;
      },
      deserialize(e, t, n) {
        return V;
      },
    }),
    I({
      tag: `tss/RawStreamFactoryText`,
      test(e) {
        return e === H;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Xr;
      },
      deserialize(e, t, n) {
        return H;
      },
    }),
  ],
  test(e) {
    return e instanceof Hr;
  },
  parse: {
    sync(e, t, n) {
      let r = e.hint === `text` ? H : V;
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(A()) };
    },
    async async(e, t, n) {
      let r = e.hint === `text` ? H : V,
        i = e.hint === `text` ? Qr(e.stream) : Zr(e.stream);
      return { hint: await t.parse(e.hint), factory: await t.parse(r), stream: await t.parse(i) };
    },
    stream(e, t, n) {
      let r = e.hint === `text` ? H : V,
        i = e.hint === `text` ? Qr(e.stream) : Zr(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(i) };
    },
  },
  serialize(e, t, n) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t, n) {
    let r = t.deserialize(e.stream);
    return t.deserialize(e.hint) === `text` ? Jr(r) : Kr(r);
  },
});
function ei(e) {
  return I({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize() {
      throw Error(
        `RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`,
      );
    },
    deserialize(t, n, r) {
      return e(typeof n?.deserialize == `function` ? n.deserialize(t.streamId) : t.streamId);
    },
  });
}
var ti = I({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  U = {},
  ni = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  ri = I({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === U;
    },
    parse: {
      sync() {
        return U;
      },
      async async() {
        return await Promise.resolve(U);
      },
      stream() {
        return U;
      },
    },
    serialize() {
      return ni.toString();
    },
    deserialize() {
      return U;
    },
  });
async function ii(e, t) {
  try {
    let n = await t.read();
    n.done ? (e.return(n.value), t.releaseLock()) : (e.next(n.value), await ii(e, t));
  } catch (t) {
    e.throw(t);
  }
}
function ai(e) {
  (e.cancel().catch(() => {}), e.releaseLock());
}
function oi(e) {
  let t = A(),
    n = e.getReader(),
    r = ai.bind(null, n);
  return (ii(t, n).catch(r), [t, r]);
}
var si = [
  ti,
  $r,
  I({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [ri],
    test(e) {
      return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse(U), stream: t.parse(A()) };
      },
      async async(e, t) {
        return { factory: await t.parse(U), stream: await t.parse(oi(e)[0]) };
      },
      stream(e, t) {
        let [n, r] = oi(e);
        return (t.addCleanup(r), { factory: t.parse(U), stream: t.parse(n) });
      },
    },
    serialize(e, t) {
      return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
    },
    deserialize(e, t) {
      return ni(t.deserialize(e.stream));
    },
  }),
];
function ci() {
  return [...(xe()?.serializationAdapters?.map(Vr) ?? []), ...si];
}
var li = new TextDecoder(),
  ui = new Uint8Array(),
  di = 16777216,
  fi = 33554432,
  pi = 1024,
  mi = 1e5;
function hi(e) {
  let t = new Map(),
    n = new Map(),
    r = new Set(),
    i = !1,
    a = null,
    o = 0,
    s,
    c = new ReadableStream({
      start(e) {
        s = e;
      },
      cancel() {
        i = !0;
        try {
          a?.cancel();
        } catch {}
        (t.forEach((e) => {
          try {
            e.error(Error(`Framed response cancelled`));
          } catch {}
        }),
          t.clear(),
          n.clear(),
          r.clear());
      },
    });
  function l(e) {
    let i = n.get(e);
    if (i) return i;
    if (r.has(e))
      return new ReadableStream({
        start(e) {
          e.close();
        },
      });
    if (n.size >= pi) throw Error(`Too many raw streams in framed response (max ${pi})`);
    let a = new ReadableStream({
      start(n) {
        t.set(e, n);
      },
      cancel() {
        (r.add(e), t.delete(e), n.delete(e));
      },
    });
    return (n.set(e, a), a);
  }
  function u(e) {
    return (l(e), t.get(e));
  }
  return (
    (async () => {
      let n = e.getReader();
      a = n;
      let c = [],
        l = 0;
      function d() {
        if (l < 9) return null;
        let e = c[0];
        if (e.length >= 9)
          return {
            type: e[0],
            streamId: ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            length: ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0,
          };
        let t = new Uint8Array(9),
          n = 0,
          r = 9;
        for (let e = 0; e < c.length && r > 0; e++) {
          let i = c[e],
            a = Math.min(i.length, r);
          (t.set(i.subarray(0, a), n), (n += a), (r -= a));
        }
        return {
          type: t[0],
          streamId: ((t[1] << 24) | (t[2] << 16) | (t[3] << 8) | t[4]) >>> 0,
          length: ((t[5] << 24) | (t[6] << 16) | (t[7] << 8) | t[8]) >>> 0,
        };
      }
      function f(e) {
        if (e === 0) return ui;
        let t = c[0];
        if (t && t.length >= e) {
          let n = t.subarray(0, e);
          return (t.length === e ? c.shift() : (c[0] = t.subarray(e)), (l -= e), n);
        }
        let n = new Uint8Array(e),
          r = 0,
          i = e;
        for (; i > 0 && c.length > 0;) {
          let e = c[0];
          if (!e) break;
          let t = Math.min(e.length, i);
          (n.set(e.subarray(0, t), r),
            (r += t),
            (i -= t),
            t === e.length ? c.shift() : (c[0] = e.subarray(t)));
        }
        return ((l -= e), n);
      }
      try {
        for (;;) {
          let { done: e, value: a } = await n.read();
          if (i || e) break;
          if (a) {
            if (l + a.length > fi) throw Error(`Framed response buffer exceeded ${fi} bytes`);
            for (c.push(a), l += a.length; ;) {
              let e = d();
              if (!e) break;
              let { type: n, streamId: i, length: a } = e;
              if (n !== g.JSON && n !== g.CHUNK && n !== g.END && n !== g.ERROR)
                throw Error(`Unknown frame type: ${n}`);
              if (n === g.JSON) {
                if (i !== 0) throw Error(`Invalid JSON frame streamId (expected 0)`);
              } else if (i === 0) throw Error(`Invalid raw frame streamId (expected non-zero)`);
              if (a > di) throw Error(`Frame payload too large: ${a} bytes (max ${di})`);
              let c = 9 + a;
              if (l < c) break;
              if (++o > mi) throw Error(`Too many frames in framed response (max ${mi})`);
              f(9);
              let p = f(a);
              switch (n) {
                case g.JSON:
                  try {
                    s.enqueue(li.decode(p));
                  } catch {}
                  break;
                case g.CHUNK: {
                  let e = u(i);
                  e && e.enqueue(p);
                  break;
                }
                case g.END: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    try {
                      e.close();
                    } catch {}
                    t.delete(i);
                  }
                  break;
                }
                case g.ERROR: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    let n = li.decode(p);
                    (e.error(Error(n)), t.delete(i));
                  }
                  break;
                }
              }
            }
          }
        }
        if (l !== 0) throw Error(`Incomplete frame at end of framed response`);
        try {
          s.close();
        } catch {}
        (t.forEach((e) => {
          try {
            e.close();
          } catch {}
        }),
          t.clear());
      } catch (e) {
        try {
          s.error(e);
        } catch {}
        (t.forEach((t) => {
          try {
            t.error(e);
          } catch {}
        }),
          t.clear());
      } finally {
        try {
          n.releaseLock();
        } catch {}
        a = null;
      }
    })(),
    { getOrCreateStream: l, jsonChunks: c }
  );
}
var gi = null;
async function _i(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var vi = Object.prototype.hasOwnProperty;
function yi(e) {
  for (let t in e) if (vi.call(e, t)) return !0;
  return !1;
}
async function bi(e, t, n) {
  gi ||= ci();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData ? `formData` : `payload`,
    o = r.headers ? new Headers(r.headers) : new Headers();
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a === `payload` && o.set(`accept`, `${_e}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a === `formData`) throw Error(`FormData is not supported with GET requests`);
    let t = await xi(r);
    if (t !== void 0) {
      let n = we({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  if (r.method === `POST`) {
    let e = await Ci(r);
    (e?.contentType && o.set(`content-type`, e.contentType), (s = e?.body));
  }
  return await wi(async () => i(e, { method: r.method, headers: o, signal: r.signal, body: s }));
}
async function xi(e) {
  let t = !1,
    n = {};
  if (
    (e.data !== void 0 && ((t = !0), (n.data = e.data)),
    e.context && yi(e.context) && ((t = !0), (n.context = e.context)),
    t)
  )
    return Si(n);
}
async function Si(e) {
  return JSON.stringify(await Promise.resolve(zr(e, { plugins: gi })));
}
async function Ci(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && yi(e.context) && (t = await Si(e.context)),
      t !== void 0 && e.data.set(me, t),
      { body: e.data }
    );
  }
  let t = await xi(e);
  if (t) return { body: t, contentType: `application/json` };
}
async function wi(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw (console.log(e), e);
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let r = t.headers.get(`content-type`);
  if ((r || n(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (r.includes(`application/x-tss-framed`)) {
      if ((be(r), !t.body)) throw Error(`No response body for framed response`);
      let { getOrCreateStream: n, jsonChunks: i } = hi(t.body),
        a = [ei(n), ...(gi || [])],
        o = new Map();
      e = await Ti({
        jsonStream: i,
        onMessage: (e) => Rr(e, { refs: o, plugins: a }),
        onError(e, t) {
          console.error(e, t);
        },
      });
    } else if (r.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      try {
        e = Rr(n, { plugins: gi });
      } finally {
      }
      await _i(r);
    }
    if ((e || n(), e instanceof Error)) throw e;
    return e;
  }
  if (r.includes(`application/json`)) {
    let e = await t.json(),
      n = i(e);
    if (n) throw n;
    if (Ce(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function Ti({ jsonStream: e, onMessage: t, onError: n }) {
  let r = e.getReader(),
    { value: i, done: a } = await r.read();
  if (a || !i) throw Error(`Stream ended before first object`);
  let o = JSON.parse(i),
    s = !1,
    c = (async () => {
      try {
        for (;;) {
          let { value: e, done: i } = await r.read();
          if (i) break;
          if (e)
            try {
              let n = [];
              try {
                t(JSON.parse(e));
              } finally {
              }
              await _i(n);
            } catch (t) {
              n?.(`Invalid JSON: ${e}`, t);
            }
        }
      } catch (e) {
        s || n?.(`Stream processing error:`, e);
      }
    })(),
    l,
    u = [];
  try {
    l = t(o);
  } catch (e) {
    throw ((s = !0), r.cancel().catch(() => {}), e);
  }
  return (
    await _i(u),
    Promise.resolve(l).catch(() => {
      ((s = !0), r.cancel().catch(() => {}));
    }),
    c.finally(() => {
      try {
        r.releaseLock();
      } catch {}
    }),
    l
  );
}
function W(e) {
  let t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = xe()?.serverFns?.fetch;
      return bi(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [he]: !0 },
  );
}
function Ei(e) {
  if (Array.isArray(e)) return e.flatMap((e) => Ei(e));
  if (typeof e != `string`) return [];
  let t = [],
    n = 0,
    r,
    i,
    a,
    o,
    s,
    c = () => {
      for (; n < e.length && /\s/.test(e.charAt(n));) n += 1;
      return n < e.length;
    },
    l = () => ((i = e.charAt(n)), i !== `=` && i !== `;` && i !== `,`);
  for (; n < e.length;) {
    for (r = n, s = !1; c();)
      if (((i = e.charAt(n)), i === `,`)) {
        for (a = n, n += 1, c(), o = n; n < e.length && l();) n += 1;
        n < e.length && e.charAt(n) === `=`
          ? ((s = !0), (n = o), t.push(e.slice(r, a)), (r = n))
          : (n = a + 1);
      } else n += 1;
    (!s || n >= e.length) && t.push(e.slice(r));
  }
  return t;
}
function Di(e) {
  return e instanceof Headers
    ? e
    : Array.isArray(e) || typeof e == `object`
      ? new Headers(e)
      : null;
}
function Oi(...e) {
  return e.reduce((e, t) => {
    let n = Di(t);
    if (!n) return e;
    for (let [t, r] of n.entries())
      t === `set-cookie` ? Ei(r).forEach((t) => e.append(`set-cookie`, t)) : e.set(t, r);
    return e;
  }, new Headers());
}
function ki(e) {
  return e !== `__proto__` && e !== `constructor` && e !== `prototype`;
}
function Ai(e, t) {
  let n = Object.create(null);
  if (e) for (let t of Object.keys(e)) ki(t) && (n[t] = e[t]);
  if (t && typeof t == `object`) for (let e of Object.keys(t)) ki(e) && (n[e] = t[e]);
  return n;
}
function ji(e) {
  if (!e) return Object.create(null);
  let t = Object.create(null);
  for (let n of Object.keys(e)) ki(n) && (t[n] = e[n]);
  return t;
}
var Mi = () => {
    throw Error(`createServerOnlyFn() functions can only be called on the server!`);
  },
  G = (e, t) => {
    let n = t || e || {};
    n.method === void 0 && (n.method = `GET`);
    let r = (e) => G(void 0, { ...n, validator: e, inputValidator: e });
    return Object.assign((e) => G(void 0, { ...n, ...e }), {
      options: n,
      middleware: (e) => {
        let t = [...(n.middleware || [])];
        e.map((e) => {
          ge in e ? e.options.middleware && t.push(...e.options.middleware) : t.push(e);
        });
        let r = G(void 0, { ...n, middleware: t });
        return ((r[ge] = !0), r);
      },
      validator: r,
      inputValidator: r,
      handler: (...e) => {
        let [t, r] = e,
          a = { ...n, extractedFn: t, serverFn: r },
          o = [...(a.middleware || []), Ii(a)];
        return (
          (t.method = n.method),
          Object.assign(
            async (e) => {
              let n = await Ni(o, `client`, {
                  ...t,
                  ...a,
                  data: e?.data,
                  headers: e?.headers,
                  signal: e?.signal,
                  fetch: e?.fetch,
                  context: ji(),
                }),
                r = i(n.error);
              if (r) throw r;
              if (n.error) throw n.error;
              return n.result;
            },
            {
              ...t,
              method: n.method,
              __executeServer: async (e) => {
                let n = Mi(),
                  r = n.contextAfterGlobalMiddlewares;
                return await Ni(o, `server`, {
                  ...t,
                  ...e,
                  serverFnMeta: t.serverFnMeta,
                  context: Ai(e.context, r),
                  request: n.request,
                }).then((e) => ({ result: e.result, error: e.error, context: e.sendContext }));
              },
            },
          )
        );
      },
    });
  };
async function Ni(e, t, n) {
  let r = Pi([...(xe()?.functionMiddleware || []), ...e]);
  if (t === `server`) {
    let e = Mi({ throwIfNotFound: !1 });
    e?.executedRequestMiddlewares && (r = r.filter((t) => !e.executedRequestMiddlewares.has(t)));
  }
  let i = async (e) => {
    let n = r.shift();
    if (!n) return e;
    try {
      let r = `validator` in n.options ? n.options.validator : void 0;
      (!r && `inputValidator` in n.options && (r = n.options.inputValidator),
        r && t === `server` && (e.data = await Fi(r, e.data)));
      let a;
      if (
        (t === `client`
          ? `client` in n.options && (a = n.options.client)
          : `server` in n.options && (a = n.options.server),
        a)
      ) {
        let t = async (t = {}) => {
            let n = await i({
              ...e,
              ...t,
              context: Ai(e.context, t.context),
              sendContext: Ai(e.sendContext, t.sendContext),
              headers: Oi(e.headers, t.headers),
              _callSiteFetch: e._callSiteFetch,
              fetch: e._callSiteFetch ?? t.fetch ?? e.fetch,
              result: t.result === void 0 ? (t instanceof Response ? t : e.result) : t.result,
              error: t.error ?? e.error,
            });
            if (n.error) throw n.error;
            return n;
          },
          n = await a({ ...e, next: t });
        if (oe(n)) return { ...e, error: n };
        if (n instanceof Response) return { ...e, result: n };
        if (!n)
          throw Error(
            `User middleware returned undefined. You must call next() or return a result in your middlewares.`,
          );
        return n;
      }
      return i(e);
    } catch (t) {
      return { ...e, error: t };
    }
  };
  return i({
    ...n,
    headers: n.headers || {},
    sendContext: n.sendContext || {},
    context: n.context || ji(),
    _callSiteFetch: n.fetch,
  });
}
function Pi(e, t = 100) {
  let n = new Set(),
    r = [],
    i = (e, a) => {
      if (a > t)
        throw Error(
          `Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`,
        );
      e.forEach((e) => {
        (e.options.middleware && i(e.options.middleware, a + 1), n.has(e) || (n.add(e), r.push(e)));
      });
    };
  return (i(e, 0), r);
}
async function Fi(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = await e[`~standard`].validate(t);
    if (n.issues) throw Error(JSON.stringify(n.issues, void 0, 2));
    return n.value;
  }
  if (`parse` in e) return e.parse(t);
  if (typeof e == `function`) return e(t);
  throw Error(`Invalid validator type!`);
}
function Ii(e) {
  return {
    "~types": void 0,
    options: {
      inputValidator: e.validator ?? e.inputValidator,
      client: async ({ next: t, sendContext: n, fetch: r, ...i }) => {
        let a = { ...i, context: n, fetch: r };
        return t(await e.extractedFn?.(a));
      },
      server: async ({ next: t, ...n }) => {
        let r = await e.serverFn?.(n);
        return t({ ...n, result: r });
      },
    },
  };
}
var K = t(e(), 1),
  q = r(),
  Li = Object.defineProperty,
  J = (e, t) => Li(e, `name`, { value: t, configurable: !0 }),
  Ri = `Dialog`,
  [zi, Bi] = a(Ri),
  [Vi, Y] = zi(Ri),
  Hi = J((e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = K.useRef(null),
      c = K.useRef(null),
      [l, d] = p({ prop: r, defaultProp: i ?? !1, onChange: a, caller: Ri }),
      [f, ee] = K.useState(0),
      [te, ne] = K.useState(0);
    return (0, q.jsx)(Vi, {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: u(),
      titleId: u(),
      descriptionId: u(),
      titlePresent: f > 0,
      descriptionPresent: te > 0,
      setTitleCount: ee,
      setDescriptionCount: ne,
      open: l,
      onOpenChange: d,
      onOpenToggle: K.useCallback(() => d((e) => !e), [d]),
      modal: o,
      children: n,
    });
  }, `Dialog`),
  Ui = `DialogTrigger`,
  Wi = K.forwardRef(
    J(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = Y(Ui, n),
        a = ae(t, i.triggerRef);
      return (0, q.jsx)(c.button, {
        type: `button`,
        "aria-haspopup": `dialog`,
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": la(i.open),
        ...r,
        ref: a,
        onClick: h(e.onClick, i.onOpenToggle),
      });
    }, `DialogTrigger`),
  ),
  Gi = `DialogPortal`,
  [Ki, qi] = zi(Gi, { forceMount: void 0 }),
  Ji = J((e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
      a = Y(Gi, t);
    return (0, q.jsx)(Ki, {
      scope: t,
      forceMount: n,
      children: K.Children.map(r, (e) =>
        (0, q.jsx)(ee, {
          present: n || a.open,
          children: (0, q.jsx)(re, { asChild: !0, container: i, children: e }),
        }),
      ),
    });
  }, `DialogPortal`),
  Yi = `DialogOverlay`,
  Xi = K.forwardRef(
    J(function (e, t) {
      let n = qi(Yi, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = Y(Yi, e.__scopeDialog);
      return a.modal
        ? (0, q.jsx)(ee, { present: r || a.open, children: (0, q.jsx)(Qi, { ...i, ref: t }) })
        : null;
    }, `DialogOverlay`),
  ),
  Zi = te(`DialogOverlay.RemoveScroll`),
  Qi = K.forwardRef(
    J(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = Y(Yi, n),
        a = ie(),
        o = ae(t, a);
      return (0, q.jsx)(d, {
        as: Zi,
        allowPinchZoom: !0,
        shards: [i.contentRef],
        children: (0, q.jsx)(c.div, {
          "data-state": la(i.open),
          ...r,
          ref: o,
          style: { pointerEvents: `auto`, ...r.style },
        }),
      });
    }, `DialogOverlayImpl`),
  ),
  X = `DialogContent`,
  $i = K.forwardRef(
    J(function (e, t) {
      let n = qi(X, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = Y(X, e.__scopeDialog);
      return (0, q.jsx)(ee, {
        present: r || a.open,
        children: a.modal ? (0, q.jsx)(ea, { ...i, ref: t }) : (0, q.jsx)(ta, { ...i, ref: t }),
      });
    }, `DialogContent`),
  ),
  ea = K.forwardRef(
    J(function (e, t) {
      let n = Y(X, e.__scopeDialog),
        r = K.useRef(null),
        i = ae(t, n.contentRef, r);
      return (
        K.useEffect(() => {
          let e = r.current;
          if (e) return ne(e);
        }, []),
        (0, q.jsx)(na, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          onCloseAutoFocus: h(e.onCloseAutoFocus, (e) => {
            (e.preventDefault(), n.triggerRef.current?.focus());
          }),
          onPointerDownOutside: h(e.onPointerDownOutside, (e) => {
            let t = e.detail.originalEvent,
              n = t.button === 0 && t.ctrlKey === !0;
            (t.button === 2 || n) && e.preventDefault();
          }),
          onFocusOutside: h(e.onFocusOutside, (e) => e.preventDefault()),
        })
      );
    }, `DialogContentModal`),
  ),
  ta = K.forwardRef(
    J(function (e, t) {
      let n = Y(X, e.__scopeDialog),
        r = K.useRef(!1),
        i = K.useRef(!1);
      return (0, q.jsx)(na, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          (e.onCloseAutoFocus?.(t),
            t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
            (r.current = !1),
            (i.current = !1));
        },
        onInteractOutside: (t) => {
          (e.onInteractOutside?.(t),
            t.defaultPrevented ||
              ((r.current = !0),
              t.detail.originalEvent.type === `pointerdown` && (i.current = !0)));
          let a = t.target;
          (n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault());
        },
      });
    }, `DialogContentNonModal`),
  ),
  na = K.forwardRef(
    J(function (e, t) {
      let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...c } = e,
        l = Y(X, n);
      return (
        o(),
        (0, q.jsx)(q.Fragment, {
          children: (0, q.jsx)(s, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0, q.jsx)(f, {
              role: `dialog`,
              id: l.contentId,
              "aria-describedby": l.descriptionPresent ? l.descriptionId : void 0,
              "aria-labelledby": l.titlePresent ? l.titleId : void 0,
              "data-state": la(l.open),
              ...c,
              ref: t,
              deferPointerDownOutside: !0,
              onDismiss: () => l.onOpenChange(!1),
            }),
          }),
        })
      );
    }, `DialogContentImpl`),
  ),
  ra = `DialogTitle`,
  ia = K.forwardRef(
    J(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = Y(ra, n),
        { setTitleCount: a } = i;
      return (
        l(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, q.jsx)(c.h2, { id: i.titleId, ...r, ref: t })
      );
    }, `DialogTitle`),
  ),
  aa = `DialogDescription`,
  oa = K.forwardRef(
    J(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = Y(aa, n),
        { setDescriptionCount: a } = i;
      return (
        l(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, q.jsx)(c.p, { id: i.descriptionId, ...r, ref: t })
      );
    }, `DialogDescription`),
  ),
  sa = `DialogClose`,
  ca = K.forwardRef(
    J(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = Y(sa, n);
      return (0, q.jsx)(c.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: h(e.onClick, () => i.onOpenChange(!1)),
      });
    }, `DialogClose`),
  );
function la(e) {
  return e ? `open` : `closed`;
}
J(la, `getState`);
var ua = Hi,
  da = Ji,
  fa = K.forwardRef(({ className: e, ...t }, n) =>
    (0, q.jsx)(Xi, {
      ref: n,
      className: m(
        `fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e,
      ),
      ...t,
    }),
  );
fa.displayName = Xi.displayName;
var pa = K.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, q.jsxs)(da, {
    children: [
      (0, q.jsx)(fa, {}),
      (0, q.jsxs)($i, {
        ref: r,
        className: m(
          `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg`,
          e,
        ),
        ...n,
        children: [
          t,
          (0, q.jsxs)(ca, {
            className: `absolute right-4 top-4 z-50 grid size-10 place-items-center rounded-full bg-black/60 text-white border border-white/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-black hover:scale-110 hover:border-gold hover:text-gold cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:pointer-events-none`,
            children: [
              (0, q.jsx)(se, { className: `size-6 stroke-[2.5]` }),
              (0, q.jsx)(`span`, { className: `sr-only`, children: `Close` }),
            ],
          }),
        ],
      }),
    ],
  }),
);
pa.displayName = $i.displayName;
var ma = ({ className: e, ...t }) =>
  (0, q.jsx)(`div`, {
    className: m(`flex flex-col space-y-1.5 text-center sm:text-left`, e),
    ...t,
  });
ma.displayName = `DialogHeader`;
var ha = ({ className: e, ...t }) =>
  (0, q.jsx)(`div`, {
    className: m(`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`, e),
    ...t,
  });
ha.displayName = `DialogFooter`;
var ga = K.forwardRef(({ className: e, ...t }, n) =>
  (0, q.jsx)(ia, {
    ref: n,
    className: m(`text-lg font-semibold leading-none tracking-tight`, e),
    ...t,
  }),
);
ga.displayName = ia.displayName;
var _a = K.forwardRef(({ className: e, ...t }, n) =>
  (0, q.jsx)(oa, { ref: n, className: m(`text-sm text-muted-foreground`, e), ...t }),
);
_a.displayName = oa.displayName;
var va = G({ method: `POST` }).handler(
    W(`25cd601fdb16e7781722c13c9a52f3f399a5ee982977e49bd7f9c03be1380bc2`),
  ),
  ya = G({ method: `POST` }).handler(
    W(`9d359cea8999f5f1547a80d5811a74164cf232ac0befc4e9ac2dda353fdb4d17`),
  ),
  ba = G({ method: `POST` }).handler(
    W(`e63307d11e39b31d5e923c3dff123e83b7c8a41d5d5578acf73d2e5660812399`),
  ),
  xa = G({ method: `POST` }).handler(
    W(`1c8571d11ef815895fcc86fd357d12c0c28f2831540b627db4f701e0f8ed033e`),
  ),
  Sa = G({ method: `POST` }).handler(
    W(`29c1517d9458b0123dac993772de06bbe266e58194c5237700be2a8e7709a28d`),
  ),
  Ca = G({ method: `POST` }).handler(
    W(`a9f0fb56447d1fff8822013e974f946d82605c26b8409287d440e51c74da37ea`),
  ),
  wa = G({ method: `POST` }).handler(
    W(`f3304e289a018751170c3241b905634a8200163297c8d80d5aecbf8fb0c34f80`),
  ),
  Ta = G({ method: `GET` }).handler(
    W(`066ff2d20809eace1a7df5454e466475299769619bb4c50e122c7b4795c17549`),
  ),
  Ea = G({ method: `POST` }).handler(
    W(`f736c0a0cc906d0ab6c97941d2459e54c6c95bea803d3c645dbaef68e817b38f`),
  ),
  Da = G({ method: `POST` }).handler(
    W(`483e53b28e55f0d2a198f29fa2afdd46eebd419cffbf5245bf35f15acb5de881`),
  ),
  Oa = G({ method: `POST` }).handler(
    W(`e23d26f7912843cc3803f048cd4e5edbd520779d405437c265d6828917717fa2`),
  ),
  ka = G({ method: `POST` }).handler(
    W(`daf5adaff011fc8d310fa55f8257f8df96e5447e2255f827f045683ac0e279d7`),
  ),
  Aa = G({ method: `POST` }).handler(
    W(`2d7172bc24f5eb36e24c17a144e53327e20e2072e491b3f66434b5be8176a300`),
  ),
  ja = G({ method: `POST` }).handler(
    W(`c51de335367ac26553e5b9101a0b3ba95b47b7aa9a9ee985e448f0828e4c4176`),
  ),
  Ma = G({ method: `POST` }).handler(
    W(`dc1cc92c7665ad45fc84d3b1bf4bc2124e946d89e1fd66febc83dbaf98356ca3`),
  ),
  Na = G({ method: `POST` }).handler(
    W(`8a7022dbe1e34a63b1ef0b1db72a0054b4d0e8680744775253d3cab22d2876b1`),
  ),
  Pa = G({ method: `POST` }).handler(
    W(`70c47140bbdb8e4e3225c6c19ea1f83c9ba8e571c1a8912a940fc651f77a2e88`),
  ),
  Fa = G({ method: `POST` }).handler(
    W(`0f2a7074a88cbedea55ca409de9764e7e85d5ced2760c7bb2f76d192a8d53ffd`),
  ),
  Ia = G({ method: `POST` }).handler(
    W(`e9274f2bf7eeec05351ab696d62e9071cad1c3c828cf4709bccfd1116f2a2149`),
  ),
  La = G({ method: `POST` }).handler(
    W(`9bafb474685506142ab6a68e5347486912e3e41911c45e1eb425dcf5c2650c2d`),
  ),
  Ra = G({ method: `POST` }).handler(
    W(`13845e65ebac5b8709ea3f6abba067859f3534df5a15741e30c808575e1d3ff4`),
  ),
  za = G({ method: `POST` }).handler(
    W(`1ac8aa0dd46d83da103fa86acea43e27ac7074b4f9ce08eec6ee6ee88611719b`),
  ),
  Ba = G({ method: `POST` }).handler(
    W(`b00d1bbbd203a7e21aea7dd8988b261cbdf0dbc02176742027b38610d3c94fae`),
  );
G({ method: `POST` }).handler(
  W(`622151c6d7078b8fa025c877bdbcbd03c0b6ebc88b31b33b742ea03373b39343`),
);
var Va = G({ method: `POST` }).handler(
  W(`e760faafa665349c13470887b5e37cbb7004d8fdd6d68c79ac98b9ece3f3d9d3`),
);
(G({ method: `POST` }).handler(
  W(`395ba6a1fdd8bba1f1659621df557076fae2365f78529ba51141c973831e6449`),
),
  G({ method: `POST` }).handler(
    W(`8d944807815d91a456482cb8f56496758d829a718d870a86635c5b7db8fdc97c`),
  ),
  G({ method: `POST` }).handler(
    W(`1e1bc6970b0abe13a4807eb80a553f597e24de42ae4ae517ddea5ca426ccd075`),
  ),
  G({ method: `POST` }).handler(
    W(`750562c31640665a2c5941c01ce34b22e4d693b016dc30ced3ebce1a1a63be7d`),
  ),
  G({ method: `POST` }).handler(
    W(`360eb360e69eed3a2c9bbb5859829cc757d9ff9741a43bd6482a5d4dd44ba14c`),
  ),
  G({ method: `POST` }).handler(
    W(`1fa08bdfb5e76bcc2fb118273da19fb84fb50375ccf82f708b1f6566e3467156`),
  ));
var Ha = G({ method: `POST` }).handler(
    W(`92d386995ce1354db653f6f793f4aa1b053bc0f67ce0c5830c2b378492ce7a42`),
  ),
  Ua = G({ method: `POST` }).handler(
    W(`b70e8fc52b84ba27a79456c03d5c7b1958a63ea4d777d89a1ea97e2ef645b2d5`),
  ),
  Z = pe[0];
if (!Z) throw Error(`villages data is empty — check jadesta.ts`);
var Q = {
    villageInfo: {
      nama: Z.nama,
      tagline: Z.tagline,
      whatsapp: Z.whatsapp,
      email: Z.email ?? ``,
      alamat: Z.alamat ?? ``,
      luasDesa: Z.luasDesa ?? ``,
      luasKawasanWisata: Z.luasKawasanWisata ?? ``,
      jamOperasional: Z.jamOperasional ?? ``,
      waktuTerbaik: Z.waktuTerbaik ?? ``,
      pokdarwis: Z.pokdarwis,
      instagram: Z.instagram ?? ``,
      facebook: Z.facebook ?? ``,
      tiktok: Z.tiktok ?? ``,
      pemdesWebsite: Z.pemdesWebsite ?? ``,
    },
    kegiatanList: Z.kegiatanList ?? [],
    landmarkList: Z.landmarkList ?? [],
    umkmList: Z.umkmList ?? [],
    reviews: Z.reviews ?? [],
    fullDay: de,
    twoDay: ue,
    cbtExperiences: ce,
    galeriCategories: fe,
    galeriItems: le,
    visitCount: 1,
    uniqueVisitors: 1,
  },
  Wa = new Set();
function Ga() {
  Wa.forEach((e) => e());
}
var $ = {
  getSnapshot() {
    return Q;
  },
  subscribe(e) {
    return (
      Wa.add(e),
      () => {
        Wa.delete(e);
      }
    );
  },
  setSiteData(e) {
    ((Q = { ...Q, ...e, villageInfo: { ...Q.villageInfo, ...(e.villageInfo || {}) } }), Ga());
  },
  updateData(e) {
    ((Q = e(Q)), Ga());
  },
  resetVisitCount() {
    ((Q = { ...Q, visitCount: 0 }), Ga());
  },
  recordVisit(e) {
    typeof window > `u` ||
      Ea({ data: { path: e || window.location.pathname || `/` } })
        .then((e) => {
          e?.success &&
            e.totalViews &&
            ((Q = { ...Q, visitCount: e.totalViews, uniqueVisitors: e.uniqueVisitors }), Ga());
        })
        .catch(() => {});
  },
};
function Ka() {
  let [e, t] = (0, K.useState)($.getSnapshot());
  return (
    (0, K.useEffect)(
      () => (
        $.recordVisit(),
        Ta()
          .then((e) => {
            e && ($.setSiteData(e), t($.getSnapshot()));
          })
          .catch((e) => {
            console.error(`[CMS] Gagal memuat data dari server, menggunakan data fallback:`, e);
          }),
        $.subscribe(() => {
          t($.getSnapshot());
        })
      ),
      [],
    ),
    e
  );
}
export {
  _a as A,
  ia as B,
  Aa as C,
  Ca as D,
  Ha as E,
  ca as F,
  we as G,
  W as H,
  $i as I,
  he as J,
  Ce as K,
  oa as L,
  ma as M,
  ga as N,
  ua as O,
  Hi as P,
  Xi as R,
  Ia as S,
  ka as T,
  Br as U,
  Wi as V,
  Ee as W,
  wa as _,
  ba as a,
  Pa as b,
  Ma as c,
  Ua as d,
  Va as f,
  Ta as g,
  Da as h,
  Sa as i,
  ha as j,
  pa as k,
  za as l,
  Na as m,
  Ka as n,
  va as o,
  La as p,
  Se as q,
  ya as r,
  xa as s,
  $ as t,
  Fa as u,
  ja as v,
  Oa as w,
  Ba as x,
  Ra as y,
  Ji as z,
};
