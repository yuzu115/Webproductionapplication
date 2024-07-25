//おみくじの結果データを作成
result = ['大吉','吉','中吉','小吉','凶'];

//配列「result」をコンソールに表示
console.log(result);

//インデックスが「0」の要素をコンソールに表示
console.log(result[0]);

//配列に所属するデータをfor文ですべて表示
for(let i=0;i<result.length;i++)
{
    console.log('index :' + i + 'データ :' + result[i]);
}
