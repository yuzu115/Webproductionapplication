let proctice = document.getElementById('practice');
practice.innerHTML = '<h1>れんしゅう</h1>';
practice.style.backgroundColor = '#999999';
practice.style.fontSize = '30px';
practice.style.color = '#FFFFFF';

//要素を追加します
let first = document.createElement('div');
first.setAttribute('id', 'first');
first.innerHTML = '<p>要素を追加</p>';
practice.insertBefore(first, null);

//さらに要素を追加します
let second = document.createElement('div');
second.setAttribute('id', 'second');
second.innerHTML = '<p>さらに要素を追加</p>';
practice.insertBefore(second, first);

//要素を削除します
let parent = first.parentElement;
parent.removeChild(first);