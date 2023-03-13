function jt(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Ve(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e)
    n[r] = e[r];
  return n;
}
function ut() {
}
var it = 0.7, xt = 1 / it, K = "\\s*([+-]?\\d+)\\s*", st = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", D = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Cn = /^#([0-9a-f]{3,8})$/, Fn = new RegExp(`^rgb\\(${K},${K},${K}\\)$`), Dn = new RegExp(`^rgb\\(${D},${D},${D}\\)$`), In = new RegExp(`^rgba\\(${K},${K},${K},${st}\\)$`), zn = new RegExp(`^rgba\\(${D},${D},${D},${st}\\)$`), Hn = new RegExp(`^hsl\\(${st},${D},${D}\\)$`), Pn = new RegExp(`^hsla\\(${st},${D},${D},${st}\\)$`), he = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
jt(ut, B, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: de,
  // Deprecated! Use color.formatHex.
  formatHex: de,
  formatHex8: Ln,
  formatHsl: Vn,
  formatRgb: pe,
  toString: pe
});
function de() {
  return this.rgb().formatHex();
}
function Ln() {
  return this.rgb().formatHex8();
}
function Vn() {
  return qe(this).formatHsl();
}
function pe() {
  return this.rgb().formatRgb();
}
function B(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Cn.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ge(e) : n === 3 ? new S(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? dt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? dt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Fn.exec(t)) ? new S(e[1], e[2], e[3], 1) : (e = Dn.exec(t)) ? new S(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = In.exec(t)) ? dt(e[1], e[2], e[3], e[4]) : (e = zn.exec(t)) ? dt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Hn.exec(t)) ? ye(e[1], e[2] / 100, e[3] / 100, 1) : (e = Pn.exec(t)) ? ye(e[1], e[2] / 100, e[3] / 100, e[4]) : he.hasOwnProperty(t) ? ge(he[t]) : t === "transparent" ? new S(NaN, NaN, NaN, 0) : null;
}
function ge(t) {
  return new S(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function dt(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new S(t, e, n, r);
}
function qn(t) {
  return t instanceof ut || (t = B(t)), t ? (t = t.rgb(), new S(t.r, t.g, t.b, t.opacity)) : new S();
}
function ot(t, e, n, r) {
  return arguments.length === 1 ? qn(t) : new S(t, e, n, r ?? 1);
}
function S(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
jt(S, ot, Ve(ut, {
  brighter(t) {
    return t = t == null ? xt : Math.pow(xt, t), new S(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? it : Math.pow(it, t), new S(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new S(X(this.r), X(this.g), X(this.b), bt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: me,
  // Deprecated! Use color.formatHex.
  formatHex: me,
  formatHex8: Xn,
  formatRgb: ve,
  toString: ve
}));
function me() {
  return `#${q(this.r)}${q(this.g)}${q(this.b)}`;
}
function Xn() {
  return `#${q(this.r)}${q(this.g)}${q(this.b)}${q((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ve() {
  const t = bt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${X(this.r)}, ${X(this.g)}, ${X(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function bt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function X(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function q(t) {
  return t = X(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ye(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new C(t, e, n, r);
}
function qe(t) {
  if (t instanceof C)
    return new C(t.h, t.s, t.l, t.opacity);
  if (t instanceof ut || (t = B(t)), !t)
    return new C();
  if (t instanceof C)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), s = NaN, a = o - i, u = (o + i) / 2;
  return a ? (e === o ? s = (n - r) / a + (n < r) * 6 : n === o ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= u < 0.5 ? o + i : 2 - o - i, s *= 60) : a = u > 0 && u < 1 ? 0 : s, new C(s, a, u, t.opacity);
}
function Bn(t, e, n, r) {
  return arguments.length === 1 ? qe(t) : new C(t, e, n, r ?? 1);
}
function C(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
jt(C, Bn, Ve(ut, {
  brighter(t) {
    return t = t == null ? xt : Math.pow(xt, t), new C(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? it : Math.pow(it, t), new C(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new S(
      Ht(t >= 240 ? t - 240 : t + 120, i, r),
      Ht(t, i, r),
      Ht(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new C(we(this.h), pt(this.s), pt(this.l), bt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = bt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${we(this.h)}, ${pt(this.s) * 100}%, ${pt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function we(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function pt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ht(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Gn = (t, e) => t.length > e ? `${t.slice(0, e)}[...]` : t, P = (t = 0, e = 1e4, n) => {
  let r = Math.floor(Math.random() * (t - e - 1)) + e + 1;
  for (; r === n; )
    r = P(t, e);
  return r;
}, rt = (t, e) => new Array(t).fill(null).map(e), V = (t = void 0) => t == null ? !1 : Boolean(t), Xe = (t, e = 15) => {
  let n = !1;
  return (...r) => {
    let i;
    return n || (i = t.apply(void 0, r), n = !0, setTimeout(() => {
      n = !1;
    }, e)), i;
  };
}, Be = (t, e = "", n) => {
  const r = document.createElement(t);
  return r.className = e, n == null || n.appendChild(r), r;
}, Ge = (t) => t.replace(/( {2}|\r\n|\n|\r)/g, ""), Wn = (t) => Ge(t.replace(/ /g, "")), Yn = (t) => t.replace(/[^0-9a-z ]/gi, ""), Kn = ([t, e, n], r = "light", i = 170) => {
  const o = (t * 299 + e * 587 + n * 114) / 1e3;
  return {
    light: o < i,
    dark: o > i
  }[r];
}, Un = () => P(0, 255), We = (t = "light", e = 170) => {
  const n = () => rt(3, Un);
  let r;
  for (; r === void 0 || !Kn(r, t, e); )
    r = n();
  return ot(...r);
}, Ra = (t = 10) => rt(t, () => We()), Zn = (t) => t.darker(0.5), Jn = (t, e = !0) => t.map(
  ({
    color: n = We().formatHex(),
    ...r
  }) => ({
    color: n,
    rgbColor: e && ot(n),
    ...r
  })
), Ca = (t, e = 3, n = 50) => {
  if (t.length < e)
    throw new Error("Data set is too short to sample.");
  if (t.length === e)
    return t;
  const r = n > t.length, i = t.length - e, o = P(
    0,
    r ? i : t.length - n
  ), s = o + e, a = P(
    s,
    s + (r ? i : n - e)
  );
  return t.slice(o, a);
}, Fa = (t = P(3, 10), e = P(1, 4), n = P(1, 50), r = P(n, 200)) => ({
  label: "Random Chart Data",
  config: {
    axisLabels: ["Y Axis", "X Axis"],
    trim: !0,
    values: rt(
      e,
      (i, o) => ({
        name: `Type ${Number(o) + 1}`
      })
    )
  },
  data: rt(
    t,
    (i, o) => ({
      label: `Item ${Number(o) + 1}`,
      values: rt(e, () => P(n, r))
    })
  )
}), Da = () => ({
  label: "",
  config: {
    axisLabels: ["", ""],
    values: [],
    trim: !0
  },
  data: []
}), Qn = (t, e) => t === void 0 ? e : e.map((n) => (n.values = t.values.map(({ key: r }, i) => {
  if (typeof r != "string" && Array.isArray(n.values))
    return n.values[i];
  const o = parseInt(n[r ?? ""]);
  return isNaN(o) ? 0 : o;
}), Array.isArray(t.axisKeys) && typeof n.label != "string" && (n.label = n[t.axisKeys[0]], typeof n.label != "string" && (n.label = "AXIS KEY MISMATCH")), n)), Ia = (t, e) => {
  const n = document.createEvent("MouseEvents");
  return n.initEvent(e, !0, !0), t.dispatchEvent(n), n;
};
function vt(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function jn(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ye(t) {
  let e, n, r;
  t.length !== 2 ? (e = vt, n = (a, u) => vt(t(a), u), r = (a, u) => t(a) - u) : (e = t === vt || t === jn ? t : tr, n = t, r = t);
  function i(a, u, l = 0, c = a.length) {
    if (l < c) {
      if (e(u, u) !== 0)
        return c;
      do {
        const h = l + c >>> 1;
        n(a[h], u) < 0 ? l = h + 1 : c = h;
      } while (l < c);
    }
    return l;
  }
  function o(a, u, l = 0, c = a.length) {
    if (l < c) {
      if (e(u, u) !== 0)
        return c;
      do {
        const h = l + c >>> 1;
        n(a[h], u) <= 0 ? l = h + 1 : c = h;
      } while (l < c);
    }
    return l;
  }
  function s(a, u, l = 0, c = a.length) {
    const h = i(a, u, l, c - 1);
    return h > l && r(a[h - 1], u) > -r(a[h], u) ? h - 1 : h;
  }
  return { left: i, center: s, right: o };
}
function tr() {
  return 0;
}
function er(t) {
  return t === null ? NaN : +t;
}
const nr = Ye(vt), rr = nr.right;
Ye(er).center;
const ir = rr;
class _e extends Map {
  constructor(e, n = ar) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [r, i] of e)
        this.set(r, i);
  }
  get(e) {
    return super.get(xe(this, e));
  }
  has(e) {
    return super.has(xe(this, e));
  }
  set(e, n) {
    return super.set(sr(this, e), n);
  }
  delete(e) {
    return super.delete(or(this, e));
  }
}
function xe({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function sr({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function or({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function ar(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const ur = Math.sqrt(50), lr = Math.sqrt(10), cr = Math.sqrt(2);
function Mt(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), s = o >= ur ? 10 : o >= lr ? 5 : o >= cr ? 2 : 1;
  let a, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / s, a = Math.round(t * l), u = Math.round(e * l), a / l < t && ++a, u / l > e && --u, l = -l) : (l = Math.pow(10, i) * s, a = Math.round(t / l), u = Math.round(e / l), a * l < t && ++a, u * l > e && --u), u < a && 0.5 <= n && n < 2 ? Mt(t, e, n * 2) : [a, u, l];
}
function fr(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const r = e < t, [i, o, s] = r ? Mt(e, t, n) : Mt(t, e, n);
  if (!(o >= i))
    return [];
  const a = o - i + 1, u = new Array(a);
  if (r)
    if (s < 0)
      for (let l = 0; l < a; ++l)
        u[l] = (o - l) / -s;
    else
      for (let l = 0; l < a; ++l)
        u[l] = (o - l) * s;
  else if (s < 0)
    for (let l = 0; l < a; ++l)
      u[l] = (i + l) / -s;
  else
    for (let l = 0; l < a; ++l)
      u[l] = (i + l) * s;
  return u;
}
function Xt(t, e, n) {
  return e = +e, t = +t, n = +n, Mt(t, e, n)[2];
}
function hr(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Xt(e, t, n) : Xt(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function be(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Me(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function dr(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
var Bt = "http://www.w3.org/1999/xhtml";
const Ae = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Bt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ft(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Ae.hasOwnProperty(e) ? { space: Ae[e], local: t } : t;
}
function pr(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Bt && e.documentElement.namespaceURI === Bt ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function gr(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ke(t) {
  var e = Ft(t);
  return (e.local ? gr : pr)(e);
}
function mr() {
}
function te(t) {
  return t == null ? mr : function() {
    return this.querySelector(t);
  };
}
function vr(t) {
  typeof t != "function" && (t = te(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], s = o.length, a = r[i] = new Array(s), u, l, c = 0; c < s; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), a[c] = l);
  return new T(r, this._parents);
}
function yr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function wr() {
  return [];
}
function Ue(t) {
  return t == null ? wr : function() {
    return this.querySelectorAll(t);
  };
}
function _r(t) {
  return function() {
    return yr(t.apply(this, arguments));
  };
}
function xr(t) {
  typeof t == "function" ? t = _r(t) : t = Ue(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var s = e[o], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && (r.push(t.call(u, u.__data__, l, s)), i.push(u));
  return new T(r, i);
}
function Ze(t) {
  return function() {
    return this.matches(t);
  };
}
function Je(t) {
  return function(e) {
    return e.matches(t);
  };
}
var br = Array.prototype.find;
function Mr(t) {
  return function() {
    return br.call(this.children, t);
  };
}
function Ar() {
  return this.firstElementChild;
}
function Er(t) {
  return this.select(t == null ? Ar : Mr(typeof t == "function" ? t : Je(t)));
}
var kr = Array.prototype.filter;
function Nr() {
  return Array.from(this.children);
}
function Sr(t) {
  return function() {
    return kr.call(this.children, t);
  };
}
function $r(t) {
  return this.selectAll(t == null ? Nr : Sr(typeof t == "function" ? t : Je(t)));
}
function Tr(t) {
  typeof t != "function" && (t = Ze(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], s = o.length, a = r[i] = [], u, l = 0; l < s; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && a.push(u);
  return new T(r, this._parents);
}
function Qe(t) {
  return new Array(t.length);
}
function Or() {
  return new T(this._enter || this._groups.map(Qe), this._parents);
}
function At(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
At.prototype = {
  constructor: At,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Rr(t) {
  return function() {
    return t;
  };
}
function Cr(t, e, n, r, i, o) {
  for (var s = 0, a, u = e.length, l = o.length; s < l; ++s)
    (a = e[s]) ? (a.__data__ = o[s], r[s] = a) : n[s] = new At(t, o[s]);
  for (; s < u; ++s)
    (a = e[s]) && (i[s] = a);
}
function Fr(t, e, n, r, i, o, s) {
  var a, u, l = /* @__PURE__ */ new Map(), c = e.length, h = o.length, f = new Array(c), d;
  for (a = 0; a < c; ++a)
    (u = e[a]) && (f[a] = d = s.call(u, u.__data__, a, e) + "", l.has(d) ? i[a] = u : l.set(d, u));
  for (a = 0; a < h; ++a)
    d = s.call(t, o[a], a, o) + "", (u = l.get(d)) ? (r[a] = u, u.__data__ = o[a], l.delete(d)) : n[a] = new At(t, o[a]);
  for (a = 0; a < c; ++a)
    (u = e[a]) && l.get(f[a]) === u && (i[a] = u);
}
function Dr(t) {
  return t.__data__;
}
function Ir(t, e) {
  if (!arguments.length)
    return Array.from(this, Dr);
  var n = e ? Fr : Cr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Rr(t));
  for (var o = i.length, s = new Array(o), a = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], h = i[l], f = h.length, d = zr(t.call(c, c && c.__data__, l, r)), p = d.length, m = a[l] = new Array(p), v = s[l] = new Array(p), k = u[l] = new Array(f);
    n(c, h, m, v, k, d, e);
    for (var A = 0, _ = 0, b, y; A < p; ++A)
      if (b = m[A]) {
        for (A >= _ && (_ = A + 1); !(y = v[_]) && ++_ < p; )
          ;
        b._next = y || null;
      }
  }
  return s = new T(s, r), s._enter = a, s._exit = u, s;
}
function zr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Hr() {
  return new T(this._exit || this._groups.map(Qe), this._parents);
}
function Pr(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Lr(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, s = Math.min(i, o), a = new Array(i), u = 0; u < s; ++u)
    for (var l = n[u], c = r[u], h = l.length, f = a[u] = new Array(h), d, p = 0; p < h; ++p)
      (d = l[p] || c[p]) && (f[p] = d);
  for (; u < i; ++u)
    a[u] = n[u];
  return new T(a, this._parents);
}
function Vr() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function qr(t) {
  t || (t = Xr);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = n[o], a = s.length, u = i[o] = new Array(a), l, c = 0; c < a; ++c)
      (l = s[c]) && (u[c] = l);
    u.sort(e);
  }
  return new T(i, this._parents).order();
}
function Xr(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Br() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Gr() {
  return Array.from(this);
}
function Wr() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s)
        return s;
    }
  return null;
}
function Yr() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function Kr() {
  return !this.node();
}
function Ur(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, s = i.length, a; o < s; ++o)
      (a = i[o]) && t.call(a, a.__data__, o, i);
  return this;
}
function Zr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Jr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Qr(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function jr(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ti(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function ei(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function ni(t, e) {
  var n = Ft(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Jr : Zr : typeof e == "function" ? n.local ? ei : ti : n.local ? jr : Qr)(n, e));
}
function je(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ri(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ii(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function si(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function oi(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? ri : typeof e == "function" ? si : ii)(t, e, n ?? "")) : U(this.node(), t);
}
function U(t, e) {
  return t.style.getPropertyValue(e) || je(t).getComputedStyle(t, null).getPropertyValue(e);
}
function ai(t) {
  return function() {
    delete this[t];
  };
}
function ui(t, e) {
  return function() {
    this[t] = e;
  };
}
function li(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function ci(t, e) {
  return arguments.length > 1 ? this.each((e == null ? ai : typeof e == "function" ? li : ui)(t, e)) : this.node()[t];
}
function tn(t) {
  return t.trim().split(/^|\s+/);
}
function ee(t) {
  return t.classList || new en(t);
}
function en(t) {
  this._node = t, this._names = tn(t.getAttribute("class") || "");
}
en.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function nn(t, e) {
  for (var n = ee(t), r = -1, i = e.length; ++r < i; )
    n.add(e[r]);
}
function rn(t, e) {
  for (var n = ee(t), r = -1, i = e.length; ++r < i; )
    n.remove(e[r]);
}
function fi(t) {
  return function() {
    nn(this, t);
  };
}
function hi(t) {
  return function() {
    rn(this, t);
  };
}
function di(t, e) {
  return function() {
    (e.apply(this, arguments) ? nn : rn)(this, t);
  };
}
function pi(t, e) {
  var n = tn(t + "");
  if (arguments.length < 2) {
    for (var r = ee(this.node()), i = -1, o = n.length; ++i < o; )
      if (!r.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? di : e ? fi : hi)(n, e));
}
function gi() {
  this.textContent = "";
}
function mi(t) {
  return function() {
    this.textContent = t;
  };
}
function vi(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function yi(t) {
  return arguments.length ? this.each(t == null ? gi : (typeof t == "function" ? vi : mi)(t)) : this.node().textContent;
}
function wi() {
  this.innerHTML = "";
}
function _i(t) {
  return function() {
    this.innerHTML = t;
  };
}
function xi(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function bi(t) {
  return arguments.length ? this.each(t == null ? wi : (typeof t == "function" ? xi : _i)(t)) : this.node().innerHTML;
}
function Mi() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ai() {
  return this.each(Mi);
}
function Ei() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ki() {
  return this.each(Ei);
}
function Ni(t) {
  var e = typeof t == "function" ? t : Ke(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Si() {
  return null;
}
function $i(t, e) {
  var n = typeof t == "function" ? t : Ke(t), r = e == null ? Si : typeof e == "function" ? e : te(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ti() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Oi() {
  return this.each(Ti);
}
function Ri() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ci() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Fi(t) {
  return this.select(t ? Ci : Ri);
}
function Di(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ii(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function zi(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Hi(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Pi(t, e, n) {
  return function() {
    var r = this.__on, i, o = Ii(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((i = r[s]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Li(t, e, n) {
  var r = zi(t + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, l = a.length, c; u < l; ++u)
        for (i = 0, c = a[u]; i < o; ++i)
          if ((s = r[i]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = e ? Pi : Hi, i = 0; i < o; ++i)
    this.each(a(r[i], e, n));
  return this;
}
function sn(t, e, n) {
  var r = je(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Vi(t, e) {
  return function() {
    return sn(this, t, e);
  };
}
function qi(t, e) {
  return function() {
    return sn(this, t, e.apply(this, arguments));
  };
}
function Xi(t, e) {
  return this.each((typeof e == "function" ? qi : Vi)(t, e));
}
function* Bi() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var on = [null];
function T(t, e) {
  this._groups = t, this._parents = e;
}
function lt() {
  return new T([[document.documentElement]], on);
}
function Gi() {
  return this;
}
T.prototype = lt.prototype = {
  constructor: T,
  select: vr,
  selectAll: xr,
  selectChild: Er,
  selectChildren: $r,
  filter: Tr,
  data: Ir,
  enter: Or,
  exit: Hr,
  join: Pr,
  merge: Lr,
  selection: Gi,
  order: Vr,
  sort: qr,
  call: Br,
  nodes: Gr,
  node: Wr,
  size: Yr,
  empty: Kr,
  each: Ur,
  attr: ni,
  style: oi,
  property: ci,
  classed: pi,
  text: yi,
  html: bi,
  raise: Ai,
  lower: ki,
  append: Ni,
  insert: $i,
  remove: Oi,
  clone: Fi,
  datum: Di,
  on: Li,
  dispatch: Xi,
  [Symbol.iterator]: Bi
};
function Et(t) {
  return typeof t == "string" ? new T([[document.querySelector(t)]], [document.documentElement]) : new T([[t]], on);
}
var an = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, n) {
    var r = -1;
    return e.some(function(i, o) {
      return i[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function e() {
        this.__entries__ = [];
      }
      return Object.defineProperty(e.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.get = function(n) {
        var r = t(this.__entries__, n), i = this.__entries__[r];
        return i && i[1];
      }, e.prototype.set = function(n, r) {
        var i = t(this.__entries__, n);
        ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r]);
      }, e.prototype.delete = function(n) {
        var r = this.__entries__, i = t(r, n);
        ~i && r.splice(i, 1);
      }, e.prototype.has = function(n) {
        return !!~t(this.__entries__, n);
      }, e.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var s = o[i];
          n.call(r, s[1], s[0]);
        }
      }, e;
    }()
  );
}(), Gt = typeof window < "u" && typeof document < "u" && window.document === document, kt = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Wi = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(kt) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), Yi = 2;
function Ki(t, e) {
  var n = !1, r = !1, i = 0;
  function o() {
    n && (n = !1, t()), r && a();
  }
  function s() {
    Wi(o);
  }
  function a() {
    var u = Date.now();
    if (n) {
      if (u - i < Yi)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(s, e);
    i = u;
  }
  return a;
}
var Ui = 20, Zi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ji = typeof MutationObserver < "u", Qi = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ki(this.refresh.bind(this), Ui);
    }
    return t.prototype.addObserver = function(e) {
      ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(e) {
      var n = this.observers_, r = n.indexOf(e);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var e = this.updateObservers_();
      e && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var e = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return e.forEach(function(n) {
        return n.broadcastActive();
      }), e.length > 0;
    }, t.prototype.connect_ = function() {
      !Gt || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ji ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !Gt || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var n = e.propertyName, r = n === void 0 ? "" : n, i = Zi.some(function(o) {
        return !!~r.indexOf(o);
      });
      i && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), un = function(t, e) {
  for (var n = 0, r = Object.keys(e); n < r.length; n++) {
    var i = r[n];
    Object.defineProperty(t, i, {
      value: e[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, Z = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || kt;
}, ln = Dt(0, 0, 0, 0);
function Nt(t) {
  return parseFloat(t) || 0;
}
function Ee(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(r, i) {
    var o = t["border-" + i + "-width"];
    return r + Nt(o);
  }, 0);
}
function ji(t) {
  for (var e = ["top", "right", "bottom", "left"], n = {}, r = 0, i = e; r < i.length; r++) {
    var o = i[r], s = t["padding-" + o];
    n[o] = Nt(s);
  }
  return n;
}
function ts(t) {
  var e = t.getBBox();
  return Dt(0, 0, e.width, e.height);
}
function es(t) {
  var e = t.clientWidth, n = t.clientHeight;
  if (!e && !n)
    return ln;
  var r = Z(t).getComputedStyle(t), i = ji(r), o = i.left + i.right, s = i.top + i.bottom, a = Nt(r.width), u = Nt(r.height);
  if (r.boxSizing === "border-box" && (Math.round(a + o) !== e && (a -= Ee(r, "left", "right") + o), Math.round(u + s) !== n && (u -= Ee(r, "top", "bottom") + s)), !rs(t)) {
    var l = Math.round(a + o) - e, c = Math.round(u + s) - n;
    Math.abs(l) !== 1 && (a -= l), Math.abs(c) !== 1 && (u -= c);
  }
  return Dt(i.left, i.top, a, u);
}
var ns = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof Z(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof Z(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function rs(t) {
  return t === Z(t).document.documentElement;
}
function is(t) {
  return Gt ? ns(t) ? ts(t) : es(t) : ln;
}
function ss(t) {
  var e = t.x, n = t.y, r = t.width, i = t.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(o.prototype);
  return un(s, {
    x: e,
    y: n,
    width: r,
    height: i,
    top: n,
    right: e + r,
    bottom: i + n,
    left: e
  }), s;
}
function Dt(t, e, n, r) {
  return { x: t, y: e, width: n, height: r };
}
var os = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Dt(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = is(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), as = (
  /** @class */
  function() {
    function t(e, n) {
      var r = ss(n);
      un(this, { target: e, contentRect: r });
    }
    return t;
  }()
), us = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new an(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = n, this.callbackCtx_ = r;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof Z(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) || (n.set(e, new os(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof Z(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) && (n.delete(e), n.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var e = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && e.activeObservations_.push(n);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var e = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new as(r.target, r.broadcastRect());
        });
        this.callback_.call(e, n, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), cn = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new an(), fn = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Qi.getInstance(), r = new us(e, n, this);
      cn.set(this, r);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  fn.prototype[t] = function() {
    var e;
    return (e = cn.get(this))[t].apply(e, arguments);
  };
});
var ls = function() {
  return typeof kt.ResizeObserver < "u" ? kt.ResizeObserver : fn;
}();
const cs = "#A8D4FF", fs = "#000E1A", hs = {
  text: cs,
  background: fs
}, ds = "#003A73", ps = "#F0F8FF", gs = {
  text: ds,
  background: ps
}, ne = { dark: hs, light: gs }, hn = (t, e, n) => {
  const r = (o) => Yn(Wn(o));
  let i = document.querySelector(`[data-selector=${t}]`);
  i === null && (i = Be("style", "", document.head), i.setAttribute("data-selector", t)), r(i.innerHTML).match(r(e)) === null && (i.innerHTML = Ge(
    `${V(n) ? "" : i.innerHTML} ${e}`
  ));
}, za = (t, e) => ne[t] = e, Ha = (t) => ne[t], ms = (t) => {
  let e = Object.entries(ne[t]).map(([n, r]) => `--${n}: ${r};`).join("");
  return e = `:root { ${e} }`, hn("pic-variables", e, !0), e;
}, re = (t, ...e) => {
  const n = t.map((r, i) => `${r}${e[i] ?? ""}`).join("");
  return hn("pic-styles", n), n;
}, dn = (
  /* css */
  `
  border-radius: 5px;
  box-shadow: 3px 3px 6px -4px rgba(0, 0, 0, 0.45);
  color: var(--text);
  border: 1px solid var(--text);
  background-color: var(--background);
`
), vs = () => {
  re`
    .pic-svg {
      ${dn}
      min-width: 512px;
    }

    .pic-title {
      position: absolute;
      width: 100%;
      text-align: center;
      margin: 8px 0;
      font-weight: bold;
      color: var(--text);
    }
  `;
};
class Pa {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param label label for chart
   * @param config configuration object
   * @param data the data to be displayed
   * @param containerElement optionally DOM node in place of ID
   * @param containerSelector selector to select DOM object
   * @param theme the selected theme for the chart
   */
  constructor({
    label: e,
    container: n,
    config: r,
    data: i,
    theme: o = "light"
  }) {
    this.padding = { l: 45, r: 5, t: 25, b: 85 }, this.dimensions = {
      left: 0,
      width: 0,
      top: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      resizeOffset: 0,
      padding: this.padding
    }, this.initialWidth = 0, this.configs = /* @__PURE__ */ new Map(), this.dataSets = /* @__PURE__ */ new Map(), this.scales = /* @__PURE__ */ new Map(), this.axes = /* @__PURE__ */ new Map(), this.keys = /* @__PURE__ */ new Map(), this.visuals = /* @__PURE__ */ new Map(), this.setContainer = (s) => {
      if (s !== null && V(s == null ? void 0 : s.nodeName))
        return s;
      throw new Error("No valid DOM element or selector provided for chart.");
    }, this.setConfig = (s, a = "default") => {
      if (!Array.isArray(s == null ? void 0 : s.values))
        throw new Error("No valid configuration provided for chart.");
      return s.values = Jn(s.values), this.configs.set(a, s), this.draw(), this;
    }, this.setData = (s, a = "default", u = "default", l = !0) => {
      const c = this.configs.get(u);
      if (!Array.isArray(s))
        throw new Error("No valid data provided for chart.");
      const h = Array.isArray(c == null ? void 0 : c.values) ? Qn(c, s) : s;
      let f = l ? Number(Me(h, (m) => Me(m.values))) : 0, d = Number(be(h, (m) => be(m.values)));
      const p = Math.ceil(d / 15);
      if (l) {
        const m = f > p ? f - p : 0;
        f = f > 0 ? m : f, f = f < 0 ? f - p : f, d += p;
      }
      return this.dataSets.set(a, { data: h, minValue: f, maxValue: d }), this.draw(), this;
    }, this.addScale = (s = { x: "band", y: "linear" }, a = "default", u = "default") => {
      if (this.dataSets.get(u) === void 0)
        throw new Error("No valid config provided for scale.");
      return this.scales.set(
        a,
        Object.entries(s).reduce(
          (c, [h, f]) => ({
            ...c,
            [h]: new ho({
              scaleType: f,
              dataSet: this.dataSets.get(u),
              dimensions: this.dimensions
            })
          }),
          {}
        )
      ), this.draw(), this;
    }, this.addAxis = (s = "default", a = "default", u = "default") => {
      var c;
      const l = this.scales.get(a);
      if (l === void 0)
        throw new Error("No valid config provided for axis.");
      return this.axes.set(
        s,
        new $s({
          d3Svg: this.d3Svg,
          tooltip: this.tooltip,
          dimensions: this.dimensions,
          truncate: 10,
          axisLabels: ((c = this.configs.get(u)) == null ? void 0 : c.axisLabels) ?? ["", ""],
          scales: l
        })
      ), this.draw(), this;
    }, this.addKey = (s = "default", a = "default") => {
      const u = this.configs.get(a);
      if (u === void 0)
        throw new Error("No valid config provided for key.");
      return this.keys.set(
        s,
        new po({
          d3Svg: this.d3Svg,
          values: (u == null ? void 0 : u.values) ?? [],
          dimensions: this.dimensions
        })
      ), this.draw(), this;
    }, this.addVisual = (s = "default", a = "default", u = "default", l = "default", c = "bar", h = 1e3) => {
      const f = this.configs.get(a), d = this.dataSets.get(u), p = this.scales.get(l);
      if ([f, d, p].includes(void 0))
        throw new Error("No valid config provided for visual.");
      const v = {
        d3Svg: this.d3Svg,
        config: f,
        dataSet: d,
        scales: p,
        transitionTime: h,
        tooltip: this.tooltip,
        dimensions: this.dimensions
      };
      switch (c) {
        default:
          setTimeout(() => this.visuals.set(s, new Oa(v)));
      }
      return setTimeout(this.draw, h), this;
    }, this.deleteMapItem = (s, a) => {
      var l;
      if (((l = this[s]) == null ? void 0 : l.get(a)) === void 0)
        throw new Error(
          `Failed attempting to delete "${a}" from "this.${s}".`
        );
      return this[s].delete(a), this.draw(), this;
    }, this.addDefaults = () => this.addScale().addAxis().addKey().addVisual(), this.updateDimensions = () => {
      const { left: s, width: a, top: u, height: l } = this.container.getBoundingClientRect(), { l: c, r: h, t: f, b: d } = this.padding;
      this.dimensions.left = s, this.dimensions.width = a, this.dimensions.top = u, this.dimensions.height = l, this.dimensions.innerWidth = a - c - h, this.dimensions.innerHeight = l - f - d, this.dimensions.resizeOffset = a - this.initialWidth, this.dimensions.padding = this.padding;
    }, this.renderChart = () => {
      if (this.title !== void 0 && V(this.label))
        this.title.text(this.label);
      else
        throw new Error("Unable to render the chart.");
    }, this.draw = () => {
      this.updateDimensions(), this.renderChart(), this.scales.forEach(
        (s) => Object.values(s).forEach((a) => a.render())
      ), this.axes.forEach((s) => s.render()), this.keys.forEach((s) => s.render()), this.visuals.forEach((s) => s.render({ reset: !0 }));
    }, this.redraw = Xe(this.draw), this.resizeWatcher = new ls(this.redraw), this.label = e, this.container = this.setContainer(
      typeof n == "string" ? document.querySelector(n) : n
    ), this.title = Et(this.container).append("div").attr("class", "pic-title"), this.d3Svg = Et(this.container).append("svg").attr("class", "pic-svg").attr("width", "100%").attr("height", "100%"), this.resizeWatcher.observe(this.container), this.tooltip = new ws(this.container), this.draw(), this.initialWidth = this.dimensions.width, r !== void 0 && this.setConfig(r), i !== void 0 && this.setData(i), ms(o), vs();
  }
}
const ys = () => {
  re`
    .pic-tooltip {
      transition: opacity 0.5s;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      padding: 8px;
      ${dn}
    }
  `;
};
class ws {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param container DOM object
   * @throws {Error} invalid DOM element
   */
  constructor(e) {
    if (this.ping = (n, r) => {
      const i = typeof n == "string" ? n : `<strong>${n[0]}</strong><br>${n[1]}: <em>${n[2]}</em>`;
      this.tooltip.innerHTML = i, this.tooltip.style.visibility = "visible", this.tooltip.style.opacity = "0.9", this.move(r), this.cleanup(), this.showTimeout = setTimeout(() => {
        this.hide();
      }, 5e3);
    }, this.move = Xe((n) => {
      const { left: i, width: o, top: s, height: a } = this.container.getBoundingClientRect(), { width: u, height: l } = this.tooltip.getBoundingClientRect(), { clientX: c, clientY: h } = n, f = o + i - c < u + 10, d = a + s - h < l + 10;
      this.tooltip.style.left = `${c - i + (f ? -u - 10 : 10)}px`, this.tooltip.style.top = `${h - s + (d ? -l - 10 : 10)}px`;
    }), this.hide = () => {
      this.cleanup(), this.tooltip.style.opacity = "0", this.hideTimeout = setTimeout(() => {
        this.tooltip.style.visibility = "hidden";
      }, 500);
    }, this.cleanup = () => {
      this.showTimeout !== void 0 && clearTimeout(this.showTimeout), this.hideTimeout !== void 0 && clearTimeout(this.hideTimeout);
    }, !V(e.nodeName))
      throw new Error("The tooltip has no valid container element.");
    this.container = e, this.tooltip = Be("div", "pic-tooltip", e), ys();
  }
}
function _s(t) {
  return t;
}
var Pt = 1, Lt = 2, Wt = 3, tt = 4, ke = 1e-6;
function xs(t) {
  return "translate(" + t + ",0)";
}
function bs(t) {
  return "translate(0," + t + ")";
}
function Ms(t) {
  return (e) => +t(e);
}
function As(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function Es() {
  return !this.__axis;
}
function pn(t, e) {
  var n = [], r = null, i = null, o = 6, s = 6, a = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = t === Pt || t === tt ? -1 : 1, c = t === tt || t === Lt ? "x" : "y", h = t === Pt || t === Wt ? xs : bs;
  function f(d) {
    var p = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), m = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : _s), v = Math.max(o, 0) + a, k = e.range(), A = +k[0] + u, _ = +k[k.length - 1] + u, b = (e.bandwidth ? As : Ms)(e.copy(), u), y = d.selection ? d.selection() : d, w = y.selectAll(".domain").data([null]), $ = y.selectAll(".tick").data(p, e).order(), O = $.exit(), x = $.enter().append("g").attr("class", "tick"), M = $.select("line"), g = $.select("text");
    w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), $ = $.merge(x), M = M.merge(x.append("line").attr("stroke", "currentColor").attr(c + "2", l * o)), g = g.merge(x.append("text").attr("fill", "currentColor").attr(c, l * v).attr("dy", t === Pt ? "0em" : t === Wt ? "0.71em" : "0.32em")), d !== y && (w = w.transition(d), $ = $.transition(d), M = M.transition(d), g = g.transition(d), O = O.transition(d).attr("opacity", ke).attr("transform", function(N) {
      return isFinite(N = b(N)) ? h(N + u) : this.getAttribute("transform");
    }), x.attr("opacity", ke).attr("transform", function(N) {
      var E = this.parentNode.__axis;
      return h((E && isFinite(E = E(N)) ? E : b(N)) + u);
    })), O.remove(), w.attr("d", t === tt || t === Lt ? s ? "M" + l * s + "," + A + "H" + u + "V" + _ + "H" + l * s : "M" + u + "," + A + "V" + _ : s ? "M" + A + "," + l * s + "V" + u + "H" + _ + "V" + l * s : "M" + A + "," + u + "H" + _), $.attr("opacity", 1).attr("transform", function(N) {
      return h(b(N) + u);
    }), M.attr(c + "2", l * o), g.attr(c, l * v).text(m), y.filter(Es).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Lt ? "start" : t === tt ? "end" : "middle"), y.each(function() {
      this.__axis = b;
    });
  }
  return f.scale = function(d) {
    return arguments.length ? (e = d, f) : e;
  }, f.ticks = function() {
    return n = Array.from(arguments), f;
  }, f.tickArguments = function(d) {
    return arguments.length ? (n = d == null ? [] : Array.from(d), f) : n.slice();
  }, f.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), f) : r && r.slice();
  }, f.tickFormat = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, f.tickSize = function(d) {
    return arguments.length ? (o = s = +d, f) : o;
  }, f.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, f) : o;
  }, f.tickSizeOuter = function(d) {
    return arguments.length ? (s = +d, f) : s;
  }, f.tickPadding = function(d) {
    return arguments.length ? (a = +d, f) : a;
  }, f.offset = function(d) {
    return arguments.length ? (u = +d, f) : u;
  }, f;
}
function ks(t) {
  return pn(Wt, t);
}
function Ns(t) {
  return pn(tt, t);
}
const Ss = () => {
  re`
    .pic-axis {
      font-size: 0.8em;
    }

    .pic-line {
      opacity: 0.2;
    }
  `;
};
class $s {
  /**
   * Constructor function which sets up the local object.
   *
   * @method constructor
   * @param d3Svg containing d3 SVG
   * @param tooltip tooltip div
   * @param dimensions chart dimensions
   * @param truncate text truncate length
   * @param axisLabels chart axis labels
   * @param scales chart axis scales
   * @throws {Error} invalid parameters
   */
  constructor({
    d3Svg: e,
    tooltip: n,
    dimensions: r,
    truncate: i = 2,
    axisLabels: o,
    scales: s
  }) {
    if (!V(e))
      throw new Error("No SVG provided to Axis constructor.");
    this.dimensions = r, this.d3Svg = e, this.tooltip = n, this.truncate = i, this.axisLabels = o ?? ["", ""], this.scales = s, this.axisGroupX = e.append("g").attr("class", "pic-axis pic-axis-x"), this.axisGroupY = e.append("g").attr("class", "pic-axis pic-axis-y"), this.render(), Ss();
  }
  /**
   * Master render to call all rendering methods
   *
   * @method render
   */
  render(e) {
    e !== void 0 && (this.dimensions = e), this.dimensions !== void 0 && (this.renderAxisX(), this.renderAxisY(), this.renderLabels());
  }
  /**
   * Render the x axis
   *
   * @method renderAxisX
   */
  renderAxisX() {
    const { height: e, padding: n } = this.dimensions;
    this.scales.x !== void 0 && this.axisGroupX.call(ks(this.scales.x.axisScale)).attr("transform", `translate(${n.l},${e - n.b})`).selectAll("text").attr("x", -5).attr("y", 6).attr("transform", "rotate(310)").attr("class", "pic-axis-label pic-axis-label-x").text((r) => Gn(r, this.truncate)).style("text-anchor", "end").on("mousemove", (r, i) => {
      i.length > this.truncate && this.tooltip.ping(`<strong>${i}</strong>`, r);
    }).on("mouseout", this.tooltip.hide);
  }
  /**
   * Render the y axis
   *
   * @method renderAxisY
   */
  renderAxisY() {
    const { innerWidth: e, padding: n } = this.dimensions;
    this.scales.y !== void 0 && this.axisGroupY.call(Ns(this.scales.y.axisScale)).attr("transform", `translate(${n.l},0)`).selectAll(".pic-axis-y .tick line").attr("class", "pic-line").attr("x2", () => e);
  }
  /**
   * Render the labels
   *
   * @method renderLabels
   */
  renderLabels() {
    var i, o, s, a;
    const { height: e, width: n, padding: r } = this.dimensions;
    this.d3Svg.selectAll("text.pic-label").remove(), V((i = this.axisLabels) == null ? void 0 : i[0]) && this.d3Svg.append("text").attr("class", "pic-label pic-label-x").attr("x", e / -2 + r.b / 2).attr("y", 20).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text(((o = this.axisLabels) == null ? void 0 : o[0]) ?? ""), V((s = this.axisLabels) == null ? void 0 : s[1]) && this.d3Svg.append("text").attr("class", "pic-label pic-label-y").attr("x", (n + r.l + r.r) / 2).attr("y", e - r.b / 3).attr("text-anchor", "middle").text(((a = this.axisLabels) == null ? void 0 : a[1]) ?? "");
  }
}
function ie(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
const Ne = Symbol("implicit");
function gn() {
  var t = new _e(), e = [], n = [], r = Ne;
  function i(o) {
    let s = t.get(o);
    if (s === void 0) {
      if (r !== Ne)
        return r;
      t.set(o, s = e.push(o) - 1);
    }
    return n[s % n.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new _e();
    for (const s of o)
      t.has(s) || t.set(s, e.push(s) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (n = Array.from(o), i) : n.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return gn(e, n).unknown(r);
  }, ie.apply(i, arguments), i;
}
function mn() {
  var t = gn().unknown(void 0), e = t.domain, n = t.range, r = 0, i = 1, o, s, a = !1, u = 0, l = 0, c = 0.5;
  delete t.unknown;
  function h() {
    var f = e().length, d = i < r, p = d ? i : r, m = d ? r : i;
    o = (m - p) / Math.max(1, f - u + l * 2), a && (o = Math.floor(o)), p += (m - p - o * (f - u)) * c, s = o * (1 - u), a && (p = Math.round(p), s = Math.round(s));
    var v = dr(f).map(function(k) {
      return p + o * k;
    });
    return n(d ? v.reverse() : v);
  }
  return t.domain = function(f) {
    return arguments.length ? (e(f), h()) : e();
  }, t.range = function(f) {
    return arguments.length ? ([r, i] = f, r = +r, i = +i, h()) : [r, i];
  }, t.rangeRound = function(f) {
    return [r, i] = f, r = +r, i = +i, a = !0, h();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return o;
  }, t.round = function(f) {
    return arguments.length ? (a = !!f, h()) : a;
  }, t.padding = function(f) {
    return arguments.length ? (u = Math.min(1, l = +f), h()) : u;
  }, t.paddingInner = function(f) {
    return arguments.length ? (u = Math.min(1, f), h()) : u;
  }, t.paddingOuter = function(f) {
    return arguments.length ? (l = +f, h()) : l;
  }, t.align = function(f) {
    return arguments.length ? (c = Math.max(0, Math.min(1, f)), h()) : c;
  }, t.copy = function() {
    return mn(e(), [r, i]).round(a).paddingInner(u).paddingOuter(l).align(c);
  }, ie.apply(h(), arguments);
}
const se = (t) => () => t;
function Ts(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Os(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Rs(t) {
  return (t = +t) == 1 ? vn : function(e, n) {
    return n - e ? Os(e, n, t) : se(isNaN(e) ? n : e);
  };
}
function vn(t, e) {
  var n = e - t;
  return n ? Ts(t, n) : se(isNaN(t) ? e : t);
}
const St = function t(e) {
  var n = Rs(e);
  function r(i, o) {
    var s = n((i = ot(i)).r, (o = ot(o)).r), a = n(i.g, o.g), u = n(i.b, o.b), l = vn(i.opacity, o.opacity);
    return function(c) {
      return i.r = s(c), i.g = a(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Cs(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i)
      r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function Fs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ds(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), s;
  for (s = 0; s < r; ++s)
    i[s] = oe(t[s], e[s]);
  for (; s < n; ++s)
    o[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s)
      o[s] = i[s](a);
    return o;
  };
}
function Is(t, e) {
  var n = new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function R(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function zs(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = oe(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n)
      r[i] = n[i](o);
    return r;
  };
}
var Yt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Vt = new RegExp(Yt.source, "g");
function Hs(t) {
  return function() {
    return t;
  };
}
function Ps(t) {
  return function(e) {
    return t(e) + "";
  };
}
function yn(t, e) {
  var n = Yt.lastIndex = Vt.lastIndex = 0, r, i, o, s = -1, a = [], u = [];
  for (t = t + "", e = e + ""; (r = Yt.exec(t)) && (i = Vt.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, u.push({ i: s, x: R(r, i) })), n = Vt.lastIndex;
  return n < e.length && (o = e.slice(n), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? u[0] ? Ps(u[0].x) : Hs(e) : (e = u.length, function(l) {
    for (var c = 0, h; c < e; ++c)
      a[(h = u[c]).i] = h.x(l);
    return a.join("");
  });
}
function oe(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? se(e) : (n === "number" ? R : n === "string" ? (r = B(e)) ? (e = r, St) : yn : e instanceof B ? St : e instanceof Date ? Is : Fs(e) ? Cs : Array.isArray(e) ? Ds : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? zs : R)(t, e);
}
function Ls(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Se = 180 / Math.PI, Kt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function wn(t, e, n, r, i, o) {
  var s, a, u;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (u = t * n + e * r) && (n -= t * u, r -= e * u), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, u /= a), t * r < e * n && (t = -t, e = -e, u = -u, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * Se,
    skewX: Math.atan(u) * Se,
    scaleX: s,
    scaleY: a
  };
}
var gt;
function Vs(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Kt : wn(e.a, e.b, e.c, e.d, e.e, e.f);
}
function qs(t) {
  return t == null || (gt || (gt = document.createElementNS("http://www.w3.org/2000/svg", "g")), gt.setAttribute("transform", t), !(t = gt.transform.baseVal.consolidate())) ? Kt : (t = t.matrix, wn(t.a, t.b, t.c, t.d, t.e, t.f));
}
function _n(t, e, n, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, h, f, d, p) {
    if (l !== h || c !== f) {
      var m = d.push("translate(", null, e, null, n);
      p.push({ i: m - 4, x: R(l, h) }, { i: m - 2, x: R(c, f) });
    } else
      (h || f) && d.push("translate(" + h + e + f + n);
  }
  function s(l, c, h, f) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: R(l, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function a(l, c, h, f) {
    l !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: R(l, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function u(l, c, h, f, d, p) {
    if (l !== h || c !== f) {
      var m = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: m - 4, x: R(l, h) }, { i: m - 2, x: R(c, f) });
    } else
      (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(l, c) {
    var h = [], f = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, h, f), s(l.rotate, c.rotate, h, f), a(l.skewX, c.skewX, h, f), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, h, f), l = c = null, function(d) {
      for (var p = -1, m = f.length, v; ++p < m; )
        h[(v = f[p]).i] = v.x(d);
      return h.join("");
    };
  };
}
var Xs = _n(Vs, "px, ", "px)", "deg)"), Bs = _n(qs, ", ", ")", ")");
function Gs(t) {
  return function() {
    return t;
  };
}
function Ws(t) {
  return +t;
}
var $e = [0, 1];
function Y(t) {
  return t;
}
function Ut(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Gs(isNaN(e) ? NaN : 0.5);
}
function Ys(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Ks(t, e, n) {
  var r = t[0], i = t[1], o = e[0], s = e[1];
  return i < r ? (r = Ut(i, r), o = n(s, o)) : (r = Ut(r, i), o = n(o, s)), function(a) {
    return o(r(a));
  };
}
function Us(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), s = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < r; )
    i[s] = Ut(t[s], t[s + 1]), o[s] = n(e[s], e[s + 1]);
  return function(a) {
    var u = ir(t, a, 1, r) - 1;
    return o[u](i[u](a));
  };
}
function Zs(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Js() {
  var t = $e, e = $e, n = oe, r, i, o, s = Y, a, u, l;
  function c() {
    var f = Math.min(t.length, e.length);
    return s !== Y && (s = Ys(t[0], t[f - 1])), a = f > 2 ? Us : Ks, u = l = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (u || (u = a(t.map(r), e, n)))(r(s(f)));
  }
  return h.invert = function(f) {
    return s(i((l || (l = a(e, t.map(r), R)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Ws), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), c()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = Ls, c();
  }, h.clamp = function(f) {
    return arguments.length ? (s = f ? !0 : Y, c()) : s !== Y;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, c()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, d) {
    return r = f, i = d, c();
  };
}
function Qs() {
  return Js()(Y, Y);
}
function js(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function $t(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function J(t) {
  return t = $t(Math.abs(t)), t ? t[1] : NaN;
}
function to(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], s = 0, a = t[0], u = 0; i > 0 && a > 0 && (u + a + 1 > r && (a = Math.max(1, r - u)), o.push(n.substring(i -= a, i + a)), !((u += a + 1) > r)); )
      a = t[s = (s + 1) % t.length];
    return o.reverse().join(e);
  };
}
function eo(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var no = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Tt(t) {
  if (!(e = no.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new ae({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Tt.prototype = ae.prototype;
function ae(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ae.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ro(t) {
  t:
    for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
      switch (t[n]) {
        case ".":
          r = i = n;
          break;
        case "0":
          r === 0 && (r = n), i = n;
          break;
        default:
          if (!+t[n])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var xn;
function io(t, e) {
  var n = $t(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1], o = i - (xn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, s = r.length;
  return o === s ? r : o > s ? r + new Array(o - s + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + $t(t, Math.max(0, e + o - 1))[0];
}
function Te(t, e) {
  var n = $t(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Oe = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: js,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Te(t * 100, e),
  r: Te,
  s: io,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Re(t) {
  return t;
}
var Ce = Array.prototype.map, Fe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function so(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Re : to(Ce.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Re : eo(Ce.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(h) {
    h = Tt(h);
    var f = h.fill, d = h.align, p = h.sign, m = h.symbol, v = h.zero, k = h.width, A = h.comma, _ = h.precision, b = h.trim, y = h.type;
    y === "n" ? (A = !0, y = "g") : Oe[y] || (_ === void 0 && (_ = 12), b = !0, y = "g"), (v || f === "0" && d === "=") && (v = !0, f = "0", d = "=");
    var w = m === "$" ? n : m === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", $ = m === "$" ? r : /[%p]/.test(y) ? s : "", O = Oe[y], x = /[defgprs%]/.test(y);
    _ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
    function M(g) {
      var N = w, E = $, W, fe, ct;
      if (y === "c")
        E = O(g) + E, g = "";
      else {
        g = +g;
        var ft = g < 0 || 1 / g < 0;
        if (g = isNaN(g) ? u : O(Math.abs(g), _), b && (g = ro(g)), ft && +g == 0 && p !== "+" && (ft = !1), N = (ft ? p === "(" ? p : a : p === "-" || p === "(" ? "" : p) + N, E = (y === "s" ? Fe[8 + xn / 3] : "") + E + (ft && p === "(" ? ")" : ""), x) {
          for (W = -1, fe = g.length; ++W < fe; )
            if (ct = g.charCodeAt(W), 48 > ct || ct > 57) {
              E = (ct === 46 ? i + g.slice(W + 1) : g.slice(W)) + E, g = g.slice(0, W);
              break;
            }
        }
      }
      A && !v && (g = e(g, 1 / 0));
      var ht = N.length + g.length + E.length, z = ht < k ? new Array(k - ht + 1).join(f) : "";
      switch (A && v && (g = e(z + g, z.length ? k - E.length : 1 / 0), z = ""), d) {
        case "<":
          g = N + g + E + z;
          break;
        case "=":
          g = N + z + g + E;
          break;
        case "^":
          g = z.slice(0, ht = z.length >> 1) + N + g + E + z.slice(ht);
          break;
        default:
          g = z + N + g + E;
          break;
      }
      return o(g);
    }
    return M.toString = function() {
      return h + "";
    }, M;
  }
  function c(h, f) {
    var d = l((h = Tt(h), h.type = "f", h)), p = Math.max(-8, Math.min(8, Math.floor(J(f) / 3))) * 3, m = Math.pow(10, -p), v = Fe[8 + p / 3];
    return function(k) {
      return d(m * k) + v;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var mt, bn, Mn;
oo({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function oo(t) {
  return mt = so(t), bn = mt.format, Mn = mt.formatPrefix, mt;
}
function ao(t) {
  return Math.max(0, -J(Math.abs(t)));
}
function uo(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(J(e) / 3))) * 3 - J(Math.abs(t)));
}
function lo(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, J(e) - J(t)) + 1;
}
function co(t, e, n, r) {
  var i = hr(t, e, n), o;
  switch (r = Tt(r ?? ",f"), r.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = uo(i, s)) && (r.precision = o), Mn(r, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = lo(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = ao(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return bn(r);
}
function fo(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return fr(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return co(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, s = r[i], a = r[o], u, l, c = 10;
    for (a < s && (l = s, s = a, a = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = Xt(s, a, n), l === u)
        return r[i] = s, r[o] = a, e(r);
      if (l > 0)
        s = Math.floor(s / l) * l, a = Math.ceil(a / l) * l;
      else if (l < 0)
        s = Math.ceil(s * l) / l, a = Math.floor(a * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function An() {
  var t = Qs();
  return t.copy = function() {
    return Zs(t, An());
  }, ie.apply(t, arguments), fo(t);
}
const qt = {
  band: () => mn().padding(0.2),
  linear: () => An()
};
class ho {
  constructor({
    scaleType: e = "band",
    dataSet: n,
    dimensions: r
  }) {
    var i;
    this.setData = (o) => {
      if (o === void 0)
        throw new Error("No data to set!");
      return this.dataSet = o, this;
    }, this.render = () => {
      const { padding: o, height: s, innerWidth: a } = this.dimensions;
      if (this.dataSet === void 0)
        throw new Error("No data to render scale!");
      if (this.scaleType === void 0 || !["band", "linear"].includes(this.scaleType))
        throw new Error("Unknown chart type!");
      const u = {
        band: [this.dataSet.data.map((l) => l.label), [0, a]],
        linear: [
          [this.dataSet.minValue, this.dataSet.maxValue],
          [s - o.b, o.t]
        ]
      }[this.scaleType];
      this.axisScale.domain(u[0]), this.axisScale.range(u[1]);
    }, this.scaleType = e, this.axisScale = (i = qt[e]) == null ? void 0 : i.call(qt), this.dimensions = r, this.dataSet = n, this.dataSet !== void 0 && this.render();
  }
}
const De = (t, e = 0) => t.slice(0, e).reduce((n, { labelWidth: r = 0 }) => n + r, 0);
class po {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param {Object} d3Svg A d3 wrapped container element
   * @param {Array} values the config for the data to be displayed
   * @param {Integer} dimensions the chart dimensions
   */
  constructor({ d3Svg: e, values: n, dimensions: r }) {
    if (![e, n, r].every(V))
      throw new Error("Incorrect parameters provided to Key constructor.");
    this.d3Svg = e, this.values = [...n], this.dimensions = r, this.render();
  }
  /**
   * Render the key showing the labels for the color values
   *
   * @method render
   * @chainable
   */
  render() {
    const { innerWidth: e, height: n, padding: r } = this.dimensions;
    let i = 0;
    const o = e / 2 + r.l, s = n - 20;
    this.d3Svg.selectAll("g.pic-key-group").remove();
    const a = this.d3Svg.append("g").attr("class", "pic-key-group");
    a.selectAll("text.pic-key-label").data(this.values).enter().append("text").text(({ name: c }) => c).each((c, h, f) => {
      const d = f[h].getBoundingClientRect().width + 22;
      this.values[h].labelWidth = d, i += d - 2;
    }).attr("class", "pic-key-label").attr("x", (c, h) => De(this.values, h)).attr("y", 10).attr("width", 12).attr("height", 12).attr("font-family", "sans-serif").attr("font-size", "12px").attr("fill", "#222222"), a.selectAll("rect.pic-key").data(this.values).enter().append("rect").attr("class", "pic-key").attr("fill", ({ color: c }) => c).attr("x", (c, h) => De(this.values, h) - 16).attr("y", 0).attr("width", 12).attr("height", 12), i = o - i / 2, a.attr("transform", `translate(${i},${s})`);
  }
}
const go = (t) => +t;
function mo(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var vo = { value: () => {
} };
function En() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new yt(n);
}
function yt(t) {
  this._ = t;
}
function yo(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
yt.prototype = En.prototype = {
  constructor: yt,
  on: function(t, e) {
    var n = this._, r = yo(t + "", n), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((i = (t = r[o]).type) && (i = wo(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (i = (t = r[o]).type)
        n[i] = Ie(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = Ie(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new yt(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(e, n);
  }
};
function wo(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Ie(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = vo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Q = 0, et = 0, j = 0, kn = 1e3, Ot, nt, Rt = 0, G = 0, It = 0, at = typeof performance == "object" && performance.now ? performance : Date, Nn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ue() {
  return G || (Nn(_o), G = at.now() + It);
}
function _o() {
  G = 0;
}
function Ct() {
  this._call = this._time = this._next = null;
}
Ct.prototype = Sn.prototype = {
  constructor: Ct,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ue() : +n) + (e == null ? 0 : +e), !this._next && nt !== this && (nt ? nt._next = this : Ot = this, nt = this), this._call = t, this._time = n, Zt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Zt());
  }
};
function Sn(t, e, n) {
  var r = new Ct();
  return r.restart(t, e, n), r;
}
function xo() {
  ue(), ++Q;
  for (var t = Ot, e; t; )
    (e = G - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Q;
}
function ze() {
  G = (Rt = at.now()) + It, Q = et = 0;
  try {
    xo();
  } finally {
    Q = 0, Mo(), G = 0;
  }
}
function bo() {
  var t = at.now(), e = t - Rt;
  e > kn && (It -= e, Rt = t);
}
function Mo() {
  for (var t, e = Ot, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ot = n);
  nt = t, Zt(r);
}
function Zt(t) {
  if (!Q) {
    et && (et = clearTimeout(et));
    var e = t - G;
    e > 24 ? (t < 1 / 0 && (et = setTimeout(ze, t - at.now() - It)), j && (j = clearInterval(j))) : (j || (Rt = at.now(), j = setInterval(bo, kn)), Q = 1, Nn(ze));
  }
}
function He(t, e, n) {
  var r = new Ct();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Ao = En("start", "end", "cancel", "interrupt"), Eo = [], $n = 0, Pe = 1, Jt = 2, wt = 3, Le = 4, Qt = 5, _t = 6;
function zt(t, e, n, r, i, o) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  ko(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ao,
    tween: Eo,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: $n
  });
}
function le(t, e) {
  var n = F(t, e);
  if (n.state > $n)
    throw new Error("too late; already scheduled");
  return n;
}
function I(t, e) {
  var n = F(t, e);
  if (n.state > wt)
    throw new Error("too late; already running");
  return n;
}
function F(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function ko(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Sn(o, 0, n.time);
  function o(l) {
    n.state = Pe, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var c, h, f, d;
    if (n.state !== Pe)
      return u();
    for (c in r)
      if (d = r[c], d.name === n.name) {
        if (d.state === wt)
          return He(s);
        d.state === Le ? (d.state = _t, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < e && (d.state = _t, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (He(function() {
      n.state === wt && (n.state = Le, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = Jt, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Jt) {
      for (n.state = wt, i = new Array(f = n.tween.length), c = 0, h = -1; c < f; ++c)
        (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function a(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = Qt, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    n.state === Qt && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = _t, n.timer.stop(), delete r[e];
    for (var l in r)
      return;
    delete t.__transition;
  }
}
function No(t, e) {
  var n = t.__transition, r, i, o = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > Jt && r.state < Qt, r.state = _t, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    o && delete t.__transition;
  }
}
function So(t) {
  return this.each(function() {
    No(this, t);
  });
}
function $o(t, e) {
  var n, r;
  return function() {
    var i = I(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function To(t, e, n) {
  var r, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var o = I(this, t), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var a = { name: e, value: n }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === e) {
          i[u] = a;
          break;
        }
      u === l && i.push(a);
    }
    o.tween = i;
  };
}
function Oo(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = F(this.node(), n).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? $o : To)(n, t, e));
}
function ce(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = I(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return F(i, r).value[e];
  };
}
function Tn(t, e) {
  var n;
  return (typeof e == "number" ? R : e instanceof B ? St : (n = B(e)) ? (e = n, St) : yn)(t, e);
}
function Ro(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Co(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fo(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var s = this.getAttribute(t);
    return s === i ? null : s === r ? o : o = e(r = s, n);
  };
}
function Do(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === i ? null : s === r ? o : o = e(r = s, n);
  };
}
function Io(t, e, n) {
  var r, i, o;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), u = a + "", s === u ? null : s === r && u === i ? o : (i = u, o = e(r = s, a)));
  };
}
function zo(t, e, n) {
  var r, i, o;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), u = a + "", s === u ? null : s === r && u === i ? o : (i = u, o = e(r = s, a)));
  };
}
function Ho(t, e) {
  var n = Ft(t), r = n === "transform" ? Bs : Tn;
  return this.attrTween(t, typeof e == "function" ? (n.local ? zo : Io)(n, r, ce(this, "attr." + t, e)) : e == null ? (n.local ? Co : Ro)(n) : (n.local ? Do : Fo)(n, r, e));
}
function Po(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Lo(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Vo(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Lo(t, o)), n;
  }
  return i._value = e, i;
}
function qo(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Po(t, o)), n;
  }
  return i._value = e, i;
}
function Xo(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var r = Ft(t);
  return this.tween(n, (r.local ? Vo : qo)(r, e));
}
function Bo(t, e) {
  return function() {
    le(this, t).delay = +e.apply(this, arguments);
  };
}
function Go(t, e) {
  return e = +e, function() {
    le(this, t).delay = e;
  };
}
function Wo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Bo : Go)(e, t)) : F(this.node(), e).delay;
}
function Yo(t, e) {
  return function() {
    I(this, t).duration = +e.apply(this, arguments);
  };
}
function Ko(t, e) {
  return e = +e, function() {
    I(this, t).duration = e;
  };
}
function Uo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Yo : Ko)(e, t)) : F(this.node(), e).duration;
}
function Zo(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    I(this, t).ease = e;
  };
}
function Jo(t) {
  var e = this._id;
  return arguments.length ? this.each(Zo(e, t)) : F(this.node(), e).ease;
}
function Qo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    I(this, t).ease = n;
  };
}
function jo(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Qo(this._id, t));
}
function ta(t) {
  typeof t != "function" && (t = Ze(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], s = o.length, a = r[i] = [], u, l = 0; l < s; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && a.push(u);
  return new L(r, this._parents, this._name, this._id);
}
function ea(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
    for (var u = e[a], l = n[a], c = u.length, h = s[a] = new Array(c), f, d = 0; d < c; ++d)
      (f = u[d] || l[d]) && (h[d] = f);
  for (; a < r; ++a)
    s[a] = e[a];
  return new L(s, this._parents, this._name, this._id);
}
function na(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ra(t, e, n) {
  var r, i, o = na(e) ? le : I;
  return function() {
    var s = o(this, t), a = s.on;
    a !== r && (i = (r = a).copy()).on(e, n), s.on = i;
  };
}
function ia(t, e) {
  var n = this._id;
  return arguments.length < 2 ? F(this.node(), n).on.on(t) : this.each(ra(n, t, e));
}
function sa(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function oa() {
  return this.on("end.remove", sa(this._id));
}
function aa(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = te(t));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var a = r[s], u = a.length, l = o[s] = new Array(u), c, h, f = 0; f < u; ++f)
      (c = a[f]) && (h = t.call(c, c.__data__, f, a)) && ("__data__" in c && (h.__data__ = c.__data__), l[f] = h, zt(l[f], e, n, f, l, F(c, n)));
  return new L(o, this._parents, e, n);
}
function ua(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ue(t));
  for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
    for (var u = r[a], l = u.length, c, h = 0; h < l; ++h)
      if (c = u[h]) {
        for (var f = t.call(c, c.__data__, h, u), d, p = F(c, n), m = 0, v = f.length; m < v; ++m)
          (d = f[m]) && zt(d, e, n, m, f, p);
        o.push(f), s.push(c);
      }
  return new L(o, s, e, n);
}
var la = lt.prototype.constructor;
function ca() {
  return new la(this._groups, this._parents);
}
function fa(t, e) {
  var n, r, i;
  return function() {
    var o = U(this, t), s = (this.style.removeProperty(t), U(this, t));
    return o === s ? null : o === n && s === r ? i : i = e(n = o, r = s);
  };
}
function On(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ha(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var s = U(this, t);
    return s === i ? null : s === r ? o : o = e(r = s, n);
  };
}
function da(t, e, n) {
  var r, i, o;
  return function() {
    var s = U(this, t), a = n(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(t), U(this, t))), s === u ? null : s === r && u === i ? o : (i = u, o = e(r = s, a));
  };
}
function pa(t, e) {
  var n, r, i, o = "style." + e, s = "end." + o, a;
  return function() {
    var u = I(this, t), l = u.on, c = u.value[o] == null ? a || (a = On(e)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(s, i = c), u.on = r;
  };
}
function ga(t, e, n) {
  var r = (t += "") == "transform" ? Xs : Tn;
  return e == null ? this.styleTween(t, fa(t, r)).on("end.style." + t, On(t)) : typeof e == "function" ? this.styleTween(t, da(t, r, ce(this, "style." + t, e))).each(pa(this._id, t)) : this.styleTween(t, ha(t, r, e), n).on("end.style." + t, null);
}
function ma(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function va(t, e, n) {
  var r, i;
  function o() {
    var s = e.apply(this, arguments);
    return s !== i && (r = (i = s) && ma(t, s, n)), r;
  }
  return o._value = e, o;
}
function ya(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, va(t, e, n ?? ""));
}
function wa(t) {
  return function() {
    this.textContent = t;
  };
}
function _a(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function xa(t) {
  return this.tween("text", typeof t == "function" ? _a(ce(this, "text", t)) : wa(t == null ? "" : t + ""));
}
function ba(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Ma(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && ba(i)), e;
  }
  return r._value = t, r;
}
function Aa(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Ma(t));
}
function Ea() {
  for (var t = this._name, e = this._id, n = Rn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, u, l = 0; l < a; ++l)
      if (u = s[l]) {
        var c = F(u, e);
        zt(u, t, n, l, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new L(r, this._parents, t, n);
}
function ka() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, s) {
    var a = { value: s }, u = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var l = I(this, r), c = l.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(u)), l.on = e;
    }), i === 0 && o();
  });
}
var Na = 0;
function L(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Rn() {
  return ++Na;
}
var H = lt.prototype;
L.prototype = {
  constructor: L,
  select: aa,
  selectAll: ua,
  selectChild: H.selectChild,
  selectChildren: H.selectChildren,
  filter: ta,
  merge: ea,
  selection: ca,
  transition: Ea,
  call: H.call,
  nodes: H.nodes,
  node: H.node,
  size: H.size,
  empty: H.empty,
  each: H.each,
  on: ia,
  attr: Ho,
  attrTween: Xo,
  style: ga,
  styleTween: ya,
  text: xa,
  textTween: Aa,
  remove: oa,
  tween: Oo,
  delay: Wo,
  duration: Uo,
  ease: Jo,
  easeVarying: jo,
  end: ka,
  [Symbol.iterator]: H[Symbol.iterator]
};
var Sa = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: mo
};
function $a(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Ta(t) {
  var e, n;
  t instanceof L ? (e = t._id, t = t._name) : (e = Rn(), (n = Sa).time = ue(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && zt(u, t, e, l, s, n || $a(u, e));
  return new L(r, this._parents, t, e);
}
lt.prototype.interrupt = So;
lt.prototype.transition = Ta;
class Oa {
  /**
   * Optional callback for clicking on the chart
   *
   * @property config
   */
  // clickCallback: (e: MouseEvent, d: TableItem) => void
  /**
   * Constructor used to set chart type
   *
   * @method constructor
   */
  constructor({
    d3Svg: e,
    config: n,
    dataSet: r,
    scales: i,
    tooltip: o,
    dimensions: s,
    transitionTime: a
  }) {
    if (this.bars = [], this.render = ({
      reset: u = !1,
      transition: l = !1
    } = {}) => {
      if (this.scales.x === void 0 || this.scales.y === void 0)
        return;
      const { data: c, minValue: h, maxValue: f } = this.dataSet, { values: d } = this.config, { innerHeight: p, padding: m } = this.dimensions, v = this.scales.x.axisScale, k = this.scales.y.axisScale, A = v.bandwidth() / d.length, _ = l ? this.transitionTime : 0;
      u && (this.bars.forEach((b, y) => {
        b = this.chartGroup.selectAll(`rect.pic-bars-${y}`).data([]), b.exit().remove(), b = void 0;
      }), this.bars = []), d.forEach(({ rgbColor: b, name: y }, w) => {
        const $ = A * w;
        this.bars[w] === void 0 && (this.bars[w] = this.chartGroup.selectAll(`rect.pic-bars-${w}`).data(c), this.bars[w].enter().append("rect").on("mousemove", (x, M) => {
          this.tooltip.ping([M.label, y, String(M.values[w])], x);
        }).on("mouseover", ({ target: x }) => {
          Et(x).attr(
            "fill",
            Zn(b).formatHex()
          );
        }).on("mouseout", ({ target: x }) => {
          this.tooltip.hide(), Et(x).attr(
            "fill",
            b.formatHex()
          );
        }).attr("class", `pic-bars pic-bars-${w}`).attr("fill", b.formatHex()).attr("y", p + m.t).attr("height", 0));
        let O = this.chartGroup.selectAll(`rect.pic-bars-${w}`).data(c).attr("x", (x) => Number(v(x.label)) + $).attr("width", A);
        typeof O.transition == "function" && (O = O.transition().ease(go).duration(_)), O.attr("y", (x) => {
          let M = x.values[w];
          return M = M < 0 ? Math.abs(M) : 0, k(x.values[w] + M);
        }).attr("height", (x) => {
          const M = h < 0 ? Math.abs(f) : 0, g = Math.abs(x.values[w]) - M;
          return p - k(g) + m.t;
        });
      });
    }, n === void 0 || r === void 0 || i === void 0)
      throw new Error("Table is incorrectly initialised.");
    this.config = n, this.dataSet = r, this.scales = i, this.tooltip = o, this.dimensions = s, this.transitionTime = a, this.chartGroup = e.append("g").attr("class", "pic-bars-group").attr("transform", `translate(${s.padding.l}, 0)`), this.render({ transition: !0 });
  }
}
export {
  $s as Axis,
  Oa as Bars,
  Pa as Chart,
  po as Key,
  ho as Scale,
  ws as Tooltip,
  Jn as addColorsToConfig,
  hn as addStyleToDom,
  za as addTheme,
  dn as box,
  Kn as colorFilter,
  Wn as compress,
  Be as createNode,
  re as css,
  Zn as darkerColor,
  Ia as dispatchEvent,
  Da as emptyTable,
  Ge as flatten,
  Ha as getTheme,
  rt as newArray,
  ms as publishTheme,
  Un as random256,
  We as randomColor,
  Fa as randomData,
  P as randomNumber,
  Ra as randomPalette,
  Yn as sanitise,
  Ca as sliceSampleData,
  Xe as throttle,
  De as totalMargin,
  Qn as transformDataKeys,
  Gn as truncateString,
  V as truthy
};
