// Netlify配置文件
module.exports = {
  // 处理重定向和路由
  redirects: [
    {
      from: '/*',
      to: '/index.html',
      status: 200
    }
  ],
  
  // 处理头信息
  headers: [
    {
      for: '/*',
      values: {
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
      }
    }
  ]
};
