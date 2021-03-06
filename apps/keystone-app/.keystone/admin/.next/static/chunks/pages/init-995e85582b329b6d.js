(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [464],
  {
    8107: function (t, e, r) {
      'use strict';
      r.d(e, {
        S: function () {
          return s;
        },
        u: function () {
          return a;
        },
      });
      var n = r(1053),
        o = r(1902),
        i = r(6837);
      const s = (t) => {
          let { children: e, title: r } = t;
          const { colors: o, shadow: i } = (0, n.Fg)();
          return (0, n.tZ)(
            'div',
            null,
            (0, n.tZ)('head', null, (0, n.tZ)('title', null, r || 'Keystone')),
            (0, n.tZ)(
              n.M5,
              {
                css: {
                  minWidth: '100vw',
                  minHeight: '100vh',
                  backgroundColor: o.backgroundMuted,
                },
                rounding: 'medium',
              },
              (0, n.tZ)(
                n.xu,
                {
                  css: {
                    background: o.background,
                    width: 600,
                    boxShadow: i.s100,
                  },
                  margin: 'medium',
                  padding: 'xlarge',
                  rounding: 'medium',
                },
                e
              )
            )
          );
        },
        a = () => {
          const t = (0, i.tv)();
          return (0, o.useMemo)(() => {
            var e;
            return !Array.isArray(t.query.from) &&
              null !== (e = t.query.from) &&
              void 0 !== e &&
              e.startsWith('/')
              ? t.query.from
              : '/';
          }, [t]);
        };
    },
    7317: function (t, e) {
      var r = 'undefined' !== typeof self ? self : this,
        n = (function () {
          function t() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (t.prototype = r), new t();
        })();
      !(function (t) {
        !(function (e) {
          var r = 'URLSearchParams' in t,
            n = 'Symbol' in t && 'iterator' in Symbol,
            o =
              'FileReader' in t &&
              'Blob' in t &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            i = 'FormData' in t,
            s = 'ArrayBuffer' in t;
          if (s)
            var a = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]',
              ],
              u =
                ArrayBuffer.isView ||
                function (t) {
                  return t && a.indexOf(Object.prototype.toString.call(t)) > -1;
                };
          function l(t) {
            if (
              ('string' !== typeof t && (t = String(t)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
            )
              throw new TypeError('Invalid character in header field name');
            return t.toLowerCase();
          }
          function c(t) {
            return 'string' !== typeof t && (t = String(t)), t;
          }
          function h(t) {
            var e = {
              next: function () {
                var e = t.shift();
                return { done: void 0 === e, value: e };
              },
            };
            return (
              n &&
                (e[Symbol.iterator] = function () {
                  return e;
                }),
              e
            );
          }
          function d(t) {
            (this.map = {}),
              t instanceof d
                ? t.forEach(function (t, e) {
                    this.append(e, t);
                  }, this)
                : Array.isArray(t)
                ? t.forEach(function (t) {
                    this.append(t[0], t[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    this.append(e, t[e]);
                  }, this);
          }
          function f(t) {
            if (t.bodyUsed)
              return Promise.reject(new TypeError('Already read'));
            t.bodyUsed = !0;
          }
          function p(t) {
            return new Promise(function (e, r) {
              (t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  r(t.error);
                });
            });
          }
          function y(t) {
            var e = new FileReader(),
              r = p(e);
            return e.readAsArrayBuffer(t), r;
          }
          function b(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
          }
          function m() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                var e;
                (this._bodyInit = t),
                  t
                    ? 'string' === typeof t
                      ? (this._bodyText = t)
                      : o && Blob.prototype.isPrototypeOf(t)
                      ? (this._bodyBlob = t)
                      : i && FormData.prototype.isPrototypeOf(t)
                      ? (this._bodyFormData = t)
                      : r && URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : s && o && (e = t) && DataView.prototype.isPrototypeOf(e)
                      ? ((this._bodyArrayBuffer = b(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : s && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t))
                      ? (this._bodyArrayBuffer = b(t))
                      : (this._bodyText = t = Object.prototype.toString.call(t))
                    : (this._bodyText = ''),
                  this.headers.get('content-type') ||
                    ('string' === typeof t
                      ? this.headers.set(
                          'content-type',
                          'text/plain;charset=UTF-8'
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set('content-type', this._bodyBlob.type)
                      : r &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set(
                          'content-type',
                          'application/x-www-form-urlencoded;charset=UTF-8'
                        ));
              }),
              o &&
                ((this.blob = function () {
                  var t = f(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error('could not read FormData body as blob');
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? f(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(y);
                })),
              (this.text = function () {
                var t = f(this);
                if (t) return t;
                if (this._bodyBlob)
                  return (function (t) {
                    var e = new FileReader(),
                      r = p(e);
                    return e.readAsText(t), r;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (t) {
                      for (
                        var e = new Uint8Array(t),
                          r = new Array(e.length),
                          n = 0;
                        n < e.length;
                        n++
                      )
                        r[n] = String.fromCharCode(e[n]);
                      return r.join('');
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error('could not read FormData body as text');
                return Promise.resolve(this._bodyText);
              }),
              i &&
                (this.formData = function () {
                  return this.text().then(w);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (d.prototype.append = function (t, e) {
            (t = l(t)), (e = c(e));
            var r = this.map[t];
            this.map[t] = r ? r + ', ' + e : e;
          }),
            (d.prototype.delete = function (t) {
              delete this.map[l(t)];
            }),
            (d.prototype.get = function (t) {
              return (t = l(t)), this.has(t) ? this.map[t] : null;
            }),
            (d.prototype.has = function (t) {
              return this.map.hasOwnProperty(l(t));
            }),
            (d.prototype.set = function (t, e) {
              this.map[l(t)] = c(e);
            }),
            (d.prototype.forEach = function (t, e) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
            }),
            (d.prototype.keys = function () {
              var t = [];
              return (
                this.forEach(function (e, r) {
                  t.push(r);
                }),
                h(t)
              );
            }),
            (d.prototype.values = function () {
              var t = [];
              return (
                this.forEach(function (e) {
                  t.push(e);
                }),
                h(t)
              );
            }),
            (d.prototype.entries = function () {
              var t = [];
              return (
                this.forEach(function (e, r) {
                  t.push([r, e]);
                }),
                h(t)
              );
            }),
            n && (d.prototype[Symbol.iterator] = d.prototype.entries);
          var g = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
          function v(t, e) {
            var r = (e = e || {}).body;
            if (t instanceof v) {
              if (t.bodyUsed) throw new TypeError('Already read');
              (this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new d(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                (this.signal = t.signal),
                r ||
                  null == t._bodyInit ||
                  ((r = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
              ((this.credentials =
                e.credentials || this.credentials || 'same-origin'),
              (!e.headers && this.headers) || (this.headers = new d(e.headers)),
              (this.method = (function (t) {
                var e = t.toUpperCase();
                return g.indexOf(e) > -1 ? e : t;
              })(e.method || this.method || 'GET')),
              (this.mode = e.mode || this.mode || null),
              (this.signal = e.signal || this.signal),
              (this.referrer = null),
              ('GET' === this.method || 'HEAD' === this.method) && r)
            )
              throw new TypeError('Body not allowed for GET or HEAD requests');
            this._initBody(r);
          }
          function w(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split('&')
                .forEach(function (t) {
                  if (t) {
                    var r = t.split('='),
                      n = r.shift().replace(/\+/g, ' '),
                      o = r.join('=').replace(/\+/g, ' ');
                    e.append(decodeURIComponent(n), decodeURIComponent(o));
                  }
                }),
              e
            );
          }
          function E(t) {
            var e = new d();
            return (
              t
                .replace(/\r?\n[\t ]+/g, ' ')
                .split(/\r?\n/)
                .forEach(function (t) {
                  var r = t.split(':'),
                    n = r.shift().trim();
                  if (n) {
                    var o = r.join(':').trim();
                    e.append(n, o);
                  }
                }),
              e
            );
          }
          function Z(t, e) {
            e || (e = {}),
              (this.type = 'default'),
              (this.status = void 0 === e.status ? 200 : e.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
              (this.headers = new d(e.headers)),
              (this.url = e.url || ''),
              this._initBody(t);
          }
          (v.prototype.clone = function () {
            return new v(this, { body: this._bodyInit });
          }),
            m.call(v.prototype),
            m.call(Z.prototype),
            (Z.prototype.clone = function () {
              return new Z(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new d(this.headers),
                url: this.url,
              });
            }),
            (Z.error = function () {
              var t = new Z(null, { status: 0, statusText: '' });
              return (t.type = 'error'), t;
            });
          var A = [301, 302, 303, 307, 308];
          (Z.redirect = function (t, e) {
            if (-1 === A.indexOf(e))
              throw new RangeError('Invalid status code');
            return new Z(null, { status: e, headers: { location: t } });
          }),
            (e.DOMException = t.DOMException);
          try {
            new e.DOMException();
          } catch (x) {
            (e.DOMException = function (t, e) {
              (this.message = t), (this.name = e);
              var r = Error(t);
              this.stack = r.stack;
            }),
              (e.DOMException.prototype = Object.create(Error.prototype)),
              (e.DOMException.prototype.constructor = e.DOMException);
          }
          function _(t, r) {
            return new Promise(function (n, i) {
              var s = new v(t, r);
              if (s.signal && s.signal.aborted)
                return i(new e.DOMException('Aborted', 'AbortError'));
              var a = new XMLHttpRequest();
              function u() {
                a.abort();
              }
              (a.onload = function () {
                var t = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: E(a.getAllResponseHeaders() || ''),
                };
                t.url =
                  'responseURL' in a
                    ? a.responseURL
                    : t.headers.get('X-Request-URL');
                var e = 'response' in a ? a.response : a.responseText;
                n(new Z(e, t));
              }),
                (a.onerror = function () {
                  i(new TypeError('Network request failed'));
                }),
                (a.ontimeout = function () {
                  i(new TypeError('Network request failed'));
                }),
                (a.onabort = function () {
                  i(new e.DOMException('Aborted', 'AbortError'));
                }),
                a.open(s.method, s.url, !0),
                'include' === s.credentials
                  ? (a.withCredentials = !0)
                  : 'omit' === s.credentials && (a.withCredentials = !1),
                'responseType' in a && o && (a.responseType = 'blob'),
                s.headers.forEach(function (t, e) {
                  a.setRequestHeader(e, t);
                }),
                s.signal &&
                  (s.signal.addEventListener('abort', u),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      s.signal.removeEventListener('abort', u);
                  })),
                a.send('undefined' === typeof s._bodyInit ? null : s._bodyInit);
            });
          }
          (_.polyfill = !0),
            t.fetch ||
              ((t.fetch = _),
              (t.Headers = d),
              (t.Request = v),
              (t.Response = Z)),
            (e.Headers = d),
            (e.Request = v),
            (e.Response = Z),
            (e.fetch = _),
            Object.defineProperty(e, '__esModule', { value: !0 });
        })({});
      })(n),
        (n.fetch.ponyfill = !0),
        delete n.fetch.polyfill;
      var o = n;
      ((e = o.fetch).default = o.fetch),
        (e.fetch = o.fetch),
        (e.Headers = o.Headers),
        (e.Request = o.Request),
        (e.Response = o.Response),
        (t.exports = e);
    },
    6686: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/init',
        function () {
          return r(3818);
        },
      ]);
    },
    3818: function (t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          default: function () {
            return k;
          },
        });
      var n = r(1902),
        o = r(7317),
        i = r.n(o),
        s = r(1053),
        a = r(6970),
        u = r(9290),
        l = r(9759),
        c = r(5500),
        h = r.n(c),
        d = r(3224),
        f = r(2716),
        p = r(6837),
        y = r(1293),
        b = r(9265),
        m = (r(3249), r(3983)),
        g = r(6238),
        v = r(4390),
        w = r(2172),
        E = r(8107);
      const Z = ['email', 'username'],
        A = ['children'],
        _ = ['as'],
        x = (t) => {
          let { children: e } = t,
            r = (0, w.Z)(t, A);
          return (0, s.tZ)(
            'a',
            (0, v.Z)(
              {
                css: {
                  color: '#6C798F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 24,
                  width: 24,
                  ':hover,:focus': { color: '#253858' },
                  svg: { width: '100%' },
                },
              },
              r
            ),
            e
          );
        },
        S = (t) =>
          (0, s.tZ)(
            x,
            t,
            (0, s.tZ)(
              'svg',
              { viewBox: '0 0 24 20', xmlns: 'http://www.w3.org/2000/svg' },
              (0, s.tZ)('path', {
                d: 'M7.548 20c9.056 0 14.01-7.695 14.01-14.368 0-.219 0-.437-.015-.653.964-.715 1.796-1.6 2.457-2.614a9.638 9.638 0 0 1-2.828.794A5.047 5.047 0 0 0 23.337.366a9.72 9.72 0 0 1-3.127 1.226C18.684-.072 16.258-.48 14.294.598c-1.964 1.078-2.98 3.374-2.475 5.6C7.859 5.994 4.17 4.076 1.67.922.363 3.229 1.031 6.18 3.195 7.662A4.795 4.795 0 0 1 .96 7.032v.064c0 2.403 1.653 4.474 3.95 4.95a4.797 4.797 0 0 1-2.223.087c.645 2.057 2.494 3.466 4.6 3.506A9.725 9.725 0 0 1 0 17.732a13.688 13.688 0 0 0 7.548 2.264',
                fill: 'currentColor',
                fillRule: 'nonzero',
              })
            ),
            (0, s.tZ)(O, null, 'Hear about KeystoneJS on Twitter')
          ),
        T = (t) =>
          (0, s.tZ)(
            x,
            t,
            (0, s.tZ)(
              'svg',
              { viewBox: '0 0 16 16', version: '1.1', 'aria-hidden': 'true' },
              (0, s.tZ)('path', {
                fill: 'currentColor',
                fillRule: 'evenodd',
                d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z',
              })
            ),
            (0, s.tZ)(O, null, 'KeystoneJS repository on GitHub')
          ),
        O = (0, s.yV)((t, e) => {
          let { as: r = 'span' } = t,
            n = (0, w.Z)(t, _);
          return (0, s.tZ)(
            r,
            (0, v.Z)(
              {
                ref: e,
                css: {
                  border: 0,
                  clip: 'rect(1px, 1px, 1px, 1px)',
                  height: 1,
                  overflow: 'hidden',
                  padding: 0,
                  position: 'absolute',
                  whiteSpace: 'nowrap',
                  width: 1,
                },
              },
              n
            )
          );
        }),
        B = (t) => {
          let { value: e } = t;
          const [r, o] = (0, n.useState)(!1),
            [l, c] = (0, n.useState)(
              ((t) => {
                for (const e of Z)
                  if (t[e] && 'string' === typeof t[e].value) return t[e].value;
              })(e)
            ),
            [h, d] = (0, n.useState)(null),
            [f, y] = (0, n.useState)(!1),
            b = (0, p.tv)(),
            m = (0, E.u)();
          return (0, s.tZ)(
            s.Kq,
            { gap: 'large' },
            (0, s.tZ)(
              s.Kq,
              {
                gap: 'small',
                align: 'center',
                across: !0,
                css: { width: '100%', justifyContent: 'space-between' },
              },
              (0, s.tZ)(s.H1, null, 'Welcome'),
              (0, s.tZ)(
                s.Kq,
                { across: !0, gap: 'small' },
                (0, s.tZ)(S, { title: 'Twitter Logo' }),
                (0, s.tZ)(T, {
                  href: 'https://github.com/keystonejs/keystone',
                  target: '_blank',
                  title: 'Github',
                })
              )
            ),
            (0, s.tZ)(
              'p',
              { css: { margin: 0 } },
              "Thanks for installing KeystoneJS. While you're getting started, check out the docs at",
              ' ',
              (0, s.tZ)(
                'a',
                { href: 'https://keystonejs.com' },
                'keystonejs.com'
              )
            ),
            (0, s.tZ)(
              'div',
              null,
              "If you'd like to stay up to date with the exciting things we have planned, join our mailing list (just useful announcements, no spam!)"
            ),
            (0, s.tZ)(
              'div',
              null,
              (0, s.tZ)(
                u.XZ,
                {
                  checked: r,
                  onChange: () => {
                    d(null), o(!r);
                  },
                },
                'sign up to our mailing list'
              )
            ),
            (0, s.tZ)(
              'form',
              {
                onSubmit: (t) => (
                  t.preventDefault(),
                  d(null),
                  r
                    ? (y(!0),
                      ((t) =>
                        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                          t
                        ))(l)
                        ? i()(
                            'https://signup.keystonejs.cloud/api/newsletter-signup',
                            {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                                name: e.username,
                                email: l,
                                source: '@keystone-6/auth InitPage',
                              }),
                            }
                          )
                            .then((t) => {
                              200 !== t.status
                                ? t.json().then((t) => {
                                    let { error: e } = t;
                                    d(e), y(!1);
                                  })
                                : b.push(m);
                            })
                            .catch((t) => {
                              d(t.toString()), y(!1);
                            })
                        : (y(!1), void d('Email is invalid')))
                    : b.push(m)
                ),
              },
              (0, s.tZ)(
                s.TX,
                { as: 'label', htmlFor: 'email-field' },
                'Email Address'
              ),
              (0, s.tZ)(u.oi, {
                id: 'email-field',
                disabled: !r,
                autoFocus: !0,
                placeholder: 'Email',
                value: l,
                onChange: (t) => c(t.target.value),
              }),
              (0, s.tZ)('p', { css: { color: 'red' } }, h),
              (0, s.tZ)(
                s.gF,
                { gap: 'medium', align: 'center' },
                (0, s.tZ)(
                  a.zx,
                  {
                    isLoading: f,
                    type: 'submit',
                    weight: 'bold',
                    tone: 'active',
                  },
                  h ? 'Try again' : 'Continue'
                ),
                h &&
                  (0, s.tZ)(
                    a.zx,
                    { as: p.rU, href: '/', tone: 'active' },
                    'Continue'
                  )
              )
            )
          );
        },
        P = (t) => {
          var e;
          let { fieldPaths: r, listKey: o, enableWelcome: i } = t;
          const { adminMeta: u } = (0, l.jf)(),
            c = (0, n.useMemo)(() => {
              const t = {};
              return (
                r.forEach((e) => {
                  t[e] = u.lists[o].fields[e];
                }),
                t
              );
            }, [r, u.lists, o]),
            [v, w] = (0, n.useState)(() => {
              let t = {};
              return (
                Object.keys(c).forEach((e) => {
                  t[e] = { kind: 'value', value: c[e].controller.defaultValue };
                }),
                t
              );
            }),
            Z = (0, m.a)(c, v),
            [A, _] = (0, n.useState)(!1),
            [x, S] = (0, n.useState)('init'),
            [T, { loading: O, error: P, data: j }] = (0,
            d.D)(f.Ps`mutation($data: CreateInitial${o}Input!) {
    authenticate: createInitial${o}(data: $data) {
      ... on ${o}AuthenticationWithPasswordSuccess {
        item {
          id
        }
      }
    }
  }`),
            k = (0, l.Mz)(),
            C = (0, p.tv)(),
            D = (0, E.u)(),
            R = (0, l.gS)();
          return (
            (0, n.useEffect)(() => {
              'authenticated' === R.authenticatedItem.state &&
                (i ? S('welcome') : C.push(D));
            }, [R.authenticatedItem, i, C, D]),
            'authenticated' !== R.authenticatedItem.state || i
              ? 'init' === x
                ? (0, s.tZ)(
                    E.S,
                    { title: 'Welcome to KeystoneJS' },
                    (0, s.tZ)(s.H1, null, 'Welcome to KeystoneJS'),
                    (0, s.tZ)(
                      'p',
                      null,
                      'Create your first user to get started'
                    ),
                    (0, s.tZ)(
                      'form',
                      {
                        onSubmit: (t) => {
                          t.preventDefault();
                          const e = 0 !== Z.size;
                          if ((_(e), e)) return;
                          const r = {},
                            n = (0, m.s)(c, v);
                          Object.keys(n).forEach((t) => {
                            const { controller: e } = c[t],
                              o = n[t];
                            h()(o, e.serialize(e.defaultValue)) ||
                              Object.assign(r, o);
                          }),
                            T({ variables: { data: r } })
                              .then(() => {
                                k();
                              })
                              .catch(() => {});
                        },
                      },
                      (0, s.tZ)(
                        s.Kq,
                        { gap: 'large' },
                        P &&
                          (0, s.tZ)(y.Z6, {
                            errors:
                              null === P || void 0 === P
                                ? void 0
                                : P.graphQLErrors,
                            networkError:
                              null === P || void 0 === P
                                ? void 0
                                : P.networkError,
                          }),
                        (0, s.tZ)(b.F, {
                          fields: c,
                          fieldModes: null,
                          forceValidation: A,
                          invalidFields: Z,
                          onChange: w,
                          value: v,
                        }),
                        (0, s.tZ)(
                          a.zx,
                          {
                            isLoading:
                              O ||
                              (null === j ||
                              void 0 === j ||
                              null === (e = j.authenticate) ||
                              void 0 === e
                                ? void 0
                                : e.__typename) ===
                                `${o}AuthenticationWithPasswordSuccess`,
                            type: 'submit',
                            weight: 'bold',
                            tone: 'active',
                          },
                          'Get started'
                        )
                      )
                    )
                  )
                : (0, s.tZ)(E.S, null, (0, s.tZ)(B, { value: v }))
              : (0, s.tZ)(
                  s.M5,
                  { fillView: !0 },
                  (0, s.tZ)(g.xg, { label: 'Loading page', size: 'large' })
                )
          );
        };
      var j,
        k =
          ((j = {
            listKey: 'User',
            fieldPaths: ['name', 'email', 'password'],
            enableWelcome: !0,
          }),
          () => (0, s.tZ)(P, j));
    },
  },
  function (t) {
    t.O(0, [888, 774, 179], function () {
      return (e = 6686), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
