import oe, { useRef as se, useState as W, useEffect as H, useId as ee } from "react";
var C = { exports: {} }, N = {};
var Z;
function le() {
  if (Z) return N;
  Z = 1;
  var i = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function p(n, o, u) {
    var s = null;
    if (u !== void 0 && (s = "" + u), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      u = {};
      for (var k in o)
        k !== "key" && (u[k] = o[k]);
    } else u = o;
    return o = u.ref, {
      $$typeof: i,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return N.Fragment = c, N.jsx = p, N.jsxs = p, N;
}
var S = {};
var Q;
function ie() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case A:
          return "Profiler";
        case y:
          return "StrictMode";
        case U:
          return "Suspense";
        case P:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case E:
            return "Portal";
          case I:
            return e.displayName || "Context";
          case w:
            return (e._context.displayName || "Context") + ".Consumer";
          case F:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case O:
            return t = e.displayName || null, t !== null ? t : i(e.type) || "Memo";
          case _:
            t = e._payload, e = e._init;
            try {
              return i(e(t));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function p(e) {
      try {
        c(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var a = t.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), c(e);
      }
    }
    function n(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === _)
        return "<...>";
      try {
        var t = i(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function s(e) {
      if (V.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function k(e, t) {
      function a() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function v() {
      var e = i(this.type);
      return B[e] || (B[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, t, a, f, $, M) {
      var m = a.ref;
      return e = {
        $$typeof: g,
        type: e,
        key: t,
        props: a,
        _owner: f
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, t, a, f, $, M) {
      var m = t.children;
      if (m !== void 0)
        if (f)
          if (ne(m)) {
            for (f = 0; f < m.length; f++)
              b(m[f]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(m);
      if (V.call(t, "key")) {
        m = i(e);
        var T = Object.keys(t).filter(function(ae) {
          return ae !== "key";
        });
        f = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", X[m + f] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          m,
          T,
          m
        ), X[m + f] = !0);
      }
      if (m = null, a !== void 0 && (p(a), m = "" + a), s(t) && (p(t.key), m = "" + t.key), "key" in t) {
        a = {};
        for (var L in t)
          L !== "key" && (a[L] = t[L]);
      } else a = t;
      return m && k(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        m,
        a,
        o(),
        $,
        M
      );
    }
    function b(e) {
      l(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === _ && (e._payload.status === "fulfilled" ? l(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function l(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    var d = oe, g = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), I = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), Y = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, ne = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var q, B = {}, J = d.react_stack_bottom_frame.bind(
      d,
      u
    )(), G = D(n(u)), X = {};
    S.Fragment = h, S.jsx = function(e, t, a) {
      var f = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return x(
        e,
        t,
        a,
        !1,
        f ? Error("react-stack-top-frame") : J,
        f ? D(n(e)) : G
      );
    }, S.jsxs = function(e, t, a) {
      var f = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return x(
        e,
        t,
        a,
        !0,
        f ? Error("react-stack-top-frame") : J,
        f ? D(n(e)) : G
      );
    };
  })()), S;
}
var K;
function ce() {
  return K || (K = 1, process.env.NODE_ENV === "production" ? C.exports = le() : C.exports = ie()), C.exports;
}
var r = ce();
const R = ({
  direction: i = "row",
  align: c = "center",
  justify: p = "center",
  wrapContent: n = !1,
  cls: o = "",
  gap: u = 8,
  margin: s = [0],
  padding: k = [0],
  parent: v = "div",
  mask: j = !1,
  // TODO loader
  children: x,
  ...b
}) => {
  const l = v, d = s?.map((E) => E + "px").join(" "), g = k?.map((E) => E + "px").join(" ");
  return /* @__PURE__ */ r.jsx(
    l,
    {
      className: [
        "kit-box",
        `kit-box--${i}`,
        `kit-box--align-${c}`,
        `kit-box--justify-${p}`,
        n && "kit-box--wrap",
        o
      ].join(" "),
      style: { gap: `${u}px`, margin: `${d}`, padding: `${g}` },
      ...b,
      children: x
    }
  );
}, z = ({
  type: i = "primary",
  size: c = "medium",
  corners: p = "standard",
  disabled: n = !1,
  staticIcon: o = !1,
  cls: u = "",
  text: s = "",
  iconPath: k = "",
  labelAlign: v = "",
  onClick: j,
  ...x
}) => {
  const b = k != "" && s === "" ? "kit-btn--icon" : "";
  let l;
  const d = () => k ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "kit-btn--svg",
      style: {
        maskImage: `url(assets/${k})`,
        WebkitMaskImage: `url(assets/${k})`
      }
    }
  ) : null;
  switch (v) {
    case "right":
      l = () => /* @__PURE__ */ r.jsxs(R, { direction: "row", children: [
        /* @__PURE__ */ r.jsx(d, {}),
        s
      ] });
      break;
    case "left":
      l = () => /* @__PURE__ */ r.jsxs(R, { direction: "row", children: [
        s,
        /* @__PURE__ */ r.jsx(d, {})
      ] });
      break;
    case "top":
      l = () => /* @__PURE__ */ r.jsxs(R, { direction: "column", children: [
        s,
        /* @__PURE__ */ r.jsx(d, {})
      ] });
      break;
    case "bottom":
      l = () => /* @__PURE__ */ r.jsxs(R, { direction: "column", children: [
        /* @__PURE__ */ r.jsx(d, {}),
        s
      ] });
      break;
    default:
      l = () => /* @__PURE__ */ r.jsx(R, { direction: "row", children: b ? /* @__PURE__ */ r.jsx(d, {}) : s });
      break;
  }
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      onClick: n || !j ? null : j,
      className: [
        "kit-btn",
        `kit-btn--${c}`,
        `kit-btn--${p}`,
        `kit-btn--${i}`,
        n ? "kit-btn--disabled" : "",
        o ? "kit-icon" : "",
        b,
        u
      ].join(" "),
      ...x,
      children: /* @__PURE__ */ r.jsx(l, {})
    }
  );
}, fe = ({
  width: i = "auto",
  corners: c = "standard",
  background: p = "blackout",
  isOpen: n = !1,
  closeButton: o = !0,
  title: u = "",
  cls: s = "",
  children: k,
  onClose: v,
  ...j
}) => {
  const x = se(null), [b, l] = W(n);
  function d() {
    l(!1), v && v();
  }
  return H(() => {
    l(n);
  }, [n]), H(() => {
    if (!b) return;
    function g(h) {
      h.key === "Escape" && d();
    }
    document.addEventListener("keydown", g);
    const E = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = E, document.removeEventListener("keydown", g);
    };
  }, [b, d]), /* @__PURE__ */ r.jsx(r.Fragment, { children: b ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "kit-modal--overlay",
      onClick: (g) => {
        g.target === x.current && d();
      },
      ref: x,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: [
            "kit-modal",
            `kit-modal--${c}`,
            `kit-modal--bg-${p}`,
            s
          ].join(" "),
          style: { width: isNaN(i) ? "fit-content" : `${i}px` },
          ...j,
          children: /* @__PURE__ */ r.jsxs(R, { padding: [8, 16], direction: "column", children: [
            /* @__PURE__ */ r.jsx(R, { justify: "end", margin: [0, -16], children: /* @__PURE__ */ r.jsx(
              z,
              {
                type: "transparent",
                size: "large",
                onClick: d,
                iconPath: "svg-lib/cross-svgrepo-com.svg",
                cls: "kit-modal-close"
              }
            ) }),
            /* @__PURE__ */ r.jsx(R, { justify: "start", children: k })
          ] })
        }
      )
    }
  ) : /* @__PURE__ */ r.jsx(r.Fragment, {}) });
}, me = ({
  value: i = "",
  type: c = "text",
  corners: p = "standard",
  disabled: n = !1,
  label: o = "",
  bottomText: u = "",
  placeholder: s = "",
  errorText: k = "",
  live: v = !1,
  isSearch: j = !1,
  mask: x,
  width: b,
  onChange: l,
  cls: d,
  ...g
}) => {
  const [E, h] = W(i), [y, A] = W(""), w = ee(), I = (O) => {
    let _ = O.target.value;
    c === "number" && (_ = _.toString().replace(/\D/g, "")), x && !x.test(_.toString()) ? A(k || "Некорректное значение") : A(""), h(_), v && l && l(_);
  }, F = () => {
    h("");
  }, P = {
    value: E,
    placeholder: s,
    onChange: I,
    onBlur: (O) => {
      !v && l && l(E);
    },
    className: [
      "kit-input",
      `kit-input--${p}`,
      n ? "kit-input--disabled" : "",
      y ? "kit-input--error" : "",
      d
    ].join(" ").trim()
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "kit-input--wrapper", children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "w5rem", children: /* @__PURE__ */ r.jsx(
      "label",
      {
        for: w,
        className: "kit-input--label kit-input-secondary-text",
        children: o
      }
    ) }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "kit-input--container",
        style: { width: b ? `${b}px` : "auto" },
        children: [
          c === "textarea" ? /* @__PURE__ */ r.jsx(
            "textarea",
            {
              id: w,
              ...P
            }
          ) : /* @__PURE__ */ r.jsx(
            "input",
            {
              ...P,
              type: c,
              id: w
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "kit-input--icon-container", children: [
            E && /* @__PURE__ */ r.jsx(
              z,
              {
                type: "transparent",
                iconPath: "svg-lib/input-svgrepo-com.svg",
                size: "small",
                onClick: F,
                cls: "kit-input--icon"
              }
            ),
            j && /* @__PURE__ */ r.jsx(
              z,
              {
                type: "transparent",
                iconPath: "svg-lib/search-svgrepo-com.svg",
                size: "small",
                staticIcon: v,
                onClick: () => l && l(E),
                cls: "kit-input--icon"
              }
            )
          ] })
        ]
      }
    ),
    !y && u && /* @__PURE__ */ r.jsx("div", { className: "kit-input-bottomtext kit-input-secondary-text", children: u }),
    y && /* @__PURE__ */ r.jsx("div", { className: "kit-input-errortext kit-input-secondary-text", children: y })
  ] });
}, pe = ({
  size: i = "medium",
  disabled: c = !1,
  cls: p = "",
  text: n = "",
  onClick: o,
  ...u
}) => {
  const s = ee();
  return /* @__PURE__ */ r.jsxs(
    "label",
    {
      htmlFor: s,
      className: [
        "kit-toggle",
        c ? "kit-toggle--disabled" : "",
        `kit-toggle--${i}`,
        p
      ].join(" "),
      children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            id: s,
            type: "checkbox",
            className: "kit-toggle--input",
            disabled: c,
            defaultChecked: !1,
            onChange: (k) => o?.(k.target.checked)
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "kit-toggle--slider", "aria-hidden": "true" }),
        n && /* @__PURE__ */ r.jsx("span", { className: "kit-toggle--label", children: n })
      ]
    }
  );
}, ue = {
  "--primary-btn-color": "#7C3AED",
  "--secondary-btn-color": "#FFFFFF",
  "--hover-btn-color": "#6D28D9",
  "--bg-color": "#fff",
  "--corners-standard": "0.65em",
  "--corners-round": "3em",
  "--corners-square": "0"
};
function ke(i = {}, c = document.documentElement) {
  const p = { ...ue, ...i };
  for (const n in p)
    c.style.setProperty(n, p[n]);
}
export {
  R as Box,
  z as Button,
  me as Input,
  fe as Modal,
  pe as Toggle,
  ke as applyTheme
};
