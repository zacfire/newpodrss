import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [rssUrl, setRssUrl] = useState('');
  const [episodes, setEpisodes] = useState([]);

  const fetchRSS = async (url) => {
    const response = await fetch(`/api/parse-rss?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    setEpisodes(data.items); // 假设解析后的数据中有一个items数组
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRSS(rssUrl);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>创建我的播客RSS</h1>
        <form onSubmit={handleSubmit} className={styles.description}>
          <input
            type="text"
            value={rssUrl}
            onChange={(e) => setRssUrl(e.target.value)}
            placeholder="输入RSS链接"
            required
            className={styles.code}
          />
          <button type="submit" className={styles.code}>获取播客节目</button>
        </form>
        <ul>
          {episodes.map((episode, index) => (
            <li key={index} className={styles.description}>{episode.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
