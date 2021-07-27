export const text = `<p>Use an integrated toolchain for the best user and developer experience.</p>\<p>This page describes a few popular React toolchains which help with tasks like:</p>\<ul>\<li>Scaling to many files and components.</li>\<li>Using third-party libraries from npm.</li>\<li>Detecting common mistakes early.</li>\<li>Live-editing CSS and JS in development.</li>\<li>Optimizing the output for production.</li>\</ul>\<p>The toolchains recommended on this page <strong>don’t require configuration to get started</strong>.</p>\<h2 id=\\"you-might-not-need-a-toolchain\\"><a href=\\"#you-might-not-need-a-toolchain\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>You Might Not Need a Toolchain </h2>\<p>If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet, consider <a href=\\"/docs/add-react-to-a-website.html\\">adding React as a plain <code class=\\"gatsby-code-text\\">&lt;script&gt;</code> tag on an HTML page</a>, optionally <a href=\\"/docs/add-react-to-a-website.html#optional-try-react-with-jsx\\">with JSX</a>.</p>\<p>This is also <strong>the easiest way to integrate React into an existing website.</strong> You can always add a larger toolchain if you find it helpful!</p>\<h2 id=\\"recommended-toolchains\\"><a href=\\"#recommended-toolchains\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Recommended Toolchains </h2>\<p>The React team primarily recommends these solutions:</p>\<ul>\<li>If you’re <strong>learning React</strong> or <strong>creating a new <a href=\\"/docs/glossary.html#single-page-application\\">single-page</a> app,</strong> use <a href=\\"#create-react-app\\">Create React App</a>.</li>\<li>If you’re building a <strong>server-rendered website with Node.js,</strong> try <a href=\\"#nextjs\\">Next.js</a>.</li>\<li>If you’re building a <strong>static content-oriented website,</strong> try <a href=\\"#gatsby\\">Gatsby</a>.</li>\<li>If you’re building a <strong>component library</strong> or <strong>integrating with an existing codebase</strong>, try <a href=\\"#more-flexible-toolchains\\">More Flexible Toolchains</a>.</li>\</ul>\<h3 id=\\"create-react-app\\"><a href=\\"#create-react-app\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Create React App </h3>\<p><a href=\\"https://github.com/facebookincubator/create-react-app\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Create React App</a> is a comfortable environment for <strong>learning React</strong>, and is the best way to start building <strong>a new <a href=\\"/docs/glossary.html#single-page-application\\">single-page</a> application</strong> in React.</p>\<p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have <a href=\\"https://nodejs.org/en/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Node &gt;= 10.16 and npm &gt;= 5.6</a> on your machine. To create a project, run:</p>\<div class=\\"gatsby-highlight\\" data-language=\\"bash\\"><pre class=\\"gatsby-code-bash\\"><code class=\\"gatsby-code-bash\\">npx create-react-app my-app\<span class=\\"token builtin class-name\\">cd</span> my-app\<span class=\\"token function\\">npm</span> start</code></pre></div>\<blockquote>\<p>Note</p>\<p><code class=\\"gatsby-code-text\\">npx</code> on the first line is not a typo — it’s a <a href=\\"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">package runner tool that comes with npm 5.2+</a>.</p>\</blockquote>\<p>Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses <a href=\\"https://babeljs.io/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Babel</a> and <a href=\\"https://webpack.js.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">webpack</a>, but you don’t need to know anything about them.</p>\<p>When you’re ready to deploy to production, running <code class=\\"gatsby-code-text\\">npm run build</code> will create an optimized build of your app in the <code class=\\"gatsby-code-text\\">build</code> folder. You can learn more about Create React App <a href=\\"https://github.com/facebookincubator/create-react-app#create-react-app--\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">from its README</a> and the <a href=\\"https://facebook.github.io/create-react-app/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">User Guide</a>.</p>\<h3 id=\\"nextjs\\"><a href=\\"#nextjs\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Next.js </h3>\<p><a href=\\"https://nextjs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Next.js</a> is a popular and lightweight framework for <strong>static and server‑rendered applications</strong> built with React. It includes <strong>styling and routing solutions</strong> out of the box, and assumes that you’re using <a href=\\"https://nodejs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Node.js</a> as the server environment.</p>\<p>Learn Next.js from <a href=\\"https://nextjs.org/learn/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">its official guide</a>.</p>\<h3 id=\\"gatsby\\"><a href=\\"#gatsby\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Gatsby </h3>\<p><a href=\\"https://www.gatsbyjs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Gatsby</a> is the best way to create <strong>static websites</strong> with React. It lets you use React components, but outputs pre-rendered HTML and CSS to guarantee the fastest load time.</p>\<p>Learn Gatsby from <a href=\\"https://www.gatsbyjs.org/docs/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">its official guide</a> and a <a href=\\"https://www.gatsbyjs.org/docs/gatsby-starters/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">gallery of starter kits</a>.</p>\<h3 id=\\"more-flexible-toolchains\\"><a href=\\"#more-flexible-toolchains\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>More Flexible Toolchains </h3>\<p>The following toolchains offer more flexibility and choice. We recommend them to more experienced users:</p>\<ul>\<li><strong><a href=\\"https://neutrinojs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Neutrino</a></strong> combines the power of <a href=\\"https://webpack.js.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">webpack</a> with the simplicity of presets, and includes a preset for <a href=\\"https://neutrinojs.org/packages/react/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">React apps</a> and <a href=\\"https://neutrinojs.org/packages/react-components/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">React components</a>.</li>\<li><strong><a href=\\"https://nx.dev/react\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Nx</a></strong> is a toolkit for full-stack monorepo development, with built-in support for React, Next.js, <a href=\\"https://expressjs.com/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Express</a>, and more.</li>\<li><strong><a href=\\"https://parceljs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Parcel</a></strong> is a fast, zero configuration web application bundler that <a href=\\"https://parceljs.org/recipes.html#react\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">works with React</a>.</li>\<li><strong><a href=\\"https://github.com/jaredpalmer/razzle\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Razzle</a></strong> is a server-rendering framework that doesn’t require any configuration, but offers more flexibility than Next.js.</li>\</ul>\<h2 id=\\"creating-a-toolchain-from-scratch\\"><a href=\\"#creating-a-toolchain-from-scratch\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Creating a Toolchain from Scratch </h2>\<p>A JavaScript build toolchain typically consists of:</p>\<ul>\<li>A <strong>package manager</strong>, such as <a href=\\"https://yarnpkg.com/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Yarn</a> or <a href=\\"https://www.npmjs.com/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">npm</a>. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.</li>\<li>A <strong>bundler</strong>, such as <a href=\\"https://webpack.js.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">webpack</a> or <a href=\\"https://parceljs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Parcel</a>. It lets you write modular code and bundle it together into small packages to optimize load time.</li>\<li>A <strong>compiler</strong> such as <a href=\\"https://babeljs.io/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Babel</a>. It lets you write modern JavaScript code that still works in older browsers.</li>\</ul>\<p>If you prefer to set up your own JavaScript toolchain from scratch, <a href=\\"https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">check out this guide</a> that re-creates some of the Create React App functionality.</p>\<p>Don’t forget to ensure your custom toolchain <a href=\\"/docs/optimizing-performance.html#use-the-production-build\\">is correctly set up for production</a>.</p><p>Use an integrated toolchain for the best user and developer experience.</p>\<p>This page describes a few popular React toolchains which help with tasks like:</p>\<ul>\<li>Scaling to many files and components.</li>\<li>Using third-party libraries from npm.</li>\<li>Detecting common mistakes early.</li>\<li>Live-editing CSS and JS in development.</li>\<li>Optimizing the output for production.</li>\</ul>\<p>The toolchains recommended on this page <strong>don’t require configuration to get started</strong>.</p>\<h2 id=\\"you-might-not-need-a-toolchain\\"><a href=\\"#you-might-not-need-a-toolchain\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>You Might Not Need a Toolchain </h2>\<p>If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet, consider <a href=\\"/docs/add-react-to-a-website.html\\">adding React as a plain <code class=\\"gatsby-code-text\\">&lt;script&gt;</code> tag on an HTML page</a>, optionally <a href=\\"/docs/add-react-to-a-website.html#optional-try-react-with-jsx\\">with JSX</a>.</p>\<p>This is also <strong>the easiest way to integrate React into an existing website.</strong> You can always add a larger toolchain if you find it helpful!</p>\<h2 id=\\"recommended-toolchains\\"><a href=\\"#recommended-toolchains\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Recommended Toolchains </h2>\<p>The React team primarily recommends these solutions:</p>\<ul>\<li>If you’re <strong>learning React</strong> or <strong>creating a new <a href=\\"/docs/glossary.html#single-page-application\\">single-page</a> app,</strong> use <a href=\\"#create-react-app\\">Create React App</a>.</li>\<li>If you’re building a <strong>server-rendered website with Node.js,</strong> try <a href=\\"#nextjs\\">Next.js</a>.</li>\<li>If you’re building a <strong>static content-oriented website,</strong> try <a href=\\"#gatsby\\">Gatsby</a>.</li>\<li>If you’re building a <strong>component library</strong> or <strong>integrating with an existing codebase</strong>, try <a href=\\"#more-flexible-toolchains\\">More Flexible Toolchains</a>.</li>\</ul>\<h3 id=\\"create-react-app\\"><a href=\\"#create-react-app\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Create React App </h3>\<p><a href=\\"https://github.com/facebookincubator/create-react-app\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Create React App</a> is a comfortable environment for <strong>learning React</strong>, and is the best way to start building <strong>a new <a href=\\"/docs/glossary.html#single-page-application\\">single-page</a> application</strong> in React.</p>\<p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have <a href=\\"https://nodejs.org/en/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Node &gt;= 10.16 and npm &gt;= 5.6</a> on your machine. To create a project, run:</p>\<div class=\\"gatsby-highlight\\" data-language=\\"bash\\"><pre class=\\"gatsby-code-bash\\"><code class=\\"gatsby-code-bash\\">npx create-react-app my-app\<span class=\\"token builtin class-name\\">cd</span> my-app\<span class=\\"token function\\">npm</span> start</code></pre></div>\<blockquote>\<p>Note</p>\<p><code class=\\"gatsby-code-text\\">npx</code> on the first line is not a typo — it’s a <a href=\\"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">package runner tool that comes with npm 5.2+</a>.</p>\</blockquote>\<p>Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses <a href=\\"https://babeljs.io/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Babel</a> and <a href=\\"https://webpack.js.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">webpack</a>, but you don’t need to know anything about them.</p>\<p>When you’re ready to deploy to production, running <code class=\\"gatsby-code-text\\">npm run build</code> will create an optimized build of your app in the <code class=\\"gatsby-code-text\\">build</code> folder. You can learn more about Create React App <a href=\\"https://github.com/facebookincubator/create-react-app#create-react-app--\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">from its README</a> and the <a href=\\"https://facebook.github.io/create-react-app/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">User Guide</a>.</p>\<h3 id=\\"nextjs\\"><a href=\\"#nextjs\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Next.js </h3>\<p><a href=\\"https://nextjs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Next.js</a> is a popular and lightweight framework for <strong>static and server‑rendered applications</strong> built with React. It includes <strong>styling and routing solutions</strong> out of the box, and assumes that you’re using <a href=\\"https://nodejs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Node.js</a> as the server environment.</p>\<p>Learn Next.js from <a href=\\"https://nextjs.org/learn/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">its official guide</a>.</p>\<h3 id=\\"gatsby\\"><a href=\\"#gatsby\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Gatsby </h3>\<p><a href=\\"https://www.gatsbyjs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Gatsby</a> is the best way to create <strong>static websites</strong> with React. It lets you use React components, but outputs pre-rendered HTML and CSS to guarantee the fastest load time.</p>\<p>Learn Gatsby from <a href=\\"https://www.gatsbyjs.org/docs/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">its official guide</a> and a <a href=\\"https://www.gatsbyjs.org/docs/gatsby-starters/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">gallery of starter kits</a>.</p>\<h3 id=\\"more-flexible-toolchains\\"><a href=\\"#more-flexible-toolchains\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>More Flexible Toolchains </h3>\<p>The following toolchains offer more flexibility and choice. We recommend them to more experienced users:</p>\<ul>\<li><strong><a href=\\"https://neutrinojs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Neutrino</a></strong> combines the power of <a href=\\"https://webpack.js.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">webpack</a> with the simplicity of presets, and includes a preset for <a href=\\"https://neutrinojs.org/packages/react/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">React apps</a> and <a href=\\"https://neutrinojs.org/packages/react-components/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">React components</a>.</li>\<li><strong><a href=\\"https://nx.dev/react\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Nx</a></strong> is a toolkit for full-stack monorepo development, with built-in support for React, Next.js, <a href=\\"https://expressjs.com/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Express</a>, and more.</li>\<li><strong><a href=\\"https://parceljs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Parcel</a></strong> is a fast, zero configuration web application bundler that <a href=\\"https://parceljs.org/recipes.html#react\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">works with React</a>.</li>\<li><strong><a href=\\"https://github.com/jaredpalmer/razzle\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Razzle</a></strong> is a server-rendering framework that doesn’t require any configuration, but offers more flexibility than Next.js.</li>\</ul>\<h2 id=\\"creating-a-toolchain-from-scratch\\"><a href=\\"#creating-a-toolchain-from-scratch\\" aria-hidden=\\"\\" class=\\"anchor\\"><svg aria-hidden=\\"true\\" height=\\"16\\" version=\\"1.1\\" viewBox=\\"0 0 16 16\\" width=\\"16\\"><path fill-rule=\\"evenodd\\" d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Creating a Toolchain from Scratch </h2>\<p>A JavaScript build toolchain typically consists of:</p>\<ul>\<li>A <strong>package manager</strong>, such as <a href=\\"https://yarnpkg.com/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Yarn</a> or <a href=\\"https://www.npmjs.com/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">npm</a>. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.</li>\<li>A <strong>bundler</strong>, such as <a href=\\"https://webpack.js.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">webpack</a> or <a href=\\"https://parceljs.org/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Parcel</a>. It lets you write modular code and bundle it together into small packages to optimize load time.</li>\<li>A <strong>compiler</strong> such as <a href=\\"https://babeljs.io/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Babel</a>. It lets you write modern JavaScript code that still works in older browsers.</li>\</ul>\<p>If you prefer to set up your own JavaScript toolchain from scratch, <a href=\\"https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">check out this guide</a> that re-creates some of the Create React App functionality.</p>\<p>Don’t forget to ensure your custom toolchain <a href=\\"/docs/optimizing-performance.html#use-the-production-build\\">is correctly set up for production</a>.</p>`;
