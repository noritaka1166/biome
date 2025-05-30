/* should not generate diagnostics */
const foo = bar.trimStart();
const foo = bar.trimEnd();
bar.trimStart?.()
foo.trimStart(),
foo.trimStart?.(),
foo.trimEnd(),
// Not `CallExpression`
new foo.trimLeft();,
// Not `MemberExpression`
trimLeft();,
// `callee.property` is not a `Identifier`
foo[\'trimLeft\']();',
// Computed
foo[trimLeft]();,
// Not `trimLeft`/`trimRight`
foo.bar();,
// More argument(s)
foo.trimLeft(extra);,
foo.trimLeft(...argumentsArray),
// `trimLeft` is in argument
foo.bar(trimLeft),
foo.bar(foo.trimLeft),
// `trimLeft` is in `MemberExpression.object`
trimLeft.foo(),
foo.trimLeft.bar(),
bar['trimStart']()
bar["trimStart"]()
bar[`trimStart`]()
