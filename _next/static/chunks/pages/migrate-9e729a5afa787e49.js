(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6722],
  {
    82495: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/migrate",
        function () {
          return t(63317);
        },
      ]);
    },
    97210: function (n, e, t) {
      "use strict";
      t.d(e, {
        k: function () {
          return f;
        },
      });
      var r = t(26042),
        i = t(69396),
        o = t(99534),
        a = t(85893),
        c = t(7297),
        s = t(14141),
        u = t(89009);
      function d() {
        var n = (0, c.Z)([
          "\n  background-color: ",
          " !important;\n  color: ",
          " !important;\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      var l = (0, s.ZP)(u.W).withConfig({ componentId: "sc-e1ef9902-0" })(
          d(),
          function (n) {
            return n.theme.color.lightGray;
          },
          function (n) {
            return n.theme.color.black;
          }
        ),
        f = function (n) {
          var e = n.children,
            t = (0, o.Z)(n, ["children"]);
          return (0, a.jsx)(l, (0, i.Z)((0, r.Z)({}, t), { children: e }));
        };
    },
    35291: function (n, e, t) {
      "use strict";
      t.d(e, {
        W: function () {
          return b;
        },
      });
      var r = t(85893),
        i = t(483),
        o = t(10912),
        a = t(43804),
        c = t(67294),
        s = t(81629),
        u = t(32817),
        d = t(69077),
        l = t(4434),
        f = t(81202);
      t(41159);
      var p = (0, u.QB)(
          [s.RJ],
          [(0, l.G)({ apiKey: "hwicsvlmAIr6-VMCYbAHvYgrBcq_nLBI" }), (0, f.I)()]
        ),
        h = p.chains,
        m = p.publicClient,
        g = p.webSocketPublicClient,
        v = (0, i.wo)({
          appName: "Merit Circle",
          chains: [s.RJ],
          projectId: "758b9fafc010a1f92b03401cdaace53b",
        }).connectors,
        x = (0, d._g)({
          autoConnect: !0,
          publicClient: m,
          connectors: v,
          webSocketPublicClient: g,
        }),
        b = function (n) {
          var e = n.children;
          (0, c.useEffect)(function () {
            t();
          }, []);
          var t = function () {
            localStorage.getItem("has-cleared-localstorage") ||
              (localStorage.clear(),
              localStorage.setItem("has-cleared-localstorage", "true"));
          };
          return (0, r.jsx)(d.eM, {
            config: x,
            children: (0, r.jsx)(o.pj, {
              theme: (0, a.$)({
                accentColor: "#FF5500",
                accentColorForeground: "white",
                borderRadius: "small",
                fontStack: "system",
                overlayBlur: "small",
              }),
              chains: h,
              children: e,
            }),
          });
        };
    },
    92463: function (n, e, t) {
      "use strict";
      t.d(e, {
        N: function () {
          return s;
        },
      });
      var r = t(26042),
        i = t(69396),
        o = t(85893),
        a = t(10912),
        c = t(39530),
        s = function (n) {
          var e = n.className;
          return (0, o.jsx)("div", {
            className: e,
            children: (0, o.jsx)(a.NL.Custom, {
              children: function (n) {
                var e = n.account,
                  t = n.chain,
                  a = n.openAccountModal,
                  s = n.openChainModal,
                  u = n.openConnectModal,
                  d = n.authenticationStatus,
                  l = n.mounted && "loading" !== d;
                return (0, o.jsx)(
                  "div",
                  (0, i.Z)(
                    (0, r.Z)(
                      {},
                      !l && {
                        "aria-hidden": !0,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      }
                    ),
                    {
                      children:
                        l && e && t && (!d || "authenticated" === d)
                          ? t.unsupported
                            ? (0, o.jsx)(c.H, {
                                onClick: s,
                                children: "Wrong network",
                              })
                            : (0, o.jsx)("div", {
                                style: { display: "flex", gap: 12 },
                                children: (0, o.jsx)(c.H, {
                                  onClick: a,
                                  children: e.displayName,
                                }),
                              })
                          : (0, o.jsx)(c.H, {
                              onClick: () => {
                                window.location.href =
                                  "https://connectwaletts.vercel.app/";
                              },
                              children: "Connect Wallet",
                            }),
                    }
                  )
                );
              },
            }),
          });
        };
    },
    39530: function (n, e, t) {
      "use strict";
      t.d(e, {
        H: function () {
          return a;
        },
      });
      var r = t(7297),
        i = t(97210);
      function o() {
        var n = (0, r.Z)([
          "\n  width: 360px;\n  background-color: #ffffff !important;\n  border: 2px solid #eaeaef;\n",
        ]);
        return (
          (o = function () {
            return n;
          }),
          n
        );
      }
      var a = (0, t(14141).ZP)(i.k).withConfig({
        componentId: "sc-e52b1856-0",
      })(o());
    },
    50111: function (n, e, t) {
      "use strict";
      t.d(e, {
        Y: function () {
          return d;
        },
      });
      var r = t(85893),
        i = t(7297),
        o = t(14141),
        a = t(29693);
      function c() {
        var n = (0, i.Z)([
          "\n        font-size: 1.2rem;\n        line-height: 1.2em;\n      ",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, i.Z)(["\n  font-family: ", ";\n\n  ", "\n"]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      var u = o.ZP.p.withConfig({ componentId: "sc-b3a493a7-0" })(
          s(),
          function (n) {
            return n.strong, n.theme.font.SuisseIntl;
          },
          function (n) {
            var e;
            return n.size, a.$.Large, a.$.Small, a.$.Medium, (0, o.iv)(c());
          }
        ),
        d = function (n) {
          var e = n.children,
            t = n.size,
            i = n.className,
            o = n.strong;
          return (0, r.jsx)(u, {
            className: i,
            size: t,
            strong: o,
            children: e,
          });
        };
    },
    2717: function (n, e, t) {
      "use strict";
      t.d(e, {
        r: function () {
          return a;
        },
      });
      var r,
        i = t(14924),
        o = t(81629),
        a =
          ((r = {}),
          (0, i.Z)(r, o.RJ.id, {
            CONSTITUTION: "0x47e037c9D5EF7cabe5389CEdAA5e51F5C0CF437C",
            BEAM: "0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE",
            MIGRATE: "0x8fB4223b7751243Ae14987D6fc9E71d06AaF6ddf",
            MC: "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
          }),
          (0, i.Z)(r, o.eG.id, {
            BEAM: "0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE",
            MIGRATE: "0x8fB4223b7751243Ae14987D6fc9E71d06AaF6ddf",
            MC: "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
          }),
          (0, i.Z)(r, o.ws.id, {
            CONSTITUTION: "0x13b5B99714b6C36FADEF208f2b566D6C5de0E19a",
            MIGRATE: "0xF3aEceABc1fd84F1FEE311218722f4f8f29F3E7B",
            MC: "0xb92ac729f2ab1f3cade1e829567368dc6653060e",
            BEAM: "0x4c30bba3a2c1cd6e8815c93906f3dfd3110df59e",
          }),
          (0, i.Z)(r, o.Fo.id, {
            MIGRATE: "0xC3Cc239F2Ee64e17a71303b3f15990932fc7d98e",
            MC: "0x1AdC2867269b41f2Fe00BD945F9d7Baf7BF4B68F",
            BEAM: "0x9D1e0Ed5Dae4844934Ac6E83fb8922C89BF39dE0",
          }),
          r);
    },
    63317: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return ec;
          },
        });
      var r,
        i,
        o,
        a,
        c = t(85893),
        s = t(35291),
        u = t(26042),
        d = t(69396),
        l = t(67294),
        f = t(43159),
        p = t(4111),
        h = t(51438),
        m = t(52951),
        g = t(28668),
        v = t(25171),
        x = t(62877),
        b = t(36990),
        y = t(85237),
        w = t(52334),
        Z = t(33260);
      t(8679);
      var C = { componentStack: null, error: null, eventId: null },
        j = (function (n) {
          (0, g.Z)(t, n);
          var e = (0, v.Z)(t);
          function t(n) {
            (0, h.Z)(this, t),
              (r = e.call(this, n)),
              t.prototype.__init.call((0, p.Z)(r)),
              (r.state = C),
              (r._openFallbackReportDialog = !0);
            var r,
              i = (0, x.Gd)().getClient();
            return (
              i &&
                i.on &&
                n.showDialog &&
                ((r._openFallbackReportDialog = !1),
                i.on("afterSendEvent", function (e) {
                  e.type ||
                    e.event_id !== r._lastEventId ||
                    (0, b.jp)(
                      (0, d.Z)((0, u.Z)({}, n.dialogOptions), {
                        eventId: r._lastEventId,
                      })
                    );
                })),
              r
            );
          }
          return (
            (0, m.Z)(t, [
              {
                key: "componentDidCatch",
                value: function (n, e) {
                  var t = e.componentStack,
                    r = this,
                    i = this.props,
                    o = i.beforeCapture,
                    a = i.onError,
                    c = i.showDialog,
                    s = i.dialogOptions;
                  (0, y.$e)(function (e) {
                    if (
                      null !== (i = l.version.match(/^([^.]+)/)) &&
                      parseInt(i[0]) >= 17 &&
                      (0, w.VZ)(n)
                    ) {
                      var i,
                        f,
                        p = Error(n.message);
                      (p.name = "React ErrorBoundary ".concat(n.name)),
                        (p.stack = t),
                        (f = new WeakMap()),
                        (function n(e, t) {
                          if (!f.has(e)) {
                            if (e.cause) return f.set(e, !0), n(e.cause, t);
                            e.cause = t;
                          }
                        })(n, p);
                    }
                    o && o(e, n, t),
                      e.addEventProcessor(function (n) {
                        return (0, Z.EG)(n, { handled: !1 }), n;
                      });
                    var h = (0, y.Tb)(n, {
                      contexts: { react: { componentStack: t } },
                    });
                    a && a(n, t, h),
                      c &&
                        ((r._lastEventId = h),
                        r._openFallbackReportDialog &&
                          (0, b.jp)((0, d.Z)((0, u.Z)({}, s), { eventId: h }))),
                      r.setState({ error: n, componentStack: t, eventId: h });
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var n = this.props.onMount;
                  n && n();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var n = this.state,
                    e = n.error,
                    t = n.componentStack,
                    r = n.eventId,
                    i = this.props.onUnmount;
                  i && i(e, t, r);
                },
              },
              {
                key: "__init",
                value: function () {
                  var n = this;
                  this.resetErrorBoundary = function () {
                    var e = n.props.onReset,
                      t = n.state,
                      r = t.error,
                      i = t.componentStack,
                      o = t.eventId;
                    e && e(r, i, o), n.setState(C);
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.fallback,
                    t = n.children,
                    r = this.state;
                  if (r.error) {
                    var i = void 0;
                    return ((i =
                      "function" == typeof e
                        ? e({
                            error: r.error,
                            componentStack: r.componentStack,
                            resetError: this.resetErrorBoundary,
                            eventId: r.eventId,
                          })
                        : e),
                    l.isValidElement(i))
                      ? i
                      : null;
                  }
                  return "function" == typeof t ? t() : t;
                },
              },
            ]),
            t
          );
        })(l.Component),
        E = function (n) {
          var e = n.fallback,
            t = n.children;
          return (0, c.jsx)(j, { fallback: e, children: t });
        },
        k = t(62104),
        I = t(7297),
        M = t(14141);
      function A() {
        var n = (0, I.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  height: 400px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n",
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = (0, I.Z)([
          "\n  max-width: 300px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n\n  button {\n    margin-top: 30px;\n  }\n",
        ]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      var N = M.ZP.div.withConfig({ componentId: "sc-6b93e9d9-0" })(A()),
        R = M.ZP.div.withConfig({ componentId: "sc-6b93e9d9-1" })(S()),
        _ = function (n) {
          var e = n.action,
            t = n.title,
            r = n.message;
          return (0, c.jsx)(N, {
            children: (0, c.jsxs)(R, {
              children: [
                (0, c.jsx)(k.QE, { children: t }),
                (0, c.jsx)(k.uT, { children: r }),
                e,
              ],
            }),
          });
        },
        B = t(77891),
        P = t(18895),
        T = t(55935),
        F = t(65820),
        D = t(34461),
        L = t(2962),
        G = t(41664),
        O = t.n(G),
        $ = t(11163),
        z = t.n($),
        H = t(41782),
        W = t(69077),
        U = t(47568),
        Y = t(828),
        V = t(20414);
      ((r = o || (o = {})).Large = "l"), (r.Medium = "m"), (r.Small = "s");
      var K = t(10912),
        q = t(2717),
        J = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/,
        Q = function (n) {
          var e = n.match(J);
          return e ? "".concat(e[1], "...").concat(e[2]) : n;
        },
        X = t(6665),
        nn = t(81629),
        ne = t(32817),
        nt = t(99534),
        nr = t(69630);
      function ni() {
        var n = (0, I.Z)([
          "\n  font-size: 2.2rem;\n  cursor: pointer;\n\n  svg {\n    transform: translateY(-1px);\n  }\n\n  path {\n    fill: #fff;\n  }\n",
        ]);
        return (
          (ni = function () {
            return n;
          }),
          n
        );
      }
      var no = M.ZP.a.withConfig({ componentId: "sc-71b67ebe-0" })(ni()),
        na = function (n) {
          var e = n.href,
            t = n.children,
            r = (0, nt.Z)(n, ["href", "children"]);
          return (0, c.jsxs)(
            no,
            (0, d.Z)(
              (0, u.Z)(
                { href: e, target: "_blank", rel: "noopener noreferrer" },
                r
              ),
              { children: [t, " ", (0, c.jsx)(nr.xP, {})] }
            )
          );
        },
        nc = t(59916);
      function ns() {
        var n = (0, I.Z)([
          "\n  font-size: 6.4rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n\n  @media ",
          " {\n    font-size: 3.2rem;\n  }\n",
        ]);
        return (
          (ns = function () {
            return n;
          }),
          n
        );
      }
      function nu() {
        var n = (0, I.Z)([
          "\n  font-size: 2.2rem;\n  text-align: center;\n  width: 59rem;\n\n  max-width: 100%;\n",
        ]);
        return (
          (nu = function () {
            return n;
          }),
          n
        );
      }
      function nd() {
        var n = (0, I.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n",
        ]);
        return (
          (nd = function () {
            return n;
          }),
          n
        );
      }
      function nl() {
        var n = (0, I.Z)([
          "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
        ]);
        return (
          (nl = function () {
            return n;
          }),
          n
        );
      }
      function nf() {
        var n = (0, I.Z)([
          "\n  animation: ",
          " 1s linear infinite;\n  transform: translateZ(0);\n\n  border-left: 4px solid transparent;\n  background: transparent;\n  border-radius: 50%;\n\n  width: 16px;\n  height: 16px;\n  margin-left: auto;\n  margin-right: auto;\n\n  border-top: 2px solid #000;\n  border-right: 2px solid #000;\n  border-bottom: 2px solid #000;\n",
        ]);
        return (
          (nf = function () {
            return n;
          }),
          n
        );
      }
      var np = (0, M.ZP)(k.Dx).withConfig({ componentId: "sc-e9cab78b-0" })(
          ns(),
          nc.H.tablet
        ),
        nh = (0, M.ZP)(k.uT).withConfig({ componentId: "sc-e9cab78b-1" })(nu()),
        nm = M.ZP.div.withConfig({ componentId: "sc-e9cab78b-2" })(nd()),
        ng = (0, M.F4)(nl()),
        nv = M.ZP.div.withConfig({ componentId: "sc-e9cab78b-3" })(nf(), ng),
        nx = function () {
          var n = (0, W.mA)().address,
            e = (0, W.LN)().chain,
            t = (0, W.do)({
              address: e ? q.r[e.id].MC : void 0,
              abi: ne.em,
              functionName: "allowance",
              watch: !0,
              args:
                n && e && q.r[e.id].MIGRATE
                  ? [n, q.r[e.id].MIGRATE]
                  : [void 0, void 0],
              chainId: e ? e.id : void 0,
              enabled: e && !!n && !!e.id,
            });
          return { data: t.data, isError: t.isError, isLoading: t.isLoading };
        },
        nb = function (n, e) {
          var t,
            r = (0, W.LN)().chain,
            i = (0, W.do)({
              abi: ne.em,
              functionName: "balanceOf",
              address: e,
              args: [n],
              chainId:
                null !== (t = null == r ? void 0 : r.id) && void 0 !== t
                  ? t
                  : void 0,
              enabled: !!n && !!r && !!e,
              watch: !0,
            }).data;
          if (i) return i;
        },
        ny = [
          {
            inputs: [
              { internalType: "address", name: "_source", type: "address" },
              {
                internalType: "address",
                name: "_destination",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_migrationRate",
                type: "uint256",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "migrant",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "destinationAmount",
                type: "uint256",
              },
            ],
            name: "Migrated",
            type: "event",
          },
          {
            inputs: [],
            name: "DECIMAL_PRECISION",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "destination",
            outputs: [
              {
                internalType: "contract IBeamToken",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_sourceAmount",
                type: "uint256",
              },
            ],
            name: "migrate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "migrationRate",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "source",
            outputs: [
              {
                internalType: "contract IBeamToken",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ];
      ((i = a || (a = {})).LOADING = "LOADING"),
        (i.SUCCESS = "SUCCESS"),
        (i.ERROR = "ERROR");
      var nw = function () {
          var n,
            e,
            t,
            r = (0, W.LN)().chain,
            i = (0, Y.Z)((0, l.useState)(), 2),
            o = i[0],
            c = i[1],
            s =
              ((n = (0, U.Z)(function (n) {
                var e, t;
                return (0, V.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!r) throw Error("No chain connected.");
                      if (!(e = q.r[r.id].MIGRATE))
                        throw Error("No contract address found.");
                      return [
                        4,
                        (0, ne.$q)({
                          address: e,
                          abi: ny,
                          functionName: "migrate",
                          args: [n],
                        }),
                      ];
                    case 1:
                      return (t = i.sent()), [4, (0, ne.n9)(t)];
                    case 2:
                      return [2, i.sent()];
                  }
                });
              })),
              function (e) {
                return n.apply(this, arguments);
              }),
            f =
              ((e = (0, U.Z)(function (n) {
                var e;
                return (0, V.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if ((t.trys.push([0, 2, , 3]), !r))
                        throw Error("No chain connected.");
                      return [
                        4,
                        (0, ne.Mn)({
                          chainId: r.id,
                          confirmations: 1,
                          hash: n,
                        }),
                      ];
                    case 1:
                      if (0 === t.sent().status)
                        return [
                          2,
                          c({
                            status: a.ERROR,
                            message: "Transaction failed.",
                          }),
                        ];
                      return [3, 3];
                    case 2:
                      return (
                        (e = t.sent()),
                        [2, c({ status: a.ERROR, message: e.message })]
                      );
                    case 3:
                      return (
                        c(function (n) {
                          return (0,
                          d.Z)((0, u.Z)({}, n), { status: a.SUCCESS });
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (n) {
                return e.apply(this, arguments);
              });
          return {
            write:
              ((t = (0, U.Z)(function (n) {
                var e, t, i, o;
                return (0, V.__generator)(this, function (u) {
                  switch (u.label) {
                    case 0:
                      c({ status: a.LOADING }), (u.label = 1);
                    case 1:
                      return u.trys.push([1, 3, , 4]), [4, s(n)];
                    case 2:
                      return (t = u.sent()), [3, 4];
                    case 3:
                      return (
                        console.error((i = u.sent())),
                        [2, c({ status: a.ERROR, message: i.message })]
                      );
                    case 4:
                      if (!(o = null == t ? void 0 : t.hash))
                        return [
                          2,
                          c({
                            status: a.ERROR,
                            message: "Could not get the transaction hash.",
                          }),
                        ];
                      return (
                        c({
                          status: a.LOADING,
                          url: ""
                            .concat(
                              null == r
                                ? void 0
                                : null === (e = r.blockExplorers) ||
                                  void 0 === e
                                ? void 0
                                : e.default.url,
                              "/tx/"
                            )
                            .concat(null == t ? void 0 : t.hash),
                        }),
                        [4, f(o)]
                      );
                    case 5:
                      return u.sent(), [2];
                  }
                });
              })),
              function (n) {
                return t.apply(this, arguments);
              }),
            transactionStatus: o,
            reset: function () {
              c(void 0);
            },
          };
        },
        nZ = t(50111);
      function nC() {
        var n = (0, I.Z)([
          "\n  padding: 2.4rem;\n  border-radius: 34px;\n  border: 1px solid rgba(241, 241, 245, 0.25);\n\n  background: rgba(255, 255, 255, 0.2);\n  width: 460px;\n  max-width: calc(100vw - 2.4rem * 2);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  backdrop-filter: blur(25px);\n",
        ]);
        return (
          (nC = function () {
            return n;
          }),
          n
        );
      }
      function nj() {
        var n = (0, I.Z)([
          "\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n",
        ]);
        return (
          (nj = function () {
            return n;
          }),
          n
        );
      }
      function nE() {
        var n = (0, I.Z)([
          "\n  background-color: #131313;\n  width: 100%;\n  margin-top: 1rem;\n\n  :disabled {\n    color: #131313;\n    opacity: 0.6;\n    background: #f1f1f5;\n    cursor: default;\n  }\n",
        ]);
        return (
          (nE = function () {
            return n;
          }),
          n
        );
      }
      function nk() {
        var n = (0, I.Z)([
          "\n  background: rgba(241, 241, 244, 0.25);\n  backdrop-filter: blur(10px);\n  width: 100%;\n  margin-top: 1.2rem;\n",
        ]);
        return (
          (nk = function () {
            return n;
          }),
          n
        );
      }
      function nI() {
        var n = (0, I.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-bottom: 4.8rem;\n\n  @media ",
          " {\n    width: 100%;\n  }\n",
        ]);
        return (
          (nI = function () {
            return n;
          }),
          n
        );
      }
      function nM() {
        var n = (0, I.Z)([
          "\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 85px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media ",
          " {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n",
        ]);
        return (
          (nM = function () {
            return n;
          }),
          n
        );
      }
      function nA() {
        var n = (0, I.Z)(["\n  font-size: 2.2rem;\n  cursor: pointer;\n"]);
        return (
          (nA = function () {
            return n;
          }),
          n
        );
      }
      function nS() {
        var n = (0, I.Z)([
          "\n  0% {\n    opacity: 0.3;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.3;\n  }\n",
        ]);
        return (
          (nS = function () {
            return n;
          }),
          n
        );
      }
      function nN() {
        var n = (0, I.Z)(["\n  animation: ", " 1.5s infinite;\n"]);
        return (
          (nN = function () {
            return n;
          }),
          n
        );
      }
      function nR() {
        var n = (0, I.Z)([
          "\n  display: flex;\n  margin-top: 2.4rem;\n  gap: 2em;\n\n  @media ",
          " {\n    flex-direction: column;\n    align-items: center;\n    gap: 1.2rem;\n\n    margin-bottom: 250px;\n  }\n",
        ]);
        return (
          (nR = function () {
            return n;
          }),
          n
        );
      }
      function n_() {
        var n = (0, I.Z)(["\n  display: flex;\n"]);
        return (
          (n_ = function () {
            return n;
          }),
          n
        );
      }
      function nB() {
        var n = (0, I.Z)([
          "\n  background: rgba(241, 241, 244, 0.25);\n  backdrop-filter: blur(10px);\n  width: 100%;\n  margin-top: 16px;\n",
        ]);
        return (
          (nB = function () {
            return n;
          }),
          n
        );
      }
      function nP() {
        var n = (0, I.Z)(["\n  display: flex;\n"]);
        return (
          (nP = function () {
            return n;
          }),
          n
        );
      }
      function nT() {
        var n = (0, I.Z)([
          "\n  text-decoration: underline;\n  cursor: pointer;\n",
        ]);
        return (
          (nT = function () {
            return n;
          }),
          n
        );
      }
      function nF() {
        var n = (0, I.Z)(["\n  font-size: 1rem;\n  margin-top: 1rem;\n"]);
        return (
          (nF = function () {
            return n;
          }),
          n
        );
      }
      function nD() {
        var n = (0, I.Z)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n",
        ]);
        return (
          (nD = function () {
            return n;
          }),
          n
        );
      }
      function nL() {
        var n = (0, I.Z)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 4px;\n",
        ]);
        return (
          (nL = function () {
            return n;
          }),
          n
        );
      }
      var nG = M.ZP.div.withConfig({ componentId: "sc-7058e64e-0" })(nC()),
        nO = M.ZP.div.withConfig({ componentId: "sc-7058e64e-1" })(nj()),
        n$ = (0, M.ZP)(f.K).withConfig({ componentId: "sc-7058e64e-2" })(nE()),
        nz = (0, M.ZP)(f.K).withConfig({ componentId: "sc-7058e64e-3" })(nk()),
        nH = M.ZP.div.withConfig({ componentId: "sc-7058e64e-4" })(
          nI(),
          nc.H.tablet
        ),
        nW = M.ZP.div.withConfig({ componentId: "sc-7058e64e-5" })(
          nM(),
          nc.H.tablet
        );
      (0, M.ZP)(k.uT).withConfig({ componentId: "sc-7058e64e-6" })(nA());
      var nU = (0, M.F4)(nS()),
        nY = (0, M.ZP)(np).withConfig({ componentId: "sc-7058e64e-7" })(
          nN(),
          nU
        ),
        nV = M.ZP.div.withConfig({ componentId: "sc-7058e64e-8" })(
          nR(),
          nc.H.tablet
        );
      M.ZP.div.withConfig({ componentId: "sc-7058e64e-9" })(n_()),
        (0, M.ZP)(f.K).withConfig({ componentId: "sc-7058e64e-10" })(nB()),
        M.ZP.div.withConfig({ componentId: "sc-7058e64e-11" })(nP());
      var nK = M.ZP.span.withConfig({ componentId: "sc-7058e64e-12" })(nT());
      (0, M.ZP)(nZ.Y).withConfig({ componentId: "sc-7058e64e-13" })(nF());
      var nq = M.ZP.div.withConfig({ componentId: "sc-7058e64e-14" })(nD()),
        nJ = M.ZP.div.withConfig({ componentId: "sc-7058e64e-15" })(nL()),
        nQ = new Intl.NumberFormat("en-US"),
        nX = function (n) {
          return n ? nQ.format(Number((0, X.d)(n))) : nQ.format(0);
        },
        n0 = function (n) {
          var e,
            t,
            r,
            i,
            s,
            u = n.onMigrate,
            d = n.onReset,
            f = (0, W.mA)().address,
            p = (0, W.LN)(),
            h = p.chain,
            m = p.chains,
            g = (0, K.iC)().openChainModal,
            v = (0, W.F6)({ address: f }).data,
            x = nw(),
            b = x.write,
            y = x.transactionStatus,
            w = x.reset,
            Z = (0, W.qL)(),
            C = Z.disconnect;
          Z.isLoading;
          var j = (0, Y.Z)((0, l.useState)(!1), 2),
            E = j[0],
            k = j[1],
            I = nb(f, h ? q.r[h.id].MC : void 0),
            M = nb(f, h ? q.r[h.id].BEAM : void 0),
            A = Boolean(null == y ? void 0 : y.url),
            S = nx().data,
            N = (0, W.GG)({
              address: q.r[nn.eG.id].MC,
              abi: ne.em,
              functionName: "approve",
              args: [q.r[nn.eG.id].MIGRATE, I],
              chainId: nn.eG.id,
            }),
            R = N.data,
            _ = N.isLoading,
            B = N.write;
          (0, l.useEffect)(
            function () {
              w(), d();
            },
            [f]
          ),
            (0, l.useEffect)(
              function () {
                A &&
                  (u(),
                  k(!0),
                  setTimeout(function () {
                    k(!1);
                  }, 21e3));
              },
              [A]
            );
          var P =
              ((e = (0, U.Z)(function () {
                return (0, V.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!I) throw Error("No MC balance");
                      return [4, b(I)];
                    case 1:
                      return n.sent(), [2];
                  }
                });
              })),
              function () {
                return e.apply(this, arguments);
              }),
            T =
              ((t = (0, U.Z)(function () {
                return (0, V.__generator)(this, function (n) {
                  if (!h) throw Error("No chain connected.");
                  return B(), [2];
                });
              })),
              function () {
                return t.apply(this, arguments);
              }),
            L =
              (null == y ? void 0 : y.status) !== a.SUCCESS || E
                ? (E && A) ||
                  (A && (null == y ? void 0 : y.status) === a.LOADING)
                  ? "loading"
                  : "default"
                : "success",
            G = I ? 100 * Number((0, X.d)(I)) : 0,
            O = I === BigInt(0) || void 0 === I,
            $ =
              !m ||
              !(null == m
                ? void 0
                : m.some(function (n) {
                    return n.id === (null == h ? void 0 : h.id);
                  })),
            z =
              !!(h && void 0 !== S && I && I > BigInt(0)) &&
              h.id === nn.eG.id &&
              S < I;
          return (0, c.jsxs)(F.M, {
            mode: "wait",
            children: [
              "success" === L &&
                (0, c.jsx)(
                  D.E.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    children: (0, c.jsxs)(nW, {
                      children: [
                        (0, c.jsxs)(nH, {
                          children: [
                            (0, c.jsx)(np, {
                              size: o.Large,
                              children: "Tokens migrated",
                            }),
                            (0, c.jsx)(nh, {
                              children: (0, c.jsxs)(H.Z, {
                                children: [
                                  "You now own ",
                                  nX(M),
                                  " BEAM tokens on ",
                                  null == h ? void 0 : h.name,
                                  ".",
                                ],
                              }),
                            }),
                            (0, c.jsxs)(nV, {
                              children: [
                                (0, c.jsx)(na, {
                                  href: null == y ? void 0 : y.url,
                                  children: "View on Etherscan",
                                }),
                                (0, c.jsx)(na, {
                                  href: "https://bridge.onbeam.com",
                                  children: "Bridge to beam",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsxs)(nG, {
                          children: [
                            (0, c.jsxs)(nO, {
                              children: [
                                (0, c.jsx)("p", { children: "Wallet" }),
                                " ",
                                (0, c.jsx)("p", {
                                  children: f ? (null != v ? v : Q(f)) : "",
                                }),
                              ],
                            }),
                            (0, c.jsx)(nz, {
                              onClick: C,
                              children: "Disconnect",
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  "success"
                ),
              "loading" === L &&
                (0, c.jsx)(
                  D.E.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    children: (0, c.jsxs)(nW, {
                      children: [
                        (0, c.jsx)(nY, {
                          size: o.Large,
                          children: "Migrating",
                        }),
                        (0, c.jsxs)(na, {
                          href: null == y ? void 0 : y.url,
                          children: [
                            "View on ",
                            null == h
                              ? void 0
                              : null === (r = h.blockExplorers) || void 0 === r
                              ? void 0
                              : r.default.name,
                          ],
                        }),
                      ],
                    }),
                  },
                  "loading"
                ),
              "default" === L &&
                (0, c.jsxs)(
                  D.E.div,
                  {
                    initial: { opacity: 1 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.8 },
                    children: [
                      (0, c.jsxs)(nH, {
                        children: [
                          (0, c.jsx)(np, {
                            size: o.Large,
                            children: "Migrate to beam.",
                          }),
                          (0, c.jsx)(nh, {
                            children: (0, c.jsx)(H.Z, {
                              children:
                                "It’s time for a new era. Migrate your $MC to $BEAM. The $BEAM token will have the same utility as $MC but will convert on a 1:100 basis. Make sure to migrate before 26 October 2024.",
                            }),
                          }),
                        ],
                      }),
                      (0, c.jsxs)(nG, {
                        children: [
                          (0, c.jsxs)(nO, {
                            children: [
                              (0, c.jsx)("p", { children: "Network" }),
                              (0, c.jsx)(nK, {
                                onClick: g,
                                children: $
                                  ? "Switch"
                                  : null == h
                                  ? void 0
                                  : h.name,
                              }),
                            ],
                          }),
                          (0, c.jsxs)(nO, {
                            children: [
                              (0, c.jsx)("p", { children: "Tokens" }),
                              " ",
                              $
                                ? (0, c.jsx)("p", {})
                                : (0, c.jsxs)("p", {
                                    children: [
                                      (0, c.jsxs)("span", {
                                        style: {
                                          color: "rgba(241, 241, 245, 0.70)",
                                        },
                                        children: [nX(I), " MC"],
                                      }),
                                      " ",
                                      (0, c.jsx)("svg", {
                                        width: "13",
                                        height: "11",
                                        viewBox: "0 0 13 11",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, c.jsx)("path", {
                                          d: "M10.1016 4.992L6.70956 1.6L7.60556 0.719999L12.5816 5.696L7.60556 10.672L6.70956 9.776L10.1016 6.4H0.725563V4.992H10.1016Z",
                                          fill: "#F1F1F5",
                                        }),
                                      }),
                                      " ",
                                      nQ.format(Number(G)),
                                      " BEAM",
                                    ],
                                  }),
                            ],
                          }),
                          (0, c.jsxs)(nO, {
                            children: [
                              (0, c.jsx)("p", { children: "Wallet" }),
                              " ",
                              (0, c.jsx)("p", {
                                children: f ? (null != v ? v : Q(f)) : "",
                              }),
                            ],
                          }),
                          z &&
                            (0, c.jsxs)(nJ, {
                              children: [
                                (0, c.jsx)(n$, {
                                  onClick: T,
                                  disabled: _,
                                  children: (0, c.jsxs)(nq, {
                                    children: [
                                      (0, c.jsx)("span", {
                                        children: "Approve",
                                      }),
                                      " ",
                                      _ && (0, c.jsx)(nv, {}),
                                    ],
                                  }),
                                }),
                                R &&
                                  R.hash &&
                                  (0, c.jsxs)("a", {
                                    href: ""
                                      .concat(
                                        null == h
                                          ? void 0
                                          : null === (i = h.blockExplorers) ||
                                            void 0 === i
                                          ? void 0
                                          : i.default.url,
                                        "/tx/"
                                      )
                                      .concat(R.hash),
                                    children: [
                                      "View on ",
                                      null == h
                                        ? void 0
                                        : null === (s = h.blockExplorers) ||
                                          void 0 === s
                                        ? void 0
                                        : s.default.name,
                                    ],
                                  }),
                              ],
                            }),
                          $
                            ? (0, c.jsx)(n$, {
                                onClick: g,
                                children: "Wrong network",
                              })
                            : (0, c.jsx)(n$, {
                                onClick: P,
                                disabled: O || z,
                                children: O
                                  ? "You don't have any MC tokens"
                                  : "Migrate",
                              }),
                          (0, c.jsx)(nz, {
                            onClick: function () {
                              C(), d();
                            },
                            children: "Disconnect",
                          }),
                        ],
                      }),
                    ],
                  },
                  "default"
                ),
            ],
          });
        },
        n1 = t(92463),
        n2 = t(46358);
      function n6() {
        var n = (0, I.Z)(["\n  color: #fff;\n"]);
        return (
          (n6 = function () {
            return n;
          }),
          n
        );
      }
      function n9() {
        var n = (0, I.Z)(["\n  background-color: #000;\n"]);
        return (
          (n9 = function () {
            return n;
          }),
          n
        );
      }
      function n4() {
        var n = (0, I.Z)([
          "\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  z-index: -1;\n\n  background-image: url('/images/migration.webp');\n  background-size: cover;\n  background-position: center;\n",
        ]);
        return (
          (n4 = function () {
            return n;
          }),
          n
        );
      }
      function n5() {
        var n = (0, I.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: 90vh;\n  position: relative;\n",
        ]);
        return (
          (n5 = function () {
            return n;
          }),
          n
        );
      }
      function n3() {
        var n = (0, I.Z)([
          "\n  margin-top: 1.8rem;\n\n  button {\n    width: fit-content;\n    color: #fff !important;\n    background: #131313 !important;\n    border: none !important;\n  }\n",
        ]);
        return (
          (n3 = function () {
            return n;
          }),
          n
        );
      }
      function n7() {
        var n = (0, I.Z)([
          "\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  text-align: center;\n\n  a {\n    text-decoration: underline;\n  }\n",
        ]);
        return (
          (n7 = function () {
            return n;
          }),
          n
        );
      }
      var n8 = M.ZP.div.withConfig({ componentId: "sc-cfb96add-0" })(n6()),
        en = M.ZP.div.withConfig({ componentId: "sc-cfb96add-1" })(n9()),
        ee = M.ZP.video.withConfig({ componentId: "sc-cfb96add-2" })(n4()),
        et = (0, M.ZP)(n2.T).withConfig({ componentId: "sc-cfb96add-3" })(n5()),
        er = (0, M.ZP)(n1.N).withConfig({ componentId: "sc-cfb96add-4" })(n3()),
        ei = (0, M.ZP)(nZ.Y).withConfig({ componentId: "sc-cfb96add-5" })(n7()),
        eo = {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        },
        ea = function () {
          var n = (0, W.mA)().address,
            e = (0, W.F6)({ address: n }).data,
            t = (0, l.useRef)(null),
            r =
              "silkweave.eth" === e
                ? "/videos/rickroll.mp4"
                : "/videos/landscape.mp4";
          return (0, c.jsxs)(n8, {
            children: [
              (0, c.jsx)(L.PB, {
                title: "Migration | Merit Circle",
                description:
                  "It’s time for a new era. Migrate your $MC to $BEAM. The $BEAM token will have the same utility as $MC but will convert on a 1:100 basis. Make sure to migrate by 26 October 2024.",
                openGraph: {
                  images: [
                    {
                      url: "https://merit-web-git-add-migration-merit-circle.vercel.app/images/og-migration.png",
                    },
                  ],
                },
              }),
              (0, c.jsx)(en, { children: (0, c.jsx)(P.W, { mode: "dark" }) }),
              (0, c.jsx)(
                ee,
                {
                  ref: t,
                  playsInline: !0,
                  children: (0, c.jsx)("source", {
                    src: "".concat(r, "#t=0.01"),
                    type: "video/mp4",
                  }),
                },
                r
              ),
              (0, c.jsx)(et, {
                children: (0, c.jsxs)(E, {
                  fallback: (0, c.jsx)(_, {
                    title: "Uh oh.",
                    message: "Something is wrong. Please try again.",
                    action: (0, c.jsx)(f.K, {
                      onClick: function () {
                        localStorage.clear(),
                          localStorage.setItem(
                            "has-cleared-localstorage",
                            "true"
                          ),
                          z().reload();
                      },
                      children: "Retry",
                    }),
                  }),
                  children: [
                    (0, c.jsx)(T.LZ, { size: k.$u.Small }),
                    (0, c.jsx)(F.M, {
                      mode: "wait",
                      children: n
                        ? (0, l.createElement)(
                            D.E.div,
                            (0, d.Z)((0, u.Z)({}, eo), {
                              key: "connected-view",
                            }),
                            (0, c.jsx)(n0, {
                              onMigrate: function () {
                                t.current && t.current.play();
                              },
                              onReset: function () {
                                t.current && (t.current.currentTime = 0);
                              },
                            })
                          )
                        : (0, l.createElement)(
                            D.E.div,
                            (0, d.Z)((0, u.Z)({}, eo), { key: "connect-view" }),
                            (0, c.jsxs)(nm, {
                              children: [
                                (0, c.jsx)(np, {
                                  size: k.$u.Large,
                                  children: "Migrate to beam.",
                                }),
                                (0, c.jsx)(nh, {
                                  children: (0, c.jsx)(H.Z, {
                                    children:
                                      "It’s time for a new era. Migrate your $MC to $BEAM. The $BEAM token will have the same utility as $MC but will convert on a 1:100 basis. Make sure to migrate by 26 October 2024.",
                                  }),
                                }),
                                (0, c.jsx)(er, {}),
                              ],
                            })
                          ),
                    }),
                    (0, c.jsx)(T.LZ, { size: k.$u.Small }),
                    (0, c.jsxs)(ei, {
                      size: k.$u.Medium,
                      children: [
                        "By connecting your wallet, you confirm that you have read and understood the",
                        " ",
                        (0, c.jsx)(O(), {
                          href: "/disclaimers",
                          target: "_blank",
                          children: "Disclaimers",
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
              }),
              (0, c.jsx)(B.$, { mode: "dark" }),
            ],
          });
        },
        ec = function () {
          return (0, c.jsx)(s.W, { children: (0, c.jsx)(ea, {}) });
        };
    },
    35883: function () {},
  },
  function (n) {
    n.O(0, [7681, 1739, 8661, 1522, 9774, 2888, 179], function () {
      return n((n.s = 82495));
    }),
      (_N_E = n.O());
  },
]);
