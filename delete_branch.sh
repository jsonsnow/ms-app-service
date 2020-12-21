echo $1
echo "删除本地分支$1"
git branch -D $1
echo "删除远端分支$1"
git push origin --delete $1
