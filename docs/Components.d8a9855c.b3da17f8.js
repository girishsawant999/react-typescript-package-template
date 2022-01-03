var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {},
  n = e.parcelRequire6330;
n.register('7Wi6b', function (i, o) {
  var d = n('hgEyi');
  n('kHT9D'),
    ('undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : void 0 !== e
      ? e
      : {}
    ).parcelRequire57b1.register('62zQn', function (e, n) {
      var i, o, l;
      (i = e.exports),
        Object.defineProperty(i, '__esModule', { value: !0, configurable: !0 }),
        (o = e.exports),
        (l = () => f),
        Object.defineProperty(o, 'default', {
          get: l,
          set: undefined,
          enumerable: !0,
          configurable: !0
        });
      var f = (e) => d.jsxs('div', { children: ['Hello Lazy Component', e.name] });
    });
});
