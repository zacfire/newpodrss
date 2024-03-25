import RSSParser from 'rss-parser';

export default async (req, res) => {
  const parser = new RSSParser();
  const { url } = req.query;
  
  try {
    const feed = await parser.parseURL(url);
    res.status(200).json(feed);
  } catch (error) {
    res.status(500).json({ error: '解析RSS失败' });
  }
};
