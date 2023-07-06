d=$(date +%Y-%m-%d_%H:%m:%s)
cd dist
git add .
git commit -am 'deploy:'${d}
git push
echo '部署完成：'${d}

open -a "/Applications/Google Chrome.app" http://43.139.185.195:7777/ 
pm2 stop deploy
