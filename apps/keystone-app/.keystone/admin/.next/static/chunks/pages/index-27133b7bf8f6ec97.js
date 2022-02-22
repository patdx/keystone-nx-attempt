(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5879: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(5205);
        },
      ]);
    },
    5205: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return v;
          },
        });
      var o = r(4390),
        s = r(1902),
        n = r(1053),
        i = r(4443),
        a = r(6494),
        l = r(6238),
        u = r(9693),
        c = (r(3249), r(5500), r(25)),
        d = r(9835),
        g = r(2716),
        p = r(2271),
        h = r(9759),
        m = r(6837),
        b = r(6653);
      r(5638),
        r(9265),
        r(7572),
        r(5581),
        r(6970),
        r(9059),
        r(2550),
        r(1770),
        r(9690),
        r(3537),
        r(9294),
        r(3852),
        r(7453),
        r(1839),
        r(5725),
        r(938),
        r(3973),
        r(9948),
        r(1183);
      const y = (e) => {
          let { listKey: t, count: r, hideCreate: o } = e;
          const { colors: u, palette: d, radii: g, spacing: p } = (0, n.Fg)(),
            y = (0, h.sm)(t),
            [v, C] = (0, s.useState)(!1),
            Z = (0, b.useRouter)();
          return (0, n.tZ)(
            'div',
            { css: { position: 'relative' } },
            (0, n.tZ)(
              m.rU,
              {
                href: `/${y.path}`,
                css: {
                  backgroundColor: u.background,
                  borderColor: u.border,
                  borderRadius: g.medium,
                  borderWidth: 1,
                  display: 'inline-block',
                  minWidth: 280,
                  padding: p.large,
                  textDecoration: 'none',
                  ':hover': { borderColor: d.blue400 },
                  ':hover h3': { textDecoration: 'underline' },
                },
              },
              (0, n.tZ)(
                'h3',
                { css: { margin: `0 0 ${p.small}px 0` } },
                y.label,
                ' '
              ),
              'success' === r.type
                ? (0, n.tZ)(
                    'span',
                    { css: { color: u.foreground, textDecoration: 'none' } },
                    r.count,
                    ' item',
                    1 !== r.count ? 's' : ''
                  )
                : 'error' === r.type
                ? r.message
                : 'loading' === r.type
                ? (0, n.tZ)(l.xg, {
                    label: `Loading count of ${y.plural}`,
                    size: 'small',
                    tone: 'passive',
                  })
                : 'No access'
            ),
            !1 === o &&
              (0, n.tZ)(
                f,
                {
                  title: `Create ${y.singular}`,
                  disabled: v,
                  onClick: () => {
                    C(!0);
                  },
                },
                (0, n.tZ)(i.p, { size: 'large' }),
                (0, n.tZ)(n.TX, null, 'Create ', y.singular)
              ),
            (0, n.tZ)(
              a.tW,
              { isOpen: v },
              (0, n.tZ)(c.C, {
                listKey: y.key,
                onCreate: (e) => {
                  let { id: t } = e;
                  Z.push(`/${y.path}/${t}`);
                },
                onClose: () => {
                  C(!1);
                },
              })
            )
          );
        },
        f = (e) => {
          const t = (0, n.Fg)();
          return (0, n.tZ)(
            'button',
            (0, o.Z)(
              {
                css: {
                  alignItems: 'center',
                  backgroundColor: t.palette.neutral400,
                  border: 0,
                  borderRadius: t.radii.xsmall,
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  height: 32,
                  justifyContent: 'center',
                  outline: 0,
                  position: 'absolute',
                  right: t.spacing.large,
                  top: t.spacing.large,
                  transition: 'background-color 80ms linear',
                  width: 32,
                  '&:hover, &:focus': {
                    backgroundColor: t.tones.positive.fill[0],
                  },
                },
              },
              e
            )
          );
        },
        v = () => {
          const {
              adminMeta: { lists: e },
              visibleLists: t,
            } = (0, h.jf)(),
            r = (0, s.useMemo)(
              () => g.Ps`
    query {
      keystone {
        adminMeta {
          lists {
            key
            hideCreate
          }
        }
      }
      ${Object.entries(e)
        .map((e) => {
          let [t, r] = e;
          return `${t}: ${r.gqlNames.listQueryCountName}`;
        })
        .join('\n')}
    }`,
              [e]
            );
          let { data: o, error: i } = (0, p.a)(r, { errorPolicy: 'all' });
          const a = (0, u.m)(
            o,
            null === i || void 0 === i ? void 0 : i.graphQLErrors
          );
          return (0, n.tZ)(
            d.P,
            { header: (0, n.tZ)(n.X6, { type: 'h3' }, 'Dashboard') },
            'loading' === t.state
              ? (0, n.tZ)(
                  n.M5,
                  { css: { height: `calc(100vh - ${d.H}px)` } },
                  (0, n.tZ)(l.xg, {
                    label: 'Loading lists',
                    size: 'large',
                    tone: 'passive',
                  })
                )
              : (0, n.tZ)(
                  n.gF,
                  {
                    as: 'ul',
                    gap: 'large',
                    paddingY: 'xlarge',
                    css: { paddingLeft: '0px', marginBottom: '0px' },
                  },
                  'error' === t.state
                    ? (0, n.tZ)(
                        'span',
                        { css: { color: 'red' } },
                        t.error instanceof Error
                          ? t.error.message
                          : t.error[0].message
                      )
                    : Object.keys(e).map((e) => {
                        var r, s;
                        if (!t.lists.has(e)) return null;
                        const i = a.get(e);
                        return (0, n.tZ)(y, {
                          count: o
                            ? i.errors
                              ? { type: 'error', message: i.errors[0].message }
                              : { type: 'success', count: o[e] }
                            : { type: 'loading' },
                          hideCreate:
                            null !==
                              (r =
                                null === o ||
                                void 0 === o ||
                                null ===
                                  (s = o.keystone.adminMeta.lists.find(
                                    (t) => t.key === e
                                  )) ||
                                void 0 === s
                                  ? void 0
                                  : s.hideCreate) &&
                            void 0 !== r &&
                            r,
                          key: e,
                          listKey: e,
                        });
                      })
                )
          );
        };
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return (t = 5879), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
