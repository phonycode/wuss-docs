sudo npm run docs:build

cd docs/.vuepress/dist

sudo git init
sudo git add -A
sudo git commit -m 'deploy'

sudo git push -f git@github.com:phonycode/wuss-weapp.git master:gh-pages
