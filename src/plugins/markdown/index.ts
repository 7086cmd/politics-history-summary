export default {
  name: 'md-loader',
  transform(source: string, id: string) {
    if (/\.(md)$/.test(id)) {
      console.log('Markdown', source.length, id)
      function replaceAll(base, src, dest) {
        while (base.includes(src)) {
          base.replace(src, dest);
        }
        return base;
      }
      return {
        code: `export default \`${replaceAll(source, '`', '\\`')}\``,
        map: null,
      }
    }
  },
}
