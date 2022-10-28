TEMP_DIR=../tmp

mkdir $TEMP_DIR

mv ../assets $TEMP_DIR
mv ../*.js $TEMP_DIR
mv ../*.txt $TEMP_DIR
mv ../*.html $TEMP_DIR
mv ../*.css $TEMP_DIR

CONF_FILE=$TEMP_DIR/*.conf.js
if test -f "$CONF_FILE"; then
    echo yes
    mv $TEMP_DIR/*.conf.js ../
fi

# git add .
# git commit -m "Old build removed"
# git push