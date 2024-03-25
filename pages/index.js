import { useState } from 'react';

export default function Home() {
  const [rssUrl, setRssUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 在这里，您可以添加逻辑来处理RSS URL，例如使用fetch API请求后端API
    console.log(rssUrl);
    // 示例：fetch(`/api/parse-rss?url=${encodeURIComponent(rssUrl)}`)
  };

  return (
    <div>
      <h1>创建我的播客RSS</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={rssUrl}
          onChange={(e) => setRssUrl(e.target.value)}
          placeholder="输入RSS链接"
          required
        />
        <button type="submit">获取播客节目</button>
      </form>
    </div>
  );
}
