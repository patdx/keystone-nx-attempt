(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [323],
  {
    2323: function (e, t, i) {
      'use strict';
      i.d(t, {
        p: function () {
          return N;
        },
      });
      var l = i(4390),
        a = i(9505),
        n = i.n(a),
        o = i(3537),
        d = i(6653),
        r = i(1902),
        s = i(6970),
        u = i(1053),
        c = i(6238),
        m = i(2129),
        g = i(1770),
        v = i(6494),
        h = i(5581),
        p = i(5638),
        f = i(3169),
        y = i(9290),
        Z = i(9693),
        w = i(9265),
        x = (i(3249), i(3983)),
        b = i(3224),
        k = i(2716),
        F = i(2271),
        C = i(9759),
        $ = i(9835),
        E = i(7572),
        M = (i(5500), i(2172));
      i(9294),
        i(3852),
        i(7453),
        i(1839),
        i(5725),
        i(938),
        i(3973),
        i(9948),
        i(1183),
        i(9059),
        i(2550),
        i(6837),
        i(9690);
      const D = ['children'],
        I = (e) => {
          let { children: t } = e,
            i = (0, M.Z)(e, D);
          return (0, u.tZ)(
            'div',
            (0, l.Z)({ css: { minWidth: 0, maxWidth: 1080 } }, i),
            t
          );
        };
      function S(e) {
        const t = (0, r.useRef)(e),
          i = (0, r.useCallback)(function () {
            return t.current(...arguments);
          }, []);
        return (
          (0, r.useEffect)(() => {
            t.current = e;
          }),
          i
        );
      }
      function T(e) {
        var t, i, l;
        let {
          listKey: a,
          itemGetter: n,
          selectedFields: o,
          fieldModes: d,
          showDelete: s,
        } = e;
        const c = (0, C.sm)(a),
          [m, { loading: g, error: v, data: h }] = (0, b.D)(
            k.Ps`mutation ($data: ${c.gqlNames.updateInputName}!, $id: ID!) {
      item: ${c.gqlNames.updateMutationName}(where: { id: $id }, data: $data) {
        ${o}
      }
    }`,
            { errorPolicy: 'all' }
          );
        n =
          null !==
            (t = (0, r.useMemo)(() => {
              if (h)
                return (0, Z.m)(
                  h,
                  null === v || void 0 === v ? void 0 : v.graphQLErrors
                ).get('item');
            }, [h, v])) && void 0 !== t
            ? t
            : n;
        const [f, y] = (0, r.useState)(() => ({
          value: (0, x.d)(c.fields, n),
          item: n,
        }));
        if (
          !g &&
          f.item.data !== n.data &&
          (n.errors || []).every((e) => {
            var t;
            return (
              1 !== (null === (t = e.path) || void 0 === t ? void 0 : t.length)
            );
          })
        ) {
          const e = (0, x.d)(c.fields, n);
          y({ value: e, item: n });
        }
        const { changedFields: F, dataForUpdate: $ } = (0, x.u)(
            c.fields,
            f.item,
            f.value
          ),
          M = (0, x.a)(c.fields, f.value),
          [D, I] = (0, r.useState)(!1),
          T = (0, p.e)(),
          N = S(() => {
            const e = 0 !== M.size;
            I(e),
              e ||
                m({ variables: { data: $, id: f.item.get('id').data } })
                  .then((e) => {
                    let { errors: t } = e;
                    const i =
                      null === t || void 0 === t
                        ? void 0
                        : t.find((e) => {
                            var t;
                            return (
                              1 ===
                              (null === (t = e.path) || void 0 === t
                                ? void 0
                                : t.length)
                            );
                          });
                    i
                      ? T.addToast({
                          title: 'Failed to update item',
                          tone: 'negative',
                          message: i.message,
                        })
                      : T.addToast({
                          tone: 'positive',
                          title: 'Saved successfully',
                        });
                  })
                  .catch((e) => {
                    T.addToast({
                      title: 'Failed to update item',
                      tone: 'negative',
                      message: e.message,
                    });
                  });
          }),
          R =
            null === (i = f.item.data) || void 0 === i
              ? void 0
              : i[c.labelField],
          L = null === (l = f.item.data) || void 0 === l ? void 0 : l.id;
        return (0, u.tZ)(
          u.xu,
          { marginTop: 'xlarge' },
          (0, u.tZ)(E.G, {
            networkError: null === v || void 0 === v ? void 0 : v.networkError,
            errors:
              null === v || void 0 === v
                ? void 0
                : v.graphQLErrors.filter((e) => {
                    var t;
                    return (
                      1 ===
                      (null === (t = e.path) || void 0 === t
                        ? void 0
                        : t.length)
                    );
                  }),
          }),
          (0, u.tZ)(w.F, {
            fieldModes: d,
            fields: c.fields,
            forceValidation: D,
            invalidFields: M,
            onChange: (0, r.useCallback)(
              (e) => {
                y((t) => ({ item: t.item, value: e(t.value) }));
              },
              [y]
            ),
            value: f.value,
          }),
          (0, u.tZ)(z, {
            onSave: N,
            hasChangedFields: !!F.size,
            onReset: S(() => {
              y((e) => ({ item: e.item, value: (0, x.d)(c.fields, e.item) }));
            }),
            loading: g,
            deleteButton: (0, r.useMemo)(
              () =>
                s
                  ? (0, u.tZ)(q, {
                      list: c,
                      itemLabel: null !== R && void 0 !== R ? R : L,
                      itemId: L,
                    })
                  : void 0,
              [s, c, R, L]
            ),
          })
        );
      }
      function q(e) {
        let { itemLabel: t, itemId: i, list: l } = e;
        const a = (0, p.e)(),
          [n, { loading: o }] = (0, b.D)(
            k.Ps`mutation ($id: ID!) {
      ${l.gqlNames.deleteMutationName}(where: { id: $id }) {
        id
      }
    }`,
            { variables: { id: i } }
          ),
          [c, m] = (0, r.useState)(!1),
          g = (0, d.useRouter)();
        return (0, u.tZ)(
          r.Fragment,
          null,
          (0, u.tZ)(
            s.zx,
            {
              tone: 'negative',
              onClick: () => {
                m(!0);
              },
            },
            'Delete'
          ),
          (0, u.tZ)(
            v.aR,
            {
              title: 'Delete Confirmation',
              isOpen: c,
              tone: 'negative',
              actions: {
                confirm: {
                  label: 'Delete',
                  action: async () => {
                    try {
                      await n();
                    } catch (e) {
                      return a.addToast({
                        title: `Failed to delete ${l.singular} item: ${t}`,
                        message: e.message,
                        tone: 'negative',
                      });
                    }
                    return (
                      g.push(`/${l.path}`),
                      a.addToast({
                        title: t,
                        message: `Deleted ${l.singular} item successfully`,
                        tone: 'positive',
                      })
                    );
                  },
                  loading: o,
                },
                cancel: {
                  label: 'Cancel',
                  action: () => {
                    m(!1);
                  },
                },
              },
            },
            'Are you sure you want to delete ',
            (0, u.tZ)('strong', null, t),
            '?'
          )
        );
      }
      const N = (e) => () => (0, u.tZ)(R, e),
        R = (e) => {
          var t, i, a, v;
          let { listKey: p } = e;
          const w = (0, d.useRouter)(),
            { id: x } = w.query,
            b = (0, C.sm)(p),
            { palette: M, spacing: D, typography: S } = (0, u.Fg)(),
            { query: q, selectedFields: N } = (0, r.useMemo)(() => {
              let e = Object.entries(b.fields)
                .filter((e) => {
                  let [t, i] = e;
                  return 'hidden' !== i.itemView.fieldMode || 'id' === t;
                })
                .map((e) => {
                  let [t] = e;
                  return b.fields[t].controller.graphqlSelection;
                })
                .join('\n');
              return {
                selectedFields: e,
                query: k.Ps`
        query ItemPage($id: ID!, $listKey: String!) {
          item: ${b.gqlNames.itemQueryName}(where: {id: $id}) {
            ${e}
          }
          keystone {
            adminMeta {
              list(key: $listKey) {
                hideCreate
                hideDelete
                fields {
                  path
                  itemView(id: $id) {
                    fieldMode
                  }
                }
              }
            }
          }
        }
      `,
              };
            }, [b]);
          let {
            data: R,
            error: z,
            loading: P,
          } = (0, F.a)(q, {
            variables: { id: x, listKey: p },
            errorPolicy: 'all',
            skip: void 0 === x,
          });
          P || (P = void 0 === x);
          const Q = (0, Z.m)(
            R,
            null === z || void 0 === z ? void 0 : z.graphQLErrors
          );
          let V = (0, r.useMemo)(() => {
            var e, t, i, l, a;
            let n = {};
            return (
              null === (e = Q.data) ||
                void 0 === e ||
                null === (t = e.keystone) ||
                void 0 === t ||
                null === (i = t.adminMeta) ||
                void 0 === i ||
                null === (l = i.list) ||
                void 0 === l ||
                null === (a = l.fields) ||
                void 0 === a ||
                a.forEach((e) => {
                  var t;
                  null !== e &&
                    null !== e.path &&
                    null !=
                      (null === e ||
                      void 0 === e ||
                      null === (t = e.itemView) ||
                      void 0 === t
                        ? void 0
                        : t.fieldMode) &&
                    (n[e.path] = e.itemView.fieldMode);
                }),
              n
            );
          }, [
            null === (t = Q.data) ||
            void 0 === t ||
            null === (i = t.keystone) ||
            void 0 === i ||
            null === (a = i.adminMeta) ||
            void 0 === a ||
            null === (v = a.list) ||
            void 0 === v
              ? void 0
              : v.fields,
          ]);
          const X = Q.get('keystone').errors,
            O = P
              ? void 0
              : (R && R.item && (R.item[b.labelField] || R.item.id)) || x;
          return (0, u.tZ)(
            $.P,
            {
              title: O,
              header: (0, u.tZ)(
                I,
                {
                  css: {
                    alignItems: 'center',
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                  },
                },
                (0, u.tZ)(
                  'div',
                  {
                    css: {
                      alignItems: 'center',
                      display: 'flex',
                      flex: 1,
                      minWidth: 0,
                    },
                  },
                  (0, u.tZ)(
                    u.X6,
                    { type: 'h3' },
                    (0, u.tZ)(
                      o.default,
                      { href: `/${b.path}`, passHref: !0 },
                      (0, u.tZ)(
                        'a',
                        { css: { textDecoration: 'none' } },
                        b.label
                      )
                    )
                  ),
                  (0, u.tZ)(
                    'div',
                    {
                      css: {
                        color: M.neutral500,
                        marginLeft: D.xsmall,
                        marginRight: D.xsmall,
                      },
                    },
                    (0, u.tZ)(g.X, null)
                  ),
                  (0, u.tZ)(
                    u.X6,
                    {
                      as: 'h1',
                      type: 'h3',
                      css: {
                        minWidth: 0,
                        maxWidth: '100%',
                        overflow: 'hidden',
                        flex: 1,
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      },
                    },
                    P
                      ? 'Loading...'
                      : (R && R.item && (R.item[b.labelField] || R.item.id)) ||
                          x
                  )
                ),
                !1
              ),
            },
            P
              ? (0, u.tZ)(
                  u.M5,
                  { css: { height: `calc(100vh - ${$.H}px)` } },
                  (0, u.tZ)(c.xg, {
                    label: 'Loading item data',
                    size: 'large',
                    tone: 'passive',
                  })
                )
              : X
              ? (0, u.tZ)(
                  u.xu,
                  { marginY: 'xlarge' },
                  (0, u.tZ)(h.qX, { tone: 'negative' }, X[0].message)
                )
              : (0, u.tZ)(
                  L,
                  null,
                  null == (null === R || void 0 === R ? void 0 : R.item)
                    ? (0, u.tZ)(
                        u.xu,
                        { marginY: 'xlarge' },
                        (null !== z &&
                          void 0 !== z &&
                          z.graphQLErrors.length) ||
                          (null !== z && void 0 !== z && z.networkError)
                          ? (0, u.tZ)(E.G, {
                              errors:
                                null === z || void 0 === z
                                  ? void 0
                                  : z.graphQLErrors,
                              networkError:
                                null === z || void 0 === z
                                  ? void 0
                                  : z.networkError,
                            })
                          : (0, u.tZ)(
                              h.qX,
                              { tone: 'negative' },
                              'The item with id "',
                              x,
                              '" could not be found or you don\'t have access to it.'
                            )
                      )
                    : (0, u.tZ)(
                        r.Fragment,
                        null,
                        (0, u.tZ)(T, {
                          fieldModes: V,
                          selectedFields: N,
                          showDelete: !R.keystone.adminMeta.list.hideDelete,
                          listKey: p,
                          itemGetter: Q.get('item'),
                        }),
                        (0, u.tZ)(
                          K,
                          null,
                          (0, u.tZ)(y.Qy, null, 'Item ID'),
                          (0, u.tZ)(
                            'div',
                            { css: { display: 'flex', alignItems: 'center' } },
                            (0, u.tZ)(y.oi, {
                              css: {
                                marginRight: D.medium,
                                fontFamily: S.fontFamily.monospace,
                                fontSize: S.fontSize.small,
                              },
                              readOnly: !0,
                              value: R.item.id,
                            }),
                            (0, u.tZ)(f.u, { content: 'Copy ID' }, (e) =>
                              (0, u.tZ)(
                                s.zx,
                                (0, l.Z)({}, e, {
                                  'aria-label': 'Copy ID',
                                  onClick: () => {
                                    n()(R.item.id);
                                  },
                                }),
                                (0, u.tZ)(m.K, { size: 'small' })
                              )
                            )
                          )
                        )
                      )
                )
          );
        },
        z = (0, r.memo)(function (e) {
          let {
            hasChangedFields: t,
            loading: i,
            onSave: l,
            onReset: a,
            deleteButton: n,
          } = e;
          const { colors: o, spacing: d } = (0, u.Fg)();
          return (0,
          u.tZ)('div', { css: { background: o.background, borderTop: `1px solid ${o.border}`, bottom: 0, display: 'flex', justifyContent: 'space-between', marginTop: d.xlarge, paddingBottom: d.xlarge, paddingTop: d.xlarge, position: 'sticky', zIndex: 10 } }, (0, u.tZ)(u.Kq, { align: 'center', across: !0, gap: 'small' }, (0, u.tZ)(s.zx, { isDisabled: !t, isLoading: i, weight: 'bold', tone: 'active', onClick: l }, 'Save changes'), t ? (0, u.tZ)(s.zx, { weight: 'none', onClick: a }, 'Reset changes') : (0, u.tZ)(u.xv, { weight: 'medium', paddingX: 'large', color: 'neutral600' }, 'No changes')), n);
        }),
        L = (e) => {
          const { spacing: t } = (0, u.Fg)();
          return (0, u.tZ)(
            I,
            { css: { position: 'relative', height: '100%' } },
            (0, u.tZ)(
              'div',
              (0, l.Z)(
                {
                  css: {
                    alignItems: 'start',
                    display: 'grid',
                    gap: t.xlarge,
                    gridTemplateColumns: '2fr 1fr',
                  },
                },
                e
              )
            )
          );
        },
        K = (e) => {
          const { spacing: t } = (0, u.Fg)();
          return (0, u.tZ)(
            'div',
            (0, l.Z)(
              {
                css: {
                  marginTop: t.xlarge,
                  marginBottom: t.xxlarge,
                  position: 'sticky',
                  top: t.xlarge,
                },
              },
              e
            )
          );
        };
    },
    2129: function (e, t, i) {
      'use strict';
      i.d(t, {
        K: function () {
          return n;
        },
      });
      var l = i(1902),
        a = i(5311);
      i(1053);
      const n = (0, a.c)(
        l.createElement(
          l.Fragment,
          null,
          l.createElement('path', {
            d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
          }),
          l.createElement('rect', {
            x: 8,
            y: 2,
            width: 8,
            height: 4,
            rx: 1,
            ry: 1,
          })
        ),
        'ClipboardIcon'
      );
    },
    9505: function (e) {
      function t() {
        return new DOMException(
          'The request is not allowed',
          'NotAllowedError'
        );
      }
      e.exports = async function (e) {
        try {
          await (async function (e) {
            if (!navigator.clipboard) throw t();
            return navigator.clipboard.writeText(e);
          })(e);
        } catch (i) {
          try {
            await (async function (e) {
              const i = document.createElement('span');
              (i.textContent = e),
                (i.style.whiteSpace = 'pre'),
                (i.style.webkitUserSelect = 'auto'),
                (i.style.userSelect = 'all'),
                document.body.appendChild(i);
              const l = window.getSelection(),
                a = window.document.createRange();
              l.removeAllRanges(), a.selectNode(i), l.addRange(a);
              let n = !1;
              try {
                n = window.document.execCommand('copy');
              } finally {
                l.removeAllRanges(), window.document.body.removeChild(i);
              }
              if (!n) throw t();
            })(e);
          } catch (l) {
            throw l || i || t();
          }
        }
      };
    },
  },
]);
