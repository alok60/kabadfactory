(function () {
  const f = document.createElement("link").relList;
  if (f && f.supports && f.supports("modulepreload")) return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]')) d(T);
  new MutationObserver((T) => {
    for (const E of T)
      if (E.type === "childList")
        for (const M of E.addedNodes)
          M.tagName === "LINK" && M.rel === "modulepreload" && d(M);
  }).observe(document, { childList: !0, subtree: !0 });
  function y(T) {
    const E = {};
    return (
      T.integrity && (E.integrity = T.integrity),
      T.referrerPolicy && (E.referrerPolicy = T.referrerPolicy),
      T.crossOrigin === "use-credentials"
        ? (E.credentials = "include")
        : T.crossOrigin === "anonymous"
          ? (E.credentials = "omit")
          : (E.credentials = "same-origin"),
      E
    );
  }
  function d(T) {
    if (T.ep) return;
    T.ep = !0;
    const E = y(T);
    fetch(T.href, E);
  }
})();
var Ns = { exports: {} },
  qn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function kp() {
  if (Dd) return qn;
  Dd = 1;
  var r = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.fragment");
  function y(d, T, E) {
    var M = null;
    if (
      (E !== void 0 && (M = "" + E),
      T.key !== void 0 && (M = "" + T.key),
      "key" in T)
    ) {
      E = {};
      for (var z in T) z !== "key" && (E[z] = T[z]);
    } else E = T;
    return (
      (T = E.ref),
      { $$typeof: r, type: d, key: M, ref: T !== void 0 ? T : null, props: E }
    );
  }
  return ((qn.Fragment = f), (qn.jsx = y), (qn.jsxs = y), qn);
}
var Cd;
function Ap() {
  return (Cd || ((Cd = 1), (Ns.exports = kp())), Ns.exports);
}
var i = Ap(),
  ks = { exports: {} },
  Bn = {},
  As = { exports: {} },
  ws = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rd;
