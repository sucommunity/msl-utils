import fs from 'fs';
import assert from 'assert';
import { parseNews } from '../lib';

describe('parseNews', () => {
  it('should return correct number of stories from given root', () => {
    document.body.innerHTML = fs.readFileSync('./test/fixtures/parseNews/standard.html', 'utf-8');
    const newsData = parseNews(document.body);
    assert.equal(newsData.length, 6);
  });

  it('should work on news article sidebars', () => {
    document.body.innerHTML = fs.readFileSync('./test/fixtures/parseNews/newsSidebar.html', 'utf-8');
    const newsData = parseNews(document.body);
    assert.equal(newsData.length, 5, 'returns correct number of articles');
    assert.equal(newsData[0].title, 'Student-Led Supervisor Awards - Nominations Now Open', 'returns correct title');
    assert.equal(newsData[0].imageURL, '/asset/News/6016/nominations-open.jpg?thumbnail_width=200&thumbnail_height=160&resize_type=ResizeFitAllFill', 'returns no image');
  });
});
