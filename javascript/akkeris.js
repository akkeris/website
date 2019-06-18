function initDropdowns(e) {
    e.children(".gh-drop-trigger").on("click", function(t) {
        t.stopPropagation();
        var n = $(this)
          , i = n.parent();
        i.hasClass("active") ? (i.removeClass("active"),
        $(document).off("click")) : (e.removeClass("active"),
        i.addClass("active"),
        $(document).on("click", function() {
            e.removeClass("active")
        }))
    })
}
if (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        t = t || te;
        var n = t.createElement("script");
        n.text = e,
        t.head.appendChild(n).parentNode.removeChild(n)
    }
    function i(e) {
        var t = !!e && "length"in e && e.length
          , n = de.type(e);
        return "function" !== n && !de.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e, t, n) {
        return de.isFunction(t) ? de.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? de.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? de.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n
        }) : ke.test(t) ? de.filter(t, e, n) : (t = de.filter(t, e),
        de.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function a(e) {
        var t = {};
        return de.each(e.match(Ne) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function s(e) {
        return e
    }
    function l(e) {
        throw e
    }
    function u(e, t, n) {
        var i;
        try {
            e && de.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && de.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }
    function c() {
        te.removeEventListener("DOMContentLoaded", c),
        e.removeEventListener("load", c),
        de.ready()
    }
    function f() {
        this.expando = de.expando + f.uid++
    }
    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Oe.test(e) ? JSON.parse(e) : e)
    }
    function d(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = p(n)
                } catch (e) {}
                Le.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function h(e, t, n, i) {
        var r, o = 1, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return de.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (de.cssNumber[t] ? "" : "px"), c = (de.cssNumber[t] || "px" !== u && +l) && Ie.exec(de.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do {
                o = o || ".5",
                c /= o,
                de.style(e, t, c + u)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    function g(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = _e[i];
        return r || (t = n.body.appendChild(n.createElement(i)),
        r = de.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === r && (r = "block"),
        _e[i] = r,
        r)
    }
    function m(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
            i = e[o],
            i.style && (n = i.style.display,
            t ? ("none" === n && (r[o] = Pe.get(i, "display") || null,
            r[o] || (i.style.display = "")),
            "" === i.style.display && Re(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none",
            Pe.set(i, "display", n)));
        for (o = 0; o < a; o++)
            null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && de.nodeName(e, t) ? de.merge([e], n) : n
    }
    function y(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Pe.set(e[n], "globalEval", !t || Pe.get(t[n], "globalEval"))
    }
    function b(e, t, n, i, r) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === de.type(o))
                    de.merge(p, o.nodeType ? [o] : o);
                else if (Ve.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (ze.exec(o) || ["", ""])[1].toLowerCase(),
                    l = Xe[s] || Xe._default,
                    a.innerHTML = l[1] + de.htmlPrefilter(o) + l[2],
                    c = l[0]; c--; )
                        a = a.lastChild;
                    de.merge(p, a.childNodes),
                    a = f.firstChild,
                    a.textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = p[d++]; )
            if (i && de.inArray(o, i) > -1)
                r && r.push(o);
            else if (u = de.contains(o.ownerDocument, o),
            a = v(f.appendChild(o), "script"),
            u && y(a),
            n)
                for (c = 0; o = a[c++]; )
                    Ue.test(o.type || "") && n.push(o);
        return f
    }
    function x() {
        return !0
    }
    function w() {
        return !1
    }
    function T() {
        try {
            return te.activeElement
        } catch (e) {}
    }
    function k(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n,
            n = void 0);
            for (s in t)
                k(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = w;
        else if (!r)
            return e;
        return 1 === o && (a = r,
        r = function(e) {
            return de().off(e),
            a.apply(this, arguments)
        }
        ,
        r.guid = a.guid || (a.guid = de.guid++)),
        e.each(function() {
            de.event.add(this, t, r, i, n)
        })
    }
    function C(e, t) {
        return de.nodeName(e, "table") && de.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }
    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function E(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function $(e, t) {
        var n, i, r, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (Pe.hasData(e) && (o = Pe.access(e),
            a = Pe.set(t, o),
            u = o.events)) {
                delete a.handle,
                a.events = {};
                for (r in u)
                    for (n = 0,
                    i = u[r].length; n < i; n++)
                        de.event.add(t, r, u[r][n])
            }
            Le.hasData(e) && (s = Le.access(e),
            l = de.extend({}, s),
            Le.set(t, l))
        }
    }
    function N(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function D(e, t, i, r) {
        t = re.apply([], t);
        var o, a, s, l, u, c, f = 0, p = e.length, d = p - 1, h = t[0], g = de.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !pe.checkClone && et.test(h))
            return e.each(function(n) {
                var o = e.eq(n);
                g && (t[0] = h.call(this, n, o.html())),
                D(o, t, i, r)
            });
        if (p && (o = b(t, e[0].ownerDocument, !1, e, r),
        a = o.firstChild,
        1 === o.childNodes.length && (o = a),
        a || r)) {
            for (s = de.map(v(o, "script"), S),
            l = s.length; f < p; f++)
                u = o,
                f !== d && (u = de.clone(u, !0, !0),
                l && de.merge(s, v(u, "script"))),
                i.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument,
                de.map(s, E),
                f = 0; f < l; f++)
                    u = s[f],
                    Ue.test(u.type || "") && !Pe.access(u, "globalEval") && de.contains(c, u) && (u.src ? de._evalUrl && de._evalUrl(u.src) : n(u.textContent.replace(nt, ""), c))
        }
        return e
    }
    function j(e, t, n) {
        for (var i, r = t ? de.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || de.cleanData(v(i)),
            i.parentNode && (n && de.contains(i.ownerDocument, i) && y(v(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    function A(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ot(e),
        n && (a = n.getPropertyValue(t) || n[t],
        "" !== a || de.contains(e.ownerDocument, e) || (a = de.style(e, t)),
        !pe.pixelMarginRight() && rt.test(a) && it.test(t) && (i = s.width,
        r = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = r,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function q(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function P(e) {
        if (e in ct)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ut.length; n--; )
            if ((e = ut[n] + t)in ct)
                return e
    }
    function L(e, t, n) {
        var i = Ie.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function O(e, t, n, i, r) {
        var o, a = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === n && (a += de.css(e, n + We[o], !0, r)),
            i ? ("content" === n && (a -= de.css(e, "padding" + We[o], !0, r)),
            "margin" !== n && (a -= de.css(e, "border" + We[o] + "Width", !0, r))) : (a += de.css(e, "padding" + We[o], !0, r),
            "padding" !== n && (a += de.css(e, "border" + We[o] + "Width", !0, r)));
        return a
    }
    function F(e, t, n) {
        var i, r = !0, o = ot(e), a = "border-box" === de.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]),
        i <= 0 || null == i) {
            if (i = A(e, t, o),
            (i < 0 || null == i) && (i = e.style[t]),
            rt.test(i))
                return i;
            r = a && (pe.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + O(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function H(e, t, n, i, r) {
        return new H.prototype.init(e,t,n,i,r)
    }
    function I() {
        pt && (e.requestAnimationFrame(I),
        de.fx.tick())
    }
    function W() {
        return e.setTimeout(function() {
            ft = void 0
        }),
        ft = de.now()
    }
    function R(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            n = We[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function M(e, t, n) {
        for (var i, r = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function _(e, t, n) {
        var i, r, o, a, s, l, u, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && Re(e), v = Pe.get(e, "fxshow");
        n.queue || (a = de._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        s = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || s()
        }
        ),
        a.unqueued++,
        p.always(function() {
            p.always(function() {
                a.unqueued--,
                de.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (i in t)
            if (r = t[i],
            dt.test(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (g ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[i])
                        continue;
                    g = !0
                }
                d[i] = v && v[i] || de.style(e, i)
            }
        if ((l = !de.isEmptyObject(t)) || !de.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            u = v && v.display,
            null == u && (u = Pe.get(e, "display")),
            c = de.css(e, "display"),
            "none" === c && (u ? c = u : (m([e], !0),
            u = e.style.display || u,
            c = de.css(e, "display"),
            m([e]))),
            ("inline" === c || "inline-block" === c && null != u) && "none" === de.css(e, "float") && (l || (p.done(function() {
                h.display = u
            }),
            null == u && (c = h.display,
            u = "none" === c ? "" : c)),
            h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            p.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            l = !1;
            for (i in d)
                l || (v ? "hidden"in v && (g = v.hidden) : v = Pe.access(e, "fxshow", {
                    display: u
                }),
                o && (v.hidden = !g),
                g && m([e], !0),
                p.done(function() {
                    g || m([e]),
                    Pe.remove(e, "fxshow");
                    for (i in d)
                        de.style(e, i, d[i])
                })),
                l = M(g ? v[i] : 0, i, p),
                i in v || (v[i] = l.start,
                g && (l.end = l.start,
                l.start = 0))
        }
    }
    function B(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = de.camelCase(n),
            r = t[i],
            o = e[n],
            de.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            (a = de.cssHooks[i]) && "expand"in a) {
                o = a.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function z(e, t, n) {
        var i, r, o = 0, a = z.prefilters.length, s = de.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = ft || W(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; a < l; a++)
                u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]),
            o < 1 && l ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: de.extend({}, t),
            opts: de.extend(!0, {
                specialEasing: {},
                easing: de.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ft || W(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = de.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (B(c, u.opts.specialEasing); o < a; o++)
            if (i = z.prefilters[o].call(u, e, c, u.opts))
                return de.isFunction(i.stop) && (de._queueHooks(u.elem, u.opts.queue).stop = de.proxy(i.stop, i)),
                i;
        return de.map(c, M, u),
        de.isFunction(u.opts.start) && u.opts.start.call(e, u),
        de.fx.timer(de.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function U(e) {
        return (e.match(Ne) || []).join(" ")
    }
    function X(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function V(e, t, n, i) {
        var r;
        if (de.isArray(t))
            de.each(t, function(t, r) {
                n || Ct.test(e) ? i(e, r) : V(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== de.type(t))
            i(e, t);
        else
            for (r in t)
                V(e + "[" + r + "]", t[r], n, i)
    }
    function Q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(Ne) || [];
            if (de.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function G(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0,
            de.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                r(u),
                !1)
            }),
            l
        }
        var o = {}
          , a = e === Ft;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function Y(e, t) {
        var n, i, r = de.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && de.extend(!0, e, i),
        e
    }
    function J(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        if (o)
            return o !== l[0] && l.unshift(o),
            n[o]
    }
    function K(e, t, n, i) {
        var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (!(a = u[l + " " + o] || u["* " + o]))
                        for (r in u)
                            if (s = r.split(" "),
                            s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function Z(e) {
        return de.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var ee = []
      , te = e.document
      , ne = Object.getPrototypeOf
      , ie = ee.slice
      , re = ee.concat
      , oe = ee.push
      , ae = ee.indexOf
      , se = {}
      , le = se.toString
      , ue = se.hasOwnProperty
      , ce = ue.toString
      , fe = ce.call(Object)
      , pe = {}
      , de = function(e, t) {
        return new de.fn.init(e,t)
    }
      , he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ge = /^-ms-/
      , me = /-([a-z])/g
      , ve = function(e, t) {
        return t.toUpperCase()
    };
    de.fn = de.prototype = {
        jquery: "3.1.1",
        constructor: de,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = de.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return de.each(this, e)
        },
        map: function(e) {
            return this.pushStack(de.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    },
    de.extend = de.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || de.isFunction(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    i = e[t],
                    a !== i && (u && i && (de.isPlainObject(i) || (r = de.isArray(i))) ? (r ? (r = !1,
                    o = n && de.isArray(n) ? n : []) : o = n && de.isPlainObject(n) ? n : {},
                    a[t] = de.extend(u, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }
    ,
    de.extend({
        expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === de.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = de.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e)) && (!(t = ne(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && ce.call(n) === fe)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(me, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var r, o, a = 0, s = [];
            if (i(e))
                for (r = e.length; a < r; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return re.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            de.isFunction(e))
                return i = ie.call(arguments, 2),
                r = function() {
                    return e.apply(t || this, i.concat(ie.call(arguments)))
                }
                ,
                r.guid = e.guid = e.guid || de.guid++,
                r
        },
        now: Date.now,
        support: pe
    }),
    "function" == typeof Symbol && (de.fn[Symbol.iterator] = ee[Symbol.iterator]),
    de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = /*!
*Sizzle CSS Selector Engine v2.3.3*https:**Copyright jQuery Foundation and other contributors*Released under the MIT license*http:**Date:2016-08-08*/
    function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, c, p, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!i && ((t ? t.ownerDocument || t : W) !== A && j(t),
            t = t || A,
            P)) {
                if (11 !== h && (l = ge.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(r)))
                                return n;
                            if (a.id === r)
                                return n.push(a),
                                n
                        } else if (d && (a = d.getElementById(r)) && H(t, a) && a.id === r)
                            return n.push(a),
                            n
                    } else {
                        if (l[2])
                            return Y.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName)
                            return Y.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (x.qsa && !z[e + " "] && (!L || !L.test(e))) {
                    if (1 !== h)
                        d = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, xe) : t.setAttribute("id", s = I),
                        c = C(e),
                        o = c.length; o--; )
                            c[o] = "#" + s + " " + f(c[o]);
                        p = c.join(","),
                        d = me.test(e) && u(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return Y.apply(n, d.querySelectorAll(p)),
                            n
                        } catch (e) {} finally {
                            s === I && t.removeAttribute("id")
                        }
                }
            }
            return E(e.replace(oe, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[I] = !0,
            e
        }
        function r(e) {
            var t = A.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                w.attrHandle[n[i]] = t
        }
        function a(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function l(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; )
                        n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function p(e, t, n) {
            var i = t.dir
              , r = t.next
              , o = r || i
              , a = n && "parentNode" === o
              , s = M++;
            return t.first ? function(t, n, r) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, r);
                return !1
            }
            : function(t, n, l) {
                var u, c, f, p = [R, s];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || a) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || a)
                            if (f = t[I] || (t[I] = {}),
                            c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            r && r === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === R && u[1] === s)
                                    return p[2] = u[2];
                                if (c[o] = p,
                                p[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function d(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function h(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++)
                t(e, n[r], i);
            return i
        }
        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (o = e[s]) && (n && !n(o, i, r) || (a.push(o),
                u && t.push(s)));
            return a
        }
        function m(e, t, n, r, o, a) {
            return r && !r[I] && (r = m(r)),
            o && !o[I] && (o = m(o, a)),
            i(function(i, a, s, l) {
                var u, c, f, p = [], d = [], m = a.length, v = i || h(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? v : g(v, p, e, s, l), b = n ? o || (i ? e : m || r) ? [] : a : y;
                if (n && n(y, b, s, l),
                r)
                    for (u = g(b, d),
                    r(u, [], s, l),
                    c = u.length; c--; )
                        (f = u[c]) && (b[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            c = b.length; c--; )
                                (f = b[c]) && u.push(y[c] = f);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--; )
                            (f = b[c]) && (u = o ? K(i, f) : p[c]) > -1 && (i[u] = !(a[u] = f))
                    }
                } else
                    b = g(b === a ? b.splice(m, b.length) : b),
                    o ? o(null, a, b, l) : Y.apply(a, b)
            })
        }
        function v(e) {
            for (var t, n, i, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                return e === t
            }, a, !0), u = p(function(e) {
                return K(t, e) > -1
            }, a, !0), c = [function(e, n, i) {
                var r = !o && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null,
                r
            }
            ]; s < r; s++)
                if (n = w.relative[e[s].type])
                    c = [p(d(c), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches),
                    n[I]) {
                        for (i = ++s; i < r && !w.relative[e[i].type]; i++)
                            ;
                        return m(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && f(e))
                    }
                    c.push(n)
                }
            return d(c)
        }
        function y(e, n) {
            var r = n.length > 0
              , o = e.length > 0
              , a = function(i, a, s, l, u) {
                var c, f, p, d = 0, h = "0", m = i && [], v = [], y = $, b = i || o && w.find.TAG("*", u), x = R += null == y ? 1 : Math.random() || .1, T = b.length;
                for (u && ($ = a === A || a || u); h !== T && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (f = 0,
                        a || c.ownerDocument === A || (j(c),
                        s = !P); p = e[f++]; )
                            if (p(c, a || A, s)) {
                                l.push(c);
                                break
                            }
                        u && (R = x)
                    }
                    r && ((c = !p && c) && d--,
                    i && m.push(c))
                }
                if (d += h,
                r && h !== d) {
                    for (f = 0; p = n[f++]; )
                        p(m, v, a, s);
                    if (i) {
                        if (d > 0)
                            for (; h--; )
                                m[h] || v[h] || (v[h] = Q.call(l));
                        v = g(v)
                    }
                    Y.apply(l, v),
                    u && !i && v.length > 0 && d + n.length > 1 && t.uniqueSort(l)
                }
                return u && (R = x,
                $ = y),
                m
            };
            return r ? i(a) : a
        }
        var b, x, w, T, k, C, S, E, $, N, D, j, A, q, P, L, O, F, H, I = "sizzle" + 1 * new Date, W = e.document, R = 0, M = 0, _ = n(), B = n(), z = n(), U = function(e, t) {
            return e === t && (D = !0),
            0
        }, X = {}.hasOwnProperty, V = [], Q = V.pop, G = V.push, Y = V.push, J = V.slice, K = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", re = new RegExp(ee + "+","g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ue = new RegExp(ie), ce = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, we = function() {
            j()
        }, Te = p(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Y.apply(V = J.call(W.childNodes), W.childNodes),
            V[W.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: V.length ? function(e, t) {
                    G.apply(e, J.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        x = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        j = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : W;
            return i !== A && 9 === i.nodeType && i.documentElement ? (A = i,
            q = A.documentElement,
            P = !k(A),
            W !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)),
            x.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            x.getElementsByTagName = r(function(e) {
                return e.appendChild(A.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = he.test(A.getElementsByClassName),
            x.getById = r(function(e) {
                return q.appendChild(e).id = I,
                !A.getElementsByName || !A.getElementsByName(I).length
            }),
            x.getById ? (w.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && P) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (w.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && P) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            w.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            w.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && P)
                    return t.getElementsByClassName(e)
            }
            ,
            O = [],
            L = [],
            (x.qsa = he.test(A.querySelectorAll)) && (r(function(e) {
                q.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + Z + ")"),
                e.querySelectorAll("[id~=" + I + "-]").length || L.push("~="),
                e.querySelectorAll(":checked").length || L.push(":checked"),
                e.querySelectorAll("a#" + I + "+*").length || L.push(".#.+[+~]")
            }),
            r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"),
                q.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                L.push(",.*:")
            })),
            (x.matchesSelector = he.test(F = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && r(function(e) {
                x.disconnectedMatch = F.call(e, "*"),
                F.call(e, "[s!='']:x"),
                O.push("!=", ie)
            }),
            L = L.length && new RegExp(L.join("|")),
            O = O.length && new RegExp(O.join("|")),
            t = he.test(q.compareDocumentPosition),
            H = t || he.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === W && H(W, e) ? -1 : t === A || t.ownerDocument === W && H(W, t) ? 1 : N ? K(N, e) - K(N, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], l = [t];
                if (!r || !o)
                    return e === A ? -1 : t === A ? 1 : r ? -1 : o ? 1 : N ? K(N, e) - K(N, t) : 0;
                if (r === o)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; s[i] === l[i]; )
                    i++;
                return i ? a(s[i], l[i]) : s[i] === W ? -1 : l[i] === W ? 1 : 0
            }
            ,
            A) : A
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== A && j(e),
            n = n.replace(le, "='$1']"),
            x.matchesSelector && P && !z[n + " "] && (!O || !O.test(n)) && (!L || !L.test(n)))
                try {
                    var i = F.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return t(n, A, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && j(e),
            H(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== A && j(e);
            var n = w.attrHandle[t.toLowerCase()]
              , i = n && X.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
            return void 0 !== i ? i : x.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.escape = function(e) {
            return (e + "").replace(be, xe)
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (D = !x.detectDuplicates,
            N = !x.sortStable && e.slice(0),
            e.sort(U),
            D) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return N = null,
            e
        }
        ,
        T = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += T(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += T(t);
            return n
        }
        ,
        w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (p = t; p = p[g]; )
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && y) {
                                for (p = m,
                                f = p[I] || (p[I] = {}),
                                c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                u = c[e] || [],
                                d = u[0] === R && u[1],
                                b = d && u[2],
                                p = d && m.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++b && p === t) {
                                        c[e] = [R, d, b];
                                        break
                                    }
                            } else if (y && (p = t,
                            f = p[I] || (p[I] = {}),
                            c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                            u = c[e] || [],
                            d = u[0] === R && u[1],
                            b = d),
                            !1 === b)
                                for (; (p = ++d && p && p[g] || (b = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (f = p[I] || (p[I] = {}),
                                c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                c[e] = [R, b]),
                                p !== t)); )
                                    ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                    w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--; )
                            i = K(e, r[a]),
                            e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = []
                      , n = []
                      , r = S(e.replace(oe, "$1"));
                    return r[I] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(ve, ye),
                    function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(ve, ye).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === q
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return de.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[b] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            w.pseudos[b] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(b);
        return c.prototype = w.filters = w.pseudos,
        w.setFilters = new c,
        C = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, u, c = B[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = w.preFilter; s; ) {
                i && !(r = ae.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                l.push(o = [])),
                i = !1,
                (r = se.exec(s)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }),
                s = s.slice(i.length));
                for (a in w.filter)
                    !(r = fe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
        }
        ,
        S = t.compile = function(e, t) {
            var n, i = [], r = [], o = z[e + " "];
            if (!o) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    o = v(t[n]),
                    o[I] ? i.push(o) : r.push(o);
                o = z(e, y(r, i)),
                o.selector = e
            }
            return o
        }
        ,
        E = t.select = function(e, t, n, i) {
            var r, o, a, s, l, c = "function" == typeof e && e, p = !i && C(e = c.selector || e);
            if (n = n || [],
            1 === p.length) {
                if (o = p[0] = p[0].slice(0),
                o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && P && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(ve, ye), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                !w.relative[s = a.type]); )
                    if ((l = w.find[s]) && (i = l(a.matches[0].replace(ve, ye), me.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        !(e = i.length && f(o)))
                            return Y.apply(n, i),
                            n;
                        break
                    }
            }
            return (c || S(e, p))(i, t, !P, n, !t || me.test(e) && u(t.parentNode) || t),
            n
        }
        ,
        x.sortStable = I.split("").sort(U).join("") === I,
        x.detectDuplicates = !!D,
        j(),
        x.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("fieldset"))
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        x.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    de.find = ye,
    de.expr = ye.selectors,
    de.expr[":"] = de.expr.pseudos,
    de.uniqueSort = de.unique = ye.uniqueSort,
    de.text = ye.getText,
    de.isXMLDoc = ye.isXML,
    de.contains = ye.contains,
    de.escapeSelector = ye.escape;
    var be = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && de(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , xe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , we = de.expr.match.needsContext
      , Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , ke = /^.[^:#\[\.,]*$/;
    de.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? de.find.matchesSelector(i, e) ? [i] : [] : de.find.matches(e, de.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    de.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(de(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (de.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                de.find(e, r[t], n);
            return i > 1 ? de.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && we.test(e) ? de(e) : e || [], !1).length
        }
    });
    var Ce, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (de.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || Ce,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof de ? t[0] : t,
                de.merge(this, de.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)),
                Te.test(i[1]) && de.isPlainObject(t))
                    for (i in t)
                        de.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return r = te.getElementById(i[2]),
            r && (this[0] = r,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : de.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(de) : de.makeArray(e, this)
    }
    ).prototype = de.fn,
    Ce = de(te);
    var Ee = /^(?:parents|prev(?:Until|All))/
      , $e = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    de.fn.extend({
        has: function(e) {
            var t = de(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (de.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], a = "string" != typeof e && de(e);
            if (!we.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? de.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(de(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    de.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || de.merge([], e.childNodes)
        }
    }, function(e, t) {
        de.fn[e] = function(n, i) {
            var r = de.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = de.filter(i, r)),
            this.length > 1 && ($e[e] || de.uniqueSort(r),
            Ee.test(e) && r.reverse()),
            this.pushStack(r)
        }
    });
    var Ne = /[^\x20\t\r\n\f]+/g;
    de.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : de.extend({}, e);
        var t, n, i, r, o = [], s = [], l = -1, u = function() {
            for (r = e.once,
            i = t = !0; s.length; l = -1)
                for (n = s.shift(); ++l < o.length; )
                    !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            r && (o = n ? [] : "")
        }, c = {
            add: function() {
                return o && (n && !t && (l = o.length - 1,
                s.push(n)),
                function t(n) {
                    de.each(n, function(n, i) {
                        de.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== de.type(i) && t(i)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return de.each(arguments, function(e, t) {
                    for (var n; (n = de.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? de.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return r = s = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return r = s = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, n) {
                return r || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                s.push(n),
                t || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    de.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2], ["resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , r = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return r.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return de.Deferred(function(t) {
                        de.each(n, function(n, i) {
                            var r = de.isFunction(e[i[4]]) && e[i[4]];
                            o[i[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && de.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, i, r) {
                    function o(t, n, i, r) {
                        return function() {
                            var u = this
                              , c = arguments
                              , f = function() {
                                var e, f;
                                if (!(t < a)) {
                                    if ((e = i.apply(u, c)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    de.isFunction(f) ? r ? f.call(e, o(a, n, s, r), o(a, n, l, r)) : (a++,
                                    f.call(e, o(a, n, s, r), o(a, n, l, r), o(a, n, s, n.notifyWith))) : (i !== s && (u = void 0,
                                    c = [e]),
                                    (r || n.resolveWith)(u, c))
                                }
                            }
                              , p = r ? f : function() {
                                try {
                                    f()
                                } catch (e) {
                                    de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, p.stackTrace),
                                    t + 1 >= a && (i !== l && (u = void 0,
                                    c = [e]),
                                    n.rejectWith(u, c))
                                }
                            }
                            ;
                            t ? p() : (de.Deferred.getStackHook && (p.stackTrace = de.Deferred.getStackHook()),
                            e.setTimeout(p))
                        }
                    }
                    var a = 0;
                    return de.Deferred(function(e) {
                        n[0][3].add(o(0, e, de.isFunction(r) ? r : s, e.notifyWith)),
                        n[1][3].add(o(0, e, de.isFunction(t) ? t : s)),
                        n[2][3].add(o(0, e, de.isFunction(i) ? i : l))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? de.extend(e, r) : r
                }
            }
              , o = {};
            return de.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                r[t[1]] = a.add,
                s && a.add(function() {
                    i = s
                }, n[3 - e][2].disable, n[0][2].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            r.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , r = ie.call(arguments)
              , o = de.Deferred()
              , a = function(e) {
                return function(n) {
                    i[e] = this,
                    r[e] = arguments.length > 1 ? ie.call(arguments) : n,
                    --t || o.resolveWith(i, r)
                }
            };
            if (t <= 1 && (u(e, o.done(a(n)).resolve, o.reject),
            "pending" === o.state() || de.isFunction(r[n] && r[n].then)))
                return o.then();
            for (; n--; )
                u(r[n], a(n), o.reject);
            return o.promise()
        }
    });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    de.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    de.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var je = de.Deferred();
    de.fn.ready = function(e) {
        return je.then(e).catch(function(e) {
            de.readyException(e)
        }),
        this
    }
    ,
    de.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? de.readyWait++ : de.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --de.readyWait : de.isReady) || (de.isReady = !0,
            !0 !== e && --de.readyWait > 0 || je.resolveWith(te, [de]))
        }
    }),
    de.ready.then = je.then,
    "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(de.ready) : (te.addEventListener("DOMContentLoaded", c),
    e.addEventListener("load", c));
    var Ae = function(e, t, n, i, r, o, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === de.type(n)) {
            r = !0;
            for (s in n)
                Ae(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0,
        de.isFunction(i) || (a = !0),
        u && (a ? (t.call(e, i),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(de(e), n)
        }
        )),
        t))
            for (; s < l; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
      , qe = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    f.uid = 1,
    f.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            qe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[de.camelCase(t)] = n;
            else
                for (i in t)
                    r[de.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][de.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    de.isArray(t) ? t = t.map(de.camelCase) : (t = de.camelCase(t),
                    t = t in i ? [t] : t.match(Ne) || []),
                    n = t.length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || de.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !de.isEmptyObject(t)
        }
    };
    var Pe = new f
      , Le = new f
      , Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Fe = /[A-Z]/g;
    de.extend({
        hasData: function(e) {
            return Le.hasData(e) || Pe.hasData(e)
        },
        data: function(e, t, n) {
            return Le.access(e, t, n)
        },
        removeData: function(e, t) {
            Le.remove(e, t)
        },
        _data: function(e, t, n) {
            return Pe.access(e, t, n)
        },
        _removeData: function(e, t) {
            Pe.remove(e, t)
        }
    }),
    de.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Le.get(o),
                1 === o.nodeType && !Pe.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (i = a[n].name,
                        0 === i.indexOf("data-") && (i = de.camelCase(i.slice(5)),
                        d(o, i, r[i])));
                    Pe.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Le.set(this, e)
            }) : Ae(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Le.get(o, e)))
                        return n;
                    if (void 0 !== (n = d(o, e)))
                        return n
                } else
                    this.each(function() {
                        Le.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Le.remove(this, e)
            })
        }
    }),
    de.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = Pe.get(e, t),
                n && (!i || de.isArray(n) ? i = Pe.access(e, t, de.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = de.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = de._queueHooks(e, t)
              , a = function() {
                de.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, a, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Pe.get(e, n) || Pe.access(e, n, {
                empty: de.Callbacks("once memory").add(function() {
                    Pe.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    de.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? de.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = de.queue(this, e, t);
                de._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                de.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = de.Deferred(), o = this, a = this.length, s = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Pe.get(o[a], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(s));
            return s(),
            r.promise(t)
        }
    });
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ie = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$","i")
      , We = ["Top", "Right", "Bottom", "Left"]
      , Re = function(e, t) {
        return e = t || e,
        "none" === e.style.display || "" === e.style.display && de.contains(e.ownerDocument, e) && "none" === de.css(e, "display")
    }
      , Me = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t)
            e.style[o] = a[o];
        return r
    }
      , _e = {};
    de.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? de(this).show() : de(this).hide()
            })
        }
    });
    var Be = /^(?:checkbox|radio)$/i
      , ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Ue = /^$|\/(?:java|ecma)script/i
      , Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Xe.optgroup = Xe.option,
    Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead,
    Xe.th = Xe.td;
    var Ve = /<|&#?\w+;/;
    !function() {
        var e = te.createDocumentFragment()
          , t = e.appendChild(te.createElement("div"))
          , n = te.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Qe = te.documentElement
      , Ge = /^key/
      , Ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Je = /^([^.]*)(?:\.(.+)|)/;
    de.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, f, p, d, h, g, m = Pe.get(e);
            if (m)
                for (n.handler && (o = n,
                n = o.handler,
                r = o.selector),
                r && de.find.matchesSelector(Qe, r),
                n.guid || (n.guid = de.guid++),
                (l = m.events) || (l = m.events = {}),
                (a = m.handle) || (a = m.handle = function(t) {
                    return void 0 !== de && de.event.triggered !== t.type ? de.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(Ne) || [""],
                u = t.length; u--; )
                    s = Je.exec(t[u]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = de.event.special[d] || {},
                    d = (r ? f.delegateType : f.bindType) || d,
                    f = de.event.special[d] || {},
                    c = de.extend({
                        type: d,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && de.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o),
                    (p = l[d]) || (p = l[d] = [],
                    p.delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    de.event.global[d] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, f, p, d, h, g, m = Pe.hasData(e) && Pe.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(Ne) || [""],
                u = t.length; u--; )
                    if (s = Je.exec(t[u]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = de.event.special[d] || {},
                        d = (i ? f.delegateType : f.bindType) || d,
                        p = l[d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || de.removeEvent(e, d, m.handle),
                        delete l[d])
                    } else
                        for (d in l)
                            de.event.remove(e, d + t[u], n, i, !0);
                de.isEmptyObject(l) && Pe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a, s = de.event.fix(e), l = new Array(arguments.length), u = (Pe.get(this, "events") || {})[s.type] || [], c = de.event.special[s.type] || {};
            for (l[0] = s,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = de.event.handlers.call(this, s, u),
                t = 0; (r = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (i = ((de.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(),
                        s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < l; n++)
                            i = t[n],
                            r = i.selector + " ",
                            void 0 === a[r] && (a[r] = i.needsContext ? de(r, this).index(u) > -1 : de.find(r, this, null, [u]).length),
                            a[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this,
            l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(de.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: de.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[de.expando] ? e : new de.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && de.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return de.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    de.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    de.Event = function(e, t) {
        if (!(this instanceof de.Event))
            return new de.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : w,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && de.extend(this, t),
        this.timeStamp = e && e.timeStamp || de.now(),
        this[de.expando] = !0
    }
    ,
    de.Event.prototype = {
        constructor: de.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = x,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = x,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    de.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, de.event.addProp),
    de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        de.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || de.contains(i, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    de.fn.extend({
        on: function(e, t, n, i) {
            return k(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return k(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                de(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = w),
            this.each(function() {
                de.event.remove(this, e, n, t)
            })
        }
    });
    var Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ze = /<script|<style|<link/i
      , et = /checked\s*(?:[^=]|=\s*.checked.)/i
      , tt = /^true\/(.*)/
      , nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    de.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ke, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0), l = de.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))
                for (a = v(s),
                o = v(e),
                i = 0,
                r = o.length; i < r; i++)
                    N(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || v(e),
                    a = a || v(s),
                    i = 0,
                    r = o.length; i < r; i++)
                        $(o[i], a[i]);
                else
                    $(e, s);
            return a = v(s, "script"),
            a.length > 0 && y(a, !l && v(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, i, r = de.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (qe(n)) {
                    if (t = n[Pe.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? de.event.remove(n, i) : de.removeEvent(n, i, t.handle);
                        n[Pe.expando] = void 0
                    }
                    n[Le.expando] && (n[Le.expando] = void 0)
                }
        }
    }),
    de.fn.extend({
        detach: function(e) {
            return j(this, e, !0)
        },
        remove: function(e) {
            return j(this, e)
        },
        text: function(e) {
            return Ae(this, function(e) {
                return void 0 === e ? de.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    C(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (de.cleanData(v(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return de.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ae(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ze.test(e) && !Xe[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = de.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (de.cleanData(v(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return D(this, arguments, function(t) {
                var n = this.parentNode;
                de.inArray(this, e) < 0 && (de.cleanData(v(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        de.fn[e] = function(e) {
            for (var n, i = [], r = de(e), o = r.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                de(r[a])[t](n),
                oe.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var it = /^margin/
      , rt = new RegExp("^(" + He + ")(?!px)[a-z%]+$","i")
      , ot = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                s.innerHTML = "",
                Qe.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top,
                o = "2px" === t.marginLeft,
                i = "4px" === t.width,
                s.style.marginRight = "50%",
                r = "4px" === t.marginRight,
                Qe.removeChild(a),
                s = null
            }
        }
        var n, i, r, o, a = te.createElement("div"), s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        pe.clearCloneStyle = "content-box" === s.style.backgroundClip,
        a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        a.appendChild(s),
        de.extend(pe, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelMarginRight: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                o
            }
        }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/
      , st = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , lt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , ut = ["Webkit", "Moz", "ms"]
      , ct = te.createElement("div").style;
    de.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = A(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = de.camelCase(t), l = e.style;
                if (t = de.cssProps[s] || (de.cssProps[s] = P(s) || s),
                a = de.cssHooks[t] || de.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                o = typeof n,
                "string" === o && (r = Ie.exec(n)) && r[1] && (n = h(e, t, r),
                o = "number"),
                null != n && n === n && ("number" === o && (n += r && r[3] || (de.cssNumber[s] ? "" : "px")),
                pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = de.camelCase(t);
            return t = de.cssProps[s] || (de.cssProps[s] = P(s) || s),
            a = de.cssHooks[t] || de.cssHooks[s],
            a && "get"in a && (r = a.get(e, !0, n)),
            void 0 === r && (r = A(e, t, i)),
            "normal" === r && t in lt && (r = lt[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    de.each(["height", "width"], function(e, t) {
        de.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !at.test(de.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : Me(e, st, function() {
                        return F(e, t, i)
                    })
            },
            set: function(e, n, i) {
                var r, o = i && ot(e), a = i && O(e, t, i, "border-box" === de.css(e, "boxSizing", !1, o), o);
                return a && (r = Ie.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                n = de.css(e, t)),
                L(e, n, a)
            }
        }
    }),
    de.cssHooks.marginLeft = q(pe.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    de.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        de.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + We[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        it.test(e) || (de.cssHooks[e + t].set = L)
    }),
    de.fn.extend({
        css: function(e, t) {
            return Ae(this, function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (de.isArray(t)) {
                    for (i = ot(e),
                    r = t.length; a < r; a++)
                        o[t[a]] = de.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? de.style(e, t, n) : de.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    de.Tween = H,
    H.prototype = {
        constructor: H,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || de.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (de.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
        }
    },
    H.prototype.init.prototype = H.prototype,
    H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop] ? e.elem[e.prop] = e.now : de.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    de.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    de.fx = H.prototype.init,
    de.fx.step = {};
    var ft, pt, dt = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;
    de.Animation = de.extend(z, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, Ie.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            de.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(Ne);
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                z.tweeners[n] = z.tweeners[n] || [],
                z.tweeners[n].unshift(t)
        },
        prefilters: [_],
        prefilter: function(e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }),
    de.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? de.extend({}, e) : {
            complete: n || !n && t || de.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !de.isFunction(t) && t
        };
        return de.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in de.fx.speeds ? i.duration = de.fx.speeds[i.duration] : i.duration = de.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            de.isFunction(i.old) && i.old.call(this),
            i.queue && de.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    de.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = de.isEmptyObject(e)
              , o = de.speed(t, n, i)
              , a = function() {
                var t = z(this, de.extend({}, e), o);
                (r || Pe.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = de.timers
                  , a = Pe.get(this);
                if (r)
                    a[r] && a[r].stop && i(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && ht.test(r) && i(a[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || de.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Pe.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = de.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                de.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    de.each(["toggle", "show", "hide"], function(e, t) {
        var n = de.fn[t];
        de.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, r)
        }
    }),
    de.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        de.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    de.timers = [],
    de.fx.tick = function() {
        var e, t = 0, n = de.timers;
        for (ft = de.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || de.fx.stop(),
        ft = void 0
    }
    ,
    de.fx.timer = function(e) {
        de.timers.push(e),
        e() ? de.fx.start() : de.timers.pop()
    }
    ,
    de.fx.interval = 13,
    de.fx.start = function() {
        pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(I) : e.setInterval(de.fx.tick, de.fx.interval))
    }
    ,
    de.fx.stop = function() {
        e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt),
        pt = null
    }
    ,
    de.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    de.fn.delay = function(t, n) {
        return t = de.fx ? de.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e = te.createElement("input")
          , t = te.createElement("select")
          , n = t.appendChild(te.createElement("option"));
        e.type = "checkbox",
        pe.checkOn = "" !== e.value,
        pe.optSelected = n.selected,
        e = te.createElement("input"),
        e.value = "t",
        e.type = "radio",
        pe.radioValue = "t" === e.value
    }();
    var gt, mt = de.expr.attrHandle;
    de.fn.extend({
        attr: function(e, t) {
            return Ae(this, de.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                de.removeAttr(this, e)
            })
        }
    }),
    de.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? de.prop(e, t, n) : (1 === o && de.isXMLDoc(e) || (r = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? gt : void 0)),
                void 0 !== n ? null === n ? void de.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = de.find.attr(e, t),
                null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && de.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(Ne);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    gt = {
        set: function(e, t, n) {
            return !1 === t ? de.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    de.each(de.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mt[t] || de.find.attr;
        mt[t] = function(e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = mt[a],
            mt[a] = r,
            r = null != n(e, t, i) ? a : null,
            mt[a] = o),
            r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function(e, t) {
            return Ae(this, de.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[de.propFix[e] || e]
            })
        }
    }),
    de.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && de.isXMLDoc(e) || (t = de.propFix[t] || t,
                r = de.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    pe.optSelected || (de.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        de.propFix[this.toLowerCase()] = this
    }),
    de.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (de.isFunction(e))
                return this.each(function(t) {
                    de(this).addClass(e.call(this, t, X(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++]; )
                    if (r = X(n),
                    i = 1 === n.nodeType && " " + U(r) + " ") {
                        for (a = 0; o = t[a++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = U(i),
                        r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (de.isFunction(e))
                return this.each(function(t) {
                    de(this).removeClass(e.call(this, t, X(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++]; )
                    if (r = X(n),
                    i = 1 === n.nodeType && " " + U(r) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; i.indexOf(" " + o + " ") > -1; )
                                i = i.replace(" " + o + " ", " ");
                        s = U(i),
                        r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : de.isFunction(e) ? this.each(function(n) {
                de(this).toggleClass(e.call(this, n, X(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0,
                    r = de(this),
                    o = e.match(Ne) || []; t = o[i++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = X(this),
                    t && Pe.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Pe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + U(X(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var bt = /\r/g;
    de.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length)
                    return i = de.isFunction(e),
                    this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, de(this).val()) : e,
                        null == r ? r = "" : "number" == typeof r ? r += "" : de.isArray(r) && (r = de.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return (t = de.valHooks[r.type] || de.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
                    "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
            }
        }
    }),
    de.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : U(de.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (n = r[i],
                        (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup"))) {
                            if (t = de(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = de.makeArray(t), a = r.length; a--; )
                        i = r[a],
                        (i.selected = de.inArray(de.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    de.each(["radio", "checkbox"], function() {
        de.valHooks[this] = {
            set: function(e, t) {
                if (de.isArray(t))
                    return e.checked = de.inArray(de(e).val(), t) > -1
            }
        },
        pe.checkOn || (de.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var xt = /^(?:focusinfocus|focusoutblur)$/;
    de.extend(de.event, {
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, c, f, p = [i || te], d = ue.call(t, "type") ? t.type : t, h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || te,
            3 !== i.nodeType && 8 !== i.nodeType && !xt.test(d + de.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."),
            d = h.shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            t = t[de.expando] ? t : new de.Event(d,"object" == typeof t && t),
            t.isTrigger = r ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : de.makeArray(n, [t]),
            f = de.event.special[d] || {},
            r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!r && !f.noBubble && !de.isWindow(i)) {
                    for (l = f.delegateType || d,
                    xt.test(l + d) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        s = a;
                    s === (i.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? l : f.bindType || d,
                    c = (Pe.get(a, "events") || {})[t.type] && Pe.get(a, "handle"),
                    c && c.apply(a, n),
                    (c = u && a[u]) && c.apply && qe(a) && (t.result = c.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = d,
                r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !qe(i) || u && de.isFunction(i[d]) && !de.isWindow(i) && (s = i[u],
                s && (i[u] = null),
                de.event.triggered = d,
                i[d](),
                de.event.triggered = void 0,
                s && (i[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = de.extend(new de.Event, n, {
                type: e,
                isSimulated: !0
            });
            de.event.trigger(i, null, t)
        }
    }),
    de.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                de.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return de.event.trigger(e, t, n, !0)
        }
    }),
    de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        de.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    de.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    pe.focusin = "onfocusin"in e,
    pe.focusin || de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            de.event.simulate(t, e.target, de.event.fix(e))
        };
        de.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = Pe.access(i, t);
                r || i.addEventListener(e, n, !0),
                Pe.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = Pe.access(i, t) - 1;
                r ? Pe.access(i, t, r) : (i.removeEventListener(e, n, !0),
                Pe.remove(i, t))
            }
        }
    });
    var wt = e.location
      , Tt = de.now()
      , kt = /\?/;
    de.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + t),
        n
    }
    ;
    var Ct = /\[\]$/
      , St = /\r?\n/g
      , Et = /^(?:submit|button|image|reset|file)$/i
      , $t = /^(?:input|select|textarea|keygen)/i;
    de.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = de.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (de.isArray(e) || e.jquery && !de.isPlainObject(e))
            de.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                V(n, e[n], t, r);
        return i.join("&")
    }
    ,
    de.fn.extend({
        serialize: function() {
            return de.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && $t.test(this.nodeName) && !Et.test(e) && (this.checked || !Be.test(e))
            }).map(function(e, t) {
                var n = de(this).val();
                return null == n ? null : de.isArray(n) ? de.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g
      , Dt = /#.*$/
      , jt = /([?&])_=[^&]*/
      , At = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Pt = /^(?:GET|HEAD)$/
      , Lt = /^\/\//
      , Ot = {}
      , Ft = {}
      , Ht = "*/".concat("*")
      , It = te.createElement("a");
    It.href = wt.href,
    de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: qt.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": de.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Y(Y(e, de.ajaxSettings), t) : Y(de.ajaxSettings, e)
        },
        ajaxPrefilter: Q(Ot),
        ajaxTransport: Q(Ft),
        ajax: function(t, n) {
            function i(t, n, i, s) {
                var u, p, d, x, w, T = n;
                c || (c = !0,
                l && e.clearTimeout(l),
                r = void 0,
                a = s || "",
                k.readyState = t > 0 ? 4 : 0,
                u = t >= 200 && t < 300 || 304 === t,
                i && (x = J(h, k, i)),
                x = K(h, x, k, u),
                u ? (h.ifModified && (w = k.getResponseHeader("Last-Modified"),
                w && (de.lastModified[o] = w),
                (w = k.getResponseHeader("etag")) && (de.etag[o] = w)),
                204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state,
                p = x.data,
                d = x.error,
                u = !d)) : (d = T,
                !t && T || (T = "error",
                t < 0 && (t = 0))),
                k.status = t,
                k.statusText = (n || T) + "",
                u ? v.resolveWith(g, [p, T, k]) : v.rejectWith(g, [k, T, d]),
                k.statusCode(b),
                b = void 0,
                f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? p : d]),
                y.fireWith(g, [k, T]),
                f && (m.trigger("ajaxComplete", [k, h]),
                --de.active || de.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, o, a, s, l, u, c, f, p, d, h = de.ajaxSetup({}, n), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? de(g) : de.event, v = de.Deferred(), y = de.Callbacks("once memory"), b = h.statusCode || {}, x = {}, w = {}, T = "canceled", k = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s)
                            for (s = {}; t = At.exec(a); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                    x[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            k.always(e[k.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return r && r.abort(t),
                    i(0, t),
                    this
                }
            };
            if (v.promise(k),
            h.url = ((t || h.url || wt.href) + "").replace(Lt, wt.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""],
            null == h.crossDomain) {
                u = te.createElement("a");
                try {
                    u.href = h.url,
                    u.href = u.href,
                    h.crossDomain = It.protocol + "//" + It.host != u.protocol + "//" + u.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = de.param(h.data, h.traditional)),
            G(Ot, h, n, k),
            c)
                return k;
            f = de.event && h.global,
            f && 0 == de.active++ && de.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Pt.test(h.type),
            o = h.url.replace(Dt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (d = h.url.slice(o.length),
            h.data && (o += (kt.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(jt, "$1"),
            d = (kt.test(o) ? "&" : "?") + "_=" + Tt++ + d),
            h.url = o + d),
            h.ifModified && (de.lastModified[o] && k.setRequestHeader("If-Modified-Since", de.lastModified[o]),
            de.etag[o] && k.setRequestHeader("If-None-Match", de.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType),
            k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers)
                k.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || c))
                return k.abort();
            if (T = "abort",
            y.add(h.complete),
            k.done(h.success),
            k.fail(h.error),
            r = G(Ft, h, n, k)) {
                if (k.readyState = 1,
                f && m.trigger("ajaxSend", [k, h]),
                c)
                    return k;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    k.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    r.send(x, i)
                } catch (e) {
                    if (c)
                        throw e;
                    i(-1, e)
                }
            } else
                i(-1, "No Transport");
            return k
        },
        getJSON: function(e, t, n) {
            return de.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return de.get(e, void 0, t, "script")
        }
    }),
    de.each(["get", "post"], function(e, t) {
        de[t] = function(e, n, i, r) {
            return de.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            de.ajax(de.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, de.isPlainObject(e) && e))
        }
    }),
    de._evalUrl = function(e) {
        return de.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    de.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (de.isFunction(e) && (e = e.call(this[0])),
            t = de(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return de.isFunction(e) ? this.each(function(t) {
                de(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = de(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = de.isFunction(e);
            return this.each(function(n) {
                de(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                de(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    de.expr.pseudos.hidden = function(e) {
        return !de.expr.pseudos.visible(e)
    }
    ,
    de.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    de.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Wt = {
        0: 200,
        1223: 204
    }
      , Rt = de.ajaxSettings.xhr();
    pe.cors = !!Rt && "withCredentials"in Rt,
    pe.ajax = Rt = !!Rt,
    de.ajaxTransport(function(t) {
        var n, i;
        if (pe.cors || Rt && !t.crossDomain)
            return {
                send: function(r, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r)
                        s.setRequestHeader(a, r[a]);
                    n = function(e) {
                        return function() {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    i = s.onerror = n("error"),
                    void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    de.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    de.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return de.globalEval(e),
                e
            }
        }
    }),
    de.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    de.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = de("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && r("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    te.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Mt = []
      , _t = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mt.pop() || de.expando + "_" + Tt++;
            return this[e] = !0,
            e
        }
    }),
    de.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (_t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = de.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(_t, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return a || de.error(r + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[r],
            e[r] = function() {
                a = arguments
            }
            ,
            i.always(function() {
                void 0 === o ? de(e).removeProp(r) : e[r] = o,
                t[r] && (t.jsonpCallback = n.jsonpCallback,
                Mt.push(r)),
                a && de.isFunction(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    pe.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    de.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var i, r, o;
        return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""),
        i = t.createElement("base"),
        i.href = te.location.href,
        t.head.appendChild(i)) : t = te),
        r = Te.exec(e),
        o = !n && [],
        r ? [t.createElement(r[1])] : (r = b([e], t, o),
        o && o.length && de(o).remove(),
        de.merge([], r.childNodes))
    }
    ,
    de.fn.load = function(e, t, n) {
        var i, r, o, a = this, s = e.indexOf(" ");
        return s > -1 && (i = U(e.slice(s)),
        e = e.slice(0, s)),
        de.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        a.length > 0 && de.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(i ? de("<div>").append(de.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        de.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    de.expr.pseudos.animated = function(e) {
        return de.grep(de.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    de.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u, c = de.css(e, "position"), f = de(e), p = {};
            "static" === c && (e.style.position = "relative"),
            s = f.offset(),
            o = de.css(e, "top"),
            l = de.css(e, "left"),
            u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1,
            u ? (i = f.position(),
            a = i.top,
            r = i.left) : (a = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            de.isFunction(t) && (t = t.call(e, n, de.extend({}, s))),
            null != t.top && (p.top = t.top - s.top + a),
            null != t.left && (p.left = t.left - s.left + r),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    de.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    de.offset.setOffset(this, e, t)
                });
            var t, n, i, r, o = this[0];
            if (o)
                return o.getClientRects().length ? (i = o.getBoundingClientRect(),
                i.width || i.height ? (r = o.ownerDocument,
                n = Z(r),
                t = r.documentElement,
                {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === de.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                de.nodeName(e[0], "html") || (i = e.offset()),
                i = {
                    top: i.top + de.css(e[0], "borderTopWidth", !0),
                    left: i.left + de.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - i.top - de.css(n, "marginTop", !0),
                    left: t.left - i.left - de.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === de.css(e, "position"); )
                    e = e.offsetParent;
                return e || Qe
            })
        }
    }),
    de.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        de.fn[e] = function(i) {
            return Ae(this, function(e, i, r) {
                var o = Z(e);
                if (void 0 === r)
                    return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }),
    de.each(["top", "left"], function(e, t) {
        de.cssHooks[t] = q(pe.pixelPosition, function(e, n) {
            if (n)
                return n = A(e, t),
                rt.test(n) ? de(e).position()[t] + "px" : n
        })
    }),
    de.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        de.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            de.fn[i] = function(r, o) {
                var a = arguments.length && (n || "boolean" != typeof r)
                  , s = n || (!0 === r || !0 === o ? "margin" : "border");
                return Ae(this, function(t, n, r) {
                    var o;
                    return de.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? de.css(t, n, s) : de.style(t, n, r, s)
                }, t, a ? r : void 0, a)
            }
        })
    }),
    de.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    de.parseJSON = JSON.parse,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return de
    });
    var Bt = e.jQuery
      , zt = e.$;
    return de.noConflict = function(t) {
        return e.$ === de && (e.$ = zt),
        t && e.jQuery === de && (e.jQuery = Bt),
        de
    }
    ,
    t || (e.jQuery = e.$ = de),
    de
}),
function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n,
        this.$element = e(t),
        this.$backdrop = this.isShown = null,
        this.options.remote && this.$element.load(this.options.remote)
    };
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    t.prototype.toggle = function(e) {
        return this[this.isShown ? "hide" : "show"](e)
    }
    ,
    t.prototype.show = function(t) {
        var n = this
          , i = e.Event("show.bs.modal", {
            relatedTarget: t
        });
        this.$element.trigger(i),
        this.isShown || i.isDefaultPrevented() || (this.isShown = !0,
        this.escape(),
        this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
        this.backdrop(function() {
            var i = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body),
            n.$element.show(),
            i && n.$element[0].offsetWidth,
            n.$element.addClass("in").attr("aria-hidden", !1),
            n.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
                n.$element.focus().trigger(r)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(r)
        }))
    }
    ,
    t.prototype.hide = function(t) {
        t && t.preventDefault(),
        t = e.Event("hide.bs.modal"),
        this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        e(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"),
        e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }
    ,
    t.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
        }, this))
    }
    ,
    t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }
    ,
    t.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
        this.backdrop(function() {
            e.removeBackdrop(),
            e.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    t.prototype.backdrop = function(t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = e.support.transition && n;
            if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body),
            this.$element.on("click.dismiss.modal", e.proxy(function(e) {
                e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)),
            i && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
                return;
            i ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    }
    ;
    var n = e.fn.modal;
    e.fn.modal = function(n, i) {
        return this.each(function() {
            var r = e(this)
              , o = r.data("bs.modal")
              , a = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
            o || r.data("bs.modal", o = new t(this,a)),
            "string" == typeof n ? o[n](i) : a.show && o.show(i)
        })
    }
    ,
    e.fn.modal.Constructor = t,
    e.fn.modal.noConflict = function() {
        return e.fn.modal = n,
        this
    }
    ,
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var n = e(this)
          , i = n.attr("href")
          , r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""))
          , o = r.data("modal") ? "toggle" : e.extend({
            remote: !/#/.test(i) && i
        }, r.data(), n.data());
        t.preventDefault(),
        r.modal(o, this).one("hide", function() {
            n.is(":visible") && n.focus()
        })
    }),
    e(document).on("show.bs.modal", ".modal", function() {
        e(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        e(document.body).removeClass("modal-open")
    })
}(jQuery),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("bs.tooltip")
              , o = "object" == typeof t && t;
            !r && /destroy|hide/.test(t) || (r || i.data("bs.tooltip", r = new n(this,o)),
            "string" == typeof t && r[t]())
        })
    }
    var n = function(e, t) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    n.prototype.init = function(t, n, i) {
        if (this.enabled = !0,
        this.type = t,
        this.$element = e(n),
        this.options = this.getOptions(i),
        this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
            var a = r[o];
            if ("click" == a)
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin"
                  , l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t),
        t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t
    }
    ,
    n.prototype.getDelegateOptions = function() {
        var t = {}
          , n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }),
        t
    }
    ,
    n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout),
        n.hoverState = "in",
        n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }
    ,
    n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e])
                return !0;
        return !1
    }
    ,
    n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1),
        !n.isInStateTrue()) {
            if (clearTimeout(n.timeout),
            n.hoverState = "out",
            !n.options.delay || !n.options.delay.hide)
                return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }
    ,
    n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i)
                return;
            var r = this
              , o = this.tip()
              , a = this.getUID(this.type);
            this.setContent(),
            o.attr("id", a),
            this.$element.attr("aria-describedby", a),
            this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement
              , l = /\s?auto?\s?/i
              , u = l.test(s);
            u && (s = s.replace(l, "") || "top"),
            o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this),
            this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition()
              , f = o[0].offsetWidth
              , p = o[0].offsetHeight;
            if (u) {
                var d = s
                  , h = this.getPosition(this.$viewport);
                s = "bottom" == s && c.bottom + p > h.bottom ? "top" : "top" == s && c.top - p < h.top ? "bottom" : "right" == s && c.right + f > h.width ? "left" : "left" == s && c.left - f < h.left ? "right" : s,
                o.removeClass(d).addClass(s)
            }
            var g = this.getCalculatedOffset(s, c, f, p);
            this.applyPlacement(g, s);
            var m = function() {
                var e = r.hoverState;
                r.$element.trigger("shown.bs." + r.type),
                r.hoverState = null,
                "out" == e && r.leave(r)
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }
    ,
    n.prototype.applyPlacement = function(t, n) {
        var i = this.tip()
          , r = i[0].offsetWidth
          , o = i[0].offsetHeight
          , a = parseInt(i.css("margin-top"), 10)
          , s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0),
        isNaN(s) && (s = 0),
        t.top += a,
        t.left += s,
        e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0),
        i.addClass("in");
        var l = i[0].offsetWidth
          , u = i[0].offsetHeight;
        "top" == n && u != o && (t.top = t.top + o - u);
        var c = this.getViewportAdjustedDelta(n, t, l, u);
        c.left ? t.left += c.left : t.top += c.top;
        var f = /top|bottom/.test(n)
          , p = f ? 2 * c.left - r + l : 2 * c.top - o + u
          , d = f ? "offsetWidth" : "offsetHeight";
        i.offset(t),
        this.replaceArrow(p, i[0][d], f)
    }
    ,
    n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }
    ,
    n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
        e.removeClass("fade in top bottom left right")
    }
    ,
    n.prototype.hide = function(t) {
        function i() {
            "in" != r.hoverState && o.detach(),
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type),
            t && t()
        }
        var r = this
          , o = e(this.$tip)
          , a = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(a),
        !a.isDefaultPrevented())
            return o.removeClass("in"),
            e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(),
            this.hoverState = null,
            this
    }
    ,
    n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0]
          , i = "BODY" == n.tagName
          , r = n.getBoundingClientRect();
        null == r.width && (r = e.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement
          , a = i ? {
            top: 0,
            left: 0
        } : o ? null : t.offset()
          , s = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }
          , l = i ? {
            width: e(window).width(),
            height: e(window).height()
        } : null;
        return e.extend({}, r, s, l, a)
    }
    ,
    n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }
    ,
    n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return r;
        var o = this.options.viewport && this.options.viewport.padding || 0
          , a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - o - a.scroll
              , l = t.top + o - a.scroll + i;
            s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l)
        } else {
            var u = t.left - o
              , c = t.left + o + n;
            u < a.left ? r.left = a.left - u : c > a.right && (r.left = a.left + a.width - c)
        }
        return r
    }
    ,
    n.prototype.getTitle = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }
    ,
    n.prototype.getUID = function(e) {
        do {
            e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));return e
    }
    ,
    n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    n.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    n.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    n.prototype.toggle = function(t) {
        var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n))),
        t ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type),
            e.$tip && e.$tip.detach(),
            e.$tip = null,
            e.$arrow = null,
            e.$viewport = null,
            e.$element = null
        })
    }
    ;
    var i = e.fn.tooltip;
    e.fn.tooltip = t,
    e.fn.tooltip.Constructor = n,
    e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i,
        this
    }
}(jQuery),
function(e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap")
          , t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)
            if (void 0 !== e.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1
          , i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(r, t),
        this
    }
    ,
    e(function() {
        e.support.transition = t(),
        e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}
  , Prism = function() {
    var e = /\blang(?:uage)?-(\w+)\b/i
      , t = 0
      , n = _self.Prism = {
        util: {
            encode: function(e) {
                return e instanceof i ? new i(e.type,n.util.encode(e.content),e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function(e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++t
                }),
                e.__id
            },
            clone: function(e) {
                switch (n.util.type(e)) {
                case "Object":
                    var t = {};
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = n.util.clone(e[i]));
                    return t;
                case "Array":
                    return e.map && e.map(function(e) {
                        return n.util.clone(e)
                    })
                }
                return e
            }
        },
        languages: {
            extend: function(e, t) {
                var i = n.util.clone(n.languages[e]);
                for (var r in t)
                    i[r] = t[r];
                return i
            },
            insertBefore: function(e, t, i, r) {
                r = r || n.languages;
                var o = r[e];
                if (2 == arguments.length) {
                    i = arguments[1];
                    for (var a in i)
                        i.hasOwnProperty(a) && (o[a] = i[a]);
                    return o
                }
                var s = {};
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        if (l == t)
                            for (var a in i)
                                i.hasOwnProperty(a) && (s[a] = i[a]);
                        s[l] = o[l]
                    }
                return n.languages.DFS(n.languages, function(t, n) {
                    n === r[e] && t != e && (this[t] = s)
                }),
                r[e] = s
            },
            DFS: function(e, t, i, r) {
                r = r || {};
                for (var o in e)
                    e.hasOwnProperty(o) && (t.call(e, o, e[o], i || o),
                    "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || (r[n.util.objId(e[o])] = !0,
                    n.languages.DFS(e[o], t, o, r)) : (r[n.util.objId(e[o])] = !0,
                    n.languages.DFS(e[o], t, null, r)))
            }
        },
        plugins: {},
        highlightAll: function(e, t) {
            var i = {
                callback: t,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            n.hooks.run("before-highlightall", i);
            for (var r, o = i.elements || document.querySelectorAll(i.selector), a = 0; r = o[a++]; )
                n.highlightElement(r, !0 === e, i.callback)
        },
        highlightElement: function(t, i, r) {
            for (var o, a, s = t; s && !e.test(s.className); )
                s = s.parentNode;
            s && (o = (s.className.match(e) || [, ""])[1].toLowerCase(),
            a = n.languages[o]),
            t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o,
            s = t.parentNode,
            /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
            var l = t.textContent
              , u = {
                element: t,
                language: o,
                grammar: a,
                code: l
            };
            if (n.hooks.run("before-sanity-check", u),
            !u.code || !u.grammar)
                return void n.hooks.run("complete", u);
            if (n.hooks.run("before-highlight", u),
            i && _self.Worker) {
                var c = new Worker(n.filename);
                c.onmessage = function(e) {
                    u.highlightedCode = e.data,
                    n.hooks.run("before-insert", u),
                    u.element.innerHTML = u.highlightedCode,
                    r && r.call(u.element),
                    n.hooks.run("after-highlight", u),
                    n.hooks.run("complete", u)
                }
                ,
                c.postMessage(JSON.stringify({
                    language: u.language,
                    code: u.code,
                    immediateClose: !0
                }))
            } else
                u.highlightedCode = n.highlight(u.code, u.grammar, u.language),
                n.hooks.run("before-insert", u),
                u.element.innerHTML = u.highlightedCode,
                r && r.call(t),
                n.hooks.run("after-highlight", u),
                n.hooks.run("complete", u)
        },
        highlight: function(e, t, r) {
            var o = n.tokenize(e, t);
            return i.stringify(n.util.encode(o), r)
        },
        tokenize: function(e, t) {
            var i = n.Token
              , r = [e]
              , o = t.rest;
            if (o) {
                for (var a in o)
                    t[a] = o[a];
                delete t.rest
            }
            e: for (var a in t)
                if (t.hasOwnProperty(a) && t[a]) {
                    var s = t[a];
                    s = "Array" === n.util.type(s) ? s : [s];
                    for (var l = 0; l < s.length; ++l) {
                        var u = s[l]
                          , c = u.inside
                          , f = !!u.lookbehind
                          , p = !!u.greedy
                          , d = 0
                          , h = u.alias;
                        if (p && !u.pattern.global) {
                            var g = u.pattern.toString().match(/[imuy]*$/)[0];
                            u.pattern = RegExp(u.pattern.source, g + "g")
                        }
                        u = u.pattern || u;
                        for (var m = 0, v = 0; m < r.length; v += r[m].length,
                        ++m) {
                            var y = r[m];
                            if (r.length > e.length)
                                break e;
                            if (!(y instanceof i)) {
                                u.lastIndex = 0;
                                var b = u.exec(y)
                                  , x = 1;
                                if (!b && p && m != r.length - 1) {
                                    if (u.lastIndex = v,
                                    !(b = u.exec(e)))
                                        break;
                                    for (var w = b.index + (f ? b[1].length : 0), T = b.index + b[0].length, k = m, C = v, S = r.length; S > k && T > C; ++k)
                                        C += r[k].length,
                                        w >= C && (++m,
                                        v = C);
                                    if (r[m]instanceof i || r[k - 1].greedy)
                                        continue;
                                    x = k - m,
                                    y = e.slice(v, C),
                                    b.index -= v
                                }
                                if (b) {
                                    f && (d = b[1].length);
                                    var w = b.index + d
                                      , b = b[0].slice(d)
                                      , T = w + b.length
                                      , E = y.slice(0, w)
                                      , $ = y.slice(T)
                                      , N = [m, x];
                                    E && N.push(E);
                                    var D = new i(a,c ? n.tokenize(b, c) : b,h,b,p);
                                    N.push(D),
                                    $ && N.push($),
                                    Array.prototype.splice.apply(r, N)
                                }
                            }
                        }
                    }
                }
            return r
        },
        hooks: {
            all: {},
            add: function(e, t) {
                var i = n.hooks.all;
                i[e] = i[e] || [],
                i[e].push(t)
            },
            run: function(e, t) {
                var i = n.hooks.all[e];
                if (i && i.length)
                    for (var r, o = 0; r = i[o++]; )
                        r(t)
            }
        }
    }
      , i = n.Token = function(e, t, n, i, r) {
        this.type = e,
        this.content = t,
        this.alias = n,
        this.length = 0 | (i || "").length,
        this.greedy = !!r
    }
    ;
    if (i.stringify = function(e, t, r) {
        if ("string" == typeof e)
            return e;
        if ("Array" === n.util.type(e))
            return e.map(function(n) {
                return i.stringify(n, t, e)
            }).join("");
        var o = {
            type: e.type,
            content: i.stringify(e.content, t, r),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t,
            parent: r
        };
        if ("comment" == o.type && (o.attributes.spellcheck = "true"),
        e.alias) {
            var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
            Array.prototype.push.apply(o.classes, a)
        }
        n.hooks.run("wrap", o);
        var s = Object.keys(o.attributes).map(function(e) {
            return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"'
        }).join(" ");
        return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + o.content + "</" + o.tag + ">"
    }
    ,
    !_self.document)
        return _self.addEventListener ? (_self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data)
              , i = t.language
              , r = t.code
              , o = t.immediateClose;
            _self.postMessage(n.highlight(r, n.languages[i], i)),
            o && _self.close()
        }, !1),
        _self.Prism) : _self.Prism;
    var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return r && (n.filename = r.src,
    document.addEventListener && !r.hasAttribute("data-manual") && ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))),
    _self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism),
"undefined" != typeof global && (global.Prism = Prism),
Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/i,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    punctuation: /[=>"']/
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
},
Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}),
Prism.languages.xml = Prism.languages.markup,
Prism.languages.html = Prism.languages.markup,
Prism.languages.mathml = Prism.languages.markup,
Prism.languages.svg = Prism.languages.markup,
Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: {
        pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
},
Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css),
Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}),
Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)),
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: {
        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
},
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
}),
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    }
}),
Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}),
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}),
Prism.languages.js = Prism.languages.javascript,
function(e) {
    var t = /\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g;
    e.languages.handlebars = e.languages.extend("markup", {
        handlebars: {
            pattern: t,
            inside: {
                delimiter: {
                    pattern: /^\{\{\{?|\}\}\}?$/i,
                    alias: "punctuation"
                },
                string: /(["'])(\\?.)*?\1/,
                number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/,
                boolean: /\b(true|false)\b/,
                block: {
                    pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
                    lookbehind: !0,
                    alias: "keyword"
                },
                brackets: {
                    pattern: /\[[^\]]+\]/,
                    inside: {
                        punctuation: /\[|\]/,
                        variable: /[\w\W]+/
                    }
                },
                punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
                variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
            }
        }
    }),
    e.languages.insertBefore("handlebars", "tag", {
        "handlebars-comment": {
            pattern: /\{\{![\w\W]*?\}\}/,
            alias: ["handlebars", "comment"]
        }
    }),
    e.hooks.add("before-highlight", function(e) {
        "handlebars" === e.language && (e.tokenStack = [],
        e.backupCode = e.code,
        e.code = e.code.replace(t, function(t) {
            return e.tokenStack.push(t),
            "___HANDLEBARS" + e.tokenStack.length + "___"
        }))
    }),
    e.hooks.add("before-insert", function(e) {
        "handlebars" === e.language && (e.code = e.backupCode,
        delete e.backupCode)
    }),
    e.hooks.add("after-highlight", function(t) {
        if ("handlebars" === t.language) {
            for (var n, i = 0; n = t.tokenStack[i]; i++)
                t.highlightedCode = t.highlightedCode.replace("___HANDLEBARS" + (i + 1) + "___", e.highlight(n, t.grammar, "handlebars").replace(/\$/g, "$$$$"));
            t.element.innerHTML = t.highlightedCode
        }
    })
}(Prism),
Prism.languages.json = {
    property: /"(?:\\.|[^|"])*"(?=\s*:)/gi,
    string: /"(?!:)(?:\\.|[^|"])*"(?!:)/g,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
    punctuation: /[{}[\]);,]/g,
    operator: /:/g,
    boolean: /\b(true|false)\b/gi,
    null: /\bnull\b/gi
},
Prism.languages.jsonp = Prism.languages.json,
$(document).ready(function() {
    initDropdowns($(".gh-more-drop")),
    initDropdowns($(".gh-langswitch")),
    initDropdowns($(".gh-cc-why-drop")),
    initDropdowns($(".gh-avatar-drop")),
    $(".gh-page-title").on("click", function(e) {
        e.stopPropagation(),
        $(".gh-page-sidebar").hasClass("gh-page-sidebar-open") ? ($(".gh-page-sidebar").removeClass("gh-page-sidebar-open"),
        $(document).off("click")) : ($(".gh-page-sidebar").addClass("gh-page-sidebar-open"),
        $(document).on("click", function() {
            $(".gh-page-sidebar").removeClass("gh-page-sidebar-open")
        }))
    }),
    $(".gh-nav-burger").click(function() {
        $(".gh-mobilehead").toggleClass("gh-mobilehead-open")
    }),
    $(".gh-faq-link").click(function(e) {
        e.preventDefault(),
        $(".gh-faq-link").removeClass("gh-faq-link-active"),
        $(this).addClass("gh-faq-link-active"),
        $(".gh-faq-section").removeClass("gh-faq-section-active")
    }),
    $(".gh-faq-link-top10").click(function() {
        $(".gh-faq-popular").addClass("gh-faq-section-active")
    }),
    $(".gh-faq-link-gettingstarted").click(function() {
        $(".gh-faq-gettingstarted").addClass("gh-faq-section-active")
    }),
    $(".gh-faq-link-securityprivacy").click(function() {
        $(".gh-faq-securityprivacy").addClass("gh-faq-section-active")
    }),
    $(".gh-faq-link-billing").click(function() {
        $(".gh-faq-billing").addClass("gh-faq-section-active")
    }),
    $(".gh-faq-q a").click(function(e) {
        e.preventDefault(),
        $(this).parents(".gh-faq-item").toggleClass("gh-faq-item-open")
    }),
    $(".gh-codebox-link").click(function(e) {
        e.preventDefault(),
        $(".gh-codebox-link").removeClass("gh-codebox-link-active"),
        $(this).addClass("gh-codebox-link-active"),
        $(".gh-codebox").removeClass("gh-codebox-active")
    }),
    $(".gh-codebox-link-posts").click(function() {
        $(".gh-codebox-posts").addClass("gh-codebox-active")
    }),
    $(".gh-codebox-link-tags").click(function() {
        $(".gh-codebox-tags").addClass("gh-codebox-active")
    }),
    $(".gh-codebox-link-users").click(function() {
        $(".gh-codebox-users").addClass("gh-codebox-active")
    })
});
//# sourceMappingURL=ghost.js.map
