var findWords = function(board, words) {
  let res = [];
  let root = buildTrie(words);
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          dfs (board, i, j, root, res);
      }
  }
  return res;
}

var dfs = function(board, i, j, p, res) {
  let c = board[i][j];
  if (c == '#' || p.next[c] == null) return;
  p = p.next[c];
  if (p.word != null) {   // found one
      res.push(p.word);
      p.word = null;     // de-duplicate
  }
  board[i][j] = '#';
  if (i > 0) dfs(board, i - 1, j ,p, res); 
  if (j > 0) dfs(board, i, j - 1, p, res);
  if (i < board.length - 1) dfs(board, i + 1, j, p, res); 
  if (j < board[0].length - 1) dfs(board, i, j + 1, p, res); 
  board[i][j] = c;
}

var buildTrie = function(words) {
  let root = new TrieNode();
  for ( let i = 0; i < words.length; i++) {
    let p = root;
      for (let c = 0; c < words[i].length; c++) {
          if (p.next[words[i][c]] == undefined) {
            p.next[words[i][c]] = new TrieNode();
          }
          p = p.next[words[i][c]];
      }
     p.word = words[i];
  }
  return root;
}

class TrieNode {
constructor() {
  this.next = {};
  this.word = null;
}
}

let board = [
['o','a','a','n'],
['e','t','a','e'],
['i','h','k','r'],
['i','f','l','v']
];

let words = ["oath","pea","eat","rain"];

// returns ['oath', 'eat']

findWords(board, words)