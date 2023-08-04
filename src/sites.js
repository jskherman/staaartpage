import { v4 as uuidv4 } from 'uuid';


let sitesDB = [
  {
    id: uuidv4(),
    name: 'google',
    address: 'https://google.com/',
    key: 'go',
    search: 'https://www.google.com/search?q=',
    hues: ['92', '72']
  },
  {
    id: uuidv4(),
    name: 'bing',
    address: 'https://bing.com/',
    key: 'bi',
    search: 'https://www.bing.com/search?q=',
    hues: ['200', '180']
  },
  {
    id: uuidv4(),
    name: 'duckduckgo',
    address: 'https://duckduckgo.com/',
    key: 'dd',
    search: 'https://duckduckgo.com/?q=',
    hues: ['33', '13']
  },
  {
    id: uuidv4(),
    name: 'startpage',
    address: 'https://www.startpage.com/',
    key: 'sp',
    search: 'https://www.startpage.com/do/search?query=',
    hues: ['255', '235']
  },
  {
    id: uuidv4(),
    name: 'telegram',
    address: 'https://web.telegram.org/k/',
    key: 'tg',
    hues: ['200', '180'],
  },
  {
    id: uuidv4(),
    name: 'habitica',
    address: 'https://habitica.com/',
    key: 'ha',
    hues: ['261', '241'],
  },
  {
    id: uuidv4(),
    name: 'b-chatgpt',
    address: 'https://bettergpt.chat/',
    key: 'ai',
    hues: ['349', '329']
  },
  {
    id: uuidv4(),
    name: 'chatgpt',
    address: 'https://chat.openai.com/',
    key: 'oa',
    hues: ['146', '126']
  },
  {
    id: uuidv4(),
    name: 'messenger',
    address: 'https://www.messenger.com/',
    key: 'mx',
    hues: ['311', '265'],
  },
  {
    id: uuidv4(),
    name: 'jskherman',
    address: 'https://www.jskherman.com/',
    key: 'jh',
    hues: ['146', '126'],
  },
  {
    id: uuidv4(),
    name: 'cloudflare',
    address: 'https://dash.cloudflare.com/',
    key: 'cf',
    hues: ['45', '5']
  },
  {
    id: uuidv4(),
    name: 'gmail',
    address: 'https://mail.google.com/mail/u/0',
    key: 'gm',
    search: 'https://mail.google.com/mail/u/0/#search/',
    hues: ['0', '0'],
  },
  {
    id: uuidv4(),
    name: 'outlook',
    address: 'https://outlook.live.com/mail/0/',
    key: 'ol',
    hues: ['216', '206']
  },
  {
    id: uuidv4(),
    name: 'linkedin',
    address: 'https://www.linkedin.com/',
    key: 'li',
    search: 'https://www.linkedin.com/search/results/all/?keywords=',
    hues: ['201', '181']
  },
  {
    id: uuidv4(),
    name: 'github',
    address: 'https://github.com/',
    key: 'gh',
    search: 'https://github.com/search?q=',
    hues: ['500', '480']
  },
  {
    id: uuidv4(),
    name: 'gdrive',
    address: 'https://drive.google.com/drive/u/0/my-drive',
    key: 'gd',
    search: 'https://drive.google.com/drive/u/0/search?q=',
    hues: ['90', '70']
  },
  {
    id: uuidv4(),
    name: 'onedrive',
    address: 'https://onedrive.live.com/',
    key: 'od',
    search: 'https://onedrive.live.com/?qt=search&scope=drive&q=',
    hues: ['206', '186']
  },
  {
    id: uuidv4(),
    name: 'reddit',
    address: 'https://www.reddit.com/',
    key: 'rd',
    search: 'https://www.reddit.com/search?q=',
    hues: ['45', '5']
  },
  {
    id: uuidv4(),
    name: 'discord',
    address: 'https://discord.com/channels/@me',
    key: 'dx',
    hues: ['235', '215']
  },
  {
    id: uuidv4(),
    name: 'youtube',
    address: 'https://www.youtube.com/',
    key: 'yt',
    search: 'https://www.youtube.com/results?search_query=',
    hues: ['360', '340']
  },
  {
    id: uuidv4(),
    name: 'twitch',
    address: 'https://www.twitch.tv/directory',
    key: 'tv',
    hues: ['264', '244']
  },
  {
    id: uuidv4(),
    name: 'spotify',
    address: 'https://open.spotify.com/',
    key: 'sp',
    search: 'https://open.spotify.com/search/',
    hues: ['141', '121']
  },
  {
    id: uuidv4(),
    name: 'deepl',
    address: 'https://www.deepl.com/translator',
    key: 'dl',
    hues: ['90', '90']
  },
  {
    id: uuidv4(),
    name: 'translate',
    address: 'https://translate.google.com/translator',
    key: 'dl',
    search: 'https://translate.google.com/?op=translate&text=',
    hues: ['90', '90']
  },
  {
    id: uuidv4(),
    name: 'devhints',
    address: 'https://devhints.io/',
    key: 'cx',
    hues: ['32', '22']
  },
  {
    id: uuidv4(),
    name: 'stackoverflow',
    address: 'https://stackoverflow.com/',
    key: 'so',
    search: 'https://stackoverflow.com/search?q=',
    hues: ['244', '224']
  },
  {
    id: uuidv4(),
    name: 'wikipedia',
    address: 'https://en.wikipedia.org/',
    key: 'wk',
    search: 'https://en.wikipedia.org/w/index.php?search=',
    hues: ['210', '190']
  },
];

export default sitesDB;