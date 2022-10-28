TEMP_DIR=../tmp
if [ ! -d "$TEMP_DIR" ]; then
    mkdir $TEMP_DIR
fi

CAN_CONTINUE=1

if [[ $(ls $TEMP_DIR | wc -l) -gt "0" ]]; then
    CAN_CONTINUE=0
fi

if [ "$CAN_CONTINUE" -eq "1" ]
then

    echo "Encontrando build atual..."
    mv ../assets $TEMP_DIR
    mv ../*.js $TEMP_DIR
    mv ../*.txt $TEMP_DIR
    mv ../*.html $TEMP_DIR
    mv ../*.css $TEMP_DIR
    mv ../*.png $TEMP_DIR

    # Save config files
    echo "Restaurando arquivos de configuração (.js)..."
    for i in `find $TEMP_DIR -type f -name *.conf.js`; do mv $i ../; done

    # Remove tmp data
    echo "Excluindo build..."
    sh ./temp-clear.sh

    # Commit changes
    # echo "Commitando alterações..."
    # git add .
    # git commit -m "Old build removed"
    # git push

    echo "Exclusão de build concluído."

else

    echo "Não foi possível remover o build atual."
    echo "Diretório TEMP não está vazio."
    echo "Tente sh temp-clear.sh"

fi

echo "Finalizado."