function wp() {
  return (
    Rd ||
      ((Rd = 1),
      (function (r) {
        function f(j, R) {
          var Y = j.length;
          j.push(R);
          e: for (; 0 < Y; ) {
            var re = (Y - 1) >>> 1,
              h = j[re];
            if (0 < T(h, R)) ((j[re] = R), (j[Y] = h), (Y = re));
            else break e;
          }
        }
        function y(j) {
          return j.length === 0 ? null : j[0];
        }
        function d(j) {
          if (j.length === 0) return null;
          var R = j[0],
            Y = j.pop();
          if (Y !== R) {
            j[0] = Y;
            e: for (var re = 0, h = j.length, w = h >>> 1; re < w; ) {
              var D = 2 * (re + 1) - 1,
                _ = j[D],
                Q = D + 1,
                ne = j[Q];
              if (0 > T(_, Y))
                Q < h && 0 > T(ne, _)
                  ? ((j[re] = ne), (j[Q] = Y), (re = Q))
                  : ((j[re] = _), (j[D] = Y), (re = D));
              else if (Q < h && 0 > T(ne, Y))
                ((j[re] = ne), (j[Q] = Y), (re = Q));
              else break e;
            }
          }
          return R;
        }
        function T(j, R) {
          var Y = j.sortIndex - R.sortIndex;
          return Y !== 0 ? Y : j.id - R.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var E = performance;
          r.unstable_now = function () {
            return E.now();
          };
        } else {
          var M = Date,
            z = M.now();
          r.unstable_now = function () {
            return M.now() - z;
          };
        }
        var O = [],
          S = [],
          C = 1,
          le = null,
          B = 3,
          V = !1,
          W = !1,
          Be = !1,
          Ke = !1,
          ht = typeof setTimeout == "function" ? setTimeout : null,
          lt = typeof clearTimeout == "function" ? clearTimeout : null,
          ze = typeof setImmediate < "u" ? setImmediate : null;
        function at(j) {
          for (var R = y(S); R !== null; ) {
            if (R.callback === null) d(S);
            else if (R.startTime <= j)
              (d(S), (R.sortIndex = R.expirationTime), f(O, R));
            else break;
            R = y(S);
          }
        }
        function ae(j) {
          if (((Be = !1), at(j), !W))
            if (y(O) !== null) ((W = !0), Ne || ((Ne = !0), Me()));
            else {
              var R = y(S);
              R !== null && Oe(ae, R.startTime - j);
            }
        }
        var Ne = !1,
          we = -1,
          Re = 5,
          Je = -1;
        function tl() {
          return Ke ? !0 : !(r.unstable_now() - Je < Re);
        }
        function mt() {
          if (((Ke = !1), Ne)) {
            var j = r.unstable_now();
            Je = j;
            var R = !0;
            try {
              e: {
                ((W = !1), Be && ((Be = !1), lt(we), (we = -1)), (V = !0));
                var Y = B;
                try {
                  t: {
                    for (
                      at(j), le = y(O);
                      le !== null && !(le.expirationTime > j && tl());
                    ) {
                      var re = le.callback;
                      if (typeof re == "function") {
                        ((le.callback = null), (B = le.priorityLevel));
                        var h = re(le.expirationTime <= j);
                        if (((j = r.unstable_now()), typeof h == "function")) {
                          ((le.callback = h), at(j), (R = !0));
                          break t;
                        }
                        (le === y(O) && d(O), at(j));
                      } else d(O);
                      le = y(O);
                    }
                    if (le !== null) R = !0;
                    else {
                      var w = y(S);
                      (w !== null && Oe(ae, w.startTime - j), (R = !1));
                    }
                  }
                  break e;
                } finally {
                  ((le = null), (B = Y), (V = !1));
                }
                R = void 0;
              }
            } finally {
              R ? Me() : (Ne = !1);
            }
          }
        }
        var Me;
        if (typeof ze == "function")
          Me = function () {
            ze(mt);
          };
        else if (typeof MessageChannel < "u") {
          var zt = new MessageChannel(),
            kt = zt.port2;
          ((zt.port1.onmessage = mt),
            (Me = function () {
              kt.postMessage(null);
            }));
        } else
          Me = function () {
            ht(mt, 0);
          };
        function Oe(j, R) {
          we = ht(function () {
            j(r.unstable_now());
          }, R);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (r.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Re = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return B;
          }),
          (r.unstable_next = function (j) {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = B;
            }
            var Y = B;
            B = R;
            try {
              return j();
            } finally {
              B = Y;
            }
          }),
          (r.unstable_requestPaint = function () {
            Ke = !0;
          }),
          (r.unstable_runWithPriority = function (j, R) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var Y = B;
            B = j;
            try {
              return R();
            } finally {
              B = Y;
            }
          }),
          (r.unstable_scheduleCallback = function (j, R, Y) {
            var re = r.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? re + Y : re))
                : (Y = re),
              j)
            ) {
              case 1:
                var h = -1;
                break;
              case 2:
                h = 250;
                break;
              case 5:
                h = 1073741823;
                break;
              case 4:
                h = 1e4;
                break;
              default:
                h = 5e3;
            }
            return (
              (h = Y + h),
              (j = {
                id: C++,
                callback: R,
                priorityLevel: j,
                startTime: Y,
                expirationTime: h,
                sortIndex: -1,
              }),
              Y > re
                ? ((j.sortIndex = Y),
                  f(S, j),
                  y(O) === null &&
                    j === y(S) &&
                    (Be ? (lt(we), (we = -1)) : (Be = !0), Oe(ae, Y - re)))
                : ((j.sortIndex = h),
                  f(O, j),
                  W || V || ((W = !0), Ne || ((Ne = !0), Me()))),
              j
            );
          }),
          (r.unstable_shouldYield = tl),
          (r.unstable_wrapCallback = function (j) {
            var R = B;
            return function () {
              var Y = B;
              B = R;
              try {
                return j.apply(this, arguments);
              } finally {
                B = Y;
              }
            };
          }));
      })(ws)),
    ws
  );
}
var _d;
function Tp() {
  return (_d || ((_d = 1), (As.exports = wp())), As.exports);
}
var Ts = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function Ep() {
  if (Ud) return $;
  Ud = 1;
  var r = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.portal"),
    y = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    E = Symbol.for("react.consumer"),
    M = Symbol.for("react.context"),
    z = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    le = Symbol.iterator;
  function B(h) {
    return h === null || typeof h != "object"
      ? null
      : ((h = (le && h[le]) || h["@@iterator"]),
        typeof h == "function" ? h : null);
  }
  var V = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    W = Object.assign,
    Be = {};
  function Ke(h, w, D) {
    ((this.props = h),
      (this.context = w),
      (this.refs = Be),
      (this.updater = D || V));
  }
  ((Ke.prototype.isReactComponent = {}),
    (Ke.prototype.setState = function (h, w) {
      if (typeof h != "object" && typeof h != "function" && h != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, h, w, "setState");
    }),
    (Ke.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    }));
  function ht() {}
  ht.prototype = Ke.prototype;
  function lt(h, w, D) {
    ((this.props = h),
      (this.context = w),
      (this.refs = Be),
      (this.updater = D || V));
  }
  var ze = (lt.prototype = new ht());
  ((ze.constructor = lt), W(ze, Ke.prototype), (ze.isPureReactComponent = !0));
  var at = Array.isArray,
    ae = { H: null, A: null, T: null, S: null, V: null },
    Ne = Object.prototype.hasOwnProperty;
  function we(h, w, D, _, Q, ne) {
    return (
      (D = ne.ref),
      { $$typeof: r, type: h, key: w, ref: D !== void 0 ? D : null, props: ne }
    );
  }
  function Re(h, w) {
    return we(h.type, w, void 0, void 0, void 0, h.props);
  }
  function Je(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }
  function tl(h) {
    var w = { "=": "=0", ":": "=2" };
    return (
      "$" +
      h.replace(/[=:]/g, function (D) {
        return w[D];
      })
    );
  }
  var mt = /\/+/g;
  function Me(h, w) {
    return typeof h == "object" && h !== null && h.key != null
      ? tl("" + h.key)
      : w.toString(36);
  }
  function zt() {}
  function kt(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (
          (typeof h.status == "string"
            ? h.then(zt, zt)
            : ((h.status = "pending"),
              h.then(
                function (w) {
                  h.status === "pending" &&
                    ((h.status = "fulfilled"), (h.value = w));
                },
                function (w) {
                  h.status === "pending" &&
                    ((h.status = "rejected"), (h.reason = w));
                },
              )),
          h.status)
        ) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function Oe(h, w, D, _, Q) {
    var ne = typeof h;
    (ne === "undefined" || ne === "boolean") && (h = null);
    var Z = !1;
    if (h === null) Z = !0;
    else
      switch (ne) {
        case "bigint":
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case r:
            case f:
              Z = !0;
              break;
            case C:
              return ((Z = h._init), Oe(Z(h._payload), w, D, _, Q));
          }
      }
    if (Z)
      return (
        (Q = Q(h)),
        (Z = _ === "" ? "." + Me(h, 0) : _),
        at(Q)
          ? ((D = ""),
            Z != null && (D = Z.replace(mt, "$&/") + "/"),
            Oe(Q, w, D, "", function (Mt) {
              return Mt;
            }))
          : Q != null &&
            (Je(Q) &&
              (Q = Re(
                Q,
                D +
                  (Q.key == null || (h && h.key === Q.key)
                    ? ""
                    : ("" + Q.key).replace(mt, "$&/") + "/") +
                  Z,
              )),
            w.push(Q)),
        1
      );
    Z = 0;
    var Fe = _ === "" ? "." : _ + ":";
    if (at(h))
      for (var F = 0; F < h.length; F++)
        ((_ = h[F]), (ne = Fe + Me(_, F)), (Z += Oe(_, w, D, ne, Q)));
    else if (((F = B(h)), typeof F == "function"))
      for (h = F.call(h), F = 0; !(_ = h.next()).done; )
        ((_ = _.value), (ne = Fe + Me(_, F++)), (Z += Oe(_, w, D, ne, Q)));
    else if (ne === "object") {
      if (typeof h.then == "function") return Oe(kt(h), w, D, _, Q);
      throw (
        (w = String(h)),
        Error(
          "Objects are not valid as a React child (found: " +
            (w === "[object Object]"
              ? "object with keys {" + Object.keys(h).join(", ") + "}"
              : w) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return Z;
  }
  function j(h, w, D) {
    if (h == null) return h;
    var _ = [],
      Q = 0;
    return (
      Oe(h, _, "", "", function (ne) {
        return w.call(D, ne, Q++);
      }),
      _
    );
  }
  function R(h) {
    if (h._status === -1) {
      var w = h._result;
      ((w = w()),
        w.then(
          function (D) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 1), (h._result = D));
          },
          function (D) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 2), (h._result = D));
          },
        ),
        h._status === -1 && ((h._status = 0), (h._result = w)));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var Y =
    typeof reportError == "function"
      ? reportError
      : function (h) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var w = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof h == "object" &&
                h !== null &&
                typeof h.message == "string"
                  ? String(h.message)
                  : String(h),
              error: h,
            });
            if (!window.dispatchEvent(w)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", h);
            return;
          }
          console.error(h);
        };
  function re() {}
  return (
    ($.Children = {
      map: j,
      forEach: function (h, w, D) {
        j(
          h,
          function () {
            w.apply(this, arguments);
          },
          D,
        );
      },
      count: function (h) {
        var w = 0;
        return (
          j(h, function () {
            w++;
          }),
          w
        );
      },
      toArray: function (h) {
        return (
          j(h, function (w) {
            return w;
          }) || []
        );
      },
      only: function (h) {
        if (!Je(h))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return h;
      },
    }),
    ($.Component = Ke),
    ($.Fragment = y),
    ($.Profiler = T),
    ($.PureComponent = lt),
    ($.StrictMode = d),
    ($.Suspense = O),
    ($.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae),
    ($.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (h) {
        return ae.H.useMemoCache(h);
      },
    }),
    ($.cache = function (h) {
      return function () {
        return h.apply(null, arguments);
      };
    }),
    ($.cloneElement = function (h, w, D) {
      if (h == null)
        throw Error(
          "The argument must be a React element, but you passed " + h + ".",
        );
      var _ = W({}, h.props),
        Q = h.key,
        ne = void 0;
      if (w != null)
        for (Z in (w.ref !== void 0 && (ne = void 0),
        w.key !== void 0 && (Q = "" + w.key),
        w))
          !Ne.call(w, Z) ||
            Z === "key" ||
            Z === "__self" ||
            Z === "__source" ||
            (Z === "ref" && w.ref === void 0) ||
            (_[Z] = w[Z]);
      var Z = arguments.length - 2;
      if (Z === 1) _.children = D;
      else if (1 < Z) {
        for (var Fe = Array(Z), F = 0; F < Z; F++) Fe[F] = arguments[F + 2];
        _.children = Fe;
      }
      return we(h.type, Q, void 0, void 0, ne, _);
    }),
    ($.createContext = function (h) {
      return (
        (h = {
          $$typeof: M,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (h.Provider = h),
        (h.Consumer = { $$typeof: E, _context: h }),
        h
      );
    }),
    ($.createElement = function (h, w, D) {
      var _,
        Q = {},
        ne = null;
      if (w != null)
        for (_ in (w.key !== void 0 && (ne = "" + w.key), w))
          Ne.call(w, _) &&
            _ !== "key" &&
            _ !== "__self" &&
            _ !== "__source" &&
            (Q[_] = w[_]);
      var Z = arguments.length - 2;
      if (Z === 1) Q.children = D;
      else if (1 < Z) {
        for (var Fe = Array(Z), F = 0; F < Z; F++) Fe[F] = arguments[F + 2];
        Q.children = Fe;
      }
      if (h && h.defaultProps)
        for (_ in ((Z = h.defaultProps), Z)) Q[_] === void 0 && (Q[_] = Z[_]);
      return we(h, ne, void 0, void 0, null, Q);
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (h) {
      return { $$typeof: z, render: h };
    }),
    ($.isValidElement = Je),
    ($.lazy = function (h) {
      return { $$typeof: C, _payload: { _status: -1, _result: h }, _init: R };
    }),
    ($.memo = function (h, w) {
      return { $$typeof: S, type: h, compare: w === void 0 ? null : w };
    }),
    ($.startTransition = function (h) {
      var w = ae.T,
        D = {};
      ae.T = D;
      try {
        var _ = h(),
          Q = ae.S;
        (Q !== null && Q(D, _),
          typeof _ == "object" &&
            _ !== null &&
            typeof _.then == "function" &&
            _.then(re, Y));
      } catch (ne) {
        Y(ne);
      } finally {
        ae.T = w;
      }
    }),
    ($.unstable_useCacheRefresh = function () {
      return ae.H.useCacheRefresh();
    }),
    ($.use = function (h) {
      return ae.H.use(h);
    }),
    ($.useActionState = function (h, w, D) {
      return ae.H.useActionState(h, w, D);
    }),
    ($.useCallback = function (h, w) {
      return ae.H.useCallback(h, w);
    }),
    ($.useContext = function (h) {
      return ae.H.useContext(h);
    }),
    ($.useDebugValue = function () {}),
    ($.useDeferredValue = function (h, w) {
      return ae.H.useDeferredValue(h, w);
    }),
    ($.useEffect = function (h, w, D) {
      var _ = ae.H;
      if (typeof D == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return _.useEffect(h, w);
    }),
    ($.useId = function () {
      return ae.H.useId();
    }),
    ($.useImperativeHandle = function (h, w, D) {
      return ae.H.useImperativeHandle(h, w, D);
    }),
    ($.useInsertionEffect = function (h, w) {
      return ae.H.useInsertionEffect(h, w);
    }),
    ($.useLayoutEffect = function (h, w) {
      return ae.H.useLayoutEffect(h, w);
    }),
    ($.useMemo = function (h, w) {
      return ae.H.useMemo(h, w);
    }),
    ($.useOptimistic = function (h, w) {
      return ae.H.useOptimistic(h, w);
    }),
    ($.useReducer = function (h, w, D) {
      return ae.H.useReducer(h, w, D);
    }),
    ($.useRef = function (h) {
      return ae.H.useRef(h);
    }),
    ($.useState = function (h) {
      return ae.H.useState(h);
    }),
    ($.useSyncExternalStore = function (h, w, D) {
      return ae.H.useSyncExternalStore(h, w, D);
    }),
    ($.useTransition = function () {
      return ae.H.useTransition();
    }),
    ($.version = "19.1.0"),
    $
  );
}
var Hd;
function Os() {
  return (Hd || ((Hd = 1), (Ts.exports = Ep())), Ts.exports);
}
var Es = { exports: {} },
  Ve = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd;
function zp() {
  if (qd) return Ve;
  qd = 1;
  var r = Os();
  function f(O) {
    var S = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        S += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return (
      "Minified React error #" +
      O +
      "; visit " +
      S +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function y() {}
  var d = {
      d: {
        f: y,
        r: function () {
          throw Error(f(522));
        },
        D: y,
        C: y,
        L: y,
        m: y,
        X: y,
        S: y,
        M: y,
      },
      p: 0,
      findDOMNode: null,
    },
    T = Symbol.for("react.portal");
  function E(O, S, C) {
    var le =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: le == null ? null : "" + le,
      children: O,
      containerInfo: S,
      implementation: C,
    };
  }
  var M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function z(O, S) {
    if (O === "font") return "";
    if (typeof S == "string") return S === "use-credentials" ? S : "";
  }
  return (
    (Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    (Ve.createPortal = function (O, S) {
      var C =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S || (S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11))
        throw Error(f(299));
      return E(O, S, null, C);
    }),
    (Ve.flushSync = function (O) {
      var S = M.T,
        C = d.p;
      try {
        if (((M.T = null), (d.p = 2), O)) return O();
      } finally {
        ((M.T = S), (d.p = C), d.d.f());
      }
    }),
    (Ve.preconnect = function (O, S) {
      typeof O == "string" &&
        (S
          ? ((S = S.crossOrigin),
            (S =
              typeof S == "string"
                ? S === "use-credentials"
                  ? S
                  : ""
                : void 0))
          : (S = null),
        d.d.C(O, S));
    }),
    (Ve.prefetchDNS = function (O) {
      typeof O == "string" && d.d.D(O);
    }),
    (Ve.preinit = function (O, S) {
      if (typeof O == "string" && S && typeof S.as == "string") {
        var C = S.as,
          le = z(C, S.crossOrigin),
          B = typeof S.integrity == "string" ? S.integrity : void 0,
          V = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
        C === "style"
          ? d.d.S(O, typeof S.precedence == "string" ? S.precedence : void 0, {
              crossOrigin: le,
              integrity: B,
              fetchPriority: V,
            })
          : C === "script" &&
            d.d.X(O, {
              crossOrigin: le,
              integrity: B,
              fetchPriority: V,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            });
      }
    }),
    (Ve.preinitModule = function (O, S) {
      if (typeof O == "string")
        if (typeof S == "object" && S !== null) {
          if (S.as == null || S.as === "script") {
            var C = z(S.as, S.crossOrigin);
            d.d.M(O, {
              crossOrigin: C,
              integrity: typeof S.integrity == "string" ? S.integrity : void 0,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            });
          }
        } else S == null && d.d.M(O);
    }),
    (Ve.preload = function (O, S) {
      if (
        typeof O == "string" &&
        typeof S == "object" &&
        S !== null &&
        typeof S.as == "string"
      ) {
        var C = S.as,
          le = z(C, S.crossOrigin);
        d.d.L(O, C, {
          crossOrigin: le,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          type: typeof S.type == "string" ? S.type : void 0,
          fetchPriority:
            typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
          referrerPolicy:
            typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
          imageSrcSet:
            typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
          imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
          media: typeof S.media == "string" ? S.media : void 0,
        });
      }
    }),
    (Ve.preloadModule = function (O, S) {
      if (typeof O == "string")
        if (S) {
          var C = z(S.as, S.crossOrigin);
          d.d.m(O, {
            as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
            crossOrigin: C,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          });
        } else d.d.m(O);
    }),
    (Ve.requestFormReset = function (O) {
      d.d.r(O);
    }),
    (Ve.unstable_batchedUpdates = function (O, S) {
      return O(S);
    }),
    (Ve.useFormState = function (O, S, C) {
      return M.H.useFormState(O, S, C);
    }),
    (Ve.useFormStatus = function () {
      return M.H.useHostTransitionStatus();
    }),
    (Ve.version = "19.1.0"),
    Ve
  );
}
var Bd;
function Mp() {
  if (Bd) return Es.exports;
  Bd = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (f) {
        console.error(f);
      }
  }
  return (r(), (Es.exports = zp()), Es.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd;
function Op() {
  if (Gd) return Bn;
  Gd = 1;
  var r = Tp(),
    f = Os(),
    y = Mp();
  function d(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function T(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function E(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function M(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function z(e) {
    if (E(e) !== e) throw Error(d(188));
  }
  function O(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = E(e)), t === null)) throw Error(d(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var c = n.alternate;
      if (c === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === c.child) {
        for (c = n.child; c; ) {
          if (c === l) return (z(n), e);
          if (c === a) return (z(n), t);
          c = c.sibling;
        }
        throw Error(d(188));
      }
      if (l.return !== a.return) ((l = n), (a = c));
      else {
        for (var u = !1, s = n.child; s; ) {
          if (s === l) {
            ((u = !0), (l = n), (a = c));
            break;
          }
          if (s === a) {
            ((u = !0), (a = n), (l = c));
            break;
          }
          s = s.sibling;
        }
        if (!u) {
          for (s = c.child; s; ) {
            if (s === l) {
              ((u = !0), (l = c), (a = n));
              break;
            }
            if (s === a) {
              ((u = !0), (a = c), (l = n));
              break;
            }
            s = s.sibling;
          }
          if (!u) throw Error(d(189));
        }
      }
      if (l.alternate !== a) throw Error(d(190));
    }
    if (l.tag !== 3) throw Error(d(188));
    return l.stateNode.current === l ? e : t;
  }
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = S(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var C = Object.assign,
    le = Symbol.for("react.element"),
    B = Symbol.for("react.transitional.element"),
    V = Symbol.for("react.portal"),
    W = Symbol.for("react.fragment"),
    Be = Symbol.for("react.strict_mode"),
    Ke = Symbol.for("react.profiler"),
    ht = Symbol.for("react.provider"),
    lt = Symbol.for("react.consumer"),
    ze = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    ae = Symbol.for("react.suspense"),
    Ne = Symbol.for("react.suspense_list"),
    we = Symbol.for("react.memo"),
    Re = Symbol.for("react.lazy"),
    Je = Symbol.for("react.activity"),
    tl = Symbol.for("react.memo_cache_sentinel"),
    mt = Symbol.iterator;
  function Me(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (mt && e[mt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var zt = Symbol.for("react.client.reference");
  function kt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === zt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case Ke:
        return "Profiler";
      case Be:
        return "StrictMode";
      case ae:
        return "Suspense";
      case Ne:
        return "SuspenseList";
      case Je:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case ze:
          return (e.displayName || "Context") + ".Provider";
        case lt:
          return (e._context.displayName || "Context") + ".Consumer";
        case at:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case we:
          return (
            (t = e.displayName || null),
            t !== null ? t : kt(e.type) || "Memo"
          );
        case Re:
          ((t = e._payload), (e = e._init));
          try {
            return kt(e(t));
          } catch {}
      }
    return null;
  }
  var Oe = Array.isArray,
    j = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    R = y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = { pending: !1, data: null, method: null, action: null },
    re = [],
    h = -1;
  function w(e) {
    return { current: e };
  }
  function D(e) {
    0 > h || ((e.current = re[h]), (re[h] = null), h--);
  }
  function _(e, t) {
    (h++, (re[h] = e.current), (e.current = t));
  }
  var Q = w(null),
    ne = w(null),
    Z = w(null),
    Fe = w(null);
  function F(e, t) {
    switch ((_(Z, t), _(ne, e), _(Q, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? id(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = id(t)), (e = ud(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (D(Q), _(Q, e));
  }
  function Mt() {
    (D(Q), D(ne), D(Z));
  }
  function Ha(e) {
    e.memoizedState !== null && _(Fe, e);
    var t = Q.current,
      l = ud(t, e.type);
    t !== l && (_(ne, e), _(Q, l));
  }
  function Jl(e) {
    (ne.current === e && (D(Q), D(ne)),
      Fe.current === e && (D(Fe), (Cn._currentValue = Y)));
  }
  var Fl = Object.prototype.hasOwnProperty,
    qa = r.unstable_scheduleCallback,
    Ba = r.unstable_cancelCallback,
    oi = r.unstable_shouldYield,
    U = r.unstable_requestPaint,
    J = r.unstable_now,
    ge = r.unstable_getCurrentPriorityLevel,
    Ge = r.unstable_ImmediatePriority,
    Ot = r.unstable_UserBlockingPriority,
    Dt = r.unstable_NormalPriority,
    Zn = r.unstable_LowPriority,
    Ln = r.unstable_IdlePriority,
    ih = r.log,
    uh = r.unstable_setDisableYieldValue,
    Ga = null,
    nt = null;
  function ll(e) {
    if (
      (typeof ih == "function" && uh(e),
      nt && typeof nt.setStrictMode == "function")
    )
      try {
        nt.setStrictMode(Ga, e);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : fh,
    sh = Math.log,
    rh = Math.LN2;
  function fh(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((sh(e) / rh) | 0)) | 0);
  }
  var Vn = 256,
    Jn = 4194304;
  function El(e) {
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
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
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
  function Fn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      c = e.suspendedLanes,
      u = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~c),
          a !== 0
            ? (n = El(a))
            : ((u &= s),
              u !== 0
                ? (n = El(u))
                : l || ((l = s & ~e), l !== 0 && (n = El(l)))))
        : ((s = a & ~c),
          s !== 0
            ? (n = El(s))
            : u !== 0
              ? (n = El(u))
              : l || ((l = a & ~e), l !== 0 && (n = El(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & c) === 0 &&
            ((c = n & -n),
            (l = t & -t),
            c >= l || (c === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Ya(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function oh(e, t) {
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
  function Ys() {
    var e = Vn;
    return ((Vn <<= 1), (Vn & 4194048) === 0 && (Vn = 256), e);
  }
  function Qs() {
    var e = Jn;
    return ((Jn <<= 1), (Jn & 62914560) === 0 && (Jn = 4194304), e);
  }
  function di(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Qa(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function dh(e, t, l, a, n, c) {
    var u = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var s = e.entanglements,
      o = e.expirationTimes,
      x = e.hiddenUpdates;
    for (l = u & ~l; 0 < l; ) {
      var N = 31 - ct(l),
        A = 1 << N;
      ((s[N] = 0), (o[N] = -1));
      var g = x[N];
      if (g !== null)
        for (x[N] = null, N = 0; N < g.length; N++) {
          var v = g[N];
          v !== null && (v.lane &= -536870913);
        }
      l &= ~A;
    }
    (a !== 0 && Xs(e, a, 0),
      c !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(u & ~t)));
  }
  function Xs(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - ct(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090)));
  }
  function Ks(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - ct(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function hi(e) {
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
  function mi(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Zs() {
    var e = R.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : wd(e.type));
  }
  function hh(e, t) {
    var l = R.p;
    try {
      return ((R.p = e), t());
    } finally {
      R.p = l;
    }
  }
  var al = Math.random().toString(36).slice(2),
    Ze = "__reactFiber$" + al,
    We = "__reactProps$" + al,
    $l = "__reactContainer$" + al,
    pi = "__reactEvents$" + al,
    mh = "__reactListeners$" + al,
    ph = "__reactHandles$" + al,
    Ls = "__reactResources$" + al,
    Xa = "__reactMarker$" + al;
  function bi(e) {
    (delete e[Ze], delete e[We], delete e[pi], delete e[mh], delete e[ph]);
  }
  function Wl(e) {
    var t = e[Ze];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[$l] || l[Ze])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = od(e); e !== null; ) {
            if ((l = e[Ze])) return l;
            e = od(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function Pl(e) {
    if ((e = e[Ze] || e[$l])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ka(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Il(e) {
    var t = e[Ls];
    return (
      t ||
        (t = e[Ls] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function _e(e) {
    e[Xa] = !0;
  }
  var Vs = new Set(),
    Js = {};
  function zl(e, t) {
    (ea(e, t), ea(e + "Capture", t));
  }
  function ea(e, t) {
    for (Js[e] = t, e = 0; e < t.length; e++) Vs.add(t[e]);
  }
  var bh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Fs = {},
    $s = {};
  function xh(e) {
    return Fl.call($s, e)
      ? !0
      : Fl.call(Fs, e)
        ? !1
        : bh.test(e)
          ? ($s[e] = !0)
          : ((Fs[e] = !0), !1);
  }
  function $n(e, t, l) {
    if (xh(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Wn(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Bt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  var xi, Ws;
  function ta(e) {
    if (xi === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((xi = (t && t[1]) || ""),
          (Ws =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      xi +
      e +
      Ws
    );
  }
  var yi = !1;
  function gi(e, t) {
    if (!e || yi) return "";
    yi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var A = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(A.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(A, []);
                } catch (v) {
                  var g = v;
                }
                Reflect.construct(e, [], A);
              } else {
                try {
                  A.call();
                } catch (v) {
                  g = v;
                }
                e.call(A.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (v) {
                g = v;
              }
              (A = e()) &&
                typeof A.catch == "function" &&
                A.catch(function () {});
            }
          } catch (v) {
            if (v && g && typeof v.stack == "string") return [v.stack, g.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = a.DetermineComponentFrameRoot(),
        u = c[0],
        s = c[1];
      if (u && s) {
        var o = u.split(`
`),
          x = s.split(`
`);
        for (
          n = a = 0;
          a < o.length && !o[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < x.length && !x[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === o.length || n === x.length)
          for (
            a = o.length - 1, n = x.length - 1;
            1 <= a && 0 <= n && o[a] !== x[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (o[a] !== x[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || o[a] !== x[n])) {
                  var N =
                    `
` + o[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((yi = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? ta(l) : "";
  }
  function yh(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ta(e.type);
      case 16:
        return ta("Lazy");
      case 13:
        return ta("Suspense");
      case 19:
        return ta("SuspenseList");
      case 0:
      case 15:
        return gi(e.type, !1);
      case 11:
        return gi(e.type.render, !1);
      case 1:
        return gi(e.type, !0);
      case 31:
        return ta("Activity");
      default:
        return "";
    }
  }
  function Ps(e) {
    try {
      var t = "";
      do ((t += yh(e)), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function pt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Is(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function gh(e) {
    var t = Is(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        c = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (u) {
            ((a = "" + u), c.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (u) {
            a = "" + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Pn(e) {
    e._valueTracker || (e._valueTracker = gh(e));
  }
  function er(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = Is(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function In(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var vh = /[\n"\\]/g;
  function bt(e) {
    return e.replace(vh, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function vi(e, t, l, a, n, c, u, s) {
    ((e.name = ""),
      u != null &&
      typeof u != "function" &&
      typeof u != "symbol" &&
      typeof u != "boolean"
        ? (e.type = u)
        : e.removeAttribute("type"),
      t != null
        ? u === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + pt(t))
          : e.value !== "" + pt(t) && (e.value = "" + pt(t))
        : (u !== "submit" && u !== "reset") || e.removeAttribute("value"),
      t != null
        ? Si(e, u, pt(t))
        : l != null
          ? Si(e, u, pt(l))
          : a != null && e.removeAttribute("value"),
      n == null && c != null && (e.defaultChecked = !!c),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + pt(s))
        : e.removeAttribute("name"));
  }
  function tr(e, t, l, a, n, c, u, s) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.type = c),
      t != null || l != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || t != null)) return;
      ((l = l != null ? "" + pt(l) : ""),
        (t = t != null ? "" + pt(t) : l),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = s ? e.checked : !!a),
      (e.defaultChecked = !!a),
      u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.name = u));
  }
  function Si(e, t, l) {
    (t === "number" && In(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function la(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + pt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function lr(e, t, l) {
    if (
      t != null &&
      ((t = "" + pt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + pt(l) : "";
  }
  function ar(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(d(92));
        if (Oe(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = pt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a));
  }
  function aa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Sh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function nr(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || Sh.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function cr(e, t, l) {
    if (t != null && typeof t != "object") throw Error(d(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && nr(e, n, a));
    } else for (var c in t) t.hasOwnProperty(c) && nr(e, c, t[c]);
  }
  function ji(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Nh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ec(e) {
    return Nh.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Ni = null;
  function ki(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var na = null,
    ca = null;
  function ir(e) {
    var t = Pl(e);
    if (t && (e = t.stateNode)) {
      var l = e[We] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (vi(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + bt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[We] || null;
                if (!n) throw Error(d(90));
                vi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && er(a));
          }
          break e;
        case "textarea":
          lr(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && la(e, !!l.multiple, t, !1));
      }
    }
  }
  var Ai = !1;
  function ur(e, t, l) {
    if (Ai) return e(t, l);
    Ai = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ai = !1),
        (na !== null || ca !== null) &&
          (Bc(), na && ((t = na), (e = ca), (ca = na = null), ir(t), e)))
      )
        for (t = 0; t < e.length; t++) ir(e[t]);
    }
  }
  function Za(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[We] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(d(231, t, typeof l));
    return l;
  }
  var Gt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    wi = !1;
  if (Gt)
    try {
      var La = {};
      (Object.defineProperty(La, "passive", {
        get: function () {
          wi = !0;
        },
      }),
        window.addEventListener("test", La, La),
        window.removeEventListener("test", La, La));
    } catch {
      wi = !1;
    }
  var nl = null,
    Ti = null,
    tc = null;
  function sr() {
    if (tc) return tc;
    var e,
      t = Ti,
      l = t.length,
      a,
      n = "value" in nl ? nl.value : nl.textContent,
      c = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var u = l - e;
    for (a = 1; a <= u && t[l - a] === n[c - a]; a++);
    return (tc = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function lc(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ac() {
    return !0;
  }
  function rr() {
    return !1;
  }
  function Pe(e) {
    function t(l, a, n, c, u) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = c),
        (this.target = u),
        (this.currentTarget = null));
      for (var s in e)
        e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(c) : c[s]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? ac
          : rr),
        (this.isPropagationStopped = rr),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = ac));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = ac));
        },
        persist: function () {},
        isPersistent: ac,
      }),
      t
    );
  }
  var Ml = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    nc = Pe(Ml),
    Va = C({}, Ml, { view: 0, detail: 0 }),
    kh = Pe(Va),
    Ei,
    zi,
    Ja,
    cc = C({}, Va, {
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
      getModifierState: Oi,
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
        return "movementX" in e
          ? e.movementX
          : (e !== Ja &&
              (Ja && e.type === "mousemove"
                ? ((Ei = e.screenX - Ja.screenX), (zi = e.screenY - Ja.screenY))
                : (zi = Ei = 0),
              (Ja = e)),
            Ei);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : zi;
      },
    }),
    fr = Pe(cc),
    Ah = C({}, cc, { dataTransfer: 0 }),
    wh = Pe(Ah),
    Th = C({}, Va, { relatedTarget: 0 }),
    Mi = Pe(Th),
    Eh = C({}, Ml, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zh = Pe(Eh),
    Mh = C({}, Ml, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Oh = Pe(Mh),
    Dh = C({}, Ml, { data: 0 }),
    or = Pe(Dh),
    Ch = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Rh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    _h = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Uh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = _h[e])
        ? !!t[e]
        : !1;
  }
  function Oi() {
    return Uh;
  }
  var Hh = C({}, Va, {
      key: function (e) {
        if (e.key) {
          var t = Ch[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = lc(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Rh[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Oi,
      charCode: function (e) {
        return e.type === "keypress" ? lc(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? lc(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    qh = Pe(Hh),
    Bh = C({}, cc, {
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
    dr = Pe(Bh),
    Gh = C({}, Va, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Oi,
    }),
    Yh = Pe(Gh),
    Qh = C({}, Ml, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xh = Pe(Qh),
    Kh = C({}, cc, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Zh = Pe(Kh),
    Lh = C({}, Ml, { newState: 0, oldState: 0 }),
    Vh = Pe(Lh),
    Jh = [9, 13, 27, 32],
    Di = Gt && "CompositionEvent" in window,
    Fa = null;
  Gt && "documentMode" in document && (Fa = document.documentMode);
  var Fh = Gt && "TextEvent" in window && !Fa,
    hr = Gt && (!Di || (Fa && 8 < Fa && 11 >= Fa)),
    mr = " ",
    pr = !1;
  function br(e, t) {
    switch (e) {
      case "keyup":
        return Jh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xr(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var ia = !1;
  function $h(e, t) {
    switch (e) {
      case "compositionend":
        return xr(t);
      case "keypress":
        return t.which !== 32 ? null : ((pr = !0), mr);
      case "textInput":
        return ((e = t.data), e === mr && pr ? null : e);
      default:
        return null;
    }
  }
  function Wh(e, t) {
    if (ia)
      return e === "compositionend" || (!Di && br(e, t))
        ? ((e = sr()), (tc = Ti = nl = null), (ia = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return hr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ph = {
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
  function yr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ph[e.type] : t === "textarea";
  }
  function gr(e, t, l, a) {
    (na ? (ca ? ca.push(a) : (ca = [a])) : (na = a),
      (t = Zc(t, "onChange")),
      0 < t.length &&
        ((l = new nc("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var $a = null,
    Wa = null;
  function Ih(e) {
    td(e, 0);
  }
  function ic(e) {
    var t = Ka(e);
    if (er(t)) return e;
  }
  function vr(e, t) {
    if (e === "change") return t;
  }
  var Sr = !1;
  if (Gt) {
    var Ci;
    if (Gt) {
      var Ri = "oninput" in document;
      if (!Ri) {
        var jr = document.createElement("div");
        (jr.setAttribute("oninput", "return;"),
          (Ri = typeof jr.oninput == "function"));
      }
      Ci = Ri;
    } else Ci = !1;
    Sr = Ci && (!document.documentMode || 9 < document.documentMode);
  }
  function Nr() {
    $a && ($a.detachEvent("onpropertychange", kr), (Wa = $a = null));
  }
  function kr(e) {
    if (e.propertyName === "value" && ic(Wa)) {
      var t = [];
      (gr(t, Wa, e, ki(e)), ur(Ih, t));
    }
  }
  function em(e, t, l) {
    e === "focusin"
      ? (Nr(), ($a = t), (Wa = l), $a.attachEvent("onpropertychange", kr))
      : e === "focusout" && Nr();
  }
  function tm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ic(Wa);
  }
  function lm(e, t) {
    if (e === "click") return ic(t);
  }
  function am(e, t) {
    if (e === "input" || e === "change") return ic(t);
  }
  function nm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var it = typeof Object.is == "function" ? Object.is : nm;
  function Pa(e, t) {
    if (it(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Fl.call(t, n) || !it(e[n], t[n])) return !1;
    }
    return !0;
  }
  function Ar(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wr(e, t) {
    var l = Ar(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ar(l);
    }
  }
  function Tr(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Tr(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Er(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = In(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = In(e.document);
    }
    return t;
  }
  function _i(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var cm = Gt && "documentMode" in document && 11 >= document.documentMode,
    ua = null,
    Ui = null,
    Ia = null,
    Hi = !1;
  function zr(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Hi ||
      ua == null ||
      ua !== In(a) ||
      ((a = ua),
      "selectionStart" in a && _i(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ia && Pa(Ia, a)) ||
        ((Ia = a),
        (a = Zc(Ui, "onSelect")),
        0 < a.length &&
          ((t = new nc("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = ua))));
  }
  function Ol(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var sa = {
      animationend: Ol("Animation", "AnimationEnd"),
      animationiteration: Ol("Animation", "AnimationIteration"),
      animationstart: Ol("Animation", "AnimationStart"),
      transitionrun: Ol("Transition", "TransitionRun"),
      transitionstart: Ol("Transition", "TransitionStart"),
      transitioncancel: Ol("Transition", "TransitionCancel"),
      transitionend: Ol("Transition", "TransitionEnd"),
    },
    qi = {},
    Mr = {};
  Gt &&
    ((Mr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete sa.animationend.animation,
      delete sa.animationiteration.animation,
      delete sa.animationstart.animation),
    "TransitionEvent" in window || delete sa.transitionend.transition);
  function Dl(e) {
    if (qi[e]) return qi[e];
    if (!sa[e]) return e;
    var t = sa[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Mr) return (qi[e] = t[l]);
    return e;
  }
  var Or = Dl("animationend"),
    Dr = Dl("animationiteration"),
    Cr = Dl("animationstart"),
    im = Dl("transitionrun"),
    um = Dl("transitionstart"),
    sm = Dl("transitioncancel"),
    Rr = Dl("transitionend"),
    _r = new Map(),
    Bi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Bi.push("scrollEnd");
  function At(e, t) {
    (_r.set(e, t), zl(t, [e]));
  }
  var Ur = new WeakMap();
  function xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Ur.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Ps(t) }), Ur.set(e, t), t);
    }
    return { value: e, source: t, stack: Ps(t) };
  }
  var yt = [],
    ra = 0,
    Gi = 0;
  function uc() {
    for (var e = ra, t = (Gi = ra = 0); t < e; ) {
      var l = yt[t];
      yt[t++] = null;
      var a = yt[t];
      yt[t++] = null;
      var n = yt[t];
      yt[t++] = null;
      var c = yt[t];
      if (((yt[t++] = null), a !== null && n !== null)) {
        var u = a.pending;
        (u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
          (a.pending = n));
      }
      c !== 0 && Hr(l, n, c);
    }
  }
  function sc(e, t, l, a) {
    ((yt[ra++] = e),
      (yt[ra++] = t),
      (yt[ra++] = l),
      (yt[ra++] = a),
      (Gi |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Yi(e, t, l, a) {
    return (sc(e, t, l, a), rc(e));
  }
  function fa(e, t) {
    return (sc(e, null, null, t), rc(e));
  }
  function Hr(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, c = e.return; c !== null; )
      ((c.childLanes |= l),
        (a = c.alternate),
        a !== null && (a.childLanes |= l),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = c),
        (c = c.return));
    return e.tag === 3
      ? ((c = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ct(l)),
          (e = c.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        c)
      : null;
  }
  function rc(e) {
    if (50 < An) throw ((An = 0), (Vu = null), Error(d(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var oa = {};
  function rm(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
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
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ut(e, t, l, a) {
    return new rm(e, t, l, a);
  }
  function Qi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Yt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = ut(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function qr(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function fc(e, t, l, a, n, c) {
    var u = 0;
    if (((a = e), typeof e == "function")) Qi(e) && (u = 1);
    else if (typeof e == "string")
      u = op(e, l, Q.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Je:
          return (
            (e = ut(31, l, t, n)),
            (e.elementType = Je),
            (e.lanes = c),
            e
          );
        case W:
          return Cl(l.children, n, c, t);
        case Be:
          ((u = 8), (n |= 24));
          break;
        case Ke:
          return (
            (e = ut(12, l, t, n | 2)),
            (e.elementType = Ke),
            (e.lanes = c),
            e
          );
        case ae:
          return (
            (e = ut(13, l, t, n)),
            (e.elementType = ae),
            (e.lanes = c),
            e
          );
        case Ne:
          return (
            (e = ut(19, l, t, n)),
            (e.elementType = Ne),
            (e.lanes = c),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ht:
              case ze:
                u = 10;
                break e;
              case lt:
                u = 9;
                break e;
              case at:
                u = 11;
                break e;
              case we:
                u = 14;
                break e;
              case Re:
                ((u = 16), (a = null));
                break e;
            }
          ((u = 29),
            (l = Error(d(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = ut(u, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = c),
      t
    );
  }
  function Cl(e, t, l, a) {
    return ((e = ut(7, e, a, t)), (e.lanes = l), e);
  }
  function Xi(e, t, l) {
    return ((e = ut(6, e, null, t)), (e.lanes = l), e);
  }
  function Ki(e, t, l) {
    return (
      (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var da = [],
    ha = 0,
    oc = null,
    dc = 0,
    gt = [],
    vt = 0,
    Rl = null,
    Qt = 1,
    Xt = "";
  function _l(e, t) {
    ((da[ha++] = dc), (da[ha++] = oc), (oc = e), (dc = t));
  }
  function Br(e, t, l) {
    ((gt[vt++] = Qt), (gt[vt++] = Xt), (gt[vt++] = Rl), (Rl = e));
    var a = Qt;
    e = Xt;
    var n = 32 - ct(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var c = 32 - ct(t) + n;
    if (30 < c) {
      var u = n - (n % 5);
      ((c = (a & ((1 << u) - 1)).toString(32)),
        (a >>= u),
        (n -= u),
        (Qt = (1 << (32 - ct(t) + n)) | (l << n) | a),
        (Xt = c + e));
    } else ((Qt = (1 << c) | (l << n) | a), (Xt = e));
  }
  function Zi(e) {
    e.return !== null && (_l(e, 1), Br(e, 1, 0));
  }
  function Li(e) {
    for (; e === oc; )
      ((oc = da[--ha]), (da[ha] = null), (dc = da[--ha]), (da[ha] = null));
    for (; e === Rl; )
      ((Rl = gt[--vt]),
        (gt[vt] = null),
        (Xt = gt[--vt]),
        (gt[vt] = null),
        (Qt = gt[--vt]),
        (gt[vt] = null));
  }
  var $e = null,
    Se = null,
    se = !1,
    Ul = null,
    Ct = !1,
    Vi = Error(d(519));
  function Hl(e) {
    var t = Error(d(418, ""));
    throw (ln(xt(t, e)), Vi);
  }
  function Gr(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Ze] = e), (t[We] = a), l)) {
      case "dialog":
        (te("cancel", t), te("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        te("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Tn.length; l++) te(Tn[l], t);
        break;
      case "source":
        te("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (te("error", t), te("load", t));
        break;
      case "details":
        te("toggle", t);
        break;
      case "input":
        (te("invalid", t),
          tr(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          Pn(t));
        break;
      case "select":
        te("invalid", t);
        break;
      case "textarea":
        (te("invalid", t), ar(t, a.value, a.defaultValue, a.children), Pn(t));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      cd(t.textContent, l)
        ? (a.popover != null && (te("beforetoggle", t), te("toggle", t)),
          a.onScroll != null && te("scroll", t),
          a.onScrollEnd != null && te("scrollend", t),
          a.onClick != null && (t.onclick = Lc),
          (t = !0))
        : (t = !1),
      t || Hl(e));
  }
  function Yr(e) {
    for ($e = e.return; $e; )
      switch ($e.tag) {
        case 5:
        case 13:
          Ct = !1;
          return;
        case 27:
        case 3:
          Ct = !0;
          return;
        default:
          $e = $e.return;
      }
  }
  function en(e) {
    if (e !== $e) return !1;
    if (!se) return (Yr(e), (se = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || rs(e.type, e.memoizedProps))),
        (l = !l)),
      l && Se && Hl(e),
      Yr(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(d(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                Se = Tt(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        Se = null;
      }
    } else
      t === 27
        ? ((t = Se), vl(e.type) ? ((e = hs), (hs = null), (Se = e)) : (Se = t))
        : (Se = $e ? Tt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function tn() {
    ((Se = $e = null), (se = !1));
  }
  function Qr() {
    var e = Ul;
    return (
      e !== null &&
        (tt === null ? (tt = e) : tt.push.apply(tt, e), (Ul = null)),
      e
    );
  }
  function ln(e) {
    Ul === null ? (Ul = [e]) : Ul.push(e);
  }
  var Ji = w(null),
    ql = null,
    Kt = null;
  function cl(e, t, l) {
    (_(Ji, t._currentValue), (t._currentValue = l));
  }
  function Zt(e) {
    ((e._currentValue = Ji.current), D(Ji));
  }
  function Fi(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function $i(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var c = n.dependencies;
      if (c !== null) {
        var u = n.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var s = c;
          c = n;
          for (var o = 0; o < t.length; o++)
            if (s.context === t[o]) {
              ((c.lanes |= l),
                (s = c.alternate),
                s !== null && (s.lanes |= l),
                Fi(c.return, l, e),
                a || (u = null));
              break e;
            }
          c = s.next;
        }
      } else if (n.tag === 18) {
        if (((u = n.return), u === null)) throw Error(d(341));
        ((u.lanes |= l),
          (c = u.alternate),
          c !== null && (c.lanes |= l),
          Fi(u, l, e),
          (u = null));
      } else u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (((n = u.sibling), n !== null)) {
            ((n.return = u.return), (u = n));
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function an(e, t, l, a) {
    e = null;
    for (var n = t, c = !1; n !== null; ) {
      if (!c) {
        if ((n.flags & 524288) !== 0) c = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(d(387));
        if (((u = u.memoizedProps), u !== null)) {
          var s = n.type;
          it(n.pendingProps.value, u.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (n === Fe.current) {
        if (((u = n.alternate), u === null)) throw Error(d(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Cn) : (e = [Cn]));
      }
      n = n.return;
    }
    (e !== null && $i(t, e, l, a), (t.flags |= 262144));
  }
  function hc(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!it(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Bl(e) {
    ((ql = e),
      (Kt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Le(e) {
    return Xr(ql, e);
  }
  function mc(e, t) {
    return (ql === null && Bl(e), Xr(e, t));
  }
  function Xr(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Kt === null)) {
      if (e === null) throw Error(d(308));
      ((Kt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Kt = Kt.next = t;
    return l;
  }
  var fm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    om = r.unstable_scheduleCallback,
    dm = r.unstable_NormalPriority,
    De = {
      $$typeof: ze,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Wi() {
    return { controller: new fm(), data: new Map(), refCount: 0 };
  }
  function nn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        om(dm, function () {
          e.controller.abort();
        }));
  }
  var cn = null,
    Pi = 0,
    ma = 0,
    pa = null;
  function hm(e, t) {
    if (cn === null) {
      var l = (cn = []);
      ((Pi = 0),
        (ma = es()),
        (pa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (Pi++, t.then(Kr, Kr), t);
  }
  function Kr() {
    if (--Pi === 0 && cn !== null) {
      pa !== null && (pa.status = "fulfilled");
      var e = cn;
      ((cn = null), (ma = 0), (pa = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function mm(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var Zr = j.S;
  j.S = function (e, t) {
    (typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      hm(e, t),
      Zr !== null && Zr(e, t));
  };
  var Gl = w(null);
  function Ii() {
    var e = Gl.current;
    return e !== null ? e : be.pooledCache;
  }
  function pc(e, t) {
    t === null ? _(Gl, Gl.current) : _(Gl, t.pool);
  }
  function Lr() {
    var e = Ii();
    return e === null ? null : { parent: De._currentValue, pool: e };
  }
  var un = Error(d(460)),
    Vr = Error(d(474)),
    bc = Error(d(542)),
    eu = { then: function () {} };
  function Jr(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function xc() {}
  function Fr(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(xc, xc), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Wr(e), e);
      default:
        if (typeof t.status == "string") t.then(xc, xc);
        else {
          if (((e = be), e !== null && 100 < e.shellSuspendCounter))
            throw Error(d(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Wr(e), e);
        }
        throw ((sn = t), un);
    }
  }
  var sn = null;
  function $r() {
    if (sn === null) throw Error(d(459));
    var e = sn;
    return ((sn = null), e);
  }
  function Wr(e) {
    if (e === un || e === bc) throw Error(d(483));
  }
  var il = !1;
  function tu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function lu(e, t) {
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
  function ul(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (fe & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = rc(e)),
        Hr(e, null, l),
        t
      );
    }
    return (sc(e, a, t, l), rc(e));
  }
  function rn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Ks(e, l));
    }
  }
  function au(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        c = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var u = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (c === null ? (n = c = u) : (c = c.next = u), (l = l.next));
        } while (l !== null);
        c === null ? (n = c = t) : (c = c.next = t);
      } else n = c = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var nu = !1;
  function fn() {
    if (nu) {
      var e = pa;
      if (e !== null) throw e;
    }
  }
  function on(e, t, l, a) {
    nu = !1;
    var n = e.updateQueue;
    il = !1;
    var c = n.firstBaseUpdate,
      u = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var o = s,
        x = o.next;
      ((o.next = null), u === null ? (c = x) : (u.next = x), (u = o));
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (s = N.lastBaseUpdate),
        s !== u &&
          (s === null ? (N.firstBaseUpdate = x) : (s.next = x),
          (N.lastBaseUpdate = o)));
    }
    if (c !== null) {
      var A = n.baseState;
      ((u = 0), (N = x = o = null), (s = c));
      do {
        var g = s.lane & -536870913,
          v = g !== s.lane;
        if (v ? (ie & g) === g : (a & g) === g) {
          (g !== 0 && g === ma && (nu = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var L = e,
              X = s;
            g = t;
            var me = l;
            switch (X.tag) {
              case 1:
                if (((L = X.payload), typeof L == "function")) {
                  A = L.call(me, A, g);
                  break e;
                }
                A = L;
                break e;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = X.payload),
                  (g = typeof L == "function" ? L.call(me, A, g) : L),
                  g == null)
                )
                  break e;
                A = C({}, A, g);
                break e;
              case 2:
                il = !0;
            }
          }
          ((g = s.callback),
            g !== null &&
              ((e.flags |= 64),
              v && (e.flags |= 8192),
              (v = n.callbacks),
              v === null ? (n.callbacks = [g]) : v.push(g)));
        } else
          ((v = {
            lane: g,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            N === null ? ((x = N = v), (o = A)) : (N = N.next = v),
            (u |= g));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((v = s),
            (s = v.next),
            (v.next = null),
            (n.lastBaseUpdate = v),
            (n.shared.pending = null));
        }
      } while (!0);
      (N === null && (o = A),
        (n.baseState = o),
        (n.firstBaseUpdate = x),
        (n.lastBaseUpdate = N),
        c === null && (n.shared.lanes = 0),
        (bl |= u),
        (e.lanes = u),
        (e.memoizedState = A));
    }
  }
  function Pr(e, t) {
    if (typeof e != "function") throw Error(d(191, e));
    e.call(t);
  }
  function Ir(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Pr(l[e], t);
  }
  var ba = w(null),
    yc = w(0);
  function ef(e, t) {
    ((e = Pt), _(yc, e), _(ba, t), (Pt = e | t.baseLanes));
  }
  function cu() {
    (_(yc, Pt), _(ba, ba.current));
  }
  function iu() {
    ((Pt = yc.current), D(ba), D(yc));
  }
  var rl = 0,
    P = null,
    de = null,
    Te = null,
    gc = !1,
    xa = !1,
    Yl = !1,
    vc = 0,
    dn = 0,
    ya = null,
    pm = 0;
  function ke() {
    throw Error(d(321));
  }
  function uu(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!it(e[l], t[l])) return !1;
    return !0;
  }
  function su(e, t, l, a, n, c) {
    return (
      (rl = c),
      (P = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (j.H = e === null || e.memoizedState === null ? qf : Bf),
      (Yl = !1),
      (c = l(a, n)),
      (Yl = !1),
      xa && (c = lf(t, l, a, n)),
      tf(e),
      c
    );
  }
  function tf(e) {
    j.H = wc;
    var t = de !== null && de.next !== null;
    if (((rl = 0), (Te = de = P = null), (gc = !1), (dn = 0), (ya = null), t))
      throw Error(d(300));
    e === null ||
      Ue ||
      ((e = e.dependencies), e !== null && hc(e) && (Ue = !0));
  }
  function lf(e, t, l, a) {
    P = e;
    var n = 0;
    do {
      if ((xa && (ya = null), (dn = 0), (xa = !1), 25 <= n))
        throw Error(d(301));
      if (((n += 1), (Te = de = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((j.H = jm), (c = t(l, a)));
    } while (xa);
    return c;
  }
  function bm() {
    var e = j.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? hn(t) : t),
      (e = e.useState()[0]),
      (de !== null ? de.memoizedState : null) !== e && (P.flags |= 1024),
      t
    );
  }
  function ru() {
    var e = vc !== 0;
    return ((vc = 0), e);
  }
  function fu(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function ou(e) {
    if (gc) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      gc = !1;
    }
    ((rl = 0), (Te = de = P = null), (xa = !1), (dn = vc = 0), (ya = null));
  }
  function Ie() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Te === null ? (P.memoizedState = Te = e) : (Te = Te.next = e), Te);
  }
  function Ee() {
    if (de === null) {
      var e = P.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = Te === null ? P.memoizedState : Te.next;
    if (t !== null) ((Te = t), (de = e));
    else {
      if (e === null)
        throw P.alternate === null ? Error(d(467)) : Error(d(310));
      ((de = e),
        (e = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null,
        }),
        Te === null ? (P.memoizedState = Te = e) : (Te = Te.next = e));
    }
    return Te;
  }
  function du() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function hn(e) {
    var t = dn;
    return (
      (dn += 1),
      ya === null && (ya = []),
      (e = Fr(ya, e, t)),
      (t = P),
      (Te === null ? t.memoizedState : Te.next) === null &&
        ((t = t.alternate),
        (j.H = t === null || t.memoizedState === null ? qf : Bf)),
      e
    );
  }
  function Sc(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return hn(e);
      if (e.$$typeof === ze) return Le(e);
    }
    throw Error(d(438, String(e)));
  }
  function hu(e) {
    var t = null,
      l = P.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = P.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = du()), (P.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = tl;
    return (t.index++, l);
  }
  function Lt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function jc(e) {
    var t = Ee();
    return mu(t, de, e);
  }
  function mu(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      c = a.pending;
    if (c !== null) {
      if (n !== null) {
        var u = n.next;
        ((n.next = c.next), (c.next = u));
      }
      ((t.baseQueue = n = c), (a.pending = null));
    }
    if (((c = e.baseState), n === null)) e.memoizedState = c;
    else {
      t = n.next;
      var s = (u = null),
        o = null,
        x = t,
        N = !1;
      do {
        var A = x.lane & -536870913;
        if (A !== x.lane ? (ie & A) === A : (rl & A) === A) {
          var g = x.revertLane;
          if (g === 0)
            (o !== null &&
              (o = o.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: x.action,
                  hasEagerState: x.hasEagerState,
                  eagerState: x.eagerState,
                  next: null,
                }),
              A === ma && (N = !0));
          else if ((rl & g) === g) {
            ((x = x.next), g === ma && (N = !0));
            continue;
          } else
            ((A = {
              lane: 0,
              revertLane: x.revertLane,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null,
            }),
              o === null ? ((s = o = A), (u = c)) : (o = o.next = A),
              (P.lanes |= g),
              (bl |= g));
          ((A = x.action),
            Yl && l(c, A),
            (c = x.hasEagerState ? x.eagerState : l(c, A)));
        } else
          ((g = {
            lane: A,
            revertLane: x.revertLane,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          }),
            o === null ? ((s = o = g), (u = c)) : (o = o.next = g),
            (P.lanes |= A),
            (bl |= A));
        x = x.next;
      } while (x !== null && x !== t);
      if (
        (o === null ? (u = c) : (o.next = s),
        !it(c, e.memoizedState) && ((Ue = !0), N && ((l = pa), l !== null)))
      )
        throw l;
      ((e.memoizedState = c),
        (e.baseState = u),
        (e.baseQueue = o),
        (a.lastRenderedState = c));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function pu(e) {
    var t = Ee(),
      l = t.queue;
    if (l === null) throw Error(d(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      c = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var u = (n = n.next);
      do ((c = e(c, u.action)), (u = u.next));
      while (u !== n);
      (it(c, t.memoizedState) || (Ue = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (l.lastRenderedState = c));
    }
    return [c, a];
  }
  function af(e, t, l) {
    var a = P,
      n = Ee(),
      c = se;
    if (c) {
      if (l === void 0) throw Error(d(407));
      l = l();
    } else l = t();
    var u = !it((de || n).memoizedState, l);
    (u && ((n.memoizedState = l), (Ue = !0)), (n = n.queue));
    var s = uf.bind(null, a, n, e);
    if (
      (mn(2048, 8, s, [e]),
      n.getSnapshot !== t || u || (Te !== null && Te.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ga(9, Nc(), cf.bind(null, a, n, l, t), null),
        be === null)
      )
        throw Error(d(349));
      c || (rl & 124) !== 0 || nf(a, t, l);
    }
    return l;
  }
  function nf(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = P.updateQueue),
      t === null
        ? ((t = du()), (P.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function cf(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), sf(t) && rf(e));
  }
  function uf(e, t, l) {
    return l(function () {
      sf(t) && rf(e);
    });
  }
  function sf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !it(e, l);
    } catch {
      return !0;
    }
  }
  function rf(e) {
    var t = fa(e, 2);
    t !== null && dt(t, e, 2);
  }
  function bu(e) {
    var t = Ie();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Yl)) {
        ll(!0);
        try {
          l();
        } finally {
          ll(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function ff(e, t, l, a) {
    return ((e.baseState = l), mu(e, de, typeof a == "function" ? a : Lt));
  }
  function xm(e, t, l, a, n) {
    if (Ac(e)) throw Error(d(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (u) {
          c.listeners.push(u);
        },
      };
      (j.T !== null ? l(!0) : (c.isTransition = !1),
        a(c),
        (l = t.pending),
        l === null
          ? ((c.next = t.pending = c), of(t, c))
          : ((c.next = l.next), (t.pending = l.next = c)));
    }
  }
  function of(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var c = j.T,
        u = {};
      j.T = u;
      try {
        var s = l(n, a),
          o = j.S;
        (o !== null && o(u, s), df(e, t, s));
      } catch (x) {
        xu(e, t, x);
      } finally {
        j.T = c;
      }
    } else
      try {
        ((c = l(n, a)), df(e, t, c));
      } catch (x) {
        xu(e, t, x);
      }
  }
  function df(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            hf(e, t, a);
          },
          function (a) {
            return xu(e, t, a);
          },
        )
      : hf(e, t, l);
  }
  function hf(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      mf(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), of(e, l))));
  }
  function xu(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = l), mf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function mf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function pf(e, t) {
    return t;
  }
  function bf(e, t) {
    if (se) {
      var l = be.formState;
      if (l !== null) {
        e: {
          var a = P;
          if (se) {
            if (Se) {
              t: {
                for (var n = Se, c = Ct; n.nodeType !== 8; ) {
                  if (!c) {
                    n = null;
                    break t;
                  }
                  if (((n = Tt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((c = n.data), (n = c === "F!" || c === "F" ? n : null));
              }
              if (n) {
                ((Se = Tt(n.nextSibling)), (a = n.data === "F!"));
                break e;
              }
            }
            Hl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = Ie()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pf,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = _f.bind(null, P, a)),
      (a.dispatch = l),
      (a = bu(!1)),
      (c = ju.bind(null, P, !1, a.queue)),
      (a = Ie()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = xm.bind(null, P, n, c, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function xf(e) {
    var t = Ee();
    return yf(t, de, e);
  }
  function yf(e, t, l) {
    if (
      ((t = mu(e, t, pf)[0]),
      (e = jc(Lt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = hn(t);
      } catch (u) {
        throw u === un ? bc : u;
      }
    else a = t;
    t = Ee();
    var n = t.queue,
      c = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((P.flags |= 2048), ga(9, Nc(), ym.bind(null, n, l), null)),
      [a, c, e]
    );
  }
  function ym(e, t) {
    e.action = t;
  }
  function gf(e) {
    var t = Ee(),
      l = de;
    if (l !== null) return yf(t, l, e);
    (Ee(), (t = t.memoizedState), (l = Ee()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function ga(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = P.updateQueue),
      t === null && ((t = du()), (P.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Nc() {
    return { destroy: void 0, resource: void 0 };
  }
  function vf() {
    return Ee().memoizedState;
  }
  function kc(e, t, l, a) {
    var n = Ie();
    ((a = a === void 0 ? null : a),
      (P.flags |= e),
      (n.memoizedState = ga(1 | t, Nc(), l, a)));
  }
  function mn(e, t, l, a) {
    var n = Ee();
    a = a === void 0 ? null : a;
    var c = n.memoizedState.inst;
    de !== null && a !== null && uu(a, de.memoizedState.deps)
      ? (n.memoizedState = ga(t, c, l, a))
      : ((P.flags |= e), (n.memoizedState = ga(1 | t, c, l, a)));
  }
  function Sf(e, t) {
    kc(8390656, 8, e, t);
  }
  function jf(e, t) {
    mn(2048, 8, e, t);
  }
  function Nf(e, t) {
    return mn(4, 2, e, t);
  }
  function kf(e, t) {
    return mn(4, 4, e, t);
  }
  function Af(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
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
  function wf(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), mn(4, 4, Af.bind(null, t, e), l));
  }
  function yu() {}
  function Tf(e, t) {
    var l = Ee();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && uu(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Ef(e, t) {
    var l = Ee();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && uu(t, a[1])) return a[0];
    if (((a = e()), Yl)) {
      ll(!0);
      try {
        e();
      } finally {
        ll(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function gu(e, t, l) {
    return l === void 0 || (rl & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Do()), (P.lanes |= e), (bl |= e), l);
  }
  function zf(e, t, l, a) {
    return it(l, t)
      ? l
      : ba.current !== null
        ? ((e = gu(e, l, a)), it(e, t) || (Ue = !0), e)
        : (rl & 42) === 0
          ? ((Ue = !0), (e.memoizedState = l))
          : ((e = Do()), (P.lanes |= e), (bl |= e), t);
  }
  function Mf(e, t, l, a, n) {
    var c = R.p;
    R.p = c !== 0 && 8 > c ? c : 8;
    var u = j.T,
      s = {};
    ((j.T = s), ju(e, !1, t, l));
    try {
      var o = n(),
        x = j.S;
      if (
        (x !== null && x(s, o),
        o !== null && typeof o == "object" && typeof o.then == "function")
      ) {
        var N = mm(o, a);
        pn(e, t, N, ot(e));
      } else pn(e, t, a, ot(e));
    } catch (A) {
      pn(e, t, { then: function () {}, status: "rejected", reason: A }, ot());
    } finally {
      ((R.p = c), (j.T = u));
    }
  }
  function gm() {}
  function vu(e, t, l, a) {
    if (e.tag !== 5) throw Error(d(476));
    var n = Of(e).queue;
    Mf(
      e,
      n,
      t,
      Y,
      l === null
        ? gm
        : function () {
            return (Df(e), l(a));
          },
    );
  }
  function Of(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lt,
        lastRenderedState: Y,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Lt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Df(e) {
    var t = Of(e).next.queue;
    pn(e, t, {}, ot());
  }
  function Su() {
    return Le(Cn);
  }
  function Cf() {
    return Ee().memoizedState;
  }
  function Rf() {
    return Ee().memoizedState;
  }
  function vm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = ot();
          e = ul(l);
          var a = sl(t, e, l);
          (a !== null && (dt(a, t, l), rn(a, t, l)),
            (t = { cache: Wi() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Sm(e, t, l) {
    var a = ot();
    ((l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ac(e)
        ? Uf(t, l)
        : ((l = Yi(e, t, l, a)), l !== null && (dt(l, e, a), Hf(l, t, a))));
  }
  function _f(e, t, l) {
    var a = ot();
    pn(e, t, l, a);
  }
  function pn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ac(e)) Uf(t, n);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var u = t.lastRenderedState,
            s = c(u, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), it(s, u)))
            return (sc(e, t, n, 0), be === null && uc(), !1);
        } catch {
        } finally {
        }
      if (((l = Yi(e, t, n, a)), l !== null))
        return (dt(l, e, a), Hf(l, t, a), !0);
    }
    return !1;
  }
  function ju(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: es(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ac(e))
    ) {
      if (t) throw Error(d(479));
    } else ((t = Yi(e, l, a, 2)), t !== null && dt(t, e, 2));
  }
  function Ac(e) {
    var t = e.alternate;
    return e === P || (t !== null && t === P);
  }
  function Uf(e, t) {
    xa = gc = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function Hf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Ks(e, l));
    }
  }
  var wc = {
      readContext: Le,
      use: Sc,
      useCallback: ke,
      useContext: ke,
      useEffect: ke,
      useImperativeHandle: ke,
      useLayoutEffect: ke,
      useInsertionEffect: ke,
      useMemo: ke,
      useReducer: ke,
      useRef: ke,
      useState: ke,
      useDebugValue: ke,
      useDeferredValue: ke,
      useTransition: ke,
      useSyncExternalStore: ke,
      useId: ke,
      useHostTransitionStatus: ke,
      useFormState: ke,
      useActionState: ke,
      useOptimistic: ke,
      useMemoCache: ke,
      useCacheRefresh: ke,
    },
    qf = {
      readContext: Le,
      use: Sc,
      useCallback: function (e, t) {
        return ((Ie().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Le,
      useEffect: Sf,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          kc(4194308, 4, Af.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return kc(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        kc(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = Ie();
        t = t === void 0 ? null : t;
        var a = e();
        if (Yl) {
          ll(!0);
          try {
            e();
          } finally {
            ll(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = Ie();
        if (l !== void 0) {
          var n = l(t);
          if (Yl) {
            ll(!0);
            try {
              l(t);
            } finally {
              ll(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Sm.bind(null, P, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ie();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = bu(e);
        var t = e.queue,
          l = _f.bind(null, P, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: yu,
      useDeferredValue: function (e, t) {
        var l = Ie();
        return gu(l, e, t);
      },
      useTransition: function () {
        var e = bu(!1);
        return (
          (e = Mf.bind(null, P, e.queue, !0, !1)),
          (Ie().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = P,
          n = Ie();
        if (se) {
          if (l === void 0) throw Error(d(407));
          l = l();
        } else {
          if (((l = t()), be === null)) throw Error(d(349));
          (ie & 124) !== 0 || nf(a, t, l);
        }
        n.memoizedState = l;
        var c = { value: l, getSnapshot: t };
        return (
          (n.queue = c),
          Sf(uf.bind(null, a, c, e), [e]),
          (a.flags |= 2048),
          ga(9, Nc(), cf.bind(null, a, c, l, t), null),
          l
        );
      },
      useId: function () {
        var e = Ie(),
          t = be.identifierPrefix;
        if (se) {
          var l = Xt,
            a = Qt;
          ((l = (a & ~(1 << (32 - ct(a) - 1))).toString(32) + l),
            (t = "«" + t + "R" + l),
            (l = vc++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "»"));
        } else ((l = pm++), (t = "«" + t + "r" + l.toString(32) + "»"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Su,
      useFormState: bf,
      useActionState: bf,
      useOptimistic: function (e) {
        var t = Ie();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = ju.bind(null, P, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: hu,
      useCacheRefresh: function () {
        return (Ie().memoizedState = vm.bind(null, P));
      },
    },
    Bf = {
      readContext: Le,
      use: Sc,
      useCallback: Tf,
      useContext: Le,
      useEffect: jf,
      useImperativeHandle: wf,
      useInsertionEffect: Nf,
      useLayoutEffect: kf,
      useMemo: Ef,
      useReducer: jc,
      useRef: vf,
      useState: function () {
        return jc(Lt);
      },
      useDebugValue: yu,
      useDeferredValue: function (e, t) {
        var l = Ee();
        return zf(l, de.memoizedState, e, t);
      },
      useTransition: function () {
        var e = jc(Lt)[0],
          t = Ee().memoizedState;
        return [typeof e == "boolean" ? e : hn(e), t];
      },
      useSyncExternalStore: af,
      useId: Cf,
      useHostTransitionStatus: Su,
      useFormState: xf,
      useActionState: xf,
      useOptimistic: function (e, t) {
        var l = Ee();
        return ff(l, de, e, t);
      },
      useMemoCache: hu,
      useCacheRefresh: Rf,
    },
    jm = {
      readContext: Le,
      use: Sc,
      useCallback: Tf,
      useContext: Le,
      useEffect: jf,
      useImperativeHandle: wf,
      useInsertionEffect: Nf,
      useLayoutEffect: kf,
      useMemo: Ef,
      useReducer: pu,
      useRef: vf,
      useState: function () {
        return pu(Lt);
      },
      useDebugValue: yu,
      useDeferredValue: function (e, t) {
        var l = Ee();
        return de === null ? gu(l, e, t) : zf(l, de.memoizedState, e, t);
      },
      useTransition: function () {
        var e = pu(Lt)[0],
          t = Ee().memoizedState;
        return [typeof e == "boolean" ? e : hn(e), t];
      },
      useSyncExternalStore: af,
      useId: Cf,
      useHostTransitionStatus: Su,
      useFormState: gf,
      useActionState: gf,
      useOptimistic: function (e, t) {
        var l = Ee();
        return de !== null
          ? ff(l, de, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: hu,
      useCacheRefresh: Rf,
    },
    va = null,
    bn = 0;
  function Tc(e) {
    var t = bn;
    return ((bn += 1), va === null && (va = []), Fr(va, e, t));
  }
  function xn(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Ec(e, t) {
    throw t.$$typeof === le
      ? Error(d(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          d(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Gf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Yf(e) {
    function t(p, m) {
      if (e) {
        var b = p.deletions;
        b === null ? ((p.deletions = [m]), (p.flags |= 16)) : b.push(m);
      }
    }
    function l(p, m) {
      if (!e) return null;
      for (; m !== null; ) (t(p, m), (m = m.sibling));
      return null;
    }
    function a(p) {
      for (var m = new Map(); p !== null; )
        (p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
      return m;
    }
    function n(p, m) {
      return ((p = Yt(p, m)), (p.index = 0), (p.sibling = null), p);
    }
    function c(p, m, b) {
      return (
        (p.index = b),
        e
          ? ((b = p.alternate),
            b !== null
              ? ((b = b.index), b < m ? ((p.flags |= 67108866), m) : b)
              : ((p.flags |= 67108866), m))
          : ((p.flags |= 1048576), m)
      );
    }
    function u(p) {
      return (e && p.alternate === null && (p.flags |= 67108866), p);
    }
    function s(p, m, b, k) {
      return m === null || m.tag !== 6
        ? ((m = Xi(b, p.mode, k)), (m.return = p), m)
        : ((m = n(m, b)), (m.return = p), m);
    }
    function o(p, m, b, k) {
      var H = b.type;
      return H === W
        ? N(p, m, b.props.children, k, b.key)
        : m !== null &&
            (m.elementType === H ||
              (typeof H == "object" &&
                H !== null &&
                H.$$typeof === Re &&
                Gf(H) === m.type))
          ? ((m = n(m, b.props)), xn(m, b), (m.return = p), m)
          : ((m = fc(b.type, b.key, b.props, null, p.mode, k)),
            xn(m, b),
            (m.return = p),
            m);
    }
    function x(p, m, b, k) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== b.containerInfo ||
        m.stateNode.implementation !== b.implementation
        ? ((m = Ki(b, p.mode, k)), (m.return = p), m)
        : ((m = n(m, b.children || [])), (m.return = p), m);
    }
    function N(p, m, b, k, H) {
      return m === null || m.tag !== 7
        ? ((m = Cl(b, p.mode, k, H)), (m.return = p), m)
        : ((m = n(m, b)), (m.return = p), m);
    }
    function A(p, m, b) {
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return ((m = Xi("" + m, p.mode, b)), (m.return = p), m);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case B:
            return (
              (b = fc(m.type, m.key, m.props, null, p.mode, b)),
              xn(b, m),
              (b.return = p),
              b
            );
          case V:
            return ((m = Ki(m, p.mode, b)), (m.return = p), m);
          case Re:
            var k = m._init;
            return ((m = k(m._payload)), A(p, m, b));
        }
        if (Oe(m) || Me(m))
          return ((m = Cl(m, p.mode, b, null)), (m.return = p), m);
        if (typeof m.then == "function") return A(p, Tc(m), b);
        if (m.$$typeof === ze) return A(p, mc(p, m), b);
        Ec(p, m);
      }
      return null;
    }
    function g(p, m, b, k) {
      var H = m !== null ? m.key : null;
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return H !== null ? null : s(p, m, "" + b, k);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case B:
            return b.key === H ? o(p, m, b, k) : null;
          case V:
            return b.key === H ? x(p, m, b, k) : null;
          case Re:
            return ((H = b._init), (b = H(b._payload)), g(p, m, b, k));
        }
        if (Oe(b) || Me(b)) return H !== null ? null : N(p, m, b, k, null);
        if (typeof b.then == "function") return g(p, m, Tc(b), k);
        if (b.$$typeof === ze) return g(p, m, mc(p, b), k);
        Ec(p, b);
      }
      return null;
    }
    function v(p, m, b, k, H) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return ((p = p.get(b) || null), s(m, p, "" + k, H));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case B:
            return (
              (p = p.get(k.key === null ? b : k.key) || null),
              o(m, p, k, H)
            );
          case V:
            return (
              (p = p.get(k.key === null ? b : k.key) || null),
              x(m, p, k, H)
            );
          case Re:
            var I = k._init;
            return ((k = I(k._payload)), v(p, m, b, k, H));
        }
        if (Oe(k) || Me(k))
          return ((p = p.get(b) || null), N(m, p, k, H, null));
        if (typeof k.then == "function") return v(p, m, b, Tc(k), H);
        if (k.$$typeof === ze) return v(p, m, b, mc(m, k), H);
        Ec(m, k);
      }
      return null;
    }
    function L(p, m, b, k) {
      for (
        var H = null, I = null, G = m, K = (m = 0), qe = null;
        G !== null && K < b.length;
        K++
      ) {
        G.index > K ? ((qe = G), (G = null)) : (qe = G.sibling);
        var ue = g(p, G, b[K], k);
        if (ue === null) {
          G === null && (G = qe);
          break;
        }
        (e && G && ue.alternate === null && t(p, G),
          (m = c(ue, m, K)),
          I === null ? (H = ue) : (I.sibling = ue),
          (I = ue),
          (G = qe));
      }
      if (K === b.length) return (l(p, G), se && _l(p, K), H);
      if (G === null) {
        for (; K < b.length; K++)
          ((G = A(p, b[K], k)),
            G !== null &&
              ((m = c(G, m, K)),
              I === null ? (H = G) : (I.sibling = G),
              (I = G)));
        return (se && _l(p, K), H);
      }
      for (G = a(G); K < b.length; K++)
        ((qe = v(G, p, K, b[K], k)),
          qe !== null &&
            (e &&
              qe.alternate !== null &&
              G.delete(qe.key === null ? K : qe.key),
            (m = c(qe, m, K)),
            I === null ? (H = qe) : (I.sibling = qe),
            (I = qe)));
      return (
        e &&
          G.forEach(function (Al) {
            return t(p, Al);
          }),
        se && _l(p, K),
        H
      );
    }
    function X(p, m, b, k) {
      if (b == null) throw Error(d(151));
      for (
        var H = null, I = null, G = m, K = (m = 0), qe = null, ue = b.next();
        G !== null && !ue.done;
        K++, ue = b.next()
      ) {
        G.index > K ? ((qe = G), (G = null)) : (qe = G.sibling);
        var Al = g(p, G, ue.value, k);
        if (Al === null) {
          G === null && (G = qe);
          break;
        }
        (e && G && Al.alternate === null && t(p, G),
          (m = c(Al, m, K)),
          I === null ? (H = Al) : (I.sibling = Al),
          (I = Al),
          (G = qe));
      }
      if (ue.done) return (l(p, G), se && _l(p, K), H);
      if (G === null) {
        for (; !ue.done; K++, ue = b.next())
          ((ue = A(p, ue.value, k)),
            ue !== null &&
              ((m = c(ue, m, K)),
              I === null ? (H = ue) : (I.sibling = ue),
              (I = ue)));
        return (se && _l(p, K), H);
      }
      for (G = a(G); !ue.done; K++, ue = b.next())
        ((ue = v(G, p, K, ue.value, k)),
          ue !== null &&
            (e &&
              ue.alternate !== null &&
              G.delete(ue.key === null ? K : ue.key),
            (m = c(ue, m, K)),
            I === null ? (H = ue) : (I.sibling = ue),
            (I = ue)));
      return (
        e &&
          G.forEach(function (Np) {
            return t(p, Np);
          }),
        se && _l(p, K),
        H
      );
    }
    function me(p, m, b, k) {
      if (
        (typeof b == "object" &&
          b !== null &&
          b.type === W &&
          b.key === null &&
          (b = b.props.children),
        typeof b == "object" && b !== null)
      ) {
        switch (b.$$typeof) {
          case B:
            e: {
              for (var H = b.key; m !== null; ) {
                if (m.key === H) {
                  if (((H = b.type), H === W)) {
                    if (m.tag === 7) {
                      (l(p, m.sibling),
                        (k = n(m, b.props.children)),
                        (k.return = p),
                        (p = k));
                      break e;
                    }
                  } else if (
                    m.elementType === H ||
                    (typeof H == "object" &&
                      H !== null &&
                      H.$$typeof === Re &&
                      Gf(H) === m.type)
                  ) {
                    (l(p, m.sibling),
                      (k = n(m, b.props)),
                      xn(k, b),
                      (k.return = p),
                      (p = k));
                    break e;
                  }
                  l(p, m);
                  break;
                } else t(p, m);
                m = m.sibling;
              }
              b.type === W
                ? ((k = Cl(b.props.children, p.mode, k, b.key)),
                  (k.return = p),
                  (p = k))
                : ((k = fc(b.type, b.key, b.props, null, p.mode, k)),
                  xn(k, b),
                  (k.return = p),
                  (p = k));
            }
            return u(p);
          case V:
            e: {
              for (H = b.key; m !== null; ) {
                if (m.key === H)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === b.containerInfo &&
                    m.stateNode.implementation === b.implementation
                  ) {
                    (l(p, m.sibling),
                      (k = n(m, b.children || [])),
                      (k.return = p),
                      (p = k));
                    break e;
                  } else {
                    l(p, m);
                    break;
                  }
                else t(p, m);
                m = m.sibling;
              }
              ((k = Ki(b, p.mode, k)), (k.return = p), (p = k));
            }
            return u(p);
          case Re:
            return ((H = b._init), (b = H(b._payload)), me(p, m, b, k));
        }
        if (Oe(b)) return L(p, m, b, k);
        if (Me(b)) {
          if (((H = Me(b)), typeof H != "function")) throw Error(d(150));
          return ((b = H.call(b)), X(p, m, b, k));
        }
        if (typeof b.then == "function") return me(p, m, Tc(b), k);
        if (b.$$typeof === ze) return me(p, m, mc(p, b), k);
        Ec(p, b);
      }
      return (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
        ? ((b = "" + b),
          m !== null && m.tag === 6
            ? (l(p, m.sibling), (k = n(m, b)), (k.return = p), (p = k))
            : (l(p, m), (k = Xi(b, p.mode, k)), (k.return = p), (p = k)),
          u(p))
        : l(p, m);
    }
    return function (p, m, b, k) {
      try {
        bn = 0;
        var H = me(p, m, b, k);
        return ((va = null), H);
      } catch (G) {
        if (G === un || G === bc) throw G;
        var I = ut(29, G, null, p.mode);
        return ((I.lanes = k), (I.return = p), I);
      } finally {
      }
    };
  }
  var Sa = Yf(!0),
    Qf = Yf(!1),
    St = w(null),
    Rt = null;
  function fl(e) {
    var t = e.alternate;
    (_(Ce, Ce.current & 1),
      _(St, e),
      Rt === null &&
        (t === null || ba.current !== null || t.memoizedState !== null) &&
        (Rt = e));
  }
  function Xf(e) {
    if (e.tag === 22) {
      if ((_(Ce, Ce.current), _(St, e), Rt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Rt = e);
      }
    } else ol();
  }
  function ol() {
    (_(Ce, Ce.current), _(St, St.current));
  }
  function Vt(e) {
    (D(St), Rt === e && (Rt = null), D(Ce));
  }
  var Ce = w(0);
  function zc(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || ds(l))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function Nu(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : C({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var ku = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = ot(),
        n = ul(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = sl(e, n, a)),
        t !== null && (dt(t, e, a), rn(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = ot(),
        n = ul(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = sl(e, n, a)),
        t !== null && (dt(t, e, a), rn(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = ot(),
        a = ul(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = sl(e, a, l)),
        t !== null && (dt(t, e, l), rn(t, e, l)));
    },
  };
  function Kf(e, t, l, a, n, c, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, c, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Pa(l, a) || !Pa(n, c)
          : !0
    );
  }
  function Zf(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && ku.enqueueReplaceState(t, t.state, null));
  }
  function Ql(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = C({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var Mc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Lf(e) {
    Mc(e);
  }
  function Vf(e) {
    console.error(e);
  }
  function Jf(e) {
    Mc(e);
  }
  function Oc(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ff(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Au(e, t, l) {
    return (
      (l = ul(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Oc(e, t);
      }),
      l
    );
  }
  function $f(e) {
    return ((e = ul(e)), (e.tag = 3), e);
  }
  function Wf(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var c = a.value;
      ((e.payload = function () {
        return n(c);
      }),
        (e.callback = function () {
          Ff(t, l, a);
        }));
    }
    var u = l.stateNode;
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (e.callback = function () {
        (Ff(t, l, a),
          typeof n != "function" &&
            (xl === null ? (xl = new Set([this])) : xl.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function Nm(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && an(t, l, n, !0),
        (l = St.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Rt === null ? Fu() : l.alternate === null && je === 0 && (je = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === eu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Wu(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === eu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Wu(e, a, n)),
              !1
            );
        }
        throw Error(d(435, l.tag));
      }
      return (Wu(e, a, n), Fu(), !1);
    }
    if (se)
      return (
        (t = St.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Vi && ((e = Error(d(422), { cause: a })), ln(xt(e, l))))
          : (a !== Vi && ((t = Error(d(423), { cause: a })), ln(xt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = xt(a, l)),
            (n = Au(e.stateNode, a, n)),
            au(e, n),
            je !== 4 && (je = 2)),
        !1
      );
    var c = Error(d(520), { cause: a });
    if (
      ((c = xt(c, l)),
      kn === null ? (kn = [c]) : kn.push(c),
      je !== 4 && (je = 2),
      t === null)
    )
      return !0;
    ((a = xt(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Au(l.stateNode, a, e)),
            au(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (c = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (xl === null || !xl.has(c)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = $f(n)),
              Wf(n, e, l, a),
              au(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Pf = Error(d(461)),
    Ue = !1;
  function Ye(e, t, l, a) {
    t.child = e === null ? Qf(t, null, l, a) : Sa(t, e.child, l, a);
  }
  function If(e, t, l, a, n) {
    l = l.render;
    var c = t.ref;
    if ("ref" in a) {
      var u = {};
      for (var s in a) s !== "ref" && (u[s] = a[s]);
    } else u = a;
    return (
      Bl(t),
      (a = su(e, t, l, u, c, n)),
      (s = ru()),
      e !== null && !Ue
        ? (fu(e, t, n), Jt(e, t, n))
        : (se && s && Zi(t), (t.flags |= 1), Ye(e, t, a, n), t.child)
    );
  }
  function eo(e, t, l, a, n) {
    if (e === null) {
      var c = l.type;
      return typeof c == "function" &&
        !Qi(c) &&
        c.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = c), to(e, t, c, a, n))
        : ((e = fc(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !Cu(e, n))) {
      var u = c.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Pa), l(u, a) && e.ref === t.ref)
      )
        return Jt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Yt(c, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function to(e, t, l, a, n) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Pa(c, a) && e.ref === t.ref)
        if (((Ue = !1), (t.pendingProps = a = c), Cu(e, n)))
          (e.flags & 131072) !== 0 && (Ue = !0);
        else return ((t.lanes = e.lanes), Jt(e, t, n));
    }
    return wu(e, t, l, a, n);
  }
  function lo(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      c = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = c !== null ? c.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, c = 0; n !== null; )
            ((c = c | n.lanes | n.childLanes), (n = n.sibling));
          t.childLanes = c & ~a;
        } else ((t.childLanes = 0), (t.child = null));
        return ao(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && pc(t, c !== null ? c.cachePool : null),
          c !== null ? ef(t, c) : cu(),
          Xf(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          ao(e, t, c !== null ? c.baseLanes | l : l, l)
        );
    } else
      c !== null
        ? (pc(t, c.cachePool), ef(t, c), ol(), (t.memoizedState = null))
        : (e !== null && pc(t, null), cu(), ol());
    return (Ye(e, t, n, l), t.child);
  }
  function ao(e, t, l, a) {
    var n = Ii();
    return (
      (n = n === null ? null : { parent: De._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && pc(t, null),
      cu(),
      Xf(t),
      e !== null && an(e, t, a, !0),
      null
    );
  }
  function Dc(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(d(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function wu(e, t, l, a, n) {
    return (
      Bl(t),
      (l = su(e, t, l, a, void 0, n)),
      (a = ru()),
      e !== null && !Ue
        ? (fu(e, t, n), Jt(e, t, n))
        : (se && a && Zi(t), (t.flags |= 1), Ye(e, t, l, n), t.child)
    );
  }
  function no(e, t, l, a, n, c) {
    return (
      Bl(t),
      (t.updateQueue = null),
      (l = lf(t, a, l, n)),
      tf(e),
      (a = ru()),
      e !== null && !Ue
        ? (fu(e, t, c), Jt(e, t, c))
        : (se && a && Zi(t), (t.flags |= 1), Ye(e, t, l, c), t.child)
    );
  }
  function co(e, t, l, a, n) {
    if ((Bl(t), t.stateNode === null)) {
      var c = oa,
        u = l.contextType;
      (typeof u == "object" && u !== null && (c = Le(u)),
        (c = new l(a, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = ku),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = a),
        (c.state = t.memoizedState),
        (c.refs = {}),
        tu(t),
        (u = l.contextType),
        (c.context = typeof u == "object" && u !== null ? Le(u) : oa),
        (c.state = t.memoizedState),
        (u = l.getDerivedStateFromProps),
        typeof u == "function" && (Nu(t, l, u, a), (c.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((u = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          u !== c.state && ku.enqueueReplaceState(c, c.state, null),
          on(t, a, c, n),
          fn(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      c = t.stateNode;
      var s = t.memoizedProps,
        o = Ql(l, s);
      c.props = o;
      var x = c.context,
        N = l.contextType;
      ((u = oa), typeof N == "object" && N !== null && (u = Le(N)));
      var A = l.getDerivedStateFromProps;
      ((N =
        typeof A == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (s = t.pendingProps !== s),
        N ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((s || x !== u) && Zf(t, c, a, u)),
        (il = !1));
      var g = t.memoizedState;
      ((c.state = g),
        on(t, a, c, n),
        fn(),
        (x = t.memoizedState),
        s || g !== x || il
          ? (typeof A == "function" && (Nu(t, l, A, a), (x = t.memoizedState)),
            (o = il || Kf(t, l, o, a, g, x, u))
              ? (N ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = x)),
            (c.props = a),
            (c.state = x),
            (c.context = u),
            (a = o))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((c = t.stateNode),
        lu(e, t),
        (u = t.memoizedProps),
        (N = Ql(l, u)),
        (c.props = N),
        (A = t.pendingProps),
        (g = c.context),
        (x = l.contextType),
        (o = oa),
        typeof x == "object" && x !== null && (o = Le(x)),
        (s = l.getDerivedStateFromProps),
        (x =
          typeof s == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((u !== A || g !== o) && Zf(t, c, a, o)),
        (il = !1),
        (g = t.memoizedState),
        (c.state = g),
        on(t, a, c, n),
        fn());
      var v = t.memoizedState;
      u !== A ||
      g !== v ||
      il ||
      (e !== null && e.dependencies !== null && hc(e.dependencies))
        ? (typeof s == "function" && (Nu(t, l, s, a), (v = t.memoizedState)),
          (N =
            il ||
            Kf(t, l, N, a, g, v, o) ||
            (e !== null && e.dependencies !== null && hc(e.dependencies)))
            ? (x ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(a, v, o),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(a, v, o)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (u === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = v)),
          (c.props = a),
          (c.state = v),
          (c.context = o),
          (a = N))
        : (typeof c.componentDidUpdate != "function" ||
            (u === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (c = a),
      Dc(e, t),
      (a = (t.flags & 128) !== 0),
      c || a
        ? ((c = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Sa(t, e.child, null, n)),
              (t.child = Sa(t, null, l, n)))
            : Ye(e, t, l, n),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = Jt(e, t, n)),
      e
    );
  }
  function io(e, t, l, a) {
    return (tn(), (t.flags |= 256), Ye(e, t, l, a), t.child);
  }
  var Tu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Eu(e) {
    return { baseLanes: e, cachePool: Lr() };
  }
  function zu(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= jt), e);
  }
  function uo(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      c = (t.flags & 128) !== 0,
      u;
    if (
      ((u = c) ||
        (u =
          e !== null && e.memoizedState === null ? !1 : (Ce.current & 2) !== 0),
      u && ((n = !0), (t.flags &= -129)),
      (u = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (se) {
        if ((n ? fl(t) : ol(), se)) {
          var s = Se,
            o;
          if ((o = s)) {
            e: {
              for (o = s, s = Ct; o.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break e;
                }
                if (((o = Tt(o.nextSibling)), o === null)) {
                  s = null;
                  break e;
                }
              }
              s = o;
            }
            s !== null
              ? ((t.memoizedState = {
                  dehydrated: s,
                  treeContext: Rl !== null ? { id: Qt, overflow: Xt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (o = ut(18, null, null, 0)),
                (o.stateNode = s),
                (o.return = t),
                (t.child = o),
                ($e = t),
                (Se = null),
                (o = !0))
              : (o = !1);
          }
          o || Hl(t);
        }
        if (
          ((s = t.memoizedState),
          s !== null && ((s = s.dehydrated), s !== null))
        )
          return (ds(s) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        Vt(t);
      }
      return (
        (s = a.children),
        (a = a.fallback),
        n
          ? (ol(),
            (n = t.mode),
            (s = Cc({ mode: "hidden", children: s }, n)),
            (a = Cl(a, n, l, null)),
            (s.return = t),
            (a.return = t),
            (s.sibling = a),
            (t.child = s),
            (n = t.child),
            (n.memoizedState = Eu(l)),
            (n.childLanes = zu(e, u, l)),
            (t.memoizedState = Tu),
            a)
          : (fl(t), Mu(t, s))
      );
    }
    if (
      ((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null))
    ) {
      if (c)
        t.flags & 256
          ? (fl(t), (t.flags &= -257), (t = Ou(e, t, l)))
          : t.memoizedState !== null
            ? (ol(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ol(),
              (n = a.fallback),
              (s = t.mode),
              (a = Cc({ mode: "visible", children: a.children }, s)),
              (n = Cl(n, s, l, null)),
              (n.flags |= 2),
              (a.return = t),
              (n.return = t),
              (a.sibling = n),
              (t.child = a),
              Sa(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Eu(l)),
              (a.childLanes = zu(e, u, l)),
              (t.memoizedState = Tu),
              (t = n));
      else if ((fl(t), ds(s))) {
        if (((u = s.nextSibling && s.nextSibling.dataset), u)) var x = u.dgst;
        ((u = x),
          (a = Error(d(419))),
          (a.stack = ""),
          (a.digest = u),
          ln({ value: a, source: null, stack: null }),
          (t = Ou(e, t, l)));
      } else if (
        (Ue || an(e, t, l, !1), (u = (l & e.childLanes) !== 0), Ue || u)
      ) {
        if (
          ((u = be),
          u !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : hi(a)),
            (a = (a & (u.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== o.retryLane))
        )
          throw ((o.retryLane = a), fa(e, a), dt(u, e, a), Pf);
        (s.data === "$?" || Fu(), (t = Ou(e, t, l)));
      } else
        s.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = o.treeContext),
            (Se = Tt(s.nextSibling)),
            ($e = t),
            (se = !0),
            (Ul = null),
            (Ct = !1),
            e !== null &&
              ((gt[vt++] = Qt),
              (gt[vt++] = Xt),
              (gt[vt++] = Rl),
              (Qt = e.id),
              (Xt = e.overflow),
              (Rl = t)),
            (t = Mu(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (ol(),
        (n = a.fallback),
        (s = t.mode),
        (o = e.child),
        (x = o.sibling),
        (a = Yt(o, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = o.subtreeFlags & 65011712),
        x !== null ? (n = Yt(x, n)) : ((n = Cl(n, s, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = Eu(l))
          : ((o = s.cachePool),
            o !== null
              ? ((x = De._currentValue),
                (o = o.parent !== x ? { parent: x, pool: x } : o))
              : (o = Lr()),
            (s = { baseLanes: s.baseLanes | l, cachePool: o })),
        (n.memoizedState = s),
        (n.childLanes = zu(e, u, l)),
        (t.memoizedState = Tu),
        a)
      : (fl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Yt(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((u = t.deletions),
          u === null ? ((t.deletions = [e]), (t.flags |= 16)) : u.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Mu(e, t) {
    return (
      (t = Cc({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Cc(e, t) {
    return (
      (e = ut(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Ou(e, t, l) {
    return (
      Sa(t, e.child, null, l),
      (e = Mu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function so(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Fi(e.return, t, l));
  }
  function Du(e, t, l, a, n) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = a),
        (c.tail = l),
        (c.tailMode = n));
  }
  function ro(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      c = a.tail;
    if ((Ye(e, t, a.children, l), (a = Ce.current), (a & 2) !== 0))
      ((a = (a & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && so(e, l, t);
          else if (e.tag === 19) so(e, l, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      a &= 1;
    }
    switch ((_(Ce, a), n)) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          ((e = l.alternate),
            e !== null && zc(e) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Du(t, !1, n, l, c));
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && zc(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        Du(t, !0, l, null, c);
        break;
      case "together":
        Du(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Jt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (bl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((an(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Yt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = Yt(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Cu(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && hc(e)));
  }
  function km(e, t, l) {
    switch (t.tag) {
      case 3:
        (F(t, t.stateNode.containerInfo),
          cl(t, De, e.memoizedState.cache),
          tn());
        break;
      case 27:
      case 5:
        Ha(t);
        break;
      case 4:
        F(t, t.stateNode.containerInfo);
        break;
      case 10:
        cl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (fl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? uo(e, t, l)
              : (fl(t), (e = Jt(e, t, l)), e !== null ? e.sibling : null);
        fl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (an(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return ro(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          _(Ce, Ce.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), lo(e, t, l));
      case 24:
        cl(t, De, e.memoizedState.cache);
    }
    return Jt(e, t, l);
  }
  function fo(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ue = !0;
      else {
        if (!Cu(e, l) && (t.flags & 128) === 0) return ((Ue = !1), km(e, t, l));
        Ue = (e.flags & 131072) !== 0;
      }
    else ((Ue = !1), se && (t.flags & 1048576) !== 0 && Br(t, dc, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == "function"))
            Qi(a)
              ? ((e = Ql(a, e)), (t.tag = 1), (t = co(null, t, a, e, l)))
              : ((t.tag = 0), (t = wu(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === at)) {
                ((t.tag = 11), (t = If(null, t, a, e, l)));
                break e;
              } else if (n === we) {
                ((t.tag = 14), (t = eo(null, t, a, e, l)));
                break e;
              }
            }
            throw ((t = kt(a) || a), Error(d(306, t, "")));
          }
        }
        return t;
      case 0:
        return wu(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = Ql(a, t.pendingProps)), co(e, t, a, n, l));
      case 3:
        e: {
          if ((F(t, t.stateNode.containerInfo), e === null))
            throw Error(d(387));
          a = t.pendingProps;
          var c = t.memoizedState;
          ((n = c.element), lu(e, t), on(t, a, null, l));
          var u = t.memoizedState;
          if (
            ((a = u.cache),
            cl(t, De, a),
            a !== c.cache && $i(t, [De], l, !0),
            fn(),
            (a = u.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: a, isDehydrated: !1, cache: u.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = io(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = xt(Error(d(424)), t)), ln(n), (t = io(e, t, a, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Se = Tt(e.firstChild),
                  $e = t,
                  se = !0,
                  Ul = null,
                  Ct = !0,
                  l = Qf(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((tn(), a === n)) {
              t = Jt(e, t, l);
              break e;
            }
            Ye(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Dc(e, t),
          e === null
            ? (l = pd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : se ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Vc(Z.current).createElement(l)),
                (a[Ze] = t),
                (a[We] = e),
                Xe(a, l, e),
                _e(a),
                (t.stateNode = a))
            : (t.memoizedState = pd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ha(t),
          e === null &&
            se &&
            ((a = t.stateNode = dd(t.type, t.pendingProps, Z.current)),
            ($e = t),
            (Ct = !0),
            (n = Se),
            vl(t.type) ? ((hs = n), (Se = Tt(a.firstChild))) : (Se = n)),
          Ye(e, t, t.pendingProps.children, l),
          Dc(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            se &&
            ((n = a = Se) &&
              ((a = Pm(a, t.type, t.pendingProps, Ct)),
              a !== null
                ? ((t.stateNode = a),
                  ($e = t),
                  (Se = Tt(a.firstChild)),
                  (Ct = !1),
                  (n = !0))
                : (n = !1)),
            n || Hl(t)),
          Ha(t),
          (n = t.type),
          (c = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (a = c.children),
          rs(n, c) ? (a = null) : u !== null && rs(n, u) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = su(e, t, bm, null, null, l)), (Cn._currentValue = n)),
          Dc(e, t),
          Ye(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            se &&
            ((e = l = Se) &&
              ((l = Im(l, t.pendingProps, Ct)),
              l !== null
                ? ((t.stateNode = l), ($e = t), (Se = null), (e = !0))
                : (e = !1)),
            e || Hl(t)),
          null
        );
      case 13:
        return uo(e, t, l);
      case 4:
        return (
          F(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Sa(t, null, a, l)) : Ye(e, t, a, l),
          t.child
        );
      case 11:
        return If(e, t, t.type, t.pendingProps, l);
      case 7:
        return (Ye(e, t, t.pendingProps, l), t.child);
      case 8:
        return (Ye(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Ye(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          cl(t, t.type, a.value),
          Ye(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Bl(t),
          (n = Le(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ye(e, t, a, l),
          t.child
        );
      case 14:
        return eo(e, t, t.type, t.pendingProps, l);
      case 15:
        return to(e, t, t.type, t.pendingProps, l);
      case 19:
        return ro(e, t, l);
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = Cc(a, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = Yt(e.child, a)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        );
      case 22:
        return lo(e, t, l);
      case 24:
        return (
          Bl(t),
          (a = Le(De)),
          e === null
            ? ((n = Ii()),
              n === null &&
                ((n = be),
                (c = Wi()),
                (n.pooledCache = c),
                c.refCount++,
                c !== null && (n.pooledCacheLanes |= l),
                (n = c)),
              (t.memoizedState = { parent: a, cache: n }),
              tu(t),
              cl(t, De, n))
            : ((e.lanes & l) !== 0 && (lu(e, t), on(t, null, null, l), fn()),
              (n = e.memoizedState),
              (c = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  cl(t, De, a))
                : ((a = c.cache),
                  cl(t, De, a),
                  a !== n.cache && $i(t, [De], l, !0))),
          Ye(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function Ft(e) {
    e.flags |= 4;
  }
  function oo(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !vd(t))) {
      if (
        ((t = St.current),
        t !== null &&
          ((ie & 4194048) === ie
            ? Rt !== null
            : ((ie & 62914560) !== ie && (ie & 536870912) === 0) || t !== Rt))
      )
        throw ((sn = eu), Vr);
      e.flags |= 8192;
    }
  }
  function Rc(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Qs() : 536870912), (e.lanes |= t), (Aa |= t)));
  }
  function yn(e, t) {
    if (!se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function Am(e, t, l) {
    var a = t.pendingProps;
    switch ((Li(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ve(t), null);
      case 1:
        return (ve(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Zt(De),
          Mt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (en(t)
              ? Ft(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Qr())),
          ve(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (Ft(t),
              l !== null ? (ve(t), oo(t, l)) : (ve(t), (t.flags &= -16777217)))
            : l
              ? l !== e.memoizedState
                ? (Ft(t), ve(t), oo(t, l))
                : (ve(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && Ft(t), ve(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (Jl(t), (l = Z.current));
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && Ft(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(d(166));
            return (ve(t), null);
          }
          ((e = Q.current),
            en(t) ? Gr(t) : ((e = dd(n, a, l)), (t.stateNode = e), Ft(t)));
        }
        return (ve(t), null);
      case 5:
        if ((Jl(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Ft(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(d(166));
            return (ve(t), null);
          }
          if (((e = Q.current), en(t))) Gr(t);
          else {
            switch (((n = Vc(Z.current)), e)) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    ((e = n.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size));
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            ((e[Ze] = t), (e[We] = a));
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                ((n.child.return = n), (n = n.child));
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              ((n.sibling.return = n.return), (n = n.sibling));
            }
            t.stateNode = e;
            e: switch ((Xe(e, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ft(t);
          }
        }
        return (ve(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Ft(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(d(166));
          if (((e = Z.current), en(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = $e),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[Ze] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                cd(e.nodeValue, l)
              )),
              e || Hl(t));
          } else
            ((e = Vc(e).createTextNode(a)), (e[Ze] = t), (t.stateNode = e));
        }
        return (ve(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = en(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(d(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(d(317));
              n[Ze] = t;
            } else
              (tn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ve(t), (n = !1));
          } else
            ((n = Qr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
        }
        if ((Vt(t), (t.flags & 128) !== 0)) return ((t.lanes = l), t);
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          ((a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool));
          var c = null;
          (a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (c = a.memoizedState.cachePool.pool),
            c !== n && (a.flags |= 2048));
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          Rc(t, t.updateQueue),
          ve(t),
          null
        );
      case 4:
        return (Mt(), e === null && ns(t.stateNode.containerInfo), ve(t), null);
      case 10:
        return (Zt(t.type), ve(t), null);
      case 19:
        if ((D(Ce), (n = t.memoizedState), n === null)) return (ve(t), null);
        if (((a = (t.flags & 128) !== 0), (c = n.rendering), c === null))
          if (a) yn(n, !1);
          else {
            if (je !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = zc(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      yn(n, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      Rc(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (qr(l, e), (l = l.sibling));
                  return (_(Ce, (Ce.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            n.tail !== null &&
              J() > Hc &&
              ((t.flags |= 128), (a = !0), yn(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = zc(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Rc(t, e),
                yn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !c.alternate &&
                  !se)
              )
                return (ve(t), null);
            } else
              2 * J() - n.renderingStartTime > Hc &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), yn(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = n.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (n.last = c));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = J()),
            (t.sibling = null),
            (e = Ce.current),
            _(Ce, a ? (e & 1) | 2 : e & 1),
            t)
          : (ve(t), null);
      case 22:
      case 23:
        return (
          Vt(t),
          iu(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ve(t),
          (l = t.updateQueue),
          l !== null && Rc(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && D(Gl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Zt(De),
          ve(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function wm(e, t) {
    switch ((Li(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Zt(De),
          Mt(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Jl(t), null);
      case 13:
        if (
          (Vt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(d(340));
          tn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (D(Ce), null);
      case 4:
        return (Mt(), null);
      case 10:
        return (Zt(t.type), null);
      case 22:
      case 23:
        return (
          Vt(t),
          iu(),
          e !== null && D(Gl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Zt(De), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ho(e, t) {
    switch ((Li(t), t.tag)) {
      case 3:
        (Zt(De), Mt());
        break;
      case 26:
      case 27:
      case 5:
        Jl(t);
        break;
      case 4:
        Mt();
        break;
      case 13:
        Vt(t);
        break;
      case 19:
        D(Ce);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        (Vt(t), iu(), e !== null && D(Gl));
        break;
      case 24:
        Zt(De);
    }
  }
  function gn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var c = l.create,
              u = l.inst;
            ((a = c()), (u.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      pe(t, t.return, s);
    }
  }
  function dl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var c = n.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            var u = a.inst,
              s = u.destroy;
            if (s !== void 0) {
              ((u.destroy = void 0), (n = t));
              var o = l,
                x = s;
              try {
                x();
              } catch (N) {
                pe(n, o, N);
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (N) {
      pe(t, t.return, N);
    }
  }
  function mo(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Ir(t, l);
      } catch (a) {
        pe(e, e.return, a);
      }
    }
  }
  function po(e, t, l) {
    ((l.props = Ql(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      pe(e, t, a);
    }
  }
  function vn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      pe(e, t, n);
    }
  }
  function _t(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          pe(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          pe(e, t, n);
        }
      else l.current = null;
  }
  function bo(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      pe(e, e.return, n);
    }
  }
  function Ru(e, t, l) {
    try {
      var a = e.stateNode;
      (Vm(a, e.type, l, t), (a[We] = t));
    } catch (n) {
      pe(e, e.return, n);
    }
  }
  function xo(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && vl(e.type)) ||
      e.tag === 4
    );
  }
  function _u(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || xo(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && vl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Uu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Lc)));
    else if (
      a !== 4 &&
      (a === 27 && vl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Uu(e, t, l), e = e.sibling; e !== null; )
        (Uu(e, t, l), (e = e.sibling));
  }
  function _c(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && vl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (_c(e, t, l), e = e.sibling; e !== null; )
        (_c(e, t, l), (e = e.sibling));
  }
  function yo(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      (Xe(t, a, l), (t[Ze] = e), (t[We] = l));
    } catch (c) {
      pe(e, e.return, c);
    }
  }
  var $t = !1,
    Ae = !1,
    Hu = !1,
    go = typeof WeakSet == "function" ? WeakSet : Set,
    He = null;
  function Tm(e, t) {
    if (((e = e.containerInfo), (us = Ic), (e = Er(e)), _i(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              c = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, c.nodeType);
            } catch {
              l = null;
              break e;
            }
            var u = 0,
              s = -1,
              o = -1,
              x = 0,
              N = 0,
              A = e,
              g = null;
            t: for (;;) {
              for (
                var v;
                A !== l || (n !== 0 && A.nodeType !== 3) || (s = u + n),
                  A !== c || (a !== 0 && A.nodeType !== 3) || (o = u + a),
                  A.nodeType === 3 && (u += A.nodeValue.length),
                  (v = A.firstChild) !== null;
              )
                ((g = A), (A = v));
              for (;;) {
                if (A === e) break t;
                if (
                  (g === l && ++x === n && (s = u),
                  g === c && ++N === a && (o = u),
                  (v = A.nextSibling) !== null)
                )
                  break;
                ((A = g), (g = A.parentNode));
              }
              A = v;
            }
            l = s === -1 || o === -1 ? null : { start: s, end: o };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      ss = { focusedElem: e, selectionRange: l }, Ic = !1, He = t;
      He !== null;
    )
      if (
        ((t = He), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = t), (He = e));
      else
        for (; He !== null; ) {
          switch (((t = He), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                ((e = void 0),
                  (l = t),
                  (n = c.memoizedProps),
                  (c = c.memoizedState),
                  (a = l.stateNode));
                try {
                  var L = Ql(l.type, n, l.elementType === l.type);
                  ((e = a.getSnapshotBeforeUpdate(L, c)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (X) {
                  pe(l, l.return, X);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  os(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      os(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(d(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (He = e));
            break;
          }
          He = t.return;
        }
  }
  function vo(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (hl(e, l), a & 4 && gn(5, l));
        break;
      case 1:
        if ((hl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (u) {
              pe(l, l.return, u);
            }
          else {
            var n = Ql(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (u) {
              pe(l, l.return, u);
            }
          }
        (a & 64 && mo(l), a & 512 && vn(l, l.return));
        break;
      case 3:
        if ((hl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Ir(e, t);
          } catch (u) {
            pe(l, l.return, u);
          }
        }
        break;
      case 27:
        t === null && a & 4 && yo(l);
      case 26:
      case 5:
        (hl(e, l), t === null && a & 4 && bo(l), a & 512 && vn(l, l.return));
        break;
      case 12:
        hl(e, l);
        break;
      case 13:
        (hl(e, l),
          a & 4 && No(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = Um.bind(null, l)), ep(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || $t), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Ae), (n = $t));
          var c = Ae;
          (($t = a),
            (Ae = t) && !c ? ml(e, l, (l.subtreeFlags & 8772) !== 0) : hl(e, l),
            ($t = n),
            (Ae = c));
        }
        break;
      case 30:
        break;
      default:
        hl(e, l);
    }
  }
  function So(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), So(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && bi(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var xe = null,
    et = !1;
  function Wt(e, t, l) {
    for (l = l.child; l !== null; ) (jo(e, t, l), (l = l.sibling));
  }
  function jo(e, t, l) {
    if (nt && typeof nt.onCommitFiberUnmount == "function")
      try {
        nt.onCommitFiberUnmount(Ga, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Ae || _t(l, t),
          Wt(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Ae || _t(l, t);
        var a = xe,
          n = et;
        (vl(l.type) && ((xe = l.stateNode), (et = !1)),
          Wt(e, t, l),
          zn(l.stateNode),
          (xe = a),
          (et = n));
        break;
      case 5:
        Ae || _t(l, t);
      case 6:
        if (
          ((a = xe),
          (n = et),
          (xe = null),
          Wt(e, t, l),
          (xe = a),
          (et = n),
          xe !== null)
        )
          if (et)
            try {
              (xe.nodeType === 9
                ? xe.body
                : xe.nodeName === "HTML"
                  ? xe.ownerDocument.body
                  : xe
              ).removeChild(l.stateNode);
            } catch (c) {
              pe(l, t, c);
            }
          else
            try {
              xe.removeChild(l.stateNode);
            } catch (c) {
              pe(l, t, c);
            }
        break;
      case 18:
        xe !== null &&
          (et
            ? ((e = xe),
              fd(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              Hn(e))
            : fd(xe, l.stateNode));
        break;
      case 4:
        ((a = xe),
          (n = et),
          (xe = l.stateNode.containerInfo),
          (et = !0),
          Wt(e, t, l),
          (xe = a),
          (et = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ae || dl(2, l, t), Ae || dl(4, l, t), Wt(e, t, l));
        break;
      case 1:
        (Ae ||
          (_t(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && po(l, t, a)),
          Wt(e, t, l));
        break;
      case 21:
        Wt(e, t, l);
        break;
      case 22:
        ((Ae = (a = Ae) || l.memoizedState !== null), Wt(e, t, l), (Ae = a));
        break;
      default:
        Wt(e, t, l);
    }
  }
  function No(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Hn(e);
      } catch (l) {
        pe(t, t.return, l);
      }
  }
  function Em(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new go()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new go()),
          t
        );
      default:
        throw Error(d(435, e.tag));
    }
  }
  function qu(e, t) {
    var l = Em(e);
    t.forEach(function (a) {
      var n = Hm.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function st(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          c = e,
          u = t,
          s = u;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (vl(s.type)) {
                ((xe = s.stateNode), (et = !1));
                break e;
              }
              break;
            case 5:
              ((xe = s.stateNode), (et = !1));
              break e;
            case 3:
            case 4:
              ((xe = s.stateNode.containerInfo), (et = !0));
              break e;
          }
          s = s.return;
        }
        if (xe === null) throw Error(d(160));
        (jo(c, u, n),
          (xe = null),
          (et = !1),
          (c = n.alternate),
          c !== null && (c.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (ko(t, e), (t = t.sibling));
  }
  var wt = null;
  function ko(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (st(t, e),
          rt(e),
          a & 4 && (dl(3, e, e.return), gn(3, e), dl(5, e, e.return)));
        break;
      case 1:
        (st(t, e),
          rt(e),
          a & 512 && (Ae || l === null || _t(l, l.return)),
          a & 64 &&
            $t &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = wt;
        if (
          (st(t, e),
          rt(e),
          a & 512 && (Ae || l === null || _t(l, l.return)),
          a & 4)
        ) {
          var c = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (a) {
                    case "title":
                      ((c = n.getElementsByTagName("title")[0]),
                        (!c ||
                          c[Xa] ||
                          c[Ze] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = n.createElement(a)),
                          n.head.insertBefore(
                            c,
                            n.querySelector("head > title"),
                          )),
                        Xe(c, a, l),
                        (c[Ze] = e),
                        _e(c),
                        (a = c));
                      break e;
                    case "link":
                      var u = yd("link", "href", n).get(a + (l.href || ""));
                      if (u) {
                        for (var s = 0; s < u.length; s++)
                          if (
                            ((c = u[s]),
                            c.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              c.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              c.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              c.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            u.splice(s, 1);
                            break t;
                          }
                      }
                      ((c = n.createElement(a)),
                        Xe(c, a, l),
                        n.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (u = yd("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (s = 0; s < u.length; s++)
                          if (
                            ((c = u[s]),
                            c.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              c.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              c.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              c.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            u.splice(s, 1);
                            break t;
                          }
                      }
                      ((c = n.createElement(a)),
                        Xe(c, a, l),
                        n.head.appendChild(c));
                      break;
                    default:
                      throw Error(d(468, a));
                  }
                  ((c[Ze] = e), _e(c), (a = c));
                }
                e.stateNode = a;
              } else gd(n, e.type, e.stateNode);
            else e.stateNode = xd(n, a, e.memoizedProps);
          else
            c !== a
              ? (c === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : c.count--,
                a === null
                  ? gd(n, e.type, e.stateNode)
                  : xd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Ru(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (st(t, e),
          rt(e),
          a & 512 && (Ae || l === null || _t(l, l.return)),
          l !== null && a & 4 && Ru(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (st(t, e),
          rt(e),
          a & 512 && (Ae || l === null || _t(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            aa(n, "");
          } catch (v) {
            pe(e, e.return, v);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Ru(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Hu = !0));
        break;
      case 6:
        if ((st(t, e), rt(e), a & 4)) {
          if (e.stateNode === null) throw Error(d(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (v) {
            pe(e, e.return, v);
          }
        }
        break;
      case 3:
        if (
          (($c = null),
          (n = wt),
          (wt = Jc(t.containerInfo)),
          st(t, e),
          (wt = n),
          rt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Hn(t.containerInfo);
          } catch (v) {
            pe(e, e.return, v);
          }
        Hu && ((Hu = !1), Ao(e));
        break;
      case 4:
        ((a = wt),
          (wt = Jc(e.stateNode.containerInfo)),
          st(t, e),
          rt(e),
          (wt = a));
        break;
      case 12:
        (st(t, e), rt(e));
        break;
      case 13:
        (st(t, e),
          rt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Ku = J()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), qu(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var o = l !== null && l.memoizedState !== null,
          x = $t,
          N = Ae;
        if (
          (($t = x || n),
          (Ae = N || o),
          st(t, e),
          (Ae = N),
          ($t = x),
          rt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || o || $t || Ae || Xl(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                o = l = t;
                try {
                  if (((c = o.stateNode), n))
                    ((u = c.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none"));
                  else {
                    s = o.stateNode;
                    var A = o.memoizedProps.style,
                      g =
                        A != null && A.hasOwnProperty("display")
                          ? A.display
                          : null;
                    s.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (v) {
                  pe(o, o.return, v);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                o = t;
                try {
                  o.stateNode.nodeValue = n ? "" : o.memoizedProps;
                } catch (v) {
                  pe(o, o.return, v);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), qu(e, l))));
        break;
      case 19:
        (st(t, e),
          rt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), qu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (st(t, e), rt(e));
    }
  }
  function rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (xo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(d(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              c = _u(e);
            _c(e, c, n);
            break;
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (aa(u, ""), (l.flags &= -33));
            var s = _u(e);
            _c(e, s, u);
            break;
          case 3:
          case 4:
            var o = l.stateNode.containerInfo,
              x = _u(e);
            Uu(e, x, o);
            break;
          default:
            throw Error(d(161));
        }
      } catch (N) {
        pe(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ao(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Ao(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function hl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (vo(e, t.alternate, t), (t = t.sibling));
  }
  function Xl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (dl(4, t, t.return), Xl(t));
          break;
        case 1:
          _t(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == "function" && po(t, t.return, l),
            Xl(t));
          break;
        case 27:
          zn(t.stateNode);
        case 26:
        case 5:
          (_t(t, t.return), Xl(t));
          break;
        case 22:
          t.memoizedState === null && Xl(t);
          break;
        case 30:
          Xl(t);
          break;
        default:
          Xl(t);
      }
      e = e.sibling;
    }
  }
  function ml(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        c = t,
        u = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (ml(n, c, l), gn(4, c));
          break;
        case 1:
          if (
            (ml(n, c, l),
            (a = c),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (x) {
              pe(a, a.return, x);
            }
          if (((a = c), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var o = n.shared.hiddenCallbacks;
              if (o !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++)
                  Pr(o[n], s);
            } catch (x) {
              pe(a, a.return, x);
            }
          }
          (l && u & 64 && mo(c), vn(c, c.return));
          break;
        case 27:
          yo(c);
        case 26:
        case 5:
          (ml(n, c, l), l && a === null && u & 4 && bo(c), vn(c, c.return));
          break;
        case 12:
          ml(n, c, l);
          break;
        case 13:
          (ml(n, c, l), l && u & 4 && No(n, c));
          break;
        case 22:
          (c.memoizedState === null && ml(n, c, l), vn(c, c.return));
          break;
        case 30:
          break;
        default:
          ml(n, c, l);
      }
      t = t.sibling;
    }
  }
  function Bu(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && nn(l)));
  }
  function Gu(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && nn(e)));
  }
  function Ut(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (wo(e, t, l, a), (t = t.sibling));
  }
  function wo(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ut(e, t, l, a), n & 2048 && gn(9, t));
        break;
      case 1:
        Ut(e, t, l, a);
        break;
      case 3:
        (Ut(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && nn(e))));
        break;
      case 12:
        if (n & 2048) {
          (Ut(e, t, l, a), (e = t.stateNode));
          try {
            var c = t.memoizedProps,
              u = c.id,
              s = c.onPostCommit;
            typeof s == "function" &&
              s(
                u,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (o) {
            pe(t, t.return, o);
          }
        } else Ut(e, t, l, a);
        break;
      case 13:
        Ut(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((c = t.stateNode),
          (u = t.alternate),
          t.memoizedState !== null
            ? c._visibility & 2
              ? Ut(e, t, l, a)
              : Sn(e, t)
            : c._visibility & 2
              ? Ut(e, t, l, a)
              : ((c._visibility |= 2),
                ja(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Bu(u, t));
        break;
      case 24:
        (Ut(e, t, l, a), n & 2048 && Gu(t.alternate, t));
        break;
      default:
        Ut(e, t, l, a);
    }
  }
  function ja(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e,
        u = t,
        s = l,
        o = a,
        x = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (ja(c, u, s, o, n), gn(8, u));
          break;
        case 23:
          break;
        case 22:
          var N = u.stateNode;
          (u.memoizedState !== null
            ? N._visibility & 2
              ? ja(c, u, s, o, n)
              : Sn(c, u)
            : ((N._visibility |= 2), ja(c, u, s, o, n)),
            n && x & 2048 && Bu(u.alternate, u));
          break;
        case 24:
          (ja(c, u, s, o, n), n && x & 2048 && Gu(u.alternate, u));
          break;
        default:
          ja(c, u, s, o, n);
      }
      t = t.sibling;
    }
  }
  function Sn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (Sn(l, a), n & 2048 && Bu(a.alternate, a));
            break;
          case 24:
            (Sn(l, a), n & 2048 && Gu(a.alternate, a));
            break;
          default:
            Sn(l, a);
        }
        t = t.sibling;
      }
  }
  var jn = 8192;
  function Na(e) {
    if (e.subtreeFlags & jn)
      for (e = e.child; e !== null; ) (To(e), (e = e.sibling));
  }
  function To(e) {
    switch (e.tag) {
      case 26:
        (Na(e),
          e.flags & jn &&
            e.memoizedState !== null &&
            hp(wt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Na(e);
        break;
      case 3:
      case 4:
        var t = wt;
        ((wt = Jc(e.stateNode.containerInfo)), Na(e), (wt = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = jn), (jn = 16777216), Na(e), (jn = t))
            : Na(e));
        break;
      default:
        Na(e);
    }
  }
  function Eo(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Nn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((He = a), Mo(a, e));
        }
      Eo(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (zo(e), (e = e.sibling));
  }
  function zo(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Nn(e), e.flags & 2048 && dl(9, e, e.return));
        break;
      case 3:
        Nn(e);
        break;
      case 12:
        Nn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Uc(e))
          : Nn(e);
        break;
      default:
        Nn(e);
    }
  }
  function Uc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((He = a), Mo(a, e));
        }
      Eo(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (dl(8, t, t.return), Uc(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Uc(t)));
          break;
        default:
          Uc(t);
      }
      e = e.sibling;
    }
  }
  function Mo(e, t) {
    for (; He !== null; ) {
      var l = He;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          nn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (He = a));
      else
        e: for (l = e; He !== null; ) {
          a = He;
          var n = a.sibling,
            c = a.return;
          if ((So(a), a === l)) {
            He = null;
            break e;
          }
          if (n !== null) {
            ((n.return = c), (He = n));
            break e;
          }
          He = c;
        }
    }
  }
  var zm = {
      getCacheForType: function (e) {
        var t = Le(De),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
    },
    Mm = typeof WeakMap == "function" ? WeakMap : Map,
    fe = 0,
    be = null,
    ee = null,
    ie = 0,
    oe = 0,
    ft = null,
    pl = !1,
    ka = !1,
    Yu = !1,
    Pt = 0,
    je = 0,
    bl = 0,
    Kl = 0,
    Qu = 0,
    jt = 0,
    Aa = 0,
    kn = null,
    tt = null,
    Xu = !1,
    Ku = 0,
    Hc = 1 / 0,
    qc = null,
    xl = null,
    Qe = 0,
    yl = null,
    wa = null,
    Ta = 0,
    Zu = 0,
    Lu = null,
    Oo = null,
    An = 0,
    Vu = null;
  function ot() {
    if ((fe & 2) !== 0 && ie !== 0) return ie & -ie;
    if (j.T !== null) {
      var e = ma;
      return e !== 0 ? e : es();
    }
    return Zs();
  }
  function Do() {
    jt === 0 && (jt = (ie & 536870912) === 0 || se ? Ys() : 536870912);
    var e = St.current;
    return (e !== null && (e.flags |= 32), jt);
  }
  function dt(e, t, l) {
    (((e === be && (oe === 2 || oe === 9)) || e.cancelPendingCommit !== null) &&
      (Ea(e, 0), gl(e, ie, jt, !1)),
      Qa(e, l),
      ((fe & 2) === 0 || e !== be) &&
        (e === be &&
          ((fe & 2) === 0 && (Kl |= l), je === 4 && gl(e, ie, jt, !1)),
        Ht(e)));
  }
  function Co(e, t, l) {
    if ((fe & 6) !== 0) throw Error(d(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Ya(e, t),
      n = a ? Cm(e, t) : $u(e, t, !0),
      c = a;
    do {
      if (n === 0) {
        ka && !a && gl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), c && !Om(l))) {
          ((n = $u(e, t, !1)), (c = !1));
          continue;
        }
        if (n === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var u = 0;
          else
            ((u = e.pendingLanes & -536870913),
              (u = u !== 0 ? u : u & 536870912 ? 536870912 : 0));
          if (u !== 0) {
            t = u;
            e: {
              var s = e;
              n = kn;
              var o = s.current.memoizedState.isDehydrated;
              if ((o && (Ea(s, u).flags |= 256), (u = $u(s, u, !1)), u !== 2)) {
                if (Yu && !o) {
                  ((s.errorRecoveryDisabledLanes |= c), (Kl |= c), (n = 4));
                  break e;
                }
                ((c = tt),
                  (tt = n),
                  c !== null &&
                    (tt === null ? (tt = c) : tt.push.apply(tt, c)));
              }
              n = u;
            }
            if (((c = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Ea(e, 0), gl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (c = n), c)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              gl(a, t, jt, !pl);
              break e;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && ((n = Ku + 300 - J()), 10 < n)) {
            if ((gl(a, t, jt, !pl), Fn(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = sd(
              Ro.bind(null, a, l, tt, qc, Xu, t, jt, Kl, Aa, pl, c, 2, -0, 0),
              n,
            );
            break e;
          }
          Ro(a, l, tt, qc, Xu, t, jt, Kl, Aa, pl, c, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ht(e);
  }
  function Ro(e, t, l, a, n, c, u, s, o, x, N, A, g, v) {
    if (
      ((e.timeoutHandle = -1),
      (A = t.subtreeFlags),
      (A & 8192 || (A & 16785408) === 16785408) &&
        ((Dn = { stylesheets: null, count: 0, unsuspend: dp }),
        To(t),
        (A = mp()),
        A !== null))
    ) {
      ((e.cancelPendingCommit = A(
        Yo.bind(null, e, t, c, l, a, n, u, s, o, N, 1, g, v),
      )),
        gl(e, c, u, !x));
      return;
    }
    Yo(e, t, c, l, a, n, u, s, o);
  }
  function Om(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            c = n.getSnapshot;
          n = n.value;
          try {
            if (!it(c(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function gl(e, t, l, a) {
    ((t &= ~Qu),
      (t &= ~Kl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var c = 31 - ct(n),
        u = 1 << c;
      ((a[c] = -1), (n &= ~u));
    }
    l !== 0 && Xs(e, l, t);
  }
  function Bc() {
    return (fe & 6) === 0 ? (wn(0), !1) : !0;
  }
  function Ju() {
    if (ee !== null) {
      if (oe === 0) var e = ee.return;
      else ((e = ee), (Kt = ql = null), ou(e), (va = null), (bn = 0), (e = ee));
      for (; e !== null; ) (ho(e.alternate, e), (e = e.return));
      ee = null;
    }
  }
  function Ea(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), Fm(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      Ju(),
      (be = e),
      (ee = l = Yt(e.current, null)),
      (ie = t),
      (oe = 0),
      (ft = null),
      (pl = !1),
      (ka = Ya(e, t)),
      (Yu = !1),
      (Aa = jt = Qu = Kl = bl = je = 0),
      (tt = kn = null),
      (Xu = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ct(a),
          c = 1 << n;
        ((t |= e[n]), (a &= ~c));
      }
    return ((Pt = t), uc(), l);
  }
  function _o(e, t) {
    ((P = null),
      (j.H = wc),
      t === un || t === bc
        ? ((t = $r()), (oe = 3))
        : t === Vr
          ? ((t = $r()), (oe = 4))
          : (oe =
              t === Pf
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (ft = t),
      ee === null && ((je = 1), Oc(e, xt(t, e.current))));
  }
  function Uo() {
    var e = j.H;
    return ((j.H = wc), e === null ? wc : e);
  }
  function Ho() {
    var e = j.A;
    return ((j.A = zm), e);
  }
  function Fu() {
    ((je = 4),
      pl || ((ie & 4194048) !== ie && St.current !== null) || (ka = !0),
      ((bl & 134217727) === 0 && (Kl & 134217727) === 0) ||
        be === null ||
        gl(be, ie, jt, !1));
  }
  function $u(e, t, l) {
    var a = fe;
    fe |= 2;
    var n = Uo(),
      c = Ho();
    ((be !== e || ie !== t) && ((qc = null), Ea(e, t)), (t = !1));
    var u = je;
    e: do
      try {
        if (oe !== 0 && ee !== null) {
          var s = ee,
            o = ft;
          switch (oe) {
            case 8:
              (Ju(), (u = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var x = oe;
              if (((oe = 0), (ft = null), za(e, s, o, x), l && ka)) {
                u = 0;
                break e;
              }
              break;
            default:
              ((x = oe), (oe = 0), (ft = null), za(e, s, o, x));
          }
        }
        (Dm(), (u = je));
        break;
      } catch (N) {
        _o(e, N);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Kt = ql = null),
      (fe = a),
      (j.H = n),
      (j.A = c),
      ee === null && ((be = null), (ie = 0), uc()),
      u
    );
  }
  function Dm() {
    for (; ee !== null; ) qo(ee);
  }
  function Cm(e, t) {
    var l = fe;
    fe |= 2;
    var a = Uo(),
      n = Ho();
    be !== e || ie !== t
      ? ((qc = null), (Hc = J() + 500), Ea(e, t))
      : (ka = Ya(e, t));
    e: do
      try {
        if (oe !== 0 && ee !== null) {
          t = ee;
          var c = ft;
          t: switch (oe) {
            case 1:
              ((oe = 0), (ft = null), za(e, t, c, 1));
              break;
            case 2:
            case 9:
              if (Jr(c)) {
                ((oe = 0), (ft = null), Bo(t));
                break;
              }
              ((t = function () {
                ((oe !== 2 && oe !== 9) || be !== e || (oe = 7), Ht(e));
              }),
                c.then(t, t));
              break e;
            case 3:
              oe = 7;
              break e;
            case 4:
              oe = 5;
              break e;
            case 7:
              Jr(c)
                ? ((oe = 0), (ft = null), Bo(t))
                : ((oe = 0), (ft = null), za(e, t, c, 7));
              break;
            case 5:
              var u = null;
              switch (ee.tag) {
                case 26:
                  u = ee.memoizedState;
                case 5:
                case 27:
                  var s = ee;
                  if (!u || vd(u)) {
                    ((oe = 0), (ft = null));
                    var o = s.sibling;
                    if (o !== null) ee = o;
                    else {
                      var x = s.return;
                      x !== null ? ((ee = x), Gc(x)) : (ee = null);
                    }
                    break t;
                  }
              }
              ((oe = 0), (ft = null), za(e, t, c, 5));
              break;
            case 6:
              ((oe = 0), (ft = null), za(e, t, c, 6));
              break;
            case 8:
              (Ju(), (je = 6));
              break e;
            default:
              throw Error(d(462));
          }
        }
        Rm();
        break;
      } catch (N) {
        _o(e, N);
      }
    while (!0);
    return (
      (Kt = ql = null),
      (j.H = a),
      (j.A = n),
      (fe = l),
      ee !== null ? 0 : ((be = null), (ie = 0), uc(), je)
    );
  }
  function Rm() {
    for (; ee !== null && !oi(); ) qo(ee);
  }
  function qo(e) {
    var t = fo(e.alternate, e, Pt);
    ((e.memoizedProps = e.pendingProps), t === null ? Gc(e) : (ee = t));
  }
  function Bo(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = no(l, t, t.pendingProps, t.type, void 0, ie);
        break;
      case 11:
        t = no(l, t, t.pendingProps, t.type.render, t.ref, ie);
        break;
      case 5:
        ou(t);
      default:
        (ho(l, t), (t = ee = qr(t, Pt)), (t = fo(l, t, Pt)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Gc(e) : (ee = t));
  }
  function za(e, t, l, a) {
    ((Kt = ql = null), ou(t), (va = null), (bn = 0));
    var n = t.return;
    try {
      if (Nm(e, n, t, l, ie)) {
        ((je = 1), Oc(e, xt(l, e.current)), (ee = null));
        return;
      }
    } catch (c) {
      if (n !== null) throw ((ee = n), c);
      ((je = 1), Oc(e, xt(l, e.current)), (ee = null));
      return;
    }
    t.flags & 32768
      ? (se || a === 1
          ? (e = !0)
          : ka || (ie & 536870912) !== 0
            ? (e = !1)
            : ((pl = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = St.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Go(t, e))
      : Gc(t);
  }
  function Gc(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Go(t, pl);
        return;
      }
      e = t.return;
      var l = Am(t.alternate, t, Pt);
      if (l !== null) {
        ee = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ee = t;
        return;
      }
      ee = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function Go(e, t) {
    do {
      var l = wm(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (ee = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ee = e;
        return;
      }
      ee = e = l;
    } while (e !== null);
    ((je = 6), (ee = null));
  }
  function Yo(e, t, l, a, n, c, u, s, o) {
    e.cancelPendingCommit = null;
    do Yc();
    while (Qe !== 0);
    if ((fe & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === e.current) throw Error(d(177));
      if (
        ((c = t.lanes | t.childLanes),
        (c |= Gi),
        dh(e, l, c, u, s, o),
        e === be && ((ee = be = null), (ie = 0)),
        (wa = t),
        (yl = e),
        (Ta = l),
        (Zu = c),
        (Lu = n),
        (Oo = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            qm(Dt, function () {
              return (Lo(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = j.T), (j.T = null), (n = R.p), (R.p = 2), (u = fe), (fe |= 4));
        try {
          Tm(e, t, l);
        } finally {
          ((fe = u), (R.p = n), (j.T = a));
        }
      }
      ((Qe = 1), Qo(), Xo(), Ko());
    }
  }
  function Qo() {
    if (Qe === 1) {
      Qe = 0;
      var e = yl,
        t = wa,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = j.T), (j.T = null));
        var a = R.p;
        R.p = 2;
        var n = fe;
        fe |= 4;
        try {
          ko(t, e);
          var c = ss,
            u = Er(e.containerInfo),
            s = c.focusedElem,
            o = c.selectionRange;
          if (
            u !== s &&
            s &&
            s.ownerDocument &&
            Tr(s.ownerDocument.documentElement, s)
          ) {
            if (o !== null && _i(s)) {
              var x = o.start,
                N = o.end;
              if ((N === void 0 && (N = x), "selectionStart" in s))
                ((s.selectionStart = x),
                  (s.selectionEnd = Math.min(N, s.value.length)));
              else {
                var A = s.ownerDocument || document,
                  g = (A && A.defaultView) || window;
                if (g.getSelection) {
                  var v = g.getSelection(),
                    L = s.textContent.length,
                    X = Math.min(o.start, L),
                    me = o.end === void 0 ? X : Math.min(o.end, L);
                  !v.extend && X > me && ((u = me), (me = X), (X = u));
                  var p = wr(s, X),
                    m = wr(s, me);
                  if (
                    p &&
                    m &&
                    (v.rangeCount !== 1 ||
                      v.anchorNode !== p.node ||
                      v.anchorOffset !== p.offset ||
                      v.focusNode !== m.node ||
                      v.focusOffset !== m.offset)
                  ) {
                    var b = A.createRange();
                    (b.setStart(p.node, p.offset),
                      v.removeAllRanges(),
                      X > me
                        ? (v.addRange(b), v.extend(m.node, m.offset))
                        : (b.setEnd(m.node, m.offset), v.addRange(b)));
                  }
                }
              }
            }
            for (A = [], v = s; (v = v.parentNode); )
              v.nodeType === 1 &&
                A.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < A.length;
              s++
            ) {
              var k = A[s];
              ((k.element.scrollLeft = k.left), (k.element.scrollTop = k.top));
            }
          }
          ((Ic = !!us), (ss = us = null));
        } finally {
          ((fe = n), (R.p = a), (j.T = l));
        }
      }
      ((e.current = t), (Qe = 2));
    }
  }
  function Xo() {
    if (Qe === 2) {
      Qe = 0;
      var e = yl,
        t = wa,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = j.T), (j.T = null));
        var a = R.p;
        R.p = 2;
        var n = fe;
        fe |= 4;
        try {
          vo(e, t.alternate, t);
        } finally {
          ((fe = n), (R.p = a), (j.T = l));
        }
      }
      Qe = 3;
    }
  }
  function Ko() {
    if (Qe === 4 || Qe === 3) {
      ((Qe = 0), U());
      var e = yl,
        t = wa,
        l = Ta,
        a = Oo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Qe = 5)
        : ((Qe = 0), (wa = yl = null), Zo(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (xl = null),
        mi(l),
        (t = t.stateNode),
        nt && typeof nt.onCommitFiberRoot == "function")
      )
        try {
          nt.onCommitFiberRoot(Ga, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = j.T), (n = R.p), (R.p = 2), (j.T = null));
        try {
          for (var c = e.onRecoverableError, u = 0; u < a.length; u++) {
            var s = a[u];
            c(s.value, { componentStack: s.stack });
          }
        } finally {
          ((j.T = t), (R.p = n));
        }
      }
      ((Ta & 3) !== 0 && Yc(),
        Ht(e),
        (n = e.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? e === Vu
            ? An++
            : ((An = 0), (Vu = e))
          : (An = 0),
        wn(0));
    }
  }
  function Zo(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), nn(t)));
  }
  function Yc(e) {
    return (Qo(), Xo(), Ko(), Lo());
  }
  function Lo() {
    if (Qe !== 5) return !1;
    var e = yl,
      t = Zu;
    Zu = 0;
    var l = mi(Ta),
      a = j.T,
      n = R.p;
    try {
      ((R.p = 32 > l ? 32 : l), (j.T = null), (l = Lu), (Lu = null));
      var c = yl,
        u = Ta;
      if (((Qe = 0), (wa = yl = null), (Ta = 0), (fe & 6) !== 0))
        throw Error(d(331));
      var s = fe;
      if (
        ((fe |= 4),
        zo(c.current),
        wo(c, c.current, u, l),
        (fe = s),
        wn(0, !1),
        nt && typeof nt.onPostCommitFiberRoot == "function")
      )
        try {
          nt.onPostCommitFiberRoot(Ga, c);
        } catch {}
      return !0;
    } finally {
      ((R.p = n), (j.T = a), Zo(e, t));
    }
  }
  function Vo(e, t, l) {
    ((t = xt(l, t)),
      (t = Au(e.stateNode, t, 2)),
      (e = sl(e, t, 2)),
      e !== null && (Qa(e, 2), Ht(e)));
  }
  function pe(e, t, l) {
    if (e.tag === 3) Vo(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vo(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (xl === null || !xl.has(a)))
          ) {
            ((e = xt(l, e)),
              (l = $f(2)),
              (a = sl(t, l, 2)),
              a !== null && (Wf(l, a, t, e), Qa(a, 2), Ht(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Wu(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Mm();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((Yu = !0), n.add(l), (e = _m.bind(null, e, t, l)), t.then(e, e));
  }
  function _m(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      be === e &&
        (ie & l) === l &&
        (je === 4 || (je === 3 && (ie & 62914560) === ie && 300 > J() - Ku)
          ? (fe & 2) === 0 && Ea(e, 0)
          : (Qu |= l),
        Aa === ie && (Aa = 0)),
      Ht(e));
  }
  function Jo(e, t) {
    (t === 0 && (t = Qs()), (e = fa(e, t)), e !== null && (Qa(e, t), Ht(e)));
  }
  function Um(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Jo(e, l));
  }
  function Hm(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    (a !== null && a.delete(t), Jo(e, l));
  }
  function qm(e, t) {
    return qa(e, t);
  }
  var Qc = null,
    Ma = null,
    Pu = !1,
    Xc = !1,
    Iu = !1,
    Zl = 0;
  function Ht(e) {
    (e !== Ma &&
      e.next === null &&
      (Ma === null ? (Qc = Ma = e) : (Ma = Ma.next = e)),
      (Xc = !0),
      Pu || ((Pu = !0), Gm()));
  }
  function wn(e, t) {
    if (!Iu && Xc) {
      Iu = !0;
      do
        for (var l = !1, a = Qc; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var c = 0;
            else {
              var u = a.suspendedLanes,
                s = a.pingedLanes;
              ((c = (1 << (31 - ct(42 | e) + 1)) - 1),
                (c &= n & ~(u & ~s)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((l = !0), Po(a, c));
          } else
            ((c = ie),
              (c = Fn(
                a,
                a === be ? c : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || Ya(a, c) || ((l = !0), Po(a, c)));
          a = a.next;
        }
      while (l);
      Iu = !1;
    }
  }
  function Bm() {
    Fo();
  }
  function Fo() {
    Xc = Pu = !1;
    var e = 0;
    Zl !== 0 && (Jm() && (e = Zl), (Zl = 0));
    for (var t = J(), l = null, a = Qc; a !== null; ) {
      var n = a.next,
        c = $o(a, t);
      (c === 0
        ? ((a.next = null),
          l === null ? (Qc = n) : (l.next = n),
          n === null && (Ma = l))
        : ((l = a), (e !== 0 || (c & 3) !== 0) && (Xc = !0)),
        (a = n));
    }
    wn(e);
  }
  function $o(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;
    ) {
      var u = 31 - ct(c),
        s = 1 << u,
        o = n[u];
      (o === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[u] = oh(s, t))
        : o <= t && (e.expiredLanes |= s),
        (c &= ~s));
    }
    if (
      ((t = be),
      (l = ie),
      (l = Fn(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (oe === 2 || oe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ba(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ya(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Ba(a), mi(l))) {
        case 2:
        case 8:
          l = Ot;
          break;
        case 32:
          l = Dt;
          break;
        case 268435456:
          l = Ln;
          break;
        default:
          l = Dt;
      }
      return (
        (a = Wo.bind(null, e)),
        (l = qa(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Ba(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Wo(e, t) {
    if (Qe !== 0 && Qe !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Yc() && e.callbackNode !== l) return null;
    var a = ie;
    return (
      (a = Fn(
        e,
        e === be ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Co(e, a, t),
          $o(e, J()),
          e.callbackNode != null && e.callbackNode === l
            ? Wo.bind(null, e)
            : null)
    );
  }
  function Po(e, t) {
    if (Yc()) return null;
    Co(e, t, !0);
  }
  function Gm() {
    $m(function () {
      (fe & 6) !== 0 ? qa(Ge, Bm) : Fo();
    });
  }
  function es() {
    return (Zl === 0 && (Zl = Ys()), Zl);
  }
  function Io(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : ec("" + e);
  }
  function ed(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function Ym(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var c = Io((n[We] || null).action),
        u = a.submitter;
      u &&
        ((t = (t = u[We] || null)
          ? Io(t.formAction)
          : u.getAttribute("formAction")),
        t !== null && ((c = t), (u = null)));
      var s = new nc("action", "action", null, a, n);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Zl !== 0) {
                  var o = u ? ed(n, u) : new FormData(n);
                  vu(
                    l,
                    { pending: !0, data: o, method: n.method, action: c },
                    null,
                    o,
                  );
                }
              } else
                typeof c == "function" &&
                  (s.preventDefault(),
                  (o = u ? ed(n, u) : new FormData(n)),
                  vu(
                    l,
                    { pending: !0, data: o, method: n.method, action: c },
                    c,
                    o,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var ts = 0; ts < Bi.length; ts++) {
    var ls = Bi[ts],
      Qm = ls.toLowerCase(),
      Xm = ls[0].toUpperCase() + ls.slice(1);
    At(Qm, "on" + Xm);
  }
  (At(Or, "onAnimationEnd"),
    At(Dr, "onAnimationIteration"),
    At(Cr, "onAnimationStart"),
    At("dblclick", "onDoubleClick"),
    At("focusin", "onFocus"),
    At("focusout", "onBlur"),
    At(im, "onTransitionRun"),
    At(um, "onTransitionStart"),
    At(sm, "onTransitionCancel"),
    At(Rr, "onTransitionEnd"),
    ea("onMouseEnter", ["mouseout", "mouseover"]),
    ea("onMouseLeave", ["mouseout", "mouseover"]),
    ea("onPointerEnter", ["pointerout", "pointerover"]),
    ea("onPointerLeave", ["pointerout", "pointerover"]),
    zl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    zl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    zl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    zl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    zl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    zl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Tn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Km = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Tn),
    );
  function td(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var s = a[u],
              o = s.instance,
              x = s.currentTarget;
            if (((s = s.listener), o !== c && n.isPropagationStopped()))
              break e;
            ((c = s), (n.currentTarget = x));
            try {
              c(n);
            } catch (N) {
              Mc(N);
            }
            ((n.currentTarget = null), (c = o));
          }
        else
          for (u = 0; u < a.length; u++) {
            if (
              ((s = a[u]),
              (o = s.instance),
              (x = s.currentTarget),
              (s = s.listener),
              o !== c && n.isPropagationStopped())
            )
              break e;
            ((c = s), (n.currentTarget = x));
            try {
              c(n);
            } catch (N) {
              Mc(N);
            }
            ((n.currentTarget = null), (c = o));
          }
      }
    }
  }
  function te(e, t) {
    var l = t[pi];
    l === void 0 && (l = t[pi] = new Set());
    var a = e + "__bubble";
    l.has(a) || (ld(t, e, 2, !1), l.add(a));
  }
  function as(e, t, l) {
    var a = 0;
    (t && (a |= 4), ld(l, e, a, t));
  }
  var Kc = "_reactListening" + Math.random().toString(36).slice(2);
  function ns(e) {
    if (!e[Kc]) {
      ((e[Kc] = !0),
        Vs.forEach(function (l) {
          l !== "selectionchange" && (Km.has(l) || as(l, !1, e), as(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Kc] || ((t[Kc] = !0), as("selectionchange", !1, t));
    }
  }
  function ld(e, t, l, a) {
    switch (wd(t)) {
      case 2:
        var n = xp;
        break;
      case 8:
        n = yp;
        break;
      default:
        n = ys;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !wi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function cs(e, t, l, a, n) {
    var c = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var o = u.tag;
              if ((o === 3 || o === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; s !== null; ) {
            if (((u = Wl(s)), u === null)) return;
            if (((o = u.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
              a = c = u;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    ur(function () {
      var x = c,
        N = ki(l),
        A = [];
      e: {
        var g = _r.get(e);
        if (g !== void 0) {
          var v = nc,
            L = e;
          switch (e) {
            case "keypress":
              if (lc(l) === 0) break e;
            case "keydown":
            case "keyup":
              v = qh;
              break;
            case "focusin":
              ((L = "focus"), (v = Mi));
              break;
            case "focusout":
              ((L = "blur"), (v = Mi));
              break;
            case "beforeblur":
            case "afterblur":
              v = Mi;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = fr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = wh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = Yh;
              break;
            case Or:
            case Dr:
            case Cr:
              v = zh;
              break;
            case Rr:
              v = Xh;
              break;
            case "scroll":
            case "scrollend":
              v = kh;
              break;
            case "wheel":
              v = Zh;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = Oh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = dr;
              break;
            case "toggle":
            case "beforetoggle":
              v = Vh;
          }
          var X = (t & 4) !== 0,
            me = !X && (e === "scroll" || e === "scrollend"),
            p = X ? (g !== null ? g + "Capture" : null) : g;
          X = [];
          for (var m = x, b; m !== null; ) {
            var k = m;
            if (
              ((b = k.stateNode),
              (k = k.tag),
              (k !== 5 && k !== 26 && k !== 27) ||
                b === null ||
                p === null ||
                ((k = Za(m, p)), k != null && X.push(En(m, k, b))),
              me)
            )
              break;
            m = m.return;
          }
          0 < X.length &&
            ((g = new v(g, L, null, l, N)), A.push({ event: g, listeners: X }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((g = e === "mouseover" || e === "pointerover"),
            (v = e === "mouseout" || e === "pointerout"),
            g &&
              l !== Ni &&
              (L = l.relatedTarget || l.fromElement) &&
              (Wl(L) || L[$l]))
          )
            break e;
          if (
            (v || g) &&
            ((g =
              N.window === N
                ? N
                : (g = N.ownerDocument)
                  ? g.defaultView || g.parentWindow
                  : window),
            v
              ? ((L = l.relatedTarget || l.toElement),
                (v = x),
                (L = L ? Wl(L) : null),
                L !== null &&
                  ((me = E(L)),
                  (X = L.tag),
                  L !== me || (X !== 5 && X !== 27 && X !== 6)) &&
                  (L = null))
              : ((v = null), (L = x)),
            v !== L)
          ) {
            if (
              ((X = fr),
              (k = "onMouseLeave"),
              (p = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((X = dr),
                (k = "onPointerLeave"),
                (p = "onPointerEnter"),
                (m = "pointer")),
              (me = v == null ? g : Ka(v)),
              (b = L == null ? g : Ka(L)),
              (g = new X(k, m + "leave", v, l, N)),
              (g.target = me),
              (g.relatedTarget = b),
              (k = null),
              Wl(N) === x &&
                ((X = new X(p, m + "enter", L, l, N)),
                (X.target = b),
                (X.relatedTarget = me),
                (k = X)),
              (me = k),
              v && L)
            )
              t: {
                for (X = v, p = L, m = 0, b = X; b; b = Oa(b)) m++;
                for (b = 0, k = p; k; k = Oa(k)) b++;
                for (; 0 < m - b; ) ((X = Oa(X)), m--);
                for (; 0 < b - m; ) ((p = Oa(p)), b--);
                for (; m--; ) {
                  if (X === p || (p !== null && X === p.alternate)) break t;
                  ((X = Oa(X)), (p = Oa(p)));
                }
                X = null;
              }
            else X = null;
            (v !== null && ad(A, g, v, X, !1),
              L !== null && me !== null && ad(A, me, L, X, !0));
          }
        }
        e: {
          if (
            ((g = x ? Ka(x) : window),
            (v = g.nodeName && g.nodeName.toLowerCase()),
            v === "select" || (v === "input" && g.type === "file"))
          )
            var H = vr;
          else if (yr(g))
            if (Sr) H = am;
            else {
              H = tm;
              var I = em;
            }
          else
            ((v = g.nodeName),
              !v ||
              v.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? x && ji(x.elementType) && (H = vr)
                : (H = lm));
          if (H && (H = H(e, x))) {
            gr(A, H, l, N);
            break e;
          }
          (I && I(e, g, x),
            e === "focusout" &&
              x &&
              g.type === "number" &&
              x.memoizedProps.value != null &&
              Si(g, "number", g.value));
        }
        switch (((I = x ? Ka(x) : window), e)) {
          case "focusin":
            (yr(I) || I.contentEditable === "true") &&
              ((ua = I), (Ui = x), (Ia = null));
            break;
          case "focusout":
            Ia = Ui = ua = null;
            break;
          case "mousedown":
            Hi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Hi = !1), zr(A, l, N));
            break;
          case "selectionchange":
            if (cm) break;
          case "keydown":
          case "keyup":
            zr(A, l, N);
        }
        var G;
        if (Di)
          e: {
            switch (e) {
              case "compositionstart":
                var K = "onCompositionStart";
                break e;
              case "compositionend":
                K = "onCompositionEnd";
                break e;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break e;
            }
            K = void 0;
          }
        else
          ia
            ? br(e, l) && (K = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (K = "onCompositionStart");
        (K &&
          (hr &&
            l.locale !== "ko" &&
            (ia || K !== "onCompositionStart"
              ? K === "onCompositionEnd" && ia && (G = sr())
              : ((nl = N),
                (Ti = "value" in nl ? nl.value : nl.textContent),
                (ia = !0))),
          (I = Zc(x, K)),
          0 < I.length &&
            ((K = new or(K, e, null, l, N)),
            A.push({ event: K, listeners: I }),
            G ? (K.data = G) : ((G = xr(l)), G !== null && (K.data = G)))),
          (G = Fh ? $h(e, l) : Wh(e, l)) &&
            ((K = Zc(x, "onBeforeInput")),
            0 < K.length &&
              ((I = new or("onBeforeInput", "beforeinput", null, l, N)),
              A.push({ event: I, listeners: K }),
              (I.data = G))),
          Ym(A, e, x, l, N));
      }
      td(A, t);
    });
  }
  function En(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Zc(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        c = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          c === null ||
          ((n = Za(e, l)),
          n != null && a.unshift(En(e, n, c)),
          (n = Za(e, t)),
          n != null && a.push(En(e, n, c))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Oa(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ad(e, t, l, a, n) {
    for (var c = t._reactName, u = []; l !== null && l !== a; ) {
      var s = l,
        o = s.alternate,
        x = s.stateNode;
      if (((s = s.tag), o !== null && o === a)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        x === null ||
        ((o = x),
        n
          ? ((x = Za(l, c)), x != null && u.unshift(En(l, x, o)))
          : n || ((x = Za(l, c)), x != null && u.push(En(l, x, o)))),
        (l = l.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Zm = /\r\n?/g,
    Lm = /\u0000|\uFFFD/g;
  function nd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Zm,
        `
`,
      )
      .replace(Lm, "");
  }
  function cd(e, t) {
    return ((t = nd(t)), nd(e) === t);
  }
  function Lc() {}
  function he(e, t, l, a, n, c) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || aa(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            aa(e, "" + a);
        break;
      case "className":
        Wn(e, "class", a);
        break;
      case "tabIndex":
        Wn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wn(e, l, a);
        break;
      case "style":
        cr(e, a, c);
        break;
      case "data":
        if (t !== "object") {
          Wn(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = ec("" + a)), e.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (l === "formAction"
              ? (t !== "input" && he(e, t, "name", n.name, n, null),
                he(e, t, "formEncType", n.formEncType, n, null),
                he(e, t, "formMethod", n.formMethod, n, null),
                he(e, t, "formTarget", n.formTarget, n, null))
              : (he(e, t, "encType", n.encType, n, null),
                he(e, t, "method", n.method, n, null),
                he(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((a = ec("" + a)), e.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (e.onclick = Lc);
        break;
      case "onScroll":
        a != null && te("scroll", e);
        break;
      case "onScrollEnd":
        a != null && te("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(d(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = ec("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        (te("beforetoggle", e), te("toggle", e), $n(e, "popover", a));
        break;
      case "xlinkActuate":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        $n(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = jh.get(l) || l), $n(e, l, a));
    }
  }
  function is(e, t, l, a, n, c) {
    switch (l) {
      case "style":
        cr(e, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(d(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? aa(e, a)
          : (typeof a == "number" || typeof a == "bigint") && aa(e, "" + a);
        break;
      case "onScroll":
        a != null && te("scroll", e);
        break;
      case "onScrollEnd":
        a != null && te("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Lc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Js.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (c = e[We] || null),
              (c = c != null ? c[l] : null),
              typeof c == "function" && e.removeEventListener(t, c, n),
              typeof a == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : $n(e, l, a);
          }
    }
  }
  function Xe(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (te("error", e), te("load", e));
        var a = !1,
          n = !1,
          c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var u = l[c];
            if (u != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, t));
                default:
                  he(e, t, c, u, l, null);
              }
          }
        (n && he(e, t, "srcSet", l.srcSet, l, null),
          a && he(e, t, "src", l.src, l, null));
        return;
      case "input":
        te("invalid", e);
        var s = (c = u = n = null),
          o = null,
          x = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var N = l[a];
            if (N != null)
              switch (a) {
                case "name":
                  n = N;
                  break;
                case "type":
                  u = N;
                  break;
                case "checked":
                  o = N;
                  break;
                case "defaultChecked":
                  x = N;
                  break;
                case "value":
                  c = N;
                  break;
                case "defaultValue":
                  s = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(d(137, t));
                  break;
                default:
                  he(e, t, a, N, l, null);
              }
          }
        (tr(e, c, s, o, x, u, n, !1), Pn(e));
        return;
      case "select":
        (te("invalid", e), (a = u = c = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                c = s;
                break;
              case "defaultValue":
                u = s;
                break;
              case "multiple":
                a = s;
              default:
                he(e, t, n, s, l, null);
            }
        ((t = c),
          (l = u),
          (e.multiple = !!a),
          t != null ? la(e, !!a, t, !1) : l != null && la(e, !!a, l, !0));
        return;
      case "textarea":
        (te("invalid", e), (c = n = a = null));
        for (u in l)
          if (l.hasOwnProperty(u) && ((s = l[u]), s != null))
            switch (u) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                c = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(d(91));
                break;
              default:
                he(e, t, u, s, l, null);
            }
        (ar(e, a, n, c), Pn(e));
        return;
      case "option":
        for (o in l)
          if (l.hasOwnProperty(o) && ((a = l[o]), a != null))
            switch (o) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                he(e, t, o, a, l, null);
            }
        return;
      case "dialog":
        (te("beforetoggle", e),
          te("toggle", e),
          te("cancel", e),
          te("close", e));
        break;
      case "iframe":
      case "object":
        te("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Tn.length; a++) te(Tn[a], e);
        break;
      case "image":
        (te("error", e), te("load", e));
        break;
      case "details":
        te("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (te("error", e), te("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in l)
          if (l.hasOwnProperty(x) && ((a = l[x]), a != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                he(e, t, x, a, l, null);
            }
        return;
      default:
        if (ji(t)) {
          for (N in l)
            l.hasOwnProperty(N) &&
              ((a = l[N]), a !== void 0 && is(e, t, N, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && he(e, t, s, a, l, null));
  }
  function Vm(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          c = null,
          u = null,
          s = null,
          o = null,
          x = null,
          N = null;
        for (v in l) {
          var A = l[v];
          if (l.hasOwnProperty(v) && A != null)
            switch (v) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = A;
              default:
                a.hasOwnProperty(v) || he(e, t, v, null, a, A);
            }
        }
        for (var g in a) {
          var v = a[g];
          if (((A = l[g]), a.hasOwnProperty(g) && (v != null || A != null)))
            switch (g) {
              case "type":
                c = v;
                break;
              case "name":
                n = v;
                break;
              case "checked":
                x = v;
                break;
              case "defaultChecked":
                N = v;
                break;
              case "value":
                u = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(d(137, t));
                break;
              default:
                v !== A && he(e, t, g, v, a, A);
            }
        }
        vi(e, u, s, o, x, N, c, n);
        return;
      case "select":
        v = u = s = g = null;
        for (c in l)
          if (((o = l[c]), l.hasOwnProperty(c) && o != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                v = o;
              default:
                a.hasOwnProperty(c) || he(e, t, c, null, a, o);
            }
        for (n in a)
          if (
            ((c = a[n]),
            (o = l[n]),
            a.hasOwnProperty(n) && (c != null || o != null))
          )
            switch (n) {
              case "value":
                g = c;
                break;
              case "defaultValue":
                s = c;
                break;
              case "multiple":
                u = c;
              default:
                c !== o && he(e, t, n, c, a, o);
            }
        ((t = s),
          (l = u),
          (a = v),
          g != null
            ? la(e, !!l, g, !1)
            : !!a != !!l &&
              (t != null ? la(e, !!l, t, !0) : la(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        v = g = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                he(e, t, s, null, a, n);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (c = l[u]),
            a.hasOwnProperty(u) && (n != null || c != null))
          )
            switch (u) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                v = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(d(91));
                break;
              default:
                n !== c && he(e, t, u, n, a, c);
            }
        lr(e, g, v);
        return;
      case "option":
        for (var L in l)
          if (
            ((g = l[L]),
            l.hasOwnProperty(L) && g != null && !a.hasOwnProperty(L))
          )
            switch (L) {
              case "selected":
                e.selected = !1;
                break;
              default:
                he(e, t, L, null, a, g);
            }
        for (o in a)
          if (
            ((g = a[o]),
            (v = l[o]),
            a.hasOwnProperty(o) && g !== v && (g != null || v != null))
          )
            switch (o) {
              case "selected":
                e.selected =
                  g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                he(e, t, o, g, a, v);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var X in l)
          ((g = l[X]),
            l.hasOwnProperty(X) &&
              g != null &&
              !a.hasOwnProperty(X) &&
              he(e, t, X, null, a, g));
        for (x in a)
          if (
            ((g = a[x]),
            (v = l[x]),
            a.hasOwnProperty(x) && g !== v && (g != null || v != null))
          )
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(d(137, t));
                break;
              default:
                he(e, t, x, g, a, v);
            }
        return;
      default:
        if (ji(t)) {
          for (var me in l)
            ((g = l[me]),
              l.hasOwnProperty(me) &&
                g !== void 0 &&
                !a.hasOwnProperty(me) &&
                is(e, t, me, void 0, a, g));
          for (N in a)
            ((g = a[N]),
              (v = l[N]),
              !a.hasOwnProperty(N) ||
                g === v ||
                (g === void 0 && v === void 0) ||
                is(e, t, N, g, a, v));
          return;
        }
    }
    for (var p in l)
      ((g = l[p]),
        l.hasOwnProperty(p) &&
          g != null &&
          !a.hasOwnProperty(p) &&
          he(e, t, p, null, a, g));
    for (A in a)
      ((g = a[A]),
        (v = l[A]),
        !a.hasOwnProperty(A) ||
          g === v ||
          (g == null && v == null) ||
          he(e, t, A, g, a, v));
  }
  var us = null,
    ss = null;
  function Vc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function id(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ud(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function rs(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var fs = null;
  function Jm() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === fs
        ? !1
        : ((fs = e), !0)
      : ((fs = null), !1);
  }
  var sd = typeof setTimeout == "function" ? setTimeout : void 0,
    Fm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rd = typeof Promise == "function" ? Promise : void 0,
    $m =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof rd < "u"
          ? function (e) {
              return rd.resolve(null).then(e).catch(Wm);
            }
          : sd;
  function Wm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function vl(e) {
    return e === "head";
  }
  function fd(e, t) {
    var l = t,
      a = 0,
      n = 0;
    do {
      var c = l.nextSibling;
      if ((e.removeChild(l), c && c.nodeType === 8))
        if (((l = c.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var u = e.ownerDocument;
            if ((l & 1 && zn(u.documentElement), l & 2 && zn(u.body), l & 4))
              for (l = u.head, zn(l), u = l.firstChild; u; ) {
                var s = u.nextSibling,
                  o = u.nodeName;
                (u[Xa] ||
                  o === "SCRIPT" ||
                  o === "STYLE" ||
                  (o === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(u),
                  (u = s));
              }
          }
          if (n === 0) {
            (e.removeChild(c), Hn(t));
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = c;
    } while (l);
    Hn(t);
  }
  function os(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (os(l), bi(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Pm(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Xa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((c = e.getAttribute("rel")),
                c === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((c = e.getAttribute("src")),
                (c !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  c &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (((e = Tt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Im(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Tt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ds(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function ep(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete") t();
    else {
      var a = function () {
        (t(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function Tt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var hs = null;
  function od(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function dd(e, t, l) {
    switch (((t = Vc(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(d(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(d(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(d(454));
        return e;
      default:
        throw Error(d(451));
    }
  }
  function zn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    bi(e);
  }
  var Nt = new Map(),
    hd = new Set();
  function Jc(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var It = R.d;
  R.d = { f: tp, r: lp, D: ap, C: np, L: cp, m: ip, X: sp, S: up, M: rp };
  function tp() {
    var e = It.f(),
      t = Bc();
    return e || t;
  }
  function lp(e) {
    var t = Pl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Df(t) : It.r(e);
  }
  var Da = typeof document > "u" ? null : document;
  function md(e, t, l) {
    var a = Da;
    if (a && typeof t == "string" && t) {
      var n = bt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        hd.has(n) ||
          (hd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Xe(t, "link", e),
            _e(t),
            a.head.appendChild(t))));
    }
  }
  function ap(e) {
    (It.D(e), md("dns-prefetch", e, null));
  }
  function np(e, t) {
    (It.C(e, t), md("preconnect", e, t));
  }
  function cp(e, t, l) {
    It.L(e, t, l);
    var a = Da;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + bt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + bt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + bt(l.imageSizes) + '"]'))
        : (n += '[href="' + bt(e) + '"]');
      var c = n;
      switch (t) {
        case "style":
          c = Ca(e);
          break;
        case "script":
          c = Ra(e);
      }
      Nt.has(c) ||
        ((e = C(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Nt.set(c, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Mn(c))) ||
          (t === "script" && a.querySelector(On(c))) ||
          ((t = a.createElement("link")),
          Xe(t, "link", e),
          _e(t),
          a.head.appendChild(t)));
    }
  }
  function ip(e, t) {
    It.m(e, t);
    var l = Da;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + bt(a) + '"][href="' + bt(e) + '"]',
        c = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Ra(e);
      }
      if (
        !Nt.has(c) &&
        ((e = C({ rel: "modulepreload", href: e }, t)),
        Nt.set(c, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(On(c))) return;
        }
        ((a = l.createElement("link")),
          Xe(a, "link", e),
          _e(a),
          l.head.appendChild(a));
      }
    }
  }
  function up(e, t, l) {
    It.S(e, t, l);
    var a = Da;
    if (a && e) {
      var n = Il(a).hoistableStyles,
        c = Ca(e);
      t = t || "default";
      var u = n.get(c);
      if (!u) {
        var s = { loading: 0, preload: null };
        if ((u = a.querySelector(Mn(c)))) s.loading = 5;
        else {
          ((e = C({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Nt.get(c)) && ms(e, l));
          var o = (u = a.createElement("link"));
          (_e(o),
            Xe(o, "link", e),
            (o._p = new Promise(function (x, N) {
              ((o.onload = x), (o.onerror = N));
            })),
            o.addEventListener("load", function () {
              s.loading |= 1;
            }),
            o.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Fc(u, t, a));
        }
        ((u = { type: "stylesheet", instance: u, count: 1, state: s }),
          n.set(c, u));
      }
    }
  }
  function sp(e, t) {
    It.X(e, t);
    var l = Da;
    if (l && e) {
      var a = Il(l).hoistableScripts,
        n = Ra(e),
        c = a.get(n);
      c ||
        ((c = l.querySelector(On(n))),
        c ||
          ((e = C({ src: e, async: !0 }, t)),
          (t = Nt.get(n)) && ps(e, t),
          (c = l.createElement("script")),
          _e(c),
          Xe(c, "link", e),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(n, c));
    }
  }
  function rp(e, t) {
    It.M(e, t);
    var l = Da;
    if (l && e) {
      var a = Il(l).hoistableScripts,
        n = Ra(e),
        c = a.get(n);
      c ||
        ((c = l.querySelector(On(n))),
        c ||
          ((e = C({ src: e, async: !0, type: "module" }, t)),
          (t = Nt.get(n)) && ps(e, t),
          (c = l.createElement("script")),
          _e(c),
          Xe(c, "link", e),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(n, c));
    }
  }
  function pd(e, t, l, a) {
    var n = (n = Z.current) ? Jc(n) : null;
    if (!n) throw Error(d(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = Ca(l.href)),
            (l = Il(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = Ca(l.href);
          var c = Il(n).hoistableStyles,
            u = c.get(e);
          if (
            (u ||
              ((n = n.ownerDocument || n),
              (u = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, u),
              (c = n.querySelector(Mn(e))) &&
                !c._p &&
                ((u.instance = c), (u.state.loading = 5)),
              Nt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Nt.set(e, l),
                c || fp(n, e, l, u.state))),
            t && a === null)
          )
            throw Error(d(528, ""));
          return u;
        }
        if (t && a !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ra(l)),
              (l = Il(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, e));
    }
  }
  function Ca(e) {
    return 'href="' + bt(e) + '"';
  }
  function Mn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function bd(e) {
    return C({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function fp(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Xe(t, "link", l),
        _e(t),
        e.head.appendChild(t));
  }
  function Ra(e) {
    return '[src="' + bt(e) + '"]';
  }
  function On(e) {
    return "script[async]" + e;
  }
  function xd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + bt(l.href) + '"]');
          if (a) return ((t.instance = a), _e(a), a);
          var n = C({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            _e(a),
            Xe(a, "style", n),
            Fc(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = Ca(l.href);
          var c = e.querySelector(Mn(n));
          if (c) return ((t.state.loading |= 4), (t.instance = c), _e(c), c);
          ((a = bd(l)),
            (n = Nt.get(n)) && ms(a, n),
            (c = (e.ownerDocument || e).createElement("link")),
            _e(c));
          var u = c;
          return (
            (u._p = new Promise(function (s, o) {
              ((u.onload = s), (u.onerror = o));
            })),
            Xe(c, "link", a),
            (t.state.loading |= 4),
            Fc(c, l.precedence, e),
            (t.instance = c)
          );
        case "script":
          return (
            (c = Ra(l.src)),
            (n = e.querySelector(On(c)))
              ? ((t.instance = n), _e(n), n)
              : ((a = l),
                (n = Nt.get(c)) && ((a = C({}, l)), ps(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                _e(n),
                Xe(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(d(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Fc(a, l.precedence, e));
    return t.instance;
  }
  function Fc(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        c = n,
        u = 0;
      u < a.length;
      u++
    ) {
      var s = a[u];
      if (s.dataset.precedence === t) c = s;
      else if (c !== n) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function ms(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function ps(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var $c = null;
  function yd(e, t, l) {
    if ($c === null) {
      var a = new Map(),
        n = ($c = new Map());
      n.set(l, a);
    } else ((n = $c), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var c = l[n];
      if (
        !(
          c[Xa] ||
          c[Ze] ||
          (e === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var u = c.getAttribute(t) || "";
        u = e + u;
        var s = a.get(u);
        s ? s.push(c) : a.set(u, [c]);
      }
    }
    return a;
  }
  function gd(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function op(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function vd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Dn = null;
  function dp() {}
  function hp(e, t, l) {
    if (Dn === null) throw Error(d(475));
    var a = Dn;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = Ca(l.href),
          c = e.querySelector(Mn(n));
        if (c) {
          ((e = c._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = Wc.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = c),
            _e(c));
          return;
        }
        ((c = e.ownerDocument || e),
          (l = bd(l)),
          (n = Nt.get(n)) && ms(l, n),
          (c = c.createElement("link")),
          _e(c));
        var u = c;
        ((u._p = new Promise(function (s, o) {
          ((u.onload = s), (u.onerror = o));
        })),
          Xe(c, "link", l),
          (t.instance = c));
      }
      (a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Wc.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t)));
    }
  }
  function mp() {
    if (Dn === null) throw Error(d(475));
    var e = Dn;
    return (
      e.stylesheets && e.count === 0 && bs(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && bs(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                ((e.unsuspend = null), a());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Wc() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) bs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Pc = null;
  function bs(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Pc = new Map()),
        t.forEach(pp, e),
        (Pc = null),
        Wc.call(e)));
  }
  function pp(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Pc.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), Pc.set(e, l));
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < n.length;
          c++
        ) {
          var u = n[c];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") &&
            (l.set(u.dataset.precedence, u), (a = u));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (u = n.getAttribute("data-precedence")),
        (c = l.get(u) || a),
        c === a && l.set(null, n),
        l.set(u, n),
        this.count++,
        (a = Wc.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        c
          ? c.parentNode.insertBefore(n, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Cn = {
    $$typeof: ze,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0,
  };
  function bp(e, t, l, a, n, c, u, s) {
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
      (this.expirationTimes = di(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = di(0)),
      (this.hiddenUpdates = di(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = c),
      (this.onRecoverableError = u),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function Sd(e, t, l, a, n, c, u, s, o, x, N, A) {
    return (
      (e = new bp(e, t, l, u, s, o, x, A)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = ut(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = Wi()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: a, isDehydrated: l, cache: t }),
      tu(c),
      e
    );
  }
  function jd(e) {
    return e ? ((e = oa), e) : oa;
  }
  function Nd(e, t, l, a, n, c) {
    ((n = jd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ul(t)),
      (a.payload = { element: l }),
      (c = c === void 0 ? null : c),
      c !== null && (a.callback = c),
      (l = sl(e, a, t)),
      l !== null && (dt(l, e, t), rn(l, e, t)));
  }
  function kd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function xs(e, t) {
    (kd(e, t), (e = e.alternate) && kd(e, t));
  }
  function Ad(e) {
    if (e.tag === 13) {
      var t = fa(e, 67108864);
      (t !== null && dt(t, e, 67108864), xs(e, 67108864));
    }
  }
  var Ic = !0;
  function xp(e, t, l, a) {
    var n = j.T;
    j.T = null;
    var c = R.p;
    try {
      ((R.p = 2), ys(e, t, l, a));
    } finally {
      ((R.p = c), (j.T = n));
    }
  }
  function yp(e, t, l, a) {
    var n = j.T;
    j.T = null;
    var c = R.p;
    try {
      ((R.p = 8), ys(e, t, l, a));
    } finally {
      ((R.p = c), (j.T = n));
    }
  }
  function ys(e, t, l, a) {
    if (Ic) {
      var n = gs(a);
      if (n === null) (cs(e, t, a, ei, l), Td(e, a));
      else if (vp(n, e, t, l, a)) a.stopPropagation();
      else if ((Td(e, a), t & 4 && -1 < gp.indexOf(e))) {
        for (; n !== null; ) {
          var c = Pl(n);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var u = El(c.pendingLanes);
                  if (u !== 0) {
                    var s = c;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; u; ) {
                      var o = 1 << (31 - ct(u));
                      ((s.entanglements[1] |= o), (u &= ~o));
                    }
                    (Ht(c), (fe & 6) === 0 && ((Hc = J() + 500), wn(0)));
                  }
                }
                break;
              case 13:
                ((s = fa(c, 2)), s !== null && dt(s, c, 2), Bc(), xs(c, 2));
            }
          if (((c = gs(a)), c === null && cs(e, t, a, ei, l), c === n)) break;
          n = c;
        }
        n !== null && a.stopPropagation();
      } else cs(e, t, a, null, l);
    }
  }
  function gs(e) {
    return ((e = ki(e)), vs(e));
  }
  var ei = null;
  function vs(e) {
    if (((ei = null), (e = Wl(e)), e !== null)) {
      var t = E(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = M(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((ei = e), null);
  }
  function wd(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ge()) {
          case Ge:
            return 2;
          case Ot:
            return 8;
          case Dt:
          case Zn:
            return 32;
          case Ln:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ss = !1,
    Sl = null,
    jl = null,
    Nl = null,
    Rn = new Map(),
    _n = new Map(),
    kl = [],
    gp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Td(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Sl = null;
        break;
      case "dragenter":
      case "dragleave":
        jl = null;
        break;
      case "mouseover":
      case "mouseout":
        Nl = null;
        break;
      case "pointerover":
      case "pointerout":
        Rn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(t.pointerId);
    }
  }
  function Un(e, t, l, a, n, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [n],
        }),
        t !== null && ((t = Pl(t)), t !== null && Ad(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function vp(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return ((Sl = Un(Sl, e, t, l, a, n)), !0);
      case "dragenter":
        return ((jl = Un(jl, e, t, l, a, n)), !0);
      case "mouseover":
        return ((Nl = Un(Nl, e, t, l, a, n)), !0);
      case "pointerover":
        var c = n.pointerId;
        return (Rn.set(c, Un(Rn.get(c) || null, e, t, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (c = n.pointerId),
          _n.set(c, Un(_n.get(c) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Ed(e) {
    var t = Wl(e.target);
    if (t !== null) {
      var l = E(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = M(l)), t !== null)) {
            ((e.blockedOn = t),
              hh(e.priority, function () {
                if (l.tag === 13) {
                  var a = ot();
                  a = hi(a);
                  var n = fa(l, a);
                  (n !== null && dt(n, l, a), xs(l, a));
                }
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ti(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = gs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Ni = a), l.target.dispatchEvent(a), (Ni = null));
      } else return ((t = Pl(l)), t !== null && Ad(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function zd(e, t, l) {
    ti(e) && l.delete(t);
  }
  function Sp() {
    ((Ss = !1),
      Sl !== null && ti(Sl) && (Sl = null),
      jl !== null && ti(jl) && (jl = null),
      Nl !== null && ti(Nl) && (Nl = null),
      Rn.forEach(zd),
      _n.forEach(zd));
  }
  function li(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ss ||
        ((Ss = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, Sp)));
  }
  var ai = null;
  function Md(e) {
    ai !== e &&
      ((ai = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        ai === e && (ai = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (vs(a || l) === null) continue;
            break;
          }
          var c = Pl(l);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            vu(c, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Hn(e) {
    function t(o) {
      return li(o, e);
    }
    (Sl !== null && li(Sl, e),
      jl !== null && li(jl, e),
      Nl !== null && li(Nl, e),
      Rn.forEach(t),
      _n.forEach(t));
    for (var l = 0; l < kl.length; l++) {
      var a = kl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < kl.length && ((l = kl[0]), l.blockedOn === null); )
      (Ed(l), l.blockedOn === null && kl.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          c = l[a + 1],
          u = n[We] || null;
        if (typeof c == "function") u || Md(l);
        else if (u) {
          var s = null;
          if (c && c.hasAttribute("formAction")) {
            if (((n = c), (u = c[We] || null))) s = u.formAction;
            else if (vs(n) !== null) continue;
          } else s = u.action;
          (typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            Md(l));
        }
      }
  }
  function js(e) {
    this._internalRoot = e;
  }
  ((ni.prototype.render = js.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      var l = t.current,
        a = ot();
      Nd(l, a, e, t, null, null);
    }),
    (ni.prototype.unmount = js.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Nd(e.current, 2, null, e, null, null), Bc(), (t[$l] = null));
        }
      }));
  function ni(e) {
    this._internalRoot = e;
  }
  ni.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Zs();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < kl.length && t !== 0 && t < kl[l].priority; l++);
      (kl.splice(l, 0, e), l === 0 && Ed(e));
    }
  };
  var Od = f.version;
  if (Od !== "19.1.0") throw Error(d(527, Od, "19.1.0"));
  R.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(d(188))
        : ((e = Object.keys(e).join(",")), Error(d(268, e)));
    return (
      (e = O(t)),
      (e = e !== null ? S(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var jp = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ci.isDisabled && ci.supportsFiber)
      try {
        ((Ga = ci.inject(jp)), (nt = ci));
      } catch {}
  }
  return (
    (Bn.createRoot = function (e, t) {
      if (!T(e)) throw Error(d(299));
      var l = !1,
        a = "",
        n = Lf,
        c = Vf,
        u = Jf,
        s = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (s = t.unstable_transitionCallbacks)),
        (t = Sd(e, 1, !1, null, null, l, a, n, c, u, s, null)),
        (e[$l] = t.current),
        ns(e),
        new js(t)
      );
    }),
    (Bn.hydrateRoot = function (e, t, l) {
      if (!T(e)) throw Error(d(299));
      var a = !1,
        n = "",
        c = Lf,
        u = Vf,
        s = Jf,
        o = null,
        x = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (c = l.onUncaughtError),
          l.onCaughtError !== void 0 && (u = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (o = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (x = l.formState)),
        (t = Sd(e, 1, !0, t, l ?? null, a, n, c, u, s, o, x)),
        (t.context = jd(null)),
        (l = t.current),
        (a = ot()),
        (a = hi(a)),
        (n = ul(a)),
        (n.callback = null),
        sl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Qa(t, l),
        Ht(t),
        (e[$l] = t.current),
        ns(e),
        new ni(t)
      );
    }),
    (Bn.version = "19.1.0"),
    Bn
  );
}
var Yd;
function Dp() {
  if (Yd) return ks.exports;
  Yd = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (f) {
        console.error(f);
      }
  }
  return (r(), (ks.exports = Op()), ks.exports);
}
var Cp = Dp(),
  q = Os();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rp = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Wd = (...r) =>
    r
      .filter((f, y, d) => !!f && f.trim() !== "" && d.indexOf(f) === y)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var _p = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Up = q.forwardRef(
  (
    {
      color: r = "currentColor",
      size: f = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: d,
      className: T = "",
      children: E,
      iconNode: M,
      ...z
    },
    O,
  ) =>
    q.createElement(
      "svg",
      {
        ref: O,
        ..._p,
        width: f,
        height: f,
        stroke: r,
        strokeWidth: d ? (Number(y) * 24) / Number(f) : y,
        className: Wd("lucide", T),
        ...z,
      },
      [
        ...M.map(([S, C]) => q.createElement(S, C)),
        ...(Array.isArray(E) ? E : [E]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ye = (r, f) => {
  const y = q.forwardRef(({ className: d, ...T }, E) =>
    q.createElement(Up, {
      ref: E,
      iconNode: f,
      className: Wd(`lucide-${Rp(r)}`, d),
      ...T,
    }),
  );
  return ((y.displayName = `${r}`), y);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yn = ye("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hp = ye("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qp = ye("BadgeIndianRupee", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336",
    },
  ],
  ["path", { d: "M8 8h8", key: "1bis0t" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8", key: "nu2bwa" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pd = ye("CalendarCheck", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bp = ye("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ds = ye("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qn = ye("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gp = ye("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yp = ye("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qp = ye("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xp = ye("MapPinned", [
  [
    "path",
    {
      d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
      key: "11u0oz",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "path",
    {
      d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
      key: "q8zwxj",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kp = ye("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zp = ye("PackageCheck", [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h",
    },
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lp = ye("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vp = ye("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jp = ye("QrCode", [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  [
    "rect",
    { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" },
  ],
  [
    "rect",
    { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" },
  ],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xn = ye("Recycle", [
  [
    "path",
    {
      d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
      key: "x6z5xu",
    },
  ],
  [
    "path",
    {
      d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
      key: "1x4zh5",
    },
  ],
  ["path", { d: "m14 16-3 3 3 3", key: "f6jyew" }],
  ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598", key: "wf1obh" }],
  [
    "path",
    {
      d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
      key: "9tzpgr",
    },
  ],
  ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096", key: "1oe83g" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cs = ye("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Id = ye("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ua = ye("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const si = ye("Truck", [
  [
    "path",
    {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      key: "wrbu53",
    },
  ],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i",
    },
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fp = ye("WalletCards", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }],
  [
    "path",
    {
      d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
      key: "1dpki6",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $p = ye("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6",
    },
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rs = ye("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ce = {
    domain: "https://www.kabadfactory.com",
    apiBaseUrl: "https://api.kabadfactory.com/api",
    phone: "+91 8319060820",
    phonePlain: "918319060820",
    email: "contact@kabadfactory.com",
    address: "Thatipur, Gwalior, Madhya Pradesh, India",
    city: "Gwalior",
    region: "Madhya Pradesh",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM",
    appDownloadUrl: "/app-coming-soon",
    assets: {
      heroBanner: "/assets/kabad-hero-banner.png",
      appMockup: "/assets/kabad-app-mockup.png",
      logo: "/assets/kabad-factory-logo.png",
    },
  };
async function el(r, f = {}) {
  const y = new Headers(f.headers);
  (y.set("Content-Type", "application/json"),
    f.token && y.set("Authorization", `Bearer ${f.token}`));
  const d = await fetch(`${ce.apiBaseUrl}${r}`, { ...f, headers: y }),
    E = (d.headers.get("content-type") || "").includes("application/json")
      ? await d.json()
      : await d.text();
  if (!d.ok) {
    const M =
      typeof E == "object" && E && "message" in E
        ? String(E.message)
        : "Something went wrong. Please try again.";
    throw new Error(M);
  }
  return E;
}
const eh = q.createContext({
  session: null,
  loading: !0,
  setSession: () => {},
  logout: () => {},
});
function Wp({ children: r }) {
  const [f, y] = q.useState(null),
    [d, T] = q.useState(!0);
  q.useEffect(() => {
    const z = localStorage.getItem("kabadFactorySession");
    if (!z) {
      T(!1);
      return;
    }
    const O = JSON.parse(z);
    el("/auth/me", { token: O.token })
      .then((S) => y({ ...O, user: S.user }))
      .catch(() => localStorage.removeItem("kabadFactorySession"))
      .finally(() => T(!1));
  }, []);
  function E(z) {
    (y(z),
      z
        ? localStorage.setItem("kabadFactorySession", JSON.stringify(z))
        : localStorage.removeItem("kabadFactorySession"));
  }
  const M = q.useMemo(
    () => ({ session: f, loading: d, setSession: E, logout: () => E(null) }),
    [d, f],
  );
  return i.jsx(eh.Provider, { value: M, children: r });
}
function ri() {
  return q.useContext(eh);
}
const Qd = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/scrap-rates", label: "Scrap Rates" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" },
  ],
  Pp = [
    {
      icon: Qp,
      title: "Check Your PIN",
      body: "Confirm pickup availability for your area before scheduling.",
    },
    {
      icon: Xn,
      title: "Select Your Scrap",
      body: "Choose paper, metal, plastic, appliances, or e-waste.",
    },
    {
      icon: Pd,
      title: "Schedule Pickup",
      body: "Pick your saved address, date, and convenient time slot.",
    },
    {
      icon: Zp,
      title: "Weigh & Verify",
      body: "Scrap is checked and weighed during pickup.",
    },
    {
      icon: $p,
      title: "Get Paid",
      body: "Final amount is calculated after verified pickup details.",
    },
  ],
  th = [
    [
      "iron",
      "Iron",
      "Sell Iron Scrap in Gwalior",
      "iron rods, grills, mixed loha, machinery parts, and household metal scrap",
    ],
    [
      "copper",
      "Copper",
      "Sell Copper Scrap in Gwalior",
      "copper wire, pipes, motors, coils, and clean copper material",
    ],
    [
      "aluminium",
      "Aluminium",
      "Sell Aluminium Scrap in Gwalior",
      "aluminium utensils, profiles, sections, frames, and sheets",
    ],
    [
      "newspaper",
      "Newspaper",
      "Sell Newspaper Scrap in Gwalior",
      "old newspapers, raddi paper, magazines, and paper bundles",
    ],
    [
      "cardboard",
      "Cardboard",
      "Sell Cardboard Scrap in Gwalior",
      "cartons, packaging boxes, brown cardboard, and clean dry paperboard",
    ],
    [
      "plastic",
      "Plastic",
      "Sell Plastic Scrap in Gwalior",
      "plastic bottles, containers, mixed plastic, and reusable household plastic",
    ],
    [
      "e-waste",
      "E-Waste",
      "Sell E-Waste in Gwalior",
      "laptops, CPUs, wires, phones, batteries, and electronic scrap",
    ],
    [
      "ac",
      "AC",
      "Sell AC Scrap in Gwalior",
      "window AC, split AC, copper coils, compressors, and AC bodies",
    ],
    [
      "refrigerator",
      "Refrigerator",
      "Sell Refrigerator Scrap in Gwalior",
      "single-door fridges, double-door fridges, compressors, and appliance scrap",
    ],
  ],
  Ip = [
    [
      "doorstep-scrap-pickup",
      "Doorstep Scrap Pickup",
      "Doorstep Scrap Pickup in Gwalior",
      "Schedule pickup from home and let a verified executive collect recyclable scrap from your address.",
    ],
    [
      "household-scrap-pickup",
      "Household Scrap Pickup",
      "Household Scrap Pickup in Gwalior",
      "Clear common home scrap with a simple online booking and verified doorstep collection.",
    ],
    [
      "bulk-scrap-pickup",
      "Bulk Scrap Pickup",
      "Bulk Scrap Pickup in Gwalior",
      "Plan large scrap pickups for homes, societies, shops, schools, and local businesses.",
    ],
    [
      "office-scrap-pickup",
      "Office Scrap Pickup",
      "Office Scrap Pickup in Gwalior",
      "Dispose of paper, e-waste, packaging, and office junk with a documented pickup flow.",
    ],
    [
      "commercial-scrap-pickup",
      "Commercial Scrap Pickup",
      "Commercial Scrap Pickup in Gwalior",
      "Coordinate recurring or one-time commercial scrap collection with transparent rates and billing.",
    ],
    [
      "e-waste-pickup",
      "E-Waste Pickup",
      "E-Waste Pickup in Gwalior",
      "Schedule responsible pickup for wires, small electronics, computers, and other accepted e-waste.",
    ],
  ],
  Ll = [
    {
      question: "How do I sell scrap online in Gwalior?",
      answer:
        "Check your PIN code, select scrap items, choose a pickup date and time, then schedule the request. Kabad Factory confirms the pickup and an executive visits your address.",
    },
    {
      question: "Are scrap rates fixed?",
      answer:
        "Rates are managed from the Kabad Factory backend and may change with market conditions, scrap quality, and quantity. The website reads current rates from the same database used by the app.",
    },
    {
      question: "How is pickup charge calculated?",
      answer:
        "The backend checks the customer's pickup PIN code against active store PIN codes, applies the configured distance slabs and the 5 km buffer rule, then stores the charge snapshot on the order.",
    },
    {
      question: "When do I receive payment?",
      answer:
        "After the executive weighs and confirms collected scrap, the final payable amount is calculated and payment is completed according to the order workflow.",
    },
  ],
  Vl = [
    {
      path: "/",
      label: "Home",
      kind: "home",
      seo: {
        title:
          "Sell Scrap Online in Gwalior | Doorstep Scrap Pickup | Kabad Factory",
        description:
          "Sell scrap online in Gwalior with Kabad Factory. Check pickup availability, view today's scrap rates, schedule doorstep scrap pickup, and track orders online.",
        canonical: "/",
      },
      h1: "Sell Scrap Online in Gwalior",
      faqs: Ll,
    },
    {
      path: "/about",
      label: "About",
      kind: "content",
      seo: {
        title:
          "About Kabad Factory | Online Scrap Pickup & Recycling in Gwalior",
        description:
          "Learn how Kabad Factory makes online scrap pickup and recycling in Gwalior simple with doorstep pickup, transparent scrap rates, saved addresses, and app-based order tracking.",
        canonical: "/about",
      },
      h1: "About Kabad Factory",
      intro:
        "A cleaner, simpler way for Gwalior homes and businesses to sell recyclables from the doorstep.",
      sections: [
        {
          title: "Effortless Doorstep Pickup",
          body: "Schedule pickup from your home without carrying paper, metal, plastic, electronics, or household scrap to a local dealer.",
        },
        {
          title: "Transparent Scrap Rates",
          body: "View current prices and understand how your scrap value is calculated before the executive confirms final weight.",
        },
        {
          title: "Digital Convenience",
          body: "Manage pickups, saved addresses, order history, and account details through the website or Kabad Factory mobile app.",
        },
        {
          title: "Responsible Recycling",
          body: "Help keep recyclable material out of waste streams and put useful scrap back into productive circulation.",
        },
      ],
    },
    {
      path: "/pickup-services",
      label: "Pickup Services",
      kind: "servicesIndex",
      seo: {
        title:
          "Pickup Services in Gwalior | Doorstep Scrap Pickup | Kabad Factory",
        description:
          "Explore Kabad Factory pickup services for household scrap, bulk scrap, office scrap, commercial scrap, e-waste and serviceable PIN areas in Gwalior.",
        canonical: "/pickup-services",
      },
      h1: "Pickup Services",
      intro:
        "Understand what Kabad Factory collects, where pickup is currently available, and how to check serviceability before booking.",
      faqs: Ll,
    },
    {
      path: "/contact",
      label: "Contact",
      kind: "content",
      seo: {
        title: "Contact Kabad Factory Gwalior | Scrap Pickup Support",
        description:
          "Contact Kabad Factory for doorstep scrap pickup, bulk scrap collection, rates, orders, and customer support in Gwalior.",
        canonical: "/contact",
      },
      h1: "Contact Kabad Factory",
      intro: `${ce.phone} | ${ce.email} | ${ce.address}`,
      sections: [
        {
          title: "Call or WhatsApp",
          body: `For pickup help, call ${ce.phone} or use WhatsApp support during business hours.`,
        },
        {
          title: "Service Area",
          body: "Kabad Factory currently focuses on Gwalior and nearby serviceable PIN codes configured in the backend.",
        },
      ],
    },
    {
      path: "/how-it-works",
      label: "How It Works",
      kind: "content",
      seo: {
        title: "How Scrap Pickup Works | Kabad Factory Gwalior",
        description:
          "See how to check your PIN code, select scrap items, choose a pickup slot, and receive transparent payment with Kabad Factory.",
        canonical: "/how-it-works",
      },
      h1: "How Doorstep Scrap Pickup Works",
      sections: [
        {
          title: "1. Check Pickup Availability",
          body: "Enter your PIN code so the backend can verify serviceability and pickup charge using configured stores and charge slabs.",
        },
        {
          title: "2. Select Scrap Items",
          body: "Choose paper, metal, plastic, appliance, or e-waste categories and add an estimated weight.",
        },
        {
          title: "3. Schedule a Slot",
          body: "Login or register, select address, date and time, then create the pickup request.",
        },
        {
          title: "4. Weigh, Pay, and Bill",
          body: "The executive records actual weights, final payable amount, payment status, and bill details.",
        },
      ],
    },
    {
      path: "/scrap-rates",
      label: "Scrap Rates",
      kind: "rates",
      seo: {
        title: "Today's Scrap Rates in Gwalior | Kabad Factory",
        description:
          "Check current scrap rates in Gwalior for newspaper, iron, copper, aluminium, plastic, cardboard, e-waste, AC and more.",
        canonical: "/scrap-rates",
      },
      h1: "Today's Scrap Rates in Gwalior",
      faqs: Ll,
    },
    {
      path: "/schedule-pickup",
      label: "Schedule Pickup",
      kind: "schedule",
      seo: {
        title: "Schedule Scrap Pickup Online in Gwalior | Kabad Factory",
        description:
          "Book a doorstep scrap pickup online with Kabad Factory using the same secure backend as the mobile app.",
        canonical: "/schedule-pickup",
      },
      h1: "Schedule Scrap Pickup",
    },
    {
      path: "/app-coming-soon",
      label: "App Coming Soon",
      kind: "appComingSoon",
      seo: {
        title: "Kabad Factory Mobile App Coming Soon",
        description:
          "The Kabad Factory Android and iOS mobile apps are currently under development.",
        canonical: "/app-coming-soon",
      },
      h1: "Our Mobile App Is Coming Soon!",
    },
    {
      path: "/gwalior",
      label: "Gwalior",
      kind: "city",
      seo: {
        title:
          "Online Kabadiwala in Gwalior | Sell Kabad Online | Kabad Factory",
        description:
          "Kabad Factory helps Gwalior customers sell scrap online, check rates, verify PIN serviceability, and book doorstep pickup.",
        canonical: "/gwalior",
      },
      h1: "Online Kabadiwala in Gwalior",
      intro:
        "A local-first page for customers searching kabadiwala near me, raddi wala near me, or doorstep scrap pickup in Gwalior.",
      faqs: Ll,
    },
    {
      path: "/gwalior/scrap-rates",
      label: "Gwalior Scrap Rates",
      kind: "rates",
      seo: {
        title: "Scrap Rates Gwalior | Live Kabad Rates | Kabad Factory",
        description:
          "View current Gwalior scrap rates from the Kabad Factory backend and schedule a pickup from serviceable PIN codes.",
        canonical: "/gwalior/scrap-rates",
      },
      h1: "Scrap Rates Gwalior",
    },
    {
      path: "/blog",
      label: "Blog",
      kind: "blog",
      seo: {
        title: "Scrap Selling Guides | Kabad Factory Blog",
        description:
          "Helpful guides about selling scrap, preparing recyclable material, checking rates, and booking pickup in Gwalior.",
        canonical: "/blog",
      },
      h1: "Scrap Selling Guides",
    },
    {
      path: "/faq",
      label: "FAQ",
      kind: "faq",
      seo: {
        title: "Kabad Factory FAQ | Scrap Pickup Questions",
        description:
          "Answers about Kabad Factory scrap pickup, rates, pickup charges, orders, payment, and support.",
        canonical: "/faq",
      },
      h1: "Frequently Asked Questions",
      faqs: Ll,
    },
    {
      path: "/login",
      label: "Login",
      kind: "auth",
      noSitemap: !0,
      seo: {
        title: "Login | Kabad Factory",
        description: "Login to your Kabad Factory account.",
        canonical: "/login",
        noindex: !0,
      },
    },
    {
      path: "/register",
      label: "Register",
      kind: "auth",
      noSitemap: !0,
      seo: {
        title: "Register | Kabad Factory",
        description: "Create a Kabad Factory account.",
        canonical: "/register",
        noindex: !0,
      },
    },
    {
      path: "/account",
      label: "Account",
      kind: "account",
      noSitemap: !0,
      seo: {
        title: "Account | Kabad Factory",
        description: "Manage your Kabad Factory account.",
        canonical: "/account",
        noindex: !0,
      },
    },
    {
      path: "/orders",
      label: "Orders",
      kind: "account",
      noSitemap: !0,
      seo: {
        title: "Orders | Kabad Factory",
        description: "View your Kabad Factory pickup orders.",
        canonical: "/orders",
        noindex: !0,
      },
    },
    {
      path: "/privacy-policy",
      label: "Privacy Policy",
      kind: "legal",
      seo: {
        title: "Privacy Policy | Kabad Factory",
        description:
          "Read Kabad Factory privacy practices for customer data, pickup orders, support requests, and account information.",
        canonical: "/privacy-policy",
      },
      h1: "Privacy Policy",
    },
    {
      path: "/terms",
      label: "Terms",
      kind: "legal",
      seo: {
        title: "Terms and Conditions | Kabad Factory",
        description:
          "Read Kabad Factory service terms for scrap pickup, rates, payment, pickup charges, and account usage.",
        canonical: "/terms",
      },
      h1: "Terms and Conditions",
    },
  ];
th.forEach(([r, f, y, d]) => {
  Vl.push({
    path: `/sell-scrap/${r}`,
    label: f,
    kind: "scrap",
    category: f,
    seo: {
      title: `${y} | Today's Rates & Doorstep Pickup | Kabad Factory`,
      description: `${y} with Kabad Factory. Check current ${f.toLowerCase()} scrap rate, pickup availability, charges, accepted material and online scheduling.`,
      canonical: `/sell-scrap/${r}`,
    },
    h1: y,
    intro: `Book doorstep pickup for ${d} in Gwalior with current database-backed rates.`,
    sections: [
      { title: `What ${f} Scrap We Accept`, body: d },
      {
        title: "How Pricing Works",
        body: "Current rates come from the Kabad Factory backend. Final payment uses executive-confirmed actual weight and saved rate snapshots.",
      },
      {
        title: "Pickup Charges",
        body: "Pickup charge is calculated by the backend from your pickup PIN code and nearest active store, including the 5 km buffer rule.",
      },
    ],
    faqs: Ll,
  });
});
Ip.forEach(([r, f, y, d]) => {
  Vl.push({
    path: `/services/${r}`,
    label: f,
    kind: "service",
    seo: {
      title: `${y} | Kabad Factory`,
      description: `${d} Check PIN availability, rates, and schedule online with Kabad Factory.`,
      canonical: `/services/${r}`,
    },
    h1: y,
    intro: d,
    sections: [
      {
        title: "Who It Is For",
        body: "Homes, shops, offices, societies, and businesses that want organized pickup and transparent settlement.",
      },
      {
        title: "What You Can Track",
        body: "Pickup status, selected items, pickup charge, final payable amount, and downloadable bill after completion.",
      },
      {
        title: "Start Online",
        body: "Use the PIN checker and schedule form to create a pickup request directly on the website.",
      },
    ],
    faqs: Ll,
  });
});
Vl.filter((r) => !r.noSitemap && r.kind !== "notFound");
const e0 = [
  {
    href: "/pickup-services",
    title: "Doorstep Pickup",
    body: "Household, office and bulk collection",
    icon: si,
  },
  {
    href: "/scrap-rates",
    title: "Transparent Rates",
    body: "Check latest scrap prices",
    icon: qp,
  },
  {
    href: "/schedule-pickup",
    title: "Easy Scheduling",
    body: "Book a date and time online",
    icon: Pd,
  },
  {
    href: "/orders",
    title: "Order Tracking",
    body: "Track pickup status and charges",
    icon: Yp,
  },
];
function t0(r = "/") {
  return `${ce.domain}${r === "/" ? "" : r}`;
}
const Xd = {
    fullName: "",
    mobile: "",
    label: "home",
    line1: "",
    line2: "",
    landmark: "",
    city: ce.city,
    state: ce.region,
    pincode: "",
    isDefault: !0,
  },
  l0 = ["0-10 kg", "10-30 kg", "30-50 kg", "50-200 kg", "More than 200 kg"],
  a0 = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 2:00 PM",
    "2:00 PM - 5:00 PM",
    "5:00 PM - 8:00 PM",
  ];
function n0({ initialPath: r }) {
  const [f, y] = q.useState(r || Zd());
  q.useEffect(() => {
    if (typeof window > "u") return;
    const M = () => y(Zd());
    return (
      window.addEventListener("popstate", M),
      () => window.removeEventListener("popstate", M)
    );
  }, []);
  function d(M) {
    (typeof window < "u" &&
      (window.history.pushState({}, "", M),
      window.scrollTo({ top: 0, behavior: "smooth" })),
      y(M));
  }
  const T = ch(f),
    E = Vl.find((M) => M.path === T) || Z0;
  return i.jsx(Wp, {
    children: i.jsx(c0, {
      route: E,
      navigate: d,
      children: i.jsx(i0, { route: E, navigate: d, currentPath: f }),
    }),
  });
}
function c0({ route: r, navigate: f, children: y }) {
  const [d, T] = q.useState(!1),
    { session: E, logout: M } = ri();
  return i.jsxs("div", {
    children: [
      i.jsx("a", {
        className:
          "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2",
        href: "#main",
        children: "Skip to content",
      }),
      i.jsxs("header", {
        className:
          "sticky top-0 z-40 border-b border-line bg-white shadow-sm lg:bg-white/[0.92] lg:shadow-none lg:backdrop-blur-xl",
        children: [
          i.jsxs("div", {
            className:
              "container-page flex min-h-[68px] items-center justify-between gap-3 sm:min-h-[76px] sm:gap-5",
            children: [
              i.jsxs("a", {
                href: "/",
                onClick: (z) => wl(z, "/", f),
                className: "flex min-w-0 items-center gap-3",
                children: [
                  i.jsx("span", {
                    className:
                      "flex h-12 w-36 shrink-0 items-center justify-center rounded-lg bg-white px-1 sm:h-14 sm:w-40 xl:w-44",
                    children: i.jsx("img", {
                      src: ce.assets.logo,
                      alt: "Kabad Factory",
                      className: "h-full w-full object-contain",
                    }),
                  }),
                  i.jsxs("span", {
                    className: "sr-only",
                    children: [
                      i.jsx("strong", {
                        className: "block text-lg leading-5 text-ink",
                        children: "Kabad Factory",
                      }),
                      i.jsx("span", {
                        className:
                          "text-xs font-semibold uppercase tracking-wide text-brand-700",
                        children: "Innovators of Recycling",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx("nav", {
                className:
                  "hidden items-center gap-5 text-[0.85rem] font-bold text-muted xl:flex",
                children: Qd.map((z) =>
                  i.jsx(
                    "a",
                    {
                      href: z.href,
                      onClick: (O) => wl(O, z.href, f),
                      className: `nav-link hover:text-ink ${r.path === z.href ? "text-ink" : ""}`,
                      children: z.label,
                    },
                    z.href,
                  ),
                ),
              }),
              i.jsxs("div", {
                className: "hidden items-center gap-2 lg:flex",
                children: [
                  i.jsxs("a", {
                    href: ce.appDownloadUrl,
                    className:
                      "inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-extrabold text-brand-700 hover:border-brand-200 hover:bg-brand-50",
                    children: [
                      i.jsx(Ua, { size: 16 }),
                      " ",
                      i.jsx("span", {
                        className: "hidden 2xl:inline",
                        children: "Get the App",
                      }),
                      i.jsx("span", {
                        className: "2xl:hidden",
                        children: "App",
                      }),
                    ],
                  }),
                  E
                    ? i.jsxs(i.Fragment, {
                        children: [
                          i.jsx("a", {
                            href: "/account",
                            onClick: (z) => wl(z, "/account", f),
                            className:
                              "rounded-full border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink hover:border-brand-200 hover:bg-brand-50",
                            children: "Account",
                          }),
                          i.jsx("button", {
                            onClick: M,
                            className:
                              "rounded-full px-3 py-2 text-sm font-extrabold text-muted hover:text-ink",
                            children: "Logout",
                          }),
                        ],
                      })
                    : i.jsx(i.Fragment, {
                        children: i.jsx("a", {
                          href: "/login",
                          onClick: (z) => wl(z, "/login", f),
                          className:
                            "rounded-full px-3 py-2 text-sm font-extrabold text-muted hover:text-ink",
                          children: "Login",
                        }),
                      }),
                  i.jsx("a", {
                    href: "/schedule-pickup",
                    onClick: (z) => wl(z, "/schedule-pickup", f),
                    className:
                      "rounded-full bg-brand-600 px-5 py-2.5 text-sm font-extrabold text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift",
                    children: "Schedule Pickup",
                  }),
                ],
              }),
              i.jsx("button", {
                className:
                  "shrink-0 rounded-xl border border-line bg-white p-2 text-ink shadow-sm lg:hidden",
                onClick: () => T(!0),
                "aria-label": "Open menu",
                children: i.jsx(Kp, {}),
              }),
            ],
          }),
          d &&
            i.jsx("div", {
              className: "fixed inset-0 z-50 bg-ink/55 lg:hidden",
              onClick: () => T(!1),
              children: i.jsxs("div", {
                className:
                  "ml-auto flex h-full w-80 max-w-[88vw] flex-col gap-2 overflow-y-auto border-l border-brand-100 bg-white p-5 text-ink shadow-2xl",
                onClick: (z) => z.stopPropagation(),
                children: [
                  i.jsxs("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      i.jsx("span", {
                        className:
                          "flex h-12 w-36 items-center rounded-lg bg-white px-1",
                        children: i.jsx("img", {
                          src: ce.assets.logo,
                          alt: "Kabad Factory",
                          className: "h-full w-full object-contain",
                        }),
                      }),
                      i.jsx("button", {
                        className:
                          "rounded-xl border border-line bg-white p-2 text-ink shadow-sm",
                        onClick: () => T(!1),
                        "aria-label": "Close menu",
                        children: i.jsx(Rs, {}),
                      }),
                    ],
                  }),
                  [
                    ...Qd,
                    { href: ce.appDownloadUrl, label: "Get the App" },
                    {
                      href: E ? "/account" : "/login",
                      label: E ? "Account" : "Login",
                    },
                  ].map((z) =>
                    i.jsx(
                      "a",
                      {
                        href: z.href,
                        onClick: (O) => {
                          (wl(O, z.href, f), T(!1));
                        },
                        className:
                          "rounded-xl px-3 py-3 font-extrabold text-ink hover:bg-brand-50",
                        children: z.label,
                      },
                      z.href,
                    ),
                  ),
                  i.jsx("a", {
                    href: "/schedule-pickup",
                    onClick: (z) => {
                      (wl(z, "/schedule-pickup", f), T(!1));
                    },
                    className:
                      "mt-3 rounded-full bg-brand-600 px-5 py-3 text-center font-extrabold text-white shadow-soft",
                    children: "Schedule Pickup",
                  }),
                ],
              }),
            }),
        ],
      }),
      i.jsx("main", { id: "main", children: y }),
      i.jsx(D0, { navigate: f, current: r.path }),
    ],
  });
}
function i0({ route: r, navigate: f, currentPath: y }) {
  return r.kind === "home"
    ? i.jsx(u0, { navigate: f })
    : r.kind === "rates"
      ? i.jsx(r0, { route: r, navigate: f })
      : r.kind === "schedule"
        ? i.jsx(h0, { navigate: f })
        : r.kind === "appComingSoon"
          ? i.jsx(f0, { navigate: f })
          : r.kind === "auth"
            ? i.jsx(p0, {
                mode: r.path === "/register" ? "register" : "login",
                navigate: f,
                currentPath: y,
              })
            : r.kind === "account"
              ? i.jsx(b0, { route: r, navigate: f })
              : r.kind === "scrap"
                ? i.jsx(x0, { route: r, navigate: f })
                : r.kind === "servicesIndex"
                  ? i.jsx(g0, { route: r, navigate: f })
                  : r.kind === "service"
                    ? i.jsx(Kd, { route: r, navigate: f })
                    : r.kind === "city"
                      ? i.jsx(v0, { route: r, navigate: f })
                      : r.kind === "blog"
                        ? i.jsx(S0, { navigate: f })
                        : r.kind === "faq"
                          ? i.jsx(j0, { route: r })
                          : r.kind === "legal"
                            ? i.jsx(N0, { route: r })
                            : r.kind === "content"
                              ? i.jsx(Kd, { route: r, navigate: f })
                              : i.jsx(C0, { navigate: f });
}
function u0({ navigate: r }) {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("section", {
        className: "relative isolate overflow-hidden bg-ink text-white",
        children: [
          i.jsx("picture", {
            children: i.jsx("img", {
              src: ce.assets.heroBanner,
              alt: "",
              className: "absolute inset-0 -z-20 h-full w-full object-cover",
              loading: "eager",
              fetchPriority: "high",
            }),
          }),
          i.jsx("div", {
            className:
              "absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/86 to-ink/36",
          }),
          i.jsx("div", {
            className:
              "absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent",
          }),
          i.jsxs("div", {
            className:
              "container-page grid min-h-[690px] items-center gap-10 py-16 lg:grid-cols-[1.02fr_0.86fr]",
            children: [
              i.jsxs("div", {
                className: "reveal-up",
                children: [
                  i.jsxs("span", {
                    className:
                      "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-extrabold text-brand-100 backdrop-blur",
                    children: [
                      i.jsx(K0, {}),
                      " Doorstep scrap pickup in Gwalior",
                    ],
                  }),
                  i.jsx("h1", {
                    className:
                      "mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl",
                    children:
                      "Sell Your Scrap the Smarter Way with Kabad Factory",
                  }),
                  i.jsx("p", {
                    className:
                      "mt-5 max-w-2xl text-xl font-extrabold leading-8 text-brand-100",
                    children:
                      "Kabad hai? Raddi hai? Fenkna nahi — Kabad Factory ko bechna hai!",
                  }),
                  i.jsx("p", {
                    className: "mt-4 max-w-2xl text-lg leading-8 text-white/84",
                    children:
                      "Check the latest scrap rates, schedule doorstep pickup and manage your pickups easily — all from one convenient platform.",
                  }),
                  i.jsxs("div", {
                    className: "mt-8 flex flex-col gap-3 sm:flex-row",
                    children: [
                      i.jsx("a", {
                        href: "#pin-checker",
                        className:
                          "focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white px-6 py-3 font-black text-brand-700",
                        children: "Check Pickup Availability",
                      }),
                      i.jsxs("button", {
                        onClick: () => r("/schedule-pickup"),
                        className:
                          "focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-black text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-700",
                        children: ["Schedule Pickup ", i.jsx(Yn, { size: 18 })],
                      }),
                      i.jsx("a", {
                        href: ce.appDownloadUrl,
                        className:
                          "focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 font-black text-white backdrop-blur",
                        children: "Get the App",
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className:
                      "mt-9 grid max-w-2xl grid-cols-3 gap-3 text-sm text-white/74",
                    children: [
                      "Transparent rates",
                      "Digital weighing",
                      "Order tracking",
                    ].map((f) =>
                      i.jsx(
                        "span",
                        {
                          className:
                            "rounded-full border border-white/15 bg-white/10 px-3 py-2 text-center font-bold backdrop-blur",
                          children: f,
                        },
                        f,
                      ),
                    ),
                  }),
                ],
              }),
              i.jsx("div", {
                className:
                  "glass-panel reveal-up reveal-delay rounded-card border border-white/20 p-5 text-ink shadow-lift sm:p-7 lg:justify-self-end",
                children: i.jsx(lh, {
                  onSchedule: () => r("/schedule-pickup"),
                }),
              }),
            ],
          }),
        ],
      }),
      i.jsx(s0, { navigate: r }),
      i.jsx(_s, { navigate: r }),
      i.jsx(w0, { navigate: r }),
      i.jsx(k0, {}),
      i.jsx(T0, { navigate: r }),
      i.jsx(A0, {}),
      i.jsx(Hs, { navigate: r }),
      i.jsx(E0, { navigate: r }),
      i.jsx(z0, { navigate: r }),
      i.jsx(Kn, {}),
      i.jsx(M0, { navigate: r }),
    ],
  });
}
function lh({ onSchedule: r }) {
  var C, le;
  const [f, y] = q.useState(""),
    [d, T] = q.useState(!1),
    [E, M] = q.useState(null),
    [z, O] = q.useState("");
  async function S() {
    const B = f.replace(/\D/g, "").slice(0, 6);
    if ((y(B), !/^\d{6}$/.test(B))) {
      (O("Enter a valid 6 digit PIN code."), M(null));
      return;
    }
    (T(!0), O(""));
    try {
      const V = await el(`/serviceability/pincode?pincode=${B}`);
      M(V);
    } catch (V) {
      (M(null),
        O(
          V instanceof Error
            ? V.message
            : "Unable to check pickup availability right now.",
        ));
    } finally {
      T(!1);
    }
  }
  return i.jsxs("section", {
    id: "pin-checker",
    "aria-labelledby": "pin-heading",
    children: [
      i.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          i.jsx("span", {
            className:
              "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700",
            children: i.jsx(Cs, {}),
          }),
          i.jsxs("div", {
            children: [
              i.jsx("h2", {
                id: "pin-heading",
                className: "text-xl font-black text-ink",
                children: "Pickup Availability Checker",
              }),
              i.jsx("p", {
                className: "text-sm text-muted",
                children: "Enter your PIN to check local pickup availability.",
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        className: "mt-5 flex flex-col gap-3 sm:flex-row",
        children: [
          i.jsx("input", {
            value: f,
            onChange: (B) => y(B.target.value.replace(/\D/g, "").slice(0, 6)),
            inputMode: "numeric",
            maxLength: 6,
            placeholder: "Enter PIN code",
            className:
              "focus-ring min-h-12 flex-1 rounded-2xl border border-brand-100 bg-brand-50 px-4 font-bold text-ink",
          }),
          i.jsx("button", {
            onClick: S,
            disabled: d,
            className:
              "focus-ring rounded-2xl bg-ink px-5 py-3 font-black text-white disabled:opacity-60",
            children: d ? "Checking..." : "Check",
          }),
        ],
      }),
      z &&
        i.jsx("p", {
          className:
            "mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700",
          children: z,
        }),
      (E == null ? void 0 : E.serviceable) &&
        i.jsxs("div", {
          className: "mt-5 rounded-2xl border border-brand-200 bg-brand-50 p-4",
          children: [
            i.jsxs("p", {
              className: "flex items-center gap-2 font-black text-brand-700",
              children: [i.jsx(Qn, { size: 19 }), " Pickup available"],
            }),
            i.jsx("p", {
              className: "mt-2 text-sm text-muted",
              children:
                Number(((C = E.data) == null ? void 0 : C.pickupCharge) || 0) >
                0
                  ? i.jsxs(i.Fragment, {
                      children: [
                        "Pickup Charge: ",
                        i.jsxs("strong", {
                          className: "text-ink",
                          children: [
                            "₹",
                            Number(
                              (le = E.data) == null ? void 0 : le.pickupCharge,
                            ).toFixed(0),
                          ],
                        }),
                      ],
                    })
                  : i.jsx("strong", {
                      className: "text-ink",
                      children: "Free Pickup",
                    }),
            }),
            i.jsxs("button", {
              onClick: r,
              className:
                "mt-4 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-black text-white",
              children: ["Schedule Pickup ", i.jsx(Yn, { size: 16 })],
            }),
          ],
        }),
    ],
  });
}
function _s({ navigate: r }) {
  const { categories: f, loading: y } = Bs(),
    d = f.slice(0, 6);
  return i.jsxs("section", {
    className: "container-page py-16",
    children: [
      i.jsxs("div", {
        className:
          "flex flex-col justify-between gap-5 md:flex-row md:items-end",
        children: [
          i.jsx(Tl, {
            eyebrow: "Latest rates",
            title: "Today's Scrap Rates in Gwalior",
            body: "See current prices before you schedule. Rates are loaded from the Kabad Factory backend.",
          }),
          i.jsxs("button", {
            onClick: () => r("/scrap-rates"),
            className:
              "inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-5 py-3 font-extrabold text-brand-700 hover:border-brand-200 hover:bg-brand-50",
            children: ["View All Rates ", i.jsx(Ds, { size: 17 })],
          }),
        ],
      }),
      i.jsx("div", {
        className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        children: (y ? Array.from({ length: 6 }) : d).map((T, E) =>
          i.jsxs(
            "div",
            {
              className:
                "card group flex items-center justify-between gap-4 p-5 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift",
              children: [
                i.jsxs("div", {
                  children: [
                    i.jsx("h3", {
                      className: "font-black text-ink",
                      children: Vd(T) ? T.name : "Loading rate",
                    }),
                    i.jsx("p", {
                      className: "text-sm text-muted",
                      children: "Current listed rate",
                    }),
                  ],
                }),
                i.jsx("p", {
                  className: "text-xl font-black text-brand-700",
                  children: Vd(T) ? Gs(T) : "--",
                }),
              ],
            },
            E,
          ),
        ),
      }),
    ],
  });
}
function s0({ navigate: r }) {
  return i.jsx("section", {
    className: "container-page -mt-12 relative z-10",
    children: i.jsx("div", {
      className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
      children: e0.map(({ href: f, title: y, body: d, icon: T }) =>
        i.jsxs(
          "button",
          {
            onClick: () => r(f),
            className:
              "card group flex min-h-32 items-center gap-4 p-5 text-left transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift",
            children: [
              i.jsx("span", {
                className:
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-card bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white",
                children: i.jsx(T, {}),
              }),
              i.jsxs("span", {
                children: [
                  i.jsx("strong", {
                    className: "block text-base text-ink",
                    children: y,
                  }),
                  i.jsx("span", {
                    className: "mt-1 block text-sm text-muted",
                    children: d,
                  }),
                ],
              }),
            ],
          },
          f,
        ),
      ),
    }),
  });
}
function r0({ route: r, navigate: f }) {
  const { categories: y, loading: d, error: T, reload: E } = Bs(),
    [M, z] = q.useState(""),
    [O, S] = q.useState("All"),
    C = Us,
    le = q.useMemo(() => {
      const V = M.trim().toLocaleLowerCase();
      return y.filter(
        (W) =>
          (O === "All" || ui(W) === O) &&
          (!V || W.name.toLocaleLowerCase().includes(V)),
      );
    }, [y, M, O]),
    B = q.useMemo(() => {
      const V = new Map();
      return (
        le.forEach((W) => {
          const Be = ui(W);
          V.set(Be, [...(V.get(Be) || []), W]);
        }),
        (O === "All" ? C : [O])
          .map((W) => ({ material: W, items: V.get(W) || [] }))
          .filter((W) => W.items.length > 0)
      );
    }, [C, le, O]);
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(fi, { route: r }),
      i.jsxs("section", {
        className: "container-page pb-16",
        children: [
          T && i.jsx(nh, { message: T, onRetry: E }),
          i.jsxs("div", {
            className: "mx-auto max-w-6xl",
            children: [
              i.jsxs("label", {
                className: "relative block",
                children: [
                  i.jsx("span", {
                    className: "sr-only",
                    children: "Search scrap materials",
                  }),
                  i.jsx(Cs, {
                    className:
                      "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-brand-700",
                    size: 22,
                  }),
                  i.jsx("input", {
                    value: M,
                    onChange: (V) => z(V.target.value),
                    placeholder: "Search any materials...",
                    className:
                      "focus-ring min-h-16 w-full rounded-2xl border border-brand-100 bg-white py-4 pl-14 pr-12 text-base font-semibold text-ink shadow-soft placeholder:text-muted",
                  }),
                  M &&
                    i.jsx("button", {
                      type: "button",
                      onClick: () => z(""),
                      className:
                        "focus-ring absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 text-muted hover:bg-brand-50 hover:text-ink",
                      "aria-label": "Clear search",
                      children: i.jsx(Rs, { size: 20 }),
                    }),
                ],
              }),
              i.jsx("div", {
                className: "mt-5 flex gap-2 overflow-x-auto pb-2",
                "aria-label": "Material categories",
                children: ["All", ...C].map((V) =>
                  i.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => S(V),
                      className: `focus-ring shrink-0 rounded-full px-5 py-2.5 text-sm font-extrabold transition ${O === V ? "bg-brand-600 text-white shadow-soft" : "bg-slate-100 text-ink hover:bg-brand-50"}`,
                      children: V,
                    },
                    V,
                  ),
                ),
              }),
              i.jsxs("div", {
                className: "mt-8",
                children: [
                  i.jsx("p", {
                    className:
                      "text-sm font-black uppercase tracking-wide text-brand-700",
                    children: "Current rates",
                  }),
                  i.jsx("h1", {
                    className: "mt-2 text-3xl font-black text-ink sm:text-4xl",
                    children: O === "All" ? "Scrap Items" : `${O} Scrap Items`,
                  }),
                ],
              }),
              d
                ? i.jsx(d0, {})
                : B.length
                  ? i.jsx("div", {
                      className: "mt-8 space-y-10",
                      children: B.map((V) =>
                        i.jsxs(
                          "section",
                          {
                            "aria-labelledby": `material-${V.material}`,
                            children: [
                              i.jsx("h2", {
                                id: `material-${V.material}`,
                                className: "mb-4 text-xl font-black text-ink",
                                children: V.material,
                              }),
                              i.jsx("div", {
                                className:
                                  "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
                                children: V.items.map((W) =>
                                  i.jsx(o0, { item: W }, W.id),
                                ),
                              }),
                            ],
                          },
                          V.material,
                        ),
                      ),
                    })
                  : i.jsxs("div", {
                      className:
                        "mt-8 rounded-card border border-dashed border-brand-200 bg-brand-50 p-8 text-center",
                      children: [
                        i.jsx("p", {
                          className: "font-black text-ink",
                          children: "No scrap items match your search.",
                        }),
                        i.jsx("p", {
                          className: "mt-2 text-sm text-muted",
                          children:
                            "Try another material name or clear the search.",
                        }),
                        M &&
                          i.jsx("button", {
                            type: "button",
                            onClick: () => z(""),
                            className:
                              "mt-4 rounded-full bg-brand-600 px-4 py-2 text-sm font-black text-white",
                            children: "Clear search",
                          }),
                      ],
                    }),
            ],
          }),
        ],
      }),
    ],
  });
}
function f0({ navigate: r }) {
  return i.jsx("section", {
    className:
      "container-page flex min-h-[calc(100vh-76px)] items-center py-12",
    children: i.jsxs("div", {
      className:
        "mx-auto grid w-full max-w-5xl overflow-hidden rounded-card border border-brand-100 bg-white shadow-lift lg:grid-cols-[1fr_0.9fr]",
      children: [
        i.jsxs("div", {
          className: "p-8 sm:p-12",
          children: [
            i.jsx("img", {
              src: ce.assets.logo,
              alt: "Kabad Factory",
              className: "h-16 w-52 object-contain object-left",
            }),
            i.jsx("p", {
              className:
                "mt-10 text-sm font-black uppercase tracking-wide text-brand-700",
              children: "Kabad Factory app",
            }),
            i.jsx("h1", {
              className:
                "mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl",
              children: "Our Mobile App Is Coming Soon!",
            }),
            i.jsx("p", {
              className: "mt-5 max-w-xl text-lg leading-8 text-muted",
              children:
                "We're working on a better way to manage your scrap pickups. Our mobile app is coming soon.",
            }),
            i.jsxs("div", {
              className: "mt-7 flex flex-wrap gap-3",
              children: [
                i.jsx("span", {
                  className:
                    "rounded-full bg-brand-50 px-4 py-2 text-sm font-black text-brand-700",
                  children: "Android in development",
                }),
                i.jsx("span", {
                  className:
                    "rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-ink",
                  children: "iOS in development",
                }),
              ],
            }),
            i.jsxs("div", {
              className: "mt-9 flex flex-col gap-3 sm:flex-row",
              children: [
                i.jsx("button", {
                  onClick: () => r("/"),
                  className:
                    "rounded-full bg-brand-600 px-6 py-3 font-black text-white shadow-soft",
                  children: "Return to homepage",
                }),
                i.jsx("a", {
                  href: `mailto:${ce.email}`,
                  className:
                    "rounded-full border border-brand-100 px-6 py-3 text-center font-black text-brand-700",
                  children: "Contact support",
                }),
              ],
            }),
          ],
        }),
        i.jsxs("div", {
          className:
            "relative flex min-h-72 items-center justify-center overflow-hidden bg-brand-50 p-10",
          children: [
            i.jsx("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.25),_transparent_55%)]",
            }),
            i.jsxs("div", {
              className:
                "relative grid h-56 w-36 place-items-center rounded-[2.5rem] border-8 border-ink bg-white shadow-lift",
              children: [
                i.jsx(Xn, { size: 68, className: "text-brand-600" }),
                i.jsx("span", {
                  className:
                    "absolute bottom-7 text-xs font-black text-brand-700",
                  children: "RECYCLE",
                }),
              ],
            }),
            i.jsx(Ua, {
              className: "absolute bottom-10 right-10 text-brand-700/30",
              size: 88,
              "aria-hidden": "true",
            }),
          ],
        }),
      ],
    }),
  });
}
const Us = [
  "Paper",
  "Plastic",
  "Metal",
  "E-waste",
  "Glass",
  "Rubber",
  "Other",
  "Textile",
];
function ui(r) {
  return Us.includes(r.category || "") ? r.category : "Other";
}
function o0({ item: r }) {
  const [f, y] = q.useState(!1);
  return i.jsxs("article", {
    className:
      "flex min-h-32 items-center gap-4 rounded-card bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft",
    children: [
      i.jsx("div", {
        className:
          "flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-brand-700 shadow-sm",
        children:
          r.iconUrl && !f
            ? i.jsx("img", {
                src: r.iconUrl,
                alt: "",
                className: "h-full w-full object-cover",
                onError: () => y(!0),
              })
            : i.jsx(Xn, { size: 28, "aria-hidden": "true" }),
      }),
      i.jsxs("div", {
        className: "min-w-0",
        children: [
          i.jsx("h3", {
            className: "truncate font-black text-ink",
            title: r.name,
            children: r.name,
          }),
          i.jsx("p", {
            className: "mt-1 text-lg font-black text-brand-700",
            children: Gs(r),
          }),
        ],
      }),
    ],
  });
}
function d0() {
  return i.jsx("div", {
    className: "mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
    children: Array.from({ length: 8 }).map((r, f) =>
      i.jsx(
        "div",
        { className: "h-32 animate-pulse rounded-card bg-brand-50" },
        f,
      ),
    ),
  });
}
function h0({ navigate: r }) {
  const { session: f } = ri(),
    { categories: y, loading: d } = Bs(),
    [T, E] = q.useState([]),
    [M, z] = q.useState([]),
    [O, S] = q.useState(""),
    [C, le] = q.useState(""),
    [B, V] = q.useState(""),
    [W, Be] = q.useState(null),
    [Ke, ht] = q.useState(!1),
    [lt, ze] = q.useState(Xd),
    [at, ae] = q.useState({}),
    [Ne, we] = q.useState({}),
    [Re, Je] = q.useState(null),
    [tl, mt] = q.useState(!1),
    [Me, zt] = q.useState(!1),
    [kt, Oe] = q.useState(!1),
    [j, R] = q.useState(null),
    [Y, re] = q.useState(null),
    [h, w] = q.useState(""),
    [D, _] = q.useState("All"),
    Q = q.useMemo(
      () => y.filter((U) => U.isActive !== !1 && U.status !== "Hidden"),
      [y],
    ),
    ne = Us,
    Z = q.useMemo(() => {
      const U = h.trim().toLocaleLowerCase();
      return Q.filter(
        (J) =>
          (D === "All" || ui(J) === D) &&
          (!U || J.name.toLocaleLowerCase().includes(U)),
      );
    }, [Q, h, D]),
    Fe = q.useMemo(
      () =>
        D === "All"
          ? ne
              .map((U) => ({
                material: U,
                items: Z.filter((J) => ui(J) === U),
              }))
              .filter((U) => U.items.length)
          : [{ material: D, items: Z }],
      [ne, D, Z],
    ),
    F = T.find((U) => U.id === W) || null,
    Mt = q.useMemo(
      () => M.map((U) => ({ categoryId: U, estimatedQuantity: H0(O) })),
      [M, O],
    ),
    Ha = q.useMemo(() => Q0(14), []),
    Jl = !!(M.length && O && C && B && W);
  (q.useEffect(() => {
    f && Fl();
  }, [f]),
    q.useEffect(() => {
      if (!f || !(F != null && F.pincode)) {
        Je(null);
        return;
      }
      let U = !1;
      return (
        el(`/serviceability/pincode?pincode=${encodeURIComponent(F.pincode)}`)
          .then((J) => {
            var ge;
            U ||
              Je(
                J.serviceable
                  ? Number(
                      ((ge = J.data) == null ? void 0 : ge.pickupCharge) || 0,
                    )
                  : null,
              );
          })
          .catch(() => {
            U || Je(null);
          }),
        () => {
          U = !0;
        }
      );
    }, [F == null ? void 0 : F.pincode, f]));
  async function Fl(U) {
    if (f) {
      mt(!0);
      try {
        const ge = (await el("/addresses", { token: f.token })).data || [];
        E(ge);
        const Ge = ge.find((Dt) => Dt.isDefault) || ge[0],
          Ot = U || W || (Ge == null ? void 0 : Ge.id) || null;
        (Be(
          ge.some((Dt) => Dt.id === Ot)
            ? Ot
            : (Ge == null ? void 0 : Ge.id) || null,
        ),
          ht(ge.length === 0));
      } catch (J) {
        we((ge) => ({
          ...ge,
          address:
            J instanceof Error ? J.message : "Could not load saved addresses.",
        }));
      } finally {
        mt(!1);
      }
    }
  }
  async function qa() {
    if (!f || Me) return;
    const U = B0(lt);
    if ((ae(U), !Object.keys(U).length)) {
      zt(!0);
      try {
        const J = await el("/addresses", {
          method: "POST",
          token: f.token,
          body: JSON.stringify(G0(lt)),
        });
        (await Fl(J.id),
          ze(Xd),
          ae({}),
          we((ge) => ({ ...ge, address: void 0 })),
          ht(!1));
      } catch (J) {
        (ae(Jd(J)),
          Object.keys(Jd(J)).length ||
            we((ge) => ({
              ...ge,
              address:
                J instanceof Error ? J.message : "Could not save address.",
            })));
      } finally {
        zt(!1);
      }
    }
  }
  function Ba() {
    (z([]), S(""), le(""), V(""), we({}));
  }
  async function oi() {
    var J, ge;
    if (!f) {
      r("/login?next=/schedule-pickup");
      return;
    }
    if (kt) return;
    const U = q0({
      selected: M,
      weightRange: O,
      pickupDate: C,
      timeSlot: B,
      selectedAddressId: W,
    });
    if ((we(U), !Object.keys(U).length)) {
      Oe(!0);
      try {
        const Ge = await el("/bookings", {
            method: "POST",
            token: f.token,
            body: JSON.stringify({
              addressId: W,
              estimatedWeightRange: O,
              pickupDate: C,
              timeSlot: B,
              instructions: "",
              items: Mt,
            }),
          }),
          Ot = Number(((J = Ge.pickup) == null ? void 0 : J.pickupCharge) || 0);
        (Je(Ot),
          re({
            id: ((ge = Ge.pickup) == null ? void 0 : ge.id) || 0,
            date: C,
            slot: B,
            address: F ? zs(F) : "",
            items: M.map((Dt) => {
              var Zn;
              return (
                ((Zn = Q.find((Ln) => Ln.id === Dt)) == null
                  ? void 0
                  : Zn.name) || "Scrap item"
              );
            }),
          }),
          R(Ot),
          Ba());
      } catch (Ge) {
        we((Ot) => ({
          ...Ot,
          submit:
            Ge instanceof Error
              ? Ge.message
              : "Could not schedule pickup. Please try again.",
        }));
      } finally {
        Oe(!1);
      }
    }
  }
  return f
    ? i.jsxs(qt, {
        title: "Schedule Scrap Pickup",
        subtitle:
          "Select items, estimated weight, saved address, pickup charge, date, and slot. The same backend creates your pickup as the mobile app.",
        children: [
          i.jsx("div", {
            className: "mb-5 grid gap-2 md:grid-cols-6",
            children: [
              "Select Items",
              "Weight",
              "Pickup Address",
              "Pickup Charge",
              "Date / Time",
              "Review",
            ].map((U, J) =>
              i.jsxs(
                "div",
                {
                  className: `min-w-0 rounded-2xl border px-3 py-2 text-xs font-black transition sm:text-sm ${Y0(J, { selected: M, weightRange: O, selectedAddressId: W, pickupCharge: Re, pickupDate: C, timeSlot: B }) ? "border-brand-500 bg-brand-50 text-brand-700" : "border-brand-100 bg-white text-muted"}`,
                  children: [
                    i.jsx("span", {
                      className:
                        "mr-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px]",
                      children: J + 1,
                    }),
                    U,
                  ],
                },
                U,
              ),
            ),
          }),
          i.jsxs("div", {
            className:
              "grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-5",
            children: [
              i.jsxs("div", {
                className: "min-w-0 space-y-4",
                children: [
                  i.jsxs("section", {
                    className: "card reveal-up min-w-0 p-4 sm:p-5",
                    children: [
                      i.jsx(ii, {
                        icon: i.jsx(si, {}),
                        title: "Select Items",
                        error: Ne.items,
                      }),
                      i.jsx("p", {
                        className: "mt-2 text-sm text-muted",
                        children:
                          "Raddi ho ya loha, plastic ho ya purana samaan - Kabad Factory sab le jayega.",
                      }),
                      i.jsxs("label", {
                        className: "relative mt-5 block",
                        children: [
                          i.jsx("span", {
                            className: "sr-only",
                            children: "Search scrap materials",
                          }),
                          i.jsx(Cs, {
                            className:
                              "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-700",
                            size: 19,
                          }),
                          i.jsx("input", {
                            value: h,
                            onChange: (U) => w(U.target.value),
                            placeholder: "Search any materials...",
                            className:
                              "focus-ring min-h-12 w-full rounded-2xl border border-brand-100 bg-brand-50 py-3 pl-11 pr-11 text-sm font-semibold text-ink placeholder:text-muted",
                          }),
                          h &&
                            i.jsx("button", {
                              type: "button",
                              onClick: () => w(""),
                              "aria-label": "Clear search",
                              className:
                                "focus-ring absolute right-2 top-1/2 -translate-y-1/2 rounded-xl p-2 text-muted hover:bg-white",
                              children: i.jsx(Rs, { size: 18 }),
                            }),
                        ],
                      }),
                      i.jsx("div", {
                        className:
                          "mt-4 flex max-w-full gap-2 overflow-x-auto pb-2",
                        "aria-label": "Material categories",
                        children: ["All", ...ne].map((U) =>
                          i.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => _(U),
                              className: `focus-ring shrink-0 rounded-full px-4 py-2 text-sm font-extrabold ${D === U ? "bg-brand-600 text-white" : "bg-slate-100 text-ink hover:bg-brand-50"}`,
                              children: U,
                            },
                            U,
                          ),
                        ),
                      }),
                      d && !Q.length
                        ? i.jsx("div", {
                            className:
                              "mt-4 grid gap-2 sm:grid-cols-2 2xl:grid-cols-4",
                            children: Array.from({ length: 6 }).map((U, J) =>
                              i.jsx(
                                "div",
                                {
                                  className:
                                    "h-20 animate-pulse rounded-2xl bg-brand-50",
                                },
                                J,
                              ),
                            ),
                          })
                        : i.jsx("div", {
                            className: "mt-4 space-y-5",
                            children: Fe.map((U) =>
                              i.jsxs(
                                "div",
                                {
                                  children: [
                                    i.jsx("h3", {
                                      className: "mb-2 font-black text-ink",
                                      children: U.material,
                                    }),
                                    i.jsx("div", {
                                      className:
                                        "grid min-w-0 gap-2 sm:grid-cols-2 2xl:grid-cols-4",
                                      children: U.items.map((J) =>
                                        i.jsx(
                                          m0,
                                          {
                                            item: J,
                                            selected: M.includes(J.id),
                                            onToggle: () =>
                                              z((ge) =>
                                                ge.includes(J.id)
                                                  ? ge.filter(
                                                      (Ge) => Ge !== J.id,
                                                    )
                                                  : [...ge, J.id],
                                              ),
                                          },
                                          J.id,
                                        ),
                                      ),
                                    }),
                                  ],
                                },
                                U.material,
                              ),
                            ),
                          }),
                      !d &&
                        !Z.length &&
                        i.jsx("p", {
                          className:
                            "mt-5 rounded-2xl bg-brand-50 p-4 text-sm font-bold text-muted",
                          children:
                            "No scrap items match your search. Try another material name or category.",
                        }),
                    ],
                  }),
                  i.jsxs("section", {
                    className: "card reveal-up min-w-0 p-4 sm:p-5",
                    children: [
                      i.jsx(ii, {
                        icon: i.jsx(Fp, {}),
                        title: "Estimated Weight / Quantity",
                        error: Ne.weightRange,
                      }),
                      i.jsx("div", {
                        className: "mt-4 flex flex-wrap gap-2",
                        children: l0.map((U) =>
                          i.jsx(
                            "button",
                            {
                              onClick: () => S(U),
                              className: `rounded-full border px-4 py-2 text-sm font-black transition ${O === U ? "border-brand-600 bg-brand-600 text-white" : "border-brand-100 bg-white text-muted hover:border-brand-200"}`,
                              children: U,
                            },
                            U,
                          ),
                        ),
                      }),
                    ],
                  }),
                  i.jsxs("section", {
                    className: "card reveal-up min-w-0 p-4 sm:p-5",
                    children: [
                      i.jsxs("div", {
                        className:
                          "flex flex-wrap items-center justify-between gap-3",
                        children: [
                          i.jsx(ii, {
                            icon: i.jsx(Xp, {}),
                            title: "Saved Address",
                            error: Ne.address,
                          }),
                          i.jsxs("button", {
                            onClick: () => ht(!0),
                            className:
                              "inline-flex items-center gap-2 rounded-full border border-brand-100 px-4 py-2 text-sm font-black text-brand-700",
                            children: [i.jsx(Vp, { size: 16 }), " Add Address"],
                          }),
                        ],
                      }),
                      tl
                        ? i.jsx("div", {
                            className:
                              "mt-4 h-28 animate-pulse rounded-2xl bg-brand-50",
                          })
                        : T.length > 0
                          ? i.jsxs("div", {
                              className: "mt-4 min-w-0",
                              children: [
                                i.jsx("label", {
                                  className: "sr-only",
                                  htmlFor: "pickup-address",
                                  children: "Saved pickup address",
                                }),
                                i.jsx("select", {
                                  id: "pickup-address",
                                  value: W || "",
                                  onChange: (U) =>
                                    Be(Number(U.target.value) || null),
                                  className:
                                    "focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-brand-100 bg-white px-3 text-sm font-bold text-ink",
                                  children: T.map((U) =>
                                    i.jsx(
                                      "option",
                                      {
                                        value: U.id,
                                        children: `${Ms(U.label)}${U.isDefault ? " (Default)" : ""} — ${zs(U)}`,
                                      },
                                      U.id,
                                    ),
                                  ),
                                }),
                                F &&
                                  i.jsxs("div", {
                                    className:
                                      "mt-3 min-w-0 rounded-2xl bg-brand-50 p-3",
                                    children: [
                                      i.jsxs("strong", {
                                        className: "text-ink",
                                        children: [
                                          Ms(F.label),
                                          F.isDefault ? " · Default" : "",
                                        ],
                                      }),
                                      i.jsx("p", {
                                        className:
                                          "mt-1 break-words text-sm leading-6 text-muted",
                                        children: zs(F),
                                      }),
                                      i.jsxs("p", {
                                        className:
                                          "mt-1 text-sm font-bold text-ink",
                                        children: [F.fullName, " | ", F.mobile],
                                      }),
                                    ],
                                  }),
                              ],
                            })
                          : i.jsxs("div", {
                              className:
                                "mt-4 rounded-2xl border border-dashed border-brand-200 bg-brand-50 p-4",
                              children: [
                                i.jsx("p", {
                                  className: "font-black text-ink",
                                  children: "No saved address found",
                                }),
                                i.jsx("p", {
                                  className: "mt-1 text-sm text-muted",
                                  children:
                                    "Add your pickup address once, then use it for faster repeat bookings.",
                                }),
                              ],
                            }),
                      Ke &&
                        i.jsx(O0, {
                          draft: lt,
                          setDraft: ze,
                          errors: at,
                          saving: Me,
                          onSave: qa,
                          onCancel: () => (T.length ? ht(!1) : void 0),
                        }),
                    ],
                  }),
                  i.jsxs("section", {
                    className: "card reveal-up min-w-0 p-4 sm:p-5",
                    children: [
                      i.jsx(ii, {
                        icon: i.jsx(Bp, {}),
                        title: "Pickup Date / Time",
                        error: Ne.pickupDate || Ne.timeSlot,
                      }),
                      i.jsx("div", {
                        className: "mt-4 flex gap-3 overflow-x-auto pb-2",
                        children: Ha.map((U) =>
                          i.jsxs(
                            "button",
                            {
                              onClick: () => le(U.value),
                              className: `min-w-[88px] rounded-2xl border px-3 py-3 text-center transition ${C === U.value ? "border-brand-600 bg-brand-600 text-white" : "border-brand-100 bg-white text-ink"}`,
                              children: [
                                i.jsx("span", {
                                  className:
                                    "block text-xs font-black uppercase",
                                  children: U.isToday ? "Today" : U.day,
                                }),
                                i.jsx("span", {
                                  className: "mt-1 block text-xl font-black",
                                  children: U.date,
                                }),
                                i.jsx("span", {
                                  className: "block text-xs font-bold",
                                  children: U.month,
                                }),
                              ],
                            },
                            U.value,
                          ),
                        ),
                      }),
                      i.jsx("div", {
                        className: "mt-4 grid gap-3 sm:grid-cols-2",
                        children: a0.map((U) =>
                          i.jsxs(
                            "button",
                            {
                              onClick: () => V(U),
                              className: `rounded-2xl border px-4 py-3 text-sm font-black transition ${B === U ? "border-brand-600 bg-brand-50 text-brand-700" : "border-brand-100 bg-white text-muted"}`,
                              children: [
                                i.jsx(Gp, {
                                  className: "mr-2 inline",
                                  size: 16,
                                }),
                                U,
                              ],
                            },
                            U,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx("aside", {
                className: "min-w-0 lg:sticky lg:top-24 lg:self-start",
                children: i.jsxs("div", {
                  className: "card min-w-0 p-4 sm:p-5",
                  children: [
                    i.jsx("h2", {
                      className: "text-xl font-black text-ink",
                      children: "Review Pickup",
                    }),
                    i.jsxs("div", {
                      className: "mt-4 space-y-4 text-sm",
                      children: [
                        i.jsx(Gn, {
                          label: "Items",
                          value: M.length
                            ? `${M.length} selected`
                            : "Select scrap items",
                        }),
                        i.jsx(Gn, {
                          label: "Estimated weight",
                          value: O || "Choose range",
                        }),
                        i.jsx(Gn, {
                          label: "Pickup address",
                          value: F
                            ? `${F.line1}, ${F.pincode}`
                            : "Select saved address",
                        }),
                        i.jsx(Gn, {
                          label: "Pickup charge",
                          value:
                            Re === null
                              ? "Calculated by backend"
                              : Re > 0
                                ? `₹${Re.toFixed(0)}`
                                : "Free Pickup",
                          strong: !0,
                        }),
                        i.jsx(Gn, {
                          label: "Slot",
                          value:
                            C && B ? `${Fd(C)} | ${B}` : "Choose date and time",
                        }),
                      ],
                    }),
                    Ne.submit &&
                      i.jsx("p", {
                        className:
                          "mt-4 rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700",
                        children: Ne.submit,
                      }),
                    i.jsx("button", {
                      onClick: oi,
                      disabled: kt || !Jl,
                      className:
                        "mt-5 w-full rounded-2xl bg-brand-600 px-5 py-3 font-black text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60",
                      children: kt ? "Scheduling..." : "Schedule Pickup",
                    }),
                    i.jsxs("a", {
                      href: ce.appDownloadUrl,
                      className:
                        "mt-3 flex items-center justify-center gap-2 rounded-2xl border border-brand-100 px-5 py-3 text-sm font-black text-brand-700",
                      children: [
                        i.jsx(Ua, { size: 17 }),
                        " Schedule Faster with the App",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          j !== null &&
            i.jsx("div", {
              className:
                "fixed inset-0 z-50 grid place-items-center bg-ink/50 p-4 backdrop-blur-sm",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "success-title",
              children: i.jsxs("div", {
                className: "success-pop max-w-md card p-7 text-center",
                children: [
                  i.jsx("div", {
                    className:
                      "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700",
                    children: i.jsx(Qn, { size: 34 }),
                  }),
                  i.jsx("h2", {
                    id: "success-title",
                    className: "mt-5 text-2xl font-black text-ink",
                    children: "Pickup scheduled successfully",
                  }),
                  Y &&
                    i.jsxs("div", {
                      className:
                        "mt-4 rounded-2xl bg-brand-50 p-4 text-left text-sm",
                      children: [
                        i.jsxs("p", {
                          className: "font-black text-brand-700",
                          children: ["Booking reference: #KF", Y.id],
                        }),
                        i.jsxs("p", {
                          className: "mt-2 text-muted",
                          children: [Fd(Y.date), " · ", Y.slot],
                        }),
                        i.jsx("p", {
                          className: "mt-1 text-muted",
                          children: Y.address,
                        }),
                        i.jsx("p", {
                          className: "mt-2 font-bold text-ink",
                          children: Y.items.join(", "),
                        }),
                      ],
                    }),
                  i.jsxs("p", {
                    className: "mt-2 font-bold text-muted",
                    children: [
                      "Pickup Charge: ",
                      j > 0 ? `₹${j.toFixed(0)}` : "Free",
                    ],
                  }),
                  i.jsx("button", {
                    onClick: () => {
                      (R(null), re(null), r("/orders"));
                    },
                    className:
                      "mt-6 w-full rounded-2xl bg-brand-600 px-5 py-3 font-black text-white",
                    children: "View bookings",
                  }),
                ],
              }),
            }),
        ],
      })
    : i.jsx(qt, {
        title: "Schedule Scrap Pickup",
        subtitle:
          "Login or register first, then continue booking your doorstep scrap pickup online.",
        children: i.jsxs("div", {
          className: "mx-auto max-w-xl card p-6",
          children: [
            i.jsx("h2", {
              className: "text-2xl font-black text-ink",
              children: "Continue to schedule pickup",
            }),
            i.jsx("p", {
              className: "mt-3 text-muted",
              children:
                "The website uses the same authenticated booking API as the mobile app, so your pickup, address, charge, and order history stay connected.",
            }),
            i.jsxs("div", {
              className: "mt-6 flex flex-col gap-3 sm:flex-row",
              children: [
                i.jsx("button", {
                  onClick: () => r("/login?next=/schedule-pickup"),
                  className:
                    "rounded-full bg-brand-600 px-6 py-3 font-black text-white",
                  children: "Login",
                }),
                i.jsx("button", {
                  onClick: () => r("/register?next=/schedule-pickup"),
                  className:
                    "rounded-full border border-brand-100 px-6 py-3 font-black text-brand-700",
                  children: "New user? Register",
                }),
              ],
            }),
          ],
        }),
      });
}
function m0({ item: r, selected: f, onToggle: y }) {
  const [d, T] = q.useState(!1);
  return i.jsxs("button", {
    onClick: y,
    className: `group flex min-w-0 items-center justify-between gap-2 rounded-2xl border p-3 text-left transition hover:-translate-y-0.5 ${f ? "border-brand-500 bg-brand-50 shadow-soft" : "border-brand-100 bg-white hover:border-brand-200"}`,
    "aria-pressed": f,
    children: [
      i.jsxs("span", {
        className: "flex min-w-0 items-center gap-2",
        children: [
          i.jsx("span", {
            className:
              "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-50 text-brand-700",
            children:
              r.iconUrl && !d
                ? i.jsx("img", {
                    src: r.iconUrl,
                    alt: "",
                    className: "h-full w-full object-cover",
                    onError: () => T(!0),
                  })
                : i.jsx(Xn, { size: 18 }),
          }),
          i.jsxs("span", {
            className: "min-w-0",
            children: [
              i.jsx("strong", {
                className: "block break-words text-sm leading-tight text-ink",
                children: r.name,
              }),
              i.jsx("span", {
                className: "mt-1 block text-xs text-muted",
                children: Gs(r),
              }),
            ],
          }),
        ],
      }),
      f && i.jsx(Qn, { className: "shrink-0 text-brand-600" }),
    ],
  });
}
function p0({ mode: r, navigate: f, currentPath: y }) {
  const { setSession: d } = ri(),
    [T, E] = q.useState({ name: "", mobile: "", password: "" }),
    [M, z] = q.useState(""),
    [O, S] = q.useState(!1),
    C = R0(Ld(y, "next") || Ld(y, "redirect"));
  async function le() {
    z("");
    try {
      const B = T.mobile.replace(/\D/g, "");
      if (!/^\d{10}$/.test(B))
        return z("Please enter a 10 digit mobile number.");
      if (T.password.length < 6)
        return z("Password must be at least 6 characters.");
      const V =
          r === "register"
            ? { name: T.name.trim(), mobile: B, password: T.password }
            : { mobile: B, password: T.password },
        W = await el(`/auth/${r}`, { method: "POST", body: JSON.stringify(V) });
      (d(W), f(C || "/account"));
    } catch (B) {
      z(B instanceof Error ? B.message : "Authentication failed.");
    }
  }
  return i.jsxs(qt, {
    title: r === "register" ? "Create Account" : "Login",
    subtitle:
      "Use the same secure mobile number and password flow as the mobile application.",
    children: [
      i.jsxs("div", {
        className: "mx-auto max-w-md card p-6",
        children: [
          r === "register" &&
            i.jsx(Et, {
              label: "Name",
              value: T.name,
              onChange: (B) => E({ ...T, name: B }),
            }),
          i.jsx(Et, {
            label: "Mobile Number",
            value: T.mobile,
            onChange: (B) =>
              E({ ...T, mobile: B.replace(/\D/g, "").slice(0, 10) }),
          }),
          i.jsx(Et, {
            label: "Password",
            type: "password",
            value: T.password,
            onChange: (B) => E({ ...T, password: B.slice(0, 20) }),
          }),
          r === "login" &&
            i.jsx("button", {
              onClick: () => S(!0),
              className: "mt-2 text-sm font-bold text-brand-700",
              children: "Forgot Password?",
            }),
          M &&
            i.jsx("p", {
              className:
                "mt-4 rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700",
              children: M,
            }),
          i.jsx("button", {
            onClick: le,
            className:
              "mt-5 w-full rounded-2xl bg-brand-600 px-5 py-3 font-black text-white",
            children: r === "register" ? "Register" : "Login",
          }),
          i.jsx("button", {
            onClick: () => f(_0(r, C)),
            className: "mt-4 w-full text-sm font-bold text-brand-700",
            children:
              r === "register"
                ? "Already registered? Login"
                : "New user? Register",
          }),
        ],
      }),
      O &&
        i.jsx("div", {
          className: "fixed inset-0 z-50 grid place-items-center bg-ink/40 p-4",
          children: i.jsxs("div", {
            className: "max-w-md card p-6",
            children: [
              i.jsx("h2", {
                className: "text-xl font-black text-ink",
                children: "Reset Password",
              }),
              i.jsxs("p", {
                className: "mt-3 text-muted",
                children: [
                  "To reset your password, please contact our support team on WhatsApp at ",
                  ce.phone,
                  ". Our team will help you set a new password.",
                ],
              }),
              i.jsxs("div", {
                className: "mt-5 flex flex-col gap-3 sm:flex-row",
                children: [
                  i.jsx("a", {
                    className:
                      "rounded-2xl bg-brand-600 px-5 py-3 text-center font-black text-white",
                    href: `https://wa.me/${ce.phonePlain}?text=${encodeURIComponent("Hi, I need help resetting my account password.")}`,
                    children: "Contact on WhatsApp",
                  }),
                  i.jsx("button", {
                    className:
                      "rounded-2xl border border-brand-100 px-5 py-3 font-black text-brand-700",
                    onClick: () => S(!1),
                    children: "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function b0({ route: r, navigate: f }) {
  const { session: y, loading: d, logout: T } = ri(),
    [E, M] = q.useState([]),
    [z, O] = q.useState("");
  return (
    q.useEffect(() => {
      !y ||
        r.path !== "/orders" ||
        el("/bookings?page=1&limit=10&status=all", { token: y.token })
          .then((S) => M(S.data || []))
          .catch((S) =>
            O(S instanceof Error ? S.message : "Could not load orders."),
          );
    }, [r.path, y]),
    d
      ? i.jsx(qt, { title: "Account", subtitle: "Restoring your session..." })
      : y
        ? i.jsx(qt, {
            title: r.path === "/orders" ? "Orders" : "Account",
            subtitle: `Welcome, ${y.user.name || y.user.mobile}.`,
            children: i.jsxs("div", {
              className: "grid gap-5 lg:grid-cols-[300px_1fr]",
              children: [
                i.jsxs("aside", {
                  className: "card p-5",
                  children: [
                    i.jsx("p", {
                      className: "font-black text-ink",
                      children: y.user.name || "Kabad Factory User",
                    }),
                    i.jsx("p", {
                      className: "mt-1 text-sm text-muted",
                      children: y.user.mobile,
                    }),
                    i.jsx("button", {
                      onClick: () => f("/orders"),
                      className:
                        "mt-5 w-full rounded-2xl border border-brand-100 px-4 py-3 text-left font-bold text-brand-700",
                      children: "Orders",
                    }),
                    i.jsx("button", {
                      onClick: T,
                      className:
                        "mt-3 w-full rounded-2xl bg-ink px-4 py-3 font-bold text-white",
                      children: "Logout",
                    }),
                  ],
                }),
                i.jsx("section", {
                  className: "card p-5",
                  children:
                    r.path !== "/orders"
                      ? i.jsxs("div", {
                          children: [
                            i.jsx("h2", {
                              className: "text-xl font-black text-ink",
                              children: "Manage your pickup journey",
                            }),
                            i.jsx("p", {
                              className: "mt-2 text-muted",
                              children:
                                "Use Orders to view pickup status, item details, pickup charges, and bills.",
                            }),
                          ],
                        })
                      : z
                        ? i.jsx(nh, { message: z, onRetry: () => f("/orders") })
                        : i.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              E.map((S) =>
                                i.jsxs(
                                  "article",
                                  {
                                    className:
                                      "rounded-2xl border border-brand-100 p-4",
                                    children: [
                                      i.jsxs("div", {
                                        className:
                                          "flex items-start justify-between gap-3",
                                        children: [
                                          i.jsxs("div", {
                                            children: [
                                              i.jsxs("h2", {
                                                className:
                                                  "font-black text-ink",
                                                children: ["#KF", S.id],
                                              }),
                                              i.jsxs("p", {
                                                className: "text-sm text-muted",
                                                children: [
                                                  S.pickupDate,
                                                  " | ",
                                                  S.timeSlot,
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsx("span", {
                                            className:
                                              "rounded-full bg-brand-50 px-3 py-1 text-xs font-black text-brand-700",
                                            children: S.status,
                                          }),
                                        ],
                                      }),
                                      i.jsx("p", {
                                        className: "mt-3 text-sm text-muted",
                                        children: [S.line1, S.city, S.pincode]
                                          .filter(Boolean)
                                          .join(", "),
                                      }),
                                      i.jsxs("div", {
                                        className:
                                          "mt-4 flex flex-wrap gap-3 text-sm font-bold text-ink",
                                        children: [
                                          i.jsxs("span", {
                                            children: [
                                              S.itemCount || 0,
                                              " items",
                                            ],
                                          }),
                                          i.jsxs("span", {
                                            children: [
                                              "Pickup ₹",
                                              Number(
                                                S.pickupCharge || 0,
                                              ).toFixed(0),
                                            ],
                                          }),
                                          i.jsx("span", {
                                            children:
                                              S.status === "completed"
                                                ? `Total ₹${Number(S.totalAmount || 0).toFixed(0)}`
                                                : "Total Pending",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  S.id,
                                ),
                              ),
                              !E.length &&
                                i.jsx("p", {
                                  className: "text-muted",
                                  children: "No orders found.",
                                }),
                            ],
                          }),
                }),
              ],
            }),
          })
        : i.jsx(qt, {
            title: "Login Required",
            subtitle: "Please login to view account pages.",
            children: i.jsx("button", {
              onClick: () => f("/login"),
              className:
                "rounded-full bg-brand-600 px-5 py-3 font-black text-white",
              children: "Login",
            }),
          })
  );
}
function x0({ route: r, navigate: f }) {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(fi, {
        route: r,
        action: () => f("/schedule-pickup"),
        actionLabel: "Schedule Pickup",
      }),
      i.jsx(ah, { route: r }),
      i.jsx(_s, { navigate: f }),
      i.jsx(Kn, {}),
    ],
  });
}
function Kd({ route: r, navigate: f }) {
  return r.path === "/about"
    ? i.jsx(y0, { route: r, navigate: f })
    : i.jsxs(i.Fragment, {
        children: [
          i.jsx(fi, {
            route: r,
            action: () => f("/schedule-pickup"),
            actionLabel: "Schedule Pickup",
          }),
          i.jsx(ah, { route: r }),
          i.jsx("section", {
            className: "container-page pb-16",
            children: i.jsxs("div", {
              className:
                "card flex flex-col items-start justify-between gap-5 bg-brand-900 p-7 text-white md:flex-row md:items-center",
              children: [
                i.jsxs("div", {
                  children: [
                    i.jsx("h2", {
                      className: "text-2xl font-black",
                      children: "Ready to sell scrap?",
                    }),
                    i.jsx("p", {
                      className: "mt-2 text-brand-100",
                      children:
                        "Check your PIN code and schedule a pickup online.",
                    }),
                  ],
                }),
                i.jsx("button", {
                  onClick: () => f("/schedule-pickup"),
                  className:
                    "rounded-full bg-white px-6 py-3 font-black text-brand-700",
                  children: "Schedule Pickup",
                }),
              ],
            }),
          }),
        ],
      });
}
function y0({ route: r, navigate: f }) {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("section", {
        className: "relative isolate overflow-hidden bg-ink py-20 text-white",
        children: [
          i.jsx("img", {
            src: ce.assets.heroBanner,
            alt: "",
            className: "absolute inset-0 -z-20 h-full w-full object-cover",
            loading: "lazy",
          }),
          i.jsx("div", {
            className:
              "absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/84 to-ink/35",
          }),
          i.jsxs("div", {
            className: "container-page reveal-up",
            children: [
              i.jsx(qs, { path: r.path }),
              i.jsx("h1", {
                className: "mt-5 max-w-4xl text-4xl font-black sm:text-6xl",
                children: "About Kabad Factory",
              }),
              i.jsx("p", {
                className:
                  "mt-5 max-w-3xl text-xl font-bold leading-9 text-brand-100",
                children:
                  "A cleaner, simpler way to sell recyclables from home.",
              }),
              i.jsx("p", {
                className: "mt-4 max-w-3xl text-lg leading-8 text-white/84",
                children:
                  "Kabad Factory brings current scrap rates, doorstep pickup, saved addresses and order tracking into one easy digital experience for Gwalior customers.",
              }),
              i.jsxs("div", {
                className: "mt-8 flex flex-col gap-3 sm:flex-row",
                children: [
                  i.jsx("button", {
                    onClick: () => f("/pickup-services"),
                    className:
                      "rounded-full bg-white px-6 py-3 text-center font-black text-brand-700",
                    children: "Explore Services",
                  }),
                  i.jsx("button", {
                    onClick: () => f("/schedule-pickup"),
                    className:
                      "rounded-full bg-brand-600 px-6 py-3 font-black text-white",
                    children: "Schedule Pickup",
                  }),
                  i.jsx("a", {
                    href: ce.appDownloadUrl,
                    className:
                      "rounded-full border border-white/25 px-6 py-3 text-center font-black text-white",
                    children: "Download App",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      i.jsxs("section", {
        className: "container-page py-14",
        children: [
          i.jsx(Tl, {
            eyebrow: "Our Mission",
            title: "Easy, transparent recycling — one doorstep at a time",
            body: "Whether it is paper, metal, plastic, electronics, or household scrap, our goal is to help customers recycle responsibly without carrying scrap to a local dealer.",
          }),
          i.jsx("div", {
            className: "mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
            children: (r.sections || []).map((y, d) => {
              const T = [si, Hp, Ua, Xn][d] || Id;
              return i.jsxs(
                "article",
                {
                  className:
                    "card reveal-up p-5 transition hover:-translate-y-1 hover:border-brand-200",
                  children: [
                    i.jsx("div", {
                      className:
                        "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700",
                      children: i.jsx(T, {}),
                    }),
                    i.jsx("h2", {
                      className: "mt-5 text-xl font-black text-ink",
                      children: y.title,
                    }),
                    i.jsx("p", {
                      className: "mt-3 text-sm leading-6 text-muted",
                      children: y.body,
                    }),
                  ],
                },
                y.title,
              );
            }),
          }),
        ],
      }),
      i.jsx("section", {
        className: "bg-white py-14",
        children: i.jsxs("div", {
          className:
            "container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className:
                    "text-sm font-black uppercase tracking-wide text-brand-700",
                  children: "Our Vision",
                }),
                i.jsx("h2", {
                  className: "mt-2 text-3xl font-black text-ink sm:text-4xl",
                  children:
                    "A cleaner city where selling scrap is as simple as ordering a service online.",
                }),
              ],
            }),
            i.jsx("div", {
              className: "grid gap-4 sm:grid-cols-2",
              children: [
                "Doorstep pickup from saved addresses",
                "Current scrap rates from backend",
                "Pickup charge before confirmation",
                "Orders and bills in one account",
              ].map((y) =>
                i.jsxs(
                  "div",
                  {
                    className:
                      "rounded-2xl border border-brand-100 bg-brand-50 p-4 font-bold text-ink",
                    children: [
                      i.jsx(Qn, { className: "mb-3 text-brand-700" }),
                      y,
                    ],
                  },
                  y,
                ),
              ),
            }),
          ],
        }),
      }),
      i.jsx(Hs, { navigate: f }),
    ],
  });
}
function g0({ route: r, navigate: f }) {
  const y = [
    [
      "Doorstep Scrap Pickup",
      "Book collection from home for paper, metal, plastic, appliances and mixed recyclable scrap.",
    ],
    [
      "Household Scrap Pickup",
      "Clear everyday home scrap without visiting a local dealer or weighing shop.",
    ],
    [
      "Bulk Scrap Pickup",
      "Plan larger pickups for homes, societies, shops and local businesses.",
    ],
    [
      "Office Scrap Pickup",
      "Dispose of office paper, packaging, old electronics and workspace scrap with documented status.",
    ],
    [
      "Commercial Scrap Pickup",
      "Coordinate one-time or repeat scrap collection for business material.",
    ],
    [
      "E-Waste Pickup",
      "Schedule responsible pickup for accepted wires, devices, computer parts and small electronics.",
    ],
  ];
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("section", {
        className:
          "relative isolate overflow-hidden bg-brand-900 py-20 text-white",
        children: [
          i.jsx("img", {
            src: ce.assets.heroBanner,
            alt: "",
            className: "absolute inset-0 -z-20 h-full w-full object-cover",
            loading: "lazy",
          }),
          i.jsx("div", {
            className:
              "absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/88 to-brand-900/42",
          }),
          i.jsxs("div", {
            className: "container-page",
            children: [
              i.jsx(qs, { path: r.path }),
              i.jsx("h1", {
                className: "mt-5 max-w-4xl text-4xl font-black sm:text-6xl",
                children: r.h1,
              }),
              i.jsx("p", {
                className: "mt-5 max-w-3xl text-lg leading-8 text-brand-100",
                children: r.intro,
              }),
              i.jsx("button", {
                onClick: () => f("/schedule-pickup"),
                className:
                  "mt-8 rounded-full bg-white px-6 py-3 font-black text-brand-700",
                children: "Schedule Pickup",
              }),
            ],
          }),
        ],
      }),
      i.jsxs("section", {
        className: "container-page py-16",
        children: [
          i.jsx(Tl, {
            eyebrow: "Our Pickup Services",
            title: "What Kabad Factory Collects",
            body: "Doorstep pickup is designed for homes, offices and local businesses that want a clean, transparent way to sell scrap.",
          }),
          i.jsx("div", {
            className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
            children: y.map(([d, T]) =>
              i.jsxs(
                "article",
                {
                  className:
                    "card p-5 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift",
                  children: [
                    i.jsx(si, { className: "text-brand-700" }),
                    i.jsx("h2", {
                      className: "mt-4 text-xl font-black text-ink",
                      children: d,
                    }),
                    i.jsx("p", {
                      className: "mt-3 text-sm leading-6 text-muted",
                      children: T,
                    }),
                  ],
                },
                d,
              ),
            ),
          }),
        ],
      }),
      i.jsx("section", {
        className: "bg-white py-16",
        children: i.jsxs("div", {
          className:
            "container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx(Tl, {
                  eyebrow: "Where We Serve",
                  title: "Currently focused on Gwalior serviceable PIN codes",
                  body: "Availability and pickup charges are checked from the backend using the customer's PIN code and configured pickup-charge rules.",
                }),
                i.jsxs("div", {
                  className:
                    "mt-6 flex flex-wrap gap-3 text-sm font-bold text-muted",
                  children: [
                    i.jsx("span", {
                      className:
                        "rounded-full border border-line bg-brand-50 px-4 py-2",
                      children: "Gwalior",
                    }),
                    i.jsx("span", {
                      className:
                        "rounded-full border border-line bg-brand-50 px-4 py-2",
                      children: "PIN-based serviceability",
                    }),
                    i.jsx("span", {
                      className:
                        "rounded-full border border-line bg-brand-50 px-4 py-2",
                      children: "Transparent pickup charge",
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("div", {
              className: "card p-5 sm:p-7",
              children: i.jsx(lh, { onSchedule: () => f("/schedule-pickup") }),
            }),
          ],
        }),
      }),
      i.jsx(Hs, { navigate: f }),
      i.jsx(Kn, {}),
    ],
  });
}
function v0({ route: r, navigate: f }) {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(fi, {
        route: r,
        action: () => f("/schedule-pickup"),
        actionLabel: "Book Pickup",
      }),
      i.jsx("section", {
        className: "container-page grid gap-5 pb-16 md:grid-cols-3",
        children: [
          "Online Kabadiwala Gwalior",
          "Scrap Pickup Gwalior",
          "Raddi Wala Near Me",
        ].map((y) =>
          i.jsxs(
            "div",
            {
              className: "card p-5",
              children: [
                i.jsx("h2", {
                  className: "text-xl font-black text-ink",
                  children: y,
                }),
                i.jsx("p", {
                  className: "mt-2 text-muted",
                  children:
                    "Kabad Factory connects local pickup availability, current scrap rates, and digital order tracking for Gwalior customers.",
                }),
              ],
            },
            y,
          ),
        ),
      }),
      i.jsx(_s, { navigate: f }),
      i.jsx(Kn, {}),
    ],
  });
}
function S0({ navigate: r }) {
  const f = [
    [
      "How to Prepare Scrap Before Pickup",
      "Sort paper, metal, plastic and e-waste separately for faster weighing and clearer settlement.",
    ],
    [
      "Why Scrap Rates Change",
      "Scrap values move with commodity prices, material quality, and quantity.",
    ],
    [
      "How Pickup Charges Work",
      "Kabad Factory calculates pickup charges using backend store PIN, customer PIN, active slabs, and distance buffer.",
    ],
  ];
  return i.jsxs(qt, {
    title: "Scrap Selling Guides",
    subtitle:
      "Useful, local-first guides for customers selling scrap online in Gwalior.",
    children: [
      i.jsx("div", {
        className: "grid gap-5 md:grid-cols-3",
        children: f.map(([y, d]) =>
          i.jsxs(
            "article",
            {
              className: "card p-5",
              children: [
                i.jsx("h2", {
                  className: "text-xl font-black text-ink",
                  children: y,
                }),
                i.jsx("p", { className: "mt-3 text-muted", children: d }),
              ],
            },
            y,
          ),
        ),
      }),
      i.jsx("button", {
        onClick: () => r("/schedule-pickup"),
        className:
          "mt-8 rounded-full bg-brand-600 px-6 py-3 font-black text-white",
        children: "Schedule Pickup",
      }),
    ],
  });
}
function j0({ route: r }) {
  return i.jsx(qt, {
    title: r.h1 || "FAQ",
    subtitle: r.seo.description,
    children: i.jsx(Kn, { plain: !0 }),
  });
}
function N0({ route: r }) {
  return i.jsx(qt, {
    title: r.h1 || r.label,
    subtitle: r.seo.description,
    children: i.jsxs("div", {
      className: "card max-w-none p-6",
      children: [
        i.jsx("h2", { children: "Service Information" }),
        i.jsx("p", {
          children:
            "Kabad Factory uses customer account data, pickup addresses, selected scrap items, pricing data, and order status information to provide doorstep scrap pickup and support.",
        }),
        i.jsx("h2", { children: "Customer Responsibility" }),
        i.jsx("p", {
          children:
            "Customers should provide accurate mobile numbers, pickup addresses, PIN codes, selected items, and scheduling details.",
        }),
        i.jsx("h2", { children: "Contact" }),
        i.jsxs("p", {
          children: [
            "For questions, contact ",
            ce.email,
            " or ",
            ce.phone,
            ".",
          ],
        }),
      ],
    }),
  });
}
function k0() {
  return i.jsx("section", {
    className: "bg-white py-16",
    children: i.jsxs("div", {
      className: "container-page",
      children: [
        i.jsx(Tl, {
          eyebrow: "Simple flow",
          title: "How It Works",
          body: "From PIN check to verified pickup, the process stays simple and transparent.",
        }),
        i.jsx("div", {
          className: "mt-8 grid gap-4 md:grid-cols-5",
          children: Pp.map(({ icon: r, title: f, body: y }, d) =>
            i.jsxs(
              "div",
              {
                className:
                  "card group p-5 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift",
                children: [
                  i.jsx("div", {
                    className:
                      "flex h-12 w-12 items-center justify-center rounded-card bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white",
                    children: i.jsx(r, {}),
                  }),
                  i.jsxs("p", {
                    className: "mt-5 text-sm font-black text-amber",
                    children: ["Step ", d + 1],
                  }),
                  i.jsx("h3", {
                    className: "mt-1 text-base font-black text-ink",
                    children: f,
                  }),
                  i.jsx("p", {
                    className: "mt-2 text-sm leading-6 text-muted",
                    children: y,
                  }),
                ],
              },
              f,
            ),
          ),
        }),
      ],
    }),
  });
}
function A0() {
  return i.jsx("section", {
    className: "py-16",
    children: i.jsxs("div", {
      className: "container-page grid gap-8 lg:grid-cols-2",
      children: [
        i.jsx("div", {
          children: i.jsx(Tl, {
            eyebrow: "Why Kabad Factory",
            title: "Doorstep Pickup. Transparent Rates. Easy Recycling.",
            body: "Sell scrap online with clearer pricing, saved addresses, pickup tracking, and a cleaner service experience.",
          }),
        }),
        i.jsx("div", {
          className: "grid gap-4 sm:grid-cols-2",
          children: [
            "Current rates from backend",
            "PIN-based serviceability",
            "Pickup charge before booking",
            "Orders and bills in one account",
          ].map((r) =>
            i.jsxs(
              "div",
              {
                className:
                  "rounded-card border border-line bg-white p-5 font-bold text-ink shadow-soft",
                children: [i.jsx(Id, { className: "mb-3 text-brand-700" }), r],
              },
              r,
            ),
          ),
        }),
      ],
    }),
  });
}
function Hs({ navigate: r }) {
  return i.jsx("section", {
    className: "container-page py-16",
    children: i.jsxs("div", {
      className:
        "grid overflow-hidden rounded-card border border-line bg-white shadow-soft lg:grid-cols-[1fr_0.82fr]",
      children: [
        i.jsxs("div", {
          className: "p-7 md:p-10",
          children: [
            i.jsx("p", {
              className:
                "text-sm font-black uppercase tracking-wide text-brand-700",
              children: "Get the App",
            }),
            i.jsx("h2", {
              className:
                "mt-3 max-w-2xl text-3xl font-black text-ink sm:text-4xl",
              children: "Take Kabad Factory with You",
            }),
            i.jsx("p", {
              className: "mt-4 max-w-2xl text-lg leading-8 text-muted",
              children:
                "Schedule pickups, manage addresses and track your orders faster with the Kabad Factory app.",
            }),
            i.jsx("p", {
              className: "mt-4 font-black text-brand-700",
              children:
                "Ghar ka kabad ab tension nahi — pickup schedule karo aur becho aasani se.",
            }),
            i.jsxs("div", {
              className: "mt-7 flex flex-col gap-3 sm:flex-row",
              children: [
                i.jsxs("a", {
                  href: ce.appDownloadUrl,
                  className:
                    "inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-black text-white",
                  children: [i.jsx(Ua, { size: 18 }), " Get the App"],
                }),
                i.jsxs("button", {
                  onClick: () => r("/schedule-pickup"),
                  className:
                    "inline-flex items-center justify-center gap-2 rounded-full border border-brand-100 px-6 py-3 font-black text-brand-700",
                  children: ["Schedule on Website ", i.jsx(Yn, { size: 18 })],
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "mt-7 flex max-w-sm items-center gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-4",
              children: [
                i.jsx("div", {
                  className:
                    "grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-white text-brand-700",
                  children: i.jsx(Jp, { size: 46 }),
                }),
                i.jsx("p", {
                  className: "text-sm font-bold text-muted",
                  children:
                    "Our Android and iOS apps are in development. Tap Get the App for the latest availability information.",
                }),
              ],
            }),
          ],
        }),
        i.jsx("div", {
          className: "relative min-h-[360px] bg-brand-50",
          children: i.jsx("img", {
            src: ce.assets.appMockup,
            alt: "Kabad Factory mobile app mockup showing schedule, saved addresses, rates and orders",
            className: "h-full w-full object-cover",
            loading: "lazy",
          }),
        }),
      ],
    }),
  });
}
function w0({ navigate: r }) {
  return i.jsxs("section", {
    className: "container-page py-16",
    children: [
      i.jsx(Tl, {
        eyebrow: "What can you sell?",
        title: "Sell Your Recyclables with Kabad Factory",
        body: "Choose from common household, office, appliance, paper, metal, plastic and e-waste categories.",
      }),
      i.jsx("div", {
        className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        children: th.map(([f, y]) =>
          i.jsxs(
            "button",
            {
              onClick: () => r(`/sell-scrap/${f}`),
              className:
                "card group flex items-center justify-between p-5 text-left transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift",
              children: [
                i.jsxs("span", {
                  children: [
                    i.jsx("strong", {
                      className: "block text-ink",
                      children: y,
                    }),
                    i.jsx("span", {
                      className: "text-sm text-muted",
                      children: "Rates, pickup, FAQ",
                    }),
                  ],
                }),
                i.jsx(Ds, { className: "text-brand-700" }),
              ],
            },
            f,
          ),
        ),
      }),
    ],
  });
}
function T0({ navigate: r }) {
  return i.jsx("section", {
    className: "container-page py-16",
    children: i.jsxs("div", {
      className:
        "grid gap-8 rounded-card border border-line bg-brand-50 p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
      children: [
        i.jsxs("div", {
          children: [
            i.jsx("p", {
              className:
                "text-sm font-black uppercase tracking-wide text-brand-700",
              children: "Pickup Services",
            }),
            i.jsx("h2", {
              className: "mt-3 text-3xl font-black text-ink sm:text-4xl",
              children:
                "Household, bulk, office and e-waste pickup in one place.",
            }),
            i.jsx("p", {
              className: "mt-4 leading-7 text-muted",
              children:
                "See what Kabad Factory collects, where service is available, and check your PIN before scheduling.",
            }),
            i.jsxs("button", {
              onClick: () => r("/pickup-services"),
              className:
                "mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-black text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-700",
              children: ["Explore Pickup Services ", i.jsx(Yn, { size: 18 })],
            }),
          ],
        }),
        i.jsx("div", {
          className: "grid gap-3 sm:grid-cols-2",
          children: [
            "Doorstep Scrap Pickup",
            "Household Scrap Pickup",
            "Bulk Scrap Pickup",
            "Office Scrap Pickup",
            "Commercial Scrap Pickup",
            "E-Waste Pickup",
          ].map((f) =>
            i.jsxs(
              "div",
              {
                className:
                  "rounded-card border border-line bg-white p-4 font-extrabold text-ink shadow-soft",
                children: [i.jsx(Qn, { className: "mb-3 text-brand-700" }), f],
              },
              f,
            ),
          ),
        }),
      ],
    }),
  });
}
function E0({ navigate: r }) {
  return i.jsx("section", {
    className: "bg-white py-16",
    children: i.jsxs("div", {
      className:
        "container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
      children: [
        i.jsxs("div", {
          children: [
            i.jsx("p", {
              className:
                "text-sm font-black uppercase tracking-wide text-brand-700",
              children: "About Kabad Factory",
            }),
            i.jsx("h2", {
              className: "mt-3 text-3xl font-black text-ink sm:text-4xl",
              children: "Your Scrap Has Value. Sell It from Home.",
            }),
          ],
        }),
        i.jsxs("div", {
          children: [
            i.jsx("p", {
              className: "text-lg leading-8 text-muted",
              children:
                "Kabad Factory helps customers sell scrap online with current rates, doorstep pickup, saved addresses and order tracking. It is built for a cleaner city and a more convenient recycling experience.",
            }),
            i.jsxs("button", {
              onClick: () => r("/about"),
              className:
                "mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 font-black text-brand-700 hover:border-brand-200 hover:bg-brand-50",
              children: ["Learn More ", i.jsx(Ds, { size: 17 })],
            }),
          ],
        }),
      ],
    }),
  });
}
function z0({ navigate: r }) {
  return i.jsx("section", {
    className: "container-page py-16",
    children: i.jsxs("div", {
      className:
        "relative isolate overflow-hidden rounded-card bg-brand-900 p-7 text-white shadow-soft md:p-10",
      children: [
        i.jsx("img", {
          src: ce.assets.heroBanner,
          alt: "",
          className: "absolute inset-0 -z-20 h-full w-full object-cover",
          loading: "lazy",
        }),
        i.jsx("div", {
          className:
            "absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/92 to-brand-900/45",
        }),
        i.jsxs("div", {
          className: "max-w-3xl reveal-up",
          children: [
            i.jsx("p", {
              className:
                "text-sm font-black uppercase tracking-wide text-brand-100",
              children: "Bulk and business pickup",
            }),
            i.jsx("h2", {
              className: "mt-3 text-3xl font-black",
              children: "Office, commercial, and large scrap collection",
            }),
            i.jsx("p", {
              className: "mt-4 text-brand-100",
              children:
                "Plan bigger pickups with item-wise collection details, pickup charge visibility, and completion billing.",
            }),
            i.jsx("button", {
              onClick: () => r("/pickup-services"),
              className:
                "mt-6 rounded-full bg-white px-6 py-3 font-black text-brand-700",
              children: "Explore Services",
            }),
          ],
        }),
      ],
    }),
  });
}
function M0({ navigate: r }) {
  return i.jsx("section", {
    className: "container-page pb-16",
    children: i.jsxs("div", {
      className:
        "rounded-card border border-line bg-white p-7 text-center shadow-soft md:p-10",
      children: [
        i.jsx("h2", {
          className: "text-3xl font-black text-ink sm:text-4xl",
          children: "Ready to sell your scrap?",
        }),
        i.jsx("p", {
          className: "mx-auto mt-3 max-w-2xl text-muted",
          children:
            "Check pickup availability, compare current rates and schedule a convenient doorstep pickup.",
        }),
        i.jsxs("div", {
          className: "mt-7 flex flex-col justify-center gap-3 sm:flex-row",
          children: [
            i.jsx("button", {
              onClick: () => r("/schedule-pickup"),
              className:
                "rounded-full bg-brand-600 px-6 py-3 font-black text-white shadow-soft hover:bg-brand-700",
              children: "Schedule Pickup",
            }),
            i.jsx("button", {
              onClick: () => r("/scrap-rates"),
              className:
                "rounded-full border border-line bg-white px-6 py-3 font-black text-brand-700 hover:bg-brand-50",
              children: "Check Scrap Rates",
            }),
          ],
        }),
      ],
    }),
  });
}
function Kn({ plain: r = !1 }) {
  var y;
  const f =
    ((y = Vl.find((d) => d.path === "/")) == null ? void 0 : y.faqs) || [];
  return i.jsxs("section", {
    className: r ? "" : "container-page py-14",
    children: [
      !r &&
        i.jsx(Tl, {
          eyebrow: "FAQ",
          title: "Questions customers ask before selling scrap",
          body: "Clear answers help search visibility and reduce support calls.",
        }),
      i.jsx("div", {
        className: "mt-8 grid gap-4 md:grid-cols-2",
        children: f.map((d) =>
          i.jsxs(
            "details",
            {
              className: "card p-5",
              children: [
                i.jsx("summary", {
                  className: "cursor-pointer text-base font-black text-ink",
                  children: d.question,
                }),
                i.jsx("p", {
                  className: "mt-3 text-sm leading-6 text-muted",
                  children: d.answer,
                }),
              ],
            },
            d.question,
          ),
        ),
      }),
    ],
  });
}
function ah({ route: r }) {
  return i.jsx("section", {
    className: "container-page grid gap-5 py-12 md:grid-cols-3",
    children: (r.sections || []).map((f) =>
      i.jsxs(
        "article",
        {
          className: "card p-5",
          children: [
            i.jsx("h2", {
              className: "text-xl font-black text-ink",
              children: f.title,
            }),
            i.jsx("p", {
              className: "mt-3 leading-7 text-muted",
              children: f.body,
            }),
          ],
        },
        f.title,
      ),
    ),
  });
}
function fi({ route: r, action: f, actionLabel: y }) {
  return i.jsx("section", {
    className: "bg-brand-50 py-16",
    children: i.jsxs("div", {
      className: "container-page",
      children: [
        i.jsx(qs, { path: r.path }),
        i.jsx("h1", {
          className: "mt-5 max-w-4xl text-4xl font-black text-ink sm:text-5xl",
          children: r.h1 || r.label,
        }),
        i.jsx("p", {
          className: "mt-4 max-w-3xl text-lg leading-8 text-muted",
          children: r.intro || r.seo.description,
        }),
        f &&
          i.jsxs("button", {
            onClick: f,
            className:
              "mt-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-black text-white",
            children: [y || "Continue", " ", i.jsx(Yn, { size: 18 })],
          }),
      ],
    }),
  });
}
function qt({ title: r, subtitle: f, children: y }) {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx("section", {
        className: "bg-brand-50 py-14",
        children: i.jsxs("div", {
          className: "container-page",
          children: [
            i.jsx("h1", {
              className: "text-4xl font-black text-ink sm:text-5xl",
              children: r,
            }),
            i.jsx("p", {
              className: "mt-4 max-w-3xl text-lg leading-8 text-muted",
              children: f,
            }),
          ],
        }),
      }),
      i.jsx("section", { className: "container-page py-12", children: y }),
    ],
  });
}
function Tl({ eyebrow: r, title: f, body: y }) {
  return i.jsxs("div", {
    children: [
      i.jsx("p", {
        className: "text-sm font-black uppercase tracking-wide text-brand-700",
        children: r,
      }),
      i.jsx("h2", {
        className: "mt-2 text-3xl font-black text-ink sm:text-4xl",
        children: f,
      }),
      i.jsx("p", {
        className: "mt-3 max-w-3xl leading-7 text-muted",
        children: y,
      }),
    ],
  });
}
function Et({ label: r, value: f, onChange: y, type: d = "text", error: T }) {
  return i.jsxs("label", {
    className: "mt-4 block",
    children: [
      i.jsx("span", { className: "text-sm font-bold text-ink", children: r }),
      i.jsx("input", {
        className: `focus-ring mt-2 min-h-12 w-full rounded-2xl border bg-white px-4 text-ink ${T ? "border-red-300" : "border-brand-100"}`,
        type: d,
        value: f,
        onChange: (E) => y(E.target.value),
      }),
      T &&
        i.jsx("span", {
          className: "mt-2 block text-sm font-bold text-red-700",
          children: T,
        }),
    ],
  });
}
function O0({
  draft: r,
  setDraft: f,
  errors: y,
  saving: d,
  onSave: T,
  onCancel: E,
}) {
  return i.jsxs("div", {
    className: "mt-5 rounded-2xl border border-brand-100 bg-brand-50 p-4",
    children: [
      i.jsxs("div", {
        className: "grid gap-x-4 sm:grid-cols-2",
        children: [
          i.jsx(Et, {
            label: "Full Name",
            value: r.fullName,
            onChange: (M) => f((z) => ({ ...z, fullName: M })),
            error: y.fullName,
          }),
          i.jsx(Et, {
            label: "Mobile",
            value: r.mobile,
            onChange: (M) =>
              f((z) => ({ ...z, mobile: M.replace(/\D/g, "").slice(0, 15) })),
            error: y.mobile,
          }),
          i.jsx(Et, {
            label: "Address Line",
            value: r.line1,
            onChange: (M) => f((z) => ({ ...z, line1: M })),
            error: y.line1,
          }),
          i.jsx(Et, {
            label: "Street / Locality",
            value: r.line2,
            onChange: (M) => f((z) => ({ ...z, line2: M })),
            error: y.line2,
          }),
          i.jsx(Et, {
            label: "Landmark",
            value: r.landmark || "",
            onChange: (M) => f((z) => ({ ...z, landmark: M })),
            error: y.landmark,
          }),
          i.jsx(Et, {
            label: "City",
            value: r.city,
            onChange: (M) => f((z) => ({ ...z, city: M })),
            error: y.city,
          }),
          i.jsx(Et, {
            label: "State",
            value: r.state,
            onChange: (M) => f((z) => ({ ...z, state: M })),
            error: y.state,
          }),
          i.jsx(Et, {
            label: "PIN Code",
            value: r.pincode,
            onChange: (M) =>
              f((z) => ({ ...z, pincode: M.replace(/\D/g, "").slice(0, 6) })),
            error: y.pincode,
          }),
        ],
      }),
      i.jsxs("div", {
        className: "mt-4",
        children: [
          i.jsx("span", {
            className: "text-sm font-bold text-ink",
            children: "Address Type",
          }),
          i.jsx("div", {
            className: "mt-2 flex flex-wrap gap-2",
            children: ["home", "office", "other"].map((M) =>
              i.jsx(
                "button",
                {
                  onClick: () => f((z) => ({ ...z, label: M })),
                  className: `rounded-full border px-4 py-2 text-sm font-black ${r.label === M ? "border-brand-600 bg-brand-600 text-white" : "border-brand-100 bg-white text-muted"}`,
                  children: Ms(M),
                },
                M,
              ),
            ),
          }),
        ],
      }),
      i.jsxs("label", {
        className: "mt-4 flex items-center gap-3 text-sm font-bold text-ink",
        children: [
          i.jsx("input", {
            type: "checkbox",
            checked: !!r.isDefault,
            onChange: (M) => f((z) => ({ ...z, isDefault: M.target.checked })),
            className: "h-5 w-5 accent-brand-600",
          }),
          "Set as Default",
        ],
      }),
      i.jsxs("div", {
        className: "mt-5 flex flex-col gap-3 sm:flex-row",
        children: [
          i.jsx("button", {
            onClick: T,
            disabled: d,
            className:
              "rounded-2xl bg-brand-600 px-5 py-3 font-black text-white disabled:opacity-60",
            children: d ? "Saving..." : "Save Address",
          }),
          i.jsx("button", {
            onClick: E,
            type: "button",
            className:
              "rounded-2xl border border-brand-100 bg-white px-5 py-3 font-black text-brand-700",
            children: "Cancel",
          }),
        ],
      }),
    ],
  });
}
function ii({ icon: r, title: f, error: y }) {
  return i.jsxs("div", {
    children: [
      i.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          i.jsx("span", {
            className:
              "flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700",
            children: r,
          }),
          i.jsx("h2", {
            className: "text-xl font-black text-ink",
            children: f,
          }),
        ],
      }),
      y &&
        i.jsx("p", {
          className:
            "mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700",
          children: y,
        }),
    ],
  });
}
function Gn({ label: r, value: f, strong: y = !1 }) {
  return i.jsxs("div", {
    className:
      "flex items-start justify-between gap-4 border-b border-brand-50 pb-3 last:border-b-0",
    children: [
      i.jsx("span", { className: "text-muted", children: r }),
      i.jsx("span", {
        className: `max-w-[58%] text-right ${y ? "text-lg font-black text-brand-700" : "font-bold text-ink"}`,
        children: f,
      }),
    ],
  });
}
function qs({ path: r }) {
  const f = r.split("/").filter(Boolean);
  return i.jsxs("nav", {
    className: "flex flex-wrap gap-2 text-sm font-bold text-muted",
    "aria-label": "Breadcrumb",
    children: [
      i.jsx("a", { href: "/", className: "text-brand-700", children: "Home" }),
      f.map((y, d) =>
        i.jsxs("span", { children: ["/ ", y.replace(/-/g, " ")] }, d),
      ),
    ],
  });
}
function D0({ navigate: r }) {
  const f = [
    "/about",
    "/pickup-services",
    "/scrap-rates",
    "/how-it-works",
    "/contact",
    "/blog",
    "/gwalior",
    "/privacy-policy",
    "/terms",
  ];
  return i.jsx("footer", {
    className: "border-t border-line bg-white py-12",
    children: i.jsxs("div", {
      className: "container-page grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]",
      children: [
        i.jsxs("div", {
          children: [
            i.jsx("img", {
              src: ce.assets.logo,
              alt: "Kabad Factory",
              className: "h-16 w-48 object-contain object-left",
            }),
            i.jsx("p", {
              className: "mt-4 max-w-md text-muted",
              children:
                "Sell scrap online from home with doorstep pickup, transparent rates, saved addresses and order tracking.",
            }),
            i.jsx("p", {
              className: "mt-4 text-sm font-bold text-ink",
              children: ce.address,
            }),
            i.jsx("p", { className: "text-sm text-muted", children: ce.hours }),
          ],
        }),
        i.jsxs("div", {
          children: [
            i.jsx("h3", {
              className: "font-black text-ink",
              children: "Quick Links",
            }),
            i.jsx("div", {
              className: "mt-3 grid gap-2",
              children: f.map((y) =>
                i.jsx(
                  "a",
                  {
                    href: y,
                    onClick: (d) => wl(d, y, r),
                    className:
                      "text-sm font-semibold text-muted hover:text-brand-700",
                    children: U0(y),
                  },
                  y,
                ),
              ),
            }),
          ],
        }),
        i.jsxs("div", {
          children: [
            i.jsx("h3", {
              className: "font-black text-ink",
              children: "Contact",
            }),
            i.jsxs("a", {
              className:
                "mt-3 flex items-center gap-2 text-sm font-bold text-brand-700",
              href: `tel:${ce.phonePlain}`,
              children: [i.jsx(Lp, { size: 16 }), " ", ce.phone],
            }),
            i.jsx("a", {
              className: "mt-2 block text-sm font-semibold text-muted",
              href: `mailto:${ce.email}`,
              children: ce.email,
            }),
            i.jsxs("a", {
              className:
                "mt-4 inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-black text-white",
              href: ce.appDownloadUrl,
              children: [i.jsx(Ua, { size: 16 }), " Download App"],
            }),
          ],
        }),
      ],
    }),
  });
}
function C0({ navigate: r }) {
  return i.jsx(qt, {
    title: "Page not found",
    subtitle: "The page you opened does not exist.",
    children: i.jsx("button", {
      className: "rounded-full bg-brand-600 px-5 py-3 font-black text-white",
      onClick: () => r("/"),
      children: "Go Home",
    }),
  });
}
function nh({ message: r, onRetry: f }) {
  return i.jsxs("div", {
    className:
      "mb-5 rounded-2xl border border-red-100 bg-red-50 p-4 text-red-700",
    children: [
      i.jsx("p", { className: "font-bold", children: r }),
      i.jsx("button", {
        onClick: f,
        className:
          "mt-3 rounded-full bg-red-700 px-4 py-2 text-sm font-bold text-white",
        children: "Retry",
      }),
    ],
  });
}
function Bs() {
  const [r, f] = q.useState([]),
    [y, d] = q.useState(!1),
    [T, E] = q.useState("");
  function M() {
    (d(!0),
      E(""),
      el("/categories")
        .then((z) => f(z.data || []))
        .catch((z) =>
          E(z instanceof Error ? z.message : "Could not load scrap rates."),
        )
        .finally(() => d(!1)));
  }
  return (
    q.useEffect(() => {
      M();
    }, []),
    { categories: r, loading: y, error: T, reload: M }
  );
}
function wl(r, f, y) {
  f.startsWith("http") || (r.preventDefault(), y(f));
}
function Zd() {
  return typeof window > "u"
    ? "/"
    : `${window.location.pathname}${window.location.search}`;
}
function ch(r) {
  return r.split("?")[0] || "/";
}
function Ld(r, f) {
  const y = r.split("?")[1] || "";
  return new URLSearchParams(y).get(f);
}
function R0(r) {
  if (!r) return "";
  try {
    const f = decodeURIComponent(r);
    return !f.startsWith("/") || f.startsWith("//")
      ? ""
      : Vl.some((y) => y.path === ch(f))
        ? f
        : "";
  } catch {
    return "";
  }
}
function _0(r, f) {
  const y = r === "register" ? "/login" : "/register";
  return f ? `${y}?next=${encodeURIComponent(f)}` : y;
}
function Vd(r) {
  return !!(r && typeof r == "object" && "name" in r);
}
function Gs(r) {
  const f = r.unit === "piece" ? "pcs" : r.unit || "kg";
  return `₹${Number(r.price || 0).toFixed(0)}/${f}`;
}
function U0(r) {
  return r === "/"
    ? "Home"
    : r
        .split("/")
        .filter(Boolean)
        .pop()
        .replace(/-/g, " ")
        .replace(/\b\w/g, (f) => f.toUpperCase());
}
function H0(r) {
  return r === "0-10 kg"
    ? 10
    : r === "10-30 kg"
      ? 30
      : r === "30-50 kg"
        ? 50
        : r === "50-200 kg"
          ? 200
          : 250;
}
function q0(r) {
  const f = {};
  return (
    r.selected.length || (f.items = "Please select at least one scrap item."),
    r.weightRange || (f.weightRange = "Please select the estimated weight."),
    r.selectedAddressId ||
      (f.address = "Please select a saved pickup address."),
    r.pickupDate || (f.pickupDate = "Please select a pickup date."),
    r.timeSlot || (f.timeSlot = "Please select a time slot."),
    f
  );
}
function B0(r) {
  const f = {};
  return (
    r.fullName.trim() || (f.fullName = "Full name is required."),
    r.mobile.trim()
      ? /^\d{10,15}$/.test(r.mobile.replace(/\D/g, "")) ||
        (f.mobile = "Please enter a valid mobile number.")
      : (f.mobile = "Mobile number is required."),
    r.line1.trim() || (f.line1 = "House, flat, or building is required."),
    r.line2.trim() || (f.line2 = "Street or locality is required."),
    r.city.trim() || (f.city = "City is required."),
    r.state.trim() || (f.state = "State is required."),
    r.pincode.trim()
      ? /^[0-9A-Za-z -]{4,12}$/.test(r.pincode.trim()) ||
        (f.pincode = "Please enter a valid PIN code.")
      : (f.pincode = "PIN code is required."),
    r.label || (f.label = "Address type is required."),
    f
  );
}
function G0(r) {
  return {
    fullName: _a(r.fullName),
    mobile: r.mobile.replace(/\D/g, ""),
    label: r.label,
    line1: _a(r.line1),
    line2: _a(r.line2),
    landmark: _a(r.landmark || ""),
    city: _a(r.city),
    state: _a(r.state),
    pincode: String(r.pincode || "")
      .replace(/\s+/g, "")
      .toUpperCase(),
    isDefault: !!r.isDefault,
  };
}
function Jd(r) {
  var d;
  const f =
      ((d = r == null ? void 0 : r.details) == null ? void 0 : d.fieldErrors) ||
      {},
    y = {};
  return (
    Object.entries(f).forEach(([T, E]) => {
      y[T] = Array.isArray(E) ? String(E[0]) : String(E);
    }),
    y
  );
}
function Y0(r, f) {
  return r === 0
    ? f.selected.length > 0
    : r === 1
      ? !!f.weightRange
      : r === 2
        ? !!f.selectedAddressId
        : r === 3
          ? f.pickupCharge !== null || !!f.selectedAddressId
          : r === 4
            ? !!(f.pickupDate && f.timeSlot)
            : !!(
                f.selected.length &&
                f.weightRange &&
                f.selectedAddressId &&
                f.pickupDate &&
                f.timeSlot
              );
}
function Q0(r) {
  const f = new Intl.DateTimeFormat("en-IN", { weekday: "short" }),
    y = new Intl.DateTimeFormat("en-IN", { month: "short" });
  return Array.from({ length: r }, (d, T) => {
    const E = new Date();
    return (
      E.setDate(E.getDate() + T),
      {
        value: X0(E),
        day: f.format(E),
        date: String(E.getDate()),
        month: y.format(E),
        isToday: T === 0,
      }
    );
  });
}
function X0(r) {
  const f = r.getFullYear(),
    y = String(r.getMonth() + 1).padStart(2, "0"),
    d = String(r.getDate()).padStart(2, "0");
  return `${f}-${y}-${d}`;
}
function Fd(r) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(`${r}T00:00:00`));
}
function zs(r) {
  return [r.line1, r.line2, r.landmark, r.city, r.state, `PIN: ${r.pincode}`]
    .filter(Boolean)
    .join(", ");
}
function Ms(r = "") {
  return String(r)
    .split("_")
    .map((f) => f.charAt(0).toUpperCase() + f.slice(1))
    .join(" ");
}
function _a(r) {
  return String(r || "")
    .trim()
    .replace(/\s+/g, " ");
}
function K0() {
  return i.jsx("span", {
    className: "h-2 w-2 rounded-full bg-brand-600",
    "aria-hidden": !0,
  });
}
const Z0 = {
  path: "/404",
  label: "404",
  kind: "notFound",
  seo: {
    title: "Page Not Found | Kabad Factory",
    description: "This Kabad Factory page was not found.",
    canonical: "/404",
    noindex: !0,
  },
};
var $d;
if (typeof window < "u") {
  const r = Vl.find((f) => f.path === window.location.pathname);
  r &&
    ((document.title = r.seo.title),
    ($d = document.querySelector("link[rel='canonical']")) == null ||
      $d.setAttribute("href", t0(r.seo.canonical)));
}
Cp.hydrateRoot(document.getElementById("root"), i.jsx(n0, {}));
