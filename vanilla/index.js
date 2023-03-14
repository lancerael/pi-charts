import { rgb as V } from "d3-color";
import { min as G, max as L } from "d3-array";
import { select as S } from "d3-selection";
import { axisBottom as et, axisLeft as it } from "d3-axis";
import { scaleBand as st, scaleLinear as rt } from "d3-scale";
import { easeLinear as nt } from "d3-ease";
import "d3-transition";
const ot = (e, t) => e.length > t ? `${e.slice(0, t)}[...]` : e, y = (e = 0, t = 1e4, i) => {
  let s = Math.floor(Math.random() * (e - t - 1)) + t + 1;
  for (; s === i; )
    s = y(e, t);
  return s;
}, E = (e, t) => new Array(e).fill(null).map(t), w = (e = void 0) => e == null ? !1 : Boolean(e), F = (e, t = 15) => {
  let i = !1;
  return (...s) => {
    let r;
    return i || (r = e.apply(void 0, s), i = !0, setTimeout(() => {
      i = !1;
    }, t)), r;
  };
}, B = (e, t = "", i) => {
  const s = document.createElement(e);
  return s.className = t, i?.appendChild(s), s;
}, j = (e) => e.replace(/( {2}|\r\n|\n|\r)/g, ""), at = (e) => j(e.replace(/ /g, "")), ht = (e) => e.replace(/[^0-9a-z ]/gi, ""), lt = ([e, t, i], s = "light", r = 170) => {
  const o = (e * 299 + t * 587 + i * 114) / 1e3;
  return {
    light: o < r,
    dark: o > r
  }[s];
}, ct = () => y(0, 255), I = (e = "light", t = 170) => {
  const i = () => E(3, ct);
  let s;
  for (; s === void 0 || !lt(s, e, t); )
    s = i();
  return V(...s);
}, ee = (e = 10) => E(e, () => I()), dt = (e) => e.darker(0.5), ut = (e, t = !0) => e.map(
  ({
    color: i = I().formatHex(),
    ...s
  }) => ({
    color: i,
    rgbColor: t && V(i),
    ...s
  })
), ie = (e, t = 3, i = 50) => {
  if (e.length < t)
    throw new Error("Data set is too short to sample.");
  if (e.length === t)
    return e;
  const s = i > e.length, r = e.length - t, o = y(
    0,
    s ? r : e.length - i
  ), n = o + t, a = y(
    n,
    n + (s ? r : i - t)
  );
  return e.slice(o, a);
}, se = (e = y(3, 10), t = y(1, 4), i = y(1, 50), s = y(i, 200)) => ({
  label: "Random Chart Data",
  config: {
    axisLabels: ["Y Axis", "X Axis"],
    trim: !0,
    values: E(
      t,
      (r, o) => ({
        name: `Type ${Number(o) + 1}`
      })
    )
  },
  data: E(
    e,
    (r, o) => ({
      label: `Item ${Number(o) + 1}`,
      values: E(t, () => y(i, s))
    })
  )
}), re = () => ({
  label: "",
  config: {
    axisLabels: ["", ""],
    values: [],
    trim: !0
  },
  data: []
}), ft = (e, t) => e === void 0 ? t : t.map((i) => (i.values = e.values.map(({ key: s }, r) => {
  if (typeof s != "string" && Array.isArray(i.values))
    return i.values[r];
  const o = parseInt(i[s ?? ""]);
  return isNaN(o) ? 0 : o;
}), Array.isArray(e.axisKeys) && typeof i.label != "string" && (i.label = i[e.axisKeys[0]], typeof i.label != "string" && (i.label = "AXIS KEY MISMATCH")), i)), ne = (e, t) => {
  const i = document.createEvent("MouseEvents");
  return i.initEvent(t, !0, !0), e.dispatchEvent(i), i;
};
var K = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, i) {
    var s = -1;
    return t.some(function(r, o) {
      return r[0] === i ? (s = o, !0) : !1;
    }), s;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(i) {
        var s = e(this.__entries__, i), r = this.__entries__[s];
        return r && r[1];
      }, t.prototype.set = function(i, s) {
        var r = e(this.__entries__, i);
        ~r ? this.__entries__[r][1] = s : this.__entries__.push([i, s]);
      }, t.prototype.delete = function(i) {
        var s = this.__entries__, r = e(s, i);
        ~r && s.splice(r, 1);
      }, t.prototype.has = function(i) {
        return !!~e(this.__entries__, i);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(i, s) {
        s === void 0 && (s = null);
        for (var r = 0, o = this.__entries__; r < o.length; r++) {
          var n = o[r];
          i.call(s, n[1], n[0]);
        }
      }, t;
    }()
  );
}(), C = typeof window < "u" && typeof document < "u" && window.document === document, T = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), pt = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(T) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), vt = 2;
function mt(e, t) {
  var i = !1, s = !1, r = 0;
  function o() {
    i && (i = !1, e()), s && a();
  }
  function n() {
    pt(o);
  }
  function a() {
    var h = Date.now();
    if (i) {
      if (h - r < vt)
        return;
      s = !0;
    } else
      i = !0, s = !1, setTimeout(n, t);
    r = h;
  }
  return a;
}
var bt = 20, gt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], yt = typeof MutationObserver < "u", wt = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = mt(this.refresh.bind(this), bt);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var i = this.observers_, s = i.indexOf(t);
      ~s && i.splice(s, 1), !i.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(i) {
        return i.gatherActive(), i.hasActive();
      });
      return t.forEach(function(i) {
        return i.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !C || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), yt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !C || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var i = t.propertyName, s = i === void 0 ? "" : i, r = gt.some(function(o) {
        return !!~s.indexOf(o);
      });
      r && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), P = function(e, t) {
  for (var i = 0, s = Object.keys(t); i < s.length; i++) {
    var r = s[i];
    Object.defineProperty(e, r, {
      value: t[r],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, _ = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || T;
}, Y = R(0, 0, 0, 0);
function M(e) {
  return parseFloat(e) || 0;
}
function H(e) {
  for (var t = [], i = 1; i < arguments.length; i++)
    t[i - 1] = arguments[i];
  return t.reduce(function(s, r) {
    var o = e["border-" + r + "-width"];
    return s + M(o);
  }, 0);
}
function xt(e) {
  for (var t = ["top", "right", "bottom", "left"], i = {}, s = 0, r = t; s < r.length; s++) {
    var o = r[s], n = e["padding-" + o];
    i[o] = M(n);
  }
  return i;
}
function _t(e) {
  var t = e.getBBox();
  return R(0, 0, t.width, t.height);
}
function Et(e) {
  var t = e.clientWidth, i = e.clientHeight;
  if (!t && !i)
    return Y;
  var s = _(e).getComputedStyle(e), r = xt(s), o = r.left + r.right, n = r.top + r.bottom, a = M(s.width), h = M(s.height);
  if (s.boxSizing === "border-box" && (Math.round(a + o) !== t && (a -= H(s, "left", "right") + o), Math.round(h + n) !== i && (h -= H(s, "top", "bottom") + n)), !At(e)) {
    var u = Math.round(a + o) - t, l = Math.round(h + n) - i;
    Math.abs(u) !== 1 && (a -= u), Math.abs(l) !== 1 && (h -= l);
  }
  return R(r.left, r.top, a, h);
}
var Ot = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof _(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof _(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function At(e) {
  return e === _(e).document.documentElement;
}
function St(e) {
  return C ? Ot(e) ? _t(e) : Et(e) : Y;
}
function Tt(e) {
  var t = e.x, i = e.y, s = e.width, r = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, n = Object.create(o.prototype);
  return P(n, {
    x: t,
    y: i,
    width: s,
    height: r,
    top: i,
    right: t + s,
    bottom: r + i,
    left: t
  }), n;
}
function R(e, t, i, s) {
  return { x: e, y: t, width: i, height: s };
}
var Mt = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = R(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = St(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Rt = (
  /** @class */
  function() {
    function e(t, i) {
      var s = Tt(i);
      P(this, { target: t, contentRect: s });
    }
    return e;
  }()
), $t = (
  /** @class */
  function() {
    function e(t, i, s) {
      if (this.activeObservations_ = [], this.observations_ = new K(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = i, this.callbackCtx_ = s;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof _(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var i = this.observations_;
        i.has(t) || (i.set(t, new Mt(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof _(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var i = this.observations_;
        i.has(t) && (i.delete(t), i.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(i) {
        i.isActive() && t.activeObservations_.push(i);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, i = this.activeObservations_.map(function(s) {
          return new Rt(s.target, s.broadcastRect());
        });
        this.callback_.call(t, i, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), X = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new K(), q = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var i = wt.getInstance(), s = new $t(t, i, this);
      X.set(this, s);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  q.prototype[e] = function() {
    var t;
    return (t = X.get(this))[e].apply(t, arguments);
  };
});
var Ct = function() {
  return typeof T.ResizeObserver < "u" ? T.ResizeObserver : q;
}();
const Dt = "#A8D4FF", kt = "#000E1A", zt = {
  text: Dt,
  background: kt
}, Wt = "#003A73", Gt = "#F0F8FF", Lt = {
  text: Wt,
  background: Gt
}, D = { dark: zt, light: Lt }, U = (e, t, i) => {
  const s = (o) => ht(at(o));
  let r = document.querySelector(`[data-selector=${e}]`);
  r === null && (r = B("style", "", document.head), r.setAttribute("data-selector", e)), s(r.innerHTML).match(s(t)) === null && (r.innerHTML = j(
    `${w(i) ? "" : r.innerHTML} ${t}`
  ));
}, oe = (e, t) => D[e] = t, ae = (e) => D[e], Ht = (e) => {
  let t = Object.entries(D[e]).map(([i, s]) => `--${i}: ${s};`).join("");
  return t = `:root { ${t} }`, U("pic-variables", t, !0), t;
}, k = (e, ...t) => {
  const i = e.map((s, r) => `${s}${t[r] ?? ""}`).join("");
  return U("pic-styles", i), i;
}, J = (
  /* css */
  `
  border-radius: 5px;
  box-shadow: 3px 3px 6px -4px rgba(0, 0, 0, 0.45);
  color: var(--text);
  border: 1px solid var(--text);
  background-color: var(--background);
`
), Nt = () => {
  k`
    .pic-svg {
      ${J}
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
class he {
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
    label: t,
    container: i,
    config: s,
    data: r,
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
    }, this.initialWidth = 0, this.configs = /* @__PURE__ */ new Map(), this.dataSets = /* @__PURE__ */ new Map(), this.scales = /* @__PURE__ */ new Map(), this.axes = /* @__PURE__ */ new Map(), this.keys = /* @__PURE__ */ new Map(), this.visuals = /* @__PURE__ */ new Map(), this.setContainer = (n) => {
      if (n !== null && w(n?.nodeName))
        return n;
      throw new Error("No valid DOM element or selector provided for chart.");
    }, this.setConfig = (n, a = "default") => {
      if (!Array.isArray(n?.values))
        throw new Error("No valid configuration provided for chart.");
      return n.values = ut(n.values), this.configs.set(a, n), this.draw(), this;
    }, this.setData = (n, a = "default", h = "default", u = !0) => {
      const l = this.configs.get(h);
      if (!Array.isArray(n))
        throw new Error("No valid data provided for chart.");
      const d = Array.isArray(l?.values) ? ft(l, n) : n;
      let c = u ? Number(G(d, (b) => G(b.values))) : 0, f = Number(L(d, (b) => L(b.values)));
      const m = Math.ceil(f / 15);
      if (u) {
        const b = c > m ? c - m : 0;
        c = c > 0 ? b : c, c = c < 0 ? c - m : c, f += m;
      }
      return this.dataSets.set(a, { data: d, minValue: c, maxValue: f }), this.draw(), this;
    }, this.addScale = (n = { x: "band", y: "linear" }, a = "default", h = "default") => {
      if (this.dataSets.get(h) === void 0)
        throw new Error("No valid config provided for scale.");
      return this.scales.set(
        a,
        Object.entries(n).reduce(
          (l, [d, c]) => ({
            ...l,
            [d]: new Kt({
              scaleType: c,
              dataSet: this.dataSets.get(h),
              dimensions: this.dimensions
            })
          }),
          {}
        )
      ), this.draw(), this;
    }, this.addAxis = (n = "default", a = "default", h = "default") => {
      const u = this.scales.get(a);
      if (u === void 0)
        throw new Error("No valid config provided for axis.");
      return this.axes.set(
        n,
        new jt({
          d3Svg: this.d3Svg,
          tooltip: this.tooltip,
          dimensions: this.dimensions,
          truncate: 10,
          axisLabels: this.configs.get(h)?.axisLabels ?? ["", ""],
          scales: u
        })
      ), this.draw(), this;
    }, this.addKey = (n = "default", a = "default") => {
      const h = this.configs.get(a);
      if (h === void 0)
        throw new Error("No valid config provided for key.");
      return this.keys.set(
        n,
        new Pt({
          d3Svg: this.d3Svg,
          values: h?.values ?? [],
          dimensions: this.dimensions
        })
      ), this.draw(), this;
    }, this.addVisual = (n = "default", a = "default", h = "default", u = "default", l = "bar", d = 1e3) => {
      const c = this.configs.get(a), f = this.dataSets.get(h), m = this.scales.get(u);
      if ([c, f, m].includes(void 0))
        throw new Error("No valid config provided for visual.");
      const O = {
        d3Svg: this.d3Svg,
        config: c,
        dataSet: f,
        scales: m,
        transitionTime: d,
        tooltip: this.tooltip,
        dimensions: this.dimensions
      };
      switch (l) {
        default:
          setTimeout(() => this.visuals.set(n, new Yt(O)));
      }
      return setTimeout(this.draw, d), this;
    }, this.deleteMapItem = (n, a) => {
      if (this[n]?.get(a) === void 0)
        throw new Error(
          `Failed attempting to delete "${a}" from "this.${n}".`
        );
      return this[n].delete(a), this.draw(), this;
    }, this.addDefaults = () => this.addScale().addAxis().addKey().addVisual(), this.updateDimensions = () => {
      const { left: n, width: a, top: h, height: u } = this.container.getBoundingClientRect(), { l, r: d, t: c, b: f } = this.padding;
      this.dimensions.left = n, this.dimensions.width = a, this.dimensions.top = h, this.dimensions.height = u, this.dimensions.innerWidth = a - l - d, this.dimensions.innerHeight = u - c - f, this.dimensions.resizeOffset = a - this.initialWidth, this.dimensions.padding = this.padding;
    }, this.renderChart = () => {
      if (this.title !== void 0 && w(this.label))
        this.title.text(this.label);
      else
        throw new Error("Unable to render the chart.");
    }, this.draw = () => {
      this.updateDimensions(), this.renderChart(), this.scales.forEach(
        (n) => Object.values(n).forEach((a) => a.render())
      ), this.axes.forEach((n) => n.render()), this.keys.forEach((n) => n.render()), this.visuals.forEach((n) => n.render({ reset: !0 }));
    }, this.redraw = F(this.draw), this.resizeWatcher = new Ct(this.redraw), this.label = t, this.container = this.setContainer(
      typeof i == "string" ? document.querySelector(i) : i
    ), this.title = S(this.container).append("div").attr("class", "pic-title"), this.d3Svg = S(this.container).append("svg").attr("class", "pic-svg").attr("width", "100%").attr("height", "100%"), this.resizeWatcher.observe(this.container), this.tooltip = new Ft(this.container), this.draw(), this.initialWidth = this.dimensions.width, s !== void 0 && this.setConfig(s), r !== void 0 && this.setData(r), Ht(o), Nt();
  }
}
const Vt = () => {
  k`
    .pic-tooltip {
      transition: opacity 0.5s;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      padding: 8px;
      ${J}
    }
  `;
};
class Ft {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param container DOM object
   * @throws {Error} invalid DOM element
   */
  constructor(t) {
    if (this.ping = (i, s) => {
      const r = typeof i == "string" ? i : `<strong>${i[0]}</strong><br>${i[1]}: <em>${i[2]}</em>`;
      this.tooltip.innerHTML = r, this.tooltip.style.visibility = "visible", this.tooltip.style.opacity = "0.9", this.move(s), this.cleanup(), this.showTimeout = setTimeout(() => {
        this.hide();
      }, 5e3);
    }, this.move = F((i) => {
      const { left: r, width: o, top: n, height: a } = this.container.getBoundingClientRect(), { width: h, height: u } = this.tooltip.getBoundingClientRect(), { clientX: l, clientY: d } = i, c = o + r - l < h + 10, f = a + n - d < u + 10;
      this.tooltip.style.left = `${l - r + (c ? -h - 10 : 10)}px`, this.tooltip.style.top = `${d - n + (f ? -u - 10 : 10)}px`;
    }), this.hide = () => {
      this.cleanup(), this.tooltip.style.opacity = "0", this.hideTimeout = setTimeout(() => {
        this.tooltip.style.visibility = "hidden";
      }, 500);
    }, this.cleanup = () => {
      this.showTimeout !== void 0 && clearTimeout(this.showTimeout), this.hideTimeout !== void 0 && clearTimeout(this.hideTimeout);
    }, !w(t.nodeName))
      throw new Error("The tooltip has no valid container element.");
    this.container = t, this.tooltip = B("div", "pic-tooltip", t), Vt();
  }
}
const Bt = () => {
  k`
    .pic-axis {
      font-size: 0.8em;
    }

    .pic-line {
      opacity: 0.2;
    }
  `;
};
class jt {
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
    d3Svg: t,
    tooltip: i,
    dimensions: s,
    truncate: r = 2,
    axisLabels: o,
    scales: n
  }) {
    if (!w(t))
      throw new Error("No SVG provided to Axis constructor.");
    this.dimensions = s, this.d3Svg = t, this.tooltip = i, this.truncate = r, this.axisLabels = o ?? ["", ""], this.scales = n, this.axisGroupX = t.append("g").attr("class", "pic-axis pic-axis-x"), this.axisGroupY = t.append("g").attr("class", "pic-axis pic-axis-y"), this.render(), Bt();
  }
  /**
   * Master render to call all rendering methods
   *
   * @method render
   */
  render(t) {
    t !== void 0 && (this.dimensions = t), this.dimensions !== void 0 && (this.renderAxisX(), this.renderAxisY(), this.renderLabels());
  }
  /**
   * Render the x axis
   *
   * @method renderAxisX
   */
  renderAxisX() {
    const { height: t, padding: i } = this.dimensions;
    this.scales.x !== void 0 && this.axisGroupX.call(et(this.scales.x.axisScale)).attr("transform", `translate(${i.l},${t - i.b})`).selectAll("text").attr("x", -5).attr("y", 6).attr("transform", "rotate(310)").attr("class", "pic-axis-label pic-axis-label-x").text((s) => ot(s, this.truncate)).style("text-anchor", "end").on("mousemove", (s, r) => {
      r.length > this.truncate && this.tooltip.ping(`<strong>${r}</strong>`, s);
    }).on("mouseout", this.tooltip.hide);
  }
  /**
   * Render the y axis
   *
   * @method renderAxisY
   */
  renderAxisY() {
    const { innerWidth: t, padding: i } = this.dimensions;
    this.scales.y !== void 0 && this.axisGroupY.call(it(this.scales.y.axisScale)).attr("transform", `translate(${i.l},0)`).selectAll(".pic-axis-y .tick line").attr("class", "pic-line").attr("x2", () => t);
  }
  /**
   * Render the labels
   *
   * @method renderLabels
   */
  renderLabels() {
    const { height: t, width: i, padding: s } = this.dimensions;
    this.d3Svg.selectAll("text.pic-label").remove(), w(this.axisLabels?.[0]) && this.d3Svg.append("text").attr("class", "pic-label pic-label-x").attr("x", t / -2 + s.b / 2).attr("y", 20).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text(this.axisLabels?.[0] ?? ""), w(this.axisLabels?.[1]) && this.d3Svg.append("text").attr("class", "pic-label pic-label-y").attr("x", (i + s.l + s.r) / 2).attr("y", t - s.b / 3).attr("text-anchor", "middle").text(this.axisLabels?.[1] ?? "");
  }
}
const It = {
  band: () => st().padding(0.2),
  linear: () => rt()
};
class Kt {
  constructor({
    scaleType: t = "band",
    dataSet: i,
    dimensions: s
  }) {
    this.setData = (r) => {
      if (r === void 0)
        throw new Error("No data to set!");
      return this.dataSet = r, this;
    }, this.render = () => {
      const { padding: r, height: o, innerWidth: n } = this.dimensions;
      if (this.dataSet === void 0)
        throw new Error("No data to render scale!");
      if (this.scaleType === void 0 || !["band", "linear"].includes(this.scaleType))
        throw new Error("Unknown chart type!");
      const a = {
        band: [this.dataSet.data.map((h) => h.label), [0, n]],
        linear: [
          [this.dataSet.minValue, this.dataSet.maxValue],
          [o - r.b, r.t]
        ]
      }[this.scaleType];
      this.axisScale.domain(a[0]), this.axisScale.range(a[1]);
    }, this.scaleType = t, this.axisScale = It[t]?.(), this.dimensions = s, this.dataSet = i, this.dataSet !== void 0 && this.render();
  }
}
const N = (e, t = 0) => e.slice(0, t).reduce((i, { labelWidth: s = 0 }) => i + s, 0);
class Pt {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param {Object} d3Svg A d3 wrapped container element
   * @param {Array} values the config for the data to be displayed
   * @param {Integer} dimensions the chart dimensions
   */
  constructor({ d3Svg: t, values: i, dimensions: s }) {
    if (![t, i, s].every(w))
      throw new Error("Incorrect parameters provided to Key constructor.");
    this.d3Svg = t, this.values = [...i], this.dimensions = s, this.render();
  }
  /**
   * Render the key showing the labels for the color values
   *
   * @method render
   * @chainable
   */
  render() {
    const { innerWidth: t, height: i, padding: s } = this.dimensions;
    let r = 0;
    const o = t / 2 + s.l, n = i - 20;
    this.d3Svg.selectAll("g.pic-key-group").remove();
    const a = this.d3Svg.append("g").attr("class", "pic-key-group");
    a.selectAll("text.pic-key-label").data(this.values).enter().append("text").text(({ name: l }) => l).each((l, d, c) => {
      const f = c[d].getBoundingClientRect().width + 22;
      this.values[d].labelWidth = f, r += f - 2;
    }).attr("class", "pic-key-label").attr("x", (l, d) => N(this.values, d)).attr("y", 10).attr("width", 12).attr("height", 12).attr("font-family", "sans-serif").attr("font-size", "12px").attr("fill", "#222222"), a.selectAll("rect.pic-key").data(this.values).enter().append("rect").attr("class", "pic-key").attr("fill", ({ color: l }) => l).attr("x", (l, d) => N(this.values, d) - 16).attr("y", 0).attr("width", 12).attr("height", 12), r = o - r / 2, a.attr("transform", `translate(${r},${n})`);
  }
}
class Yt {
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
    d3Svg: t,
    config: i,
    dataSet: s,
    scales: r,
    tooltip: o,
    dimensions: n,
    transitionTime: a
  }) {
    if (this.bars = [], this.render = ({
      reset: h = !1,
      transition: u = !1
    } = {}) => {
      if (this.scales.x === void 0 || this.scales.y === void 0)
        return;
      const { data: l, minValue: d, maxValue: c } = this.dataSet, { values: f } = this.config, { innerHeight: m, padding: b } = this.dimensions, O = this.scales.x.axisScale, z = this.scales.y.axisScale, W = O.bandwidth() / f.length, Q = u ? this.transitionTime : 0;
      h && (this.bars.forEach((x, $) => {
        x = this.chartGroup.selectAll(`rect.pic-bars-${$}`).data([]), x.exit().remove(), x = void 0;
      }), this.bars = []), f.forEach(({ rgbColor: x, name: $ }, v) => {
        const Z = W * v;
        this.bars[v] === void 0 && (this.bars[v] = this.chartGroup.selectAll(`rect.pic-bars-${v}`).data(l), this.bars[v].enter().append("rect").on("mousemove", (p, g) => {
          this.tooltip.ping([g.label, $, String(g.values[v])], p);
        }).on("mouseover", ({ target: p }) => {
          S(p).attr(
            "fill",
            dt(x).formatHex()
          );
        }).on("mouseout", ({ target: p }) => {
          this.tooltip.hide(), S(p).attr(
            "fill",
            x.formatHex()
          );
        }).attr("class", `pic-bars pic-bars-${v}`).attr("fill", x.formatHex()).attr("y", m + b.t).attr("height", 0));
        let A = this.chartGroup.selectAll(`rect.pic-bars-${v}`).data(l).attr("x", (p) => Number(O(p.label)) + Z).attr("width", W);
        typeof A.transition == "function" && (A = A.transition().ease(nt).duration(Q)), A.attr("y", (p) => {
          let g = p.values[v];
          return g = g < 0 ? Math.abs(g) : 0, z(p.values[v] + g);
        }).attr("height", (p) => {
          const g = d < 0 ? Math.abs(c) : 0, tt = Math.abs(p.values[v]) - g;
          return m - z(tt) + b.t;
        });
      });
    }, i === void 0 || s === void 0 || r === void 0)
      throw new Error("Table is incorrectly initialised.");
    this.config = i, this.dataSet = s, this.scales = r, this.tooltip = o, this.dimensions = n, this.transitionTime = a, this.chartGroup = t.append("g").attr("class", "pic-bars-group").attr("transform", `translate(${n.padding.l}, 0)`), this.render({ transition: !0 });
  }
}
export {
  jt as Axis,
  Yt as Bars,
  he as Chart,
  Pt as Key,
  Kt as Scale,
  Ft as Tooltip,
  ut as addColorsToConfig,
  U as addStyleToDom,
  oe as addTheme,
  J as box,
  lt as colorFilter,
  at as compress,
  B as createNode,
  k as css,
  dt as darkerColor,
  ne as dispatchEvent,
  re as emptyTable,
  j as flatten,
  ae as getTheme,
  E as newArray,
  Ht as publishTheme,
  ct as random256,
  I as randomColor,
  se as randomData,
  y as randomNumber,
  ee as randomPalette,
  ht as sanitise,
  ie as sliceSampleData,
  F as throttle,
  N as totalMargin,
  ft as transformDataKeys,
  ot as truncateString,
  w as truthy
};
