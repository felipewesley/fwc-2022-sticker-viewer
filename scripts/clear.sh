mkdir ../temp

mv ../assets ../temp
rm ../*.js ../temp
rm ../*.txt ../temp
rm ../*.html ../temp
rm ../*.css ../temp

CONF_FILE=../temp/*.conf.js
if test -f "$CONF_FILE"; then
    mv ../temp/*.conf.js ../
fi

# git add .
# git commit -m "Old build removed"
# git push