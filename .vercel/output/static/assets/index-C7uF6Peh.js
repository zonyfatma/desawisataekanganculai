const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/routes-OLBTI2i8.js",
      "assets/jsx-runtime-D1ym7qjA.js",
      "assets/cms-store-CRB3p42d.js",
      "assets/utils-Ctb90B5i.js",
      "assets/jadesta-DqHZHQ8d.js",
      "assets/car-Dq01rhxA.js",
      "assets/chevron-down-DwehrFbR.js",
      "assets/star-4pykxryJ.js",
      "assets/navigation-B8_I2oKE.js",
      "assets/dist-Cn-7foiA.js",
      "assets/skeleton-CP-efSXI.js",
      "assets/admin-CFABHb3T.js",
      "assets/link-C7I64epB.js",
      "assets/search-DVU4GdGK.js",
      "assets/galeri-Jw2VUvs5.js",
      "assets/funnel-DOTgxi_J.js",
      "assets/desa.index-di3giQWj.js",
      "assets/chevron-up-Bk1kuIOl.js",
      "assets/desa._slug-eUSDy6L-.js",
      "assets/share-2-q7_uIP0E.js",
      "assets/desa._slug-2CGZweuc.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, l as n, n as r, r as i, t as a } from "./jsx-runtime-D1ym7qjA.js";
import {
  A as o,
  B as s,
  F as c,
  G as l,
  H as u,
  I as d,
  J as f,
  K as p,
  L as m,
  N as h,
  O as g,
  P as _,
  R as v,
  T as y,
  U as b,
  V as x,
  W as S,
  k as C,
  n as ee,
  q as te,
  t as ne,
  z as re,
} from "./cms-store-CRB3p42d.js";
import {
  A as ie,
  C as ae,
  D as oe,
  E as se,
  F as ce,
  I as le,
  L as ue,
  M as w,
  N as T,
  O as de,
  P as fe,
  R as pe,
  S as me,
  T as he,
  _ as E,
  a as ge,
  b as _e,
  c as ve,
  d as ye,
  f as be,
  g as xe,
  h as Se,
  i as Ce,
  j as we,
  k as Te,
  l as Ee,
  m as De,
  n as D,
  o as Oe,
  p as ke,
  r as Ae,
  s as je,
  t as Me,
  u as Ne,
  v as Pe,
  w as Fe,
  x as Ie,
  y as Le,
  z as Re,
} from "./link-C7I64epB.js";
import { C as ze, b as Be, n as Ve, t as He, x as Ue } from "./utils-Ctb90B5i.js";
import {
  D as O,
  E as We,
  c as Ge,
  f as Ke,
  h as qe,
  i as Je,
  m as Ye,
  u as Xe,
} from "./jadesta-DqHZHQ8d.js";
var Ze = e((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e) (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), S || ((S = !0), ie()));
        else {
          var t = n(l);
          t !== null && se(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      ee = 5,
      te = -1;
    function ne() {
      return g ? !0 : !(e.unstable_now() - te < ee);
    }
    function re() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        te = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ne());) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && se(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
          }
        } finally {
          i ? ie() : (S = !1);
        }
      }
    }
    var ie;
    if (typeof y == `function`)
      ie = function () {
        y(re);
      };
    else if (typeof MessageChannel < `u`) {
      var ae = new MessageChannel(),
        oe = ae.port2;
      ((ae.port1.onmessage = re),
        (ie = function () {
          oe.postMessage(null);
        }));
    } else
      ie = function () {
        _(re, 0);
      };
    function se(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (ee = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (v(C), (C = -1)) : (h = !0), se(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), S || ((S = !0), ie()))),
          r
        );
      }),
      (e.unstable_shouldYield = ne),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  Qe = e((e, t) => {
    t.exports = Ze();
  }),
  $e = e((e) => {
    var n = Qe(),
      r = t(),
      a = i();
    function o(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function s(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function c(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function l(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function u(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function d(e) {
      if (c(e) !== e) throw Error(o(188));
    }
    function f(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = c(e)), t === null)) throw Error(o(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null) break;
        var a = i.alternate;
        if (a === null) {
          if (((r = i.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === a.child) {
          for (a = i.child; a;) {
            if (a === n) return (d(i), e);
            if (a === r) return (d(i), t);
            a = a.sibling;
          }
          throw Error(o(188));
        }
        if (n.return !== r.return) ((n = i), (r = a));
        else {
          for (var s = !1, l = i.child; l;) {
            if (l === n) {
              ((s = !0), (n = i), (r = a));
              break;
            }
            if (l === r) {
              ((s = !0), (r = i), (n = a));
              break;
            }
            l = l.sibling;
          }
          if (!s) {
            for (l = a.child; l;) {
              if (l === n) {
                ((s = !0), (n = a), (r = i));
                break;
              }
              if (l === r) {
                ((s = !0), (r = a), (n = i));
                break;
              }
              l = l.sibling;
            }
            if (!s) throw Error(o(189));
          }
        }
        if (n.alternate !== r) throw Error(o(190));
      }
      if (n.tag !== 3) throw Error(o(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var m = Object.assign,
      h = Symbol.for(`react.element`),
      g = Symbol.for(`react.transitional.element`),
      _ = Symbol.for(`react.portal`),
      v = Symbol.for(`react.fragment`),
      y = Symbol.for(`react.strict_mode`),
      b = Symbol.for(`react.profiler`),
      x = Symbol.for(`react.consumer`),
      S = Symbol.for(`react.context`),
      C = Symbol.for(`react.forward_ref`),
      ee = Symbol.for(`react.suspense`),
      te = Symbol.for(`react.suspense_list`),
      ne = Symbol.for(`react.memo`),
      re = Symbol.for(`react.lazy`),
      ie = Symbol.for(`react.activity`),
      ae = Symbol.for(`react.memo_cache_sentinel`),
      oe = Symbol.iterator;
    function se(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (oe && e[oe]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var ce = Symbol.for(`react.client.reference`);
    function le(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === ce ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case v:
          return `Fragment`;
        case b:
          return `Profiler`;
        case y:
          return `StrictMode`;
        case ee:
          return `Suspense`;
        case te:
          return `SuspenseList`;
        case ie:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case _:
            return `Portal`;
          case S:
            return e.displayName || `Context`;
          case x:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case C:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ne:
            return ((t = e.displayName || null), t === null ? le(e.type) || `Memo` : t);
          case re:
            ((t = e._payload), (e = e._init));
            try {
              return le(e(t));
            } catch {}
        }
      return null;
    }
    var ue = Array.isArray,
      w = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      T = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      de = { pending: !1, data: null, method: null, action: null },
      fe = [],
      pe = -1;
    function me(e) {
      return { current: e };
    }
    function he(e) {
      0 > pe || ((e.current = fe[pe]), (fe[pe] = null), pe--);
    }
    function E(e, t) {
      (pe++, (fe[pe] = e.current), (e.current = t));
    }
    var ge = me(null),
      _e = me(null),
      ve = me(null),
      ye = me(null);
    function be(e, t) {
      switch ((E(ve, t), E(_e, e), E(ge, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (he(ge), E(ge, e));
    }
    function xe() {
      (he(ge), he(_e), he(ve));
    }
    function Se(e) {
      e.memoizedState !== null && E(ye, e);
      var t = ge.current,
        n = Hd(t, e.type);
      t !== n && (E(_e, e), E(ge, n));
    }
    function Ce(e) {
      (_e.current === e && (he(ge), he(_e)), ye.current === e && (he(ye), (Qf._currentValue = de)));
    }
    var we, Te;
    function Ee(e) {
      if (we === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((we = (t && t[1]) || ``),
            (Te =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        we +
        e +
        Te
      );
    }
    var De = !1;
    function D(e, t) {
      if (!e || De) return ``;
      De = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) && typeof n.catch == `function` && n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`) return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);) i++;
          if (r === c.length || i === l.length)
            for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((De = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? Ee(n) : ``;
    }
    function Oe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Ee(e.type);
        case 16:
          return Ee(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? Ee(`Suspense Fallback`) : Ee(`Suspense`);
        case 19:
          return Ee(`SuspenseList`);
        case 0:
        case 15:
          return D(e.type, !1);
        case 11:
          return D(e.type.render, !1);
        case 1:
          return D(e.type, !0);
        case 31:
          return Ee(`Activity`);
        default:
          return ``;
      }
    }
    function ke(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Oe(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ae = Object.prototype.hasOwnProperty,
      je = n.unstable_scheduleCallback,
      Me = n.unstable_cancelCallback,
      Ne = n.unstable_shouldYield,
      Pe = n.unstable_requestPaint,
      Fe = n.unstable_now,
      Ie = n.unstable_getCurrentPriorityLevel,
      Le = n.unstable_ImmediatePriority,
      Re = n.unstable_UserBlockingPriority,
      ze = n.unstable_NormalPriority,
      Be = n.unstable_LowPriority,
      Ve = n.unstable_IdlePriority,
      He = n.log,
      Ue = n.unstable_setDisableYieldValue,
      O = null,
      We = null;
    function Ge(e) {
      if ((typeof He == `function` && Ue(e), We && typeof We.setStrictMode == `function`))
        try {
          We.setStrictMode(O, e);
        } catch {}
    }
    var Ke = Math.clz32 ? Math.clz32 : Ye,
      qe = Math.log,
      Je = Math.LN2;
    function Ye(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((qe(e) / Je) | 0)) | 0);
    }
    var Xe = 256,
      Ze = 262144,
      $e = 4194304;
    function et(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function tt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = et(n)))
                : (i = et(o))
              : (i = et(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = et(n))) : (i = et(o)))
              : (i = et(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function nt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function rt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function it() {
      var e = $e;
      return (($e <<= 1), !($e & 62914560) && ($e = 4194304), e);
    }
    function at(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function ot(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function st(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - Ke(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && ct(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function ct(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ke(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function lt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Ke(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function ut(e, t) {
      var n = t & -t;
      return ((n = n & 42 ? 1 : dt(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0);
    }
    function dt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ft(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
    }
    function pt() {
      var e = T.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function mt(e, t) {
      var n = T.p;
      try {
        return ((T.p = e), t());
      } finally {
        T.p = n;
      }
    }
    var ht = Math.random().toString(36).slice(2),
      gt = `__reactFiber$` + ht,
      _t = `__reactProps$` + ht,
      vt = `__reactContainer$` + ht,
      yt = `__reactEvents$` + ht,
      bt = `__reactListeners$` + ht,
      xt = `__reactHandles$` + ht,
      St = `__reactResources$` + ht,
      Ct = `__reactMarker$` + ht;
    function wt(e) {
      (delete e[gt], delete e[_t], delete e[yt], delete e[bt], delete e[xt]);
    }
    function Tt(e) {
      var t = e[gt];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[vt] || n[gt])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = df(e); e !== null;) {
              if ((n = e[gt])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Et(e) {
      if ((e = e[gt] || e[vt])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function Dt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(o(33));
    }
    function Ot(e) {
      var t = e[St];
      return ((t ||= e[St] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function kt(e) {
      e[Ct] = !0;
    }
    var At = new Set(),
      jt = {};
    function Mt(e, t) {
      (Nt(e, t), Nt(e + `Capture`, t));
    }
    function Nt(e, t) {
      for (jt[e] = t, e = 0; e < t.length; e++) At.add(t[e]);
    }
    var Pt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Ft = {},
      It = {};
    function Lt(e) {
      return Ae.call(It, e)
        ? !0
        : Ae.call(Ft, e)
          ? !1
          : Pt.test(e)
            ? (It[e] = !0)
            : ((Ft[e] = !0), !1);
    }
    function Rt(e, t, n) {
      if (Lt(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function zt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Bt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Vt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Ht(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function Ut(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Wt(e) {
      if (!e._valueTracker) {
        var t = Ht(e) ? `checked` : `value`;
        e._valueTracker = Ut(e, t, `` + e[t]);
      }
    }
    function Gt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Ht(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Kt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var qt = /[\n"\\]/g;
    function Jt(e) {
      return e.replace(qt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Yt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + Vt(t))
            : e.value !== `` + Vt(t) && (e.value = `` + Vt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Zt(e, o, Vt(n))
          : Zt(e, o, Vt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + Vt(s))
          : e.removeAttribute(`name`));
    }
    function Xt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Wt(e);
          return;
        }
        ((n = n == null ? `` : `` + Vt(n)),
          (t = t == null ? n : `` + Vt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Wt(e));
    }
    function Zt(e, t, n) {
      (t === `number` && Kt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Qt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Vt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function $t(e, t, n) {
      if (t != null && ((t = `` + Vt(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Vt(n);
    }
    function en(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(o(92));
          if (ue(r)) {
            if (1 < r.length) throw Error(o(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Vt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Wt(e));
    }
    function tn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var nn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function rn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || nn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function an(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(o(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var i in t) ((r = t[i]), t.hasOwnProperty(i) && n[i] !== r && rn(e, i, r));
      } else for (var a in t) t.hasOwnProperty(a) && rn(e, a, t[a]);
    }
    function on(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var sn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      cn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ln(e) {
      return cn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function un() {}
    var dn = null;
    function fn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var pn = null,
      mn = null;
    function hn(e) {
      var t = Et(e);
      if (t && (e = t.stateNode)) {
        var n = e[_t] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Yt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(`input[name="` + Jt(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = r[_t] || null;
                  if (!i) throw Error(o(90));
                  Yt(
                    r,
                    i.value,
                    i.defaultValue,
                    i.defaultValue,
                    i.checked,
                    i.defaultChecked,
                    i.type,
                    i.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Gt(r));
            }
            break a;
          case `textarea`:
            $t(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Qt(e, !!n.multiple, t, !1));
        }
      }
    }
    var gn = !1;
    function _n(e, t, n) {
      if (gn) return e(t, n);
      gn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((gn = !1),
          (pn !== null || mn !== null) &&
            (bu(), pn && ((t = pn), (e = mn), (mn = pn = null), hn(t), e)))
        )
          for (t = 0; t < e.length; t++) hn(e[t]);
      }
    }
    function vn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[_t] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(o(231, t, typeof n));
      return n;
    }
    var yn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      bn = !1;
    if (yn)
      try {
        var xn = {};
        (Object.defineProperty(xn, "passive", {
          get: function () {
            bn = !0;
          },
        }),
          window.addEventListener(`test`, xn, xn),
          window.removeEventListener(`test`, xn, xn));
      } catch {
        bn = !1;
      }
    var Sn = null,
      Cn = null,
      wn = null;
    function Tn() {
      if (wn) return wn;
      var e,
        t = Cn,
        n = t.length,
        r,
        i = `value` in Sn ? Sn.value : Sn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (wn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function En(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Dn() {
      return !0;
    }
    function On() {
      return !1;
    }
    function kn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented
          )
            ? Dn
            : On),
          (this.isPropagationStopped = On),
          this
        );
      }
      return (
        m(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Dn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Dn));
          },
          persist: function () {},
          isPersistent: Dn,
        }),
        t
      );
    }
    var An = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      k = kn(An),
      A = m({}, An, { view: 0, detail: 0 }),
      jn = kn(A),
      Mn,
      Nn,
      Pn,
      Fn = m({}, A, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Kn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Pn &&
                (Pn && e.type === `mousemove`
                  ? ((Mn = e.screenX - Pn.screenX), (Nn = e.screenY - Pn.screenY))
                  : (Nn = Mn = 0),
                (Pn = e)),
              Mn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Nn;
        },
      }),
      In = kn(Fn),
      Ln = kn(m({}, Fn, { dataTransfer: 0 })),
      Rn = kn(m({}, A, { relatedTarget: 0 })),
      zn = kn(m({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Bn = kn(
        m({}, An, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      Vn = kn(m({}, An, { data: 0 })),
      Hn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Un = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Wn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function Gn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Wn[e]) ? !!t[e] : !1;
    }
    function Kn() {
      return Gn;
    }
    var qn = kn(
        m({}, A, {
          key: function (e) {
            if (e.key) {
              var t = Hn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = En(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Un[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Kn,
          charCode: function (e) {
            return e.type === `keypress` ? En(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? En(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Jn = kn(
        m({}, Fn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Yn = kn(
        m({}, A, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Kn,
        }),
      ),
      Xn = kn(m({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Zn = kn(
        m({}, Fn, {
          deltaX: function (e) {
            return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Qn = kn(m({}, An, { newState: 0, oldState: 0 })),
      $n = [9, 13, 27, 32],
      er = yn && `CompositionEvent` in window,
      tr = null;
    yn && `documentMode` in document && (tr = document.documentMode);
    var nr = yn && `TextEvent` in window && !tr,
      rr = yn && (!er || (tr && 8 < tr && 11 >= tr)),
      ir = ` `,
      ar = !1;
    function or(e, t) {
      switch (e) {
        case `keyup`:
          return $n.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function sr(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var cr = !1;
    function lr(e, t) {
      switch (e) {
        case `compositionend`:
          return sr(t);
        case `keypress`:
          return t.which === 32 ? ((ar = !0), ir) : null;
        case `textInput`:
          return ((e = t.data), e === ir && ar ? null : e);
        default:
          return null;
      }
    }
    function ur(e, t) {
      if (cr)
        return e === `compositionend` || (!er && or(e, t))
          ? ((e = Tn()), (wn = Cn = Sn = null), (cr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return rr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var dr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function fr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!dr[e.type] : t === `textarea`;
    }
    function pr(e, t, n, r) {
      (pn ? (mn ? mn.push(r) : (mn = [r])) : (pn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new k(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var mr = null,
      hr = null;
    function gr(e) {
      yd(e, 0);
    }
    function _r(e) {
      if (Gt(Dt(e))) return e;
    }
    function vr(e, t) {
      if (e === `change`) return t;
    }
    var yr = !1;
    if (yn) {
      var br;
      if (yn) {
        var xr = `oninput` in document;
        if (!xr) {
          var Sr = document.createElement(`div`);
          (Sr.setAttribute(`oninput`, `return;`), (xr = typeof Sr.oninput == `function`));
        }
        br = xr;
      } else br = !1;
      yr = br && (!document.documentMode || 9 < document.documentMode);
    }
    function Cr() {
      mr && (mr.detachEvent(`onpropertychange`, wr), (hr = mr = null));
    }
    function wr(e) {
      if (e.propertyName === `value` && _r(hr)) {
        var t = [];
        (pr(t, hr, e, fn(e)), _n(gr, t));
      }
    }
    function Tr(e, t, n) {
      e === `focusin`
        ? (Cr(), (mr = t), (hr = n), mr.attachEvent(`onpropertychange`, wr))
        : e === `focusout` && Cr();
    }
    function Er(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return _r(hr);
    }
    function Dr(e, t) {
      if (e === `click`) return _r(t);
    }
    function Or(e, t) {
      if (e === `input` || e === `change`) return _r(t);
    }
    function kr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Ar = typeof Object.is == `function` ? Object.is : kr;
    function jr(e, t) {
      if (Ar(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ae.call(t, i) || !Ar(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Mr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Nr(e, t) {
      var n = Mr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Mr(n);
      }
    }
    function Pr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Pr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Fr(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Kt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Kt(e.document);
      }
      return t;
    }
    function Ir(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Lr = yn && `documentMode` in document && 11 >= document.documentMode,
      Rr = null,
      zr = null,
      Br = null,
      Vr = !1;
    function Hr(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Vr ||
        Rr == null ||
        Rr !== Kt(r) ||
        ((r = Rr),
        `selectionStart` in r && Ir(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Br && jr(Br, r)) ||
          ((Br = r),
          (r = Ed(zr, `onSelect`)),
          0 < r.length &&
            ((t = new k(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Rr))));
    }
    function Ur(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Wr = {
        animationend: Ur(`Animation`, `AnimationEnd`),
        animationiteration: Ur(`Animation`, `AnimationIteration`),
        animationstart: Ur(`Animation`, `AnimationStart`),
        transitionrun: Ur(`Transition`, `TransitionRun`),
        transitionstart: Ur(`Transition`, `TransitionStart`),
        transitioncancel: Ur(`Transition`, `TransitionCancel`),
        transitionend: Ur(`Transition`, `TransitionEnd`),
      },
      Gr = {},
      Kr = {};
    yn &&
      ((Kr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Wr.animationend.animation,
        delete Wr.animationiteration.animation,
        delete Wr.animationstart.animation),
      `TransitionEvent` in window || delete Wr.transitionend.transition);
    function qr(e) {
      if (Gr[e]) return Gr[e];
      if (!Wr[e]) return e;
      var t = Wr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Kr) return (Gr[e] = t[n]);
      return e;
    }
    var Jr = qr(`animationend`),
      Yr = qr(`animationiteration`),
      Xr = qr(`animationstart`),
      Zr = qr(`transitionrun`),
      Qr = qr(`transitionstart`),
      $r = qr(`transitioncancel`),
      ei = qr(`transitionend`),
      ti = new Map(),
      ni =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    ni.push(`scrollEnd`);
    function ri(e, t) {
      (ti.set(e, t), Mt(t, [e]));
    }
    var ii =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ai = [],
      oi = 0,
      si = 0;
    function ci() {
      for (var e = oi, t = (si = oi = 0); t < e;) {
        var n = ai[t];
        ai[t++] = null;
        var r = ai[t];
        ai[t++] = null;
        var i = ai[t];
        ai[t++] = null;
        var a = ai[t];
        if (((ai[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
        }
        a !== 0 && fi(n, i, a);
      }
    }
    function li(e, t, n, r) {
      ((ai[oi++] = e),
        (ai[oi++] = t),
        (ai[oi++] = n),
        (ai[oi++] = r),
        (si |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function ui(e, t, n, r) {
      return (li(e, t, n, r), pi(e));
    }
    function di(e, t) {
      return (li(e, null, null, t), pi(e));
    }
    function fi(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 && ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ke(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function pi(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(o(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var mi = {};
    function hi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function gi(e, t, n, r) {
      return new hi(e, t, n, r);
    }
    function _i(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function vi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = gi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function yi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function bi(e, t, n, r, i, a) {
      var s = 0;
      if (((r = e), typeof e == `function`)) _i(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, ge.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (e) {
          case ie:
            return ((e = gi(31, n, t, i)), (e.elementType = ie), (e.lanes = a), e);
          case v:
            return xi(n.children, i, a, t);
          case y:
            ((s = 8), (i |= 24));
            break;
          case b:
            return ((e = gi(12, n, t, i | 2)), (e.elementType = b), (e.lanes = a), e);
          case ee:
            return ((e = gi(13, n, t, i)), (e.elementType = ee), (e.lanes = a), e);
          case te:
            return ((e = gi(19, n, t, i)), (e.elementType = te), (e.lanes = a), e);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case S:
                  s = 10;
                  break a;
                case x:
                  s = 9;
                  break a;
                case C:
                  s = 11;
                  break a;
                case ne:
                  s = 14;
                  break a;
                case re:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29), (n = Error(o(130, e === null ? `null` : typeof e, ``))), (r = null));
        }
      return ((t = gi(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t);
    }
    function xi(e, t, n, r) {
      return ((e = gi(7, e, r, t)), (e.lanes = n), e);
    }
    function Si(e, t, n) {
      return ((e = gi(6, e, null, t)), (e.lanes = n), e);
    }
    function Ci(e) {
      var t = gi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function wi(e, t, n) {
      return (
        (t = gi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ti = new WeakMap();
    function Ei(e, t) {
      if (typeof e == `object` && e) {
        var n = Ti.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: ke(t) }), Ti.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: ke(t) };
    }
    var Di = [],
      Oi = 0,
      ki = null,
      Ai = 0,
      ji = [],
      Mi = 0,
      Ni = null,
      Pi = 1,
      Fi = ``;
    function Ii(e, t) {
      ((Di[Oi++] = Ai), (Di[Oi++] = ki), (ki = e), (Ai = t));
    }
    function Li(e, t, n) {
      ((ji[Mi++] = Pi), (ji[Mi++] = Fi), (ji[Mi++] = Ni), (Ni = e));
      var r = Pi;
      e = Fi;
      var i = 32 - Ke(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ke(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Pi = (1 << (32 - Ke(t) + i)) | (n << i) | r),
          (Fi = a + e));
      } else ((Pi = (1 << a) | (n << i) | r), (Fi = e));
    }
    function Ri(e) {
      e.return !== null && (Ii(e, 1), Li(e, 1, 0));
    }
    function zi(e) {
      for (; e === ki;) ((ki = Di[--Oi]), (Di[Oi] = null), (Ai = Di[--Oi]), (Di[Oi] = null));
      for (; e === Ni;)
        ((Ni = ji[--Mi]),
          (ji[Mi] = null),
          (Fi = ji[--Mi]),
          (ji[Mi] = null),
          (Pi = ji[--Mi]),
          (ji[Mi] = null));
    }
    function Bi(e, t) {
      ((ji[Mi++] = Pi), (ji[Mi++] = Fi), (ji[Mi++] = Ni), (Pi = t.id), (Fi = t.overflow), (Ni = e));
    }
    var Vi = null,
      j = null,
      M = !1,
      Hi = null,
      Ui = !1,
      Wi = Error(o(519));
    function Gi(e) {
      throw (
        Zi(
          Ei(
            Error(
              o(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Wi
      );
    }
    function Ki(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[gt] = e), (t[_t] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Xt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), en(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = un),
            (t = !0))
          : (t = !1),
        t || Gi(e, !0));
    }
    function qi(e) {
      for (Vi = e.return; Vi;)
        switch (Vi.tag) {
          case 5:
          case 31:
          case 13:
            Ui = !1;
            return;
          case 27:
          case 3:
            Ui = !0;
            return;
          default:
            Vi = Vi.return;
        }
    }
    function Ji(e) {
      if (e !== Vi) return !1;
      if (!M) return (qi(e), (M = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = n === `form` || n === `button` || Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && j && Gi(e),
        qi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(o(317));
        j = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(o(317));
        j = uf(e);
      } else
        t === 27
          ? ((t = j), Zd(e.type) ? ((e = lf), (lf = null), (j = e)) : (j = t))
          : (j = Vi ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Yi() {
      ((j = Vi = null), (M = !1));
    }
    function Xi() {
      var e = Hi;
      return (e !== null && (Zl === null ? (Zl = e) : Zl.push.apply(Zl, e), (Hi = null)), e);
    }
    function Zi(e) {
      Hi === null ? (Hi = [e]) : Hi.push(e);
    }
    var Qi = me(null),
      $i = null,
      ea = null;
    function ta(e, t, n) {
      (E(Qi, t._currentValue), (t._currentValue = n));
    }
    function na(e) {
      ((e._currentValue = Qi.current), he(Qi));
    }
    function ra(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function ia(e, t, n, r) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null;) {
        var a = i.dependencies;
        if (a !== null) {
          var s = i.child;
          a = a.firstContext;
          a: for (; a !== null;) {
            var c = a;
            a = i;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((a.lanes |= n),
                  (c = a.alternate),
                  c !== null && (c.lanes |= n),
                  ra(a.return, n, e),
                  r || (s = null));
                break a;
              }
            a = c.next;
          }
        } else if (i.tag === 18) {
          if (((s = i.return), s === null)) throw Error(o(341));
          ((s.lanes |= n),
            (a = s.alternate),
            a !== null && (a.lanes |= n),
            ra(s, n, e),
            (s = null));
        } else s = i.child;
        if (s !== null) s.return = i;
        else
          for (s = i; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((i = s.sibling), i !== null)) {
              ((i.return = s.return), (s = i));
              break;
            }
            s = s.return;
          }
        i = s;
      }
    }
    function aa(e, t, n, r) {
      e = null;
      for (var i = t, a = !1; i !== null;) {
        if (!a) {
          if (i.flags & 524288) a = !0;
          else if (i.flags & 262144) break;
        }
        if (i.tag === 10) {
          var s = i.alternate;
          if (s === null) throw Error(o(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = i.type;
            Ar(i.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (i === ye.current) {
          if (((s = i.alternate), s === null)) throw Error(o(387));
          s.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        i = i.return;
      }
      (e !== null && ia(t, e, n, r), (t.flags |= 262144));
    }
    function oa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Ar(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function sa(e) {
      (($i = e), (ea = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function ca(e) {
      return ua($i, e);
    }
    function la(e, t) {
      return ($i === null && sa(e), ua(e, t));
    }
    function ua(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), ea === null)) {
        if (e === null) throw Error(o(308));
        ((ea = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
      } else ea = ea.next = t;
      return n;
    }
    var da =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      fa = n.unstable_scheduleCallback,
      pa = n.unstable_NormalPriority,
      ma = {
        $$typeof: S,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function ha() {
      return { controller: new da(), data: new Map(), refCount: 0 };
    }
    function ga(e) {
      (e.refCount--,
        e.refCount === 0 &&
          fa(pa, function () {
            e.controller.abort();
          }));
    }
    var _a = null,
      va = 0,
      ya = 0,
      ba = null;
    function xa(e, t) {
      if (_a === null) {
        var n = (_a = []);
        ((va = 0),
          (ya = dd()),
          (ba = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (va++, t.then(Sa, Sa), t);
    }
    function Sa() {
      if (--va === 0 && _a !== null) {
        ba !== null && (ba.status = `fulfilled`);
        var e = _a;
        ((_a = null), (ya = 0), (ba = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ca(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var wa = w.S;
    w.S = function (e, t) {
      ((eu = Fe()),
        typeof t == `object` && t && typeof t.then == `function` && xa(e, t),
        wa !== null && wa(e, t));
    };
    var Ta = me(null);
    function Ea() {
      var e = Ta.current;
      return e === null ? q.pooledCache : e;
    }
    function Da(e, t) {
      t === null ? E(Ta, Ta.current) : E(Ta, t.pool);
    }
    function Oa() {
      var e = Ea();
      return e === null ? null : { parent: ma._currentValue, pool: e };
    }
    var ka = Error(o(460)),
      Aa = Error(o(474)),
      ja = Error(o(542)),
      Ma = { then: function () {} };
    function Na(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Pa(e, t, n) {
      switch (
        ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(un, un), (t = n)), t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Ra(e), e);
        default:
          if (typeof t.status == `string`) t.then(un, un);
          else {
            if (((e = q), e !== null && 100 < e.shellSuspendCounter)) throw Error(o(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Ra(e), e);
          }
          throw ((Ia = t), ka);
      }
    }
    function Fa(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((Ia = e), ka) : e;
      }
    }
    var Ia = null;
    function La() {
      if (Ia === null) throw Error(o(459));
      var e = Ia;
      return ((Ia = null), e);
    }
    function Ra(e) {
      if (e === ka || e === ja) throw Error(o(483));
    }
    var za = null,
      Ba = 0;
    function Va(e) {
      var t = Ba;
      return ((Ba += 1), za === null && (za = []), Pa(za, e, t));
    }
    function Ha(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Ua(e, t) {
      throw t.$$typeof === h
        ? Error(o(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            o(
              31,
              e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e,
            ),
          ));
    }
    function Wa(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling));
        return t;
      }
      function i(e, t) {
        return ((e = vi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function a(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Si(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var a = n.type;
        return a === v
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === a ||
                (typeof a == `object` && a && a.$$typeof === re && Fa(a) === t.type))
            ? ((t = i(t, n.props)), Ha(t, n), (t.return = e), t)
            : ((t = bi(n.type, n.key, n.props, null, e.mode, r)), Ha(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = wi(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, a) {
        return t === null || t.tag !== 7
          ? ((t = xi(n, e.mode, r, a)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = Si(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case g:
              return (
                (n = bi(t.type, t.key, t.props, null, e.mode, n)),
                Ha(n, t),
                (n.return = e),
                n
              );
            case _:
              return ((t = wi(t, e.mode, n)), (t.return = e), t);
            case re:
              return ((t = Fa(t)), f(e, t, n));
          }
          if (ue(t) || se(t)) return ((t = xi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Va(t), n);
          if (t.$$typeof === S) return f(e, la(e, t), n);
          Ua(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case g:
              return n.key === i ? l(e, t, n, r) : null;
            case _:
              return n.key === i ? u(e, t, n, r) : null;
            case re:
              return ((n = Fa(n)), p(e, t, n, r));
          }
          if (ue(n) || se(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Va(n), r);
          if (n.$$typeof === S) return p(e, t, la(e, n), r);
          Ua(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case g:
              return ((e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i));
            case _:
              return ((e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i));
            case re:
              return ((r = Fa(r)), m(e, t, n, r, i));
          }
          if (ue(r) || se(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, Va(r), i);
          if (r.$$typeof === S) return m(e, t, n, la(t, r), i);
          Ua(t, r);
        }
        return null;
      }
      function h(i, o, s, c) {
        for (
          var l = null, u = null, d = o, h = (o = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (o = a(_, o, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), M && Ii(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null && ((o = a(d, o, h)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (M && Ii(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e && g.alternate !== null && d.delete(g.key === null ? h : g.key),
              (o = a(g, o, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          M && Ii(i, h),
          l
        );
      }
      function y(i, s, c, l) {
        if (c == null) throw Error(o(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(i, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(i, h),
            (s = a(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(i, h), M && Ii(i, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(i, v.value, l)),
              v !== null && ((s = a(v, s, g)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (M && Ii(i, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, i, g, v.value, l)),
            v !== null &&
              (e && v.alternate !== null && h.delete(v.key === null ? g : v.key),
              (s = a(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(i, e);
            }),
          M && Ii(i, g),
          u
        );
      }
      function b(e, r, a, c) {
        if (
          (typeof a == `object` && a && a.type === v && a.key === null && (a = a.props.children),
          typeof a == `object` && a)
        ) {
          switch (a.$$typeof) {
            case g:
              a: {
                for (var l = a.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = a.type), l === v)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling), (c = i(r, a.props.children)), (c.return = e), (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` && l && l.$$typeof === re && Fa(l) === r.type)
                    ) {
                      (n(e, r.sibling), (c = i(r, a.props)), Ha(c, a), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                a.type === v
                  ? ((c = xi(a.props.children, e.mode, c, a.key)), (c.return = e), (e = c))
                  : ((c = bi(a.type, a.key, a.props, null, e.mode, c)),
                    Ha(c, a),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case _:
              a: {
                for (l = a.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === a.containerInfo &&
                      r.stateNode.implementation === a.implementation
                    ) {
                      (n(e, r.sibling), (c = i(r, a.children || [])), (c.return = e), (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  (t(e, r), (r = r.sibling));
                }
                ((c = wi(a, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case re:
              return ((a = Fa(a)), b(e, r, a, c));
          }
          if (ue(a)) return h(e, r, a, c);
          if (se(a)) {
            if (((l = se(a)), typeof l != `function`)) throw Error(o(150));
            return ((a = l.call(a)), y(e, r, a, c));
          }
          if (typeof a.then == `function`) return b(e, r, Va(a), c);
          if (a.$$typeof === S) return b(e, r, la(e, a), c);
          Ua(e, a);
        }
        return (typeof a == `string` && a !== ``) || typeof a == `number` || typeof a == `bigint`
          ? ((a = `` + a),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = i(r, a)), (c.return = e), (e = c))
              : (n(e, r), (c = Si(a, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Ba = 0;
          var i = b(e, t, n, r);
          return ((za = null), i);
        } catch (t) {
          if (t === ka || t === ja) throw t;
          var a = gi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Ga = Wa(!0),
      Ka = Wa(!1),
      qa = !1;
    function Ja(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ya(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Xa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Za(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = pi(e)),
          fi(e, null, n),
          t
        );
      }
      return (li(e, r, t, n), pi(e));
    }
    function Qa(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), lt(e, n));
      }
    }
    function $a(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var eo = !1;
    function to() {
      if (eo) {
        var e = ba;
        if (e !== null) throw e;
      }
    }
    function no(e, t, n, r) {
      eo = !1;
      var i = e.updateQueue;
      qa = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (Y & f) === f : (r & f) === f) {
            (f !== 0 && f === ya && (eo = !0),
              u !== null &&
                (u = u.next =
                  { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
            a: {
              var h = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, f);
                    break a;
                  }
                  d = h;
                  break a;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (
                    ((h = g.payload), (f = typeof h == `function` ? h.call(_, d, f) : h), f == null)
                  )
                    break a;
                  d = m({}, d, f);
                  break a;
                case 2:
                  qa = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = { lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Gl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function ro(e, t) {
      if (typeof e != `function`) throw Error(o(191, e));
      e.call(t);
    }
    function io(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) ro(n[e], t);
    }
    var ao = me(null),
      oo = me(0);
    function so(e, t) {
      ((e = Ul), E(oo, e), E(ao, t), (Ul = e | t.baseLanes));
    }
    function co() {
      (E(oo, Ul), E(ao, ao.current));
    }
    function lo() {
      ((Ul = oo.current), he(ao), he(oo));
    }
    var N = me(null),
      uo = null;
    function fo(e) {
      var t = e.alternate;
      (E(_o, _o.current & 1),
        E(N, e),
        uo === null && (t === null || ao.current !== null || t.memoizedState !== null) && (uo = e));
    }
    function po(e) {
      (E(_o, _o.current), E(N, e), uo === null && (uo = e));
    }
    function mo(e) {
      e.tag === 22 ? (E(_o, _o.current), E(N, e), uo === null && (uo = e)) : ho(e);
    }
    function ho() {
      (E(_o, _o.current), E(N, N.current));
    }
    function go(e) {
      (he(N), uo === e && (uo = null), he(_o));
    }
    var _o = me(0);
    function vo(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n))) return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var yo = 0,
      P = null,
      F = null,
      bo = null,
      xo = !1,
      So = !1,
      Co = !1,
      wo = 0,
      To = 0,
      Eo = null,
      Do = 0;
    function Oo() {
      throw Error(o(321));
    }
    function ko(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!Ar(e[n], t[n])) return !1;
      return !0;
    }
    function Ao(e, t, n, r, i, a) {
      return (
        (yo = a),
        (P = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (w.H = e === null || e.memoizedState === null ? zs : Bs),
        (Co = !1),
        (a = n(r, i)),
        (Co = !1),
        So && (a = Mo(t, n, r, i)),
        jo(e),
        a
      );
    }
    function jo(e) {
      w.H = Rs;
      var t = F !== null && F.next !== null;
      if (((yo = 0), (bo = F = P = null), (xo = !1), (To = 0), (Eo = null), t)) throw Error(o(300));
      e === null || rc || ((e = e.dependencies), e !== null && oa(e) && (rc = !0));
    }
    function Mo(e, t, n, r) {
      P = e;
      var i = 0;
      do {
        if ((So && (Eo = null), (To = 0), (So = !1), 25 <= i)) throw Error(o(301));
        if (((i += 1), (bo = F = null), e.updateQueue != null)) {
          var a = e.updateQueue;
          ((a.lastEffect = null),
            (a.events = null),
            (a.stores = null),
            a.memoCache != null && (a.memoCache.index = 0));
        }
        ((w.H = Vs), (a = t(n, r)));
      } while (So);
      return a;
    }
    function No() {
      var e = w.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Bo(t) : t),
        (e = e.useState()[0]),
        (F === null ? null : F.memoizedState) !== e && (P.flags |= 1024),
        t
      );
    }
    function Po() {
      var e = wo !== 0;
      return ((wo = 0), e);
    }
    function Fo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Io(e) {
      if (xo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        xo = !1;
      }
      ((yo = 0), (bo = F = P = null), (So = !1), (To = wo = 0), (Eo = null));
    }
    function Lo() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (bo === null ? (P.memoizedState = bo = e) : (bo = bo.next = e), bo);
    }
    function Ro() {
      if (F === null) {
        var e = P.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = F.next;
      var t = bo === null ? P.memoizedState : bo.next;
      if (t !== null) ((bo = t), (F = e));
      else {
        if (e === null) throw P.alternate === null ? Error(o(467)) : Error(o(310));
        ((F = e),
          (e = {
            memoizedState: F.memoizedState,
            baseState: F.baseState,
            baseQueue: F.baseQueue,
            queue: F.queue,
            next: null,
          }),
          bo === null ? (P.memoizedState = bo = e) : (bo = bo.next = e));
      }
      return bo;
    }
    function zo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Bo(e) {
      var t = To;
      return (
        (To += 1),
        Eo === null && (Eo = []),
        (e = Pa(Eo, e, t)),
        (t = P),
        (bo === null ? t.memoizedState : bo.next) === null &&
          ((t = t.alternate), (w.H = t === null || t.memoizedState === null ? zs : Bs)),
        e
      );
    }
    function Vo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Bo(e);
        if (e.$$typeof === S) return ca(e);
      }
      throw Error(o(438, String(e)));
    }
    function Ho(e) {
      var t = null,
        n = P.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = P.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = zo()), (P.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ae;
      return (t.index++, n);
    }
    function Uo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Wo(e) {
      return Go(Ro(), F, e);
    }
    function Go(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(o(311));
      r.lastRenderedReducer = n;
      var i = e.baseQueue,
        a = r.pending;
      if (a !== null) {
        if (i !== null) {
          var s = i.next;
          ((i.next = a.next), (a.next = s));
        }
        ((t.baseQueue = i = a), (r.pending = null));
      }
      if (((a = e.baseState), i === null)) e.memoizedState = a;
      else {
        t = i.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (yo & f) === f : (Y & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === ya && (d = !0));
            else if ((yo & p) === p) {
              ((u = u.next), p === ya && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = a)) : (l = l.next = f),
                (P.lanes |= p),
                (Gl |= p));
            ((f = u.action), Co && n(a, f), (a = u.hasEagerState ? u.eagerState : n(a, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = a)) : (l = l.next = p),
              (P.lanes |= f),
              (Gl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = a) : (l.next = c),
          !Ar(a, e.memoizedState) && ((rc = !0), d && ((n = ba), n !== null)))
        )
          throw n;
        ((e.memoizedState = a), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = a));
      }
      return (i === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Ko(e) {
      var t = Ro(),
        n = t.queue;
      if (n === null) throw Error(o(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        a = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do ((a = e(a, s.action)), (s = s.next));
        while (s !== i);
        (Ar(a, t.memoizedState) || (rc = !0),
          (t.memoizedState = a),
          t.baseQueue === null && (t.baseState = a),
          (n.lastRenderedState = a));
      }
      return [a, r];
    }
    function qo(e, t, n) {
      var r = P,
        i = Ro(),
        a = M;
      if (a) {
        if (n === void 0) throw Error(o(407));
        n = n();
      } else n = t();
      var s = !Ar((F || i).memoizedState, n);
      if (
        (s && ((i.memoizedState = n), (rc = !0)),
        (i = i.queue),
        gs(Xo.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || s || (bo !== null && bo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ps(9, { destroy: void 0 }, Yo.bind(null, r, i, n, t), null),
          q === null)
        )
          throw Error(o(349));
        a || yo & 127 || Jo(r, t, n);
      }
      return n;
    }
    function Jo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = P.updateQueue),
        t === null
          ? ((t = zo()), (P.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Yo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Zo(t) && Qo(e));
    }
    function Xo(e, t, n) {
      return n(function () {
        Zo(t) && Qo(e);
      });
    }
    function Zo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Ar(e, n);
      } catch {
        return !0;
      }
    }
    function Qo(e) {
      var t = di(e, 2);
      t !== null && hu(t, e, 2);
    }
    function $o(e) {
      var t = Lo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), Co)) {
          Ge(!0);
          try {
            n();
          } finally {
            Ge(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Uo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function es(e, t, n, r) {
      return ((e.baseState = n), Go(e, F, typeof r == `function` ? r : Uo));
    }
    function ts(e, t, n, r, i) {
      if (Fs(e)) throw Error(o(485));
      if (((e = t.action), e !== null)) {
        var a = {
          payload: i,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            a.listeners.push(e);
          },
        };
        (w.T === null ? (a.isTransition = !1) : n(!0),
          r(a),
          (n = t.pending),
          n === null
            ? ((a.next = t.pending = a), ns(t, a))
            : ((a.next = n.next), (t.pending = n.next = a)));
      }
    }
    function ns(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = w.T,
          o = {};
        w.T = o;
        try {
          var s = n(i, r),
            c = w.S;
          (c !== null && c(o, s), rs(e, t, s));
        } catch (n) {
          as(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (w.T = a));
        }
      } else
        try {
          ((a = n(i, r)), rs(e, t, a));
        } catch (n) {
          as(e, t, n);
        }
    }
    function rs(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              is(e, t, n);
            },
            function (n) {
              return as(e, t, n);
            },
          )
        : is(e, t, n);
    }
    function is(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        os(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), ns(e, n))));
    }
    function as(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), os(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function os(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ss(e, t) {
      return t;
    }
    function cs(e, t) {
      if (M) {
        var n = q.formState;
        if (n !== null) {
          a: {
            var r = P;
            if (M) {
              if (j) {
                b: {
                  for (var i = j, a = Ui; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((j = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Gi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Lo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ss,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Ms.bind(null, P, r)),
        (r.dispatch = n),
        (r = $o(!1)),
        (a = Ps.bind(null, P, !1, r.queue)),
        (r = Lo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = ts.bind(null, P, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ls(e) {
      return us(Ro(), F, e);
    }
    function us(e, t, n) {
      if (
        ((t = Go(e, t, ss)[0]),
        (e = Wo(Uo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Bo(t);
        } catch (e) {
          throw e === ka ? ja : e;
        }
      else r = t;
      t = Ro();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((P.flags |= 2048), ps(9, { destroy: void 0 }, ds.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function ds(e, t) {
      e.action = t;
    }
    function fs(e) {
      var t = Ro(),
        n = F;
      if (n !== null) return us(t, n, e);
      (Ro(), (t = t.memoizedState), (n = Ro()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function ps(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = P.updateQueue),
        t === null && ((t = zo()), (P.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ms() {
      return Ro().memoizedState;
    }
    function I(e, t, n, r) {
      var i = Lo();
      ((P.flags |= e),
        (i.memoizedState = ps(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)));
    }
    function hs(e, t, n, r) {
      var i = Ro();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      F !== null && r !== null && ko(r, F.memoizedState.deps)
        ? (i.memoizedState = ps(t, a, n, r))
        : ((P.flags |= e), (i.memoizedState = ps(1 | t, a, n, r)));
    }
    function L(e, t) {
      I(8390656, 8, e, t);
    }
    function gs(e, t) {
      hs(2048, 8, e, t);
    }
    function R(e) {
      P.flags |= 4;
      var t = P.updateQueue;
      if (t === null) ((t = zo()), (P.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function _s(e) {
      var t = Ro().memoizedState;
      return (
        R({ ref: t, nextImpl: e }),
        function () {
          if (K & 2) throw Error(o(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function vs(e, t) {
      return hs(4, 2, e, t);
    }
    function ys(e, t) {
      return hs(4, 4, e, t);
    }
    function bs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function xs(e, t, n) {
      ((n = n == null ? null : n.concat([e])), hs(4, 4, bs.bind(null, t, e), n));
    }
    function z() {}
    function Ss(e, t) {
      var n = Ro();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && ko(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function B(e, t) {
      var n = Ro();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && ko(t, r[1])) return r[0];
      if (((r = e()), Co)) {
        Ge(!0);
        try {
          e();
        } finally {
          Ge(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Cs(e, t, n) {
      return n === void 0 || (yo & 1073741824 && !(Y & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (P.lanes |= e), (Gl |= e), n);
    }
    function ws(e, t, n, r) {
      return Ar(n, t)
        ? n
        : ao.current === null
          ? !(yo & 42) || (yo & 1073741824 && !(Y & 261930))
            ? ((rc = !0), (e.memoizedState = n))
            : ((e = mu()), (P.lanes |= e), (Gl |= e), t)
          : ((e = Cs(e, n, r)), Ar(e, t) || (rc = !0), e);
    }
    function Ts(e, t, n, r, i) {
      var a = T.p;
      T.p = a !== 0 && 8 > a ? a : 8;
      var o = w.T,
        s = {};
      ((w.T = s), Ps(e, !1, t, n));
      try {
        var c = i(),
          l = w.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ns(e, t, Ca(c, r), pu(e))
            : Ns(e, t, r, pu(e)));
      } catch (n) {
        Ns(e, t, { then: function () {}, status: `rejected`, reason: n }, pu());
      } finally {
        ((T.p = a), o !== null && s.types !== null && (o.types = s.types), (w.T = o));
      }
    }
    function Es() {}
    function Ds(e, t, n, r) {
      if (e.tag !== 5) throw Error(o(476));
      var i = Os(e).queue;
      Ts(
        e,
        i,
        t,
        de,
        n === null
          ? Es
          : function () {
              return (V(e), n(r));
            },
      );
    }
    function Os(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: de,
        baseState: de,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Uo,
          lastRenderedState: de,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Uo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function V(e) {
      var t = Os(e);
      (t.next === null && (t = e.alternate.memoizedState), Ns(e, t.next.queue, {}, pu()));
    }
    function ks() {
      return ca(Qf);
    }
    function As() {
      return Ro().memoizedState;
    }
    function H() {
      return Ro().memoizedState;
    }
    function U(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu();
            e = Xa(n);
            var r = Za(t, e, n);
            (r !== null && (hu(r, t, n), Qa(r, t, n)), (t = { cache: ha() }), (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function js(e, t, n) {
      var r = pu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Fs(e) ? Is(t, n) : ((n = ui(e, t, n, r)), n !== null && (hu(n, e, r), Ls(n, t, r))));
    }
    function Ms(e, t, n) {
      Ns(e, t, n, pu());
    }
    function Ns(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Fs(e)) Is(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Ar(s, o)))
              return (li(e, t, i, 0), q === null && ci(), !1);
          } catch {}
        if (((n = ui(e, t, i, r)), n !== null)) return (hu(n, e, r), Ls(n, t, r), !0);
      }
      return !1;
    }
    function Ps(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Fs(e))
      ) {
        if (t) throw Error(o(479));
      } else ((t = ui(e, n, r, 2)), t !== null && hu(t, e, 2));
    }
    function Fs(e) {
      var t = e.alternate;
      return e === P || (t !== null && t === P);
    }
    function Is(e, t) {
      So = xo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function Ls(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), lt(e, n));
      }
    }
    var Rs = {
      readContext: ca,
      use: Vo,
      useCallback: Oo,
      useContext: Oo,
      useEffect: Oo,
      useImperativeHandle: Oo,
      useLayoutEffect: Oo,
      useInsertionEffect: Oo,
      useMemo: Oo,
      useReducer: Oo,
      useRef: Oo,
      useState: Oo,
      useDebugValue: Oo,
      useDeferredValue: Oo,
      useTransition: Oo,
      useSyncExternalStore: Oo,
      useId: Oo,
      useHostTransitionStatus: Oo,
      useFormState: Oo,
      useActionState: Oo,
      useOptimistic: Oo,
      useMemoCache: Oo,
      useCacheRefresh: Oo,
    };
    Rs.useEffectEvent = Oo;
    var zs = {
        readContext: ca,
        use: Vo,
        useCallback: function (e, t) {
          return ((Lo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: ca,
        useEffect: L,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])), I(4194308, 4, bs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return I(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          I(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Lo();
          t = t === void 0 ? null : t;
          var r = e();
          if (Co) {
            Ge(!0);
            try {
              e();
            } finally {
              Ge(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Lo();
          if (n !== void 0) {
            var i = n(t);
            if (Co) {
              Ge(!0);
              try {
                n(t);
              } finally {
                Ge(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = js.bind(null, P, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Lo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = $o(e);
          var t = e.queue,
            n = Ms.bind(null, P, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: z,
        useDeferredValue: function (e, t) {
          return Cs(Lo(), e, t);
        },
        useTransition: function () {
          var e = $o(!1);
          return ((e = Ts.bind(null, P, e.queue, !0, !1)), (Lo().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, n) {
          var r = P,
            i = Lo();
          if (M) {
            if (n === void 0) throw Error(o(407));
            n = n();
          } else {
            if (((n = t()), q === null)) throw Error(o(349));
            Y & 127 || Jo(r, t, n);
          }
          i.memoizedState = n;
          var a = { value: n, getSnapshot: t };
          return (
            (i.queue = a),
            L(Xo.bind(null, r, a, e), [e]),
            (r.flags |= 2048),
            ps(9, { destroy: void 0 }, Yo.bind(null, r, a, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Lo(),
            t = q.identifierPrefix;
          if (M) {
            var n = Fi,
              r = Pi;
            ((n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = wo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = Do++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: ks,
        useFormState: cs,
        useActionState: cs,
        useOptimistic: function (e) {
          var t = Lo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return ((t.queue = n), (t = Ps.bind(null, P, !0, n)), (n.dispatch = t), [e, t]);
        },
        useMemoCache: Ho,
        useCacheRefresh: function () {
          return (Lo().memoizedState = U.bind(null, P));
        },
        useEffectEvent: function (e) {
          var t = Lo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (K & 2) throw Error(o(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Bs = {
        readContext: ca,
        use: Vo,
        useCallback: Ss,
        useContext: ca,
        useEffect: gs,
        useImperativeHandle: xs,
        useInsertionEffect: vs,
        useLayoutEffect: ys,
        useMemo: B,
        useReducer: Wo,
        useRef: ms,
        useState: function () {
          return Wo(Uo);
        },
        useDebugValue: z,
        useDeferredValue: function (e, t) {
          return ws(Ro(), F.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Wo(Uo)[0],
            t = Ro().memoizedState;
          return [typeof e == `boolean` ? e : Bo(e), t];
        },
        useSyncExternalStore: qo,
        useId: As,
        useHostTransitionStatus: ks,
        useFormState: ls,
        useActionState: ls,
        useOptimistic: function (e, t) {
          return es(Ro(), F, e, t);
        },
        useMemoCache: Ho,
        useCacheRefresh: H,
      };
    Bs.useEffectEvent = _s;
    var Vs = {
      readContext: ca,
      use: Vo,
      useCallback: Ss,
      useContext: ca,
      useEffect: gs,
      useImperativeHandle: xs,
      useInsertionEffect: vs,
      useLayoutEffect: ys,
      useMemo: B,
      useReducer: Ko,
      useRef: ms,
      useState: function () {
        return Ko(Uo);
      },
      useDebugValue: z,
      useDeferredValue: function (e, t) {
        var n = Ro();
        return F === null ? Cs(n, e, t) : ws(n, F.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ko(Uo)[0],
          t = Ro().memoizedState;
        return [typeof e == `boolean` ? e : Bo(e), t];
      },
      useSyncExternalStore: qo,
      useId: As,
      useHostTransitionStatus: ks,
      useFormState: fs,
      useActionState: fs,
      useOptimistic: function (e, t) {
        var n = Ro();
        return F === null ? ((n.baseState = e), [e, n.queue.dispatch]) : es(n, F, e, t);
      },
      useMemoCache: Ho,
      useCacheRefresh: H,
    };
    Vs.useEffectEvent = _s;
    function Hs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : m({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Us = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Xa(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Za(e, i, r)),
          t !== null && (hu(t, e, r), Qa(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Xa(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Za(e, i, r)),
          t !== null && (hu(t, e, r), Qa(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pu(),
          r = Xa(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Za(e, r, n)),
          t !== null && (hu(t, e, n), Qa(t, e, n)));
      },
    };
    function Ws(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !jr(n, r) || !jr(i, a)
            : !0
      );
    }
    function Gs(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Us.enqueueReplaceState(t, t.state, null));
    }
    function Ks(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = m({}, n)), e)) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function qs(e) {
      ii(e);
    }
    function Js(e) {
      console.error(e);
    }
    function Ys(e) {
      ii(e);
    }
    function Xs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Zs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Qs(e, t, n) {
      return (
        (n = Xa(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Xs(e, t);
        }),
        n
      );
    }
    function $s(e) {
      return ((e = Xa(e)), (e.tag = 3), e);
    }
    function ec(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Zs(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Zs(t, n, r),
            typeof i != `function` && (ru === null ? (ru = new Set([this])) : ru.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function tc(e, t, n, r, i) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && aa(t, n, i, !0), (n = N.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                uo === null ? Du() : n.alternate === null && Wl === 0 && (Wl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = i),
                r === Ma
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, i)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Ma
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, i)),
                !1
              );
          }
          throw Error(o(435, n.tag));
        }
        return (Gu(e, r, i), Du(), !1);
      }
      if (M)
        return (
          (t = N.current),
          t === null
            ? (r !== Wi && ((t = Error(o(423), { cause: r })), Zi(Ei(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (i &= -i),
              (e.lanes |= i),
              (r = Ei(r, n)),
              (i = Qs(e.stateNode, r, i)),
              $a(e, i),
              Wl !== 4 && (Wl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = i),
              r !== Wi && ((e = Error(o(422), { cause: r })), Zi(Ei(e, n)))),
          !1
        );
      var a = Error(o(520), { cause: r });
      if (((a = Ei(a, n)), Xl === null ? (Xl = [a]) : Xl.push(a), Wl !== 4 && (Wl = 2), t === null))
        return !0;
      ((r = Ei(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = i & -i),
              (n.lanes |= e),
              (e = Qs(n.stateNode, r, e)),
              $a(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (a = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (a !== null &&
                    typeof a.componentDidCatch == `function` &&
                    (ru === null || !ru.has(a)))))
            )
              return (
                (n.flags |= 65536),
                (i &= -i),
                (n.lanes |= i),
                (i = $s(i)),
                ec(i, e, n, r),
                $a(n, i),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var nc = Error(o(461)),
      rc = !1;
    function ic(e, t, n, r) {
      t.child = e === null ? Ka(t, null, n, r) : Ga(t, e.child, n, r);
    }
    function ac(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        sa(t),
        (r = Ao(e, t, n, o, a, i)),
        (s = Po()),
        e !== null && !rc
          ? (Fo(e, t, i), kc(e, t, i))
          : (M && s && Ri(t), (t.flags |= 1), ic(e, t, r, i), t.child)
      );
    }
    function oc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !_i(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), sc(e, t, a, r, i))
          : ((e = bi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Ac(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? jr : n), n(o, r) && e.ref === t.ref))
          return kc(e, t, i);
      }
      return ((t.flags |= 1), (e = vi(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function sc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (jr(a, r) && e.ref === t.ref)
          if (((rc = !1), (t.pendingProps = r = a), Ac(e, i))) e.flags & 131072 && (rc = !0);
          else return ((t.lanes = e.lanes), kc(e, t, i));
      }
      return hc(e, t, n, r, i);
    }
    function cc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return uc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Da(t, a === null ? null : a.cachePool),
            a === null ? co() : so(t, a),
            mo(t));
        else return ((r = t.lanes = 536870912), uc(e, t, a === null ? n : a.baseLanes | n, n, r));
      } else
        a === null
          ? (e !== null && Da(t, null), co(), ho(t))
          : (Da(t, a.cachePool), so(t, a), ho(t), (t.memoizedState = null));
      return (ic(e, t, i, n), t.child);
    }
    function lc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function uc(e, t, n, r, i) {
      var a = Ea();
      return (
        (a = a === null ? null : { parent: ma._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Da(t, null),
        co(),
        mo(t),
        e !== null && aa(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function dc(e, t) {
      return (
        (t = wc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function fc(e, t, n) {
      return (
        Ga(t, e.child, null, n),
        (e = dc(t, t.pendingProps)),
        (e.flags |= 2),
        go(t),
        (t.memoizedState = null),
        e
      );
    }
    function pc(e, t, n) {
      var r = t.pendingProps,
        i = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (M) {
          if (r.mode === `hidden`) return ((e = dc(t, r)), (t.lanes = 536870912), lc(null, e));
          if (
            (po(t),
            (e = j)
              ? ((e = rf(e, Ui)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ni === null ? null : { id: Pi, overflow: Fi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Ci(e)),
                  (n.return = t),
                  (t.child = n),
                  (Vi = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Gi(t);
          return ((t.lanes = 536870912), null);
        }
        return dc(t, r);
      }
      var a = e.memoizedState;
      if (a !== null) {
        var s = a.dehydrated;
        if ((po(t), i))
          if (t.flags & 256) ((t.flags &= -257), (t = fc(e, t, n)));
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(o(558));
        else if ((rc || aa(e, t, n, !1), (i = (n & e.childLanes) !== 0), rc || i)) {
          if (((r = q), r !== null && ((s = ut(r, n)), s !== 0 && s !== a.retryLane)))
            throw ((a.retryLane = s), di(e, s), hu(r, e, s), nc);
          (Du(), (t = fc(e, t, n)));
        } else
          ((e = a.treeContext),
            (j = cf(s.nextSibling)),
            (Vi = t),
            (M = !0),
            (Hi = null),
            (Ui = !1),
            e !== null && Bi(t, e),
            (t = dc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = vi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function mc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(o(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function hc(e, t, n, r, i) {
      return (
        sa(t),
        (n = Ao(e, t, n, r, void 0, i)),
        (r = Po()),
        e !== null && !rc
          ? (Fo(e, t, i), kc(e, t, i))
          : (M && r && Ri(t), (t.flags |= 1), ic(e, t, n, i), t.child)
      );
    }
    function gc(e, t, n, r, i, a) {
      return (
        sa(t),
        (t.updateQueue = null),
        (n = Mo(t, r, n, i)),
        jo(e),
        (r = Po()),
        e !== null && !rc
          ? (Fo(e, t, a), kc(e, t, a))
          : (M && r && Ri(t), (t.flags |= 1), ic(e, t, n, a), t.child)
      );
    }
    function _c(e, t, n, r, i) {
      if ((sa(t), t.stateNode === null)) {
        var a = mi,
          o = n.contextType;
        (typeof o == `object` && o && (a = ca(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Us),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ja(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ca(o) : mi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Hs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Us.enqueueReplaceState(a, a.state, null),
            no(t, r, a, i),
            to(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Ks(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = mi), typeof u == `object` && u && (o = ca(u)));
        var d = n.getDerivedStateFromProps;
        ((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Gs(t, a, r, o)),
          (qa = !1));
        var f = t.memoizedState;
        ((a.state = f),
          no(t, r, a, i),
          to(),
          (l = t.memoizedState),
          s || f !== l || qa
            ? (typeof d == `function` && (Hs(t, n, d, r), (l = t.memoizedState)),
              (c = qa || Ws(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` && (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), (r = !1)));
      } else {
        ((a = t.stateNode),
          Ya(e, t),
          (o = t.memoizedProps),
          (u = Ks(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = mi),
          typeof l == `object` && l && (c = ca(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Gs(t, a, r, c)),
          (qa = !1),
          (f = t.memoizedState),
          (a.state = f),
          no(t, r, a, i),
          to());
        var p = t.memoizedState;
        o !== d || f !== p || qa || (e !== null && e.dependencies !== null && oa(e.dependencies))
          ? (typeof s == `function` && (Hs(t, n, s, r), (p = t.memoizedState)),
            (u =
              qa ||
              Ws(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && oa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        mc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ga(t, e.child, null, i)), (t.child = Ga(t, null, n, i)))
              : ic(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = kc(e, t, i)),
        e
      );
    }
    function vc(e, t, n, r) {
      return (Yi(), (t.flags |= 256), ic(e, t, n, r), t.child);
    }
    var yc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function bc(e) {
      return { baseLanes: e, cachePool: Oa() };
    }
    function xc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Jl), e);
    }
    function Sc(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        a = !!(t.flags & 128),
        s;
      if (
        ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : !!(_o.current & 2)),
        s && ((i = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (M) {
          if (
            (i ? fo(t) : ho(t),
            (e = j)
              ? ((e = rf(e, Ui)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ni === null ? null : { id: Pi, overflow: Fi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Ci(e)),
                  (n.return = t),
                  (t.child = n),
                  (Vi = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Gi(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          i
            ? (ho(t),
              (i = t.mode),
              (c = wc({ mode: `hidden`, children: c }, i)),
              (r = xi(r, i, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = bc(n)),
              (r.childLanes = xc(e, s, n)),
              (t.memoizedState = yc),
              lc(null, r))
            : (fo(t), Cc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (a)
          t.flags & 256
            ? (fo(t), (t.flags &= -257), (t = Tc(e, t, n)))
            : t.memoizedState === null
              ? (ho(t),
                (c = r.fallback),
                (i = t.mode),
                (r = wc({ mode: `visible`, children: r.children }, i)),
                (c = xi(c, i, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ga(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = bc(n)),
                (r.childLanes = xc(e, s, n)),
                (t.memoizedState = yc),
                (t = lc(null, r)))
              : (ho(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((fo(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(o(419))),
            (r.stack = ``),
            (r.digest = s),
            Zi({ value: r, source: null, stack: null }),
            (t = Tc(e, t, n)));
        } else if ((rc || aa(e, t, n, !1), (s = (n & e.childLanes) !== 0), rc || s)) {
          if (((s = q), s !== null && ((r = ut(s, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), di(e, r), hu(s, e, r), nc);
          (af(c) || Du(), (t = Tc(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (j = cf(c.nextSibling)),
              (Vi = t),
              (M = !0),
              (Hi = null),
              (Ui = !1),
              e !== null && Bi(t, e),
              (t = Cc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return i
        ? (ho(t),
          (c = r.fallback),
          (i = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = vi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = xi(c, i, n, null)), (c.flags |= 2)) : (c = vi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          lc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = bc(n))
            : ((i = c.cachePool),
              i === null
                ? (i = Oa())
                : ((l = ma._currentValue), (i = i.parent === l ? i : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: i })),
          (r.memoizedState = c),
          (r.childLanes = xc(e, s, n)),
          (t.memoizedState = yc),
          lc(e.child, r))
        : (fo(t),
          (n = e.child),
          (e = n.sibling),
          (n = vi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Cc(e, t) {
      return ((t = wc({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function wc(e, t) {
      return ((e = gi(22, e, null, t)), (e.lanes = 0), e);
    }
    function Tc(e, t, n) {
      return (
        Ga(t, e.child, null, n),
        (e = Cc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Ec(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ra(e.return, t, n));
    }
    function Dc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Oc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = _o.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        E(_o, o),
        ic(e, t, r, n),
        (r = M ? Ai : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
          else if (e.tag === 19) Ec(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate), e !== null && vo(e) === null && (i = n), (n = n.sibling));
          ((n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Dc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && vo(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Dc(t, !0, n, null, a, r);
          break;
        case `together`:
          Dc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function kc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (Gl |= t.lanes), (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((aa(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(o(153));
      if (t.child !== null) {
        for (e = t.child, n = vi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
          ((e = e.sibling), (n = n.sibling = vi(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Ac(e, t) {
      return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && oa(e)));
    }
    function jc(e, t, n) {
      switch (t.tag) {
        case 3:
          (be(t, t.stateNode.containerInfo), ta(t, ma, e.memoizedState.cache), Yi());
          break;
        case 27:
        case 5:
          Se(t);
          break;
        case 4:
          be(t, t.stateNode.containerInfo);
          break;
        case 10:
          ta(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), po(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (fo(t), (e = kc(e, t, n)), e === null ? null : e.sibling)
                : Sc(e, t, n)
              : (fo(t), (t.flags |= 128), null);
          fo(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0), (r ||= (aa(e, t, n, !1), (n & t.childLanes) !== 0)), i)
          ) {
            if (r) return Oc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            E(_o, _o.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), cc(e, t, n, t.pendingProps));
        case 24:
          ta(t, ma, e.memoizedState.cache);
      }
      return kc(e, t, n);
    }
    function Mc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) rc = !0;
        else {
          if (!Ac(e, n) && !(t.flags & 128)) return ((rc = !1), jc(e, t, n));
          rc = !!(e.flags & 131072);
        }
      else ((rc = !1), M && t.flags & 1048576 && Li(t, Ai, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Fa(t.elementType)), (t.type = e), typeof e == `function`))
              _i(e)
                ? ((r = Ks(e, r)), (t.tag = 1), (t = _c(null, t, e, r, n)))
                : ((t.tag = 0), (t = hc(null, t, e, r, n)));
            else {
              if (e != null) {
                var i = e.$$typeof;
                if (i === C) {
                  ((t.tag = 11), (t = ac(null, t, e, r, n)));
                  break a;
                }
                if (i === ne) {
                  ((t.tag = 14), (t = oc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = le(e) || e), Error(o(306, t, ``)));
            }
          }
          return t;
        case 0:
          return hc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (i = Ks(r, t.pendingProps)), _c(e, t, r, i, n));
        case 3:
          a: {
            if ((be(t, t.stateNode.containerInfo), e === null)) throw Error(o(387));
            r = t.pendingProps;
            var a = t.memoizedState;
            ((i = a.element), Ya(e, t), no(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              ta(t, ma, r),
              r !== a.cache && ia(t, [ma], n, !0),
              to(),
              (r = s.element),
              a.isDehydrated)
            )
              if (
                ((a = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = a),
                (t.memoizedState = a),
                t.flags & 256)
              ) {
                t = vc(e, t, r, n);
                break a;
              } else if (r !== i) {
                ((i = Ei(Error(o(424)), t)), Zi(i), (t = vc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  j = cf(e.firstChild),
                    Vi = t,
                    M = !0,
                    Hi = null,
                    Ui = !0,
                    n = Ka(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Yi(), r === i)) {
                t = kc(e, t, n);
                break a;
              }
              ic(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            mc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : M ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(ve.current).createElement(n)),
                  (r[gt] = t),
                  (r[_t] = e),
                  Pd(r, n, e),
                  kt(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            Se(t),
            e === null &&
              M &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, ve.current)),
              (Vi = t),
              (Ui = !0),
              (i = j),
              Zd(t.type) ? ((lf = i), (j = cf(r.firstChild))) : (j = i)),
            ic(e, t, t.pendingProps.children, n),
            mc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              M &&
              ((i = r = j) &&
                ((r = tf(r, t.type, t.pendingProps, Ui)),
                r === null
                  ? (i = !1)
                  : ((t.stateNode = r), (Vi = t), (j = cf(r.firstChild)), (Ui = !1), (i = !0))),
              i || Gi(t)),
            Se(t),
            (i = t.type),
            (a = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = a.children),
            Ud(i, a) ? (r = null) : s !== null && Ud(i, s) && (t.flags |= 32),
            t.memoizedState !== null && ((i = Ao(e, t, No, null, null, n)), (Qf._currentValue = i)),
            mc(e, t),
            ic(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              M &&
              ((e = n = j) &&
                ((n = nf(n, t.pendingProps, Ui)),
                n === null ? (e = !1) : ((t.stateNode = n), (Vi = t), (j = null), (e = !0))),
              e || Gi(t)),
            null
          );
        case 13:
          return Sc(e, t, n);
        case 4:
          return (
            be(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ga(t, null, r, n)) : ic(e, t, r, n),
            t.child
          );
        case 11:
          return ac(e, t, t.type, t.pendingProps, n);
        case 7:
          return (ic(e, t, t.pendingProps, n), t.child);
        case 8:
          return (ic(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (ic(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return ((r = t.pendingProps), ta(t, t.type, r.value), ic(e, t, r.children, n), t.child);
        case 9:
          return (
            (i = t.type._context),
            (r = t.pendingProps.children),
            sa(t),
            (i = ca(i)),
            (r = r(i)),
            (t.flags |= 1),
            ic(e, t, r, n),
            t.child
          );
        case 14:
          return oc(e, t, t.type, t.pendingProps, n);
        case 15:
          return sc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Oc(e, t, n);
        case 31:
          return pc(e, t, n);
        case 22:
          return cc(e, t, n, t.pendingProps);
        case 24:
          return (
            sa(t),
            (r = ca(ma)),
            e === null
              ? ((i = Ea()),
                i === null &&
                  ((i = q),
                  (a = ha()),
                  (i.pooledCache = a),
                  a.refCount++,
                  a !== null && (i.pooledCacheLanes |= n),
                  (i = a)),
                (t.memoizedState = { parent: r, cache: i }),
                Ja(t),
                ta(t, ma, i))
              : ((e.lanes & n) !== 0 && (Ya(e, t), no(t, null, null, n), to()),
                (i = e.memoizedState),
                (a = t.memoizedState),
                i.parent === r
                  ? ((r = a.cache), ta(t, ma, r), r !== i.cache && ia(t, [ma], n, !0))
                  : ((i = { parent: r, cache: r }),
                    (t.memoizedState = i),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                    ta(t, ma, r))),
            ic(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(o(156, t.tag));
    }
    function Nc(e) {
      e.flags |= 4;
    }
    function Pc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((Ia = Ma), Aa);
      } else e.flags &= -16777217;
    }
    function Fc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t)))
        if (wu()) e.flags |= 8192;
        else throw ((Ia = Ma), Aa);
    }
    function Ic(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : it()), (e.lanes |= t), (Yl |= t)));
    }
    function Lc(e, t) {
      if (!M)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;) (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;) (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function W(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Rc(e, t, n) {
      var r = t.pendingProps;
      switch ((zi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (W(t), null);
        case 1:
          return (W(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            na(ma),
            xe(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ji(t)
                ? Nc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Xi())),
            W(t),
            null
          );
        case 26:
          var i = t.type,
            a = t.memoizedState;
          return (
            e === null
              ? (Nc(t), a === null ? (W(t), Pc(t, i, null, r, n)) : (W(t), Fc(t, a)))
              : a
                ? a === e.memoizedState
                  ? (W(t), (t.flags &= -16777217))
                  : (Nc(t), W(t), Fc(t, a))
                : ((e = e.memoizedProps), e !== r && Nc(t), W(t), Pc(t, i, e, r, n)),
            null
          );
        case 27:
          if ((Ce(t), (n = ve.current), (i = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Nc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(o(166));
              return (W(t), null);
            }
            ((e = ge.current), Ji(t) ? Ki(t, e) : ((e = ff(i, r, n)), (t.stateNode = e), Nc(t)));
          }
          return (W(t), null);
        case 5:
          if ((Ce(t), (i = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Nc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(o(166));
              return (W(t), null);
            }
            if (((a = ge.current), Ji(t))) Ki(t, a);
            else {
              var s = Bd(ve.current);
              switch (a) {
                case 1:
                  a = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                  break;
                case 2:
                  a = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                  break;
                default:
                  switch (i) {
                    case `svg`:
                      a = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                      break;
                    case `math`:
                      a = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                      break;
                    case `script`:
                      ((a = s.createElement(`div`)),
                        (a.innerHTML = `<script><\/script>`),
                        (a = a.removeChild(a.firstChild)));
                      break;
                    case `select`:
                      ((a =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size));
                      break;
                    default:
                      a =
                        typeof r.is == `string`
                          ? s.createElement(i, { is: r.is })
                          : s.createElement(i);
                  }
              }
              ((a[gt] = t), (a[_t] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) a.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = a;
              a: switch ((Pd(a, i, r), i)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Nc(t);
            }
          }
          return (
            W(t),
            Pc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Nc(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(o(166));
            if (((e = ve.current), Ji(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (i = Vi), i !== null))
                switch (i.tag) {
                  case 27:
                  case 5:
                    r = i.memoizedProps;
                }
              ((e[gt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Gi(t, !0));
            } else ((e = Bd(e).createTextNode(r)), (e[gt] = t), (t.stateNode = e));
          }
          return (W(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ji(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(o(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
                  throw Error(o(557));
                e[gt] = t;
              } else (Yi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (W(t), (e = !1));
            } else
              ((n = Xi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (go(t), t) : (go(t), null);
            if (t.flags & 128) throw Error(o(558));
          }
          return (W(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((i = Ji(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!i) throw Error(o(318));
                if (((i = t.memoizedState), (i = i === null ? null : i.dehydrated), !i))
                  throw Error(o(317));
                i[gt] = t;
              } else (Yi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (W(t), (i = !1));
            } else
              ((i = Xi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
                (i = !0));
            if (!i) return t.flags & 256 ? (go(t), t) : (go(t), null);
          }
          return (
            go(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (i = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (i = r.alternate.memoizedState.cachePool.pool),
                  (a = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (a = r.memoizedState.cachePool.pool),
                  a !== i && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Ic(t, t.updateQueue),
                W(t),
                null)
          );
        case 4:
          return (xe(), e === null && Sd(t.stateNode.containerInfo), W(t), null);
        case 10:
          return (na(t.type), W(t), null);
        case 19:
          if ((he(_o), (r = t.memoizedState), r === null)) return (W(t), null);
          if (((i = !!(t.flags & 128)), (a = r.rendering), a === null))
            if (i) Lc(r, !1);
            else {
              if (Wl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((a = vo(e)), a !== null)) {
                    for (
                      t.flags |= 128,
                        Lc(r, !1),
                        e = a.updateQueue,
                        t.updateQueue = e,
                        Ic(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (yi(n, e), (n = n.sibling));
                    return (E(_o, (_o.current & 1) | 2), M && Ii(t, r.treeForkCount), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Fe() > tu &&
                ((t.flags |= 128), (i = !0), Lc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!i)
              if (((e = vo(a)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Ic(t, e),
                  Lc(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !a.alternate && !M)
                )
                  return (W(t), null);
              } else
                2 * Fe() - r.renderingStartTime > tu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (i = !0), Lc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((a.sibling = t.child), (t.child = a))
              : ((e = r.last), e === null ? (t.child = a) : (e.sibling = a), (r.last = a));
          }
          return r.tail === null
            ? (W(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Fe()),
              (e.sibling = null),
              (n = _o.current),
              E(_o, i ? (n & 1) | 2 : n & 1),
              M && Ii(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            go(t),
            lo(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 && !(t.flags & 128) && (W(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : W(t),
            (n = t.updateQueue),
            n !== null && Ic(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && he(Ta),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            na(ma),
            W(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, t.tag));
    }
    function zc(e, t) {
      switch ((zi(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
          return (
            na(ma),
            xe(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (Ce(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((go(t), t.alternate === null)) throw Error(o(340));
            Yi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 13:
          if ((go(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(o(340));
            Yi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (he(_o), null);
        case 4:
          return (xe(), null);
        case 10:
          return (na(t.type), null);
        case 22:
        case 23:
          return (
            go(t),
            lo(),
            e !== null && he(Ta),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (na(ma), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Bc(e, t) {
      switch ((zi(t), t.tag)) {
        case 3:
          (na(ma), xe());
          break;
        case 26:
        case 27:
        case 5:
          Ce(t);
          break;
        case 4:
          xe();
          break;
        case 31:
          t.memoizedState !== null && go(t);
          break;
        case 13:
          go(t);
          break;
        case 19:
          he(_o);
          break;
        case 10:
          na(t.type);
          break;
        case 22:
        case 23:
          (go(t), lo(), e !== null && he(Ta));
          break;
        case 24:
          na(ma);
      }
    }
    function G(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Vc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Hc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          io(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Uc(e, t, n) {
      ((n.props = Ks(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Wc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Gc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
    }
    function Kc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function qc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[_t] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Jc(e) {
      return (
        e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Zd(e.type)) || e.tag === 4
      );
    }
    function Yc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Jc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if ((e.tag === 27 && Zd(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Xc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = un)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for (Xc(e, t, n), e = e.sibling; e !== null;) (Xc(e, t, n), (e = e.sibling));
    }
    function Zc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for (Zc(e, t, n), e = e.sibling; e !== null;) (Zc(e, t, n), (e = e.sibling));
    }
    function Qc(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[gt] = e), (t[_t] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var $c = !1,
      el = !1,
      tl = !1,
      nl = typeof WeakSet == `function` ? WeakSet : Set,
      rl = null;
    function il(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Fr(e)), Ir(e))) {
        if (`selectionStart` in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var i = r.anchorOffset,
                a = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, a.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (i !== 0 && f.nodeType !== 3) || (c = s + i),
                    f !== a || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === i && (c = s),
                    p === a && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (zd = { focusedElem: e, selectionRange: n }, sp = !1, rl = t; rl !== null;)
        if (((t = rl), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (rl = e));
        else
          for (; rl !== null;) {
            switch (((t = rl), (a = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (e & 4 && ((e = t.updateQueue), (e = e === null ? null : e.events), e !== null))
                  for (n = 0; n < e.length; n++) ((i = e[n]), (i.ref.impl = i.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && a !== null) {
                  ((e = void 0),
                    (n = t),
                    (i = a.memoizedProps),
                    (a = a.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Ks(n.type, i);
                    ((e = r.getSnapshotBeforeUpdate(h, a)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(o(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (rl = e));
              break;
            }
            rl = t.return;
          }
    }
    function al(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (bl(e, n), r & 4 && G(5, n));
          break;
        case 1:
          if ((bl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Ks(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          (r & 64 && Hc(n), r & 512 && Wc(n, n.return));
          break;
        case 3:
          if ((bl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              io(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Qc(n);
        case 26:
        case 5:
          (bl(e, n), t === null && r & 4 && Kc(n), r & 512 && Wc(n, n.return));
          break;
        case 12:
          bl(e, n);
          break;
        case 31:
          (bl(e, n), r & 4 && dl(e, n));
          break;
        case 13:
          (bl(e, n),
            r & 4 && fl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated), e !== null && ((n = Ju.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || $c), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || el), (i = $c));
            var a = el;
            (($c = r),
              (el = t) && !a ? Sl(e, n, !!(n.subtreeFlags & 8772)) : bl(e, n),
              ($c = i),
              (el = a));
          }
          break;
        case 30:
          break;
        default:
          bl(e, n);
      }
    }
    function ol(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), ol(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && wt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var sl = null,
      cl = !1;
    function ll(e, t, n) {
      for (n = n.child; n !== null;) (ul(e, t, n), (n = n.sibling));
    }
    function ul(e, t, n) {
      if (We && typeof We.onCommitFiberUnmount == `function`)
        try {
          We.onCommitFiberUnmount(O, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (el || Gc(n, t),
            ll(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          el || Gc(n, t);
          var r = sl,
            i = cl;
          (Zd(n.type) && ((sl = n.stateNode), (cl = !1)),
            ll(e, t, n),
            pf(n.stateNode),
            (sl = r),
            (cl = i));
          break;
        case 5:
          el || Gc(n, t);
        case 6:
          if (((r = sl), (i = cl), (sl = null), ll(e, t, n), (sl = r), (cl = i), sl !== null))
            if (cl)
              try {
                (sl.nodeType === 9
                  ? sl.body
                  : sl.nodeName === `HTML`
                    ? sl.ownerDocument.body
                    : sl
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                sl.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          break;
        case 18:
          sl !== null &&
            (cl
              ? ((e = sl),
                Qd(
                  e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(sl, n.stateNode));
          break;
        case 4:
          ((r = sl),
            (i = cl),
            (sl = n.stateNode.containerInfo),
            (cl = !0),
            ll(e, t, n),
            (sl = r),
            (cl = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Vc(2, n, t), el || Vc(4, n, t), ll(e, t, n));
          break;
        case 1:
          (el ||
            (Gc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Uc(n, t, r)),
            ll(e, t, n));
          break;
        case 21:
          ll(e, t, n);
          break;
        case 22:
          ((el = (r = el) || n.memoizedState !== null), ll(e, t, n), (el = r));
          break;
        default:
          ll(e, t, n);
      }
    }
    function dl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function pl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new nl()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new nl()),
            t
          );
        default:
          throw Error(o(435, e.tag));
      }
    }
    function ml(e, t) {
      var n = pl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function hl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = e,
            s = t,
            c = s;
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((sl = c.stateNode), (cl = !1));
                  break a;
                }
                break;
              case 5:
                ((sl = c.stateNode), (cl = !1));
                break a;
              case 3:
              case 4:
                ((sl = c.stateNode.containerInfo), (cl = !0));
                break a;
            }
            c = c.return;
          }
          if (sl === null) throw Error(o(160));
          (ul(a, s, i),
            (sl = null),
            (cl = !1),
            (a = i.alternate),
            a !== null && (a.return = null),
            (i.return = null));
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (_l(t, e), (t = t.sibling));
    }
    var gl = null;
    function _l(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (hl(t, e), vl(e), r & 4 && (Vc(3, e, e.return), G(3, e), Vc(5, e, e.return)));
          break;
        case 1:
          (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            r & 64 &&
              $c &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var i = gl;
          if ((hl(t, e), vl(e), r & 512 && (el || n === null || Gc(n, n.return)), r & 4)) {
            var a = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i));
                    b: switch (r) {
                      case `title`:
                        ((a = i.getElementsByTagName(`title`)[0]),
                          (!a ||
                            a[Ct] ||
                            a[gt] ||
                            a.namespaceURI === `http://www.w3.org/2000/svg` ||
                            a.hasAttribute(`itemprop`)) &&
                            ((a = i.createElement(r)),
                            i.head.insertBefore(a, i.querySelector(`head > title`))),
                          Pd(a, r, n),
                          (a[gt] = e),
                          kt(a),
                          (r = a));
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, i).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((a = s[c]),
                              a.getAttribute(`href`) ===
                                (n.href == null || n.href === `` ? null : n.href) &&
                                a.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                                a.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                                a.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null ? null : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((a = i.createElement(r)), Pd(a, r, n), i.head.appendChild(a));
                        break;
                      case `meta`:
                        if ((s = Vf(`meta`, `content`, i).get(r + (n.content || ``)))) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((a = s[c]),
                              a.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                a.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                                a.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                a.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                a.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((a = i.createElement(r)), Pd(a, r, n), i.head.appendChild(a));
                        break;
                      default:
                        throw Error(o(468, r));
                    }
                    ((a[gt] = e), kt(a), (r = a));
                  }
                  e.stateNode = r;
                } else Hf(i, e.type, e.stateNode);
              else e.stateNode = If(i, r, e.memoizedProps);
            else
              a === r
                ? r === null && e.stateNode !== null && qc(e, e.memoizedProps, n.memoizedProps)
                : (a === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : a.count--,
                  r === null ? Hf(i, e.type, e.stateNode) : If(i, r, e.memoizedProps));
          }
          break;
        case 27:
          (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            n !== null && r & 4 && qc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if ((hl(t, e), vl(e), r & 512 && (el || n === null || Gc(n, n.return)), e.flags & 32)) {
            i = e.stateNode;
            try {
              tn(i, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((i = e.memoizedProps), qc(e, i, n === null ? i : n.memoizedProps)),
            r & 1024 && (tl = !0));
          break;
        case 6:
          if ((hl(t, e), vl(e), r & 4)) {
            if (e.stateNode === null) throw Error(o(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (i = gl),
            (gl = gf(t.containerInfo)),
            hl(t, e),
            (gl = i),
            vl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          tl && ((tl = !1), yl(e));
          break;
        case 4:
          ((r = gl), (gl = gf(e.stateNode.containerInfo)), hl(t, e), vl(e), (gl = r));
          break;
        case 12:
          (hl(t, e), vl(e));
          break;
        case 31:
          (hl(t, e),
            vl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 13:
          (hl(t, e),
            vl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              ($l = Fe()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 22:
          i = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = $c,
            d = el;
          if ((($c = u || i), (el = d || l), hl(t, e), (el = d), ($c = u), vl(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                i && (n === null || l || $c || el || xl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((a = l.stateNode), i))
                      ((s = a.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                      c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = i ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    i ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((n = r.retryQueue), n !== null && ((r.retryQueue = null), ml(e, n))));
          break;
        case 19:
          (hl(t, e),
            vl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (hl(t, e), vl(e));
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Jc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(o(160));
          switch (n.tag) {
            case 27:
              var i = n.stateNode;
              Zc(e, Yc(e), i);
              break;
            case 5:
              var a = n.stateNode;
              (n.flags & 32 && (tn(a, ``), (n.flags &= -33)), Zc(e, Yc(e), a));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Xc(e, Yc(e), s);
              break;
            default:
              throw Error(o(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function yl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (yl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
        }
    }
    function bl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (al(e, t.alternate, t), (t = t.sibling));
    }
    function xl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Vc(4, t, t.return), xl(t));
            break;
          case 1:
            Gc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Uc(t, t.return, n), xl(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (Gc(t, t.return), xl(t));
            break;
          case 22:
            t.memoizedState === null && xl(t);
            break;
          case 30:
            xl(t);
            break;
          default:
            xl(t);
        }
        e = e.sibling;
      }
    }
    function Sl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Sl(i, a, n), G(4, a));
            break;
          case 1:
            if ((Sl(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) ro(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Hc(a), Wc(a, a.return));
            break;
          case 27:
            Qc(a);
          case 26:
          case 5:
            (Sl(i, a, n), n && r === null && o & 4 && Kc(a), Wc(a, a.return));
            break;
          case 12:
            Sl(i, a, n);
            break;
          case 31:
            (Sl(i, a, n), n && o & 4 && dl(i, a));
            break;
          case 13:
            (Sl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Sl(i, a, n), Wc(a, a.return));
            break;
          case 30:
            break;
          default:
            Sl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Cl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ga(n)));
    }
    function wl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ga(e)));
    }
    function Tl(e, t, n, r) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (El(e, t, n, r), (t = t.sibling));
    }
    function El(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Tl(e, t, n, r), i & 2048 && G(9, t));
          break;
        case 1:
          Tl(e, t, n, r);
          break;
        case 3:
          (Tl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ga(e))));
          break;
        case 12:
          if (i & 2048) {
            (Tl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Tl(e, t, n, r);
          break;
        case 31:
          Tl(e, t, n, r);
          break;
        case 13:
          Tl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Tl(e, t, n, r)
                : ((a._visibility |= 2), Dl(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
                ? Tl(e, t, n, r)
                : Ol(e, t),
            i & 2048 && Cl(o, t));
          break;
        case 24:
          (Tl(e, t, n, r), i & 2048 && wl(t.alternate, t));
          break;
        default:
          Tl(e, t, n, r);
      }
    }
    function Dl(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Dl(a, o, s, c, i), G(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Dl(a, o, s, c, i))
              : u._visibility & 2
                ? Dl(a, o, s, c, i)
                : Ol(a, o),
              i && l & 2048 && Cl(o.alternate, o));
            break;
          case 24:
            (Dl(a, o, s, c, i), i && l & 2048 && wl(o.alternate, o));
            break;
          default:
            Dl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Ol(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Ol(n, r), i & 2048 && Cl(r.alternate, r));
              break;
            case 24:
              (Ol(n, r), i & 2048 && wl(r.alternate, r));
              break;
            default:
              Ol(n, r);
          }
          t = t.sibling;
        }
    }
    var kl = 8192;
    function Al(e, t, n) {
      if (e.subtreeFlags & kl) for (e = e.child; e !== null;) (jl(e, t, n), (e = e.sibling));
    }
    function jl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Al(e, t, n),
            e.flags & kl &&
              e.memoizedState !== null &&
              Gf(n, gl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Al(e, t, n);
          break;
        case 3:
        case 4:
          var r = gl;
          ((gl = gf(e.stateNode.containerInfo)), Al(e, t, n), (gl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = kl), (kl = 16777216), Al(e, t, n), (kl = r))
              : Al(e, t, n));
          break;
        default:
          Al(e, t, n);
      }
    }
    function Ml(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Nl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((rl = r), Il(r, e));
          }
        Ml(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Pl(e), (e = e.sibling));
    }
    function Pl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Nl(e), e.flags & 2048 && Vc(9, e, e.return));
          break;
        case 3:
          Nl(e);
          break;
        case 12:
          Nl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Fl(e))
            : Nl(e);
          break;
        default:
          Nl(e);
      }
    }
    function Fl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((rl = r), Il(r, e));
          }
        Ml(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Vc(8, t, t.return), Fl(t));
            break;
          case 22:
            ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Fl(t)));
            break;
          default:
            Fl(t);
        }
        e = e.sibling;
      }
    }
    function Il(e, t) {
      for (; rl !== null;) {
        var n = rl;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Vc(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ga(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (rl = r));
        else
          a: for (n = e; rl !== null;) {
            r = rl;
            var i = r.sibling,
              a = r.return;
            if ((ol(r), r === n)) {
              rl = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (rl = i));
              break a;
            }
            rl = a;
          }
      }
    }
    var Ll = {
        getCacheForType: function (e) {
          var t = ca(ma),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return ca(ma).controller.signal;
        },
      },
      Rl = typeof WeakMap == `function` ? WeakMap : Map,
      K = 0,
      q = null,
      J = null,
      Y = 0,
      X = 0,
      zl = null,
      Bl = !1,
      Vl = !1,
      Hl = !1,
      Ul = 0,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = null,
      Zl = null,
      Ql = !1,
      $l = 0,
      eu = 0,
      tu = 1 / 0,
      nu = null,
      ru = null,
      iu = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null;
    function pu() {
      return K & 2 && Y !== 0 ? Y & -Y : w.T === null ? pt() : dd();
    }
    function mu() {
      if (Jl === 0)
        if (!(Y & 536870912) || M) {
          var e = Ze;
          ((Ze <<= 1), !(Ze & 3932160) && (Ze = 262144), (Jl = e));
        } else Jl = 536870912;
      return ((e = N.current), e !== null && (e.flags |= 32), Jl);
    }
    function hu(e, t, n) {
      (((e === q && (X === 2 || X === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, Y, Jl, !1)),
        ot(e, n),
        (!(K & 2) || e !== q) &&
          (e === q && (!(K & 2) && (Kl |= n), Wl === 4 && yu(e, Y, Jl, !1)), rd(e)));
    }
    function gu(e, t, n) {
      if (K & 6) throw Error(o(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || nt(e, t),
        i = r ? Au(e, t) : Ou(e, t, !0),
        a = r;
      do {
        if (i === 0) {
          Vl && !r && yu(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), a && !vu(n))) {
          ((i = Ou(e, t, !1)), (a = !1));
          continue;
        }
        if (i === 2) {
          if (((a = t), e.errorRecoveryDisabledLanes & a)) var s = 0;
          else
            ((s = e.pendingLanes & -536870913),
              (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              i = Xl;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)) {
                if (Hl && !l) {
                  ((c.errorRecoveryDisabledLanes |= a), (Kl |= a), (i = 4));
                  break a;
                }
                ((a = Zl), (Zl = i), a !== null && (Zl === null ? (Zl = a) : Zl.push.apply(Zl, a)));
              }
              i = s;
            }
            if (((a = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (Su(e, 0), yu(e, t, 0, !0));
          break;
        }
        a: {
          switch (((r = e), (a = i), a)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              yu(r, t, Jl, !Bl);
              break a;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((i = $l + 300 - Fe()), 10 < i)) {
            if ((yu(r, t, Jl, !Bl), tt(r, 0, !0) !== 0)) break a;
            ((su = t),
              (r.timeoutHandle = Kd(
                _u.bind(null, r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, a, `Throttled`, -0, 0),
                i,
              )));
            break a;
          }
          _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, a, null, -0, 0);
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (((e.timeoutHandle = -1), (d = t.subtreeFlags), d & 8192 || (d & 16785408) == 16785408)) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: un,
        }),
          jl(t, a, d));
        var m = (a & 62914560) === a ? $l - Fe() : (a & 4194048) === a ? eu - Fe() : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((su = a),
            (e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p))),
            yu(e, a, o, !l));
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Ar(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      ((t &= ~ql),
        (t &= ~Kl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - Ke(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && ct(e, n, t);
    }
    function bu() {
      return K & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (J !== null) {
        if (X === 0) var e = J.return;
        else ((e = J), (ea = $i = null), Io(e), (za = null), (Ba = 0), (e = J));
        for (; e !== null;) (Bc(e.alternate, e), (e = e.return));
        J = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (q = e),
        (J = n = vi(e.current, null)),
        (Y = t),
        (X = 0),
        (zl = null),
        (Bl = !1),
        (Vl = nt(e, t)),
        (Hl = !1),
        (Yl = Jl = ql = Kl = Gl = Wl = 0),
        (Zl = Xl = null),
        (Ql = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Ke(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Ul = t), ci(), n);
    }
    function Cu(e, t) {
      ((P = null),
        (w.H = Rs),
        t === ka || t === ja
          ? ((t = La()), (X = 3))
          : t === Aa
            ? ((t = La()), (X = 4))
            : (X = t === nc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (zl = t),
        J === null && ((Wl = 1), Xs(e, Ei(t, e.current))));
    }
    function wu() {
      var e = N.current;
      return e === null
        ? !0
        : (Y & 4194048) === Y
          ? uo === null
          : (Y & 62914560) === Y || Y & 536870912
            ? e === uo
            : !1;
    }
    function Tu() {
      var e = w.H;
      return ((w.H = Rs), e === null ? Rs : e);
    }
    function Eu() {
      var e = w.A;
      return ((w.A = Ll), e);
    }
    function Du() {
      ((Wl = 4),
        Bl || ((Y & 4194048) !== Y && N.current !== null) || (Vl = !0),
        (!(Gl & 134217727) && !(Kl & 134217727)) || q === null || yu(q, Y, Jl, !1));
    }
    function Ou(e, t, n) {
      var r = K;
      K |= 2;
      var i = Tu(),
        a = Eu();
      ((q !== e || Y !== t) && ((nu = null), Su(e, t)), (t = !1));
      var o = Wl;
      a: do
        try {
          if (X !== 0 && J !== null) {
            var s = J,
              c = zl;
            switch (X) {
              case 8:
                (xu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                N.current === null && (t = !0);
                var l = X;
                if (((X = 0), (zl = null), Pu(e, s, c, l), n && Vl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = X), (X = 0), (zl = null), Pu(e, s, c, l));
            }
          }
          (ku(), (o = Wl));
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (ea = $i = null),
        (K = r),
        (w.H = i),
        (w.A = a),
        J === null && ((q = null), (Y = 0), ci()),
        o
      );
    }
    function ku() {
      for (; J !== null;) Mu(J);
    }
    function Au(e, t) {
      var n = K;
      K |= 2;
      var r = Tu(),
        i = Eu();
      q !== e || Y !== t ? ((nu = null), (tu = Fe() + 500), Su(e, t)) : (Vl = nt(e, t));
      a: do
        try {
          if (X !== 0 && J !== null) {
            t = J;
            var a = zl;
            b: switch (X) {
              case 1:
                ((X = 0), (zl = null), Pu(e, t, a, 1));
                break;
              case 2:
              case 9:
                if (Na(a)) {
                  ((X = 0), (zl = null), Nu(t));
                  break;
                }
                ((t = function () {
                  ((X !== 2 && X !== 9) || q !== e || (X = 7), rd(e));
                }),
                  a.then(t, t));
                break a;
              case 3:
                X = 7;
                break a;
              case 4:
                X = 5;
                break a;
              case 7:
                Na(a) ? ((X = 0), (zl = null), Nu(t)) : ((X = 0), (zl = null), Pu(e, t, a, 7));
                break;
              case 5:
                var s = null;
                switch (J.tag) {
                  case 26:
                    s = J.memoizedState;
                  case 5:
                  case 27:
                    var c = J;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ((X = 0), (zl = null));
                      var l = c.sibling;
                      if (l !== null) J = l;
                      else {
                        var u = c.return;
                        u === null ? (J = null) : ((J = u), Fu(u));
                      }
                      break b;
                    }
                }
                ((X = 0), (zl = null), Pu(e, t, a, 5));
                break;
              case 6:
                ((X = 0), (zl = null), Pu(e, t, a, 6));
                break;
              case 8:
                (xu(), (Wl = 6));
                break a;
              default:
                throw Error(o(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        (ea = $i = null),
        (w.H = r),
        (w.A = i),
        (K = n),
        J === null ? ((q = null), (Y = 0), ci(), Wl) : 0
      );
    }
    function ju() {
      for (; J !== null && !Ne();) Mu(J);
    }
    function Mu(e) {
      var t = Mc(e.alternate, e, Ul);
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = gc(n, t, t.pendingProps, t.type, void 0, Y);
          break;
        case 11:
          t = gc(n, t, t.pendingProps, t.type.render, t.ref, Y);
          break;
        case 5:
          Io(t);
        default:
          (Bc(n, t), (t = J = yi(t, Ul)), (t = Mc(n, t, Ul)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Pu(e, t, n, r) {
      ((ea = $i = null), Io(t), (za = null), (Ba = 0));
      var i = t.return;
      try {
        if (tc(e, i, t, n, Y)) {
          ((Wl = 1), Xs(e, Ei(n, e.current)), (J = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((J = i), t);
        ((Wl = 1), Xs(e, Ei(n, e.current)), (J = null));
        return;
      }
      t.flags & 32768
        ? (M || r === 1
            ? (e = !0)
            : Vl || Y & 536870912
              ? (e = !1)
              : ((Bl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = N.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Bl);
          return;
        }
        e = t.return;
        var n = Rc(t.alternate, t, Ul);
        if (n !== null) {
          J = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          J = t;
          return;
        }
        J = t = e;
      } while (t !== null);
      Wl === 0 && (Wl = 5);
    }
    function Iu(e, t) {
      do {
        var n = zc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (J = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          J = e;
          return;
        }
        J = e = n;
      } while (e !== null);
      ((Wl = 6), (J = null));
    }
    function Lu(e, t, n, r, i, a, s, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (iu !== 0);
      if (K & 6) throw Error(o(327));
      if (t !== null) {
        if (t === e.current) throw Error(o(177));
        if (
          ((a = t.lanes | t.childLanes),
          (a |= si),
          st(e, n, a, s, c, l),
          e === q && ((J = q = null), (Y = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = a),
          (lu = i),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(ze, function () {
                return (Uu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = w.T), (w.T = null), (i = T.p), (T.p = 2), (s = K), (K |= 4));
          try {
            il(e, t, n);
          } finally {
            ((K = s), (T.p = i), (w.T = r));
          }
        }
        ((iu = 1), Ru(), zu(), Bu());
      }
    }
    function Ru() {
      if (iu === 1) {
        iu = 0;
        var e = au,
          t = ou,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          ((n = w.T), (w.T = null));
          var r = T.p;
          T.p = 2;
          var i = K;
          K |= 4;
          try {
            _l(t, e);
            var a = zd,
              o = Fr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (o !== s && s && s.ownerDocument && Pr(s.ownerDocument.documentElement, s)) {
              if (c !== null && Ir(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l), (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Nr(s, h),
                      v = Nr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                var b = d[s];
                ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((K = i), (T.p = r), (w.T = n));
          }
        }
        ((e.current = t), (iu = 2));
      }
    }
    function zu() {
      if (iu === 2) {
        iu = 0;
        var e = au,
          t = ou,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = w.T), (w.T = null));
          var r = T.p;
          T.p = 2;
          var i = K;
          K |= 4;
          try {
            al(e, t.alternate, t);
          } finally {
            ((K = i), (T.p = r), (w.T = n));
          }
        }
        iu = 3;
      }
    }
    function Bu() {
      if (iu === 4 || iu === 3) {
        ((iu = 0), Pe());
        var e = au,
          t = ou,
          n = su,
          r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (iu = 5)
          : ((iu = 0), (ou = au = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ru = null),
          ft(n),
          (t = t.stateNode),
          We && typeof We.onCommitFiberRoot == `function`)
        )
          try {
            We.onCommitFiberRoot(O, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = w.T), (i = T.p), (T.p = 2), (w.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((w.T = t), (T.p = i));
          }
        }
        (su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === fu ? du++ : ((du = 0), (fu = e))) : (du = 0),
          id(0, !1));
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ga(t)));
    }
    function Hu() {
      return (Ru(), zu(), Bu(), Uu());
    }
    function Uu() {
      if (iu !== 5) return !1;
      var e = au,
        t = cu;
      cu = 0;
      var n = ft(su),
        r = w.T,
        i = T.p;
      try {
        ((T.p = 32 > n ? 32 : n), (w.T = null), (n = lu), (lu = null));
        var a = au,
          s = su;
        if (((iu = 0), (ou = au = null), (su = 0), K & 6)) throw Error(o(331));
        var c = K;
        if (
          ((K |= 4),
          Pl(a.current),
          El(a, a.current, s, n),
          (K = c),
          id(0, !1),
          We && typeof We.onPostCommitFiberRoot == `function`)
        )
          try {
            We.onPostCommitFiberRoot(O, a);
          } catch {}
        return !0;
      } finally {
        ((T.p = i), (w.T = r), Vu(e, t));
      }
    }
    function Wu(e, t, n) {
      ((t = Ei(n, t)),
        (t = Qs(e.stateNode, t, 2)),
        (e = Za(e, t, 2)),
        e !== null && (ot(e, 2), rd(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (ru === null || !ru.has(r)))
            ) {
              ((e = Ei(n, e)),
                (n = $s(2)),
                (r = Za(t, n, 2)),
                r !== null && (ec(n, r, t, e), ot(r, 2), rd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Rl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || ((Hl = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        q === e &&
          (Y & n) === n &&
          (Wl === 4 || (Wl === 3 && (Y & 62914560) === Y && 300 > Fe() - $l)
            ? !(K & 2) && Su(e, 0)
            : (ql |= n),
          Yl === Y && (Yl = 0)),
        rd(e));
    }
    function qu(e, t) {
      (t === 0 && (t = it()), (e = di(e, t)), e !== null && (ot(e, t), rd(e)));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), qu(e, n));
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            i = e.memoizedState;
          i !== null && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      (r !== null && r.delete(t), qu(e, n));
    }
    function Xu(e, t) {
      return je(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      (e !== Qu && e.next === null && (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()));
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null;) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Ke(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                ((a = Y),
                  (a = tt(
                    r,
                    r === q ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || nt(r, a) || ((n = !0), ld(r, a)));
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = Fe(), n = null, r = Zu; r !== null;) {
        var i = r.next,
          a = sd(r, t);
        (a === 0
          ? ((r.next = null), n === null ? (Zu = i) : (n.next = i), i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i));
      }
      ((iu !== 0 && iu !== 5) || id(e, !1), nd !== 0 && (nd = 0));
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ke(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = rt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = q),
        (n = Y),
        (n = tt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (X === 2 || X === 9)) || e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Me(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || nt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Me(r), ft(n))) {
          case 2:
          case 8:
            n = Re;
            break;
          case 32:
            n = ze;
            break;
          case 268435456:
            n = Ve;
            break;
          default:
            n = ze;
        }
        return (
          (r = cd.bind(null, e)),
          (n = je(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Me(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (iu !== 0 && iu !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = Y;
      return (
        (r = tt(e, e === q ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, Fe()),
            e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(function () {
        K & 6 ? je(Le, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = ya;
        (e === 0 && ((e = Xe), (Xe <<= 1), !(Xe & 261888) && (Xe = 256)), (nd = e));
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : ln(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[_t] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[_t] || null) ? fd(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new k(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Ds(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Ds(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < ni.length; hd++) {
      var gd = ni[hd];
      ri(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    (ri(Jr, `onAnimationEnd`),
      ri(Yr, `onAnimationIteration`),
      ri(Xr, `onAnimationStart`),
      ri(`dblclick`, `onDoubleClick`),
      ri(`focusin`, `onFocus`),
      ri(`focusout`, `onBlur`),
      ri(Zr, `onTransitionRun`),
      ri(Qr, `onTransitionStart`),
      ri($r, `onTransitionCancel`),
      ri(ei, `onTransitionEnd`),
      Nt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Nt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Nt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Nt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Mt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(` `),
      ),
      Mt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Mt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Mt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      Mt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Mt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `),
      ));
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d),
      );
    function yd(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped())) break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ii(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ii(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[yt];
      n === void 0 && (n = t[yt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Cd(n, e, r, t));
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        ((e[xd] = !0),
          At.forEach(function (t) {
            t !== `selectionchange` && (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !bn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i) break;
            if (o === 4)
              for (o = r.return; o !== null;) {
                var l = o.tag;
                if ((l === 3 || l === 4) && o.stateNode.containerInfo === i) return;
                o = o.return;
              }
            for (; s !== null;) {
              if (((o = Tt(s)), o === null)) return;
              if (((l = o.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      _n(function () {
        var r = a,
          i = fn(n),
          o = [];
        a: {
          var s = ti.get(e);
          if (s !== void 0) {
            var l = k,
              u = e;
            switch (e) {
              case `keypress`:
                if (En(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = qn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Rn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Rn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Rn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = In;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Ln;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Yn;
                break;
              case Jr:
              case Yr:
              case Xr:
                l = zn;
                break;
              case ei:
                l = Xn;
                break;
              case `scroll`:
              case `scrollend`:
                l = jn;
                break;
              case `wheel`:
                l = Zn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Bn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Jn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Qn;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (s === null ? null : s + `Capture`) : s;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = vn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length && ((s = new l(s, u, null, n, i)), o.push({ event: s, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              s && n !== dn && (u = n.relatedTarget || n.fromElement) && (Tt(u) || u[vt]))
            )
              break a;
            if (
              (l || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? Tt(u) : null),
                  u !== null &&
                    ((f = c(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = In),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Jn), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = l == null ? s : Dt(l)),
                (h = u == null ? s : Dt(u)),
                (s = new d(g, m + `leave`, l, n, i)),
                (s.target = f),
                (s.relatedTarget = h),
                (g = null),
                Tt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g;) ((p = d(p)), h--);
                  for (; 0 < g - h;) ((m = d(m)), g--);
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Od(o, s, l, d, !1), u !== null && f !== null && Od(o, f, u, d, !0));
            }
          }
          a: {
            if (
              ((s = r ? Dt(r) : window),
              (l = s.nodeName && s.nodeName.toLowerCase()),
              l === `select` || (l === `input` && s.type === `file`))
            )
              var v = vr;
            else if (fr(s))
              if (yr) v = Or;
              else {
                v = Er;
                var y = Tr;
              }
            else
              ((l = s.nodeName),
                !l || l.toLowerCase() !== `input` || (s.type !== `checkbox` && s.type !== `radio`)
                  ? r && on(r.elementType) && (v = vr)
                  : (v = Dr));
            if ((v &&= v(e, r))) {
              pr(o, v, n, i);
              break a;
            }
            (y && y(e, s, r),
              e === `focusout` &&
                r &&
                s.type === `number` &&
                r.memoizedProps.value != null &&
                Zt(s, `number`, s.value));
          }
          switch (((y = r ? Dt(r) : window), e)) {
            case `focusin`:
              (fr(y) || y.contentEditable === `true`) && ((Rr = y), (zr = r), (Br = null));
              break;
            case `focusout`:
              Br = zr = Rr = null;
              break;
            case `mousedown`:
              Vr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Vr = !1), Hr(o, n, i));
              break;
            case `selectionchange`:
              if (Lr) break;
            case `keydown`:
            case `keyup`:
              Hr(o, n, i);
          }
          var b;
          if (er)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            cr
              ? or(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
          (x &&
            (rr &&
              n.locale !== `ko` &&
              (cr || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && cr && (b = Tn())
                : ((Sn = i), (Cn = `value` in Sn ? Sn.value : Sn.textContent), (cr = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Vn(x, e, null, n, i)),
              o.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = sr(n)), b !== null && (x.data = b)))),
            (b = nr ? lr(e, n) : ur(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Vn(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: y, listeners: x }),
                (y.data = b))),
            md(o, e, r, n, i));
        }
        yd(o, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = vn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = vn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = vn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = vn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t);
    }
    function $(e, t, n, r, i, a) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || tn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && tn(e, `` + r);
          break;
        case `className`:
          zt(e, `class`, r);
          break;
        case `tabIndex`:
          zt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          zt(e, n, r);
          break;
        case `style`:
          an(e, r, a);
          break;
        case `data`:
          if (t !== `object`) {
            zt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = ln(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof a == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, i.name, i, null),
                  $(e, t, `formEncType`, i.formEncType, i, null),
                  $(e, t, `formMethod`, i.formMethod, i, null),
                  $(e, t, `formTarget`, i.formTarget, i, null))
                : ($(e, t, `encType`, i.encType, i, null),
                  $(e, t, `method`, i.method, i, null),
                  $(e, t, `target`, i.target, i, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = ln(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = un);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(o(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(o(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = ln(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Rt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Bt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Bt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Bt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Rt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = sn.get(n) || n), Rt(e, n, r));
      }
    }
    function Nd(e, t, n, r, i, a) {
      switch (n) {
        case `style`:
          an(e, r, a);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(o(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(o(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? tn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && tn(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = un);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!jt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((i = n.endsWith(`Capture`)),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                (a = e[_t] || null),
                (a = a == null ? null : a[n]),
                typeof a == `function` && e.removeEventListener(t, a, i),
                typeof r == `function`)
              ) {
                (typeof a != `function` &&
                  a !== null &&
                  (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, i));
                break a;
              }
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : Rt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            i = !1,
            a;
          for (a in n)
            if (n.hasOwnProperty(a)) {
              var s = n[a];
              if (s != null)
                switch (a) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    i = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(o(137, t));
                  default:
                    $(e, t, a, s, n, null);
                }
            }
          (i && $(e, t, `srcSet`, n.srcSet, n, null), r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (a = s = i = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    i = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    a = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(o(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Xt(e, a, c, l, u, s, i, !1);
          return;
        case `select`:
          for (i in (Q(`invalid`, e), (r = s = a = null), n))
            if (n.hasOwnProperty(i) && ((c = n[i]), c != null))
              switch (i) {
                case `value`:
                  a = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, i, c, n, null);
              }
          ((t = a),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Qt(e, !!r, n, !0) : Qt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (a = i = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  i = c;
                  break;
                case `children`:
                  a = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(o(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          en(e, r, i, a);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(o(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (on(t)) {
            for (d in n)
              n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var i = null,
            a = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  a = m;
                  break;
                case `name`:
                  i = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(o(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Yt(e, s, c, l, u, d, a, i);
          return;
        case `select`:
          for (a in ((m = s = c = p = null), n))
            if (((l = n[a]), n.hasOwnProperty(a) && l != null))
              switch (a) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(a) || $(e, t, a, null, r, l);
              }
          for (i in r)
            if (((a = r[i]), (l = n[i]), r.hasOwnProperty(i) && (a != null || l != null)))
              switch (i) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  c = a;
                  break;
                case `multiple`:
                  s = a;
                default:
                  a !== l && $(e, t, i, a, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? Qt(e, !!n, n ? [] : ``, !1) : Qt(e, !!n, t, !0))
              : Qt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (((i = n[c]), n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)))
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, i);
              }
          for (s in r)
            if (((i = r[s]), (a = n[s]), r.hasOwnProperty(s) && (i != null || a != null)))
              switch (s) {
                case `value`:
                  p = i;
                  break;
                case `defaultValue`:
                  m = i;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (i != null) throw Error(o(91));
                  break;
                default:
                  i !== a && $(e, t, s, i, r, a);
              }
          $t(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]), (m = n[l]), r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected = p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(o(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (on(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) || p === m || (p == null && m == null) || $(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && Id(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate` ? e !== Wd && ((Wd = e), !0) : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[Ct] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display), (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), wt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[Ct])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !== (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`);
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(o(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(o(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(o(454));
          return e;
        default:
          throw Error(o(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      wt(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = T.d;
    T.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = Et(e);
      t !== null && t.tag === 5 && t.type === `form` ? V(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Jt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Pd(t, `link`, e), kt(t), r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Jt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Jt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Jt(n.imageSizes) + `"]`))
          : (i += `[href="` + Jt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = m(
            { rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)), Pd(t, `link`, e), kt(t), r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + Jt(r) + `"][href="` + Jt(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = m({ rel: `modulepreload`, href: e }, t)), mf.set(a, e), n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)), Pd(r, `link`, e), kt(r), n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = Ot(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = m({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (kt(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = Ot(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = m({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            kt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = Ot(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = m({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            kt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var i = (i = ve.current) ? gf(i) : null;
      if (!i) throw Error(o(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = Ot(i).hoistableStyles),
              (r = n.get(t)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var a = Ot(i).hoistableStyles,
              s = a.get(e);
            if (
              (s ||
                ((i = i.ownerDocument || i),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                a.set(e, s),
                (a = i.querySelector(jf(e))) && !a._p && ((s.instance = a), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  a || Nf(i, e, n, s.state))),
              t && r === null)
            )
              throw Error(o(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(o(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = Ot(i).hoistableScripts),
                (r = n.get(t)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(o(444, e));
      }
    }
    function Af(e) {
      return `href="` + Jt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return m({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          kt(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + Jt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Jt(n.href) + `"]`);
            if (r) return ((t.instance = r), kt(r), r);
            var i = m({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              kt(r),
              Pd(r, `style`, i),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            i = Af(n.href);
            var a = e.querySelector(jf(i));
            if (a) return ((t.state.loading |= 4), (t.instance = a), kt(a), a);
            ((r = Mf(n)),
              (i = mf.get(i)) && Rf(r, i),
              (a = (e.ownerDocument || e).createElement(`link`)),
              kt(a));
            var s = a;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Pd(a, `link`, r),
              (t.state.loading |= 4),
              Lf(a, n.precedence, e),
              (t.instance = a)
            );
          case `script`:
            return (
              (a = Pf(n.src)),
              (i = e.querySelector(Ff(a)))
                ? ((t.instance = i), kt(i), i)
                : ((r = n),
                  (i = mf.get(a)) && ((r = m({}, n)), zf(r, i)),
                  (e = e.ownerDocument || e),
                  (i = e.createElement(`script`)),
                  kt(i),
                  Pd(i, `link`, r),
                  e.head.appendChild(i),
                  (t.instance = i))
            );
          case `void`:
            return null;
          default:
            throw Error(o(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[Ct] || a[gt] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return ((e = t.disabled), typeof t.precedence == `string` && e == null);
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              kt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            kt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++, (Yf = new Map()), t.forEach(Zf, e), (Yf = null), Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: S,
      Provider: null,
      Consumer: null,
      _currentValue: de,
      _currentValue2: de,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = at(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = at(0)),
        (this.hiddenUpdates = at(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = gi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ha()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ja(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = mi), e) : mi;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Xa(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Za(e, r, t)),
        n !== null && (hu(n, e, t), Qa(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = di(e, 67108864);
        (t !== null && hu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = dt(t);
        var n = di(e, t);
        (n !== null && hu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = T.p;
      try {
        ((T.p = 2), up(e, t, n, r));
      } finally {
        ((T.p = a), (w.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = T.p;
      try {
        ((T.p = 8), up(e, t, n, r));
      } finally {
        ((T.p = a), (w.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null;) {
            var a = Et(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = et(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Ke(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (rd(a), !(K & 6) && ((tu = Fe() + 500), id(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = di(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = fn(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = Tt(e)), e !== null)) {
        var t = c(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = l(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = u(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Ie()) {
            case Le:
              return 2;
            case Re:
              return 8;
            case ze:
            case Be:
              return 32;
            case Ve:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Et(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function Ep(e) {
      var t = Tt(e.target);
      if (t !== null) {
        var n = c(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = l(n)), t !== null)) {
              ((e.blockedOn = t),
                mt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = u(n)), t !== null)) {
              ((e.blockedOn = t),
                mt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((dn = r), n.target.dispatchEvent(r), (dn = null));
        } else return ((t = Et(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        hp || ((hp = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = Et(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ds(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null);)
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[_t] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[_t] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(o(409));
        var n = t.current;
        np(n, pu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), bu(), (t[vt] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = pt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = r.version;
    if (Lp !== `19.2.8`) throw Error(o(527, Lp, `19.2.8`));
    T.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(o(188))
          : ((e = Object.keys(e).join(`,`)), Error(o(268, e)));
      return ((e = f(t)), (e = e === null ? null : p(e)), (e = e === null ? null : e.stateNode), e);
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: w,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((O = zp.inject(Rp)), (We = zp));
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(o(299));
      var r = !1,
        i = ``,
        a = qs,
        c = Js,
        l = Ys,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (a = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = ep(e, 1, !0, t, n ?? null, r, i, u, a, c, l, Pp)),
        (t.context = tp(null)),
        (n = t.current),
        (r = pu()),
        (r = dt(r)),
        (i = Xa(r)),
        (i.callback = null),
        Za(n, i, r),
        (n = r),
        (t.current.lanes = n),
        ot(t, n),
        rd(t),
        (e[vt] = t.current),
        Sd(e),
        new Ip(t)
      );
    };
  }),
  et = e((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = $e()));
  });
function tt() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var nt = `tsr-scroll-restoration-v1_3`,
  rt = tt();
function it() {
  try {
    return JSON.parse(rt?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
function at() {
  try {
    rt?.setItem(nt, JSON.stringify(ot));
  } catch {}
}
var ot = it(),
  st = `data-scroll-restoration-id`,
  ct = (e) => e.state.__TSR_key || e.href;
function lt(e) {
  let t = e.getAttribute(st);
  if (t) return `[${st}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode);) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling);) e++;
    let a = `${r.localName}:nth-child(${e})`;
    ((n = n ? `${a} > ${n}` : a), (r = i));
  }
  return n;
}
var ut = !1,
  dt = `window`;
function ft(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function pt(e) {
  let t = new Set();
  for (let n of e) {
    if (n === dt) continue;
    let e = ft(n);
    e && t.add(e);
  }
  return t;
}
function mt(e, t) {
  let n = t ?? e.options.scrollRestoration,
    r = e._scroll;
  n && (r.restoring = !0);
  let i = e.options.getScrollRestorationKey || ct,
    a = new Set(),
    o = (e) => {
      let t = (ot[e] ||= {});
      for (let e of a)
        e === document
          ? (t[dt] = { scrollX, scrollY })
          : e.isConnected && (t[lt(e)] = { scrollX: e.scrollLeft, scrollY: e.scrollTop });
    };
  (n &&
    !r.restoration &&
    ((r.restoration = !0),
    (ut = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(
      `scroll`,
      (e) => {
        ut || a.add(e.target);
      },
      !0,
    ),
    e.subscribe(`onBeforeLoad`, (e) => {
      (e.fromLocation && o(i(e.fromLocation)), a.clear());
    }),
    addEventListener(`pagehide`, () => {
      (o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get())), at());
    })),
    !r.reset &&
      ((r.reset = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.next,
          c = r.hash,
          l;
        if (
          (a.clear(),
          (r.next = !0),
          (r.hash = !1),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        let u = i(t.toLocation),
          d = t.fromLocation && i(t.fromLocation);
        if (r.restoring && d && d !== u) {
          let e = ot[d];
          if (e) {
            let t = ot[u];
            for (let n in e) {
              if (n === dt) {
                if (s) continue;
              } else {
                let e = ft(n);
                if (!e || (s && o && ((l ??= pt(o)), l.has(e)))) continue;
              }
              ((t ||= ot[u] = {}), (t[n] ??= e[n]));
            }
          }
        }
        ut = !0;
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1;
          if (s) {
            !e && o && (l ??= pt(o));
            let t = e && i && c,
              s = r.restoring ? ot[u] : void 0;
            if (s)
              for (let e in s) {
                let { scrollX: r, scrollY: i } = s[e];
                if (e === dt) {
                  if (t) continue;
                  (scrollTo({ top: i, left: r, behavior: n }), (a = !0));
                } else {
                  let t = ft(e);
                  t && ((t.scrollLeft = r), (t.scrollTop = i), l?.delete(t));
                }
              }
            if (!e) {
              let e = { top: 0, left: 0, behavior: n };
              if ((a || scrollTo(e), l)) for (let t of l) t.scrollTo(e);
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i);
        } finally {
          ut = !1;
        }
      })));
}
var ht = _t(JSON.parse),
  gt = vt(JSON.stringify, JSON.parse);
function _t(e) {
  return (t) => {
    t[0] === `?` && (t = t.substring(1));
    let n = S(t);
    for (let t in n) {
      let r = n[t];
      if (typeof r == `string`)
        try {
          n[t] = e(r);
        } catch {}
    }
    return n;
  };
}
function vt(e, t) {
  let n = typeof t == `function`;
  function r(r) {
    if (typeof r == `object` && r)
      try {
        return e(r);
      } catch {}
    else if (n && typeof r == `string`)
      try {
        return (t(r), e(r));
      } catch {}
    return r;
  }
  return (e) => {
    let t = l(e, r);
    return t ? `?${t}` : ``;
  };
}
var yt = `__root__`;
function bt(e) {
  return {
    input: ({ url: t }) => {
      for (let n of e) t = St(n, t);
      return t;
    },
    output: ({ url: t }) => {
      for (let n = e.length - 1; n >= 0; n--) t = Ct(e[n], t);
      return t;
    },
  };
}
function xt(e) {
  let t = Se(e.basepath),
    n = `/${t}`,
    r = e.caseSensitive ? n : n.toLowerCase(),
    i = `${r}/`;
  return {
    input: ({ url: t }) => {
      let a = e.caseSensitive ? t.pathname : t.pathname.toLowerCase();
      return (
        a === r ? (t.pathname = `/`) : a.startsWith(i) && (t.pathname = t.pathname.slice(n.length)),
        t
      );
    },
    output: ({ url: e }) => ((e.pathname = ke([`/`, t, e.pathname])), e),
  };
}
function St(e, t) {
  let n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Ct(e, t) {
  let n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function wt(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i, init: a } = t,
    o = new Map(),
    s = new Map(),
    c = new Map(),
    l = n(e.status),
    u = n(e.loadedAt),
    d = n(e.isLoading),
    f = n(e.isTransitioning),
    p = n(e.location),
    m = n(e.resolvedLocation),
    h = n(e.statusCode),
    g = n(e.redirect),
    _ = n([]),
    v = n([]),
    y = n([]),
    b = r(() => Tt(o, _.get())),
    x = r(() => Tt(s, v.get())),
    S = r(() => Tt(c, y.get())),
    C = r(() => _.get()[0]),
    ee = r(() => _.get().some((e) => o.get(e)?.get().status === `pending`)),
    te = r(() => ({
      locationHref: p.get().href,
      resolvedLocationHref: m.get()?.href,
      status: l.get(),
    })),
    ne = r(() => ({
      status: l.get(),
      loadedAt: u.get(),
      isLoading: d.get(),
      isTransitioning: f.get(),
      matches: b.get(),
      location: p.get(),
      resolvedLocation: m.get(),
      statusCode: h.get(),
      redirect: g.get(),
    })),
    re = Fe(64);
  function ie(e) {
    let t = re.get(e);
    return (
      t ||
        ((t = r(() => {
          let t = _.get();
          for (let n of t) {
            let t = o.get(n);
            if (t && t.routeId === e) return t.get();
          }
        })),
        re.set(e, t)),
      t
    );
  }
  let ae = {
    status: l,
    loadedAt: u,
    isLoading: d,
    isTransitioning: f,
    location: p,
    resolvedLocation: m,
    statusCode: h,
    redirect: g,
    matchesId: _,
    pendingIds: v,
    cachedIds: y,
    matches: b,
    pendingMatches: x,
    cachedMatches: S,
    firstId: C,
    hasPending: ee,
    matchRouteDeps: te,
    matchStores: o,
    pendingMatchStores: s,
    cachedMatchStores: c,
    __store: ne,
    getRouteMatchStore: ie,
    setMatches: oe,
    setPending: se,
    setCached: ce,
  };
  (oe(e.matches), a?.(ae));
  function oe(e) {
    Et(e, o, _, n, i);
  }
  function se(e) {
    Et(e, s, v, n, i);
  }
  function ce(e) {
    Et(e, c, y, n, i);
  }
  return ae;
}
function Tt(e, t) {
  let n = [];
  for (let r of t) {
    let t = e.get(r);
    t && n.push(t.get());
  }
  return n;
}
function Et(e, t, n, r, i) {
  let a = e.map((e) => e.id),
    o = new Set(a);
  i(() => {
    for (let e of t.keys()) o.has(e) || t.delete(e);
    for (let n of e) {
      let e = t.get(n.id);
      if (!e) {
        let e = r(n);
        ((e.routeId = n.routeId), t.set(n.id, e));
        continue;
      }
      ((e.routeId = n.routeId), e.get() !== n && e.set(n));
    }
    se(n.get(), a) || n.set(a);
  });
}
var Dt = (e) => {
    if (!e.rendered) return ((e.rendered = !0), e.onReady?.());
  },
  Ot = (e) =>
    e.stores.matchesId.get().some((t) => e.stores.matchStores.get(t)?.get()._forcePending),
  kt = (e, t) => !!(e.preload && !e.router.stores.matchStores.has(t)),
  At = (e, t, n = !0) => {
    let r = { ...(e.router.options.context ?? {}) },
      i = n ? t : t - 1;
    for (let t = 0; t <= i; t++) {
      let n = e.matches[t];
      if (!n) continue;
      let i = e.router.getMatch(n.id);
      i && Object.assign(r, i.__routeContext, i.__beforeLoadContext);
    }
    return r;
  },
  jt = (e, t) => {
    if (!e.matches.length) return;
    let n = t.routeId,
      r = e.matches.findIndex((t) => t.routeId === e.router.routeTree.id),
      i = r >= 0 ? r : 0,
      a = n
        ? e.matches.findIndex((e) => e.routeId === n)
        : (e.firstBadMatchIndex ?? e.matches.length - 1);
    a < 0 && (a = i);
    for (let t = a; t >= 0; t--) {
      let n = e.matches[t];
      if (e.router.looseRoutesById[n.routeId].options.notFoundComponent) return t;
    }
    return n ? a : i;
  },
  Mt = (e, t, n) => {
    if (!(!Ue(n) && !p(n)))
      throw Ue(n) && n.redirectHandled && !n.options.reloadDocument
        ? n
        : (t &&
            (t._nonReactive.beforeLoadPromise?.resolve(),
            t._nonReactive.loaderPromise?.resolve(),
            (t._nonReactive.beforeLoadPromise = void 0),
            (t._nonReactive.loaderPromise = void 0),
            (t._nonReactive.error = n),
            e.updateMatch(t.id, (r) => ({
              ...r,
              status: Ue(n)
                ? `redirected`
                : p(n)
                  ? `notFound`
                  : r.status === `pending`
                    ? `success`
                    : r.status,
              context: At(e, t.index),
              isFetching: !1,
              error: n,
            })),
            p(n) && !n.routeId && (n.routeId = t.routeId),
            t._nonReactive.loadPromise?.resolve()),
          Ue(n) &&
            ((e.rendered = !0),
            (n.options._fromLocation = e.location),
            (n.redirectHandled = !0),
            (n = e.router.resolveRedirect(n))),
          n);
  },
  Nt = (e, t) => {
    let n = e.router.getMatch(t);
    return !!(!n || n._nonReactive.dehydrated);
  },
  Pt = (e, t, n) => {
    let r = At(e, n);
    e.updateMatch(t, (e) => ({ ...e, context: r }));
  },
  Ft = (e, t, n) => {
    let { id: r, routeId: i } = e.matches[t],
      a = e.router.looseRoutesById[i];
    if (n instanceof Promise) throw n;
    ((e.firstBadMatchIndex ??= t), Mt(e, e.router.getMatch(r), n));
    try {
      a.options.onError?.(n);
    } catch (t) {
      ((n = t), Mt(e, e.router.getMatch(r), n));
    }
    (e.updateMatch(
      r,
      (e) => (
        e._nonReactive.beforeLoadPromise?.resolve(),
        (e._nonReactive.beforeLoadPromise = void 0),
        e._nonReactive.loadPromise?.resolve(),
        {
          ...e,
          error: n,
          status: `error`,
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !e.preload && !Ue(n) && !p(n) && (e.serialError ??= n));
  },
  It = (e, t, n, r) => {
    if (r._nonReactive.pendingTimeout !== void 0) return;
    let i = n.options.pendingMs ?? e.router.options.defaultPendingMs;
    if (
      e.onReady &&
      !kt(e, t) &&
      (n.options.loader || n.options.beforeLoad || qt(n)) &&
      typeof i == `number` &&
      i !== 1 / 0 &&
      (n.options.pendingComponent ?? e.router.options?.defaultPendingComponent)
    ) {
      let t = setTimeout(() => {
        Dt(e);
      }, i);
      r._nonReactive.pendingTimeout = t;
    }
  },
  Lt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise) return;
    It(e, t, n, r);
    let i = () => {
      let n = e.router.getMatch(t);
      n.preload && (n.status === `redirected` || n.status === `notFound`) && Mt(e, n, n.error);
    };
    return r._nonReactive.beforeLoadPromise ? r._nonReactive.beforeLoadPromise.then(i) : i();
  },
  Rt = (e, t, n, r) => {
    let i = e.router.getMatch(t),
      a = i._nonReactive.loadPromise;
    i._nonReactive.loadPromise = oe(() => {
      (a?.resolve(), (a = void 0));
    });
    let { paramsError: o, searchError: s } = i;
    (o && Ft(e, n, o), s && Ft(e, n, s), It(e, t, r, i));
    let c = new AbortController(),
      l = !1,
      u = () => {
        l ||
          ((l = !0),
          e.updateMatch(t, (e) => ({
            ...e,
            isFetching: `beforeLoad`,
            fetchCount: e.fetchCount + 1,
            abortController: c,
          })));
      },
      d = () => {
        (i._nonReactive.beforeLoadPromise?.resolve(),
          (i._nonReactive.beforeLoadPromise = void 0),
          e.updateMatch(t, (e) => ({ ...e, isFetching: !1 })));
      };
    if (!r.options.beforeLoad) {
      e.router.batch(() => {
        (u(), d());
      });
      return;
    }
    i._nonReactive.beforeLoadPromise = oe();
    let f = { ...At(e, n, !1), ...i.__routeContext },
      { search: m, params: h, cause: g } = i,
      _ = kt(e, t),
      v = {
        search: m,
        abortController: c,
        params: h,
        preload: _,
        context: f,
        location: e.location,
        navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
        buildLocation: e.router.buildLocation,
        cause: _ ? `preload` : g,
        matches: e.matches,
        routeId: r.id,
        ...e.router.options.additionalContext,
      },
      y = (r) => {
        if (r === void 0) {
          e.router.batch(() => {
            (u(), d());
          });
          return;
        }
        ((Ue(r) || p(r)) && (u(), Ft(e, n, r)),
          e.router.batch(() => {
            (u(), e.updateMatch(t, (e) => ({ ...e, __beforeLoadContext: r })), d());
          }));
      },
      b;
    try {
      if (((b = r.options.beforeLoad(v)), le(b)))
        return (
          u(),
          b
            .catch((t) => {
              Ft(e, n, t);
            })
            .then(y)
        );
    } catch (t) {
      (u(), Ft(e, n, t));
    }
    y(b);
  },
  zt = (e, t) => {
    let { id: n, routeId: r } = e.matches[t],
      i = e.router.looseRoutesById[r],
      a = () => s(),
      o = () => Rt(e, n, t, i),
      s = () => {
        if (Nt(e, n)) return;
        let t = Lt(e, n, i);
        return le(t) ? t.then(o) : o();
      };
    return a();
  },
  Bt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r || (!n.options.head && !n.options.scripts && !n.options.headers)) return;
    let i = {
      ssr: e.router.options.ssr,
      matches: e.matches,
      match: r,
      params: r.params,
      loaderData: r.loaderData,
    };
    return Promise.all([n.options.head?.(i), n.options.scripts?.(i), n.options.headers?.(i)]).then(
      ([e, t, n]) => ({
        meta: e?.meta,
        links: e?.links,
        headScripts: e?.scripts,
        headers: n,
        scripts: t,
        styles: e?.styles,
      }),
    );
  },
  Vt = (e, t, n, r, i) => {
    let a = t[r - 1],
      { params: o, loaderDeps: s, abortController: c, cause: l } = e.router.getMatch(n),
      u = At(e, r),
      d = kt(e, n);
    return {
      params: o,
      deps: s,
      preload: !!d,
      parentMatchPromise: a,
      abortController: c,
      context: u,
      location: e.location,
      navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
      cause: d ? `preload` : l,
      route: i,
      ...e.router.options.additionalContext,
    };
  },
  Ht = async (e, t, n, r, i) => {
    try {
      let a = e.router.getMatch(n);
      try {
        Kt(i);
        let o = i.options.loader,
          s = typeof o == `function` ? o : o?.handler,
          c = s?.(Vt(e, t, n, r, i)),
          l = !!s && le(c);
        if (
          ((l ||
            i._lazyPromise ||
            i._componentsPromise ||
            i.options.head ||
            i.options.scripts ||
            i.options.headers ||
            a._nonReactive.minPendingPromise) &&
            e.updateMatch(n, (e) => ({ ...e, isFetching: `loader` })),
          s)
        ) {
          let t = l ? await c : c;
          (Mt(e, e.router.getMatch(n), t),
            t !== void 0 && e.updateMatch(n, (e) => ({ ...e, loaderData: t })));
        }
        i._lazyPromise && (await i._lazyPromise);
        let u = a._nonReactive.minPendingPromise;
        (u && (await u),
          i._componentsPromise && (await i._componentsPromise),
          e.updateMatch(n, (t) => ({
            ...t,
            error: void 0,
            context: At(e, r),
            status: `success`,
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (t) {
        let o = t;
        if (o?.name === `AbortError`) {
          if (a.abortController.signal.aborted) {
            (a._nonReactive.loaderPromise?.resolve(), (a._nonReactive.loaderPromise = void 0));
            return;
          }
          e.updateMatch(n, (t) => ({
            ...t,
            status: t.status === `pending` ? `success` : t.status,
            isFetching: !1,
            context: At(e, r),
          }));
          return;
        }
        let s = a._nonReactive.minPendingPromise;
        (s && (await s),
          p(t) && (await i.options.notFoundComponent?.preload?.()),
          Mt(e, e.router.getMatch(n), t));
        try {
          i.options.onError?.(t);
        } catch (t) {
          ((o = t), Mt(e, e.router.getMatch(n), t));
        }
        (!Ue(o) && !p(o) && (await Kt(i, [`errorComponent`])),
          e.updateMatch(n, (t) => ({
            ...t,
            error: o,
            context: At(e, r),
            status: `error`,
            isFetching: !1,
          })));
      }
    } catch (t) {
      let r = e.router.getMatch(n);
      (r && (r._nonReactive.loaderPromise = void 0), Mt(e, r, t));
    }
  },
  Ut = async (e, t, n) => {
    async function r(r, a, c, l, d) {
      let f = Date.now() - a.updatedAt,
        p = r
          ? (d.options.preloadStaleTime ?? e.router.options.defaultPreloadStaleTime ?? 3e4)
          : (d.options.staleTime ?? e.router.options.defaultStaleTime ?? 0),
        m = d.options.shouldReload,
        h = typeof m == `function` ? m(Vt(e, t, i, n, d)) : m,
        { status: g, invalid: _ } = l,
        v = f >= p && (!!e.forceStaleReload || l.cause === `enter` || (c !== void 0 && c !== l.id));
      ((o = g === `success` && (_ || (h ?? v))),
        (r && d.options.preload === !1) ||
          (o && !e.sync && u
            ? ((s = !0),
              (async () => {
                try {
                  await Ht(e, t, i, n, d);
                  let r = e.router.getMatch(i);
                  (r._nonReactive.loaderPromise?.resolve(),
                    r._nonReactive.loadPromise?.resolve(),
                    (r._nonReactive.loaderPromise = void 0),
                    (r._nonReactive.loadPromise = void 0));
                } catch (t) {
                  Ue(t) && (await e.router.navigate(t.options));
                }
              })())
            : g !== `success` || o
              ? await Ht(e, t, i, n, d)
              : Pt(e, i, n)));
    }
    let { id: i, routeId: a } = e.matches[n],
      o = !1,
      s = !1,
      c = e.router.looseRoutesById[a],
      l = c.options.loader,
      u =
        ((typeof l == `function` ? void 0 : l?.staleReloadMode) ??
          e.router.options.defaultStaleReloadMode) !== `blocking`;
    if (Nt(e, i)) {
      if (!e.router.getMatch(i)) return e.matches[n];
      Pt(e, i, n);
    } else {
      let t = e.router.getMatch(i),
        o = e.router.stores.matchesId.get()[n],
        s =
          ((o && e.router.stores.matchStores.get(o)) || null)?.routeId === a
            ? o
            : e.router.stores.matches.get().find((e) => e.routeId === a)?.id,
        l = kt(e, i);
      if (t._nonReactive.loaderPromise) {
        if (t.status === `success` && !e.sync && !t.preload && u) return t;
        await t._nonReactive.loaderPromise;
        let n = e.router.getMatch(i),
          a = n._nonReactive.error || n.error;
        (a && Mt(e, n, a), n.status === `pending` && (await r(l, t, s, n, c)));
      } else {
        let n = l && !e.router.stores.matchStores.has(i),
          a = e.router.getMatch(i);
        ((a._nonReactive.loaderPromise = oe()),
          n !== a.preload && e.updateMatch(i, (e) => ({ ...e, preload: n })),
          await r(l, t, s, a, c));
      }
    }
    let d = e.router.getMatch(i);
    (s ||
      (d._nonReactive.loaderPromise?.resolve(),
      d._nonReactive.loadPromise?.resolve(),
      (d._nonReactive.loadPromise = void 0)),
      clearTimeout(d._nonReactive.pendingTimeout),
      (d._nonReactive.pendingTimeout = void 0),
      s || (d._nonReactive.loaderPromise = void 0),
      (d._nonReactive.dehydrated = void 0));
    let f = s ? d.isFetching : !1;
    return f !== d.isFetching || d.invalid !== !1
      ? (e.updateMatch(i, (e) => ({ ...e, isFetching: f, invalid: !1 })), e.router.getMatch(i))
      : d;
  };
async function Wt(e) {
  let t = e,
    n = [];
  Ot(t.router) && Dt(t);
  let i;
  for (let e = 0; e < t.matches.length; e++) {
    try {
      let n = zt(t, e);
      le(n) && (await n);
    } catch (e) {
      if (Ue(e)) throw e;
      if (p(e)) i = e;
      else if (!t.preload) throw e;
      break;
    }
    if (t.serialError || t.firstBadMatchIndex != null) break;
  }
  let a = t.firstBadMatchIndex ?? t.matches.length,
    o = i && !t.preload ? jt(t, i) : void 0,
    s = i && t.preload ? 0 : o === void 0 ? a : Math.min(o + 1, a),
    c,
    l;
  for (let e = 0; e < s; e++) n.push(Ut(t, n, e));
  try {
    await Promise.all(n);
  } catch {
    let e = await Promise.allSettled(n);
    for (let t of e) {
      if (t.status !== `rejected`) continue;
      let e = t.reason;
      if (Ue(e)) throw e;
      p(e) ? (c ??= e) : (l ??= e);
    }
    if (l !== void 0) throw l;
  }
  let u = c ?? (i && !t.preload ? i : void 0),
    d = t.firstBadMatchIndex === void 0 ? t.matches.length - 1 : t.firstBadMatchIndex;
  if (!u && i && t.preload) return t.matches;
  if (u) {
    let e = jt(t, u);
    e === void 0 && r();
    let n = t.matches[e],
      i = t.router.looseRoutesById[n.routeId],
      a = t.router.options?.defaultNotFoundComponent;
    (!i.options.notFoundComponent && a && (i.options.notFoundComponent = a),
      (u.routeId = n.routeId));
    let o = n.routeId === t.router.routeTree.id;
    (t.updateMatch(n.id, (e) => ({
      ...e,
      ...(o
        ? { status: `success`, globalNotFound: !0, error: void 0 }
        : { status: `notFound`, error: u }),
      isFetching: !1,
    })),
      (d = e),
      await Kt(i, [`notFoundComponent`]));
  } else if (!t.preload) {
    let e = t.matches[0];
    e.globalNotFound ||
      (t.router.getMatch(e.id)?.globalNotFound &&
        t.updateMatch(e.id, (e) => ({ ...e, globalNotFound: !1, error: void 0 })));
  }
  if (t.serialError && t.firstBadMatchIndex !== void 0) {
    let e = t.router.looseRoutesById[t.matches[t.firstBadMatchIndex].routeId];
    await Kt(e, [`errorComponent`]);
  }
  for (let e = 0; e <= d; e++) {
    let { id: n, routeId: r } = t.matches[e],
      i = t.router.looseRoutesById[r];
    try {
      let e = Bt(t, n, i);
      if (e) {
        let r = await e;
        t.updateMatch(n, (e) => ({ ...e, ...r }));
      }
    } catch (e) {
      console.error(`Error executing head for route ${r}:`, e);
    }
  }
  let f = Dt(t);
  if ((le(f) && (await f), u)) throw u;
  if (t.serialError && !t.preload && !t.onReady) throw t.serialError;
  return t.matches;
}
function Gt(e, t) {
  let n = t.map((t) => e.options[t]?.preload?.()).filter(Boolean);
  if (n.length !== 0) return Promise.all(n);
}
function Kt(e, t = Jt) {
  !e._lazyLoaded &&
    e._lazyPromise === void 0 &&
    (e.lazyFn
      ? (e._lazyPromise = e.lazyFn().then((t) => {
          let { id: n, ...r } = t.options;
          (Object.assign(e.options, r), (e._lazyLoaded = !0), (e._lazyPromise = void 0));
        }))
      : (e._lazyLoaded = !0));
  let n = () =>
    e._componentsLoaded
      ? void 0
      : t === Jt
        ? (() => {
            if (e._componentsPromise === void 0) {
              let t = Gt(e, Jt);
              t
                ? (e._componentsPromise = t.then(() => {
                    ((e._componentsLoaded = !0), (e._componentsPromise = void 0));
                  }))
                : (e._componentsLoaded = !0);
            }
            return e._componentsPromise;
          })()
        : Gt(e, t);
  return e._lazyPromise ? e._lazyPromise.then(n) : n();
}
function qt(e) {
  for (let t of Jt) if (e.options[t]?.preload) return !0;
  return !1;
}
var Jt = [`component`, `errorComponent`, `pendingComponent`, `notFoundComponent`],
  Yt = `__TSR_index`,
  Xt = `popstate`,
  Zt = `beforeunload`;
function Qt(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      ((t = e.getLocation()), n.forEach((e) => e({ location: t, action: r })));
    },
    i = (n) => {
      (e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = nn(i.path, i.state);
          if (await n.blockerFn({ currentLocation: t, nextLocation: r, action: i.type })) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      let s = t.state[Yt];
      ((i = $t(s + 1, i)),
        a({
          task: () => {
            (e.pushState(n, i), r({ type: `PUSH` }));
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        }));
    },
    replace: (n, i, o) => {
      let s = t.state[Yt];
      ((i = $t(s, i)),
        a({
          task: () => {
            (e.replaceState(n, i), r({ type: `REPLACE` }));
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        }));
    },
    go: (t, n) => {
      a({
        task: () => {
          (e.go(t), i({ type: `GO`, index: t }));
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          (e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` }));
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          (e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` }));
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[Yt] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      let n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
  };
}
function $t(e, t) {
  t ||= {};
  let n = rn();
  return { ...t, key: n, __TSR_key: n, [Yt]: e };
}
function en(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = e?.createHref ?? ((e) => e),
    c =
      e?.parseLocation ??
      (() => nn(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = rn();
    t.history.replaceState({ [Yt]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _,
    v = () => {
      g &&
        ((C._ignoreSubscribers = !0),
        (g.isPush ? t.history.pushState : t.history.replaceState)(g.state, ``, g.href),
        (C._ignoreSubscribers = !1),
        (g = void 0),
        (_ = void 0),
        (u = void 0));
    },
    y = (e, t, n) => {
      let r = s(t);
      (_ || (u = l),
        (l = nn(t, n)),
        (g = { href: r, state: n, isPush: g?.isPush || e === `push` }),
        (_ ||= Promise.resolve().then(() => v())));
    },
    b = (e) => {
      ((l = c()), C.notify({ type: e }));
    },
    x = async () => {
      if (f) {
        f = !1;
        return;
      }
      let e = c(),
        n = e.state[Yt] - l.state[Yt],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        let n = a();
        if (typeof document < `u` && n.length) {
          for (let r of n)
            if (await r.blockerFn({ currentLocation: l, nextLocation: e, action: s })) {
              ((f = !0), t.history.go(1), C.notify(u));
              return;
            }
        }
      }
      ((l = c()), C.notify(u));
    },
    S = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return (e.preventDefault(), (e.returnValue = ``));
    },
    C = Qt({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => y(`push`, e, t),
      replaceState: (e, t) => y(`replace`, e, t),
      back: (e) => (e && (p = !0), (m = !0), t.history.back()),
      forward: (e) => {
        (e && (p = !0), (m = !0), t.history.forward());
      },
      go: (e) => {
        ((d = !0), t.history.go(e));
      },
      createHref: (e) => s(e),
      flush: v,
      destroy: () => {
        ((t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Zt, S, { capture: !0 }),
          t.removeEventListener(Xt, x));
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(Zt, S, { capture: !0 }),
    t.addEventListener(Xt, x),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e);
      return (C._ignoreSubscribers || b(`PUSH`), r);
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e);
      return (C._ignoreSubscribers || b(`REPLACE`), n);
    }),
    C
  );
}
function tn(e) {
  let t = e.replace(/[\x00-\x1f\x7f]/g, ``);
  return (t.startsWith(`//`) && (t = `/` + t.replace(/^\/+/, ``)), t);
}
function nn(e, t) {
  let n = tn(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`),
    a = rn();
  return {
    href: n,
    pathname: n.substring(0, r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t || { [Yt]: 0, key: a, __TSR_key: a },
  };
}
function rn() {
  return (Math.random() + 1).toString(36).substring(7);
}
function an(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function on(e, t) {
  let n = t,
    r = e;
  return {
    fromLocation: n,
    toLocation: r,
    pathChanged: n?.pathname !== r.pathname,
    hrefChanged: n?.href !== r.href,
    hashChanged: n?.hash !== r.hash,
  };
}
var sn = class {
    constructor(e, t) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this._scroll = { next: !0 }),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.routeBranchCache = new WeakMap()),
        (this.lightweightCache = new WeakMap()),
        (this.startTransition = (e) => e()),
        (this.update = (e) => {
          let t = this.options,
            n = this.basepath ?? t?.basepath ?? `/`,
            r = this.basepath === void 0,
            i = t?.rewrite;
          if (
            ((this.options = { ...t, ...e }),
            (this.isServer = this.options.isServer ?? typeof document > `u`),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = ye(this.options.pathParamsAllowedCharacters)),
            (!this.history || (this.options.history && this.options.history !== this.history)) &&
              (this.history = this.options.history ? this.options.history : en()),
            (this.origin = this.options.origin),
            (this.origin ||=
              window?.origin && window.origin !== `null` ? window.origin : `http://localhost`),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let e;
            ((this.resolvePathCache = Fe(1e3)), (e = this.buildRouteTree()), this.setRoutes(e));
          }
          if (!this.stores && this.latestLocation) {
            let e = this.getStoreConfig(this);
            ((this.batch = e.batch), (this.stores = wt(un(this.latestLocation), e)), mt(this));
          }
          let a = !1,
            o = this.options.basepath ?? `/`,
            s = this.options.rewrite;
          if (r || n !== o || i !== s) {
            this.basepath = o;
            let e = [],
              t = Se(o);
            (t && t !== `/` && e.push(xt({ basepath: o })),
              s && e.push(s),
              (this.rewrite = e.length === 0 ? void 0 : e.length === 1 ? e[0] : bt(e)),
              this.history && this.updateLatestLocation(),
              (a = !0));
          }
          (a && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < `u` &&
              `CSS` in window &&
              typeof window.CSS?.supports == `function` &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                `selector(:active-view-transition-type(a))`,
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
        }),
        (this.buildRouteTree = () => {
          let e = ae(this.routeTree, this.options.caseSensitive, (e, t) => {
            e.init({ originalIndex: t });
          });
          return (this.options.routeMasks && me(this.options.routeMasks, e.processedTree), e);
        }),
        (this.subscribe = (e, t) => {
          let n = { eventType: e, fn: t };
          return (
            this.subscribers.add(n),
            () => {
              this.subscribers.delete(n);
            }
          );
        }),
        (this.emit = (e) => {
          this.subscribers.forEach((t) => {
            t.eventType === e.type && t.fn(e);
          });
        }),
        (this.parseLocation = (e, t) => {
          let n = ({ pathname: e, search: n, hash: r, href: i, state: a }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
                let i = this.options.parseSearch(n),
                  o = this.options.stringifySearch(i);
                return {
                  href: e + o + r,
                  publicHref: e + o + r,
                  pathname: de(e).path,
                  external: !1,
                  searchStr: o,
                  search: pe(t?.search, i),
                  hash: de(r.slice(1)).path,
                  state: Re(t?.state, a),
                };
              }
              let o = new URL(i, this.origin),
                s = St(this.rewrite, o),
                c = this.options.parseSearch(s.search),
                l = this.options.stringifySearch(c);
              return (
                (s.search = l),
                {
                  href: s.href.replace(s.origin, ``),
                  publicHref: i,
                  pathname: de(s.pathname).path,
                  external: !!this.rewrite && s.origin !== this.origin,
                  searchStr: l,
                  search: pe(t?.search, c),
                  hash: de(s.hash.slice(1)).path,
                  state: Re(t?.state, a),
                }
              );
            },
            r = n(e),
            { __tempLocation: i, __tempKey: a } = r.state;
          if (i && (!a || a === this.tempLocationKey)) {
            let e = n(i);
            return (
              (e.state.key = r.state.key),
              (e.state.__TSR_key = r.state.__TSR_key),
              delete e.state.__tempLocation,
              { ...e, maskedLocation: r }
            );
          }
          return r;
        }),
        (this.resolvePathWithBase = (e, t) =>
          De({
            base: e,
            to: t.includes(`//`) ? Ne(t) : t,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (e, t, n) =>
          typeof e == `string`
            ? this.matchRoutesInternal({ pathname: e, search: t }, n)
            : this.matchRoutesInternal(e, t)),
        (this.getMatchedRoutes = (e) =>
          fn({ pathname: e, routesById: this.routesById, processedTree: this.processedTree })),
        (this.cancelMatch = (e) => {
          let t = this.getMatch(e);
          t &&
            (t.abortController.abort(),
            clearTimeout(t._nonReactive.pendingTimeout),
            (t._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((e) => {
            this.cancelMatch(e);
          }),
            this.stores.matchesId.get().forEach((e) => {
              if (this.stores.pendingMatchStores.has(e)) return;
              let t = this.stores.matchStores.get(e)?.get();
              t && (t.status === `pending` || t.isFetching === `loader`) && this.cancelMatch(e);
            }));
        }),
        (this.buildLocation = (e) => {
          let t = (t = {}) => {
              let n = t._fromLocation || this.pendingBuiltLocation || this.latestLocation,
                r = this.matchRoutesLightweight(n);
              t.from;
              let i = t.unsafeRelative === `path` ? n.pathname : (t.from ?? r.fullPath),
                a = t.to ? `${t.to}` : void 0,
                o = r.search,
                s = Object.assign(Object.create(null), r.params),
                c = a?.charCodeAt(0) === 47 ? `/` : this.resolvePathWithBase(i, `.`),
                l = a ? this.resolvePathWithBase(c, a) : c,
                u =
                  t.params === !1 || t.params === null
                    ? Object.create(null)
                    : (t.params ?? !0) === !0
                      ? s
                      : Object.assign(s, w(t.params, s)),
                d = this.routesByPath[E(l)],
                f;
              if (d) f = this.getRouteBranch(d);
              else if (l.includes(`$`)) f = [];
              else {
                let e = this.getMatchedRoutes(l);
                ((f = e.matchedRoutes),
                  this.options.notFoundRoute &&
                    (!e.foundRoute || (e.foundRoute.path !== `/` && e.routeParams[`**`])) &&
                    (f = [...f, this.options.notFoundRoute]));
              }
              if (f.length && T(u))
                for (let e of f) {
                  let t = e.options.params?.stringify ?? e.options.stringifyParams;
                  if (t)
                    try {
                      Object.assign(u, t(u));
                    } catch {}
                }
              let p = e.leaveParams
                  ? l
                  : de(
                      be({
                        path: l,
                        params: u,
                        decoder: this.pathParamsDecoder,
                        server: this.isServer,
                      }).interpolatedPath,
                    ).path,
                m = o;
              if (e._includeValidateSearch && this.options.search?.strict) {
                let e = {};
                (f.forEach((t) => {
                  if (t.options.validateSearch)
                    try {
                      Object.assign(e, dn(t.options.validateSearch, { ...e, ...m }));
                    } catch {}
                }),
                  (m = e));
              }
              ((m = pn({
                search: m,
                dest: t,
                destRoutes: f,
                _includeValidateSearch: e._includeValidateSearch,
              })),
                (m = pe(o, m)));
              let h = this.options.stringifySearch(m),
                g = t.hash === !0 ? n.hash : t.hash ? w(t.hash, n.hash) : void 0,
                _ = g ? `#${g}` : ``,
                v = t.state === !0 ? n.state : t.state ? w(t.state, n.state) : {};
              v = Re(n.state, v);
              let y = `${p}${h}${_}`,
                b,
                x,
                S = !1;
              if (this.rewrite) {
                let e = new URL(y, this.origin),
                  t = Ct(this.rewrite, e);
                ((b = e.href.replace(e.origin, ``)),
                  t.origin === this.origin
                    ? (x = t.pathname + t.search + t.hash)
                    : ((x = t.href), (S = !0)));
              } else ((b = ie(y)), (x = b));
              return {
                publicHref: x,
                href: b,
                pathname: p,
                search: m,
                searchStr: h,
                state: v,
                hash: g ?? ``,
                external: S,
                unmaskOnReload: t.unmaskOnReload,
              };
            },
            n = (n = {}, r) => {
              let i = t(n),
                a = r ? t(r) : void 0;
              if (!a) {
                let n = Object.create(null);
                if (this.options.routeMasks) {
                  let o = Le(i.pathname, this.processedTree);
                  if (o) {
                    Object.assign(n, o.rawParams);
                    let { from: i, params: s, ...c } = o.route,
                      l =
                        s === !1 || s === null
                          ? Object.create(null)
                          : (s ?? !0) === !0
                            ? n
                            : Object.assign(n, w(s, n));
                    ((r = { from: e.from, ...c, params: l }), (a = t(r)));
                  }
                }
              }
              return (a && (i.maskedLocation = a), i);
            };
          return e.mask ? n(e, { from: e.from, ...e.mask }) : n(e);
        }),
        (this.commitLocation = async ({ viewTransition: e, ignoreBlocker: t, ...n }) => {
          let r,
            i = () => {
              let e = [`key`, `__TSR_key`, `__TSR_index`, `__hashScrollIntoViewOptions`];
              e.forEach((e) => {
                n.state[e] = this.latestLocation.state[e];
              });
              let t = Te(n.state, this.latestLocation.state);
              return (
                e.forEach((e) => {
                  delete n.state[e];
                }),
                t
              );
            },
            a = E(this.latestLocation.href) === E(n.href),
            o = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = oe(() => {
              (o?.resolve(), (o = void 0));
            })),
            a && i())
          )
            this.load();
          else {
            let { maskedLocation: i, hashScrollIntoView: a, ...o } = n;
            (i &&
              ((o = {
                ...i,
                state: {
                  ...i.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...o,
                    search: o.searchStr,
                    state: {
                      ...o.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (o.state.__tempKey = this.tempLocationKey)),
              (o.state.__hashScrollIntoViewOptions =
                a ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = e),
              (r = n.replace ? `REPLACE` : `PUSH`),
              this.history[r === `REPLACE` ? `replace` : `push`](o.publicHref, o.state, {
                ignoreBlocker: t,
              }));
          }
          return (
            (this._scroll.next = n.resetScroll ?? !0),
            this.history.subscribers.size || this.load(r ? { action: { type: r } } : void 0),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          viewTransition: r,
          ignoreBlocker: i,
          href: a,
          ...o
        } = {}) => {
          if (a) {
            let t = this.history.location.state.__TSR_index,
              n = nn(a, { __TSR_index: e ? t : t + 1 }),
              r = new URL(n.pathname, this.origin);
            ((o.to = St(this.rewrite, r).pathname),
              (o.search = this.options.parseSearch(n.search)),
              (o.hash = n.hash.slice(1)));
          }
          let s = this.buildLocation({ ...o, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = s;
          let c = this.commitLocation({
            ...s,
            viewTransition: r,
            replace: e,
            resetScroll: t,
            hashScrollIntoView: n,
            ignoreBlocker: i,
          });
          return (
            queueMicrotask(() => {
              this.pendingBuiltLocation === s && (this.pendingBuiltLocation = void 0);
            }),
            c
          );
        }),
        (this.navigate = async ({ to: e, reloadDocument: t, href: n, publicHref: r, ...i }) => {
          let a = !1;
          if (n)
            try {
              (new URL(`${n}`), (a = !0));
            } catch {}
          if ((a && !t && (t = !0), t)) {
            if (e !== void 0 || !n) {
              let t = this.buildLocation({ to: e, ...i });
              ((n ??= t.publicHref), (r ??= t.publicHref));
            }
            let t = !a && r ? r : n;
            if (fe(t, this.protocolAllowlist)) return;
            if (!i.ignoreBlocker) {
              let e = this.history.getBlockers?.() ?? [];
              for (let t of e)
                if (
                  t?.blockerFn &&
                  (await t.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: `PUSH`,
                  }))
                )
                  return;
            }
            i.replace ? window.location.replace(t) : (window.location.href = t);
            return;
          }
          return this.buildAndCommitLocation({ ...i, href: n, to: e, _isNavigate: !0 });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          let e = this.matchRoutes(this.latestLocation),
            t = this.stores.cachedMatches.get().filter((t) => !e.some((e) => e.id === t.id));
          this.batch(() => {
            (this.stores.status.set(`pending`),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(e),
              this.stores.setCached(t));
          });
        }),
        (this.load = async (e) => {
          let t = e?.action?.type,
            n,
            r,
            i,
            a = this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            i = new Promise((o) => {
              this.startTransition(async () => {
                try {
                  (this.beforeLoad(), t && (this._scroll.hash = t === `PUSH` || t === `REPLACE`));
                  let n = this.latestLocation,
                    r = on(n, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() || this.emit({ type: `onBeforeNavigate`, ...r }),
                    this.emit({ type: `onBeforeLoad`, ...r }),
                    await Wt({
                      router: this,
                      sync: e?.sync,
                      forceStaleReload: a.href === n.href,
                      matches: this.stores.pendingMatches.get(),
                      location: n,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let e = null,
                              t = null,
                              n = null,
                              r = null;
                            this.batch(() => {
                              let i = this.stores.pendingMatches.get(),
                                a = i.length,
                                o = this.stores.matches.get();
                              e = a
                                ? o.filter((e) => !this.stores.pendingMatchStores.has(e.id))
                                : null;
                              let s = new Set();
                              for (let e of this.stores.pendingMatchStores.values())
                                e.routeId && s.add(e.routeId);
                              let c = new Set();
                              for (let e of this.stores.matchStores.values())
                                e.routeId && c.add(e.routeId);
                              ((t = a ? o.filter((e) => !s.has(e.routeId)) : null),
                                (n = a ? i.filter((e) => !c.has(e.routeId)) : null),
                                (r = a ? i.filter((e) => c.has(e.routeId)) : o),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                a &&
                                  (this.stores.setMatches(i),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...e.filter(
                                      (e) =>
                                        e.status !== `error` &&
                                        e.status !== `notFound` &&
                                        e.status !== `redirected`,
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (let [e, i] of [
                              [t, `onLeave`],
                              [n, `onEnter`],
                              [r, `onStay`],
                            ])
                              if (e)
                                for (let t of e) this.looseRoutesById[t.routeId].options[i]?.(t);
                          });
                        });
                      },
                    }));
                } catch (e) {
                  Ue(e)
                    ? ((n = e), this.navigate({ ...n.options, replace: !0, ignoreBlocker: !0 }))
                    : p(e) && (r = e);
                  let t = n
                    ? n.status
                    : r
                      ? 404
                      : this.stores.matches.get().some((e) => e.status === `error`)
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(t), this.stores.redirect.set(n));
                  });
                }
                (this.latestLoadPromise === i &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  o());
              });
            }),
              this.latestLoadPromise = i,
              await i;
            this.latestLoadPromise && i !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let o;
          (this.hasNotFoundMatch()
            ? (o = 404)
            : this.stores.matches.get().some((e) => e.status === `error`) && (o = 500),
            o !== void 0 && this.stores.statusCode.set(o));
        }),
        (this.startViewTransition = (e) => {
          let t = this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            t &&
              typeof document < `u` &&
              `startViewTransition` in document &&
              typeof document.startViewTransition == `function`)
          ) {
            let n;
            if (typeof t == `object` && this.isViewTransitionTypesSupported) {
              let r = this.latestLocation,
                i = this.stores.resolvedLocation.get(),
                a = typeof t.types == `function` ? t.types(on(r, i)) : t.types;
              if (a === !1) {
                e();
                return;
              }
              n = { update: e, types: a };
            } else n = e;
            document.startViewTransition(n);
          } else e();
        }),
        (this.updateMatch = (e, t) => {
          this.startTransition(() => {
            let n = this.stores.pendingMatchStores.get(e);
            if (n) {
              n.set(t);
              return;
            }
            let r = this.stores.matchStores.get(e);
            if (r) {
              r.set(t);
              return;
            }
            let i = this.stores.cachedMatchStores.get(e);
            if (i) {
              let n = t(i.get());
              n.status === `redirected`
                ? this.stores.cachedMatchStores.delete(e) &&
                  this.stores.cachedIds.set((t) => t.filter((t) => t !== e))
                : i.set(n);
            }
          });
        }),
        (this.getMatch = (e) =>
          this.stores.cachedMatchStores.get(e)?.get() ??
          this.stores.pendingMatchStores.get(e)?.get() ??
          this.stores.matchStores.get(e)?.get()),
        (this.invalidate = (e) => {
          let t = (t) =>
            (e?.filter?.(t) ?? !0)
              ? {
                  ...t,
                  invalid: !0,
                  ...(e?.forcePending || t.status === `error` || t.status === `notFound`
                    ? { status: `pending`, error: void 0 }
                    : void 0),
                }
              : t;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(t)),
                this.stores.setCached(this.stores.cachedMatches.get().map(t)),
                this.stores.setPending(this.stores.pendingMatches.get().map(t)));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: e?.sync })
          );
        }),
        (this.getParsedLocationHref = (e) => e.publicHref || `/`),
        (this.resolveRedirect = (e) => {
          let t = e.headers.get(`Location`);
          if (!e.options.href || e.options._builtLocation) {
            let t = e.options._builtLocation ?? this.buildLocation(e.options),
              n = this.getParsedLocationHref(t);
            ((e.options.href = n), e.headers.set(`Location`, n));
          } else if (t)
            try {
              let n = new URL(t);
              if (this.origin && n.origin === this.origin) {
                let t = n.pathname + n.search + n.hash;
                ((e.options.href = t), e.headers.set(`Location`, t));
              }
            } catch {}
          if (
            e.options.href &&
            !e.options._builtLocation &&
            fe(e.options.href, this.protocolAllowlist)
          )
            throw Error(`Redirect blocked: unsafe protocol`);
          return (e.headers.get(`Location`) || e.headers.set(`Location`, e.options.href), e);
        }),
        (this.clearCache = (e) => {
          let t = e?.filter;
          t === void 0
            ? this.stores.setCached([])
            : this.stores.setCached(this.stores.cachedMatches.get().filter((e) => !t(e)));
        }),
        (this.clearExpiredCache = () => {
          let e = Date.now();
          this.clearCache({
            filter: (t) => {
              let n = this.looseRoutesById[t.routeId];
              if (!n.options.loader) return !0;
              let r =
                (t.preload
                  ? (n.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
                  : (n.options.gcTime ?? this.options.defaultGcTime)) ?? 3e5;
              return t.status === `error` || e - t.updatedAt >= r;
            },
          });
        }),
        (this.loadRouteChunk = Kt),
        (this.preloadRoute = async (e) => {
          let t = e._builtLocation ?? this.buildLocation(e),
            n = this.matchRoutes(t, { throwOnError: !0, preload: !0, dest: e }),
            r = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()]),
            i = new Set([...r, ...this.stores.cachedIds.get()]),
            a = n.filter((e) => !i.has(e.id));
          if (a.length) {
            let e = this.stores.cachedMatches.get();
            this.stores.setCached([...e, ...a]);
          }
          try {
            return (
              (n = await Wt({
                router: this,
                matches: n,
                location: t,
                preload: !0,
                updateMatch: (e, t) => {
                  r.has(e) ? (n = n.map((n) => (n.id === e ? t(n) : n))) : this.updateMatch(e, t);
                },
              })),
              n
            );
          } catch (e) {
            if (Ue(e))
              return e.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...e.options, _fromLocation: t });
            p(e) || console.error(e);
            return;
          }
        }),
        (this.matchRoute = (e, t) => {
          let n = {
              ...e,
              to: e.to ? this.resolvePathWithBase(e.from || ``, e.to) : void 0,
              params: e.params || {},
              leaveParams: !0,
            },
            r = this.buildLocation(n);
          if (t?.pending && this.stores.status.get() !== `pending`) return !1;
          let i = (t?.pending === void 0 ? !this.stores.isLoading.get() : t.pending)
              ? this.latestLocation
              : this.stores.resolvedLocation.get() || this.stores.location.get(),
            a = Ie(
              r.pathname,
              t?.caseSensitive ?? !1,
              t?.fuzzy ?? !1,
              i.pathname,
              this.processedTree,
            );
          return !a || (e.params && !Te(a.rawParams, e.params, { partial: !0 }))
            ? !1
            : (t?.includeSearch ?? !0)
              ? Te(i.search, r.search, { partial: !0 })
                ? a.rawParams
                : !1
              : a.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches.get().some((e) => e.status === `notFound` || e.globalNotFound)),
        (this.getStoreConfig = t),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? `fuzzy`,
          stringifySearch: e.stringifySearch ?? gt,
          parseSearch: e.parseSearch ?? ht,
          protocolAllowlist: e.protocolAllowlist ?? he,
        }),
        typeof document < `u` && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: t, processedTree: n }) {
      ((this.routesById = e), (this.routesByPath = t), (this.processedTree = n));
      let r = this.options.notFoundRoute;
      r && (r.init({ originalIndex: 99999999999 }), (this.routesById[r.id] = r));
    }
    getRouteBranch(e) {
      let t = this.routeBranchCache.get(e);
      return (t || ((t = Pe(e)), this.routeBranchCache.set(e, t)), t);
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(e) {
      return e?.id
        ? (e.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(e, t) {
      let n = this.getMatchedRoutes(e.pathname),
        { foundRoute: r, routeParams: i } = n,
        { matchedRoutes: a } = n,
        o = !1;
      (r ? r.path !== `/` && i[`**`] : E(e.pathname)) &&
        (this.options.notFoundRoute ? (a = [...a, this.options.notFoundRoute]) : (o = !0));
      let s = o ? hn(this.options.notFoundMode, a) : void 0,
        c = Array(a.length),
        l = new Map();
      for (let e of this.stores.matchStores.values()) e.routeId && l.set(e.routeId, e.get());
      for (let n = 0; n < a.length; n++) {
        let r = a[n],
          o = c[n - 1],
          u,
          d,
          f;
        {
          let n = o?.search ?? e.search,
            i = o?._strictSearch ?? void 0;
          try {
            let e = dn(r.options.validateSearch, { ...n }) ?? void 0;
            ((u = { ...n, ...e }), (d = { ...i, ...e }), (f = void 0));
          } catch (e) {
            let r = e;
            if ((e instanceof cn || (r = new cn(e.message, { cause: e })), t?.throwOnError))
              throw r;
            ((u = n), (d = {}), (f = r));
          }
        }
        let m = r.options.loaderDeps?.({ search: u }) ?? ``,
          h = m ? JSON.stringify(m) : ``,
          { interpolatedPath: g, usedParams: _ } = be({
            path: r.fullPath,
            params: i,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          v = r.id + g + h,
          y = this.getMatch(v),
          b = l.get(r.id),
          x = y?._strictParams ?? _,
          S;
        if (!y)
          try {
            gn(r, x);
          } catch (e) {
            if (((S = p(e) || Ue(e) ? e : new ln(e.message, { cause: e })), t?.throwOnError))
              throw S;
          }
        Object.assign(i, x);
        let C = b ? `stay` : `enter`,
          ee;
        if (y)
          ee = {
            ...y,
            cause: C,
            params: b?.params ?? i,
            _strictParams: x,
            search: pe(b ? b.search : y.search, u),
            _strictSearch: d,
          };
        else {
          let e =
            r.options.loader || r.options.beforeLoad || r.lazyFn || qt(r) ? `pending` : `success`;
          ee = {
            id: v,
            ssr: r.options.ssr,
            index: n,
            routeId: r.id,
            params: b?.params ?? i,
            _strictParams: x,
            pathname: g,
            updatedAt: Date.now(),
            search: b ? pe(b.search, u) : u,
            _strictSearch: d,
            searchError: void 0,
            status: e,
            isFetching: !1,
            error: void 0,
            paramsError: S,
            __routeContext: void 0,
            _nonReactive: { loadPromise: oe() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: C,
            loaderDeps: b ? Re(b.loaderDeps, m) : m,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: r.options.staticData || {},
            fullPath: r.fullPath,
          };
        }
        (t?.preload || (ee.globalNotFound = s === r.id), (ee.searchError = f));
        let te = this.getParentContext(o);
        ((ee.context = { ...te, ...ee.__routeContext, ...ee.__beforeLoadContext }), (c[n] = ee));
      }
      for (let t = 0; t < c.length; t++) {
        let n = c[t],
          r = this.looseRoutesById[n.routeId],
          a = this.getMatch(n.id),
          o = l.get(n.routeId);
        if (((n.params = o ? pe(o.params, i) : i), !a)) {
          let i = c[t - 1],
            a = this.getParentContext(i);
          if (r.options.context) {
            let t = {
              deps: n.loaderDeps,
              params: n.params,
              context: a ?? {},
              location: e,
              navigate: (t) => this.navigate({ ...t, _fromLocation: e }),
              buildLocation: this.buildLocation,
              cause: n.cause,
              abortController: n.abortController,
              preload: !!n.preload,
              matches: c,
              routeId: r.id,
            };
            n.__routeContext = r.options.context(t) ?? void 0;
          }
          n.context = { ...a, ...n.__routeContext, ...n.__beforeLoadContext };
        }
      }
      return c;
    }
    matchRoutesLightweight(e) {
      let t = ue(this.stores.matchesId.get()),
        n = this.lightweightCache.get(e);
      if (n && n[0] === t) return n[1];
      let { matchedRoutes: r, routeParams: i } = this.getMatchedRoutes(e.pathname),
        a = ue(r),
        o = { ...e.search };
      for (let e of r)
        try {
          Object.assign(o, dn(e.options.validateSearch, o));
        } catch {}
      let s = t && this.stores.matchStores.get(t)?.get(),
        c = s && s.routeId === a.id && s.pathname === e.pathname,
        l;
      if (c) l = s.params;
      else {
        let e = Object.assign(Object.create(null), i);
        for (let t of r)
          try {
            gn(t, e);
          } catch {}
        l = e;
      }
      let u = { matchedRoutes: r, fullPath: a.fullPath, search: o, params: l };
      return (this.lightweightCache.set(e, [t, u]), u);
    }
  },
  cn = class extends Error {},
  ln = class extends Error {};
function un(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: `idle`,
    resolvedLocation: void 0,
    location: e,
    matches: [],
    statusCode: 200,
  };
}
function dn(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new cn(`Async validation not supported`);
    if (n.issues) throw new cn(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function fn({ pathname: e, routesById: t, processedTree: n }) {
  let r = Object.create(null),
    i = E(e),
    a,
    o = _e(i, n, !0);
  return (
    o && ((a = o.route), Object.assign(r, o.rawParams)),
    { matchedRoutes: o?.branch || [t.__root__], routeParams: r, foundRoute: a }
  );
}
function pn({ search: e, dest: t, destRoutes: n, _includeValidateSearch: r }) {
  return mn(n)(e, t, r ?? !1);
}
function mn(e) {
  let t,
    n,
    r = [];
  for (let t of e) {
    let e = t.options;
    `search` in e
      ? e.search?.middlewares && r.push(...e.search.middlewares)
      : (e.preSearchFilters || e.postSearchFilters) &&
        r.push(({ search: t, next: n }) => {
          let r = n(e.preSearchFilters ? e.preSearchFilters.reduce((e, t) => t(e), t) : t);
          return e.postSearchFilters ? e.postSearchFilters.reduce((e, t) => t(e), r) : r;
        });
    let i = e.validateSearch;
    i &&
      r.push(({ search: e, next: t, meta: r }) => {
        let a = t(e);
        if (n)
          try {
            let e = dn(i, a);
            if (r && e) for (let t in e) t in a || (r.defaulted ||= new Map()).set(t, e[t]);
            return { ...a, ...e };
          } catch {}
        return a;
      });
  }
  let i = (e, n, a) => {
    if (e >= r.length) {
      if (!t.search) return {};
      if (t.search === !0) return n;
      let e = w(t.search, n);
      return (a && (a.explicit = e), e);
    }
    return r[e]({
      search: n,
      next: (t, n) => {
        if (n) {
          let n = a || {};
          return { search: i(e + 1, t, n), meta: n };
        }
        return i(e + 1, t, a);
      },
      meta: a,
    });
  };
  return function (e, r, a) {
    return ((t = r), (n = a), i(0, e));
  };
}
function hn(e, t) {
  if (e !== `root`)
    for (let e = t.length - 1; e >= 0; e--) {
      let n = t[e];
      if (n.children) return n.id;
    }
  return yt;
}
function gn(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams;
  if (n) {
    let e = n(t);
    if (e === !1) throw Error(`Route params.parse returned false for a matched route`);
    Object.assign(t, e);
  }
}
var _n = Symbol.for(`TSR_DEFERRED_PROMISE`);
function vn(e, t) {
  let n = e;
  return n[_n]
    ? n
    : ((n[_n] = { status: `pending` }),
      n
        .then((e) => {
          ((n[_n].status = `success`), (n[_n].data = e));
        })
        .catch((e) => {
          ((n[_n].status = `error`),
            (n[_n].error = { data: (t?.serializeError ?? an)(e), __isServerError: !0 }));
        }),
      n);
}
function yn(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function bn(e) {
  return e?.scriptFormat ?? `module`;
}
function xn(e, t, n) {
  let r = Sn(t),
    i = yn(n, `script`) ?? r.crossOrigin;
  return {
    ...(bn(e) === `iife` ? { rel: `preload`, as: `script` } : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function Sn(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function Cn(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  let n = new Set();
  for (let r of t) {
    let t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function wn(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
var Tn = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          this.originalIndex = e.originalIndex;
          let t = this.options,
            n = !t?.path && !t?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = yt) : this.parentRoute || r());
          let i = n ? yt : t?.path;
          i && i !== `/` && (i = xe(i));
          let a = t?.id || i,
            o = n ? yt : ke([this.parentRoute.id === `__root__` ? `` : this.parentRoute.id, a]);
          (i === `__root__` && (i = `/`), o !== `__root__` && (o = ke([`/`, o])));
          let s = o === `__root__` ? `/` : ke([this.parentRoute.fullPath, i]);
          ((this._path = i), (this._id = o), (this._fullPath = s), (this._to = E(s)));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => ze({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  En = class extends Tn {
    constructor(e) {
      super(e);
    }
  },
  Dn = b({
    key: `$TSS/serverfn`,
    test: (e) => (typeof e != `function` || !(f in e) ? !1 : !!e[f]),
    toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
    fromSerializable: ({ functionId: e }) => u(e),
  });
function On(e) {
  return e.replaceAll(`\0`, `/`).replaceAll(`�`, `/`);
}
function kn(e, t) {
  ((e.id = t.i),
    (e.__beforeLoadContext = t.b),
    (e.loaderData = t.l),
    (e.status = t.s),
    (e.ssr = t.ssr),
    (e.updatedAt = t.u),
    (e.error = t.e),
    t.g !== void 0 && (e.globalNotFound = t.g));
}
async function An(e) {
  window.$_TSR || r();
  let t = e.options.serializationAdapters;
  if (t?.length) {
    let e = new Map();
    (t.forEach((t) => {
      e.set(t.key, t.fromSerializable);
    }),
      (window.$_TSR.t = e),
      window.$_TSR.buffer.forEach((e) => e()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || r());
  let n = window.$_TSR.router;
  (n.matches.forEach((e) => {
    e.i = On(e.i);
  }),
    (n.lastMatchId &&= On(n.lastMatchId)));
  let { manifest: i, dehydratedData: a, lastMatchId: o } = n;
  e.ssr = { manifest: i };
  let s = document.querySelector(`meta[property="csp-nonce"]`)?.content;
  ((e.options.ssr = { nonce: s }), await e.options.hydrate?.(a));
  let c = e.matchRoutes(e.stores.location.get()),
    l = Promise.all(c.map((t) => e.loadRouteChunk(e.looseRoutesById[t.routeId])));
  function u(t) {
    let n = e.looseRoutesById[t.routeId].options.pendingMinMs ?? e.options.defaultPendingMinMs;
    if (n) {
      let r = oe();
      ((t._nonReactive.minPendingPromise = r),
        (t._forcePending = !0),
        setTimeout(() => {
          (r.resolve(),
            e.updateMatch(
              t.id,
              (e) => ((e._nonReactive.minPendingPromise = void 0), { ...e, _forcePending: void 0 }),
            ));
        }, n));
    }
  }
  function d(t) {
    let n = e.looseRoutesById[t.routeId];
    n && (n.options.ssr = t.ssr);
  }
  let f;
  (c.forEach((e) => {
    let t = n.matches.find((t) => t.i === e.id);
    if (!t) {
      ((e._nonReactive.dehydrated = !1), (e.ssr = !1), d(e));
      return;
    }
    (kn(e, t),
      d(e),
      (e._nonReactive.dehydrated = e.ssr !== !1),
      (e.ssr === `data-only` || e.ssr === !1) && f === void 0 && ((f = e.index), u(e)));
  }),
    e.stores.setMatches(c));
  let m = e.stores.matches.get(),
    h = e.stores.location.get();
  await Promise.all(
    m.map(async (t) => {
      try {
        let n = e.looseRoutesById[t.routeId],
          r = m[t.index - 1]?.context ?? e.options.context;
        if (n.options.context) {
          let i = {
            deps: t.loaderDeps,
            params: t.params,
            context: r ?? {},
            location: h,
            navigate: (t) => e.navigate({ ...t, _fromLocation: h }),
            buildLocation: e.buildLocation,
            cause: t.cause,
            abortController: t.abortController,
            preload: !1,
            matches: c,
            routeId: n.id,
          };
          t.__routeContext = n.options.context(i) ?? void 0;
        }
        t.context = { ...r, ...t.__routeContext, ...t.__beforeLoadContext };
        let i = {
            ssr: e.options.ssr,
            matches: m,
            match: t,
            params: t.params,
            loaderData: t.loaderData,
          },
          a = await n.options.head?.(i),
          o = await n.options.scripts?.(i);
        ((t.meta = a?.meta),
          (t.links = a?.links),
          (t.headScripts = a?.scripts),
          (t.styles = a?.styles),
          (t.scripts = o));
      } catch (e) {
        if (p(e))
          ((t.error = { isNotFound: !0 }),
            console.error(`NotFound error during hydration for routeId: ${t.routeId}`, e));
        else
          throw (
            (t.error = e),
            console.error(`Error during hydration for route ${t.routeId}:`, e),
            e
          );
      }
    }),
  );
  let g = c[c.length - 1].id !== o;
  if (!c.some((e) => e.ssr === !1) && !g)
    return (
      c.forEach((e) => {
        e._nonReactive.dehydrated = void 0;
      }),
      e.stores.resolvedLocation.set(e.stores.location.get()),
      l
    );
  let _ = Promise.resolve()
    .then(() => e.load())
    .catch((e) => {
      console.error(`Error during router hydration:`, e);
    });
  if (g) {
    let t = c[1];
    (t || r(),
      u(t),
      (t._displayPending = !0),
      (t._nonReactive.displayPendingPromise = _),
      _.then(() => {
        e.batch(() => {
          (e.stores.status.get() === `pending` &&
            (e.stores.status.set(`idle`), e.stores.resolvedLocation.set(e.stores.location.get())),
            e.updateMatch(t.id, (e) => ({
              ...e,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return l;
}
var k = n(t(), 1),
  A = a();
function jn({ promise: e }) {
  if (je) return je(e);
  let t = vn(e);
  if (t[_n].status === `pending`) throw t;
  if (t[_n].status === `error`) throw t[_n].error;
  return t[_n].data;
}
function Mn(e) {
  let t = (0, A.jsx)(Nn, { ...e });
  return e.fallback ? (0, A.jsx)(k.Suspense, { fallback: e.fallback, children: t }) : t;
}
function Nn(e) {
  let t = jn(e);
  return e.children(t);
}
function Pn(e) {
  let t = e.errorComponent ?? In;
  return (0, A.jsx)(Fn, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? k.createElement(t, { error: n, reset: r }) : e.children,
  });
}
var Fn = class extends k.Component {
  constructor(...e) {
    (super(...e), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey();
    return t.error && t.resetKey !== n ? { resetKey: n, error: null } : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(e, t) {
    this.props.onCatch && this.props.onCatch(e, t);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function In({ error: e }) {
  let [t, n] = k.useState(!1);
  return (0, A.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, A.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, A.jsx)(`strong`, { style: { fontSize: `1rem` }, children: `Something went wrong!` }),
          (0, A.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, A.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, A.jsx)(`div`, {
            children: (0, A.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e.message ? (0, A.jsx)(`code`, { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
var Ln = k.createContext(void 0),
  Rn = k.createContext(void 0),
  zn = ((e) => (
    (e[(e.None = 0)] = `None`),
    (e[(e.Mutable = 1)] = `Mutable`),
    (e[(e.Watching = 2)] = `Watching`),
    (e[(e.RecursedCheck = 4)] = `RecursedCheck`),
    (e[(e.Recursed = 8)] = `Recursed`),
    (e[(e.Dirty = 16)] = `Dirty`),
    (e[(e.Pending = 32)] = `Pending`),
    e
  ))(zn || {});
function Bn({ update: e, notify: t, unwatched: n }) {
  return { link: r, unlink: i, propagate: a, checkDirty: o, shallowPropagate: s };
  function r(e, t, n) {
    let r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    let i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      ((i.version = n), (t.depsTail = i));
      return;
    }
    let a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    let o =
      (t.depsTail =
      e.subsTail =
        { version: n, dep: e, sub: t, prevDep: r, nextDep: i, prevSub: a, nextSub: void 0 });
    (i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o));
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs;
        if (t !== void 0) {
          let i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0;)
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      let o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs;
          (e.nextSub !== void 0 && s(e), (a = !0));
        }
      } else if ((c & 33) == 33) {
        ((t.nextSub !== void 0 || t.prevSub !== void 0) && (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i);
        continue;
      }
      if (!a) {
        let e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--;) {
        let i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            (o && s(i), (n = t.sub));
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        let c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0;) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function Vn(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var Hn = [],
  Un = 0,
  {
    link: Wn,
    unlink: Gn,
    propagate: Kn,
    checkDirty: qn,
    shallowPropagate: Jn,
  } = Bn({
    update(e) {
      return e._update();
    },
    notify(e) {
      ((Hn[Xn++] = e), (e.flags &= ~zn.Watching));
    },
    unwatched(e) {
      e.depsTail !== void 0 && ((e.depsTail = void 0), (e.flags = zn.Mutable | zn.Dirty), er(e));
    },
  }),
  Yn = 0,
  Xn = 0,
  Zn,
  Qn = 0;
function $n(e) {
  try {
    (++Qn, e());
  } finally {
    --Qn || tr();
  }
}
function er(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0;) n = Gn(n, e);
}
function tr() {
  if (!(Qn > 0)) {
    for (; Yn < Xn;) {
      let e = Hn[Yn];
      ((Hn[Yn++] = void 0), e.notify());
    }
    ((Yn = 0), (Xn = 0));
  }
}
function nr(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: n ? zn.None : zn.Mutable,
      get() {
        return (Zn !== void 0 && Wn(i, Zn, Un), i._snapshot);
      },
      subscribe(e) {
        let t = Vn(e),
          n = { current: !1 },
          r = rr(() => {
            (i.get(), n.current ? t.next?.(i._snapshot) : (n.current = !0));
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        let a = Zn,
          o = t?.compare ?? Object.is;
        if (n) ((Zn = i), ++Un, (i.depsTail = void 0));
        else if (e === void 0) return !1;
        n && (i.flags = zn.Mutable | zn.RecursedCheck);
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          ((Zn = a), n && (i.flags &= ~zn.RecursedCheck), er(i));
        }
      },
    };
  return (
    n
      ? ((i.flags = zn.Mutable | zn.Dirty),
        (i.get = function () {
          let e = i.flags;
          if (e & zn.Dirty || (e & zn.Pending && qn(i.deps, i))) {
            if (i._update()) {
              let e = i.subs;
              e !== void 0 && Jn(e);
            }
          } else e & zn.Pending && (i.flags = e & ~zn.Pending);
          return (Zn !== void 0 && Wn(i, Zn, Un), i._snapshot);
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (Kn(e), Jn(e), tr());
          }
        }),
    i
  );
}
function rr(e) {
  let t = () => {
      let t = Zn;
      ((Zn = n), ++Un, (n.depsTail = void 0), (n.flags = zn.Watching | zn.RecursedCheck));
      try {
        return e();
      } finally {
        ((Zn = t), (n.flags &= ~zn.RecursedCheck), er(n));
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: zn.Watching | zn.RecursedCheck,
      notify() {
        let e = this.flags;
        e & zn.Dirty || (e & zn.Pending && qn(this.deps, this)) ? t() : (this.flags = zn.Watching);
      },
      stop() {
        ((this.flags = zn.None), (this.depsTail = void 0), er(this));
      },
    };
  return (t(), n);
}
var ir = {
  get() {},
  subscribe() {
    return { unsubscribe() {} };
  },
};
function ar(e, t) {
  let n = k.useRef();
  return (r) => {
    let i = e?.select ? e.select(r) : r;
    return (e?.structuralSharing ?? t.options.defaultStructuralSharing)
      ? (n.current = Re(n.current, i))
      : i;
  };
}
function or(e) {
  let t = Ae(),
    n = k.useContext(e.from ? Rn : Ln),
    i = e.from ? t.stores.getRouteMatchStore(e.from) : t.stores.matchStores.get(n),
    a = ar(e, t),
    o = D(i ?? ir, (e) => (e ? a(e) : ir));
  if (o !== ir) return o;
  (e.shouldThrow ?? !0) && r();
}
function sr(e) {
  return or({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function cr(e) {
  let { select: t, ...n } = e;
  return or({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function lr(e) {
  return or({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      let n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function ur(e) {
  return or({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function dr(e) {
  let t = Ae();
  return k.useCallback((n) => t.navigate({ ...n, from: n.from ?? e?.from }), [e?.from, t]);
}
function fr(e) {
  return or({ ...e, select: (t) => (e.select ? e.select(t.context) : t.context) });
}
var pr = class extends Tn {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        or({ select: e?.select, from: this.id, structuralSharing: e?.structuralSharing })),
      (this.useRouteContext = (e) => fr({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        ur({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useParams = (e) =>
        lr({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (e) => cr({ ...e, from: this.id })),
      (this.useLoaderData = (e) => sr({ ...e, from: this.id })),
      (this.useNavigate = () => dr({ from: this.fullPath })),
      (this.Link = k.forwardRef((e, t) => (0, A.jsx)(Me, { ref: t, from: this.fullPath, ...e }))));
  }
};
function mr(e) {
  return new pr(e);
}
function hr() {
  return (e) => _r(e);
}
var gr = class extends En {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        or({ select: e?.select, from: this.id, structuralSharing: e?.structuralSharing })),
      (this.useRouteContext = (e) => fr({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        ur({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useParams = (e) =>
        lr({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (e) => cr({ ...e, from: this.id })),
      (this.useLoaderData = (e) => sr({ ...e, from: this.id })),
      (this.useNavigate = () => dr({ from: this.fullPath })),
      (this.Link = k.forwardRef((e, t) => (0, A.jsx)(Me, { ref: t, from: this.fullPath, ...e }))));
  }
};
function _r(e) {
  return new gr(e);
}
function vr(e) {
  return new yr(e, { silent: !0 }).createRoute;
}
var yr = class {
  constructor(e, t) {
    ((this.path = e),
      (this.createRoute = (e) => {
        let t = mr(e);
        return ((t.isRoot = !1), t);
      }),
      (this.silent = t?.silent));
  }
};
function br(e, t) {
  let n,
    r,
    i,
    a,
    o = () => (
      (n ||= e()
        .then((e) => {
          ((n = void 0), (r = e[t ?? `default`]));
        })
        .catch((e) => {
          if (
            ((i = e),
            ce(i) && i instanceof Error && typeof window < `u` && typeof sessionStorage < `u`)
          ) {
            let e = `tanstack_router_reload:${i.message}`;
            sessionStorage.getItem(e) || (sessionStorage.setItem(e, `1`), (a = !0));
          }
        })),
      n
    ),
    s = function (e) {
      if (a) throw (window.location.reload(), new Promise(() => {}));
      if (i) throw i;
      if (!r)
        if (je) je(o());
        else throw o();
      return k.createElement(r, e);
    };
  return ((s.preload = o), s);
}
function xr(e) {
  let t = Ae(),
    n = `not-found-${D(t.stores.location, (e) => e.pathname)}-${D(t.stores.status, (e) => e)}`;
  return (0, A.jsx)(Pn, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (p(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if (p(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function Sr() {
  return (0, A.jsx)(`p`, { children: `Not Found` });
}
function Cr(e) {
  return (0, A.jsx)(A.Fragment, { children: e.children });
}
function wr(e, t, n) {
  return t.options.notFoundComponent
    ? (0, A.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, A.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, A.jsx)(Sr, {});
}
var Tr = (e, t) => e.routeId === t.routeId && e._displayPending === t._displayPending,
  Er = (e, t) => e[0] === t[0] && e[1] === t[1],
  Dr = k.memo(function ({ matchId: e }) {
    let t = Ae(),
      n = t.stores.matchStores.get(e);
    n || r();
    let i = D(t.stores.loadedAt, (e) => e),
      a = D(n, (e) => e, Tr);
    return (0, A.jsx)(Or, {
      router: t,
      matchId: e,
      resetKey: i,
      matchState: k.useMemo(() => {
        let e = a.routeId,
          n = t.routesById[e].parentRoute?.id;
        return { routeId: e, ssr: a.ssr, _displayPending: a._displayPending, parentRouteId: n };
      }, [a._displayPending, a.routeId, a.ssr, t.routesById]),
    });
  });
function Or({ router: e, matchId: t, resetKey: n, matchState: r }) {
  let i = e.routesById[r.routeId],
    a = i.options.pendingComponent ?? e.options.defaultPendingComponent,
    o = a ? (0, A.jsx)(a, {}) : null,
    s = i.options.errorComponent ?? e.options.defaultErrorComponent,
    c = i.options.onCatch ?? e.options.defaultOnCatch,
    l = i.isRoot
      ? (i.options.notFoundComponent ?? e.options.notFoundRoute?.options.component)
      : i.options.notFoundComponent,
    u = r.ssr === !1 || r.ssr === `data-only`,
    d =
      (!i.isRoot || i.options.wrapInSuspense || u) &&
      (i.options.wrapInSuspense ?? a ?? (i.options.errorComponent?.preload || u))
        ? k.Suspense
        : Cr,
    f = s ? Pn : Cr,
    m = l ? xr : Cr;
  return (0, A.jsxs)(i.isRoot ? (i.options.shellComponent ?? Cr) : Cr, {
    children: [
      (0, A.jsx)(Ln.Provider, {
        value: t,
        children: (0, A.jsx)(d, {
          fallback: o,
          children: (0, A.jsx)(f, {
            getResetKey: () => n,
            errorComponent: s || In,
            onCatch: (e, t) => {
              if (p(e)) throw ((e.routeId ??= r.routeId), e);
              c?.(e, t);
            },
            children: (0, A.jsx)(m, {
              fallback: (e) => {
                if (
                  ((e.routeId ??= r.routeId),
                  !l || (e.routeId && e.routeId !== r.routeId) || (!e.routeId && !i.isRoot))
                )
                  throw e;
                return k.createElement(l, e);
              },
              children:
                u || r._displayPending
                  ? (0, A.jsx)(ge, { fallback: o, children: (0, A.jsx)(Ar, { matchId: t }) })
                  : (0, A.jsx)(Ar, { matchId: t }),
            }),
          }),
        }),
      }),
      r.parentRouteId === `__root__`
        ? (0, A.jsxs)(A.Fragment, {
            children: [(0, A.jsx)(kr, {}), (e.options.scrollRestoration, null)],
          })
        : null,
    ],
  });
}
function kr() {
  let e = Ae(),
    t = k.useRef();
  return (
    ve(() => {
      let n = e.stores.resolvedLocation.get(),
        r = t.current;
      (n &&
        (!r || r.href !== n.href) &&
        e.emit({ type: `onRendered`, ...on(e.stores.location.get(), r ?? n) }),
        (t.current = n));
    }, [D(e.stores.resolvedLocation, (e) => e?.state.__TSR_key), e]),
    null
  );
}
var Ar = k.memo(function ({ matchId: e }) {
    let t = Ae(),
      n = (e, n) => t.getMatch(e.id)?._nonReactive[n] ?? e._nonReactive[n],
      i = t.stores.matchStores.get(e);
    i || r();
    let a = D(i, (e) => e),
      o = a.routeId,
      s = t.routesById[o],
      c = k.useMemo(() => {
        let e = (t.routesById[o].options.remountDeps ?? t.options.defaultRemountDeps)?.({
          routeId: o,
          loaderDeps: a.loaderDeps,
          params: a._strictParams,
          search: a._strictSearch,
        });
        return e ? JSON.stringify(e) : void 0;
      }, [
        o,
        a.loaderDeps,
        a._strictParams,
        a._strictSearch,
        t.options.defaultRemountDeps,
        t.routesById,
      ]),
      l = k.useMemo(() => {
        let e = s.options.component ?? t.options.defaultComponent;
        return e ? (0, A.jsx)(e, {}, c) : (0, A.jsx)(jr, {});
      }, [c, s.options.component, t.options.defaultComponent]);
    if (a._displayPending) throw n(a, `displayPendingPromise`);
    if (a._forcePending) throw n(a, `minPendingPromise`);
    if (a.status === `pending`) {
      let e = s.options.pendingMinMs ?? t.options.defaultPendingMinMs;
      if (e) {
        let n = t.getMatch(a.id);
        if (n && !n._nonReactive.minPendingPromise) {
          let t = oe();
          ((n._nonReactive.minPendingPromise = t),
            setTimeout(() => {
              (t.resolve(), (n._nonReactive.minPendingPromise = void 0));
            }, e));
        }
      }
      throw n(a, `loadPromise`);
    }
    if (a.status === `notFound`) return (p(a.error) || r(), wr(t, s, a.error));
    if (a.status === `redirected`) throw (Ue(a.error) || r(), n(a, `loadPromise`));
    if (a.status === `error`) throw a.error;
    return l;
  }),
  jr = k.memo(function () {
    let e = Ae(),
      t = k.useContext(Ln),
      n,
      i = !1,
      a;
    {
      let r = t ? e.stores.matchStores.get(t) : void 0;
      (([n, i] = D(r, (e) => [e?.routeId, e?.globalNotFound ?? !1], Er)),
        (a = D(e.stores.matchesId, (e) => e[e.findIndex((e) => e === t) + 1])));
    }
    let o = n ? e.routesById[n] : void 0,
      s = e.options.defaultPendingComponent
        ? (0, A.jsx)(e.options.defaultPendingComponent, {})
        : null;
    if (i) return (o || r(), wr(e, o, void 0));
    if (!a) return null;
    let c = (0, A.jsx)(Dr, { matchId: a });
    return n === `__root__` ? (0, A.jsx)(k.Suspense, { fallback: s, children: c }) : c;
  });
function Mr() {
  let e = Ae(),
    t = k.useRef({ router: e, mounted: !1 }),
    [n, r] = k.useState(!1),
    i = D(e.stores.isLoading, (e) => e),
    a = D(e.stores.hasPending, (e) => e),
    o = Ee(i),
    s = i || n || a,
    c = Ee(s),
    l = i || a,
    u = Ee(l);
  return (
    (e.startTransition = (e) => {
      (r(!0),
        k.startTransition(() => {
          (e(), r(!1));
        }));
    }),
    k.useEffect(() => {
      let t = e.history.subscribe(e.load),
        n = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        E(e.latestLocation.publicHref) !== E(n.publicHref) &&
          e.commitLocation({ ...n, replace: !0 }),
        () => {
          t();
        }
      );
    }, [e, e.history]),
    ve(() => {
      (typeof window < `u` && e.ssr) ||
        (t.current.router === e && t.current.mounted) ||
        ((t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (e) {
            console.error(e);
          }
        })());
    }, [e]),
    ve(() => {
      o &&
        !i &&
        e.emit({ type: `onLoad`, ...on(e.stores.location.get(), e.stores.resolvedLocation.get()) });
    }, [o, e, i]),
    ve(() => {
      u &&
        !l &&
        e.emit({
          type: `onBeforeRouteMount`,
          ...on(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [l, u, e]),
    ve(() => {
      if (c && !s) {
        let t = on(e.stores.location.get(), e.stores.resolvedLocation.get());
        (e.emit({ type: `onResolved`, ...t }),
          $n(() => {
            (e.stores.status.set(`idle`), e.stores.resolvedLocation.set(e.stores.location.get()));
          }));
      }
    }, [s, c, e]),
    null
  );
}
function Nr() {
  let e = Ae(),
    t = e.routesById.__root__.options.pendingComponent ?? e.options.defaultPendingComponent,
    n = t ? (0, A.jsx)(t, {}) : null,
    r = (0, A.jsxs)(typeof document < `u` && e.ssr ? Cr : k.Suspense, {
      fallback: n,
      children: [(0, A.jsx)(Mr, {}), (0, A.jsx)(Pr, {})],
    });
  return e.options.InnerWrap ? (0, A.jsx)(e.options.InnerWrap, { children: r }) : r;
}
function Pr() {
  let e = Ae(),
    t = D(e.stores.firstId, (e) => e),
    n = D(e.stores.loadedAt, (e) => e),
    r = t ? (0, A.jsx)(Dr, { matchId: t }) : null;
  return (0, A.jsx)(Ln.Provider, {
    value: t,
    children: e.options.disableGlobalCatchBoundary
      ? r
      : (0, A.jsx)(Pn, { getResetKey: () => n, errorComponent: In, onCatch: void 0, children: r }),
  });
}
var Fr = (e) => ({ createMutableStore: nr, createReadonlyStore: nr, batch: $n }),
  Ir = (e) => new Lr(e),
  Lr = class extends sn {
    constructor(e) {
      super(e, Fr);
    }
  };
function Rr({ router: e, children: t, ...n }) {
  T(n) && e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } });
  let r = (0, A.jsx)(Ce.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, A.jsx)(e.options.Wrap, { children: r }) : r;
}
function zr({ router: e, ...t }) {
  return (0, A.jsx)(Rr, { router: e, ...t, children: (0, A.jsx)(Nr, {}) });
}
function Br(e) {
  let t = Ae({ warn: e?.router === void 0 }),
    n = e?.router || t;
  return D(n.stores.__store, ar(e, n));
}
function Vr(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function Hr(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e;
  switch (e.tag) {
    case `title`:
      return (0, A.jsx)(`title`, { ...t, suppressHydrationWarning: !0, children: n });
    case `meta`:
      return (0, A.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, A.jsx)(`link`, {
        ...t,
        precedence: t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return (
        e.inlineCss,
        (0, A.jsx)(`style`, { ...t, dangerouslySetInnerHTML: { __html: n }, nonce: r })
      );
    case `script`:
      return (0, A.jsx)(Ur, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function Ur({ attrs: e, children: t, preventScriptHoist: n }) {
  Ae();
  let r = Oe(),
    i =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (k.useEffect(() => {
      if (!i) {
        if (e?.src) {
          let t = (() => {
            try {
              let t = document.baseURI || window.location.href;
              return new URL(e.src, t).href;
            } catch {
              return e.src;
            }
          })();
          for (let e of document.querySelectorAll(`script[src]`)) if (e.src === t) return;
          let n = document.createElement(`script`);
          return (Vr(n, e), document.head.appendChild(n), () => n.remove());
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (let e of document.querySelectorAll(`script:not([src])`)) {
            if (!(e instanceof HTMLScriptElement)) continue;
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          let i = document.createElement(`script`);
          return ((i.textContent = t), Vr(i, e), document.head.appendChild(i), () => i.remove());
        }
      }
    }, [e, t, i]),
    i && typeof t == `string`)
  )
    return (0, A.jsx)(`script`, {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: t },
    });
  if (!r) {
    if (e?.src) return (0, A.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, A.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: { __html: t },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var Wr = (e) => {
  let t = Ae(),
    n = t.options.ssr?.nonce,
    r = D(t.stores.matches, (e) => e.map((e) => e.meta).filter((e) => e !== void 0), Te),
    i = k.useMemo(() => {
      let e = [],
        t = {},
        i;
      for (let a = r.length - 1; a >= 0; a--) {
        let o = r[a];
        for (let r = o.length - 1; r >= 0; r--) {
          let a = o[r];
          if (a)
            if (a.title) i ||= { tag: `title`, children: a.title };
            else if (`script:ld+json` in a)
              try {
                let t = JSON.stringify(a[`script:ld+json`]);
                e.push({ tag: `script`, attrs: { type: `application/ld+json` }, children: we(t) });
              } catch {}
            else {
              let r = a.name ?? a.property;
              if (r) {
                if (t[r]) continue;
                t[r] = !0;
              }
              e.push({ tag: `meta`, attrs: { ...a, nonce: n } });
            }
        }
      }
      return (
        i && e.push(i),
        n && e.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: n } }),
        e.reverse(),
        e
      );
    }, [r, n]),
    a = D(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.links ?? [])
          .filter((e) => e !== void 0)
          .map((e) => ({ tag: `link`, attrs: { ...e, nonce: n } })),
      Te,
    ),
    o = D(
      t.stores.matches,
      (r) => {
        let i = t.ssr?.manifest,
          a = [];
        return i
          ? (r.forEach((t) => {
              i.routes[t.routeId]?.css?.forEach((t) => {
                let r = wn(t);
                a.push({
                  tag: `link`,
                  attrs: {
                    rel: `stylesheet`,
                    ...r,
                    crossOrigin: yn(e, `stylesheet`) ?? r.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: n,
                  },
                });
              });
            }),
            i.inlineStyle &&
              a.push({
                tag: `style`,
                attrs: { ...i.inlineStyle.attrs, nonce: n },
                children: i.inlineStyle.children,
                inlineCss: !0,
              }),
            a)
          : a;
      },
      Te,
    ),
    s = D(
      t.stores.matches,
      (r) => {
        let i = [],
          a = t.ssr?.manifest;
        return (
          a &&
            r.forEach((t) => {
              a.routes[t.routeId]?.preloads?.forEach((t) => {
                i.push({ tag: `link`, attrs: { ...xn(a, t, e), nonce: n } });
              });
            }),
          i
        );
      },
      Te,
    ),
    c = D(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.styles ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `style`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      Te,
    ),
    l = D(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.headScripts ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `script`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      Te,
    ),
    u = [];
  return (Cn(u, i), u.push(...s), Cn(u, a), u.push(...o), Cn(u, c), Cn(u, l), u);
};
function Gr(e) {
  let t = Wr(e.assetCrossOrigin),
    n = Ae().options.ssr?.nonce;
  return (0, A.jsx)(A.Fragment, {
    children: t.map((e) =>
      (0, k.createElement)(Hr, { ...e, key: `tsr-meta-${JSON.stringify(e)}`, nonce: n }),
    ),
  });
}
var Kr = () => {
  let e = Ae(),
    t = e.options.ssr?.nonce,
    n = (n) => {
      let r = [],
        i = e.ssr?.manifest;
      if (!i) return [];
      for (let e of n) {
        let n = i.routes[e.routeId]?.scripts;
        if (n)
          for (let e of n)
            r.push({
              tag: `script`,
              attrs: { ...e.attrs, nonce: t },
              children: e.children,
              ...(typeof e.attrs?.src == `string` ? { preventScriptHoist: !0 } : {}),
            });
      }
      return r;
    },
    r = (e) =>
      e
        .map((e) => e.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: e, ...n }) => ({
          tag: `script`,
          attrs: { ...n, suppressHydrationWarning: !0, nonce: t },
          children: e,
        })),
    i = D(e.stores.matches, n, Te);
  return qr(e, D(e.stores.matches, r, Te), i);
};
function qr(e, t, n) {
  let r = [...t, ...n];
  return (0, A.jsx)(A.Fragment, {
    children: r.map((e, t) => (0, k.createElement)(Hr, { ...e, key: `tsr-scripts-${e.tag}-${t}` })),
  });
}
var Jr = (e, t) => {
  let n = { type: `request`, ...(t || e) },
    r = (e) => Jr({}, Object.assign(n, { validator: e, inputValidator: e }));
  return {
    options: n,
    middleware: (e) => Jr({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => Jr({}, Object.assign(n, { client: e })),
    server: (e) => Jr({}, Object.assign(n, { server: e })),
  };
};
function Yr(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && Yr(e, r.extends));
  }
}
var Xr = (e) => ({
    getOptions: async () => {
      let t = await e();
      if (t.serializationAdapters) {
        let e = new Set();
        (Yr(e, t.serializationAdapters), (t.serializationAdapters = Array.from(e)));
      }
      return t;
    },
    createMiddleware: Jr,
  }),
  Zr = Jr(),
  Qr = void 0,
  $r = Xr(() => ({ requestMiddleware: [Zr, Qr] })),
  ei = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ti = new (class extends ei {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  ni = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  ri = new (class {
    #e = ni;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function ii(e) {
  setTimeout(e, 0);
}
var ai = typeof window > `u` || `Deno` in globalThis;
function oi() {}
function si(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ci(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function li(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function ui(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function di(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function fi(e, t) {
  let { type: n = `all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== mi(o, t.options)) return !1;
    } else if (!gi(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function pi(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (hi(t.options.mutationKey) !== hi(a)) return !1;
    } else if (!gi(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function mi(e, t) {
  return (t?.queryKeyHashFn || hi)(e);
}
function hi(e) {
  return JSON.stringify(e, (e, t) =>
    bi(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function gi(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!gi(e[n], t[n])) return !1;
      return !0;
    }
    let n = Object.keys(t);
    for (let r of n) if (!gi(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var _i = Object.prototype.hasOwnProperty;
function vi(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = yi(e) && yi(t);
  if (!r && !(bi(e) && bi(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : _i.call(e, o)) && c++);
      continue;
    }
    if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
      s[o] = d;
      continue;
    }
    let f = vi(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function yi(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function bi(e) {
  if (!xi(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !xi(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function xi(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function Si(e) {
  return new Promise((t) => {
    ri.setTimeout(t, e);
  });
}
function Ci(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : vi(e, t);
}
function wi(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Ti(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Ei = Symbol();
function Di(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Ei
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Oi(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r ? i : ((r = !0), i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }), i)
      ),
    }),
    e
  );
}
var ki = (() => {
  let e = () => ai;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function Ai() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var ji = ii;
function Mi() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = ji,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var Ni = Mi(),
  Pi = new (class extends ei {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t), window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function Fi(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ii(e) {
  return (e ?? `online`) !== `online` || Pi.isOnline();
}
var Li = class extends Error {
  constructor(e) {
    (super(`CancelledError`), (this.revert = e?.revert), (this.silent = e?.silent));
  }
};
function Ri(e) {
  let t = !1,
    n = 0,
    r,
    i = Ai(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new Li(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () => ti.isFocused() && (e.networkMode === `always` || Pi.isOnline()) && e.canRun(),
    u = () => Ii(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (ki.isServer() ? 0 : 3),
            o = e.retryDelay ?? Fi,
            s = typeof o == `function` ? o(n, r) : o,
            c = i === !0 || (typeof i == `number` && n < i) || (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            Si(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var zi = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      ci(this.gcTime) &&
        (this.#e = ri.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (ki.isServer() ? 1 / 0 : 3e5));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (ri.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function Bi(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Oi(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = Di(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? Ti : wi;
              return { pages: c(e.pages, o, s), pageParams: c(e.pageParams, r, s) };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? j : Vi,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : Vi(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              n,
            )
        : l;
    },
  };
}
function Vi(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function j(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var M = class extends zi {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Wi(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Wi(this.options);
      e.data !== void 0 && (this.setState(Ui(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === `idle` && this.#r.remove(this);
  }
  setData(e, t) {
    let n = Ci(this.state.data, e, this.options);
    return (
      this.#l({ data: n, type: `success`, dataUpdatedAt: t?.updatedAt, manual: t?.manual }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(oi).catch(oi) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => di(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Ei || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => ui(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !li(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a && (this.#s || this.#c() ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return this.state.fetchStatus === `paused` && this.state.status === `pending`;
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = Di(this.options, t),
          n = (() => {
            let e = { client: this.#i, queryKey: this.queryKey, meta: this.meta };
            return (r(e), e);
          })();
        return ((this.#s = !1), this.options.persister ? this.options.persister(e, n, this) : e(n));
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite` ? Bi(this.options.pages) : this.options.behavior)?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` || this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = Ri({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          (e instanceof Li && e.revert && this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort());
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof Li) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return { ...t, ...Hi(t.data, this.options), fetchMeta: e.meta ?? null };
        case `success`:
          let n = {
            ...t,
            ...Ui(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      Ni.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function Hi(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ii(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function Ui(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Wi(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var Gi = class extends zi {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Ki()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length || (this.state.status === `pending` ? this.scheduleGc() : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = { client: this.#e, meta: this.options.meta, mutationKey: this.options.mutationKey };
    this.#r = Ri({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate && (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      Ni.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function Ki() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var qi = class extends ei {
  constructor(e = {}) {
    (super(), (this.config = e), (this.#e = new Set()), (this.#t = new Map()), (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new Gi({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = Ji(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = Ji(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = Ji(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    }
    return !0;
  }
  runNext(e) {
    let t = Ji(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    Ni.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => pi(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => pi(e, t));
  }
  notify(e) {
    Ni.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return Ni.batch(() => Promise.all(e.map((e) => e.continue().catch(oi))));
  }
};
function Ji(e) {
  return e.options.scope?.id;
}
var Yi = class extends ei {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? mi(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new M({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      Ni.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => fi(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => fi(e, t)) : t;
    }
    notify(e) {
      Ni.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      Ni.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      Ni.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  Xi = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Yi()),
        (this.#t = e.mutationCache || new qi()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = ti.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = Pi.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 && (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale && n.isStaleByTime(ui(t.staleTime, n)) && this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = si(t, i);
      if (a !== void 0) return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return Ni.batch(() =>
        this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      Ni.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return Ni.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = Ni.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(oi).catch(oi);
    }
    invalidateQueries(e, t = {}) {
      return Ni.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? `active` }, t)
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = Ni.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(oi)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(oi);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(ui(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(oi).catch(oi);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(oi).catch(oi);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return Pi.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(hi(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          gi(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(hi(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          gi(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = { ...this.#n.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
      return (
        (t.queryHash ||= mi(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === Ei && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  Zi = k.createContext(void 0),
  Qi = ({ client: e, children: t }) => (
    k.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, A.jsx)(Zi.Provider, { value: e, children: t })
  ),
  $i = `/assets/styles-DVXtAZV8.css`;
function ea(e, t = {}) {
  if (typeof window > `u`) return;
  window.__lovableEvents?.captureException?.(
    e,
    { source: `react_error_boundary`, route: window.location.pathname, ...t },
    { mechanism: `react_error_boundary`, handled: !1, severity: `error` },
  );
  let n =
      e instanceof Response
        ? `Response ${e.status}${e.url ? ` at ${e.url}` : ``}`
        : e instanceof Error
          ? e.message
          : String(e),
    r = e instanceof Error ? e.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message: n,
    ...(r !== void 0 && { stack: r }),
    filename: window.location.pathname,
  });
}
var ta = O(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  na = O(`award`, [
    [
      `path`,
      {
        d: `m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,
        key: `1yiouv`,
      },
    ],
    [`circle`, { cx: `12`, cy: `8`, r: `6`, key: `1vp47v` }],
  ]),
  ra = O(`calendar`, [
    [`path`, { d: `M8 2v4`, key: `1cmpym` }],
    [`path`, { d: `M16 2v4`, key: `4m81vk` }],
    [`rect`, { width: `18`, height: `18`, x: `3`, y: `4`, rx: `2`, key: `1hopcy` }],
    [`path`, { d: `M3 10h18`, key: `8toen8` }],
  ]),
  ia = O(`camera`, [
    [
      `path`,
      {
        d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
        key: `18u6gg`,
      },
    ],
    [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
  ]),
  aa = O(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  oa = O(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]]),
  sa = O(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  ca = O(`circle-alert`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }],
    [`line`, { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` }],
  ]),
  la = O(`circle-check`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  ua = O(`clock`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
  ]),
  da = O(`coffee`, [
    [`path`, { d: `M10 2v2`, key: `7u0qdc` }],
    [`path`, { d: `M14 2v2`, key: `6buw04` }],
    [
      `path`,
      {
        d: `M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1`,
        key: `pwadti`,
      },
    ],
    [`path`, { d: `M6 2v2`, key: `colzsn` }],
  ]),
  fa = O(`compass`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [
      `path`,
      {
        d: `m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,
        key: `9ktpf1`,
      },
    ],
  ]),
  pa = O(`cooking-pot`, [
    [`path`, { d: `M2 12h20`, key: `9i4pu4` }],
    [`path`, { d: `M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`, key: `u0tga0` }],
    [`path`, { d: `m4 8 16-4`, key: `16g0ng` }],
    [
      `path`,
      {
        d: `m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8`,
        key: `12cejc`,
      },
    ],
  ]),
  ma = O(`drama`, [
    [`path`, { d: `M10 11h.01`, key: `d2at3l` }],
    [`path`, { d: `M14 6h.01`, key: `k028ub` }],
    [`path`, { d: `M18 6h.01`, key: `1v4wsw` }],
    [`path`, { d: `M6.5 13.1h.01`, key: `1748ia` }],
    [`path`, { d: `M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3`, key: `172yzv` }],
    [`path`, { d: `M17.4 9.9c-.8.8-2 .8-2.8 0`, key: `1obv0w` }],
    [
      `path`,
      {
        d: `M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7`,
        key: `rqjl8i`,
      },
    ],
    [`path`, { d: `M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4`, key: `1mr6wy` }],
  ]),
  ha = O(`facebook`, [
    [
      `path`,
      { d: `M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`, key: `1jg4f8` },
    ],
  ]),
  ga = O(`footprints`, [
    [
      `path`,
      {
        d: `M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z`,
        key: `1dudjm`,
      },
    ],
    [
      `path`,
      {
        d: `M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z`,
        key: `l2t8xc`,
      },
    ],
    [`path`, { d: `M16 17h4`, key: `1dejxt` }],
    [`path`, { d: `M4 13h4`, key: `1bwh8b` }],
  ]),
  _a = O(`gift`, [
    [`path`, { d: `M12 7v14`, key: `1akyts` }],
    [`path`, { d: `M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`, key: `1sqzm4` }],
    [
      `path`,
      { d: `M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5`, key: `kc0143` },
    ],
    [`rect`, { x: `3`, y: `7`, width: `18`, height: `4`, rx: `1`, key: `1hberx` }],
  ]),
  va = O(`heart-handshake`, [
    [
      `path`,
      {
        d: `M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762`,
        key: `17lmqv`,
      },
    ],
  ]),
  ya = O(`house`, [
    [`path`, { d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`, key: `5wwlr5` }],
    [
      `path`,
      {
        d: `M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
        key: `r6nss1`,
      },
    ],
  ]),
  ba = O(`instagram`, [
    [`rect`, { width: `20`, height: `20`, x: `2`, y: `2`, rx: `5`, ry: `5`, key: `2e1cvw` }],
    [`path`, { d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`, key: `9exkf1` }],
    [`line`, { x1: `17.5`, x2: `17.51`, y1: `6.5`, y2: `6.5`, key: `r4j83e` }],
  ]),
  xa = O(`layers`, [
    [
      `path`,
      {
        d: `M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,
        key: `zw3jo`,
      },
    ],
    [
      `path`,
      {
        d: `M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,
        key: `1wduqc`,
      },
    ],
    [
      `path`,
      {
        d: `M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,
        key: `kqbvx6`,
      },
    ],
  ]),
  Sa = O(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [`rect`, { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` }],
  ]),
  Ca = O(`map-pin`, [
    [
      `path`,
      {
        d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
        key: `1r0f0z`,
      },
    ],
    [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
  ]),
  wa = O(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  Ta = O(`message-circle`, [
    [
      `path`,
      {
        d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
        key: `1sd12s`,
      },
    ],
  ]),
  Ea = O(`moon`, [
    [
      `path`,
      {
        d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
        key: `kfwtm`,
      },
    ],
  ]),
  Da = O(`music-2`, [
    [`circle`, { cx: `8`, cy: `18`, r: `4`, key: `1fc0mg` }],
    [`path`, { d: `M12 18V2l7 4`, key: `g04rme` }],
  ]),
  Oa = O(`palette`, [
    [
      `path`,
      {
        d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,
        key: `e79jfc`,
      },
    ],
    [`circle`, { cx: `13.5`, cy: `6.5`, r: `.5`, fill: `currentColor`, key: `1okk4w` }],
    [`circle`, { cx: `17.5`, cy: `10.5`, r: `.5`, fill: `currentColor`, key: `f64h9f` }],
    [`circle`, { cx: `6.5`, cy: `12.5`, r: `.5`, fill: `currentColor`, key: `qy21gx` }],
    [`circle`, { cx: `8.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `fotxhn` }],
  ]),
  ka = O(`phone-call`, [
    [`path`, { d: `M13 2a9 9 0 0 1 9 9`, key: `1itnx2` }],
    [`path`, { d: `M13 6a5 5 0 0 1 5 5`, key: `11nki7` }],
    [
      `path`,
      {
        d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
        key: `9njp5v`,
      },
    ],
  ]),
  Aa = O(`phone`, [
    [
      `path`,
      {
        d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
        key: `9njp5v`,
      },
    ],
  ]),
  ja = O(`send`, [
    [
      `path`,
      {
        d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
        key: `1ffxy3`,
      },
    ],
    [`path`, { d: `m21.854 2.147-10.94 10.939`, key: `12cjpa` }],
  ]),
  Ma = O(`shield-check`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  Na = O(`shopping-bag`, [
    [`path`, { d: `M16 10a4 4 0 0 1-8 0`, key: `1ltviw` }],
    [`path`, { d: `M3.103 6.034h17.794`, key: `awc11p` }],
    [
      `path`,
      {
        d: `M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,
        key: `o988cm`,
      },
    ],
  ]),
  Pa = O(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  Fa = O(`sprout`, [
    [
      `path`,
      {
        d: `M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3`,
        key: `139s4v`,
      },
    ],
    [`path`, { d: `M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4`, key: `1dlkgp` }],
    [`path`, { d: `M5 21h14`, key: `11awu3` }],
  ]),
  Ia = O(`sun`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M12 2v2`, key: `tus03m` }],
    [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
    [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
    [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
    [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
    [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
    [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
    [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
  ]),
  La = O(`trees`, [
    [
      `path`,
      { d: `M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z`, key: `1l6gj6` },
    ],
    [`path`, { d: `M7 16v6`, key: `1a82de` }],
    [`path`, { d: `M13 19v3`, key: `13sx9i` }],
    [
      `path`,
      {
        d: `M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5`,
        key: `1sj9kv`,
      },
    ],
  ]),
  Ra = O(`users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  za = O(`utensils-crossed`, [
    [`path`, { d: `m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8`, key: `n7qcjb` }],
    [
      `path`,
      {
        d: `M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7`,
        key: `d0u48b`,
      },
    ],
    [`path`, { d: `m2.1 21.8 6.4-6.3`, key: `yn04lh` }],
    [`path`, { d: `m19 5-7 7`, key: `194lzd` }],
  ]),
  Ba = O(`wand-sparkles`, [
    [
      `path`,
      {
        d: `m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72`,
        key: `ul74o6`,
      },
    ],
    [`path`, { d: `m14 7 3 3`, key: `1r5n42` }],
    [`path`, { d: `M5 6v4`, key: `ilb8ba` }],
    [`path`, { d: `M19 14v4`, key: `blhpug` }],
    [`path`, { d: `M10 2v2`, key: `7u0qdc` }],
    [`path`, { d: `M7 8H3`, key: `zfb6yr` }],
    [`path`, { d: `M21 16h-4`, key: `1cnmox` }],
    [`path`, { d: `M11 3H9`, key: `1obp7u` }],
  ]),
  Va = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  Ha = Ve,
  Ua = (e, t) => (n) => {
    if (t?.variants == null) return Ha(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = Va(t) || Va(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return Ha(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n) ? n.includes({ ...i, ...o }[t]) : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  Wa = _,
  Ga = x,
  Ka = re,
  qa = k.forwardRef(({ className: e, ...t }, n) =>
    (0, A.jsx)(v, {
      className: He(
        `fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e,
      ),
      ...t,
      ref: n,
    }),
  );
qa.displayName = v.displayName;
var Ja = Ua(
    `fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out`,
    {
      variants: {
        side: {
          top: `inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top`,
          bottom: `inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom`,
          left: `inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm`,
          right: `inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm`,
        },
      },
      defaultVariants: { side: `right` },
    },
  ),
  Ya = k.forwardRef(({ side: e = `right`, className: t, children: n, ...r }, i) =>
    (0, A.jsxs)(Ka, {
      children: [
        (0, A.jsx)(qa, {}),
        (0, A.jsxs)(d, {
          ref: i,
          className: He(Ja({ side: e }), t),
          ...r,
          children: [
            (0, A.jsxs)(c, {
              className: `absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary`,
              children: [
                (0, A.jsx)(We, { className: `h-4 w-4` }),
                (0, A.jsx)(`span`, { className: `sr-only`, children: `Close` }),
              ],
            }),
            n,
          ],
        }),
      ],
    }),
  );
Ya.displayName = d.displayName;
var Xa = k.forwardRef(({ className: e, ...t }, n) =>
  (0, A.jsx)(s, { ref: n, className: He(`text-lg font-semibold text-foreground`, e), ...t }),
);
Xa.displayName = s.displayName;
var Za = k.forwardRef(({ className: e, ...t }, n) =>
  (0, A.jsx)(m, { ref: n, className: He(`text-sm text-muted-foreground`, e), ...t }),
);
Za.displayName = m.displayName;
var Qa = n(i(), 1);
function $a(e) {
  if (!e || typeof document > `u`) return;
  let t = document.head || document.getElementsByTagName(`head`)[0],
    n = document.createElement(`style`);
  ((n.type = `text/css`),
    t.appendChild(n),
    n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)));
}
var eo = (e) => {
    switch (e) {
      case `success`:
        return ro;
      case `info`:
        return ao;
      case `warning`:
        return io;
      case `error`:
        return oo;
      default:
        return null;
    }
  },
  to = Array(12).fill(0),
  no = ({ visible: e, className: t }) =>
    k.createElement(
      `div`,
      { className: [`sonner-loading-wrapper`, t].filter(Boolean).join(` `), "data-visible": e },
      k.createElement(
        `div`,
        { className: `sonner-spinner` },
        to.map((e, t) =>
          k.createElement(`div`, { className: `sonner-loading-bar`, key: `spinner-bar-${t}` }),
        ),
      ),
    ),
  ro = k.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    k.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
      clipRule: `evenodd`,
    }),
  ),
  io = k.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    k.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
      clipRule: `evenodd`,
    }),
  ),
  ao = k.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    k.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
      clipRule: `evenodd`,
    }),
  ),
  oo = k.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    k.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
      clipRule: `evenodd`,
    }),
  ),
  so = k.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    k.createElement(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
    k.createElement(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
  ),
  co = () => {
    let [e, t] = k.useState(document.hidden);
    return (
      k.useEffect(() => {
        let e = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener(`visibilitychange`, e),
          () => window.removeEventListener(`visibilitychange`, e)
        );
      }, []),
      e
    );
  },
  lo = 1,
  N = new (class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          let { message: t, ...n } = e,
            r = typeof e?.id == `number` || e.id?.length > 0 ? e.id : lo++,
            i = this.toasts.find((e) => e.id === r),
            a = e.dismissible === void 0 || e.dismissible;
          return (
            this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            i
              ? (this.toasts = this.toasts.map((n) =>
                  n.id === r
                    ? (this.publish({ ...n, ...e, id: r, title: t }),
                      { ...n, ...e, id: r, dismissible: a, title: t })
                    : n,
                ))
              : this.addToast({ title: t, ...n, dismissible: a, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          e
            ? (this.dismissedToasts.add(e),
              requestAnimationFrame(() =>
                this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
              ))
            : this.toasts.forEach((e) => {
                this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
              }),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) => this.create({ ...t, message: e, type: `error` })),
        (this.success = (e, t) => this.create({ ...t, type: `success`, message: e })),
        (this.info = (e, t) => this.create({ ...t, type: `info`, message: e })),
        (this.warning = (e, t) => this.create({ ...t, type: `warning`, message: e })),
        (this.loading = (e, t) => this.create({ ...t, type: `loading`, message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: `loading`,
              message: t.loading,
              description: typeof t.description == `function` ? void 0 : t.description,
            }));
          let r = Promise.resolve(e instanceof Function ? e() : e),
            i = n !== void 0,
            a,
            o = r
              .then(async (e) => {
                if (((a = [`resolve`, e]), k.isValidElement(e)))
                  ((i = !1), this.create({ id: n, type: `default`, message: e }));
                else if (fo(e) && !e.ok) {
                  i = !1;
                  let r =
                      typeof t.error == `function`
                        ? await t.error(`HTTP error! status: ${e.status}`)
                        : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(`HTTP error! status: ${e.status}`)
                        : t.description,
                    o = typeof r == `object` && !k.isValidElement(r) ? r : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (e instanceof Error) {
                  i = !1;
                  let r = typeof t.error == `function` ? await t.error(e) : t.error,
                    a = typeof t.description == `function` ? await t.description(e) : t.description,
                    o = typeof r == `object` && !k.isValidElement(r) ? r : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (t.success !== void 0) {
                  i = !1;
                  let r = typeof t.success == `function` ? await t.success(e) : t.success,
                    a = typeof t.description == `function` ? await t.description(e) : t.description,
                    o = typeof r == `object` && !k.isValidElement(r) ? r : { message: r };
                  this.create({ id: n, type: `success`, description: a, ...o });
                }
              })
              .catch(async (e) => {
                if (((a = [`reject`, e]), t.error !== void 0)) {
                  i = !1;
                  let r = typeof t.error == `function` ? await t.error(e) : t.error,
                    a = typeof t.description == `function` ? await t.description(e) : t.description,
                    o = typeof r == `object` && !k.isValidElement(r) ? r : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                }
              })
              .finally(() => {
                (i && (this.dismiss(n), (n = void 0)), t.finally == null || t.finally.call(t));
              }),
            s = () =>
              new Promise((e, t) => o.then(() => (a[0] === `reject` ? t(a[1]) : e(a[1]))).catch(t));
          return typeof n != `string` && typeof n != `number`
            ? { unwrap: s }
            : Object.assign(n, { unwrap: s });
        }),
        (this.custom = (e, t) => {
          let n = t?.id || lo++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  })(),
  uo = (e, t) => {
    let n = t?.id || lo++;
    return (N.addToast({ title: e, ...t, id: n }), n);
  },
  fo = (e) =>
    e &&
    typeof e == `object` &&
    `ok` in e &&
    typeof e.ok == `boolean` &&
    `status` in e &&
    typeof e.status == `number`,
  po = Object.assign(
    uo,
    {
      success: N.success,
      info: N.info,
      warning: N.warning,
      error: N.error,
      custom: N.custom,
      message: N.message,
      promise: N.promise,
      dismiss: N.dismiss,
      loading: N.loading,
    },
    { getHistory: () => N.toasts, getToasts: () => N.getActiveToasts() },
  );
$a(
  `[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`,
);
function mo(e) {
  return e.label !== void 0;
}
var ho = 3,
  go = `24px`,
  _o = `16px`,
  vo = 4e3,
  yo = 356,
  P = 14,
  F = 45,
  bo = 200;
function xo(...e) {
  return e.filter(Boolean).join(` `);
}
function So(e) {
  let [t, n] = e.split(`-`),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var Co = (e) => {
  let {
      invert: t,
      toast: n,
      unstyled: r,
      interacting: i,
      setHeights: a,
      visibleToasts: o,
      heights: s,
      index: c,
      toasts: l,
      expanded: u,
      removeToast: d,
      defaultRichColors: f,
      closeButton: p,
      style: m,
      cancelButtonStyle: h,
      actionButtonStyle: g,
      className: _ = ``,
      descriptionClassName: v = ``,
      duration: y,
      position: b,
      gap: x,
      expandByDefault: S,
      classNames: C,
      icons: ee,
      closeButtonAriaLabel: te = `Close toast`,
    } = e,
    [ne, re] = k.useState(null),
    [ie, ae] = k.useState(null),
    [oe, se] = k.useState(!1),
    [ce, le] = k.useState(!1),
    [ue, w] = k.useState(!1),
    [T, de] = k.useState(!1),
    [fe, pe] = k.useState(!1),
    [me, he] = k.useState(0),
    [E, ge] = k.useState(0),
    _e = k.useRef(n.duration || y || vo),
    ve = k.useRef(null),
    ye = k.useRef(null),
    be = c === 0,
    xe = c + 1 <= o,
    Se = n.type,
    Ce = n.dismissible !== !1,
    we = n.className || ``,
    Te = n.descriptionClassName || ``,
    Ee = k.useMemo(() => s.findIndex((e) => e.toastId === n.id) || 0, [s, n.id]),
    De = k.useMemo(() => n.closeButton ?? p, [n.closeButton, p]),
    D = k.useMemo(() => n.duration || y || vo, [n.duration, y]),
    Oe = k.useRef(0),
    ke = k.useRef(0),
    Ae = k.useRef(0),
    je = k.useRef(null),
    [Me, Ne] = b.split(`-`),
    Pe = k.useMemo(() => s.reduce((e, t, n) => (n >= Ee ? e : e + t.height), 0), [s, Ee]),
    Fe = co(),
    Ie = n.invert || t,
    Le = Se === `loading`;
  ((ke.current = k.useMemo(() => Ee * x + Pe, [Ee, Pe])),
    k.useEffect(() => {
      _e.current = D;
    }, [D]),
    k.useEffect(() => {
      se(!0);
    }, []),
    k.useEffect(() => {
      let e = ye.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return (
          ge(t),
          a((e) => [{ toastId: n.id, height: t, position: n.position }, ...e]),
          () => a((e) => e.filter((e) => e.toastId !== n.id))
        );
      }
    }, [a, n.id]),
    k.useLayoutEffect(() => {
      if (!oe) return;
      let e = ye.current,
        t = e.style.height;
      e.style.height = `auto`;
      let r = e.getBoundingClientRect().height;
      ((e.style.height = t),
        ge(r),
        a((e) =>
          e.find((e) => e.toastId === n.id)
            ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
            : [{ toastId: n.id, height: r, position: n.position }, ...e],
        ));
    }, [oe, n.title, n.description, a, n.id, n.jsx, n.action, n.cancel]));
  let Re = k.useCallback(() => {
    (le(!0),
      he(ke.current),
      a((e) => e.filter((e) => e.toastId !== n.id)),
      setTimeout(() => {
        d(n);
      }, bo));
  }, [n, d, a, ke]);
  (k.useEffect(() => {
    if ((n.promise && Se === `loading`) || n.duration === 1 / 0 || n.type === `loading`) return;
    let e;
    return (
      u || i || Fe
        ? (() => {
            if (Ae.current < Oe.current) {
              let e = new Date().getTime() - Oe.current;
              _e.current -= e;
            }
            Ae.current = new Date().getTime();
          })()
        : _e.current !== 1 / 0 &&
          ((Oe.current = new Date().getTime()),
          (e = setTimeout(() => {
            (n.onAutoClose == null || n.onAutoClose.call(n, n), Re());
          }, _e.current))),
      () => clearTimeout(e)
    );
  }, [u, i, n, Se, Fe, Re]),
    k.useEffect(() => {
      n.delete && (Re(), n.onDismiss == null || n.onDismiss.call(n, n));
    }, [Re, n.delete]));
  function ze() {
    return ee?.loading
      ? k.createElement(
          `div`,
          {
            className: xo(C?.loader, n?.classNames?.loader, `sonner-loader`),
            "data-visible": Se === `loading`,
          },
          ee.loading,
        )
      : k.createElement(no, {
          className: xo(C?.loader, n?.classNames?.loader),
          visible: Se === `loading`,
        });
  }
  let Be = n.icon || ee?.[Se] || eo(Se);
  return k.createElement(
    `li`,
    {
      tabIndex: 0,
      ref: ye,
      className: xo(
        _,
        we,
        C?.toast,
        n?.classNames?.toast,
        C?.default,
        C?.[Se],
        n?.classNames?.[Se],
      ),
      "data-sonner-toast": ``,
      "data-rich-colors": n.richColors ?? f,
      "data-styled": !(n.jsx || n.unstyled || r),
      "data-mounted": oe,
      "data-promise": !!n.promise,
      "data-swiped": fe,
      "data-removed": ce,
      "data-visible": xe,
      "data-y-position": Me,
      "data-x-position": Ne,
      "data-index": c,
      "data-front": be,
      "data-swiping": ue,
      "data-dismissible": Ce,
      "data-type": Se,
      "data-invert": Ie,
      "data-swipe-out": T,
      "data-swipe-direction": ie,
      "data-expanded": !!(u || (S && oe)),
      "data-testid": n.testId,
      style: {
        "--index": c,
        "--toasts-before": c,
        "--z-index": l.length - c,
        "--offset": `${ce ? me : ke.current}px`,
        "--initial-height": S ? `auto` : `${E}px`,
        ...m,
        ...n.style,
      },
      onDragEnd: () => {
        (w(!1), re(null), (je.current = null));
      },
      onPointerDown: (e) => {
        e.button !== 2 &&
          (Le ||
            !Ce ||
            ((ve.current = new Date()),
            he(ke.current),
            e.target.setPointerCapture(e.pointerId),
            e.target.tagName !== `BUTTON` &&
              (w(!0), (je.current = { x: e.clientX, y: e.clientY }))));
      },
      onPointerUp: () => {
        if (T || !Ce) return;
        je.current = null;
        let e = Number(
            ye.current?.style.getPropertyValue(`--swipe-amount-x`).replace(`px`, ``) || 0,
          ),
          t = Number(ye.current?.style.getPropertyValue(`--swipe-amount-y`).replace(`px`, ``) || 0),
          r = new Date().getTime() - ve.current?.getTime(),
          i = ne === `x` ? e : t,
          a = Math.abs(i) / r;
        if (Math.abs(i) >= F || a > 0.11) {
          (he(ke.current),
            n.onDismiss == null || n.onDismiss.call(n, n),
            ae(ne === `x` ? (e > 0 ? `right` : `left`) : t > 0 ? `down` : `up`),
            Re(),
            de(!0));
          return;
        }
        var o, s;
        ((o = ye.current) == null || o.style.setProperty(`--swipe-amount-x`, `0px`),
          (s = ye.current) == null || s.style.setProperty(`--swipe-amount-y`, `0px`),
          pe(!1),
          w(!1),
          re(null));
      },
      onPointerMove: (t) => {
        var n, r;
        if (!je.current || !Ce || window.getSelection()?.toString().length > 0) return;
        let i = t.clientY - je.current.y,
          a = t.clientX - je.current.x,
          o = e.swipeDirections ?? So(b);
        !ne && (Math.abs(a) > 1 || Math.abs(i) > 1) && re(Math.abs(a) > Math.abs(i) ? `x` : `y`);
        let s = { x: 0, y: 0 },
          c = (e) => 1 / (1.5 + Math.abs(e) / 20);
        if (ne === `y`) {
          if (o.includes(`top`) || o.includes(`bottom`))
            if ((o.includes(`top`) && i < 0) || (o.includes(`bottom`) && i > 0)) s.y = i;
            else {
              let e = i * c(i);
              s.y = Math.abs(e) < Math.abs(i) ? e : i;
            }
        } else if (ne === `x` && (o.includes(`left`) || o.includes(`right`)))
          if ((o.includes(`left`) && a < 0) || (o.includes(`right`) && a > 0)) s.x = a;
          else {
            let e = a * c(a);
            s.x = Math.abs(e) < Math.abs(a) ? e : a;
          }
        ((Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && pe(!0),
          (n = ye.current) == null || n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
          (r = ye.current) == null || r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
      },
    },
    De && !n.jsx && Se !== `loading`
      ? k.createElement(
          `button`,
          {
            "aria-label": te,
            "data-disabled": Le,
            "data-close-button": !0,
            onClick:
              Le || !Ce
                ? () => {}
                : () => {
                    (Re(), n.onDismiss == null || n.onDismiss.call(n, n));
                  },
            className: xo(C?.closeButton, n?.classNames?.closeButton),
          },
          ee?.close ?? so,
        )
      : null,
    (Se || n.icon || n.promise) && n.icon !== null && (ee?.[Se] !== null || n.icon)
      ? k.createElement(
          `div`,
          { "data-icon": ``, className: xo(C?.icon, n?.classNames?.icon) },
          n.promise || (n.type === `loading` && !n.icon) ? n.icon || ze() : null,
          n.type === `loading` ? null : Be,
        )
      : null,
    k.createElement(
      `div`,
      { "data-content": ``, className: xo(C?.content, n?.classNames?.content) },
      k.createElement(
        `div`,
        { "data-title": ``, className: xo(C?.title, n?.classNames?.title) },
        n.jsx ? n.jsx : typeof n.title == `function` ? n.title() : n.title,
      ),
      n.description
        ? k.createElement(
            `div`,
            {
              "data-description": ``,
              className: xo(v, Te, C?.description, n?.classNames?.description),
            },
            typeof n.description == `function` ? n.description() : n.description,
          )
        : null,
    ),
    k.isValidElement(n.cancel)
      ? n.cancel
      : n.cancel && mo(n.cancel)
        ? k.createElement(
            `button`,
            {
              "data-button": !0,
              "data-cancel": !0,
              style: n.cancelButtonStyle || h,
              onClick: (e) => {
                mo(n.cancel) &&
                  Ce &&
                  (n.cancel.onClick == null || n.cancel.onClick.call(n.cancel, e), Re());
              },
              className: xo(C?.cancelButton, n?.classNames?.cancelButton),
            },
            n.cancel.label,
          )
        : null,
    k.isValidElement(n.action)
      ? n.action
      : n.action && mo(n.action)
        ? k.createElement(
            `button`,
            {
              "data-button": !0,
              "data-action": !0,
              style: n.actionButtonStyle || g,
              onClick: (e) => {
                mo(n.action) &&
                  (n.action.onClick == null || n.action.onClick.call(n.action, e),
                  !e.defaultPrevented && Re());
              },
              className: xo(C?.actionButton, n?.classNames?.actionButton),
            },
            n.action.label,
          )
        : null,
  );
};
function wo() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function To(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? _o : go;
      function o(e) {
        [`top`, `right`, `bottom`, `left`].forEach((t) => {
          n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
        });
      }
      typeof e == `number` || typeof e == `string`
        ? o(e)
        : typeof e == `object`
          ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
              e[t] === void 0
                ? (n[`${i}-${t}`] = a)
                : (n[`${i}-${t}`] = typeof e[t] == `number` ? `${e[t]}px` : e[t]);
            })
          : o(a);
    }),
    n
  );
}
var Eo = k.forwardRef(function (e, t) {
    let {
        id: n,
        invert: r,
        position: i = `bottom-right`,
        hotkey: a = [`altKey`, `KeyT`],
        expand: o,
        closeButton: s,
        className: c,
        offset: l,
        mobileOffset: u,
        theme: d = `light`,
        richColors: f,
        duration: p,
        style: m,
        visibleToasts: h = ho,
        toastOptions: g,
        dir: _ = wo(),
        gap: v = P,
        icons: y,
        containerAriaLabel: b = `Notifications`,
      } = e,
      [x, S] = k.useState([]),
      C = k.useMemo(
        () => (n ? x.filter((e) => e.toasterId === n) : x.filter((e) => !e.toasterId)),
        [x, n],
      ),
      ee = k.useMemo(
        () => Array.from(new Set([i].concat(C.filter((e) => e.position).map((e) => e.position)))),
        [C, i],
      ),
      [te, ne] = k.useState([]),
      [re, ie] = k.useState(!1),
      [ae, oe] = k.useState(!1),
      [se, ce] = k.useState(
        d === `system`
          ? typeof window < `u` &&
            window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
            ? `dark`
            : `light`
          : d,
      ),
      le = k.useRef(null),
      ue = a.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      w = k.useRef(null),
      T = k.useRef(!1),
      de = k.useCallback((e) => {
        S(
          (t) => (
            t.find((t) => t.id === e.id)?.delete || N.dismiss(e.id),
            t.filter(({ id: t }) => t !== e.id)
          ),
        );
      }, []);
    return (
      k.useEffect(
        () =>
          N.subscribe((e) => {
            if (e.dismiss) {
              requestAnimationFrame(() => {
                S((t) => t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)));
              });
              return;
            }
            setTimeout(() => {
              Qa.flushSync(() => {
                S((t) => {
                  let n = t.findIndex((t) => t.id === e.id);
                  return n === -1
                    ? [e, ...t]
                    : [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)];
                });
              });
            });
          }),
        [x],
      ),
      k.useEffect(() => {
        if (d !== `system`) {
          ce(d);
          return;
        }
        if (
          (d === `system` &&
            (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches
              ? ce(`dark`)
              : ce(`light`)),
          typeof window > `u`)
        )
          return;
        let e = window.matchMedia(`(prefers-color-scheme: dark)`);
        try {
          e.addEventListener(`change`, ({ matches: e }) => {
            ce(e ? `dark` : `light`);
          });
        } catch {
          e.addListener(({ matches: e }) => {
            try {
              ce(e ? `dark` : `light`);
            } catch (e) {
              console.error(e);
            }
          });
        }
      }, [d]),
      k.useEffect(() => {
        x.length <= 1 && ie(!1);
      }, [x]),
      k.useEffect(() => {
        let e = (e) => {
          if (a.every((t) => e[t] || e.code === t)) {
            var t;
            (ie(!0), (t = le.current) == null || t.focus());
          }
          e.code === `Escape` &&
            (document.activeElement === le.current ||
              le.current?.contains(document.activeElement)) &&
            ie(!1);
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [a]),
      k.useEffect(() => {
        if (le.current)
          return () => {
            w.current &&
              (w.current.focus({ preventScroll: !0 }), (w.current = null), (T.current = !1));
          };
      }, [le.current]),
      k.createElement(
        `section`,
        {
          ref: t,
          "aria-label": `${b} ${ue}`,
          tabIndex: -1,
          "aria-live": `polite`,
          "aria-relevant": `additions text`,
          "aria-atomic": `false`,
          suppressHydrationWarning: !0,
        },
        ee.map((t, n) => {
          let [i, a] = t.split(`-`);
          return C.length
            ? k.createElement(
                `ol`,
                {
                  key: t,
                  dir: _ === `auto` ? wo() : _,
                  tabIndex: -1,
                  ref: le,
                  className: c,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": se,
                  "data-y-position": i,
                  "data-x-position": a,
                  style: {
                    "--front-toast-height": `${te[0]?.height || 0}px`,
                    "--width": `${yo}px`,
                    "--gap": `${v}px`,
                    ...m,
                    ...To(l, u),
                  },
                  onBlur: (e) => {
                    T.current &&
                      !e.currentTarget.contains(e.relatedTarget) &&
                      ((T.current = !1),
                      (w.current &&= (w.current.focus({ preventScroll: !0 }), null)));
                  },
                  onFocus: (e) => {
                    (e.target instanceof HTMLElement && e.target.dataset.dismissible === `false`) ||
                      T.current ||
                      ((T.current = !0), (w.current = e.relatedTarget));
                  },
                  onMouseEnter: () => ie(!0),
                  onMouseMove: () => ie(!0),
                  onMouseLeave: () => {
                    ae || ie(!1);
                  },
                  onDragEnd: () => ie(!1),
                  onPointerDown: (e) => {
                    (e.target instanceof HTMLElement && e.target.dataset.dismissible === `false`) ||
                      oe(!0);
                  },
                  onPointerUp: () => oe(!1),
                },
                C.filter((e) => (!e.position && n === 0) || e.position === t).map((n, i) =>
                  k.createElement(Co, {
                    key: n.id,
                    icons: y,
                    index: i,
                    toast: n,
                    defaultRichColors: f,
                    duration: g?.duration ?? p,
                    className: g?.className,
                    descriptionClassName: g?.descriptionClassName,
                    invert: r,
                    visibleToasts: h,
                    closeButton: g?.closeButton ?? s,
                    interacting: ae,
                    position: t,
                    style: g?.style,
                    unstyled: g?.unstyled,
                    classNames: g?.classNames,
                    cancelButtonStyle: g?.cancelButtonStyle,
                    actionButtonStyle: g?.actionButtonStyle,
                    closeButtonAriaLabel: g?.closeButtonAriaLabel,
                    removeToast: de,
                    toasts: C.filter((e) => e.position == n.position),
                    heights: te.filter((e) => e.position == n.position),
                    setHeights: ne,
                    expandByDefault: o,
                    gap: v,
                    expanded: re,
                    swipeDirections: e.swipeDirections,
                  }),
                ),
              )
            : null;
        }),
      )
    );
  }),
  Do = [
    {
      id: `full-day`,
      nama: `Paket Wisata Full Day (Experience the Authentic Village Life)`,
      status: `Resmi (±8 Jam)`,
      desc: `Membatik di Rumah Batik Bintan, berkebun bersama masyarakat, kuliner lokal, pementasan budaya desa, & UMKM`,
    },
    {
      id: `2d1n-homestay`,
      nama: `2D1N Live-in Homestay Rumah Warga`,
      status: `Rencana Pengembangan`,
      desc: `Bermalam di rumah warga & berinteraksi bersama masyarakat desa`,
    },
    {
      id: `3d2n-cbt`,
      nama: `3D2N Pengalaman Lengkap CBT Ekang`,
      status: `Rencana Pengembangan`,
      desc: `Eksplorasi mendalam kehidupan pedesaan & budaya Melayu`,
    },
  ],
  Oo = [
    {
      id: `batik`,
      nama: `Membatik di Rumah Batik Bintan (09.00–11.00)`,
      desc: `Praktik membatik & membawa pulang karya suvenir`,
    },
    {
      id: `farm`,
      nama: `Berkebun Bersama Masyarakat (11.00–12.30)`,
      desc: `Menanam / memanen sayuran sesuai musim`,
    },
    {
      id: `culinary`,
      nama: `Menikmati Kuliner Lokal (12.30–14.00)`,
      desc: `Makan siang masakan khas & olahan daun ubi`,
    },
    {
      id: `culture`,
      nama: `Budaya yang Hadir di Berbagai Sudut Desa (14.00–16.00)`,
      desc: `Seni Melayu & tradisi lokal di berbagai lokasi budaya desa`,
    },
    {
      id: `umkm`,
      nama: `Belanja Produk UMKM & Penutupan (16.00–17.00)`,
      desc: `Berbelanja batik & produk desa (sertifikat opsional)`,
    },
  ],
  ko = () => {
    let e = new Date();
    return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}`;
  },
  Ao = () => {
    let e = new Date();
    return (
      e.setDate(e.getDate() + 1),
      `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}`
    );
  },
  jo = () => {
    let e = new Date();
    return `${String(e.getHours()).padStart(2, `0`)}:${String(e.getMinutes()).padStart(2, `0`)}`;
  },
  Mo = () => {
    let e = ko(),
      t = jo();
    return t > `17:00`
      ? { date: Ao(), time: `08:00` }
      : { date: e, time: t < `08:00` ? `08:00` : t };
  };
function No({ open: e, onOpenChange: t }) {
  let n = ko(),
    r = Ao(),
    i = jo(),
    a = Mo(),
    [s, c] = (0, k.useState)(1),
    [l, u] = (0, k.useState)(`full-day`),
    [d, f] = (0, k.useState)(2),
    [p, m] = (0, k.useState)(0),
    [_, v] = (0, k.useState)(a.date),
    [b, x] = (0, k.useState)(a.time),
    [S, ee] = (0, k.useState)([`batik`, `farm`, `culinary`, `culture`, `umkm`]),
    [te, ne] = (0, k.useState)(``),
    [re, ie] = (0, k.useState)(``),
    [ae, oe] = (0, k.useState)(``),
    [se, ce] = (0, k.useState)(``),
    [le, ue] = (0, k.useState)(!1),
    [w, T] = (0, k.useState)(``);
  (0, k.useEffect)(() => {
    if (!e) return;
    let t = jo(),
      n = ko();
    if (t > `17:00` && _ <= n)
      (v(Ao()),
        x(`08:00`),
        po.info(
          `Jam operasional hari ini (17.00 WIB) telah selesai. Tanggal otomatis disesuaikan ke besok.`,
        ));
    else if (_ === n) {
      let e = t < `08:00` ? `08:00` : t;
      b < e && x(e);
    }
  }, [e]);
  let de = Do.find((e) => e.id === l) ?? Do[0],
    fe = (e) => {
      if (!e) {
        v(``);
        return;
      }
      let t = ko(),
        n = jo();
      if (e < t) {
        (po.error(`Tanggal tidak boleh di masa lalu. Tanggal disesuaikan ke hari ini/besok.`),
          n > `17:00` ? (v(Ao()), x(`08:00`)) : (v(t), x(n < `08:00` ? `08:00` : n)));
        return;
      }
      if ((v(e), e === t)) {
        if (n > `17:00`)
          (po.info(
            `Jam operasional hari ini telah berakhir (17.00 WIB). Tanggal otomatis dialihkan ke besok.`,
          ),
            v(Ao()),
            x(`08:00`));
        else if (b < n) {
          let e = n < `08:00` ? `08:00` : n;
          (po.info(`Jam kedatangan disesuaikan ke jam saat ini (${e} WIB).`), x(e));
        }
      } else (b < `08:00` || b > `17:00`) && x(`09:00`);
    },
    pe = (e) => {
      if ((x(e), !e)) return;
      let t = ko(),
        n = jo();
      e < `08:00`
        ? po.error(`Jam operasional desa dimulai pukul 08.00 WIB. Silakan ganti jam.`)
        : e > `17:00`
          ? po.error(`Jam operasional desa berakhir pukul 17.00 WIB. Silakan ganti jam.`)
          : _ === t &&
            e < n &&
            po.error(
              `Jam ${e} WIB sudah lewat dari jam saat ini (${n} WIB). Silakan ganti jam kedatangan.`,
            );
    },
    me = () => {
      if (s === 1) {
        let e = ko(),
          t = jo();
        if (!_) {
          po.error(`Mohon tentukan perkiraan tanggal kunjungan Anda.`);
          return;
        }
        if (_ < e) {
          po.error(
            `Tanggal kunjungan berada di masa lalu. Mohon pilih tanggal hari ini atau esok hari.`,
          );
          return;
        }
        if (_ === e && t > `17:00`) {
          po.error(
            `Jam operasional desa hari ini telah berakhir (17.00 WIB). Mohon ubah tanggal kunjungan ke esok hari.`,
          );
          return;
        }
        if (!b) {
          po.error(`Mohon tentukan jam kedatangan kunjungan Anda.`);
          return;
        }
        if (b < `08:00` || b > `17:00`) {
          po.error(
            `Jam kedatangan harus berada di dalam jam operasional desa (08.00–17.00 WIB). Silakan ganti jam yang sesuai.`,
          );
          return;
        }
        if (_ === e && b < t) {
          po.error(
            `Jam kedatangan (${b} WIB) sudah lewat dari waktu saat ini (${t} WIB). Mohon ganti dengan jam kedatangan yang sesuai.`,
          );
          return;
        }
      }
      c((e) => Math.min(4, e + 1));
    },
    he = (e) => {
      ee((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
    },
    E = async () => {
      if (!te || te.trim().length < 2) {
        po.error(`Mohon lengkapi nama pemesan (minimal 2 karakter).`);
        return;
      }
      if (!re || re.trim().length < 9) {
        po.error(`Mohon lengkapi nomor WhatsApp aktif Anda (contoh: 08123456789).`);
        return;
      }
      ue(!0);
      try {
        let e =
          (
            await y({
              data: {
                namaPemesan: te,
                whatsapp: re,
                email: ae,
                tanggalKunjungan: _,
                jamKedatangan: b,
                jumlahDewasa: d,
                jumlahAnak: p,
                opsiKunjungan: de.nama,
                selectedAddons: S,
                catatan: se,
              },
            })
          ).kodeReservasi || `EA-2026-${Math.floor(1e3 + Math.random() * 9e3)}`;
        T(e);
        let t = S.map((e) => Oo.find((t) => t.id === e)?.nama).filter(Boolean).join(`
 - `),
          n = `Halo Pengelola Desa Wisata Ekang Anculai,

Saya ingin mengonfirmasi pemesanan kunjungan:
🎫 *Kode Reservasi:* ${e}
👤 *Nama Pemesan:* ${te}
📱 *WhatsApp:* ${re}
📅 *Tanggal & Jam Kunjungan:* ${_ ? _.split(`-`).reverse().join(`/`) : `Dikonfirmasi via chat`} (Pukul ${b} WIB)
⏱️ *Pilihan Paket:* ${de.nama}
👥 *Jumlah Peserta:* ${d} Dewasa${p > 0 ? `, ${p} Anak` : ``}

✨ *Rangkaian Aktivitas Dipilih:*
 - ${t || `Rangkaian Paket Wisata Full Day Lengkap`}

📝 *Catatan Khusus:* ${se || `-`}

Mohon konfirmasi ketersediaan jadwal dan rincian biaya kunjungannya. Terima kasih!`,
          r = encodeURIComponent(n);
        (window.open(`https://wa.me/${Je}?text=${r}`, `_blank`),
          c(4),
          po.success(`Reservasi ${e} berhasil disimpan ke database!`));
      } catch (e) {
        let t =
          e instanceof Error ? e.message : `Gagal menyimpan reservasi. Coba beberapa saat lagi.`;
        po.error(t);
      } finally {
        ue(!1);
      }
    };
  return (0, A.jsx)(g, {
    open: e,
    onOpenChange: t,
    children: (0, A.jsxs)(C, {
      className: `max-w-2xl overflow-hidden rounded-3xl border border-border p-0 shadow-2xl max-h-[92vh] flex flex-col`,
      children: [
        (0, A.jsxs)(`div`, {
          className: `gradient-primary relative p-5 sm:p-6 text-primary-foreground shrink-0`,
          children: [
            (0, A.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, A.jsxs)(`span`, {
                  className: `inline-flex items-center gap-1.5 rounded-full bg-background/20 px-3 py-1 text-xs font-bold backdrop-blur`,
                  children: [
                    (0, A.jsx)(Pa, { className: `size-3.5 text-gold` }),
                    `Perencana Kunjungan Interaktif`,
                  ],
                }),
                (0, A.jsxs)(`span`, {
                  className: `text-xs font-bold opacity-80`,
                  children: [`Langkah `, s, ` dari 3`],
                }),
              ],
            }),
            (0, A.jsx)(h, {
              className: `mt-3 text-xl sm:text-2xl font-extrabold tracking-tight`,
              children: `Rencanakan Kunjungan Ke Ekang Anculai`,
            }),
            (0, A.jsx)(o, {
              className: `mt-1 text-xs text-primary-foreground/80`,
              children: `Pilih rencana kunjungan CBT dan komunikasikan langsung ke Pengelola via WhatsApp.`,
            }),
            (0, A.jsxs)(`div`, {
              className: `mt-4 sm:mt-5 flex items-center justify-between border-t border-primary-foreground/15 pt-3 sm:pt-4 text-xs font-extrabold`,
              children: [
                (0, A.jsx)(`button`, {
                  type: `button`,
                  onClick: () => c(1),
                  className: He(
                    `flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all cursor-pointer min-h-[36px]`,
                    s === 1
                      ? `bg-[#C58A32] text-white shadow-md font-black ring-2 ring-[#DCA348]`
                      : s > 1
                        ? `bg-[#14532D] text-white`
                        : `bg-white/10 text-white/60 hover:bg-white/20`,
                  ),
                  children: (0, A.jsx)(`span`, { children: `01 Rencana` }),
                }),
                (0, A.jsx)(`div`, {
                  className: He(
                    `h-0.5 flex-1 mx-1.5 transition-all`,
                    s >= 2 ? `bg-[#C58A32]` : `bg-white/20`,
                  ),
                }),
                (0, A.jsx)(`button`, {
                  type: `button`,
                  onClick: () => c(2),
                  className: He(
                    `flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all cursor-pointer min-h-[36px]`,
                    s === 2
                      ? `bg-[#C58A32] text-white shadow-md font-black ring-2 ring-[#DCA348]`
                      : s > 2
                        ? `bg-[#14532D] text-white`
                        : `bg-white/10 text-white/60 hover:bg-white/20`,
                  ),
                  children: (0, A.jsx)(`span`, { children: `02 Aktivitas` }),
                }),
                (0, A.jsx)(`div`, {
                  className: He(
                    `h-0.5 flex-1 mx-1.5 transition-all`,
                    s >= 3 ? `bg-[#C58A32]` : `bg-white/20`,
                  ),
                }),
                (0, A.jsx)(`button`, {
                  type: `button`,
                  onClick: () => c(3),
                  className: He(
                    `flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all cursor-pointer min-h-[36px]`,
                    s === 3
                      ? `bg-[#C58A32] text-white shadow-md font-black ring-2 ring-[#DCA348]`
                      : s > 3
                        ? `bg-[#14532D] text-white`
                        : `bg-white/10 text-white/60 hover:bg-white/20`,
                  ),
                  children: (0, A.jsx)(`span`, { children: `03 Data Diri` }),
                }),
              ],
            }),
          ],
        }),
        (0, A.jsxs)(`div`, {
          className: `flex-1 overflow-y-auto p-4 sm:p-6`,
          children: [
            s === 1 &&
              (0, A.jsxs)(`div`, {
                className: `space-y-6`,
                children: [
                  (0, A.jsxs)(`div`, {
                    children: [
                      (0, A.jsx)(`label`, {
                        className: `text-xs font-bold tracking-wider text-muted-foreground uppercase`,
                        children: `1. Pilih Jenis / Durasi Kunjungan`,
                      }),
                      (0, A.jsx)(`div`, {
                        className: `mt-3 grid gap-3`,
                        children: Do.map((e) =>
                          (0, A.jsxs)(
                            `button`,
                            {
                              type: `button`,
                              onClick: () => u(e.id),
                              className: He(
                                `flex items-start justify-between rounded-2xl border p-4 text-left transition-all`,
                                l === e.id
                                  ? `border-primary bg-primary/5 ring-2 ring-primary/20`
                                  : `border-border hover:bg-accent/50`,
                              ),
                              children: [
                                (0, A.jsxs)(`div`, {
                                  children: [
                                    (0, A.jsx)(`p`, {
                                      className: `font-extrabold text-foreground`,
                                      children: e.nama,
                                    }),
                                    (0, A.jsx)(`p`, {
                                      className: `mt-1 text-xs text-muted-foreground`,
                                      children: e.desc,
                                    }),
                                  ],
                                }),
                                (0, A.jsx)(`span`, {
                                  className: `shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary`,
                                  children: e.status,
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `grid gap-4 sm:grid-cols-2`,
                    children: [
                      (0, A.jsxs)(`div`, {
                        children: [
                          (0, A.jsx)(`label`, {
                            className: `text-xs font-bold text-muted-foreground`,
                            children: `Jumlah Wisatawan Dewasa`,
                          }),
                          (0, A.jsxs)(`div`, {
                            className: `mt-2 flex items-center gap-3 rounded-2xl border border-border bg-surface p-2`,
                            children: [
                              (0, A.jsx)(`button`, {
                                type: `button`,
                                onClick: () => f((e) => Math.max(1, e - 1)),
                                className: `grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted`,
                                children: `-`,
                              }),
                              (0, A.jsxs)(`span`, {
                                className: `flex-1 text-center font-extrabold text-foreground`,
                                children: [d, ` Dewasa`],
                              }),
                              (0, A.jsx)(`button`, {
                                type: `button`,
                                onClick: () => f((e) => e + 1),
                                className: `grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted`,
                                children: `+`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, A.jsxs)(`div`, {
                        children: [
                          (0, A.jsx)(`label`, {
                            className: `text-xs font-bold text-muted-foreground`,
                            children: `Jumlah Anak-Anak (< 10 Thn)`,
                          }),
                          (0, A.jsxs)(`div`, {
                            className: `mt-2 flex items-center gap-3 rounded-2xl border border-border bg-surface p-2`,
                            children: [
                              (0, A.jsx)(`button`, {
                                type: `button`,
                                onClick: () => m((e) => Math.max(0, e - 1)),
                                className: `grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted`,
                                children: `-`,
                              }),
                              (0, A.jsxs)(`span`, {
                                className: `flex-1 text-center font-extrabold text-foreground`,
                                children: [p, ` Anak`],
                              }),
                              (0, A.jsx)(`button`, {
                                type: `button`,
                                onClick: () => m((e) => e + 1),
                                className: `grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted`,
                                children: `+`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `grid gap-4 sm:grid-cols-2`,
                    children: [
                      (0, A.jsxs)(`div`, {
                        children: [
                          (0, A.jsxs)(`label`, {
                            className: `text-xs font-bold text-muted-foreground flex items-center gap-1.5`,
                            children: [
                              (0, A.jsx)(ra, { className: `size-3.5 text-primary` }),
                              (0, A.jsx)(`span`, { children: `Perkiraan Tanggal Kunjungan` }),
                            ],
                          }),
                          (0, A.jsx)(`div`, {
                            className: He(
                              `mt-2 flex items-center gap-2 rounded-2xl border bg-surface px-4 py-3 shadow-sm transition-all focus-within:ring-2`,
                              _ && _ < n
                                ? `border-destructive ring-2 ring-destructive/20`
                                : `border-border focus-within:ring-primary/20`,
                            ),
                            children: (0, A.jsx)(`input`, {
                              type: `date`,
                              min: i > `17:00` ? r : n,
                              value: _,
                              onChange: (e) => fe(e.target.value),
                              className: `w-full bg-transparent text-sm font-medium outline-none`,
                            }),
                          }),
                          _ && _ < n
                            ? (0, A.jsxs)(`p`, {
                                className: `mt-1.5 text-[11px] font-extrabold text-destructive flex items-center gap-1`,
                                children: [
                                  (0, A.jsx)(ca, { className: `size-3 shrink-0` }),
                                  `Tanggal di masa lalu. Mohon ganti tanggal.`,
                                ],
                              })
                            : (0, A.jsx)(`p`, {
                                className: `mt-1.5 text-[11px] text-muted-foreground font-medium`,
                                children:
                                  i > `17:00`
                                    ? `Hari ini sudah tutup (otomatis dialihkan ke besok)`
                                    : `Minimal hari ini (${n.split(`-`).reverse().join(`/`)})`,
                              }),
                        ],
                      }),
                      (0, A.jsxs)(`div`, {
                        children: [
                          (0, A.jsxs)(`label`, {
                            className: `text-xs font-bold text-muted-foreground flex items-center gap-1.5`,
                            children: [
                              (0, A.jsx)(ua, { className: `size-3.5 text-gold` }),
                              (0, A.jsx)(`span`, { children: `Jam Kedatangan (08.00–17.00 WIB)` }),
                            ],
                          }),
                          (0, A.jsx)(`div`, {
                            className: He(
                              `mt-2 flex items-center gap-2 rounded-2xl border bg-surface px-4 py-3 shadow-sm transition-all focus-within:ring-2`,
                              (_ === n && b && b < i) || (b && (b < `08:00` || b > `17:00`))
                                ? `border-destructive ring-2 ring-destructive/20`
                                : `border-border focus-within:ring-primary/20`,
                            ),
                            children: (0, A.jsx)(`input`, {
                              type: `time`,
                              min: _ === n ? (i < `08:00` ? `08:00` : i) : `08:00`,
                              max: `17:00`,
                              value: b,
                              onChange: (e) => pe(e.target.value),
                              className: `w-full bg-transparent text-sm font-medium outline-none`,
                            }),
                          }),
                          _ === n && b && b < i
                            ? (0, A.jsxs)(`p`, {
                                className: `mt-1.5 text-[11px] font-extrabold text-destructive flex items-center gap-1`,
                                children: [
                                  (0, A.jsx)(ca, { className: `size-3 shrink-0` }),
                                  `Jam `,
                                  b,
                                  ` WIB sudah lewat. Mohon ganti jam ≥ `,
                                  i,
                                  ` WIB.`,
                                ],
                              })
                            : b && (b < `08:00` || b > `17:00`)
                              ? (0, A.jsxs)(`p`, {
                                  className: `mt-1.5 text-[11px] font-extrabold text-destructive flex items-center gap-1`,
                                  children: [
                                    (0, A.jsx)(ca, { className: `size-3 shrink-0` }),
                                    `Jam di luar operasional. Jam buka 08.00 – 17.00 WIB.`,
                                  ],
                                })
                              : (0, A.jsx)(`p`, {
                                  className: `mt-1.5 text-[11px] text-muted-foreground font-medium`,
                                  children:
                                    _ === n
                                      ? `Hari ini: Jam minimal ${i < `08:00` ? `08.00` : i} WIB`
                                      : `Jam operasional 08.00 - 17.00 WIB`,
                                }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            s === 2 &&
              (0, A.jsx)(`div`, {
                className: `space-y-6`,
                children: (0, A.jsxs)(`div`, {
                  children: [
                    (0, A.jsx)(`label`, {
                      className: `text-xs font-bold tracking-wider text-muted-foreground uppercase`,
                      children: `2. Pilih Rangkaian Aktivitas Kunjungan`,
                    }),
                    (0, A.jsx)(`p`, {
                      className: `mt-1 text-xs text-muted-foreground`,
                      children: `Rangkaian aktivitas resmi Paket Wisata Full Day Ekang Anculai.`,
                    }),
                    (0, A.jsx)(`div`, {
                      className: `mt-4 grid gap-3`,
                      children: Oo.map((e) => {
                        let t = S.includes(e.id);
                        return (0, A.jsxs)(
                          `button`,
                          {
                            type: `button`,
                            onClick: () => he(e.id),
                            className: He(
                              `flex items-center justify-between rounded-2xl border p-4 text-left transition-all`,
                              t
                                ? `border-primary bg-primary/5 ring-2 ring-primary/20`
                                : `border-border hover:bg-accent/50`,
                            ),
                            children: [
                              (0, A.jsxs)(`div`, {
                                className: `flex items-center gap-3`,
                                children: [
                                  (0, A.jsx)(`div`, {
                                    className: He(
                                      `grid size-6 place-items-center rounded-full transition-colors`,
                                      t
                                        ? `bg-primary text-primary-foreground`
                                        : `border border-border bg-card`,
                                    ),
                                    children: t && (0, A.jsx)(la, { className: `size-4` }),
                                  }),
                                  (0, A.jsxs)(`div`, {
                                    children: [
                                      (0, A.jsx)(`p`, {
                                        className: `font-bold text-foreground`,
                                        children: e.nama,
                                      }),
                                      (0, A.jsx)(`p`, {
                                        className: `text-xs text-muted-foreground`,
                                        children: e.desc,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, A.jsx)(`span`, {
                                className: `text-xs font-extrabold text-primary`,
                                children: `Terkonfirmasi`,
                              }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            s === 3 &&
              (0, A.jsxs)(`div`, {
                className: `space-y-6`,
                children: [
                  (0, A.jsxs)(`div`, {
                    className: `rounded-2xl border border-primary/20 bg-primary/5 p-5`,
                    children: [
                      (0, A.jsx)(`p`, {
                        className: `text-xs font-bold tracking-wider text-primary uppercase`,
                        children: `Ringkasan Perencanaan`,
                      }),
                      (0, A.jsxs)(`div`, {
                        className: `mt-4 space-y-2 border-b border-border pb-4 text-sm`,
                        children: [
                          (0, A.jsxs)(`div`, {
                            className: `flex justify-between font-semibold`,
                            children: [
                              (0, A.jsx)(`span`, {
                                className: `text-muted-foreground`,
                                children: `Opsi Kunjungan:`,
                              }),
                              (0, A.jsx)(`span`, {
                                className: `text-foreground`,
                                children: de.nama,
                              }),
                            ],
                          }),
                          (0, A.jsxs)(`div`, {
                            className: `flex justify-between text-xs`,
                            children: [
                              (0, A.jsx)(`span`, {
                                className: `text-muted-foreground`,
                                children: `Tanggal & Jam Kunjungan:`,
                              }),
                              (0, A.jsxs)(`span`, {
                                className: `text-foreground font-bold`,
                                children: [
                                  _ ? _.split(`-`).reverse().join(`/`) : `Belum dipilih`,
                                  ` `,
                                  b ? `(${b} WIB)` : ``,
                                ],
                              }),
                            ],
                          }),
                          (0, A.jsxs)(`div`, {
                            className: `flex justify-between text-xs`,
                            children: [
                              (0, A.jsx)(`span`, {
                                className: `text-muted-foreground`,
                                children: `Jumlah Peserta:`,
                              }),
                              (0, A.jsxs)(`span`, {
                                className: `text-foreground`,
                                children: [d, ` Dewasa`, p > 0 ? `, ${p} Anak` : ``],
                              }),
                            ],
                          }),
                          (0, A.jsxs)(`div`, {
                            className: `flex justify-between text-xs`,
                            children: [
                              (0, A.jsx)(`span`, {
                                className: `text-muted-foreground`,
                                children: `Aktivitas Dipilih:`,
                              }),
                              (0, A.jsxs)(`span`, {
                                className: `text-foreground`,
                                children: [S.length, ` Aktivitas`],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, A.jsxs)(`div`, {
                        className: `mt-4 flex items-center justify-between`,
                        children: [
                          (0, A.jsx)(`span`, {
                            className: `text-sm font-bold text-foreground`,
                            children: `Status Konfirmasi:`,
                          }),
                          (0, A.jsx)(`span`, {
                            className: `text-base font-extrabold text-primary`,
                            children: `Konfirmasi Pengelola`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `space-y-4`,
                    children: [
                      (0, A.jsxs)(`div`, {
                        className: `grid gap-4 sm:grid-cols-2`,
                        children: [
                          (0, A.jsxs)(`div`, {
                            children: [
                              (0, A.jsxs)(`label`, {
                                className: `text-xs font-bold text-muted-foreground`,
                                children: [
                                  `Nama Lengkap Anda `,
                                  (0, A.jsx)(`span`, {
                                    className: `text-destructive`,
                                    children: `*`,
                                  }),
                                ],
                              }),
                              (0, A.jsx)(`input`, {
                                type: `text`,
                                placeholder: `Contoh: Budi Santoso`,
                                value: te,
                                onChange: (e) => ne(e.target.value),
                                className: `mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20`,
                              }),
                            ],
                          }),
                          (0, A.jsxs)(`div`, {
                            children: [
                              (0, A.jsxs)(`label`, {
                                className: `text-xs font-bold text-muted-foreground`,
                                children: [
                                  `Nomor WhatsApp Aktif `,
                                  (0, A.jsx)(`span`, {
                                    className: `text-destructive`,
                                    children: `*`,
                                  }),
                                ],
                              }),
                              (0, A.jsx)(`input`, {
                                type: `tel`,
                                placeholder: `Contoh: 08123456789`,
                                value: re,
                                onChange: (e) => ie(e.target.value),
                                className: `mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, A.jsxs)(`div`, {
                        children: [
                          (0, A.jsx)(`label`, {
                            className: `text-xs font-bold text-muted-foreground`,
                            children: `Alamat Email (Opsional)`,
                          }),
                          (0, A.jsx)(`input`, {
                            type: `email`,
                            placeholder: `Contoh: budi@gmail.com`,
                            value: ae,
                            onChange: (e) => oe(e.target.value),
                            className: `mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20`,
                          }),
                        ],
                      }),
                      (0, A.jsxs)(`div`, {
                        children: [
                          (0, A.jsx)(`label`, {
                            className: `text-xs font-bold text-muted-foreground`,
                            children: `Catatan Khusus (Opsional)`,
                          }),
                          (0, A.jsx)(`textarea`, {
                            placeholder: `Contoh: Berminat pada workshop membatik dan interaksi warga`,
                            rows: 2,
                            value: se,
                            onChange: (e) => ce(e.target.value),
                            className: `mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `flex items-center gap-2 rounded-2xl bg-amber-500/10 p-3 text-xs font-medium text-amber-800 dark:text-amber-300`,
                    children: [
                      (0, A.jsx)(Ma, { className: `size-4 shrink-0 text-amber-600` }),
                      (0, A.jsx)(`span`, {
                        children: `Tanpa biaya pembayaran di muka. Kode reservasi unik tersimpan otomatis di database pengelola.`,
                      }),
                    ],
                  }),
                ],
              }),
            s === 4 &&
              (0, A.jsxs)(`div`, {
                className: `py-6 text-center space-y-5`,
                children: [
                  (0, A.jsx)(`div`, {
                    className: `mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20`,
                    children: (0, A.jsx)(la, { className: `size-10` }),
                  }),
                  (0, A.jsxs)(`div`, {
                    children: [
                      (0, A.jsx)(`span`, {
                        className: `inline-block rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 text-xs font-extrabold text-emerald-800 dark:text-emerald-300 mb-2`,
                        children: `Terdaftar di Database Pengelola`,
                      }),
                      (0, A.jsx)(`h3`, {
                        className: `text-xl sm:text-2xl font-extrabold text-foreground`,
                        children: `Reservasi Berhasil Dibuat!`,
                      }),
                      (0, A.jsx)(`p`, {
                        className: `mt-1 text-xs text-muted-foreground max-w-md mx-auto`,
                        children: `Kode reservasi resmi Anda telah diterbitkan dan tersimpan di sistem pengelola desa.`,
                      }),
                    ],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `mx-auto max-w-sm rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-center`,
                    children: [
                      (0, A.jsx)(`p`, {
                        className: `text-[11px] font-bold text-muted-foreground uppercase tracking-wider`,
                        children: `Kode Reservasi Anda`,
                      }),
                      (0, A.jsx)(`p`, {
                        className: `mt-1 text-2xl font-black text-emerald-700 dark:text-emerald-400 font-mono tracking-widest`,
                        children: w,
                      }),
                      (0, A.jsxs)(`div`, {
                        className: `mt-3 pt-3 border-t border-emerald-500/15 text-xs font-semibold text-muted-foreground flex justify-between`,
                        children: [
                          (0, A.jsxs)(`span`, {
                            children: [
                              `Status: `,
                              (0, A.jsx)(`strong`, {
                                className: `text-amber-600`,
                                children: `Pending (Menunggu Chat WA)`,
                              }),
                            ],
                          }),
                          (0, A.jsx)(`span`, { children: _.split(`-`).reverse().join(`/`) }),
                        ],
                      }),
                    ],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `pt-2 flex flex-col sm:flex-row items-center justify-center gap-3`,
                    children: [
                      (0, A.jsxs)(`button`, {
                        type: `button`,
                        onClick: E,
                        className: `w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-extrabold text-white shadow-card hover:bg-emerald-700 transition-all cursor-pointer`,
                        children: [
                          (0, A.jsx)(Ta, { className: `size-4` }),
                          `Buka Chat WhatsApp Pengelola Lagi`,
                        ],
                      }),
                      (0, A.jsx)(`button`, {
                        type: `button`,
                        onClick: () => {
                          (t(!1), c(1));
                        },
                        className: `w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent cursor-pointer`,
                        children: `Tutup Modul`,
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        s <= 3 &&
          (0, A.jsxs)(`div`, {
            className: `shrink-0 flex items-center justify-between border-t border-border bg-surface px-4 sm:px-6 py-3 sm:py-4 shadow-soft`,
            children: [
              s > 1
                ? (0, A.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => c((e) => Math.max(1, e - 1)),
                    className: `inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-muted-foreground hover:bg-accent hover:text-foreground`,
                    children: [(0, A.jsx)(oa, { className: `size-4` }), `Kembali`],
                  })
                : (0, A.jsx)(`div`, {}),
              s < 3
                ? (0, A.jsxs)(`button`, {
                    type: `button`,
                    onClick: me,
                    className: `inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-emerald-deep transition-all active:scale-95 cursor-pointer`,
                    children: [`Lanjutkan`, (0, A.jsx)(sa, { className: `size-4` })],
                  })
                : (0, A.jsxs)(`button`, {
                    type: `button`,
                    disabled: le,
                    onClick: E,
                    className: `inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-extrabold text-white shadow-card hover:bg-emerald-700 cursor-pointer disabled:opacity-50 transition-all`,
                    children: [
                      (0, A.jsx)(Ta, { className: `size-4` }),
                      le ? `Menyimpan Ke Database...` : `Simpan Reservasi & WhatsApp`,
                    ],
                  }),
            ],
          }),
      ],
    }),
  });
}
var Po = `/assets/logo-bintan-zYIFLtNG.png`,
  Fo = [
    { label: `Profil Desa`, to: `/` },
    { label: `Potensi Wisata`, to: `/`, hash: `potensi` },
    { label: `Pengalaman`, to: `/`, hash: `pengalaman` },
    { label: `Kegiatan`, to: `/`, hash: `kegiatan` },
    { label: `Galeri`, to: `/galeri` },
    { label: `Paket Wisata`, to: `/rencanakan-kunjungan` },
    { label: `Kontak`, to: `/`, hash: `kontak` },
  ];
function Io({ inverted: e }) {
  return (0, A.jsxs)(Me, {
    to: `/`,
    className: `flex shrink-0 items-center gap-2 sm:gap-2.5 group`,
    "aria-label": `Desa Wisata Ekang Anculai`,
    children: [
      (0, A.jsx)(`div`, {
        className: `relative shrink-0 flex items-center justify-center rounded-xl bg-white p-1 sm:p-1.5 shadow-sm ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-105`,
        children: (0, A.jsx)(`img`, {
          src: Po,
          alt: `Logo Lambang Bintan - Desa Wisata Ekang Anculai`,
          className: `h-7 sm:h-8.5 w-auto object-contain`,
        }),
      }),
      (0, A.jsxs)(`span`, {
        className: `shrink-0 leading-tight`,
        children: [
          (0, A.jsxs)(`span`, {
            className: `flex items-center gap-1.5`,
            children: [
              (0, A.jsx)(`span`, {
                className: He(
                  `block whitespace-nowrap text-sm sm:text-lg font-black tracking-tight`,
                  e ? `text-white` : `text-foreground`,
                ),
                children: `EKANG ANCULAI`,
              }),
              (0, A.jsx)(`span`, {
                className: `hidden xl:inline-flex shrink-0 rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-extrabold text-gold ring-1 ring-gold/40`,
                children: `Desa Berprestasi 2026`,
              }),
            ],
          }),
          (0, A.jsx)(`span`, {
            className: He(
              `block whitespace-nowrap text-[10px] sm:text-[11px] font-semibold`,
              e ? `text-white/80` : `text-muted-foreground`,
            ),
            children: `Teluk Sebong, Bintan`,
          }),
        ],
      }),
    ],
  });
}
function Lo() {
  let [e, t] = (0, k.useState)(!1),
    [n, r] = (0, k.useState)(!1),
    [i, a] = (0, k.useState)(!1),
    o = Br({ select: (e) => e.location.pathname }) === `/`;
  (0, k.useEffect)(() => {
    let e = () => t(window.scrollY > 24);
    return (
      e(),
      window.addEventListener(`scroll`, e, { passive: !0 }),
      () => window.removeEventListener(`scroll`, e)
    );
  }, []);
  let s = o && !e;
  return (0, A.jsxs)(A.Fragment, {
    children: [
      (0, A.jsx)(`a`, {
        href: `#main-content`,
        className: `sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-amber-400 focus:px-4 focus:py-2 focus:text-xs focus:font-black focus:text-black focus:shadow-2xl focus:ring-2 focus:ring-black`,
        children: `Skip to main content`,
      }),
      (0, A.jsxs)(`header`, {
        className: He(
          `fixed inset-x-0 top-0 z-50 transition-all duration-300`,
          s
            ? `bg-gradient-to-b from-black/80 via-black/40 to-transparent`
            : `border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-xl`,
        ),
        children: [
          (0, A.jsx)(`div`, {
            className: He(
              `hidden lg:block border-b text-[11px] font-semibold transition-all py-1.5`,
              s
                ? `border-white/15 bg-black/25 text-white/90 backdrop-blur-md`
                : `border-border/60 bg-muted/40 text-muted-foreground`,
            ),
            children: (0, A.jsxs)(`div`, {
              className: `mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8`,
              children: [
                (0, A.jsxs)(`div`, {
                  className: `flex items-center gap-5`,
                  children: [
                    (0, A.jsxs)(`span`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, A.jsx)(Ia, { className: `size-3.5 text-[#C58A32] shrink-0` }),
                        (0, A.jsx)(`span`, { children: `Cuaca Bintan: Cerah 29°C` }),
                      ],
                    }),
                    (0, A.jsxs)(`span`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, A.jsx)(ua, { className: `size-3.5 text-[#2F7D4A] shrink-0` }),
                        (0, A.jsx)(`span`, { children: `Jam Operasional: 08.00 - 17.00 WIB` }),
                      ],
                    }),
                    (0, A.jsxs)(`span`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, A.jsx)(Ca, { className: `size-3.5 text-[#C58A32] shrink-0` }),
                        (0, A.jsx)(`span`, { children: `Teluk Sebong, Bintan` }),
                      ],
                    }),
                  ],
                }),
                (0, A.jsxs)(`div`, {
                  className: `flex items-center gap-4`,
                  children: [
                    (0, A.jsxs)(`span`, {
                      className: `inline-flex items-center gap-1.5 rounded-full bg-[#E8F1E8] px-2.5 py-0.5 text-[#14532D] font-extrabold ring-1 ring-[#2F7D4A]/30`,
                      children: [
                        (0, A.jsx)(`span`, {
                          className: `size-1.5 rounded-full bg-[#2F7D4A] animate-pulse`,
                        }),
                        `Desa Wisata Hijau & Kreatif`,
                      ],
                    }),
                    (0, A.jsxs)(`a`, {
                      href: `https://wa.me/${Je}`,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: `flex items-center gap-1 font-extrabold text-[#C58A32] hover:underline focus:outline-none focus:ring-1 focus:ring-[#C58A32] rounded-sm`,
                      children: [
                        (0, A.jsx)(ka, { className: `size-3` }),
                        (0, A.jsx)(`span`, { children: `Hotline Pengelola: +62 831-6634-1280` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, A.jsxs)(`div`, {
            className: `mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8`,
            children: [
              (0, A.jsx)(Io, { inverted: s }),
              (0, A.jsx)(`nav`, {
                className: `hidden items-center gap-1 lg:gap-1.5 xl:flex`,
                "aria-label": `Navigasi utama`,
                children: Fo.map((e) =>
                  (0, A.jsx)(
                    Me,
                    {
                      to: e.to,
                      ...(`hash` in e ? { hash: e.hash } : {}),
                      className: He(
                        `rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all whitespace-nowrap min-h-[38px] inline-flex items-center`,
                        s
                          ? `text-white/90 hover:bg-white/20 hover:text-[#F7F4EA]`
                          : `text-foreground/80 hover:bg-[#E8F1E8] hover:text-[#064E3B] active:bg-[#064E3B] active:text-white`,
                      ),
                      children: e.label,
                    },
                    e.label,
                  ),
                ),
              }),
              (0, A.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-2`,
                children: [
                  (0, A.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => a(!0),
                    className: `hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#C58A32] hover:bg-[#A87226] px-4 py-2 text-xs font-black text-white shadow-card transition-all duration-300 hover:scale-105 active:scale-95 ring-1 ring-[#DCA348] cursor-pointer min-h-[44px]`,
                    children: [
                      (0, A.jsx)(fa, { className: `size-4 shrink-0 text-white` }),
                      (0, A.jsx)(`span`, { children: `Rencanakan Kunjungan` }),
                    ],
                  }),
                  (0, A.jsxs)(Wa, {
                    open: n,
                    onOpenChange: r,
                    children: [
                      (0, A.jsx)(Ga, {
                        asChild: !0,
                        children: (0, A.jsx)(`button`, {
                          "aria-label": `Buka menu navigasi`,
                          className: He(
                            `grid size-10 place-items-center rounded-full transition-colors lg:hidden`,
                            s
                              ? `bg-white/20 text-white hover:bg-white/30`
                              : `bg-muted text-foreground hover:bg-accent`,
                          ),
                          children: (0, A.jsx)(wa, { className: `size-5` }),
                        }),
                      }),
                      (0, A.jsxs)(Ya, {
                        side: `right`,
                        className: `w-[88vw] max-w-sm border-l border-border p-0 [&>button]:hidden`,
                        children: [
                          (0, A.jsxs)(`div`, {
                            className: `flex items-center justify-between border-b border-border px-5 py-4`,
                            children: [
                              (0, A.jsx)(Io, { inverted: !1 }),
                              (0, A.jsx)(`button`, {
                                onClick: () => r(!1),
                                "aria-label": `Tutup menu`,
                                className: `grid size-9 place-items-center rounded-full bg-muted text-foreground`,
                                children: (0, A.jsx)(We, { className: `size-4` }),
                              }),
                            ],
                          }),
                          (0, A.jsxs)(`nav`, {
                            className: `flex flex-col gap-1 p-4`,
                            "aria-label": `Navigasi mobile`,
                            children: [
                              Fo.map((e) =>
                                (0, A.jsx)(
                                  Me,
                                  {
                                    to: e.to,
                                    ...(`hash` in e ? { hash: e.hash } : {}),
                                    onClick: () => r(!1),
                                    className: `rounded-2xl px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent hover:text-primary`,
                                    children: e.label,
                                  },
                                  e.label,
                                ),
                              ),
                              (0, A.jsxs)(`button`, {
                                type: `button`,
                                onClick: () => {
                                  (r(!1), a(!0));
                                },
                                className: `mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-center text-xs font-extrabold text-gold-foreground shadow-card hover:bg-gold/90 active:scale-95 cursor-pointer`,
                                children: [
                                  (0, A.jsx)(fa, { className: `size-4` }),
                                  `Rencanakan Kunjungan`,
                                ],
                              }),
                              (0, A.jsx)(`a`, {
                                href: `https://wa.me/${Je}`,
                                target: `_blank`,
                                rel: `noreferrer`,
                                onClick: () => r(!1),
                                className: `mt-2 rounded-full bg-primary px-4 py-3 text-center text-xs font-extrabold text-primary-foreground`,
                                children: `Hubungi WA Pengelola`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, A.jsx)(No, { open: i, onOpenChange: a }),
    ],
  });
}
var Ro = [
    { label: `Profil Wisata Ekang Anculai`, href: `/` },
    { label: `Potensi Wisata`, href: `/#potensi` },
    { label: `Pengalaman CBT`, href: `/#pengalaman` },
    { label: `Galeri Foto`, href: `/galeri` },
    { label: `Paket & Pengalaman Wisata`, href: `/rencanakan-kunjungan` },
    { label: `Kegiatan Desa 2026`, href: `/#kegiatan` },
    { label: `Peta & Akses`, href: `/#peta` },
  ],
  zo = [
    { label: `Rumah Batik Bintan`, href: `/#umkm-budaya` },
    { label: `Ekang Mangrove Park`, href: `/#potensi` },
    { label: `Wisata Perkebunan Warga`, href: `/#potensi` },
    { label: `Homestay Rumah Warga`, href: `/rencanakan-kunjungan` },
    { label: `Wisata Gastronomi`, href: `/#umkm-budaya` },
    { label: `Pentas Seni Reog Sedulur Manunggal`, href: `/#umkm-budaya` },
  ];
function Bo() {
  let [e, t] = (0, k.useState)(``);
  return (0, A.jsx)(`footer`, {
    id: `kontak`,
    className: `w-full bg-[#022C22] text-white border-t border-emerald-950`,
    children: (0, A.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8`,
      children: [
        (0, A.jsxs)(`div`, {
          className: `flex flex-wrap items-center justify-between gap-4 border-b border-primary-foreground/15 pb-8`,
          children: [
            (0, A.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-3`,
              children: [
                (0, A.jsxs)(`span`, {
                  className: `inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-xs font-extrabold text-gold uppercase`,
                  children: [
                    (0, A.jsx)(na, { className: `size-4` }),
                    `Desa Berprestasi Prov. Kepri 2026`,
                  ],
                }),
                (0, A.jsx)(`span`, {
                  className: `rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold tracking-wide uppercase`,
                  children: `Pemdes Ekang Anculai`,
                }),
                (0, A.jsx)(`span`, {
                  className: `rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold tracking-wide uppercase`,
                  children: `Pemkab Bintan`,
                }),
                (0, A.jsx)(`span`, {
                  className: `rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold tracking-wide uppercase`,
                  children: `Pengelola Wisata Pesona Ekang`,
                }),
              ],
            }),
            (0, A.jsxs)(`div`, {
              className: `flex items-center gap-2 text-xs font-semibold text-primary-foreground/80`,
              children: [
                (0, A.jsx)(Ma, { className: `size-4 text-gold` }),
                (0, A.jsx)(`span`, {
                  children: `Desa Wisata Hijau dan Kreatif Berbasis Masyarakat`,
                }),
              ],
            }),
          ],
        }),
        (0, A.jsxs)(`div`, {
          className: `grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4`,
          children: [
            (0, A.jsxs)(`div`, {
              children: [
                (0, A.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, A.jsx)(`span`, {
                      className: `grid size-11 place-items-center rounded-2xl bg-white p-1.5 shadow-soft shrink-0 ring-1 ring-white/20`,
                      children: (0, A.jsx)(`img`, {
                        src: Po,
                        alt: `Logo Lambang Bintan`,
                        className: `size-8 object-contain`,
                      }),
                    }),
                    (0, A.jsxs)(`div`, {
                      children: [
                        (0, A.jsx)(`span`, {
                          className: `text-lg sm:text-xl font-black tracking-tight block`,
                          children: `DESA WISATA HIJAU DAN KREATIF`,
                        }),
                        (0, A.jsx)(`span`, {
                          className: `block text-xs font-black text-gold`,
                          children: `EKANG ANCULAI`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, A.jsx)(`p`, {
                  className: `mt-3 text-xs font-extrabold italic text-gold`,
                  children: `"Where Nature, Culture, Creativity, and Village Life Grow Together."`,
                }),
                (0, A.jsx)(`p`, {
                  className: `mt-3 text-xs leading-relaxed text-primary-foreground/80`,
                  children: `Kecamatan Teluk Sebong, Kabupaten Bintan, Kepulauan Riau. Mengusung pariwisata berbasis masyarakat (CBT) melalui ekowisata mangrove, Rumah Batik Bintan, perkebunan warga, gastronomi, dan kebudayaan desa.`,
                }),
                (0, A.jsxs)(`form`, {
                  onSubmit: (n) => {
                    (n.preventDefault(),
                      e &&
                        (po.success(
                          `Terima kasih! Anda berhasil mendaftar newsletter info wisata Desa Ekang Anculai.`,
                        ),
                        t(``)));
                  },
                  className: `mt-5 space-y-2`,
                  children: [
                    (0, A.jsx)(`label`, {
                      className: `text-[11px] font-extrabold tracking-wider text-gold uppercase`,
                      children: `Langganan Info & Kunjungan Desa`,
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `flex items-center rounded-full bg-primary-foreground/15 p-1 border border-primary-foreground/20`,
                      children: [
                        (0, A.jsx)(`input`, {
                          type: `email`,
                          required: !0,
                          placeholder: `Email Anda...`,
                          value: e,
                          onChange: (e) => t(e.target.value),
                          className: `w-full bg-transparent px-3 py-1.5 text-xs text-primary-foreground outline-none placeholder:text-primary-foreground/60`,
                        }),
                        (0, A.jsx)(`button`, {
                          type: `submit`,
                          "aria-label": `Daftar newsletter`,
                          className: `grid size-8 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground transition-transform hover:scale-105`,
                          children: (0, A.jsx)(ja, { className: `size-3.5` }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, A.jsxs)(`div`, {
              children: [
                (0, A.jsx)(`h3`, {
                  className: `text-xs font-bold tracking-wider text-gold uppercase`,
                  children: `Navigasi Utama`,
                }),
                (0, A.jsx)(`ul`, {
                  className: `mt-4 space-y-2.5`,
                  children: Ro.map((e) =>
                    (0, A.jsx)(
                      `li`,
                      {
                        children: (0, A.jsx)(`a`, {
                          href: e.href,
                          className: `text-xs text-primary-foreground/80 transition-colors hover:text-gold`,
                          children: e.label,
                        }),
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
            (0, A.jsxs)(`div`, {
              children: [
                (0, A.jsx)(`h3`, {
                  className: `text-xs font-bold tracking-wider text-gold uppercase`,
                  children: `Potensi & Pengalaman`,
                }),
                (0, A.jsx)(`ul`, {
                  className: `mt-4 space-y-2.5`,
                  children: zo.map((e) =>
                    (0, A.jsx)(
                      `li`,
                      {
                        children: (0, A.jsx)(`a`, {
                          href: e.href,
                          className: `text-xs text-primary-foreground/80 transition-colors hover:text-gold`,
                          children: e.label,
                        }),
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
            (0, A.jsxs)(`div`, {
              children: [
                (0, A.jsx)(`h3`, {
                  className: `text-xs font-bold tracking-wider text-gold uppercase`,
                  children: `Kontak Pengelola`,
                }),
                (0, A.jsxs)(`ul`, {
                  className: `mt-4 space-y-3 text-xs text-primary-foreground/80`,
                  children: [
                    (0, A.jsxs)(`li`, {
                      className: `flex gap-3`,
                      children: [
                        (0, A.jsx)(Ca, { className: `mt-0.5 size-4 shrink-0 text-gold` }),
                        (0, A.jsx)(`span`, {
                          children: `Jl. Jendral Sudirman, Kp. Sukoharjo, Ekang Anculai, Teluk Sebong, Bintan 29151`,
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`li`, {
                      className: `flex gap-3`,
                      children: [
                        (0, A.jsx)(Aa, { className: `size-4 shrink-0 text-gold` }),
                        (0, A.jsxs)(`div`, {
                          children: [
                            (0, A.jsx)(`a`, {
                              href: `https://wa.me/${Je}`,
                              target: `_blank`,
                              rel: `noreferrer`,
                              className: `hover:text-gold transition-colors font-bold block`,
                              children: `+62 878 6633 1231 (WA Pengelola)`,
                            }),
                            (0, A.jsx)(`span`, {
                              className: `text-[10px] opacity-75`,
                              children: `Layanan Informasi 08.00–17.00 WIB`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`li`, {
                      className: `flex gap-3`,
                      children: [
                        (0, A.jsx)(Sa, { className: `size-4 shrink-0 text-gold` }),
                        (0, A.jsx)(`a`, {
                          href: `mailto:reservation@desawisataekanganculai.id`,
                          className: `hover:text-gold transition-colors`,
                          children: `reservation@desawisataekanganculai.id`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, A.jsx)(`div`, {
                  className: `mt-5 flex gap-2`,
                  children: [
                    { Icon: ba, label: `Instagram`, href: `https://instagram.com/desawisataekang` },
                    { Icon: ha, label: `Facebook`, href: `https://facebook.com` },
                    { Icon: Da, label: `TikTok`, href: `https://tiktok.com` },
                  ].map(({ Icon: e, label: t, href: n }) =>
                    (0, A.jsx)(
                      `a`,
                      {
                        href: n,
                        target: `_blank`,
                        rel: `noreferrer`,
                        "aria-label": t,
                        className: `grid size-9 place-items-center rounded-full bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-gold-foreground`,
                        children: (0, A.jsx)(e, { className: `size-4` }),
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        (0, A.jsxs)(`div`, {
          className: `flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between`,
          children: [
            (0, A.jsxs)(`p`, {
              children: [
                `© `,
                new Date().getFullYear(),
                ` Desa Wisata Ekang Anculai, Kabupaten Bintan. Hak cipta dilindungi undang-undang.`,
              ],
            }),
            (0, A.jsxs)(`div`, {
              className: `flex gap-5`,
              children: [
                (0, A.jsx)(`a`, {
                  href: `https://desaekanganculai.bintankab.go.id/`,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `hover:text-gold`,
                  children: `Portal Resmi Pemdes Ekang Anculai ↗`,
                }),
                (0, A.jsx)(`a`, {
                  href: `https://www.bintankab.go.id/`,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `hover:text-gold`,
                  children: `Pemkab Bintan ↗`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Vo() {
  let e = `https://wa.me/${Je}?text=Halo%20Pengelola%20Desa%20Wisata%20Ekang%20Anculai%2C%20saya%20ingin%20mengetahui%20informasi%20tentang%20Desa%20Wisata%20Ekang%20Anculai.`;
  return (0, A.jsx)(`aside`, {
    "aria-label": `Kontak WhatsApp Melayang`,
    className: `fixed right-6 z-50`,
    style: { bottom: `calc(1.5rem + env(safe-area-inset-bottom, 0px))` },
    children: (0, A.jsxs)(`a`, {
      href: e,
      target: `_blank`,
      rel: `noopener noreferrer`,
      title: `Hubungi Pengelola Desa Wisata Ekang Anculai via WhatsApp`,
      "aria-label": `Hubungi Pengelola Desa Wisata Ekang Anculai via WhatsApp`,
      className: `group relative flex size-14 items-center justify-center rounded-full bg-[#14532D] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#064E3B] active:scale-95 ring-4 ring-[#14532D]/30 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#C58A32]`,
      children: [
        (0, A.jsx)(Ta, { className: `size-7 text-white fill-current` }),
        (0, A.jsx)(`span`, { className: `sr-only`, children: `Tanya Pengelola WA` }),
      ],
    }),
  });
}
var Ho = ({ ...e }) =>
  (0, A.jsx)(Eo, {
    className: `toaster group`,
    toastOptions: {
      classNames: {
        toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
        description: `group-[.toast]:text-muted-foreground`,
        actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
        cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`,
      },
    },
    ...e,
  });
function Uo() {
  return (0, A.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, A.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, A.jsx)(`h1`, { className: `text-7xl font-bold text-foreground`, children: `404` }),
        (0, A.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Halaman Tidak Ditemukan`,
        }),
        (0, A.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.`,
        }),
        (0, A.jsx)(`div`, {
          className: `mt-6`,
          children: (0, A.jsx)(Me, {
            to: `/`,
            className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
            children: `Kembali ke Profil Wisata Ekang Anculai`,
          }),
        }),
      ],
    }),
  });
}
function Wo({ error: e, reset: t }) {
  let n = Ae();
  return (
    (0, k.useEffect)(() => {
      ea(e, { boundary: `tanstack_root_error_component` });
    }, [e]),
    (0, A.jsx)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: (0, A.jsxs)(`div`, {
        className: `max-w-xl text-center`,
        children: [
          (0, A.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight text-foreground`,
            children: `Terjadi Kendala Memuat Halaman`,
          }),
          (0, A.jsx)(`p`, {
            className: `mt-2 text-sm text-muted-foreground`,
            children: `Sistem mengalami kendala sementara saat memuat data. Silakan coba muat ulang halaman.`,
          }),
          !1,
          (0, A.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-2`,
            children: [
              (0, A.jsx)(`button`, {
                onClick: () => {
                  (n.invalidate(), t());
                },
                className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer`,
                children: `Coba Lagi`,
              }),
              (0, A.jsx)(`a`, {
                href: `/`,
                className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent cursor-pointer`,
                children: `Kembali ke Beranda`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var Go = hr()({
  head: () => ({
    meta: [
      { charSet: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { name: `theme-color`, content: `#0d5c3a` },
      { title: `Desa Wisata Ekang Anculai | Desa Wisata Hijau dan Kreatif Bintan` },
      {
        name: `description`,
        content: `Jelajahi Desa Wisata Ekang Anculai di Teluk Sebong, Bintan. Temukan pengalaman berbasis masyarakat melalui budaya, batik, perkebunan, mangrove, gastronomi, dan kehidupan desa.`,
      },
      { name: `author`, content: `Pemerintah & Pengelola Desa Wisata Ekang Anculai` },
      { property: `og:type`, content: `website` },
      { property: `og:site_name`, content: `Desa Wisata Ekang Anculai` },
      { property: `og:locale`, content: `id_ID` },
      {
        property: `og:title`,
        content: `Desa Wisata Ekang Anculai | Desa Wisata Hijau dan Kreatif Bintan`,
      },
      {
        property: `og:description`,
        content: `Jelajahi Desa Wisata Ekang Anculai di Teluk Sebong, Bintan. Temukan pengalaman berbasis masyarakat melalui budaya, batik, perkebunan, mangrove, gastronomi, dan kehidupan desa.`,
      },
      {
        property: `og:image`,
        content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
      },
      { name: `twitter:card`, content: `summary_large_image` },
      {
        name: `twitter:title`,
        content: `Desa Wisata Ekang Anculai | Desa Wisata Hijau dan Kreatif Bintan`,
      },
      {
        name: `twitter:description`,
        content: `Where Nature, Culture, Creativity, and Village Life Grow Together. Destinasi wisata berbasis masyarakat di Teluk Sebong, Bintan.`,
      },
      {
        name: `twitter:image`,
        content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
      },
    ],
    links: [
      { rel: `stylesheet`, href: $i },
      { rel: `preconnect`, href: `https://fonts.googleapis.com` },
      { rel: `preconnect`, href: `https://fonts.gstatic.com`, crossOrigin: `anonymous` },
      {
        rel: `stylesheet`,
        href: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap`,
      },
      { rel: `icon`, href: `/favicon.ico`, type: `image/x-icon` },
      { rel: `icon`, type: `image/png`, sizes: `32x32`, href: `/favicon-32x32.png` },
      { rel: `icon`, type: `image/png`, sizes: `16x16`, href: `/favicon-16x16.png` },
      { rel: `apple-touch-icon`, sizes: `180x180`, href: `/apple-touch-icon.png` },
      { rel: `manifest`, href: `/site.webmanifest` },
    ],
  }),
  shellComponent: Ko,
  component: qo,
  notFoundComponent: Uo,
  errorComponent: Wo,
});
function Ko({ children: e }) {
  return (0, A.jsxs)(`html`, {
    lang: `id`,
    children: [
      (0, A.jsx)(`head`, { children: (0, A.jsx)(Gr, {}) }),
      (0, A.jsxs)(`body`, { children: [e, (0, A.jsx)(Kr, {})] }),
    ],
  });
}
function qo() {
  let { queryClient: e } = Go.useRouteContext(),
    t = Br({ select: (e) => e.location.pathname }).startsWith(`/admin`);
  return (
    (0, k.useEffect)(() => {
      ne.recordVisit();
    }, []),
    (0, A.jsxs)(Qi, {
      client: e,
      children: [
        !t && (0, A.jsx)(Lo, {}),
        (0, A.jsx)(`main`, { children: (0, A.jsx)(jr, {}) }),
        !t && (0, A.jsx)(Bo, {}),
        !t && (0, A.jsx)(Vo, {}),
        (0, A.jsx)(Ho, { position: `top-center` }),
      ],
    })
  );
}
var Jo = `modulepreload`,
  Yo = function (e) {
    return `/` + e;
  },
  Xo = {},
  Zo = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve ? import.meta.resolve(e) : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = Yo(t, n)), (t = s(t)), t in Xo)) return;
          Xo[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : Jo),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`))));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Qo = vr(`/`)({
    head: () => ({
      meta: [
        {
          title: `Desa Wisata Hijau dan Kreatif Ekang Anculai | Where Nature, Culture, Creativity, and Village Life Grow Together.`,
        },
        {
          name: `description`,
          content: `Desa Wisata Hijau dan Kreatif Ekang Anculai, Bintan — Where Nature, Culture, Creativity, and Village Life Grow Together. Nikmati pengalaman autentik membatik, perkebunan warga, gastronomi, mangrove, budaya, dan Homestay Rumah Warga.`,
        },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: `https://desawisataekanganculai.id/` },
        { property: `og:title`, content: `Desa Wisata Hijau dan Kreatif Ekang Anculai` },
        {
          property: `og:description`,
          content: `Where Nature, Culture, Creativity, and Village Life Grow Together. Destinasi wisata berbasis masyarakat di Teluk Sebong, Bintan.`,
        },
        {
          property: `og:image`,
          content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
        },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:title`, content: `Desa Wisata Hijau dan Kreatif Ekang Anculai` },
        {
          name: `twitter:description`,
          content: `Where Nature, Culture, Creativity, and Village Life Grow Together. Destinasi wisata berbasis masyarakat di Teluk Sebong, Bintan.`,
        },
        {
          name: `twitter:image`,
          content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://desawisataekanganculai.id/` }],
    }),
    component: br(
      () =>
        Zo(
          () => import(`./routes-OLBTI2i8.js`),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        ),
      `component`,
    ),
  }),
  $o = vr(`/admin`)({
    head: () => ({
      meta: [
        { title: `Admin Panel | Pengelolaan Desa Wisata Ekang Anculai` },
        { name: `robots`, content: `noindex, nofollow` },
      ],
    }),
    component: br(
      () => Zo(() => import(`./admin-CFABHb3T.js`), __vite__mapDeps([11, 1, 2, 3, 4, 12, 7, 13])),
      `component`,
    ),
  }),
  es = vr(`/galeri`)({
    head: () => ({
      meta: [
        { title: `Galeri Foto | Desa Wisata Ekang Anculai Bintan` },
        {
          name: `description`,
          content: `Galeri foto dokumentasi Desa Wisata Ekang Anculai: alam, mangrove, perkebunan, batik, budaya, gastronomi, homestay, dan aktivitas masyarakat.`,
        },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: `https://desawisataekanganculai.id/galeri` },
        { property: `og:title`, content: `Galeri Foto | Desa Wisata Ekang Anculai Bintan` },
        {
          property: `og:description`,
          content: `Galeri foto dokumentasi Desa Wisata Ekang Anculai: alam, mangrove, perkebunan, batik, budaya, gastronomi, homestay, dan aktivitas masyarakat.`,
        },
        {
          property: `og:image`,
          content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
        },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:title`, content: `Galeri Foto | Desa Wisata Ekang Anculai Bintan` },
        {
          name: `twitter:description`,
          content: `Dokumentasi keindahan alam, budaya, membatik, dan kehidupan masyarakat Desa Wisata Ekang Anculai Bintan.`,
        },
        {
          name: `twitter:image`,
          content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://desawisataekanganculai.id/galeri` }],
    }),
    component: br(
      () => Zo(() => import(`./galeri-Jw2VUvs5.js`), __vite__mapDeps([14, 1, 2, 3, 4, 15])),
      `component`,
    ),
  });
function ts(e) {
  if (!e || typeof e != `string` || !e.trim() || e === `#`) return !1;
  try {
    let t = new URL(e.trim()).pathname.toLowerCase();
    return /\.(jpg|jpeg|png|webp|gif|svg|bmp|ico)$/i.test(t) ||
      [
        ``,
        `/`,
        `/index.html`,
        `/index.php`,
        `/index.htm`,
        `/home`,
        `/home/`,
        `/berita`,
        `/berita/`,
        `/artikel`,
        `/artikel/`,
      ].includes(t)
      ? !1
      : t.length > 3 &&
          (t.includes(`-`) ||
            t.includes(`_`) ||
            /\d/.test(t) ||
            t.split(`/`).filter(Boolean).length >= 2);
  } catch {
    return !1;
  }
}
function ns({ source: e }) {
  if (!e || (!e.name && !e.url)) return null;
  let t = ts(e.url);
  return (0, A.jsx)(`div`, {
    className: `mt-2.5 border-t border-border/40 pt-2 text-[11px] text-muted-foreground/80 font-medium`,
    children: (0, A.jsxs)(`div`, {
      className: `flex flex-wrap items-center justify-between gap-1.5`,
      children: [
        e.name
          ? (0, A.jsxs)(`span`, {
              className: `truncate max-w-[280px] sm:max-w-none opacity-85`,
              children: [
                (0, A.jsx)(`span`, {
                  className: `font-semibold text-foreground/80`,
                  children: `Sumber:`,
                }),
                ` `,
                e.name,
                e.publishedAt &&
                  (0, A.jsxs)(`span`, {
                    className: `ml-1 opacity-75`,
                    children: [`• `, e.publishedAt],
                  }),
              ],
            })
          : (0, A.jsx)(`span`, {}),
        t &&
          (0, A.jsxs)(`a`, {
            href: e.url,
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: `inline-flex items-center gap-1 font-semibold text-muted-foreground hover:text-primary transition-colors shrink-0`,
            title: `Buka artikel publikasi resmi: ${e.name || `Sumber`}`,
            children: [
              (0, A.jsx)(`span`, { children: `Baca sumber asli` }),
              (0, A.jsx)(Be, { className: `size-3 opacity-70` }),
            ],
          }),
      ],
    }),
  });
}
var rs = {
  "🎨": Oa,
  batik: Oa,
  creative: Oa,
  "🌱": Fa,
  farm: Fa,
  farming: Fa,
  kebun: Fa,
  "🍠": za,
  "🍽️": za,
  culinary: za,
  gastronomy: pa,
  kuliner: za,
  dining: za,
  "🧺": xa,
  craft: xa,
  kerajinan: xa,
  "🌿": La,
  mangrove: La,
  nature: La,
  alam: La,
  compass: fa,
  "🏺": ma,
  "🎭": ma,
  culture: ma,
  budaya: ma,
  reog: ma,
  "🛍️": _a,
  "🎁": _a,
  souvenir: _a,
  "oleh-oleh": _a,
  oleholeh: _a,
  gift: _a,
  shopping: Na,
  "👥": Ra,
  "🤝": va,
  community: Ra,
  masyarakat: Ra,
  kegiatan: Ra,
  umkm: Na,
  homestay: ya,
  "🏡": ya,
  "🌙": Ea,
  night: Ea,
  "☕": da,
  breakfast: da,
  "🚶": ga,
  walk: ga,
  "📸": ia,
  camera: ia,
  "👋": va,
  farewell: va,
};
function is({ icon: e, className: t = `size-5` }) {
  let n = rs[(e || ``).toLowerCase().trim()] || rs[e] || Pa;
  return (0, A.jsx)(n, { className: t });
}
var as = `https://desawisataekanganculai.id`;
function os({ data: e }) {
  if (!e) return null;
  let t = JSON.stringify(e).replace(/</g, `\\u003c`).replace(/>/g, `\\u003e`);
  return (0, A.jsx)(`script`, {
    type: `application/ld+json`,
    dangerouslySetInnerHTML: { __html: t },
  });
}
function ss(e, t = []) {
  let n = ({}.SITE_URL || as).replace(/\/$/, ``),
    r = t.length > 0 ? (t.reduce((e, t) => e + (t.rating || 5), 0) / t.length).toFixed(1) : null,
    i = {
      "@context": `https://schema.org`,
      "@type": [`TouristDestination`, `LocalBusiness`],
      "@id": `${n}/#village`,
      name: e?.nama || `Desa Wisata Ekang Anculai`,
      description:
        e?.tagline ||
        `Desa Wisata Hijau dan Kreatif Bintan. Destinasi ekowisata berbasis masyarakat di Kecamatan Teluk Sebong, Kabupaten Bintan, Kepulauan Riau.`,
      url: n,
      telephone: e?.whatsapp || `+6281268326284`,
      email: e?.email || `reservation@desawisataekanganculai.id`,
      address: {
        "@type": `PostalAddress`,
        streetAddress: e?.alamat || `Jl. Jendral Sudirman, Kp. Sukoharjo, Desa Ekang Anculai`,
        addressLocality: `Teluk Sebong`,
        addressRegion: `Kepulauan Riau`,
        addressCountry: `ID`,
      },
      geo: { "@type": `GeoCoordinates`, latitude: 1.1345, longitude: 104.4211 },
      openingHours: `Mo-Su 08:00-17:00`,
      priceRange: `$$`,
      touristType: [`Ecotourist`, `Cultural Tourist`, `Family Tourist`, `Nature Lover`],
    };
  return (
    r &&
      t.length > 0 &&
      (i.aggregateRating = {
        "@type": `AggregateRating`,
        ratingValue: r,
        reviewCount: t.length,
        bestRating: `5`,
        worstRating: `1`,
      }),
    i
  );
}
function cs(e) {
  let t = ({}.SITE_URL || as).replace(/\/$/, ``);
  return {
    "@context": `https://schema.org`,
    "@type": `TouristAttraction`,
    name: e.nama,
    description: e.deskripsi,
    image: e.image,
    url: `${t}/desa/${e.id}`,
    touristType: [e.kategori || `Wisata Alam`],
    location: {
      "@type": `Place`,
      name: `Desa Wisata Ekang Anculai`,
      address: {
        "@type": `PostalAddress`,
        addressLocality: `Teluk Sebong`,
        addressRegion: `Kepulauan Riau`,
        addressCountry: `ID`,
      },
    },
  };
}
function ls(e) {
  let t = ({}.SITE_URL || as).replace(/\/$/, ``);
  return {
    "@context": `https://schema.org`,
    "@type": `BreadcrumbList`,
    itemListElement: e.map((e, n) => ({
      "@type": `ListItem`,
      position: n + 1,
      name: e.name,
      item: e.url.startsWith(`http`) ? e.url : `${t}${e.url}`,
    })),
  };
}
function us(e) {
  return {
    "@context": `https://schema.org`,
    "@type": `FAQPage`,
    mainEntity: e.map((e) => ({
      "@type": `Question`,
      name: e.pertanyaan,
      acceptedAnswer: { "@type": `Answer`, text: e.jawaban },
    })),
  };
}
var ds = vr(`/rencanakan-kunjungan`)({
    head: () => ({
      meta: [
        { title: `Paket & Rancang Wisata Kustom Ekang Anculai | Desa Wisata Hijau dan Kreatif` },
        {
          name: `description`,
          content: `Pilih paket wisata resmi (Full Day, 2D1N Live-in Homestay) atau rancang paket kustom sendiri sesuai kebutuhan keluarga, komunitas, dan rombongan di Desa Wisata Ekang Anculai Bintan.`,
        },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: `https://desawisataekanganculai.id/rencanakan-kunjungan` },
        {
          property: `og:title`,
          content: `Paket & Rancang Wisata Kustom Ekang Anculai | Desa Wisata Hijau dan Kreatif`,
        },
        {
          property: `og:description`,
          content: `Rencanakan perjalanan wisata autentik di Desa Ekang Anculai Bintan: edukasi membatik, agrowisata, mangrove, budaya, dan Homestay Desa.`,
        },
        {
          property: `og:image`,
          content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
        },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:title`, content: `Paket & Pengalaman Wisata Ekang Anculai Bintan` },
        {
          name: `twitter:description`,
          content: `Rencanakan perjalanan wisata autentik di Desa Ekang Anculai Bintan: edukasi membatik, agrowisata, mangrove, budaya, dan Homestay Desa.`,
        },
        {
          name: `twitter:image`,
          content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://desawisataekanganculai.id/rencanakan-kunjungan` }],
    }),
    component: ms,
  }),
  fs = [
    {
      id: `mod-batik`,
      nama: `Edukasi & Workshop Membatik Bintan`,
      kategori: `Kreativitas & Kriya`,
      estimasi: `± 2 Jam`,
      icon: `batik`,
      deskripsi: `Belajar teknik mencanting batik tulis & cap motif khas Bintan, serta membawa pulang hasil karya kain suvenir sendiri.`,
      keunggulan: `Termasuk bahan canting, malam lilin, kain mori, dan bimbingan perajin lokal`,
    },
    {
      id: `mod-mangrove`,
      nama: `Susur Kawasan Hutan Mangrove & Boardwalk`,
      kategori: `Ekowisata & Alam`,
      estimasi: `± 1.5 Jam`,
      icon: `mangrove`,
      deskripsi: `Menyusuri jembatan kayu ratusan meter melintasi hutan bakau pedalaman, edukasi ekosistem karbon & pengamatan satwa pesisir.`,
      keunggulan: `Pemandangan sunset dan jalur asri bebas polusi`,
    },
    {
      id: `mod-kebun`,
      nama: `Pengalaman Tani & Berkebun Bersama Petani`,
      kategori: `Agrowisata`,
      estimasi: `± 1.5 Jam`,
      icon: `farm`,
      deskripsi: `Bercocok tanam langsung di lahan perkebunan masyarakat, mencangkul, merawat tanaman, dan memanen sayuran segar bersama warga.`,
      keunggulan: `Interaksi langsung dan pengalaman nyata kehidupan tani`,
    },
    {
      id: `mod-reog`,
      nama: `Atraksi Kesenian Reog Sedulur Manunggal`,
      kategori: `Kesenian Budaya`,
      estimasi: `± 1.5 Jam`,
      icon: `culture`,
      deskripsi: `Pementasan atraksi seni tari Reog fersi Kendang Kempul diiringi instrumen gamelan kolosal oleh sanggar seni pemuda desa.`,
      keunggulan: `Kesenian budaya autentik kebanggaan masyarakat desa`,
    },
    {
      id: `mod-kuliner`,
      nama: `Wisata Kuliner & Olahan Rengginang Comel`,
      kategori: `Kuliner & UMKM`,
      estimasi: `± 1 Jam`,
      icon: `culinary`,
      deskripsi: `Mengenal proses pembuatan Rengginang Comel aneka warna Halal di Dapur Rub, olahan ubi & pisang, serta mencicipi camilan khas desa.`,
      keunggulan: `Icip-icip camilan gurih renyah & belanja produk UMKM lokal`,
    },
    {
      id: `mod-teko`,
      nama: `Ruang Budaya Teko Kayangan & RTH Desa`,
      kategori: `Ruang Publik`,
      estimasi: `± 1 Jam`,
      icon: `culture`,
      deskripsi: `Kunjungan ke landmark teko air melayang, bersantai di ruang terbuka hijau desa, dan berdiskusi hangat bersama tokoh masyarakat.`,
      keunggulan: `Spot foto ikonik & ruang komunitas asri`,
    },
    {
      id: `mod-homestay`,
      nama: `Live-in Homestay Rumah Warga`,
      kategori: `Akomodasi Desa`,
      estimasi: `1 Malam`,
      icon: `homestay`,
      deskripsi: `Menginap di kamar keluarga warga desa, merasakan keramahan tuan rumah, sarapan masakan rumahan, dan suasana malam pedesaan.`,
      keunggulan: `Kamar bersih berstandar CBT dengan suasana hangat kekeluargaan`,
    },
    {
      id: `mod-sepeda`,
      nama: `Gowes Keliling Desa & Sentra Kerajinan`,
      kategori: `Jelajah Santai`,
      estimasi: `± 1 Jam`,
      icon: `tour`,
      deskripsi: `Bersepeda santai menyusuri jalan asri perkampungan, menyapa warga desa, dan singgah di galeri kriya suvenir lokal.`,
      keunggulan: `Aktivitas luar ruang yang menyegarkan raga dan pikiran`,
    },
  ],
  ps = [
    {
      id: `fac-lunch`,
      label: `Makan Siang Tradisional Prasmanan Desa (Gulai Daun Ubi, Ikan Segar & Sambal)`,
    },
    { id: `fac-dinner`, label: `Makan Malam Bersama Keluarga Tuan Rumah (Untuk Paket Menginap)` },
    { id: `fac-coconut`, label: `Welcome Drink Air Kelapa Muda Asli Petik Kebun Warga` },
    { id: `fac-guide`, label: `Pemandu Wisata Lokal (Local Tour Guide) Berlisensi` },
    { id: `fac-photo`, label: `Dokumentasi Foto & Video Kegiatan Selama Kunjungan` },
    {
      id: `fac-transport`,
      label: `Layanan Transportasi Antar-Jemput (Pelabuhan BBT Lagoi / Tanjung Uban / TPI)`,
    },
  ];
function ms() {
  let [e, t] = (0, k.useState)(!1),
    [n, r] = (0, k.useState)(`fullday`),
    [i, a] = (0, k.useState)(1),
    [o, s] = (0, k.useState)(null),
    [c, l] = (0, k.useState)(null),
    [u, d] = (0, k.useState)(`Full Day (±8 Jam)`),
    [f, p] = (0, k.useState)(`Keluarga / Family Trip`),
    [m, _] = (0, k.useState)(`3 - 6 Orang`),
    [v, y] = (0, k.useState)([`mod-batik`, `mod-mangrove`, `mod-kebun`, `mod-kuliner`]),
    [b, x] = (0, k.useState)([`fac-lunch`, `fac-coconut`, `fac-guide`]),
    S = ee(),
    te = S?.fullDay || Ye,
    ne = S?.twoDay || qe,
    re = S?.cbtExperiences || Ge,
    ie = S?.galeriCategories || Xe,
    ae = S?.villageInfo?.whatsapp || `6283166341280`,
    oe = ls([
      { name: `Beranda`, url: `/` },
      { name: `Paket & Rencanakan Kunjungan`, url: `/rencanakan-kunjungan` },
    ]),
    se = `Halo%20Pengelola%20Desa%20Wisata%20Ekang%20Anculai%2C%20saya%20tertarik%20dengan%20Paket%20Wisata%20Full%20Day%20(1%20Hari).%20Mohon%20informasi%20ketersediaan%20jadwal%2C%20rincian%20biaya%2C%20dan%20panduan%20reservasi.`,
    ce = (0, k.useMemo)(() => {
      let e = fs
          .filter((e) => v.includes(e.id))
          .map((e, t) => `   ${t + 1}. ${e.nama} (${e.estimasi})`).join(`
`),
        t = ps.filter((e) => b.includes(e.id)).map((e) => `   - ${e.label}`).join(`
`),
        n = `Halo Pengelola Desa Wisata Ekang Anculai, saya ingin konsultasi RANCANGAN PAKET WISATA KUSTOM:

• Pilihan Durasi: ${u}
• Tipe Rombongan: ${f} (${m})
• Modul Aktivitas yang Dipilih (${v.length} Aktivitas):
${e || `   (Belum memilih modul aktivitas)`}

• Fasilitas Tambahan (${b.length} Fasilitas):
${t || `   (Fasilitas standar)`}

Mohon informasi perkiraan anggaran biaya, rekomendasi jadwal terbaik, dan panduan reservasi. Terima kasih!`;
      return `https://wa.me/${ae}?text=${encodeURIComponent(n)}`;
    }, [u, f, m, v, b, ae]),
    le = (e) => {
      y((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
    },
    ue = (e) => {
      x((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
    },
    w = (e) => {
      e === `edukasi`
        ? (d(`Full Day (±8 Jam)`),
          p(`Sekolah / Kampus / Edukasi`),
          _(`15 - 30 Orang`),
          y([`mod-batik`, `mod-mangrove`, `mod-kebun`, `mod-kuliner`]),
          x([`fac-lunch`, `fac-coconut`, `fac-guide`, `fac-photo`]))
        : e === `keluarga`
          ? (d(`Full Day (±8 Jam)`),
            p(`Keluarga / Family Trip`),
            _(`3 - 6 Orang`),
            y([`mod-batik`, `mod-kuliner`, `mod-teko`, `mod-mangrove`]),
            x([`fac-lunch`, `fac-coconut`, `fac-guide`]))
          : e === `budaya` &&
            (d(`2 Hari 1 Malam (Menginap Homestay)`),
            p(`Komunitas / Pemerhati Budaya`),
            _(`5 - 12 Orang`),
            y([`mod-homestay`, `mod-batik`, `mod-reog`, `mod-mangrove`, `mod-kuliner`, `mod-teko`]),
            x([
              `fac-lunch`,
              `fac-dinner`,
              `fac-coconut`,
              `fac-guide`,
              `fac-photo`,
              `fac-transport`,
            ]));
    };
  return (0, A.jsxs)(`div`, {
    className: `min-h-screen bg-surface pt-20 pb-24 text-foreground selection:bg-primary/20 selection:text-primary`,
    children: [
      (0, A.jsx)(os, { data: oe }),
      (0, A.jsxs)(`section`, {
        className: `relative overflow-hidden bg-card border-b border-border/80 py-16 sm:py-24`,
        children: [
          (0, A.jsx)(`div`, {
            className: `pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-3xl`,
          }),
          (0, A.jsx)(`div`, {
            className: `pointer-events-none absolute top-1/2 right-0 size-80 rounded-full bg-gold/10 blur-3xl`,
          }),
          (0, A.jsx)(`div`, {
            className: `relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`,
            children: (0, A.jsxs)(`div`, {
              className: `grid gap-12 lg:grid-cols-12 lg:items-center`,
              children: [
                (0, A.jsxs)(`div`, {
                  className: `lg:col-span-7`,
                  children: [
                    (0, A.jsxs)(`div`, {
                      className: `flex flex-wrap items-center gap-2`,
                      children: [
                        (0, A.jsxs)(`span`, {
                          className: `inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/30 px-3.5 py-1 text-xs font-extrabold text-primary uppercase tracking-wider`,
                          children: [
                            (0, A.jsx)(Pa, { className: `size-3.5` }),
                            `Community Based Tourism (CBT)`,
                          ],
                        }),
                        (0, A.jsxs)(`span`, {
                          className: `inline-flex items-center gap-1.5 rounded-full bg-gold/20 border border-gold/40 px-3.5 py-1 text-xs font-extrabold text-gold uppercase tracking-wider`,
                          children: [
                            (0, A.jsx)(na, { className: `size-3.5` }),
                            `Desa Wisata Bintan 2026`,
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`h1`, {
                      className: `mt-5 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.12]`,
                      children: [
                        `Paket Wisata Resmi & `,
                        (0, A.jsx)(`br`, { className: `hidden sm:inline` }),
                        (0, A.jsx)(`span`, {
                          className: `gradient-text`,
                          children: `Rancang Paket Kustom`,
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`p`, {
                      className: `mt-4 text-base sm:text-xl font-bold text-emerald-800 dark:text-emerald-300 italic`,
                      children: [`"`, te.tema, `"`],
                    }),
                    (0, A.jsx)(`p`, {
                      className: `mt-4 text-xs sm:text-base leading-relaxed text-muted-foreground font-medium max-w-2xl`,
                      children: `Pilih paket perjalanan resmi siap berangkat atau rangkai sendiri modul aktivitas sesuai keinginan Anda. Dari edukasi membatik canting, bertani sayur, susur hutan mangrove, kesenian Reog, hingga live-in homestay ramah keluarga.`,
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/80 max-w-2xl`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          className: `rounded-2xl border border-border bg-surface p-3 text-center`,
                          children: [
                            (0, A.jsx)(`p`, {
                              className: `text-xs font-bold text-muted-foreground`,
                              children: `Konsep`,
                            }),
                            (0, A.jsx)(`p`, {
                              className: `text-sm font-extrabold text-primary mt-0.5`,
                              children: `100% CBT Desa`,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          className: `rounded-2xl border border-border bg-surface p-3 text-center`,
                          children: [
                            (0, A.jsx)(`p`, {
                              className: `text-xs font-bold text-muted-foreground`,
                              children: `Pilihan Durasi`,
                            }),
                            (0, A.jsx)(`p`, {
                              className: `text-sm font-extrabold text-foreground mt-0.5`,
                              children: `1 Hari / 2D1N / Kustom`,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          className: `rounded-2xl border border-border bg-surface p-3 text-center`,
                          children: [
                            (0, A.jsx)(`p`, {
                              className: `text-xs font-bold text-muted-foreground`,
                              children: `Pemandu`,
                            }),
                            (0, A.jsx)(`p`, {
                              className: `text-sm font-extrabold text-gold mt-0.5`,
                              children: `Warga Lokal`,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          className: `rounded-2xl border border-border bg-surface p-3 text-center`,
                          children: [
                            (0, A.jsx)(`p`, {
                              className: `text-xs font-bold text-muted-foreground`,
                              children: `Aksesibilitas`,
                            }),
                            (0, A.jsx)(`p`, {
                              className: `text-sm font-extrabold text-emerald-600 mt-0.5`,
                              children: `15 Mnt dr Lagoi`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `mt-8 flex flex-wrap items-center gap-3`,
                      children: [
                        (0, A.jsxs)(`a`, {
                          href: `#pilih-paket`,
                          className: `inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-extrabold text-primary-foreground shadow-card transition-all hover:bg-emerald-deep hover:scale-105 cursor-pointer`,
                          children: [
                            (0, A.jsx)(ra, { className: `size-4` }),
                            (0, A.jsx)(`span`, { children: `Jelajahi Pilihan Paket` }),
                            (0, A.jsx)(ta, { className: `size-4` }),
                          ],
                        }),
                        (0, A.jsxs)(`button`, {
                          onClick: () => {
                            (r(`custom`),
                              document
                                .getElementById(`pilih-paket`)
                                ?.scrollIntoView({ behavior: `smooth` }));
                          },
                          className: `inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-extrabold text-gold-foreground shadow-card transition-all hover:bg-gold/90 hover:scale-105 cursor-pointer`,
                          children: [
                            (0, A.jsx)(Ba, { className: `size-4` }),
                            (0, A.jsx)(`span`, { children: `Rancang Paket Kustom ✨` }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, A.jsx)(`div`, {
                  className: `lg:col-span-5`,
                  children: (0, A.jsxs)(`div`, {
                    className: `relative overflow-hidden rounded-3xl border border-border shadow-2xl group`,
                    children: [
                      (0, A.jsx)(`div`, {
                        className: `aspect-[4/3] w-full overflow-hidden bg-muted`,
                        children: (0, A.jsx)(`img`, {
                          src: te.galeri[0]?.image || ie[0]?.image,
                          alt: `Paket & Pengalaman Wisata Ekang Anculai`,
                          className: `size-full object-cover transition-transform duration-700 group-hover:scale-105`,
                        }),
                      }),
                      (0, A.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent`,
                      }),
                      (0, A.jsxs)(`div`, {
                        className: `absolute bottom-5 left-5 right-5 text-white`,
                        children: [
                          (0, A.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, A.jsx)(`span`, {
                                className: `rounded-full bg-gold px-3 py-1 text-[10px] font-black text-gold-foreground uppercase tracking-wider`,
                                children: `Dokumentasi Lapangan`,
                              }),
                              (0, A.jsx)(`span`, {
                                className: `text-[11px] text-white/80 font-medium`,
                                children: `Bintan, Kepulauan Riau`,
                              }),
                            ],
                          }),
                          (0, A.jsx)(`p`, {
                            className: `mt-2 text-sm sm:text-base font-extrabold text-white leading-snug`,
                            children: `Desa Wisata Hijau dan Kreatif Berbasis Pemberdayaan Masyarakat`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      (0, A.jsxs)(`div`, {
        className: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 space-y-24`,
        children: [
          (0, A.jsxs)(`section`, {
            id: `pilih-paket`,
            className: `scroll-mt-28`,
            children: [
              (0, A.jsxs)(`div`, {
                className: `text-center max-w-3xl mx-auto`,
                children: [
                  (0, A.jsx)(`span`, {
                    className: `text-xs font-extrabold text-gold uppercase tracking-wider`,
                    children: `Pilihan Rangkaian Perjalanan`,
                  }),
                  (0, A.jsx)(`h2`, {
                    className: `mt-2 text-2xl sm:text-4xl font-extrabold text-foreground`,
                    children: `Pilih Paket Sesuai Gaya Kunjungan Anda`,
                  }),
                  (0, A.jsx)(`p`, {
                    className: `mt-2 text-xs sm:text-sm text-muted-foreground font-medium`,
                    children: `Tersedia paket resmi terstruktur 1 Hari & 2D1N, serta fitur interaktif Rancang Paket Kustom untuk menyesuaikan aktivitas, fasilitas, dan anggaran rombongan Anda.`,
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-card border border-border p-1.5 shadow-card`,
                    children: [
                      (0, A.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => r(`fullday`),
                        className: `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${n === `fullday` ? `bg-primary text-primary-foreground shadow-sm` : `text-muted-foreground hover:text-foreground`}`,
                        children: [
                          (0, A.jsx)(Ia, { className: `size-4` }),
                          (0, A.jsx)(`span`, { children: `Paket 1: Full Day (1 Hari)` }),
                        ],
                      }),
                      (0, A.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => r(`twoday`),
                        className: `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${n === `twoday` ? `bg-gold text-gold-foreground shadow-sm` : `text-muted-foreground hover:text-foreground`}`,
                        children: [
                          (0, A.jsx)(Ea, { className: `size-4` }),
                          (0, A.jsx)(`span`, { children: `Paket 2: 2 Hari 1 Malam (2D1N)` }),
                        ],
                      }),
                      (0, A.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => r(`custom`),
                        className: `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${n === `custom` ? `bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400` : `text-muted-foreground hover:text-foreground`}`,
                        children: [
                          (0, A.jsx)(Ba, { className: `size-4 text-amber-300` }),
                          (0, A.jsx)(`span`, { children: `Paket 3: Rancang Kustom ✨` }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n === `fullday` &&
                (0, A.jsxs)(`div`, {
                  className: `mt-12 rounded-3xl border border-primary/30 bg-card p-6 sm:p-10 shadow-2xl space-y-10 animate-fade-in`,
                  children: [
                    (0, A.jsxs)(`div`, {
                      className: `flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          children: [
                            (0, A.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, A.jsx)(`span`, {
                                  className: `rounded-full bg-primary/10 px-3.5 py-1 text-xs font-black text-primary uppercase tracking-wider`,
                                  children: `One Day Pass • 1 Hari Penuh`,
                                }),
                                (0, A.jsx)(`span`, {
                                  className: `rounded-full bg-surface border border-border px-3 py-1 text-xs font-bold text-muted-foreground`,
                                  children: `09.00 – 17.00 WIB`,
                                }),
                              ],
                            }),
                            (0, A.jsx)(`h3`, {
                              className: `mt-3 text-2xl sm:text-4xl font-extrabold text-foreground`,
                              children: `Paket Wisata Full Day Ekang Anculai`,
                            }),
                            (0, A.jsxs)(`p`, {
                              className: `mt-1 text-sm sm:text-base font-extrabold text-gold italic`,
                              children: [`"`, te.tema, `"`],
                            }),
                            (0, A.jsx)(`p`, {
                              className: `mt-3 text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed`,
                              children: `Pengalaman satu hari penuh yang memadukan aktivitas edukasi mencanting batik, bertani di kebun sayur masyarakat, menikmati sajian kuliner tradisional, mengenal atraksi seni Reog, dan belanja oleh-oleh UMKM.`,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          className: `flex flex-col sm:flex-row md:flex-col items-stretch gap-3 shrink-0`,
                          children: [
                            (0, A.jsxs)(`a`, {
                              href: `https://wa.me/${ae}?text=${se}`,
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              className: `inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-emerald-deep transition-all`,
                              children: [
                                (0, A.jsx)(Ta, { className: `size-4` }),
                                (0, A.jsx)(`span`, { children: `Konsultasi / Booking via WA` }),
                              ],
                            }),
                            (0, A.jsxs)(`button`, {
                              onClick: () => t(!0),
                              className: `inline-flex items-center justify-center gap-2 rounded-full bg-surface border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent transition-all cursor-pointer`,
                              children: [
                                (0, A.jsx)(ra, { className: `size-4 text-gold` }),
                                (0, A.jsx)(`span`, { children: `Formulir Rencana Wisata` }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `rounded-2xl bg-surface border border-border p-6`,
                      children: [
                        (0, A.jsxs)(`h4`, {
                          className: `text-xs font-black text-primary uppercase tracking-wider flex items-center gap-2`,
                          children: [
                            (0, A.jsx)(Ma, { className: `size-4 text-emerald-600` }),
                            `Fasilitas & Layanan Termasuk:`,
                          ],
                        }),
                        (0, A.jsx)(`div`, {
                          className: `mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-medium text-foreground`,
                          children: [
                            `Pemandu wisata lokal berlisensi`,
                            `Welcome drink & kelapa muda segar`,
                            `Bahan & kain praktik mencanting batik`,
                            `Makan siang kuliner khas desa`,
                            `Tiket masuk kawasan & daya tarik`,
                            `Pendampingan aktivitas tani bersama warga`,
                            `Dokumentasi kegiatan`,
                            `Akses parkir & fasilitas balai desa`,
                          ].map((e, t) =>
                            (0, A.jsxs)(
                              `div`,
                              {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, A.jsx)(la, { className: `size-4 text-emerald-600 shrink-0` }),
                                  (0, A.jsx)(`span`, { children: e }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`div`, {
                      children: [
                        (0, A.jsxs)(`h4`, {
                          className: `text-lg font-extrabold text-foreground mb-6 flex items-center gap-2`,
                          children: [
                            (0, A.jsx)(ua, { className: `size-5 text-primary` }),
                            `Rundown & Jadwal Aktivitas (09.00 – 17.00 WIB)`,
                          ],
                        }),
                        (0, A.jsx)(`div`, {
                          className: `relative pl-6 sm:pl-10 border-l-2 border-primary/30 space-y-8`,
                          children: te.rangkaian.map((e, t) =>
                            (0, A.jsxs)(
                              `div`,
                              {
                                className: `relative group`,
                                children: [
                                  (0, A.jsx)(`div`, {
                                    className: `absolute -left-[37px] sm:-left-[53px] top-1.5 grid size-9 sm:size-10 place-items-center rounded-full bg-primary text-primary-foreground font-black text-xs sm:text-sm shadow-card ring-4 ring-card`,
                                    children: (0, A.jsx)(is, {
                                      icon: e.icon,
                                      className: `size-4 sm:size-5`,
                                    }),
                                  }),
                                  (0, A.jsxs)(`div`, {
                                    className: `rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft hover:border-primary/40 transition-all`,
                                    children: [
                                      (0, A.jsxs)(`div`, {
                                        className: `flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3`,
                                        children: [
                                          (0, A.jsxs)(`div`, {
                                            children: [
                                              (0, A.jsxs)(`div`, {
                                                className: `flex items-center gap-2`,
                                                children: [
                                                  (0, A.jsx)(`span`, {
                                                    className: `text-xs font-black text-gold uppercase`,
                                                    children: e.num,
                                                  }),
                                                  (0, A.jsx)(`span`, {
                                                    className: `rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-extrabold text-primary`,
                                                    children: e.kategori,
                                                  }),
                                                ],
                                              }),
                                              (0, A.jsx)(`h5`, {
                                                className: `mt-1 text-base sm:text-lg font-extrabold text-foreground`,
                                                children: e.judul,
                                              }),
                                            ],
                                          }),
                                          (0, A.jsxs)(`span`, {
                                            className: `inline-block rounded-xl bg-card px-3 py-1 text-xs font-black text-primary border border-border shrink-0 self-start sm:self-auto`,
                                            children: [e.waktu, ` WIB`],
                                          }),
                                        ],
                                      }),
                                      (0, A.jsx)(`p`, {
                                        className: `mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium`,
                                        children: e.deskripsi,
                                      }),
                                      (0, A.jsx)(`div`, {
                                        className: `mt-3 grid gap-1.5 sm:grid-cols-2 pt-2 border-t border-border/40 text-xs font-medium text-foreground`,
                                        children: e.isi.map((e, t) =>
                                          (0, A.jsxs)(
                                            `div`,
                                            {
                                              className: `flex items-start gap-2`,
                                              children: [
                                                (0, A.jsx)(aa, {
                                                  className: `size-3.5 text-emerald-600 shrink-0 mt-0.5`,
                                                }),
                                                (0, A.jsx)(`span`, {
                                                  className: `leading-snug`,
                                                  children: e,
                                                }),
                                              ],
                                            },
                                            t,
                                          ),
                                        ),
                                      }),
                                      (0, A.jsxs)(`div`, {
                                        className: `mt-4 pt-3 border-t border-border/60 flex items-center justify-between`,
                                        children: [
                                          e.linkRef?.url
                                            ? (0, A.jsxs)(`a`, {
                                                href: e.linkRef.url,
                                                target: `_blank`,
                                                rel: `noopener noreferrer`,
                                                className: `inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline`,
                                                children: [
                                                  (0, A.jsx)(`span`, { children: e.linkRef.nama }),
                                                  (0, A.jsx)(Be, { className: `size-3` }),
                                                ],
                                              })
                                            : (0, A.jsx)(`span`, {
                                                className: `text-[11px] text-muted-foreground font-medium`,
                                                children: `Pengalaman Terkurasi CBT`,
                                              }),
                                          (0, A.jsxs)(`button`, {
                                            onClick: () => s(e),
                                            className: `inline-flex items-center gap-1 text-xs font-bold text-foreground hover:text-primary transition-colors cursor-pointer`,
                                            children: [
                                              (0, A.jsx)(`span`, { children: `Detail Rinci` }),
                                              (0, A.jsx)(sa, { className: `size-3.5` }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, A.jsx)(`div`, {
                      className: `border-t border-border pt-4`,
                      children: (0, A.jsx)(ns, { source: te.source }),
                    }),
                  ],
                }),
              n === `twoday` &&
                (0, A.jsxs)(`div`, {
                  className: `mt-12 rounded-3xl border border-gold/40 bg-card p-6 sm:p-10 shadow-2xl space-y-10 ring-2 ring-gold/15 animate-fade-in`,
                  children: [
                    (0, A.jsxs)(`div`, {
                      className: `flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          children: [
                            (0, A.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, A.jsx)(`span`, {
                                  className: `rounded-full bg-gold/20 px-3.5 py-1 text-xs font-black text-gold uppercase tracking-wider`,
                                  children: `Live-in Homestay • 2 Hari 1 Malam`,
                                }),
                                (0, A.jsx)(`span`, {
                                  className: `rounded-full bg-surface border border-border px-3 py-1 text-xs font-bold text-muted-foreground`,
                                  children: `Menginap di Rumah Warga Lokal`,
                                }),
                              ],
                            }),
                            (0, A.jsx)(`h3`, {
                              className: `mt-3 text-2xl sm:text-4xl font-extrabold text-foreground`,
                              children: `Paket Wisata 2 Hari 1 Malam (2D1N)`,
                            }),
                            (0, A.jsxs)(`p`, {
                              className: `mt-1 text-sm sm:text-base font-extrabold text-primary italic`,
                              children: [`"`, ne.tagline, `"`],
                            }),
                            (0, A.jsx)(`p`, {
                              className: `mt-3 text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed`,
                              children: `Pengalaman menginap live-in mendalam bersama keluarga tuan rumah di desa. Merasakan ketenangan pedesaan, makan malam bersama warga, susur mangrove pagi hari, hingga berbelanja oleh-oleh produk lokal.`,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          className: `flex flex-col sm:flex-row md:flex-col items-stretch gap-3 shrink-0`,
                          children: [
                            (0, A.jsxs)(`a`, {
                              href: `https://wa.me/${ae}?text=Halo%20Pengelola%20Desa%20Wisata%20Ekang%20Anculai%2C%20saya%20tertarik%20dengan%20Paket%20Wisata%202%20Hari%201%20Malam%20(2D1N%20Live-in%20Homestay).%20Mohon%20informasi%20ketersediaan%20jadwal%2C%20rincian%20biaya%2C%20dan%20panduan%20reservasi.`,
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              className: `inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-black text-gold-foreground shadow-card hover:bg-gold/90 transition-all`,
                              children: [
                                (0, A.jsx)(Ta, { className: `size-4` }),
                                (0, A.jsx)(`span`, { children: `Konsultasi 2D1N via WA` }),
                              ],
                            }),
                            (0, A.jsxs)(`button`, {
                              onClick: () => t(!0),
                              className: `inline-flex items-center justify-center gap-2 rounded-full bg-surface border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent transition-all cursor-pointer`,
                              children: [
                                (0, A.jsx)(ra, { className: `size-4 text-gold` }),
                                (0, A.jsx)(`span`, { children: `Formulir Rencana 2D1N` }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `rounded-2xl bg-surface border border-border p-6`,
                      children: [
                        (0, A.jsxs)(`h4`, {
                          className: `text-xs font-black text-gold uppercase tracking-wider flex items-center gap-2`,
                          children: [
                            (0, A.jsx)(Ma, { className: `size-4 text-gold` }),
                            `Fasilitas & Layanan Termasuk (2D1N):`,
                          ],
                        }),
                        (0, A.jsx)(`div`, {
                          className: `mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-medium text-foreground`,
                          children: [
                            `Akomodasi Homestay Rumah Warga (1 Malam)`,
                            `Makan 3x (Makan Siang, Malam, & Sarapan)`,
                            `Pemandu lokal berlisensi selama 2 hari`,
                            `Workshop membatik & hasil karya kain`,
                            `Tiket masuk & susur hutan mangrove`,
                            `Pengalaman berkebun sayur bersama petani`,
                            `Suasana malam & interaksi keluarga tuan rumah`,
                            `Dokumentasi lengkap & oleh-oleh khas`,
                          ].map((e, t) =>
                            (0, A.jsxs)(
                              `div`,
                              {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, A.jsx)(la, { className: `size-4 text-gold shrink-0` }),
                                  (0, A.jsx)(`span`, { children: e }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `space-y-6`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          className: `flex items-center justify-between border-b border-border/80 pb-4`,
                          children: [
                            (0, A.jsxs)(`h4`, {
                              className: `text-lg font-extrabold text-foreground flex items-center gap-2`,
                              children: [
                                (0, A.jsx)(ra, { className: `size-5 text-gold` }),
                                `Rangkaian Acara 2 Hari 1 Malam`,
                              ],
                            }),
                            (0, A.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, A.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => a(1),
                                  className: `rounded-full px-4 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${i === 1 ? `bg-gold text-gold-foreground shadow-sm` : `bg-surface border border-border text-muted-foreground hover:text-foreground`}`,
                                  children: `Hari ke-1 (Kedatangan & Budaya)`,
                                }),
                                (0, A.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => a(2),
                                  className: `rounded-full px-4 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${i === 2 ? `bg-primary text-primary-foreground shadow-sm` : `bg-surface border border-border text-muted-foreground hover:text-foreground`}`,
                                  children: `Hari ke-2 (Mangrove & Belanja)`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        i === 1 &&
                          (0, A.jsxs)(`div`, {
                            className: `space-y-6 animate-fade-in`,
                            children: [
                              (0, A.jsxs)(`div`, {
                                className: `rounded-2xl bg-gold/10 border border-gold/30 p-4`,
                                children: [
                                  (0, A.jsx)(`span`, {
                                    className: `text-xs font-black text-gold uppercase`,
                                    children: `Hari Pertama`,
                                  }),
                                  (0, A.jsx)(`p`, {
                                    className: `text-base font-extrabold text-foreground mt-0.5`,
                                    children: ne.hari1.subHeader,
                                  }),
                                ],
                              }),
                              (0, A.jsx)(`div`, {
                                className: `relative pl-6 sm:pl-10 border-l-2 border-gold/40 space-y-6`,
                                children: ne.hari1.rangkaian.map((e, t) =>
                                  (0, A.jsxs)(
                                    `div`,
                                    {
                                      className: `relative group`,
                                      children: [
                                        (0, A.jsx)(`div`, {
                                          className: `absolute -left-[37px] sm:-left-[53px] top-1.5 grid size-9 sm:size-10 place-items-center rounded-full bg-gold text-gold-foreground font-black text-xs sm:text-sm shadow-card ring-4 ring-card`,
                                          children: (0, A.jsx)(is, {
                                            icon: e.icon,
                                            className: `size-4 sm:size-5`,
                                          }),
                                        }),
                                        (0, A.jsxs)(`div`, {
                                          className: `rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft`,
                                          children: [
                                            (0, A.jsxs)(`div`, {
                                              className: `flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3`,
                                              children: [
                                                (0, A.jsxs)(`div`, {
                                                  children: [
                                                    e.kategori &&
                                                      (0, A.jsx)(`span`, {
                                                        className: `rounded-full bg-gold/10 px-2.5 py-0.5 text-[11px] font-extrabold text-gold`,
                                                        children: e.kategori,
                                                      }),
                                                    (0, A.jsx)(`h5`, {
                                                      className: `mt-1 text-base sm:text-lg font-extrabold text-foreground`,
                                                      children: e.judul,
                                                    }),
                                                  ],
                                                }),
                                                (0, A.jsxs)(`span`, {
                                                  className: `inline-block rounded-xl bg-card px-3 py-1 text-xs font-black text-gold border border-border shrink-0 self-start sm:self-auto`,
                                                  children: [e.waktu, ` WIB`],
                                                }),
                                              ],
                                            }),
                                            (0, A.jsx)(`p`, {
                                              className: `mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium`,
                                              children: e.deskripsi,
                                            }),
                                            (0, A.jsx)(`div`, {
                                              className: `mt-3 space-y-1 text-xs font-medium text-foreground pt-2 border-t border-border/40`,
                                              children: e.isi.map((e, t) =>
                                                (0, A.jsxs)(
                                                  `div`,
                                                  {
                                                    className: `flex items-start gap-2`,
                                                    children: [
                                                      (0, A.jsx)(`span`, {
                                                        className: `size-1.5 rounded-full bg-gold shrink-0 mt-1.5`,
                                                      }),
                                                      (0, A.jsx)(`span`, { children: e }),
                                                    ],
                                                  },
                                                  t,
                                                ),
                                              ),
                                            }),
                                            e.note &&
                                              (0, A.jsxs)(`div`, {
                                                className: `mt-3 rounded-xl bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-800 dark:text-amber-300`,
                                                children: [`💡 Catatan: `, e.note],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        i === 2 &&
                          (0, A.jsxs)(`div`, {
                            className: `space-y-6 animate-fade-in`,
                            children: [
                              (0, A.jsxs)(`div`, {
                                className: `rounded-2xl bg-primary/10 border border-primary/30 p-4`,
                                children: [
                                  (0, A.jsx)(`span`, {
                                    className: `text-xs font-black text-primary uppercase`,
                                    children: `Hari Kedua`,
                                  }),
                                  (0, A.jsx)(`p`, {
                                    className: `text-base font-extrabold text-foreground mt-0.5`,
                                    children: ne.hari2.subHeader,
                                  }),
                                ],
                              }),
                              (0, A.jsx)(`div`, {
                                className: `relative pl-6 sm:pl-10 border-l-2 border-primary/40 space-y-6`,
                                children: ne.hari2.rangkaian.map((e, t) =>
                                  (0, A.jsxs)(
                                    `div`,
                                    {
                                      className: `relative group`,
                                      children: [
                                        (0, A.jsx)(`div`, {
                                          className: `absolute -left-[37px] sm:-left-[53px] top-1.5 grid size-9 sm:size-10 place-items-center rounded-full bg-primary text-primary-foreground font-black text-xs sm:text-sm shadow-card ring-4 ring-card`,
                                          children: (0, A.jsx)(is, {
                                            icon: e.icon,
                                            className: `size-4 sm:size-5`,
                                          }),
                                        }),
                                        (0, A.jsxs)(`div`, {
                                          className: `rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft`,
                                          children: [
                                            (0, A.jsxs)(`div`, {
                                              className: `flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3`,
                                              children: [
                                                (0, A.jsxs)(`div`, {
                                                  children: [
                                                    e.kategori &&
                                                      (0, A.jsx)(`span`, {
                                                        className: `rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-extrabold text-primary`,
                                                        children: e.kategori,
                                                      }),
                                                    (0, A.jsx)(`h5`, {
                                                      className: `mt-1 text-base sm:text-lg font-extrabold text-foreground`,
                                                      children: e.judul,
                                                    }),
                                                  ],
                                                }),
                                                (0, A.jsxs)(`span`, {
                                                  className: `inline-block rounded-xl bg-card px-3 py-1 text-xs font-black text-primary border border-border shrink-0 self-start sm:self-auto`,
                                                  children: [e.waktu, ` WIB`],
                                                }),
                                              ],
                                            }),
                                            (0, A.jsx)(`p`, {
                                              className: `mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium`,
                                              children: e.deskripsi,
                                            }),
                                            (0, A.jsx)(`div`, {
                                              className: `mt-3 space-y-1 text-xs font-medium text-foreground pt-2 border-t border-border/40`,
                                              children: e.isi.map((e, t) =>
                                                (0, A.jsxs)(
                                                  `div`,
                                                  {
                                                    className: `flex items-start gap-2`,
                                                    children: [
                                                      (0, A.jsx)(`span`, {
                                                        className: `size-1.5 rounded-full bg-primary shrink-0 mt-1.5`,
                                                      }),
                                                      (0, A.jsx)(`span`, { children: e }),
                                                    ],
                                                  },
                                                  t,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, A.jsx)(`div`, {
                      className: `border-t border-border pt-4`,
                      children: (0, A.jsx)(ns, { source: ne.source }),
                    }),
                  ],
                }),
              n === `custom` &&
                (0, A.jsxs)(`div`, {
                  className: `mt-12 rounded-3xl border-2 border-emerald-500/50 bg-card p-6 sm:p-10 shadow-2xl space-y-12 animate-fade-in relative overflow-hidden`,
                  children: [
                    (0, A.jsx)(`div`, {
                      className: `pointer-events-none absolute top-0 right-0 size-96 bg-emerald-500/10 rounded-full blur-3xl`,
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          children: [
                            (0, A.jsxs)(`span`, {
                              className: `inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 text-xs font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider`,
                              children: [
                                (0, A.jsx)(Ba, { className: `size-3.5` }),
                                `Interactive Custom Tour Builder`,
                              ],
                            }),
                            (0, A.jsx)(`h3`, {
                              className: `mt-3 text-2xl sm:text-4xl font-extrabold text-foreground`,
                              children: `Rancang Paket Wisata Kustom Mandiri`,
                            }),
                            (0, A.jsx)(`p`, {
                              className: `mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed`,
                              children: `Sesuaikan durasi, tipe rombongan, modul kegiatan wisata, dan fasilitas tambahan sesuai preferensi spesifik Anda. Ringkasan akan terbuat otomatis dan siap dikirim langsung ke WhatsApp pengelola.`,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          className: `rounded-2xl border border-border bg-surface p-4 shrink-0`,
                          children: [
                            (0, A.jsx)(`p`, {
                              className: `text-[11px] font-black uppercase text-gold tracking-wider mb-2`,
                              children: `Template Rekomendasi Cepat:`,
                            }),
                            (0, A.jsxs)(`div`, {
                              className: `flex flex-wrap gap-2`,
                              children: [
                                (0, A.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => w(`edukasi`),
                                  className: `rounded-full bg-card border border-border px-3 py-1 text-xs font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer`,
                                  children: `🎒 Edukasi Sekolah`,
                                }),
                                (0, A.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => w(`keluarga`),
                                  className: `rounded-full bg-card border border-border px-3 py-1 text-xs font-bold text-foreground hover:bg-gold hover:text-gold-foreground transition-all cursor-pointer`,
                                  children: `👨‍👩‍👧‍👦 Family Relax`,
                                }),
                                (0, A.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => w(`budaya`),
                                  className: `rounded-full bg-card border border-border px-3 py-1 text-xs font-bold text-foreground hover:bg-emerald-600 hover:text-white transition-all cursor-pointer`,
                                  children: `🌟 Live-in Budaya`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `grid gap-10 lg:grid-cols-12 items-start`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          className: `lg:col-span-7 space-y-10`,
                          children: [
                            (0, A.jsxs)(`div`, {
                              className: `space-y-4`,
                              children: [
                                (0, A.jsxs)(`h4`, {
                                  className: `text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2`,
                                  children: [
                                    (0, A.jsx)(ua, { className: `size-4 text-emerald-600` }),
                                    `1. Pilih Durasi & Jumlah Peserta`,
                                  ],
                                }),
                                (0, A.jsx)(`div`, {
                                  className: `grid grid-cols-2 sm:grid-cols-4 gap-2`,
                                  children: [
                                    `Half Day (±4 Jam)`,
                                    `Full Day (±8 Jam)`,
                                    `2 Hari 1 Malam`,
                                    `3 Hari 2 Malam`,
                                  ].map((e) =>
                                    (0, A.jsx)(
                                      `button`,
                                      {
                                        type: `button`,
                                        onClick: () => d(e),
                                        className: `rounded-2xl p-3 text-center border text-xs font-bold transition-all cursor-pointer ${u.startsWith(e.slice(0, 8)) ? `bg-primary text-primary-foreground border-primary shadow-sm` : `bg-surface border-border text-foreground hover:border-primary/40`}`,
                                        children: e,
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                                (0, A.jsxs)(`div`, {
                                  className: `grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2`,
                                  children: [
                                    (0, A.jsxs)(`div`, {
                                      children: [
                                        (0, A.jsx)(`label`, {
                                          className: `text-xs font-bold text-muted-foreground block mb-1.5`,
                                          children: `Kategori Kunjungan:`,
                                        }),
                                        (0, A.jsxs)(`select`, {
                                          value: f,
                                          onChange: (e) => p(e.target.value),
                                          className: `w-full rounded-xl bg-surface border border-border px-3.5 py-2 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary`,
                                          children: [
                                            (0, A.jsx)(`option`, {
                                              value: `Keluarga / Family Trip`,
                                              children: `Keluarga (Family Trip)`,
                                            }),
                                            (0, A.jsx)(`option`, {
                                              value: `Sekolah / Kampus / Edukasi`,
                                              children: `Sekolah / Kampus (Educational Trip)`,
                                            }),
                                            (0, A.jsx)(`option`, {
                                              value: `Instansi / Corporate Outing`,
                                              children: `Instansi / Gathering Kantor`,
                                            }),
                                            (0, A.jsx)(`option`, {
                                              value: `Komunitas / Solo Traveler`,
                                              children: `Komunitas / Solo Traveler`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, A.jsxs)(`div`, {
                                      children: [
                                        (0, A.jsx)(`label`, {
                                          className: `text-xs font-bold text-muted-foreground block mb-1.5`,
                                          children: `Perkiraan Jumlah Peserta:`,
                                        }),
                                        (0, A.jsxs)(`select`, {
                                          value: m,
                                          onChange: (e) => _(e.target.value),
                                          className: `w-full rounded-xl bg-surface border border-border px-3.5 py-2 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary`,
                                          children: [
                                            (0, A.jsx)(`option`, {
                                              value: `1 - 2 Orang (Solo / Pasangan)`,
                                              children: `1 - 2 Orang (Solo/Pasangan)`,
                                            }),
                                            (0, A.jsx)(`option`, {
                                              value: `3 - 6 Orang (Keluarga Kecil)`,
                                              children: `3 - 6 Orang (Keluarga Kecil)`,
                                            }),
                                            (0, A.jsx)(`option`, {
                                              value: `7 - 15 Orang (Rombongan)`,
                                              children: `7 - 15 Orang (Rombongan)`,
                                            }),
                                            (0, A.jsx)(`option`, {
                                              value: `16 - 30+ Orang (Rombongan Besar)`,
                                              children: `16 - 30+ Orang (Rombongan Besar)`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, A.jsxs)(`div`, {
                              className: `space-y-4`,
                              children: [
                                (0, A.jsxs)(`div`, {
                                  className: `flex items-center justify-between`,
                                  children: [
                                    (0, A.jsxs)(`h4`, {
                                      className: `text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2`,
                                      children: [
                                        (0, A.jsx)(Oa, { className: `size-4 text-emerald-600` }),
                                        `2. Pilih Modul Aktivitas (`,
                                        v.length,
                                        ` Terpilih)`,
                                      ],
                                    }),
                                    (0, A.jsx)(`span`, {
                                      className: `text-xs font-bold text-muted-foreground`,
                                      children: `Klik untuk memilih / membatalkan`,
                                    }),
                                  ],
                                }),
                                (0, A.jsx)(`div`, {
                                  className: `grid gap-3 sm:grid-cols-2`,
                                  children: fs.map((e) => {
                                    let t = v.includes(e.id);
                                    return (0, A.jsxs)(
                                      `div`,
                                      {
                                        onClick: () => le(e.id),
                                        className: `card-lift rounded-2xl border p-4 cursor-pointer transition-all flex flex-col justify-between ${t ? `border-emerald-500 bg-emerald-500/10 dark:bg-emerald-950/20 shadow-soft ring-1 ring-emerald-500` : `border-border bg-surface hover:border-primary/40 opacity-80 hover:opacity-100`}`,
                                        children: [
                                          (0, A.jsxs)(`div`, {
                                            children: [
                                              (0, A.jsxs)(`div`, {
                                                className: `flex items-center justify-between gap-2`,
                                                children: [
                                                  (0, A.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1.5 rounded-full bg-card px-2.5 py-0.5 text-[10px] font-extrabold text-primary border border-border/60`,
                                                    children: [
                                                      (0, A.jsx)(is, {
                                                        icon: e.icon,
                                                        className: `size-3 text-gold`,
                                                      }),
                                                      (0, A.jsx)(`span`, { children: e.kategori }),
                                                    ],
                                                  }),
                                                  (0, A.jsx)(`span`, {
                                                    className: `grid size-5 place-items-center rounded-full text-xs font-black transition-all ${t ? `bg-emerald-600 text-white` : `bg-card border border-border text-transparent`}`,
                                                    children: `✓`,
                                                  }),
                                                ],
                                              }),
                                              (0, A.jsx)(`h5`, {
                                                className: `mt-2.5 text-sm font-extrabold text-foreground leading-snug`,
                                                children: e.nama,
                                              }),
                                              (0, A.jsx)(`p`, {
                                                className: `mt-1.5 text-[11px] text-muted-foreground leading-relaxed`,
                                                children: e.deskripsi,
                                              }),
                                            ],
                                          }),
                                          (0, A.jsxs)(`div`, {
                                            className: `mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-[11px] font-bold text-gold`,
                                            children: [
                                              (0, A.jsxs)(`span`, {
                                                children: [`⏱️ `, e.estimasi],
                                              }),
                                              (0, A.jsx)(`span`, {
                                                className: `text-muted-foreground text-[10px]`,
                                                children: t
                                                  ? `✓ Termasuk di Rencana`
                                                  : `+ Klik Tambahkan`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.id,
                                    );
                                  }),
                                }),
                              ],
                            }),
                            (0, A.jsxs)(`div`, {
                              className: `space-y-4`,
                              children: [
                                (0, A.jsxs)(`h4`, {
                                  className: `text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2`,
                                  children: [
                                    (0, A.jsx)(Ma, { className: `size-4 text-emerald-600` }),
                                    `3. Fasilitas Tambahan & Layanan Pendukung`,
                                  ],
                                }),
                                (0, A.jsx)(`div`, {
                                  className: `grid gap-2.5 sm:grid-cols-2`,
                                  children: ps.map((e) => {
                                    let t = b.includes(e.id);
                                    return (0, A.jsxs)(
                                      `div`,
                                      {
                                        onClick: () => ue(e.id),
                                        className: `rounded-xl border p-3 cursor-pointer transition-all flex items-start gap-2.5 ${t ? `border-gold bg-gold/10 text-foreground ring-1 ring-gold/40` : `border-border bg-surface text-muted-foreground hover:text-foreground`}`,
                                        children: [
                                          (0, A.jsx)(`span`, {
                                            className: `grid size-4 shrink-0 place-items-center rounded mt-0.5 text-[10px] font-black ${t ? `bg-gold text-gold-foreground` : `bg-card border border-border text-transparent`}`,
                                            children: `✓`,
                                          }),
                                          (0, A.jsx)(`span`, {
                                            className: `text-xs font-bold leading-relaxed`,
                                            children: e.label,
                                          }),
                                        ],
                                      },
                                      e.id,
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, A.jsx)(`div`, {
                          className: `lg:col-span-5 sticky top-28 space-y-6`,
                          children: (0, A.jsxs)(`div`, {
                            className: `rounded-3xl border-2 border-primary/40 bg-surface p-6 sm:p-8 shadow-xl space-y-6`,
                            children: [
                              (0, A.jsxs)(`div`, {
                                className: `flex items-center justify-between border-b border-border pb-4`,
                                children: [
                                  (0, A.jsxs)(`div`, {
                                    children: [
                                      (0, A.jsx)(`span`, {
                                        className: `text-[10px] font-black uppercase text-gold tracking-wider`,
                                        children: `Ringkasan Paket`,
                                      }),
                                      (0, A.jsx)(`h4`, {
                                        className: `text-xl font-black text-foreground mt-0.5`,
                                        children: `Rancangan Paket Anda`,
                                      }),
                                    ],
                                  }),
                                  (0, A.jsxs)(`span`, {
                                    className: `rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-black text-emerald-800 dark:text-emerald-300`,
                                    children: [v.length, ` Aktivitas`],
                                  }),
                                ],
                              }),
                              (0, A.jsxs)(`div`, {
                                className: `space-y-2 text-xs font-medium`,
                                children: [
                                  (0, A.jsxs)(`div`, {
                                    className: `flex justify-between py-1.5 border-b border-border/50`,
                                    children: [
                                      (0, A.jsx)(`span`, {
                                        className: `text-muted-foreground`,
                                        children: `Durasi:`,
                                      }),
                                      (0, A.jsx)(`span`, {
                                        className: `font-extrabold text-foreground`,
                                        children: u,
                                      }),
                                    ],
                                  }),
                                  (0, A.jsxs)(`div`, {
                                    className: `flex justify-between py-1.5 border-b border-border/50`,
                                    children: [
                                      (0, A.jsx)(`span`, {
                                        className: `text-muted-foreground`,
                                        children: `Tipe Rombongan:`,
                                      }),
                                      (0, A.jsx)(`span`, {
                                        className: `font-extrabold text-foreground`,
                                        children: f,
                                      }),
                                    ],
                                  }),
                                  (0, A.jsxs)(`div`, {
                                    className: `flex justify-between py-1.5 border-b border-border/50`,
                                    children: [
                                      (0, A.jsx)(`span`, {
                                        className: `text-muted-foreground`,
                                        children: `Jumlah Peserta:`,
                                      }),
                                      (0, A.jsx)(`span`, {
                                        className: `font-extrabold text-foreground`,
                                        children: m,
                                      }),
                                    ],
                                  }),
                                  (0, A.jsxs)(`div`, {
                                    className: `flex justify-between py-1.5 border-b border-border/50`,
                                    children: [
                                      (0, A.jsx)(`span`, {
                                        className: `text-muted-foreground`,
                                        children: `Fasilitas Tambahan:`,
                                      }),
                                      (0, A.jsxs)(`span`, {
                                        className: `font-extrabold text-gold`,
                                        children: [b.length, ` Layanan`],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, A.jsxs)(`div`, {
                                children: [
                                  (0, A.jsx)(`p`, {
                                    className: `text-[11px] font-black uppercase text-muted-foreground tracking-wider mb-2`,
                                    children: `Urutan Aktivitas Terpilih:`,
                                  }),
                                  v.length === 0
                                    ? (0, A.jsx)(`p`, {
                                        className: `text-xs text-amber-700 dark:text-amber-300 italic p-3 bg-amber-500/10 rounded-xl`,
                                        children: `Belum ada aktivitas yang dipilih. Silakan pilih minimal 1 modul di samping.`,
                                      })
                                    : (0, A.jsx)(`div`, {
                                        className: `space-y-2 max-h-56 overflow-y-auto pr-1`,
                                        children: fs
                                          .filter((e) => v.includes(e.id))
                                          .map((e, t) =>
                                            (0, A.jsxs)(
                                              `div`,
                                              {
                                                className: `flex items-center justify-between p-2 rounded-xl bg-card border border-border text-xs font-bold`,
                                                children: [
                                                  (0, A.jsxs)(`span`, {
                                                    className: `flex items-center gap-2`,
                                                    children: [
                                                      (0, A.jsx)(`span`, {
                                                        className: `size-5 rounded-full bg-primary/10 text-primary grid place-items-center text-[10px] font-black`,
                                                        children: t + 1,
                                                      }),
                                                      (0, A.jsx)(`span`, {
                                                        className: `text-foreground`,
                                                        children: e.nama,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, A.jsx)(`span`, {
                                                    className: `text-[10px] text-gold`,
                                                    children: e.estimasi,
                                                  }),
                                                ],
                                              },
                                              e.id,
                                            ),
                                          ),
                                      }),
                                ],
                              }),
                              (0, A.jsxs)(`div`, {
                                className: `space-y-3 pt-2`,
                                children: [
                                  (0, A.jsxs)(`a`, {
                                    href: ce,
                                    target: `_blank`,
                                    rel: `noopener noreferrer`,
                                    className: `w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-xs font-black text-white shadow-card hover:bg-emerald-700 hover:scale-[1.02] transition-all`,
                                    children: [
                                      (0, A.jsx)(Ta, { className: `size-4.5` }),
                                      (0, A.jsx)(`span`, {
                                        children: `Kirim Rancangan via WhatsApp`,
                                      }),
                                    ],
                                  }),
                                  (0, A.jsxs)(`button`, {
                                    onClick: () => t(!0),
                                    className: `w-full inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent transition-all cursor-pointer`,
                                    children: [
                                      (0, A.jsx)(ra, { className: `size-4 text-gold` }),
                                      (0, A.jsx)(`span`, { children: `Buka Formulir Lengkap` }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, A.jsx)(`p`, {
                                className: `text-[11px] text-center text-muted-foreground font-medium leading-relaxed`,
                                children: `💡 Pengelola desa wisata akan memberikan konfirmasi ketersediaan instruktur, tempat, serta estimasi rincian biaya resmi secara transparan.`,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          (0, A.jsxs)(`section`, {
            id: `pengalaman-cbt`,
            className: `scroll-mt-28`,
            children: [
              (0, A.jsxs)(`div`, {
                className: `text-center max-w-2xl mx-auto`,
                children: [
                  (0, A.jsx)(`span`, {
                    className: `text-xs font-extrabold text-primary uppercase tracking-wider`,
                    children: `8 Pilar Pengalaman Wisata`,
                  }),
                  (0, A.jsx)(`h2`, {
                    className: `mt-2 text-2xl sm:text-4xl font-extrabold text-foreground`,
                    children: `Aktivitas Autentik Berbasis Warga`,
                  }),
                  (0, A.jsx)(`p`, {
                    className: `mt-2 text-xs sm:text-sm text-muted-foreground`,
                    children: `Ragam pengalaman hidup pedesaan yang dirancang agar wisatawan dapat berinteraksi, belajar, dan mendukung kelestarian desa.`,
                  }),
                ],
              }),
              (0, A.jsx)(`div`, {
                className: `mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`,
                children: re.map((e) =>
                  (0, A.jsxs)(
                    `div`,
                    {
                      className: `card-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary/50 transition-all group`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          children: [
                            (0, A.jsxs)(`div`, {
                              className: `flex items-center justify-between`,
                              children: [
                                (0, A.jsx)(`div`, {
                                  className: `grid size-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 group-hover:bg-primary group-hover:text-primary-foreground transition-all`,
                                  children: (0, A.jsx)(is, { icon: e.icon, className: `size-6` }),
                                }),
                                (0, A.jsx)(`span`, {
                                  className: `text-xs font-black text-gold`,
                                  children: e.num,
                                }),
                              ],
                            }),
                            (0, A.jsx)(`h3`, {
                              className: `mt-5 text-base font-extrabold text-foreground tracking-tight`,
                              children: e.title,
                            }),
                            (0, A.jsx)(`p`, {
                              className: `mt-2 text-xs text-muted-foreground leading-relaxed font-medium`,
                              children: e.desc,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          className: `mt-6 pt-3 border-t border-border/60 flex items-center justify-between`,
                          children: [
                            (0, A.jsx)(`span`, {
                              className: `text-[11px] font-bold text-primary`,
                              children: `CBT Ekang Anculai`,
                            }),
                            (0, A.jsxs)(`span`, {
                              className: `text-xs text-muted-foreground`,
                              children: [`Pilar `, e.num],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.num,
                  ),
                ),
              }),
            ],
          }),
          (0, A.jsxs)(`section`, {
            children: [
              (0, A.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-6`,
                children: [
                  (0, A.jsxs)(`div`, {
                    children: [
                      (0, A.jsx)(`span`, {
                        className: `text-xs font-extrabold text-primary uppercase tracking-wider`,
                        children: `Dokumentasi Visual Autentik`,
                      }),
                      (0, A.jsx)(`h2`, {
                        className: `mt-2 text-2xl sm:text-4xl font-extrabold text-foreground`,
                        children: `Galeri Pengalaman di Lapangan`,
                      }),
                    ],
                  }),
                  (0, A.jsxs)(Me, {
                    to: `/galeri`,
                    className: `inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline`,
                    children: [
                      (0, A.jsx)(`span`, { children: `Lihat Seluruh Galeri Foto` }),
                      (0, A.jsx)(ta, { className: `size-3.5` }),
                    ],
                  }),
                ],
              }),
              (0, A.jsx)(`div`, {
                className: `mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`,
                children: ie.map((e) =>
                  (0, A.jsxs)(
                    `div`,
                    {
                      className: `card-lift group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          className: `relative aspect-[4/3] w-full overflow-hidden bg-muted`,
                          children: [
                            (0, A.jsx)(`img`, {
                              src: e.image,
                              alt: e.caption,
                              className: `size-full object-cover transition-transform duration-700 group-hover:scale-105`,
                            }),
                            (0, A.jsxs)(`span`, {
                              className: `absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-extrabold text-foreground backdrop-blur shadow-sm`,
                              children: [
                                (0, A.jsx)(is, {
                                  icon: e.icon,
                                  className: `size-3.5 text-gold shrink-0`,
                                }),
                                (0, A.jsxs)(`span`, { children: [e.num, `. `, e.kategori] }),
                              ],
                            }),
                          ],
                        }),
                        (0, A.jsx)(`div`, {
                          className: `p-4`,
                          children: (0, A.jsx)(`p`, {
                            className: `text-xs font-bold text-foreground leading-relaxed`,
                            children: e.caption,
                          }),
                        }),
                      ],
                    },
                    e.num,
                  ),
                ),
              }),
            ],
          }),
          (0, A.jsx)(`section`, {
            className: `rounded-3xl gradient-primary p-8 sm:p-14 text-center text-primary-foreground shadow-2xl relative overflow-hidden`,
            children: (0, A.jsxs)(`div`, {
              className: `relative z-10 max-w-3xl mx-auto space-y-4`,
              children: [
                (0, A.jsxs)(`span`, {
                  className: `inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-1.5 text-xs font-black text-white uppercase tracking-wider backdrop-blur`,
                  children: [
                    (0, A.jsx)(Pa, { className: `size-3.5 text-amber-300` }),
                    `Layanan Informasi & Reservasi Desa`,
                  ],
                }),
                (0, A.jsx)(`h2`, {
                  className: `text-2xl sm:text-4xl font-black tracking-tight text-white`,
                  children: `Siap Menikmati Pengalaman Wisata Autentik?`,
                }),
                (0, A.jsx)(`p`, {
                  className: `text-xs sm:text-base font-medium text-white/90 leading-relaxed max-w-2xl mx-auto`,
                  children: `Hubungi Pengelola Desa Wisata Ekang Anculai untuk konsultasi jadwal kunjungan rombongan, keluarga, instansi, atau program live-in homestay.`,
                }),
                (0, A.jsxs)(`div`, {
                  className: `pt-4 flex flex-wrap justify-center gap-4`,
                  children: [
                    (0, A.jsxs)(`button`, {
                      onClick: () => t(!0),
                      className: `inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-xs font-black text-emerald-950 shadow-card hover:bg-amber-300 hover:scale-105 transition-all cursor-pointer`,
                      children: [
                        (0, A.jsx)(fa, { className: `size-4` }),
                        (0, A.jsx)(`span`, { children: `Isi Formulir Rencana Kunjungan` }),
                      ],
                    }),
                    (0, A.jsxs)(`a`, {
                      href: `https://wa.me/${ae}?text=${se}`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      className: `inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-extrabold text-emerald-900 shadow-card hover:bg-emerald-50 hover:scale-105 transition-all`,
                      children: [
                        (0, A.jsx)(Ta, { className: `size-4 text-emerald-600 fill-current` }),
                        (0, A.jsx)(`span`, { children: `Chat WhatsApp Pengelola` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      o &&
        (0, A.jsx)(g, {
          open: !!o,
          onOpenChange: () => s(null),
          children: (0, A.jsxs)(C, {
            className: `max-w-md rounded-3xl p-6 bg-card border-border shadow-2xl`,
            children: [
              (0, A.jsxs)(h, {
                className: `text-lg font-extrabold text-foreground flex items-center justify-between gap-2`,
                children: [
                  (0, A.jsx)(`span`, { children: o.judul }),
                  (0, A.jsxs)(`span`, {
                    className: `text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full shrink-0`,
                    children: [o.waktu, ` WIB`],
                  }),
                ],
              }),
              (0, A.jsxs)(`div`, {
                className: `mt-4 space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed`,
                children: [
                  (0, A.jsx)(`p`, { children: o.deskripsi }),
                  (0, A.jsxs)(`div`, {
                    className: `pt-3 border-t border-border space-y-1.5 text-foreground font-medium`,
                    children: [
                      (0, A.jsx)(`p`, {
                        className: `font-bold text-xs uppercase text-primary`,
                        children: `Aktivitas Utama:`,
                      }),
                      o.isi.map((e, t) =>
                        (0, A.jsxs)(
                          `div`,
                          {
                            className: `flex items-start gap-2`,
                            children: [
                              (0, A.jsx)(la, {
                                className: `size-3.5 text-primary shrink-0 mt-0.5`,
                              }),
                              (0, A.jsx)(`span`, { children: e }),
                            ],
                          },
                          t,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      (0, A.jsx)(No, { open: e, onOpenChange: t }),
    ],
  });
}
var I;
(function (e) {
  e.assertEqual = (e) => {};
  function t(e) {}
  e.assertIs = t;
  function n(e) {
    throw Error();
  }
  ((e.assertNever = n),
    (e.arrayToEnum = (e) => {
      let t = {};
      for (let n of e) t[n] = n;
      return t;
    }),
    (e.getValidEnumValues = (t) => {
      let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != `number`),
        r = {};
      for (let e of n) r[e] = t[e];
      return e.objectValues(r);
    }),
    (e.objectValues = (t) =>
      e.objectKeys(t).map(function (e) {
        return t[e];
      })),
    (e.objectKeys =
      typeof Object.keys == `function`
        ? (e) => Object.keys(e)
        : (e) => {
            let t = [];
            for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          }),
    (e.find = (e, t) => {
      for (let n of e) if (t(n)) return n;
    }),
    (e.isInteger =
      typeof Number.isInteger == `function`
        ? (e) => Number.isInteger(e)
        : (e) => typeof e == `number` && Number.isFinite(e) && Math.floor(e) === e));
  function r(e, t = ` | `) {
    return e.map((e) => (typeof e == `string` ? `'${e}'` : e)).join(t);
  }
  ((e.joinValues = r),
    (e.jsonStringifyReplacer = (e, t) => (typeof t == `bigint` ? t.toString() : t)));
})((I ||= {}));
var hs;
(function (e) {
  e.mergeShapes = (e, t) => ({ ...e, ...t });
})((hs ||= {}));
var L = I.arrayToEnum([
    `string`,
    `nan`,
    `number`,
    `integer`,
    `float`,
    `boolean`,
    `date`,
    `bigint`,
    `symbol`,
    `function`,
    `undefined`,
    `null`,
    `array`,
    `object`,
    `unknown`,
    `promise`,
    `void`,
    `never`,
    `map`,
    `set`,
  ]),
  gs = (e) => {
    switch (typeof e) {
      case `undefined`:
        return L.undefined;
      case `string`:
        return L.string;
      case `number`:
        return Number.isNaN(e) ? L.nan : L.number;
      case `boolean`:
        return L.boolean;
      case `function`:
        return L.function;
      case `bigint`:
        return L.bigint;
      case `symbol`:
        return L.symbol;
      case `object`:
        return Array.isArray(e)
          ? L.array
          : e === null
            ? L.null
            : e.then && typeof e.then == `function` && e.catch && typeof e.catch == `function`
              ? L.promise
              : typeof Map < `u` && e instanceof Map
                ? L.map
                : typeof Set < `u` && e instanceof Set
                  ? L.set
                  : typeof Date < `u` && e instanceof Date
                    ? L.date
                    : L.object;
      default:
        return L.unknown;
    }
  },
  R = I.arrayToEnum([
    `invalid_type`,
    `invalid_literal`,
    `custom`,
    `invalid_union`,
    `invalid_union_discriminator`,
    `invalid_enum_value`,
    `unrecognized_keys`,
    `invalid_arguments`,
    `invalid_return_type`,
    `invalid_date`,
    `invalid_string`,
    `too_small`,
    `too_big`,
    `invalid_intersection_types`,
    `not_multiple_of`,
    `not_finite`,
  ]),
  _s = class e extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e) {
      (super(),
        (this.issues = []),
        (this.addIssue = (e) => {
          this.issues = [...this.issues, e];
        }),
        (this.addIssues = (e = []) => {
          this.issues = [...this.issues, ...e];
        }));
      let t = new.target.prototype;
      (Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
        (this.name = `ZodError`),
        (this.issues = e));
    }
    format(e) {
      let t =
          e ||
          function (e) {
            return e.message;
          },
        n = { _errors: [] },
        r = (e) => {
          for (let i of e.issues)
            if (i.code === `invalid_union`) i.unionErrors.map(r);
            else if (i.code === `invalid_return_type`) r(i.returnTypeError);
            else if (i.code === `invalid_arguments`) r(i.argumentsError);
            else if (i.path.length === 0) n._errors.push(t(i));
            else {
              let e = n,
                r = 0;
              for (; r < i.path.length;) {
                let n = i.path[r];
                (r === i.path.length - 1
                  ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
                  : (e[n] = e[n] || { _errors: [] }),
                  (e = e[n]),
                  r++);
              }
            }
        };
      return (r(this), n);
    }
    static assert(t) {
      if (!(t instanceof e)) throw Error(`Not a ZodError: ${t}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, I.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (e) => e.message) {
      let t = {},
        n = [];
      for (let r of this.issues)
        if (r.path.length > 0) {
          let n = r.path[0];
          ((t[n] = t[n] || []), t[n].push(e(r)));
        } else n.push(e(r));
      return { formErrors: n, fieldErrors: t };
    }
    get formErrors() {
      return this.flatten();
    }
  };
_s.create = (e) => new _s(e);
var vs = (e, t) => {
    let n;
    switch (e.code) {
      case R.invalid_type:
        n =
          e.received === L.undefined
            ? `Required`
            : `Expected ${e.expected}, received ${e.received}`;
        break;
      case R.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, I.jsonStringifyReplacer)}`;
        break;
      case R.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${I.joinValues(e.keys, `, `)}`;
        break;
      case R.invalid_union:
        n = `Invalid input`;
        break;
      case R.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${I.joinValues(e.options)}`;
        break;
      case R.invalid_enum_value:
        n = `Invalid enum value. Expected ${I.joinValues(e.options)}, received '${e.received}'`;
        break;
      case R.invalid_arguments:
        n = `Invalid function arguments`;
        break;
      case R.invalid_return_type:
        n = `Invalid function return type`;
        break;
      case R.invalid_date:
        n = `Invalid date`;
        break;
      case R.invalid_string:
        typeof e.validation == `object`
          ? `includes` in e.validation
            ? ((n = `Invalid input: must include "${e.validation.includes}"`),
              typeof e.validation.position == `number` &&
                (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
            : `startsWith` in e.validation
              ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
              : `endsWith` in e.validation
                ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                : I.assertNever(e.validation)
          : (n = e.validation === `regex` ? `Invalid` : `Invalid ${e.validation}`);
        break;
      case R.too_small:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`
              : e.type === `number` || e.type === `bigint`
                ? `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`
                : e.type === `date`
                  ? `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`
                  : `Invalid input`;
        break;
      case R.too_big:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`
              : e.type === `number`
                ? `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                : e.type === `bigint`
                  ? `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                  : e.type === `date`
                    ? `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`
                    : `Invalid input`;
        break;
      case R.custom:
        n = `Invalid input`;
        break;
      case R.invalid_intersection_types:
        n = `Intersection results could not be merged`;
        break;
      case R.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case R.not_finite:
        n = `Number must be finite`;
        break;
      default:
        ((n = t.defaultError), I.assertNever(e));
    }
    return { message: n };
  },
  ys = vs;
function bs() {
  return ys;
}
var xs = (e) => {
  let { data: t, path: n, errorMaps: r, issueData: i } = e,
    a = [...n, ...(i.path || [])],
    o = { ...i, path: a };
  if (i.message !== void 0) return { ...i, path: a, message: i.message };
  let s = ``,
    c = r
      .filter((e) => !!e)
      .slice()
      .reverse();
  for (let e of c) s = e(o, { data: t, defaultError: s }).message;
  return { ...i, path: a, message: s };
};
function z(e, t) {
  let n = bs(),
    r = xs({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === vs ? void 0 : vs].filter(
        (e) => !!e,
      ),
    });
  e.common.issues.push(r);
}
var Ss = class e {
    constructor() {
      this.value = `valid`;
    }
    dirty() {
      this.value === `valid` && (this.value = `dirty`);
    }
    abort() {
      this.value !== `aborted` && (this.value = `aborted`);
    }
    static mergeArray(e, t) {
      let n = [];
      for (let r of t) {
        if (r.status === `aborted`) return B;
        (r.status === `dirty` && e.dirty(), n.push(r.value));
      }
      return { status: e.value, value: n };
    }
    static async mergeObjectAsync(t, n) {
      let r = [];
      for (let e of n) {
        let t = await e.key,
          n = await e.value;
        r.push({ key: t, value: n });
      }
      return e.mergeObjectSync(t, r);
    }
    static mergeObjectSync(e, t) {
      let n = {};
      for (let r of t) {
        let { key: t, value: i } = r;
        if (t.status === `aborted` || i.status === `aborted`) return B;
        (t.status === `dirty` && e.dirty(),
          i.status === `dirty` && e.dirty(),
          t.value !== `__proto__` && (i.value !== void 0 || r.alwaysSet) && (n[t.value] = i.value));
      }
      return { status: e.value, value: n };
    }
  },
  B = Object.freeze({ status: `aborted` }),
  Cs = (e) => ({ status: `dirty`, value: e }),
  ws = (e) => ({ status: `valid`, value: e }),
  Ts = (e) => e.status === `aborted`,
  Es = (e) => e.status === `dirty`,
  Ds = (e) => e.status === `valid`,
  Os = (e) => typeof Promise < `u` && e instanceof Promise,
  V;
(function (e) {
  ((e.errToObj = (e) => (typeof e == `string` ? { message: e } : e || {})),
    (e.toString = (e) => (typeof e == `string` ? e : e?.message)));
})((V ||= {}));
var ks = class {
    constructor(e, t, n, r) {
      ((this._cachedPath = []),
        (this.parent = e),
        (this.data = t),
        (this._path = n),
        (this._key = r));
    }
    get path() {
      return (
        this._cachedPath.length ||
          (Array.isArray(this._key)
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  As = (e, t) => {
    if (Ds(t)) return { success: !0, data: t.value };
    if (!e.common.issues.length) throw Error(`Validation failed but no issues detected.`);
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let t = new _s(e.common.issues);
        return ((this._error = t), this._error);
      },
    };
  };
function H(e) {
  if (!e) return {};
  let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (t, i) => {
          let { message: a } = e;
          return t.code === `invalid_enum_value`
            ? { message: a ?? i.defaultError }
            : i.data === void 0
              ? { message: a ?? r ?? i.defaultError }
              : t.code === `invalid_type`
                ? { message: a ?? n ?? i.defaultError }
                : { message: i.defaultError };
        },
        description: i,
      };
}
var U = class {
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return gs(e.data);
    }
    _getOrReturnCtx(e, t) {
      return (
        t || {
          common: e.parent.common,
          data: e.data,
          parsedType: gs(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new Ss(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: gs(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let t = this._parse(e);
      if (Os(t)) throw Error(`Synchronous parse encountered promise.`);
      return t;
    }
    _parseAsync(e) {
      let t = this._parse(e);
      return Promise.resolve(t);
    }
    parse(e, t) {
      let n = this.safeParse(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    safeParse(e, t) {
      let n = {
        common: { issues: [], async: t?.async ?? !1, contextualErrorMap: t?.errorMap },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: gs(e),
      };
      return As(n, this._parseSync({ data: e, path: n.path, parent: n }));
    }
    "~validate"(e) {
      let t = {
        common: { issues: [], async: !!this[`~standard`].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: gs(e),
      };
      if (!this[`~standard`].async)
        try {
          let n = this._parseSync({ data: e, path: [], parent: t });
          return Ds(n) ? { value: n.value } : { issues: t.common.issues };
        } catch (e) {
          (e?.message?.toLowerCase()?.includes(`encountered`) && (this[`~standard`].async = !0),
            (t.common = { issues: [], async: !0 }));
        }
      return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
        Ds(e) ? { value: e.value } : { issues: t.common.issues },
      );
    }
    async parseAsync(e, t) {
      let n = await this.safeParseAsync(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    async safeParseAsync(e, t) {
      let n = {
          common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: gs(e),
        },
        r = this._parse({ data: e, path: n.path, parent: n });
      return As(n, await (Os(r) ? r : Promise.resolve(r)));
    }
    refine(e, t) {
      let n = (e) =>
        typeof t == `string` || t === void 0 ? { message: t } : typeof t == `function` ? t(e) : t;
      return this._refinement((t, r) => {
        let i = e(t),
          a = () => r.addIssue({ code: R.custom, ...n(t) });
        return typeof Promise < `u` && i instanceof Promise
          ? i.then((e) => (e ? !0 : (a(), !1)))
          : i
            ? !0
            : (a(), !1);
      });
    }
    refinement(e, t) {
      return this._refinement((n, r) =>
        e(n) ? !0 : (r.addIssue(typeof t == `function` ? t(n, r) : t), !1),
      );
    }
    _refinement(e) {
      return new Nc({
        schema: this,
        typeName: G.ZodEffects,
        effect: { type: `refinement`, refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    constructor(e) {
      ((this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this)),
        (this[`~standard`] = { version: 1, vendor: `zod`, validate: (e) => this[`~validate`](e) }));
    }
    optional() {
      return Pc.create(this, this._def);
    }
    nullable() {
      return Fc.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return mc.create(this);
    }
    promise() {
      return Mc.create(this, this._def);
    }
    or(e) {
      return _c.create([this, e], this._def);
    }
    and(e) {
      return xc.create(this, e, this._def);
    }
    transform(e) {
      return new Nc({
        ...H(this._def),
        schema: this,
        typeName: G.ZodEffects,
        effect: { type: `transform`, transform: e },
      });
    }
    default(e) {
      let t = typeof e == `function` ? e : () => e;
      return new Ic({ ...H(this._def), innerType: this, defaultValue: t, typeName: G.ZodDefault });
    }
    brand() {
      return new Rc({ typeName: G.ZodBranded, type: this, ...H(this._def) });
    }
    catch(e) {
      let t = typeof e == `function` ? e : () => e;
      return new Lc({ ...H(this._def), innerType: this, catchValue: t, typeName: G.ZodCatch });
    }
    describe(e) {
      let t = this.constructor;
      return new t({ ...this._def, description: e });
    }
    pipe(e) {
      return zc.create(this, e);
    }
    readonly() {
      return Bc.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  js = /^c[^\s-]{8,}$/i,
  Ms = /^[0-9a-z]+$/,
  Ns = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Ps = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Fs = /^[a-z0-9_-]{21}$/i,
  Is = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Ls =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Rs = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  zs = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,
  Bs,
  Vs =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Hs =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  Us =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  Ws =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Gs = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Ks = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  qs = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,
  Js = RegExp(`^${qs}$`);
function Ys(e) {
  let t = `[0-5]\\d`;
  e.precision ? (t = `${t}\\.\\d{${e.precision}}`) : (e.precision ?? (t = `${t}(\\.\\d+)?`));
  let n = e.precision ? `+` : `?`;
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function Xs(e) {
  return RegExp(`^${Ys(e)}$`);
}
function Zs(e) {
  let t = `${qs}T${Ys(e)}`,
    n = [];
  return (
    n.push(e.local ? `Z?` : `Z`),
    e.offset && n.push(`([+-]\\d{2}:?\\d{2})`),
    (t = `${t}(${n.join(`|`)})`),
    RegExp(`^${t}$`)
  );
}
function Qs(e, t) {
  return !!(((t === `v4` || !t) && Vs.test(e)) || ((t === `v6` || !t) && Us.test(e)));
}
function $s(e, t) {
  if (!Is.test(e)) return !1;
  try {
    let [n] = e.split(`.`);
    if (!n) return !1;
    let r = n
        .replace(/-/g, `+`)
        .replace(/_/g, `/`)
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), `=`),
      i = JSON.parse(atob(r));
    return !(
      typeof i != `object` ||
      !i ||
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && i.alg !== t)
    );
  } catch {
    return !1;
  }
}
function ec(e, t) {
  return !!(((t === `v4` || !t) && Hs.test(e)) || ((t === `v6` || !t) && Ws.test(e)));
}
var tc = class e extends U {
  _parse(e) {
    if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== L.string)) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.string, received: t.parsedType }), B);
    }
    let t = new Ss(),
      n;
    for (let r of this._def.checks)
      if (r.kind === `min`)
        e.data.length < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          z(n, {
            code: R.too_small,
            minimum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `max`)
        e.data.length > r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          z(n, {
            code: R.too_big,
            maximum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `length`) {
        let i = e.data.length > r.value,
          a = e.data.length < r.value;
        (i || a) &&
          ((n = this._getOrReturnCtx(e, n)),
          i
            ? z(n, {
                code: R.too_big,
                maximum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              })
            : a &&
              z(n, {
                code: R.too_small,
                minimum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              }),
          t.dirty());
      } else if (r.kind === `email`)
        Rs.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `email`, code: R.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `emoji`)
        ((Bs ||= new RegExp(zs, `u`)),
          Bs.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            z(n, { validation: `emoji`, code: R.invalid_string, message: r.message }),
            t.dirty()));
      else if (r.kind === `uuid`)
        Ps.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `uuid`, code: R.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `nanoid`)
        Fs.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `nanoid`, code: R.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `cuid`)
        js.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `cuid`, code: R.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `cuid2`)
        Ms.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `cuid2`, code: R.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `ulid`)
        Ns.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `ulid`, code: R.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `url`)
        try {
          new URL(e.data);
        } catch {
          ((n = this._getOrReturnCtx(e, n)),
            z(n, { validation: `url`, code: R.invalid_string, message: r.message }),
            t.dirty());
        }
      else
        r.kind === `regex`
          ? ((r.regex.lastIndex = 0),
            r.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              z(n, { validation: `regex`, code: R.invalid_string, message: r.message }),
              t.dirty()))
          : r.kind === `trim`
            ? (e.data = e.data.trim())
            : r.kind === `includes`
              ? e.data.includes(r.value, r.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                z(n, {
                  code: R.invalid_string,
                  validation: { includes: r.value, position: r.position },
                  message: r.message,
                }),
                t.dirty())
              : r.kind === `toLowerCase`
                ? (e.data = e.data.toLowerCase())
                : r.kind === `toUpperCase`
                  ? (e.data = e.data.toUpperCase())
                  : r.kind === `startsWith`
                    ? e.data.startsWith(r.value) ||
                      ((n = this._getOrReturnCtx(e, n)),
                      z(n, {
                        code: R.invalid_string,
                        validation: { startsWith: r.value },
                        message: r.message,
                      }),
                      t.dirty())
                    : r.kind === `endsWith`
                      ? e.data.endsWith(r.value) ||
                        ((n = this._getOrReturnCtx(e, n)),
                        z(n, {
                          code: R.invalid_string,
                          validation: { endsWith: r.value },
                          message: r.message,
                        }),
                        t.dirty())
                      : r.kind === `datetime`
                        ? Zs(r).test(e.data) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          z(n, {
                            code: R.invalid_string,
                            validation: `datetime`,
                            message: r.message,
                          }),
                          t.dirty())
                        : r.kind === `date`
                          ? Js.test(e.data) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            z(n, {
                              code: R.invalid_string,
                              validation: `date`,
                              message: r.message,
                            }),
                            t.dirty())
                          : r.kind === `time`
                            ? Xs(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              z(n, {
                                code: R.invalid_string,
                                validation: `time`,
                                message: r.message,
                              }),
                              t.dirty())
                            : r.kind === `duration`
                              ? Ls.test(e.data) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                z(n, {
                                  validation: `duration`,
                                  code: R.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : r.kind === `ip`
                                ? Qs(e.data, r.version) ||
                                  ((n = this._getOrReturnCtx(e, n)),
                                  z(n, {
                                    validation: `ip`,
                                    code: R.invalid_string,
                                    message: r.message,
                                  }),
                                  t.dirty())
                                : r.kind === `jwt`
                                  ? $s(e.data, r.alg) ||
                                    ((n = this._getOrReturnCtx(e, n)),
                                    z(n, {
                                      validation: `jwt`,
                                      code: R.invalid_string,
                                      message: r.message,
                                    }),
                                    t.dirty())
                                  : r.kind === `cidr`
                                    ? ec(e.data, r.version) ||
                                      ((n = this._getOrReturnCtx(e, n)),
                                      z(n, {
                                        validation: `cidr`,
                                        code: R.invalid_string,
                                        message: r.message,
                                      }),
                                      t.dirty())
                                    : r.kind === `base64`
                                      ? Gs.test(e.data) ||
                                        ((n = this._getOrReturnCtx(e, n)),
                                        z(n, {
                                          validation: `base64`,
                                          code: R.invalid_string,
                                          message: r.message,
                                        }),
                                        t.dirty())
                                      : r.kind === `base64url`
                                        ? Ks.test(e.data) ||
                                          ((n = this._getOrReturnCtx(e, n)),
                                          z(n, {
                                            validation: `base64url`,
                                            code: R.invalid_string,
                                            message: r.message,
                                          }),
                                          t.dirty())
                                        : I.assertNever(r);
    return { status: t.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((t) => e.test(t), {
      validation: t,
      code: R.invalid_string,
      ...V.errToObj(n),
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(e) {
    return this._addCheck({ kind: `email`, ...V.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: `url`, ...V.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: `emoji`, ...V.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: `uuid`, ...V.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: `nanoid`, ...V.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: `cuid`, ...V.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: `cuid2`, ...V.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: `ulid`, ...V.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: `base64`, ...V.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: `base64url`, ...V.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: `jwt`, ...V.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: `ip`, ...V.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: `cidr`, ...V.errToObj(e) });
  }
  datetime(e) {
    return typeof e == `string`
      ? this._addCheck({ kind: `datetime`, precision: null, offset: !1, local: !1, message: e })
      : this._addCheck({
          kind: `datetime`,
          precision: e?.precision === void 0 ? null : e?.precision,
          offset: e?.offset ?? !1,
          local: e?.local ?? !1,
          ...V.errToObj(e?.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: `date`, message: e });
  }
  time(e) {
    return typeof e == `string`
      ? this._addCheck({ kind: `time`, precision: null, message: e })
      : this._addCheck({
          kind: `time`,
          precision: e?.precision === void 0 ? null : e?.precision,
          ...V.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: `duration`, ...V.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: `regex`, regex: e, ...V.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: `includes`,
      value: e,
      position: t?.position,
      ...V.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: `startsWith`, value: e, ...V.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: `endsWith`, value: e, ...V.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: `min`, value: e, ...V.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: `max`, value: e, ...V.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: `length`, value: e, ...V.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, V.errToObj(e));
  }
  trim() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: `trim` }] });
  }
  toLowerCase() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: `toLowerCase` }] });
  }
  toUpperCase() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: `toUpperCase` }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === `datetime`);
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === `date`);
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === `time`);
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === `duration`);
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === `email`);
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === `url`);
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === `emoji`);
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === `uuid`);
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === `nanoid`);
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === `cuid`);
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === `cuid2`);
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === `ulid`);
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === `ip`);
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === `cidr`);
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === `base64`);
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === `base64url`);
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
tc.create = (e) => new tc({ checks: [], typeName: G.ZodString, coerce: e?.coerce ?? !1, ...H(e) });
function nc(e, t) {
  let n = (e.toString().split(`.`)[1] || ``).length,
    r = (t.toString().split(`.`)[1] || ``).length,
    i = n > r ? n : r;
  return (
    (Number.parseInt(e.toFixed(i).replace(`.`, ``)) %
      Number.parseInt(t.toFixed(i).replace(`.`, ``))) /
    10 ** i
  );
}
var rc = class e extends U {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(e) {
    if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== L.number)) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.number, received: t.parsedType }), B);
    }
    let t,
      n = new Ss();
    for (let r of this._def.checks)
      r.kind === `int`
        ? I.isInteger(e.data) ||
          ((t = this._getOrReturnCtx(e, t)),
          z(t, {
            code: R.invalid_type,
            expected: `integer`,
            received: `float`,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `min`
          ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            z(t, {
              code: R.too_small,
              minimum: r.value,
              type: `number`,
              inclusive: r.inclusive,
              exact: !1,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `max`
            ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              z(t, {
                code: R.too_big,
                maximum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message,
              }),
              n.dirty())
            : r.kind === `multipleOf`
              ? nc(e.data, r.value) !== 0 &&
                ((t = this._getOrReturnCtx(e, t)),
                z(t, { code: R.not_multiple_of, multipleOf: r.value, message: r.message }),
                n.dirty())
              : r.kind === `finite`
                ? Number.isFinite(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  z(t, { code: R.not_finite, message: r.message }),
                  n.dirty())
                : I.assertNever(r);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, V.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, V.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, V.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, V.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: V.toString(i) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(e) {
    return this._addCheck({ kind: `int`, message: V.toString(e) });
  }
  positive(e) {
    return this._addCheck({ kind: `min`, value: 0, inclusive: !1, message: V.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: `max`, value: 0, inclusive: !1, message: V.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: `max`, value: 0, inclusive: !0, message: V.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: `min`, value: 0, inclusive: !0, message: V.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: `multipleOf`, value: e, message: V.toString(t) });
  }
  finite(e) {
    return this._addCheck({ kind: `finite`, message: V.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: `min`,
      inclusive: !0,
      value: -(2 ** 53 - 1),
      message: V.toString(e),
    })._addCheck({ kind: `max`, inclusive: !0, value: 2 ** 53 - 1, message: V.toString(e) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) => e.kind === `int` || (e.kind === `multipleOf` && I.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (let n of this._def.checks)
      if (n.kind === `finite` || n.kind === `int` || n.kind === `multipleOf`) return !0;
      else
        n.kind === `min`
          ? (t === null || n.value > t) && (t = n.value)
          : n.kind === `max` && (e === null || n.value < e) && (e = n.value);
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
rc.create = (e) => new rc({ checks: [], typeName: G.ZodNumber, coerce: e?.coerce || !1, ...H(e) });
var ic = class e extends U {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== L.bigint) return this._getInvalidInput(e);
    let t,
      n = new Ss();
    for (let r of this._def.checks)
      r.kind === `min`
        ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
          ((t = this._getOrReturnCtx(e, t)),
          z(t, {
            code: R.too_small,
            type: `bigint`,
            minimum: r.value,
            inclusive: r.inclusive,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `max`
          ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            z(t, {
              code: R.too_big,
              type: `bigint`,
              maximum: r.value,
              inclusive: r.inclusive,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `multipleOf`
            ? e.data % r.value !== BigInt(0) &&
              ((t = this._getOrReturnCtx(e, t)),
              z(t, { code: R.not_multiple_of, multipleOf: r.value, message: r.message }),
              n.dirty())
            : I.assertNever(r);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return (z(t, { code: R.invalid_type, expected: L.bigint, received: t.parsedType }), B);
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, V.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, V.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, V.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, V.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: V.toString(i) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(e) {
    return this._addCheck({ kind: `min`, value: BigInt(0), inclusive: !1, message: V.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: `max`, value: BigInt(0), inclusive: !1, message: V.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: `max`, value: BigInt(0), inclusive: !0, message: V.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: `min`, value: BigInt(0), inclusive: !0, message: V.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: `multipleOf`, value: e, message: V.toString(t) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
ic.create = (e) => new ic({ checks: [], typeName: G.ZodBigInt, coerce: e?.coerce ?? !1, ...H(e) });
var ac = class extends U {
  _parse(e) {
    if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== L.boolean)) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.boolean, received: t.parsedType }), B);
    }
    return ws(e.data);
  }
};
ac.create = (e) => new ac({ typeName: G.ZodBoolean, coerce: e?.coerce || !1, ...H(e) });
var oc = class e extends U {
  _parse(e) {
    if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== L.date)) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.date, received: t.parsedType }), B);
    }
    if (Number.isNaN(e.data.getTime()))
      return (z(this._getOrReturnCtx(e), { code: R.invalid_date }), B);
    let t = new Ss(),
      n;
    for (let r of this._def.checks)
      r.kind === `min`
        ? e.data.getTime() < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          z(n, {
            code: R.too_small,
            message: r.message,
            inclusive: !0,
            exact: !1,
            minimum: r.value,
            type: `date`,
          }),
          t.dirty())
        : r.kind === `max`
          ? e.data.getTime() > r.value &&
            ((n = this._getOrReturnCtx(e, n)),
            z(n, {
              code: R.too_big,
              message: r.message,
              inclusive: !0,
              exact: !1,
              maximum: r.value,
              type: `date`,
            }),
            t.dirty())
          : I.assertNever(r);
    return { status: t.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(e, t) {
    return this._addCheck({ kind: `min`, value: e.getTime(), message: V.toString(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: `max`, value: e.getTime(), message: V.toString(t) });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
};
oc.create = (e) => new oc({ checks: [], coerce: e?.coerce || !1, typeName: G.ZodDate, ...H(e) });
var sc = class extends U {
  _parse(e) {
    if (this._getType(e) !== L.symbol) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.symbol, received: t.parsedType }), B);
    }
    return ws(e.data);
  }
};
sc.create = (e) => new sc({ typeName: G.ZodSymbol, ...H(e) });
var cc = class extends U {
  _parse(e) {
    if (this._getType(e) !== L.undefined) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.undefined, received: t.parsedType }), B);
    }
    return ws(e.data);
  }
};
cc.create = (e) => new cc({ typeName: G.ZodUndefined, ...H(e) });
var lc = class extends U {
  _parse(e) {
    if (this._getType(e) !== L.null) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.null, received: t.parsedType }), B);
    }
    return ws(e.data);
  }
};
lc.create = (e) => new lc({ typeName: G.ZodNull, ...H(e) });
var uc = class extends U {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(e) {
    return ws(e.data);
  }
};
uc.create = (e) => new uc({ typeName: G.ZodAny, ...H(e) });
var dc = class extends U {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(e) {
    return ws(e.data);
  }
};
dc.create = (e) => new dc({ typeName: G.ZodUnknown, ...H(e) });
var fc = class extends U {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return (z(t, { code: R.invalid_type, expected: L.never, received: t.parsedType }), B);
  }
};
fc.create = (e) => new fc({ typeName: G.ZodNever, ...H(e) });
var pc = class extends U {
  _parse(e) {
    if (this._getType(e) !== L.undefined) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.void, received: t.parsedType }), B);
    }
    return ws(e.data);
  }
};
pc.create = (e) => new pc({ typeName: G.ZodVoid, ...H(e) });
var mc = class e extends U {
  _parse(e) {
    let { ctx: t, status: n } = this._processInputParams(e),
      r = this._def;
    if (t.parsedType !== L.array)
      return (z(t, { code: R.invalid_type, expected: L.array, received: t.parsedType }), B);
    if (r.exactLength !== null) {
      let e = t.data.length > r.exactLength.value,
        i = t.data.length < r.exactLength.value;
      (e || i) &&
        (z(t, {
          code: e ? R.too_big : R.too_small,
          minimum: i ? r.exactLength.value : void 0,
          maximum: e ? r.exactLength.value : void 0,
          type: `array`,
          inclusive: !0,
          exact: !0,
          message: r.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (r.minLength !== null &&
        t.data.length < r.minLength.value &&
        (z(t, {
          code: R.too_small,
          minimum: r.minLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.minLength.message,
        }),
        n.dirty()),
      r.maxLength !== null &&
        t.data.length > r.maxLength.value &&
        (z(t, {
          code: R.too_big,
          maximum: r.maxLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.maxLength.message,
        }),
        n.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((e, n) => r.type._parseAsync(new ks(t, e, t.path, n))),
      ).then((e) => Ss.mergeArray(n, e));
    let i = [...t.data].map((e, n) => r.type._parseSync(new ks(t, e, t.path, n)));
    return Ss.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new e({ ...this._def, minLength: { value: t, message: V.toString(n) } });
  }
  max(t, n) {
    return new e({ ...this._def, maxLength: { value: t, message: V.toString(n) } });
  }
  length(t, n) {
    return new e({ ...this._def, exactLength: { value: t, message: V.toString(n) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
mc.create = (e, t) =>
  new mc({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: G.ZodArray,
    ...H(t),
  });
function hc(e) {
  if (e instanceof gc) {
    let t = {};
    for (let n in e.shape) {
      let r = e.shape[n];
      t[n] = Pc.create(hc(r));
    }
    return new gc({ ...e._def, shape: () => t });
  }
  return e instanceof mc
    ? new mc({ ...e._def, type: hc(e.element) })
    : e instanceof Pc
      ? Pc.create(hc(e.unwrap()))
      : e instanceof Fc
        ? Fc.create(hc(e.unwrap()))
        : e instanceof Sc
          ? Sc.create(e.items.map((e) => hc(e)))
          : e;
}
var gc = class e extends U {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      t = I.objectKeys(e);
    return ((this._cached = { shape: e, keys: t }), this._cached);
  }
  _parse(e) {
    if (this._getType(e) !== L.object) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.object, received: t.parsedType }), B);
    }
    let { status: t, ctx: n } = this._processInputParams(e),
      { shape: r, keys: i } = this._getCached(),
      a = [];
    if (!(this._def.catchall instanceof fc && this._def.unknownKeys === `strip`))
      for (let e in n.data) i.includes(e) || a.push(e);
    let o = [];
    for (let e of i) {
      let t = r[e],
        i = n.data[e];
      o.push({
        key: { status: `valid`, value: e },
        value: t._parse(new ks(n, i, n.path, e)),
        alwaysSet: e in n.data,
      });
    }
    if (this._def.catchall instanceof fc) {
      let e = this._def.unknownKeys;
      if (e === `passthrough`)
        for (let e of a)
          o.push({
            key: { status: `valid`, value: e },
            value: { status: `valid`, value: n.data[e] },
          });
      else if (e === `strict`)
        a.length > 0 && (z(n, { code: R.unrecognized_keys, keys: a }), t.dirty());
      else if (e !== `strip`) throw Error(`Internal ZodObject error: invalid unknownKeys value.`);
    } else {
      let e = this._def.catchall;
      for (let t of a) {
        let r = n.data[t];
        o.push({
          key: { status: `valid`, value: t },
          value: e._parse(new ks(n, r, n.path, t)),
          alwaysSet: t in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            let e = [];
            for (let t of o) {
              let n = await t.key,
                r = await t.value;
              e.push({ key: n, value: r, alwaysSet: t.alwaysSet });
            }
            return e;
          })
          .then((e) => Ss.mergeObjectSync(t, e))
      : Ss.mergeObjectSync(t, o);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      V.errToObj,
      new e({
        ...this._def,
        unknownKeys: `strict`,
        ...(t === void 0
          ? {}
          : {
              errorMap: (e, n) => {
                let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
                return e.code === `unrecognized_keys`
                  ? { message: V.errToObj(t).message ?? r }
                  : { message: r };
              },
            }),
      })
    );
  }
  strip() {
    return new e({ ...this._def, unknownKeys: `strip` });
  }
  passthrough() {
    return new e({ ...this._def, unknownKeys: `passthrough` });
  }
  extend(t) {
    return new e({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: G.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(t) {
    return new e({ ...this._def, catchall: t });
  }
  pick(t) {
    let n = {};
    for (let e of I.objectKeys(t)) t[e] && this.shape[e] && (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  omit(t) {
    let n = {};
    for (let e of I.objectKeys(this.shape)) t[e] || (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  deepPartial() {
    return hc(this);
  }
  partial(t) {
    let n = {};
    for (let e of I.objectKeys(this.shape)) {
      let r = this.shape[e];
      n[e] = t && !t[e] ? r : r.optional();
    }
    return new e({ ...this._def, shape: () => n });
  }
  required(t) {
    let n = {};
    for (let e of I.objectKeys(this.shape))
      if (t && !t[e]) n[e] = this.shape[e];
      else {
        let t = this.shape[e];
        for (; t instanceof Pc;) t = t._def.innerType;
        n[e] = t;
      }
    return new e({ ...this._def, shape: () => n });
  }
  keyof() {
    return kc(I.objectKeys(this.shape));
  }
};
((gc.create = (e, t) =>
  new gc({
    shape: () => e,
    unknownKeys: `strip`,
    catchall: fc.create(),
    typeName: G.ZodObject,
    ...H(t),
  })),
  (gc.strictCreate = (e, t) =>
    new gc({
      shape: () => e,
      unknownKeys: `strict`,
      catchall: fc.create(),
      typeName: G.ZodObject,
      ...H(t),
    })),
  (gc.lazycreate = (e, t) =>
    new gc({
      shape: e,
      unknownKeys: `strip`,
      catchall: fc.create(),
      typeName: G.ZodObject,
      ...H(t),
    })));
var _c = class extends U {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = this._def.options;
    function r(e) {
      for (let t of e) if (t.result.status === `valid`) return t.result;
      for (let n of e)
        if (n.result.status === `dirty`)
          return (t.common.issues.push(...n.ctx.common.issues), n.result);
      let n = e.map((e) => new _s(e.ctx.common.issues));
      return (z(t, { code: R.invalid_union, unionErrors: n }), B);
    }
    if (t.common.async)
      return Promise.all(
        n.map(async (e) => {
          let n = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return { result: await e._parseAsync({ data: t.data, path: t.path, parent: n }), ctx: n };
        }),
      ).then(r);
    {
      let e,
        r = [];
      for (let i of n) {
        let n = { ...t, common: { ...t.common, issues: [] }, parent: null },
          a = i._parseSync({ data: t.data, path: t.path, parent: n });
        if (a.status === `valid`) return a;
        (a.status === `dirty` && !e && (e = { result: a, ctx: n }),
          n.common.issues.length && r.push(n.common.issues));
      }
      if (e) return (t.common.issues.push(...e.ctx.common.issues), e.result);
      let i = r.map((e) => new _s(e));
      return (z(t, { code: R.invalid_union, unionErrors: i }), B);
    }
  }
  get options() {
    return this._def.options;
  }
};
_c.create = (e, t) => new _c({ options: e, typeName: G.ZodUnion, ...H(t) });
var vc = (e) =>
    e instanceof Dc
      ? vc(e.schema)
      : e instanceof Nc
        ? vc(e.innerType())
        : e instanceof Oc
          ? [e.value]
          : e instanceof Ac
            ? e.options
            : e instanceof jc
              ? I.objectValues(e.enum)
              : e instanceof Ic
                ? vc(e._def.innerType)
                : e instanceof cc
                  ? [void 0]
                  : e instanceof lc
                    ? [null]
                    : e instanceof Pc
                      ? [void 0, ...vc(e.unwrap())]
                      : e instanceof Fc
                        ? [null, ...vc(e.unwrap())]
                        : e instanceof Rc || e instanceof Bc
                          ? vc(e.unwrap())
                          : e instanceof Lc
                            ? vc(e._def.innerType)
                            : [],
  yc = class e extends U {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== L.object)
        return (z(t, { code: R.invalid_type, expected: L.object, received: t.parsedType }), B);
      let n = this.discriminator,
        r = t.data[n],
        i = this.optionsMap.get(r);
      return i
        ? t.common.async
          ? i._parseAsync({ data: t.data, path: t.path, parent: t })
          : i._parseSync({ data: t.data, path: t.path, parent: t })
        : (z(t, {
            code: R.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n],
          }),
          B);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(t, n, r) {
      let i = new Map();
      for (let e of n) {
        let n = vc(e.shape[t]);
        if (!n.length)
          throw Error(
            `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
          );
        for (let r of n) {
          if (i.has(r))
            throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);
          i.set(r, e);
        }
      }
      return new e({
        typeName: G.ZodDiscriminatedUnion,
        discriminator: t,
        options: n,
        optionsMap: i,
        ...H(r),
      });
    }
  };
function bc(e, t) {
  let n = gs(e),
    r = gs(t);
  if (e === t) return { valid: !0, data: e };
  if (n === L.object && r === L.object) {
    let n = I.objectKeys(t),
      r = I.objectKeys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = bc(e[n], t[n]);
      if (!r.valid) return { valid: !1 };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  }
  if (n === L.array && r === L.array) {
    if (e.length !== t.length) return { valid: !1 };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = bc(i, a);
      if (!o.valid) return { valid: !1 };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return n === L.date && r === L.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
var xc = class extends U {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = (e, r) => {
        if (Ts(e) || Ts(r)) return B;
        let i = bc(e.value, r.value);
        return i.valid
          ? ((Es(e) || Es(r)) && t.dirty(), { status: t.value, value: i.data })
          : (z(n, { code: R.invalid_intersection_types }), B);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
        ]).then(([e, t]) => r(e, t))
      : r(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
        );
  }
};
xc.create = (e, t, n) => new xc({ left: e, right: t, typeName: G.ZodIntersection, ...H(n) });
var Sc = class e extends U {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== L.array)
      return (z(n, { code: R.invalid_type, expected: L.array, received: n.parsedType }), B);
    if (n.data.length < this._def.items.length)
      return (
        z(n, {
          code: R.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: `array`,
        }),
        B
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (z(n, {
        code: R.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: `array`,
      }),
      t.dirty());
    let r = [...n.data]
      .map((e, t) => {
        let r = this._def.items[t] || this._def.rest;
        return r ? r._parse(new ks(n, e, n.path, t)) : null;
      })
      .filter((e) => !!e);
    return n.common.async ? Promise.all(r).then((e) => Ss.mergeArray(t, e)) : Ss.mergeArray(t, r);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new e({ ...this._def, rest: t });
  }
};
Sc.create = (e, t) => {
  if (!Array.isArray(e)) throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);
  return new Sc({ items: e, typeName: G.ZodTuple, rest: null, ...H(t) });
};
var Cc = class e extends U {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== L.object)
        return (z(n, { code: R.invalid_type, expected: L.object, received: n.parsedType }), B);
      let r = [],
        i = this._def.keyType,
        a = this._def.valueType;
      for (let e in n.data)
        r.push({
          key: i._parse(new ks(n, e, n.path, e)),
          value: a._parse(new ks(n, n.data[e], n.path, e)),
          alwaysSet: e in n.data,
        });
      return n.common.async ? Ss.mergeObjectAsync(t, r) : Ss.mergeObjectSync(t, r);
    }
    get element() {
      return this._def.valueType;
    }
    static create(t, n, r) {
      return n instanceof U
        ? new e({ keyType: t, valueType: n, typeName: G.ZodRecord, ...H(r) })
        : new e({ keyType: tc.create(), valueType: t, typeName: G.ZodRecord, ...H(n) });
    }
  },
  wc = class extends U {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== L.map)
        return (z(n, { code: R.invalid_type, expected: L.map, received: n.parsedType }), B);
      let r = this._def.keyType,
        i = this._def.valueType,
        a = [...n.data.entries()].map(([e, t], a) => ({
          key: r._parse(new ks(n, e, n.path, [a, `key`])),
          value: i._parse(new ks(n, t, n.path, [a, `value`])),
        }));
      if (n.common.async) {
        let e = new Map();
        return Promise.resolve().then(async () => {
          for (let n of a) {
            let r = await n.key,
              i = await n.value;
            if (r.status === `aborted` || i.status === `aborted`) return B;
            ((r.status === `dirty` || i.status === `dirty`) && t.dirty(), e.set(r.value, i.value));
          }
          return { status: t.value, value: e };
        });
      }
      {
        let e = new Map();
        for (let n of a) {
          let r = n.key,
            i = n.value;
          if (r.status === `aborted` || i.status === `aborted`) return B;
          ((r.status === `dirty` || i.status === `dirty`) && t.dirty(), e.set(r.value, i.value));
        }
        return { status: t.value, value: e };
      }
    }
  };
wc.create = (e, t, n) => new wc({ valueType: t, keyType: e, typeName: G.ZodMap, ...H(n) });
var Tc = class e extends U {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== L.set)
      return (z(n, { code: R.invalid_type, expected: L.set, received: n.parsedType }), B);
    let r = this._def;
    (r.minSize !== null &&
      n.data.size < r.minSize.value &&
      (z(n, {
        code: R.too_small,
        minimum: r.minSize.value,
        type: `set`,
        inclusive: !0,
        exact: !1,
        message: r.minSize.message,
      }),
      t.dirty()),
      r.maxSize !== null &&
        n.data.size > r.maxSize.value &&
        (z(n, {
          code: R.too_big,
          maximum: r.maxSize.value,
          type: `set`,
          inclusive: !0,
          exact: !1,
          message: r.maxSize.message,
        }),
        t.dirty()));
    let i = this._def.valueType;
    function a(e) {
      let n = new Set();
      for (let r of e) {
        if (r.status === `aborted`) return B;
        (r.status === `dirty` && t.dirty(), n.add(r.value));
      }
      return { status: t.value, value: n };
    }
    let o = [...n.data.values()].map((e, t) => i._parse(new ks(n, e, n.path, t)));
    return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
  }
  min(t, n) {
    return new e({ ...this._def, minSize: { value: t, message: V.toString(n) } });
  }
  max(t, n) {
    return new e({ ...this._def, maxSize: { value: t, message: V.toString(n) } });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
Tc.create = (e, t) =>
  new Tc({ valueType: e, minSize: null, maxSize: null, typeName: G.ZodSet, ...H(t) });
var Ec = class e extends U {
    constructor() {
      (super(...arguments), (this.validate = this.implement));
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== L.function)
        return (z(t, { code: R.invalid_type, expected: L.function, received: t.parsedType }), B);
      function n(e, n) {
        return xs({
          data: e,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, bs(), vs].filter((e) => !!e),
          issueData: { code: R.invalid_arguments, argumentsError: n },
        });
      }
      function r(e, n) {
        return xs({
          data: e,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, bs(), vs].filter((e) => !!e),
          issueData: { code: R.invalid_return_type, returnTypeError: n },
        });
      }
      let i = { errorMap: t.common.contextualErrorMap },
        a = t.data;
      if (this._def.returns instanceof Mc) {
        let e = this;
        return ws(async function (...t) {
          let o = new _s([]),
            s = await e._def.args.parseAsync(t, i).catch((e) => {
              throw (o.addIssue(n(t, e)), o);
            }),
            c = await Reflect.apply(a, this, s);
          return await e._def.returns._def.type.parseAsync(c, i).catch((e) => {
            throw (o.addIssue(r(c, e)), o);
          });
        });
      }
      {
        let e = this;
        return ws(function (...t) {
          let o = e._def.args.safeParse(t, i);
          if (!o.success) throw new _s([n(t, o.error)]);
          let s = Reflect.apply(a, this, o.data),
            c = e._def.returns.safeParse(s, i);
          if (!c.success) throw new _s([r(s, c.error)]);
          return c.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...t) {
      return new e({ ...this._def, args: Sc.create(t).rest(dc.create()) });
    }
    returns(t) {
      return new e({ ...this._def, returns: t });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(t, n, r) {
      return new e({
        args: t || Sc.create([]).rest(dc.create()),
        returns: n || dc.create(),
        typeName: G.ZodFunction,
        ...H(r),
      });
    }
  },
  Dc = class extends U {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
    }
  };
Dc.create = (e, t) => new Dc({ getter: e, typeName: G.ZodLazy, ...H(t) });
var Oc = class extends U {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { received: t.data, code: R.invalid_literal, expected: this._def.value }), B);
    }
    return { status: `valid`, value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
Oc.create = (e, t) => new Oc({ value: e, typeName: G.ZodLiteral, ...H(t) });
function kc(e, t) {
  return new Ac({ values: e, typeName: G.ZodEnum, ...H(t) });
}
var Ac = class e extends U {
  _parse(e) {
    if (typeof e.data != `string`) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (z(t, { expected: I.joinValues(n), received: t.parsedType, code: R.invalid_type }), B);
    }
    if (((this._cache ||= new Set(this._def.values)), !this._cache.has(e.data))) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (z(t, { received: t.data, code: R.invalid_enum_value, options: n }), B);
    }
    return ws(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(t, n = this._def) {
    return e.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return e.create(
      this.options.filter((e) => !t.includes(e)),
      { ...this._def, ...n },
    );
  }
};
Ac.create = kc;
var jc = class extends U {
  _parse(e) {
    let t = I.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== L.string && n.parsedType !== L.number) {
      let e = I.objectValues(t);
      return (z(n, { expected: I.joinValues(e), received: n.parsedType, code: R.invalid_type }), B);
    }
    if (
      ((this._cache ||= new Set(I.getValidEnumValues(this._def.values))), !this._cache.has(e.data))
    ) {
      let e = I.objectValues(t);
      return (z(n, { received: n.data, code: R.invalid_enum_value, options: e }), B);
    }
    return ws(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
jc.create = (e, t) => new jc({ values: e, typeName: G.ZodNativeEnum, ...H(t) });
var Mc = class extends U {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    return t.parsedType !== L.promise && t.common.async === !1
      ? (z(t, { code: R.invalid_type, expected: L.promise, received: t.parsedType }), B)
      : ws(
          (t.parsedType === L.promise ? t.data : Promise.resolve(t.data)).then((e) =>
            this._def.type.parseAsync(e, { path: t.path, errorMap: t.common.contextualErrorMap }),
          ),
        );
  }
};
Mc.create = (e, t) => new Mc({ type: e, typeName: G.ZodPromise, ...H(t) });
var Nc = class extends U {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === G.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = this._def.effect || null,
      i = {
        addIssue: (e) => {
          (z(n, e), e.fatal ? t.abort() : t.dirty());
        },
        get path() {
          return n.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), r.type === `preprocess`)) {
      let e = r.transform(n.data, i);
      if (n.common.async)
        return Promise.resolve(e).then(async (e) => {
          if (t.value === `aborted`) return B;
          let r = await this._def.schema._parseAsync({ data: e, path: n.path, parent: n });
          return r.status === `aborted`
            ? B
            : r.status === `dirty` || t.value === `dirty`
              ? Cs(r.value)
              : r;
        });
      {
        if (t.value === `aborted`) return B;
        let r = this._def.schema._parseSync({ data: e, path: n.path, parent: n });
        return r.status === `aborted`
          ? B
          : r.status === `dirty` || t.value === `dirty`
            ? Cs(r.value)
            : r;
      }
    }
    if (r.type === `refinement`) {
      let e = (e) => {
        let t = r.refinement(e, i);
        if (n.common.async) return Promise.resolve(t);
        if (t instanceof Promise)
          throw Error(
            `Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return e;
      };
      if (n.common.async === !1) {
        let r = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        return r.status === `aborted`
          ? B
          : (r.status === `dirty` && t.dirty(), e(r.value), { status: t.value, value: r.value });
      }
      return this._def.schema
        ._parseAsync({ data: n.data, path: n.path, parent: n })
        .then((n) =>
          n.status === `aborted`
            ? B
            : (n.status === `dirty` && t.dirty(),
              e(n.value).then(() => ({ status: t.value, value: n.value }))),
        );
    }
    if (r.type === `transform`)
      if (n.common.async === !1) {
        let e = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        if (!Ds(e)) return B;
        let a = r.transform(e.value, i);
        if (a instanceof Promise)
          throw Error(
            `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return { status: t.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((e) =>
          Ds(e)
            ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
                status: t.value,
                value: e,
              }))
            : B,
        );
    I.assertNever(r);
  }
};
((Nc.create = (e, t, n) => new Nc({ schema: e, typeName: G.ZodEffects, effect: t, ...H(n) })),
  (Nc.createWithPreprocess = (e, t, n) =>
    new Nc({
      schema: t,
      effect: { type: `preprocess`, transform: e },
      typeName: G.ZodEffects,
      ...H(n),
    })));
var Pc = class extends U {
  _parse(e) {
    return this._getType(e) === L.undefined ? ws(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Pc.create = (e, t) => new Pc({ innerType: e, typeName: G.ZodOptional, ...H(t) });
var Fc = class extends U {
  _parse(e) {
    return this._getType(e) === L.null ? ws(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Fc.create = (e, t) => new Fc({ innerType: e, typeName: G.ZodNullable, ...H(t) });
var Ic = class extends U {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = t.data;
    return (
      t.parsedType === L.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
Ic.create = (e, t) =>
  new Ic({
    innerType: e,
    typeName: G.ZodDefault,
    defaultValue: typeof t.default == `function` ? t.default : () => t.default,
    ...H(t),
  });
var Lc = class extends U {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = { ...t, common: { ...t.common, issues: [] } },
      r = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
    return Os(r)
      ? r.then((e) => ({
          status: `valid`,
          value:
            e.status === `valid`
              ? e.value
              : this._def.catchValue({
                  get error() {
                    return new _s(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: `valid`,
          value:
            r.status === `valid`
              ? r.value
              : this._def.catchValue({
                  get error() {
                    return new _s(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
Lc.create = (e, t) =>
  new Lc({
    innerType: e,
    typeName: G.ZodCatch,
    catchValue: typeof t.catch == `function` ? t.catch : () => t.catch,
    ...H(t),
  });
var W = class extends U {
  _parse(e) {
    if (this._getType(e) !== L.nan) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: R.invalid_type, expected: L.nan, received: t.parsedType }), B);
    }
    return { status: `valid`, value: e.data };
  }
};
W.create = (e) => new W({ typeName: G.ZodNaN, ...H(e) });
var Rc = class extends U {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e),
        n = t.data;
      return this._def.type._parse({ data: n, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  },
  zc = class e extends U {
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.common.async)
        return (async () => {
          let e = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
          return e.status === `aborted`
            ? B
            : e.status === `dirty`
              ? (t.dirty(), Cs(e.value))
              : this._def.out._parseAsync({ data: e.value, path: n.path, parent: n });
        })();
      {
        let e = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
        return e.status === `aborted`
          ? B
          : e.status === `dirty`
            ? (t.dirty(), { status: `dirty`, value: e.value })
            : this._def.out._parseSync({ data: e.value, path: n.path, parent: n });
      }
    }
    static create(t, n) {
      return new e({ in: t, out: n, typeName: G.ZodPipeline });
    }
  },
  Bc = class extends U {
    _parse(e) {
      let t = this._def.innerType._parse(e),
        n = (e) => (Ds(e) && (e.value = Object.freeze(e.value)), e);
      return Os(t) ? t.then((e) => n(e)) : n(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
((Bc.create = (e, t) => new Bc({ innerType: e, typeName: G.ZodReadonly, ...H(t) })), gc.lazycreate);
var G;
(function (e) {
  ((e.ZodString = `ZodString`),
    (e.ZodNumber = `ZodNumber`),
    (e.ZodNaN = `ZodNaN`),
    (e.ZodBigInt = `ZodBigInt`),
    (e.ZodBoolean = `ZodBoolean`),
    (e.ZodDate = `ZodDate`),
    (e.ZodSymbol = `ZodSymbol`),
    (e.ZodUndefined = `ZodUndefined`),
    (e.ZodNull = `ZodNull`),
    (e.ZodAny = `ZodAny`),
    (e.ZodUnknown = `ZodUnknown`),
    (e.ZodNever = `ZodNever`),
    (e.ZodVoid = `ZodVoid`),
    (e.ZodArray = `ZodArray`),
    (e.ZodObject = `ZodObject`),
    (e.ZodUnion = `ZodUnion`),
    (e.ZodDiscriminatedUnion = `ZodDiscriminatedUnion`),
    (e.ZodIntersection = `ZodIntersection`),
    (e.ZodTuple = `ZodTuple`),
    (e.ZodRecord = `ZodRecord`),
    (e.ZodMap = `ZodMap`),
    (e.ZodSet = `ZodSet`),
    (e.ZodFunction = `ZodFunction`),
    (e.ZodLazy = `ZodLazy`),
    (e.ZodLiteral = `ZodLiteral`),
    (e.ZodEnum = `ZodEnum`),
    (e.ZodEffects = `ZodEffects`),
    (e.ZodNativeEnum = `ZodNativeEnum`),
    (e.ZodOptional = `ZodOptional`),
    (e.ZodNullable = `ZodNullable`),
    (e.ZodDefault = `ZodDefault`),
    (e.ZodCatch = `ZodCatch`),
    (e.ZodPromise = `ZodPromise`),
    (e.ZodBranded = `ZodBranded`),
    (e.ZodPipeline = `ZodPipeline`),
    (e.ZodReadonly = `ZodReadonly`));
})((G ||= {}));
var Vc = tc.create;
(rc.create,
  W.create,
  ic.create,
  ac.create,
  oc.create,
  sc.create,
  cc.create,
  lc.create,
  uc.create,
  dc.create,
  fc.create,
  pc.create,
  mc.create);
var Hc = gc.create;
(gc.strictCreate,
  _c.create,
  yc.create,
  xc.create,
  Sc.create,
  Cc.create,
  wc.create,
  Tc.create,
  Ec.create,
  Dc.create,
  Oc.create,
  Ac.create,
  jc.create,
  Mc.create,
  Nc.create,
  Pc.create,
  Fc.create,
  Nc.createWithPreprocess,
  zc.create);
var Uc = () =>
    Zo(
      () => import(`./desa.index-di3giQWj.js`),
      __vite__mapDeps([16, 1, 12, 3, 4, 6, 17, 15, 13, 9, 10]),
    ),
  Wc = Hc({ q: Vc().optional(), provinsi: Vc().optional(), kategori: Vc().optional() }),
  Gc = vr(`/desa/`)({
    validateSearch: Wc,
    head: () => ({
      meta: [
        { title: `Profil & Potensi Desa Ekang Anculai — Teluk Sebong, Bintan` },
        {
          name: `description`,
          content: `Eksplorasi profil dan potensi Desa Ekang Anculai: ekowisata mangrove, Rumah Batik Bintan, UMKM lokal, homestay rumah warga, dan kegiatan masyarakat.`,
        },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: `https://desawisataekanganculai.id/desa` },
        {
          property: `og:title`,
          content: `Profil & Potensi Desa Ekang Anculai — Teluk Sebong, Bintan`,
        },
        {
          property: `og:description`,
          content: `Cari dan jelajahi profil serta potensi Desa Ekang Anculai di Teluk Sebong, Kabupaten Bintan, Kepulauan Riau.`,
        },
        {
          property: `og:image`,
          content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
        },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:title`, content: `Profil & Potensi Desa Ekang Anculai Bintan` },
        {
          name: `twitter:description`,
          content: `Cari dan jelajahi profil serta potensi Desa Ekang Anculai di Teluk Sebong, Kabupaten Bintan, Kepulauan Riau.`,
        },
        {
          name: `twitter:image`,
          content: `https://desawisataekanganculai.id/android-chrome-512x512.png`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://desawisataekanganculai.id/desa` }],
    }),
    component: br(Uc, `component`),
  }),
  Kc = vr(`/desa/$slug`)({
    loader: ({ params: e }) => {
      let t = Ke(e.slug);
      if (!t) throw te();
      return { village: t };
    },
    head: ({ loaderData: e }) => {
      if (!e)
        return {
          meta: [{ title: `Profil Desa tidak ditemukan` }, { name: `robots`, content: `noindex` }],
        };
      let t = e.village,
        n = `${t.nama} — ${t.kabupaten}, ${t.provinsi}`,
        r = t.deskripsi.slice(0, 155),
        i = `https://desawisataekanganculai.id/desa/${t.slug}`,
        a = t.image.startsWith(`http`) ? t.image : `https://desawisataekanganculai.id${t.image}`;
      return {
        meta: [
          { title: n },
          { name: `description`, content: r },
          { property: `og:type`, content: `website` },
          { property: `og:url`, content: i },
          { property: `og:title`, content: n },
          { property: `og:description`, content: r },
          { property: `og:image`, content: a },
          { name: `twitter:card`, content: `summary_large_image` },
          { name: `twitter:title`, content: n },
          { name: `twitter:description`, content: r },
          { name: `twitter:image`, content: a },
        ],
        links: [{ rel: `canonical`, href: i }],
      };
    },
    component: br(
      () =>
        Zo(
          () => import(`./desa._slug-eUSDy6L-.js`),
          __vite__mapDeps([18, 1, 2, 3, 4, 12, 5, 19, 9]),
        ),
      `component`,
    ),
    notFoundComponent: br(
      () => Zo(() => import(`./desa._slug-2CGZweuc.js`), __vite__mapDeps([20, 1, 12])),
      `notFoundComponent`,
    ),
  }),
  qc = Qo.update({ id: `/`, path: `/`, getParentRoute: () => Go }),
  Jc = $o.update({ id: `/admin`, path: `/admin`, getParentRoute: () => Go }),
  Yc = es.update({ id: `/galeri`, path: `/galeri`, getParentRoute: () => Go }),
  Xc = ds.update({
    id: `/rencanakan-kunjungan`,
    path: `/rencanakan-kunjungan`,
    getParentRoute: () => Go,
  }),
  Zc = Gc.update({ id: `/desa/`, path: `/desa/`, getParentRoute: () => Go }),
  Qc = {
    IndexRoute: qc,
    AdminRoute: Jc,
    GaleriRoute: Yc,
    RencanakanKunjunganRoute: Xc,
    DesaSlugRoute: Kc.update({ id: `/desa/$slug`, path: `/desa/$slug`, getParentRoute: () => Go }),
    DesaIndexRoute: Zc,
  },
  $c = Go._addFileChildren(Qc),
  el = () =>
    Ir({
      routeTree: $c,
      context: { queryClient: new Xi() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
async function tl() {
  let e = await el(),
    t;
  if ($r) {
    let n = await $r.getOptions();
    ((n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr));
  } else ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }));
  return (
    t.push(Dn),
    e.options.serializationAdapters && t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.matchesId.get().length || (await An(e)),
    e
  );
}
var nl = tl;
async function rl() {
  let e = await nl();
  return (window.$_TSR?.h(), e);
}
var il;
function al() {
  return (
    (il ||= rl()),
    (0, A.jsx)(Mn, { promise: il, children: (e) => (0, A.jsx)(zr, { router: e }) })
  );
}
var ol = et();
(0, k.startTransition)(() => {
  (0, ol.hydrateRoot)(document, (0, A.jsx)(k.StrictMode, { children: (0, A.jsx)(al, {}) }));
});
export {
  da as A,
  dr as B,
  Ca as C,
  va as D,
  ya as E,
  aa as F,
  ia as I,
  ra as L,
  la as M,
  sa as N,
  ma as O,
  oa as P,
  na as R,
  Ta as S,
  ba as T,
  Pa as _,
  cs as a,
  Aa as b,
  ns as c,
  Po as d,
  No as f,
  Ia as g,
  La as h,
  ls as i,
  ua as j,
  fa as k,
  ts as l,
  Ra as m,
  Gc as n,
  us as o,
  po as p,
  os as r,
  ss as s,
  Kc as t,
  Zo as u,
  Na as v,
  xa as w,
  Oa as x,
  Ma as y,
  ta as z,
};
