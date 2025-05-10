// Netlify配置文件
// 这个文件帮助Netlify正确处理Astro静态网站

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Netlify配置文件" })
  };
};
