請大家在 Dev/xxx 分支研發, 做好的 merge 到 Developer

- Master (主線)
- Developer (研發支線)
- Dev/aaa
- Dev/bbb
- Dev/ccc

```
git switch developer
```

或是

```
git switch 你的分支
```

製作完成後推到 developer 確認有沒有衝突

```
git add .
git-cz
```

切換到主線

```
git switch master
master merge developer
git push
npm run deploy
```

## Coding tool

- ramda <https://ramdajs.com/>

## Css

- tailwindcss <https://tailwindcss.com/>

## Stage management

- zustand <https://github.com/pmndrs/zustand>

## icons

- hero icons
- <https://heroicons.com/>
- <https://github.com/tailwindlabs/heroicons>

## vscode extensions

- css 認識 tailwindcss 的 rule <https://marketplace.visualstudio.com/items?itemName=csstools.postcss>
