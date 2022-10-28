mkdir ../temp

mv ../assets ../temp
mv ../*.js ../temp
mv ../*.txt ../temp
mv ../*.html ../temp
mv ../*.css ../temp

CONF_FILE=../temp/*.conf.js
if test -f "$CONF_FILE"; then
    mv ../temp/*.conf.js ../
fi

# git add .
# git commit -m "Old build removed"
# git push