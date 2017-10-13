var db = new Mongo().getDB("storeact");

db.items.remove({});

var date = new Date();
db.items.insert([
  {name: 'Parker Printed Shirt Navy', brand: 'MARCCETTI', price: 699, category: 'shirts', imgUrl: 'https://cdn.stayhard.com/storage/ma/7e2e930278c24297a47d7cac9ce474b7/9b7433c6349f47a1ac821981aa74ec58/1188-1438-0-jpg.Jpeg/E84F1A57F625D5603833265B0FD2E72C1972D886/11271255_display.jpeg', date: date},
  {name: 'Tim Superslim Black', brand: 'William Baxter', price: 454, category: 'bottoms', imgUrl: 'https://cdn.stayhard.com/storage/ma/71c26a7eb6704094aabbcbba268b7d9a/6cb905be050b4e788973252f2ecd589b/1188-1437-0-jpg.Jpeg/A1D0D95E1EABFA0D5B752A1380654AD8412F5DBF/13235212_display.jpeg', date: date},
  {name: 'X Sweater', brand: 'Speechless', price: 399, category: 'sweaters', imgUrl: 'https://cdn.stayhard.com/storage/ma/62bf51c2e8a540b3a5abc620ac20ab7f/f6b50a2c5c074a4cad0e1312eb0ecd20/1188-1437-0-jpg.Jpeg/DCC9DC758DE5313BE2A04358605C52C06CE037E8/11271180_display.jpeg', date: date},
  {name: 'Rob Demin Shirt Blue', brand: 'William Baxter', price: 499, category: 'shirts', imgUrl: 'https://cdn.stayhard.com/storage/ma/a1026af0fd92497c832f26e8fdb63bc1/06097f42c345496dbac20fd4bfa5a650/1188-1438-0-jpg.Jpeg/4B3C0D3AB26647900DDDE5AEBD9638F6BEC7D280/11271149_display.jpeg', date: date},
  {name: 'Carl O-Neck 59 Old Blue', brand: 'Morris', price: 1299, category: 'sweaters', imgUrl: 'https://cdn.stayhard.com/storage/ma/84c15f4e18af473da98d7a0c259ea6b9/c5c05ca557434c9fbd6caa0fabbc80ee/1188-1438-0-jpg.Jpeg/37F8AD946F20013C060103A2ED94346041AE334B/11161230_display.jpeg', date: date},
  {name: 'Gavinton Field Jacket Sand', brand: 'Henri Lloyd', price: 2499, category: 'jackets', imgUrl: 'https://cdn.stayhard.com/storage/ma/536eadf0e0ac4448b9cdd341ed623f77/9a89fa505e8f4a14a055b4df90d0cc4d/1188-1438-0-jpg.Jpeg/3A16E38B093FC15EF1679A6A96338885B361A15A/05851449_display.jpeg', date: date}
]);