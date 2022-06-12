export default {
  name: 'md-loader',
  transform(src: string, id: string) {
    if (/\.(md)$/.test(id)) {
      console.log('Markdown', src.length, id)
      return {
        code: `export default \`${src.replaceAll('`', '\\`')}\``,
        map: null,
      }
    }
  },
}
