import se, { useRef as oe, useState as W, useEffect as H, useId as ee } from "react";
var C = { exports: {} }, N = {};
var Z;
function ie() {
  if (Z) return N;
  Z = 1;
  var f = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function k(i, a, l) {
    var s = null;
    if (l !== void 0 && (s = "" + l), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      l = {};
      for (var m in a)
        m !== "key" && (l[m] = a[m]);
    } else l = a;
    return a = l.ref, {
      $$typeof: f,
      type: i,
      key: s,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  return N.Fragment = p, N.jsx = k, N.jsxs = k, N;
}
var S = {};
var Q;
function le() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && (function() {
    function f(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case A:
          return "Profiler";
        case y:
          return "StrictMode";
        case U:
          return "Suspense";
        case O:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case j:
            return "Portal";
          case I:
            return e.displayName || "Context";
          case w:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case P:
            return t = e.displayName || null, t !== null ? t : f(e.type) || "Memo";
          case _:
            t = e._payload, e = e._init;
            try {
              return f(e(t));
            } catch {
            }
        }
      return null;
    }
    function p(e) {
      return "" + e;
    }
    function k(e) {
      try {
        p(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var n = t.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), p(e);
      }
    }
    function i(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === _)
        return "<...>";
      try {
        var t = f(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function s(e) {
      if (V.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, t) {
      function n() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function v() {
      var e = f(this.type);
      return B[e] || (B[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, t, n, u, $, M) {
      var d = n.ref;
      return e = {
        $$typeof: E,
        type: e,
        key: t,
        props: n,
        _owner: u
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(e, "ref", {
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
    function x(e, t, n, u, $, M) {
      var d = t.children;
      if (d !== void 0)
        if (u)
          if (ne(d)) {
            for (u = 0; u < d.length; u++)
              b(d[u]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(d);
      if (V.call(t, "key")) {
        d = f(e);
        var T = Object.keys(t).filter(function(ae) {
          return ae !== "key";
        });
        u = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", X[d + u] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          d,
          T,
          d
        ), X[d + u] = !0);
      }
      if (d = null, n !== void 0 && (k(n), d = "" + n), s(t) && (k(t.key), d = "" + t.key), "key" in t) {
        n = {};
        for (var L in t)
          L !== "key" && (n[L] = t[L]);
      } else n = t;
      return d && m(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), g(
        e,
        d,
        n,
        a(),
        $,
        M
      );
    }
    function b(e) {
      o(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === _ && (e._payload.status === "fulfilled" ? o(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function o(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    var c = se, E = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), I = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), F = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, ne = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var q, B = {}, J = c.react_stack_bottom_frame.bind(
      c,
      l
    )(), G = D(i(l)), X = {};
    S.Fragment = R, S.jsx = function(e, t, n) {
      var u = 1e4 > F.recentlyCreatedOwnerStacks++;
      return x(
        e,
        t,
        n,
        !1,
        u ? Error("react-stack-top-frame") : J,
        u ? D(i(e)) : G
      );
    }, S.jsxs = function(e, t, n) {
      var u = 1e4 > F.recentlyCreatedOwnerStacks++;
      return x(
        e,
        t,
        n,
        !0,
        u ? Error("react-stack-top-frame") : J,
        u ? D(i(e)) : G
      );
    };
  })()), S;
}
var K;
function ce() {
  return K || (K = 1, process.env.NODE_ENV === "production" ? C.exports = ie() : C.exports = le()), C.exports;
}
var r = ce();
const h = ({
  direction: f = "row",
  align: p = "center",
  justify: k = "center",
  wrapContent: i = !1,
  cls: a = "",
  gap: l = 8,
  margin: s = [0],
  padding: m = [0],
  parent: v = "div",
  mask: g = !1,
  // TODO loader
  children: x,
  ...b
}) => {
  const o = v, c = s?.map((j) => j + "px").join(" "), E = m?.map((j) => j + "px").join(" ");
  return /* @__PURE__ */ r.jsx(
    o,
    {
      className: [
        "kit-box",
        `kit-box--${f}`,
        `kit-box--align-${p}`,
        `kit-box--justify-${k}`,
        i && "kit-box--wrap",
        a
      ].join(" "),
      style: { gap: `${l}px`, margin: `${c}`, padding: `${E}` },
      ...b,
      children: x
    }
  );
}, z = ({
  type: f = "primary",
  size: p = "medium",
  corners: k = "standard",
  disabled: i = !1,
  staticIcon: a = !1,
  cls: l = "",
  text: s = "",
  iconPath: m = "",
  labelAlign: v = "",
  onClick: g,
  ...x
}) => {
  const b = m != "" && s === "" ? "kit-btn--icon" : "";
  let o;
  const c = () => m ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "kit-btn--svg",
      style: {
        maskImage: `url(assets/${m})`,
        WebkitMaskImage: `url(assets/${m})`
      }
    }
  ) : null;
  switch (v) {
    case "right":
      o = () => /* @__PURE__ */ r.jsxs(h, { direction: "row", children: [
        /* @__PURE__ */ r.jsx(c, {}),
        s
      ] });
      break;
    case "left":
      o = () => /* @__PURE__ */ r.jsxs(h, { direction: "row", children: [
        s,
        /* @__PURE__ */ r.jsx(c, {})
      ] });
      break;
    case "top":
      o = () => /* @__PURE__ */ r.jsxs(h, { direction: "column", children: [
        s,
        /* @__PURE__ */ r.jsx(c, {})
      ] });
      break;
    case "bottom":
      o = () => /* @__PURE__ */ r.jsxs(h, { direction: "column", children: [
        /* @__PURE__ */ r.jsx(c, {}),
        s
      ] });
      break;
    default:
      o = () => /* @__PURE__ */ r.jsx(h, { direction: "row", children: b ? /* @__PURE__ */ r.jsx(c, {}) : s });
      break;
  }
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      onClick: i || !g ? null : g,
      className: [
        "kit-btn",
        `kit-btn--${p}`,
        `kit-btn--${k}`,
        `kit-btn--${f}`,
        i ? "kit-btn--disabled" : "",
        a ? "kit-icon" : "",
        b,
        l
      ].join(" "),
      ...x,
      children: /* @__PURE__ */ r.jsx(o, {})
    }
  );
}, de = ({
  width: f = "auto",
  corners: p = "standard",
  background: k = "blackout",
  isOpen: i = !1,
  closeButton: a = !0,
  title: l = "",
  cls: s = "",
  children: m,
  onClose: v,
  ...g
}) => {
  const x = oe(null), [b, o] = W(i);
  function c() {
    o(!1), v && v();
  }
  return H(() => {
    o(i);
  }, [i]), H(() => {
    if (!b) return;
    function E(R) {
      R.key === "Escape" && c();
    }
    document.addEventListener("keydown", E);
    const j = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = j, document.removeEventListener("keydown", E);
    };
  }, [b, c]), /* @__PURE__ */ r.jsx(r.Fragment, { children: b ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "kit-modal--overlay",
      onClick: (E) => {
        E.target === x.current && c();
      },
      ref: x,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: [
            "kit-modal",
            `kit-modal--${p}`,
            `kit-modal--bg-${k}`,
            s
          ].join(" "),
          style: { width: isNaN(f) ? "fit-content" : `${f}px` },
          ...g,
          children: /* @__PURE__ */ r.jsxs(h, { padding: [8, 16], direction: "column", children: [
            /* @__PURE__ */ r.jsx(h, { justify: "end", margin: [0, -16], children: /* @__PURE__ */ r.jsx(
              z,
              {
                type: "transparent",
                size: "large",
                onClick: c,
                iconPath: "svg-lib/cross-svgrepo-com.svg",
                cls: "kit-modal-close"
              }
            ) }),
            /* @__PURE__ */ r.jsx(h, { justify: "start", children: m })
          ] })
        }
      )
    }
  ) : /* @__PURE__ */ r.jsx(r.Fragment, {}) });
}, fe = ({
  value: f = "",
  type: p = "text",
  corners: k = "standard",
  disabled: i = !1,
  label: a = "",
  bottomText: l = "",
  placeholder: s = "",
  errorText: m = "",
  live: v = !1,
  isSearch: g = !1,
  mask: x,
  width: b,
  onChange: o,
  cls: c,
  ...E
}) => {
  const [j, R] = W(f), [y, A] = W(""), w = ee(), I = (P) => {
    let _ = P.target.value;
    p === "number" && (_ = _.toString().replace(/\D/g, "")), x && !x.test(_.toString()) ? A(m || "Некорректное значение") : A(""), R(_), v && o && o(_);
  }, Y = () => {
    R("");
  }, O = {
    value: j,
    placeholder: s,
    onChange: I,
    onBlur: (P) => {
      !v && o && o(j);
    },
    className: [
      "kit-input",
      `kit-input--${k}`,
      i ? "kit-input--disabled" : "",
      y ? "kit-input--error" : "",
      c
    ].join(" ").trim()
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "kit-input--wrapper", children: [
    a && /* @__PURE__ */ r.jsx("div", { className: "w5rem", children: /* @__PURE__ */ r.jsx(
      "label",
      {
        for: w,
        className: "kit-input--label kit-input-secondary-text",
        children: a
      }
    ) }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "kit-input--container",
        style: { width: b ? `${b}px` : "auto" },
        children: [
          p === "textarea" ? /* @__PURE__ */ r.jsx(
            "textarea",
            {
              id: w,
              ...O
            }
          ) : /* @__PURE__ */ r.jsx(
            "input",
            {
              ...O,
              type: p,
              id: w
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "kit-input--icon-container", children: [
            j && /* @__PURE__ */ r.jsx(
              z,
              {
                type: "transparent",
                iconPath: "svg-lib/input-svgrepo-com.svg",
                size: "small",
                onClick: Y,
                cls: "kit-input--icon"
              }
            ),
            g && /* @__PURE__ */ r.jsx(
              z,
              {
                type: "transparent",
                iconPath: "svg-lib/search-svgrepo-com.svg",
                size: "small",
                staticIcon: v,
                onClick: () => o && o(j),
                cls: "kit-input--icon"
              }
            )
          ] })
        ]
      }
    ),
    !y && l && /* @__PURE__ */ r.jsx("div", { className: "kit-input-bottomtext kit-input-secondary-text", children: l }),
    y && /* @__PURE__ */ r.jsx("div", { className: "kit-input-errortext kit-input-secondary-text", children: y })
  ] });
}, me = ({
  size: f = "medium",
  disabled: p = !1,
  cls: k = "",
  text: i = "",
  onClick: a,
  ...l
}) => {
  const s = ee();
  return /* @__PURE__ */ r.jsxs(
    "label",
    {
      htmlFor: s,
      className: [
        "kit-toggle",
        p ? "kit-toggle--disabled" : "",
        `kit-toggle--${f}`,
        k
      ].join(" "),
      children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            id: s,
            type: "checkbox",
            className: "kit-toggle--input",
            disabled: p,
            defaultChecked: !1,
            onChange: (m) => a?.(m.target.checked)
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "kit-toggle--slider", "aria-hidden": "true" }),
        i && /* @__PURE__ */ r.jsx("span", { className: "kit-toggle--label", children: i })
      ]
    }
  );
};
export {
  h as Box,
  z as Button,
  fe as Input,
  de as Modal,
  me as Toggle
};
