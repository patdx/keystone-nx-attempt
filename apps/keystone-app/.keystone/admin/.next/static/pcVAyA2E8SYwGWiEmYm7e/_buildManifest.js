(self.__BUILD_MANIFEST = (function (s, a) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    '/': ['static/chunks/pages/index-27133b7bf8f6ec97.js'],
    '/_error': ['static/chunks/pages/_error-61b5dabcb69246b1.js'],
    '/init': ['static/chunks/pages/init-995e85582b329b6d.js'],
    '/no-access': ['static/chunks/pages/no-access-ee9114b2e70b1bb9.js'],
    '/posts': [s, 'static/chunks/pages/posts-d920522df0c6860e.js'],
    '/posts/[id]': [a, 'static/chunks/pages/posts/[id]-9da99deb04832da6.js'],
    '/signin': ['static/chunks/pages/signin-395ca2dae967974a.js'],
    '/tags': [s, 'static/chunks/pages/tags-af26942af0b599eb.js'],
    '/tags/[id]': [a, 'static/chunks/pages/tags/[id]-a4d58cb358bfd2bf.js'],
    '/users': [s, 'static/chunks/pages/users-3878260e10a7872c.js'],
    '/users/[id]': [a, 'static/chunks/pages/users/[id]-a80a50c7e07189bb.js'],
    sortedPages: [
      '/',
      '/_app',
      '/_error',
      '/init',
      '/no-access',
      '/posts',
      '/posts/[id]',
      '/signin',
      '/tags',
      '/tags/[id]',
      '/users',
      '/users/[id]',
    ],
  };
})(
  'static/chunks/902-61fdb8634ab0779e.js',
  'static/chunks/323-43c89a883a383f8e.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
