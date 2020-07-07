# 模写する上で気づいた点
- id=global-container　の要素を記述する理由としては、メニューアイコンをクリックした時に body 全体を移動させるため。メニューアイコンクリック時に menu-open クラスが付与される

# 実装方針
- 骨組みとなるHTMLを実装する
- スマートフォンのデザインを実装する
- デスクトップのデザインを実装する

# ヘッダ要素について
- 959px 以下の時はメニューアイコンが表示されるがメニューは表示されない
- 960px 以上の時はメニューアイコンが表示されないがメニューは表示される
- nav-trigger: スクロールを検知してヘッダの色合いを変更する要素
- mobile-menu__cover: メニュー画面が開かれた時に画面全体を覆う要素。この領域をクリックするとメニュー画面が閉じる
- ulの各要素を一列にしたい場合は display: flex を指定


# position について
- 各要素はデフォルトで`static`が付与されている。
- `relative`は相対的な位置を指定する場合に付与する。
  - `relative`を付与するケースは以下の２つ。
    - 子要素に`absolute`を付与して決まった位置に配置したい場合。
    - z-index プロパティを用いて要素の重なりを変更したい場合。
- 親要素に relative を付与して子要素に absolute を不要した場合、親要素の高さは 0 となるので注意する。

# z-index について
- 要素の重なりを定義するプロパティ。
- ルートのスタックコンテキストとローカルスタックコンテキストの2種類が存在し、同じコンテキスト内に配置されている要素の間で重なりが定義される。
- あくまで同じ階層のスタックコンテキストの間で比較が行われるのであって、コンテキスト内の要素に z-index が定義されていたとしても階層が異なるため比較されない。
- ローカルスタックコンテキストを生成するには、position プロパティが static 以外かつ z-index プロパティに auto 以外が設定されている必要がある。

# 子要素のテキストを親要素の中心に配置したい場合
- 以下のように子要素の line-height プロパティの値を親要素の値に設定する。この場合 border プロパティで高さ 2px を確保しているので48px を設定している。
- １行で収まるのならばこの設定でよいが、２行以上にわたってしまう場合はこの設定は使用できないので注意。

```scss
&.cubic-3d {
    width: 150px;
    height: 50px;

    & span {
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid $cBlack;
      display: inline-block;
      width: 100%;
      height: 100%;
      
      // 親要素の中央に文字を配置したい場合は、line-height を 親要素の高さに設定する。
      // なお高さには padding の値も含まれるので注意
      line-height: 48px;
    ...
```

# 要素の並び方について
## 要素を横並びにしたい場合

- 子要素の display プロパティに inline-block を指定する。親要素で全体のレイアウトの設定を行う。以下の例は要素を横並びにして中央に配置するような設定である。
```scss
.parent {
    text-align: center;
}

.child {
    display: inline-block;
}
```

## 要素を縦並びにしたい場合
- 親要素に width が設定されている状態で margin の左右の設定を auto にすると子要素が縦並びになる。
```scss
.parent {
    width: 100px;
}

.child {
    margin: 10px auto;
}
```

## 重なりを考慮して要素を配置したい場合
- position プロパティに absolute を設定する。以下は 親要素の中央に子要素を配置する例。

```scss
.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%, 50%);
}
```

## 重なりを考慮せずに横並びに要素を配置する場合

- display プロパティに flex を指定すると要素を横並びにしてくれる。縦並びにしたい場合は flex-direction プロパティに column を指定する。justify-content, align-items プロパティは要素の横方向、および縦方向の配置方法を指定する。flex-direction が column の場合にはそれぞれの設定が逆転する。すなわち justify-content が縦方向の、align-items が横方向の配置の設定に変更される。
```scss
.child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}
```

# 注意点

- アニメーションでいじっているプロパティを transition の制御対象にすると想定通りの挙動を見せない時がある。これを防ぐため、animation-fill-mode の値を none とする。

```scss
.img-zoom {
    width: 100%;
    height: 100%;
    
    .inview & {
        transition: transform 0.3s ease;

        @include animation(
            $name: kf-img-show,
            $duration: 1.6s,
            $timing-function: ease-in-out,
            
            // 余計なことはしない
            $fill-mode: none
        );

        &:hover {
            transform: scale(1.3);
        }
    }
}

@keyframes kf-img-show {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    50.1% {
        opacity: 1;
        transform: scale(1.5);
    }
    100% {
        opacity: 1;
    }
}
```

- inline 要素に transform プロパティは適用できない。特に span タグを使用する時には気をつける。
  - https://7cc.hatenadiary.jp/entry/transformable-elements
  - https://myscreate.com/pseudo-untransformable/