const prefix = process.env.NODE_ENV === 'development' ? '/api' : '';

export default {
  downloadLogbackXml: prefix + '/logback/downloadXml'
}
